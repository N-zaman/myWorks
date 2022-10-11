
const btn=document.getElementById('btn');
const selectTotal=document.querySelector('#span1');
const tipPerParson=document.querySelector('#span2');
 

btn.addEventListener('click',function(){
    let bill=document.querySelector('#bill').value;
bill=parseFloat(bill);
let tip=document.getElementById('tip').value;
tip=parseFloat(tip);
let parson=document.getElementById('person').value;
parson=parseFloat(parson);
     tip = (bill * tip)/100;
    let total= bill + tip;
    total=total/parson;
    total=total.toFixed(2);
    selectTotal.textContent=total;
    let tpp=tip/parson;
    tpp=tpp.toFixed(2);
    tipPerParson.textContent=tpp;
});
