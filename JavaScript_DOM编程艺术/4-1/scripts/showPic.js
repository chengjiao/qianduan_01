function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBrfore(newElement,targetElement.nextSibling);
	}
}
function preparePlaceholder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/test-2.png");
	placeholder.setAttribute("alt","my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Choose an Image");
	description.appendChild(desctext);
	//document.getElementsByTagName("body")[0].appendChild(placeholder);//document.body.appendChild(placeholder);
	//document.getElementsByTagName("body")[0].appendChild(description);//document.body.appendChild(description);
	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}
function prepareGallery(){
	//向后兼容性检测
	if(!document.getElementsByTagName){
		return false;
	}
	if(!document.getElementById){
		return false;
	}
	if(!document.getElementById("imagegallery")){
		return false;
	}
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick = function(){
			return !showPic(this);
			 
		}
	}
}
function showPic(whichPic){
	 	if(!document.getElementById("placeholder")) return false;
		var source = whichPic.getAttribute("href");
		var placeholder = document.getElementById("placeholder");
		if(placeholder.nodeName != "IMG") return false;
		placeholder.setAttribute("src",source);
		if(document.getElementById("description")){
			// var text = whichPic.getAttribute("title");
			if(whichPic.getAttribute("title")){
				var text = whichPic.getAttribute("title");
			}else{
				var text = "";
			}
			var description = document.getElementById("description");
			description.firstChild.nodeValue = text;
		}
		return false;
	}
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
