var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var options = {
	name: 'replit-standalone', // will be inferred if not specified
	targetUrl: 'https://replit.com', // required
	platform: '', // defaults to the current system
	arch: 'x64', // defaults to the current system
	version: '0.1.0',
	out: '.',
	overwrite: false,
	asar: false, // see conceal
	icon: 'images/logo.png',
	counter: false,
	bounce: false,
	maxwidth: 800,
	maxheight: 600,
	hidewindowframe: true,
	disablecontextmenu: true,
	showMenuBar: false,
	fastQuit: false,
	userAgent: '', // will infer a default for your current system
	ignoreCertificate: false,
	ignoreGpuBlacklist: false,
	enableEs3Apis: false,
	internalUrls: '.*?\.replit\.*?',
	blockExternalUrls: false,
	insecure: false,
	honest: false,
	zoom: 1.0,
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
	console.log('App has been nativefied to', appPath);
});