# Promises In JavaScript
*This code implements a series of asynchronous operations using Promises to simulate an order processing system for an online store. Let's break down what each function does:*

## checkInventory(order)
**This function checks if all the items in the order are in stock based on the provided order object.
It returns a Promise that resolves if all items are in stock or rejects if any item is out of stock.**

## processPayment(responseArray)
**This function processes the payment for the order.
It checks if the gift card balance (order.giftcardBalance) is enough to cover the total cost of the order.
It returns a Promise that resolves if the payment is successful or rejects if the gift card balance is insufficient.**

## shipOrder(responseArray)
**This function simulates shipping the order.
It generates a tracking number and returns a Promise that resolves with a success message containing the tracking number.**

## The Execution Flow:
**The checkInventory function is called with the order object, which contains items and a gift card balance.
If all items are in stock, the promise returned by checkInventory resolves, and it proceeds to the processPayment function.
If the payment is successful (i.e., gift card balance covers the total cost), the promise returned by processPayment resolves, and it proceeds to the shipOrder function.
Finally, the shipOrder function resolves, and the success message with the tracking number is printed to the console.
If at any point an error occurs (e.g., items are out of stock or insufficient balance), the corresponding reject is triggered, and the error message is caught by the .catch() block.**

## Summary
*The code demonstrates a chain of promises where each subsequent step (processPayment and shipOrder) depends on the successful resolution of the previous step (checkInventory). It simulates an order fulfillment process by checking inventory, processing payment, and shipping the order, handling errors at each step if necessary.*
