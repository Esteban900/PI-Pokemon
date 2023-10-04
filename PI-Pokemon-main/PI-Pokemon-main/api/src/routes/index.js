const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonRouter = require('../models/Pokemon');
const typeRouter = require('../models/Type');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemon', pokemonRouter);
router.use('/type', typeRouter);

module.exports = router;
