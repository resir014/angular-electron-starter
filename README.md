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

## Included Commands

|Command|Description|
|--|--|
|`npm start`| Starts a development server on `localhost:4200`. |
|`npm run electron:linux`| Builds the app and creates an executable for Linux. |
|`npm run electron:windows`| Builds the app and creates an executable for 32-bit and 64-bit Windows systems. |
|`npm run electron:mac`| Builds the app and creates an executable for macOS. |

**Your application is optimised. Only the files of /dist folder are included in the executable.**

## Browser mode

Running `npm start` also runs a local development server on port 4200.

Note that importing native NodeJS modules can only be done on Electron mode. You can conditionally import native NodeJS modules by using conditional import utilising Electron's `remote` API.

```ts
if (this.electron.isElectron) {
  const os = this.electron.remote.require('os');
  this.runmode = `Running as an Electron app on ${os.platform()}.`;
} else {
  this.runmode = 'Running as a web app.';
}
```

## Execute E2E tests

You can find end-to-end tests in /e2e folder.

```bash
# First, start a web server on port 4200
$ npm run start:web

# Then in another terminal window, launch Protractor (E2E framework)
$ npm run e2e
```

## Special thanks

* Maxime GRIS ([angular-electron](https://github.com/maximegris/angular-electron) starter kit)

# Contributors

[<img alt="Resi Respati" src="https://avatars2.githubusercontent.com/u/5663877?v=3&s=117" width="117">](https://github.com/resir014)|[<img alt="Mhyre" src="https://avatars2.githubusercontent.com/u/30327817?v=3&s=117" width="117">](https://github.com/eryhM)|
:---:|:---:|
|[Resi Respati](https://github.com/resir014)|[Mhyre](https://github.com/eryhM)|
