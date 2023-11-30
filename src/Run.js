const studentController = require("./studentController");

// Add a new student
studentController.addStudent({ id: 6, name: "Sophia", age: 23, grade: "A-" });

// Display all students
studentController.displayStudents();

// Update a student
studentController.updateStudent(2, { grade: "A" });

// Display all students after update
studentController.displayStudents();

// Delete a student
studentController.deleteStudentById(4);

// Display all students after deletion
studentController.displayStudents();