		// function disabledPollutionType(){
		// 	var el=document.getElementsByClassName("item1_in");
		// 	if(el[0].checked==true){
		// 		for(var i=1;i<el.length;i++){
		// 			el[i].checked=false;
		// 			el[i].disabled=true;
		// 			console.log("污染源类型已禁选");
		// 		}
		// 	}else{
		// 		for(var i=1;i<el.length;i++){
		// 			el[i].disabled=false;
		// 			console.log("污染源类型解除禁选");
		// 		}
		// 	}
		// 	//将其他污染源列表隐藏
		// 	noInvolveWater();//废水
		// 	noInvolveGas();//废气
		// 	noInvolveDanger();//危险废物
		// }
/*		function Item_toggle(h,id){
			var item=document.getElementById(id);
			var he=item.offsetHeight;
			if(he>0)item.style="height:0px;";
			else	item.style="height:"+h+"px;";
		}*/
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
			//预览图片
		function showImage(fileId,imageId){
			document.getElementById(fileId).addEventListener('change', function(){
		  		var files = this.files;
		  		var file;
		  		if (files && files.length) {
			  	  	file = files[0];
			  	  	if (/^image\/png$|jpeg$/.test(file.type)) {
			  	    	document.getElementById(imageId).src = URL.createObjectURL(file);
			  	  	}
	  			}
	  		}, false);
		}
/*		//污染源类型点击不涉及则其他污染源类型不可选
		function disabledPollutionType(){
			var el=document.getElementsByClassName("item1_in");
			if(el[0].checked==true){
				for(var i=1;i<el.length;i++){
					
					el[i].checked=false;
					
					//el[i].disabled=true;
					console.log("污染源类型已禁选");
				}
			}else{
				for(var i=1;i<el.length;i++){
					el[i].disabled=false;
					console.log("污染源类型解除禁选");
				}
			}
			//将其他污染源列表隐藏
			noInvolveWater();//废水
			noInvolveGas();//废气
			noInvolveDanger();//危险废物
		}
//不涉水时表单隐藏和显示函数
		function noInvolveWater(){
			var el=document.getElementById("noInvolveWater");
			var waters=document.getElementsByClassName("item4_in");
			if(el.checked==false){	
				for(var i=0;i<waters.length;i++){
					if(waters[i].value=='无'){
						waters[i].checked=true;
						document.getElementById("item4_div").style.display='none';
					}else{
						waters[i].checked=false;
					}
				}
				console.log("不涉及废水");
			}else{
				for(var i=0;i<waters.length;i++){
					if(waters[i].value=='无'){
						waters[i].checked=false;
						document.getElementById("item4_div").style.display='block';
						break;
					}
				}
				console.log("涉及废水");
			}
		}
		//不涉及废气时表单隐藏和显示函数
		function noInvolveGas(){
			var el=document.getElementById("noInvolveGas");
			var gas1=document.getElementsByClassName("item5_in");
			var gas2=document.getElementsByClassName("item6_in");
			if(el.checked==false){	
				for(var i=0;i<gas1.length;i++){
					if(gas1[i].value=='无'){
						gas1[i].checked=true;
						document.getElementById("item5_div").style.display='none';
					}else{
						gas1[i].checked=false;
					}
				}
				for(var i=0;i<gas2.length;i++){
					if(gas2[i].value=='无'){
						gas2[i].checked=true;
						document.getElementById("item6_div").style.display='none';
					}else{
						gas2[i].checked=false;
					}
				}
				console.log("不涉及废气");
			}else{
				for(var i=0;i<gas1.length;i++){
					if(gas1[i].value=='无'){
						gas1[i].checked=false;
						document.getElementById("item5_div").style.display='block';
						break;
					}
				}
				for(var i=0;i<gas2.length;i++){
					if(gas2[i].value=='无'){
						gas2[i].checked=false;
						document.getElementById("item6_div").style.display='block';
						break;
					}
				}
				console.log("涉及废气");
			}
		}
		//不涉及危废时表单隐藏和显示函数
		function noInvolveDanger(){
			var el=document.getElementById("noInvolveDanger");
			var danger1=document.getElementsByClassName("item7_in");
			var danger2=document.getElementsByClassName("item8_in");
			var danger3=document.getElementsByClassName("item9_in");
			if(el.checked==false){	
				for(var i=0;i<danger1.length;i++){
					if(danger1[i].value=='无'){
						danger1[i].checked=true;
						document.getElementById("item7_div").style.display='none';
					}else{
						danger1[i].checked=false;
					}
				}
				for(var i=0;i<danger2.length;i++){
					if(danger2[i].value=='无'){
						danger2[i].checked=true;
						document.getElementById("item8_div").style.display='none';
					}else{
						danger2[i].checked=false;
					}
				}
				for(var i=0;i<danger3.length;i++){
					if(danger3[i].value=='无'){
						danger3[i].checked=true;
						document.getElementById("item9_div").style.display='none';
					}else{
						danger3[i].checked=false;
					}
				}
				console.log("不涉及危废");
			}else{
				for(var i=0;i<danger1.length;i++){
					if(danger1[i].value=='无'){
						danger1[i].checked=false;
						document.getElementById("item7_div").style.display='block';
						break;
					}
				}
				for(var i=0;i<danger2.length;i++){
					if(danger2[i].value=='无'){
						danger2[i].checked=false;
						document.getElementById("item8_div").style.display='block';
						break;
					}
				}
				for(var i=0;i<danger3.length;i++){
					if(danger3[i].value=='无'){
						danger3[i].checked=false;
						document.getElementById("item9_div").style.display='block';
						break;
					}
				}
				console.log("涉及危废");
			}
		}
*/		/*//环境预案选择已备案时，显示是否过期下拉框
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
		}*/
		//环保手续下拉框隐藏
		function EnvirProdureOff(){
			var el=document.getElementById("EnvirProdureOff");
			console.log(el.value);
			if(el.value=='无环保手续'){
				document.getElementById("examine").style.display='none';
				document.getElementById("examine").value='无';
			}
		}
		//环保手续下拉框显示
		function EnvirProdureOn(){
			var el=document.getElementById("EnvirProdureOn");
			console.log(el.value);
			if(el.value=='有环保手续'){
				document.getElementById("examine").style.display='inline';
				document.getElementById("examine").select.options[0].selected=true;
			}
		}
/*		//统一社会信用代码显示
		function LicenseOn(){
			var el=document.getElementById("LicenseOn");
			console.log(el.value);
			if(el.value=='1'){
				document.getElementById("USCCode").style.display='inline';
				return true;
			}
		}*/
		//验证环保联系人联系方式是否为空
		function checkEnReIpone(){
			var el=document.getElementById("enReIpone");
			var elSpan=document.getElementById("enReIponeSpan");
			var Reg=/(^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$)|(^769)[0-9]{8}$/g;
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
		//验证法定联系人联系方式是否为空
		function checkLeReIpone(){
			var el=document.getElementById("leReIpone");
			var elSpan=document.getElementById("leReIponeSpan");
			var Reg=/(^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$)|(^769)[0-9]{8}$/g;
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
/*		//统一社会信用代码隐藏
		function LicenseOff(){
			var el=document.getElementById("LicenseOff");
			console.log(el.value);
			if(el.value=='0'){
				document.getElementById("USCCode").style.display='none';
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
				}else if(el.value.length!=18){
					console.log("统一社会信用代码长度有误");
					elSpan.innerHTML="统一社会信用代码长度有误";
					el.focus();
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
		}*/
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
		function setProblem(str){
			console.log("123");
			var el=document.getElementById("pollutionProblem");
			el.value+=str;
		}
		function check(){
			showImage('fieldFile1','view1');
			showImage('fieldFile2','view2');
			showImage('fieldFile3','view3');
			showImage('fieldFile4','view4');
			showImage('fieldFile5','view5');
			//catchEvent(document.getElementById("record"),"change",recordShow);
			catchEvent(document.getElementById("EnvirProdureOn"),"click",EnvirProdureOn);
			//catchEvent(document.getElementById("USCCodeValue"),"blur",checkUSCCodeValue);
			catchEvent(document.getElementById("EnvirProdureOff"),"click",EnvirProdureOff);
			//catchEvent(document.getElementById("LicenseOn"),"click",LicenseOn);
			//catchEvent(document.getElementById("LicenseOff"),"click",LicenseOff);
			catchEvent(document.getElementById("leReIpone"),"blur",checkLeReIpone);
			catchEvent(document.getElementById("enReIpone"),"blur",checkEnReIpone);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",selectEmpty);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkPollutionNo);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkPollutionType);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkProductType);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkTechnology);
			//catchEvent(document.getElementById("noInvolve"),"change",disabledPollutionType);
			//catchEvent(document.getElementById("noInvolveWater"),"click",noInvolveWater);
			//catchEvent(document.getElementById("noInvolveGas"),"click",noInvolveGas);
			//catchEvent(document.getElementById("noInvolveDanger"),"click",noInvolveDanger);
			catchEvent(document.getElementById("pollutionSubmit"),"click",checkEnterprise);
			catchEvent(document.getElementById("pollutionSubmit"),"click",checkAddress);
			catchEvent(document.getElementById("pollutionSubmit"),"click",checkLeReName);
			catchEvent(document.getElementById("pollutionSubmit"),"click",checkEnReName);
			catchEvent(document.getElementById("pollutionSubmit"),"click",checkLeReIpone);
			catchEvent(document.getElementById("pollutionSubmit"),"click",checkEnReIpone);
			catchEvent(document.getElementById("pollutionSubmit"),"click",USCCodeEmpty);
			//catchEvent(document.getElementById("USCCodeValue"),"click",checkUSCCodeValue);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkWasteWater);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkWasteGasType);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkWasteGasHandle);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkDangerStorage);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkDangerContract);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkDangerTransfer);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkTreatment);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkVerifyTime);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkVerifier);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkcPerson);
			//catchEvent(document.getElementById("pollutionSubmit"),"click",checkFieldPhoto);
		}

		function checkstor(){
			var storage=window.localStorage;
			if(storage.getItem("userId")==null)
				window.location.href="login.html";
		}