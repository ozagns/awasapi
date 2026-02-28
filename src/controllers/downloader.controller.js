const { success, error } = require('../utils/response')
const { downloadTiktok } = require('../services/tiktok.service')

exports.tiktok = async (req, res, next) => {
  try {
    const { url } = req.query
    if (!url) return error(res, "URL diperlukan")

    const result = await downloadTiktok(url)

    return success(res, result)
  } catch (err) {
    next(err)
  }
}