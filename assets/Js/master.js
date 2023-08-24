let number1 = "0";
let number2 = "";
let lastAction = "";
const screen = document.getElementsByClassName("screen")[0];
function calculator(_key) {
    switch (_key) {
        case '+':
        case '-':
        case '÷':
        case 'x':
            CheckIsSecondNumberEnterAndHandleIt(_key);
            break;
        case '=':
            HandleEqual(_key);
            if(isNaN(number1))
            {
                console.log("CLEAR")
                Clear();
            }
            screen.innerText = number1;
            break;
        case '.':
            CheckDot(_key);
            break;
        default:
            if (lastAction == "=") {
                if (window.confirm("You Are Rewrite your Result!! Are you sure ??"))
                    lastAction = "";
                else
                    break;
            }
            if (number1 == "0") {
                number1 = "";
            }
            number1 += _key;
            screen.innerText = number1;
            break;
    }
}
function Clear() {
    number1 = "0";
    number2 = "";
    lastAction = "";
    screen.innerText = number1;
}
function Action(action) {
    if (action == '+')
        return Number(number1) + Number(number2);
    else if (action == '-')
        return Number(number2) - Number(number1);
    else if (action == '÷')
        return Number(number2) / Number(number1);
    else {
        return Number(number1) * Number(number2);
    }
}
function CheckIsSecondNumberEnterAndHandleIt(_key) {
    if(number2 != "")
        number1 = Action(_key);
    lastAction = _key;
    number2 = number1;
    number1 = "0";
    screen.innerText = number1;
}
function CheckDot(_key) {
    if (!number1.includes('.')) {
        number1 += _key;
        screen.innerText = number1;
    }
}
function HandleEqual(_key) {
    if(lastAction == "")
    {
        alert("You should select one Action");
        return;
    }
    number1 = Action(lastAction);
    number2 = "";
    lastAction = _key;
}