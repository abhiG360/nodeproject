const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { validateUser, validateId } = require('../validators/userValidator');
const authMiddleware = require('../middlewares/authMiddleware');


router.use(authMiddleware);


router.post('/', validateUser, UserController.createUser);
router.get('/:userId', validateId, UserController.getUserById);
router.get('/', UserController.getUsers);
router.put('/:userId', validateId, validateUser, UserController.updateUser);
router.delete('/:userId', validateId, UserController.deleteUser);

module.exports = router;
