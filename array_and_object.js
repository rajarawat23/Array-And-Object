// 1. In the following shopping cart add, remove, and edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'
// L      add 'Meat' in the beginning of your shopping cart if it has not been already addeJ
// L      add Sugar at the end of you shopping cart if it has not been already addeJ
// L      remove 'Honey' if you are allergic to hone
// L      modify Tea to 'Green Tea'

console.log("ans1")

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift('meat');
shoppingCart.push("sugar");
if (shoppingCart.indexOf('honey')){
    shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
}
if(shoppingCart.includes('Tea')){
    shoppingCart[shoppingCart.indexOf('Tea')]= 'Green Tea'
}
console.log(shoppingCart)

// 2. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24O
// L     Sort the array and find the min and max age1
// L     Find the median age(one middle item or two middle items divided by twom
// L     Find the average age(all items divided by number of itemsm
// L     Find the range of the ages(max minus minm
// L     Compare the value of (min - average) and (max - average), use abs() method

console.log('ans 2');

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sorted = [...ages].sort((a, b) => a - b), min = sorted[0], max = sorted[sorted.length - 1];
const median = sorted.length % 2 === 0 ? (sorted[sorted.length/2 - 1] + sorted[sorted.length/2]) / 2 : sorted[Math.floor(sorted.length / 2)];
const average = ages.reduce((a, b) => a + b, 0) / ages.length;
const range = max - min;
const minDiff = Math.abs(min - average), maxDiff = Math.abs(max - average);

console.log({ sorted, min, max, median, average, range, minDiff, maxDiff });


// 3. Object Extensibility and Sealing


// a) Use the Object.preventExtensions method to prevent any further additions of properties to the student object.

// b) Use the Object.isExtensible method to check if the student object is extensible. Store the result in a variable
// called extensibleStatus.

// c) Create a new object called teacher with a 'subject' property set to 'Math'.

// d) Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.

// e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called
// sealedStatus.

// f) Print the extensibleStatus and sealedStatus to the console.

let student = {name: 'Raja', age: 21};
Object.preventExtensions(student);

let extensibleStatus = Object.isExtensible(student);
console.log(extensibleStatus) // gives false becuase not extensiblestatus

let teacher = {subject : 'math'};

Object.seal(teacher);

let sealedStatus = Object.isSealed(teacher)

console.log( sealedStatus); 

// 4. Assignment: Building a Student Management System


// Description:

// You are tasked with building a student management system using JavaScript. The system should allow you to
// perform various operations on a list of students, including adding, updating, deleting, and displaying student
// information.


// Requirements:

// Here is an initial array of students. Each student is represented as an object with the following properties: id,
// firstName, lastName, age, and grade.

const students = [

  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade:
"A" },

  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade:
"B" },

  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade:
"A" },

  // Add more students as needed

];

function addstudent(s){students.push(s)}
addstudent({
    id:4,
    firstName:'Raja',
    lastName : 'Rawat',
    age : 21,
    grade : 'A'
})
console.log(students)

function updatedstudent(id,info){
    let s = students.find(stu => stu.id ==id);
    if (s) Object.assign(s,info)
}
updatedstudent(4,{
    age:23,
    grade: 'A+'
})
console.log(students)

function deletestudent(id){
    students.splice(students.indexOf(id));
    //  shoppingCart.splice(shoppingCart.indexOf('Honey'),1
}
deletestudent(2);
console.log(students)

function findByGrade(grade) {
  return students.filter(s => s.grade === grade);
}
console.log("Students with grade A+:", findByGrade("A+"));

function avgAge() {
  return students.reduce((sum, s) => sum + s.age, 0) / students.length;
}
console.log("Average Age:", avgAge());

// . You are given a JavaScript object representing a student's information. Your task is to use the 'for...in' loop
// to iterate over the properties of the object and perform various operations.

// a) Create a function displayStudentInfo that takes the student object as a parameter. Inside this function, use a
// 'for...in' loop to iterate over the properties of the student object and print each property and its corresponding
// value to the console. The output should look something like this:
// const student = {

//   name: "Alice",

//   age: 22,

//   major: "Computer Science",

//   GPA: 3.8,

//   isEnrolled: true

// };

// Property: name, Value: Alice

// Property: age, Value: 22

// Property: major, Value: Computer Science

// Property: GPA, Value: 3.8

// Property: isEnrolled, Value: true

const stud = {
  name: "Alice",
  age: 22,
  major: "Computer Science",
  GPA: 3.8,
  isEnrolled: true
};

function displayStudentInfo(stud) {
  for (let key in stud) {
    console.log("Property:" + key + "Value:" + stud[key]);
  }
}

displayStudentInfo(stud);

