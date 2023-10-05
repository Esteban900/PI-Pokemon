const axios = require('axios');
const { getAllPokemon } = require('./infoPokemonController');


const getNamePokemon = (name) => {
    const allPokemon = getAllPokemon();
    // if(name) {
    //     const 
    // }
};




const getIdPokemon = () => {
    return ("estoy en id controller")
};

module.exports = { getIdPokemon, getNamePokemon};