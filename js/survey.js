//事件绑定函数
function catchEvent(eventObj,event,eventHandler){
	if(eventObj){
		if(eventObj.addEventListener){
			eventObj.addEventListener(event,eventHandler);
		}else if(eventObj.attachEvent){
			event="on"+event;
			eventObj.attachEvent(event,eventHandler);
		}
	}
}

//检查地址是否为空
function checkAddress(){
	var el=document.getElementById("address");
	var elSpan=document.getElementById("addressSpan")
	if(el.value==null || el.value==""){
		console.log("address对应的参数为空");
		el.focus();
		elSpan.innerHTML="地址不能为空";
		return false;
	}else{
		elSpan.innerHTML="";
		return true;
	}
}

//检查企业名称是否为空
function checkEnterprise(){
	var el=document.getElementById("enterprise");
	var elSpan=document.getElementById("enterpriseSpan");
	if(el.value==null || el.value==""){
		console.log("enterprise对应的参数为空");
		el.focus();
		elSpan.innerHTML="企业名称不能为空";
		return false;
	}else{
		elSpan.innerHTML="";
		return true;
	}
}

//检查法定联系人是否为空
function checkLeReName(){
	var el=document.getElementById("leReName");
	var elSpan=document.getElementById("leReNameSpan");
	if(el.value==null || el.value==""){
		console.log("LeReName对应的参数为空");
		el.focus();
		elSpan.innerHTML="法定联系人不能为空";
		return false;
	}else{
		elSpan.innerHTML="";
		return true;
	}
}

//定位功能
function getLocation1(){
			var geolocation = new BMap.Geolocation();
				geolocation.getCurrentPosition(function(r){
				if(this.getStatus() == BMAP_STATUS_SUCCESS){
					console.log(r.point.lng, r.point.lat);
					var mk = new BMap.Marker(r.point);
					// 创建地理编码实例      
					var myGeo = new BMap.Geocoder();      
					// 根据坐标得到地址描述    
					myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(result){      
						if (result){
							var loca1 = document.getElementById("lngAndlat1");
							var loca2 = document.getElementById("lngAndlat2"); 
							loca1.value=r.point.lng;//经纬度
							loca2.value=r.point.lat;
							//alert(result.address);      
						}      
					});
				}else {
					var loca = document.getElementById("lngAndlat"); 
					loca.innerHTML="failed"+this.getStatus();     
					//document.getElementById("location").innerHTML();
					//alert('failed'+this.getStatus());
				}        
			});
		}  

//验证法定联系人联系方式是否为空
function checkLeReIpone(){
	var el=document.getElementById("leReIpone");
	var elSpan=document.getElementById("leReIponeSpan");
	var Reg=/(^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$)|(^769-)[0-9]{7}$/g;
	if(el.value==null || el.value==""){
		console.log("LeReIpone对应的参数为空");
		elSpan.innerHTML="法定联系人不能为空";
		el.focus();
		return false;
	}else if(!Reg.test(el.value)){
		console.log(el.value);
		console.log("LeReIpone格式有误");
		elSpan.innerHTML="联系方式格式不合规范";
		el.focus();
		return false;
	}else{
		elSpan.innerHTML="";
		return true;
	}
}

//检查环保联系人是否为空
function checkEnReName(){
	var el=document.getElementById("enReName");
	var elSpan=document.getElementById("enReNameSpan");
	if(el.value==null || el.value==""){
		console.log("EnReName对应的参数为空");
		el.focus();
		elSpan.innerHTML="环保联系人不能为空";
		return false;
	}else{
		elSpan.innerHTML="";
		return true;
	}
}

//验证环保联系人联系方式是否为空
function checkEnReIpone(){
	var el=document.getElementById("enReIpone");
	var elSpan=document.getElementById("enReIponeSpan");
	var Reg=/(^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$)|(^769-)[0-9]{7}$/g;
	if(el.value==null || el.value==""){
		console.log("EnReIpone对应的参数为空");
		elSpan.innerHTML="环保联系人不能为空";
		el.focus();
		return false;
	}else if(!Reg.test(el.value)){
		console.log("EnReIpone格式有误");
		elSpan.innerHTML="联系方式格式不合规范";
		el.focus();
		return false;
	}else{
		elSpan.innerHTML="";
		return true;
	}
}

//统一社会信用代码是否为空
function checkUSCCodeValue(){
	if(document.getElementById("LicenseOn").checked){
		console.log(document.getElementById("LicenseOn").value);
		var el=document.getElementById("USCCodeValue");
		var elSpan=document.getElementById("USCCodeValueSpan");
		var Reg=/[^_IOZSVa-z\W]{2}\d{6}[^_IOZSVa-z\W]{10}/g;
		if(el.value==null || el.value==""){
			console.log("USCCodeValue对应的参数为空");
			el.focus();
			elSpan.innerHTML="统一社会信用代码不能为空";
			return false;
		}else if(!Reg.test(el.value)){
			console.log("Reg fail!");
			console.log("统一社会信用代码格式有误");
			elSpan.innerHTML="统一社会信用代码不合规范";
			el.focus();
			return false;
		}else{
			elSpan.innerHTML="";
			return true;
		}
	}
}

//统一社会信用代码显示
function LicenseOn(){
	var el=document.getElementById("LicenseOn");
	console.log(el.value);
	if(el.value=='有'){
		document.getElementById("USCCode").style.display='inline';
		return true;
	}
}

//统一社会信用代码隐藏
function LicenseOff(){
	var el=document.getElementById("LicenseOff");
	console.log(el.value);
	if(el.value=='无'){
		document.getElementById("USCCode").style.display='none';
	}
}

//检查营业执照是否勾选
function USCCodeEmpty(){
	var el=document.getElementsByClassName("BusiLicense");
	for(var i=0;i<el.length;i++){
		if(el[i].checked){
			console.log("已勾选营业执照");
			return true;
		}
	}
	el[0].focus();
	console.log("未勾选营业执照");
	return false;
}

//环保手续下拉框显示
function EnvirProdureOn(){
	var el=document.getElementById("EnvirProdureOn");
	console.log(el.value);
	if(el.value=='有'){
		document.getElementById("examine").style.display='inline';
		document.getElementById("examine").options[0].selected=true;
	}
}

//环保手续下拉框隐藏
function EnvirProdureOff(){
	var el=document.getElementById("EnvirProdureOff");
	console.log(el.value);
	if(el.value=='无'){
		document.getElementById("examine").style.display='none';
		document.getElementById("examine").value='无';
	}
}

//环保手续是否勾选
function EnvirProdureEmpty(){
	var el=document.getElementsByClassName("EnvirProdure");
	for(var i=0;i<el.length;i++){
		if(el[i].checked){
			console.log("已勾选环保手续");
			return true;
		}
	}
	el[0].focus();
	console.log("未勾选环保手续");
	return false;
}

//判断下拉框是否已填
function selectEmpty(){
	var els=document.getElementsByTagName('select');
	for(var i=0;i<els.length;i++){
		if(els[i].value==""){
			els[i].focus();
			console.log("下拉框未填");
			return false;
		}
	}
	console.log("下拉框都已填");
	return true;
}

//环境预案选择已备案时，显示是否过期下拉框
function recordShow(){
	var el=document.getElementById("record");
	console.log(el.options[1].selected);
	if(el.options[1].selected){
		
		document.getElementById("Choice").style.display='block';
		document.getElementById("Choice").options[0].selected=true;	
	}else{
		
		document.getElementById("Choice").style.display='none';
		if(document.getElementById("Choice").options[1])
		document.getElementById("Choice").options[1].selected=true;
		console.log(document.getElementById("Choice").value);
	}
}

//表单提交函数
function surveySubmit(){
	var flag=true;
	flag=flag & selectEmpty();
	flag=flag & checkAddress();
	flag=flag & checkEnterprise();
	flag=flag & checkLeReName();
	flag=flag & checkLeReIpone();
	flag=flag & checkEnReName();
	flag=flag & checkEnReIpone();
	flag=flag & checkUSCCodeValue();
	flag=flag & EnvirProdureEmpty();
	flag=flag & USCCodeEmpty();
	if(flag==true){
		document.getElementById("enterpriseForm").submit();
	}
}
//表单验证函数
function check(){
	catchEvent(document.getElementById("address"),"blur",checkAddress);
	catchEvent(document.getElementById("enterprise"),"blur",checkEnterprise);
	catchEvent(document.getElementById("leReName"),"blur",checkLeReName);
	catchEvent(document.getElementById("leReIpone"),"blur",checkLeReIpone);
	catchEvent(document.getElementById("enReName"),"blur",checkEnReName);
	catchEvent(document.getElementById("enReIpone"),"blur",checkEnReIpone);
	catchEvent(document.getElementById("LicenseOn"),"click",LicenseOn);
	catchEvent(document.getElementById("LicenseOff"),"click",LicenseOff);
	catchEvent(document.getElementById("EnvirProdureOn"),"click",EnvirProdureOn);
	catchEvent(document.getElementById("EnvirProdureOff"),"click",EnvirProdureOff);
	catchEvent(document.getElementById("USCCodeValue"),"blur",checkUSCCodeValue);
	catchEvent(document.getElementById("surveySubmit"),"click",surveySubmit);
	catchEvent(document.getElementById("getLocation"),"click",getLocation1);
	catchEvent(document.getElementById("record"),"click",recordShow);
	catchEvent(document.getElementById("surveySubmit"),"click",selectEmpty);
}

