(function () {
    angular
        .module('app')
        .controller('RegisterCtrl', Register);

    Register.$inject = ['$scope'];

    function Register($scope) {
        $scope.title = 'Register';

        $scope.user = {
            email: '',
            password: '',
            confirmPassword: ''
        }
    };

})();
