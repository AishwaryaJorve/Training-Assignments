function myFunction()
       {
           var no1=Number.parseFloat(document.getElementById("no1").value);
           var no2=Number.parseFloat(document.getElementById("no2").value);
           var no3=Number.parseFloat(document.getElementById("no3").value);
           var no4=Number.parseFloat(document.getElementById("no4").value);
           var no5=Number.parseFloat(document.getElementById("no5").value);
           
           //document.write(no1);

            if(Number.isNaN(no1)||Number.isNaN(no2)||Number.isNaN(no3)||Number.isNaN(no4)||Number.isNaN(no5))
            {
              alert("Please Enter valid number");
              return;
            }

            if(no1>no2 && no1>no3 && no1>no4 && no1>no5)
             {
                document.getElementById("result").value=no1;
             }
            
             else if(no2>no1 && no2>no3 && no2>no4 && no2>no5)
             {
                 document.getElementById("result").value=no2;
             }
             else if(no3>no1 && no3>no2 && no3>no4 && no3>no5)
             {
                 document.getElementById("result").value=no3;
             }
             else if(no4>no1 && no4>no2 && no4>no3 && no4>no5)
             {
                 document.getElementById("result").value=no4;
             }

             else
             {
                  document.getElementById("result").value=no5;
             }
        }    