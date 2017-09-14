'use strict';
angular.module('confusionApp')
 .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
               $scope.dishes= menuFactory.getDishes();
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

.controller('DishDetailController', ['$scope', '$routeParams', 'menuFactory', function($scope, $routeParams, menuFactory) {
console.log($routeParams.id);
    var dish= menuFactory.getDish(parseInt($routeParams.id,10));
    console.log(dish);                      $scope.dish = dish;
    console.log($scope.dish);
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
