const mongoose = require( 'mongoose' );
const database = 'flaminGo';

if ( process.env.MONGO_URL ) {
  mongoose.connect( process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false } );
} else {
  mongoose.connect( `mongodb://localhost/${ database }`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false } );
}

mongoose.Promise = Promise;
const db = mongoose.connection;

db.on( 'error', console.error.bind( console, 'connection error:') );
db.once( 'open', () =>{ console.log( `connected to "${ process.env.MONGO_URL }"!` ); });

module.exports = db;