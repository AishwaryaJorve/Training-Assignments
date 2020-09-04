function go()
      {
          var i=0;
          var num=document.getElementById("no").value;
          //document.write(num);
          for(i=2;i<=num;i++)
          {
              if(isPrime(i))
              {
                  document.write(i+",");
              }
          }
          
      }
      function isPrime(a)
      {
          var i=0;
        
        if(a<=1){
            return false;
        }
        
        for(i=2;i<a;i++)
          {
              if(a%i==0)
              {
                  return false;
              }
          }

          return true;
      }
