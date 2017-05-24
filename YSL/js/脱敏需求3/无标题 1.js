//200018555
var types = $.trim($('#200018555 option:selected').text());
if(types=='身份证+姓名'){
	 $('#200018548').addClass('none');//组织机构
	 $('#200018549').addClass('none');//营业执照
	 $('#200018522').removeClass('none');//身份证+姓名
	 $('#200018523').removeClass('none');//身份证读卡器
	 $('#200018548+label').addClass('none');//组织机构label标签，ie兼容
	$('#200018522+label').removeClass('none');//身份证+姓名label标签，ie兼容
	$('#200018549+label').addClass('none');//营业执照label标签，ie兼容
	 
}else if(types=='组织机构代码'){
	$('#200018548').removeClass('none');//组织机构
	$('#200018548+label').removeClass('none');//组织机构label标签，ie兼容
	$('#200018522+label').addClass('none');//身份证+姓名label标签，ie兼容
	$('#200018549+label').addClass('none');//营业执照label标签，ie兼容
	$('#200018549').addClass('none');//营业执照
	$('#200018522').addClass('none');//身份证+姓名
  $('#200018523').addClass('none');//身份证读卡器
}else{
	$('#200018548').addClass('none');//组织机构
	$('#200018549').removeClass('none');//营业执照
	$('#200018522').addClass('none');//身份证+姓名
  $('#200018523').addClass('none');//身份证读卡器
  $('#200018548+label').addClass('none');//组织机构label标签，ie兼容
	$('#200018522+label').addClass('none');//身份证+姓名label标签，ie兼容
	$('#200018549+label').removeClass('none');//营业执照label标签，ie兼容
}