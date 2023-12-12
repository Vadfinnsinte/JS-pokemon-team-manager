import { searchBtn, searchInput, displayPoke } from "./ajax.js"
import { myPokes,myTeam,reservePoke } from "./team.js"

function removeMyTeam(){
	searchInput.classList.toggle("alt")
	searchInput.focus()
	searchBtn.classList.toggle("alt")
	displayPoke.classList.toggle("alt")
	myPokes.classList.remove("alt")
	myTeam.classList.remove("alt")
	reservePoke.classList.remove("alt")
}
function removeSearchTeam(){
	myPokes.classList.toggle("alt")
	myTeam.classList.toggle("alt")
	reservePoke.classList.toggle("alt")
	searchBtn.classList.remove("alt")
	displayPoke.classList.remove("alt")
	searchInput.classList.remove("alt")
}


export {removeSearchTeam, removeMyTeam}