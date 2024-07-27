const { app, BrowserWindow, ipcMain } = require("electron");
// 在你文件顶部导入 Node.js 的 path 模块
const path = require("node:path");
const fs = require("fs");
const startLocal = true;

try {
	require("electron-reloader")(module);
} catch {
	console.log("electron-reload is not installed");
}

const createWindow = () => {
	const win = new BrowserWindow({
		width: 1000,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
		},
	});
	win.webContents.openDevTools();

	if (startLocal) {
		win.loadURL("http://localhost:5600");
	} else {
		win.loadFile("./electron/index.html");
	}

	// 获得页面传过来的值，并写入本地文件
	ipcMain.on("sendValue", (_, value) => {
		fs.writeFileSync("data.txt", value);
	});

	ipcMain.handle("getValue", () => fs.readFileSync("data.txt", "utf8").toString());
};

app.whenReady().then(() => {
	createWindow();
	console.log("in2dsd");

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
