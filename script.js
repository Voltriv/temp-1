const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});
// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());
// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

function auth(){
    var email = document.getElementById("email-1").value;
    var password = document.getElementById("pass-1").value;
    if(email=="admin@gmail.com" && password=="admin123"){
        window.location.assign("start-build.html");
        alert("Login Succesfully");
    }
    else{
        alert("Invalid Information");
        return;
    }
}

const product = [
    {
        id: 0,
        image: 'image1.jpg',
        title: 'Galax NVIDIA® GeForce GTX 1650 EX Plus 1-Click OC 4gb 128bit GDdr6 Gaming Videocard',
        price: '₱8,425.00',
    },
    {
        id: 1,
        image: 'image2.jpg',
        title: 'Asrock RX 6600 8G CHALLENGER D 8gb 128bit GDdr6 Dual Fan Gaming Videocard',
        price: '₱8,425.00',
    },
    {
        id: 2,
        image: 'image3.jpg',
        title: 'MSI NVIDIA® GeForce RTX 3060 Ventus 2X OC 12gb 192bit GDdr6 Gaming Videocard LHR',
        price: '₱19,150.00',
    },
    {
        id: 3,
        image: 'image4.jpg',
        title: 'MSI NVIDIA® GeForce GTX 1650 D6 Ventus XS OC/XC OC V3 4gb 128bit GDdr6 Gaming Videocard',
        price: '₱8,750.00',
    },
    {
        id: 4,
        image: 'image5.jpg',
        title: 'PNY NVIDIA® GeForce RTX 3060 VERTO Dual Fan VCG30608DFBPB1 8gb 128bit GDdr6 Gaming Videocard',
        price: '₱18,205.00',
    },
    {
        id: 5,
        image: 'image6.jpg',
        title: 'Galax NVIDIA® GeForce RTX 4070 EX-Gamer PINK 12GB 192 BIT GDDR6X 47NOM7MD7KWH Videocard',
        price: '₱39,995.00',
    },
    {
        id: 6,
        image: 'image7.jpg',
        title: 'MSI NVIDIA® GeForce RTX 4060TI Ventus 2X OC 8G 128bit GDDR6 Videocard',
        price: '₱27,500.00',
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class= 'images' src=${image}></img>
            </div>
        <div class= 'bottom'>
        <p>${title}</p>
        <h2>${price}.00</h2>` +
        "<button class='btn1' onclick='addtocart'("+(i++)+")'>Add to Cart</button>" +
            `</div>
        </div>`
    )
}).join('')
