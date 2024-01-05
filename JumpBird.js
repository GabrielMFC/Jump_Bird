        /* Mudar sprite no jogo */
        let cenario = document.getElementById("fundodocenário")
        let birdsprite = document.getElementById("birdsprite")

        let verificar = 0
        document.getElementById("corpo").addEventListener("click", function mudarsprite() {
            if(verificar == 0){
                document.getElementById("birdsprite").src = "birddown.png"
            verificar = 1
            }else{
                document.getElementById("birdsprite").src = "birdtop.png"
                verificar = 0
            }
        })
        addEventListener("keydown", function mudarsprite() {
            if(verificar == 0){
                document.getElementById("birdsprite").src = "birddown.png"
            verificar = 1
            }else{
                document.getElementById("birdsprite").src = "birdtop.png"
                verificar = 0
            }
        })
        /* Mudar sprite */

        /* Posição do sprite na tela */
        var posicao = parseInt(window.getComputedStyle(document.getElementById("birdsprite")).top)
        function moverprabaixo() {
            if(posicao >= window.innerHeight){
                posicao = 0
            }else{
                posicao++
                birdsprite.style.top = posicao + "px"}
        }
        var intervalId
        function iniciarAnimacao(){
            if(intervalId){
                clearInterval(intervalId);
            }
            intervalId = setInterval(moverprabaixo, 0.1)
        }
        iniciarAnimacao();

        document.getElementById("corpo").addEventListener("click", function moverPraCima() {
            if(PararTudoVOCEPERDEU){
                return
            }
            var posicao2 = birdsprite.style.top.replace("px", "")
            posicao = (posicao2 - 80)
            birdsprite.style.top = posicao + "px"
        })
        addEventListener("keydown", function moverPraCima() {       
            if(PararTudoVOCEPERDEU){
                return
            }
            var posicao2 = birdsprite.style.top.replace("px", "")
            posicao = (posicao2 - 80)
            birdsprite.style.top = posicao + "px"
        })
        /* Posicionar o sprite na tela */

        /* Tópico de pontos */
        let PararTudoVOCEPERDEU = false
        let ponto = document.getElementById("pontos")
        let NumeroDosPontos = 1
        function AumentarPontos() {
            if(PararTudoVOCEPERDEU){
                return
            }
            NumeroDosPontos++
            pontos.innerHTML = NumeroDosPontos
        }
        setInterval(AumentarPontos, 1000)
        /* Tópico de pontos */

        /* Gerar obstaculos */
        let min = 1
        let max = 8
        let tamanhominimo1 = 40
        let tamanhomaximo1 = 70

        let tamanhominimo2 = 40
        let tamanhomaximo2 = 70
        var isAnimating = false

function GerarNumeroAleatorio(min, max) {
    if (isAnimating == false) {
         numero = Math.floor(Math.random() * (max - min))
    }
}

function GerarTamanhoAleatorio(tamanhomaximo1, tamanhominimo1){
    tamanho = Math.floor(Math.random() * (tamanhomaximo1 - tamanhominimo1))
    tamanho2 = Math.floor(Math.random() * (tamanhomaximo2 - tamanhominimo2))
}
        function GerarObstaculos() {
    GerarTamanhoAleatorio(tamanhomaximo1, tamanhominimo1)
    if (isAnimating) {
        return;
    }
    if(numero == 1 || numero == 2){
        isAnimating = true;
        document.getElementById("obstaculo1DoConjunto1").classList.add("obstaculoativado")
        document.getElementById("obstaculo2DoConjunto1").classList.add("obstaculoativado")

        document.getElementById("obstaculo1DoConjunto1").style.height = tamanho2 + "vh"
        document.getElementById("obstaculo2DoConjunto1").style.height = tamanho + "vh"

        function removerclass() {
            document.getElementById("obstaculo1DoConjunto1").classList.remove("obstaculoativado")
            document.getElementById("obstaculo2DoConjunto1").classList.remove("obstaculoativado")
            isAnimating = false;
        }
        setTimeout(removerclass, 5000)
    }

            if(numero == 3 || numero == 4){
                isAnimating = true
                document.getElementById("obstaculo1DoConjunto2").classList.add("obstaculoativado")
                document.getElementById("obstaculo2DoConjunto2").classList.add("obstaculoativado")

                document.getElementById
                ("obstaculo1DoConjunto2").style.height = tamanho + "vh"
                document.getElementById
                ("obstaculo2DoConjunto2").style.height = tamanho2 + "vh"

                function removerclass2() {
                    document.getElementById("obstaculo1DoConjunto2").classList.remove("obstaculoativado")
                document.getElementById("obstaculo2DoConjunto2").classList.remove("obstaculoativado")
                isAnimating = false
                }
                setTimeout(removerclass2, 5000)
            }
            
            if(numero == 5 || numero == 6){
                isAnimating = true
                document.getElementById("obstaculo1DoConjunto3").classList.add("obstaculoativado")
                document.getElementById("obstaculo2DoConjunto3").classList.add("obstaculoativado")

                document.getElementById
                ("obstaculo1DoConjunto3").style.height = tamanho2 + "vh"
                document.getElementById
                ("obstaculo2DoConjunto3").style.height = tamanho + "vh"

                function removerclass3() {
                    document.getElementById("obstaculo1DoConjunto3").classList.remove("obstaculoativado")
                document.getElementById("obstaculo2DoConjunto3").classList.remove("obstaculoativado")
                isAnimating = false
                }
                setTimeout(removerclass3, 5000)
            }
        
            if(numero == 7 || numero == 8){
                isAnimating = true
                document.getElementById("obstaculo1DoConjunto4").classList.add("obstaculoativado")
                document.getElementById("obstaculo2DoConjunto4").classList.add("obstaculoativado")

                document.getElementById
                ("obstaculo1DoConjunto4").style.height = tamanho + "vh"
                document.getElementById
                ("obstaculo2DoConjunto4").style.height = tamanho2 + "vh"

                function removerclass4() {
                    document.getElementById("obstaculo1DoConjunto4").classList.remove("obstaculoativado")
                document.getElementById("obstaculo2DoConjunto4").classList.remove("obstaculoativado")
                }
                setTimeout(removerclass4, 5000)
                isAnimating = false
            }
        }
        setInterval(function() { 
            GerarNumeroAleatorio(min, max)
            GerarObstaculos()
        }, 1000)
        /* Gerar obstaculos */
        
        /*colisão*/
        let chao = document.getElementById("colisaoDoPiso")
        let teto = document.getElementById("colisaoDoTeto")
        let canoNormal = document.querySelectorAll(".obstaculo")
        let canoInvertido = document.querySelectorAll(".obstaculoinvertido")
        let passaro = document.querySelector("#birdsprite")
        let colisao = false

        function verificarColisao(passaro, canoNormal, canoInvertido) {
            var birdRect = passaro.getBoundingClientRect()
            var canoNormalRect = canoNormal.getBoundingClientRect()
            var canoInvertidoRect = canoInvertido.getBoundingClientRect()
            
            if (birdRect.left < canoNormalRect.right &&
                birdRect.right > canoNormalRect.left &&
                birdRect.top < canoNormalRect.bottom &&
                birdRect.bottom > canoNormalRect.top) {
                canoNormal.classList.remove("obstaculoativado")
                canoInvertido.classList.remove("obstaculoativado")

                document.getElementById("gameoverId").classList.add("gameover")
                document.getElementById("gameovertitleId").classList.add("gameovertitle")
                document.getElementById("pontosfinaisId").classList.add("pontosfinais")
                document.getElementById("tentardnvId").classList.add("tentardnv")
                document.getElementById("sairdaquiId").classList.add("sairdaqui")

                document.getElementById("gameoverId")
                document.getElementById("gameovertitleId").innerHTML = "Game Over"
                document.getElementById("pontosfinaisId").innerHTML = "Sua pontuação é: " + NumeroDosPontos
                document.getElementById("tentardnvId").innerHTML = "Tentar novamente"
                document.getElementById("sairdaquiId").innerHTML = "Sair"
                PararTudoVOCEPERDEU = true
                colisao = true
            }
        
            if (birdRect.left < canoInvertidoRect.right &&
                birdRect.right > canoInvertidoRect.left &&
                birdRect.top < canoInvertidoRect.bottom &&
                birdRect.bottom > canoInvertidoRect.top) {
                canoInvertido.classList.remove("obstaculoativado")
                canoNormal.classList.remove("obstaculoativado")

                document.getElementById("gameoverId").classList.add("gameover")
                document.getElementById("gameovertitleId").classList.add("gameovertitle")
                document.getElementById("pontosfinaisId").classList.add("pontosfinais")
                document.getElementById("tentardnvId").classList.add("tentardnv")
                document.getElementById("sairdaquiId").classList.add("sairdaqui")

                document.getElementById("gameoverId")
                document.getElementById("gameovertitleId").innerHTML = "Game Over"
                document.getElementById("pontosfinaisId").innerHTML = "Sua pontuação é: " + NumeroDosPontos
                document.getElementById("tentardnvId").innerHTML = "Tentar novamente"
                document.getElementById("sairdaquiId").innerHTML = "Sair"
                PararTudoVOCEPERDEU = true
                colisao = true
            }
        }
        function colisaodotetoepiso() {
            let passarorect = passaro.getBoundingClientRect()
            let chaorect = chao.getBoundingClientRect()
            let tetorect = teto.getBoundingClientRect()
            if(passarorect.top <= tetorect.bottom || passarorect.bottom >= chaorect.top){

                document.getElementById("gameoverId").classList.add("gameover")
                document.getElementById("gameovertitleId").classList.add("gameovertitle")
                document.getElementById("pontosfinaisId").classList.add("pontosfinais")
                document.getElementById("tentardnvId").classList.add("tentardnv")
                document.getElementById("sairdaquiId").classList.add("sairdaqui")

                document.getElementById("gameoverId")
                document.getElementById("gameovertitleId").innerHTML = "Game Over"
                document.getElementById("pontosfinaisId").innerHTML = "Sua pontuação é: " + NumeroDosPontos
                document.getElementById("tentardnvId").innerHTML = "Tentar novamente"
                document.getElementById("sairdaquiId").innerHTML = "Sair"
                PararTudoVOCEPERDEU = true
                console.log("colisão!")
            }
        }
        setInterval(() => {
                canoNormal.forEach(cano => verificarColisao(passaro, cano, cano.nextElementSibling))

                canoInvertido.forEach(cano2 => verificarColisao(passaro, cano2, cano2.nextElementSibling))

        }, 100)
        setInterval(colisaodotetoepiso, 100)
        /* colisão */