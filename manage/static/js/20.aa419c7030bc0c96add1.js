webpackJsonp([20],{189:function(t,e,o){o(500);var s=o(84)(o(365),o(531),"data-v-3c00eea0",null);t.exports=s.exports},365:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o(88),r=o.n(s),a={status:"draft",title:"",content:"",content_short:"",source_uri:"",image_uri:"",display_time:void 0,id:void 0,platforms:["a-platform"],comment_disabled:!1,importance:0};e.default={name:"ArticleDetail",components:{Tinymce:Tinymce,MDinput:MDinput,Upload:Upload,Sticky:Sticky,Warning:Warning,CommentDropdown:CommentDropdown,PlatformDropdown:PlatformDropdown,SourceUrlDropdown:SourceUrlDropdown},props:{isEdit:{type:Boolean,default:!1}},data:function(){var t=this,e=function(e,o,s){""===o?(t.$message({message:e.field+"为必传项",type:"error"}),s(new Error(e.field+"为必传项"))):s()},o=function(e,o,s){o?validURL(o)?s():(t.$message({message:"外链url填写不正确",type:"error"}),s(new Error("外链url填写不正确"))):s()};return{postForm:r()({},a),loading:!1,userListOptions:[],rules:{image_uri:[{validator:e}],title:[{validator:e}],content:[{validator:e}],source_uri:[{validator:o,trigger:"blur"}]},tempRoute:{}}},computed:{contentShortLength:function(){return this.postForm.content_short.length},lang:function(){return this.$store.getters.language}},created:function(){if(this.isEdit){var t=this.$route.params&&this.$route.params.id;this.fetchData(t)}else this.postForm=r()({},a);this.tempRoute=r()({},this.$route)},methods:{fetchData:function(t){var e=this;fetchArticle(t).then(function(t){e.postForm=t.data,e.postForm.title+="   Article Id:"+e.postForm.id,e.postForm.content_short+="   Article Id:"+e.postForm.id,e.setTagsViewTitle()}).catch(function(t){console.log(t)})},setTagsViewTitle:function(){var t="zh"===this.lang?"编辑文章":"Edit Article",e=r()({},this.tempRoute,{title:t+"-"+this.postForm.id});this.$store.dispatch("tagsView/updateVisitedView",e)},submitForm:function(){var t=this;this.postForm.display_time=parseInt(this.display_time/1e3),console.log(this.postForm),this.$refs.postForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.$notify({title:"成功",message:"发布文章成功",type:"success",duration:2e3}),t.postForm.status="published",t.loading=!1})},draftForm:function(){if(0===this.postForm.content.length||0===this.postForm.title.length)return void this.$message({message:"请填写必要的标题和内容",type:"warning"});this.$message({message:"保存成功",type:"success",showClose:!0,duration:1e3}),this.postForm.status="draft"},getRemoteUserList:function(t){var e=this;searchUser(t).then(function(t){t.data.items&&(e.userListOptions=t.data.items.map(function(t){return t.name}))})}}}},403:function(t,e,o){e=t.exports=o(187)(!1),e.push([t.i,".createPost-container[data-v-3c00eea0]{position:relative}.createPost-container .createPost-main-container[data-v-3c00eea0]{padding:40px 45px 20px 50px}.createPost-container .createPost-main-container .postInfo-container[data-v-3c00eea0]{position:relative;margin-bottom:10px}.createPost-container .createPost-main-container .postInfo-container .postInfo-container-item[data-v-3c00eea0]{float:left}.createPost-container .word-counter[data-v-3c00eea0]{width:40px;position:absolute;right:-10px;top:0}",""])},500:function(t,e,o){var s=o(403);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);o(188)("4883d1aa",s,!0)},531:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"createPost-container"},[o("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,rules:t.rules}},[o("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar "+t.postForm.status}},[o("CommentDropdown",{model:{value:t.postForm.comment_disabled,callback:function(e){t.$set(t.postForm,"comment_disabled",e)},expression:"postForm.comment_disabled"}}),t._v(" "),o("PlatformDropdown",{model:{value:t.postForm.platforms,callback:function(e){t.$set(t.postForm,"platforms",e)},expression:"postForm.platforms"}}),t._v(" "),o("SourceUrlDropdown",{model:{value:t.postForm.source_uri,callback:function(e){t.$set(t.postForm,"source_uri",e)},expression:"postForm.source_uri"}}),t._v(" "),o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:t.submitForm}},[t._v("\n        发布\n      ")]),t._v(" "),o("el-button",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{type:"warning"},on:{click:t.draftForm}},[t._v("\n        草稿\n      ")])],1),t._v(" "),o("div",{staticClass:"createPost-main-container"},[o("el-row",[o("el-col",{attrs:{span:24}},[o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{prop:"title"}},[o("MDinput",{attrs:{maxlength:100,name:"name",required:""},model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}},[t._v("\n              标题\n            ")])],1),t._v(" "),o("div",{staticClass:"postInfo-container"},[o("el-row",[o("el-col",{attrs:{span:8}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"45px",label:"作者:"}},[o("el-select",{attrs:{"remote-method":t.getRemoteUserList,filterable:"","default-first-option":"",remote:"",placeholder:"搜索用户"},model:{value:t.postForm.author,callback:function(e){t.$set(t.postForm,"author",e)},expression:"postForm.author"}},t._l(t.userListOptions,function(t,e){return o("el-option",{key:t+e,attrs:{label:t,value:t}})}),1)],1)],1),t._v(" "),o("el-col",{attrs:{span:10}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"80px",label:"发布时间:"}},[o("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:t.postForm.display_time,callback:function(e){t.$set(t.postForm,"display_time",e)},expression:"postForm.display_time"}})],1)],1),t._v(" "),o("el-col",{attrs:{span:6}},[o("el-form-item",{staticClass:"postInfo-container-item",attrs:{"label-width":"60px",label:"重要性:"}},[o("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{max:3,colors:["#99A9BF","#F7BA2A","#FF9900"],"low-threshold":1,"high-threshold":3},model:{value:t.postForm.importance,callback:function(e){t.$set(t.postForm,"importance",e)},expression:"postForm.importance"}})],1)],1)],1)],1)],1)],1),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"40px"},attrs:{"label-width":"45px",label:"摘要:"}},[o("el-input",{staticClass:"article-textarea",attrs:{rows:1,type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:t.postForm.content_short,callback:function(e){t.$set(t.postForm,"content_short",e)},expression:"postForm.content_short"}}),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[t._v(t._s(t.contentShortLength)+"字")])],1),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"content"}},[o("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1),t._v(" "),o("el-form-item",{staticStyle:{"margin-bottom":"30px"},attrs:{prop:"image_uri"}},[o("Upload",{model:{value:t.postForm.image_uri,callback:function(e){t.$set(t.postForm,"image_uri",e)},expression:"postForm.image_uri"}})],1)],1)],1)],1)},staticRenderFns:[]}}});