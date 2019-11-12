function validateForm() {
    var name =  document.getElementById("name");
    var message=  document.getElementById("message");
    var email=  document.getElementById("email");
    if (name="" || email == "" || message == ""){
        alert("please enter you details")
    }
    else {
        alert ("Thank you for contacting us ")
    }
    event.preventDefault();

}
 

function Order(type, size, crust, topping) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

Order.prototype.new= function () {
    return this.type + " with the crust of " + this.crust + " and " + this.topping + " as topping.";
};

function Total(price, quantity, delivery) {
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
}

Total.prototype.finalTotal = function () {
    return this.price * this.quantity + this.delivery;
};


var sizePrice = [1500, 1000, 800]
var deliverPrices = [0, 200];
$(document).ready(function () {
    $('#mine').submit(function (event) {
        var pizzaType = $('#type').val();
        var pizzaSize = parseInt($('#size').val());
        var pizzaCrust = $('#crust').val();
        var pizzaTop = $('#top').val();
        var pizzaQty = parseInt($('#qty').val());
        var pizzaPick = parseInt($('#pick').val());
        var price = sizePrice[pizzaSize - 1];
        var DeliveryCost = deliverPrices[pizzaPick - 1];



        newOrder = new Order(pizzaType, pizzaSize, pizzaCrust, pizzaTop);
        newTotal = new Total(price, pizzaQty, DeliveryCost);
        if (pizzaPick===1){
        alert("Your oder is: " + newOrder.new() + ".continue to see your total bill");
        alert("your bill is: " + newTotal.finalTotal());
        }else{
            if(pizzaPick===2){
                prompt("Enter where you want your pizza to be delivered");
                alert("Your oder is: " + newOrder.new() + ".continue to see your total bill");
                alert("your bill is: " + newTotal.finalTotal());
            }
        }
        event.preventDefault();

    });
});









