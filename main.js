// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const path = require('path');


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// app.on('ready', createWindow)
app.on('ready', () => {
  createWindow()
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

console.log("hieeee");
//////////new code
// require('update-electron-app')({
//   logger: require('electron-log')
// })

// const path = require('path')
// // const glob = require('glob')
// const {app, BrowserWindow} = require('electron')

// const debug = /--debug/.test(process.argv[2])

// if (process.mas) app.setName('Electron APIs')

// let mainWindow = null

// function initialize () {
//   makeSingleInstance()

//   // loadDemos()

//   function createWindow () {
//     const windowOptions = {
//       width: 1080,
//       minWidth: 680,
//       height: 840,
//       title: app.getName(),
//       webPreferences: {
//         nodeIntegration: true
//       }
//     }

//     if (process.platform === 'linux') {
//       windowOptions.icon = path.join(__dirname, '/assets/app-icon/png/512.png')
//     }

//     mainWindow = new BrowserWindow(windowOptions)
//     mainWindow.loadURL(path.join('file://', __dirname, '/index.html'))

//     // Launch fullscreen with DevTools open, usage: npm run debug
//     if (debug) {
//       mainWindow.webContents.openDevTools()
//       mainWindow.maximize()
//       require('devtron').install()
//     }

//     mainWindow.on('closed', () => {
//       mainWindow = null
//     })
//   }

//   app.on('ready', () => {
//     createWindow()
//   })

//   app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//       app.quit()
//     }
//   })

//   app.on('activate', () => {
//     if (mainWindow === null) {
//       createWindow()
//     }
//   })
// }

// // Make this app a single instance app.
// //
// // The main window will be restored and focused instead of a second window
// // opened when a person attempts to launch a second instance.
// //
// // Returns true if the current version of the app should quit instead of
// // launching.
// function makeSingleInstance () {
//   if (process.mas) return

//   app.requestSingleInstanceLock()

//   app.on('second-instance', () => {
//     if (mainWindow) {
//       if (mainWindow.isMinimized()) mainWindow.restore()
//       mainWindow.focus()
//     }
//   })
// }

// // Require each JS file in the main-process dir
// // function loadDemos () {
// //   const files = glob.sync(path.join(__dirname, 'main-process/**/*.js'))
// //   files.forEach((file) => { require(file) })
// // }

// initialize()

