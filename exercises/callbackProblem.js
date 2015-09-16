// The following reads the text from a file and saves the content to a variable 'c'.
// The problem is that when 'c' is printed in the console log statement
// it is still undefined.
// your job is to make this work.

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
