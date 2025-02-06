document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("attendance-form");
    const select = document.getElementById("roll");

    // Generate Roll Numbers Dynamically (1 to 80)
    for (let i = 1; i <= 80; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        select.appendChild(option);
    }

    // Form Submission Handling
    form.addEventListener("submit", function (event) {
        const selectedRollNo = select.value;

        // Prevent Submission if No Roll Number Selected
        if (!selectedRollNo) {
            alert("Please select a Roll Number before submitting.");
            event.preventDefault(); // Stops form submission
        } else {
            alert(`Attendance Marked for Roll No: ${selectedRollNo}`);
            form.reset(); // Resets the form after submission
        }
    });
});
