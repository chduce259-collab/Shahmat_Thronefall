let military = 61;
let popularity = 65;

let currentEvent = 0;

const events = [

{
title:"ارتش عراق از مرز عبور کرد",
map:"map1.png",
text:"نیروهای عراقی وارد خاک ایران شده‌اند.",

choices:[
{
name:"اعلام بسیج عمومی",
success:"بسیج موفق بود.",
military:5,
popularity:3
},

{
name:"تمرکز بر دفاع از خوزستان",
success:"دفاع از خوزستان تقویت شد.",
military:3,
popularity:1
}
]
},

{
title:"خرمشهر در خطر است",
map:"map2.png",
text:"نیروهای عراقی به خرمشهر نزدیک شده‌اند.",

choices:[
{
name:"اعزام نیروهای بیشتر",
success:"نیروهای کمکی رسیدند.",
military:4,
popularity:2
},

{
name:"تخلیه غیرنظامیان",
success:"بخش بزرگی از مردم نجات یافتند.",
military:0,
popularity:5
}
]
}

];

function rollDice(){

return Math.floor(Math.random()*20)+1;

}

function makeChoice(choiceIndex){

let dice = rollDice();

let choice =
events[currentEvent].choices[choiceIndex];

if(dice >= 10){

alert(choice.success);

military += choice.military;

popularity += choice.popularity;

}else{

alert("عملیات با شکست نسبی روبرو شد.");

military -= 2;

popularity -= 1;

}

updateStats();

currentEvent++;

if(currentEvent < events.length){

loadEvent();

}else{

document.getElementById("event").innerHTML =
"<h2>پایان نسخه آزمایشی</h2>";

document.getElementById("choices").innerHTML =
"";
}

}

function updateStats(){

document.getElementById("military").innerText =
military;

document.getElementById("popularity").innerText =
popularity;

}

function loadEvent(){

document.getElementById("map").src =
events[currentEvent].map;

document.getElementById("event").innerHTML =

`<h3>${events[currentEvent].title}</h3>
<p>${events[currentEvent].text}</p>`;

document.getElementById("choices").innerHTML =

`
<button onclick="makeChoice(0)">
${events[currentEvent].choices[0].name}
</button>

<button onclick="makeChoice(1)">
${events[currentEvent].choices[1].name}
</button>
`;

}

window.onload = loadEvent;
