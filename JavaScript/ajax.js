let pokemonList
async function  collectAPI() {
	
	const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

	try {
		let response = await fetch(url)
		let data = await response.json()
		if (data.results && data.results.length > 0) {
			pokemonList = await Promise.all(
				data.results.map(async (pokemon) => {
				  try {
					const pokeURL = pokemon.url;
					let pokeResponse = await fetch(pokeURL);
					let dataPoke = await pokeResponse.json();
					
					if (dataPoke.sprites.front_default) {
						let abilities = dataPoke.abilities.map((ability) => ability.ability.name.toUpperCase());
						let type = dataPoke.types.map((type) => type.type.name.toUpperCase())
					  return {
						name: pokemon.name.toUpperCase(),
						nickname: pokemon.name.toUpperCase(),
						url: pokemon.url,
						sprites: dataPoke.sprites.front_default,
						ability: abilities,
						types: type
					  };
					} else {
						let abilities = dataPoke.abilities.map((ability) => ability.ability.name.toUpperCase());
						let type = dataPoke.types.map((type) => type.type.name.toUpperCase())
					  return {
						name: pokemon.name.toUpperCase(),
						nickname: pokemon.name.toUpperCase(),
						url: pokemon.url,
						ability: abilities,
						types: type
					  };
					}
				  } catch (error) {
					console.error("Error fetching Pokémon data:", error);
				  
				  }
				})
				);
				console.log(pokemonList);
			}
		  } catch (error) {
			console.log("Something went wrong:", error);
		  }
		;}

export {collectAPI, pokemonList}


// abilities
// : 
// [{…}]
// base_experience
// : 
// null
// forms
// : 
// [{…}]
// game_indices
// : 
// []
// height
// : 
// 12
// held_items
// : 
// []
// id
// : 
// 10273
// is_default
// : 
// false
// location_area_encounters
// : 
// "https://pokeapi.co/api/v2/pokemon/10273/encounters"
// moves
// : 
// (62) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// name
// : 
// "ogerpon-wellspring-mask"
// order
// : 
// -1
// past_abilities
// : 
// []
// past_types
// : 
// []
// species
// : 
// {name: 'ogerpon', url: 'https://pokeapi.co/api/v2/pokemon-species/1017/'}
// sprites
// : 
// {back_default: null, back_female: null, back_shiny: null, back_shiny_female: null, front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10273.png', …}
// stats
// : 
// (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// types
// : 
// Array(2)
// 0
// : 
// slot
// : 
// 1
// type
// : 
// {name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/'}
// [[Prototype]]
// : 
// Object
// 1
// : 
// {slot: 2, type: {…}}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)
// weight
// : 
// 398
// [[Prototype]]
// : 
// Object