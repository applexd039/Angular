//assignment1q1
function Maximum(n1 : number,n2 : number,n3 : number)
{
    
   if(n1>n2)
    {
        return n1;
    }
    else if(n2>n3)
    {
        return n2;
    }
    else
    {
        return n3;
    }
}

var ret : number = Maximum(23,89,6)
console.log("LArgest number is :",ret)