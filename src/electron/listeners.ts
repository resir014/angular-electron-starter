import { app, BrowserWindow, ipcMain, Menu } from 'electron';

/**
 * This function hold all Electron IPC listeners.
 *
 * @param {Electron.BrowserWindow} window The window object, in case the event
 *    manipulates it.
 */
function initMainListener(window: Electron.BrowserWindow) {
  ipcMain.on('ELECTRON_BRIDGE_HOST', (event: Electron.Event, msg: any) => {
    console.log(`[ELECTRON_BRIDGE_HOST] ${msg}`);
    if (msg === 'app:generic:ping') {
      event.sender.send('ELECTRON_BRIDGE_CLIENT', 'pong');
    }
    if (msg === 'app:window:minimize') {
      window.minimize();
    }
    if (msg === 'app:window:maximize') {
      if (window.isMaximized()) {
        window.unmaximize();
      } else {
        window.maximize();
      }
    }
    if (msg === 'app:window:close') {
      window.close();
    }
  });
}

export default initMainListener;
