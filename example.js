const danzzScraper = require("@danzzcoding/scraper");
const tiktokdl = danzzScraper.downloader.tiktok

$print = console.log;

const url = "https://www.tiktok.com/"

tiktokdl(url).then($print)
