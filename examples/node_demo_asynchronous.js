// An asynchronous example using a callback function

fs = require('fs'); 

function callback(err, data) {
	console.log('data:', data);
}

fs.readdir('/Users/clbo/Documents', callback);

console.log("this comes after");