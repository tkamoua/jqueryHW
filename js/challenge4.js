
$(ch4form).submit(function(){
    var validInput = true;
    console.log("Here");
    console.log($("#fullname"));
    console.log($("#streetaddr"))
    if($('#fullname').val().length ==0){
        $("#nameerrormsg").css('display','block');
        validInput = false;
    }
    else{
        $("nameerrormsg").css('display','none');
    }
    if($('#streetaddr').val().length == 0){
        $("#addrerrormsg").css('display','block');
        validInput = false;
    }
    else{
        $("addrerrormsg").css('display','none');
    }
    return validInput;

});