window.onload = function () {
    var vme = new Vue({
        el: '#apped',
        data: {
            disabled: true,
            towns: [],
            tags: [],
            communities: [],
            products: [],
            technologys: [],
            wasteGases: [],
            industries: [{
                name: "畜禽养殖场、养殖小区"
            },
            {
                name: "农副食品加工业"
            },
            {
                name: "食品制造业"
            },
            {
                name: "纺织品制造"
            },
            {
                name: "服装制造"
            },
            {
                name: "制鞋业"
            },
            {
                name: "家具制造"
            },
            {
                name: "造纸和纸制品业"
            },
            {
                name: "印刷厂"
            },
            {
                name: "工艺品制造"
            },
            {
                name: "化学原料和化学制品制造业"
            },
            {
                name: "医药制造业"
            },
            {
                name: "橡胶和塑料制品业"
            },
            {
                name: "水泥制造"
            },
            {
                name: "玻璃及玻璃制品"
            },
            {
                name: "陶瓷制品"
            },
            {
                name: "金属制品业"
            },
            {
                name: "电气机械及器材制造"
            },
            {
                name: "电子元件及电子专用材料制造"
            },
            {
                name: "火力发电"
            },
            {
                name: "危险废物（含医疗废物）利用及处置"
            },
            {
                name: "城镇生活垃圾（含餐厨废弃物）集中处置"
            },
            {
                name: "其他"
            }
            ],
            ProductConditions: [{
                name: "正常生产"
            }, {
                name: "部分生产"
            }, {
                name: "停产"
            }],

            re_pollutionNo: "",
            re_userNo: "",
            re_subdivisionArea: "",
            re_fightUnit: "",
            re_town: "",
            re_community: "",
            re_address: "",
            re_name: "",
            re_legalRepresentative: "",
            re_legalRePhone: "",
            re_envirRepresentative: "",
            re_envirRePhone: "",
            re_hasLicence: "",
            re_licenseUrl: "",
            re_envirProcedures: "",
            re_otherEnvirProcedures: "",
            tmp_envirProcedures: "",
            re_tradeType: "",
            re_otherTradeType: "",
            re_sewagePermit: "",
            re_emergencyPlan: "",
            re_tag: "",
            re_otherTag: "",
            re_productCondition: "",
            re_pollutionType: [],
            re_productType: [],
            re_otherProductType: "",
            re_technology: [],
            re_otherTechnology: "",
            re_wastewaterTreatment: "",
            re_otherWastewaterTreatment: "",
            re_waterAcceptComp: "",
            re_exhaustGasType: [],
            re_wasteGasTreatment: [],
            re_hazardousWasteStorage: [],
            re_hazardousWasteTransfer: [],
            re_hazardousAcceptComp: [],
            re_hazardousStorageSign: [],
            re_treat: "",
            re_problem: "",
            re_auditor: "",
            re_inspector1: "",
            re_inspector2: "",
            re_inspector3: "",
            re_inspector4: "",
            re_picture1: "",
            re_picture3: [],
            re_picture4: [],
            re_picture5: [],
            re_checkDate: "",

            step: "",
            tradeType: "",
            envirProcedures: "",
            re_otherExhaustGasType: "",
            lists3: [],
            lists4: [],
            lists5: [],
            otherTechnologyDisabled: true,
            otherProductTypeDisabled: true,
            submitDisabled:false
        },
        watch: {
            immediate: true,
            //环保手续隐藏和显示
            tmp_envirProcedures: function (val) {
                if (val == '0') {
                    this.re_envirProcedures = '无';
                    this.re_otherEnvirProcedures = '';
                    this.$refs.examine.style.display = 'none';
                } else {

                    this.$refs.examine.style.display = 'block';
                }
            },
            //处理情况，若处理情况为不需再改则处理意见设为空
            re_treat: function (val) {
                if (val === '不需处理') { //不需处理
                    this.re_problem = "";
                    this.$refs.problemTextarea.style.display = 'none';
                } else {
                    this.$refs.problemTextarea.style.display = 'block';
                }
            },
            //若环保手续选择其他，隐藏或显示其他环保手续文本框
            re_envirProcedures: function (val) {
                if (this.re_envirProcedures.indexOf('其他') > -1) { //选择了其他
                    this.$refs.ohterExamine.style.display = 'block';
                } else { //没有选择其他
                    this.$refs.ohterExamine.style.display = 'none';
                    this.re_otherEnvirProcedures = '';
                }
            },
            //排查对象范围选择其他，隐藏或显示其他排查对象范围文本框
            re_tag: function () {
                /*
                 *此处13表示数据库中的其他项对应的ID，若修改数据库，13也要跟着修改
                 */
                if (this.re_tag == 13) { //选择了其他
                    this.$refs.otherTag.style.display = 'block';
                } else { //没有选择其他
                    this.$refs.otherTag.style.display = 'none';
                    this.re_otherTag = '';
                }
            },
            //若行业类型选择其他，隐藏或显示其他行业类型文本框
            re_tradeType: function (val) {
                if (this.re_tradeType.indexOf('其他') > -1) { //选择了其他
                    this.$refs.otherTradeType.style.display = 'block';
                } else { //没有选择其他
                    this.$refs.otherTradeType.style.display = 'none';
                    this.re_otherTradeType = '';
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
            re_pollutionType: function (val) {
                if (val.indexOf('不涉及') > -1) { //不涉及
                    if (this.re_pollutionType.length > 1) {
                        this.re_pollutionType.length = 0;
                        this.re_pollutionType.push('不涉及');
                    }
                }
                if (val.indexOf('涉水') == -1) { //不涉水
                    this.re_wastewaterTreatment = '';
                    this.re_waterAcceptComp = '';
                    this.re_otherWastewaterTreatment = '';
                    this.$refs.item4_div.style.display = 'none';
                } else if (val.indexOf('涉水') > -1) { //涉水
                    this.$refs.item4_div.style.display = 'block';
                }
                if (val.indexOf('涉气') == -1) { //不涉气
                    this.re_exhaustGasType = [];
                    this.re_otherExhaustGasType = '';
                    this.re_wasteGasTreatment = [];
                    //废气处理情况全部设为未勾选
                    let els = this.$refs.item5_div.querySelectorAll('input.gasRadio');
                    for (var i = 0; i < els.length; i++) {
                        els[i].checked = false;
                    }
                    this.$refs.item5_div.style.display = 'none';
                } else if (val.indexOf('涉气') > -1) { //涉气
                    this.$refs.item5_div.style.display = 'block';
                }
                if (val.indexOf('涉危废') == -1) { //不涉危废
                    this.re_hazardousWasteStorage = '';
                    this.re_hazardousAcceptComp = '';
                    this.re_hazardousStorageSign = '';
                    this.re_hazardousWasteTransfer = '';
                    this.$refs.hazardous.style.display = 'none';
                } else if (val.indexOf('涉危废') > -1) { //涉危废
                    this.$refs.hazardous.style.display = 'block';

                }
            },
            re_wastewaterTreatment: function () { //废水处理分情况判定
                if (this.re_wastewaterTreatment == '自建污水处理设施' || this.re_wastewaterTreatment == '未处理直接排放') {
                    this.re_waterAcceptComp = '';
                    this.re_otherWastewaterTreatment = '';
                } else if (this.re_wastewaterTreatment == '转移处理') {
                    this.re_otherWastewaterTreatment = '';
                } else {
                    this.re_waterAcceptComp = '';
                }
            },
            re_hazardousWasteTransfer: function () { //危险废物转移选择不规范时，接收单位置空
                if (this.re_hazardousWasteTransfer === '不规范') {
                    this.re_hazardousAcceptComp = '';
                }
            },
            re_productType: function (val) { //产品类型不选其他时，其他产品类型为空
                if (val.indexOf('其他') == -1) { //不选择其他
                    this.re_otherProductType = '';
                    this.otherProductTypeDisabled = true;
                } else { //选择其他的情况
                    this.otherProductTypeDisabled = false;
                }
            },
            re_technology: function (val) { //主要工艺不选其他时，其他主要工艺为空
                if (val.indexOf('其他') == -1) { //不选择其他
                    this.re_otherTechnology = '';
                    this.otherTechnologyDisabled = true;
                } else { //选择其他的情况
                    this.otherTechnologyDisabled = false;
                }
            },
            re_legalRePhone: function (val) { //法定联系人验证电话正则表达式
                var Reg = /(^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$)|(^769)[0-9]{8}$/g;
                if (!Reg.test(val)) {
                    this.$refs.leReIponeSpan.innerHTML = '电话格式错误！';
                } else {
                    this.$refs.leReIponeSpan.innerHTML = '';
                }
            },
            re_envirRePhone: function (val) { //环保联系人验证电话正则表达式
                var Reg = /(^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$)|(^769)[0-9]{8}$/g;
                if (!Reg.test(val)) {
                    this.$refs.envirRePhoneSpan.innerHTML = '电话格式错误！';
                } else {
                    this.$refs.envirRePhoneSpan.innerHTML = '';
                }
            },
            re_subdivisionArea: function (val) { //环保联系人验证电话正则表达式
                var Reg = /^\d+-\d+-\d+$/g;
                if (!Reg.test(val)) {
                    this.$refs.subdivisionAreaSpan.innerHTML = '细分区域格式错误！';
                } else {
                    this.$refs.subdivisionAreaSpan.innerHTML = '';
                }
            },
            re_exhaustGasType: function () {
                if(this.re_exhaustGasType!=""){
                    let els =  this.$refs.item5_div.querySelectorAll('input.gasRadio');
                    /*
                     *修改废气类型数据库时，需要修改此项
                     */
                    if (this.re_exhaustGasType.indexOf('VOCs') > -1) { //选择了VOCs
                        els[0].disabled = false;
                        els[1].disabled = false;
                    } else { //没有选择粉尘废气
                        els[0].checked = false;
                        els[1].checked = false;
                        els[0].disabled = true;
                        els[1].disabled = true;
                    }
                    if (this.re_exhaustGasType.indexOf('粉尘废气') > -1) { //选择了粉尘废气
                        els[2].disabled = false;
                        els[3].disabled = false;
                    } else { //没有选择锅炉废气
                        els[2].checked = false;
                        els[3].checked = false;
                        els[2].disabled = true;
                        els[3].disabled = true;
                    }
                    if (this.re_exhaustGasType.indexOf('锅炉废气') > -1) { //选择了锅炉废气
                        els[4].disabled = false;
                        els[5].disabled = false;
                    } else { //没有选择异味
                        els[4].checked = false;
                        els[5].checked = false;
                        els[4].disabled = true;
                        els[5].disabled = true;
                    }
                    if (this.re_exhaustGasType.indexOf('异味') > -1) { //选择了异味
                        els[6].disabled = false;
                        els[7].disabled = false;
                    } else { //没有选择VOCs
                        els[6].checked = false;
                        els[7].checked = false;
                        els[6].disabled = true;
                        els[7].disabled = true;
                    }
                    if (this.re_exhaustGasType.indexOf('其他') == -1) { //没有选择其他项
                        this.re_otherExhaustGasType = '';
                        this.$refs.otherExhaustGasType[0].disabled = true;
                    } else {
                        this.$refs.otherExhaustGasType[0].disabled = false;
                    }
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
            methods: {
                //返回照片路径
                pirUrl:function(item){
                    return "../"+item[0];
                },
                //删除数组中某张照片
                picDel:function(item){
                    var res=null;
                    res=vme.re_picture3.findIndex(function(val){//照片是否在pictrue3中
                        if(val[0]==item[0])
                        return true;
                    });
                    if(res>-1){//存在元素
                        vme.re_picture3.splice(res, 1);
                    }
                    res=vme.re_picture4.findIndex(function(val){//照片是否在pictrue4中
                        if(val[0]==item[0])
                        return true;
                    });
                    if(res>-1){//存在元素
                        vme.re_picture4.splice(res, 1);
                    }res=vme.re_picture5.findIndex(function(val){//照片是否在pictrue5中
                        if(val[0]==item[0])
                        return true;
                    });
                    if(res>-1){//存在元素
                        vme.re_picture5.splice(res, 1);
                    }
                },
            //验证必填项是否都已填
            checkItem: function () {
                if (vme.re_subdivisionArea == "") { //细分区域未填写
                    vme.$refs.subdivisionAreaSpan.innerHTML = "细分区域未填写！";
                    vme.$refs.subdivisionArea.focus();
                } else {
                    vme.$refs.subdivisionAreaSpan.innerHTML = "";
                }
                if (vme.re_fightUnit == "") { //作战单元未填写
                    vme.$refs.fightUnitSpan.innerHTML = "作战单元未填写！";
                    vme.$refs.fightUnit.focus();
                } else {
                    vme.$refs.fightUnitSpan.innerHTML = "";
                }
                if (vme.re_town == "") { //街镇未填写
                    vme.$refs.townSpan.innerHTML = "街镇未填写！";
                    vme.$refs.town.focus();
                } else {
                    vme.$refs.townSpan.innerHTML = "";
                }
                if (vme.re_community == "") { //村/社区未填写
                    vme.$refs.communitySpan.innerHTML = "村/社区未填写！";
                    vme.$refs.community.focus();
                } else {
                    vme.$refs.communitySpan.innerHTML = "";
                }
                if (vme.re_address == "") { //地址未填写
                    vme.$refs.addressSpan.innerHTML = "地址未填写！";
                    vme.$refs.address.focus();
                } else {
                    vme.$refs.addressSpan.innerHTML = "";
                }
                if (vme.re_name == "") { //企业名称未填写
                    vme.$refs.nameSpan.innerHTML = "企业名称未填写！";
                    vme.$refs.name.focus();
                } else {
                    vme.$refs.nameSpan.innerHTML = "";
                }
                if (vme.re_legalRepresentative == "") { //法定联系人未填写
                    vme.$refs.legalRepresentativeSpan.innerHTML = "法定联系人未填写！";
                    vme.$refs.legalRepresentative.focus();
                } else {
                    vme.$refs.legalRepresentativeSpan.innerHTML = "";
                }
                if (vme.re_legalRePhone == "") { //法定联系人联系方式未填写
                    vme.$refs.leReIponeSpan.innerHTML = "法定联系人联系方式未填写！";
                    vme.$refs.leReIpone.focus();
                } else {
                    vme.$refs.leReIponeSpan.innerHTML = "";
                }
                if (vme.re_envirRepresentative == "") { //环保联系人未填写
                    vme.$refs.envirRepresentativeSpanSpan.innerHTML = "环保联系人未填写！";
                    vme.$refs.envirRepresentative.focus();
                } else {
                    vme.$refs.envirRepresentativeSpanSpan.innerHTML = "";
                }
                if (vme.re_envirRePhone == "") { //环保联系人联系方式未填写
                    vme.$refs.envirRePhoneSpan.innerHTML = "环保联系人联系方式未填写！";
                    vme.$refs.envirRePhone.focus();
                } else {
                    vme.$refs.envirRePhoneSpan.innerHTML = "";
                }
                if (vme.re_hasLicence == "") { //营业执照未勾选
                    vme.$refs.hasLicenceSpan.innerHTML = "营业执照未勾选！";
                    vme.$refs.hasLicence.focus();
                } else {
                    vme.$refs.hasLicenceSpan.innerHTML = "";
                }


                //行业类型选择其他时，其他行业类型的内容赋值给行业类型上传
                if (vme.re_tradeType == '其他') {
                    vme.tradeType = vme.re_otherTradeType;
                } else {
                    vme.tradeType = vme.re_tradeType;
                }
                //废气处理上传数据处理
                let els = vme.$refs.item5_div.querySelectorAll('input.gasRadio');
                /*
                 *修改废气类型数据库时，需要修改此项
                 */
                 for (var i = 0; i < vme.re_exhaustGasType.length; i++) {
                    if (vme.re_exhaustGasType[i] == 'VOCs') { //选择了VOCs
                        if (els[0].checked == true) {
                            vme.re_wasteGasTreatment.push("未处理直接排放");
                        } else {
                            vme.re_wasteGasTreatment.push("经处理后排放");
                        }
                    } else if (vme.re_exhaustGasType[i] == '粉尘废气') { //选择了粉尘废气
                        if (els[2].checked == true) {
                            vme.re_wasteGasTreatment.push("未处理直接排放");
                        } else {
                            vme.re_wasteGasTreatment.push("经处理后排放");
                        }
                    } else if (vme.re_exhaustGasType[i] == '锅炉废气') { //选择了锅炉废气
                        if (els[4].checked == true) {
                            vme.re_wasteGasTreatment.push("未处理直接排放");
                        } else {
                            vme.re_wasteGasTreatment.push("经处理后排放");
                        }
                    } else if (vme.re_exhaustGasType[i] == '异味') { //选择了异味
                        if (els[6].checked == true) {
                            vme.re_wasteGasTreatment.push("未处理直接排放");
                        } else {
                            vme.re_wasteGasTreatment.push("经处理后排放");
                        }
                    } else if (vme.re_exhaustGasType[i] == '其他') { //选择了其他
                        vme.re_wasteGasTreatment.push(vme.re_otherExhaustGasType);
                    }
                }
                //环保手续上传数据处理
                if (vme.tmp_envirProcedures == 0) { //无环保手续
                    vme.envirProcedures = '无';
                } else {
                    if (vme.re_envirProcedures == '其他') {
                        vme.envirProcedures = '其他';
                    } else {
                        vme.envirProcedures = '有';
                    }
                }

            },
            //拼接字符串id
            fileId5(id) {
                return "file5" + id;
            },
            viewId5(id) {
                return "view5" + id;
            },
            fileId4(id) {
                return "file4" + id;
            },
            viewId4(id) {
                return "view4" + id;
            },
            fileId3(id) {
                return "file3" + id;
            },
            viewId3(id) {
                return "view3" + id;
            },
            //动态添加文件
            add1: function () {
                this.$refs.addFile1.style.display="block";
            },
            add2: function () {
                this.$refs.addFile2.style.display="block";
            },
            add3: function () {
                let cope = {
                    fileName: "file" + Math.random()
                };
                vme.lists3.push(cope);
            },
            //动态删除文件
            del1:function(){
                this.$refs.addFile1.style.display="none";
            },  
            del2:function(){
                this.$refs.addFile2.style.display="none";
            },
            del3: function (index) {
                vme.lists3.splice(index, 1);
            },
            //动态添加文件
            add4: function () {
                let cope = {
                    fileName: "file" + Math.random()
                };
                vme.lists4.push(cope);
            },
            //动态删除文件
            del4: function (index) {
                vme.lists4.splice(index, 1);
            },
            //动态添加文件
            add5: function () {
                let cope = {
                    fileName: "file" + Math.random()
                };
                vme.lists5.push(cope);
            },
            //动态删除文件
            del5: function (index) {
                vme.lists5.splice(index, 1);
            },
            //动态预览照片
            showImage: function (fileId, imageId) {
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
            getLocation1: function () {
                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function (r) {
                    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                        var mk = new BMap.Marker(r.point);
                        // 创建地理编码实例      
                        var myGeo = new BMap.Geocoder();
                        // 根据坐标得到地址描述    
                        myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function (result) {
                            if (result) {
                                var loca1 = document.getElementById("lngAndlat1");
                                var loca2 = document.getElementById("lngAndlat2");
                                loca1.value = r.point.lng; //经纬度
                                loca2.value = r.point.lat;
                                //alert(result.address);      
                            }
                        });
                    } else {
                        var loca = document.getElementById("lngAndlat");
                        loca.innerHTML = "failed" + this.getStatus();
                        //document.getElementById("location").innerHTML();
                        //alert('failed'+this.getStatus());
                    }
                });
            },
            //法定联系人信息同步到环保联系人
            theReSame: function () {
                this.re_envirRepresentative = this.re_legalRepresentative;
                this.re_envirRePhone = this.re_legalRePhone;
            },
            postData: function () {
                //发送 post 请求
                var storage = window.localStorage;
                var userid = storage.getItem("userId");
                var account = storage.getItem("account");
                var stuNo = storage.getItem("stuNo"); //获取清查人员编号
                var researchid = storage.getItem("researchId"); //获取排查表Id

                let param = {
                    userId: userid
                };
                let headers = {
                    "content-type": "application/json"
                };
                let url;
                var results;

                /*this.re_inspector1=account;   //绑定排查人员1
                this.re_userNo=stuNo;       //绑定清查人员编号*/
                //获取镇街
                url = "/wuranyuan-server/getAllPollutionTown";
                this.$http.post(url, param, headers, {
                    emulateJSON: true
                }).then(function (res) {
                    let results = res.body;
                    for (var i = 0; i < results.length; i++) {
                        this.$data.towns.push({
                            name: results[i].town
                        });
                    }
                }, function (res) {
                    console.log(res.status);
                    alert("获取数据失败，请与管理员联系!");
                });
                //获取产品类型
                url = "/wuranyuan-server/getAllProductTypes";
                this.$http.post(url, param, headers, {
                    emulateJSON: true
                }).then(function (res) {
                    let results = res.body;
                    for (var i = 0; i < results.length; i++) {
                        this.$data.products.push({
                            name: results[i].name
                        });
                    }
                }, function (res) {
                    console.log(res.status);
                });
                //获取生产工艺类型
                url = "/wuranyuan-server/getAllCraftsTypes";
                this.$http.post(url, param, headers, {
                    emulateJSON: true
                }).then(function (res) {
                    let results = res.body;
                    for (var i = 0; i < results.length; i++) {
                        this.$data.technologys.push({
                            name: results[i].name
                        });
                    }
                }, function (res) {
                    console.log(res.status);
                });
                //获取标签
                url = "/wuranyuan-server/getAllPollutionTags";
                this.$http.post(url, param,
                    headers, {
                        emulateJSON: true
                    }
                    ).then(function (res) {
                        let results = res.body;
                        for (var i = 0; i < results.length; i++) {
                            this.$data.tags.push({
                                name: results[i].name,
                                id: results[i].id
                            });
                        }
                    }, function (res) {
                        console.log(res.status);
                    });
                //获取废气类型

                //获取排查表信息数据
                url = "/wuranyuan-server/getCheckTableInfo";
                param = {
                    userId: userid,
                    researchId: researchid
                };
                this.$http.post(url, param, headers, {
                    emulateJSON: true
                }).then(function (res) {
                    results = res.body;
                    this.step = results.step;
                    this.re_subdivisionArea = results.area;
                    this.re_auditor = results.auditor;
                    this.re_userNo = results.checkUserNo;
                    this.re_inspector1 = results.inspector1;
                    this.re_inspector2 = results.inspector2;
                    this.re_inspector3 = results.inspector3;
                    this.re_inspector4 = results.inspector4;
                    this.re_problem = results.problem;
                    this.re_treat = results.treat;
                    this.re_fightUnit = results.unitNo;
                    this.re_address = results.pollutionResearch.company.address;
                    this.re_emergencyPlan = results.pollutionResearch.company.emergencyPlan;
                    this.re_envirRepresentative = results.pollutionResearch.company.envirCharge;
                    this.re_envirRePhone = results.pollutionResearch.company.envirChargeTel;
                    this.re_hasLicence = results.pollutionResearch.company.hasLicense == true ? 1 : 0;
                    this.re_legalRepresentative = results.pollutionResearch.company.legalPerson;
                    this.re_legalRePhone = results.pollutionResearch.company.legalPersonTel;
                    this.re_name = results.pollutionResearch.company.name;
                    this.re_productCondition = results.pollutionResearch.company.productCondition;
                    this.re_sewagePermit = results.pollutionResearch.company.sewagePermit;
                    this.re_town = results.pollutionResearch.company.town;
                    this.re_pollutionNo = results.pollutionResearch.no;
                    this.re_tag = results.pollutionResearch.tag.id;
                    this.re_otherTag = results.pollutionResearch.otherTag;

                    //社区处理
                    param = {
                        condition: results.pollutionResearch.company.town,
                        userId: userid
                    };
                    url = "/wuranyuan-server/getAllPollutionCommunity";
                    this.$http.post(url, param,
                        headers, {
                            emulateJSON: true
                        }
                        ).then(function (res) {
                            var innerResults = res.body;
                            for (var i = 0; i < innerResults.length; i++) {

                                this.$data.communities.push({
                                    name: innerResults[i].community
                                });
                            }

                        }, function (res) {
                            console.log(res.status);
                        });
                        this.re_community = results.pollutionResearch.company.community;

                    //环保手续处理
                    if (results.pollutionResearch.company.envirProcedures == '无') {
                        this.tmp_envirProcedures = 0;
                    } else {
                        this.tmp_envirProcedures = 1;
                        this.re_envirProcedures = results.pollutionResearch.company.envirProcedures;
                        this.re_otherEnvirProcedures = results.pollutionResearch.company.otherEnvirProcedures;
                    }

                    //污染源类型处理
                    var tmp_pollutionType = results.pollutionResearch.pollutionType.split('#');
                    for (var i = 0; i < tmp_pollutionType.length; i++) {
                        this.re_pollutionType.push(tmp_pollutionType[i]);
                    }

                    //废水、危废处理
                    this.re_wastewaterTreatment = results.pollutionResearch.wastewater;
                    this.re_waterAcceptComp = results.pollutionResearch.waterAcceptComp;
                    this.re_otherWastewaterTreatment = results.pollutionResearch.otherWastewater;
                    this.re_hazardousWasteStorage = results.pollutionResearch.hazardousStorage;
                    this.re_hazardousStorageSign = results.pollutionResearch.hazardousStorageSign;
                    this.re_hazardousWasteTransfer = results.pollutionResearch.hazardousTrans;
                    this.re_hazardousAcceptComp = results.pollutionResearch.hazardousAcceptComp;

                    url = "/wuranyuan-server/getAllExhaustGasTypes";
                    param = {
                        userId: userid
                    };
                    this.$http.post(url, param, headers, {
                        emulateJSON: true
                    }).then(function (res) {
                        var innerResults_ = res.body;
                        for (var i = 0; i < innerResults_.length; i++) {
                            this.$data.wasteGases.push({
                                name: innerResults_[i].name
                            });
                        }
                        this.$nextTick(() => {
                            //废气处理
                            if( results.pollutionResearch.exhaustGasType!=null){
                                var tmp_exhaustGasType = results.pollutionResearch.exhaustGasType.split('#');
                                for (var i = 0; i < tmp_exhaustGasType.length; i++) {
                                    this.re_exhaustGasType.push(tmp_exhaustGasType[i]);
                                }
                                var tmp_wasteGasTreatment = results.pollutionResearch.gasTreatment.split('#');
                                let els = this.$refs.item5_div.querySelectorAll('input.gasRadio');
                                /*
                                 *修改废气类型数据库时，需要修改此项
                                 */
                                 for (var i = 0; i < tmp_wasteGasTreatment.length; i++) {
                                    if (tmp_exhaustGasType[i] == 'VOCs') { //选择了粉尘废气
                                        if (tmp_wasteGasTreatment[i] == '经处理后排放') {
                                            els[1].checked = true
                                        } else {
                                            els[0].checked = true
                                        }
                                    } else if (tmp_exhaustGasType[i] == '粉尘废气') { //选择了锅炉废气
                                        if (tmp_wasteGasTreatment[i] == '经处理后排放') {
                                            els[3].checked = true
                                        } else {
                                            els[2].checked = true
                                        }
                                    } else if (tmp_exhaustGasType[i] == '锅炉废气') { //选择了异味
                                        if (tmp_wasteGasTreatment[i] == '经处理后排放') {
                                            els[5].checked = true
                                        } else {
                                            els[4].checked = true
                                        }
                                    } else if (tmp_exhaustGasType[i] == '异味') { //选择了VOCs
                                        if (tmp_wasteGasTreatment[i] == '经处理后排放') {
                                            els[7].checked = true
                                        } else {
                                            els[6].checked = true
                                        }
                                    } else if (tmp_exhaustGasType[i] == '其他') { //选择了其他
                                        this.re_otherExhaustGasType = tmp_wasteGasTreatment[i];
                                    }
                                }
                            }
                        });
                    }, function (res) {
                        console.log(res.status);
                    });
                    //经纬度处理
                    document.getElementById('lngAndlat1').value = results.pollutionResearch.company.longitude;
                    document.getElementById('lngAndlat2').value = results.pollutionResearch.company.latitude;

                    //图片处理
                    this.re_picture1=results.picture1;
                    this.re_licenseUrl=results.pollutionResearch.company.licenseUrl;
                    this.re_picture3=results.picture2==null?[]:results.picture2.split('#');
                    this.re_picture4=results.picture3==null?[]:results.picture3.split('#');
                    this.re_picture5=results.picture4==null?[]:results.picture4.split('#');
                    document.getElementById('view10_').src = '../' + results.picture1; //厂门口照片
                    document.getElementById('view20_').src = '../' + results.pollutionResearch.company.licenseUrl; //营业执照
                   /* //污染工艺照片
                    if (pic3 != null) {
                       var pic3 = results.picture2.split('#');
                       document.getElementById('view30').src = '../' + pic3[0];
                       for (var i = 1; i < pic3.length; i++) {
                        this.$options.methods.add3();
                        var str = 'view3' + i;
                        document.getElementById(str).src = '../' + pic3[i];
                    }
                }
                    //污染防治设施照片
                    if (pic4 != null) {
                        var pic4 = results.picture3.split('#');
                        document.getElementById('view40').src = '../' + pic4[0];
                        for (var i = 1; i < pic4.length; i++) {
                            this.$options.methods.add4();
                            var str = "view4" + i;
                            document.getElementById(str).src = '../' + pic4[i];
                        }
                    }
                    //排放口照片

                    if (pic5 != null) {
                        var pic5 = results.picture4.split('#');
                        document.getElementById('view50').src = '../' + pic5[0];
                        for (var i = 1; i < pic5.length; i++) {
                            this.$options.methods.add5();
                            var str = "view5" + i;
                            document.getElementById(str).src = '../' + pic5[i];
                        }
                    }*/

                    //产品类型处理
                    var tmp_productType = results.pollutionResearch.productType.split('#');
                    for (var i = 0; i < tmp_productType.length; i++) {
                        this.re_productType.push(tmp_productType[i]);
                    }
                    this.re_otherProductType = results.pollutionResearch.otherProductType;

                    //生产工艺处理
                    var tmp_technology = results.pollutionResearch.crafts.split('#');
                    for (var i = 0; i < tmp_technology.length; i++) {
                        this.re_technology.push(tmp_technology[i]);
                    }
                    this.re_otherTechnology = results.pollutionResearch.otherCrafts;

                    //时间处理
                    var now = new Date(results.createTime);
                    y = now.getFullYear();
                    m = now.getMonth() + 1;
                    d = now.getDate();
                    this.re_checkDate = (y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d));

                    //行业类型处理
                    if (this.industries.indexOf(results.pollutionResearch.company.industryType) > -1) { //行业类型为括号内的项
                        this.re_tradeType = results.pollutionResearch.company.industryType;
                    } else { //行业类型为其他
                        this.re_tradeType = '其他';
                        this.re_otherTradeType = results.pollutionResearch.company.industryType;
                    }
                }, function (res) {
                    console.log(res.status);
                });
},
            //根据镇街获取社区
            postCommunity: function () {
                var storage = window.localStorage;
                var userid = storage.getItem("userId");
                var towns = this.$refs.town;

                var theTowm;
                this.$data.communities = [];
                for (var i = towns.length - 1; i >= 0; i--) {

                    if (towns.options[i].selected == true) {
                        theTowm = towns.options[i].value;
                        break;
                    }
                }
                let param = {
                    condition: theTowm,
                    userId: userid
                };
                let headers = {
                    "content-type": "application/json"
                };
                let url = "/wuranyuan-server/getAllPollutionCommunity";
                this.$http.post(url, param,
                    headers, {
                        emulateJSON: true
                    }
                    ).then(function (res) {
                        var results = res.body;
                        for (var i = 0; i < results.length; i++) {
                            this.$data.communities.push({
                                name: results[i].community
                            });
                        }
                    }, function (res) {
                        console.log(res.status);
                    });
                },

            //上传数据函数
            postUpdata:function(){
               var storage=window.localStorage;
               var userid=storage.getItem("userId");
               var researchid=storage.getItem("researchId");
               var longitude=document.getElementById("lngAndlat1").value;
               var latitude=document.getElementById("lngAndlat2").value;

               this.$options.methods.checkItem();

               let param={
                   userId: userid,
                   researchId:researchid,
                   tag: this.$data.re_tag,
                   town: this.$data.re_town,
                   community: this.$data.re_community,
                   address: this.$data.re_address,
                   longitude: longitude,
                   latitude: latitude,
                   name: this.$data.re_name,
                   legalRepresentative: this.$data.re_legalRepresentative,
                   legalRePhone: this.$data.re_legalRePhone,
                   envirRepresentative: this.$data.re_envirRepresentative,
                   envirRePhone: this.$data.re_envirRePhone,
                   hasLicence: this.$data.re_hasLicence == '0' ? false : true,
                   envirProcedures: this.$data.envirProcedures,
                   tradeType: this.$data.tradeType,
                   pollutionType: this.$data.re_pollutionType.join("#"),
                   productType: this.$data.re_productType.join("#"),
                   otherProductType: this.$data.re_otherProductType,
                   technology: this.$data.re_technology.join("#"),
                   otherTechnology: this.$data.re_otherTechnology,
                   wastewaterTreatment: this.$data.re_wastewaterTreatment,
                   waterAcceptComp: this.$data.re_waterAcceptComp,
                   exhaustGasType: this.$data.re_exhaustGasType.join('#'),
                   wasteGasTreatment: this.$data.re_wasteGasTreatment.join('#'),
                   hazardousWasteStorage: this.$data.re_hazardousWasteStorage,
                   hazardousWasteTransfer: this.$data.re_hazardousWasteTransfer,
                   hazardousAcceptComp: this.$data.re_hazardousAcceptComp,
                   hazardousStorageSign: this.$data.re_hazardousStorageSign,
                   emergencyPlan: this.$data.re_emergencyPlan,
                   problem: this.$data.re_problem,
                   treat: this.$data.re_treat,
                   sewagePermit: this.$data.re_sewagePermit,
                   auditor: this.$data.re_auditor,
                   inspector1: this.$data.re_inspector1,
                   inspector2: this.$data.re_inspector2,
                   inspector3: this.$data.re_inspector3,
                   inspector4: this.$data.re_inspector4,
                   picture1: this.$data.re_picture1,
                   licenseUrl: this.re_licenseUrl,
                   picture2: this.$data.re_picture3.length==0?"":this.re_picture3.join('#'),
                   picture3: this.$data.re_picture4.length==0?"":this.re_picture4.join('#'),
                   picture4: this.$data.re_picture5.length==0?"":this.re_picture5.join('#'),
                   checkDate: this.$data.re_checkDate,
                   checkUserNo: this.$data.re_userNo,
                   unitNo: this.$data.re_fightUnit,
                   area: this.$data.re_subdivisionArea,
                   productCondition: this.$data.re_productCondition,
                   otherTag: this.$data.re_otherTag,
                   otherEnvirProcedures: this.$data.re_otherEnvirProcedures,
                   otherWastewaterTreatment: this.$data.re_otherWastewaterTreatment
               };
               let headers={"Accept":"application/json","content-type":"application/json"};
               let url="https://dgutxm.cn/wuranyuan-server/saveCheckTableInfo";
               this.$http.post(url,param,
                   headers,{emulateJSON:true}
                   ).then(function(res){
                      var str=res.body;
                      if(str.code=="00"){alert("污染排查表填写完成！\n污染源编号为："+str.message);
                      window.location="menu.html";
                  }else{
                   alert(str.message);
                   this.submitDisabled=false;
               }

           },function(res){
               this.submitDisabled=false;
               console.log(res.status);
           });
               },


            //获取照片函数
            postPic: function () {
                vme.submitDisabled=true;
                var flag = true;
                var no = -1;
                var form = document.getElementById("picForm");
                var imageList = new FormData(form);
                var length1;
                var length2;
                var length3;
                var length4;
                var length5;
                let pic1 = vme.$refs.file1.files;
                let pic2 = vme.$refs.file2.files;
                let pic3 = vme.$refs.file3;
                let pic4 = vme.$refs.file4;
                let pic5 = vme.$refs.file5;

                length1=pic1.length;
                if (pic1.length > 0) {
                    if (pic1[0].size > (5 * 1024 * 1024)) flag = false;
                    no = 1;
                }

                length2=pic2.length;
                if (pic2.length > 0) {
                    if (pic2[0].size > (5 * 1024 * 1024)) flag = false;
                    no = 2;
                }

                length3=pic3.length;
                for (var i = 0; i < pic3.length; i++) {
                    let tempPic3 = pic3[i].files;
                    if (tempPic3.length > 0) {
                        if (tempPic3[0].size > (5 * 1024 * 1024)) flag = false;
                        no = 3;
                    }else{
                        alert("存在未选择图片");
                        vme.submitDisabled=false;
                        return false;
                    }
                }

                length4=pic4.length;
                for (var i = 0; i < pic4.length; i++) {
                    let tempPic4 = pic4[i].files;
                    if (tempPic4.length > 0) {
                        if (tempPic4[0].size > (5 * 1024 * 1024)) flag = false;
                        no = 3;
                    }else{
                        alert("存在未选择图片");
                        vme.submitDisabled=false;
                        return false;
                    }
                }
                length5=pic5.length;
                for (var i = 0; i < pic5.length; i++) {
                    let tempPic5 = pic5[i].files;
                    if (tempPic5.length > 0) {
                        if (tempPic5[0].size > (5 * 1024 * 1024)) flag = false;
                        no = 3;
                    }else{
                        alert("存在未选择图片");
                        vme.submitDisabled=false;
                        return false;
                    }
                }

                if (flag) {
                    document.getElementById("pollutionSubmit").innerHTML = "上传照片中，请稍后...";
                    let headers = {
                        "content-type": "multipart/form-data"
                    };
                    let url = "/wuranyuan-server/uploadPic";
                    vme.$http.post(url, imageList,
                        headers, {
                            emulateJSON: true
                        }
                        ).then(function (res) {
                            var results = res.body;
                            if (results.code == "00") {
                                if (results.data.length >= 1){
                                    var i=0;
                                    if(length1 > 1){
                                        vme.re_picture1 = results.data[i];
                                        i++;
                                    }
                                    if (length2 > 0){
                                        vme.re_licenseUrl = results.data[i];
                                        i++;
                                    }
                                    if (length3 > 0) {
                                        while ( i < length1 + length2 + length3) {
                                            vme.re_picture3.push(results.data[i]);
                                            i++;
                                        }
                                    }
                                    if (length4 > 0) {
                                        while ( i < length1 + length2 + length3 + length4 ) {
                                            vme.re_picture4.push(results.data[i]);
                                            i++;
                                        }
                                    }
                                    if (length5 > 0) {
                                        while ( i < 1 + length2 + length3 + length4 + length5) {
                                            vme.re_picture5.push(results.data[i]);
                                            i++;
                                        }
                                    }
                                }
                            }

                        }, function (res) {
                            alert("图片上传失败");
                            document.getElementById("pollutionSubmit").innerHTML = "提交";
                            vme.submitDisabled=false;
                        });
                    } else {
                        alert("第" + no + "图片过大,上传失败！");
                        document.getElementById("pollutionSubmit").innerHTML = "提交";
                        vme.submitDisabled=false;
                    }
                }
            },
            created: function () {
                this.postData();
                this.$nextTick(() => {
                });
            }
        })
/*window.setTimeout(check,500);*/
}