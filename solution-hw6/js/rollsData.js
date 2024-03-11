class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;

        this.element = null;
    }
}

let cart = [];

function badgeNum() {
    let cartNum = document.querySelector('.badge');
    cartNum.innerHTML = cart.length;
}

function retriveLocalStorage() {
    if (localStorage.getItem('cart') != null) {
        const cartItem = localStorage.getItem('cart');
        cart = JSON.parse(cartItem);
    }
    badgeNum();
}

function updateLocalStorage() {
    const cartItem = JSON.stringify(cart);
    localStorage.setItem('cart', cartItem);
    badgeNum();
}

const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

let glazing =[
    {
        glazing: 'Keep original',
        price: 0.00,
    },
    {
        glazing: 'Sugar milk',
        price: 0.00,
    },
    {
        glazing: 'Vanilla milk',
        price: 0.50,
    },
    {
        glazing: 'Double chocolate',
        price: 1.50,
    }
]

let packsize =[
    {
        size: 1,
        packFactor: 1,
    },
    {
        size: 3,
        packFactor: 3,
    },
    {
        size: 6,
        packFactor: 5,
    },
    {
        size: 12,
        packFactor: 10,
    }
]

retriveLocalStorage();