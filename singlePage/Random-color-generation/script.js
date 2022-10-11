const containerEl = document.querySelector(".container");
for (let index = 0; index < 40; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
    
}

const colorContainerEls = document.querySelectorAll(".color-container");

function generateColors(){
    colorContainerEls.forEach(function(colorContainerEl){
        const newColor = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColor;
        colorContainerEl.innerText = "#" + newColor;
    });
}

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let color = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomNum,randomNum+1);
        
    }
    return color ;
}
generateColors();