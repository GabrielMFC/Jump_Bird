let cenario = document.getElementById("backgrounde") 
        let birdsprite = document.getElementById("birdsprite")
        /* Mudar sprite no jogo */
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
        /* Fim do tópico Mudar sprite */

        /* Posicionamento do sprite */
        var posicao = parseInt(window.getComputedStyle(document.getElementById("birdsprite")).top)
        function moverprabaixo() {
            if(posicao >= window.innerHeight){
                posicao = 0
            }else{
                posicao++
                birdsprite.style.top = posicao + "px"
                birdsprite.style.transform = "rotate(60deg)"
            }
        }
        var intervalId
        function iniciarAnimacao(){
            if(intervalId){
                clearInterval(intervalId);
            }
            intervalId = setInterval (moverprabaixo, 5)
        }
        iniciarAnimacao();

        document.getElementById("corpo").addEventListener("click", function moverPraCima() {
            var posicao2 = birdsprite.style.top.replace("px", "")
            posicao = (posicao2 - 155)
            birdsprite.style.top = posicao + "px"
        })
        addEventListener("keydown", function moverPraCima() {       
            var posicao2 = birdsprite.style.top.replace("px", "")
            posicao = (posicao2 - 155)
            birdsprite.style.top = posicao + "px"
        })
        /* Fim do tópico Posicionamento do sprite */