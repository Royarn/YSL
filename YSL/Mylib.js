/*自定义库*/
var Mylib = {};

Mylib.showAlert = function(msg,ele){
	alert(msg);
}

/*键盘事件监听*/
var triggers = {
	D:'Default',
	N:'Narrow',
	L:'Large'
};

/*闭包理解联系*/
function outerFunction(){
	var ourterVar = 0;

	/*内部函数1*/
	function innerFunctionOne(){
		ourterVar ++ ;
		console.log('(1)	ourterVar='+ourterVar);
	}
	
	/*内部函数2*/
	function innerFunctionTwo(){
		ourterVar += 2;
		console.log("(2)	ourterVar="+ourterVar);
	}
	
	/*返回内部函数的引用*/
	return {"fn1":innerFunctionOne,"fn2":innerFunctionTwo};
}

/*实例化后的订单大对象*/
var OrderMsg = {
	//var str1 = 'begin';
	method1:function(){
		console.log('函数一..............');
//		function innerM1(){
//			str1 = 'step1........';	
//		}
//		return innerM1;
	},
	metho2:function(){
		console.log('函数二............');
//		var str1 = 'begin';
//		function innerM2(){
//			str1 = 'step2...........');
//		}
//		return innerM2;
	}
};

/*预定义订单函数*/
function OrderDteatil(){
	/*地址节点*/
	this.addressNode = {};
	
	/*可选包集合*/
	this.optNbrList = [];
	
	/*子产品集合*/
	this.subProdList = [];
	
	this.setAddressNode = function(objName) {
		this.addressNode = objName;
	}
	this.getAddressNode = function(){
		return this.addressNode;
	}
	
	/*订购可选包*/
	this.addOptNbrNode = function(obj){
		/*严谨写法 --判断传入对象是否归属于特定类  */
		if(obj instanceof OptNbr) {
			//实际业务场景 -- 判断当前可选包是否已经订购，若订购，则不可重复顶都*/
			var tmpOptObj = this.getOptNbrById(obj.getOptId());
			if(tmpOptObj) {
				return false;
			} else {
				this.optNbrList.push(obj);
			}
		}
	}
	
	/*获取指定可选包*/
	this.getOptNbrById = function(objId){
		for(var i=0;i<this.optNbrList.length;i++) {
			var tmpObjId = 	this.optNbrList[i].getOptId();
			if(objId == tmpObjId) {
				return this.optNbrList[i];
			}
		}
	}
	
	/*删除指定可选包*/
	this.delOptNbrById = function(objId){
		for(var i=0;i<this.optNbrList.length;i++) {
			var tmpOptId = this.optNbrList[i].getOptId();
			if(tmpOptId == objId) {
				if(i == this.optNbrList.length-1) {
					this.optNbrList.pop();
				} else {
					this.optNbrList[i] = this.optNbrList.pop();
					/*对中间去掉的数组进行排序*/
					this.optNbrList.sort();
				}
			}
		}
	}
	
	/*查询指定可选包*/
	this.hasOptNbr = function(objId){
		var _tmpObjId = this.getOptNbrById(objId);
		if(_tmpObjId) {
			return true;
		} else {
			return false;
		}
	}
	
	/*添加指定子产品*/
	this.addSubProdNode = function(obj){
		if(obj instanceof SubProd) {
			var _tmpSubProdId = this.getSubProdById(obj.getProdId());
			if(_tmpSubProdId) {
				
			} else {
				this.subProdList.push(obj);
			}
		}
	}
	
	/*获取指定子产品*/
	this.getSubProdById = function(objId){
		for(var i=0;i<this.subProdList.length;i++) {
			var _tmpSubProdId = this.subProdList[i].getProdId();
			if(objId == _tmpSubProdId) {
				return this.subProdList[i];
			}
		}
		return null;
	}
	
	/*查询是否包含指定子产品*/
	this.hasSubProdById = function(objId){
		var _tmpSubProdId = this.getSubProdById(objId);
		if(_tmpSubProdId) {
			return true;
		} else {
			return false; 
		}
	}
	
	/*删除指定子产品*/
	this.delSubProdById = function(objId){
		for(var i=0;i<this.subProdList.length;i++) {
			var _tmpSubProdId = this.subProdList[i].getProdId();
			if(objId == _tmpSubProdId) {
				/*数组删除  --做特殊处理*/
				if(i == this.subProdList.length-1) {
					this.subProdList[i].pop();
				} else {
					this.subProdList[i] = this.subProdList[i].pop();
					this.subProdList.sort();
				}
			}
		}
	}
}


/*可选包函数*/
function OptNbr(){
	/*可选包标识*/
	this.optId = '';
	/*可选包名称*/
	this.optName = '';
	/*可选包编码*/
	this.optCode = '';
	
	this.setOptId = function(objId){
		this.optId = objId;
	}
	this.getOptId = function(){
		return this.optId;
	}
	this.setOptName = function(objName){
		this.optName = objName;
	}
	this.getOptName = function(){
		return this.optName;
	}
	this.setOptCode = function(objCode){
		this.optCode = objCode;
	}
	this.getOptCode = function(){
		return this.optCode;
	}
}


/*子产品函数*/
function SubProd(){
	
	/*子产品标识*/
	this.prodId = '';
	/*子产品名称*/
	this.prodName = '';
	/*子产品编码*/
	this.prodCode = '';
	/*子产品类型*/
	this.prodType = '';
	/*子产品属性*/
	this.prodAttrs = [];
	
	this.setProdId = function(objId){
		this.prodId = objId;
	}
	
	this.getProdId = function(){
		return this.prodId;
	}
	
	this.setProdName = function(objName){
		this.prodName = objName;
	}
	
	this.getProdName = function(){
		return this.prodName;
	}
	
	this.setProdType = function(objType){
		this.prodType = objType;
	}
	
	this.getProdType = function(){
		return this.prodType;
	}
	
	this.setProdCode = function(objCode){
		this.prodCode = objCode;
	}
	
	this.setProdCode = function(){
		return this.prodCode;
	}
	
	/*为子产品添加属性*/
	this.addProdAttr = function(objAttr) {
		/*如果子产品属性已设置过，则不再进行设置*/
		if(objAttr instanceof AttrClass) {
			var _tmpAttrId = this.getProdAttrById(objAttr.getAttrId());
			if(_tmpAttrId) {
				
			} else {
				this.prodAttrs.push(objAttr);
			}
		}
	}
	
	/*获取指定子产品属性*/
	this.getProdAttrById = function(attrId){
		for(var i=0;i<this.prodAttrs.length;i++) {
			var _tmpAttrId = this.prodAttrs[i].getAttrId();
			if(attrId == _tmpAttrId) {
				return this.prodAttrsp[i];
			}
		}
		return null;
	}
	
	/*查询是否含有子产品属性*/
	this.hasProdAttrById = function(attrId) {
		var _tmpProdId = this.getProdAttrById(attrId);
		if(_tmpProdId) {
			return true;
		} else {
			return false;
		}
	}
}

/*属性对象*/
function AttrClass(){
	
	/*属性标识*/
	this.attrId = '';
	/*属性中文名称*/
	this.attrName_Zh = '';
	/*属性英文名称*/
	this.attrName_Eh = '';
	/*属性值*/
	this.attrValue = {};
	/*旧属性值*/
	this.oldAttrValue = {};
	
	this.setAttrId = function(objId){
		this.attrId = objId;
	}
	
	this.getAttrId = function(){
		return this.attrId;
	}
	
	this.setAttrName_Zh = function(objName){
		this.attrName_Zh = objName;
	}
	
	this.getAttrName_Zh = function(){
		return this.attrName_Zh;
	}
	
	this.setAttrName_Eh = function(objName){
		this.attrName_Eh = objName;
	}
	
	this.getAttrName_Eh = function(){
		return this.attrName_Eh;
	}
	
	this.setAttrValue = function(objAttrValue){
		this.attrValue = objAttrValue;
	}
	
	this.getAttrValue = function(){
		return this.attrValue;
	}
	
	this.setOldAttrValue = function(obj){
		this.oldAttrValue = obj;
	}
	
	this.getOldAttrValue = function(){
		return this.oldAttrValue;
	}
}

/*属性值对象*/
function AttrValueClass(){
	
	/*属性值标识*/
	this.attrValueId = '';
	/*属性值名称*/
	this.attrValueName = '';
	/*属性值*/
	this.attrValueReal = '';
	
	this.setAttrValueId = function(obj){
		this.attrValueId = obj;
	}
	
	this.getAttrValueId = function(){
		return this.attrValueId;
	}
	
	this.setAttrValueName = function(obj){
		this.attrValueName = obj;
	}
	
	this.getAttrValueName = function(){
		return this.attrValueName;
	}
	
	this.setAttrValueReal = function(obj){
		this.attrValueReal = obj;
	}
	
	this.getAttrValueReal = function(){
		return this.attrValueReal;
	}
}

/*继承*/
function ClassA(obj){
	this.color = obj;
	this.b = "TK";
	this.sayColor = function(){
		console.log(this.color);
	}
	this.x = function(){
		console.log("全部调用了？"+this.b);
	}
}

/*继承ClassA的方法1 是将其作为常规函数，然后调用者的引用指向该常规函数*/
function ClassB(obj){
	this.newMethod = ClassA;
	//函数调用
	this.newMethod(obj);
	delete this.newMethod;

	/*es中引入了call()方法  对继承进行了封装*/
	//ClassA.call(this,obj);
	
	this.name = obj;
	this.sayName = function(){
		console.log(this.name);
	}
}


/*原型链*/
function ClassF(){
	
}
ClassF.prototype.attrOne = 'protest';
ClassF.prototype.attrMethod = function(){
	console.log(this.attrOne);
}

function ClassS(){
	
}

ClassS.prototype = new ClassF();

ClassS.prototype.myAttr = '';
ClassS.prototype.myMethod = function(){
	console.log(this.myAttr);
}

/*混合模式联系 -- 对象冒充继承构造函数属性  原型继承构造函数方法*/
function fTree(obj){
	this.name = obj;
	this.fMethod = function(){
		console.log(this.name);
	}
}

function subTree(ownAttr,obj){
	
	/*对象冒充继承父类属性*/
	fTree.call(this,obj);
	this.ownAttr = ownAttr;
}

/*使用原型继承父类方法*/
subTree.prototype = new fTree();
subTree.prototype.ownMethod = function(){
	console.log(this.ownAttr);
}

/*回调函数理解*/
function outerFunc(obj,callbackFunc1,callbackFunc2){
	console.log(111111111111);
	callbackFunc1();
	callbackFunc2("函数调用2.。。。。。。。。。。。。");
}


function createServer(callbackFunc){
	console.log("开始创建服务器.....");
	function req(){
		console.log("请求信息............");
	}
	function res(){
		console.log("响应信息............");
	}
	callbackFunc(req,res);
}

function loopClose(obj,param1,callFunc){
	callFunc(obj);
}


/*闭包再次理解*/
function generateClosure(){
	var count = 0;
	var get = function(){
		count++;
		return count;
	}
	return get;
}

/*递归调用*/
function recursiveFunc(num) {
	if(num <= 1) {
		return 1;
	} else {
		//console.log(arguments);
		return num * arguments.callee(num-1);	
	}
}

console.log(recursiveFunc.toString());
