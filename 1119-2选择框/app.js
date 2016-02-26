//alert("Welcome to my javascript page");
//alert(confirm);
/*
if(confirm("are you sure you want to do that?")){
	alert("you said yes");
}else{
	alert("you said no");
}
*/
var ans = prompt("Are you sure you want to do that?");
if(ans){
	alert("You said:"+ ans);
}else{
	alert("You refused to answer.");
}