// color
const colorArr = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('flip-btn');
const color = document.querySelector('.color');
const currentLocation = location.href;
const nav = document.querySelectorAll('a');

function getRandom() {
    return Math.floor(Math.random() * colorArr.length);
}

btn.addEventListener('click', function(){
    let hexCol = "#";
    for(let i = 0; i < 6; i++){
        hexCol += colorArr[getRandom()];
    }

    document.body.style.backgroundColor = hexCol;
    color.textContent = hexCol;
});

for(let i = 0; i < nav.length; i++){
    nav[i].addEventListener('click', function(){
        let current = document.querySelector('.active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += " active";
    });
}

for (let i = 0; i < nav.length; i++){
    if(nav[i].href === currentLocation){
        nav[i].className = "active"
    }
}