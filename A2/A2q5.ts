//assignment2q5
function ChkString(str : string) : boolean
{
    let bflag : boolean = str.includes("Marvellous")
    return bflag
}

var str1 : string = "Pune Kothrud Marvellous Infosystems"

var iRet : boolean = ChkString(str1)

if(iRet == true)
{
    console.log("String contains marvellous in it")
}
else
{
    console.log("String dosent contain Marvellous in it")
}
