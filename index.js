// class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//         this.previousOperandTextElement = previousOperandTextElement
//         this.currentOperandTextElement = currentOperandTextElement
//     }

//     clear() {
//         this.currentOperand = ""
//         this.previousOperand = ""
//         this.operation = undefined
//     }

//     delete() {

//     }
    
//     appendNumber(number) {
//         this.currentOperand = number
//     }
//     chooseOperation(operation) {

//     }
//     compute() {

//     }
//     updateDisplay() {
//         this.currentOperandTextElement.innerText = this.currentOperand
//     }
// }




// const numberButtons = document.querySelectorAll("[data-number]")
// const operationButtons = document.querySelectorAll("[data-operation]")
// const equalsButton = document.querySelector("[data-equals]")
// const deleteButton = document.querySelector("[data-delete]")
// const allClearButon = document.querySelector("[data-all-clear]")
// const previousOperandTextElement = document.querySelector("[data-previous-operand]")
// const currentOperandTextElement = document.querySelector("[data-current-operand]")

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// numberButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay()
//     })
// })

const display = document.querySelector("#display")

const buttons = Array.from(document.querySelectorAll(".button"))


buttons.map( buttons =>  {
    buttons.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "AC":
                display.innerText = ""
                break;
            case "DEL":
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1)
                }
                break;
            case "=":
                display.innerText = eval(display.innerText)
                break
        
            default:
                display.innerText += e.target.innerText
        }
    })
})










