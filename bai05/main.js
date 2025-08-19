let weight = Number(prompt("Nhập số cân nặng (kg) của bạn: "));
let height = Number(prompt("Nhập số chiều cao (m) của bạn: "));

let indexBmi = weight / (height * height) ;


if (indexBmi < 18.5) {
    alert("Bạn thuộc nhóm người thấp - gầy");
} else if (indexBmi >= 18.5 && indexBmi <= 24.9) {
    alert("Bạn thuộc nhóm người bình thường");
} else if (indexBmi >= 25) {
    alert("Bạn thuộc nhóm người thừa cân");
} else if (indexBmi > 25 && indexBmi <= 29.9) {
    alert("Bạn đang thuộc nhóm tiền béo phì");
} else if (indexBmi >= 30 && indexBmi <=34.9 ) {
    alert("Bạn đang thuộc nhóm béo hì độ I");
} else if (indexBmi >= 35 && indexBmi <= 39.9) {
    alert("Bạn đang thuộc nhóm béo phì độ II");
} else {
    alert("Bạn đang thuộc nhóm béo phì độ III");
}