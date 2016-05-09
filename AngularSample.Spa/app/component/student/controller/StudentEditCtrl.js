angular.module('app').controller('StudentEditCtrl', ['$scope', 'StudentService', '$routeParams', 'toaster', function ($scope, StudentService, $routeParams, toaster) {
    $scope.title = 'Edit Student';
    var id = $routeParams.id
    $scope.student = {};

    
    if (id) {
        $scope.student = StudentService.getStudent(id);
    }

    $scope.colors = [
      { name: 'black', shade: 'dark' },
      { name: 'white', shade: 'light', notAnOption: true },
      { name: 'red', shade: 'dark' },
      { name: 'blue', shade: 'dark', notAnOption: true },
      { name: 'yellow', shade: 'light', notAnOption: false }
    ];
    $scope.myColor = [$scope.colors[2]]; // red

    $scope.save = function () {
        toaster.pop('success', 'Confirmation', 'New record has been saved successfully.')
    }
}]);
