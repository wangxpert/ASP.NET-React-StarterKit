# ASP.NET Core Starter Kit &nbsp; ![Status](https://img.shields.io/badge/status-early%20preview-orange.svg?style=flat-square) [![Online Chat](http://img.shields.io/badge/chat-%23aspnet--starter--kit-blue.svg?style=flat-square)](https://gitter.im/kriasoft/aspnet-starter-kit) [![Tips](https://img.shields.io/badge/donate-PayPal-blue.svg?style=flat-square)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DSV6K6LZU2VGW)

> [ASP.NET Core Starter Kit](https://github.com/kriasoft/aspnet-starter-kit) is a real-world
> boilerplate and tooling for creating [single-page web applications](https://en.wikipedia.org/wiki/Single-page_application)
> (SPA) oriented towards [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement)
> design, cross-platform compatability and component-based UI architecture. It is built upon best of
> breed technologies including [.NET Core](https://dot.net/core), [Kestrel](https://github.com/aspnet/KestrelHttpServer),
> [EF Core](https://ef.readthedocs.io/en/latest/), [Babel](http://babeljs.io/), [Webpack](https://webpack.github.io/),
> [React](https://facebook.github.io/react), [Redux](http://redux.js.org/), [CSS Modules](https://github.com/css-modules/css-modules),
> [React Hot Loader](http://gaearon.github.io/react-hot-loader/) and more. This boilerplate comes in
> both [C#](https://github.com/kriasoft/aspnet-starter-kit) and [F#](https://github.com/kriasoft/fsharp-starter-kit) flavors.

**The work is being sponsored by [Rollbar](https://rollbar.com/?utm_source=reactstartkit(github)&utm_medium=link&utm_campaign=reactstartkit(github)) and [Localize](https://localizejs.com/?cid=802&utm_source=rsk):**

<a href="https://rollbar.com/?utm_source=reactstartkit(github)&utm_medium=link&utm_campaign=reactstartkit(github)"><img src="https://koistya.github.io/files/rollbar-x64.png" alt"Rollbar" width="235" height="64"></a>
<a href="https://localizejs.com/?cid=802&utm_source=rsk"><img src="https://koistya.github.io/files/localize-x64.png" alt="Localize" width="291" height="64"></a>


### Features

&nbsp; &nbsp; ✓ Component-based front-end development via [Webpack](https://webpack.github.io/), [CSS Modules](https://github.com/css-modules/css-modules) and [React](https://facebook.github.io/react) (see [`tools/webpack.config.js`](webpack.config.js))<br>
&nbsp; &nbsp; ✓ Modern JavaScript syntax ([ES2015](http://babeljs.io/docs/learn-es2015/)+) via [Babel](http://babeljs.io/); modern CSS syntax (CSS3+) via [PostCSS](https://github.com/postcss/postcss)<br>
&nbsp; &nbsp; ✓ Application state management via [Redux](http://redux.js.org/) (see [`client/core/store.js`](client/core/store.js))<br>
&nbsp; &nbsp; ✓ Universal cross-stack routing and navigation via [`path-to-regexp`](https://github.com/pillarjs/path-to-regexp) and [`history`](https://github.com/ReactJSTraining/history) (see [`client/routes.json`](client/routes.json))<br>
&nbsp; &nbsp; ✓ [Code-splitting](https://github.com/webpack/docs/wiki/code-splitting) and async chunk loading with [Webpack](https://webpack.github.io/) and [ES6 System.import()](http://www.2ality.com/2014/09/es6-modules-final.html)<br>
&nbsp; &nbsp; ✓ Hot Module Replacement ([HMR](https://webpack.github.io/docs/hot-module-replacement.html)) /w [React Hot Loader](http://gaearon.github.io/react-hot-loader/)<br>
&nbsp; &nbsp; ✓ Lightweight build automation with plain JavaScript (see [`run.js`](run.js))<br>
&nbsp; &nbsp; ✓ Cross-device testing with [Browsersync](https://browsersync.io/)<br>
&nbsp; &nbsp; ✓ Git-based deployment to [Azure App Service](https://azure.microsoft.com/services/app-service/) (see [`run.js/publish`](run.js))<br>
&nbsp; &nbsp; ✓ **24/7** community support on [Gitter](https://gitter.im/kriasoft/aspnet-starter-kit) or [StackOverflow](http://stackoverflow.com/questions/tagged/aspnet-starter-kit); customization requests on [Codementor](https://www.codementor.io/koistya)<br>

**See** [demo](https://aspnet-core.azurewebsites.net), [docs](docs) &nbsp;|&nbsp; **Follow us** on
[Gitter](https://gitter.im/kriasoft/aspnet-starter-kit) or [Twitter](https://twitter.com/dotnetreact)


### Directory Layout

```shell
.
├── /.vscode/                   # Visual Studio Code settings
├── /build/                     # The folder for compiled output
├── /client/                    # Client-side app (frontend)
│   ├── /components/            # Common or shared UI components
│   ├── /utils/                 # Helper functions and utility classes
│   ├── /views/                 # UI components for web pages (screens)
│   ├── history.js              # HTML5 History API wrapper used for navigation
│   ├── main.js                 # Entry point that bootstraps the app
│   ├── router.js               # Lightweight application router
│   ├── routes.json             # The list of application routes
│   └── store.js                # Application state manager (Redux)
├── /client.test/               # Unit and integration tests for the frontend app
├── /docs/                      # Documentation to the project
├── /public/                    # Static files such as favicon.ico etc.
│   ├── robots.txt              # Instructions for search engine crawlers
│   └── ...                     # etc.
├── /server/                    # Web server and data API (backend)
│   ├── /Controllers/           # ASP.NET Web API and MVC controllers
│   ├── /Models/                # Entity Framework models (entities)
│   ├── /Views/                 # Server-side rendered views
│   ├── appsettings.json        # Server-side application settings
│   ├── Startup.cs              # Server-side application entry point
│   └── web.config              # Web server settings for IIS
├── /server.test/               # Unit and integration tests for the backend app
│── jsconfig.json               # Visual Studio Code settings for JavaScript
│── package.json                # The list of project dependencies and NPM scripts
│── run.js                      # Build automation script (similar to gulpfile.js)
└── webpack.config.js           # Bundling and optimization settings for Webpack
```


### Prerequisites

* OS X, Windows or Linux
* [Node.js](https://nodejs.org) v6 or newer
* [.NET Core SDK](https://www.microsoft.com/net/core)
* [Visual Studio Code](https://code.visualstudio.com/) with [C# extension](https://github.com/OmniSharp/omnisharp-vscode)


### Getting Started

`1`. Clone the latest version of **ASP.NET Core Starter Kit** on your local machine by running:

```shell
$ git clone -o aspnet-starter-kit -b master --single-branch \
      https://github.com/kriasoft/aspnet-starter-kit.git MyApp
$ cd MyApp
```

Alternatively, scaffold your project with [Yeoman](http://yeoman.io/):

```shell
$ npm install -g yo
$ npm install -g generator-aspnetcore
$ yo aspnetcore
```

`2`. Install project dependencies listed in [`project.json`](server/project.json) and
[`package.json`](package.json) files: 

```shell
$ npm install                   # Install both Node.js and .NET Core dependencies
```

`3`. Finally, launch the web app:

```shell
$ node run                      # Compile and lanch the app, same as running: npm start
```

The app should become available at [http://localhost:5000/](http://localhost:5000/).
See [`run.js`](run.js) for other available commands such as `node run build`, `node run publish` etc.


### How to Deploy

Before you can deploy your app to [Azure App Service](https://azure.microsoft.com/services/app-service/),
you need to open Web App settings in [Azure Portal](https://portal.azure.com/), go to "Deployment
Source", select "Local Git Repository" and hit [OK]. Then copy and paste "Git clone URL" of your
Web App into [`run.js/publish`](run.js) file. Finally, whenever you need to compile your
app into a distributable format and upload that to Windows Azure App Service, simply run:

```shell
$ node run publish              # Same as running: npm run publish
```

### How to Update

We work hard on keeping the project up-to-date and adding new features. Down the road, after
starting a new web application project based on this boilerplate, you can always fetch and merge
the latest changes from this (upstream) repo back into your project by running:

```shell
$ git checkout master
$ git fetch aspnet-starter-kit
$ git merge aspnet-starter-kit/master 
```

Alternatively, pull the latest version of this repository into a separate folder and compare it with
your project by using a diff tool such as [Beyond Compare](http://www.scootersoftware.com/).


### How to Contribute

Anyone and everyone is welcome to [contribute](CONTRIBUTING.md) to this project. The best way to
start is by checking our [open issues](https://github.com/kriasoft/aspnet-starter-kit/issues),
[submit a new issues](https://github.com/kriasoft/aspnet-starter-kit/issues/new?labels=bug) or
[feature request](https://github.com/kriasoft/aspnet-starter-kit/issues/new?labels=enhancement),
participate in discussions, upvote or downvote the issues you like or dislike, send [pull
requests](CONTRIBUTING.md#pull-requests).


### Learn More


* **General**
  * [.NET Core Documentation](https://dotnet.github.io/docs/) (core concepts: CoreFX, CoreCLR, Roslyn, .NET CLI tools etc.)
  * [ASP.NET Core Documentation](https://docs.asp.net/en/latest/) (MVC, Razor, SignalR, Identity, routing, localization, caching etc.)
  * [Entity Framework Core Documenation](https://docs.efproject.net/en/latest/) (providers, models, migrations, EF CLI tools etc.)
  * [Facebook React Documentation](https://facebook.github.io/react/) ([getting started](https://facebook.github.io/react/docs/getting-started.html),
    [thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html), [top-level API](https://facebook.github.io/react/docs/top-level-api.html),
    [component API](https://facebook.github.io/react/docs/component-api.html) etc.)
* **Hosting**
  * [Running ASP.NET Core applications with IIS and Antares (Azure Web Apps)](https://blog.3d-logic.com/2016/06/08/running-asp-net-core-applications-with-iis-and-antares/) by [Pawel Kadluczka](https://blog.3d-logic.com)
  * [How to set up ASP.NET Core DataProtection in a Web Farm](http://www.paraesthesia.com/archive/2016/06/15/set-up-asp-net-dataprotection-in-a-farm/) by [Travis Illig](http://www.paraesthesia.com/)
* **Books**
  <table width="100%">
    <tr>
      <td width="185">
        <a href="http://amzn.to/25J77RT">
          <img src="http://ecx.images-amazon.com/images/I/51PoyFDMopL._SX150.jpg" width="150" height="185" alt="C# 6 and .NET Core 1.0: Modern Cross-Platform Development" />
        </a>
      </td>
      <td>
        <p>
          <strong><a href="http://amzn.to/25J77RT">C# 6 and .NET Core 1.0: Modern Cross-Platform Development</a></strong><br />
          <sup>by Mark J. Price (Mar 2016)</sup>
        </p>
        <p>
          In this book you will learn how to build cross-platform applications using C# 6 and .NET
          Core 1.0; how to build professional web applications with ASP.NET Core 1.0; how to improve
          your application's performance using multitasking; learn Entity Framework Core 1.0 and
          Code-First development approach; master object-oriented programming with C#; familiarize
          yourself with cross-device app development using the Universal Windows Platform and XAML;
          query and manipulate data using LINQ; protect your data by using encryption and hashing.
        </p>
      </td>
    </tr>
  </table>


### Related Projects

* [React Starter Kit](https://github.com/kriasoft/react-starter-kit) — Isomorphic web app boilerplate (Node.js, Express, GraphQL, React)
* [Babel Starter Kit](https://github.com/kriasoft/babel-starter-kit) — JavaScript library boilerplate (ES2015+, Babel, Rollup)
* [ASP.NET Core Starter Kit `|>` F#](https://github.com/kriasoft/fsharp-starter-kit) — Web app boilerplate (F#, .NET Core, Kestrel, GraphQL, React)
* [Universal Router](https://github.com/kriasoft/universal-router) — Isomorphic router for web and single-page applications (SPA)
* [Membership Database](https://github.com/membership/membership.db) — SQL database boilerplate for web app users, roles and auth tokens


### Get in Touch

* [#aspnet-starter-kit](https://gitter.im/kriasoft/aspnet-starter-kit) on Gitter
* [@koistya](https://twitter.com/koistya) on [Codementor](https://www.codementor.io/koistya)


### License

Copyright © 2014-2016 [Kriasoft](https://kriasoft.com). This source code is licensed under the MIT
license found in the [LICENSE.txt](https://github.com/kriasoft/react-starter-kit/blob/master/LICENSE.txt)
file. The documentation to the project is licensed under the [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)
license.


---
Made with ♥ by Konstantin Tarkus ([@koistya](https://twitter.com/koistya)) and [contributors](https://github.com/kriasoft/aspnet-starter-kit/graphs/contributors)
