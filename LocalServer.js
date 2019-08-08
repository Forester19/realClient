var express = require("express");
var app = express();
app.use(express.static('dist'));
app.use('/log-in', express.static('dist'));
app.listen(3335, function () {
   console.log('Listen at 3333 ...');
});