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

const date = new Date(2023, 0, 0, 0, 0, 0);

describe("BankAccount", () => {
  beforeEach(() => {
    mockDate.advanceTo(date);
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
        date: new Date(date), 
        debit: 100, 
        balance: 100
      },
      { 
        date: new Date(date), 
        credit: 50, 
        balance: 50,
      }
    ]);
  });

  it('returns account users bank statement', () => {
    bankAccount.printStatement();
    expect(bankStatement.print).toHaveBeenCalledTimes(1);
  });
});