// Variables

var randomQuestions = [{
                question: "Which sea creature has three hearts?",
                choices: ["Shark", "Octopus", "Humpback Whale", "Shrimp"],
                answer: 1,
                },
                {
                question: "How many bones does an adult human have?",
                choices: ["300", "99", "138", "206"],
                answer: 3,
                },
                {
                question: "What is the Italian word for pie?",
                choices: ["Pizza", "Alici", "Bere", "Capra"],
                answer: 0,
                },
                {
                question: "What was Marilyn Monroe's natural hair colour?",
                choices: ["Honey Blonde", "Brunette", "Ginger", "Dark Blonde"],
                answer: 2,
                },
                {
                question: "Name the port of Rome.",
                choices: ["Ostia", "Ravena", "Gioia Tauro", "Messina"], 
                answer: 0,
                },
                {
                question: "Who sang about being an eggman and a walrus?",
                choices: ["Elvis", "Cher", "The Beatles", "Michael Jackson"],
                answer: 2,
                },      
                {
                question: "When did the French Revolution end?",
                choices: ["1898", "1900", "1799", "1805"],
                answer: 2,
                },     
                {
                question: " Which Russian town suffered an infamous nuclear disaster in 1986?",
                choices: ["Chernobyl", "Moscow", "Kazan", "Samara"],
                answer: 0,
                },    
            ];

console.log(randomQuestions)
var score = 0;
var counter = 30;

console.log(randomQuestions.question[i])
console.log(randomQuestions.choices [0])
console.log(randomQuestions.answer[0])
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
