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
 
function Pizza (flavor,size,crust,toppings){
    this.flavor = flavor;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
};

Pizza.prototype.order = function() {
    return "You have made an order of " + this.flavor + " of " + this.size + " made of " + this.crust + " and " + this.toppings
}

function Cost (price,quantity,delivery,toppings,crust) {
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
    this.toppings = toppings;
    this.crust = crust;
};

Cost.prototype.totalCost = function () {
    return (this.price + this.delivery + this.toppings + this.crust) * this.quantity 
};

var sizeCost = [1050, 750, 500];
var transport = [0, 250];
var crustPrices = [100,150,280]
var toppingsCost = [80,80,80,80]
var toppingsNames = ["Tomato", "Mushroom", "Green pepper", "Onion"]
var crustNames = ["Thin crust", "Thick crust", "Custom crust"]
$ (document).ready(function(){
    $('form#mine').submit(function (event) {
        event.preventDefault()
var newflavour=parseInt($('flavour').val());
var newSize = parseInt($('size').val());
var newCrust =parseInt( $('crust').val());
var newToppings =$('toppings').val();
var delivery=parseInt($('delivery').val());
var newQuantity=$('quantity').val();
var newPrice = sizeCost[newSize-1];
var newDelivery = transport[delivery-1]
var newOrder = new Pizza(newflavour,newSize,newCrust,newToppings);
var newTotal = new Cost(newPrice,newQuantity,newDelivery);
if(delivery===1) {
    alert(newOrder.order());
    alert("your bill is:" + newTotal.totalCost());
}
else if (delivery===2) { 
    prompt("please enter destination");
    alert("Delivery fee is 250 ")
    alert(newOrder.order());
    alert(newTotal.totalCost());
}
});
});