// The following reads the text from a file and saves the content to a variable 'c'.
// The problem is that when 'c' is printed in the console.log() statement
// it is still undefined.
// Why is this not working as expected?
// and how would you make this work?

var fs = require('fs');
var c;

fs.readFile('text.txt', function (err, data) {
	if (err) {
		throw err;
	}
	
	c = data;

});
// data is now in c (???)
console.log(c); // undefined
