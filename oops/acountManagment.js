class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
      this.accountNumber = accountNumber;
      this.accountHolderName = accountHolderName;
      this.balance = balance;
    }
    deposit(amount) {
      this.balance += amount;
      console.log(`Amount $${amount} deposited into account ${this.accountNumber}.`);
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Amount $${amount} withdrawn from account ${this.accountNumber}.`);
      } else {
        console.log(`Insufficient balance in account ${this.accountNumber}.`);
      }
    }
  
    transfer(amount, recipientAccount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        recipientAccount.deposit(amount);
        console.log(`Amount $${amount} transferred from account ${this.accountNumber} to account ${recipientAccount.accountNumber}.`);
      } else {
        console.log(`Insufficient balance in account ${this.accountNumber} for transfer.`);
      }
    }
  
    displayBalance() {
      console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
    }
  }
  
  const account1 = new BankAccount('SB-012', 'Karishma Hedy', 2000);
  const account2 = new BankAccount('SB-019', 'Phokas Intan', 3000);
  
  account1.displayBalance(); 
  account2.displayBalance(); 

  account1.deposit(500); 
  account1.displayBalance(); 
  
  account1.withdraw(200); 
  account1.displayBalance(); 
  
  account1.transfer(700, account2);
  account1.displayBalance(); 
  account2.displayBalance();