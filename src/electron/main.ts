import { app, BrowserWindow, ipcMain, screen, Menu } from 'electron';
import setMainMenu from './menu';
import initMainListener from './listeners';
import * as path from 'path';
import * as url from 'url';

let win: Electron.BrowserWindow | null;
const args = process.argv.slice(1);
const serve = args.some(val => val === '--serve');
const isWindows = process.platform === 'win32';

if (serve) {
  require('electron-reload')(path.join(__dirname, '..'), {});
}

/**
 * Creates the browser window.
 */
function createWindow() {
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    width: size.width,
    height: size.height,
    title: 'AngularElectron',
    show: false
  });

  // and load the index.html of the app.
  if (serve) {
    win.loadURL(url.format({
      pathname: 'localhost:4200',
      protocol: 'http:',
      slashes: true
    }));
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, '../index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  // Build the application main menu.
  setMainMenu(win);

  // Show when window content is fully loaded
  win.once('ready-to-show', () => {
    (win as Electron.BrowserWindow).show();

    // Open the DevTools.
    if (serve) {
      (win as Electron.BrowserWindow).webContents.openDevTools();
    }
  });

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  // Initialise the ipcMain listeners referencing the window object we created.
  initMainListener(win);
}

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch error
  // throw e;
}
