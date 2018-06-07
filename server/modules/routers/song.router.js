const express = require( 'express' );
const router = express.Router();

// Get our connection to the database
const pool = require( '../pool.js');

router.get( '/', ( req, res ) => {
    console.log( 'In song.router GET' );
    // Build a string for query
    const queryText = 'SELECT * FROM songs';
    pool.query( queryText )
    .then( ( result ) => {
        res.send( result.rows );
    })
    .catch( ( error ) => {
        console.log( `Error getting all songs: ${ error }` );
        res.sendStatus( 500 );
    });
});

router.post( '/', ( req, res ) => {
    console.log( 'In song.router POST to add' );
    res.sendStatus( 200 );
});

router.put( '/', ( req, res ) => {
    console.log( 'In song.router PUT to update' );
    res.sendStatus( 200 );
});

router.delete( '/:id', ( req, res ) => {
    const id = req.params.id;
    console.log( 'In song.router DELETE to delete' );
    const queryText = 'DELETE FROM songs WHERE id=$1';
    pool.query( queryText, [ id ] )
    .then( ( results ) => {
        console.log( `Successful delete of song ${ results }` );
        res.sendStatus( 200 );
    }).catch( ( error ) => {
        console.log( `Error deleting songs: ${ error }` );
        res.sendStatus( 500 );
    });
});

module.exports = router;