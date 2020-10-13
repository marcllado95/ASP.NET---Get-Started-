var baseURI = "https://localhost:44317/"


function addEmployee() {
    var name = document.getElementById("fname").value;
    var surname = document.getElementById("fsurname").value;
    var salary = parseInt(document.getElementById("fsalary").value);  // parseInt para convertir string a int
    var job = document.getElementById("fjob").value;

    var newEmployee = {Name: name, Surname:surname, Salary:salary, Job:job};

    $("ol").append("<li>Appended item</li>");

    $.ajax({
        type: "POST",
        url: baseURI + "api/Employees",
        data: JSON.stringify(newEmployee),
        contentType: 'application/json',
        success: function (response) {
            alert ("post ok");
        },
        error: function (error) {
            console.log(error);        //console.log(error) especifica el error en la consola 
            alert("hay un problema")
        },
        dataType: "json"
    });
}


function getAllEmployee() {

    $.ajax({
        type: "GET",
        url: baseURI + "api/Employees",
        success: function (response) {
            var pTest = document.getElementById("employeeList");

            if (response.length > 0) {
                pTest.forEach(Employee => {
                    $( "body" )
                    .append("Name: " + Employee.name )
                    .append("Surname: " + Employee.surname )
                    .append("Salary: " + Employee.salary )
                    .append("Job: " + Employee.job );
                    
                });
                pTest.outerText = JSON.stringify(response);


                alert("bien");
            } else {
                pTest.outerText = "No tienes ningún empleado por el momento";
                alert("La lista está vacia");
            }
        },
        error: function (error) {
            alert("hay un problema")
        },
        dataType: "json"
    });

}

function deleteRecord() {

    var EmployeeId = $(this).data("model-id");

    $.ajax({
        type: "DELETE",
        url: baseURL + "api/Employees",
        success: function (response) {

                alert("delete ok");
        },
        error: function (error) {
            alert("hay un problema en delete")
        },
        dataType: "json"
    });
}