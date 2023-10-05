const { Router } = require('express');
const { getPokemonHandler, getIdPokemonHandler } = require('../handlers/getPokemonHandler');
const postPokemonHandler = require('../handlers/postPokemonHandler');

const pokemonRouter = Router();

pokemonRouter.get('/:id', getIdPokemonHandler);

pokemonRouter.get('/', getPokemonHandler);

pokemonRouter.post('/', postPokemonHandler);

module.exports = pokemonRouter;