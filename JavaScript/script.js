import { searchBtn, searchInput, displayPoke } from "./search.js"
import { myPokes,myTeam,reservePoke } from "./team.js"
let hTeam = document.querySelector(".h-team")
let hTeamReserve = document.querySelector(".h-team-reserve")
function removeMyTeam(){
	searchInput.classList.toggle("alt")
	searchInput.focus()
	searchBtn.classList.toggle("alt")
	displayPoke.classList.toggle("alt")
	myPokes.classList.remove("alt")
	myTeam.classList.remove("alt")
	reservePoke.classList.remove("alt")
	hTeam.classList.remove("alt")
	hTeamReserve.classList.remove("alt")
}
function removeSearchTeam(){
	myPokes.classList.toggle("alt")
	myTeam.classList.toggle("alt")
	reservePoke.classList.toggle("alt")
	searchBtn.classList.remove("alt")
	displayPoke.classList.remove("alt")
	searchInput.classList.remove("alt")
	hTeam.classList.toggle("alt")
	hTeamReserve.classList.toggle("alt")
}


export {removeSearchTeam, removeMyTeam}