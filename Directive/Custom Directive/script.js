  angular.module('docsTemplateUrlDirective', [])
    .controller('Controller', ['$scope', function($scope) {
      $scope.customer = {
        name: 'Naomi',
        address: '1600 Amphitheatre'
      };
    }])
    .directive('anyUser', function() {
      return {
        restrict:'E',
        templateUrl: 'my-customer.html',
        scope:{
          name:'=',
          address:'=',
          email:'='
        },
        controller: function($scope, $element, $attrs){
          $scope.clickHandler= function(e){
            $scope.flag=!$scope.flag;
          };
        },
        link: function(scope,elt,attr){
          try{
            scope.flag=false;
            var d1 = $(elt).find('#d1');
            elt.on('mouseover',function(e){
               d1.addClass('colorclass');

            }).on('mouseout',function(e){
               d1.removeClass('colorclass');
            });  
          }catch(e){
            alert(e);
          }
          
        }
      };
    });