$(document).ready(function(){
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function(response){
    var quizQuestions = []
    for( var i=0; i<response.length; i++){
        quizQuestions.push({
            'question' : response[i].question,
            'options' : response[i].options,
            'correctAnswer' : response[i].answer
        })
    }

var quizContainer = $('#quizWrapper')
  function createQuiz(){
    for(let i = 0; i < quizQuestions.length; i++){
        let questionDiv = $('<div id="question' + i + '"></div>');
        questionDiv.append('<h3>Q' + (i+1) + '. ' + quizQuestions[i].question + '</h3>');
        for(let j = 0; j < quizQuestions[i].options.length; j++){
            questionDiv.append('<label><input type="radio" name="question' + i + '" value="' + j + '">' + quizQuestions[i].options[j] + '</label>');
        }
        $('#quizWrapper').append(questionDiv);
    }
    var quizValue = `<div id="submitBtn"><button type="submit" id="submitForm">Submit</button></div>`
    $('#quizWrapper').append(quizValue);
}


//Call the function
createQuiz();

// Form Submission 
$("form").submit(function(e){
    e.preventDefault();

    // Calculating the score
    let score = 0;
    for(let i = 0; i < quizQuestions.length; i++){
        let selectedAnswer = $('input[name="question' + i + '"]:checked').val();
        if(parseInt(selectedAnswer) === quizQuestions[i].correctAnswer){
            score++;
        }
    }
    //Show the score
    $('#scoreCount').text(score);
})

}); // API

}); // main