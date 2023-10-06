const axios = require('axios');
const { Pokemon } = require('../db');
const { getAllPokemon } = require('./infoPokemonController');


const getNamePokemon = async (name) => {
   try {
       const allPokemon = await getAllPokemon();
       if(name) {
           const dbPokemonByName = await Pokemon.findAll({ where: { name: name }});
   
           let pokemonByName = allPokemon.filter( pkm => pkm.name.toLowerCase() === name.toLowerCase());
  
           const pkmName = [ ...dbPokemonByName, ...pokemonByName];
           
           if(pkmName.length) {
               return pkmName;
           } else { return "Pokemon does not exist"}
       }
   } catch (error) {
    throw error;
   }
};




const getIdPokemon = async (id, search) => {
    
    if(search ==="api") {
        const pkmData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = {
            name: pkmData.data.name,
            image: pkmData.data.sprites.other["dream_world"].front_default,
            hp: pkmData.data.stats[0].base_stat,
            attack: pkmData.data.stats[1].base_stat, 
            defense: pkmData.data.stats[2].base_stat,
            speed: pkmData.data.stats[5].base_stat,
            height: pkmData.data.height,
            weight: pkmData.data.weight,
            types: pkmData.data.types.map(el => el.type.name)
        };
        
        return pokemon;
    } else {
        const pkmDb = await Pokemon.findByPk(id);
        return pkmDb;
     }


};

module.exports = { getIdPokemon, getNamePokemon};