webpackJsonp([1],{EZZi:function(s,e){},NHnr:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("7+uW"),r={render:function(){var s=this.$createElement,e=this._self._c||s;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=t("VU/8")({name:"App"},r,!1,function(s){t("ymcE")},null,null).exports,o=t("/ocq"),i=t("mtWM"),l=t.n(i),u=t("8kuj");const c="https://api.github.com";var j={name:"Home",data:()=>({msg:"Buscar usuário no GitHub",userName:"",userNotes:"",erro:"",user:null,repos:[],loading:!1,paginate:["repos"],notes:""}),components:{Spinner:t.n(u).a},methods:{userSearch:function(){var s;s=this.userName.trim(),this.loading=!0,this.userNotes="",l.a.get(c+"/users/"+s).then(s=>{0===s.data.total_count?(this.erro="404",this.user="",this.loading=!1):(this.user=s.data,this.loading=!1)}).catch(s=>{this.erro="Erro ao buscar usuário",this.loading=!1}),this.repo(s),this.getNotes(s)},repo:function(s){l.a.get(c+"/users/"+s+"/repos").then(s=>{this.repos=s.data,this.loading=!1}).catch(s=>{this.loading=!1})},noteSave:function(s){var e;e=this.userNotes.trim(),this.$localStorage.set(s,e),this.getNotes(s)},getNotes:function(s){this.notes=this.$localStorage.get(s)}}},v={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"home"},[t("h1",[s._v(s._s(s.msg))]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.userName,expression:"userName"}],staticClass:"form-control",attrs:{placeholder:"Digite o usuário do GitHub",type:"text",autofocus:""},domProps:{value:s.userName},on:{keyup:function(e){return"button"in e||!s._k(e.keyCode,"enter",13,e.key,"Enter")?s.userSearch(e):null},input:function(e){e.target.composing||(s.userName=e.target.value)}}}),s._v(" "),t("button",{staticClass:"btn btn-primary btn-block space",attrs:{type:"button",disabled:s.userName.length<1},on:{click:s.userSearch}},[s._v("Buscar")]),s._v(" "),s.loading?t("Spinner",{attrs:{message:"Buscando..."}}):s._e(),s._v(" "),t("div",{staticClass:"col-md-12 mg-top"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-3 text-left"},[s.user?t("div",[t("img",{staticClass:"img-user",attrs:{src:s.user.avatar_url}}),s._v(" "),t("p",{staticClass:"user"},[t("b",[t("br"),s._v(s._s(s.user.login))])]),s._v(" "),t("p",[t("b",[s._v("Criado em:")]),s._v(" "+s._s(s._f("moment")(s.user.created_at,"DD/MM/YYYY")))]),s._v(" "),s.user.location?[t("p",[t("b",[s._v("Localização:")]),s._v(" "+s._s(s.user.location))])]:s._e(),s._v(" "),t("p",[t("b",[s._v("Repositórios públicos:")]),s._v(" "+s._s(s.user.public_repos))]),s._v(" "),t("p",[t("b",[s._v("Seguidores:")]),s._v(" "+s._s(s.user.followers))]),s._v(" "),t("p",[t("b",[s._v("Seguindo:")]),s._v(" "+s._s(s.user.following))]),s._v(" "),t("a",{staticClass:"btn btn-secondary",attrs:{href:s.user.html_url,target:"_blank"}},[s._v("Ver no GitHub")])],2):s._e(),s._v(" "),s.notes?t("div",[t("hr"),s._v(" "),s._m(0),s._v(" "),t("p",[s._v(s._s(s.notes))])]):s._e()]),s._v(" "),t("div",{staticClass:"col-md-9"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-12"},[t("paginate",{attrs:{name:"repos",list:s.repos,per:3}},s._l(s.paginated("repos"),function(e){return t("div",{staticClass:"col-xs-12 col-sm-6 col-md-4 col-lg-4"},[t("div",{staticClass:"box-repo"},[t("p",[t("b",[s._v("Nome:")]),s._v(" "+s._s(e.name))]),s._v(" "),t("p",[t("b",[s._v("Criado em:")]),s._v(" "+s._s(s._f("moment")(e.created_at,"DD/MM/YYYY")))]),s._v(" "),t("p",[t("b",[s._v("Link:")]),s._v(" "),t("a",{attrs:{href:e.html_url,target:"_blank"}},[s._v("ver no GitHub")])]),s._v(" "),e.description?[t("p",[t("b",[s._v("Descrição:")]),s._v(" "+s._s(e.description))])]:s._e()],2)])}))],1),s._v(" "),t("div",{staticClass:"col-md-12"},[s.repos.length>0?t("paginate-links",{staticClass:"teste",attrs:{for:"repos",simple:{next:"Próximo",prev:"Anterior"},async:!0}}):s._e()],1)]),s._v(" "),s.repos.length>0?t("div",{staticClass:"form-group"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:s.userNotes,expression:"userNotes"}],staticClass:"form-control",attrs:{placeholder:"Anotações sobre "+s.user.login,rows:"4"},domProps:{value:s.userNotes},on:{input:function(e){e.target.composing||(s.userNotes=e.target.value)}}}),s._v(" "),t("button",{staticClass:"btn btn-primary btn-block space",attrs:{type:"button",disabled:s.userNotes.length<1},on:{click:function(e){s.noteSave(s.user.login)}}},[s._v("Salvar")])]):s._e()])])])],1)},staticRenderFns:[function(){var s=this.$createElement,e=this._self._c||s;return e("p",{staticClass:"space"},[e("b",[this._v("Anotações")])])}]};var m=t("VU/8")(j,v,!1,function(s){t("EZZi")},"data-v-4e19fa0b",null).exports;a.a.use(o.a);var p=new o.a({routes:[{path:"/",name:"Home",component:m}]}),d=t("mjDs"),h=t.n(d),g=t("/OX2"),_=t.n(g),b=t("UnSZ"),f=t.n(b);a.a.use(h.a),a.a.use(_.a),a.a.use(f.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:p,components:{App:n},template:"<App/>"})},uslO:function(s,e,t){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(s){return t(n(s))}function n(s){var e=a[s];if(!(e+1))throw new Error("Cannot find module '"+s+"'.");return e}r.keys=function(){return Object.keys(a)},r.resolve=n,s.exports=r,r.id="uslO"},ymcE:function(s,e){}},["NHnr"]);
//# sourceMappingURL=app.a815856dd3319643de86.js.map