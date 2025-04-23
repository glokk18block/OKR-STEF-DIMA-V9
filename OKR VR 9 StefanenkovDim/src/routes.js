const express = require('express');  
const { getGyms, getGymById, createGym, updateGym, deleteGym } = require('../controllers');  

const router = express.Router();  

router.get('/', getGyms);  
router.get('/:id', getGymById);  
router.post('/', createGym);  
router.put('/:id', updateGym);
router.delete('/:id', deleteGym);

module.exports = router;  