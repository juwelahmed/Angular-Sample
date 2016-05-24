'use strict'

angular.module('app').factory('StudentService', studentService);

angular.$inject = ['$http']

function studentService($http) {

    var apiUrl = 'http://localhost:8000/api/student';

    return {
        getStudents: getStudents,
        getStudent: getStudent,
        addStudent: addStudent,
        updateStudent: updateStudent,
        deleteStudent: deleteStudent
    }

    function getStudents() {

        return $http.get(apiUrl).then(function (response) {
            return response;
        })
    }

    function getStudent(id) {
        return $http.get(apiUrl + '/' + id.toString()).then(function (response) {
            return response;
        })
    }

    function addStudent(student) {
        return $http.post(apiUrl, student).then(function (response) {
            return response;
        })
    }
    function updateStudent(id, student) {
        return $http.put(apiUrl + '/' + id.toString(), student).then(function (response) {
            return response;
        })
    }
    function deleteStudent(id) {
        return $http.delete(apiUrl + '/' + id.toString()).then(function (response) {
            return response;
        })
    }
}

function Student(id, name, enrollDate) {
    this.id = id;
    this.name = name;
    this.enrollDate = enrollDate;
}
