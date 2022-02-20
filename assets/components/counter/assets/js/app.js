// initial value
let count = 0;

//selector
const val = document.getElementById('value');
const btn = document.querySelectorAll('.btn');

//for each btn contains 'decrease, reset, increase'
btn.forEach(function(n){
    n.addEventListener('click', function(e) {
        const value = e.currentTarget.classList;
        if(value.contains('decrease')){
            count--;
        } else if(value.contains('increase')){
            count++;
        } else {
            count = 0;
        }

        if(count > 0){
            val.style.color = 'green';
        } else if(count < 0){
            val.style.color = 'red';
        } else {
            val.style.color = 'darkslateblue';
        }

        val.textContent = count;
    });
});