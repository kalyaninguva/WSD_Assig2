function reverse_String() {
    let str = document.getElementById("input_1").value;
    if(!str){
        alert("Please enter a valid string");
    }
    else{
        let output_text = "";
        for (let i = str.length - 1; i >= 0; i--) {
            output_text += str[i];
        }
        document.getElementById("output_1").textContent = output_text;
    } 
}

function check_Number(){
    let number = document.getElementById("input_2").value;
    if(!number){
        alert("Please enter a valid number");
    }
    else{
        let reversed_string = number.split("").reverse().join("");
        if(number === reversed_string){
            document.getElementById("output_2").textContent = "It is a Palindrome number";
        }
        else{
            document.getElementById("output_2").textContent = "It is not a Palindrome number";
        }
    }
}

function calculate_Bill(){
    let sub_total = Number(document.getElementById("input_3_1").value);
    let tip = Number(document.getElementById("input_3_2").value);
    if(!sub_total){
        alert("Enter the subtotal please!");
    }
    else if(!tip){
        alert("Enter some tip for the hardworkers please!");
    }
    else if(tip>100){
        alert("Tip percentage cannot be greater than 100!");
    }
    else{
        let output_3 = sub_total + (sub_total*tip)/100;
        document.getElementById("output_3").textContent = output_3;
    }
}
