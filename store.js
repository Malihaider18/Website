if (!sessionStorage.getItem('firstLoad')) {
  sessionStorage.setItem('firstLoad', true);
  window.location.reload();
}

$(document).ready(function() {
  $("table").append("<tfoot><tr><td colspan='1'></td><td style='text-align: right;'>Total:</td><td>$" + calculateTotal() + "</td></tr></tfoot>");
});

var prices = [];
var items = [];

function add(src, alt, price) {
  var img = document.createElement("img");
  img.src = src;
  img.width = 100;
  img.height = 100;
  img.alt = alt;

  var imgCell = document.createElement("td");
  imgCell.appendChild(img);

  var row = document.createElement("tr");
  row.appendChild(imgCell);

  var nameCell = document.createElement("td");
  nameCell.textContent = alt;
  row.appendChild(nameCell);
  
  var priceCell = document.createElement("td");
  priceCell.textContent = "$" + price;
  row.appendChild(priceCell);

  document.querySelector("table").appendChild(row);
  prices.push(price); // add price to the prices array
  items.push(alt); // add item to the items array
  
  var totalCell = document.querySelector("tfoot td:last-child");
  totalCell.textContent = "$" + calculateTotal(); // update the total price in the footer
}

function calculateTotal() {
  var total = 0;
  for (var i = 0; i < prices.length; i++) {
    total = total + prices[i];
  }
  return total.toFixed(2); // round to 2 decimal places
}


function purchase() {
  var message = "Items Purchased:\n\n";
  for (var i = 0; i < items.length; i++) {
    message += items[i] + ": $" + prices[i] + "\n";
  }
  message += "\nTotal Cost: $" + calculateTotal();
  alert(message);
  window.location.href = "store.html";
}