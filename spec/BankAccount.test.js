const BankAccount = require('./BankAccount');

describe("BankAccount", () => {

  describe("Balance", () => {
    it('should display the balance of a customer bank account', () => {
        BankAccount = new BankAccount();
        expect(BankAccount.balance()).toEqual (0);
    })
  })
})