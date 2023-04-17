//assignment2q4-Armstrong number
function ChkArmstrong(iNo : number) : boolean
{
    let iTemp=0,iCnt=0,iMult=1;
    let iDigit=0,iDigCnt=0,iSum=0;
    while(iNo!=0)
    {
        iNo=iNo/10;
        iDigCnt++;

    }

    iNo=iTemp;

    while(iNo!=0)
    {
        iMult=1;
        iDigit=iNo%10;

        for(iCnt=1;iCnt<=iDigCnt;iCnt++)
        {
            iMult=iMult*iDigit;
        }

        iSum=iSum+iMult;
        iNo=iNo/10;
    }

    if(iSum==iTemp)
    {
        return true;
    }
    else
    {
        return false;
    }   
}

var number : number = 153

var iRet : boolean = ChkArmstrong(number)

if(iRet == true)
{
    console.log("Its an Armstrong number")
}
else
{
    console.log("Its not an armstrong number")
}