(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fab9432"],{"56ab":function(e,t,a){},6100:function(e,t,a){"use strict";var n=a("56ab"),o=a.n(n);o.a},c9e8:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"projectManageTableRef",staticClass:"project-manage-table",class:"1"===e.$root.themeHomeChange?"manage_table_light":""},[a("bda-scroll-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],ref:"table",style:{height:e.tableHeight},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)",background:"",data:e.tableData,"row-key":"id","popper-append-to-body":"",border:"",blInitLoad:!1,"tooltip-effect":"light"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{staticStyle:{"background-color":"#041338"},attrs:{type:"selection","reserve-selection":!0,width:"48"}}),a("el-table-column",{attrs:{type:"index",label:"序号","min-width":"60"}}),a("el-table-column",{attrs:{prop:"ruleName",label:"规则名称","min-width":"160","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"ruleType",label:"规则分类","min-width":"100"}}),a("el-table-column",{attrs:{prop:"department",label:"归口部门","show-overflow-tooltip":"","min-width":"100"}}),a("el-table-column",{attrs:{prop:"ywjd",label:"业务流程阶段","min-width":"140"}}),a("el-table-column",{attrs:{prop:"ywsx","show-overflow-tooltip":"",label:"业务事项","min-width":"168"}}),a("el-table-column",{attrs:{prop:"ruleDefine",label:"定义规则","min-width":"168","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"riskLevel",label:"风险等级","min-width":"100"}}),a("el-table-column",{attrs:{prop:"zrgw",label:"责任岗位","min-width":"120"}}),a("el-table-column",{attrs:{prop:"ruleObj","show-overflow-tooltip":"",label:"规则实例名","min-width":"168"}}),a("el-table-column",{attrs:{prop:"wjtwsy",label:"文件条文索引","min-width":"168","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"glzsk",label:"关联知识库","min-width":"208","show-overflow-tooltip":!1},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.files,(function(t){return a("div",{key:t.zskId,staticStyle:{cursor:"pointer"},attrs:{title:t.fileName},on:{click:function(a){return e.viewFile(t)}}},[e._v(e._s(t.fileName))])}))}}])}),a("el-table-column",{attrs:{prop:"isOpen",label:"是否启用","min-width":"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(a){return e.HandleIsOpen(t.row)}},model:{value:t.row.isOpen,callback:function(a){e.$set(t.row,"isOpen",a)},expression:"scope.row.isOpen"}})]}}])}),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("p",{staticStyle:{cursor:"pointer",color:"#66b9ff"},on:{click:function(a){return e.redactClick(t.row)}}},[e._v("\n          编辑\n        ")])]}}])})],1),a("el-pagination",{attrs:{"current-page":e.pageInfoConfig.page,"page-sizes":[10,20,30,40,50],"page-size":e.pageInfoConfig.rows,background:"",layout:"prev, pager, next, sizes, jumper, total",total:e.pageInfoConfig.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},o=[],l=(a("ac6a"),a("8986")),i=a("db49"),r={name:"projectManageTable",mixins:[l["a"]],data:function(){return{tableData:[],tableData2:[],pageInfoConfig:{page:1,rows:10,total:0},tableHeight:"",selectData:[],formData:{keyValue:"",ruleType:"",riskRank:"",resJobs:"",department:""},tableLoading:!1}},computed:{},mounted:function(){this.getTableData()},methods:{viewFile:function(e){window.open(i["b"]+"/rule/file/download?fileName="+e.fileName+"&filePath="+e.filePath)},initForm:function(e){this.formData=e,this.pageInfoConfig.page=1,this.pageInfoConfig.rows=10,this.getTableData()},HandleIsOpen:function(e){var t=this;this.handleIsOpen({isOpen:e.isOpen?1:0,ruleId:e.ruleId}).then((function(){})).finally((function(){t.getTableData()}))},getTableData:function(){var e=this;this.tableLoading=!0;var t="",a=this.$route.query.mark;t="myCenter"===a?"2":null,this.queryRuleList({departmentCode:this.formData.department,keyword:this.formData.keyValue,riskLevel:this.formData.riskRank,ruleType:this.formData.ruleType,zrgw:this.formData.resJobs,auditStatus:t,current:this.pageInfoConfig.page,size:this.pageInfoConfig.rows}).then((function(t){t.rows.filter((function(e){return 1==e.isOpen&&e.isOpen?e.isOpen=!0:e.isOpen=!1})),e.tableData=t.rows,e.pageInfoConfig.total=t.records})).finally((function(){e.tableLoading=!1}))},toggleSelection:function(e){var t=this;e?e.forEach((function(e){t.$refs.table.toggleRowSelection(e)})):this.$refs.table.clearSelection()},handleSelectionChange:function(e){this.selectData=e},deleteRows:function(){var e=this;if(this.selectData.length<1)this.$message.warning("请选择需要删除的值！");else{var t=[];t=this.selectData.map((function(e){return e.id}));for(var a=new URLSearchParams,n=0;n<t.length;n++)a.append("ids",t[n]);this.ruleDelete(a).then((function(){e.pageInfoConfig.page,e.getTableData()})).finally((function(){}))}},handleSizeChange:function(e){this.pageInfoConfig.rows=e,this.getTableData(),window.console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){this.pageInfoConfig.page=e,this.getTableData(),window.console.log("当前页: ".concat(e))},redactClick:function(e){this.$emit("editRow",e)}}},s=r,c=(a("6100"),a("2877")),p=Object(c["a"])(s,n,o,!1,null,"c293c052",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2fab9432.8e5975e5.js.map