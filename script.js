document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculateBtn");
    const resultDiv = document.getElementById("result");

    calculateBtn.addEventListener("click", function() {
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const age = parseInt(document.getElementById("age").value);

        if (gender === "Male") {
            if (age >= 18 && age <= 35) {
                resultDiv.innerText = "Chi phí: 100€";
            } else if (age >= 36 && age <= 50) {
                resultDiv.innerText = "Chi phí: 120€";
            } else if (age >= 51 && age <= 145) {
                resultDiv.innerText = "Chi phí: 140€";
            } else {
                resultDiv.innerText = "Xin vui lòng nhập độ tuổi chính xác";
            }
        } else if (gender === "Female") {
            if (age >= 18 && age <= 35) {
                resultDiv.innerText = "Chi phí: 80€";
            } else if (age >= 36 && age <= 50) {
                resultDiv.innerText = "Chi phí: 110€";
            } else if (age >= 51 && age <= 145) {
                resultDiv.innerText = "Chi phí: 140€";
            } else {
                resultDiv.innerText = "Xin vui lòng nhập độ tuổi chính xác";
            }
        } else if (gender === "Child") {
            if (age >= 0 && age <= 17) {
                resultDiv.innerText = "Chi phí: 50€";
            } else {
                resultDiv.innerText = "Xin vui lòng nhập độ tuổi chính xác";
            }
        }
    });
});
