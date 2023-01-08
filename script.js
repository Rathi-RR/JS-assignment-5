$(document).ready(function(){
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function(response){
    console.log(response);

    // Array to store quiz questions
    var quizQuestions = []
    for( var i=0; i<response.length; i++){
        quizQuestions.push({
            'question' : response[i].question,
            'options' : response[i].options,
            'correctAnswer' : response[i].correctAnswer
        })
    }

    var quizContainer = $('#quizWrapper')
    var quizValue = ''
    for(var j=0; j<quizQuestions.length; j++){
       var radiobtnOptions = '';
       var currentQuestion = quizQuestions[j];
       for(var k=0; k<currentQuestion.options.length; k++){
        // radiobtnOptions += '<label><input type="radio" name="ques'+j+'" value="'+currentQuestion.options[k]+'"/>'+currentQuestion.options[k]+'</label><br>'
        radiobtnOptions += `<label><input type="radio" name="ques${j}"  value="${currentQuestion.options[k]}"> ${currentQuestion.options[k]}</label>`
       }
       quizValue += '<div class="Qquestions"> <h3>Q'+[j+1]+' '+currentQuestion.question+'</h3>'+radiobtnOptions+'</div>'
    }
    quizValue += '<div id="submitBtn"><button type="submit" id="submit">Submit</button></div>'
    quizContainer.append(quizValue);
})

// ON Submit
$("form").submit(function(e){
    e.preventDefault();
});

//On the submit button click calculate the score and show the score in the right-hand side div
$("#submit").click(function(){
    var score = 0;
    var answers = $("input:checked");
    answers.each(function(){
        if($(this).val() == "correct")
            score++;
    });
    // $("#score-div").show();
    $("#scoreCount").text("You got " + score + "/5 correct answers.");
});

}); 



  