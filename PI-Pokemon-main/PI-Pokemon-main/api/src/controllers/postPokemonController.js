const { Pokemon, Type } = require('../db');


const createPokemon = async (name, image, hp, attack, defense, speed, height, weight, type) => {
  const newPokemon = await Pokemon.create({
    name, image, hp, attack, defense, speed, height, weight, type
  });

  const typeDb = await Type.findAll({
    where: {name: type}
  })

  newPokemon.addType(typeDb);
  return "Pokemon created successfully";
};

module.exports = {createPokemon};