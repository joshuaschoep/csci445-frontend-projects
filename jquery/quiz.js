var questions = {
    "apple": "An apple always has red skin.",
    "banana": "Most people do not eat the peel of a banana.",
    "orange": "Oranges were originally known in Europe as 'Apples of the Orient'",
    "grape": "Grapes are native to America."
}

var answers = {
    "apple": false,
    "banana": true,
    "orange": true,
    "grape": false
}

var defaultText = "";
var currentQuestion = null;
var correct = 0;
var questioncount = 4;

function displayGraphic(){
    $("body").append('<div id="popup">Congratulations! You got ' + correct + ' out of 4! Nice!</div>')
    let popup = $("popup");
    popup.css({
        "display": "block",
        "overflow": "hidden",
        "position": "absolute",
        "top": "0",
        "left": "0",
        "background-color": "#99ccff",
        "height": "100vh",
        "width": "100vw",
    });

    popup.click(function(event){
        popup.remove();
    });
}

$(function(){
    $(".buttons button").hover(
        function(event){
            $("#question").css("background-color", "#9999ff");
            if(defaultText != ""){
                return;
            }else{
                $("#question").text("Click to see the question");
            }
        },
        function(event){
            $("#question").css("background-color", "#ccc").text(defaultText);
        }
    );

    $(".buttons button").click(
        function(event){
            if(defaultText != ""){
                alert("Must answer current question");
            }else{
                currentQuestion = $(this).attr('id');
                defaultText = questions[currentQuestion];
                $("#question").text(defaultText);
                $("#answer button").css("display", "inline-block");
            }
        }
    );

    $("#answer button").click(
        function(event){
            var radioValue = $("input[name='quiz']:checked").val();
            if(radioValue){
                radioValue = (radioValue == 'true');
                if(radioValue == answers[currentQuestion]){
                    alert("Correct!");
                    $("aside ul").append('<li> :) ' + currentQuestion + '</li>');
                    correct++;
                }else{
                    alert("Incorrect")
                    $("aside ul").append('<li> :( ' + currentQuestion + '</li>');
                }
                $('#' + currentQuestion).remove();
                $("#answer button").css("display", "none");
                defaultText = "";
                currentQuestion = null;
                $("#question").text(defaultText);
                questioncount--;
                $("#answer input").prop("checked", false);
                if(questioncount == 0){
                    displayGraphic();
                }
            }else{
                alert("Must select true/false");
            }
        }
    );

    $("#answer input").prop("checked", false);
});