document.addEventListener('DOMContentLoaded', () => {
let display = document.getElementById('display');
let btns = Array.from(document.getElementsByClassName('buttons'));

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const btnValue = e.target.innerText;
    console.log(btnValue);
      switch (btnValue) {
        case 'x!':
          try {
            display.value = factorial((display.value));
          } catch {
            display.value = 'Error';
          }
          break;
        case '%':
          try {
            display.value = (display.value) / 100;
          } catch {
            display.value = 'Error';
          }
          break;
        case 'AC':
          display.value = '';
          break;
        case 'sin':
          try {
            display.value = Math.sin((display.value * Math.PI) / 180);
            } catch {
            display.value = 'Error';
            }
          break;
        case 'ln':
          try {
            display.value = Math.log((display.value));
            } catch {
            display.value = 'Error';
            }
          break;
        case 'cos':
          try {
            display.value = Math.cos((display.value * Math.PI) / 180);
            } catch {
            display.value = 'Error';
            }
          break;
        case 'log':
          try {
            display.value = Math.log10((display.value));
            } catch {
            display.value = 'Error';
            }
          break;
        case 'tan':
          try {
            display.value = Math.tan((display.value * Math.PI) / 180);
          } catch {
            display.value = 'Error';
          }
          break;
        case '√':
          try {
            display.value = Math.sqrt((display.value));
          } catch {
            display.value = 'Error';
          }
          break;
        case 'EXP':
          try {
            display.value = Math.exp((display.value));
          } catch {
            display.value = 'Error';
          }
          break;
        case 'x^y':
          try {
            const base = display.value;
            const exponent = display.value;
            display.value = Math.pow((base), (exponent));
          } catch {
            display.value = 'Error';
          }
          break;
        case '=':
          try {
            display.value = evalExpression(display.value);
            } catch {
            display.value = 'Error';
            }
          break;
        default:
          if (display.value === 'Error') {
            display.value = btnValue;
          } else {
            display.value += btnValue;
          }
      }
    });
  });
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
}

function evalExpression(expression) {
      expression = expression.replace(/x/g, '*').replace(/÷/g, '/');
      expression = expression.replace(/(-?\d+)([+\-*\/])(-?\d+)/g, (_, num1, operator, num2) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        switch (operator) {
          case '/':
            return num1 / num2;
          case '*':
            return num1 * num2;
          case '-':
            return num1 - num2;
          case '+':
            return num1 + num2;
        }
      });



  let result = eval(expression); 

  return result;
}

});