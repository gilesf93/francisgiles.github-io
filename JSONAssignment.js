var form =  {
"firstName": "",
"lastName" : "",
"course": "",
"section": "",
"role": ""
};


document.getElementById("jsonPlace").addEventListener("click", function() {
    form.firstName = document.getElementById("firstName").value;
    form.lastName = document.getElementById("lastName").value;
    form.course = document.getElementById("course").value;
    form.section = document.getElementById("section").value;
    form.role = document.getElementById("role").value;

    console.log("Person object:");
    console.log(form)
    console.log("JSON format:");
    console.log(JSON.stringify(form));
});