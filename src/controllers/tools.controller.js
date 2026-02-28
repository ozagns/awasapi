const { success, error } = require('../utils/response')
const { searchChord } = require('../services/chord.service')

exports.chord = async (req, res, next) => {
  try {
    const { query } = req.query
    if (!query) return error(res, "Query diperlukan")

    const result = await searchChord(query)
    return success(res, result)
  } catch (err) {
    next(err)
  }
}