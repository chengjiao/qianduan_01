function displayAbbreviations(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	//获得所有缩略语
	var abberviations = document.getElementsByTagName("abbr");
	//文档里没有缩略语则退出
	if(abberviations.length < 1) return false;
	//定义数组，保存数据
	var defs = new Array();
	//遍历这些缩略语
	for(var i=0; i<abberviations.length; i++){
		var current_abbr = abberviations[i];
		//得到文本节点的nodeValue并把它赋值给变量Key
		if(current_abbr.childNodes.length<1) continue;
		var definition = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		defs[key] = definition;
	}
	//创建定义列表
	var dlist = document.createElement("dl");
	for(key in defs){
		var definition = defs[key];
		//创建定义标题
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//create the definition description
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//把他们添加到定义列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if(dlist.childNodes.length<1) return false;
	//创建标题
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abberviations");
	header.appendChild(header_text);
	//把标题添加到页面主体
	document.body.appendChild(header);
	//把定义列表添加到页面主体
	document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);