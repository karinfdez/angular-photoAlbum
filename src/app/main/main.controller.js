(function() {
  'use strict';

  angular
    .module('photoAlbum')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec) {
    var vm = this;
    vm.album_error="";
    vm.add_album_error=false;
    vm.adding_album={};
    vm.albums=[{name: 'Madrid2009',date:'2009-09-01',description:'Fun weekend visiting the city'},
               {name: 'Brazil2010',date:'2010-05-23',description:'Week with friends and family'},
               {name: 'Cuba2011',date:'2011-10-10',description:'Havana with my parents'},
               {name: 'Egypt2012',date:'2011-11-01',description:'Amazing piramides'}];
    
    vm.addAlbum=function(new_album){
      if (!new_album.name && (!new_album.date || !(is_valid_date(new_album.date))) && !new_album.description){
        vm.add_album_error=true;
        vm.album_error="Incorrect input for title,date and description.Try again"
      }
      else if  (!new_album.name){
        vm.add_album_error=true;
        vm.album_error="Missing title";
      }
      else if(!new_album.date || !(is_valid_date(new_album.date))){
        vm.add_album_error=true;
        vm.album_error="Incorrect Date";
      }
      else if(!new_album.description){
        vm.album_error="Missing Description";
      }
      else{
        vm.albums.push(new_album);
        vm.adding_album={};
        vm.add_album_error=false;
        vm.add_album_success=true;
        vm.album_error="Thanks.Your album has been added."
        $timeout(function(){
            vm.add_album_success=false;
         }, 5000);
     }
    
    }

    function is_valid_date(the_date){
      // For the first part I want digits from 0-9 and accept from 2 to 4 characters long.
      // I'm using '/' to separate the date but it could be '-'
      if (the_date.match(/^[0-9]{2,4}\/[0-9]{1,2}\/[0-9]{1,2}^/))
        return true;

      return false;
    }
  }
})();
