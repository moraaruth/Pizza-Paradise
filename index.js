$(document).ready(function () {

    $("#buy").click(function () {

        $("#yourorder").show();

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

$("#add").click(function () {

    var sizeOfPizza = $("#inlineFormCustomSelect1 option:selected").val();

    var toppingsOfPizza = $("#inlineFormCustomSelect2 option:selected").val();

    var crustOfPizza = $("#inlineFormCustomSelect3 option:selected").val();

    var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);

    var order = 1;

    var grandTotal = 0;


    $("#pizzselect").html($("#inlineFormCustomSelect1 option:selected").text() + " - " + sizeOfPizza);

    $("#toppselect").html($("#inlineFormCustomSelect2 option:selected").text() + " - " + toppingsOfPizza);

    $("#crusttselect").html($("#inlineFormCustomSelect3 option:selected").text() + " - " + crustOfPizza);

    $("#total").html(total);

    class Pizza {

        constructor(size, toppings, crust, total, orderNo) {

            this.size = size;

            this.toppings = toppings;

            this.crust = crust;

            this.total = total;

            this.orderNo = orderNo;
        }
    }


    $("#add").click(function () {

        var sizeOfPizza = $("#inlineFormCustomSelect1 option:selected").val();

        var toppingsOfPizza = $("#inlineFormCustomSelect2 option:selected").val();

        var crustOfPizza = $("#inlineFormCustomSelect3 option:selected").val();

        var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);

        order = order + 1;

        grandTotal = grandTotal + total;


        var newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

        var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $("#inlineFormCustomSelect1 option:selected").text()
            + " - " + newPizza.size + '</td><td id="toppselect">' + $("#inlineFormCustomSelect2 option:selected").text() + " - " + newPizza.toppings + '</td><td id="crusttselect">' + $("#inlineFormCustomSelect3 option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

        $("newPizza").append(newRow)
    });

});





$("#checkout").click(function () {

    $("#add").hide();

    $("#checkout").hide();

    $("#price").show();

    $("#totalbill").show();

    $(".location").show();

    grandTotal = grandTotal + total;

    $("#totalbill").html(grandTotal + 250);
});

$("#placeorder").click(function () {

    var location = $(".location input").val();

    $(".location").html(location + " " + ("your order will be delivered to your location, Thankyou!"))


});








