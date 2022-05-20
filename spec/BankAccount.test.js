const BankAccount = require('../src/BankAccount');

describe("BankAccount", () => {

  describe("Balance", () => {
    it('should display the balance of a customer bank account', () => {
        bankAccount = new BankAccount();
        expect(bankAccount.balance).toEqual(0);
    });

    it('should allow deposits to be made into the bank account', () => {
      bankAccount = new BankAccount();
      bankAccount.deposit(100);
      expect(bankAccount.displayBalance()).toBe(100);
      expect(bankAccount.displayTransactions()).toEqual([100]);
    });

    it('should let customers withdraw money from their account', () => {
      bankAccount = new BankAccount();
      bankAccount.deposit(100);
      bankAccount.withdraw(50);
      expect(bankAccount.displayBalance()).toBe(50);
      expect(bankAccount.displayTransactions()).toEqual([100, -50]);
    });
  })
})