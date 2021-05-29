const {check} = require('express-validator')

module.exports = [
    check('email').isEmail(),
    check('password').matches("^(?=.*[0-9])")
]