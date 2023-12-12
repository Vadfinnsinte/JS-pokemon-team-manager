// import {MakeHTML} from "./search.js"
import { displayPoke, searchBtn, searchInput, chosenpokemonList} from "./ajax.js"
import { removeSearchTeam } from "./script.js"
let myTeam = document.querySelector(".my-team")
let myPokes = document.querySelector(".display-my-poke")
let reservePoke = document.querySelector(".display-my-reseve-poke")
let teamList 
let reserveList


myTeam.addEventListener("click",() => {
	if(chosenpokemonList){
	teamList = chosenpokemonList.slice(0,3)
	reserveList = chosenpokemonList.slice(3)
	
	}
	removeSearchTeam()
teamList.forEach( element => {
		let createTeamPokeElement = document.createElement("div")
		createTeamPokeElement.classList.add("pokemon-search-div")
			if(element.sprites){
				createTeamPokeElement.innerHTML = `<img class="img-edit" src=https://icons.iconarchive.com/icons/iconsmind/outline/512/Pencil-icon.png><h4>${element.name}</h4><img src="${element.sprites}"><button class = "remove-from-team-btn">remove</button> `
				myPokes.append(createTeamPokeElement)}
			else if (!element.sprites){
				createTeamPokeElement.innerHTML = `<img class="img-edit" src=https://icons.iconarchive.com/icons/iconsmind/outline/512/Pencil-icon.png> <h4>${element.name}</h4> <p>BILD SAKNAS</p><button class = "remove-from-team-btn">REMOVE</button> `
				myPokes.append(createTeamPokeElement)
				// console.log(element.name, element.sprites);
			}
			// }
	})
reserveList.forEach( element => {
	let createTeamPokeElement = document.createElement("div")
	createTeamPokeElement.classList.add("pokemon-search-div")
		if(element.sprites){
			createTeamPokeElement.innerHTML = `<img class="img-edit" src=https://icons.iconarchive.com/icons/iconsmind/outline/512/Pencil-icon.png> <h4>${element.name}</h4><img src="${element.sprites}"><button class = "remove-from-team-btn">ADD</button> `
			reservePoke.append(createTeamPokeElement)}
		else if (!element.sprites){
			createTeamPokeElement.innerHTML = `<img class="img-edit" src=https://icons.iconarchive.com/icons/iconsmind/outline/512/Pencil-icon.png> <h4>${element.name}</h4> <p>BILD SAKNAS</p><button class = "remove-from-team-btn">ADD</button> `
			reservePoke.append(createTeamPokeElement)
			// console.log(element.name, element.sprites);
		}
})
	})
export { myPokes, myTeam, reservePoke,reserveList}
