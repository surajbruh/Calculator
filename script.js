import { evaluate } from 'https://cdn.jsdelivr.net/npm/mathjs@13.0.1/+esm';

const display = document.querySelector('#output')
const buttons = document.querySelectorAll('.show')

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        display.value = display.value.concat(button.innerHTML)
    })
})

const clearButton = document.getElementById('clear')
clearButton.addEventListener("click", () => {
    display.value = ""
})

const equalTo = document.getElementById('equalTo')
equalTo.addEventListener('click', () => {
    const expression = display.value
    const result = evaluate(expression)
    display.value = result
})