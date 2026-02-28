const router = require('express').Router()

router.use('/tools', require('./tools.route'))
router.use('/downloader', require('./downloader.route'))

module.exports = router