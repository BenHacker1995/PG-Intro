const express = require( 'express' );
const app = express();

const bodyParser = require( 'body-parser');
app.use( bodyParser.urlencoded({ extended: true } ) );
app.use( bodyParser.json() );

// Setup router
const songRouter = require( './modules/routers/song.router' );
app.use( '/song', songRouter );

const PORT = process.env.PORT || 5000;
app.listen( PORT, function( ) {
    console.log( `Server is listening on ${PORT}` );
});