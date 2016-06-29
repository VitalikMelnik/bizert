/**
 * Created by vitalik on 28.06.16.
 */

angular.module('app')
    .controller('rootController', function ($scope, $uibModal, $rootScope) {

        $scope.messages = [{
            email : "vitalikmelnik20000@gmail.com",
            message : "Hi. You can help mi?"
        }];

        /**
         *@function $scope.submitForm - push object in scope.message with form
         *@param task {object} - name && description && price
         */
        $scope.submitForm = function() {

            if ($scope.userForm.$valid) {

                $scope.messages.push($scope.task);
                $scope.task = {};
                $scope.userForm.name.$pristine = true;
                $scope.userForm.email.$pristine = true;
                console.log($scope.messages)



            }
            ;
        }

        /**
         *@function $scope.openModalHelp - open modal window
         *@param task {object} - sent in rootScope
         */
            $scope.openModalHelp = function (a,b,c) {


            $rootScope.name = a;
            $rootScope.description = b;
            $rootScope.price = c;
            var openModalHelp = $uibModal.open({
                templateUrl: '/bizert/app/templates/help_modal.html',
                controller : 'modalHelpController',
            });
        };

    });
