const {Router} = require('express');
const router = new Router();

const authLoginController = require('../controllers/authLogin.ctrl');

router.get('/logout', authLoginController.getLogout);
router.post('/', authLoginController.createAuthLogin);

module.exports = {router};