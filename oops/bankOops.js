class BankAccount  {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        console.log(`A/C: ${accountNumber}`);
        console.log(`Opening Balance: ${balance}`);
    }
    deposite(amount) {
        this.balance = amount;
        console.log(`Deposite: ${amount}`);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn; ${amount}`);
        }
        else
        {
            console.log(`Want to withdrawn: ${amount}`);
            console.log('Insufficient balace');
        }
    }
    displayBalance() {
        console,log(`Account Blance ${this.balance}`);
    }
}
 const account = new BankAccount('SB-123', 1500);

 account.deposite(500);

account.withdraw(400);

account.withdraw(1800);

account.displayBalance();