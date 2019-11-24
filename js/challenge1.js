

$(subscribe).click(function(){
	if (this.checked){
		console.log("selected"); 
		$("#emailField").css("display","block"); 
	}
	else{
		console.log("Not selected"); 
		$("#emailField").css("display","none"); 
	}
});
  	// Advanced Option....
//   	x.style.display == "block" ? 
//		x.style.display = "none" : 
// 		x.style.display = "block"; 


