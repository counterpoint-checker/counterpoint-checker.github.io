(this["webpackJsonpsimple-reactjs-app"]=this["webpackJsonpsimple-reactjs-app"]||[]).push([[0],{198:function(e){e.exports=JSON.parse('{"web":{"client_id":"558082929174-nctpssmdptgo7dojru59253lr2ucfud9.apps.googleusercontent.com","project_id":"georgefane","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"WR_MSdY3CYmcQWYPOh0p1TBZ","javascript_origins":["https://counterpoint-checker.github.io"]}}')},299:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(15),i=n.n(s),r=n(38),o=n(39),l=n(42),u=n(41),h=n(365),j=n(362),b=n(364),p=n(59),d=n(363),g=n(171),m=n(62),f=n(357),O=n(4),x=n(116),v=n(133),k=n(351),y=n(352),w=n(70),C=n(353),N=n(5),S=n(114),_=n(366),P=n(6),A=n(198),L=Object(v.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},small:{width:e.spacing(3),height:e.spacing(3)},large:{width:e.spacing(7),height:e.spacing(7)}}}));var B=function(){var e=L(),t=c.a.useState(null),n=Object(N.a)(t,2),a=n[0],s=n[1];return a?Object(P.jsx)(S.GoogleLogout,{clientId:A.web.client_id,buttonText:"Logout",onLogoutSuccess:function(e){s(null)},render:function(t){return Object(P.jsx)(p.a,{onClick:t.onClick,disabled:t.disabled,startIcon:Object(P.jsx)(_.a,{className:e.small,src:a}),color:"inherit",variant:"outlined",children:"Logout"})}}):Object(P.jsx)(S.GoogleLogin,{clientId:A.web.client_id,buttonText:"Login",onSuccess:function(e){s(e.profileObj.imageUrl)},cookiePolicy:"single_host_origin",render:function(t){return Object(P.jsx)(p.a,{onClick:t.onClick,disabled:t.disabled,startIcon:Object(P.jsx)(_.a,{className:e.small,src:"https://img-authors.flaticon.com/google.jpg"}),color:"inherit",variant:"outlined",children:"Login"})}})},G=Object(v.a)((function(e){return{root:{flexGrow:1}}}));function T(){var e=G();return Object(P.jsx)("div",{children:Object(P.jsx)(k.a,{position:"static",children:Object(P.jsxs)(y.a,{children:[Object(P.jsx)("div",{className:e.root,children:Object(P.jsx)("img",{width:"222",src:"https://media.discordapp.net/attachments/705838282440835164/866890707494109194/logo1_no_background.png"})}),Object(P.jsx)(g.a,{className:e.root,variant:"body1",children:"Alex Beloiu, Yongwei Che, George Fane, Jason Zhang"}),Object(P.jsx)(w.a,{color:"inherit",href:"https://github.com/counterpoint-checker",target:"_blank",children:Object(P.jsx)(C.a,{})}),Object(P.jsx)(B,{})]})})})}var I=n(354),K=n(100),M=n(122),U=n(49),Y=Object(v.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"}}}));function z(e){var t=Y();return Object(P.jsx)(I.a,{item:!0,xs:!0,children:Object(P.jsx)(K.a,{className:t.paper,children:Object(P.jsx)(g.a,{variant:"h6",className:t.title,children:e.label})})})}function D(e){var t=Y();return Object(P.jsx)(I.a,{item:!0,xs:!0,children:Object(P.jsx)(K.a,{className:t.paper,children:Object(P.jsx)(M.a,{select:!0,label:"Key",value:e.clef,onChange:function(t){return e.setClef(t.target.value)},children:"Treble Alto Bass".split(" ").map((function(e){return Object(P.jsx)(U.a,{value:e,children:e})}))})})})}function E(e){var t=Y();return Object(P.jsx)(I.a,{item:!0,xs:!0,children:Object(P.jsx)(K.a,{className:t.paper,children:Object(P.jsx)(M.a,{label:"Notes",value:e.notes,onChange:function(t){return e.setNotes(t.target.value)}})})})}function H(e){var t=Y();return Object(P.jsxs)("div",{className:t.root,children:[Object(P.jsxs)(I.a,{container:!0,spacing:3,children:[Object(P.jsx)(z,{label:"Cantus Firmus"}),Object(P.jsx)(D,{clef:e.clef1,setClef:e.setClef1}),Object(P.jsx)(E,{notes:e.notes1,setNotes:e.setNotes1}),Object(P.jsx)(I.a,{item:!0,xs:!0,children:Object(P.jsx)(K.a,{className:t.paper,children:Object(P.jsx)(M.a,{label:"Key",value:e.key1,onChange:function(t){return e.setKey(t.target.value)}})})})]}),Object(P.jsxs)(I.a,{container:!0,spacing:3,children:[Object(P.jsx)(z,{label:"Counterpoint"}),Object(P.jsx)(D,{clef:e.clef2,setClef:e.setClef2}),Object(P.jsx)(E,{notes:e.notes2,setNotes:e.setNotes2}),Object(P.jsx)(I.a,{item:!0,xs:!0,children:["Notes: [note][#,b, ][octave]","e.g. C4, C#4","Key: [note][#,b, ][m, ]","e.g. C, C#, Cm, C#m"].map((function(e){return Object(P.jsx)(g.a,{children:e})}))})]})]})}var J=n(163),R=n(164),V=n.n(R),F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"renderAbcNotation",value:function(e,t,n,a){V.a.renderAbc("id",e,t,n,a)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.abcNotation,n=e.parserParams,a=e.engraverParams,c=e.renderParams;this.renderAbcNotation(t,n,a,c)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.abcNotation,n=e.parserParams,a=e.engraverParams,c=e.renderParams;this.renderAbcNotation(t,n,a,c)}},{key:"render",value:function(){return Object(P.jsx)("div",{id:"id",style:{width:"100%"}})}}]),n}(a.PureComponent);F.defaultProps={abcNotation:"",parserParams:{},engraverParams:{responsive:"resize"},renderParams:{viewportHorizontal:!0}};var Q=F;function q(e){var t=e.abc();return Object(P.jsxs)("div",{children:[Object(P.jsx)(Q,{abcNotation:t}),Object(P.jsx)(J.Midi,{notation:t,midiParams:{qpm:333}},t)]})}var W=n(115),Z=n.n(W),X=n(14),$=n(165),ee=n(166),te=n(2),ne=n(280),ae=(Object(m.a)({typography:{fontSize:22}}),[{field:"label",width:333},{field:"pass",width:144,type:"boolean",cellClassName:function(e){return Object(te.a)("super-app",{pass:e.value,fail:!e.value})}},{field:"notes",width:555}]),ce=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={rows:[]},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object($.a)(Z.a.mark((function e(){var t,n,a,c,s,i,r,o;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"c4 d4 e4 f4 g4 a4 b4 c5",t=this.props.midi(),n=Object(N.a)(t,2),a=n[0],c=n[1],s=this.props.key1,i={"Content-Type":"application/json",Accept:"application/json"},console.log([a,c,s]),e.next=7,ne.post("https://counterpoint-checker.herokuapp.com/",{cantus_firmus:a,counterpoint:c,key:s,headers:i});case 7:r=e.sent,o=r.data.data.map((function(e,t){return Object(X.a)(Object(X.a)({},e),{},{id:t})})),this.setState({rows:o}),console.log(o);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes,t=this.state.rows,n={rows:t,columns:ae,autoHeight:!0,className:e.root,loading:!t.length};return Object(P.jsx)(ee.a,Object(X.a)({},n))}}]),n}(a.Component),se=Object(O.a)({root:{"& .super-app.pass":{backgroundColor:"rgba(157, 255, 118, 0.49)"},"& .super-app.fail":{backgroundColor:"#d47483"}}})(ce),ie=n(25),re=n(358),oe=n(359),le=n(361),ue=n(360),he=Object(v.a)((function(e){return{root:{display:"flex",justifyContent:"center"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto",width:222},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38}}})),je=[{name:"Alex Beloiu",school:"UMich 2024",major:"CS",linkedin:"https://www.linkedin.com/in/alexandru-beloiu/",github:"https://github.com/beloiual",site:"https://github.com/beloiual",pic:"https://avatars.githubusercontent.com/u/69057074?v=4"},{name:"Yongwei Che",school:"Princeton 2024",major:"CS",linkedin:"https://www.linkedin.com/in/yongwei-che-66525b19b/",github:"https://github.com/YongweiChe",site:"https://yongweiche.github.io/",pic:"https://media-exp3.licdn.com/dms/image/C4E03AQEKUPa2GPYPHg/profile-displayphoto-shrink_200_200/0/1590019973658?e=1631145600&v=beta&t=Sy30H-36UXN-t5fgcmCuSPhKO-7-Kqcqc3PGndEQN60"},{name:"George Fane",school:"UMich 2024",major:"Business and CS",linkedin:"https://www.linkedin.com/in/george-fane/",github:"https://github.com/GeorgeFane",site:"http://georgefane.github.io/",pic:"https://avatars.githubusercontent.com/u/39439818?v=4"},{name:"Jason Zhang",school:"UMich 2024",major:"Composition and CS",linkedin:"https://www.linkedin.com/in/jason-zhang-2755ba1b9/",github:"https://github.com/zhangjt1",site:"https://counterpoint-checker.github.io/",pic:"https://media-exp3.licdn.com/dms/image/C4E03AQGLANbNVmkUHg/profile-displayphoto-shrink_800_800/0/1604624377309?e=1631145600&v=beta&t=xdriNg9aE79ymDdJ_AwOVA14VcyC4zAA8i8Y40xh6ew"}];function be(e){var t=e.row,n=he();Object(ie.a)();return Object(P.jsxs)(re.a,{className:n.root,children:[Object(P.jsxs)(oe.a,{className:n.content,children:[Object(P.jsx)(g.a,{component:"h5",variant:"h5",children:t.name}),Object(P.jsx)(g.a,{variant:"subtitle1",children:t.school}),Object(P.jsx)(g.a,{variant:"subtitle1",children:t.major}),Object(P.jsx)(g.a,{children:Object(P.jsx)(ue.a,{href:t.linkedin,target:"_blank",children:"LinkedIn"})}),Object(P.jsx)(g.a,{children:Object(P.jsx)("a",{href:t.github,target:"_blank",children:"GitHub"})}),Object(P.jsx)(g.a,{children:Object(P.jsx)("a",{href:t.site,target:"_blank",children:"Website"})})]}),Object(P.jsx)(le.a,{className:n.cover,image:t.pic})]})}var pe=function(){var e=he();return Object(P.jsx)(I.a,{container:!0,spacing:3,justifyContent:"center",className:e.root,children:je.map((function(e){return Object(P.jsx)(I.a,{item:!0,children:Object(P.jsx)(be,{row:e})})}))})},de=Object(m.a)({typography:{fontSize:22}});function ge(e){return e.split(" ").map((function(e){return x.a.scientificToAbcNotation(e)})).join(" | ")}function me(e){return e.split(" ").map((function(e){return x.b.toMidi(e)}))}var fe=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(r.a)(this,n),(a=t.call(this,e)).handleNext=function(){var e=a.state.activeStep+1;a.setState({activeStep:e})},a.handleBack=function(){var e=a.state.activeStep-1;a.setState({activeStep:e})},a.handleReset=function(){a.setState({activeStep:0})},a.abc=function(){return"\nL:1/1\nK:".concat(a.state.key,"\nV: 1 clef=").concat(a.state.clef1.toLowerCase(),"\n").concat(ge(a.state.notes1),"\nV: 2 clef=").concat(a.state.clef2.toLowerCase(),"\n").concat(ge(a.state.notes2),"\n    ")},a.midi=function(){return[me(a.state.notes1),me(a.state.notes2)]},a.stages=function(){return{Input:Object(P.jsxs)("div",{children:[Object(P.jsx)(H,{key1:a.state.key,clef1:a.state.clef1,clef2:a.state.clef2,notes1:a.state.notes1,notes2:a.state.notes2,setKey:function(e){return a.setState({key:e})},setClef1:function(e){return a.setState({clef1:e})},setClef2:function(e){return a.setState({clef2:e})},setNotes1:function(e){return a.setState({notes1:e})},setNotes2:function(e){return a.setState({notes2:e})}}),Object(P.jsx)(q,{abc:a.abc})]}),Preview:Object(P.jsx)(q,{abc:a.abc}),Grade:Object(P.jsx)(se,{midi:a.midi,key1:a.state.key}),Team:Object(P.jsx)(pe,{})}};var c=a.props.classes;return a.state={activeStep:0,classes:c,key:"C",clef1:"Treble",clef2:"Treble",notes1:"c4 d4 e4 f4 g4 a4 b4 c5",notes2:"c4 d4 e4 f4 g4 a4 b4 c5"},a}return Object(o.a)(n,[{key:"StepperTop",value:function(){var e=this.state,t=e.activeStep,n=e.classes,a=Object.keys(this.stages()).length;return Object(P.jsxs)("div",{children:[Object(P.jsx)(p.a,{disabled:0===t,onClick:t===a-1?this.handleReset:this.handleBack,className:n.backButton,children:t===a-1?"Reset":"Back"}),Object(P.jsx)(p.a,{disabled:t===a-1,variant:"contained",color:"primary",onClick:this.handleNext,children:"Next"})]})}},{key:"render",value:function(){var e=this.state,t=e.classes,n=e.activeStep,a=Object.keys(this.stages()),c=Object.values(this.stages());return Object(P.jsxs)(f.a,{theme:de,children:[Object(P.jsx)(T,{}),Object(P.jsx)(h.a,{activeStep:n,alternativeLabel:!0,children:a.map((function(e){return Object(P.jsx)(j.a,{children:Object(P.jsx)(b.a,{children:e})},e)}))}),Object(P.jsxs)(d.a,{mx:9,children:[this.StepperTop(),Object(P.jsx)(g.a,{className:t.instructions,variant:"h4",children:c[n]})]})]})}}]),n}(c.a.Component),Oe=Object(O.a)((function(e){return{root:{width:"100%",padding:e.spacing(9)},backButton:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}))(fe);i.a.render(Object(P.jsx)(Oe,{}),document.getElementById("root"))}},[[299,1,2]]]);
//# sourceMappingURL=main.588653d2.chunk.js.map