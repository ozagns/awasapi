const router = require('express').Router()
const { success } = require('../utils/response')
const controller = require('../controllers/tools.controller')

router.get('/ping', (req, res) => {
  success(res, { result: "pong" })
})

router.get('/chord', controller.chord)

module.exports = router