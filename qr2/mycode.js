
let isHidden = true;

function hideDiv() {
	const div1 = document.getElementById("actcode");
	const actcodebtn = document.getElementById("actcodebtn");
	if (isHidden) {
		div1.style.display = "inline-block";
		actcodebtn.innerText = "Hide Activation Code";
		isHidden = false; // Div is shown, update state
	} else {
		div1.style.display = "none";
		actcodebtn.innerText = "Show Activation Code";
		isHidden = true; // Div is hidden, update state
	}
}

function kaydet() {
	const dosya = new Blob([textProfile], { type: 'text/plain' });
	const url = URL.createObjectURL(dosya);
	const link = document.createElement('a');
	link.href = url;
	link.download = 'Profile.imr';
	link.click();
	URL.revokeObjectURL(url);
}

var textProfile = "";
var textAct = "";

var QRParams = {
	config: {
		text: "", // Content

		width: 400, // Widht
		height: 400, // Height
		// === Title
		title: 'Profile QR', // Title
		titleFont: "normal normal bold 16px Arial", // Title font
		titleColor: "#004284", // Title Color
		titleBackgroundColor: "#fff", // Title Background
		titleHeight: 50, // Title height, include subTitle
		titleTop: 25, // Title draw position(Y coordinate), default is 30


		// === SubTitle
		//subTitle: 'Lorem ipsum dolor sit amet', // Subtitle content
		//subTitleFont: "normal normal normal 8px Arial", // Subtitle font
		//subTitleColor: "#004284", // Subtitle color
		//subTitleTop: 45, // Subtitle drwa position(Y coordinate), default is 50

		colorDark: "#27408B", // Dark color
		colorLight: "#FFF8DC", // Light color

		// === Logo
		//logo: "star.png", // LOGO						
		//logoWidth: 80,
		//logoHeight: 80,
		//logoBackgroundColor: '#FFF8DC', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
		//logoBackgroundTransparent: true, // Whether use transparent image, default is false

		backgroundImage: 'logo.png', // Background Image
		backgroundImageAlpha: 1, // Background image transparency, value between 0 and 1. default is 1. 
		autoColor: true, // Automatic color adjustment(for data block)
		autoColorDark: "rgba(150, 55, 0, 6)", // Automatic color: dark CSS color
		autoColorLight: "rgba(255, 255, 255, 7)", // Automatic color: light CSS color

		// === Posotion Pattern(Eye) Color

		//PI: '#aa5b71', // Global Position Inner color. if not set, the defaut is `colorDark`
		//					PO_TL:'', // Position Outer - Top Left 
		//PI_TL: '#FEB600', // Position Inner - Top Left 
		//PO_TL: '#F500FE', // Position Outer - Top Left

		//PI_TR: '#00C3FE', // Position Inner - Top Right 
		//PO_TR: '#5AFE00', // Position Outer - Top Right 						

		//PO_BL: '#BFD641', // Position Outer - Bottom Left 
		//PI_BL: '#D76641', // Position Inner - Bottom Left 

		//AO: '#6F37E1', // Alignment Outer. if not set, the defaut is `colorDark`
		//AI: '#1F18E4',

		// === Timing Pattern Color
			//timing: '#e1622f', // Global Timing color. if not set, the defaut is `colorDark`
		timing_H: '#ff6600', // Horizontal timing color
		timing_V: '#cc0033', // Vertical timing color				

		correctLevel: QRCode.CorrectLevel.M, // L, M, Q, H				

		dotScale: 0.5
	}
}




function makeProfileCode() {
	textProfile = '<?xml version="1.0" encoding="UTF-8"?>\r\n' +
		'<root>\r\n' +
		'<Profile id="' + document.getElementById("profileid").value + '">\r\n' +
		'<ExportTarget>\r\n' +
		'<ProfileInfo>\r\n' +
		'<Name val="' + document.getElementById("profilename").value + '" editable="1" />\r\n' +
		'</ProfileInfo>\r\n' +
		'<UserInfo>\r\n' +
		'<ID val="' + document.getElementById("extnumber").value + '" editable="1" />\r\n' +
		'<Password val="' + document.getElementById("password").value + '" editable="1" />\r\n' +
		'</UserInfo>\r\n' +
		'<SvInfo>\r\n' +
		'<SvType01 val="' + document.getElementById("servertype").value + '" editable="1" />\r\n' +
		'<Domain01 val="' + document.getElementById("serverip").value + '" editable="1" />\r\n' +
		'<Address01 val="' + document.getElementById("serverip").value + '" editable="1" />\r\n' +
		'<Port01 val="' + document.getElementById("serverport").value + '" editable="1" />\r\n' +
		'<RegistrarServer01 val="' + document.getElementById("serverip").value + '" editable="1" />\r\n' +
		'<ProtocolType01 val="2" editable="1" />\r\n' +
		'</SvInfo>\r\n' +
		'</ExportTarget>\r\n' +
		'</Profile>\r\n' +
		'</root>\r\n';

	QRParams.config.text = textProfile;
	QRParams.config.title = 'Profile QR'
	new QRCode(document.getElementById("qrcode"), QRParams.config);

}

function makeActCode() {
	textAct = '<?xml version="1.0" encoding="UTF-8"?>\r\n' +
		'<root>\r\n' +
		'<Terminal>\r\n' +
		'<ActivationKey val="1b8ff2a283623dae" editable="0" />\r\n' +
		'</Terminal>\r\n' +
		'</root>\r\n';

	QRParams.config.text = textAct;
	QRParams.config.title = 'Activation QR'

	new QRCode(document.getElementById("actcode"), QRParams.config);

}

makeProfileCode();
makeActCode();

$(this).
	on("keydown", function (e) {
		const element = document.getElementById("qrcode");
		element.innerHTML = "";
		makeProfileCode();
	});
