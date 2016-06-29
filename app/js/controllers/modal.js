/**
 * Created by vitalik on 28.06.16.
 */
/**
 *@controller modalHelpController - controller for modal menu
 *@param $scope , $uibModalInstance  $rootScope - click button ok && sent in roorScope object
 *@function $scope.ok - clear rootScope && scope in modal window 
 */
angular.module('app')
    .controller('modalHelpController', function ($scope, $uibModalInstance, $rootScope) {

        
        $scope.info = $rootScope.name;

        $scope.ok = function () {
            $scope.info = null;
            $rootScope.name = null;
            $uibModalInstance.close();
        };

        
    });