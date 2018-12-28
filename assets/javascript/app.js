// Variables - Q C & A Arrays

var randomQuestions = [{
    question: "Which sea creature has three hearts?",
    choices: ["  Shark  ", "  Octopus  ", "  Humpback Whale  ", "  Shrimp  "],
    answer: 1,
},
{
    question: "How many bones does an adult human have?",
    choices: ["  300  ", "  99  ", "  138  ", "  206  "],
    answer: 3,
},
{
    question: "What is the Italian word for pie?",
    choices: ["  Pizza  ", "  Alici  ", "  Bere  ", "  Capra  "],
    answer: 0,
},
{
    question: "What was Marilyn Monroe's natural hair colour?",
    choices: ["  Honey Blonde  ", "  Brunette  ", "  Ginger  ", "  Dark Blonde  "],
    answer: 2,
},
{
    question: "Name the port of Rome.",
    choices: ["  Ostia  ", "  Ravena  ", "  Gioia Tauro  ", "  Messina  "],
    answer: 0,
},
{
    question: "Who sang about being an eggman and a walrus?",
    choices: ["  Elvis  ", "  Cher  ", "  The Beatles  ", "  Michael Jackson  "],
    answer: 2,
},
{
    question: "When did the French Revolution end?",
    choices: ["  1898  ", "  1900  ", "  1799  ", "  1805  "],
    answer: 2,
},
{
    question: " Which Russian town suffered an infamous nuclear disaster in 1986?",
    choices: ["  Chernobyl  ", "  Moscow  ", "  Kazan  ", "  Samara  "],
    answer: 0,
},
];

console.log(randomQuestions)

// Variables - Scores & Counter
var score = 0;
var counter = 60;
var correctAnswers=0;
var incorrectAnswers=0;

for (var i = 0; i < randomQuestions.length; i++) {
    $("#questionArea").append(`<br><p><strong>${randomQuestions[i].question}</strong></p>`);
    for (var j = 0; j < randomQuestions[i].choices.length; j++) {

        $("#questionArea").append(`<input type="radio" name="question${i}" questionNumber=${i} value="${randomQuestions[i].choices[j]}" correctAnswer=${randomQuestions[i].answer} class='answers'>${randomQuestions[i].choices[j]}<br>`)
    }
}

function setTimer() {
  var timer = setInterval(() => {
        counter--;
        $("#counter").text(`You have ${counter} seconds.`)
        // $("#correctAnswers").text(`Correct Answers: ${correctAnswers}`)
        // $("#incorrectAnswers").text(`Incorrect Answers: ${incorrectAnswers}`)
        // $("#scores").text(`Your score is ${score}`)
        // $("#questionArea").empty()
        if (counter == 0) {
            $("#score").text(`Your Score is ${score}`)
            var playAgain = confirm(`Would you like to play again?`)
            if (playAgain) {
                counter = 60;
                score =0;

                
                $("#questionArea").show()
            } else {
                clearInterval(timer)
                $("#correctAnswers").text(`Correct Answers: ${correctAnswers}`)
                $("#incorrectAnswers").text(`Incorrect Answers: ${incorrectAnswers}`)
                $("#scores").text(`Your score is ${score}`)
                $("#questionArea").hide()
            }
        }
    }, 1000);
}

setTimer();

$(document).on("click", ".answers", function () {
    var userPick = $(this).attr("value")
    var questionNumber = $(this).attr("questionNumber")
    var correctAnswer = $(this).attr("correctAnswer")
    if (userPick == randomQuestions[questionNumber].choices[correctAnswer]) {
        correctAnswers++;
        console.log("you're right!")
    } else {
        incorrectAnswers++;
        console.log("you're wrong!")
    }
    // console.log(userPick)
    // console.log(questionNumber)

})

// Creating Timer to answer questions

// Display Question & Choices

// On click function for answer whether True or False (Adding to Score if Correct)

// Call functions

//DOM

// //display question and loop though and display possible answers
// function displayQuestion() {
// 	//generate random index in array
// 	index = Math.floor(Math.random()*randomQuestions.length);
// 	pick = options[index];

// // 	if (pick.shown) {
// // //		//recursive to continue to generate new index until one is chosen that has not shown in this game yet
// // 		displayQuestion();
// // 	} else {
// // 		console.log(pick.question);
// 		//iterate through answer array and display
// 		$("#questionArea").html("<h2>" + pick.question + "</h2>");
// 		for(var i = 0; i < pick.choices.length; i++) {
// 			var userChoices = $("<div>");
// 			userChoices.addClass("answerchoice");
// 			userChoices.html(pick.choice[i]);
// 			//assign array position to it so can check answer
// 			userChoices.attr("data-guessvalue", i);
// 			$("#answerArea").append(userChoices);
// 		}
// }

// displayQuestion();

// Trivia Q & A
// Timer 60-90 seconds
// Scores
// Reset or Reload
// Using jQuery to add elements onto html



// for (var i=0; i< randomQuestions.length; i++){
//     var response = window.prompt(randomQuestions[i].prompt);
//     if(response == randomQuestions[i].answer){
//         score++;
//         alert("Correct!");
//     } else{
//         alert("Wrong!");
//     }
// }
