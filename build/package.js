"use strict";

const builder = require('electron-builder');
const pkg = require('../package.json');
const argv = require('minimist')(process.argv.slice(1));

const shouldUseAsar = argv.asar || false;
const Platform = builder.Platform;

/** @type {*} */
const DEFAULT_OPTS = {
  appId: 'io.github.resir014.AngularElectronStarter',
  files: 'dist/**/*',
  asar: shouldUseAsar,
  directories: {
    output: './app-builds'
  },
  win: {
    target: [
      {
        target: 'zip',
        arch: ['x64', 'ia32']
      }
    ]
  }
};

const buildPlatform = () => {
  switch (argv.platform) {
    case 'linux': {
      return Platform.LINUX.createTarget();
    }
    case 'win': {
      return Platform.WINDOWS.createTarget();
    }
    case 'darwin': {
      return Platform.MAC.createTarget();
    }
    default: {
      // Windows as fallback.
      return Platform.WINDOWS.createTarget();
    }
  }
};

builder.build({
  targets: buildPlatform(),
  config: DEFAULT_OPTS
}).then(() => {
  console.log('Application packaged successfully!');
}).catch((err) => {
  console.error(err);
});
