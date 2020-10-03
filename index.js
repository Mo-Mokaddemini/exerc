const info = require('./information.js');
let cowsay = require("cowsay");

console.log(cowsay.say({
	text : `Hello i'm ${info.name} from ${info.campus}`,
	e : "oO",
	T : "U "
}));