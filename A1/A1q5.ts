//assignment1q5
function Fibonacci(iNo:number):void
{
    let n1 : number = 0;
    let n2 : number = 1;
    let next : number = 0;

    while (next<=iNo)
    {
        console.log(next);

        n1=n2;
        n2=next;
        next=n1+n2;

    }
}

var no : number = 21;
Fibonacci(no);