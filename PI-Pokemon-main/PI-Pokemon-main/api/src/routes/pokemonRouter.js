const { Router } = require('express');

const pokemonRouter = Router();

pokemonRouter.get('/:id', (req,res) => {
    res.send("estoy en pkm id");
});

pokemonRouter.get('/', (req,res) => {
    res.send("estoy en all pkm");
});

pokemonRouter.post('/', (req,res) => {
    res.send("estoy en post");
});

module.exports = pokemonRouter;