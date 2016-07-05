/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable no-console, global-require */

const fs = require('fs');
const del = require('del');
const cpy = require('cpy');
const path = require('path');
const mkdirp = require('mkdirp');
const webpack = require('webpack');
const cp = require('child_process');

const tasks = new Map();

function run(task) {
  const start = new Date();
  console.log(`Starting '${task}'...`);
  return Promise.resolve().then(() => tasks.get(task)()).then(() => {
    console.log(`Finished '${task}' after ${new Date().getTime() - start.getTime()}ms`);
  }, err => console.error(err.stack));
}

//
// Clean up the output directory
// -----------------------------------------------------------------------------
tasks.set('clean', () => Promise.resolve()
  .then(() => del(['build/*', 'public/dist/*', '!build/.git'], { dot: true }))
  .then(() => {
    mkdirp.sync('build/public/dist');
    mkdirp.sync('public/dist');
  })
);

//
// Compile client-side source code into a distributable format
// -----------------------------------------------------------------------------
tasks.set('bundle', () => {
  const webpackConfig = require('./webpack.config');
  return new Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        reject(err);
      } else {
        console.log(stats.toString(webpackConfig.stats));
        resolve();
      }
    });
  });
});

//
// Copy static files into the output folder
// -----------------------------------------------------------------------------
tasks.set('copy', () => cpy(['public/**/*.*'], 'build', { parents: true }));

//
// Copy ASP.NET application config file for production and development environments
// -----------------------------------------------------------------------------
tasks.set('appsettings', () => new Promise(resolve => {
  const environments = ['Production', 'Development'];
  let count = environments.length;
  const source = require('./server/appsettings.json'); // eslint-disable-line global-require
  delete source.Logging;
  environments.forEach(env => {
    const filename = path.resolve(__dirname, `./server/appsettings.${env}.json`);
    try {
      fs.writeFileSync(filename, JSON.stringify(source, null, '  '), { flag: 'wx' });
    } catch (err) {} // eslint-disable-line no-empty
    if (--count === 0) resolve();
  });
}));


//
// Copy static files into the output folder
// -----------------------------------------------------------------------------
tasks.set('build', () => {
  global.DEBUG = process.argv.includes('--debug') || false;
  return Promise.resolve()
    .then(() => run('clean'))
    .then(() => run('bundle'))
    .then(() => run('copy'))
    .then(() => run('appsettings'))
    .then(() => new Promise((resolve, reject) => {
      const options = { stdio: ['ignore', 'inherit', 'inherit'] };
      const config = global.DEBUG ? 'Debug' : 'Release';
      const args = ['publish', 'server', '-o', 'build', '-c', config, '-r', 'coreclr'];
      cp.spawn('dotnet', args, options).on('close', code => {
        if (code === 0) {
          resolve();
        } else {
          reject(new Error(`dotnet ${args.join(' ')} => ${code} (error)`));
        }
      });
    }));
});


//
// Build and publish web application to Azure Web Apps
// -----------------------------------------------------------------------------
tasks.set('publish', () => {
  global.DEBUG = process.argv.includes('--debug') || false;
  const remote = {
    name: 'azure',
    url: 'https://<user>@<app>.scm.azurewebsites.net:443/<app>.git', // TODO: Update deployment URL
  };
  const opts = { cwd: path.resolve(__dirname, './build'), stdio: ['ignore', 'inherit', 'inherit'] };
  const git = (...args) => new Promise((resolve, reject) => {
    cp.spawn('git', args, opts).on('close', code => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`git ${args.join(' ')} => ${code} (error)`));
      }
    });
  });

  return Promise.resolve()
    .then(() => run('clean'))
    .then(() => git('init', '--quiet'))
    .then(() => git('config', '--get', `remote.${remote.name}.url`)
      .then(() => git('remote', 'set-url', remote.name, remote.url))
      .catch(() => git('remote', 'add', remote.name, remote.url))
    )
    .then(() => git('ls-remote', '--exit-code', remote.url, 'master')
      .then(() => Promise.resolve()
        .then(() => git('fetch', remote.name))
        .then(() => git('reset', `${remote.name}/master`, '--hard'))
        .then(() => git('clean', '--force'))
      )
      .catch(() => Promise.resolve())
    )
    .then(() => run('build'))
    .then(() => git('add', '.', '--all'))
    .then(() => git('commit', '--message', new Date().toUTCString())
      .catch(() => Promise.resolve()))
    .then(() => git('push', 'origin', 'master', '--force', '--set-upstream'));
});

//
// Build website and start watching for modifications
// -----------------------------------------------------------------------------
tasks.set('start', () => {
  global.HMR = !process.argv.includes('--no-hmr'); // Hot Module Replacement (HMR)
  const webpackConfig = require('./webpack.config');
  const bundler = webpack(webpackConfig);
  const bs = require('browser-sync').create();
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  return Promise.resolve()
    .then(() => run('clean'))
    .then(() => run('appsettings'))
    .then(() => new Promise(resolve => {
      const options = {
        cwd: path.resolve(__dirname, './server/'),
        stdio: ['ignore', 'pipe', 'inherit'],
        env: {
          ASPNETCORE_ENVIRONMENT: 'Development',
        },
      };
      cp.spawn('dotnet', ['watch', 'run'], options).stdout.on('data', data => {
        process.stdout.write(data);
        if (data.indexOf('Application started.') !== -1) {
          resolve();
        }
      });
    }))
    .then(() => new Promise(resolve => {
      bs.init({
        proxy: {
          target: 'localhost:5000',
          middleware: [
            webpackDevMiddleware(bundler, {
              // IMPORTANT: dev middleware can't access config, so we should
              // provide publicPath by ourselves
              publicPath: webpackConfig.output.publicPath,

              // pretty colored output
              stats: webpackConfig.stats,

              // for other settings see
              // http://webpack.github.io/docs/webpack-dev-middleware.html
            }),

            // bundler should be the same as above
            webpackHotMiddleware(bundler),
          ],
        },

        // no need to watch '*.js' here, webpack will take care of it for us,
        // including full page reloads if HMR won't work
        files: [
          'public/**/*.css',
          'public/**/*.html',
        ],
      }, resolve);
    }));
});

// Execute the specified task or default one. E.g.: node run build
run(process.argv[2] || 'start');
