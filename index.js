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

//

const loadABttn=document.getElementById("loadA");
const loadBBttn=document.getElementById("loadB");
const textarea=document.querySelector("textarea");
const prompter=document.querySelector(".prompter");
const averageBttn=document.getElementById("average");
const failBttn=document.getElementById("failing");


  let sum1=0;
  for(let i=0; i<studentsClassA.length; i++){
    sum1+=studentsClassA[i].grade;
  }
  let averageClassA=sum1/studentsClassA.length;
  
  let sum2=0;
  for(let i=0; i<studentsClassB.length; i++){
    sum2+=studentsClassB[i].grade;
  }
  let averageClassB=sum2/studentsClassB.length;

const failedStudents = (classArray) => {
  let array=[];
  classArray.forEach(student => {
    if(student.grade<5){
      array.push(student.name);
     }
  })
  return prompter.innerText = "|" + array.join("|") + "|";
 }

//task1

loadABttn.addEventListener("click", () => {
  prompter.innerText="";
  textarea.value="";
  studentsClassA.forEach(student => {
    textarea.value += `${student.name} - ${student.grade}\n`;
    });
  console.log(textarea.value);
  averageBttn.addEventListener("click", () => {
    prompter.innerText=Math.floor(averageClassA);
    });
  failBttn.addEventListener("click", () => {
    prompter.innerText="";
    failedStudents(studentsClassA);
    })
  })


loadBBttn.addEventListener("click", () => {
  prompter.innerText="";
  textarea.value="";
  studentsClassB.forEach(student => {
    textarea.value += `${student.name} - ${student.grade}\n`;
  });
    averageBttn.addEventListener("click", () => {
    prompter.innerText=Math.floor(averageClassB);
  });
  failBttn.addEventListener("click", () => {
  prompter.innerText="";
    failedStudents(studentsClassB);
    })
  })
  
  

