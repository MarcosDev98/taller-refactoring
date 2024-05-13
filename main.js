var fs = require('fs');
var dataPlays = fs.readFileSync('plays.json', 'utf-8');
var plays = JSON.parse(dataPlays);
var dataInvoices = fs.readFileSync('invoices.json', 'utf-8');
var invoices = JSON.parse(dataInvoices);
var statement = require('./statement');

for (let invoice of invoices) {
    console.log(statement.printTheBillText(invoice, plays));
}
