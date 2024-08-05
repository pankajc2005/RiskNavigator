/* Main Calculation */
function addNumbers() {
  var num1 = Number(document.getElementById('num1').value);
  var num2 = Number(document.getElementById('num2').value);
  var num3 = Number(document.getElementById('num3').value);
  var num4 = Number(document.getElementById('num4').value);
  var num5 = Number(document.getElementById('num5').value);
  var num6 = Number(document.getElementById('num6').value);
  var num7 = Number(document.getElementById('num7').value);

  var total = num2 + num3 + num4 + num5 + num7;
  var final = total / num1 * 100;
  var Savings = num1 - total + num6;
  var stock = num2 / num1 * 100;

  if (final < 40) {
    document.getElementById('result').innerHTML += `Low risk: <b> ${final.toFixed(2)}% </b>of income spent on expenses.<br>`;
  } else if (final < 80) {
    document.getElementById('result').innerHTML += `Medium risk: <b> ${final.toFixed(2)}% </b> of income spent on expenses.<br>`;
  } else {
    document.getElementById('result').innerHTML += `High risk: <b> ${final.toFixed(2)}% </b> of income spent on expenses.<br>`;
  }

  if (stock > 25) {
    document.getElementById('result').innerHTML += `You should Invest upto 25% on Stock or Mutual Funds of your total income, But you are Investing <b> ${stock.toFixed(2)}% </b> of income.<br>`;
  } else if (stock < 15) {
    document.getElementById('result').innerHTML += `You should Invest atleast <b> 15% </b>of your total income on Stocks or Mutual Funds, We recommend to Invest in <b>BSE SENSEX</b>.*<br>`;
  }
  document.getElementById('result').style.display = "block";
  document.getElementById('result').innerHTML += `Your Savings are <b> ${Savings.toFixed(2)} </b> <br>`;



  /* Pie Chart */
  const xValues = ["Stocks, Mutual funds", "Food & Grocery, Utilities, Entertainment, Personal care, Education", "Home Rent", "Loan, Insurence & Emi's", "Saving, FD", "Other Expences"];
  const yValues = [num2, num3, num4, num5, num6, num7];
  const barColors = [
    "#b91d47",
    "#00aba9",
    "#2b5797",
    "#e8c3b9",
    "#1e7145"
  ];

  new Chart("myChart", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Chart of all Spendings"
      }
    }
  });
}