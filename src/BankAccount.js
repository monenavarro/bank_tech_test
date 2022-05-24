const BankStatement = require('../src/BankStatement');

class BankAccount {
  constructor(bankStatement = new BankStatement()) {
    this.bankStatement = bankStatement;
    this.transactions = [];  
  }

  performTransaction(num) {
    this.#insufficientFunds(num)
    const sort = num > 0 ? "debit" : "credit";
    this.#registerTransaction(sort, num);
  }

  printStatement() {
    console.log(this.bankStatement.print(this.transactions));
  }

  #registerTransaction(sort, num) {
    this.transactions.push({
      currentDate: new Date(),
      [sort]: Math.abs(num),
      balance: this.#totalBalance(num),
    });
  }

  #totalBalance(num) {
    if (this.transactions.length === 0) return num;
    return this.transactions[this.transactions.length - 1].balance + num;
  }

  #insufficientFunds(num) {
    if (num < 0 && this.#totalBalance(num) < -num)
    throw "ERROR! Transaction denied due to insufficient funds.";
  }
}

module.exports = BankAccount;