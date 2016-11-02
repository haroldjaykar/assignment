var person ={};

(
    /*function(context){
        context.phone="1234567890";
      
        var result=validators.phoneValidation(context.phone);
        console.log(result);
        var second = validators.phoneValidation("abcd");
        console.log(second);
        
    }*/
    function(context){
        context.phone="1234567890";
        context.pincode="530040";
        var result=validators.numberValidate("Pincode",context.pincode);
        console.log(result);
        var result1=validators.numberValidate("Phone",context.phone);
        console.log(result1);
    }
)(person);