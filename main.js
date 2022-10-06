var result = document.getElementById("display");

var calculate = (number) => {
    result.value += number;
}

var equal = () => {
   try {
       result.value = eval (result.value);
   }
   catch (error) {
       result.value = "INVALID INPUT";
   }
}

function clr () {
    result.value = " ";
}

function dlt() {
    result.value = result.value.slice(0, -1);
}