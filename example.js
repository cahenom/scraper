$print = console.log

const danzzScraper = require("@danzzcoding/scraper")

const q = "Danzz Coding"

if (!q) $print("Params not found!")
danzzScraper.downloader.youtube.playaudio(q)
.then(data => {
  let res = data
  if (!res) $print("Data not found!")
  $print(data)
})
