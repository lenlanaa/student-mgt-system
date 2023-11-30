const {students} = require("../db/studente");

// Function to add a new student
function addStudent(student) {
  students.push(student);
}

// Function to delete a student by ID
function deleteStudentById(id) {
  const index = students.findIndex(student => student.id === id);
  if (index !== -1) {
    students.splice(index, 1);
  }
}

// Function to update a student's information
function updateStudent(id, updatedStudent) {
  const index = students.findIndex(student => student.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...updatedStudent };
  }
}

// Function to display all students
function displayStudents() {
  console.log("List of students:");
  students.forEach(student => {
    console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
  });
}

module.exports = {
  addStudent,
  deleteStudentById,
  updateStudent,
  displayStudents
};
