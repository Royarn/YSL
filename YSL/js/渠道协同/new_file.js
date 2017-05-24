var test = setInterval(function(){
	$('#200055182').fadeOut(500).fadeIn(500);
},1000);



function time(){
	var timeout = $.trim($('#200055180').val());
	if(timeout == 'true') return;
	$('#200055182').fadeOut(500).fadeIn(500);
	setTimeout(time,3000);
}
time();//函数调用

//200053877
var timeout = $.trim($('#200053877').val()); //启动及关闭按钮  
var flag = $.trim($('#200055205').val()); 
	var initSt = setInterval(function(){
	$('#200055185').fadeOut(500).fadeIn(500);
	},1000);
}

if(timeout == 'true'){
	clearInterval(initSt);
	alert('执行完毕.......');
}


//200053877
function time(){
	var timeout = $.trim($('#200053877').val());
	if(timeout == 'true') return;
	$('#200055185').fadeOut(500).fadeIn(500);
	setTimeout(time,1000);
}
time();//函数调用
