		function Item_toggle(h,id){
			var item=document.getElementById(id);
			var he=item.offsetHeight;
			if(he>0)item.style="height:0px;";
			else	item.style="height:"+h+"px;";
		}
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
// 		//判断所有下拉框是否已填
// 		function selectEmpty(){
// 			var els=document.getElementsByTagName('select');
// 			for(var i=0;i<els.length;i++){
// 				if(els[i].value==""){
// 					els[i].focus();
// 					console.log("下拉框未填");
// 					return false;
// 				}
// 			}
// 			console.log("下拉框都已填");
// 			return true;
// 		}
// 		//判断污染源类型是否勾选
// 		function checkPollutionType(){
// 			var el=document.getElementsByClassName("item1_in");
// 			for(var i=0;i<el.length;i++){
// 				if(el[i].checked){
// 					console.log("污染源类型已勾选");
// 					return true;
// 				}
// 			}
// 			document.getElementById("item1Span").innerHTML="<span class='red'>*</span>"
// 			el[0].focus();
// 			console.log("污染源类型未勾选");
// 			return false;
		
// 		}
// 		//判断产品类型是否勾选
// 		function checkProductType(){
// 			var flag=0;
// 			var el=document.getElementsByClassName("item2_in");
// 			for(var i=0;i<el.length;i++){
// 				if(el[i].checked){
// 					console.log(el[i].value);
// 					if(el[i].value=='其他'){
// 						var elInput=document.getElementById("item2_input");
// 						/*console.log(elInput);*/
// 						if(elInput.value=="" || elInput.value==null){
// 							elInput.focus();
// 							console.log("文本框2未填写");
// 							return false;
// 						}
// 					}
// 					flag=1;
// 				}
// 			}
// 			if(flag==0){
// 				document.getElementById("item2Span").innerHTML="<span class='red'>*</span>"
// 				el[0].focus();
// 				console.log("产品类型未勾选");
// 				return false;
// 			}else{
// 				console.log("产品类型已勾选");
// 				return true;
// 			}
// 		}
// 		//判断主要生产工艺是否勾选
// 		function checkTechnology(){
// 			var flag=0;
// 			var el=document.getElementsByClassName("item3_in");
// 			for(var i=0;i<el.length;i++){
// 				if(el[i].checked){
// 					console.log(el[i].value);
// 					if(el[i].value=='其他'){
// 						var elInput=document.getElementById("item3_input");
// 						console.log(elInput);
// 						if(elInput.value=="" || elInput.value==null){
// 							elInput.focus();
// 							console.log("文本框3未填写");
// 							return false;
// 						}
// 					}
// 					flag=1;
// 				}
// 			}
// 			if(flag==0){
// 				document.getElementById("item3Span").innerHTML="<span class='red'>*</span>"
// 				el[0].focus();
// 				console.log("主要生产工艺未勾选");
// 				return false;
// 			}else{
// 				console.log("主要生产工艺已勾选");
// 				return true;
// 			}
// 		}
		//污染源类型点击不涉及则其他污染源类型不可选
		function disabledPollutionType(){
			var el=document.getElementsByClassName("item1_in");
			if(el[0].checked==true){
				for(var i=1;i<el.length;i++){
					el[i].checked=false;
					el[i].disabled=true;
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
		
// 		//判断废水处理情况是否勾选
// 		function checkWasteWater(){
// 			var flag=0;
// 			var el=document.getElementsByClassName("item4_in");
// 			for(var i=0;i<el.length;i++){
// 				if(el[i].checked){
// 					//console.log(el[i].value);
// 					if(el[i].value=='转移处理'){
// 						var elInput=document.getElementById("item4_input");
// 						//console.log(elInput);
// 						if(elInput.value=="" || elInput.value==null){
// 							elInput.focus();
// 							console.log("文本框4未填写");
// 							return false;
// 						}
// 					}
// 					flag=1;
// 				}
// 			}
// 			if(flag==0){
// 				document.getElementById("item4Span").innerHTML="<span class='red'>*</span>"
// 				el[0].focus();
// 				console.log("废水处理情况未勾选");
// 				return false;
// 			}else{
// 				console.log("废水处理情况已勾选");
// 				return true;
// 			}
// 		}
// 		//判断废气类似情况是否勾选
// 		function checkWasteGasType(){
// 			var flag=0;
// 			var el=document.getElementsByClassName("item5_in");
// 			for(var i=0;i<el.length;i++){
// 				if(el[i].checked){
// 					//console.log(el[i].value);
// 					if(el[i].value=='其他'){
// 						var elInput=document.getElementById("item5_input");
// 						console.log(elInput);
// 						if(elInput.value=="" || elInput.value==null){
// 							elInput.focus();
// 							console.log("文本框5未填写");
// 							return false;
// 						}
// 					}
// 					flag=1;
// 				}
// 			}
// 			if(flag==0){
// 				document.getElementById("item5Span").innerHTML="<span class='red'>*</span>"
// 				el[0].focus();
// 				console.log("废气类型未勾选");
// 				return false;
// 			}else{
// 				console.log("废气类型已勾选");
// 				return true;
// 			}
// 		}
// 		//判断废气处理是否勾选
// 		function checkWasteGasHandle(){
// 			var el=document.getElementsByClassName("item6_in");
// 			//console.log(el);
// 			for(var i=0;i<el.length;i++){
// 				if(el[i].checked){	
// 					console.log("废气处理情况已勾选");
// 					return true;
// 				}
// 			}
// 			document.getElementById("item6Span").innerHTML="<span class='red'>*</span>"
// 			el[0].focus();
// 			console.log("废气处理情况未勾选");
// 			return false;
// 		}
// 		//判断危废贮存情况是否勾选
// 		function checkDangerStorage(){
// 			var el=document.getElementsByClassName("item7_in");
// 			//console.log(el);
// 			for(var i=0;i<el.length;i++){
// 				if(el[i].checked){	
// 					console.log("危险贮存情况已勾选");
// 					return true;
// 				}
// 			}
// 			document.getElementById("item7Span").innerHTML="<span class='red'>*</span>"
// 			el[0].focus();
// 			console.log("危险贮存情况未勾选");
// 			return false;
// 		}
// 		//判断危废合同签订是否勾选
// 		function checkDangerContract(){
// 			var flag1=0;	//判断合同签订是否勾选
// 			var flag2=0;	//判断是否过期是否勾选
// 			var el=document.getElementsByClassName("item8_in");
// 			for(var i=0;i<el.length;i++){
// 				if(el[i].checked){
// 					//console.log(el[i].value);
// 					if(el[i].value=='已签订'){
// 						var elchilds=document.getElementsByClassName("item8_in_radio");
// 						for(var j=0;j<elchilds.length;j++){
// 							//console.log(elchilds[j]);
// 							if(elchilds[j].checked){
// 								console.log("是否过期已填写");
// 								flag2=1;
// 								break;
// 							}
// 						}
// 						if(flag2!=1){
// 							document.getElementById("item8ChildSpan").innerHTML="<span class='red'>*</span>"
// 							elchilds[0].focus();
// 							console.log("是否过期未填写");
// 							return false;
// 						}
// 					}
// 					flag1=1;
// 				}
// 			}
// 			if(flag1==0){
// 				document.getElementById("item8Span").innerHTML="<span class='red'>*</span>"
// 				el[0].focus();
// 				console.log("危废合同签订未勾选");
// 				return false;
// 			}else{
// 				console.log("危废合同签订已勾选");
// 				return true;
// 			}
// 		}
// 		//判断废物转移情况是否勾选
// 		function checkDangerTransfer(){
// 			var flag=0;
// 			var el=document.getElementsByClassName("item9_in");
// 			for(var i=0;i<el.length;i++){
// 				if(el[i].checked){
// 					//console.log(el[i].value);
// 					if(el[i].value=='不规范'){
// 						var elInput=document.getElementById("item9_input");
// 						//console.log(elInput);
// 						if(elInput.value=="" || elInput.value==null){
// 							document.getElementById("item9ChildSpan").innerHTML="<span class='red'>*</span>"
// 							elInput.focus();
// 							console.log("文本框9未填写");
// 							return false;
// 						}
// 					}
// 					flag=1;
// 				}
// 			}
// 			if(flag==0){
// 				document.getElementById("item9Span").innerHTML="<span class='red'>*</span>"
// 				el[0].focus();
// 				console.log("废物转移未勾选");
// 				return false;
// 			}else{
// 				console.log("废物转移已勾选");
// 				return true;
// 			}
// 		}
// 		//判断处理情况是否勾选
// 		function checkTreatment(){
// 			var el=document.getElementsByClassName("item10_in");
// 			//console.log(el);
// 			for(var i=0;i<el.length;i++){
// 				if(el[i].checked){	
// 					console.log("处理情况已勾选");
// 					return true;
// 				}
// 			}
// 			document.getElementById("item10Span").innerHTML="<span class='red'>*</span>"
// 			el[0].focus();
// 			console.log("处理情况未勾选");
// 			return false;
// 		}
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
// 		//判断核实时间是否为空
// 		function checkVerifyTime(){
// 			var el=document.getElementById("verifyTime");
// 			//console.log(el.value);
// 			if(el.value=="" || el.value==null){
// 				el.focus();
// 				console.log("核实时间未填写");
// 				return false;

// 			}else{
// 				console.log("核实时间已填写");
// 				return true;
// 			}
// 		}
// 		//判断核实人员是否为空
// 		function checkVerifier(){
// 			var el=document.getElementById("verifier");
// 			//console.log(el.value);
// 			if(el.value=="" || el.value==null){
// 				el.focus();
// 				console.log("核实人员未填写");
// 				return false;

// 			}else{
// 				console.log("核实人员已填写");
// 				return true;
// 			}
// 		}
// 		//判断核实人员是否为空
// 		function checkcPerson(){
// 			var el1=document.getElementById("cPerson1");
// 			var el2=document.getElementById("cPerson2");
// 			//console.log(el1.value+" "+el2.value);
// 			if(el1.value=="" || el1.value==null){
// 				el1.focus();
// 				console.log("排查人员1未填写");
// 				return false;
// 			}else if(el2.value=="" || el2.value==null){
// 				el2.focus();
// 				console.log("排查人员2未填写");
// 				return false;
// 			}else{
// 				console.log("排查人员都已填写");
// 				return true;
// 			}
// 		}
// /*		//判断现场照片是否为空
// 		function checkFieldPhoto(){
// 			for(var i=1;i<=5;i++){
// 				var PhotoName="fieldFile"+i;
// 				var el=document.getElementById(PhotoName);
// 				//console.log(el.value);
// 				if(el.value=="" || el.value==null){
// 					console.log("照片"+i+"未上传");
// 					el.focus();
// 					return false;
// 				}
// 			}console.log("照片都已上传");
// 					return true;
// 		}*/
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
// 		//判断污染源编号是否为空
// 		function checkPollutionNo(){
// 			var el=document.getElementById("pollutionNo");
// 			//console.log(el.value);
// 			if(el.value=="" || el.value==null){
// 				el.focus();
// 				console.log("污染源编号为空");
// 				return false;

// 			}else{
// 				console.log("污染源编号不为空");
// 				return true;
// 			}
// 		}
// 		//显示整改建议
		function check(){
			showImage('fieldFile1','view1');
			showImage('fieldFile2','view2');
			showImage('fieldFile3','view3');
			showImage('fieldFile4','view4');
			// catchEvent(document.getElementById("pollutionSubmit"),"click",selectEmpty);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkPollutionNo);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkPollutionType);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkProductType);
			// catchEvent(document.getElementById("pollutionSubmit"),"click",checkTechnology);
			catchEvent(document.getElementById("noInvolve"),"click",disabledPollutionType);
			catchEvent(document.getElementById("noInvolveWater"),"click",noInvolveWater);
			catchEvent(document.getElementById("noInvolveGas"),"click",noInvolveGas);
			catchEvent(document.getElementById("noInvolveDanger"),"click",noInvolveDanger);
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
