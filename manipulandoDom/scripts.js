const Modal = {
    open() {
      document.querySelector(".bloco1").classList.toggle("active");
    },
    close() {
      document.querySelector(".bloco1.active").classList.toggle("active");
    },
  };


// const elemento = document.querySelector('h1')
//Alterando o conteudo do h1
// elemento.textContent = "Blog do Vinicius" 

// const input = document.querySelector('input')
//Adicionando valor dentro do input
// input.value = "Viniciusss" 

const headerID = document.querySelector("header")
//Atribuindo um atributo ao elemento
headerID.setAttribute('id', 'pedrinho')
//Printando no console apenas o id do elemento
console.log(headerID.getAttribute('id'))

//Remove o atributo
headerID.removeAttribute('id')

//Alterando o estilo

const styles = document.querySelector('body')
styles.style.backgroundColor = "#00f2"

//Pegando o elemento pai
const father = document.querySelector('h1')
// ParentElement e parentNode pegam os elementos pais
const father1 = father.parentElement
father1.setAttribute('id', 'teste')
console.log(father1)

// Eventos
const h1 = document.querySelector('h1')
h1.addEventListener('click', Modal.open)

const input = document.querySelector('input')
//Capturando todas as letras digitadas no input em real time
input.onkeydown = function (event) {
  console.log(event.currentTarget.value)
}



