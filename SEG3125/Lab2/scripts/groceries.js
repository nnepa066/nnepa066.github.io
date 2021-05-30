	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.59
	},
	{
		name: "Grain Bread",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 2.99
	},
	{
		name: "Salmon",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 8.00
	},
	{
		name: "Spinach",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.74
	},
	{
		name: "Orange Juice",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 3.05
	},
	{
		name: "Chicken",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 10.00
	},
	{
		name: "Apple",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 1.00
	},
	{
		name: "Cookies",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 2.00
	},
	{
		name: "Ice Cream",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		price: 5.00
	},
	{
		name: "Milk",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 3.49
	},
	{
		name: "Cheese",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 2.29
	},
	{
		name: "Peanut Butter",
		lactoseFree: false,
		nutFree: false,
		organic: false,
		price: 3.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_items = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Lactose") && (prods[i].lactoseFree == true)){
			product_items.push(prods[i]);
		}
		else if ((restriction == "Nuts") && (prods[i].nutFree == true)){
			product_items.push(prods[i]);
		}
		else if (restriction == "None"){
			product_items.push(prods[i]);
		}
	}
	return product_items;
}

function restrictListOrganicProducts(prods) {
	let product_items = [];
	for (let i=0; i<prods.length; i+=1) {
		if (prods[i].organic == true){
			product_items.push(prods[i]);
		}		
	}
	return product_items;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenPhrase) {
	let totalPrice = 0;
	// let chosenProducts = [];
	for (let i=0; i<chosenPhrase.length; i++){
		var start = chosenPhrase[i].indexOf("(") + 2;
		var end = chosenPhrase[i].indexOf(")");
		var value = chosenPhrase[i].substr(start, (end - start));
		totalPrice += parseFloat(value);		
	}	
	// for (let i=0; i<products.length; i+=1) {
	// 	if (chosenProducts.indexOf(products[i].name) > -1){
	// 		totalPrice += products[i].price;
	// 	}
	// }
	return totalPrice.toFixed(2);
}
