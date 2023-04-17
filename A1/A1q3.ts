//assignment1q3
function DisplayFactors(No : number) : void
{
    console.log("Factors of the number are :")
    let iCnt : number = 0;
    for(iCnt = 1;iCnt <=No/2;iCnt++)
    {
        if((No % iCnt) ==0)
        {
            console.log(iCnt);
        }
    }
}
var iNo : number = 20;
DisplayFactors(iNo);