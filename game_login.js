function logIn(){
    player1_name_input = document.getElementById("player1_name_input").value
    player2_name_input = document.getElementById("player2_name_input").value

    localStorage.setItem("Player1_Name" , player1_name_input);
    localStorage.setItem("Player2_Name", player2_name_input);

    window.location = "game_page.html";
}