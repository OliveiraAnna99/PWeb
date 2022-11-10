

import {FormSoma} from '../elementos/form-soma'
function somar(){
    let valor1 = parseInt(document.getElementById('v1').value);
    //alert(valor1);
    let valor2 = parseInt(document.getElementById('v2').value);
    //alert(valor2);
    let soma = valor1 + valor2;
   // alert(soma);
    let eResul = document.getElementById('resultado2');
    if(eResul.textContent == undefined){
        eResul.textContent = String(soma);
    }else{
        eResul.innerHTML = String(soma);
    }
    
}

export {somar}