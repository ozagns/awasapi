const axios = require('axios')
const cheerio = require('cheerio')

exports.searchChord = async (query) => {
  const searchUrl = `https://www.ultimate-guitar.com/search.php?search_type=title&value=${encodeURIComponent(query)}`
  
  const { data } = await axios.get(searchUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0'
    }
  })

  const $ = cheerio.load(data)

  let firstResult = null

  $('a').each((i, el) => {
    const href = $(el).attr('href')
    if (href && href.includes('/chords/')) {
      firstResult = href
      return false
    }
  })

  if (!firstResult) throw new Error('Chord tidak ditemukan')

  const { data: chordPage } = await axios.get(firstResult, {
    headers: {
      'User-Agent': 'Mozilla/5.0'
    }
  })

  const $$ = cheerio.load(chordPage)

  const title = $$('h1').first().text().trim()
  const chord = $$('pre').text().trim()

  return {
    title,
    artist: 'Unknown',
    chord
  }
}