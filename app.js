const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 6], ['bags', 2],['pants',3]],
  giftcardBalance: 149.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
 return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});
