const { Router } = require("express");


const typeRouter = Router();

typeRouter.get('/', (req, res) => {
    res.send("estoy en get de type")
});
module.exports = typeRouter;