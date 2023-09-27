let first = _("option1");
let second = _("option2");
let answer = _("answer");
let input = _("enterbox");
let count = 0;

function _(selector) {
    return document.getElementById(selector);
}

function option1() {
    console.log(document.getElementById("option1").value);
}

function option2() {
    console.log(document.getElementById("option1").value);
}

function clr() {
    console.log("clear");
    input.value = "";
    answer.value = "";
    answer.classList.remove("error");
    
}

function calculate() {
    const firstValue = first.value;
    const secondValue = second.value;
    const inputValue = input.value.toLowerCase();

    switch (`${firstValue}-${secondValue}`) {
        case "opt1-opt1":
        case "opt2-opt2":
        case "opt3-opt3":
        case "opt4-opt4":
            for (let i = inputValue.length - 1; i >= 0; i--) {
                if (inputValue[i] > 1 || (inputValue[i] >= "a" && inputValue[i] <= "z")) {
                    count += 1;
                }
            }
            if (count > 0) {
                answer.value = "Incorrect Input";
                answer.classList.add("error"); 
            } else {
                answer.value = inputValue;
                console.log(answer.value);
            }
            break;

        case "opt3-opt1":
        case "opt3-opt4":
        case "opt3-opt2":
         for (let i = inputValue.length - 1; i >= 0; i--) {
          if (inputValue[i] >= "a" && inputValue[i] <= "z") {
            count += 1;
        }
    }
    if (count > 0) {
        answer.value = "Incorrect Input";
        answer.classList.add("error"); 
    } else {
        const num = parseInt(inputValue, 10); 
        const base = secondValue === "opt1" ? 2 : (secondValue === "opt2" ? 8 : 16);
        const result = num.toString(base);
        answer.value = result;
    }
    break;

        case "opt1-opt3":
        case "opt2-opt3":
            case "opt4-opt3":
                for (let i = inputValue.length - 1; i >= 0; i--) {
                    if (inputValue[i] >= "g" && inputValue[i] <= "z") {
                        count += 1;
                    }
                }
                if (count > 0) {
                    answer.value = "Incorrect Input";
                    answer.classList.add("error"); 
                } else {
                    const num = parseInt(inputValue, 16);
                    answer.value = num;
                }
                break;
            


        case "opt1-opt2":
        case "opt1-opt4":
        case "opt2-opt1":
        case "opt2-opt4":
            for (let i = inputValue.length - 1; i >= 0; i--) {
                if ((inputValue[i] > 7) || (inputValue[i] >= "a" && inputValue[i] <= "z")) {
                    count += 1;
                }
            }
            if (count > 0) {
                answer.value = "Incorrect Input";
                answer.classList.add("error"); 
            } else {
                const num = parseInt(inputValue, firstValue === "opt1" ? 2 : 8);
                const base = secondValue === "opt1" ? 2 : 16;
                const result = num.toString(base);
                answer.value = result;
            }
            break;

        case "opt4-opt1":
        case "opt4-opt2":
            for (let i = inputValue.length - 1; i >= 0; i--) {
                if (inputValue[i] >= "g" && inputValue[i] <= "z") {
                    count += 1;
                }
            }
            if (count > 0) {
                answer.value = "Incorrect Input";
                answer.classList.add("error"); 
            } else {
                const num = parseInt(inputValue, 16);
                const base = secondValue === "opt1" ? 2 : 8;
                const result = num.toString(base);
                answer.value = result;
            }
            break;

        default:
            answer.value = "Incorrect Input";
            answer.classList.add("error"); 
            
    }

    count = 0;
}
