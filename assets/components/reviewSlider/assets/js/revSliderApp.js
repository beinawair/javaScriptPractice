// review data
const reviews = [
    {
        id: 1,
        name: "Beinawair",
        job: "Frontend developer",
        img: "./img/img01.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, expedita iure. Odit expedita voluptatem nam rerum, non officia iste ipsa!",
    },
    {
        id: 2,
        name: "Jhon Son",
        job: "web designer",
        img: "./img/img01.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, expedita iure. Odit expedita voluptatem nam rerum, non officia iste ipsa!"
    },
    {
        id: 3,
        name: "Jhon Thor",
        job: "web developer",
        img: "./img/img01.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, expedita iure. Odit expedita voluptatem nam rerum, non officia iste ipsa!"
    },
    {
        id: 4,
        name: "Jhon Tox",
        job: "web designer",
        img: "./img/img01.jpeg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, expedita iure. Odit expedita voluptatem nam rerum, non officia iste ipsa!"
    },
];

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
});

//show person based on item
function showPerson(review){
    const item = reviews[review];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

//show previous
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})