const controller = require('../controllers');
const { validateCreateUser } = require('../middleware/users');
const { validateUpdateUser } = require('../middleware/user.update');
const router = require('../utils/router');

const userRouter = router;

userRouter.post('/', validateCreateUser, controller.users.create);

userRouter.patch('/:id', validateUpdateUser, controller.users.update);

module.exports = userRouter;
