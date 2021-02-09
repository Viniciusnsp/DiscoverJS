// Prototype

const name = "vinicius"

console.log(name.length)

/*Type conversion  (type casting) vs Type coersion

  *Alterar de um tipo de dado para outro

*/

let number1 = 10000
let number2 = "10"
let word = "shikuhsilhudssul"

//Alterando de String para number e de number para String
console.log(String(number1) + Number(number2)) 

// contando caracteres  de uma String
console.log(word.length) 

// contando caracteres de um Numero
console.log(String(number1).length) 

// colocando o numero de casas apos a virgula
let decimal = 631646464.54654
console.log(decimal.toFixed(4))

// colocando o numero de casas apos a virgula e trocando o . por ,
console.log(decimal.toFixed(4).replace(".", ",")) 

// trocando o começo da string por vinicius
console.log(word.replace("shiku", "vinicius")) 

// Letras maiusculas e minusculas
let word2 = "Vinicius Neves da Silva Pereira"
console.log(word2.toLowerCase()) //Transformando tudo para minusculo
console.log(word2.toUpperCase()) //Transformando tudo para maiusculo

//Encontrando palavras em strings

console.log(word2.includes("Vinicius")) // encontrando a palavra Vinicius na String

// Separando Strings

let phrase = "Olá meu nome é João"

let myArray = phrase.split(" ") // Retira os espaços da string e guarda cada pedaço em uma posição do array
let phraseWithUnderscore = myArray.join("_") // Junta os pedaços do array e os separa por _

console.log(phraseWithUnderscore.toLowerCase())

// Criando array com construtor

let newArray = new Array("a", "b", "c")
console.log(newArray)

// Elementos de um Array

//Coloca cada caractere da string dentro de uma posicao do array
let word3 = "paralelepipedo"
console.log(Array.from(word3)) 

// Manipulando arrays

let techs = ["html", "css", "js"]

//add um item no fim
techs.push("nodejs")

//add um item no começo
techs.unshift("sql")

//remover do fim
// techs.pop()

//remover do começo
// techs.shift()

//pegar somente alguns elementos do array
// console.log(techs.slice(1, 3)) //primeiro argumento é a posição e o segundo é até onde ele deve ir

//remover 1 ou mais items em qualquer posição do array
// techs.splice(0, 3) //primeiro argumento é a posição e o segundo é até onde ele deve ir

//encontrar a posição de um elemento no array
let index = techs.indexOf("css") // Traz o indice do array atraves da palavra
techs.splice(index, 1)

console.log(techs)



// Operadores e expressoes

let date = new Date()
let n = 1

console.log(typeof n)

// Operador condicional ternário

let study = true
let workoutDone = true

const fullDay = study && workoutDone ? 'Dia completo com sucesso!' : 'Dia incompleto'

console.log(fullDay)

console.log(2 ? 'verdadeiro' : 'falso')

// If e Else 

let temperature = 34.5

if(temperature >= 37){
  console.log("Está com febre!")
  
} else if (temperature <= 35) {
  console.log("Está com hipotermia!")
  
}else if (temperature > 35 && temperature < 37) {
  console.log("Está tudo bem!")
}

// Switch

let escolha = 5;

switch (escolha) {
  case 1:
    console.log("Primeira opção")
    break;
  case 2: 
    console.log("Segunda opção")
    break;
  default:
    console.log("Valor invalido")
    break;  
}

// Calculadora

function calculate(num1, operator, num2) {
  let result

  switch (operator) {
    case "+":
      result = num1 + num2
      break;
    case "-":
      result = num1 - num2
      break;
    case "*":
      result = num1 * num2
      break;
    case "/":
      result = num1 / num2
      break;
  
    default:
      console.log("Opção Inválida")
      break;
  }
  return result
}

let operator = "a"
let numero1 = 10
let numero2 = 10
let resultado = calculate(numero1, operator, numero2)

console.log(`A operação de ${numero1} ${operator} ${numero2} é igual à ${resultado}`)

// Throw e Try/Catch

function numberOne(num) {
  if(num == 1) {
    throw 'O número não pode ser 1' // Gera o erro quando o numero for 1
  }

  console.log('Tudo ok!')
}
let numOne = 1

try {
  numberOne(numOne) // Tenta executar a função
} catch (e) {
  console.log(e) // Caso algum erro seja encontrado, exibimos a mensagem em tela de forma amigavel
}

// for

for(let i = 1; i <= 10; i++) {

  if(i % 2 == 0) {
    console.log(`${i} é par`)
  } else {
    console.log(`${i} é impar`)
  }

}

// While

let a = 0
while(a < 10) {
 console.log(a)
 a++
}

// for .. of

let name1 = 'vinicius'
let names = ['pedro', 'joao', 'paulo']
let numbers = [1, 2, 3]

for(let name of names) { // percorre os nomes do array com o for of e os armazena na variavel
  console.log(name)
}

for(let n of numbers) { // pecorre o array de numeros e armazena cada posição na variavel
  console.log(n)
}

for(let char of name1) { // percorre os caracteres da string e os armazena na variavel
  console.log(char)
}

// for... in

// Percorre as propriedades do objeto

let people = {
  name: 'Vinicius',
  age: 20,
  weight: 88.6
}

for(let property in people) {
  // acessa as propriedades do objeto
  console.log(property)

  // acessa o valor de cada propriedade
  console.log(people[property])
}