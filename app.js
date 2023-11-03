<<<<<<< HEAD
// add nea features
=======
let h2 = document.querySelector("h2");
let gameSeq = [];
let userSeq = [];
let gameStarted = false;
let level = 0;
let btn = ["yellow", "red", "green", "purple"];

document.addEventListener("keypress", function() {
    if (!gameStarted) {
        console.log("Game started");
        gameStarted = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btn[randIdx];
    let randBtn = document.querySelector(`#${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}

function checkAns() {
    console.log("level:", level);
    // Implement logic to check user input here
}

function btnPress() {
    console.log(this)
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns();
}

let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
    btn.addEventListener("click", btnPress);
}
>>>>>>> 24ebdde (aa)
