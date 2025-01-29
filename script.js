const attendanceList = [];

document.querySelector("button").addEventListener("click", function () {
    const inputField = document.getElementById("roll-input");
    const rollNumber = inputField.value.trim();
    
    if (rollNumber) {
        attendanceList.push(rollNumber);
        console.log("Attendance List:", attendanceList);
        inputField.value = ""; // Reset input field
    } else {
        alert("Please enter a roll number!");
    }
});