// async function searchBar() {

//     fetch(apiKey)
//     .then()

// }

<script src="https://cdn.jsdelivr.net/npm/fuse.js@7.0.0"></script>

/* API STUFF */
// const apiKey = 'fec8b519f6944b899cdbe281372e48c2'
// const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=African,Asian,American,EasternEuropeean,European,Indian,Mediterranean,Mexican,MiddleEastern&includeIngredients=true`;

// const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=African,Asian,American,EasternEuropeean,European,Indian,Mediterranean,Mexican,MiddleEastern&includeIngredients=true`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'fec8b519f6944b899cdbe281372e48c2',
// 		'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

/* MORE API */
// const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?limitLicense=false&offset=5&number=10&instructionsRequired=true&ranking=2&addRecipeInformation=true&cuisine=african%2C%20asian%2C%20indian%2C%20french%2C%20italian%2C%20mexican%2C%20spanish%2C%20middle%20eastern%2C%20cajun%2C%20greek%2C%20eastern%20european%2C%20caribbean%2C%20nordic&type=main%20course%2C%20side%20dish%2C%20dessert%2C%20appetizer%2C%20salad%2C%20breakfast%2C%20soup%2C%20beverage%2C%20sauce&equipment=pan%2C%20blender%2C%20pot%20';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'd0664dc842msh0bf3c7e31fd17a3p125b0ajsn05a32e9c1e5a',
// 		'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const Fuse = require('fuse.js')

fuse.search(/* pattern , options*/)


for(let i = 0; i < 20;i++) {

}