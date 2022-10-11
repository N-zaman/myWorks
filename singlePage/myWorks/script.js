const textAreaEl = document.getElementById('textarea');
const totalEl = document.getElementById('total');
const remainingEl =  document.getElementById('remaining');
textAreaEl.addEventListener('keyup',function(){
    updateCounter()
});
function updateCounter(){
    totalEl.innerText = textAreaEl.value.length;

    remainingEl.textContent = textAreaEl.getAttribute("maxlength") - textAreaEl.value.length;
};
updateCounter();
