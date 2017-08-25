// create a start button that is only on the page at first
// after start is clicked, use jQuery to make the questions
// and answers appear on the page


var correctAnswers = 0;
var wrongAnswers = 0;

var clockRunning = false;
var timeInterval;
var number = 30;



// create a timer that starts on click
// make the time remaining count down for 1 minute


		
	
$("#start").click(function(){
	$("#qAndA").show();

	function run() {
      timeInterval = setInterval(decrement, 1000);
			
    }
    run();
});

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timer").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();
     
      }
    }

    //  The stop function
    function stop() {

      clearInterval(timeInterval);
     $("#qAndA").hide();
     $(".results").show();

    }



// lets try this

// having trouble getting the score to show in .results div
// cannot get this code to work for the first question
function results() {

// made a function that would check to see if the 4th radiobutton
// checked and than increase correctAnswers and display it to the html
    $("#radio_1-4").prop('checked', true); 

	$("#radio_1-1, #radio_1-2", "#radio_1-3", "#radio_1-4", "#radio_1-5", "#radio_1-6").change(function () {
        if ($("#radio_1-4").is(":checked")) {
        	correctAnswers++;
            $("#correctAnswers").html("<p>" + correctAnswers + "<p>");
        }	
        else {
        	wrongAnswers++;
        	$("#wrongAnswers").html("<p>" + wrongAnswers + "<p>");

        }
        
        
            
    });        

   }

results();

