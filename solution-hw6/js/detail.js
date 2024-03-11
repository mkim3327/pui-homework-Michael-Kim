// get the query  string from URL
const queryString = window.location.search;
// console.log(queryString);
const params = new URLSearchParams(queryString);
// console.log(params);
const rollType = params.get('roll');
// console.log(rollType);

let selectedRoll = rolls[rollType];
// console.log(selectedRoll);

function create() {
    // update the header text
    let headerElement = document.querySelector('#roll-header');
    headerElement.innerHTML = rollType + ' Cinnamon Roll';

    //update the image
    let rollImage = document.querySelector('#roll-img');
    rollImage.src = 'assets/' + selectedRoll.imageFile;

    //update the base price
    let priceElement = document.querySelector('#finPrice');
    priceElement.innerHTML = "$" + selectedRoll.basePrice;

    retriveLocalStorage();
}

function AddtoCart() {
    let glaze = document.querySelector('#glazing');
    let glazetext = glaze.options[glaze.selectedIndex].text;
    // console.log(glazetext);
    let pack = document.querySelector('#packsize');
    let packnum = pack.options[pack.selectedIndex].text;
    // console.log(packnum);
    let rollCart = new Roll(rollType, glazetext, packnum, selectedRoll.basePrice);
    cart.push(rollCart);

    updateLocalStorage();

    console.log(cart);
    console.log(cart.length);
}

let Button = document.querySelector('#cart-button');
Button.addEventListener('click', AddtoCart);

create();