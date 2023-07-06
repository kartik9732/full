var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(accountNo) {
        this.accountNo = accountNo;
    }
    Account.prototype.process = function (transaction) {
        if (transaction.value() > 0)
            return true;
        else
            return false;
    };
    return Account;
}());
var Transaction = /** @class */ (function () {
    function Transaction(amount) {
        this.amount = 0;
        this.amount = amount;
    }
    Transaction.prototype.value = function () {
        return this.amount;
    };
    return Transaction;
}());
var FilteredAccount = /** @class */ (function (_super) {
    __extends(FilteredAccount, _super);
    function FilteredAccount(accountNo) {
        var _this = _super.call(this, accountNo) || this;
        _this.filteredCount = 0;
        return _this;
    }
    FilteredAccount.prototype.process = function (transaction) {
        if (transaction.value() == 0) {
            this.filteredCount++;
            return true;
        }
        else {
            return _super.prototype.process.call(this, transaction);
        }
    };
    FilteredAccount.prototype.filtered = function () {
        return this.filteredCount;
    };
    return FilteredAccount;
}(Account));
var transaction = new Transaction(20);
var filAcc = new FilteredAccount(2356);
var ans = filAcc.process(transaction);
console.log(ans);
