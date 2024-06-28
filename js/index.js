// 1-Misol

// const students = [
//     { name: 'Akbar', age: 20, score: 85, status: 'active' },
//     { name: 'Bobir', age: 22, score: 92, status: 'inactive' }
// ];

// function namesAndages(students) {
//     return students.map(student => {
//         return { name: student.name, age: student.age };
//     });
// }

// console.log(namesAndages(students));





// 2-Misol

// const students = [
//     { name: 'Javohir', age: 20, score: 85, status: 'active' },
//     { name: 'Bobir', age: 22, score: 92, status: 'inactive' }
// ];

// function highestScore(students) {
//     return students.reduce((max, student) => {
//         return student.score > max ? student.score : max;
//     }, 0);
// }

// console.log(highestScore(students));





// 3-Misol

// const students = [
//     { name: 'Alisher', age: 20, score: 85, status: 'active' },
//     { name: 'Botir', age: 22, score: 92, status: 'inactive' },
//     { name: 'Ahmad', age: 23, score: 88, status: 'active' }
// ];

// function filterStudentsByName(students) {
//     return students.filter(student => student.name.startsWith('A'));
// }

// console.log(filterStudentsByName(students));





// 4-Misol

// const students = [
//     { name: 'Asadulloh', age: 20, score: 85, status: 'active' },
//     { name: 'Bahrom', age: 22, score: 92, status: 'inactive' }
// ];

// function averageScore(students) {
//     if (students.length === 0) return 0;
//     const totalScore = students.reduce((sum, student) => sum + student.score, 0);
//     return totalScore / students.length;
// }

// console.log(averageScore(students));





// 5-Misol

// const students = [
//     { name: 'Ali', age: 20, score: 85, status: 'active' },
//     { name: 'Jahongir', age: 22, score: 92, status: 'inactive' },
//     { name: 'Soyib', age: 23, score: 88, status: 'active' }
// ];

// function findStudent(students, name) {
//     return students.find(student => student.name === name);
// }

// console.log(findStudent(students, 'Jahongir'));





// 6-Misol

// const students = [
//     { name: 'Shuhrat', age: 20, score: 80, status: 'active' },
//     { name: 'Bahodir', age: 22, score: 92, status: 'inactive' },
//     { name: 'Akbar', age: 23, score: 85, status: 'active' }
// ];

// function findIndexByScore(students, threshold) {
//     return students.findIndex(student => student.score > threshold);
// }

// console.log(findIndexByScore(students, 85));





// 7-Misol

// const students = [
//     { name: 'Sherzod', age: 20, score: 85, status: 'active' },
//     { name: 'Umar', age: 22, score: 92, status: 'inactive' },
//     { name: 'Jasur', age: 23, score: 88, status: 'active' }
// ];

// function filterActiveStudents(students) {
//     return students.filter(student => student.status === 'active');
// }

// console.log(filterActiveStudents(students));





// 8-Misol

// const students = [
//     { name: 'Alisher', age: 20, score: 85, status: 'active' },
//     { name: 'Bobir', age: 22, score: 92, status: 'inactive' },
//     { name: 'Zafarbek', age: 17, score: 88, status: 'active' }
// ];

// function areAllStudentsOver18(students) {
//     return students.every(student => student.age > 18);
// }

// console.log(areAllStudentsOver18(students));





// 9-Misol

// const students = [
//     { name: 'Abdulbosid', age: 20, score: 85, status: 'active' },
//     { name: 'Muhammadumar', age: 22, score: 92, status: 'inactive' },
//     { name: 'Mahmud', age: 23, score: 88, status: 'active' }
// ];

// function hasHighStudent(students) {
//     return students.some(student => student.score > 90);
// }

// console.log(hasHighStudent(students));





// 10-Misol

// const students1 = [
//     { name: 'Ali', age: 20, score: 85, status: 'active' },
//     { name: 'Shokir', age: 22, score: 92, status: 'inactive' }
// ];

// const students2 = [
//     { name: 'Sherzod', age: 23, score: 88, status: 'active' },
//     { name: 'Bahrom', age: 21, score: 90, status: 'inactive' }
// ];

// function mergeStudentLists(list1, list2) {
//     return [...list1, ...list2];
// }

// console.log(mergeStudentLists(students1, students2));





// 11-Misol

// function getUniqueNameStudents(students) {
//   const uniqueNames = new Set();
//   const result = [];

//   students.forEach(student => {
//     if (!uniqueNames.has(student.name)) {
//       uniqueNames.add(student.name);
//       result.push(student);
//     }
//   });

//   return result;
// }

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Alice', age: 23, score: 88, status: 'active' }
// ];

// const uniqueNameStudents = getUniqueNameStudents(students);
// console.log(uniqueNameStudents);





// 12-Misol

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];

// function capitalizeNames(students) {
//     return students.map(student => {
//         return {
//             student,
//             name: student.name.toUpperCase()
//         };
//     });
// }

// const capitalizedStudents = capitalizeNames(students);
// console.log(capitalizedStudents);





// 13-Misol

// const getScores = (students) => {
//   return students.map(student => student.score);
// };

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// const scores = getScores(students);
// console.log(scores);





// 14-Misol

// const getFirstStudentKeys = (students) => {
//   if (students.length === 0) {
//     return [];
//   }
  
//   return Object.keys(students[0]);
// };

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Alex', age: 35, score: 25, status: 'in active' },
//   { name: 'Doe', age: 48, score: 105, status: 'active' }
// ];

// const keys = getFirstStudentKeys(students);
// console.log(keys);





// 15-Misol

// function addStudent(students, newStudent) {
//     return [students, newStudent];
// }

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];

// const newStudent = { name: 'Charlie', age: 23, score: 88, status: 'active' };

// const updatedStudents = addStudent(students, newStudent);

// console.log(updatedStudents);





// 16-Misol

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// function removeStudentByName(name) {
//   const index = students.findIndex(student => student.name === name);
  
//   if (index !== -1) {
//     students.splice(index, 1);
//     console.log(`${name}`);
//   } else {
//     console.log(`${name}`);
//   }
// }

// removeStudentByName('Bob');
// console.log(students);





// 17-Misol

// function checkStudentAges(students) {
//   const allAgesTwenty = students.every(student => student.age > 20);
//   const allAges = students.every(student => student.age < 20);

//   if (allAgesTwenty) {
//     console.log("All students are older than 20.");
//     return true;
//   } else if (allAges) {
//     console.log("All students are younger than 20.");
//     return true;
//   } else {
//     console.log("Students have mixed ages.");
//     return false;
//   }
// }

// const students = [
//  { name: 'Alice', age: 20, score: 85, status: 'active' },
//  { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//  { name: 'Charlie', age: 19, score: 88, status: 'active' }
// ];

// checkStudentAges(students);




// 18-Misol

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// function getStatusList(students) {
//     const statuses = [];
    
//     for (let i = 0; i < students.length; i++) {
//         statuses.push(students[i].status);
//     }
    
//     return statuses;
// }

// const studentStatuses = getStatusList(students);
// console.log(studentStatuses);





// 19-Misol

// const updateStudent = (students, updatedStudent) => {
//     return students.map(student => {
//         if (student.name === updatedStudent.name) {
//             return { ...student, ...updatedStudent };
//         }
//         return student;
//     });
// };

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];

// const updatedStudent = { name: 'Alice', age: 21, score: 90, status: 'active' };

// const updatedStudents = updateStudent(students, updatedStudent);
// console.log(updatedStudents);





// 20-Misol

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 19, score: 88, status: 'active' }
// ];

// function findYoungestStudent(students) {
//     let youngestAge = Infinity;
//     let youngestStudent = null;

//     for (let student of students) {
//         if (student.age < youngestAge) {
//             youngestAge = student.age;
//             youngestStudent = student;
//         }
//     }

//     return youngestStudent;
// }

// const youngestStudent = findYoungestStudent(students);
// console.log(youngestStudent);