class Account {
    private accountNo: number;

    constructor(accountNo: number) {
        this.accountNo = accountNo;
    }
    public process(transaction: Transaction): boolean {
        if (transaction.value() > 0) return true;
        else return false;
    }
}

class Transaction {
    private amount: number = 0;
    constructor(amount: number) {
        this.amount = amount;
    }
    public value(): number {
        return this.amount;
    }
}

class FilteredAccount extends Account{
    private filteredCount: number;

    constructor(accountNo: number) {
        super(accountNo);
        this.filteredCount = 0;
    }
    public process(transaction: Transaction): boolean {
        if (transaction.value() == 0){
            this.filteredCount++;
            return true;
        }else{
            return super.process(transaction);
        }
    }
    public filtered(): number {
       return this.filteredCount;
    }
}

let transaction = new Transaction(20);
let filAcc = new FilteredAccount(2356);
let ans: boolean = filAcc.process(transaction);

console.log(ans);
