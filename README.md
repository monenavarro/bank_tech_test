# 💸 Bank Tech Test (in JavaScript) 💸

A sample tech test to practice maintaining high code quality and processes.
This program is a command line tool. 

### *Specified  Requirements* 
* *You should be able to interact with the your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)*
* *Deposits, withdrawal.*
* *Account statement (date, amount, balance) printing.*
* *Data can be kept in memory (it doesn't need to be stored to a database or anything).*

### *Acceptance criteria*

*Given a client makes a deposit of 1000 on 10-01-2012 And a deposit of 2000 on 13-01-2012 And a withdrawal of 500 on 14-01-2012 When she prints her bank statement Then she would see:*
```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Instructions 

## 🎩 User Stories
```
As a Bank Manager,
To ensure we only take customers money,
I want new accounts to have a starting balance of 0.

As a Customer,
So that I can check how much money I have to spend,
I need to have a bank balance.

As a Customer,
So that I can spend my money,
I need to deposit money into my bank account first.

As a Customer,
So that I can spend my money,
I need to be able to make withdrawals from my bank account.

As a Customer,
So that I can check my transactions match what my bank has recorded,
I need to see a printed bank statement.

As a client,
So I can review my bank statement efficiently,
I want statement transactions to be listed by date, from newest to oldest.
```