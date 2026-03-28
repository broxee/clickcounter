let Box = document.querySelector('.clickBox');
let score = document.querySelector('h3');
let timerText = document.querySelector('h2');

let count = 0;

// function clickBox(){
//     score.innerText = 1;
// }

// for(click of clickBox){
//     score.innerText++;
// }

// Box.addEventListener("click", function(){
//     count++;
//     score.innerText = count;
// });

let isGameRunning = true;

let scoreCounter =  Box.addEventListener("click", function(){
    
    
    if(isGameRunning){
        count++;
        score.innerText = count;
    }
});


let timer = 10;

let interval = setInterval(()=>{
    timer--;
    timerText.innerText = `Timer : ${timer}`;
    if(timer===0){
    clearInterval(interval);
    isGameRunning= false;

}

},1000)




