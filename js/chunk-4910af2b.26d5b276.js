(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4910af2b"],{"176b":function(t,e,i){},"1ad7":function(t,e,i){"use strict";var n=i("176b"),a=i.n(n);a.a},"356a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ringPieCharts"},[i("div",{staticClass:"header"},[t._v("风险监测情况")]),i("div",{ref:"ringPieCharts",attrs:{id:"ringPieCharts"}})])},a=[],o=(i("7f7f"),i("ac6a"),i("c5f6"),i("55dd"),i("313e")),r={color:["#4389f9","#00caff","#16ebd9","#8affa3"],series:[{name:"Access From",type:"pie",center:["50%","50%"],radius:["45%","70%"],avoidLabelOverlap:!1,label:{position:"outer",alignTo:"edge",margin:"25%",formatter:"{name|{b}}\n  {data|{c} }",minMargin:5,edgeDistance:10,lineHeight:15,color:"#16ebd9",rich:{name:{fontSize:12,fontWeight:"bold"},data:{fontSize:10,fontWeight:"bold",lineHeight:20,color:"#fff",align:"right"}}},emphasis:{label:{show:!0,fontSize:"40",fontWeight:"bold"}},labelLine:{length:15,length2:"8%",maxSurfaceAngle:50,lineStyle:{width:2}},data:[{value:13,name:"重大缺陷"},{value:22,name:"较大缺陷"},{value:33,name:"一般缺陷"},{value:66,name:"轻微缺陷"}].sort((function(t,e){return e.value-t.value}))}]},s={name:"ringPieCharts",props:{index:{type:Number,default:function(){return null}},xData:{type:Array,default:function(){return[]}},seriesData:{type:Array,default:function(){return[]}},_zb:{type:Array,default:function(){return["单位",""]}}},watch:{},data:function(){return{option:r}},mounted:function(){this.init()},methods:{dataSet:function(){var t=this;this.option.yAxis[0].name=this._zb[0],this.option.xAxis[0].name=this._zb[1],this.option.xAxis[0].data=this.xData,this.seriesData.length>0&&(this.option.legend.data=[],this.seriesData.forEach((function(e){t.option.legend.data.push(e.name)})),this.option.series=this.seriesData)},init:function(){var t=o["init"](this.$refs.ringPieCharts);window.addEventListener("resize",t.resize),window.console.log(this.option),t.setOption(this.option);var e=this;t.on("click",(function(t){e.$emit("getData",t,e.index)}))}}},l=s,u=(i("1ad7"),i("2877")),d=Object(u["a"])(l,n,a,!1,null,"75a16929",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-4910af2b.26d5b276.js.map