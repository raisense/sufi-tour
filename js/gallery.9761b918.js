(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gallery"],{"0d77":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gallery"},[i("v-parallax",{staticClass:"tours-parallax",attrs:{height:"400",src:a("2e07")}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[i("h1",{staticClass:"display-1 font-weight-bold mb-4"},[t._v(t._s(t.$t("gallery.title")))])])],1)],1),i("v-container",[t.loading?i("v-sheet",{staticClass:"py-0",attrs:{color:"grey "+(t.theme.isDark?"darken-2":"lighten-4")}},[i("v-row",{staticClass:"px-3"},t._l(6,(function(t,e){return i("v-col",{key:e,attrs:{cols:"12",sm:"6",md:"3",lg:"4"}},[i("v-skeleton-loader",{attrs:{"max-width":"100%",type:"card"}})],1)})),1)],1):t._e(),0==t.loading?i("div",{staticClass:"gallery-content"},[i("v-row",t._l(t.gallery,(function(e,n){return i("v-col",{key:n,attrs:{cols:"12",sm:"6",md:"3",lg:"4"}},[i("div",{staticClass:"gallery-item"},[i("div",{staticClass:"gallery-img"},[e.data.image.url?i("img",{attrs:{src:e.data.image.url,alt:""}}):t._e(),e.data.image.url?t._e():i("img",{attrs:{src:a("72dd"),alt:""}})]),i("p",{staticClass:"gallery-title",attrs:{title:e.data.title[0].text}},[i("v-clamp",{attrs:{autoresize:"","max-lines":2}},[t._v(" "+t._s(e.data.title[0].text?e.data.title[0].text:" ")+" ")])],1)])])})),1)],1):t._e()],1)],1)},n=[],r=a("3f87"),s={inject:["theme"],components:{VClamp:r["a"]},data:function(){return{loading:!1,gallery:null}},computed:{currentLang:function(){return"en"==this.$store.state.language.language?"en-us":"de"==this.$store.state.language.language?"de-de":this.$store.state.language.language}},methods:{getGallery:function(){var t=this;this.loading=!0,this.$prismic.client.query(this.$prismic.Predicates.at("document.type","gallery"),{lang:this.currentLang}).then((function(e){t.gallery=e.results,console.log(t.gallery),t.loading=!1}))}},watch:{currentLang:function(t){this.getGallery()}},created:function(){this.getGallery()}},l=s,o=(a("7c96"),a("2877")),c=a("6544"),d=a.n(c),u=a("62ad"),g=a("a523"),h=a("8b9c"),p=a("0fd9"),f=a("8dd9"),b=a("3129"),v=Object(o["a"])(l,i,n,!1,null,"bf77517e",null);e["default"]=v.exports;d()(v,{VCol:u["a"],VContainer:g["a"],VParallax:h["a"],VRow:p["a"],VSheet:f["a"],VSkeletonLoader:b["a"]})},"1ea6":function(t,e,a){},"1f09":function(t,e,a){},3129:function(t,e,a){"use strict";a("a4d3"),a("4de4"),a("a630"),a("c975"),a("d81d"),a("e439"),a("dbb4"),a("b64b"),a("3ca3"),a("5319"),a("1276"),a("159b");var i=a("3835"),n=a("ade3"),r=(a("1f09"),a("c995")),s=a("24b2"),l=a("7560"),o=a("58df"),c=a("80d2");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["a"]=Object(o["a"])(r["a"],s["a"],l["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:u({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return u({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses,{},this.elevationClasses)},isLoading:function(){return Boolean(!Object(c["j"])(this)||this.loading)},rootTypes:function(){return u({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,a=t.split("@"),n=Object(i["a"])(a,2),r=n[0],s=n[1],l=function(){return e.genStructure(r)};return Array.from({length:s}).map(l)},genStructure:function(t){var e=[];t=t||this.type||"";var a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton:function(){var t=this,e=[],a=Object(c["j"])(this);return this.isLoading?e.push(this.genStructure()):e.push(a),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{enter:function(e){t.isLoading&&(e.style.transition="none")},beforeLeave:function(t){t.style.display="none"}}},e):e},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},"7c96":function(t,e,a){"use strict";var i=a("1ea6"),n=a.n(i);n.a}}]);
//# sourceMappingURL=gallery.9761b918.js.map