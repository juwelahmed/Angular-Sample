
angular
    .module('app')
    .controller('StudentEditCtrl', ['$scope', 'StudentService', '$routeParams', 'toaster', function ($scope, StudentService, $routeParams, toaster) {

    	$scope.title = 'Edit Student';
    	var id = $routeParams.id
    	$scope.student = {};

    	if (id) {
    		console.log(id);
    		StudentService.getStudent(id).then(function (response) {
    			if (response.status == 200) {
    				$scope.student = response.data;
    			}
    		});
    	}
    	$scope.save = function () {
    		if (id) {
    			StudentService.updateStudent(id, $scope.student).then(function (response) {
    				if (response.status == 200) {
    					toaster.pop('success', 'Confirmation', 'Record has been updated successfully.')
    				}
    			});
    		}
    		else {
    			StudentService.addStudent($scope.student).then(function (response) {
    				if (response.status == 201) {
    					toaster.pop('success', 'Confirmation', 'New record has been created successfully.')
    				}
    			});
    		}
    	}

    	$scope.delete = function() {
    	    StudentService.deleteStudent(id).then(function (response) {
    	        if (response.status == 200) {
    	            toaster.pop('success', 'Confirmation', 'A record has been deleted successfully.')
    	        }
    	    });
    	}
    }]);
