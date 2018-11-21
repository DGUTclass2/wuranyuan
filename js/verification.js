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
		//判断现场情况核查情况是否为空
		function checkFieldCheck(){
			var el=document.getElementById("fieldCheck");
			//console.log(el.value);
			if(el.value.trim()=="" || el.value==null){
				el.focus();
				console.log("核查情况未填写");
				return false;

			}else{
				console.log("核查情况已填写");
				return true;
			}
		}
		//判断核查时间是否为空
		function checkVerifyTime(){
			var el=document.getElementById("verifyTime");
			//console.log(el.value);
			if(el.value=="" || el.value==null){
				el.focus();
				console.log("核查时间未填写");
				return false;

			}else{
				console.log("核查时间已填写");
				return true;
			}
		}
		//判断核查人员是否为空
		function checkcPerson(){
			var el1=document.getElementById("cPeople1");
			var el2=document.getElementById("cPeople2");
			//console.log(el1.value+" "+el2.value);
			if(el1.value.trim()=="" || el1.value==null){
				el1.focus();
				console.log("核查人员1未填写");
				return false;
			}else if(el2.value.trim()=="" || el2.value==null){
				el2.focus();
				console.log("核查人员2未填写");
				return false;
			}else{
				console.log("核查人员都已填写");
				return true;
			}
		}
		//判断是否完成整改是否勾选
		function checkCorrectiveMeasures(){
			var el=document.getElementsByClassName("isRectification");
			//console.log(el);
			for(var i=0;i<el.length;i++){
				if(el[i].checked){	
					console.log("是否完成整改已勾选");
					return true;
				}
			}
			el[0].focus();
			console.log("是否完成整改未勾选");
			return false;
		}
		catchEvent(document.getElementById("verificationSubmit"),"click",checkFieldCheck);
		catchEvent(document.getElementById("verificationSubmit"),"click",checkVerifyTime);
		catchEvent(document.getElementById("verificationSubmit"),"click",checkcPerson);
		catchEvent(document.getElementById("verificationSubmit"),"click",checkCorrectiveMeasures);