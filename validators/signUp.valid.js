const {check} = require('express-validator')

module.exports = [
    check('fname').matches(/^[a-zA-Z ]{2,30}$/),
    check('lname').matches(/^[a-zA-Z ]{2,30}$/),
    check('userName').matches(/^[a-zA-Z ]{2,30}$/),
    check('email').isEmail(),
    check('password').matches("^(?=.*[0-9])")
]