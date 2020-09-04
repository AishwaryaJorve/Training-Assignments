function donate()
    {
        var amount=parseFloat(document.getElementById("amount").value);
        alert("Thank You ..You have Donate   "+amount);
    }
    function cancleAmount()
    {
        document.getElementById("amount").value=0;
    }