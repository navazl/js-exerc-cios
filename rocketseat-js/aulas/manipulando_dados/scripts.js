let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))
// remover 1 ou mais items em qualquer posicao doa rary
techs.splice(1, 1)
// encontrar a posicoa de um elemnto no array
let index = techs.indexOf('css')
techs.splice(index, 1)

console.log(techs)