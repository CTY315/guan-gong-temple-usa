(this["webpackJsonpggt-donation-web"]=this["webpackJsonpggt-donation-web"]||[]).push([[0],{57:function(e,t,a){},58:function(e,t,a){},62:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),i=a.n(r),c=a(21),s=a.n(c),o=(a(57),a(58),a(14)),l=a(15),j=a(18),d=a(17),b=a(92),h=a(94),p=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(b.a,{style:{backgroundColor:"#cc7351"},expand:"lg",children:[Object(n.jsx)(b.a.Brand,{href:"/",children:"Guan Gong Temple"}),Object(n.jsx)(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsx)(b.a.Collapse,{id:"basic-navbar-nav",children:Object(n.jsxs)(h.a,{className:"mr-auto",children:[Object(n.jsx)(h.a.Link,{href:"/pics",children:"Pictures \u7167\u7247"}),Object(n.jsx)(h.a.Link,{href:"/donation",children:"Donation \u6350\u6b3e"})]})})]})})}}]),a}(r.Component),x=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{style:{padding:"20px 5% 20px 5%"},children:Object(n.jsxs)("p",{children:["Copyright \xa9",(new Date).getFullYear()," | Guang Gong Temple"]})})}}]),a}(r.Component),u=a(89),O=a(90),m=a(46),g=a(95),f=a.p+"static/media/IMG_9612.b707769f.JPG",y=a.p+"static/media/IMG_9613.e101fe26.JPG",v=a.p+"static/media/IMG_9614.bd9c39da.JPG",w=a.p+"static/media/IMG_9615.c4ee1a16.JPG",G=a.p+"static/media/IMG_9616.30b6735b.JPG",C=a.p+"static/media/IMG_9617.54b3621b.JPG",k=(a(62),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{style:{padding:"20px 5% 20px 5%"},children:Object(n.jsx)(u.a,{children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(m.a,{style:{padding:"20px"},children:Object(n.jsx)(g.a,{style:{width:"20rem"},children:Object(n.jsx)(g.a.Img,{variant:"top",src:"https://fastly.4sqi.net/img/general/600x600/79385836_AUfP-aCmUvZuAOZB7b8Sdifx_BA5nXk67eex-TQheXM.jpg"})})}),Object(n.jsx)(m.a,{style:{padding:"20px"},children:Object(n.jsx)(g.a,{style:{width:"20rem"},children:Object(n.jsx)(g.a.Img,{variant:"top",src:f})})}),Object(n.jsx)(m.a,{style:{padding:"20px"},children:Object(n.jsx)(g.a,{style:{width:"18rem"},children:Object(n.jsx)(g.a.Img,{variant:"top",src:y})})}),Object(n.jsx)(m.a,{style:{padding:"20px"},children:Object(n.jsx)(g.a,{style:{width:"20rem"},children:Object(n.jsx)(g.a.Img,{variant:"top",src:v})})}),Object(n.jsx)(m.a,{style:{padding:"20px"},children:Object(n.jsx)(g.a,{style:{width:"20rem"},children:Object(n.jsx)(g.a.Img,{variant:"top",src:w})})}),Object(n.jsx)(m.a,{style:{padding:"20px"},children:Object(n.jsx)(g.a,{style:{width:"20rem"},children:Object(n.jsx)(g.a.Img,{variant:"top",src:G})})}),Object(n.jsx)(m.a,{style:{padding:"20px"},children:Object(n.jsx)(g.a,{style:{width:"20rem"},children:Object(n.jsx)(g.a.Img,{variant:"top",src:C})})})]})})})}}]),a}(r.Component)),S=a(50),I=a(6),A=a(33),P=a.n(A),_=a(47),D=a(22),B=a(93),E=a(91),M=a(20),T=a(48),J=a.n(T);var L=function(){var e=Object(r.useState)(""),t=Object(D.a)(e,2),a=t[0],i=t[1],c=Object(r.useState)(""),s=Object(D.a)(c,2),o=s[0],l=s[1],j=Object(r.useState)(""),d=Object(D.a)(j,2),b=d[0],h=d[1],p=Object(r.useState)(""),x=Object(D.a)(p,2),u=x[0],O=x[1],m=Object(r.useState)(!1),g=Object(D.a)(m,2),f=g[0],y=g[1],v=Object(M.useStripe)(),w=Object(M.useElements)();function G(){return(G=Object(_.a)(P.a.mark((function e(t){var n,r,c,s,j;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),y(!0),e.prev=2,e.next=5,J.a.post("/donate",{amount:100*u,email:b});case 5:if(n=e.sent,v&&w){e.next=8;break}return e.abrupt("return");case 8:return r=w.getElement(M.CardElement),e.next=11,v.createPaymentMethod({type:"card",card:r,billing_details:{name:a,phone:o,email:b}});case 11:return c=e.sent,s=c.error,j=c.paymentMethod,s?(y(!1),window.alert("Error:"+s.message)):(y(!1),i(""),l(""),h(""),O(""),r.clear(),alert("Successful!Thank you.")),e.next=17,v.confirmCardPayment(n.data,{payment_method:j.id});case 17:e.sent,e.next=24;break;case 20:e.prev=20,e.t0=e.catch(2),y(!1),alert("Something went wrong, please try again!");case 24:case"end":return e.stop()}}),e,null,[[2,20]])})))).apply(this,arguments)}return Object(n.jsx)("div",{style:{margin:"auto",width:"85%"},children:Object(n.jsxs)(B.a,{onSubmit:function(e){return G.apply(this,arguments)},action:"POST",children:[Object(n.jsxs)(B.a.Group,{style:{textAlign:"start"},children:[Object(n.jsx)(B.a.Label,{children:"Your Name \u540d\u5b57"}),Object(n.jsx)(B.a.Control,{onChange:function(e){return i(e.target.value)},name:"name",type:"text",placeholder:"Name",value:a})]}),Object(n.jsxs)(B.a.Group,{style:{textAlign:"start"},children:[Object(n.jsx)(B.a.Label,{children:"Your Phone number \u96fb\u8a71"}),Object(n.jsx)(B.a.Control,{onChange:function(e){return l(e.target.value)},name:"phone",type:"tel",placeholder:"Phone Number",value:o}),Object(n.jsx)("small",{children:"Format: 1234567890"})]}),Object(n.jsxs)(B.a.Group,{style:{textAlign:"start"},children:[Object(n.jsx)(B.a.Label,{children:"Your Email \u96fb\u90f5"}),Object(n.jsx)(B.a.Control,{onChange:function(e){return h(e.target.value)},name:"email",type:"email",placeholder:"Email",value:b})]}),Object(n.jsxs)(B.a.Group,{style:{textAlign:"start"},children:[Object(n.jsx)(B.a.Label,{children:"Donation Amount \u6350\u6b3e\u6578\u76ee (USD)"}),Object(n.jsx)(B.a.Control,{onChange:function(e){return O(e.target.value)},name:"amount",type:"number",placeholder:"$ USD",value:u})]}),Object(n.jsxs)(B.a.Group,{style:{textAlign:"start"},children:[Object(n.jsx)(B.a.Label,{children:"Your credit card detail \u4fe1\u7528\u5361\u8cc7\u6599"}),Object(n.jsx)("fieldset",{className:"FormGroup",children:Object(n.jsx)("div",{className:"FormRow",style:{backgroundColor:"white",borderRadius:"5px",height:"33px",borderColor:"grey",alignItems:"center",padding:"5px 20px 5px 20px"},children:Object(n.jsx)(M.CardElement,{options:{iconStyle:"solid",style:{base:{iconColor:"#c4f0ff",color:"black",fontWeight:500,fontFamily:"Roboto, Open Sans, Segoe UI, sans-serif",fontSize:"16px",fontSmoothing:"antialiased",":-webkit-autofill":{color:"#fce883"},"::placeholder":{color:"#87bbfd"}},invalid:{iconColor:"#ffc7ee",color:"#ffc7ee"}}}})})})]}),Object(n.jsx)("br",{}),Object(n.jsx)(E.a,{variant:"warning",type:"submit",disabled:!a||!b||!u||!M.CardElement||!0===f,children:!0===f?"Processing...":"Donate"})]})})},H=a(49),N=Object(H.a)("pk_live_JhFlMlppCNlx0AwEBHd0T7O9006HXsnDDu");var U=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("br",{}),Object(n.jsx)("h3",{children:"Donation to Guan Gong Temple USA"}),Object(n.jsx)("br",{}),Object(n.jsx)(u.a,{children:Object(n.jsx)(M.Elements,{stripe:N,children:Object(n.jsx)(L,{})})}),Object(n.jsx)("br",{})]})},F=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"https://fastly.4sqi.net/img/general/600x600/79385836_AUfP-aCmUvZuAOZB7b8Sdifx_BA5nXk67eex-TQheXM.jpg",alt:"",style:{width:"300px",paddingTop:"20px"}})}),Object(n.jsxs)("div",{style:{padding:"50px 10% 50px 10%"},children:[Object(n.jsx)("h1",{children:"Biography of Guan Gong "}),Object(n.jsx)("br",{}),Object(n.jsx)("h5",{children:"Guan Gong (A.D. 160 - A.D. 219), also known as Lord Guan, was a native of Shanxi Province. He was a man of enormous height, nine spans tall, with a sanguine complexion and a long, flowing beard. His stature was imposing, his bearing awe-inspiring. He was a great warrior and a man of noble spirit. In his youth, he pledged an oath of brotherhood with Liu Bei and Zhang Fei in the Peach Garden, an event that marked the beginning of his military career. His meritorious service won him fame as the leading warrior of the period of the Three Kingdoms. His exploits are still recounted in loving admiration even to this day."}),Object(n.jsx)("br",{}),Object(n.jsx)("h5",{children:"By an imperial decree from Emperor Yongzheng of the Qing Dynasty, temples and shrines dedicated to his memory began to be built throughout the empire. He also came to be honored by Buddhists as a Bodhisattva, by Taoists as God of Wealth and by Confucianists as God of War. Indeed, among the common people, so popular is he of all the Chinese divinities that, to this day, temples dedicated to his memory have never been short of worshippers making offerings of incense."}),Object(n.jsx)("br",{})]})]})}}]),a}(r.Component);var Y=function(){return Object(n.jsx)(S.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(p,{}),Object(n.jsxs)(I.c,{children:[Object(n.jsx)(I.a,{exact:!0,path:"/",component:F}),Object(n.jsx)(I.a,{exact:!0,path:"/pics",component:k}),Object(n.jsx)(I.a,{exact:!0,path:"/donation",component:U})]}),Object(n.jsx)(x,{})]})})};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(Y,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.a8a89f93.chunk.js.map