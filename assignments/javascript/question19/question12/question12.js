function no1()
    {
       var n1=parseFloat(prompt("Enter the no"));
        no2(n1);
    }

function no2(a)
{
    var x=a;
    var y=parseFloat(prompt("Enter the no"));
    addition(x,y);
}

function addition(a,b)
{
    var total=a+b;
    document.write("<h1>"+total+"</h1>");
}