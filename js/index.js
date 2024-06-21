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