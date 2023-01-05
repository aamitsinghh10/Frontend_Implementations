export const sum = (x,y) => x+y;
export const diff = (x,y) => x-y;
export var product = (x,y) => x*y;

export default class{
    constructor( real, imaginary ){
        this.real = real;
        this.imaginary = imaginary;
    }
    toString(){
        return `${this.real} + ${this.imaginary}`;
    }
};

/*we can export them like this also
export{
    sum,
    diff,
    product,
    ComplexNumber as dafault
};*/