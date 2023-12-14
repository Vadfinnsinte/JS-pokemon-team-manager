import { collectAPI, pokemonList } from "./ajax.js";


import {  reserveList, chosenpokemonList, teamList} from "./team.js"
import { removeMyTeam } from "./script.js"

// import { MakeHTML } from "./search.js"
let searchInput = document.querySelector(".search-bar")
let searchBtn = document.querySelector(".search-btn")
let displayPoke = document.querySelector(".display-poke")
let count = 0

let createSearchPokeElement

await collectAPI()

searchBtn.addEventListener("click", async () => {
	removeMyTeam()
});
// function searchPokemonAndAdd (){
	searchInput.addEventListener("keyup", ()  => {
		// console.log(pokemonList);
	let searchTerm = searchInput.value.toUpperCase()
	let matchingPokemon = pokemonList.filter(pokemon => pokemon.name.includes(searchTerm));
	console.log(matchingPokemon);
	displayPoke.innerHTML = "" 


		matchingPokemon.forEach(async element => {
			 createSearchPokeElement = document.createElement("div")
			createSearchPokeElement.classList.add("pokemon-search-div")
				if(element.sprites){
					createSearchPokeElement.innerHTML = `<h4>${element.name}</h4><img src="${element.sprites}"><button class = "add-to-team-btn">add</button> `
					displayPoke.append(createSearchPokeElement)}
				else {
					createSearchPokeElement.innerHTML = `<h4>${element.name}</h4> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"><button class = "add-to-team-btn">add</button> `
					displayPoke.append(createSearchPokeElement)
					// console.log(element.name, element.sprites);
				
			}
			let addToTeamBtn = createSearchPokeElement.querySelector(".add-to-team-btn")
			addToTeamBtn.addEventListener("click", () => {
				console.log("add to Team", count, element.name);;
				if(count < 3){
				teamList.push({...element})
				// console.log(teamList);
				count++	}
				else {
					reserveList.push({...element})
					// console.log(reserveList);
				}
			})
		});
	
});
// }

export {collectAPI, createSearchPokeElement, displayPoke, searchBtn, searchInput,chosenpokemonList}