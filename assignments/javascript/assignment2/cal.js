function getNumber(num)
{   
    //to get no and operator as input
    var input_var=document.getElementById('answer');
    switch(num)
        {
            case 1:
                input_var.value +='1';
                break;
            case 2:
                input_var.value +='2';
                break;
            case 3:
                input_var.value +='3';
                break;
            case 4:
                input_var.value +='4';
                break;
            case 5:
                input_var.value +='5';
                break;
            case 6:
                input_var.value +='6';
                break;
            case 7:
                input_var.value +='7';
                break;
            case 8:
                input_var.value +='8';
                break;
            case 9:
                input_var.value +='9';
                break;
            case 0:
                input_var.value +='0';
                break;
            default : 
                input_var.value += num;
        }
}
    // clear the screen
    function clearScreen()
    {
        document.getElementById('answer').value="";
    }
    
function compute(){
    
    let resultString = document.getElementById('answer').value; // '2+9-1
    let no1=resultString[0];
    let oper=resultString[1];
    let no2=resultString[2];
     
     

    switch(oper)
    {
        case '+':
            let n1=parseInt(no1);
            let n2=parseInt(no2);
            document.getElementById('answer').value=n1+n2;
            break;
        case '-':
            document.getElementById('answer').value=no1-no2;
            break;
    
        case '*':
            document.getElementById('answer').value=no1*no2;
            break;   
        
        case '/':
            document.getElementById('answer').value=no1/no2;
            break;     
            
    }
    

}
