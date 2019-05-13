const five = require("johnny-five");
let distance = {}

distance.create = (e)=>{
	let param = {};
	switch(e.sensor) {
		case "GP2Y0A21YK": //analog
		case "GP2D120XJ00F": 
		case "GP2Y0A02YK0F": 
		case "GP2Y0A41SK0F": 
		case "GP2Y0A710K0F":
		case "MB1000":
		case "MB1010":
		case "MB1003":
		case "MB1230":
		case "MB1003":
		case "HCSR04":
			param = { controller: e.sensor, pin: e.pin };
			break;
		case "LIDARLITE": //i2c
		case "SRF10":
		case "HCSR04I2C":
			param = { controller: e.sensor };
			break;
		default:
			// code block
	}

	e.obj = new five.Proximity(param);  
	e.obj.on("data", function() { e.data = { time: (new Date()).getTime(), val: this.cm }; });
}

module.exports = distance;