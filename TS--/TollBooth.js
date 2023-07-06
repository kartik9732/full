var TollBooth = /** @class */ (function () {
    function TollBooth() {
    }
    // private static payingCarCount: number;
    // private static nopayingCarCount: number;
    TollBooth.prototype.payingCar = function () {
        TollBooth.totalCarCount++;
        TollBooth.totalAmount += 50;
    };
    TollBooth.prototype.nopayCar = function () {
        TollBooth.totalCarCount++;
    };
    TollBooth.prototype.display = function () {
        console.log("Total car count: ".concat(TollBooth.totalCarCount));
        console.log("Total amount: ".concat(TollBooth.totalAmount));
    };
    TollBooth.totalCarCount = 0;
    TollBooth.totalAmount = 0;
    return TollBooth;
}());
function sample() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    var tollBooth = new TollBooth();
    for (var _a = 0, inputs_1 = inputs; _a < inputs_1.length; _a++) {
        var input = inputs_1[_a];
        if (input === 'p') {
            tollBooth.payingCar();
        }
        else if (input === 'n') {
            tollBooth.nopayCar();
        }
    }
    tollBooth.display();
}
sample('p', 'p', 'n', 'p', 'n');