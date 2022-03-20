$(document).ready(function () {
    $("#buy").click(function () {

        var sizeOfPizza = $("#inlineFormCustomSelect1 option:selected").val();
        var toppingsOfPizza = $("#inlineFormCustomSelect2 option:selected").val();
        var crustOfPizza = $("#inlineFormCustomSelect3 option:selected").val();
        var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);


        $("#pizzselect").html($("#inlineFormCustomSelect1 option:selected").text() + "-" + sizeOfPizza);
        $("#toppselect").html($("#inlineFormCustomSelect2 option:selected").text() + "-" + toppingsOfPizza);
        $("#crusttselect").html($("#inlineFormCustomSelect3 option:selected").text() + "-" + crustOfPizza);
        $("#total").html(total);


    });

});






