const createStatementData = require('./createStatementData');

exports.printTheBillText = function (invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {

  let result = `Statement for ${data.customer}\n`;
  
  for (let perf of data.performances) {

    // print line for this order
    result += `  ${perf.play.name}: ${format(perf.amount / 100, "USD")} (${
      perf.audience
    } seats)\n`;
  }
  result += `Amount owed is ${format(data.totalAmount / 100, "USD")}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
  return result;

}

function format(aNumber, aCurrency) {

  switch (aCurrency) {
    case "USD":
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: aCurrency,
        minimumFractionDigits: 2,
      }).format(aNumber);
  
    default:
      break;
  }
}