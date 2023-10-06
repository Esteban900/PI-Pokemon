const { getNamePokemon, getIdPokemon } = require('../controllers/pokemonController');
const { getAllPokemon } = require('../controllers/infoPokemonController');

const getPokemonHandler = async (req, res) => {
const { name } = req.query;
try {
    const result = (name) ? await getNamePokemon(name) : await getAllPokemon();

    res.status(200).json(result);

} catch (error) {
    res.status(400).json({error: error.message})
}
};

const getIdPokemonHandler = async (req,res) => {
    const { id } = req.params;
    const search = isNaN(id) ? "bdd" : "api";
    try {
        const searchByIdPokemon = await getIdPokemon(id, search);
        res.status(200).json({ searchByIdPokemon })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getPokemonHandler, getIdPokemonHandler}