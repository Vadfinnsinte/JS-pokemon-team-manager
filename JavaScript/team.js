// import {MakeHTML} from "./search.js"
import { displayPoke, searchBtn, searchInput} from "./search.js"
import { removeSearchTeam, removeMyTeam } from "./script.js"
import { createPokemonCard, createRenameHTMLString } from "./DOM.js"
let myTeam = document.querySelector(".my-team")
let myPokes = document.querySelector(".display-my-poke")
let reservePoke = document.querySelector(".display-my-reseve-poke")
let chosenpokemonList = []
let teamList = []
let reserveList = []
let savedReserved = []
let savedTeam = []
let btn = document.querySelector("#btn")



myTeam.addEventListener("click",() => {
	
	
	removeSearchTeam()
	render()

	
})
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
	})
}
export { myPokes, myTeam, reservePoke,reserveList, chosenpokemonList, teamList}


// let a = 'dnfjdnkfndkfndjf'
// let b
// if( element.sprites ) { b = '<img .../>' }
// let c = 'jyhftgrgdrgrd'
// innerHTML = a + b + c