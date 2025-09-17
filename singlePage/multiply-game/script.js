const scores=document.getElementById('score');
const wrong=document.getElementById('Wrong');
const total=document.getElementById('Total');
const quest=document.getElementById('question');
const btn=document.getElementById('btn');

let k = Math.floor(Math.random()*10);

let d = Math.floor(Math.random()*10);
let multiply = k*d;
quest.innerText = 'what is '+k+' multiply by '+d+' ?';
    let countCorrect=0;
    let countWrong=0;
    let countTotal=0;

btn.addEventListener('click',function(){
    mult();
});

function mult(){

    const vluInput=document.getElementById('input');
    const vlu=parseInt(vluInput.value);
 
    if(vlu===multiply) {
        countCorrect++;
        scores.innerText= 'Correct-Ans: ' + countCorrect;
        
    }else{
        countWrong++;
        wrong.innerText = 'Wrong-Ans: '+ countWrong;
    }

    countTotal = countCorrect + countWrong;
    total.innerText="Total-Attempt: " + countTotal

    k = Math.floor(Math.random()*10);
    d = Math.floor(Math.random()*10);
    multiply = k*d;
    quest.innerText = 'what is '+k+' multiply by '+d+' ?';

    vluInput.value = ""
    

}
