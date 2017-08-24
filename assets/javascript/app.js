// create a start button that is only on the page at first


$(".btn btn-secondary btn-sm btn-block").click(function(){
    $("#qAndA").show();
});




 // $("button").click(function(){
 //    $(".qAndA").show();
// });
    
// make array that contains questions and answers
var quiz = [
	{ 
		question: "Which of these is NOT a type of cheese?"
		answers:[
			{answer: "Cheddar", isCorrect: false},
			{answer: "Manchego", isCorrect: false},
			{answer: "Feta", isCorrect: false},
			{answer: "Borronzo", isCorrect: true}
		]
	},
	{
		question: "Which country eats the most cheese in the world?"
		answers:[
			{answer: "France", isCorrect: true},
			{answer: "United States", isCorrect: false},
			{answer: "Turkey", isCorrect: false},
			{answer: "Italy", isCorrect: false}
		]
	}
	{
		question: "Which cheese is most commonly found on pizza?"
		answers:[
			{answer: "Mozerella", isCorrect: true},
			{answer: "Feta", isCorrect: false},
			{answer: "Parmesan", isCorrect: false},
			{answer: "Gorgonzola", isCorrect: false}
		]
	}
	{
		question: "Which US state produces the most cheese?"
		answers:[
			{answer: "Wisconsin", isCorrect: true},
			{answer: "California", isCorrect: false},
			{answer: "Florida", isCorrect: false},
			{answer: "Colorado", isCorrect: false}
		]
	}
	{
		question: "Bandel, Paneer and Chhena are cheeses produced in which country?"
		answers:[
			{answer: "India", isCorrect: true},
			{answer: "Turkey", isCorrect: false},
			{answer: "Greece", isCorrect: false},
			{answer: "Romania", isCorrect: false}
		]
	}
	{
		question: "Which country is the birthplace of Cheddar Cheese?"
		answers:[
			{answer: "United States", isCorrect: false},
			{answer: "France", isCorrect: false},
			{answer: "Italy", isCorrect: false},
			{answer: "England", isCorrect: true}
		]
	}
	];




]


// after start is clicked, use jQuery to make the questions
// and answers appear on the page


// give correct answers to each question

// create a timer that starts 5 seconds after the page loads

// make the time remaining count down for 1 minute


// when the timer remaining reaches 0 then
// create alert that shows the amount of questions
// answered correctly and incorrectly.

