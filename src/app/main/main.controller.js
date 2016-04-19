(function() {
  'use strict';

  angular
    .module('photoAlbum')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec) {
    var vm = this;


    vm.albums=[{name: 'Madrid2009',title:'Weekend in Madrid',date:'2009-09-01',description:'Fun weekend visiting the city'},
               {name: 'Brazil2010',title:'A week in Rio de Janeiro',date:'2010-05-23',description:'Week with friends and family'},
               {name: 'Cuba2011',title:'Visiting Habana',date:'2011-10-10',description:'Havana with my parents'},
               {name: 'Egypt2012',title:'Visitng El Cairo',date:'2011-11-01',description:'Amazing piramides'}];
    
    vm.addAlbum=function(new_album){
      vm.albums.push(new_album);
      vm.adding_album={};
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
})();
