const five = require("johnny-five");
let thermometer = {}

thermometer.create = (e)=>{
	// e.data = { time: (new Date()).getTime(), val: 'cscsc' }; 
	switch(e.sensor) {
		case "DS18B20": //digital
			e.obj = new five.Thermometer({ controller: "DS18B20", pin: e.pin });  
			e.obj.on("change", function() { e.data = { time: (new Date()).getTime(), val: this.celsius }; });
			break;
		case "LM335": //analog
			e.obj = new five.Thermometer({ controller: "LM335", pin: e.pin });  
			e.obj.on("change", function() { e.data = { time: (new Date()).getTime(), val: this.celsius }; });
			break;
		default:
			// code block
	}
	// return obj;
}

module.exports = thermometer;