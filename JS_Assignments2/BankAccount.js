class BankAccount{
    constructor(accountNumber,accountHolderName,accountBalance)
    {
        this.accountNumber=accountNumber;
        this.accountHolderName=accountHolderName;
        this.accountBalance=accountBalance;
    }
    deposit(amount)
    {
        this.accountBalance += amount;
    }
}
class Savings extends BankAccount
{
    constructor(accountNumber,accountHolderName,accountBalance, isSalary)
    {
        super(accountNumber,accountHolderName,accountBalance);
        this.isSalary=isSalary;
        this.print=function()
        {
            console.log(this.accountNumber);
            console.log(this.accountHolderName);
            console.log(this.accountBalance);
            console.log(this.isSalary);
        }

    }
    withdraw(amount)
    {
        if(this.accountBalance<parseInt(amount))
        {
            console.log("insufficient funds");
        }
        else
        {
        this.accountBalance=this.accountBalance-amount;
        }
    }
}

var savings = new Savings(501212011,"venkat",9000,true);
savings.deposit(3000);
console.log(savings.accountBalance);

savings.withdraw(10000);
console.log(savings.accountBalance);

class Current extends BankAccount
{
    constructor(accountNumber,accountHolderName,accountBalance, odLimit)
    {
        super(accountNumber,accountHolderName,accountBalance);
        this.odLimit=odLimit;
        this.print=function()
        {
            console.log(this.accountNumber);
            console.log(this.accountHolderName);
            console.log(this.accountBalance);
            console.log(this.odLimit);
        }

    }
    withdraw(amount)
    {
        if(this.accountBalance+this.odLimit<parseInt(amount))
        {
            console.log("Insufficient funds")
        }
        else
        {
            this.accountBalance -= amount;
        }
    }   
}

var current = new Current(510225021,"harish",10000,15000);
current.withdraw(9000);
console.log(current.accountBalance);