const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const ipc = ipcMain;

function createWindow () {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    frame: false,
    width: 1280,
    height: 720,
    webPreferences: {
      devTools: true, // default is true, set to false to prevent ctrl+shift+i (F12)
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('./dist/angular-build/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipc.on("toMain", (event, args) => {
  switch (args) {
    case "closeApp": BrowserWindow.getFocusedWindow().close();
      break;
    case "minimizeApp": BrowserWindow.getFocusedWindow().minimize();
      break;
    case "maximizeApp": 
      if (BrowserWindow.getFocusedWindow().isMaximized()) { 
        BrowserWindow.getFocusedWindow().unmaximize(); 
      }  
      else { BrowserWindow.getFocusedWindow().maximize(); };
      break;
  
    default:
      break;
  }
});

