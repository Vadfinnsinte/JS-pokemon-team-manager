// import {MakeHTML} from "./search.js"
import { displayPoke, searchBtn, searchInput} from "./search.js"
import { removeSearchTeam, removeMyTeam } from "./script.js"
let myTeam = document.querySelector(".my-team")
let myPokes = document.querySelector(".display-my-poke")
let reservePoke = document.querySelector(".display-my-reseve-poke")
let chosenpokemonList = []
let teamList = []
let reserveList = []
let savedReserved = []
let savedTeam = []
let btn = document.querySelector("#btn")

// if (chosenpokemonList){
	// teamList = chosenpokemonList.slice(0,3)
	// reserveList = chosenpokemonList.slice(3)
	
	// }
	myTeam.addEventListener("click",() => {
		let order = 1
	
		removeSearchTeam()
		
				myPokes.innerHTML = ""
				reservePoke.innerHTML = ""
				
				
			teamList.forEach( element => { 
			let createTeamPokeElement
			savedTeam.push(element)
			createTeamPokeElement = document.createElement("div")
			createTeamPokeElement.classList.add("pokemon-search-div")
		
				if(element.sprites){
					createTeamPokeElement.innerHTML = `<p>${order}</p><h4>${element.name}<img class="img-edit" src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Pencil-icon.png"></h4><img src="${element.sprites}"><button class = "remove-from-team-btn">remove</button> `
					myPokes.append(createTeamPokeElement)}
				else if (!element.sprites){
					createTeamPokeElement.innerHTML = `<p>${order}</p> <h4>${element.name} <img class="img-edit" src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Pencil-icon.png"></h4> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"><button class = "remove-from-team-btn">REMOVE</button> `
					myPokes.append(createTeamPokeElement)
				
				}
				order++
		})
		let orderReserve = 1
			reserveList.forEach(element => {
				let createTeamPokeElement
				console.log("my Team 5");
				savedReserved.push(element)
				createTeamPokeElement = document.createElement("div")
				createTeamPokeElement.classList.add("pokemon-search-div")
				if(element.sprites){
					createTeamPokeElement.innerHTML = `<p>${orderReserve}</p><h4>${element.name} <img class="img-edit" src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Pencil-icon.png"></h4><img src="${element.sprites}"><button class = "remove-from-team-btn">ADD</button> `
					reservePoke.append(createTeamPokeElement)}
				else if (!element.sprites){
					createTeamPokeElement.innerHTML = `<p>${orderReserve}</p><h4>${element.name}<img class="img-edit" src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Pencil-icon.png"></h4> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"><button class = "remove-from-team-btn">ADD</button> `
						reservePoke.append(createTeamPokeElement)
						
						console.log(count);
					}
				orderReserve ++
			})
	
})


export { myPokes, myTeam, reservePoke,reserveList, chosenpokemonList, teamList}
