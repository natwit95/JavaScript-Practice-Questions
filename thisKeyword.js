//what is the "this" keyword and how is it used?
//"this" keyword refers to an object it is directly inside of


// let home = {
//     price: 500000,
//     squareFeet: 2500,
//     owner: "Natalia",
//     getPricePerSquareFeet: function () {
//         return home.price / home.squareFeet
//     }
// }

let home = {
	price: 500000,
	squareFeet: 2500,
	owner: "Natalia",
	getPricePerSquareFeet: function () {
		return this.price / this.squareFeet;
	},
};
 
console.log(home.price)
console.log(home.getPricePerSquareFeet());



//from above example you can see that you can use a this keyword inside the home object since it will refer to the home object itself