const hour=document.getElementById('hours');
const minut=document.getElementById('minuts');
const second = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

function updateTime(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let AmPm = "AM";
    if(h>12){
        h=h-12;
        AmPm = "PM";
    }
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;
    hour.innerText = h;
    minut.innerText = m;
    second.innerText = s;
    ampm.innerText = AmPm;
    setTimeout(function(){
        updateTime();
    },1000);
}
updateTime();