function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var tano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (tano.value.length == 0 || tano.value > ano ){
        window.alert('verifique o ano')

    } else {
        var fsex = document.getElementsByName('sexm')
        var idade = ano - Number(tano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

       if (fsex[0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'crianca-menino.png')
            
        } else if(idade < 21){
            //jovem
            img.setAttribute('src', 'jovem-homem.png')

        } else if (idade < 50){
            //adulto
        } else {
            //idoso
        }
       } else if (fsex[1].checked){
        genero ='Mulher'
        if (idade >= 0 && idade < 10){
            //criança
        } else if(idade < 21){
            //jovem
        } else if (idade < 50){
            //adulto
        } else {
            //idoso
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `detectamos  ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
        
    
    }