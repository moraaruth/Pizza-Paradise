$(document).ready(function () {

    $("#buy").click(function () {

        $("#yourorder").show();

        var sizeOfPizza = $("#inlineFormCustomSelect1 option:selected").val();

        var toppingsOfPizza = $("#inlineFormCustomSelect2 option:selected").val();

        var crustOfPizza = $("#inlineFormCustomSelect3 option:selected").val();

        var addToppingsOfPizza = $("#topp1 input").val();

        var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza) + parseInt(addToppingsOfPizza);

        var order = 1;

        var grandTotal = 0;


        $("#pizzselect").html($("#inlineFormCustomSelect1 option:selected").text() + "-" + sizeOfPizza);

        $("#toppselect").html($("#inlineFormCustomSelect2 option:selected").text() + "-" + toppingsOfPizza);

        $("#crusttselect").html($("#inlineFormCustomSelect3 option:selected").text() + "-" + crustOfPizza);

        $("#addToppselect").html($("#topp1 input").text() + "-" + addToppingsOfPizza);

        $("#total").html(total);





        class paradise {

            constructor(size, crust, toppings, addToppings, total, orderNo) {

                this.size = size;

                this.crust = crust;

                this.toppings = toppings;

                this.addToppings = addToppings

                this.total = total;

                this.orderNo = orderNo;
            }
        }


        $("#add").click(function () {

            var sizeOfPizza = $("#inlineFormCustomSelect1 option:selected").val();

            var toppingsOfPizza = $("#inlineFormCustomSelect2 option:selected").val();

            var crustOfPizza = $("#inlineFormCustomSelect3 option:selected").val();

            var addToppingsOfPizza = $("#topp1 input").val();

            var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza) + parseInt(addToppingsOfPizza);

            order = order + 1;

            grandTotal = grandTotal + total;


            var newParadise = new paradise(sizeOfPizza, toppingsOfPizza, crustOfPizza, addToppingsOfPizza, total, order);

            var newRow = '<tr><th scope="row">' + newParadise.orderNo + '</th><td id="pizzselect">' + $("#inlineFormCustomSelect1 option:selected").text() +
                " - " + newParadise.size + '</td><td id="toppselect">' + $("#inlineFormCustomSelect2 option:selected").text() + " - " + newParadise.toppings +
                '</td><td id="crusttselect">' + $("#inlineFormCustomSelect3 option:selected").text() + " - " + newParadise.crust + '</td><td id="addToppselect">' + $("#topp1 input").text() + " - " + newParadise.addToppings +
                '</td><td id="total">' + newParadise.total + '</td></tr>'

            $("#paradise").append(newRow)
        });

    });

});



$("#checkout").click(function () {

    $("#add").hide();

    $("#checkout").hide();

    $("#price").show();

    $(".location").show();

    grandTotal = grandTotal + total;

    $("#totalbill").html(grandTotal + 250);
});

$("#placeorder").click(function () {

    var location = $(".location input").val();

    $(".location").html(location + " " + ("your order will be delivered to your location, Thankyou!"))

    $("#totalbill").show();




});