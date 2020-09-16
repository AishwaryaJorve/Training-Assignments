    function myFunction()
       {
           var no1=Number.parseFloat(document.getElementById("no1").value);
           var no2=Number.parseFloat(document.getElementById("no2").value);
           var no3=Number.parseFloat(document.getElementById("no3").value);
           
           //document.write(no1);

            if(Number.isNaN(no1)||Number.isNaN(no2)||Number.isNaN(no3))
            {
              alert("Not valid no");
              return;
            }

            var arr=[];
            arr[0]=no1;
            arr[1]=no2;
            arr[2]=no3;
            var temp=0;	
            var size=arr.length;

            for(var i=0;i<size;i++)
            {
            	for(var j=0;j<size-1;j++)
            	{
            		if(arr[j]<arr[j+1])
		               {
		                   temp=arr[j];
		                   arr[j]=arr[j+1];
		                   arr[j+1]=temp;
                        }
            	}
            }
          
          for(var i=0;i<size;i++)
          {
          	document.write(arr[i]+'');
          }

         }
