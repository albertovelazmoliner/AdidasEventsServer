var pg = require('pg')

pg.defaults.ssl = true
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err
  console.log('Connected to postgres!')

  client
    .query('CREATE TABLE runners(email text PRIMARY KEY  not null,
  						firstname text  not null,
  						lasttname text  not null, 
  						date CHAR(30) not null,
  						country text not null)')
});