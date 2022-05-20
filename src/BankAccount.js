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

  deposit(num) {
    this.transactions.push(num);
    this.balance += num;
  }

}

module.exports = BankAccount;