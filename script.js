$(document).ready(function(){
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function(response){
    // console.log(response);

    // Array to store quiz questions
    var quizQuestions = []
    for( var i=0; i<response.length; i++){
        quizQuestions.push({
            'question' : response[i].question,
            'options' : response[i].options,
            'correctAnswer' : response[i].answer
        })
    }
    // console.log(quizQuestions);

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


// Submission of form
var quizScore = document.getElementById("quizScore");

$("form").submit(function(e){
   e.preventDefault();
    var score = 0;  // console.log(quizQuestions[a].correctAnswer)
    for(var a=0; a<quizQuestions.length; a++){
        var correctAns = quizQuestions[a]
        var radioValue = $("input[type=radio]:checked"); // alert(radioValue.val())
            if(radioValue > 0){
                alert();
            }
        }
quizScore.innerHTML = `You scored ${score} out of ${quizQuestions.length}`;
});


})

}); 



  
