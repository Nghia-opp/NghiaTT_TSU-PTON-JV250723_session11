let numberAa = +prompt("Mời bạn nhập vào số a :");
let numberBb = +prompt("Mời bạn nhập vào số b :");

let number = prompt("Mời bạn nhập các phép tính (+, -, *, /)");


switch (number) {
    case "+" :
        alert("Kết quả phép tính trên: "+ (numberAa + numberBb));
        break;
    case "-" :
        alert("Kết quả phép tính trên: "+ (numberAa - numberBb));
        break;
    case "*" :
        alert("Kết quả phép tính trên: "+ (numberAa * numberBb));
        break;
    case "/" :
        if (numberBb !== 0) {
            alert("Kết quả phép tính trên: "+ (numberAa / numberBb));
        } else {
            alert("Phép tính không thực hiện được !!!");
        }
        break;
    default:
        alert("Cần tính toán lại kết quả !!!");
}