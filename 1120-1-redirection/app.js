/*if(getElementById('firsta').onclick){

}else{

}*/
window.onload = initAll;
function initAll(){
	document.getElementById("firsta").onclick = initRedirect;
}

function initRedirect(){
	window.location = "index.html";
	return false;
}