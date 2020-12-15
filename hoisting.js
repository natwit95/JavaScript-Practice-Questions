//what is hoisting
//give an example of hositing 


//tab 1

console.log(color)

var color = "blue"

console.log(color)


//tab 2

let color

console.log(color)

color = "blue"

console.log(color)

//tab 3

console.log(getProduct(2, 3))

var getProduct = function (num1, num2) {
    return num1 + num2
}

console.log(getProduct(2, 3))

//tab 5

let globalVar = 'global'

    (function () {

        let name = 'Jen'
        let getAge = function () {
            return '30'
        }

        function getState() {
            return 'New York'
        }
    })()


    //PART 2

    //Variables and functions are hoisted to the top of the scope that they are declared in
    //whether that is a global scope, a function scope, or a block scope- depending on the keyword you use to define them (var, let const)

    // tab 1
 
function getTotal() {
  console.log(multiplier);
  console.log(total);
  
  let total = 0;
  
  for(var i = 0; i < 10; i++) {
    
    let valueToAdd = i;
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }
  
  return total;
}
 
getTotal();
 
 
 
// tab 2
 
function getTotal() {
  let total;
  var multiplier;
  
  total = 0;
  
  for(var i = 0; i < 10; i++) {
    let valueToAdd;
    
    valueToAdd = i;
    multiplier = 2;
    total += valueToAdd * multiplier;
  }
  
  return total;
}
 
getTotal();