const number = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const output = document.querySelector("#output");

convertBtn.addEventListener("click", ConvertertoRoman);
number.addEventListener("keydown", function(event){
      if (event.key === "Enter") {
        ConvertertoRoman();
      }
    });

const RomanNum = Num => {
    let Roman = "";
    switch (Math.floor(Num / 1000)){
        case 1: Roman += "M"; break;
        case 2: Roman += "MM"; break;
        case 3: Roman += "MMM"; break;
    }
    switch (Math.floor(Num / 100) % 10){
        case 1: Roman += "C"; break;
        case 2: Roman += "CC"; break;
        case 3: Roman += "CCC"; break;
        case 4: Roman += "CD"; break;
        case 5: Roman += "D"; break;
        case 6: Roman += "DC"; break;
        case 7: Roman += "DCC"; break;
        case 8: Roman += "DCCC"; break;
        case 9: Roman += "CM"; break;
    }
    switch (Math.floor(Num / 10) % 10){
        case 1: Roman += "X"; break;
        case 2: Roman += "XX"; break;
        case 3: Roman += "XXX"; break;
        case 4: Roman += "XL"; break;
        case 5: Roman += "L"; break;
        case 6: Roman += "LX"; break;
        case 7: Roman += "LXX"; break;
        case 8: Roman += "LXXX"; break;
        case 9: Roman += "XC"; break;
    }
    switch (Num % 10){
        case 1: Roman = Roman + "I"; break;
        case 2: Roman = Roman + "II"; break;
        case 3: Roman = Roman + "III"; break;
        case 4: Roman = Roman + "IV"; break;
        case 5: Roman = Roman + "V"; break;
        case 6: Roman = Roman + "VI"; break;
        case 7: Roman = Roman + "VII"; break;
        case 8: Roman = Roman + "VIII"; break;
        case 9: Roman = Roman + "IX"; break;
    }
    return Roman;
}

function ConvertertoRoman() {
    const Num = parseInt(number.value.replace(/[\s]/g,''));
    if(Num) {
        if(Num < 0){
            output.innerText = "Please enter a number greater than or equal to 1";
        } else if(Num > 3999) {
            output.innerText = "Please enter a number less than or equal to 3999";
        } else {
            output.innerText = RomanNum(Num);
        }        
    }
    else{
        output.innerText = "Please enter a valid number";
    }
}
