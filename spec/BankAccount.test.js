const BankAccount = require('../src/BankAccount');
const BankStatement = require('../src/BankStatement');
const mockDate = require("jest-date-mock");

const mockBankStatement = jest.fn();

jest.mock("../src/BankStatement", () => {
  return jest.fn().mockImplementation(() => {
    return {
      print: mockBankStatement,
    };
  });
});

const currentDate = new Date();

describe("BankAccount", () => {
  beforeEach(() => {
    mockDate.advanceTo(currentDate);
  });

  const bankAccount = new BankAccount();
  const bankStatement = new BankStatement();

  it('should display the balance of a customer bank account', () => {
    expect(bankAccount.transactions).toEqual([]);
  });

  it('should allow deposits to be made into the bank account', () => {
    bankAccount.performTransaction(100);
    expect(bankAccount.transactions[0].balance).toBe(100);
  });

  it('should let customers withdraw money from their account', () => {
    bankAccount.performTransaction(-50);
    expect(bankAccount.transactions[1].balance).toBe(50);
  });

  it('logs account transactions with the time and balance', () => {
    expect(bankAccount.transactions).toEqual([
      { 
        currentDate: new Date(currentDate), 
        debit: 100, 
        balance: 100
      },
      { 
        currentDate: new Date(currentDate), 
        credit: 50, 
        balance: 50,
      }
    ]);
  });

  it('returns account users bank statement', () => {
    bankAccount.printBankStatement();
    expect(bankStatement.print).toHaveBeenCalledTimes(1);
  });

  it("flags an error when a user attempts to withdraw more than what the current account balance is", () => {
    expect(() => {
      bankAccount.performTransaction(-70);
    })
    .toThrowError("ERROR! Transaction denied due to insufficient funds.");
  });
});