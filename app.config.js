//app MyApp
var app = angular.module("myApp");

//app.config
app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(false);
    $routeProvider
        .when('/', {
            //  template: "<div>this is temp1 {{menu.emails[1].name}}</div>",
            templateUrl: 'appetizer/appetizer.html',
            controller: 'myCtrl'
        })
        .when('/menu-detail/:id', {
           template: '<menu-detail></menu-detail>',
        //   templateUrl: 'menu-detail/menu-detail.template.html',
          controller: 'myCtrl'
        })
                .when('/appetizer', {
                    // template: "<div>this is temp2 detail</div>",
                    templateUrl: 'appetizer/appetizer.html',
                    controller: 'myCtrl'
                })
                .when('/entree', {
                    // template: "<div>this is temp2 detail</div>",
                    templateUrl: 'entree/entree.html',
                    controller: 'myCtrl'
                })

                .when('/dessert', {
                    // template: "<div>this is temp2 detail</div>",
                    templateUrl: 'dessert/dessert.html',
                    controller: 'myCtrl'
                })
        .otherwise({
            template: "<div>Blank page here!</div>"
            // redirectTo: '/'
        })
});

//app unique filter
app.filter('unique', function () {
    return function (collection, keyname) {
        var output = [],
            keys = [];

        angular.forEach(collection, function (item) {
            var key = item[keyname];
            if (keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
    };
});

//app.controller MyCtrl
app.controller('myCtrl', function ($scope, InboxFactory) {
    InboxFactory.getMessages()
        .success(function (jsonData, statusCode) {
            console.log("is good", statusCode, jsonData);
            $scope.data = jsonData.records;
            
        })
        .error(function (data) {
            console.log('There was an error2!', data);
        })
    $scope.factory = "my factory";
});

//app.factory
app.factory('InboxFactory', function InboxFactory($http) {
    var exports = {};
    exports.getMessages = function () {
        return $http.get('menu.json')
    };
    return exports;
});




