// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/* 
  3. Declare uma variável e atribua valores para cada um dos dados:
      * name: String
      * age: Number (intenger)
      * stars: Number (float)
      * isSubscribed: Boolean
*/

let name = "Rodrigo"
let age = 17
let stars = 4.5
let isSubscribed = true 

/* 
    4. A varíavel student abaixo é de que tipo de dados?

    4.1 Atribua aa ela as mesmas propriedades e valores do exercício 3.
    
    4.2 Mostre no console a seguinte mensagem:

    <name> de <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {
  name: "Rodrigo",
  age: 17,
  weight: 84,
  isSubscribed: true
}

console.log(typeof student)

console.log(`${student.name} de ${student.age} pesa ${student.weight}kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somento o Array vazio.
*/

let students = []

/* 
    6. Reatribua o valor para a varíavel acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
*/

students = [student]

console.log(students)

/* 
  7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/* 
    8. Crie um novo student e coloque na posição 1 do Array students.
*/

const student2 = {
  name: "John",
  age: 18,
  weight: 75,
  isSubscribed: false
}

students[1] = student2
