(function(){"use strict";var e={9780:function(e,t,n){var s=n(9242),r=n(3396),o=n(7139);const i={class:"container"};function a(e,t,n,s,a,u){const c=(0,r.up)("router-link"),l=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",i,[(0,r.Wm)(c,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Головна |")])),_:1}),(0,r.Wm)(c,{to:"/lessons"},{default:(0,r.w5)((()=>[(0,r.Uk)("Уроки |")])),_:1}),(0,r.Wm)(c,{to:"/teachers"},{default:(0,r.w5)((()=>[(0,r.Uk)("Вчителі |")])),_:1}),(0,r.Wm)(c,{to:{name:"login"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(u.loginTitle),1)])),_:1}),(0,r.Uk)(" | "),e.getUserName?((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>u.onExit&&u.onExit(...e))},"Вийти")):(0,r.kq)("",!0)]),(0,r.Wm)(l)],64)}n(560);var u=n(65),c={computed:{...(0,u.Se)(["getLoginStatus","getUserName"]),loginTitle(){return console.log("window.userName2",this.getUserName),this.getUserName||"Увійти"}},methods:{...(0,u.nv)(["onReset"]),onExit(){window.userName=null,this.onReset(),this.$router.push({name:"home",meta:{requiresAuth:!0}})}}},l=n(89);const d=(0,l.Z)(c,[["render",a]]);var h=d,m=n(2483);const f={class:"home"},g=(0,r._)("h3",null,"Вітаємо на сайті школи!",-1),p=(0,r._)("h4",null,"У нашій школі учень сам вибирає собі уроки та вчітелів",-1),v=(0,r._)("h4",null,"Увійдіть для повноцінного використання",-1),b=[g,p,v];function w(e,t,n,s,o,i){return(0,r.wg)(),(0,r.iD)("div",f,b)}var y={name:"HomeView",components:{}};const _=(0,l.Z)(y,[["render",w]]);var S=_;function j(e,t,n,s,o,i){return(0,r.wg)(),(0,r.iD)("div",null," PageNotFound ")}var k={name:"PageNotFound"};const I=(0,l.Z)(k,[["render",j]]);var L=I;const N=e=>((0,r.dD)("data-v-85763e10"),e=e(),(0,r.Cn)(),e),T={class:"container"},D=N((()=>(0,r._)("p",null,"Виберіть уроки:",-1))),A={class:"lessons"},U=["value"],C={key:0,class:"error"};function O(e,t,n,i,a,u){return(0,r.wg)(),(0,r.iD)("div",T,[D,(0,r._)("div",A,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getSubjects,(({id:e,subject:n})=>((0,r.wg)(),(0,r.iD)("div",{key:e,class:"lesson"},[(0,r.Uk)((0,o.zw)(n)+" ",1),(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.selectedSubjects=e),type:"checkbox",value:e},null,8,U),[[s.e8,a.selectedSubjects]])])))),128))]),(0,r._)("button",{onClick:t[1]||(t[1]=(...e)=>u.onSelectLesson&&u.onSelectLesson(...e))},"Вибрати вчителів"),a.error?((0,r.wg)(),(0,r.iD)("div",C,(0,o.zw)(u.errorMessage),1)):(0,r.kq)("",!0)])}var E={name:"SelectLessonsView",data(){return{selectedSubjects:[],error:!1}},computed:{...(0,u.Se)(["getSubjectById","getSubjects"]),errorMessage(){return"Виберіть хоча б один урок!"}},methods:{onSelectLesson(){console.log("selectedSubjects",this.selectedSubjects),this.selectedSubjects.length?this.$router.push({name:"lessonsSelected",params:{id:this.selectedSubjects}}):this.error=!0}}};const q=(0,l.Z)(E,[["render",O],["__scopeId","data-v-85763e10"]]);var B=q;const M=e=>((0,r.dD)("data-v-4f075ef8"),e=e(),(0,r.Cn)(),e),P={class:"container"},x=M((()=>(0,r._)("h1",null,"Крок 2.Вибір вчителів:",-1))),V={class:"container__lessons"},z=["onUpdate:modelValue"],F=M((()=>(0,r._)("option",{selected:"",disabled:""},"Не обрано",-1))),H=["value"],$={key:0,class:"red"};function Z(e,t,n,i,a,u){return(0,r.wg)(),(0,r.iD)("div",P,[x,(0,r._)("div",V,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(u.selectedLessonsId,((t,n)=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"container__lesson"},[(0,r.Uk)((0,o.zw)(e.getSubjectById(t).subject)+" ",1),(0,r._)("div",null,[(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":e=>a.selectedTeachersId[n]=e},[F,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.getTeachers,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.id},(0,o.zw)(e.name),9,H)))),128))],8,z),[[s.bM,a.selectedTeachersId[n]]])])])))),128))]),(0,r._)("button",{onClick:t[0]||(t[0]=(...e)=>u.onAction&&u.onAction(...e))},"Розпочати навчання"),a.error?((0,r.wg)(),(0,r.iD)("p",$,(0,o.zw)(u.errorMessage),1)):(0,r.kq)("",!0)])}var K={name:"SelectTeachersView",data(){return{selectedTeachersId:[],error:!1}},computed:{...(0,u.Se)(["getSubjectById","getTeachers"]),selectedLessonsId(){return this.$route.params.id},isListValid(){if(console.log("this.selectedTeachersId",this.selectedTeachersId),this.selectedTeachersId.length>=this.selectedLessonsId.length){for(let e=0;e<this.selectedLessonsId.length;e++)if(void 0==this.selectedTeachersId[e])return!1;return!0}return!1},selectedIdList(){const e=[];for(let t=0;t<this.selectedLessonsId.length;t++)e[t]=`${this.selectedLessonsId[t]}-${this.selectedTeachersId[t]}`;return e},errorMessage(){return"Усі предмети мають бути з обраним вчителем"}},methods:{onAction(){console.log("isListValid:",this.isListValid),console.log("this.selectedIdList:",this.selectedIdList),this.isListValid?this.$router.push({name:"studyManager",params:{id:this.selectedIdList}}):this.error=!0}}};const W=(0,l.Z)(K,[["render",Z],["__scopeId","data-v-4f075ef8"]]);var Y=W;const R=e=>((0,r.dD)("data-v-8578340a"),e=e(),(0,r.Cn)(),e),G={class:"container"},J=R((()=>(0,r._)("p",null,"Навчальний план",-1))),Q={class:"container__body"},X={class:"container__elem"},ee={class:"container__elem"};function te(e,t,n,s,i,a){return(0,r.wg)(),(0,r.iD)("div",G,[J,(0,r._)("div",Q,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.studyPairsList,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t,class:"container__item"},[(0,r._)("div",X,(0,o.zw)(e.getSubjectById(t[0]).subject),1),(0,r._)("div",ee,(0,o.zw)(e.getTeachersById(t[2]).name),1)])))),128))])])}var ne={name:"StudyManagerView",computed:{...(0,u.Se)(["getTeachersById","getSubjectById"]),studyPairsList(){return this.$route.params.id}}};const se=(0,l.Z)(ne,[["render",te],["__scopeId","data-v-8578340a"]]);var re=se;const oe=[{path:"/",name:"home",component:S},{path:"/lessons",name:"lessons",meta:{requiresAuth:!0},component:()=>n.e(252).then(n.bind(n,1670)),children:[{path:"select",name:"selectLessons",component:B},{path:":id(\\d*)+",name:"lessonsSelected",component:Y},{path:":id+",name:"studyManager",component:re}]},{path:"/:pathMatch(.*)*",name:"notFound",component:L},{path:"/teachers",name:"/teachers",component:()=>n.e(223).then(n.bind(n,2223)),meta:{requiresAuth:!0}},{path:"/login",name:"login",component:()=>n.e(608).then(n.bind(n,3608)),meta:{requiresAuth:!1}}],ie=(0,m.p7)({history:(0,m.PO)("/"),routes:oe});ie.beforeEach(((e,t,n)=>{const s=window.userName;if(e.meta.requiresAuth&&!s)return n({name:"login",query:{redirect:e.fullPath}});console.log("to.meta.requiresAuth:",e.meta.requiresAuth),console.log("isAuthenticated:",s),n()}));var ae=ie,ue=(0,u.MT)({state:{loginStatus:!1,userInfo:{name:"admin",password:"admin"},userName:null,subjects:[{id:1,subject:"Математика"},{id:2,subject:"Інформатика"},{id:3,subject:"Хімія"},{id:4,subject:"Фізика"},{id:5,subject:"Німецька мова"},{id:6,subject:"Англійська мова"},{id:7,subject:"Література"}],teachers:[{id:1,name:"Світлана В."},{id:2,name:"Інна М."},{id:3,name:"Олександр Ф."},{id:4,name:"Антон Ж."},{id:5,name:"Марина М."}]},getters:{getSubjects:e=>e.subjects,getTeachers:e=>e.teachers,getSubjectById:e=>t=>e.subjects.find((e=>e.id==t)),getTeachersById:e=>t=>e.teachers.find((e=>e.id==t)),getLoginStatus:e=>e.loginStatus,getUserName:e=>e.userName},mutations:{setUserName(e,t){e.userName=t},updateUserName(e){e.userName=null}},actions:{login({commit:e},t){e("setUserName",t)},onReset({commit:e}){e("updateUserName")}},modules:{}});(0,s.ri)(h).use(ue).use(ae).mount("#app")}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,s,r,o){if(!s){var i=1/0;for(l=0;l<e.length;l++){s=e[l][0],r=e[l][1],o=e[l][2];for(var a=!0,u=0;u<s.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](s[u])}))?s.splice(u--,1):(a=!1,o<i&&(i=o));if(a){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[s,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,s){return n.f[s](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(252===e?"lessons":e)+"."+{223:"1343845d",252:"dfa4f686",608:"91834800"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+(252===e?"lessons":e)+"."+{252:"ec6bee1f",608:"6811a550"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="lessons-manager:";n.l=function(s,r,o,i){if(e[s])e[s].push(r);else{var a,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==t+o){a=d;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+o),a.src=s),e[s]=[r];var h=function(t,n){a.onerror=a.onload=null,clearTimeout(m);var r=e[s];if(delete e[s],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,s,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(n){if(o.onerror=o.onload=null,"load"===n.type)s();else{var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=a,o.parentNode&&o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=i,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),s=0;s<n.length;s++){var r=n[s],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var i=document.getElementsByTagName("style");for(s=0;s<i.length;s++){r=i[s],o=r.getAttribute("data-href");if(o===e||o===t)return r}},s=function(s){return new Promise((function(r,o){var i=n.miniCssF(s),a=n.p+i;if(t(i,a))return r();e(s,a,null,r,o)}))},r={143:0};n.f.miniCss=function(e,t){var n={252:1,608:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=s(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,s){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)s.push(r[2]);else{var o=new Promise((function(n,s){r=e[t]=[n,s]}));s.push(r[2]=o);var i=n.p+n.u(t),a=new Error,u=function(s){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=s&&("load"===s.type?"missing":s.type),i=s&&s.target&&s.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,r[1](a)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,o,i=s[0],a=s[1],u=s[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var l=u(n)}for(t&&t(s);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},s=self["webpackChunklessons_manager"]=self["webpackChunklessons_manager"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(9780)}));s=n.O(s)})();
//# sourceMappingURL=app.a95463b1.js.map