const BankAccount = require('../src/BankAccount');

describe("BankAccount", () => {

  describe("Balance", () => {
    it('should display the balance of a customer bank account', () => {
        bankAccount = new BankAccount();
        expect(bankAccount.balance).toEqual(0);
    })
  })
})