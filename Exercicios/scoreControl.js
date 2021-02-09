
let score = Math.random()*150
score = score.toFixed(0)


function getScore(random) {

        let A = score >= 90 && score <=100
        let B = score >= 80 && score <= 89
        let C = score >= 70 && score <= 79
        let D = score >= 60 && score <= 69
        let F = score < 60 && score >= 0
        
        if(A) { console.log(`${score} é igual a nota A`)}
        else if(B) { console.log(`${score} é igual a nota B`)}
        else if(C) { console.log(`${score} é igual a nota C`)}
        else if(D) { console.log(`${score} é igual a nota D`)}
        else if(F) { console.log(`${score} é igual a nota F`)}
        else {
            console.log(`${score} é uma nota inválida`)
        }

}

getScore(score)