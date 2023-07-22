let totalAttempts=5;
let attempts=0;
let totalWons=0;
let totalLosts=0;

const form=document.querySelector("form");
const cardBody=document.querySelector(".cardbody");
const guessingNumber=form.querySelector("#guessingnumber");
const checkButton=form.querySelector("#check");
const resultText=cardBody.querySelector(".resulttext");
const lostwinmgs=document.createElement("p");
const remainAttempts=document.querySelector(".remainingattepms");

form.addEventListener("submit",function(event){
    event.preventDefault();
    attempts++;
    if(attempts===5){
        checkResult(Number(guessingNumber.value));
        remainAttempts.innerHTML=`Remaining attempts: ${totalAttempts-attempts}`;
        guessingNumber.disabled=true;
        checkButton.disabled=true;
    }else{
        checkResult(Number(guessingNumber.value));
        remainAttempts.innerHTML=`Remaining attempts: ${totalAttempts-attempts}`;
    }
    guessingNumber.value="";
});

function checkResult(value){
    const randomNumber=getRandomNumber(5);
    if(value===randomNumber){
        resultText.innerHTML=`You have won`;
        totalWons++;
    }else{
        resultText.innerHTML=`You have lost. Random Number was ${randomNumber}`;
        totalLosts++;
    }
    lostwinmgs.innerHTML=`Won: ${totalWons}, Lost: ${totalLosts}`;
    lostwinmgs.classList.add("largetext");
    cardBody.appendChild(lostwinmgs);
};

function getRandomNumber(limit){
    return Math.floor(Math.random()*limit)+1;
};