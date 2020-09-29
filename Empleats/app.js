
function getButton() {
    ////   $.ajax({
    //       type: "GET",
    //       url: "https://localhost:44317/api/Employees",
    //       dataType: JSON

    //   });


    $.ajax({
        type: "GET",
        url: "https://localhost:44317/api/Employees",
        success: function (response) {
            alert("ha ido bien")

        },
        error: function (error) {
            alert("hay un problema")
        },
        dataType: "json"
    });
}
//$(document).ready(function () {
//    $("button").click(function () {
//        $.get("https://localhost:44317/api/Employees", function (data, status) {
//            alert("Data: " + data + "\nStatus: " + status);
//        });
//    });
//});