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
      if (!new_album.name && (!new_album.date || new_album.date.length<10) && !new_album.description){
        vm.add_album_error=true;
        vm.album_error="Incorrect input for title,date and description.Try again"
      }
      else if  (!new_album.name){
        vm.add_album_error=true;
        vm.album_error="Missing title";
      }
      else if(!new_album.date || new_album.date.length<10){
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
    // vm.awesomeThings = [];
    // vm.classAnimation = '';
    // vm.creationDate = 1460392585454;
    // vm.showToastr = showToastr;

    // activate();

    // function activate() {
    //   getWebDevTec();
    //   $timeout(function() {
    //     vm.classAnimation = 'rubberBand';
    //   }, 4000);
    // }

    // function showToastr() {
    //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //   vm.classAnimation = '';
    // }

    // function getWebDevTec() {
    //   vm.awesomeThings = webDevTec.getTec();

    //   angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //     awesomeThing.rank = Math.random();
    //   });
    // }
    }
  }
})();
