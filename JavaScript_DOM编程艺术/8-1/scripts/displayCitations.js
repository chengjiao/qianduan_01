function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBrfore(newElement,targetElement.nextSibling);
	}
}
function displayCitations(){
	if(!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	//获取所有引用
	var quotes = document.getElementsByTagName("blockquote");
	//遍历引用
	for(var i=0; i<quotes.length; i++){
		//如果没有cite属性，继续循环
		if(!quotes[i].getAttribute("cite")){
			continue;
		}
		//保存site属性
		var url = quotes[i].getAttribute("cite");
		//取得引用中的所有元素节点
		var quoteChildren = quotes[i].getElementsByTagName("*");
		//如果没有元素节点，继续
		if(quoteChildren.length<1) continue;
		//取得引用中的最后一个元素节点
		var elem = quoteChildren[quoteChildren.length-1];
		//创建链接
		var link = document.createElement("a");
		var link_text = document.createTextNode("source");
		link.appendChild(link_text);
		link.setAttribute("href",url);
		//插入链接
		var superscript = document.createElement("sup");
		superscript.appendChild(link);
		elem.parentNode.appendChild(superscript);
	}
}
addLoadEvent(displayCitations);