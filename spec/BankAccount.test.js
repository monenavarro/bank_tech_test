const BankAccount = require('../src/BankAccount');

describe("BankAccount", () => {
  const bankAccount = new BankAccount();
  const currentDate = new Date().toLocaleDateString("en-UK");

  describe("Balance", () => {
    it('should display the balance of a customer bank account', () => {
      expect(bankAccount.balance).toEqual(0);
    });

    it('should allow deposits to be made into the bank account', () => {
      bankAccount.performTransaction(100);
      expect(bankAccount.displayBalance()).toBe(100);
    });

    it('should let customers withdraw money from their account', () => {
      bankAccount.performTransaction(-50);
      expect(bankAccount.displayBalance()).toBe(50);
    });

    it('logs account transactions with the time and balance', () => {
      expect(bankAccount.displayTransactions()).toEqual([
        { date: currentDate, debit: 100, balance: 100},
        { date: currentDate, credit: 50, balance: 50},
      ]);
    });
  });
})