//what is an IIFE and why are they used?
// IIFE - Immediately Invoked Function Expression- its invoked rigth after it is created 

//in order to create an IIFE you need to wrao the function in parenthisis and inwoke it at the end with the argument if needed
//like the one below 
// the main reason to use an IIFE is to preserve a private scope within your function 

// to not override the variables in the global scope if used the same name - etc...

(function doubleNumber(num) {
	return num * 2;
})(10)
    
   // you can wrap your file in an IFFE to not ovveride variables for global scopes

(function () {
	function getTotal(a, b) {
		return a + b;
	}

	var $ = "currency";

	if (true) console.log("hello world");
})();