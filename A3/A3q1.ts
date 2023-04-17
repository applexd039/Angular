//assignment3q1
class Arithmetic
{
    Number1 : number
    Number2 : number

    constructor(n1 : number,n2 : number)
    {
        this.Number1 = n1;
        this.Number2 = n2;
    }

    Addition()
    {
        let Ans : number = 0;
        Ans = this.Number1+this.Number2;
        return Ans;
    }

    Substraction()
    {
        let Ans : number = 0;
        Ans = this.Number1 - this.Number2;
        return Ans;

    }

    Multiplication()
    {
        let Ans : number = 0;
        Ans = this.Number1 * this.Number2;
        return Ans;

    }

    Division()
    {
        let Ans : number = 0;
        Ans = this.Number1 / this.Number2;
        return Ans;

    }

}

var obj1 = new Arithmetic(21,31);
var obj2 = new Arithmetic(200,100);

var Ret : number = 0;
Ret = obj1.Addition();
console.log("Addition of obj1 is "+Ret);

Ret = obj1.Substraction();
console.log("Substraction of obj1 is"+Ret);

Ret =obj2.Multiplication();
console.log("Multiplication of obj2 is"+Ret);

Ret=obj2.Division();
console.log("Division of obj2 is"+Ret);


