
window.addEventListener('load',(event)=>{
    rulesTable.classList.add('open');
    document.querySelector(".container").classList.add('open');
})


const rulesBtn = document.querySelector(".container .btn-rules");
const rulesTable = document.querySelector(".container .rules");
const rulesClose = document.querySelector(".container .rules .rules-header .rules-header-btn");

rulesBtn.addEventListener('click', ()=>{
    rulesTable.classList.add('open');
    document.querySelector(".container").classList.add('open');
})

rulesClose.addEventListener('click', ()=>{
    rulesTable.classList.remove('open');
    document.querySelector(".container").classList.remove('open');
})


const gameButtons = document.querySelectorAll(".container .main .main-choice .btn-choice");
const mainChoice = document.querySelector(".container .main .main-choice");
const mainResult = document.querySelector(".container .main .main-result");
const yourChoice = document.querySelector(".container .main .main-result .user-choice .div");
const computerChoice = document.querySelector(".container .main .main-result .comp-choice .div");
const resultText = document.querySelector(".container .main .main-result .main-result-show h1");
const scoreText = document.querySelector(".container .header .header-score h1");

const playAgain = document.querySelector(".container .main .main-result .main-result-show button");

playAgain.addEventListener('click',()=>{
    mainResult.classList.remove('chosen');
    mainChoice.classList.remove('chosen');
    mainResult.parentElement.classList.remove('chosen');

    yourChoice.innerHTML =`<span class="placeholder"></span>`;
    yourChoice.classList.remove('glow');
    computerChoice.innerHTML = '<span class="placeholder"></span>';
    computerChoice.classList.remove('glow');

})

var score=0;

gameButtons.forEach((gBtn)=>{
    gBtn.addEventListener('click',()=>{
        
        mainChoice.classList.add('chosen');
        mainResult.classList.add('chosen');
        mainResult.parentElement.classList.add('chosen');
        
        var userChoice = userSelection(gBtn);
        var compChoice = compSelection();

        gameResult(userChoice, compChoice);

        yourChoice.innerHTML = `<div class="btn-choice ${userChoice}">
                                <span class="btn-inside">
                                <img src="images/icon-${userChoice}.svg" alt="">
                                </span>
                                </div >`;
        
        computerChoice.innerHTML = `<div class="btn-choice ${compChoice}">
                                <span class="btn-inside">
                                <img src="images/icon-${compChoice}.svg" alt="">
                                </span>
                                </div >`;
    
    })
})


const computerChoices = ['paper', 'scissors', 'rock'];
function compSelection() {
    return computerChoices[Math.floor(Math.random()*3)];
}

function userSelection(btn) {
    var userChoice = '';
    if(btn.classList.contains('paper')){
       userChoice = 'paper';
    }
    else if(btn.classList.contains('scissors')){
        userChoice = 'scissors';
    }
    else {
        userChoice = 'rock';
    }

    return userChoice;
}

function gameResult(user, comp) {
    var result = 0;
    if(user==='paper'){
        if(comp === 'rock'){
            result = 1;
        }
        else if(comp === 'scissors')
        {
            result = 2;
        }
    }

    else if (user==='scissors'){
        if(comp==='paper'){
            result = 1;
        }
        else if(comp === 'rock'){
            result = 2;
        }
    }

    else if (user==='rock')
        {
            if(comp==='scissors')
            {
                result=1;
            }
            else if(comp==='paper')
            {result=2;}
        }

        resultDisplay(result);
}

function resultDisplay(res) {
    if(res===0){
        resultText.innerHTML="Draw";
    }
    else if(res===1){
        resultText.innerHTML="You Win";
        score++;
        console.log(score);
        scoreText.textContent = score;
        yourChoice.classList.add('glow');
    }
    else if(res===2){
        resultText.innerHTML="You Lose";
        computerChoice.classList.add('glow');
    }
}