const router = require('express').Router()
const controller = require('../controllers/downloader.controller')

router.get('/tiktok', controller.tiktok)

module.exports = router