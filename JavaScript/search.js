import { collectAPI, pokemonList } from "./ajax.js";


import {  reserveList, teamList, howManyInTeam} from "./team.js"
import { removeMyTeam } from "./script.js"
import { creatorsTips } from "./CreatorPoke.js";

let searchInput = document.querySelector(".search-bar")
let searchBtn = document.querySelector(".search-btn")
let displayPoke = document.querySelector(".display-poke")
let headerCreator = document.querySelector(".h-creator")
let count = 0
let countReserve = 0

let createSearchPokeElement

await collectAPI()
let alreadyCreated = 0

searchBtn.addEventListener("click", async () => {
	removeMyTeam()
	creatorsTips.forEach(async element => {
		if(searchInput.value.trim() === ""){
		headerCreator.classList.add("alt")
		}
		
		if (alreadyCreated < 8){
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
			createSearchPokeElement.innerHTML = `<h4>${element.name}</h4>
			<img src="${src}">
			<div class="ability-container" >
			<p class="ability" >Abilities: ${abilitiesHtml}<p/>
			</div>
			<button class = "add-to-team-btn">Add</button> `
			displayPoke.append(createSearchPokeElement)
			alreadyCreated++

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
	}
	});		
	})

searchInput.addEventListener("keyup", ()  => {
	
	let searchTerm = searchInput.value.toUpperCase()
	let matchingPokemon = pokemonList.filter(pokemon => pokemon.name.includes(searchTerm)||pokemon.types.some(type => type.includes(searchTerm)));
	displayPoke.innerHTML = "" 
	headerCreator.classList.remove("alt")
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

export {collectAPI, createSearchPokeElement, displayPoke, searchBtn, searchInput, headerCreator}