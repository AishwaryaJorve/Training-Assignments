function check()
            {
               let i=0;   
              let data=new Array();
              data[0]=document.getElementById("fname").value;
              data[1]=document.getElementById("lname").value;
              data[2]=document.getElementById("desc").value;
              data[3]=document.getElementById("phno").value;
              data[4]=document.getElementById("adress").value;
              data[5]=document.getElementById("city").value;
              data[6]=document.getElementById("state").value;
              data[7]=document.getElementById("pcode").value;
              
            if(!data[0] ||!data[1] ||!data[2] ||!data[3] ||!data[4] ||!data[5] ||!data[6] ||!data[7])
                {
                    alert("Please Enter all Values");
                    return;
                }

              for(i=0;i<data.length;i++)
                   {
                       console.log(data[i]);
                       console.log('<br>');
                     //  document.write(data[i]);
                   }

            }