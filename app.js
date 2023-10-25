const sum = (a,b) => {
    return a + b
}


const EuroToDollar = function(valueInEuro){
    
    let valueInDollar = valueInEuro * 1.2;
    
    return valueInDollar;
}

const DollarToYen = function(valueInDollar) {
    
    let valueInYen = valueInDollar * 127.9;
    
    return valueInYen;
}

const YenToPound = function(valueInYen) {
    
    let valueInPound = valueInYen * 0.0055;
    
    return valueInPound;
}

module.exports = { sum, EuroToDollar, DollarToYen, YenToPound }


