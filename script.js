let titulo = document.querySelector("#titulo")
console.log(titulo)

let listNaoOrdenada = document.querySelector("ul")
console.log(listNaoOrdenada)

let ancora = document.querySelector("a")
console.log(ancora)

let listOrdenada = document.querySelector("ol")
console.log(listOrdenada)

let mostrarTitulo = document.querySelector("h1")
mostrarTitulo.innerText = 'Diferença entre innerText e innerHTML'

let mostrarAncora = document.querySelector("a")
mostrarAncora.innerText = 'Venha estudar na melhor escola de programação do Brasil'
console.log(mostrarAncora)

let conteudoListNaoOrd = document.querySelector("ul")
conteudoListNaoOrd.innerHTML = `
<li>Técnico em Enfermagem</li>
<li>Técnico em Desenvolvimento de Sistemas</li>
<li>Técnico em Administração</li>
`
let conteudoListOrd = document.querySelector("ol")
conteudoListOrd.innerHTML = `
<li><a href="https://www.facebook.com" target="_blank">Facebook</a></li>
<li><a href="https://www.instagram.com" target="_blank">Instagram</a></li>
<li><a href="https://www.linkedin.com" target="_blank">Linkedin</a></li>
`






