function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 8

msg.innerHTML = `<p>agora sao ${hora} horas</p>`
if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
            //bom dia 
}else if (hora >= 12 && hora < 18){
        img.src = 'fototarde.png'
        //boa tarde
}else {
    img.src = 'fotonoite.png'

}


}
