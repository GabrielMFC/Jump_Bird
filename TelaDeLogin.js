/* Inicio do Tópico Animação do passáro na tela de login */
let SpriteDoPassaroNoCantoDaTela = document.getElementById("passaronocantodatelaId")
function mudarspriteprabaixo() {
    SpriteDoPassaroNoCantoDaTela.src = "birddown.png"
}
function mudarspritepracima() {
    SpriteDoPassaroNoCantoDaTela.src = "birdtop.png"
}
setInterval(mudarspritepracima, 1000)
setInterval(mudarspriteprabaixo, 1200)
/* Fim do Tópico Animação do passáro na tela de login */

/* Inicio do tópico entrar no jogo */
let botaodeentrar = document.getElementById("botaodeentrar").addEventListener("click", function entrarNoJogo() {
    document.getElementById("link").href = "jumpbird.html"
})
let botaodesair = document.getElementById("botaodesair").addEventListener("click", function naoSairDoJogo() {
    alert("Eu sei que você não quer sair do jogo, vou te dar outra chance")
})
/* Fim do tópico entrar no jogo */