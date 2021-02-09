console.log('Aula de Functions')

// function expression - function anonymous
const sum = function(number1, number2, number3) { // aqui eles são parametros
    soma = number1 + number2 + number3
    return soma
}
const somaTodos = sum(2, 3, 5) // passando argumentos

console.log(somaTodos)

// arrow function

const sayMyName = (name) => {
    console.log(name)
}

sayMyName('pedro')

// Callback function -> Significa passar uma função como argumento para outra função

function sayMyAge(age) {
    age()
}

sayMyAge(
    () => {
        idade = 20
        console.log(idade)
    }
)

// Função construtora

function Person(name) {
    this.name = name;
}

const vini = new Person("Vinicius")
const joao = new Person("joao")

console.log(vini.name, joao.name)

