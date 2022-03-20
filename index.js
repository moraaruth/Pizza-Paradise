$(document).ready(function () {
    $("#buy").click(function () {

        var sizeOfPizza = $("#inlineFormCustomSelect1 option:selected").text();
        var toppingsOfPizza = $("#inlineFormCustomSelect2 option:selected").text();
        var crustOfPizza = $("#inlineFormCustomSelect3 option:selected").text();
        var total = (sizeOfPizza + toppingsOfPizza + crustOfPizza);


        alert("value:" + total);













    });
});



