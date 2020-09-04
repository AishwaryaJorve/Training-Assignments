function getMax(){
       var a=new Array();
       a[0]=parseFloat(document.getElementById("n1").value);
       a[1]=parseFloat(document.getElementById("n2").value);
       a[2]=parseFloat(document.getElementById("n3").value);
       a[3]=parseFloat(document.getElementById("n4").value);
       a[4]=parseFloat(document.getElementById("n5").value);
       
           var i=0;
           var maxNo=a[0];
           for(i=0;i<a.length;i++)
               {
                   if(a[i]>maxNo)
                       {
                           maxNo=a[i];
                       }
               }
           document.getElementById("result").value=maxNo;
      } 