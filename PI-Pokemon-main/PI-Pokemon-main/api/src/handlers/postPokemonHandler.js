const { postPokemon } = require('../controllers/postPokemonController');

const postPokemonHandler = async (req,res) => {
   const { name, image, hp, attack, defense, speed, height, weight} = req.body;
   try {
    const newPokemon = await postPokemon(name, image, hp, attack, defense, speed, height, weight);
    res.status(200).json(newPokemon);
   } catch (error) {
    res.status(400).json({ error: error.message });
   }
};

module.exports = postPokemonHandler;

// ID. *
// Nombre. *
// Imagen. *
// Vida. *
// Ataque. *
// Defensa. *
// Velocidad.
// Altura.
// Peso.