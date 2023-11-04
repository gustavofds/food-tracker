const { Router } = require('express');
const userController = require('../controllers/userController.js');
const router = Router();

router.get('/', userController.getAll);

router.get('/:id', userController.getOne);

module.exports = router;
