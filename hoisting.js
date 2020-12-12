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