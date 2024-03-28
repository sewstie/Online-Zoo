let inputMoney = document.querySelector('.content-input input');
let blockNumber = document.querySelector('.block-number');
let input_button = document.querySelector(".content-btn");
let inf_text = document.getElementById('donate-result');

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
    if (!inputMoney.value) {
        inputMoney.style.borderColor = '#D31414';
        inputMoney.style.border.color = '#D31414';
    } 
    else {
        inputMoney.style.borderColor = '#4B9200';   
        inputMoney.style.border.color = '#4B9200';
    }
});

let buttons = document.querySelectorAll('.content__bar-points button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        inputMoney.value = this.id;
        let event1 = new Event('change');
        inputMoney.dispatchEvent(event1);
        let event2 = new Event('input');
        inputMoney.dispatchEvent(event2);
    });
});