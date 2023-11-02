const { Router } = require('express');
const weightRouter = require('./weightRouter.js');
const userController = require('../controllers/userController.js');
const router = Router();

router.get('/', userController.getAll);

router.get('/:id', userController.getOne);

router.use('/weights', weightRouter);

module.exports = router;
