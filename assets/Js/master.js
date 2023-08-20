let number1 = "";
let number2 = null;
let lastAction = "";
let flag_dot = false;
const screen = document.getElementsByClassName("screen")[0];
function calculator(_key) {
    switch (_key) {
        case '+':
            if (number1 != "") {
                if (number2 != null) {
                    number1 = Action(number1, number2, _key);
                    number2 = null;
                    lastAction = "";
                    flag_dot = false;
                }
                lastAction = _key;
                number2 = number1;
                number1 = "";
                flag_dot = false;
            }
            screen.innerText = 0;
            break;
        case '-':
            if (number1 != "") {
                if (number2 != null) {
                    number1 = Action(number1, number2, _key);
                    number2 = null;
                    lastAction = "";
                    flag_dot = false;
                }
                lastAction = _key;
                number2 = number1;
                number1 = "";
                flag_dot = false;
            }
            screen.innerText = 0;
            break;
        case '÷':
            if (number1 != "") {
                if (number2 != null) {
                    number1 = Action(number1, number2, _key);
                    number2 = null;
                    lastAction = "";
                    flag_dot = false;
                }
                lastAction = _key;
                number2 = number1;
                number1 = "";
                flag_dot = false;
            }
            screen.innerText = 0;
            break;
        case 'x':
            if (number1 != "") {
                if (number2 != null) {
                    number1 = Action(number1, number2, _key);
                    number2 = null;
                    lastAction = "";
                    flag_dot = false;
                }
                lastAction = _key;
                number2 = number1;
                number1 = "";
                flag_dot = false;
            }
            screen.innerText = 0;
            break;
        case '=':
            if (number1 != "") {
                if (number2 != null) {
                    number1 = Action(number1, number2, lastAction);
                    number2 = null;
                    lastAction = _key;
                    flag_dot = false;
                }
                else {
                    alert("Please Enter Two Numbers");
                }
            }
            screen.innerText = number1;
            break;
        case '.':
            if(!flag_dot)
            {
                number1 += _key;
                screen.innerText = number1;
                flag_dot = true;
            }
            break;
        default:
            if(lastAction == "=")
            {
                if(window.confirm("You Are Rewrite your Result!! Are you sure ??"))
                    lastAction = "";
                break;
            }
            number1 += _key;
            screen.innerText = number1;
            break;
    }
}
function Clear() {
    number1 = "";
    number2 = null;
    lastAction = "";
    screen.innerText = 0;
}
function Action(number1, number2, action) {
    if (action == '+')
        return Number(number1) + Number(number2);
    else if (action == '-')
        return Number(number2) - Number(number1);
    else if (action == '÷')
        return Number(number2) / Number(number1);
    else {
        console.log("Action : " + action);
        return Number(number1) * Number(number2);
    }
}