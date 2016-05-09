angular.module('app').controller('StudentCtrl', ['$scope', 'StudentService', 'toaster', function ($scope, StudentService, toaster) {
    $scope.title = 'Student';

    $scope.students = StudentService.getStudents();

    $scope.toast = function (type) {
        toaster.pop(type, 'Confirmation', 'New record has been saved successfully.')
    }

}]);
