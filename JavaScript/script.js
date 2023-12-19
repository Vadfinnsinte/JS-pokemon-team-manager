import { searchBtn, searchInput, displayPoke } from "./search.js"
import { myPokes,myTeam,reservePoke,howManyInTeam } from "./team.js"
let hTeam = document.querySelector(".h-team")
let hTeamReserve = document.querySelector(".h-team-reserve")
let startContent = document.querySelector(".welcome-section")
let pokebollStart = document.querySelector(".pokeboll-img")
function removeMyTeam(){
	searchInput.classList.add("alt")
	searchInput.focus()
	searchBtn.classList.add("alt")
	displayPoke.classList.add("alt")
	myPokes.classList.remove("alt")
	myTeam.classList.remove("alt")
	reservePoke.classList.remove("alt")
	hTeam.classList.remove("alt")
	hTeamReserve.classList.remove("alt")
	startContent.classList.add("invisible")
	
}
function removeSearchTeam(){
	myPokes.classList.add("alt")
	myTeam.classList.add("alt")
	reservePoke.classList.add("alt")
	searchBtn.classList.remove("alt")
	displayPoke.classList.remove("alt")
	searchInput.classList.remove("alt")
	hTeam.classList.add("alt")
	hTeamReserve.classList.add("alt")
	startContent.classList.add("invisible")
}

function backToStart() {
	searchInput.classList.remove("alt")
	// searchInput.focus()
	searchBtn.classList.remove("alt")
	displayPoke.classList.remove("alt")
	myPokes.classList.remove("alt")
	myTeam.classList.remove("alt")
	reservePoke.classList.remove("alt")
	hTeam.classList.remove("alt")
	hTeamReserve.classList.remove("alt")
	startContent.classList.remove("invisible")
}
pokebollStart.addEventListener("click", () => {
	backToStart()
})


export {removeSearchTeam, removeMyTeam, startContent}