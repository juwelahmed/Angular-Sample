angular.module('app').controller('StudentCtrl', ['$scope', 'StudentService', 'toaster', function ($scope, StudentService, toaster) {
    $scope.title = 'Student';

    init();

    function init() {
        StudentService.getStudents().then(function (response) {
            if (response.status == 200) {
                $scope.students = response.data;
            }
        });
    }

    $scope.toast = function (type) {
        toaster.pop(type, 'Confirmation', 'New record has been saved successfully.')
    }

}]);
