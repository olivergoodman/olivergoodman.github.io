var app = angular.module('myApp', ['ngAnimate']);
app.controller('myCtrl', function($scope) {
    $scope.myName= "Oliver Goodman";

    $scope.myLinks = [
    	{text: "LinkedIn", url: "https://www.linkedin.com/in/oliverbgoodman/"},
    	{text: "Github", url: "https://github.com/olivergoodman/"},
    	{text: "Email", url: "mailto:oliverbgoodman@gmail.com"},
    	{text: "Resume", url: "Oliver_Goodman_Resume.pdf"}
    ];

    $scope.letterboxd = {text: "movies", url:"https://letterboxd.com/ollygreatman/"}

    $scope.showBio = false;

    $scope.clickHiddenLink = function(link) {
    	if ($scope.showBio == true) {
    		return link.url;
    	} else {
    		return ""
    	}
    }

    $scope.test = [1,2,3]

});
