<!DOCTYPE html>
<html>
<head>
    <title>Jogo da Velha</title>

    <style>
        body{
            font-family: Arial;
            text-align:center;
        }

        .board{
            display:grid;
            grid-template-columns: repeat(3,100px);
            gap:5px;
            justify-content:center;
            margin-top:20px;
        }

        .cell{
            width:100px;
            height:100px;
            font-size:40px;
            cursor:pointer;
        }
    </style>
</head>

<body>

<h1>Jogo da Velha</h1>

<div class="board">
    <button class="cell"></button>
    <button class="cell"></button>
    <button class="cell"></button>
    <button class="cell"></button>
    <button class="cell"></button>
    <button class="cell"></button>
    <button class="cell"></button>
    <button class="cell"></button>
    <button class="cell"></button>
</div>

<h2 id="status">Vez do X</h2>

<button onclick="resetGame()">Reiniciar</button>

<script>

let currentPlayer = "X";
let cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("click", play);
});

function play(){

    if(this.textContent !== "") return;

    this.textContent = currentPlayer;

    if(checkWinner()){
        document.getElementById("status").innerText = "Jogador " + currentPlayer + " venceu!";
        disableBoard();
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("status").innerText = "Vez do " + currentPlayer;
}

function checkWinner(){

    let values = [...cells].map(c => c.textContent);

    let combos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    return combos.some(c =>
        values[c[0]] &&
        values[c[0]] === values[c[1]] &&
        values[c[1]] === values[c[2]]
    );
}

function disableBoard(){
    cells.forEach(c => c.disabled = true);
}

function resetGame(){
    cells.forEach(c=>{
        c.textContent = "";
        c.disabled = false;
    });

    currentPlayer = "X";
    document.getElementById("status").innerText = "Vez do X";
}

</script>

</body>
</html>