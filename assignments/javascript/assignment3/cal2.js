
function validation(num1,num2)
{
    if(isNaN(num1)||isNaN(num2))
    {
          alert("Input is not valid");
    }
}


function add()
          {
    let n1=parseFloat(document.getElementById("num1").value); 
    let n2=parseFloat(document.getElementById("num2").value); 
    validation(n1,n2);
    let r=n1+n2;
    document.getElementById("answer").value=r;
          }

function sub()
          {
    let n1=parseFloat(document.getElementById("num1").value); 
    let n2=parseFloat(document.getElementById("num2").value); 
    validation(n1,n2); 
    let r=n1-n2;
    document.getElementById("answer").value=r;
          }

function mul()
          {
    let n1=parseFloat(document.getElementById("num1").value); 
    let n2=parseFloat(document.getElementById("num2").value); 
    validation(n1,n2);
              let r=n1*n2;
    document.getElementById("answer").value=r;
          }

function div()
          {
    let n1=parseFloat(document.getElementById("num1").value); 
    let n2=parseFloat(document.getElementById("num2").value); 
    validation(n1,n2);
              let r=n1/n2;
    document.getElementById("answer").value=r;
          }
