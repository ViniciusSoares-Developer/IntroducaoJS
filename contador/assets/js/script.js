const currentNumber = document.getElementById('currentNumber'),
    btnNumber = document.getElementsByTagName("button");
let cont = 0;

btnNumber[0].addEventListener('click', function(){
    limitador(-10, "-")
    currentNumber.innerHTML = cont;
    tradeColor(currentNumber);
})
btnNumber[1].addEventListener('click', function(){
    limitador(10, "+")
    currentNumber.innerHTML = cont;
    tradeColor(currentNumber);
})

function limitador(valor, tipo)
{
    if(tipo === "+"){
        if(cont < valor)
        {
            cont++;
        }
        else
        {
            cont = valor;
        }
    }
    else if(tipo === "-"){
        if(cont > valor)
        {
            cont--;
        }
        else
        {
            cont = valor;
        }
    }
}

function tradeColor(object)
{
    let color = 255;
    if(cont < 0)
    {
        object.style.color = `rgb(${color},0,0)`;
    }
    else if(cont > 0)
    {
        object.style.color = `rgb(0,${color},0)`;
    }
    else{
        object.style.color = `rgb(0,0,0)`;
    }
}