# scraper
Free scraper for WhatsApp bot or REST API

## Installing
### Using npm
```bash
$ npm i @danzzcoding/scraper
```
### Using yarn
```bash
$ yarn add @danzzcoding/scraper
```

## Examples code
### Import
```javascript
const danzzScraper = require("@danzzcoding/scraper")
```

### Usage
```javascript
const tiktokdl = danzzScraper.downloader.tiktok

$print = console.log;

const url = "https://www.tiktok.com/"

tiktokdl(url).then($print)
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
