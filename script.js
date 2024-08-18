const display = document.getElementById("display");

const input = document.getElementsByClassName("number");

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value)
    }catch(error){
        display.value = "Error"
    }
}

function displayClear(){
    display.value = "";
}

function deleteinput(){
    display.value = display.value.slice(0, -1);
}