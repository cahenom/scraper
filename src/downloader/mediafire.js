/*
* Created by: Dani Koding (Full Stack Web Dev.)

* Menerima layanan:
* Jasa design website
* Jasa design website e-commerce
* Jasa create REST API (express.js)
* Jasa joki Mobile Legends
*/
const axios = require('axios')
const cheerio = require('cheerio')

async function mediafire(url) {
	let res = await axios.get(url)
	let get = cheerio.load(res.data)
	let urlFile = get('a#downloadButton').attr('href')
	let sizeFile = get('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('', '')
	let split = urlFile.split('/')
	let nameFile = split[5]
	mime = nameFile.split('.')
	mime = mime[1]
	let result = {
		title: nameFile,
		size: sizeFile,
		url: urlFile
	}
	return result
}

module.exports = mediafire