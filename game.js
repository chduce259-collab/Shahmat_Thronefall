let military = 61;
let popularity = 65;

function rollDice(){

return Math.floor(Math.random()*20)+1;

}

function choice1(){

let dice = rollDice();

if(dice >= 15){

military += 5;
popularity += 3;

alert("بسیج موفق بود.");

}

else{

military += 2;

alert("بسیج با موفقیت نسبی انجام شد.");

}

updateStats();

}

function choice2(){

let dice = rollDice();

if(dice >= 15){

popularity += 5;

alert("دفاع موفقیت‌آمیز بود.");

}

else{

popularity -= 2;

alert("دفاع با مشکلاتی روبرو شد.");

}

updateStats();

}

function updateStats(){

document.getElementById("military").innerText = military;

document.getElementById("popularity").innerText = popularity;

}
