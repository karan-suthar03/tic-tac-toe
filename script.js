var dim = 400;
var gap = dim/3;
var P = 2;
function setup(){
    createCanvas(dim,dim);
}
function drawLines(){
    stroke(255);
    strokeWeight(5);
    for(let i = 1;i<3;i++){
        line(gap*i,0,gap*i,dim);
        line(0,gap*i,dim,gap*i);
    }
}
function drawX(i,j){
    stroke(255,0,0);
    line(i*gap+gap/2-45,j*gap+gap/2-45,i*gap+gap/2+45,j*gap+gap/2+45);
    line(i*gap+gap/2+45,j*gap+gap/2-45,i*gap+gap/2-45,j*gap+gap/2+45);
}
function drawO(i,j){
    stroke(0,0,255);
    fill(0,0);
    circle(i*gap+gap/2,j*gap+gap/2,90);
}
function drawOX(){
    if (matrix) {
        for (let i = 0; i < 3; i++) {
            if (matrix[i]) {
                for (let j = 0; j < 3; j++) {
                    if (matrix[i][j] == 1) {
                        drawX(i, j);
                    } else if (matrix[i][j] == 2) {
                        drawO(i, j);
                    }
                }
            }
        }
    }
}

function playerControll(){
    if (mouseIsPressed) {
        if(playerData == P){
            var i = parseInt(mouseX/gap);
            var j = parseInt(mouseY/gap);
            if(i>=0 && i<=2 && matrix[i][j] == 0 && j>=0 && j<=2){
                matrix[i][j] = P;
                playerRef.set(1);
            }
            matrixRef.set(matrix);
        }
    }
}
function showWinner(p){
    stroke(255);
    fill(255,0,0);
    rect(100,150,200,100);
    textSize(24);
    fill(0);
    text("player " + p + " won!", 128, 200);
}
function check(){
    for (let i = 0; i < 3; i++) {
        if (matrix[i][0] != 0 && matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]) {
            showWinner(matrix[i][0]);
            noLoop();
        }
    }
    for (let j = 0; j < 3; j++) {
        if (matrix[0][j] != 0 && matrix[0][j] == matrix[1][j] && matrix[1][j] == matrix[2][j]) {
            showWinner(matrix[0][j]);
            noLoop();
        }
    }
    if (matrix[0][0] != 0 && matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) {
        showWinner(matrix[0][0]);
        noLoop();
    }
    if (matrix[0][2] != 0 && matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]) {
        showWinner(matrix[0][2]);
        noLoop();
    }
}
function draw(){
    background(0);
    drawLines();
    drawOX();
    check();
    playerControll();
}