# scraper
Free scraper for WhatsApp bot or REST API

## Installing
### Using npm
```bash
npm install github:danzzcoding/scraper
```
### Using yarn
```bash
yarn add github:danzzcoding/scraper
```

## Import
```javascript
const danzzScraper = require("@danzzcoding/scraper")
```

## Example
```javascript
// Downloader
$print = console.log

const url = "https://www.tiktok.com/xxxx"

danzzScraper.downloader.tiktok(url)
  .then(data => {
  let result = data
  if (!result) throw "Data not found!"
  $print(result)
})

// TextPro/PhotoOxy
$print = console.log

const url = "https://textpro.me"

danzzScrape.textpro(url)
.then(data => {
  const result = data
  if (!result) throw "Data not found!"
  $print(result)
})
```

## List features
### Downloader
<ul>
  <li>Youtube Audio: danzzScrape.downloader.youtube.audio</li>
  <li>Youtube Video: danzzScrape.downloader.youtube.video</li>
  <li>Youtube Play Audio: danzzScrape.downloader.youtube.playaudio</li>
  <li>Youtube Play Video: danzzScrape.downloader.youtube.playvideo</li>
  <li>Facebook: danzzScrape.downloader.facebook</li>
  <li>Instagram: danzzScrape.downloader.instagram</li>
  <li>Twitter: danzzScrape.downloader.twitter</li>
  <li>TikTok: danzzScrape.downloader.tiktok</li>
  <li>Mediafire: danzzScrape.downloader.mediafire</li>
  <li>SfileMobi: danzzScrape.downloader.sfilemobi</li>
  <li>SoundCloud: danzzScrape.downloader.soundcloud</li>
</ul>

### Search
<ul>
  <li>Youtube: danzzScrape.search.youtube</li>
</ul>

### PhotoOxy
<ul>
  <li>PhotoOxy: danzzScrape.photooxy</li>
</ul>

### TextPro
<ul>
  <li>TextPro: danzzScraper.textpro</li>
</ul>

## Cape ngetik, cek aja semua fiturnya di /src/index.js
