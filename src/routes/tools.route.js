const router = require('express').Router()
const { success } = require('../utils/response')

router.get('/ping', (req, res) => {
  success(res, { result: "pong" })
})

module.exports = router