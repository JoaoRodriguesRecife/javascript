function enviar() {
    var num = document.getElementById('txtn');
    var tab = document.getElementById('seltab');
  
    if (num !== null && num.value.length === 0) {
      window.alert('Erro: campo vazio!');
    } else {
      var n = Number(num.value);
     var c = 1
     tab.innerHTML = ''
     while(c <= 10){
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
     }
    }
  }
