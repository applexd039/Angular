//assignment2q2

function Summation(Arr : number[]) : number
{
    let iSum : number = 0;
    let iCnt : number = 0;

    for(iCnt=0;iCnt < Arr.length;iCnt++)
    {
        iSum = iSum + Arr[iCnt];
    }
    return iSum;

}

var Brr : number[] = [23,6,7,4,5,7];

var Ret : number = 0;

Ret = Summation(Brr);

console.log("Addition is : "+Ret)