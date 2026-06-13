// data section; start
const orders = [
  { orderId: "ORD-001", userId: "U1", customerName: "Alice Smith", amount: 50.00, status: "completed" },
  { orderId: "ORD-002", userId: "U2", customerName: "Bob Jones", amount: 120.50, status: "completed" },
  { orderId: "ORD-003", userId: "U1", customerName: "Alice Smith", amount: 75.20, status: "completed" },
  { orderId: "ORD-004", userId: "U3", customerName: "Charlie Brown", amount: 200.00, status: "cancelled" },
  { orderId: "ORD-005", userId: "U2", customerName: "Bob Jones", amount: 45.00, status: "pending" },
  { orderId: "ORD-006", userId: "U4", customerName: "Diana Prince", amount: 300.00, status: "completed" },
  { orderId: "ORD-007", userId: "U1", customerName: "Alice Smith", amount: 15.00, status: "completed" }
];
//data section; End
//==========================================================================================//
//function section; Start

function getTopSpenders(orders, minAmount){
  let userFilter = orders
    .filter((member) => member.status == "completed" && member.amount >= minAmount)
    //.reduce(function(acc, user){}

  
  return userFilter

}

// function section; End
//==========================================================================================//

// program section

getTopSpenders(orders, 10)