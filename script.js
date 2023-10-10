function verificar(){
    data = new Date()
    ano = data.getFullYear()
    fano = document.getElementById('txtano')
    res = document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
     else {
        fsex = document.getElementsByName('radsex')
        idade = ano - Number(fano.value)
        gênero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade <= 10) {
                //criança
                img.setAttribute('src', './imagem/foto-hc.png')
            }
            else if (idade <= 21) {
                //jovem
                img.setAttribute('src', './imagem/foto-hj.png')
            }
            else if (idade <= 50) {
                //adulto
                img.setAttribute('src', './imagem/foto-ha.png')
            }
            else {
                //idoso
                img.setAttribute('src', './imagem/foto-hi.png')
            }

        }
        else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade <= 10) {
                //criança
                img.setAttribute('src', './imagem/foto-mc.png')
            }
            else if (idade <= 21) {
                //jovem
                img.setAttribute('src', './imagem/foto-mj.png')
            }
            else if (idade <= 50) {
                //adulto
                img.setAttribute('src', './imagem/foto-ma.png')
            }
            else {
                //idoso
                img.setAttribute('src', './imagem/foto-mi.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detecitamos ${gênero} de ${idade} anos`
        res.appendChild(img)
        
    }
}

//res.innerHTML = `${idade}`