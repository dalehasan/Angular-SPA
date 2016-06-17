'use strict';


angular.
  module('myApp').
  component('menuDetail', {
   //   template: 'TBD: Detail view for <span>{{$ctrl.id}}</span>',
      templateUrl: 'menu-detail/menu-detail.template.html',
      controller: ['$http','$routeParams',
        function MenuDetailController($http,$routeParams) {
            //  this.id = $routeParams.id;
            var self = this;

            $http.get('menu-detail/json/' + $routeParams.id + '.json').then(function (response) {
                self.menu = response.data;
            });

        }
      ]
  });