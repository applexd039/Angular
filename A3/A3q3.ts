//assignment3q3
//assignment3q2
class circle
{
    Radius :  number;
    PI : number = 3.14;

    constructor(R : number)
    {
        this.Radius = R;        
    }

    CallArea()
    {
        let Area : number;
        Area = this.PI*this.Radius*this.Radius;
        return Area
    }
}

class CircleX extends circle
{
    constructor(no : number)
    {
        super(no);
    }

    CallCircumference()
    {
        let Circumference : number
        Circumference = this.PI * this.Radius * 2;
        return Circumference;
    }

}

var obj = new CircleX(9);
var obj2 = new CircleX(11);
var iRet : number = 0;

iRet = obj.CallArea();
console.log("Area of circle is "+iRet);

iRet = obj2.CallCircumference();
console.log("Circumference of the circle is: "+iRet); 