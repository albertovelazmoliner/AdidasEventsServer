var pg = require('pg')

pg.defaults.ssl = true
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err
  console.log('Connected to postgres!')

  client.query('CREATE TABLE runners(email varchar(80),
  						firstname varchar(80)  NOT NULL,
  						lasttname varchar(80)  NOT NULL, 
  						date varchar(80) NOT NULL,
  						country varchar(80) NOT NULL,
  						UNIQUE(email))')
});