const {Router} = require('express');
const router = Router();
const login_controller = require('../controllers/login_controller')

router.post("/auth/login", login_controller.login_controller)

module.exports = router;