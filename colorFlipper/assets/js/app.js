// color
const colorArr = ["red", "yellow", "green", "blue", "aqua", "gray", "orange", "crimson", "brown", "pink"];

const btn = document.getElementById('flip-btn');
const color = document.querySelector('.color');
const currentLocation = location.href;
const nav = document.querySelectorAll('a');

function getRandom() {
    return Math.floor(Math.random() * colorArr.length);
}

btn.addEventListener('click', function(){
    const randomCol = getRandom();

    document.body.style.backgroundColor = colorArr[randomCol];
    color.textContent = colorArr[randomCol];
});

for (let i = 0; i < nav.length; i++){
    if(nav[i].href === currentLocation){
        nav[i].className = "active"
    }
}