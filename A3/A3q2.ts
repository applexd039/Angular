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

var obj = new circle(9);
var iRet : number = 0;

iRet = obj.CallArea();
console.log("Area of circle is : "+iRet);
