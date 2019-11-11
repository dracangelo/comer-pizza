function validateForm() {
    var name =  document.getElementById('name');
    var message=  document.getElementById('email');
    var email=  document.getElementById('email');
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

function Cost (price,quantity,delivery) {
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
};

Cost.prototype.totalCost = function () {
    return this.price * this.quantity + this.delivery
};

var sizeCost = [1050, 750, 500,];
var transport = [0, 250];
$ (document).ready(function(){
    $('form#mine').submit(function (event) {
        event.preventDefault()
var newflavour=$('flavour').val();
var newSize = $('size').val();
var newCrust = $('crust').val();
var newToppings =$('toppings').val();
var delivery=$('delivery').val();
var newQuantity=$('quantity').val();
var newPrice = sizeCost[newSize-1];
var newDelivery = transport[delivery-1]
var newOrder = new order(newflavour,newSize,newCrust,newToppings);
var newTotal = new totalCost(newPrice,newQuantity,newDelivery);
if(delivery===1) {
    alert(newOrder.order());
    alert(newTotal.totalCost());
}
else if (delivery===2) { 
    prompt("please enter destination");
    alert("Delivery fee is 250 ")
    alert(newOrder.order());
    alert(newTotal.totalCost());

}
});
});