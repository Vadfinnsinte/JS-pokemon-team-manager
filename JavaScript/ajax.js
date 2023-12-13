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
					  return {
						name: pokemon.name.toUpperCase(),
						url: pokemon.url,
						sprites: dataPoke.sprites.front_default
					  };
					} else {
					  return {
						name: pokemon.name.toUpperCase(),
						url: pokemon.url,
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