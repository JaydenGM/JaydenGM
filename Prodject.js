var player = "O";
var turnsTaken = 0;
var gameIsOver = false;


function changePlayers(){
    //you write the code that goes in here
    turnsTaken = turnsTaken +1;

    if (player === "X") {
    player = "O";
    }
    else if (player === "O") {
    player = "X";
    }
}

function performLogic(button, tile){
    //you write the code that goes in here
    $(button).hide();
    $(tile).html(player);
    changePlayers();
}
function checkWin(tileID1,tileID2, tileID3)
{
}


//in each of the click events below,
//uncomment the function calls to performLogic

$( document ).ready(function() {


$("#button1").click(function() {
 performLogic("#button1","#tile1");
});

$("#button2").click(function() {
performLogic("#button2","#tile2");
});

$("#button3").click(function() {
 performLogic("#button3","#tile3");
});

$("#button4").click(function() {
 performLogic("#button4","#tile4");
});

$("#button5").click(function() {
performLogic("#button5","#tile5");
});

$("#button6").click(function() {
performLogic("#button6","#tile6");
});

$("#button7").click(function() {
 performLogic("#button7","#tile7");
});

$("#button8").click(function() {
 performLogic("#button8","#tile8");
});

$("#button9").click(function() {
 performLogic("#button9","#tile9");
});
$("#reset").click(function() {
    $("#tile1").html("<button id='button1'>Tile 1</button>");
  	$("#button1").show();
    turnsTaken = 0;
     $("#tile2").html("<button id='button2'>Tile 2</button>");
  	$("#button2").show();
       $("#tile3").html("<button id='button3'>Tile 3</button>");
  	$("#button3").show();
       $("#tile3").html("<button id='button3'>Tile 3</button>");
  	$("#button3").show();
       $("#tile4").html("<button id='button4'>Tile 4</button>");
  	$("#button4").show();
       $("#tile5").html("<button id='button5'>Tile 5</button>");
  	$("#button5").show();
       $("#tile6").html("<button id='button6'>Tile 6</button>");
  	$("#button6").show();
       $("#tile7").html("<button id='button7'>Tile 7</button>");
  	$("#button7").show();
       $("#tile8").html("<button id='button8'>Tile 8</button>");
  	$("#button8").show();
       $("#tile9").html("<button id='button9'>Tile 9</button>");
  	$("#button9").show();
});
});
