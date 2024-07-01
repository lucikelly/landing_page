var setaDireita = window.document.getElementById('setadireita')
var bruna = window.document.getElementById('bruna')
var leonardo = window.document.getElementById('leonardo')
var samantha = window.document.getElementById('samantha')
var setaEsquerda = window.document.getElementById('setaesquerda')


function RolarDireita() {
  bruna.style ="display:none"
  samantha.style ="display:flex"
  setaDireita.style ="display:none"
  setaEsquerda.style ="display:flex"
}

function RolarEsquerda() {
  bruna.style ="display:flex"
  samantha.style ="display:none"
  setaDireita.style ="display:flex"
  setaEsquerda.style ="display:none"
}