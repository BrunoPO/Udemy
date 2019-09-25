class Item{
  constructor(name, price){
    this.name = name;
    this._price = price;
  }
  
  getPrice(){
    return this._price;
  }
  
  setPrice(price){
    this._price = price;
  }
}

class PurchasebleItem extends Item {
  constructor(name, price){
    super(name, price);
    this.taxed = false;
  }
  getPrice(){
    var price = this._price;
    price     = (price < 0) ? 0 : price;
    price     += (this.taxed) ? price * 0.3 : 0;
    return price;
  }
}

class Stock{
  constructor(acceptableType){
    this._itens = []
    this.acceptableType = acceptableType
  }
  add(item){
    if(this.acceptableType && item instanceof (this.acceptableType)){
      this._itens.push(item)
    }
  }
}

class Cart extends Stock{
  constructor(){
    super(PurchasebleItem)
  }
}

class UserPurchases extends Stock{
  constructor(){
    super(PurchasebleItem)
  }
}

// Amazon shopping
const user = {
  name: 'Kim',
  active: true,
  cart: new Cart(),
  purchases: new UserPurchases()
}



var arroz = new PurchasebleItem('Arroz',12);
arroz.taxed = false
arroz.getPrice()

user.cart.add(arroz)
user.cart


//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.