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
$print = console.log

const url = "https://www.tiktok.com/xxxx"

danzzScraper.tiktok(url) {
  .then(data => {
    let result = data
    if (!result) throw "Data not found!"
    $print(result)
  })
}
```
