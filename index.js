var express = require('express')
var bodyParser = require('body-parser')
var pg = require('pg')

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
    
    var error;
    console.log("token " + token + "\nemail " + email + "\nfirstName " + firstName + "\nlastName " + lastName);
    pg.defaults.ssl = true
	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
  		if (err) throw err
  		console.log('Connected to postgres!')
  		var query = client.query("INSERT INTO runners(email, firstName, lasttname, date, country) values ('" 
  			+ email + "', '" + firstName + "', '" + lastName + "', '" + dateString + "', '" + country + "')", function (err, result) {
  			if (err) throw err;
  			client.end(function (err) {
      			if (err) throw err;
      			return res.send({message : "Registration has been completed successfully.\nDo you want to register someone else?", error: err});
      		})	
  		})
  	})  
})

app.listen(port, function() { 
	console.log('Adidas Server app is running on http://localhost:' + port)
})