
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'CE') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }else if (e.target.innerHTML === '%') {
                string = (eval(string) / 100).toString();
                input.value = string;
        } 
        else if (e.target.innerHTML === '/') {
            string += '/';
            input.value = string;}
            else if (e.target.innerHTML === 'ON') {
                calculatorOn = true;
                input.value = "";
            }
        
            else if (e.target.innerHTML === 'OFF') {
                calculatorOn = false;
                input.value = "";
            }
            else if (e.target.innerHTML === 'MC') {
                memory = 0;}
                else if (e.target.innerHTML === 'MR') {
                    string += memory.toString(); // Recall memory value
                    input.value = string;
                } else if (e.target.innerHTML === 'M-') {
                    memory -= eval(string); // Subtract from memory
                } else if (e.target.innerHTML === 'M+') {
                    memory += eval(string); // Add to memory
                } 
                else if (e.target.innerHTML === 'x') {
                    string += '*'; // Multiplication
                    input.value = string;
                }
                else if (e.target.innerHTML === '.') {
                    if (!string.includes('.')) {
                        string += '.'; // Decimal Point
                        input.value = string;
                    }
                }
                else if (e.target.innerHTML === '√') {
                    string = Math.sqrt(eval(string)).toString(); // Square Root
                    input.value = string;
                }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
