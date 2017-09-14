'use strict';
angular.module('confusionApp')
 .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
   $scope.showMenu = false;
           $scope.message = "Loading ...";
                       $scope.dishes= {};
                       menuFactory.getDishes()
           .then(
               function(response) {
                   $scope.dishes = response.data;
                   $scope.showMenu = true;
               },
               function(response) {
                   $scope.message = "Error: "+response.status + " " + response.statusText;
               }
           );
  $scope.tab=1;$scope.filtText = '';
  $scope.showDetails = false;
  $scope.toggleDetails = function() {
  $scope.showDetails = !$scope.showDetails;
};
  $scope.select = function(setTab) {
        $scope.tab = setTab;

        if (setTab === 2){
            $scope.filtText = "appetizer";}
        else if (setTab === 3){
            $scope.filtText = "mains";}
        else if (setTab === 4){
            $scope.filtText = "dessert";}
        else{
            $scope.filtText = "";}
    };
    $scope.isSelected = function (checkTab) {
        return ($scope.tab === checkTab);
    };



}])

.controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {
  $scope.dish = {};
             $scope.showDish = false;
             $scope.message="Loading ...";
                         menuFactory.getDish(parseInt($stateParams.id,10))
             .then(
                 function(response){
                     $scope.dish = response.data;
                     $scope.showDish=true;
                 },
                 function(response) {
                     $scope.message = "Error: "+response.status + " " + response.statusText;
                 }
             );
                    }])

.controller('AboutController', ['$scope','corporateFactory', function ($scope,corporateFactory) {
  $scope.leaders = corporateFactory.getLeaders();
  console.log($scope.leaders);

}])

.controller('IndexController', ['$scope', 'menuFactory', 'corporateFactory', function ($scope, menuFactory, corporateFactory) {

  $scope.dish = {};
                       $scope.showDish = false;
                       $scope.message="Loading ...";

                       menuFactory.getDish(0)
                       .then(
                           function(response){
                               $scope.dish = response.data;
                               $scope.showDish = true;
                           },
                           function(response) {
                               $scope.message = "Error: "+response.status + " " + response.statusText;
                           }
                       );
       $scope.featuredPromotion = menuFactory.getPromotion(0);
       $scope.executiveChef = corporateFactory.getLeader(3);

   }])



.controller('DishCommentController', ['$scope', function ($scope) {
var vm = $scope;

vm.formComment = {
    author: "",
    rating: "5",
    comment: ""
};

vm.submitComment = function () {
    vm.formComment.date = new Date().toISOString();
    vm.dish.comments.push(vm.formComment);
    vm.formComment = {
        author: "",
        rating: "5",
        comment: ""
    };
    vm.commentForm.$setPristine();
};
}]);
