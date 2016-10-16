var express = require('express')
 
var app = express()
 
app.get('/event', function(req, res) {
  res.json({name : "NEW YORK CITY MARATHON", image : "http://www.scottrunsamerica.com/wp-content/uploads/2015/11/Verrazano.jpg"})
})

app.listen(3000)