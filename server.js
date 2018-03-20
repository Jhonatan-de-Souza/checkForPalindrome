var express = require('express');
var app = express();
var fs = require("fs");

app.get('/palicheck/:word', function (req, res) {
if (palindrome(req.params.word)){
    res.status(200);
    res.end("This is a palindrome!!!");
}else{
    res.status(400);
    res.end("This is NOT a palindrome!!!");
}
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Pali checker running at:  http://%s:%s", host, port)

})

function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
   
  palindrome("A man, a plan, a canal. Panama");