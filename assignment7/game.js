window.onload = pageLoad;

function pageLoad() {
    var startbutton = document.getElementById("start");
    startbutton.onmousedown = startGame;
    var gameLayer = document.getElementById("game-layer");
    gameLayer.id = "squares-layer";
    var gameContainer = document.getElementById("game-container");
    gameContainer.id = "squares-container";
}

function startGame() {
    alert("Ready");
    addBox();
    timeStart();
}

function timeStart() {
    var TIMER_TICK = 1000;
    var timer = null;
    var min = 0.1;
    var second = min * 60;
    var x = document.getElementById('clock');
    timer = setInterval(timeCount, TIMER_TICK)
    x.innerHTML = second;

    function timeCount() {
        var allbox = document.querySelectorAll("#squares-layer div");
        second -= 1;
        x.innerHTML = second;
        if (second <= 0) {
            clearInterval(timer);
            clearScreen();
            alert("YOU FAILED!")
        }
        if (second >= 0 && allbox.length === 0) {
            clearInterval(timer);
            alert("CONGRATULATIONS! YOU WIN!")
        }
    }
}

function addBox() {
    var numbox = document.getElementById("numbox").value;
    var gameLayer = document.getElementById("squares-layer");
    var colorDrop = document.getElementById("color").value;
    for (var i = 0; i < numbox; i++) {
        var tempbox = document.createElement("div");
        tempbox.className = "square";
        tempbox.id = "box" + i;
        tempbox.style.left = Math.random() * (500 - 25) + "px";
        tempbox.style.top = Math.random() * (500 - 25) + "px";
        tempbox.style.backgroundColor = colorDrop;
        gameLayer.appendChild(tempbox);
        bindBox(tempbox);
    }
}

function bindBox(box) {
    box.onclick = function() {
        box.parentNode.removeChild(box);
    }
}

function clearScreen() {
    var allbox = document.querySelectorAll("#squares-layer div");
    for (var i = 0; i < allbox.length; i++) {
        allbox[i].parentNode.removeChild(allbox[i]);
    }
}