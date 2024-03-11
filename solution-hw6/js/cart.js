function removeRoll(roll) {
    roll.element.remove();

    let rollIndex = cart.indexOf(roll);
    cart.splice(rollIndex, 1);

    cartTotal();
    updateLocalStorage();
    console.log(cart);
    console.log(cart.length);
}

function totalPrice(roll) {
    let sizeFactor = 0;
    let glazeFactor = 0;

    for (const pack of packsize) {
        if (pack.size == roll.size) {
            sizeFactor = pack.packFactor;
        }
    }

    for (const glaze of glazing) {
        if (glaze.glazing == roll.glazing) {
            glazeFactor = glaze.price;
        }
    }

    return ((roll.basePrice + glazeFactor) * sizeFactor).toFixed(2);
}

function createFrame(roll) {
    let template = document.querySelector('#buntemplate');
    const copy = template.content.cloneNode(true);
    roll.element = copy.querySelector('.cartframe');
    const removeButton = roll.element.querySelector('.remove');
    removeButton.addEventListener('click', () => {removeRoll(roll);});
}

function updateFrame(roll) {
    const bunImage = roll.element.querySelector('.cartimg');
    const bunName = roll.element.querySelector('.cartbunname');
    const bunGlazing = roll.element.querySelector('.cartbunglazing');
    const bunSize = roll.element.querySelector('.cartbunpack');
    const cartPrice = roll.element.querySelector('.cartprice');

    let rolltotalPrice = totalPrice(roll);

    bunImage.src = 'assets/' + rolls[roll.type].imageFile;
    bunName.innerHTML = roll.type + ' Cinnamon Roll';
    bunGlazing.innerHTML = "Glazing: " + roll.glazing;
    bunSize.innerHTML = "Pack Size: " + roll.size;
    cartPrice.innerHTML = "$" + rolltotalPrice;
}

function cartTotal() {
    let sumPrice = 0;
    let cartTotal = document.querySelector('.totalprice');
    for (const roll of cart) {
        sumPrice = sumPrice + parseFloat(totalPrice(roll));
    }

    cartTotal.innerHTML = "$ " + sumPrice.toFixed(2);
}

function create() {
    retriveLocalStorage();
    let bunFrame = document.querySelector('.cartbuns');

    for (const roll of cart) {
        createFrame(roll);
        updateFrame(roll);
        bunFrame.append(roll.element);
    }

    cartTotal();
}

create();