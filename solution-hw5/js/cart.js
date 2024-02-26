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

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;

        this.element = null;

        this.createFrame();
        this.updateFrame();
    }

    createFrame() {
        let template = document.querySelector('#buntemplate');
        const copy = template.content.cloneNode(true);
        this.element = copy.querySelector('.cartframe');
        // document.body.appendChild(this.element);
        const removeButton = this.element.querySelector('.remove');
        removeButton.onclick = this.removeRoll.bind(this);
    }

    updateFrame() {
        const bunImage = this.element.querySelector('.cartimg');
        const bunName = this.element.querySelector('.cartbunname');
        const bunGlazing = this.element.querySelector('.cartbunglazing');
        const bunSize = this.element.querySelector('.cartbunpack');
        const cartPrice = this.element.querySelector('.cartprice');
    
        let totalPrice = this.totalPrice();

        bunImage.src = 'assets/' + rolls[this.type].imageFile;
        bunName.innerHTML = this.type + ' Cinnamon Roll';
        bunGlazing.innerHTML = "Glazing: " + this.glazing;
        bunSize.innerHTML = "Pack Size: " + this.size;
        cartPrice.innerHTML = "$" + totalPrice;
    }

    removeRoll() {
        this.element.remove();
        cart.delete(this);
    
        cartTotal();
        // console.log(cart);
    }

    totalPrice() {
        let sizeFactor = 0;
        let glazeFactor = 0;
    
        for (const pack of packsize) {
            if (pack.size == this.size) {
                sizeFactor = pack.packFactor;
            }
        }
    
        for (const glaze of glazing) {
            if (glaze.glazing == this.glazing) {
                glazeFactor = glaze.price;
            }
        }
    
        return ((this.basePrice + glazeFactor) * sizeFactor).toFixed(2);
    }
} 

const cart = new Set();

let originalRoll = new Roll('Original', 'Sugar Milk', 1, rolls['Original'].basePrice);
cart.add(originalRoll);

let walnutRoll = new Roll('Walnut', 'Vanilla Milk', 12, rolls['Walnut'].basePrice);
cart.add(walnutRoll);

let raisinRoll = new Roll('Raisin', 'Sugar Milk', 3, rolls['Raisin'].basePrice);
cart.add(raisinRoll);

let appleRoll = new Roll('Apple', 'Keep original', 1, rolls['Apple'].basePrice);
cart.add(appleRoll);

let cartSection = document.querySelector('.cartbuns');
for (const roll of cart) {
    cartSection.append(roll.element);
}

function cartTotal() {
    let sumPrice = 0;
    let cartTotal = document.querySelector('.totalprice');
    for (const roll of cart) {
        sumPrice = sumPrice + parseFloat(roll.totalPrice());
    }

    cartTotal.innerHTML = "$ " + sumPrice.toFixed(2);
}

cartTotal();