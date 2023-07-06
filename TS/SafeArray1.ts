
class SafeArray1{
    private arr: number[];
    private static size: number = 5;
    constructor(){
        this.arr = new Array(SafeArray1.size).fill(0);
    }
    public putElement(index: number, value: number): void{
        if(index >= 0 && index < SafeArray1.size){
            this.arr[index] = value;
        }
    }
    public getElement(index: number): number{
        if(index >= 0 && index < SafeArray1.size){
            if(this.arr[index] == undefined) return 0;
            return this.arr[index];
        }
        else return -1;
    }
}

let sa1=new SafeArray1();
sa1.putElement(6, 125);
let x = sa1.getElement(3);
console.log(x);

