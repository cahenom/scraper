const danzzScrape = require("@danzzcoding/scraper");

$print = console.log;

const url = "https://www.tiktok.com/"

danzzScraper.downloader.tiktok(url)
.then(data => {
  let result = data;
  if (!result) throw "Data not found!";
  $print(result);
});
