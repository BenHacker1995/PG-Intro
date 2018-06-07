app.service( 'songService', function( $http ) {
    let sv = this;
    sv.song = {};
    
    sv.getSong = function() {
        return $http({
            method: 'GET',
            url: '/song'
        }).then( function( req, res ) {            
        const queryText = 'SELECT * FROM songs';
        pool.query( queryText );
        res.send( res.rows );
        }).catch( function( error ) {
            console.log( `Error getting all songs: ${ error }` );
            res.sendStatus( 500 );
        })
    };
        
    sv.postSong = function() {
        console.log( 'In song.router POST to add' );
        return $http({
            method: 'POST',
            url: '/song'
        }).then( function( req, res ) {
            const queryText = `INSERT INTO songs( artist, rank, track, published ) VALUES( $1, $2, $3, $4 )`;
            pool.query( queryText, [ req.body.artist, req.body.rank, req.body.track, req.body.published ] );
            res.sendStatus( 201 );
            console.log( `Successful add of song ${ result }` );
        }).catch( function( error ) {
            console.log( `Error adding song ${ error }` );
            res.sendStatus( 500 );
        })
    };

    sv.updateSong = function() {
        return $http({
            method: 'PUT',
            url: `/song/${id}`
        .then( function( req, res ) {
            const id = req.params.id;
            const queryText = `UPDATE songs SET rank=25 WHERE id=${ id }`;
            pool.query( queryText );
            console.log( `Successful update of song ${ res }`);
            res.sendStatus( 200 );
        })
        .catch( function( error ) {
            console.log( `Error updating song: ${ error }` );
            res.sendStatus( 500 );
        })
    });
};

    sv.deleteSong = function() {
        return $http({
            method: 'DELETE',
            url: `/song/${id}`
        }).then( function( req, res ) {
            const id = req.params.id;
            console.log( `Successful delete of song ${ res }` );
            res.sendStatus( 200 );
            const queryText = 'DELETE FROM songs WHERE id=$1';
            pool.query( queryText, [ id ] )
        }).catch( function( error ) {
            console.log( `Error deleting songs: ${ error }` );
            res.sendStatus( 500 );
        });
    };
});

 
