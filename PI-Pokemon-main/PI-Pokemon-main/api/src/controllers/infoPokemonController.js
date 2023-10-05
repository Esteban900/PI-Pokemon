const { Pokemon, Type } = require('../db');

const axios = require('axios');

//LLAMADO A API
const getApiInfo = async () => {
    const apiData = (await axios.get('https://pokeapi.co/api/v2/pokemon')).data;

    const returnUrl = async (url) => {
        const urlResponse = await axios(url);
        return urlResponse.data;
    }

    const apiInfo = await Promise.all( apiData.results.map( async (pokemon) => {
        const urlInfo = await returnUrl(pokemon.url);
    
        return {
            id: urlInfo.id,
            name: pokemon.name,
            image: urlInfo.sprites.other["dream_world"].front_default,
            hp: urlInfo.stats[0].base_stat,
            attack: urlInfo.stats[1].base_stat, 
            defense: urlInfo.stats[2].base_stat,
            speed: urlInfo.stats[5].base_stat,
            height: urlInfo.height,
            weight: urlInfo.weight,
            types: urlInfo.types.map(el => el.type.name),
            createInBd: false
        };

    }));

    return apiInfo;
}


//LLAMADO A BDD

const getDbInfo = async () => {
    return await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
}


const getAllPokemon = async () => {
    const apiInfoPokemon = await getApiInfo();
    const dbInfoPokemon = await getDbInfo();
    return[...apiInfoPokemon, ...dbInfoPokemon];
};

module.exports = {getAllPokemon};