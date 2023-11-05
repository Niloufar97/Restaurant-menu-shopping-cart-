const pizza = [
    {
        id: 1,
        type: 'pizza',
        name: "Margarita",
        price: 65,
        image: 'images/images (1).jpg',
        Ingredients: "tomato sauce, mozzarella chesse, fresh basil"
    },
    {
        id: 2,
        type: 'pizza',
        name: "Vegetarian",
        price: 65,
        image: 'images/vegetrian.jpeg',
        Ingredients: 'tomato sauce, mozzarella chesse, eggplant, zucchini, onion, olive'
    },
    {
        id: 3,
        type: 'pizza',
        name: "Bacon",
        price: 75,
        image: "images/images (3).jpg",
        Ingredients: 'tomato sauce, mozzarella chesse, bacon, mushroom, olive'
    },
    {
        id: 4,
        type: 'pizza',
        name: "Peperoni",
        price: 85,
        image: "images/images.jpg",
        Ingredients: 'tomato sauce, mozzarella chesse, pepperoni, mushroom, jalopino pepper'
    },
    {
        id: 5,
        type: 'pizza',
        name: "Cicken Pesto",
        price: 78,
        image: "images/chicken pesto.jpg",
        Ingredients: 'pesto sauce, chicken, mozzarella chesse, mushroom, pepper, olive'
    },
    {
        id: 6,
        type: 'pizza',
        name: "Steak",
        price: 90,
        image: "images/steak.jpeg",
        Ingredients: 'tomato sauce, mozzarella chesse, parmesan cheese, beaf, mushroom, onion, garlic'
    }
]
const pasta = [
    {
        id: 7,
        type: 'pasta',
        name: "Chicken Alfredo",
        price: 70,
        image: "images/download.jpg",
        Ingredients: 'pasta pene, chicken, cream, milk, parmesan, garlic, olive oil'
    },
    {
        id: 8,
        type: 'pasta',
        name: "Tomato vegetrian",
        price: 65,
        image: "images/tomato pasta.png",
        Ingredients: 'pasta, tomato, parmesan chesse, fresh basil, garlic, olive oil'
    },

    {
        id: 9,
        type: 'pasta',
        name: "Green spaghetti",
        price: 70,
        image: "images/green.jpg",
        Ingredients: 'spaghetti, parmesan chesse, basil, peanut, garlic, olive oil'
    },
    {
        id: 10,
        type: 'pasta',
        name: "shrimp Fettuccine",
        price: 85,
        image: "images/shrimp.jpg",
        Ingredients: 'Fettuccine, shrimp, heavy cream, garlic, olive oil, parsley'
    },
    {
        id: 11,
        type: 'pasta',
        name: "Meatball spaghetti",
        price: 83,
        image: "images/meatball.jpg",
        Ingredients: 'lamb meat, spaghetti, tomato sauce, parmesan chesse, basil, garlic, olive oil'
    }
]
const drink = [
    {
        id: 12,
        type: 'drink',
        name: "lemonade",
        price: 35,
        image: "images/download (2).jpg",
    },
    {
        id: 13,
        type: 'drink',
        name: "Mojito",
        price: 35,
        image: "images/Mojito.jpg",
    },
    {
        id: 14,
        type: 'drink',
        name: "Pepsi",
        price: 25,
        image: "images/pepsi.jpg",
    },
    {
        id: 15,
        type: 'drink',
        name: "champange",
        price: 47,
        image: "images/champange.jpg",
    },
    {
        id: 16,
        type: 'drink',
        name: "Red wine",
        price: 45,
        image: "images/red-wine-2.jpg",
    },
    {
        id: 17,
        type: 'drink',
        name: "Vodka",
        price: 45,
        image: "images/vodka.jpg",
    }
]

 //render items

const renderPizza = () => {
    const pizzaDiv = document.querySelector('#pizza')
    pizza.forEach((item) => {
        pizzaDiv.innerHTML += `
        <div class="foods">
             <div class='img'>
                 <img src='${item.image}'y>
             </div>
             <div class='txt'>
                 <h3>${item.name}</h3><br>
                 <p>Ingredients:</p>
                 <p>${item.Ingredients}</p><br>
                 <p>price: ${item.price} DKK</p>
             </div>
             <div class='btn'>
                 <button onclick="addToCart(${item.id})">Add</button>
             </div>
         </div>
        `
    })
}
const renderPasta = () => {
    const pastaDiv = document.querySelector('#pasta')
    pasta.forEach((item) => {
        pastaDiv.innerHTML += `
        <div class="foods">
            <div class='img'>
               <img src='${item.image}'y>
            </div>
            <div class='txt'>
                <h3>${item.name}</h3><br>
                <p>Ingredients:</p>
                <p>${item.Ingredients}</p><br>
                <p>price: ${item.price} DKK</p>
            </div>
            <div class='btn'>
               <button onclick="addToCart(${item.id})">Add</button>
            </div>
        </div>
        `
    })
}
const renderDrink = () => {
    const drinkDiv = document.querySelector('#drink')
    drink.forEach((item) => {
        drinkDiv.innerHTML +=
            `
        <div class="foods">
            <div class="img">
                <img src='${item.image}'y>
            </div>
            <div class="txt">
                <h3>${item.name}</h3><br>
                <p>price: ${item.price} DKK</p>
            </div>
            <div class='btn'>
                <button onclick="addToCart(${item.id})">Add</button>
            </div>
        </div>
        `
    })
}
renderPizza()
renderPasta()
renderDrink()

//concat all items

const meal = pizza.concat(pasta,drink);
let cart = [];

//add to cart

const addToCart = (id) => {
    if(cart.some((x) => x.id === id)){
       // alert ('This item is already in your cart')
       increaseQty(id)
    }
    else{
        let item = meal.find((x)=>x.id === id);
        cart.push({
            ...item,
            qty:1
        });
    } 
    
    updateCart()
}

//update cart

function updateCart(){
    renderCartItem()
    renderTotal()
}

//render cart Items

const renderCartItem = () =>{

    let cartItemEl = document.querySelector('.cart_item')
    if (cart.length === 0)
        cartItemEl.innerHTML = `<div class="txtDiv">shopping cart is empty<div>`
    else{
        cartItemEl.innerHTML = ""
        cart.forEach((item) =>{
        cartItemEl.innerHTML += `
        <div class="cart_items">
            <div class="cartImage"><img  src="${item.image}" /></div>  
            <div class="cartTxt">${item.name}</div>
            <div class="cartTxt">${item.price} DKK</div>
            <div class="cartQty">
                <button class="qtyBtn" onclick="increaseQty(${item.id})">+</button>
                <p>${item.qty}</p>               
                <button class="qtyBtn" onclick="decreaseQty(${item.id})">-</botton>
            </div>
            <div class="btn" id="cartBtn"><button onclick="removeFromCart(${item.id})">Remove</button></div>
        </div>
        `
        })
    }
       
    

}

//render total function


const renderTotal = (id) =>{
    let totalDiv = document.querySelector('.cartTotalPrice');
    let totalPrice = 0;
    cart.forEach((item) =>{
        totalPrice += (item.qty * item.price)
    })
    
    totalDiv.innerHTML = `
    <div class="totalPrice">total price: ${totalPrice} DKK </div>
    `
}
//change units of items

const increaseQty = (id) =>{
    cart = cart.map((item)=>{
        let number = item.qty;
        if(item.id === id){
            number++;
        }
        return{
            ...item,
            qty:number
        }       
})
updateCart();
}

const decreaseQty = (id) =>{
    cart = cart.map((item)=>{
        let number = item.qty;
        if(item.id === id){
            if(number > 1)
                number--;
        }
        return{
            ...item,
            qty:number
        }       
})
updateCart();
}

// remove item from cart

function removeFromCart (id){
    cart = cart.filter((item) => item.id !== id)
    updateCart()
}
