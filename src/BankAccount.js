class BankAccount {
  constructor() {
    this.balance = 0
    this.transactions = [];
  }

  displayBalance() {
    return this.balance;
  }

  displayTransactions() {
    return this.transactions;
  }

  performTransaction(sum) {
    const sort = (sum > 0) ? "debit" : "credit";
    this.balance += sum
    this.processTransaction(sort, sum);
  }

  processTransaction(sort, sum) {
    this.transactions.push({
      date: new Date().toLocaleDateString("en-UK"),
      [`${sort}`]: Math.abs(sum),
      balance: this.balance
    });
  }
}

module.exports = BankAccount;