const { Type } = require ('../db');
const axios = require('axios');

const getTypeController = async () => {
    const typeApi = (await axios.get('https://pokeapi.co/api/v2/type')).data;

    const typesAll = typeApi.results.map( el => el.name);
    typesAll.forEach(element => {
        Type.findOrCreate({
            where: {name: element}
        })
    });
    const allTypes = await Type.findAll();
    return allTypes;
};

module.exports = {getTypeController};