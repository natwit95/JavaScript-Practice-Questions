//tripleAdd(10)(20)(30);
//should return 60
// returns total of all 3 numbers added together 
//called curried fucntion -> works on simple idea of clousres 

function tripleAdd(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3
        }
    }
}

///this is a function that gives us the same result but above is curried. 
//we curry a function to avoid passing in too much parameters

function tripleAdd1(num1, num2, num3) {
	return num1 + num2 + num3;
}

tripleAdd(10)(20)(30); // returns 60
tripleAdd1(10, 20, 30);
 
///ALSO A curried a function but this one has more arguments within inner functions --> still makes it a curried function
 function quadrupleAdd(num1) {
		return function (num2) {
			return function (num3, num4) {
				return num1 + num2 + num3 + num4;
			};
		};
 }

 quadrupleAdd(10)(20)(30, 40);