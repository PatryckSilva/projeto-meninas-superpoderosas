//quando passar o mouse mudar o personagem selecionado
const personagens = document.querySelectorAll('.personagem')
personagens.forEach(personagem => {
  personagem.addEventListener('mouseenter', () => {
    const idSelecionado = personagem.attributes.id.value

    if (idSelecionado === 'ele') {
      return
    } else {
      const personagemSelecionado = document.querySelector('.selecionado')
      personagemSelecionado.classList.remove('selecionado')
      personagem.classList.add('selecionado')

      //quando passar o mouse muda a imagem do personagem grande

      const imgJogador1 = document.getElementById('personagem-jogador-1')

      imgJogador1.src = `./src/imagens/${idSelecionado}.png`

      const nomeJogador1 = document.getElementById('nome-jogador1')
      const nomeSelecionado = personagem.getAttribute('data-name')

      nomeJogador1.textContent = nomeSelecionado
    }
  })
})
