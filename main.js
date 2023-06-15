const { app, BrowserWindow, Menu } = require("electron");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  Menu.setApplicationMenu(null);

  mainWindow.loadFile("index.html");
}

app.whenReady().then(createWindow);
