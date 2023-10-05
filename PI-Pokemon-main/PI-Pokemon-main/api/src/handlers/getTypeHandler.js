const { getTypeController } = require('../controllers/typeController');

const getTypeHandler = async (req,res) => {
    try {
       const allType = await getTypeController();
       res.status(200).json(allType)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getTypeHandler;