var url = 'https://www.humblebundle.com/store/search?search=far%20cry';

var request = require("request");

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});