const text = document.querySelectorAll('.question');

text.forEach(function(que){
    const btn = que.querySelector('.question-btn');
    const ans = que.querySelector('.answer');

    btn.addEventListener('click', function(){

        text.forEach(function(item){
            if(item !== que) {
                item.classList.remove('active');
            }
        });
        que.classList.toggle('active');
        btn.classList.toggle('active');
        ans.classList.toggle('active');
    });
});