
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
  const dosya = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(dosya);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Profile.imr';
  link.click();
  URL.revokeObjectURL(url);
}

function download(name, type) {
  var a = document.getElementById("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = 'Profile.imr';
}
	
var qrcode = new QRCode(document.getElementById("qrcode"), {
	width: 400,
	height: 400,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.L
  });
  
  var qrcodeact = new QRCode(document.getElementById("actcode"), {
	width: 400,
	height: 400,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.L
  });

let text = "";

function makeProfileCode () {
text = '<?xml version="1.0" encoding="UTF-8"?><root>'+
	 '<Profile id="'+ document.getElementById("profileid").value +'">'+
		'<ExportTarget>'+
		  '<ProfileInfo>'+
			'<Name val="'+ document.getElementById("profilename").value +'" editable="1" />'+
		  '</ProfileInfo>'+
		  '<UserInfo>'+
			'<ID val="'+ document.getElementById("extnumber").value +'" editable="1" />'+
			'<Password val="'+ document.getElementById("password").value +'" editable="1" />'+
		  '</UserInfo>'+
		  '<SvInfo>'+
			'<SvType01 val="'+ document.getElementById("servertype").value +'" editable="1" />'+
			'<Domain01 val="'+ document.getElementById("serverip").value +'" editable="1" />'+
			'<Address01 val="'+ document.getElementById("serverip").value +'" editable="1" />'+
			'<Port01 val="'+ document.getElementById("serverport").value +'" editable="1" />'+
			'<RegistrarServer01 val="'+ document.getElementById("serverip").value +'" editable="1" />'+
			'<ProtocolType01 val="2" editable="1" />'+
		  '</SvInfo>'+
		'</ExportTarget>'+
	  '</Profile>'+
	'</root>';
	
	
	qrcode.makeCode(text);
}

function makeActCode () {
	let text = '<?xml version="1.0" encoding="UTF-8"?>'+
				'<root>'+
				'<Terminal>'+
				'<ActivationKey val="1b8ff2a283623dae" editable="0" />'+
				'</Terminal>'+
				'</root>';	
	
	qrcodeact.makeCode(text);
}

makeProfileCode();
makeActCode();

$("#extnumber").
	on("blur", function () {
		makeProfileCode();
	}).
	on("keyup", function (e) {
		
			makeProfileCode();
		
	});
	
$("#serverip").
	on("blur", function () {
		makeProfileCode();
	}).
	on("keyup", function (e) {
		
			makeProfileCode();
		
	});
$("#serverport").
	on("blur", function () {
		makeProfileCode();
	}).
	on("keyup", function (e) {
		
			makeProfileCode();
		
	});
$("#servertype").
	on("blur", function () {
		makeProfileCode();
	}).
	on("change", function (e) {
		
			makeProfileCode();
		
	});
$("#profilename").
	on("blur", function () {
		makeProfileCode();
	}).
	on("keyup", function (e) {
		
			makeProfileCode();
		
	});
$("#profileid").
	on("blur", function () {
		makeProfileCode();
	}).
	on("keyup", function (e) {
		
			makeProfileCode();
		
	});
$("#password").
	on("blur", function () {
		makeProfileCode();
	}).
	on("keyup", function (e) {
		
			makeProfileCode();
		
	});
