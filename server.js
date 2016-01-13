const express = require('express')
const app = express()
const data = require('../quiz1.json')

app.get('../quiz1.json', function (req, res) {
  res.send(data)
})

app.use(express.static('public'))

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Quiz app listening at http://%s:%s', host, port);
})
