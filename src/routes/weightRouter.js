const weightController = require('../controllers/weightController');

const { Router } = require('express');

const router = Router();

router.get('/:userId', weightController.getByUserId);

module.exports = router;
