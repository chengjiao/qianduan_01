function striptable(){
	if(!document.getElementsByTagName) return false;
	var table = document.getElementsByTagName("table");
	for(var i=0;i<table.length;i++){
		var tr = table[i].getElementsByTagName("tr");
		for(var j=0;j<tr.length;j++){
			if (j%2) {
				tr[j].style.backgroundColor = "pink";
			}
		}
	}
}
function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != "function"){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}

}
addLoadEvent(striptable);
