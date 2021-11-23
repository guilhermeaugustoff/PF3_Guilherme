const calc = document.getElementById('calc');

function calcular(){
    const nome = document.getElementById('nome').value;
    const vaplicado = (document.getElementById('vaplicado').value);
    const txjuros = (document.getElementById('txjuros').value);
    const meses = (document.getElementById('nparcelas').value);
    const resultado = document.getElementById('resultado');

    if (nome !== '' && vaplicado !== '' && txjuros !== '' && meses !== '') {

    const juros = txjuros/100
    
    let p = ((1+juros)**meses-1)/juros;
    let vf = vaplicado*p.toFixed(2);
  
    resultado.textContent = `${nome}, se você aplicar R$${vaplicado}, 
        à taxa de juros de ${txjuros}% ao mês, durante ${meses} meses, acumulará um valor total de R$${vf}.`;  
    
}else {
    resultado.textContent = 'Para calcular o valor poupado, preencha todos os campos.';
}

}

calc.addEventListener('click', calcular);



const limpar = document.getElementById('reset');

function apagar(){
   document.getElementById('nome').value = ' '; 
   document.getElementById('vaplicado').value = ' '; 
   document.getElementById('txjuros').value = ' '; 
   document.getElementById('nparcelas').value = ' '; 
   document.getElementById('resultado').value = ' '; 
}

limpar.addEventListener('click', apagar);