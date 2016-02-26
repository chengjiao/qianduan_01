function getNewContent(){
	var request = getHTTPObject();
	if(request){
		request.open("GET","example.txt",true);
		//在为onreadystatechange指定函数引用时，不要再函数名后面加括号。因为加括号表示立即调用函数。而我们只想把函数自身的引用赋值出去。request.onreadystatechange = doSomething;
		request.onreadystatechange = function(){
			if(request.readyState == 4){
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById("new").appendChild(para);
			}
		};
		request.send(null);
	}else{
		alert("sorry,your browser doesn\'t support XMLHttpRequest");
	}
}
addLoadEvent(getNewContent);