function Pessoa(nome, sobrenome) { // Função construtora
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.falar = function () {
        return ("Meu nome é " + this.nome + " " + this.sobrenome)
    }
}

// Criando um objeto a partir de uma função construtora
var funcionario = new Pessoa("João", "Pedro")
var gerente = new Pessoa("Vinicius", "Pereira")

// Acessando a propriedade nome e o método falar
console.log(gerente.falar())
console.log(funcionario.falar())

// Object

const person = {
    age: 30,
    isAdmin: true
}

console.log(`Vinicius tem ${person.age} anos e é ${person.isAdmin}`)

// Arrays

const animals = [
    'Lion',
    'Monkey',
    'Cat'
]

console.log(animals.length)

// Exercicios

//1
var weight = 80.5;

// 2
 console.log(typeof weight)

// 3 e 4
const student = {
    name: 'Vinicius Pereira',
    age: 20,
    stars: 4.5,
    isSubscribed: true
} 

console.log(`Olá! Meu nome é ${student.name}, tenho ${student.age} anos e ${student.stars} de avaliação. Meu status de inscrito é ${student.isSubscribed}`)

// 5

let students = []

// 6 e 7

students = [
    student
]

console.log(students[0])

// 8

const john = {
    name: 'John',
    age: 17,
    stars: 4.4,
    isSubscribed: true
}

students[1] = john

console.log(students[1])

// 9 
console.log(a)

var a = 1