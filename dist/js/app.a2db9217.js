(function(t){function e(e){for(var o,r,i=e[0],a=e[1],l=e[2],u=0,h=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);f&&f(e);while(h.length)h.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,i=1;i<n.length;i++){var a=n[i];0!==s[a]&&(o=!1)}o&&(c.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},s={app:0},c=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=a;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function s(t,e,n,s,c,r){var i=Object(o["e"])("HelloWorld");return Object(o["d"])(),Object(o["b"])(i,{msg:"Welcome to Your Vue.js App"})}var c={class:"canvas"},r=Object(o["c"])("h1",null,"Hello sudoku",-1),i=Object(o["c"])("canvas",{id:"canvas"},null,-1);function a(t,e,n,s,a,l){return Object(o["d"])(),Object(o["b"])("div",c,[r,i])}var l={name:"HelloWorld",data:function(){return{currentSelection:[0,0],ctx:null,canvas:null}},mounted:function(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.tabIndex=1,this.canvas.style.outline="none",this.canvas.width=450,this.canvas.height=450,this.canvas.addEventListener("click",this.onCanvasClick,!1),this.canvas.addEventListener("keydown",this.onCanvasKeydown,!1),this.drawBasicLayout()},methods:{drawBasicLayout:function(){for(var t=0,e=0,n=0;n<9;n++){for(var o=0;o<9;o++)n%3===0&&o%3===0&&(this.ctx.strokeStyle="#000000",this.ctx.strokeRect(t,e,150,150),this.ctx.font="48px serif",this.ctx.fillText(n+1,t+14,e+42),this.ctx.strokeStyle="rgba(0,0,0,0.2)"),this.ctx.strokeRect(t,e,50,50),t+=50;t=0,e+=50}},onCanvasClick:function(t){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawBasicLayout(this.ctx),this.currentSelection==[0,0]||t.offsetY-t.offsetY%50!==this.currentSelection[1]||t.offsetX-t.offsetX%50!==this.currentSelection[0]?(this.currentSelection[0]=t.offsetX-t.offsetX%50,this.currentSelection[1]=t.offsetY-t.offsetY%50,this.ctx.fillStyle="rgba(0,200,0,0.5)",this.ctx.fillRect(this.currentSelection[0],this.currentSelection[1],50,50),this.ctx.fillStyle="rgba(0,0,0,1)"):this.currentSelection=[0,0]},onCanvasKeydown:function(t){if(this.currentSelection!=[0,0])switch(t.keyCode){case 39:console.log("down"),t.offsetX=this.currentSelection[0]+50,t.offsetX+50>450&&(t.offsetX=0),t.offsetY=this.currentSelection[1],this.onCanvasClick(t);break;case 37:t.offsetX=this.currentSelection[0]-50,t.offsetX<0&&(t.offsetX=400),t.offsetY=this.currentSelection[1],this.onCanvasClick(t);break;case 38:t.offsetY=this.currentSelection[1]-50,t.offsetY<0&&(t.offsetY=400),t.offsetX=this.currentSelection[0],this.onCanvasClick(t);break;case 40:t.offsetY=this.currentSelection[1]+50,t.offsetY+50>450&&(t.offsetY=0),t.offsetX=this.currentSelection[0],this.onCanvasClick(t);break;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:console.log(t.key)}}}};l.render=a;var f=l,u={name:"App",components:{HelloWorld:f}};u.render=s;var h=u;Object(o["a"])(h).mount("#app")}});
//# sourceMappingURL=app.a2db9217.js.map