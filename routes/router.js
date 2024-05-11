const Router = require('express');

const authRouter = require('./auth.routes');
const productRouter = require('./product.routes');

const jwtMiddleware = require('../middlewares/jwt');

const router = Router();

router.use('/auth', authRouter);
router.use('/products', productRouter); 

//JWT middleware
// router.use(jwtMiddleware)

module.exports = router;