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
    this.balance += num;
    this.transactions.push({
      date: new Date().toLocaleDateString("en-UK"),
      debit: num,
      balance: this.balance
    });
  }

  withdraw(num) {
    this.balance -= num;
    this.transactions.push({
      date: new Date().toLocaleDateString("en-UK"),
      credit: num,
      balance: this.balance
    });  
  }

}

module.exports = BankAccount;