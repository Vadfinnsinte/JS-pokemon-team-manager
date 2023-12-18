

function createPokemonCard(savedReserved, reservePoke, orderReserve,element){
	let createTeamPokeElement
	console.log("my Team 5");
	savedReserved.push(element)
	createTeamPokeElement = document.createElement("div")
	createTeamPokeElement.classList.add("pokemon-search-div")
	
	createTeamPokeElement.innerHTML = createRenameHTMLString(element,orderReserve)
	
	// orderReserve ++
	
	reservePoke.append(createTeamPokeElement)
	return createTeamPokeElement
}

function createRenameHTMLString(element, order){
	let abilitiesHtml = element.ability.map(ability => `<p class="ability">${ability}</p>`).join('');
	let src 
	if (element.sprites) {
		src = element.sprites
	}
	else {
		src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
	}


	return `
	<p class= "orderCard">${order}</p>
		<button class="move-element-up"></button>
		<input type="text" class="invisible change-name" >
		<h4 class="pokemon-name"><span>${element.nickname}</span> <img class="img-edit" src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Pencil-icon.png"></h4>
		<img src="${src}">
		<div class="ability-container" >
		<p class="ability" >Abilities: ${abilitiesHtml}<p/>
		</div>
		<button class = "remove-from-team-btn">Kicka</button>
		<button class="move-element-down"></button>`
}

function pTaggHowManyPokeInTeam(antalIteam, howManyInTeamDiv){
	howManyInTeamDiv.innerHTML = "" 
	let teamPtagg = document.createElement("p")
	teamPtagg.innerText = antalIteam
	howManyInTeamDiv.append(teamPtagg)
	
}
export {createPokemonCard, createRenameHTMLString, pTaggHowManyPokeInTeam}