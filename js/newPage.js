window.onload=function(){
	var vme=new Vue({
		el: '#apped',
		data: {
			disabled:true,
			towns:[],
			tags:[],
			communities:[],
			products:[],
			technologys:[],
			wasteGases:[],
			industries:[
			{name:"畜禽养殖场、养殖小区"},
			{name:"农副食品加工业"},
			{name:"食品制造业"},
			{name:"纺织品制造"},
			{name:"服装制造"},
			{name:"制鞋业"},
			{name:"家具制造"},
			{name:"造纸和纸制品业"},
			{name:"印刷厂"},
			{name:"工艺品制造"},
			{name:"化学原料和化学制品制造业"},
			{name:"医药制造业"},
			{name:"橡胶和塑料制品业"},
			{name:"水泥制造"},
			{name:"玻璃及玻璃制品"},
			{name:"陶瓷制品"},
			{name:"金属制品业"},
			{name:"电气机械及器材制造"},
			{name:"电子元件及电子专用材料制造"},
			{name:"火力发电"},
			{name:"危险废物（含医疗废物）利用及处置"},
			{name:"城镇生活垃圾（含餐厨废弃物）集中处置"},
			{name:"其他"}],
			ProductConditions:[{name:"正常生产"},{name:"部分生产"},{name:"停产"}],

			re_userNo:"",
			re_subdivisionArea:"",
			re_fightUnit:"",
			re_town:"",
			re_community:"",
			re_address:"",
			re_name:"",
			re_legalRepresentative:"",
			re_legalRePhone:"",
			re_envirRepresentative:"",
			re_envirRePhone:"",
			re_hasLicence:"",
			re_licenseUrl:"",
			re_envirProcedures:"",
			re_otherEnvirProcedures:"",
			tmp_envirProcedures:"",
			re_tradeType:"",
			re_otherTradeType:"",		
			re_sewagePermit:"",
			re_emergencyPlan:"",
			re_tag:"",
			re_otherTag:"",
			re_productCondition:"",
			re_pollutionType:[],
			re_productType:[],
			re_otherProductType:"",
			re_technology:[],
			re_otherTechnology:"",
			re_wastewaterTreatment:"",
			re_otherWastewaterTreatment:"",
			re_waterAcceptComp:"",
			re_exhaustGasType:[],
			re_wasteGasTreatment:[],
			re_hazardousWasteStorage:"",
			re_hazardousWasteTransfer:"",
			re_hazardousAcceptComp:"",
			re_hazardousStorageSign:"",
			re_treat:"",
			re_problem:"",
			re_auditor:"",
			re_inspector1:"",
			re_inspector2:"",
			re_inspector3:"",
			re_inspector4:"",
			re_picture1:"",
			re_licenseUrl:"",
			re_picture3:[],
			re_picture4:[],
			re_picture5:[],
			re_checkDate:"",

			tradeType:"",
			envirProcedures:"",
			re_otherExhaustGasType:"",
			lists3:[{fileName:"file0.18751232642883942"}],
			lists4:[{fileName:"file0.18751232643883942"}],
			lists5:[{fileName:"file0.18751232612883942"}]
		},
		watch: {
				//环保手续隐藏和显示
				tmp_envirProcedures:function(val){
					if(val=='0'){
						this.re_envirProcedures='无';
						this.re_otherEnvirProcedures='';
						this.$refs.examine.style.display='none';
					}else{

						this.$refs.examine.style.display='block';
					}
				},
				//处理情况，若处理情况为不需再改则处理意见设为空
				re_treat:function(val){
					if(val === '不需处理'){//不需处理
						this.re_problem="";
						this.$refs.problemTextarea.style.display='none';
					} else {
						this.$refs.problemTextarea.style.display='block';
					}
				},
				//若环保手续选择其他，隐藏或显示其他环保手续文本框
				re_envirProcedures:function(val){
					if(this.re_envirProcedures.indexOf('其他') > -1) {//选择了其他
						this.$refs.ohterExamine.style.display='block';
					}else{//没有选择其他
						this.$refs.ohterExamine.style.display='none';
						this.re_otherEnvirProcedures='';
					}
				},
				//排查对象范围选择其他，隐藏或显示其他排查对象范围文本框
				re_tag:function(){
					/*
					 *此处13表示数据库中的其他项对应的ID，若修改数据库，13也要跟着修改
					 */
					if(this.re_tag==13){//选择了其他
						console.log("选择了其他");
						this.$refs.otherTag.style.display='block';
					}else{//没有选择其他
						console.log("没有选择其他");
						this.$refs.otherTag.style.display='none';
						this.re_otherTag='';
					}
				},
				//若行业类型选择其他，隐藏或显示其他行业类型文本框
				re_tradeType:function(val){
					if(this.re_tradeType.indexOf('其他') > -1){//选择了其他
						this.$refs.otherTradeType.style.display='block';
					}else{//没有选择其他
						this.$refs.otherTradeType.style.display='none';
						this.re_otherTradeType='';
					}
				},
				re_hasLicence:function(){
					if(this.re_hasLicence == 0){//无营业执照
						this.$refs.hasLicencePic.style.display="none"
					}else{
						this.$refs.hasLicencePic.style.display="block"
					}
				},
				/*re_hasLicence:function(val){
					if(val==='无' || val==''){
						this.re_uscCode="";
						this.$refs._uscCode.style.display='none';
					} else {
						this.$refs._uscCode.style.display='block';
					}
				},*/
				/*re_wastewaterTreatment:function(val){
					if(this.re_wastewaterTreatment.indexOf('转移处理') == -1) {
						this.re_waterAcceptComp = '';
					}
				},*/
				//选择污染源类型时其他框显示与隐藏
				re_pollutionType: function(val) {
					console.log(val);
						if(val.indexOf('不涉及') > -1) {//不涉及
							if(this.re_pollutionType.length>1){
								this.re_pollutionType.length=0;
								this.re_pollutionType.push('不涉及');
							}
						}
						if(val.indexOf('涉水') == -1) {//不涉水
							this.re_wastewaterTreatment = '';
							this.re_waterAcceptComp = '';
							this.re_otherWastewaterTreatment='';
							this.$refs.item4_div.style.display='none';
						} else if(val.indexOf('涉水') > -1) {//涉水
							this.$refs.item4_div.style.display='block';
						}
						if(val.indexOf('涉气') == -1) {//不涉气
							this.re_exhaustGasType = [];
							this.re_otherExhaustGasType = '';
							this.re_wasteGasTreatment=[];
							//废气处理情况全部设为未勾选
							let els = this.$refs.item5_div.querySelectorAll('input.gasRadio');
							for(var i=0;i<els.length;i++){
								els[i].checked=false;
							}
							this.$refs.item5_div.style.display='none';
						} else if(val.indexOf('涉气') > -1) {//涉气
							this.$refs.item5_div.style.display='block';
						}
						if(val.indexOf('涉危废') == -1) {//不涉危废
							this.re_hazardousWasteStorage = '';
							this.re_hazardousAcceptComp = '';
							this.re_hazardousStorageSign = '';
							this.re_hazardousWasteTransfer = '';
							this.$refs.hazardous.style.display='none';
						} else if(val.indexOf('涉危废') > -1) {	//涉危废
							this.$refs.hazardous.style.display='block';
							
						} 
					},
					re_wastewaterTreatment:function(){//废水处理分情况判定
						if(this.re_wastewaterTreatment=='自建污水处理设施' || this.re_wastewaterTreatment=='未处理直接排放'){
							this.re_waterAcceptComp='';
							this.re_otherWastewaterTreatment='';
						}else if(this.re_wastewaterTreatment=='转移处理'){
							this.re_otherWastewaterTreatment='';
						}else{
							this.re_waterAcceptComp='';
						}
					},
					re_hazardousWasteTransfer:function(){//危险废物转移选择不规范时，接收单位置空
						if(this.re_hazardousWasteTransfer === '不规范') {
							this.re_hazardousAcceptComp = '';
						}
					},
					re_productType: function (val) {//产品类型不选其他时，其他产品类型为空
						if(val.indexOf('其他') == -1) {//不选择其他
							this.re_otherProductType = '';
							this.$refs.otherProductType[0].disabled=true;
						}else{//选择其他的情况
							this.$refs.otherProductType[0].disabled=false;
						}
					},
					re_technology: function(val) {//主要工艺不选其他时，其他主要工艺为空
						if(val.indexOf('其他') == -1) {//不选择其他
							this.re_otherTechnology = '';
							this.$refs.otherTechnology[0].disabled=true;
						}else{//选择其他的情况

							this.$refs.otherTechnology[0].disabled=false;
						}
					},
					re_legalRePhone:function(val){//法定联系人验证电话正则表达式
						var Reg=/(^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$)|(^769)[0-9]{8}$/g;
						if(!Reg.test(val)){
							this.$refs.leReIponeSpan.innerHTML='电话格式错误！';
						}else{
							this.$refs.leReIponeSpan.innerHTML='';
						}
					},
					re_envirRePhone:function(val){//环保联系人验证电话正则表达式
						var Reg=/(^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$)|(^769)[0-9]{8}$/g;
						if(!Reg.test(val)){
							this.$refs.envirRePhoneSpan.innerHTML='电话格式错误！';
						}else{
							this.$refs.envirRePhoneSpan.innerHTML='';
						}
					},
					re_subdivisionArea:function(val){//环保联系人验证电话正则表达式
						var Reg=/^\d+-\d+-\d+$/g;
						if(!Reg.test(val)){
							this.$refs.subdivisionAreaSpan.innerHTML='细分区域格式错误！';
						}else{
							this.$refs.subdivisionAreaSpan.innerHTML='';
						}
					},
					re_exhaustGasType:function(){
						let els = this.$refs.item5_div.querySelectorAll('input.gasRadio');
						/*
						 *修改废气类型数据库时，需要修改此项
						 */
						if(this.re_exhaustGasType.indexOf('VOCs')>-1){//选择了VOCs
							els[0].disabled=false;
							els[1].disabled=false;
						}else{//没有选择VOCs
							els[0].checked=false;
							els[1].checked=false;
							els[0].disabled=true;
							els[1].disabled=true;
						}
						if(this.re_exhaustGasType.indexOf('粉尘废气')>-1){//选择了粉尘废气
							els[2].disabled=false;
							els[3].disabled=false;
						}else{//没有选择粉尘废气
							els[2].checked=false;
							els[3].checked=false;
							els[2].disabled=true;
							els[3].disabled=true;
						}
						if(this.re_exhaustGasType.indexOf('锅炉废气')>-1){//选择了锅炉废气
							els[4].disabled=false;
							els[5].disabled=false;
						}else{//没有选择锅炉废气
							els[4].checked=false;
							els[5].checked=false;
							els[4].disabled=true;
							els[5].disabled=true;
						}
						if(this.re_exhaustGasType.indexOf('异味')>-1){//选择了异味
							els[6].disabled=false;
							els[7].disabled=false;
						}else{//没有选择异味
							els[6].checked=false;
							els[7].checked=false;
							els[6].disabled=true;
							els[7].disabled=true;
						}
						if(this.re_exhaustGasType.indexOf('其他') == -1) {//没有选择其他项
							this.re_otherExhaustGasType = '';
							this.$refs.otherExhaustGasType[0].disabled=true;
						}else{
							this.$refs.otherExhaustGasType[0].disabled=false;
						}
					},
					/*tmp_emergencyPlan1:function(val){
							if(val.indexOf('已备案')==-1){
								this.tmp_emergencyPlan2='';
								this.re_emergencyPlan=this.tmp_emergencyPlan1+this.tmp_emergencyPlan2;
							}else{
								this.re_emergencyPlan=this.tmp_emergencyPlan1+this.tmp_emergencyPlan2;
							}
						},
						tmp_envirProcedures1:function(val){
							if(val=='无环保手续'){
								this.tmp_envirProcedures2='';
								this.re_envirProcedures=this.tmp_envirProcedures1+this.tmp_envirProcedures2;
							}else{
								this.re_envirProcedures=this.tmp_envirProcedures1+this.tmp_envirProcedures2;
							}
						}*/
					},
					methods:{
						//验证必填项是否都已填
						checkItem:function(){
							console.log(vme.$refs.subdivisionAreaSpan);
							if(vme.re_subdivisionArea==""){//细分区域未填写
								vme.$refs.subdivisionAreaSpan.innerHTML="细分区域未填写！";
								vme.$refs.subdivisionArea.focus();
							}else{
								vme.$refs.subdivisionAreaSpan.innerHTML="";
							}
							if(vme.re_fightUnit==""){//作战单元未填写
								vme.$refs.fightUnitSpan.innerHTML="作战单元未填写！";
								vme.$refs.fightUnit.focus();
							}else{
								vme.$refs.fightUnitSpan.innerHTML="";
							}
							if(vme.re_town==""){//街镇未填写
								vme.$refs.townSpan.innerHTML="街镇未填写！";
								vme.$refs.town.focus();
							}else{
								vme.$refs.townSpan.innerHTML="";
							}
							if(vme.re_community==""){//村/社区未填写
								vme.$refs.communitySpan.innerHTML="村/社区未填写！";
								vme.$refs.community.focus();
							}else{
								vme.$refs.communitySpan.innerHTML="";
							}
							if(vme.re_address==""){//地址未填写
								vme.$refs.addressSpan.innerHTML="地址未填写！";
								vme.$refs.address.focus();
							}else{
								vme.$refs.addressSpan.innerHTML="";
							}
							if(vme.re_name==""){//企业名称未填写
								vme.$refs.nameSpan.innerHTML="企业名称未填写！";
								vme.$refs.name.focus();
							}else{
								vme.$refs.nameSpan.innerHTML="";
							}
							if(vme.re_legalRepresentative==""){//法定联系人未填写
								vme.$refs.legalRepresentativeSpan.innerHTML="法定联系人未填写！";
								vme.$refs.legalRepresentative.focus();
							}else{
								vme.$refs.legalRepresentativeSpan.innerHTML="";
							}
							if(vme.re_legalRePhone==""){//法定联系人联系方式未填写
								vme.$refs.leReIponeSpan.innerHTML="法定联系人联系方式未填写！";
								vme.$refs.leReIpone.focus();
							}else{
								vme.$refs.leReIponeSpan.innerHTML="";
							}
							if(vme.re_envirRepresentative==""){//环保联系人未填写
								vme.$refs.envirRepresentativeSpanSpan.innerHTML="环保联系人未填写！";
								vme.$refs.envirRepresentative.focus();
							}else{
								vme.$refs.envirRepresentativeSpanSpan.innerHTML="";
							}
							if(vme.re_envirRePhone==""){//环保联系人联系方式未填写
								vme.$refs.envirRePhoneSpan.innerHTML="环保联系人联系方式未填写！";
								vme.$refs.envirRePhone.focus();
							}else{
								vme.$refs.envirRePhoneSpan.innerHTML="";
							}
							if(vme.re_hasLicence==""){//营业执照未勾选
								vme.$refs.hasLicenceSpan.innerHTML="营业执照未勾选！";
								vme.$refs.hasLicence.focus();
							}else{
								vme.$refs.hasLicenceSpan.innerHTML="";
							}
							

							//行业类型选择其他时，其他行业类型的内容赋值给行业类型上传
							if(vme.re_tradeType=='其他'){
								vme.tradeType=vme.re_otherTradeType;
							}else{
								vme.tradeType=vme.re_tradeType;
							}
		       				//废气处理上传数据处理
		       				let els = vme.$refs.item5_div.querySelectorAll('input.gasRadio');
							/*
							 *修改废气类型数据库时，需要修改此项
							 */
							if(vme.re_exhaustGasType.indexOf('粉尘废气')>-1){//选择了粉尘废气
								if(els[0].checked==true){
									vme.re_wasteGasTreatment.push("未处理直接排放");
								}else{
									vme.re_wasteGasTreatment.push("经处理后排放");
								}
							}
							if(vme.re_exhaustGasType.indexOf('锅炉废气')>-1){//选择了锅炉废气
								if(els[2].checked==true){
									vme.re_wasteGasTreatment.push("未处理直接排放");
								}else{
									vme.re_wasteGasTreatment.push("经处理后排放");
								}
							}
							if(vme.re_exhaustGasType.indexOf('异味')>-1){//选择了异味
								if(els[4].checked==true){
									vme.re_wasteGasTreatment.push("未处理直接排放");
								}else{
									vme.re_wasteGasTreatment.push("经处理后排放");
								}
							}
							if(vme.re_exhaustGasType.indexOf('VOCs')>-1){//选择了VOCs
								if(els[0].checked==true){
									vme.re_wasteGasTreatment.push("未处理直接排放");
								}else{
									vme.re_wasteGasTreatment.push("经处理后排放");
								}
							}
							if(vme.re_exhaustGasType.indexOf('其他')>-1){//选择了VOCs
									vme.re_wasteGasTreatment.push(vme.re_otherExhaustGasType);
							}
		       				//环保手续上传数据处理
		       				if(vme.tmp_envirProcedures==0){//无环保手续
		       					vme.envirProcedures='无';
		       				}else{
		       					if(vme.re_envirProcedures=='其他'){
		       						vme.envirProcedures='其他';
		       					}else{
		       						vme.envirProcedures='有';
		       					}
		       				}

		       			},
					//拼接字符串id
					fileId5(id){return "file5"+id;},
					viewId5(id){return "view5"+id;},
					fileId4(id){return "file4"+id;},
					viewId4(id){return "view4"+id;},
					fileId3(id){return "file3"+id;},
					viewId3(id){return "view3"+id;},
					//动态添加文件
					add3:function(){
						let cope = {fileName:"file"+Math.random()};
						this.lists3.push(cope);
					},
					//动态删除文件
					del3:function(index){
						this.lists3.splice(index,1);
					},
					//动态添加文件
					add4:function(){
						let cope = {fileName:"file"+Math.random()};
						this.lists4.push(cope);
					},
					//动态删除文件
					del4:function(index){
						this.lists4.splice(index,1);
					},
					//动态添加文件
					add5:function(){
						let cope = {fileName:"file"+Math.random()};
						this.lists5.push(cope);
					},
					//动态删除文件
					del5:function(index){
						this.lists5.splice(index,1);
					},
					//动态预览照片
					showImage:function (fileId,imageId){
						console.log(fileId,imageId);
						var files = document.getElementById(fileId).files;
						var file;
						if (files && files.length) {
							file = files[0];
							if (/^image\/png$|jpeg$/.test(file.type)) {
								document.getElementById(imageId).src = URL.createObjectURL(file);
							}
						};
					},
					//定位功能
					getLocation1:function(){
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
					},
					//法定联系人信息同步到环保联系人
					theReSame:function(){
						this.re_envirRepresentative=this.re_legalRepresentative;
						this.re_envirRePhone=this.re_legalRePhone;
					},
					postData:function(){
				        //发送 post 请求
				        var storage=window.localStorage;
				        var userid=storage.getItem("userId");
				        var account=storage.getItem("account");
					    var stuNo=storage.getItem("stuNo");	//获取清查人员编号

					    let param={userId:userid};
					    let headers={"content-type":"application/json"};
					    let url;
					    var results;

				        this.re_inspector1=account;	//绑定排查人员1
				        this.re_userNo=stuNo;		//绑定清查人员编号
						//获取镇街
						url="/wuranyuan-server/getAllPollutionTown";
						this.$http.post(url,param,headers,{emulateJSON:true}).then(function(res){
							results=res.body;
							for(var i=0;i<results.length;i++){
								this.$data.towns.push({name:results[i].town});
									//console.log(this.$data.towns[i].name);
								}
							},function(res){
								console.log(res.status);
								alert("获取数据失败，请与管理员联系!");
							});
							//获取产品类型
							url="/wuranyuan-server/getAllProductTypes";
							this.$http.post(url,param,headers,{emulateJSON:true}
								).then(function(res){
									results=res.body;
									for(var i=0;i<results.length;i++){
										//console.log(results[i].name);
										this.$data.products.push({name:results[i].name});
									}      
								},function(res){
									console.log(res.status);
								});
			                //获取生产工艺类型
			                url="/wuranyuan-server/getAllCraftsTypes";
			                this.$http.post(url,param,headers,{emulateJSON:true}
			                	).then(function(res){
			                		results=res.body;
			                		for(var i=0;i<results.length;i++){
			                			this.$data.technologys.push({name:results[i].name});
			                		} 
			                	},function(res){
			                		console.log(res.status);
			                	});
			                //获取标签
			                url="/wuranyuan-server/getAllPollutionTags";
			                this.$http.post(url,param,
			                	headers,{emulateJSON:true}
			                	).then(function(res){
			                		var results=res.body;
			                		for(var i=0;i<results.length;i++){
								//console.log(results[i].name);
								this.$data.tags.push({name:results[i].name,id:results[i].id});
							}
						},function(res){
							console.log(res.status);
						});
		                 //获取废气类型
		                 url="/wuranyuan-server/getAllExhaustGasTypes";
		                 this.$http.post(url,param,headers,{emulateJSON:true}
		                 	).then(function(res){
		                 		results=res.body;
		                 		for(var i=0;i<results.length;i++){
		                 			this.$data.wasteGases.push({name:results[i].name});
		                 		} 
		                 	},function(res){
		                 		console.log(res.status);
		                 	});
		                 },

		                 	/*//第一次获取行业类型
		                 	url="/wuranyuan-server/getIndustryTypeFirst";
		                 	this.$http.post(url,param,
		                 		headers,{emulateJSON:true}
		                 		).then(function(res){

		                 			var results=res.body;
			                       //console.log(results);
			                       for(var i=0;i<results.length;i++){
									//console.log(results[i].name);
									this.$data.industries1.push({name:results[i].name,type:results[i].type});
								}

							},function(res){
								console.log(res.status);
							});
		                 	},
		                 //第二次获取行业类型
		                  postindustries2:function(){
		                  	var storage=window.localStorage;
		                  	var userid=storage.getItem("userId");
		                  	var industries1=document.getElementById("industries1");
		                  	var theIndustries1;
		                  	this.$data.industries2=[];
		                  	for (var i = industries1.length - 1; i >= 0; i--) {
		                  		if(industries1.options[i].selected==true){

		                  			theIndustries1=industries1.options[i].value;
		                  			break;
		                  		}
		                  	}
		                  	let param={condition:theIndustries1,userId:userid};
		                  	let headers={"content-type":"application/json"};
		                  	let url="/wuranyuan-server/getIndustryTypeSecond";
		  		  		//console.log(param);
		  		  		this.$http.post(url,param,
		  		  			headers,{emulateJSON:true}
		  		  			).then(function(res){
		  		  				var results=res.body;
		                        //console.log(results);
		                        for(var i=0;i<results.length;i++){
								//console.log(results[i].community);
								this.$data.industries2.push({name:results[i].name,type:results[i].type});                                  
							}
						},function(res){
							console.log(res.statu);
						});
		  		  		},
		           //第三次获取行业类型
		           postindustries3:function(){
		           	var storage=window.localStorage;
		           	var userid=storage.getItem("userId");
		           	var industries2=document.getElementById("industries2");
		           	var theIndustries2;
		           	this.$data.industries3=[];
		           	for (var i = industries2.length - 1; i >= 0; i--) {
		  		  			//console.log(industries2.options[i].value);
		  		  			if(industries2.options[i].selected==true){
		  		  				
		  		  				theIndustries2=industries2.options[i].value;
		  		  				break;
		  		  			}
		  		  		}
		  		  		let param={condition:theIndustries2,userId:userid};
		  		  		let headers={"content-type":"application/json"};
		  		  		let url="/wuranyuan-server/getIndustryTypeThird";
		  		  		//console.log(param);
		  		  		this.$http.post(url,param,
		  		  			headers,{emulateJSON:true}
		  		  			).then(function(res){
		  		  				var results=res.body;
		                        //console.log(results);
		                        for(var i=0;i<results.length;i++){
								//console.log(results[i].community);
								this.$data.industries3.push({name:results[i].name,type:results[i].type});                                  
							}
						},function(res){
							console.log(res.statu);
						});
		  		  		},
		           //第四次获取行业类型
		           postindustries4:function(){
		           	var storage=window.localStorage;
		           	var userid=storage.getItem("userId");
		           	var industries3=document.getElementById("industries3");
		           	var theIndustries3;
		           	this.$data.industries4=[];
		           	for (var i = industries3.length - 1; i >= 0; i--) {
		              //console.log(industries3.options[i].value);
		              if(industries3.options[i].selected==true){

		              	theIndustries3=industries3.options[i].value;
		              	break;
		              }
		          }
		          let param={condition:theIndustries3,userId:userid};
		          let headers={"content-type":"application/json"};
		          let url="/wuranyuan-server/getIndustryTypeFourth";
		            //console.log(param);
		            this.$http.post(url,param,
		            	headers,{emulateJSON:true}
		            	).then(function(res){
		            		var results=res.body;
		            		console.log(results);
		            		for(var i=0;i<results.length;i++){
		            			this.$data.industries4.push({name:results[i].name,no:results[i].no});                                  
		            		}
		            	},function(res){
		            		console.log(res.statu);
		            	});
		            },*/

		          //根据镇街获取社区
		          postCommunity:function(){
		          	var storage=window.localStorage;
		          	var userid=storage.getItem("userId");
		          	var towns=this.$refs.town;
		          	
		          	var theTowm;
		          	this.$data.communities=[];
		          	for (var i = towns.length - 1; i >= 0; i--) {
		          		
		          		if(towns.options[i].selected==true){
		          			theTowm=towns.options[i].value;
		          			break;
		          		}
		          	}
		          	let param={condition:theTowm,userId:userid};
		          	let headers={"content-type":"application/json"};
		          	let url="/wuranyuan-server/getAllPollutionCommunity";
		          	this.$http.post(url,param,
		          		headers,{emulateJSON:true}
		          		).then(function(res){
		          			var results=res.body;
		          			for(var i=0;i<results.length;i++){
							//console.log(results[i].community);
							this.$data.communities.push({name:results[i].community});                                  
						}
					},function(res){
						console.log(res.status);
					});
		          	},


		       	//获取照片函数
		       	postPic:function(){
		       		document.getElementById("pollutionSubmit").setAttribute("disabled", true);
		       		var flag=true;
		       		var no=-1;
		       		var form = document.getElementById("picForm");
		       		var imageList = new FormData(form);
		       		var length2;
		       		var length3;
		       		var length4;
		       		var length5;
		       		let pic1=this.$refs.file1.files;
		       		let pic2=this.$refs.file2.files;
		       		let pic3=this.$refs.file3;
		       		let pic4=this.$refs.file4;
		       		let pic5=this.$refs.file5;
		       		if(pic1.length>0){
		       			if(pic1[0].size>(5*1024*1024)) flag=false;
		       			no=1;
		       		}
		       		if(pic2.length>0){
		       			if(pic2[0].size>(5*1024*1024)) flag=false;
		       			no=2;
		       		}
		       		for(var i=0;i<pic3.length;i++){
		       			let tempPic3=pic3[i].files;
		       			length3=pic3.length;
		       			if(tempPic3.length>0){
		       				if(tempPic3[0].size>(5*1024*1024)) flag=false;
		       				no=3;
		       			}
		       		}
		       		for(var i=0;i<pic4.length;i++){
		       			let tempPic4=pic4[i].files;
		       			length4=pic4.length;
		       			if(tempPic4.length>0){
		       				if(tempPic4[0].size>(5*1024*1024)) flag=false;
		       				no=3;
		       			}
		       		}
		       		for(var i=0;i<pic5.length;i++){
		       			let tempPic5=pic5[i].files;
		       			length5=pic5.length;
		       			if(tempPic5.length>0){
		       				if(tempPic5[0].size>(5*1024*1024)) flag=false;
		       				no=3;
		       			}
		       		}

		       		if (no==-1){
		       			flag=false;
		       		}
		       		if(this.re_hasLicence==""){//未勾选营业执照
		       			alert("未勾选营业执照");
		       			document.getElementById("pollutionSubmit").removeAttribute("disabled");
		       			return false;
		       		}
		       		if(this.re_hasLicence==0){//无营业执照
		       			length2=0;
		       		}else{
		       			length2=1;
		       		}
		       		if(flag){
		       			document.getElementById("pollutionSubmit").innerHTML="提交中，请稍后...";
		       			let headers={"content-type":"multipart/form-data"};
		       			let url="/wuranyuan-server/uploadPic";
		       			this.$http.post(url,imageList,
		       				headers,{emulateJSON:true}
		       				).then(function(res){
		       					console.log(res);
		       					var results=res.body;
		       					if(results.code=="00"){
		       						if(results.data.length>=1)
		       							this.re_picture1=results.data[0];
		       						if(length2>0)
		       							this.re_licenseUrl=results.data[1];
		       						if(length3>0){
		       							for(var i=1+length2;i<1+length2+length3;i++){
		       								this.re_picture3.push(results.data[i]);
		       							}
		       						}
		       						if(length4>0){
		       							for(var i=1+length2+length3;i<1+length2+length3+length4;i++){
		       								this.re_picture4.push(results.data[i]);
		       							}
		       						}
		       						if(length5>0){
		       							for(var i=1+length2+length3+length4;i<1+length2+length3+length4+length5;i++){
		       								console.log(i);
		       								this.re_picture5.push(results.data[i]);
		       							}
		       						}
		       					}
		       					var storage=window.localStorage;
		       					var userid=storage.getItem("userId");
		       					var longitude=document.getElementById("lngAndlat1").value;
		       					var latitude=document.getElementById("lngAndlat2").value;

		       					this.$options.methods.checkItem();
		       					let param={
		       						userId:userid,
		       						tag:this.$data.re_tag,
		       						town:this.$data.re_town,
		       						community:this.$data.re_community,
		       						address:this.$data.re_address,
		       						longitude:longitude,
		       						latitude:latitude,
		       						name:this.$data.re_name,
		       						legalRepresentative:this.$data.re_legalRepresentative,
		       						legalRePhone:this.$data.re_legalRePhone,
		       						envirRepresentative:this.$data.re_envirRepresentative,
		       						envirRePhone:this.$data.re_envirRePhone,
		       						hasLicence:this.$data.re_hasLicence=='0'?false:true,
		       						envirProcedures:this.$data.envirProcedures,
		       						tradeType:this.$data.tradeType,
		       						pollutionType:this.$data.re_pollutionType.join("#"),
		       						productType:this.$data.re_productType.join("#"),
		       						otherProductType:this.$data.re_otherProductType,
		       						technology:this.$data.re_technology.join("#"),
		       						otherTechnology:this.$data.re_otherTechnology,
		       						wastewaterTreatment:this.$data.re_wastewaterTreatment,
		       						waterAcceptComp:this.$data.re_waterAcceptComp,
		       						exhaustGasType:this.$data.re_exhaustGasType.join('#'),
		       						wasteGasTreatment:this.$data.re_wasteGasTreatment.join('#'),
		       						hazardousWasteStorage:this.$data.re_hazardousWasteStorage,
		       						hazardousWasteTransfer:this.$data.re_hazardousWasteTransfer,
		       						hazardousAcceptComp:this.$data.re_hazardousAcceptComp,
		       						hazardousStorageSign:this.$data.re_hazardousStorageSign,
		       						emergencyPlan:this.$data.re_emergencyPlan,
		       						problem:this.$data.re_problem,
		       						treat:this.$data.re_treat,
		       						sewagePermit:this.$data.re_sewagePermit,
		       						auditor:this.$data.re_auditor,
		       						inspector1:this.$data.re_inspector1,
		       						inspector2:this.$data.re_inspector2,
		       						inspector3:this.$data.re_inspector3,
		       						inspector4:this.$data.re_inspector4,
		       						picture1:this.$data.re_picture1,
		       						licenseUrl:this.$data.re_licenseUrl,
		       						picture2:this.$data.re_picture3.join('#'),
		       						picture3:this.$data.re_picture4.join('#'),
		       						picture4:this.$data.re_picture5.join('#'),
		       						checkDate:this.$data.re_checkDate,
		       						checkUserNo:this.$data.re_userNo,
		       						unitNo:this.$data.re_fightUnit,
		       						area:this.$data.re_subdivisionArea,
		       						productCondition:this.$data.re_productCondition,
		       						otherTag:this.$data.re_otherTag,
		       						otherEnvirProcedures:this.$data.re_otherEnvirProcedures,
		       						otherWastewaterTreatment:this.$data.re_otherWastewaterTreatment
		       					}
		       					let headers={"Accept":"application/json","content-type":"application/json"};
		       					let url="/wuranyuan-server/saveCheckTableInfo";
		       					console.log(param);
					        	//调用ajax函数
					        	this.$http.post(url,param,headers,{emulateJSON:true}).then(function(res){
					        		var str=res.body;
					        		if(str.code=="00"){alert("污染排查表填写完成！\n污染源编号为："+str.message);
					        		window.location="menu.html";
					        	}else{
					        		alert(str.message);
					        		document.getElementById("pollutionSubmit").innerHTML="提交";
					        		document.getElementById("pollutionSubmit").removeAttribute("disabled");
					        	}
					        },function(res){
					        	document.getElementById("pollutionSubmit").innerHTML="提交";
					        	document.getElementById("pollutionSubmit").removeAttribute("disabled");
					        	console.log(res.status);
					        });
					        },function(res){
					        	alert("图片上传失败");
					        	document.getElementById("pollutionSubmit").innerHTML="提交";
					        	document.getElementById("pollutionSubmit").removeAttribute("disabled");
					        });
}else{
	if(no==-1)alert("第一张图片必须上传！");
	else alert("第"+no+"图片过大,上传失败！");
	document.getElementById("pollutionSubmit").innerHTML="提交";
	document.getElementById("pollutionSubmit").removeAttribute("disabled");
}

}

         //   		//根据企业信息
         //   		postCompanys:function(){
         //   			var storage=window.localStorage;
         //   			var userid=storage.getItem("userId");
	  		  		// /*var towns=document.getElementById("town");
	  		  		// var theTowm;
	  		  		// this.$data.communities=[];
	  		  		// console.log(towns);
	  		  		// for (var i = towns.length - 1; i >= 0; i--) {
	  		  		// 	if(towns.options[i].selected==true){
	  		  		// 		console.log(towns.options[i].value);
	  		  		// 		theTowm=towns.options[i].value;
	  		  		// 		break;
	  		  		// 	}
	  		  		// }*/
	  		  		// //清空原来的数据
	  		  		// this.$data.companys=[];
	  		  		// let param={userId:userid};
	  		  		// let headers={"content-type":"application/json"};
	  		  		// let url="https://dgutxm.cn/wuranyuan-server/getCompanys";
	  		  		// console.log(param);
	  		  		// this.$http.post(url,param,
	  		  		// 	headers,{emulateJSON:true}
	  		  		// 	).then(function(res){
	  		  		// 		var results=res.body;
	  		  		// 		for(var i=0;i<results.length;i++){
	  		  		// 			console.log(results[i].name);
	  		  		// 			this.$data.companys.push({name:results[i].name,id:results[i].id});                                  
	  		  		// 		}
	  		  		// 	},function(res){
	  		  		// 		console.log(res.status);
	  		  		// 	});
	  		  		// },
           // 		postUp:function(){
           // 			var storage=window.localStorage;
           // 			var userid=storage.getItem("userId");
           // 			var longitude=document.getElementById("lngAndlat1").value;
           // 			var latitude=document.getElementById("lngAndlat2").value;
           // 			let param={
           // 				userId:userid,
           // 				tag:this.$data.re_tag,
           // 				town:this.$data.re_town,
           // 				community:this.$data.re_community,
           // 				address:this.$data.re_address,
           // 				longitude:longitude,
           // 				latitude:latitude,
           // 				name:this.$data.re_name,
           // 				legalRepresentative:this.$data.re_legalRepresentative,
           // 				legalRePhone:this.$data.re_legalRePhone,
           // 				envirRepresentative:this.$data.re_envirRepresentative,
           // 				envirRePhone:this.$data.re_envirRePhone,
           // 				hasLicence:this.$data.re_hasLicence=='0'?false:true,
           // 				uscCode:this.$data.re_uscCode,
           // 				envirProcedures:this.$data.re_envirProcedures==''?0:this.$data.re_envirProcedures,
           // 				tradeType:this.$data.re_tradeType,
           // 				pollutionType:this.$data.re_pollutionType.join(","),
           // 				productType:this.$data.re_productType.join(","),
           // 				otherProductType:this.$data.re_otherProductType,
		        	// 	technology:this.$data.re_technology.join(","),
		        	// 	otherTechnology:this.$data.re_otherTechnology,
		        	// 	wastewaterTreatment:this.$data.re_wastewaterTreatment==''?0:this.$data.re_wastewaterTreatment,
		        	// 	waterAcceptComp:this.$data.re_waterAcceptComp,
		        	// 	exhaustGasType:this.$data.re_exhaustGasType == '' ? '' : this.$data.re_exhaustGasType.join(","),
		        	// 	otherExhaustGasType:this.$data.re_otherExhaustGasType,
		        	// 	wasteGasTreatment:this.$data.re_wasteGasTreatment==''?0:this.$data.re_wasteGasTreatment,
		        	// 	hazardousWasteStorage:this.$data.re_hazardousWasteStorage==''?0:this.$data.re_hazardousWasteStorage,
		        	// 	hazardousWasteTransfer:this.$data.re_hazardousWasteTransfer==''?0:this.$data.re_hazardousWasteTransfer,
		        	// 	hazardousAcceptComp:this.$data.re_hazardousAcceptComp,
		        	// 	hazardousStorageSign:this.$data.re_hazardousStorageSign==''?0:this.$data.re_hazardousStorageSign,
		        	// 	emergencyPlan:this.$data.re_emergencyPlan,
		        	// 	problem:this.$data.re_problem,
		        	// 	treat:this.$data.re_treat,
		        	// 	sewagePermit:this.$data.re_sewagePermit,
		        	// 	//auditor:"3",
		        	// 	inspector1:this.$data.re_inspector1,
		        	// 	inspector2:this.$data.re_inspector2,
		        	// 	inspector3:this.$data.re_inspector3,
		        	// 	inspector4:this.$data.re_inspector4,
		        	// 	picture1:this.$data.re_picture1,
		        	// 	picture2:this.$data.re_picture2,
		        	// 	picture3:this.$data.re_picture3,
		        	// 	picture4:this.$data.re_picture4,
		        	// 	checkDate:this.$data.re_checkDate
		        	// };
		        	// console.log(param);
		        	// let headers={"Accept":"application/json","content-type":"application/json"};
		        	// let url="https://dgutxm.cn/wuranyuan-server/saveCheckTableInfo";
		        	// this.$http.post(url,param,
		        	// 	headers,{emulateJSON:true}
		        	// 	).then(function(res){
		        	// 	 var str=res.body;
           //               if(str.code=="00"){alert("污染排查表填写完成！\n污染源编号为："+str.message);
           //               window.location="menu.html";
	          //            }else{
	          //            	alert(str.message);
	          //            	document.getElementById("pollutionSubmit").removeAttribute("disabled");
	          //            }

		        	// 	},function(res){
		        	// 		document.getElementById("pollutionSubmit").removeAttribute("disabled");
		        	// 		console.log(res.status);
		        	// 	});
		        	// }
		        }
		    })
window.onload=vme.postData();
/*window.setTimeout(check,500);*/
}