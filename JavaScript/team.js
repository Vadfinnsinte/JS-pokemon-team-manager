// import {MakeHTML} from "./search.js"
import { displayPoke, searchBtn, searchInput, headerCreator} from "./search.js"
import { removeSearchTeam, removeMyTeam, startContent } from "./script.js"
import { createPokemonCard, createRenameHTMLString,pTaggHowManyPokeInTeam } from "./DOM.js"
let myTeam = document.querySelector(".my-team")
let myPokes = document.querySelector(".display-my-poke")
let reservePoke = document.querySelector(".display-my-reseve-poke")
let howManyInTeamDiv = document.querySelector(".how-many-in-team")
let teamList = []
let reserveList = []



howManyInTeam()

myTeam.addEventListener("click",() => {
	
	headerCreator.classList.remove("alt")
	removeSearchTeam()
	render()

	
})


function render(order, orderReserve) {
	order = 1
	orderReserve = 1
	myPokes.innerHTML = ""
	reservePoke.innerHTML = ""
	
	


	teamList.forEach((element) => { 
		let createTeamPokeElement
		createTeamPokeElement = document.createElement("div")
		createTeamPokeElement.classList.add("pokemon-search-div")
		
		createTeamPokeElement.innerHTML = createRenameHTMLString(element,order)

		myPokes.append(createTeamPokeElement)
		
		
		order++
		let  renamePokemon = createTeamPokeElement.querySelector(".img-edit")
		renamePokemon.addEventListener("click", () => {
			renamePokemonFunction(createTeamPokeElement, element)
		})
		let removeButton = createTeamPokeElement.querySelector(".remove-from-team-btn")
		removeButton.addEventListener("click", ()=>{
			removeTeamPokemon(element, order)
		})
		let moveElementUpBtn = createTeamPokeElement.querySelector(".move-element-up")
		let moveElementdownBtn = createTeamPokeElement.querySelector(".move-element-down")
		
		moveElementUpBtn.addEventListener("click",()=> {
			
			moveElementUp(createTeamPokeElement,element)
		})
		moveElementdownBtn.addEventListener("click",()=> {
			
			moveElementDown(createTeamPokeElement,element
			)
		})

	})
	
	reserveList.forEach((reservePokemon) => {	
		let createTeamPokeElement = createPokemonCard(reservePoke, orderReserve, reservePokemon);
		
		let  renamePokemon = createTeamPokeElement.querySelector(".img-edit")
		renamePokemon.addEventListener("click", () => {
			renamePokemonFunction(createTeamPokeElement, reservePokemon)
		})
		orderReserve++ 
		let removeButton = createTeamPokeElement.querySelector(".remove-from-team-btn")
		removeButton.addEventListener("click", ()=>{
			removeReserveTeamPokemon( reservePokemon, orderReserve)
		})
		let moveElementUpBtn = createTeamPokeElement.querySelector(".move-element-up")
		let moveElementdownBtn = createTeamPokeElement.querySelector(".move-element-down")
		
		moveElementUpBtn.addEventListener("click",()=> {
			moveReserveElementUp(createTeamPokeElement, reservePokemon)
		})
		moveElementdownBtn.addEventListener("click",()=> {
			moveReserveElementDown(createTeamPokeElement, reservePokemon)
		})
	})
	
}
function howManyInTeam() {
	
	if (!teamList.length){
		let antalIteam = "Du behöver 3 till medlemmar i Teamet."
		pTaggHowManyPokeInTeam(antalIteam, howManyInTeamDiv)
	}
	else if (teamList.length === 1){
		let antalIteam = "Du behöver 2 till medlemmar i Teamet."
		pTaggHowManyPokeInTeam(antalIteam, howManyInTeamDiv)
	}
	else if (teamList.length === 2){
		let antalIteam = "Du behöver 1 till medlem i Teamet."
		pTaggHowManyPokeInTeam(antalIteam, howManyInTeamDiv)
	}
	else {
		howManyInTeamDiv.classList.add("alt")
	}
	
	}
function renamePokemonFunction(createTeamPokeElement, element){
	let changeNameInput = createTeamPokeElement.querySelector(".change-name")
	let pokemonName = createTeamPokeElement.querySelector(".pokemon-name span")
	let pokemonNameHead = createTeamPokeElement.querySelector(".pokemon-name")
	changeNameInput.value = pokemonName.innerText 
	changeNameInput.classList.remove("invisible")
	pokemonNameHead.classList.add("invisible")
	changeNameInput.focus()
	changeNameInput.addEventListener("blur", (event) => {
		updateNickname(pokemonName, changeNameInput, pokemonNameHead, element)
	})
	changeNameInput.addEventListener("keypress", (event) => {
		if(event.key ==="Enter"){
		updateNickname(pokemonName, changeNameInput, pokemonNameHead, element)
	}
	})
}
function updateNickname(pokemonName, changeNameInput, pokemonNameHead, element) {
    pokemonName.innerText = changeNameInput.value;
    element.nickname = changeNameInput.value;
    changeNameInput.classList.add("invisible");
    pokemonNameHead.classList.remove("invisible");
}

function removeTeamPokemon(element, order){
	let indexToRemove = teamList.indexOf(element)

	
	if(reserveList.length === 0){
		let pleaseAddToReserve = document.createElement("p")
		pleaseAddToReserve.classList.add("varning")
		pleaseAddToReserve.innerText = "Vänligen lägg till Reserver innan du kickar en Pokemon!"
		myPokes.prepend(pleaseAddToReserve)
		setTimeout(() => {
            pleaseAddToReserve.remove();
        }, 3000);
	}
	else {
		let moveToReserve = teamList.splice(indexToRemove, 1)[0]
		reserveList.push(moveToReserve)
		let reservePromotion = reserveList.shift()
		teamList.push(reservePromotion)
		render(order)
	}
	// howManyInTeamDiv.classList.remove("alt")
	// howManyInTeam()
	
	
}
function removeReserveTeamPokemon(reservePokemon, orderReserve){
	const indexToRemove = reserveList.indexOf(reservePokemon)
	reserveList.splice(indexToRemove, 1)
	render(orderReserve)
}

function moveElementUp(HTMLelement, element) {
	const currentIndex = teamList.indexOf(element);
    const previousIndex = currentIndex - 1;
	if(previousIndex >= 0){
    if (previousIndex < teamList.length) {
        HTMLelement.parentNode.insertBefore(HTMLelement.previousElementSibling, HTMLelement);

        [teamList[currentIndex], teamList[previousIndex]] = [teamList[previousIndex], teamList[currentIndex]];

        render();
    }
}
}

function moveElementDown(HTMLelement, element) {
    const currentIndex = teamList.indexOf(element);
    const nextIndex = currentIndex + 1;

    if (nextIndex < teamList.length) {
        HTMLelement.parentNode.insertBefore(HTMLelement.nextElementSibling, HTMLelement);

        [teamList[currentIndex], teamList[nextIndex]] = [teamList[nextIndex], teamList[currentIndex]];

        render();
    }
}
function moveReserveElementUp(HTMLelement, reservePokemon) {
	const currentIndex = reserveList.indexOf(reservePokemon);
    const previousIndex = currentIndex - 1;
	if(previousIndex >= 0){
    if (previousIndex < reserveList.length) {
        HTMLelement.parentNode.insertBefore(HTMLelement.previousElementSibling, HTMLelement);

        [reserveList[currentIndex], reserveList[previousIndex]] = [reserveList[previousIndex], reserveList[currentIndex]];

        render();
    }
}
}

function moveReserveElementDown(HTMLelement, reservePokemon) {
    const currentIndex = reserveList.indexOf(reservePokemon);
    const nextIndex = currentIndex + 1;

    if (nextIndex < reserveList.length) {
        HTMLelement.parentNode.insertBefore(HTMLelement.nextElementSibling, HTMLelement);

        [reserveList[currentIndex], reserveList[nextIndex]] = [reserveList[nextIndex], reserveList[currentIndex]];

        render();
    }
}



export { myPokes, myTeam, reservePoke,reserveList, teamList, howManyInTeam}

