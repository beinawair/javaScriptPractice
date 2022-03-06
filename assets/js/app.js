const list = [
    {
        class: 'item a',
        img: './imgs/img-card/01-colorFlipper.png',
        alt: 'slide a',
        name: 'Color Flipper',
        desc: 'Flipping background color',
        number: '01',
        url: './assets/components/colorFlipper/index.html'

    },
    {
        class: 'item b',
        img: './imgs/img-card/02-counter.png',
        alt: 'slide b',
        name: 'Counter',
        desc: 'Increase, Decrease, Reset',
        number: '02',
        url: './assets/components/counter/index.html'

    },
    {
        class: 'item c',
        img: './imgs/img-card/03-reviewSlider.png',
        alt: 'slide c',
        name: 'Review Slider',
        desc: 'Create a carousel review slide',
        number: '03',
        url: './assets/components/reviewSlider/index.html'

    },
    {
        class: 'item 4',
        img: './imgs/img-card/05-sidebar.jpg',
        alt: 'slide d',
        name: 'Sidebar',
        desc: 'Create a sidebar',
        number: '04',
        url: './assets/components/sidebar/index.html'

    },
    {
        class: 'item 5',
        img: './imgs/img-card/06-modal.jpg',
        alt: 'slide e',
        name: 'Modal Pop Up',
        desc: 'Create a pop up modal',
        number: '05',
        url: './assets/components/modal/index.html'

    },
    {
        class: 'item 6',
        img: './imgs/img-card/07-faq-page.jpg',
        alt: 'slide f',
        name: 'FAQ Page',
        desc: 'Create dropdown FAQ Page',
        number: '06',
        url: './assets/components/faqPage/index.html'

    },
    {
        class: 'item 7',
        img: './imgs/img-card/04-navbar.png',
        alt: 'slide g',
        name: 'Responsive Navbar',
        desc: 'Build a responsive navbar',
        number: '07',
        url: './assets/components/navbar/index.html'

    },
    {
        class: 'item 8',
        img: './imgs/img-card/08-menu-page.jpg',
        alt: 'slide h',
        name: 'Menu Page',
        desc: 'Build a menu page',
        number: '08',
        url: './assets/components/menuPage/index.html'

    },
];

const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-container');
const box = document.getElementById('autoWidth');

let menuOpen = false;

window.addEventListener('DOMContentLoaded', function(){
    displayProjects(list);
});

menuBtn.addEventListener('click', () => {
  if(!menuOpen){
    menuBtn.classList.add('open');
    menuList.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuList.classList.remove('open');
    menuOpen = false;
  }
});

function displayProjects(item){
    let disPro = item.map(function(pro){
        //return list from list object
        return `<li class=${pro.class}>
                    <div class="box">
                        <!-- img-box -->
                        <div class="slide-img">
                            <img src=${pro.img} alt=${pro.alt}>
                            <!-- overlay -->
                            <div class="overlay">
                                <!-- button -->
                                <a href=${pro.url} class="btn-view">View</a>
                            </div>
                        </div>
                        <!-- details box -->
                        <div class="detail-box">
                            <!-- type -->
                            <div class="type">
                                <a href=${pro.url}>${pro.name}</a>
                                <span>${pro.desc}</span>
                            </div>
                            <!-- price -->
                            <a href=${pro.url} class="number">${pro.number}</a>
                        </div>
                    </div>
                </li>`;
    });
    //displaying the menu through innerHTML
    disPro = disPro.join('');
    box.innerHTML = disPro;
    console.log(disPro);
}