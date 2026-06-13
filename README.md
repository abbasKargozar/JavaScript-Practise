# Top Spenders Analyzer

## Problem Description
In an e-commerce platform, we need to analyze order data to identify our most valuable customers. 
Write a function `getTopSpenders(orders, minAmount)` that takes an array of order objects and a minimum amount threshold, and returns an array of the top customers.

## Rules & Constraints
1. **Filter by Status:** Only calculate orders that have a status of `"completed"`. Ignore `"pending"` and `"cancelled"` orders.
2. **Aggregate Data:** Sum up the total amount spent by each individual user.
3. **Threshold:** Only include users whose total spent amount is greater than or equal to the `minAmount`.
4. **Sort Output:** The returned array must be sorted in descending order based on the `totalSpent`.
5. **Performance:** Aim for an optimal time complexity. Avoid nested loops ($O(n^2)$) by using hash maps / objects for aggregation.

## Data Structure

**Input Format (Array of Objects):**
```javascript
[
  { orderId: "ORD-001", userId: "U1", customerName: "Alice Smith", amount: 50.00, status: "completed" }
]

**Expected Output Format:**
javascript
[
  { customerName: "Diana Prince", totalSpent: 300.00 },
  { customerName: "Alice Smith", totalSpent: 140.20 },
  { customerName: "Bob Jones", totalSpent: 120.50 }
]

## Example
javascript
getTopSpenders(orders, 100);
// Returns users who spent $100 or more in total from completed orders, sorted highest to lowest.
