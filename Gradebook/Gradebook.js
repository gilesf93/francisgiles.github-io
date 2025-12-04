function fetchGradeData() {
    console.log("Fetching grade data...");

    let xhr = new XMLHttpRequest();
    let apiRoute = "/api/grades";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            populateGradebook(JSON.parse(xhr.responseText));
        }
    };

    xhr.open("GET", apiRoute, true);
    xhr.send();
}

function populateGradebook(data) {
    console.log("Populating gradebook with data:", data);

    let tableElm = document.getElementById("gradebook").getElementsByTagName('tbody')[0];

    data.forEach(function (assignment) {
        let row = document.createElement("tr");

        let nameCol = document.createElement("td");
        nameCol.appendChild(
            document.createTextNode(assignment.last_name + ", " + assignment.first_name)
        );

        let gradeCol = document.createElement("td");
        gradeCol.appendChild(
            document.createTextNode(assignment.total_grade)
        );

        row.appendChild(nameCol);
        row.appendChild(gradeCol);
        // Add empty cells for other assignments if needed
        row.appendChild(document.createElement("td"));
        row.appendChild(document.createElement("td"));

        tableElm.appendChild(row);
    });
}

// ✅ Call on load
window.onload = fetchGradeData;
