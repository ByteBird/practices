// NUMBERS REGISTER
let numbers = Array.from(document.querySelectorAll('.number-button'))
let display = document.getElementById('display')
numbers.forEach(e => {
    e.addEventListener('click', () => {
        display.value += e.value
    })
})

// CALCULATOR ARRAY
let calculator = []

// CLEAN FUNCTION
const limpiar = () => {
    display.value = null
    display.placeholder = 0
    calculator = []
}

// OPERATION PROCESS
const operation = (operator) => {
    if (display.value === ""){
        if(calculator[calculator.length -1] !== operator){
            calculator[calculator.length -1] = operator
        }
    }
    else {
        number = parseFloat(display.value)
        calculator.push(number)
        calculator.push(operator)
        display.value = null
        display.placeholder = number
    }
}

// CLEAN DISPLAY
const clean_display = document.getElementById('clean-button')
clean_display.addEventListener('click', limpiar)

////////////////
// OPERATIONS //
////////////////


let operaciones = ['-','/','+','*']
let all_operations = (Array.from(document.getElementById('operations').querySelectorAll('input'))).splice(2,4)

i=0
operaciones.forEach(e=>{
    all_operations[i++].addEventListener('click', () => operation(e))
})

// DELETE NUMBER

const deleteNumber = document.getElementById('remove-button')
deleteNumber.addEventListener('click', ()=> {
    display.value = display.value.substr(0,display.value.length-1)
})

// RESULT
const equal = document.getElementById('equal-button')
equal.addEventListener('click', () => {
    if(display.value === ""){
        
    }
    else{
        number = parseFloat(display.value)
        calculator.push(number)

        let result = ''
        calculator.forEach(e => {result += e})
        console.log(calculator)
        console.log(Number(eval(result).toFixed(3)))
        display.value = Number(eval(result).toFixed(3))
        calculator = []
    }
    
})