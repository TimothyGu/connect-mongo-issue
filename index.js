var connect = require('mongodb').MongoClient.connect
  , session = require('express-session')
  , MongoStore = require('connect-mongo')(session)

connect('mongodb://localhost/test', function (err, db) {
  if (err) throw err
  new MongoStore({ db: db })
  console.log('Yay!')
  process.exit(0)
})
