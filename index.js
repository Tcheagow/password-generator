const { app, BrowserWindow } = require('electron');

var win = null;

const createWindow = () => {
    win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences:{
        devTools:true,
        enableRemoteModule: true,
        nodeIntegration:true,
        contextIsolation:false,
      }
    })
  
    win.loadFile('./html/login.html');
}

app.whenReady().then(() => {
    createWindow();
    
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  } 
})