const scores=document.getElementById('score');
const quest=document.getElementById('question');
const btn=document.getElementById('btn');

let k = Math.floor(Math.random()*10);

let d = Math.floor(Math.random()*10);
let multiply = k*d;
quest.innerText = 'what is '+k+' multiply by '+d+' ?';


btn.addEventListener('click',function(){
    mult();
});

function mult(){
    let count=0;
    let vlu=document.getElementById('input').value;
    vlu=parseInt(vlu);
 
    if(vlu===multiply) {
        count++;
        scores.innerText= 'score: ' + count;
        
    }else{
        count--;
        scores.innerText = 'score: '+ count;
    }
    

}