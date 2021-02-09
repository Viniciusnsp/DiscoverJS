
let celsius = "35C"
let fahrenheit = "50F"

function transformDegree(temperature) {

    const celsiusExists = temperature.toUpperCase().includes('C')
    const fahrenheitExists = temperature.toUpperCase().includes('F')

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Temperatura inválida')
    }

    
    //Transformando F -> C
    let updatedTemperature = Number(temperature.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit -32) * 5/9
    let degreeSign = 'C'
    
    
    
    if(celsiusExists) {
    //Transformando C -> F
        updatedTemperature = Number(temperature.toUpperCase().replace("C", ""))
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'
}

    return formula(updatedTemperature) + degreeSign
}

try {
    console.log(transformDegree(celsius))
    console.log(transformDegree(fahrenheit))
} catch (e) {
    console.log(e.message)
}
