let year = Number(prompt("Nhập năm bạn cần xác nhận :"));

if (year % 4 === 0 && year % 100 !== 0 || year % 100 && year % 400) {
    alert("Là năm nhuận");
}  else {
    alert(" Không phải NĂM NHUẬN");
}