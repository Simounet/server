!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2),n(3),n(4),n(5),n(6),n(7)},function(e,n){!function(e){e.SystemTags={getDescriptiveTag:function(e){if(_.isUndefined(e.name)&&!_.isUndefined(e.toJSON)&&(e=e.toJSON()),_.isUndefined(e.name))return $("<span>").addClass("non-existing-tag").text(t("core","Non-existing tag #{tag}",{tag:e}));var n,s=$("<span>");if(s.append(escapeHTML(e.name)),e.userAssignable||(n=t("core","restricted")),e.userVisible||(n=t("core","invisible")),n){var i=$("<em>").text(" "+t("core","({scope})",{scope:n}));s.append(i)}return s}}}(OC)},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s,i;s=Handlebars.template,(i=OC.SystemTags.Templates=OC.SystemTags.Templates||{}).result=s({1:function(e,t,n,s,i){return" new-item"},3:function(e,t,n,s,i){var l,a,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\t\t<span class="label">'+(null!=(l="function"==typeof(a=null!=(a=o(n,"tagMarkup")||(null!=t?o(t,"tagMarkup"):t))?a:e.hooks.helperMissing)?a.call(null!=t?t:e.nullContext||{},{name:"tagMarkup",hash:{},data:i,loc:{start:{line:4,column:22},end:{line:4,column:37}}}):a)?l:"")+"</span>\n"},5:function(e,t,n,s,i){var l,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\t\t<span class="label">'+e.escapeExpression("function"==typeof(l=null!=(l=a(n,"name")||(null!=t?a(t,"name"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:i,loc:{start:{line:6,column:22},end:{line:6,column:30}}}):l)+"</span>\n"},7:function(e,t,n,s,i){var l,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\t\t<span class="systemtags-actions">\n\t\t\t<a href="#" class="rename icon icon-rename" title="'+e.escapeExpression("function"==typeof(l=null!=(l=a(n,"renameTooltip")||(null!=t?a(t,"renameTooltip"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"renameTooltip",hash:{},data:i,loc:{start:{line:10,column:54},end:{line:10,column:71}}}):l)+'"></a>\n\t\t</span>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,s,i,l){var a,o,r,c=null!=t?t:e.nullContext||{},u=e.hooks.helperMissing,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]},p='<span class="systemtags-item'+(null!=(a=d(s,"if").call(c,null!=t?d(t,"isNew"):t,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:28},end:{line:1,column:57}}}))?a:"")+'" data-id="'+e.escapeExpression("function"===n(o=null!=(o=d(s,"id")||(null!=t?d(t,"id"):t))?o:u)?o.call(c,{name:"id",hash:{},data:l,loc:{start:{line:1,column:68},end:{line:1,column:74}}}):o)+'">\n<span class="checkmark icon icon-checkmark"></span>\n'+(null!=(a=d(s,"if").call(c,null!=t?d(t,"isAdmin"):t,{name:"if",hash:{},fn:e.program(3,l,0),inverse:e.program(5,l,0),data:l,loc:{start:{line:3,column:1},end:{line:7,column:8}}}))?a:"");return o=null!=(o=d(s,"allowActions")||(null!=t?d(t,"allowActions"):t))?o:u,r={name:"allowActions",hash:{},fn:e.program(7,l,0),inverse:e.noop,data:l,loc:{start:{line:8,column:1},end:{line:12,column:18}}},a="function"===n(o)?o.call(c,r):o,d(s,"allowActions")||(a=e.hooks.blockHelperMissing.call(t,a,r)),null!=a&&(p+=a),p+"</span>\n"},useData:!0}),i.result_form=s({1:function(e,t,n,s,i){var l,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\t\t<a href="#" class="delete icon icon-delete" title="'+e.escapeExpression("function"==typeof(l=null!=(l=a(n,"deleteTooltip")||(null!=t?a(t,"deleteTooltip"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"deleteTooltip",hash:{},data:i,loc:{start:{line:5,column:53},end:{line:5,column:70}}}):l)+'"></a>\n'},compiler:[8,">= 4.3.0"],main:function(e,t,s,i,l){var a,o,r=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<form class="systemtags-rename-form">\n\t <label class="hidden-visually" for="'+u("function"===n(o=null!=(o=d(s,"cid")||(null!=t?d(t,"cid"):t))?o:c)?o.call(r,{name:"cid",hash:{},data:l,loc:{start:{line:2,column:38},end:{line:2,column:45}}}):o)+'-rename-input">'+u("function"===n(o=null!=(o=d(s,"renameLabel")||(null!=t?d(t,"renameLabel"):t))?o:c)?o.call(r,{name:"renameLabel",hash:{},data:l,loc:{start:{line:2,column:60},end:{line:2,column:75}}}):o)+'</label>\n\t<input id="'+u("function"===n(o=null!=(o=d(s,"cid")||(null!=t?d(t,"cid"):t))?o:c)?o.call(r,{name:"cid",hash:{},data:l,loc:{start:{line:3,column:12},end:{line:3,column:19}}}):o)+'-rename-input" type="text" value="'+u("function"===n(o=null!=(o=d(s,"name")||(null!=t?d(t,"name"):t))?o:c)?o.call(r,{name:"name",hash:{},data:l,loc:{start:{line:3,column:53},end:{line:3,column:61}}}):o)+'">\n'+(null!=(a=d(s,"if").call(r,null!=t?d(t,"isAdmin"):t,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:4,column:1},end:{line:6,column:8}}}))?a:"")+"</form>\n"},useData:!0}),i.selection=s({1:function(e,t,n,s,i){var l,a,o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\t<span class="label">'+(null!=(l="function"==typeof(a=null!=(a=o(n,"tagMarkup")||(null!=t?o(t,"tagMarkup"):t))?a:e.hooks.helperMissing)?a.call(null!=t?t:e.nullContext||{},{name:"tagMarkup",hash:{},data:i,loc:{start:{line:2,column:21},end:{line:2,column:36}}}):a)?l:"")+"</span>\n"},3:function(e,t,n,s,i){var l,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\t<span class="label">'+e.escapeExpression("function"==typeof(l=null!=(l=a(n,"name")||(null!=t?a(t,"name"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"name",hash:{},data:i,loc:{start:{line:4,column:21},end:{line:4,column:29}}}):l)+"</span>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,s,i){var l,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return null!=(l=a(n,"if").call(null!=t?t:e.nullContext||{},null!=t?a(t,"isAdmin"):t,{name:"if",hash:{},fn:e.program(1,i,0),inverse:e.program(3,i,0),data:i,loc:{start:{line:1,column:0},end:{line:5,column:7}}}))?l:""},useData:!0})},function(e,t){!function(e){_.extend(e.Files.Client,{PROPERTY_FILEID:"{"+e.Files.Client.NS_OWNCLOUD+"}id",PROPERTY_CAN_ASSIGN:"{"+e.Files.Client.NS_OWNCLOUD+"}can-assign",PROPERTY_DISPLAYNAME:"{"+e.Files.Client.NS_OWNCLOUD+"}display-name",PROPERTY_USERVISIBLE:"{"+e.Files.Client.NS_OWNCLOUD+"}user-visible",PROPERTY_USERASSIGNABLE:"{"+e.Files.Client.NS_OWNCLOUD+"}user-assignable"});var t=e.Backbone.Model.extend({sync:e.Backbone.davSync,defaults:{userVisible:!0,userAssignable:!0,canAssign:!0},davProperties:{id:e.Files.Client.PROPERTY_FILEID,name:e.Files.Client.PROPERTY_DISPLAYNAME,userVisible:e.Files.Client.PROPERTY_USERVISIBLE,userAssignable:e.Files.Client.PROPERTY_USERASSIGNABLE,canAssign:e.Files.Client.PROPERTY_CAN_ASSIGN},parse:function(e){return{id:e.id,name:e.name,userVisible:!0===e.userVisible||"true"===e.userVisible,userAssignable:!0===e.userAssignable||"true"===e.userAssignable,canAssign:!0===e.canAssign||"true"===e.canAssign}}});e.SystemTags=e.SystemTags||{},e.SystemTags.SystemTagModel=t}(OC)},function(e,t){!function(e){var t=e.Backbone.Collection.extend({sync:e.Backbone.davSync,usePUT:!0,_objectId:null,_objectType:"files",model:e.SystemTags.SystemTagModel,url:function(){return e.linkToRemote("dav")+"/systemtags-relations/"+this._objectType+"/"+this._objectId},setObjectId:function(e){this._objectId=e},setObjectType:function(e){this._objectType=e},initialize:function(e,t){t=t||{},_.isUndefined(t.objectId)||(this._objectId=t.objectId),_.isUndefined(t.objectType)||(this._objectType=t.objectType)},getTagIds:function(){return this.map((function(e){return e.id}))}});e.SystemTags=e.SystemTags||{},e.SystemTags.SystemTagsMappingCollection=t}(OC)},function(e,t){!function(e){var t=e.Backbone.Collection.extend({sync:e.Backbone.davSync,model:e.SystemTags.SystemTagModel,url:function(){return e.linkToRemote("dav")+"/systemtags/"},filterByName:function(e){return this.filter((function(t){return function(e,t){return e.get("name").substr(0,t.length).toLowerCase()===t.toLowerCase()}(t,e)}))},reset:function(){return this.fetched=!1,e.Backbone.Collection.prototype.reset.apply(this,arguments)},fetch:function(t){var n=this;if(t=t||{},this.fetched||t.force)return t.success&&t.success(this,null,t),this.trigger("sync",this,null,t),Promise.resolve();var s=t.success;return(t=_.extend({},t)).success=function(){if(n.fetched=!0,s)return s.apply(this,arguments)},e.Backbone.Collection.prototype.fetch.call(this,t)}});e.SystemTags=e.SystemTags||{},e.SystemTags.SystemTagsCollection=t,e.SystemTags.collection=new e.SystemTags.SystemTagsCollection}(OC)},function(e,n){!function(e){var n=e.Backbone.View.extend({_rendered:!1,_newTag:null,_lastUsedTags:[],className:"systemTagsInputFieldContainer",template:function(e){return'<input class="systemTagsInputField" type="hidden" name="tags" value=""/>'},initialize:function(t){t=t||{},this._multiple=!!t.multiple,this._allowActions=_.isUndefined(t.allowActions)||!!t.allowActions,this._allowCreate=_.isUndefined(t.allowCreate)||!!t.allowCreate,this._isAdmin=!!t.isAdmin,_.isFunction(t.initSelection)&&(this._initSelection=t.initSelection),this.collection=t.collection||e.SystemTags.collection;var n=this;this.collection.on("change:name remove",(function(){_.defer(n._refreshSelection)})),_.defer(_.bind(this._getLastUsedTags,this)),_.bindAll(this,"_refreshSelection","_onClickRenameTag","_onClickDeleteTag","_onSelectTag","_onDeselectTag","_onSubmitRenameTag")},_getLastUsedTags:function(){var t=this;$.ajax({type:"GET",url:e.generateUrl("/apps/systemtags/lastused"),success:function(e){t._lastUsedTags=e}})},_refreshSelection:function(){this.$tagsField.select2("val",this.$tagsField.val())},_onClickRenameTag:function(n){var s=$(n.target).closest(".systemtags-item"),i=s.attr("data-id"),l=this.collection.get(i).get("name"),a=$(e.SystemTags.Templates.result_form({cid:this.cid,name:l,deleteTooltip:t("core","Delete"),renameLabel:t("core","Rename"),isAdmin:this._isAdmin}));return s.find(".label").after(a),s.find(".label, .systemtags-actions").addClass("hidden"),s.closest(".select2-result").addClass("has-form"),a.find("[title]").tooltip({placement:"bottom",container:"body"}),a.find("input").focus().selectRange(0,l.length),!1},_onSubmitRenameTag:function(e){e.preventDefault();var t=$(e.target),n=t.closest(".systemtags-item"),s=n.attr("data-id"),i=this.collection.get(s),l=$(e.target).find("input").val().trim();l&&l!==i.get("name")&&(i.save({name:l}),n.find(".label").text(l)),n.find(".label, .systemtags-actions").removeClass("hidden"),t.remove(),n.closest(".select2-result").removeClass("has-form")},_onClickDeleteTag:function(e){var t=$(e.target).closest(".systemtags-item"),n=t.attr("data-id");return this.collection.get(n).destroy(),$(e.target).tooltip("hide"),t.closest(".select2-result").remove(),!1},_addToSelect2Selection:function(e){var t=this.$tagsField.select2("data");t.push(e),this.$tagsField.select2("data",t)},_onSelectTag:function(e){var t,n=this;if(e.object&&e.object.isNew)return t=this.collection.create({name:e.object.name.trim(),userVisible:!0,userAssignable:!0,canAssign:!0},{success:function(e){n._addToSelect2Selection(e.toJSON()),n._lastUsedTags.unshift(e.id),n.trigger("select",e)},error:function(t,s){409===s.status&&(n.collection.reset(),n.collection.fetch({success:function(t){var s=t.where({name:e.object.name.trim(),userVisible:!0,userAssignable:!0});s.length&&(s=s[0],n._addToSelect2Selection(s.toJSON()),n.trigger("select",s))}}))}}),this.$tagsField.select2("close"),e.preventDefault(),!1;t=this.collection.get(e.object.id),this._lastUsedTags.unshift(t.id),this._newTag=null,this.trigger("select",t)},_onDeselectTag:function(e){this.trigger("deselect",e.choice.id)},_queryTagsAutocomplete:function(e){var t=this;this.collection.fetch({success:function(n){var s=n.filterByName(e.term.trim());t._isAdmin||(s=_.filter(s,(function(e){return e.get("canAssign")}))),e.callback({results:_.invoke(s,"toJSON")})}})},_preventDefault:function(e){e.stopPropagation()},_formatDropDownResult:function(n){return e.SystemTags.Templates.result(_.extend({renameTooltip:t("core","Rename"),allowActions:this._allowActions,tagMarkup:this._isAdmin?e.SystemTags.getDescriptiveTag(n)[0].innerHTML:null,isAdmin:this._isAdmin},n))},_formatSelection:function(t){return e.SystemTags.Templates.selection(_.extend({tagMarkup:this._isAdmin?e.SystemTags.getDescriptiveTag(t)[0].innerHTML:null,isAdmin:this._isAdmin},t))},_createSearchChoice:function(e){if(e=e.trim(),!this.collection.filter((function(t){return t.get("name")===e})).length)return this._newTag?this._newTag.name=e:this._newTag={id:-1,name:e,userAssignable:!0,userVisible:!0,canAssign:!0,isNew:!0},this._newTag},_initSelection:function(e,t){var n=this,s=$(e).val().split(",");function i(e){var t=e.toJSON();return n._isAdmin||t.canAssign||(t.locked=!0),t}this.collection.fetch({success:function(){t(function(e){var t=n.collection.filter((function(t){return e.indexOf(t.id)>=0&&(n._isAdmin||t.get("userVisible"))}));return _.map(t,i)}(s))}})},render:function(){var n=this;this.$el.html(this.template()),this.$el.find("[title]").tooltip({placement:"bottom"}),this.$tagsField=this.$el.find("[name=tags]"),this.$tagsField.select2({placeholder:t("core","Collaborative tags"),containerCssClass:"systemtags-select2-container",dropdownCssClass:"systemtags-select2-dropdown",closeOnSelect:!1,allowClear:!1,multiple:this._multiple,toggleSelect:this._multiple,query:_.bind(this._queryTagsAutocomplete,this),id:function(e){return e.id},initSelection:_.bind(this._initSelection,this),formatResult:_.bind(this._formatDropDownResult,this),formatSelection:_.bind(this._formatSelection,this),createSearchChoice:this._allowCreate?_.bind(this._createSearchChoice,this):void 0,sortResults:function(t){var s=_.pluck(n.$tagsField.select2("data"),"id");return t.sort((function(t,i){var l=s.indexOf(t.id)>=0,a=s.indexOf(i.id)>=0;if(l===a){var o=n._lastUsedTags.indexOf(t.id),r=n._lastUsedTags.indexOf(i.id);return o!==r?-1===r?-1:-1===o?1:o<r?-1:1:e.Util.naturalSortCompare(t.name,i.name)}return l&&!a?-1:1})),t},formatNoMatches:function(){return t("core","No tags found")}}).on("select2-selecting",this._onSelectTag).on("select2-removing",this._onDeselectTag);var s=this.$tagsField.select2("dropdown");s.on("mouseup",".rename",this._onClickRenameTag),s.on("mouseup",".delete",this._onClickDeleteTag),s.on("mouseup",".select2-result-selectable.has-form",this._preventDefault),s.on("submit",".systemtags-rename-form",this._onSubmitRenameTag),this.delegateEvents()},remove:function(){this.$tagsField&&this.$tagsField.select2("destroy")},getValues:function(){this.$tagsField.select2("val")},setValues:function(e){this.$tagsField.select2("val",e)},setData:function(e){this.$tagsField.select2("data",e)}});e.SystemTags=e.SystemTags||{},e.SystemTags.SystemTagsInputField=n}(OC)},function(e,t,n){var s=n(8);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,n(10).default)("bdf318e0",s,!0,{})},function(e,t,n){(t=n(9)(!1)).push([e.i,".systemtags-select2-dropdown .select2-result-label .checkmark{visibility:hidden;margin-left:-5px;margin-right:5px;padding:4px}.systemtags-select2-dropdown .select2-result-label .new-item .systemtags-actions{display:none}.systemtags-select2-dropdown .select2-selected .select2-result-label .checkmark{visibility:visible}.systemtags-select2-dropdown .select2-result-label .icon{display:inline-block;opacity:.5}.systemtags-select2-dropdown .select2-result-label .icon.rename{padding:4px}.systemtags-select2-dropdown .systemtags-actions{position:absolute;right:5px}.systemtags-select2-dropdown .systemtags-rename-form{display:inline-block;width:calc(100% - 20px);top:-6px;position:relative}.systemtags-select2-dropdown .systemtags-rename-form input{display:inline-block;height:30px;width:calc(100% - 40px)}.systemtags-select2-dropdown .label{width:85%;display:inline-block;overflow:hidden;text-overflow:ellipsis}.systemtags-select2-dropdown .label.hidden{display:none}.systemtags-select2-dropdown span{line-height:25px}.systemtags-select2-dropdown .systemtags-item{display:inline-block;height:25px;width:100%}.systemtags-select2-dropdown .select2-result-label{height:25px}.systemTagsInfoView,.systemtags-select2-container{width:100%}.systemTagsInfoView .select2-choices .select2-search-choice.select2-locked .label,.systemtags-select2-container .select2-choices .select2-search-choice.select2-locked .label{opacity:0.5}#select2-drop.systemtags-select2-dropdown .select2-results li.select2-result{padding:5px}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",s=e[3];if(!s)return n;if(t&&"function"==typeof btoa){var i=(a=s,o=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(r," */")),l=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[n].concat(l).concat([i]).join("\n")}var a,o,r;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,s){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(s)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(i[a]=!0)}for(var o=0;o<e.length;o++){var r=[].concat(e[o]);s&&i[r[0]]||(n&&(r[2]?r[2]="".concat(n," and ").concat(r[2]):r[2]=n),t.push(r))}},t}},function(e,t,n){"use strict";function s(e,t){for(var n=[],s={},i=0;i<t.length;i++){var l=t[i],a=l[0],o={id:e+":"+i,css:l[1],media:l[2],sourceMap:l[3]};s[a]?s[a].parts.push(o):n.push(s[a]={id:a,parts:[o]})}return n}n.r(t),n.d(t,"default",(function(){return f}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},a=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,r=0,c=!1,u=function(){},d=null,p="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,t,n,i){c=n,d=i||{};var a=s(e,t);return g(a),function(t){for(var n=[],i=0;i<a.length;i++){var o=a[i];(r=l[o.id]).refs--,n.push(r)}t?g(a=s(e,t)):a=[];for(i=0;i<n.length;i++){var r;if(0===(r=n[i]).refs){for(var c=0;c<r.parts.length;c++)r.parts[c]();delete l[r.id]}}}}function g(e){for(var t=0;t<e.length;t++){var n=e[t],s=l[n.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](n.parts[i]);for(;i<n.parts.length;i++)s.parts.push(y(n.parts[i]));s.parts.length>n.parts.length&&(s.parts.length=n.parts.length)}else{var a=[];for(i=0;i<n.parts.length;i++)a.push(y(n.parts[i]));l[n.id]={id:n.id,refs:1,parts:a}}}}function h(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function y(e){var t,n,s=document.querySelector("style["+p+'~="'+e.id+'"]');if(s){if(c)return u;s.parentNode.removeChild(s)}if(m){var i=r++;s=o||(o=h()),t=_.bind(null,s,i,!1),n=_.bind(null,s,i,!0)}else s=h(),t=T.bind(null,s),n=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else n()}}var b,v=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function _(e,t,n,s){var i=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var l=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(l,a[t]):e.appendChild(l)}}function T(e,t){var n=t.css,s=t.media,i=t.sourceMap;if(s&&e.setAttribute("media",s),d.ssrId&&e.setAttribute(p,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}]);
//# sourceMappingURL=systemtags.js.map