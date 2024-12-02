const quizQuestions = [
    {
        id: 1,
        question: "HTML stands for?",
        options: {
            a: "Hyper Text Markup Language",
            b: "Hyper Text Programming Language",
            c: "Hyper Text Styling Language",
            d: "Hyper Text Scripting Language"
        },
        answer: "Hyper Text Markup Language"
    },
    {
        id: 2,
        question: "Which tag is used to define a hyperlink in HTML?",
        options: {
            a: "<a>",
            b: "<link>",
            c: "<href>",
            d: "<url>"
        },
        answer: "<a>"
    },
    {
        id: 3,
        question: "CSS stands for?",
        options: {
            a: "Cascading Style Sheets",
            b: "Creative Style System",
            c: "Computer Styling Syntax",
            d: "Control Sheet Styles"
        },
        answer: "Cascading Style Sheets"
    },
    {
        id: 4,
        question: "Which of the following is used to add JavaScript to an HTML document?",
        options: {
            a: "<script>",
            b: "<javascript>",
            c: "<js>",
            d: "<code>"
        },
        answer: "<script>"
    },
    {
        id: 5,
        question: "What does the 'id' attribute in HTML do?",
        options: {
            a: "It uniquely identifies an element",
            b: "It creates a hyperlink",
            c: "It adds a class to an element",
            d: "It styles an element"
        },
        answer: "It uniquely identifies an element"
    },
    {
        id: 6,
        question: "Which property is used in CSS to change the background color?",
        options: {
            a: "background-color",
            b: "color",
            c: "bg-color",
            d: "background-style"
        },
        answer: "background-color"
    },
    {
        id: 7,
        question: "Which symbol is used in JavaScript to denote comments?",
        options: {
            a: "//",
            b: "/* */",
            c: "#",
            d: "<!-- -->"
        },
        answer: "//"
    },
    {
        id: 8,
        question: "What does DOM stand for?",
        options: {
            a: "Document Object Model",
            b: "Document Oriented Module",
            c: "Data Object Module",
            d: "Document Optimization Model"
        },
        answer: "Document Object Model"
    },
    {
        id: 9,
        question: "Which method is used to select an element by its ID in JavaScript?",
        options: {
            a: "getElementById",
            b: "querySelector",
            c: "getElementsByClassName",
            d: "getElementsByTagName"
        },
        answer: "getElementById"
    },
    {
        id: 10,
        question: "Which HTML tag is used to define an unordered list?",
        options: {
            a: "<ul>",
            b: "<ol>",
            c: "<li>",
            d: "<list>"
        },
        answer: "<ul>"
    }
];

var quizContainer=document.getElementById("quizzcontainer")
var quizElement=document.getElementById("quizElement");
var optionElement=document.getElementById("optionElement");
var nextBtn=document.getElementById("nextquestion")
var currentQuestion=document.getElementById("currentquestion");
var totalCount=document.getElementById("totalcount");
totalCount.innerHTML=quizQuestions.length;
var indexNumber=0;

var correctAns=0;
var incorrectAns=0;





//     currentQuestion.innerHTML=indexNumber+1
// }


// function nextQues(){
//     if(indexNumber < quizQuestions.length-1){
//         nextBtn.disable=true;
//         indexNumber++;
//         handleQuestion();
//     }else{
//         console.log("Form Submit")
//         console.log("Correct Answere",correctAns)
//         console.log("Wrong Answere",incorrectAns)
//         console.log((correctAns/quizQuestions.length)*100)
//         quizContainer.style.display="none"
//         var resultContainer=document.getElementById("resultContainer")
//         resultContainer.style.display="block"

//         resultContainer.innerHTML=`<h1>Correct Ans: ${correctAns}</h1>
//         <h1>Wrong Ans: ${incorrectAns}</h1>
//         <h1>Percentage: ${(correctAns/quizQuestions.length)*100} %</h1>`
//     }

// }





// function handleQuestion(){
//     var optionsObj=quizQuestions[indexNumber].options;
//     quizElement.innerHTML = quizQuestions[indexNumber].question; // Correct
//     optionElement.innerHTML = ""; // Correct: Clear previous options
//     for (var key in optionsObj) {
//     optionElement.innerHTML += `<li onclick="checkAns(this)">${optionsObj[key]}</li>`;
//     }

function handleQuestion() {
    var optionsObj = quizQuestions[indexNumber].options;
    quizElement.innerHTML = quizQuestions[indexNumber].question; // Corrected
    optionElement.innerHTML = ""; // Clear previous options
    for (var key in optionsObj) {
        optionElement.innerHTML += `<li onclick="checkAns(this)">${optionsObj[key]}</li>`;
    }
    currentQuestion.innerHTML = indexNumber + 1;
}

function nextQues(){
    if(indexNumber < quizQuestions.length-1){
        nextBtn.disable=true;
        indexNumber++;
        handleQuestion();
    }else{
        console.log("Form Submit")
        console.log("Correct Answere",correctAns)
        console.log("Wrong Answere",incorrectAns)
        console.log((correctAns/quizQuestions.length)*100)
        quizContainer.style.display="none"
        var resultContainer=document.getElementById("resultContainer")
        resultContainer.style.display="block"

        resultContainer.innerHTML=`<h1>Correct Ans: ${correctAns}</h1>
        <h1>Wrong Ans: ${incorrectAns}</h1>
        <h1>Percentage: ${(correctAns/quizQuestions.length)*100} %</h1>`
    }

}



// function checkAns(element){
//     var allLiElement = optionElement.children;
//     var userSelection=element.innerHTML.toLowerCase();
//     console.log(userSelection,"User Selection");
//     var ans=quizQuestions[indexNumber].answer;
//     var result=userSelection===ans;

//     if(result){
//         element.style.backgroundColor="green"
//         correctAns++
//     }else{
//         element.style.backgroundColor="red"
//         incorrectAns++

//         for(var i=0; i<allLiElement.length; i++){
//             if(allLiElement[i].innerHTML.toLowerCase()===ans){
//                 allLiElement[i].style.backgroundColor="green"
//             }
//             // break
//         }
        
//     }
//     for(var i=0; i<allLiElement; i++){
//         allLiElement[i].style.pointerEvents="none"
//     }
//     nextBtn.disable=false;
// }

function checkAns(element) {
    var allLiElement = optionElement.children; // Corrected
    var userSelection = element.innerHTML.toLowerCase();
    var ans = quizQuestions[indexNumber].answer.toLowerCase();
    var result = userSelection === ans;

    if (result) {
        element.style.backgroundColor = "green";
        correctAns++;
    } else {
        element.style.backgroundColor = "red";
        incorrectAns++;
        for (var i = 0; i < allLiElement.length; i++) {
            if (allLiElement[i].innerHTML.toLowerCase() === ans) {
                allLiElement[i].style.backgroundColor = "green";
            }
        }
    }

    for (var i = 0; i < allLiElement.length; i++) {
        allLiElement[i].style.pointerEvents = "none"; // Disable all options
    }
    nextBtn.disabled = false; // Enable Next button
}


var timerMin = 4
var timerSec = 5
var interval=setInterval(timer,1000)

// function timer(){
//     timerSec--

//     console.log(timerMin, "timerMin")
//     console.log(timerSec,"timerSec")
//     if(timerSec===0){
//         timerMin--
//         timerSec=59
//         if(timer < timerMin){
//             clearInterval(interval)
//         }
//     }
// }


// handleQuestion()

function timer() {
    timerSec--;
    if (timerSec === 0) {
        timerMin--;
        timerSec = 59;
        if (timerMin < 0) {
            clearInterval(interval);
        }
    }
}

handleQuestion(); // Initialize the first question
