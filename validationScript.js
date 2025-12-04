    // JavaScript code for form validation
const myForm = document.getElementById("myForm")

	// Prevent form from submitting
myForm.addEventListener("submit", function(event) {
    event.preventDefault();

      // Retrieve the input field value
    const inputField = document.getElementById("inputField");
    const inputValue = inputField.value.trim();

      // Regular expression pattern for alphanumeric input
    const regex = /^[a-zA-Z0-9]+$/;


      // Check if the input value matches the pattern
    if (regex.test(inputValue)) {
         
        // Valid input: display confirmation and submit the form
      alert("Confirmed! You've submitted a form with a valid input.")

        // Invalid input: display error message
  } else {
      alert("Error: You must use letters and numbers only.")
  }
});

console.log("myForm")