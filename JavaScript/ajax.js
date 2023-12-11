import { teamList } from "./team.js"
let searchInput = document.querySelector(".search-bar")
let searchBtn = document.querySelector(".search-btn")
let displayPoke = document.querySelector(".display-poke")
let pokemonList = []

function collectAPI() {
	searchBtn.addEventListener("click", async () => {
	const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
	// ${searchTerm}
	searchInput.classList.toggle("alt")
	searchInput.focus()
	searchBtn.classList.toggle("alt")
	displayPoke.classList.toggle("alt")
	try {
		let response = await fetch(url)
		let data = await response.json()
		if (data.results && data.results.length > 0) {
			pokemonList = await Promise.all(
				data.results.map(async (pokemon) => {
				  try {
					const pokeURL = pokemon.url;
					let pokeResponse = await fetch(pokeURL);
					let dataPoke = await pokeResponse.json();
					if (dataPoke.sprites.front_default) {
					  return {
						name: pokemon.name.toUpperCase(),
						url: pokemon.url,
						sprites: dataPoke.sprites.front_default
					  };
					} else {
					  return {
						name: pokemon.name.toUpperCase(),
						url: pokemon.url,
					  };
					}
				  } catch (error) {
					console.error("Error fetching Pokémon data:", error);
				  
				  }
				})
			  );
			}
		  } catch (error) {
			console.log("Something went wrong:", error);
		  }
		});}
		
function searchPokemonAndAdd (){
searchInput.addEventListener("keyup", () => {
	let searchTerm = searchInput.value.toUpperCase()
	let matchingPokemon = pokemonList.filter(pokemon => pokemon.name.includes(searchTerm));
	console.log(matchingPokemon);
	displayPoke.innerHTML = "" 

	if (matchingPokemon) {
		matchingPokemon.forEach(async element => {
			let createSearchPokeElement = document.createElement("div")
			createSearchPokeElement.classList.add("pokemon-search-div")
			if(element.sprites){
				createSearchPokeElement.innerHTML = `<h4>${element.name}</h4><img src="${element.sprites}"><button class = "add-to-team-btn">add</button> `
				displayPoke.append(createSearchPokeElement)}
			else if (!element.sprites){
				createSearchPokeElement.innerHTML = `<h4>${element.name}</h4> <p>BILD SAKNAS</p><button class = "add-to-team-btn">add</button> `
				displayPoke.append(createSearchPokeElement)
				// console.log(element.name, element.sprites);
			}
			let addToTeamBtn = createSearchPokeElement.querySelector(".add-to-team-btn")
			addToTeamBtn.addEventListener("click", () => {
				teamList.push(element)
				console.log(teamList);
			})
		});
	}
});}

export {collectAPI, searchPokemonAndAdd}