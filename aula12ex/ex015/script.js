function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()
    var formAno =document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''



        var img = document.createElement('img')     // Criando uma tag html para imagens.
        img.setAttribute('id', 'foto')              // Colocando o id para a tag img.
        img.setAttribute('width', '250')            // img.style.width = '250px'
        img.setAttribute('height', '250')           // img.style.height = '250px'

        if(fsex[0].checked){
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                // Criança.
                img.setAttribute('src', 'bebe-m.png')
            }
            else if (idade < 21) {
                // Jovem.
                img.setAttribute('src', 'jovem-m.png')
            }
            else if (idade < 50) {
                // Adulto.
                img.setAttribute('src', 'adulto-m.png')
            }
            else{
                // Idoso.
                img.setAttribute('src', 'idoso-m.png')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança.
                img.setAttribute('src', 'bebe-f.png')
            }
            else if (idade < 21) {
                // Jovem.
                img.setAttribute('src', 'jovem-f.png')
            }
            else if (idade < 50) {
                // Adulto.
                img.setAttribute('src', 'adulto-f.png')
            }
            else{
                // Idoso.
                img.setAttribute('src', 'idoso-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img) // Coloca uma tag filha da div. Adicionar um elemento 'img'.
    }
}