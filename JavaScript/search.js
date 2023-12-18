import { collectAPI, pokemonList } from "./ajax.js";


import {  reserveList, chosenpokemonList, teamList, howManyInTeam} from "./team.js"
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
	howManyInTeam(teamList)
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
		let abilitiesHtml = element.ability.map(ability => `<p class="ability">${ability}</p>`).join('');
		if(element.sprites){
			createSearchPokeElement.innerHTML = `<h4>${element.name}</h4>
			<img src="${element.sprites}">
			<div class="ability-container" >
			<p class="ability" >Abilities: ${abilitiesHtml}<p/>
			</div>
			<button class = "add-to-team-btn">add</button> `
			displayPoke.append(createSearchPokeElement)
		}
		else {
			createSearchPokeElement.innerHTML = `<h4>${element.name}</h4> 
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png">
			<div class="ability-container" >
			<p class="ability" >Abilities: ${abilitiesHtml}<p/>
			</div>
			<button class = "add-to-team-btn">add</button> `
			displayPoke.append(createSearchPokeElement)
			// console.log(element.name, element.sprites);
			
		}
		
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

export {collectAPI, createSearchPokeElement, displayPoke, searchBtn, searchInput,chosenpokemonList}