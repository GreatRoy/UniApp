!function(){var t=function(){return function(t){function e(o){if(i[o])return i[o].exports;var r=i[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}({0:function(t,e,i){var o=i(37),r=i(38),a=i(39);$app_define$("@app-component/index",[],function(t,e,i){a(i,e,t),e.__esModule&&e.default&&(i.exports=e.default),i.exports.template=o,i.exports.style=r}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},37:function(t,e){t.exports={type:"div",attr:{},classList:["container"],children:[{type:"div",attr:{},classList:["item-title"],children:[{type:"text",attr:{value:"radio"}}]},{type:"div",attr:{},classList:["item-content"],children:[{type:"list",attr:{},classList:["list"],children:[{type:"list-item",attr:{type:"radio"},classList:["line"],children:[{type:"input",attr:{type:"radio",id:"radio1",name:"radio",value:"radio1"},id:"radio1",events:{change:"checkRadio"}},{type:"label",attr:{target:"radio1",value:"HBuilder"}}]},{type:"list-item",attr:{type:"radio"},classList:["line"],children:[{type:"input",attr:{type:"radio",id:"radio2",name:"radio",value:"radio2"},id:"radio2",events:{change:"checkRadio"}},{type:"label",attr:{target:"radio2",value:"5+客户端"}}]},{type:"list-item",attr:{type:"radio"},classList:["line"],children:[{type:"input",attr:{type:"radio",id:"radio3",name:"radio",value:"radio3"},id:"radio3",events:{change:"checkRadio"}},{type:"label",attr:{target:"radio3",value:"wap2app"}}]},{type:"list-item",attr:{type:"radio"},children:[{type:"input",attr:{type:"radio",id:"radio4",name:"radio",value:"radio4"},id:"radio4",events:{change:"checkRadio"}},{type:"label",attr:{target:"radio4",value:"mui"}}]}]}]}]}},38:function(t,e){t.exports={text:{color:"#888888"},".container":{flexDirection:"column",flex:1},".item-title":{marginTop:"90px",marginRight:"0px",marginBottom:"90px",marginLeft:"0px",width:"750px",justifyContent:"center"},".item-title text":{paddingTop:"10px",paddingRight:"30px",paddingBottom:"10px",paddingLeft:"30px",borderBottomColor:"#D8D8D8",borderBottomWidth:"1px",textAlign:"center",color:"#BEBEBE",fontSize:"32px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"item-title"},{t:"d"},{t:"t",n:"text"}]}},".item-content":{marginTop:"0px",marginRight:"40px",marginBottom:"0px",marginLeft:"40px",flexDirection:"column"},".item-group":{flexDirection:"column",paddingTop:"10px",paddingRight:"20px",paddingBottom:"10px",paddingLeft:"20px",marginTop:"30px",marginRight:"0px",marginBottom:"30px",marginLeft:"0px",backgroundColor:"#ffffff"},".item-group-button":{height:"80px",backgroundColor:"#dd524d",marginTop:"20px",marginRight:"0px",marginBottom:"20px",marginLeft:"0px",color:"#ffffff",borderRadius:"8px"},".item-group-text":{paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px",color:"#888888"},".list":{borderTopColor:"#D8D8D8",borderRightColor:"#D8D8D8",borderBottomColor:"#D8D8D8",borderLeftColor:"#D8D8D8",borderTopWidth:"1px",borderBottomWidth:"1px",backgroundColor:"#ffffff"},label:{color:"#888888"},".list list-item":{flexDirection:"row",height:"90px",paddingRight:"40px",marginLeft:"40px",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"list"},{t:"d"},{t:"t",n:"list-item"}]}},".line":{borderTopColor:"#D8D8D8",borderRightColor:"#D8D8D8",borderBottomColor:"#D8D8D8",borderLeftColor:"#D8D8D8",borderBottomWidth:"1px"}}},39:function(t,e){t.exports=function(t,e,i){"use strict";t.exports={onInit:function(t){this.$page.setTitleBar({text:"Radio"})},checkRadio:function(){}}}}})};return"undefined"==typeof window?t():void(window.createPageHandler=t)}();