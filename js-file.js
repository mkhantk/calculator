//create function
const add = function(a,b) {
    return a + b;
}

const minus = function(a,b) {
    return a - b;
}

const multiply = function(a,b) {
    return a * b;
}

const divide = function(a,b) {
    return a / b;
}

const persentage = function(a) {
    return a/100;
}

//change font size automatically
//further improvement needed !!!

//execute function for = 
const execute = function() {
    let joined = onDisplay.join("");
    // console.log(joined);
    let splitted = joined.split(/[+\-x%\/]/).map((e) => Number(e));
    let operators = onDisplay.filter((e) => e === "+" || e === "-" || e === "x" || e === "/" || e === "%")
    console.log(operators);
    // console.log(splitted); 
    //sanity check 
    // if (splitted.length > 1) {
    //     if (onDisplay.includes("+")) {
    //         result = add(splitted[0],splitted[1]);
            
    //     } else if (onDisplay.includes("-")) {
    //         result = minus(splitted[0],splitted[1]);
            
    //     } else if (onDisplay.includes("x")) {
    //         result=  multiply(splitted[0],splitted[1]);
            
    //     } else if (onDisplay.includes("/")) {
    //         result =  divide(splitted[0],splitted[1]);
            
    //     } 
    //     display.value += result;
    if (splitted.length === 0 || operators.length === 0) {
        // console.log(splitted)
        // console.log(splitted.length)
        display.value = "ERROR";

    } else {
    
        for (let i = 0; i < operators.length; i++) {
            if (operators[i] === "+") {
                result = Math.round(add(splitted[0],splitted[1]) * 100) / 100;
                splitted.splice(0,2,result);
            } else if (operators[i] === "-") {
                result = minus(splitted[0],splitted[1]);
                splitted.splice(0,2,result);
            } else if (operators[i] === "x") {
                result = multiply(splitted[0],splitted[1]);
                splitted.splice(0,2,result);
            } else if (operators[i] === "/") {
                result = divide(splitted[0],splitted[1]);
                splitted.splice(0,2,result);
            } else if (operators[i] === "%") {
                result = persentage(splitted[0]);
                splitted.splice(0,2,result);
                console.log(result)
    // gotta figure out how to do percentage correctly;
                }
            console.log(result) 
            console.log(splitted)
        }
        display.value = result ;
    }
}
//clear function 
const clear = function() {
    onDisplay = [];
    display.value = "";
}

//backspace function 
const backSpace = function() {
    onDisplay.pop();
    display.value = display.value.slice(0,-1);
    console.log(onDisplay);
    console.log(display.value)

}

//create variable 
let onDisplay = [];
const display = document.querySelector(".screen");
const div = document.querySelector(".container");
const main = document.querySelector("main");
const btns = document.querySelector(".buttons");

const content = "=.0+321-654x987/%⌫C";
let splitCont = content.split("");
splitCont.reverse();
let pixel = (300/4)+ "px";

//create buttons 
const makeBtn = function(num) {
    for (let i = 0; i < num; i++ ) {
        let btn = document.createElement("button");
        btn.classList.add("btn");
        btn.setAttribute("id","btn"+i);
        btn.textContent = (splitCont[i]);
        if (i === 18) {
            btn.style.width = "160px"
        } else {
            btn.style.width = pixel;
        }
        
        btn.style.height= pixel;
        btns.appendChild(btn);
        
    }
}

makeBtn(19)
//variable f"\r\n"or buttons
let btn = btns.querySelectorAll(".btn");
// transform node list to array
let arr = Array.from(btn);
arr.map((item)=> {
    item.addEventListener("click", function(e) {
        if (e.target.id === "btn0") {
            console.log("clear funciton");
            // console.log(display)
            clear();
        } else if (e.target.id === "btn1") {
            backSpace();
            console.log("backspace function");
        } else if (e.target.id === "btn18") {
            display.value += "\r\n"+ e.target.textContent ;
            execute();
            
            // console.log(e.target.textContent)
            // line break 
            // display.textContent += "\r\n";
            // onDisplay = [];
            console.log(onDisplay);
            // clear the ondisplay arr 

            
        } else {
            onDisplay[onDisplay.length] = e.target.textContent;
            display.value += e.target.textContent;
            console.log(e.target.textContent);
        }
    })
})
