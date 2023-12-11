let searchInput = document.querySelector(".search-bar")
let searchBtn = document.querySelector(".search-btn")
let pokemonList = []

function collectAPI() {
	searchBtn.addEventListener("click", async () => {
	// const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
	// ${searchTerm}
	searchInput.classList.toggle("alt")
	searchBtn.classList.toggle("alt")
	try {
		let response = await fetch(url)
		let data = await response.json()
		if (data.results && data.results.length > 0) {
			pokemonList = data.results.map(pokemon => {
				return {
					name: pokemon.name.toLowerCase(),
                    url: pokemon.url
                };
            });
			
        }
	}catch{
		console.log("Nårgot gick fel");
	}
	
})
}
function searchPokemon (){
searchInput.addEventListener("keyup", () => {
	let searchTerm = searchInput.value.toLowerCase()
	let matchingPokemon = pokemonList.filter(pokemon => pokemon.name.includes(searchTerm));
	console.log(matchingPokemon);
});}

export {collectAPI, searchPokemon}