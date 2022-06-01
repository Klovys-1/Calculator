
function insert(num) 
{
  var numero = document.getElementById('resultado').innerHTML;

  var lastChar = numero.substr(numero.length - 1);

  if((num === '+' || num === '-' || num === '*' || num === '/') && (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/'))
  {
    
    if(lastChar != num){
      var newStr = numero.slice(0, -1);
      numero = newStr;
    } else {
      
      if ((num === '+' || num === '-' || num === '/') && (lastChar === '+' || lastChar === '-' || lastChar === '/')){
        
        var newStr = numero.slice(0, -1);
        numero = newStr;
      }
    }
  }
  document.getElementById('resultado').innerHTML = numero + num;

}

function clean() {
  document.getElementById('resultado').innerHTML = "";
}

// 
function back() {
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

// 
function dores() {
  var resultado = document.getElementById('resultado').innerHTML;
  if(resultado)
  {
    document.getElementById('resultado').innerHTML = eval(resultado);
  }
  else
  {
    document.getElementById('resultado').innerHTML = "Nada"
  }
}