(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},8:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),o=n(4),i=n(3),l=n(5),s=n(0),c=n.n(s),u=n(7),d=n.n(u),m=(n(14),function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"post-it"},c.a.createElement("div",{className:"tape tape1"}),c.a.createElement("div",{className:"tape tape2"}),c.a.createElement("p",null),c.a.createElement("p",null,"Updates as of : ",c.a.createElement("strong",null,"Dec 26, 2018")),c.a.createElement("p",null),c.a.createElement("p",null,"- Monitoring Structural Department"),c.a.createElement("p",null,"for month of January."),c.a.createElement("p",null),c.a.createElement("p",null,"Updates as of : ",c.a.createElement("strong",null,"Dec 17, 2018")),c.a.createElement("p",null),c.a.createElement("p",null,"- Monitoring ","{"," Revision , Kakunin ","}"),c.a.createElement("p",null,"for month of January."),c.a.createElement("p",null),c.a.createElement("p",null),c.a.createElement("p",null),c.a.createElement("p",null),c.a.createElement("p",null))}}]),t}(c.a.Component)),p=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return"Kakunin Monitoring"===this.props.name?c.a.createElement("a",{href:this.props.href},this.props.label):c.a.createElement("a",{href:this.props.href,target:"_blank",rel:"noopener noreferrer"},this.props.label)}}]),t}(c.a.Component),h=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"renderLink",value:function(e,t){var n=[],a=0;for(var r in t)n.push(c.a.createElement(p,{href:t[r],name:e,label:r,key:a})),a++;return n}},{key:"render",value:function(){return c.a.createElement("section",{id:this.props.value},c.a.createElement("div",{className:"title"},this.props.value),c.a.createElement("div",{className:"content"},this.renderLink(this.props.value,this.props.links)),this.props.others)}}]),t}(c.a.Component),v=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"renderSection",value:function(e){return e.map(function(e,t){return c.a.createElement(h,{value:e.title,links:e.links,others:e.others,key:t})})}},{key:"render",value:function(){return c.a.createElement("main",null,c.a.createElement("div",{id:"Home",className:"blank"},c.a.createElement(m,null)),this.renderSection(this.props.content),c.a.createElement("div",{className:"blank"}))}}]),t}(c.a.Component),g=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"background"})}}]),t}(c.a.Component),b=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"nav-link",onClick:this.props.onClick},this.props.value)}}]),t}(c.a.Component),f=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"navigate",value:function(e){var t=document.querySelector(".nav"),n=document.getElementById(e);window.scrollTo(0,n.offsetTop-t.offsetHeight)}},{key:"renderNavLink",value:function(e){var t=this;return e.map(function(e,n){return c.a.createElement(b,{value:e.nav,onClick:function(){return t.navigate(e.title)},key:n})})}},{key:"render",value:function(){var e=this;return c.a.createElement("nav",{className:"nav"},c.a.createElement(b,{value:"Home",onClick:function(){return e.navigate("Home")}}),this.renderNavLink(j))}}]),t}(c.a.Component),E=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"title"},"Training Department"),c.a.createElement("div",{className:"sub-title"},"Projects and Links"),c.a.createElement("div",{className:"button"},c.a.createElement("input",{type:"button",id:"start",value:"Get Started",onClick:function(){var e=document.querySelector(".nav"),t=document.getElementById(j[0].title);window.scrollTo(0,t.offsetTop-e.offsetHeight)}})))}}]),t}(c.a.Component),k=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null),c.a.createElement(v,{content:j}),c.a.createElement(E,null),c.a.createElement(f,null))}}]),t}(c.a.Component),j=[{title:"Revision Monitoring",nav:"Revision",links:{"Plan Monitoring v2.0 (September)":"https://docs.google.com/spreadsheets/d/1EeV-O9JyWU_l0LW5g0onSShgqolUA6ecxbkS7GvDcyw/edit#gid=818716465","Plan Monitoring v2.1 (October)":"https://docs.google.com/spreadsheets/d/1quD2imwF8rqBQUzq6-m8lrqKBnPz1WRk5uzez7mwZFw/edit#gid=472071419","Plan Monitoring v2.2 (November)":"https://docs.google.com/spreadsheets/d/1cdXoLbqUIzCjVEjcnhuEuX5EHR5ZwH6rJDFXvTGOKU4/edit#gid=472071419","Plan Monitoring v2.3 (December)":"https://docs.google.com/spreadsheets/d/1XZZKyuTz3GOxdhfFxONMudkbBcZ_I60H64eFBxoN7Fk/edit#gid=472071419","Plan Monitoring v2.4 (January)":"https://docs.google.com/spreadsheets/d/1Ntb_fC6MTIFEGDHn34155DZ-CvPEnfF3YOop3Ksf74w/edit#gid=472071419","Productivity & Quality Report":"https://docs.google.com/spreadsheets/d/1ZkU9-HDHKubtWJlStzilFwa-C-RDmr4-1sgm0CpCbnk/edit#gid=1537691498"},others:""},{title:"Kakunin Monitoring",nav:"Kakunin",links:{"Plan Monitoring v1.0 (November)":"https://docs.google.com/spreadsheets/d/1y0UgFlbfm9rC2HB0RVjUnd3MRWHMQpaVdlbDuCliXfI/edit#gid=472071419","Plan Monitoring v1.1 (December)":"https://docs.google.com/spreadsheets/d/1Wu_m2HQ1NtJgRTUuUafH_BuLoCsI1SRQFum0UK4NRPM/edit#gid=472071419","Plan Monitoring v1.2 (January)":"https://docs.google.com/spreadsheets/d/1PBUkvAkA0hXdPnVHT1K4_GYX-_-famzt7wndcHHQhGU/edit#gid=472071419"},others:c.a.createElement("div",{className:"note"},"*Links under development...")},{title:"Structural Monitoring",nav:"Structural",links:{"Plan Monitoring v1.0 (December)":"https://docs.google.com/spreadsheets/d/18Hr9KuifQq0uh2B79asETe6yF9kjuP7lpwPc-Yvbgjs/edit#gid=853151862","Plan Monitoring v1.1 (January)":"https://docs.google.com/spreadsheets/d/1Yb_zHXG6PCB8tyv_uZ3CYEFsBO4M8u3AlZ0cm0iHFhs/edit#gid=853151862"},others:c.a.createElement("div",{className:"note"},"*Links under development...")},{title:"Additional Links",nav:"Additional",links:{"Spread Sheet (Project)":"https://docs.google.com/spreadsheets/d/1hD1sYnf_btSktRM8SiYJStvzM5hsmdZHoROt4tSWCOU/edit?ts=584e3927#gid=464436514","Spread Sheet (JW Convertion)":"https://docs.google.com/spreadsheets/d/1jKAao-2QcKtGUz5ZBXxoAusP0Ulcsj9hn1R91EBcPtk/edit#gid=1563213429",Gmail:"https://mail.google.com/mail/u/1/#inbox","Google Translate":"https://translate.google.com/","Data Bank":"https://www.databank-solution.net/","Fire Storage":"http://firestorage.jp/"},others:c.a.createElement("div",{className:"note"},"*Your suggested links and shortcuts will be here...")}];d.a.render(c.a.createElement(k,null),document.getElementById("root"));var O=document.querySelector(".nav"),y=O.offsetTop;document.addEventListener("scroll",function(){window.scrollY>=y?O.classList.add("fixed"):O.classList.remove("fixed")})}},[[8,2,1]]]);
//# sourceMappingURL=main.1025711f.chunk.js.map