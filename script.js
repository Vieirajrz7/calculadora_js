// Deixar sempre o botão de igual em focus
// const event = new KeyboardEvent('keydown', {
//     key: 'Enter',
//     code: 'Enter',
//     which: 13,
//     keyCode: 13,
//   });
  
let screenValue = document.querySelector('#display');
let firstValue, secondValue = 0
let operation = '';

function Clear() {
    screenValue.innerHTML = 0
}
// --Finishing operations with keyboard
// ---Basic Operations

function Multiplication() {
    operation = '*'
    firstValue = screenValue.textContent
    screenValue.textContent = 0;
}
function Division() {
    operation = '/'
    firstValue = screenValue.textContent
    screenValue.textContent = 0;
}

// ---Complex Operations
function SquareRoot() {
    firstValue = Number(screenValue.textContent);
    result = Math.sqrt(firstValue);
    screenValue.textContent = result.toFixed(4);
    firstValue = 0;
}

function Potentiation() {
    operation = 'Xⁿ';
    firstValue = Number(screenValue.textContent);
    screenValue.textContent = 0;
}

function Logarithm() {
    firstValue = Number(screenValue.textContent);
    result = Math.log10(firstValue);
    screenValue.textContent = result.toFixed(4);
    firstValue = 0;

}

document.addEventListener('keydown', function (event) {
    if (event.key >= '0' && event.key <= '9') {
        if (screenValue.textContent == 0) {
            screenValue.textContent = event.key
        } else {
            screenValue.textContent += event.key
        }
    }

    if (event.key == enter) {
        console.log('Press Enter')
    } else if (event.key == '+') {
        operation = '+'
        firstValue = Number(screenValue.textContent)
        screenValue.textContent = 0;
    } else if (event.key == '-') {
        operation = '-'
        firstValue = screenValue.textContent
        screenValue.textContent = 0;

    }
});

// ---Equals Button
function Equals() {

    switch (operation) {
        case '+':
            secondValue = Number(screenValue.textContent);
            result = firstValue + secondValue;
            screenValue.textContent = result;
            firstValue, secondValue = 0
            break;
        case '-':
            secondValue = Number(screenValue.textContent);
            result = firstValue - secondValue;
            screenValue.textContent = result;
            firstValue, secondValue = 0
            break;
        case '*':
            secondValue = Number(screenValue.textContent);
            result = firstValue * secondValue;
            screenValue.textContent = result;
            firstValue, secondValue = 0
            break;
        case '/':
            secondValue = Number(screenValue.textContent);
            result = firstValue / secondValue;
            screenValue.textContent = result;
            firstValue, secondValue = 0
            break;
        case 'Xⁿ':
            secondValue = Number(screenValue.textContent);
            result = firstValue ** secondValue;
            screenValue.textContent = result;
            firstValue, secondValue = 0
            break
        default:
            break;
    }
}

// ---Numbers
function NumOne() {
    if (screenValue.textContent == 0) {
        screenValue.innerHTML = 1
    } else {
        screenValue.innerHTML += 1
    }
}

function NumTwo() {
    if (screenValue.textContent == 0) {
        screenValue.innerHTML = 2
    } else {
        screenValue.innerHTML += 2
    }
}

function NumThree() {
    if (screenValue.textContent == 0) {
        screenValue.innerHTML = 3
    } else {
        screenValue.innerHTML += 3
    }
}

function NumFour() {
    if (screenValue.textContent == 0) {
        screenValue.innerHTML = 4
    } else {
        screenValue.innerHTML += 4
    }
}

function NumFive() {
    if (screenValue.textContent == 0) {
        screenValue.innerHTML = 5
    } else {
        screenValue.innerHTML += 5
    }
}

function NumSix() {
    if (screenValue.textContent == 0) {
        screenValue.innerHTML = 6
    } else {
        screenValue.innerHTML += 6
    }
}

function NumSeven() {
    if (screenValue.textContent == 0) {
        screenValue.innerHTML = 7
    } else {
        screenValue.innerHTML += 7
    }
}

function NumEight() {
    if (screenValue.textContent == 0) {
        screenValue.innerHTML = 8
    } else {
        screenValue.innerHTML += 8
    }
}

function NumNine() {
    if (screenValue.textContent == 0) {
        screenValue.innerHTML = 9
    } else {
        screenValue.innerHTML += 9
    }
}

function NumZero() {
    if (screenValue.textContent == 0) {
        screenValue.innerHTML = 0
    } else {
        screenValue.innerHTML += 0
    }
}







var total = 0;

// function Sum(value) {
//     total += value;
//     return total;
// }

// function Subtraction(value) {
//     total -= value;
//     return total;
// }

// function Multiplication(value) {
//     total *= value;
//     return total;
// }

// function Division(value) {
//     total = total / value;
//     return total;
// }

// function Exponentiation(expoente) {
//     total **= (expoente);
//     return total;
// }

// function Radiciation(expoente) {
//     total **= (1 / expoente);
//     return total
// }

// function calculateLog(value, a, number) {
//     let b = true;
//     while (b) {
//         b = (value >= (10 ** a));

//         if (b) {
//             a += number;
//         }
//     }
//     a -= number;
//     return a;
// }

// function Log10(value) {
//     let a = 0;

//     a = calculateLog(value, a, 1)
//     a = calculateLog(value, a, 0.1)
//     a = calculateLog(value, a, 0.01)
//     a = calculateLog(value, a, 0.001)
//     a = calculateLog(value, a, 0.0001)
//     return Number(a.toFixed(4));
// }

function Logaritimo() {
    total = Math.log10(total)
    return total;
}

function Clean() {
    total = 0;
    return total;
}

function Operations() {
    total = 2;
    console.log('soma 9: ' + Sum(9))
    console.log('sub 3: ' + Subtraction(3))
    console.log('multi 4: ' + Multiplication(4))
    console.log('div 2: ' + Division(2))
    total = 4;
    console.log('expo 2: ' + Exponentiation(2))
    console.log('radz 2: ' + Radiciation(2))
    console.log('Log: ' + Logaritimo())

}