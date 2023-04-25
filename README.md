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
$print = console.log

const q = "Danzz Coding"

if (!q) $print("Params not found!")
danzzScraper.downloader.youtube.playaudio(q)
.then(data => {
  let res = data
  if (!res) $print("Data not found!")
  $print(data)
})
```

### Output
```javascript
{
  title: 'Cara membuat bot WhatsApp menggunakan node.js & termux terbaru | Danzz Coding',
  thumb: 'https://i.ytimg.com/vi/rz03XDsmGSg/maxresdefault.jpg',
  channel: 'Danzz Coding',
  published: '2022-11-10',
  views: '892',
  url: 'https://rr4---sn-uigxxi0ujipnvo-jb36.googlevideo.com/videoplayback?expire=1682438325&ei=VaRHZJDGKtjqz7sPhruLuAs&ip=116.206.8.36&id=o-AD0YAZ0LfN2fshzOnE2W1HPOM1zpxup2iSRMJ7_GME9y&itag=251&source=youtube&requiressl=yes&mh=tc&mm=31%2C29&mn=sn-uigxxi0ujipnvo-jb36%2Csn-npoe7nes&ms=au%2Crdu&mv=m&mvi=4&pl=24&initcwndbps=256250&vprv=1&mime=audio%2Fwebm&ns=dO3khMeJbQCiR5nAe1uMsiIM&gir=yes&clen=3680702&dur=238.121&lmt=1668110943850076&mt=1682416375&fvip=3&keepalive=yes&fexp=24007246&c=WEB&txp=6211224&n=lZX3diz5Cu1PuA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgCWDaYHv_Y_GqWuDJ-0C19gvL6NU-32fgXzqOhcc3qeoCICZVgH04PF4hXCbiZsQm5aVcRw1lEg-0ZyI35NpD_P7x&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAPIl-JQrqPyw1_xqkckNzo423kuk4Pv1jOKY5fiT9L70AiEAm49gqf60NHUewDMg5w62ilpAGVLaPlDX5_DHeAXrDeg%3D'
}
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

## Cape ngetik, cek aja semua fiturnya di folder: src
