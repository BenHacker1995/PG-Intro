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
    const queryText = `INSERT INTO songs( artist, rank, track, published ) VALUES( $1, $2, $3, $4 )`;
    pool.query( queryText, [ req.body.artist, req.body.rank, req.body.track, req.body.published ] )
    .then( ( result ) => {
        res.sendStatus( 201 );
        console.log( `Successful add of song ${ result }` );
    }).catch( ( error ) => {
        console.log( `Error adding song ${ error }` );
        res.sendStatus( 500 );
    })
});

router.put( '/:id', ( req, res ) => {
    const id = req.params.id;
    console.log( 'In song.router PUT to update' );
    const queryText = `UPDATE songs SET rank=25 WHERE id=${ id }`;
    pool.query( queryText )
    .then( ( result ) => {
        console.log( `Successful update of song ${ result }`);
        res.sendStatus( 200 );
    })
    .catch( ( error ) => {
        console.log( `Error updating song: ${ error }` );
        res.sendStatus( 500 );
    })
});

router.delete( '/:id', ( req, res ) => {
    const id = req.params.id;
    console.log( 'In song.router DELETE to delete' );
    const queryText = 'DELETE FROM songs WHERE id=$1';
    pool.query( queryText, [ id ] )
    .then( ( result ) => {
        console.log( `Successful delete of song ${ result }` );
        res.sendStatus( 200 );
    }).catch( ( error ) => {
        console.log( `Error deleting songs: ${ error }` );
        res.sendStatus( 500 );
    });
});

module.exports = router;