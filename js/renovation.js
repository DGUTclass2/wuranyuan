		//事件绑定函数
		function catchEvent(eventObj,event,eventHandler){
			if(eventObj.addEventListener){
				eventObj.addEventListener(event,eventHandler);
			}else if(eventObj.attachEvent){
				event="on"+event;
				eventObj.attachEvent(event,eventHandler);
			}
		}
		//判断现场照片是否为空
		function checkFieldPhoto(){
			for(var i=1;i<=5;i++){
				var PhotoName="file"+i;
				var el=document.getElementById(PhotoName);
				//console.log(el.value);
				if(el.value=="" || el.value==null){
					console.log("照片"+i+"未上传");
					el.focus();
					return false;
				}
			}console.log("照片都已上传");
					return true;
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
		//判断核实时间是否为空
		function checkVerifyTime(){
			var el=document.getElementById("verifyTime");
			//console.log(el.value);
			if(el.value=="" || el.value==null){
				el.focus();
				console.log("核实时间未填写");
				return false;

			}else{
				console.log("核实时间已填写");
				return true;
			}
		}
		//判断整改期限是否为空
		function checkRectificationTime(){
			var el=document.getElementById("RectificationTime");
			//console.log(el.value);
			if(el.value=="" || el.value==null){
				el.focus();
				console.log("整改期限未填写");
				return false;

			}else{
				console.log("整改期限已填写");
				return true;
			}
		}
		//判断整改情况是否为空
		function checkRectification(){
			var el=document.getElementById("Rectification");
			//console.log(el.value);
			if(el.value=="" || el.value==null){
				el.focus();
				console.log("整改情况未填写");
				return false;

			}else{
				console.log("整改情况已填写");
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
		//判断建议整改措施是否勾选
		function checkDangerStorage(){
			var el=document.getElementsByClassName("correctiveMeasures");
			//console.log(el);
			for(var i=0;i<el.length;i++){
				if(el[i].checked){	
					console.log("整改措施已勾选");
					return true;
				}
			}
			el[0].focus();
			console.log("整改措施未勾选");
			return false;
		}
		//判断责任人员是否为空
		function checkcPerson(){
			var el1=document.getElementById("liablePerson1");
			var el2=document.getElementById("liablePerson2");
			//console.log(el1.value+" "+el2.value);
			if(el1.value=="" || el1.value==null){
				el1.focus();
				console.log("责任人员1未填写");
				return false;
			}else if(el2.value=="" || el2.value==null){
				el2.focus();
				console.log("责任人员2未填写");
				return false;
			}else{
				console.log("责任人员都已填写");
				return true;
			}
		}
		showImage('file1','view1');
		showImage('file2','view2');
		showImage('file3','view3');
		showImage('file4','view4');
		showImage('file5','view5');
		catchEvent(document.getElementById("renovationSubmit"),"click",checkFieldPhoto);
		catchEvent(document.getElementById("renovationSubmit"),"click",checkVerifyTime);
		catchEvent(document.getElementById("renovationSubmit"),"click",checkRectificationTime);
		catchEvent(document.getElementById("renovationSubmit"),"click",checkRectification);
		catchEvent(document.getElementById("renovationSubmit"),"click",checkDangerStorage);
		catchEvent(document.getElementById("renovationSubmit"),"click",checkcPerson);
		catchEvent(document.getElementById("renovationSubmit"),"click",checkCorrectiveMeasures);
		