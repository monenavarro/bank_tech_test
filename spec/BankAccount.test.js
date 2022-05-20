const BankAccount = require('../src/BankAccount');

describe("BankAccount", () => {

  describe("Balance", () => {
    it('should display the balance of a customer bank account', () => {
        bankAccount = new BankAccount();
        expect(bankAccount.balance).toEqual(0);
    });

    it('deposits', () => {
      bankAccount = new BankAccount();
      bankAccount.deposit(100);
      expect(bankAccount.displayBalance()).toBe(100);
      expect(bankAccount.displayTransactions()).toEqual([100]);
    })
  })
})