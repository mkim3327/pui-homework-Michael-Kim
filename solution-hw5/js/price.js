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

let glazeSelect = document.querySelector('#glazing');

for (var i = 0; i < glazing.length; i++) {
    var option = glazing[i];
    var optionElement = document.createElement('option');
    optionElement.textContent = option.glazing;
    optionElement.value = option.price;
    glazeSelect.appendChild(optionElement);
}

let packSelect = document.querySelector('#packsize');

for (var i = 0; i < packsize.length; i++) {
    var option = packsize[i];
    var optionElement = document.createElement('option');
    optionElement.textContent = option.size;
    optionElement.value = option.packFactor;
    packSelect.appendChild(optionElement);
}

let glazeChange = document.querySelector('#glazing');
glazeChange.addEventListener('change', selectChange);

let packChange = document.querySelector('#packsize');
packChange.addEventListener('change', selectChange);

function selectChange() {

    const basePrice = selectedRoll.basePrice;
    const glazingPrice = Number(glazeChange.value);
    const packPrice = Number(packChange.value);

    let price = document.querySelector('#finPrice');

    let finalPrice = ("$" + ((basePrice + glazingPrice) * packPrice).toFixed(2));

    price.innerHTML = finalPrice;
}