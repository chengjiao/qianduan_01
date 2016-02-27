function styleHeaderSiblings(){
	if(!document.getElementsByTagName) return false;
	var para = document.getElementsByTagName("h1");
	for(var i=0; i<para.length; i++){
		var next_p = getNextElement(para[i].nextSibling);
		next_p.style.color = 'red';
	}
}
function getNextElement(node){
	if(node.nodeType == 1){
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}
window.onload = styleHeaderSiblings;