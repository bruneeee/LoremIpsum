/**
 * Created by clair on 10/03/2016.
 */
angular.module('myApp', [])
    .controller('MainController', function($scope){

        $scope.textNumber = '1231236767876321';

        $scope.sponsor = [
            {link: "img/team.jpg", description:"Nicolo' Brunello"},
            {link: "img/team.jpg", description:"Luca Campana"},
            {link: "img/team.jpg", description:"Claire Francoise Formentin"},
            {link: "img/team.jpg", description:"Alberto Persano"},
            {link: "img/team.jpg", description:"Yaroslav Bershadskyy"}
        ];

        $scope.products = [
            {link: "img/milk.jpg", description:"cristo"},
            {link: "img/milk.jpg", description:"cristo"},
            {link: "img/milk.jpg", description:"cristo"}
        ];
    });