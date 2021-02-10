
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "Vinicius de Moraes",
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
        
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos de pessoas altamente eficazes",
                author: "Stephen R. Covey"
            },
        ],
        
    },
]

let numCategory = booksByCategory.length
console.log(`Categorias: ${numCategory}`)

for(let category of booksByCategory) {
    console.log(`Livros da categoria -> ${category.category}: ${category.books.length}`)

}

const nameAuthors = (name) => {

    for(let i = 0; i < booksByCategory.length; i++) {

        for(let j = 0; j < booksByCategory[i].books.length; j++){

            let nameAuthor = booksByCategory[i].books[j].author

                if(name == nameAuthor) {
                    title = booksByCategory[i].books[j].title
                    console.log(title)
                }
            }
        }
        return title
}

nameAuthors('Vinicius de Moraes')

const countAuthors = () => {
    let authors = []

    for( let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }

    console.log(String(authors))

}
countAuthors()


const booksOf = (authors) => {
    let booksOf = []

    for( let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === authors) {
                booksOf.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${authors}: ${booksOf.join(", ")}`)

}
booksOf('Augusto Cury')








