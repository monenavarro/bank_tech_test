const BankAccount = require('../src/BankAccount');

describe("BankAccount", () => {
  const bankAccount = new BankAccount();

  jest.useFakeTimers().setSystemTime(new Date("2050-05-05"));

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
        { date: "05/05/2050", debit: 100, balance: 100},
        { date: "05/05/2050", credit: 50, balance: 50},
      ]);
    });
  });
})