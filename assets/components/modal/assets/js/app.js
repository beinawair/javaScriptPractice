const modalOpn = document.querySelector('.modal-btn');
const modalCls = document.querySelector('.close-btn');
const modalOv = document.querySelector('.modal-overlay');

modalOpn.addEventListener('click', function(){
    modalOv.classList.add('open-modal');
});

modalCls.addEventListener('click', function(){
    modalOv.classList.remove('open-modal');
});