const BankStatement = require('../src/BankStatement');

describe("Bank Statement", () => {
  const bankStatement = new BankStatement();

  it ("returns a bank statement", () => {
    const input1 = { date: "01/09/2022", debit: 5000, balance: 5000};
    const input2 = { date: "23/03/2023", debit: 1000, balance: 6000};
    const input3 = { date: "07/07/2025", credit: 200, balance: 5800};

    const statementInput = [input1, input2, input3];

    expect(bankStatement.print(statementInput)).toEqual(
      "date || credit || debit || balance\n07/07/2025 ||  || 200.00 || 5800.00\n23/03/2023 || 1000.00 ||  || 6000.00\n01/09/2022 || 5000.00 ||  || 5000.00"
    );
  });
});