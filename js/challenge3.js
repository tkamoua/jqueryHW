
  $(ch3form).submit(function(){
      var submitFunc1 = false; 
      var submitFunc2 = false;
      $('input[name="fruit"]').each(function(){
          console.log($(this).prop("checked"));
          if($(this).prop("checked") == true){
              submitFunc1 = true; 
          }
   
      });
      $('input[name="standing"]').each(function(){
        console.log($(this).prop("checked"));
        if($(this).prop("checked") == true){
            submitFunc2 = true; 
        }
 
    });
      if(submitFunc1 == true && submitFunc2 == true){
          return true;
      }
      else if(submitFunc1 == false){
        alert("You must pick a fruit!")
      }
      else if(submitFunc2 == false){
          alert("You must pick a standing!")
      }
     
    return false;


  });