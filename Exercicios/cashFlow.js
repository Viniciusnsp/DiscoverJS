let family = {
    income: [1274, 526, 104, 122, 360, 500, 382],
    expenses: [300, 800, 566, 534, 666, 400]
}

function sum(array) {
    let total = 0

    for(let value of array) {
        total+= value
    }

    return total
}

function getBalance() {
    const sumIncomes = sum(family.income)
    const sumExpenses = sum(family.expenses)
    
    let balance = sumIncomes - sumExpenses
    
    console.log(`Entradas: + R$${sumIncomes},00.`)
    console.log(`Saídas: - R$${sumExpenses},00.`)

    if(balance >= 0) {
        console.log(`Saldo positivo: + R$${balance},00`)
    } else {
        console.log(`Saldo negativo: - R$${balance},00`)
    }
}

getBalance()





