let inputMoney = document.querySelector('.content-input input');
let blockNumber = document.querySelector('.block-number');
let input_button = document.querySelector(".content-btn");
let inf_text = document.getElementById('donate-result');
let buttons = document.querySelectorAll('.content__bar-point');
let prices = document.querySelectorAll('.content__bar-price');

inputMoney.addEventListener('change', function() {
    blockNumber.textContent = Math.round((inputMoney.value/250)*10)/10;
});

input_button.addEventListener('click', function(){
    if (!inputMoney.value) {
        inf_text.innerHTML = "Enter correct ammount!";
        inf_text.style.color = "#D31414";
        inputMoney.style.borderColor = '#D31414';
        inputMoney.style.border.color = '#D31414';
    } 
    else {
        inf_text.innerHTML = "Your donation was send";
        inf_text.style.color = "#4B9200";
        inputMoney.style.borderColor = '#4B9200';   
        inputMoney.style.border.color = '#4B9200';
    }
});

inputMoney.addEventListener('input', function() {
    buttons.forEach(btn => btn.classList.remove('active'));
    prices.forEach(price => price.classList.remove('active'));
    let button = document.querySelector(`.content__bar-point[id="${this.value}"]`);
    let price = document.querySelector(`.content__bar-price[id="${this.value}"]`);
    if (button) {
        button.classList.add('active');
    }
    if (price) {
        price.classList.add('active');
    }
    if (!this.value) {
        this.style.borderColor = '#D31414';
        this.style.border.color = '#D31414';
    } 
    else {
        this.style.borderColor = '#4B9200';   
        this.style.border.color = '#4B9200';
    }
});

buttons.forEach(button => {
    button.addEventListener('click', function() {
        buttons.forEach(btn => btn.classList.remove('active'));
        prices.forEach(price => price.classList.remove('active'));
        this.classList.add('active');
        let price = document.querySelector(`.content__bar-price[id="${this.id}"]`);
        if (price) {
            price.classList.add('active');
        }
        inputMoney.value = this.id;
        let event1 = new Event('change');
        inputMoney.dispatchEvent(event1);
        let event2 = new Event('input');
        inputMoney.dispatchEvent(event2);
    });
});