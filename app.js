const container = document.querySelector("#container");
const addButton = document.querySelector("#button");
addButton.addEventListener("click",getInput);
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click",clearContainer);

const widthSetter = document.querySelector("#width-setter");
const heightSetter = document.querySelector("#height-setter");
const colorSetter = document.querySelector("#color-setter");

function buildADiv(width,height,color,text){
    const div = document.createElement("div");
    div.className = "";
    div.id = "";
    div.style.border = "2px solid black";
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.backgroundColor = color;
    div.innerHtml = text;
    container.appendChild(div);
}

function getInput(){
    const width = widthSetter.value;
    const height = heightSetter.value;
    const color = colorSetter.value;
    buildADiv(width,height,color);
}

function clearContainer(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}