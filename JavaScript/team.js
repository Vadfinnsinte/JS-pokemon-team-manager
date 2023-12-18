// import {MakeHTML} from "./search.js"
import { displayPoke, searchBtn, searchInput} from "./search.js"
import { removeSearchTeam, removeMyTeam, startContent } from "./script.js"
import { createPokemonCard, createRenameHTMLString,pTaggHowManyPokeInTeam } from "./DOM.js"
let myTeam = document.querySelector(".my-team")
let myPokes = document.querySelector(".display-my-poke")
let reservePoke = document.querySelector(".display-my-reseve-poke")
let howManyInTeamDiv = document.querySelector(".how-many-in-team")
let chosenpokemonList = []
let teamList = []
let reserveList = []
let savedReserved = []
let savedTeam = []
let btn = document.querySelector("#btn")

howManyInTeam()

myTeam.addEventListener("click",() => {
	
	
	removeSearchTeam()
	render()
	howManyInTeam(teamList)
	
})


function render(order, orderReserve) {
	order = 1
	orderReserve = 1
	myPokes.innerHTML = ""
	reservePoke.innerHTML = ""
	


	teamList.forEach((element) => { 
		let createTeamPokeElement
		// savedTeam.push(element)
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
			console.log("klickat upp!");
			moveElementUp(createTeamPokeElement,element)
		})
		moveElementdownBtn.addEventListener("click",()=> {
			console.log("Klickat, ner!!");
			moveElementDown(createTeamPokeElement,element
			)
		})
		
	})
	
	reserveList.forEach((reservePokemon) => {	
		let createTeamPokeElement = createPokemonCard(savedReserved, reservePoke, orderReserve, reservePokemon);
		
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
			console.log("klickat upp!");
			moveReserveElementUp(createTeamPokeElement, reservePokemon)
		})
		moveElementdownBtn.addEventListener("click",()=> {
			console.log("Klickat, ner!!");
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
	console.log("rename cklick");
	let changeNameInput = createTeamPokeElement.querySelector(".change-name")
	let pokemonName = createTeamPokeElement.querySelector(".pokemon-name span")
	let pokemonNameHead = createTeamPokeElement.querySelector(".pokemon-name")
	changeNameInput.value = pokemonName.innerText 
	changeNameInput.classList.remove("invisible")
	pokemonNameHead.classList.add("invisible")
	changeNameInput.addEventListener("blur", () => {
		pokemonName.innerText = changeNameInput.value
		element.nickname = changeNameInput.value
		changeNameInput.classList.add("invisible")
		pokemonNameHead.classList.remove("invisible")
	})
}
function removeTeamPokemon(element, order){
	let moveToReserve = teamList.splice(element, 1)[0]
	reserveList.unshift(moveToReserve)
	let reservePromotion = reserveList.slice(1)[0]
	teamList.push(reservePromotion)
	render(order)
	
	
}
function removeReserveTeamPokemon(reservePokemon, orderReserve){
	reserveList.splice(reservePokemon, 1)[0]
	render(orderReserve)
}

function moveElementUp(HTMLelement, element) {
    const previousElement = HTMLelement.previousElementSibling;
    if (previousElement) {
        HTMLelement.parentNode.insertBefore(HTMLelement, previousElement);
        const currentIndex = teamList.indexOf(element);
        const previousIndex = teamList.indexOf(previousElement.id);
        teamList.splice(currentIndex, 1);
        teamList.splice(previousIndex, 0, element);
        render();
    }
}

function moveElementDown(HTMLelement, element) {
    const nextElement = HTMLelement.nextElementSibling;
    if (nextElement) {
        HTMLelement.parentNode.insertBefore(nextElement, HTMLelement);
        const currentIndex = teamList.indexOf(element);
        const nextIndex = teamList.indexOf(nextElement.id);
        teamList.splice(nextIndex, 0, element);
        teamList.splice(currentIndex, 1);
        render();
    }
}
function moveReserveElementUp(HTMLelement, reservePokemon) {
    const previousElement = HTMLelement.previousElementSibling;
    if (previousElement) {
        HTMLelement.parentNode.insertBefore(HTMLelement, previousElement);
        const currentIndex = reserveList.indexOf(reservePokemon);
        const previousIndex = reserveList.indexOf(previousElement.id);
        reserveList.splice(currentIndex, 1);
        reserveList.splice(previousIndex, 0, reservePokemon);
        render();
    }
}

function moveReserveElementDown(HTMLelement, reservePokemon) {
    const nextElement = HTMLelement.nextElementSibling;
    if (nextElement) {
		HTMLelement.parentNode.insertBefore(nextElement, HTMLelement);
        const currentIndex = reserveList.indexOf(reservePokemon);
        const nextIndex = reserveList.indexOf(nextElement.id);
        reserveList.splice(nextIndex, 0, reservePokemon);
        reserveList.splice(currentIndex, 1);
        render();
    }
}



export { myPokes, myTeam, reservePoke,reserveList, chosenpokemonList, teamList, howManyInTeam}

