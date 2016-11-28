const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

global.__dirname = __dirname;

app.on('ready', () => {
  new BrowserWindow({
    width: 360,
    height: 640
  }).loadURL(`file://${__dirname}/www/index.html`)
});

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
