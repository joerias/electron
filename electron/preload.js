window.addEventListener("DOMContentLoaded", () => {
	const replaceText = (selector, text) => {
		const element = document.getElementById(selector);
		if (element) element.innerText = text;
	};

	for (const dependency of ["chrome", "node", "electron"]) {
		replaceText(`${dependency}-version`, process.versions[dependency]);
	}
});

const { contextBridge, ipcRenderer } = require("electron");
/* 
contextBridge 方法提供给web上获取electron本身的一些数据 即网页获取容器的信息途径
ipcRenderer 方法把当前获得的行为提供给electron主进程 即容器获得网页的信息途径
*/

contextBridge.exposeInMainWorld("api", {
	chromeVersion: process.versions.chrome,
	sendValue: (value) => {
		ipcRenderer.send("sendValue", value);
	},
	getValue: () => ipcRenderer.invoke("getValue"),
});
