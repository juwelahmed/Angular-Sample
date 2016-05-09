angular.module('app').factory('StudentService', function () {
    var factory = {}
    var students = [];
    
    factory.getStudents = function () {
        students = [];
        var student = new Student(1, 'Juwel Ahmed',new Date())
        students.push(student);
        student = new Student(2, 'Asraful Islam', new Date())
        students.push(student);
        student = new Student(3, 'Zillur Rahman', new Date())
        students.push(student);
        student = new Student(4, 'Azharul Islam', new Date())
        students.push(student);

        return students;
    }

    factory.getStudent = function (id){
        if (students.length > 0) {
            for (var i = 0; i <= students.length - 1; i++) {
                var student = students[i];
                if (id == student.id) {
                    return student;
                }
            }
            return null;
        }
    }
    return factory;

})

function Student(id, name, enrollDate) {
    this.id = id;
    this.name = name;
    this.enrollDate = enrollDate;
}
