songApp.controller( 'songController', function( songService ) {
    let vm = this;
    console.log( 'songController' );
    vm.getSong = function(){
        console.log( 'in controller, getSong');
        songService.getSong()
        .then( function(){
            console.log( 'back in controller');
            vm.song = songService.song;
        });
    } // end getSong

    vm.postSong = function(){
        console.log( 'in controller, postSong' );
        
    }
});