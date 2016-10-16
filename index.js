var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()

var port = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/api/event', function(req, res) {
  console.log("Request for event")
  res.json({name : "NEW YORK CITY MARATHON", image : "http://www.scottrunsamerica.com/wp-content/uploads/2015/11/Verrazano.jpg"})
})

app.post('/api/runner', function(req, res) {
    var token = req.body.token
    var email = req.body.email
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var dateString = req.body.date
    var country = req.body.country
    
    console.log("token " + token + "\nemail " + email + "\nfirstName " + firstName + "\nlastName " + lastName);

    res.send({message : "Registration has been completed successfully.\nDo you want to register someone else?"});
});

app.listen(port, function() {
    console.log('Adidas Server app is running on http://localhost:' + port)