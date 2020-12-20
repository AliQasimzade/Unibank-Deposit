const ramda = require("ramda")

function changeOne() {
	document.getElementById('tableTwo').style.opacity = '0';
	document.getElementById('btnTwo').style.border = 'none';
	document.getElementById('tableOne').style.opacity = '1';
}

function changeTwo() {
	document.getElementById('tableOne').style.opacity = '0';
	document.getElementById('tableTwo').style.opacity = '1';
	document.getElementById('btnOne').style.border = 'none';
}