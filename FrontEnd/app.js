var baseURI = "https://localhost:44317/"


function addEmployee() {
    var name = document.getElementById("fname").value;
    var surname = document.getElementById("fsurname").value;
    var salary = parseInt(document.getElementById("fsalary").value);  // parseInt para convertir string a int
    var job = document.getElementById("fjob").value;

    var newEmployee = { Name: name, Surname: surname, Salary: salary, Job: job };

    $("ol").append("<li>Appended item</li>");

    $.ajax({
        type: "POST",
        url: baseURI + "api/Employees",
        data: JSON.stringify(newEmployee),
        contentType: 'application/json',
        success: function (response) {
            alert("post ok");
        },
        error: function (error) {
            console.log(error);        //console.log(error) especifica el error en la consola 
            alert("hay un problema")
        },
        dataType: "json"
    });
}


function getAllEmployee() {

    $('#employeeList tbody').empty();

    

    $.ajax({
        type: "GET",
        url: baseURI + "api/Employees",
        dataType: "json",
        success: function (response) {



           
            if (response.length > 0) {

           //     $("#employeeList").remove();        //Limpiar la lista

                response.forEach(function (item) {

                    $('#employeeList').append($('<tbody>')
                        .append($('<td>').append(item.name))
                        .append($('<td>').append(item.surname))
                        .append($('<td>').append(item.job))
                        .append($('<td>').append(item.salary + ' €'))
                        
                        ) 
                        
                });


                    //  alert(item.name);                       //FICAR PROPIETATS EN MINÚSCULES!!!!
  
                //    var nom = '<p>'+ item.name + '</p></br>'
                //    var cognom = '<p>'+ item.surname + '</p></br>'
                //    var ofici = '<p>'+ item.job + '</p></br>'
                //    var sou = '<p>'+ item.salary + '</p></br>'
     
                //    var nom = item.name + '</br>';
                //    var cognom = item.surname + '</br>';
                //    var ofici = '<p>'+ item.job + '</p></br>'
                //    var sou = '<p>'+ item.salary + '</p></br>'
  
                  //var prueba = item.salary;

                    // worker =   item.name,
                    //             item.surname,
                    //             item.job,
                    //             item.salary;
                            
                    // $("#employeeList").append(x);
                    

  
               
              //      listtest.append(prueba);
                    //   $("#employeeList").append(nom);
                    //   $("#employeeList").append(cognom);
                    //   $("#employeeList").append(ofici);
                    //   $("#employeeList").append(sou);
  
                    //   var pTest = document.getElementById("employeeList");
  
                    //   pTest.outerHTML;
  
                  
                  
  

            } else {
                pTest.outerText = "No tienes ningún empleado por el momento";
                alert("La lista está vacia");
            }
        },
        error: function (error) {
            alert("hay un problema")
        },

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

