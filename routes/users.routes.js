const controller = require('../controllers');
const { validateCreateUser } = require('../middleware/users');
const router = require('../utils/router');

const userRouter = router;

userRouter.post('/', validateCreateUser, controller.users.create);

module.exports = userRouter;
