const danzzScraper = require("@danzzcoding/scraper");
const tiktokdl = danzzScraper.downloader.tiktok();
const url = "https://www.tiktok.com/";

$print = console.log;

tiktokdl(url).then($print);
