function announcement () {
	console.log('Hello');
	setTimeout(function(){
		console.log('I am the callback');
	}, 1000);

	console.log('What are you?');
}

announcement();
