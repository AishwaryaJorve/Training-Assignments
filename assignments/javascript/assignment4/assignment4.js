function check()
            {
               let i=0;   
              let data=new Array();
              data[0]=document.getElementById("fname").value;
              data[1]=document.getElementById("lname").value;
              data[2]=document.getElementById("desc").value;
              data[4]=document.getElementById("phno").value;
              data[5]=document.getElementById("adress").value;
              data[6]=document.getElementById("city").value;
              data[7]=document.getElementById("state").value;
              data[8]=document.getElementById("pcode").value;
              
            //document.write(data[5]);

              for(i=0;i<data.length;i++)
                   {
                       console.log(data[i]);
                       console.log('<br>');
                     //  document.write(data[i]);
                   }

            }