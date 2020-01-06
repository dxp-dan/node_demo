const origiRequest = require('request');
//类似于jq
const cheerio = require('cheerio');
//解码
const iconv = require('iconv-lite');

function request(url, callback){
  const options={
    url: url,
    encoding: null
  }
  origiRequest(url, options, callback);
}

for(let i=59507;i<59558;i++){
  const url = `https://www.dytt8.net/html/gndy/dyzz/20200101/${i}.html`;
  request(url, function(err, res, body){
    const html = iconv.decode(body, 'gb2312');
    const $ = cheerio.load(html);
    if($('.title_all font').text()){
      console.log($('.title_all font').text());
    }
  })
}