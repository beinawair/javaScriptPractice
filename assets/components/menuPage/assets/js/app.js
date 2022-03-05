//menu items
const menu = [
    {
        id: 1,
        title: 'Thai Spring Roll',
        category: 'breakfast',
        price: 25000,
        img: './img/Thai-Spring-Roll.jpeg',
        desc: 'Sayuran segar dan udang nabati dimasak dengan saus special loving hut dengan kulit lumpia goreng'
    },
    {
        id: 2,
        title: 'Smiling Dumpling',
        category: 'lunch',
        price: 23000,
        img: './img/Smiling-Dumpling.jpeg',
        desc: 'Pangsit vegan disajikan dengan Thai Chilli Sauce'
    },
    {
        id: 3,
        title: 'Fried Enoki',
        category: 'lunch',
        price: 23000,
        img: './img/Fried-Enoki.jpeg',
        desc: 'Jamur enoki goreng khas Loving Hut'
    },
    {
        id: 4,
        title: 'Lucky Roll',
        category: 'breakfast',
        price: 25000,
        img: './img/Lucky-Roll.jpeg',
        desc: 'Roll daging vegan dengan tambahan sayuran'
    },
    {
        id: 5,
        title: 'Vege Siomay',
        category: 'lunch',
        price: 23000,
        img: './img/vege-siomay.jpeg',
        desc: 'Siomay vegan disajikan dengan Thai Chilli Sauce'
    },
    {
        id: 6,
        title: 'Garlic Bread',
        category: 'breakfast',
        price: 15000,
        img: './img/Garlic-Bread.jpeg',
        desc: 'Potongan roti bakar dengan olesan garlic butter sauce'
    },
    {
        id: 7,
        title: 'Stuffed Potato Skin',
        category: 'breakfast',
        price: 25000,
        img: './img/Stuffed-Potato-Skins.jpeg',
        desc: 'Kentang goreng dengan saus musrhoom special'
    },
    {
        id: 8,
        title: 'Chicken Fried Chi-Chi',
        category: 'lunch',
        price: 27000,
        img: './img/Chicken-Fried-Chi-Chi.jpeg',
        desc: 'Ayam goreng vegan ala KFC'
    },
    {
        id: 9,
        title: 'Batagor Vegan',
        category: 'dessert',
        price: 24000,
        img: './img/batagor-vege.jpeg',
        desc: 'Batagor vegan disajikan dengan sambal kacang'
    },
    {
        id: 10,
        title: 'Onion Ring',
        category: 'breakfast',
        price: 19000,
        img: './img/Onion-Ring.jpg',
        desc: 'Bawang bombay goreng disajikan dengan saus tar-tar'
    },
];

const secCenter = document.querySelector('.section-center');
const containerFilter = document.querySelector('.btn-container');

//load menu items
window.addEventListener('DOMContentLoaded', function() {
    displayMenu(menu);
    showFilteredMenu();
});


function displayMenu(menuItem) {
    let disMenu = menuItem.map(function(item){
        //return menu from list object
        return `<article class="menu-item">
                    <img src=${item.img} class="photo" alt=${item.title}>
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <span>${item.price}</span>
                        </header>
                        <p class="item-text">${item.desc}</p>
                    </div>
                </article>`;
    });
    //displaying the menu through innerHTML
    disMenu = disMenu.join('');
    secCenter.innerHTML = disMenu
}

function showFilteredMenu(){
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    }, ['all']);

    const categoryFilter = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
    }).join('');
    containerFilter.innerHTML = categoryFilter;
    //select the button after added
    const filter = containerFilter.querySelectorAll('.filter-btn');
    //filter menu
    filter.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            //select data for the current button clicked
            const targetFilter = e.currentTarget.dataset.id;
            //select the menu category
            const categoryArray = menu.filter(function(item){
                if(item.category === targetFilter) {
                    return item;    
                }
            });
            //filtering category with data id from the button clicked
            if(targetFilter === 'all') {
                displayMenu(menu);
            } else {
                displayMenu(categoryArray);
            }
        });
    });
}