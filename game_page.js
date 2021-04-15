player1_score = 0;
player2_score = 0;

player1_name = localStorage.getItem("Player1_Name");
player2_name = localStorage.getItem("Player2_Name");

document.getElementById("player_1").innerHTML = player1_name;
document.getElementById("player_2").innerHTML = player2_name;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - "+player2_name;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    console.log(number1 , number2);

    correct_answer = number1 * number2;
    row1 = "<h4 id='number_display'> Q. "+number1+" x "+number2+ "</h4>";
    row2 = "<br>Answer : <input type='text' id='input_check_box'>";
    row3 = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = row1 + row2 + row3;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}


question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    console.log("Answer = " + get_answer);
    if(get_answer == correct_answer);
    {
        if(answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}