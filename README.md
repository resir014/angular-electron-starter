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

If you want to generate Angular components with Angular CLI, you **MUST** install `@angular/cli` in npm global context. Follow [the Angular CLI documentation](https://github.com/angular/angular-cli) if you have used an older version of the Angular CLI before.

``` bash
npm install -g @angular/cli
```

### Building for development

You will need two terminal windows.

```bash
# First, run the incremental builder.
$ npm start

# Then, open another terminal window and start the Electron app
# in live-reload mode.
$ npm run electron:serve
```

The Angular root component contains an example of Electron library import. See [Using NodeJS Native libraries](#using-nodejs-native-libraries) if you want to import other native libraries in your project.

### Building for production

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

### Using NodeJS Native libraries

Angular CLI can't import NodeJS native libs or electron libs at compile time. This is the reason why `webpack.config.ts` was ejected from ng-cli. If you need to use NodeJS native libraries, you **MUST** add it manually to the Webpack config.

```js
  "externals": {
    "electron": 'require(\'electron\')',
    "child_process": 'require(\'child_process\')',
    "fs": 'require(\'fs\')'
    ...
  },
```

Notice how all NodeJS v7+ native libraries are already included in this sample. Feel free to remove those you don't need.

### Browser mode

To run the app in your browser, run `npm run start:web`.

Note that you can't use Electron or NodeJS native libraries in this case. Check `src/app/core/ngx-electron/ngx-electron.service.ts` to see how conditional import of Electron/native libraries works.

### Execute E2E tests

You can find end-to-end tests in the `/e2e` folder.

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
