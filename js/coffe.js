

// window is loading 
window.onload = function() {
    setTimeout(()=> {
        document.querySelector('.section_loading_page ').classList.add('active_loading');
        document.body.style.overflowY="auto";
    },3000)
    
    document.querySelector('.information .text h1').classList.add('active_text');
    document.querySelector('.information .text p').classList.add('active_text');
    document.querySelector('.information .text button').classList.add('active_text');

}

// The function is show links in media 
const header_links = document.querySelectorAll('header .links a')
header_links.forEach(link => {
    link.onclick =function(){
        document.querySelector('#links').classList.remove('activeLinks');
    }
})
function open_links() {
    document.querySelector('#links').classList.toggle('activeLinks');
    document.querySelector('.search').classList.remove('active_use_search');
    document.querySelector('.test_Show_Items').classList.remove('active_show_item');
}; 

// the function is div shopping 
function shopping() {
    document.querySelector('.test_Show_Items').classList.toggle('active_show_item');
    document.querySelector('#links').classList.remove('activeLinks');
    document.querySelector('.search').classList.remove('active_use_search');
};

 // The function is show search filed
function search() {
    document.querySelector('.search').classList.toggle('active_use_search');
    document.querySelector('.test_Show_Items').classList.remove('active_show_item');
    document.querySelector('#links').classList.remove('activeLinks');

};

// show images product in the container 
const  product_images = document.querySelectorAll('.product img');
const show_images = document.querySelector('.product_show_img  img')

product_images.forEach( btn => {
    let img = btn.src ;
    btn.onclick = function() {
        show_images.src = img
        document.querySelector('.product_show_img').classList.add('active_show_img')
    }
})

// close images product in the container
function close_show_img() {
    document.querySelector('.product_show_img').classList.remove('active_show_img')
}

// show  item evaluation products 
const show_evaluation = document.querySelectorAll('.products .product .score_product')
const evaluation = document.querySelectorAll('.products .product .evaluation');
const spans_evaluation = document.querySelectorAll('.products .product .evaluation .score span')

show_evaluation.forEach(hover =>{ 

        hover.onmouseenter=function(){
            document.querySelector( hover.dataset.show).classList.add('active_evaluation');
            setTimeout(()=> {
                spans_evaluation.forEach(spn => {
                    spn.style.width = spn.dataset.calc;
                })
            },500)
        } 

        hover.onmouseleave= function(){
            setTimeout(() => {
            document.querySelector( hover.dataset.show).classList.remove('active_evaluation');
        },200)
        }
})


// scroll item reviews
const list_review = document.querySelector('.Review .list-Review');
const review_items =document.querySelector('.Review .list-Review .user');
const review_buttons =document.querySelectorAll('.Review .buttons button');
let set = 0 ;
setInterval(() => {

    if(set === review_buttons.length-1) { set = 0 } else { set++ }
    review_buttons.forEach(el=> el.classList.remove('active_btn'))
    review_buttons[set].classList.add('active_btn')
    list_review.style.transform =`translate3d(${review_buttons[set].dataset.info}px , 0 , 0)`;

    // button click scroll in review
    review_buttons.forEach( btn => {
        let info = btn.dataset.info
        btn.addEventListener( "click" , function() {
            review_buttons.forEach(el => el.classList.remove('active_btn'))
            this.classList.add('active_btn')
            list_review.style.transform =`translate3d(${info}px , 0 , 0)`;      
        })
    })

},3500);


// Animation item menu in scroll
const menus= document.querySelector('.menu');
const items_menu = document.querySelectorAll('.menu .item')
let start_fun=false;
window.onscroll = function(){
    if( window.scrollY >= menus.offsetTop-500){
        if(!start_fun) {     
            setInterval(() =>{
                items_menu.forEach(itm =>{
                    itm.classList.add('show_item_Menus')
                })
            },2000) 
        }
        start_fun = true
    }
}

