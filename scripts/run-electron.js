const { execSync } = require('child_process');
const { join } = require('path');

execSync([
  {
    test: /^win/,
    command: `${join(process.cwd(), 'node_modules/electron-prebuilt/dist/electron.exe')} ${join(process.cwd(), 'electron.js')}`
  },
  {
    test: /^darwin/,
    command: `${join(process.cwd(), 'node_modules/electron-prebuilt/dist/Electron.app/Contents/MacOS/Electron')} ${join(process.cwd(), 'electron.js')}`
  }
].find(c => c.test.test(process.platform)).command);