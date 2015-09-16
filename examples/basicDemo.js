function announcement(callback) {

    // Call the callback
    callback(3, 'Hello World');
}

function foo(a, b) {
    // I'm the callback
    
    for (var i = 0; i < a; i++) {
    	console.log(b);
    };
}

function fii (a, b) {
	// I'm another callback
    
    console.log(a + ' ' + b + '´s');
}

function fuu (a) {
	// I'm a 3rd callback
    
    console.log(a, a, a, a, a, a + a + a + a + a);
}

announcement(foo);
announcement(fii);
announcement(fuu);
announcement(function () {
	console.log('my, my, myyyyyyy');
});
