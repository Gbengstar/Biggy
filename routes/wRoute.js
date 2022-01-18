const {Router} = require('express')
const { winners} = require("../controller/user.controller.js")

const router = Router()


router.get('/', winners)

module.exports = router