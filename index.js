function verificar(){
    let data_atual = new Date()
    let ano_atual = data_atual.getFullYear()
    
    let data_nascimento = document.getElementById('ano_nascimento')
    data_nascimento = data_nascimento.value

    let sex = document.getElementsByName('radsex')
    let resultado = document.getElementById('res')

    if(data_nascimento.length == 0){
        alert('Erro, verifique os dados e tente novamente')
    }else if(data_nascimento >= ano_atual){
        alert('Erro, verifique os dados e tente novamente')
    }else{
        let idade_atual = ano_atual - data_nascimento
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sex[0].checked){
            genero = 'Homem'

            if(idade_atual > 0 && idade_atual <= 3){
                img.setAttribute('src', 'bebe.png')
            }
            if(idade_atual > 3 && idade_atual <= 40){
                img.setAttribute('src', 'adolescente_homem.png')
            }
            if(idade_atual > 40){
                img.setAttribute('src', 'velho.png')
            }



        }else if(sex[1].checked){
            genero = 'Mulher'

            if(idade_atual > 0 && idade_atual <= 3){
                img.setAttribute('src', 'bebe.png')
            }
            if(idade_atual > 3 && idade_atual <= 40){
                img.setAttribute('src', 'adolescente_mulher.png')
            }
            if(idade_atual > 40){
                img.setAttribute('src', 'velha.png')
            }

        }
        
        img.style.padding = '10px'
        resultado.style.textAlign = 'center'
        resultado.innerText = `Você tem ${idade_atual} anos, e é ${genero}`
        resultado.appendChild(img)

        
        
        
       
        
        /*
        let genero = ''
        if(sex[0].checked){
            genero = 'Homem'
        }else if(sex[1].checked){
            genero = 'Mulher'
        }

        alert(genero)
        */
    }


}