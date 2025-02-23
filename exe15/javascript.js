function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 20

msg.innerHTML = `<p>agora sao ${hora} horas</p>`
if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        msg.innerHTML += 'bom dia'
        document.body.style.background = '#cdcf34'
            
}else if (hora >= 12 && hora < 18){
        img.src = 'fototarde.png'
        msg.innerHTML += 'boa tarde' 
        document.body.style.background = '#cd9621'
        
}else {
    img.src = 'fotonoite.png'
    msg.innerHTML += 'boa noite'
    document.body.style.background = '#260d3f'

}


}
