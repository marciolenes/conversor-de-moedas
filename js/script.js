//DATA: 13/02/23

// capturar o formulário pelo ID
const form = document.getElementById('form');
form.addEventListener('submit', handlesubmit)                                                           // quando o formulário for SUBMITADO, executará-se a funcão "handlesubmit"
// capturar o valor real recebido pelo INPUT
const inputValue = document.getElementById('value-real');
// capturar a moeda selecionada no SELECT
const selectedCurrency = document.getElementById('currency');
// capturar o resultado da conversão pelo RESULT
const result = document.getElementById('result');

let valueConverted = 0; 
                                                       
function handlesubmit(e) {
    e.preventDefault();                                                                                 // evitar recarregar a página

    if(!inputValue.value || inputValue.value < 0){
        alert('Informe o valor correto!');
        return;
    } else if(!selectedCurrency.value){
            alert('Escolha uma moeda!');
        }   

   converter();                                                                                  
};

// CONVERTER A MOEDA
function converter() {
    if(selectedCurrency.value === 'eur') {
      valueConverted = inputValue.value * 6.35;
      result.innerHTML = valueFormatter('pt-BR', 'EUR');
  
      animateResult();
    } else if(selectedCurrency.value === 'dol') {
      valueConverted = inputValue.value * 5.61;
      result.innerHTML = valueFormatter('en-US', 'USD');
  
      animateResult();
    }
  
    inputValue.value = '';
    selectedCurrency.value = '';
  };
  
  function valueFormatter(locale, currency) {
    const value = valueConverted.toLocaleString(`${locale}`, { style: 'currency', currency: `${currency}` });
    return `<span> 🤑 </span> ${value} <span> 🤑 </span>`;
  };
  
  //animar a exibição do resultado
  function animateResult() {
    return result.animate([
      { transform: 'translateY(-150px)'},
      { transform: 'translateY(0px)'}
    ], { duration: 500 });
  };