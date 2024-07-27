// 扩展全局的Window接口
declare global {
	interface Window {
		api: {
			chromeVersion: string;
			sendValue(value: string): void;
			getValue: () => Promise<string>;
		};
	}
}

// 确保这个文件被TypeScript编译器识别
export {};

/* 
请注意，export {};是必须的，以确保TypeScript编译器将此文件视为模块，并且不会忽略它。
一旦你添加了这个声明文件，TypeScript编译器将识别你在Window接口中添加的api属性，并且你的原始代码中对api的引用将不再引发错误。
 */
