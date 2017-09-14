var app = angular.module('confusionApp', []);
app.controller('dishDetailController', function () {
    var vm = this;
    vm.dish = {
        name: 'Uthapizza',
        image: 'images/uthapizza.png',
        category: 'mains',
        label: 'Hot',
        price: '4.99',
        description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
        comments: [
            {
                rating: 5,
                comment: "Imagine all the eatables, living in conFusion!",
                author: "John Lemon",
                date: "2012-10-16T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author: "Paul McVites",
                date: "2014-09-05T17:57:28.556094Z"
            },
            {
                rating: 3,
                comment: "Eat it, just eat it!",
                author: "Michael Jaikishan",
                date: "2015-02-13T17:57:28.556094Z"
            },
            {
                rating: 4,
                comment: "Ultimate, Reaching for the stars!",
                author: "Ringo Starry",
                date: "2013-12-02T17:57:28.556094Z"
            },
            {
                rating: 2,
                comment: "It's your birthday, we're gonna party!",
                author: "25 Cent",
                date: "2011-12-02T17:57:28.556094Z"
            }
        ]
    };
    var d = new Date();

    vm.present_date='';
    vm.present_date=d;
console.log(vm.present_date);

    vm.sortType = '';
    vm.feedback = {rating:"5", author:"", comment:"", agree:false};
    vm.specialValue={"value":"5"};
    vm.invalidChannelSelection = false;
    sendFeedback=function(){
    console.log(vm.feedback);
    vm.dish.comments.push(vm.feedback);
    };


})
app.controller('SubmitController', ['$scope', function ($scope) {
$scope.sendFeedback=function(){
console.log($scope.feedback);
$scope.dish.comments.push($scope.feedback);
};
}]);
