var nativefier = require('nativefier').default;
const { exec } = require("child_process");

// possible options, defaults unless specified otherwise
var options = {
	name: 'replit-standalone', // will be inferred if not specified
	targetUrl: 'https://replit.com/', // required
	platform: '', // defaults to the current system
	arch: 'x64', // defaults to the current system
	version: '0.1.0',
	out: '.',
	overwrite: false,
	asar: false, // see conceal
	icon: 'images/logo.png',
	counter: false,
	bounce: false,
	verbose: true,
	minwidth: 800,
	minheight: 600,
	hidewindowframe: true,
	disablecontextmenu: true,
	showMenuBar: false,
	fastQuit: false,
	userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
	ignoreCertificate: false,
	ignoreGpuBlacklist: false,
	enableEs3Apis: false,
	internalUrls: '.*?\.replit\.*?',
	blockExternalUrls: false,
	insecure: false,
	honest: true,
	zoom: 1.0,
	inject: 'default_exts/dns.js',
	singleInstance: false,
	clearCache: false,
	fileDownloadOptions: {
		saveAs: true, // always show "Save As" dialog
	},
};

nativefier(options, function (error, appPath) {
	if (error) {
		console.error(error);
		return;
	}
	if (process.platform === 'win32') {
		exec("set PATH=%PATH%;C:\\Users\\%USERNAME%\\node_modules\\replit-standalone\\replit-standalone-win32-x64", (error, stdout, stderr) => {
			if (error) {
				console.log(`error: ${error.message}`);
				return;
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`);
				return;
			}
			console.log(`stdout: ${stdout}`);
		});
	} else if (process.platform === 'linux') {
		exec("bash finalize_binary.sh", (error, stdout, stderr) => {
			if (error) {
				console.log(`error: ${error.message}`);
				return;
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`);
				return;
			}
			console.log(stdout);
		});
	}
	console.log('App has been nativefied to', appPath);
});