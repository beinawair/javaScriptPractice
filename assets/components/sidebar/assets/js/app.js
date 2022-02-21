//selector
const clsBtn = document.querySelector('.close-btn');
const opnBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

//add event listener
opnBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show');
});

clsBtn.addEventListener('click', function(){
    sidebar.classList.remove('show');
});