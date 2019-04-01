const Item = function(Name, Quantity, UnitPrice, Total){
    this.Name = Name;
    this.Quantity = Quantity;
    this.UnitPrice = UnitPrice;
    this.Total = Total;
}
itemOne = new Item('Mangoe', 4, 2, 8);
itemTwo = new Item('Pepper', 5, 5, 25);
const cart = [];
const result = cart.push(itemOne, itemTwo);
console.log(cart);