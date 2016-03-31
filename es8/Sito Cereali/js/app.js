/**
 * Created by clair on 10/03/2016.
 */
angular.module('myApp', [])
    .controller('MainController', function($scope, $timeout){

        String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

        $scope.textNumber = '1231236767876321';

        $scope.erroreMail = false;
        $scope.erroreMessaggio = false;

        $scope.mail = "";
        $scope.mex = "";

        $scope.showLoading = false;

        $scope.sendText = "Send";
        $scope.sended = false;

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

        $scope.send = function(){
            $scope.erroreMail = !controlloMail($scope.mail);
            $scope.erroreMessaggio = ($scope.mex.length == 0);
            if (!$scope.erroreMail && !$scope.erroreMessaggio) sendMessage();
        };

        function controlloMail(mail){
            //return (mail.contains("@")) &&
               // mail.indexOf("@") == mail.lastIndexOf("@") &&
              return  ammerda(mail);
        }


        function checkValidCharacter(mail){
            var c = true;
            for (var i = 0; i < mail.length; i++){
                var value = mail.charAt(i);
                if ((value >= 48 && value <= 57) ||
                    (value >= 64 && value <= 90) ||
                    (value >= 97 && value <= 122)
                    ) c = true;
                else c = false;
                if (!c) return false;
            }
            return true;
        }

        function ammerda(mail){
            return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail));
        }

        function sendMessage(){
            $scope.showLoading = true;
            $scope.sendText = ''
            $timeout(loaded, 500);
        }

        function loaded(){
            //alert("Dio");
            $scope.showLoading = false;
            $scope.sendText = "Sended!";
            $scope.sended = true;
            $scope.mail = "";
            $scope.mex = "";
            //alert($scope.showLoading + " " + $scope.sendText);
        }

    });