var total = 0;

function Sum(value) {
    total += value;
    return total;
}

function Subtraction(value) {
    total -= value;
    return total;
}

function Multiplication(value) {
    total *= value;
    return total;
}

function Division(value) {
    total = total / value;
    return total;
}

function Exponentiation(value) {
    total **= value;
    return total;
}

function Radiciation(expoente) {
    total = total ** (1/expoente)
    return total
}

function calculateLog(value, a, number) {
    let b = true;
    while (b) {
        b = (value >= (10 ** a));

        if (b) {
            a += number;
        }
    }
    a -= number;
    return a;
}

function Log10(value) {
    let a = 0;

    a = calculateLog(value, a, 1)
    a = calculateLog(value, a, 0.1)
    a = calculateLog(value, a, 0.01)
    a = calculateLog(value, a, 0.001)
    a = calculateLog(value, a, 0.0001)
    return Number(a.toFixed(4));
}

function Operations() {
    total = 2;
    console.log('soma 9: ' + Sum(9))
    console.log('sub 3: ' + Subtraction(3))
    console.log('multi 4: ' + Multiplication(4))
    console.log('div 2: ' + Division(2))
    console.log('expo 2: ' + Exponentiation(2))
    console.log('radia 2: ' + Radiciation(2))
    total = 300
    console.log(`O log de ${total} é ${Log10(total)}`)
    
}