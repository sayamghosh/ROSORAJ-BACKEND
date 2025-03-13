const Sweet = require('../model/sweet.model');

async function handleGetAllSweet(req,res){
    try {
        const result = await Sweet.find();
        return res.json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    handleGetAllSweet
};