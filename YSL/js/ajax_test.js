/*非ie环境下ajax请求对象创建*/
console.log('111111111111111');
var httpObj = '';
if(window.XMLHttpRequest) {
	httpObj = new XMLHttpRequest();
} else {
	httpObj = new ActiveXObject();
}

/*发送http请求*/
httpObj.open("GET","book.xml",false);

httpObj.send();

var xmlDocument = httpObj.responseXML;
