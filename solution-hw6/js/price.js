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