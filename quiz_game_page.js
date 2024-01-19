player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
question_turn = player1_name;
answer_turn = player2_name;

function send(){
    inputNumber1 = document.getElementById("number_1").value;
    inputNumber2 = document.getElementById("number_2").value;
    console.log("input1 = " + inputNumber1);
    console.log("input2 = " + inputNumber2);

    question_word = "<h4 id='word_display'> Question: " + inputNumber1 + " X " + inputNumber2 + " = ? </h4>";
    input_box = "<br> Answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button> ";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("output").style.display='block';
    document.getElementById("questionsection").style.display='none';
}

function check(){
    inputNumber1 = document.getElementById("number_1").value;
    inputNumber2 = document.getElementById("number_2").value;
    userAnswer = document.getElementById("input_check_box").value;
    actualAnswer = inputNumber1 * inputNumber2;

    if(actualAnswer == userAnswer){
        if(answer_turn == player1_name){
           player1_score = player1_score + 1;
           document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
           player2_score = player2_score + 1;
           document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == player1_name)
    {
       question_turn = player2_name;
       document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else
    {
       question_turn = player1_name;
       document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
    if(answer_turn == player1_name)
    {
       answer_turn = player2_name;
       document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else
    {
       answer_turn = player1_name;
       document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
    document.getElementById("questionsection").style.display='block';
    document.getElementById("output").style.display='none';

}
