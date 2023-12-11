// import {MakeHTML} from "./search.js"
let myTeam = document.querySelector(".my-team")
let myPokes = document.querySelector(".display-my-poke")

let teamList = []

myTeam.addEventListener("click",() => {
	myPokes.classList.toggle("alt")
	myTeam.classList.toggle("alt")
teamList.forEach( element => {
		let createTeamPokeElement = document.createElement("div")
			if(element.sprites){
				createTeamPokeElement.innerHTML = `<h4>${element.name}</h4><img src="${element.sprites}"><button class = "remove-from-team-btn">remove</button> `
				myPokes.append(createTeamPokeElement)}
			else if (!element.sprites){
				createTeamPokeElement.innerHTML = `<h4>${element.name}</h4> <p>BILD SAKNAS</p><button class = "remove-from-team-btn">remove</button> `
				myPokes.append(createTeamPokeElement)
				// console.log(element.name, element.sprites);
			}
		}
	
)
	})
export {teamList}
