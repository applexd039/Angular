//assignment1q4
function ChkPrime(iNo : number):boolean
{
    let Flag : boolean = true;
    let iCnt  =0;
    for(iCnt = 2; iCnt <= iNo/2; iCnt++)
    {
        if((iNo % iCnt) == 0)
        {
            Flag = false;

        }
    }


    return Flag;
}
var No : number = 11;

var ret : boolean = ChkPrime(No);

if(ret == true)
{
    console.log("Your number is prime")
}
else
{
    console.log("Your number is not prime number")
}