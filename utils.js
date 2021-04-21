// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return 5
}

const perimeter = (w, h) => {
  return 6
}

const circleArea = r => {
  return 8
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
  return shoppingCart
}

const addItemToCart = (item) => {
  shoppingCart.push(item)
  return {item}
}

const getNumItemsInCart = () => {
  shoppingCart.length
}

const removeItemFromCart = (item) => {
  for( var i = 0; i < shoppingCart.length; i++){ 
    if ( shoppingCart[i] === 5) { 
      shoppingCart.splice(i, 1); 
    }
}
}

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart
}
