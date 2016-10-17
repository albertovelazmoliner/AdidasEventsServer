var pg = require('pg')

pg.defaults.ssl = true
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err
  console.log('Connected to postgres!')

  client
    .query('CREATE TABLE runners(email varchar(80) PRIMARY KEY not null,
  						firstname varchar(80)  not null,
  						lasttname varchar(80)  not null, 
  						date varchar(80) not null,
  						country varchar(80) not null)')
});