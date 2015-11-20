/*if(getElementById('firsta').onclick){

}else{

}*/
window.onload = initAll;
function initAll(){
	document.getElementById("firsta").onclick = initRedirect;
}

function initRedirect(){
	alert("we are not responsible for the content of pages outside our site");
	//window.location = "index.html";
	window.location = this;
	return false;
}