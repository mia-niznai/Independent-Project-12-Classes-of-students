// Task 1
// Pressing the button Load students Class A will set the value of the textarea to contain all the students from the js variable studentsClassA in the format 'name - grade'. The innerText of the div with the class prompter is cleared when the button is pressed.
// Example:
// Johnny - 10 Micky - 4 Andrew - 8 ... and so on.
// A similar operation should happen when you press the button Load students from Class B where the students from the variable studentsClassB are selected.
// Task 2
// Pressing the button Average will set the innerText of the div with the class prompter to the average grade of the whole class. If the average is not a natural number, round it down. (Ex: if Johhy has 7 and Isabelle has 8 than 7 should be displayed).
// Task 3
// Pressing the button Failing will set the innerText of the div with the class prompter with all the names of the students who have grades bellow 5. All the names should be surrounded by the character |. (Ex: if Johhy has 4 and Isabelle has 9 and Michael has 3 than the text |Johny|Michael| is displayed).


// Pressing `Display students class A` should display the students from the js variable `studentsClassA`.
// Pressing `Display students class B` should display the students from the js variable `studentsClassB`.
// Pressing `Display students class A` followed by pressing `Average` should display in the innerText of the div with class `prompter` the value `6`.
// Pressing `Display students class V` followed by pressing `Average` should display in the innerText of the div with class `prompter` the value `8`.
// Pressing `Display students class A` followed by pressing `Failling` should display in the innerText of the div with class `prompter` the value `|Micky|Michael|`.
// Pressing `Display students class A` followed by pressing `Failling` should display in the innerText of the div with class `prompter` the value `|Micky|Michael|`.



const studentsClassA = [
  {
    name: "Johnny",
    grade: 10
  },
  {
    name: "Micky",
    grade: 4
  },
  {
    name: "Andrew",
    grade: 8
  },
  {
    name: "Katy",
    grade: 7
  },
  {
    name: "Michael",
    grade: 2
  },
  
  {
    name: "Lilly",
    grade: 6
  }
];

const studentsClassB = [
  {
    name: "Irene",
    grade: 7
  },
  {
    name: "Sonya",
    grade: 6
  },
  {
    name: "Richard",
    grade: 1
  },
  {
    name: "Nancy",
    grade: 3
  }
];

//Task 1

const textArea = document.querySelector("textarea");
const prompter = document.querySelector(".prompter");
const loadAButton = document.querySelector("#loadA");
const loadBButton = document.querySelector("#loadB");

loadAButton.addEventListener("click", () =>{
prompter.innerText = "";
textArea.value = "";
studentsClassA.forEach(student =>{
  textArea.value += `${student.name} - ${student.grade}\n`;
});
});

loadBButton.addEventListener("click", () =>{
  prompter.innerText = "";
  textArea.value = "";
  studentsClassB.forEach(student =>{
    textArea.value += `${student.name} - ${student.grade}\n`;
  });
});

//Task 2

const averageButton = document.querySelector("#average");

averageButton.addEventListener("click", ()=> {
  prompter.innerText = "";
  let total = 0;
  let count = 0;
  let classToCheck = textArea.value.split("\n");
  classToCheck.pop();
  classToCheck.forEach(student =>{
    textArea.value += `${student.name} - ${student.grade}\n`;
  });
});

//Task 3

const failingButton = document.querySelector("#failing");

failingButton.addEventListener("click", ()=> {
  prompter.innerText = "";
  let classToCheck = textArea.value.split("\n");
  classToCheck.pop();
  let failingStudents = [];
  classToCheck.forEach(student => {
    let studentArr = student.split("-");
    if (parseInt(studentArr[1] < 5) {
        failingStudents.push(studentArr[0];
  }
  });
  prompter.innerText = "|" + failingStudents.join("|") + "|";
});
 
  
  

