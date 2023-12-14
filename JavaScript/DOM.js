function createPokemonCard(savedReserved, reservePoke, orderReserve,element){
	let createTeamPokeElement
	console.log("my Team 5");
	savedReserved.push(element)
	createTeamPokeElement = document.createElement("div")
	createTeamPokeElement.classList.add("pokemon-search-div")
	
	createTeamPokeElement.innerHTML = createRenameHTMLString(element,orderReserve)
	
	orderReserve ++
	
	reservePoke.append(createTeamPokeElement)
	return createTeamPokeElement
}

function createRenameHTMLString(element, order){

	let src 
	if (element.sprites) {
		src = element.sprites
	}
	else {
		src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
	}


	return `
		<p>${order}</p>
		<input type="text" class="invisible change-name" >
		<h4 class="pokemon-name"><span>${element.nickname}</span> <img class="img-edit" src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Pencil-icon.png"></h4>
		<img src="${src}">
		<button class = "remove-from-team-btn">remove</button> `
}
export {createPokemonCard, createRenameHTMLString}