// function expression
const sum = function(number1, number2) {
  let sum = number1 + number2
  return sum

}

sum(2, 3)

const sayMyName = (name) => {
  console.log(name)
}

sayMyName("Rodrigo")

function Person(name){
  this.name = name
  this.walk = function () {
    console.log(`${this.name} está andando`)
  }
}

const nava = new Person("Nava")
nava.walk()