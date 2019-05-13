const five = require("johnny-five");
const d3 = require("d3-scale");
const thermometer = require("./sensors/thermometer");
const distance = require("./sensors/distance");
const sensors = require("./sensors.json");
const board = new five.Board({ repl: false, debug: true });

board.on("exit", ()=> { console.log('exit'); });
// board.on("info", function(event) { console.log("%s sent a 'info' message: %s", event.class, event.message); });
// board.on("warn", function(event) { console.log("%s sent a 'warn' message: %s", event.class, event.message); });
// board.on("fail", function(event) { console.log("%s sent a 'fail' message: %s", event.class, event.message); });
board.on("message", function(event) { console.log("Received a %s message, from %s, reporting: %s", event.type, event.class, event.message); });

board.on("ready", ()=> {
	sensors.forEach(function(e, i) {
		if(e.enable){
			if(e.type == 'thermometer'){
				thermometer.create(e);
			}else if(e.type == 'distance'){
				distance.create(e);
			}
		}
	});
});

module.exports = { board, sensors };