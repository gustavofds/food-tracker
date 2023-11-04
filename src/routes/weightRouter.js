const weightController = require('../controllers/weightController');

const { Router } = require('express');

const router = Router();


router.get('/', weightController.getAllByUserId);
router.post('/', weightController.addWeight);
router.get('/:id', weightController.getById);

module.exports = router;
