function contar(){
    var inicio = document.getElementById('inicio1')
    var fim = document.getElementById('fim1')
    var passo = document.getElementById('passo1')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert('impossivel contar')
    } else {
       res.innerHTML = 'contando:<br>'
       var i = Number(inicio.value)
       var f = Number(fim.value)
       var p = Number(passo.value)
       if (p == 0) {
        window.alert('passo invalido!  considerando  passo 1')
        p = 1

       }
        if (i < f){
            for(var c = i ; c<= f ; c += p){
                res.innerHTML += `${c} \u{1f449}`
               }
        } else {
            for(var c = i ; c >= f ; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        } 
        res.innerHTML += `\u{1f3c1}`
      
    }
}