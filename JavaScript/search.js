import { collectAPI, pokemonList } from "./ajax.js";


import {  reserveList, teamList, howManyInTeam} from "./team.js"
import { removeMyTeam } from "./script.js"

// import { MakeHTML } from "./search.js"
let searchInput = document.querySelector(".search-bar")
let searchBtn = document.querySelector(".search-btn")
let displayPoke = document.querySelector(".display-poke")
let count = 0
let countReserve = 0

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
		let src 
		if (element.sprites) {
			src = element.sprites
		}
		else {
			src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
		}

		createSearchPokeElement = document.createElement("div")
		createSearchPokeElement.classList.add("pokemon-search-div")
		let abilitiesHtml = element.ability.map(ability => `<p class="ability">${ability}</p>`).join('');
		// if(element.sprites){
			createSearchPokeElement.innerHTML = `<h4>${element.name}</h4>
			<img src="${src}">
			<div class="ability-container" >
			<p class="ability" >Abilities: ${abilitiesHtml}<p/>
			</div>
			<button class = "add-to-team-btn">Add</button> `
			displayPoke.append(createSearchPokeElement)
	
		
		let addToTeamBtn = createSearchPokeElement.querySelector(".add-to-team-btn")
		addToTeamBtn.addEventListener("click", () => {
			
			
			if(count < 3){
				teamList.push({...element, id: count})
				
				
				count++	
			}
			else {
				reserveList.push({...element, id: countReserve})
				
				countReserve++
				
			}
			howManyInTeam(teamList)
		})
	});
	
});
// }

export {collectAPI, createSearchPokeElement, displayPoke, searchBtn, searchInput}