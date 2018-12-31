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
//Test for array
console.log(randomQuestions)

// Variables - Scores & Counter
var score = 0;
var counter = 30;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 8;

// Display Question & Choices
for (var i = 0; i < randomQuestions.length; i++) {
    $("#questionArea").append(`<br><h5><strong>${randomQuestions[i].question}</strong></h5>`);
    for (var j = 0; j < randomQuestions[i].choices.length; j++) {

        $("#questionArea").append(`<input type="radio" name="question${i}" questionNumber=${i} value="${randomQuestions[i].choices[j]}" correctAnswer=${randomQuestions[i].answer} class='answers'>${randomQuestions[i].choices[j]}<br>`)
    }
}

// Creating Timer to answer questions. Providing option to play the game again.
setTimeout(function(timer){
    var timer = setInterval(() => {
        counter--;
        $("#counter").text(`You have ${counter} seconds.`)
        if (counter == 0) {
            $("#score").text(`Your Score is ${score}`)
            var playAgain = confirm(`Would you like to play again?`)
            if (playAgain) {
                //Reload page to start again
                location.reload();
            } else {
                clearInterval(timer)
                $("scores").show()
                $("#questionArea").hide()
                $("#correctAnswers").text(`Correct Answers: ${correctAnswers}`)
                $("#incorrectAnswers").text(`Incorrect Answers: ${incorrectAnswers}`)
                var unansweredTotal = unanswered - correctAnswers - incorrectAnswers;
                $("#unanswered").text(`Unanswered: ${unansweredTotal}`)
                console.log(unanswered)
                // $("scores").show()
                $("#scores").text(`Your score is ${score}`)
                // $("#questionArea").hide()
            }
        }
    }, 1000);
    // Delay for timer to start
}, 2000); 

// Call function
// setTimeout();
// setTimer();

// On click function for answer whether True or False (Adding to Score if Correct)

$(document).on("click", ".answers", function () {
    var userPick = $(this).attr("value")
    var questionNumber = $(this).attr("questionNumber")
    var correctAnswer = $(this).attr("correctAnswer")
    if (userPick == randomQuestions[questionNumber].choices[correctAnswer]) {
        correctAnswers++;
        score++;
        console.log("you're right!")
    } else {
        incorrectAnswers++;
        console.log("you're wrong!")
    } 

})
