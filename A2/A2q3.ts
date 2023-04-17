//assignment2q3-second largest from array
function Maximum(Arr: number[]) : number
{
    let iMAx : number = Arr[0];
    let iCnt : number = 0;
    let iSecond : number = 0 ;
    
    for(iCnt = 0;iCnt < Arr.length; iCnt++)
    {
        if(iMAx < Arr[iCnt])
        {
            iSecond = iMAx;
            iMAx = Arr[iCnt];
        }
        if(iSecond < Arr[iCnt] && iMAx != Arr[iCnt])
        {
            iSecond = Arr[iCnt];
        }

    }
    return iSecond;
}

var Brr : number[] = [23,89,6,29,56,45,77,32]

var iRet : number = 0;

iRet = Maximum(Brr);

console.log("Second maximum is :"+iRet)