const {body} = require("express-validator")
const loginValidator = () => [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min: 6, max: 20}).withMessage("password must be at least 6 characters")
]

module.exports = {
    loginValidator
}