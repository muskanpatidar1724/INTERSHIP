/*const student=[
    {name: "Aman",marks:85},
    {name: "Sara",marks:42},
    {name: "Riya",marks:68},
    {name: "John",marks:49},
];
const result=student
.filter(student => student.marks >=50);
.map(student => student.marks+5);
.forEach(student => {
    console.log(`${student.}`)
})
console.log(`final total:${result}`)*/
const students = [
  { name: "Aman", marks: 85 },
  { name: "Sara", marks: 42 },
  { name: "Riya", marks: 68 },
  { name: "John", marks: 49 }
];
const passedStudents = students.filter(student => student.marks >= 50);
const updatedStudents = passedStudents.map(student => ({
  name: student.name,
  finalMarks: student.marks + 5
}));
updatedStudents.forEach(student => {
  console.log(`${student.name}: ${student.finalMarks}`);
});
const totalMarks = updatedStudents.reduce((sum, student) => sum + student.finalMarks, 0);
const average = totalMarks / updatedStudents.length;
console.log(`Class Average: ${average}`);
