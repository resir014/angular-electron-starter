# angular-electron-starter

> Angular 4 + Electron development, easier than ever!

## Introduction

Currently runs with:

- Angular v4.3.5 (with Angular CLI)
- Electron v1.7.5
- electron-builder v19.27.7

### Getting Started

First, download a zipped copy of this repository [here](https://github.com/resir014/angular-electron-starter/archive/master.zip).

Extract it, `cd` into it, then install the dependencies with `npm`:

``` bash
$ npm install
```

**Note:** There is currently an issue with `yarn` and `node_modules` that are only used in Electron on the backend when the application is built by the packager. For now, please use `npm` when installing dependencies.

If you want to generate Angular components with Angular CLI, you **MUST** install `@angular/cli` in npm global context. Follow [the Angular CLI documentation](https://github.com/angular/angular-cli) if you have used an older version of the Angular CLI before.

``` bash
npm install -g @angular/cli
```

### To build for development

You will need two terminal windows.

```bash
# First, run the incremental builder.
$ npm start

# Then, open another terminal window and start the Electron app
# in live-reload mode.
$ npm run electron:serve
```

The Angular component contains an example of Electron and NodeJS native lib import. See [Use NodeJS Native libraries](#use-nodejs-native-libraries) if you want to import other native libraries in your project.

### To build for production

* Using development variables (environments/index.ts): `npm run electron:dev`
* Using production variables (environments/index.prod.ts): `npm run electron:prod`

Your built files are in the `/dist` folder.

### Included Commands

|Command|Description|
|--|--|
|`npm run start:web`| Execute the app in the browser. |
|`npm run electron:linux`| Builds the app and creates an executable for Linux. |
|`npm run electron:windows`| Builds the app and creates an executable for 32-bit and 64-bit Windows systems. |
|`npm run electron:mac`| Builds the app and creates an executable for macOS. |

**Your application is optimised. Only the `/dist` folder will be included in the built executable.**

### Use NodeJS Native libraries

Angular CLI can't import nodeJS native libs or electron libs at compile time (Webpack error). This is the reason why `webpack.config` was ejected of ng-cli.
If you need to use NodeJS native libraries, you **MUST** add it manually in the file `webpack.config.js` in root folder.

```js
  "externals": {
    "electron": 'require(\'electron\')',
    "child_process": 'require(\'child_process\')',
    "fs": 'require(\'fs\')'
    ...
  },
```

Notice that all node.js v7+ native libs are already added in this sample. Feel free to remove those you don't need.

### Browser mode

To run the app in your browser, run `npm run start:web`.

Note that you can't use Electron or NodeJS native libraries in this case. Check `src/app/core/ngx-electron/ngx-electron.service.ts` to watch how conditional import of electron/Native libraries is done.

### Execute E2E tests

You can find end-to-end tests in /e2e folder.

```bash
# First, start a web server on port 4200
$ npm run start:web

# Then in another terminal window, launch Protractor (E2E framework)
$ npm run e2e
```

## Contributors

[<img alt="Resi Respati" src="https://avatars2.githubusercontent.com/u/5663877?v=3&s=117" width="117">](https://github.com/resir014)|
:---:
|[Resi Respati](https://github.com/resir014)|[Mhyre](https://github.com/eryhM)|

## Special thanks

* Maxime GRIS (for the [angular-electron](https://github.com/maximegris/angular-electron) starter kit, from which this kit is based)
