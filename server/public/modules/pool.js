const pg = require( 'pg' );
const Pool = pg.Pool;

const DATABASE_NAME = 'music-library';
const config = {
    database: DATABASE_NAME,   // the name of the db to connect to
    host: 'localhost',         // where db is located
    port: 5432,                // default port for pg
    max: 10,                   // max number of connection on db
    idleTimeMillis: 30000      // limit of 30 sec to connect
}

// Make the db connection pool
const pool = new Pool( config );

// Log that we have connected successfully
pool.on( 'connect', ( client ) => {
    console.log( `Connected to database ${ DATABASE_NAME } from ${ client }` );
});

// Handle errors for clients that have been idle (waiting) too long
pool.on( 'error', ( err, client ) => {
    console.log( `Error with database connection from ${ client }. Error: ${ err }` );
    process.exit( -1 );
});

module.exports = pool;
