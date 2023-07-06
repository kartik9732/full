var SafeArray1 = /** @class */ (function () {
    function SafeArray1() {
        this.arr = new Array(SafeArray1.size).fill(0);
    }
    SafeArray1.prototype.putElement = function (index, value) {
        if (index >= 0 && index < SafeArray1.size) {
            this.arr[index] = value;
        }
    };
    SafeArray1.prototype.getElement = function (index) {
        if (index >= 0 && index < SafeArray1.size) {
            if (this.arr[index] == undefined)
                return 0;
            return this.arr[index];
        }
        else
            return -1;
    };
    SafeArray1.size = 5;
    return SafeArray1;
}());
var sa1 = new SafeArray1();
sa1.putElement(6, 125);
var x = sa1.getElement(3);
console.log(x);
