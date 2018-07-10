function launchParticlesJS(e,a){function i(){pJS.fn.canvasInit(),pJS.fn.canvasSize(),pJS.fn.canvasPaint(),pJS.fn.particlesCreate(),pJS.fn.particlesDraw()}function t(){pJS.fn.particlesDraw(),pJS.fn.requestAnimFrame=requestAnimFrame(t)}var n=document.querySelector("#"+e+" > canvas");if(pJS={canvas:{el:n,w:n.offsetWidth,h:n.offsetHeight},particles:{color:"#fff",shape:"circle",opacity:1,size:2.5,size_random:!0,nb:200,line_linked:{enable_auto:!0,distance:100,color:"#fff",opacity:1,width:1,condensed_mode:{enable:!0,rotateX:65e3,rotateY:65e3}},anim:{enable:!0,speed:1},array:[]},interactivity:{enable:!0,mouse:{distance:100},detect_on:"canvas",mode:"grab",line_linked:{opacity:1},events:{onclick:{enable:!0,mode:"push",nb:4}}},retina_detect:!1,fn:{vendors:{interactivity:{}}}},a){if(a.particles){var c=a.particles;if(c.color&&(pJS.particles.color=c.color),c.shape&&(pJS.particles.shape=c.shape),c.opacity&&(pJS.particles.opacity=c.opacity),c.size&&(pJS.particles.size=c.size),0==c.size_random&&(pJS.particles.size_random=c.size_random),c.nb&&(pJS.particles.nb=c.nb),c.line_linked){var s=c.line_linked;if(0==s.enable_auto&&(pJS.particles.line_linked.enable_auto=s.enable_auto),s.distance&&(pJS.particles.line_linked.distance=s.distance),s.color&&(pJS.particles.line_linked.color=s.color),s.opacity&&(pJS.particles.line_linked.opacity=s.opacity),s.width&&(pJS.particles.line_linked.width=s.width),s.condensed_mode){var r=s.condensed_mode;0==r.enable&&(pJS.particles.line_linked.condensed_mode.enable=r.enable),r.rotateX&&(pJS.particles.line_linked.condensed_mode.rotateX=r.rotateX),r.rotateY&&(pJS.particles.line_linked.condensed_mode.rotateY=r.rotateY)}}if(c.anim){var p=c.anim;0==p.enable&&(pJS.particles.anim.enable=p.enable),p.speed&&(pJS.particles.anim.speed=p.speed)}}if(a.interactivity){var o=a.interactivity;if(0==o.enable&&(pJS.interactivity.enable=o.enable),o.mouse&&o.mouse.distance&&(pJS.interactivity.mouse.distance=o.mouse.distance),o.detect_on&&(pJS.interactivity.detect_on=o.detect_on),o.mode&&(pJS.interactivity.mode=o.mode),o.line_linked&&o.line_linked.opacity&&(pJS.interactivity.line_linked.opacity=o.line_linked.opacity),o.events){var l=o.events;if(l.onclick){var S=l.onclick;0==S.enable&&(pJS.interactivity.events.onclick.enable=!1),"push"!=S.mode&&(pJS.interactivity.events.onclick.mode=S.mode),S.nb&&(pJS.interactivity.events.onclick.nb=S.nb)}}}pJS.retina_detect=a.retina_detect}pJS.particles.color_rgb=hexToRgb(pJS.particles.color),pJS.particles.line_linked.color_rgb_line=hexToRgb(pJS.particles.line_linked.color),pJS.retina_detect&&window.devicePixelRatio>1&&(pJS.retina=!0,pJS.canvas.pxratio=window.devicePixelRatio,pJS.canvas.w=pJS.canvas.el.offsetWidth*pJS.canvas.pxratio,pJS.canvas.h=pJS.canvas.el.offsetHeight*pJS.canvas.pxratio,pJS.particles.anim.speed=pJS.particles.anim.speed*pJS.canvas.pxratio,pJS.particles.line_linked.distance=pJS.particles.line_linked.distance*pJS.canvas.pxratio,pJS.particles.line_linked.width=pJS.particles.line_linked.width*pJS.canvas.pxratio,pJS.interactivity.mouse.distance=pJS.interactivity.mouse.distance*pJS.canvas.pxratio),pJS.fn.canvasInit=function(){pJS.canvas.ctx=pJS.canvas.el.getContext("2d")},pJS.fn.canvasSize=function(){pJS.canvas.el.width=pJS.canvas.w,pJS.canvas.el.height=pJS.canvas.h,window.onresize=function(){pJS&&(pJS.canvas.w=pJS.canvas.el.offsetWidth,pJS.canvas.h=pJS.canvas.el.offsetHeight,pJS.retina&&(pJS.canvas.w*=pJS.canvas.pxratio,pJS.canvas.h*=pJS.canvas.pxratio),pJS.canvas.el.width=pJS.canvas.w,pJS.canvas.el.height=pJS.canvas.h,pJS.fn.canvasPaint(),pJS.particles.anim.enable||(pJS.fn.particlesRemove(),pJS.fn.canvasRemove(),i()))}},pJS.fn.canvasPaint=function(){pJS.canvas.ctx.fillRect(0,0,pJS.canvas.w,pJS.canvas.h)},pJS.fn.canvasRemove=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h)},pJS.fn.particle=function(e,a,i){this.x=i?i.x:Math.random()*pJS.canvas.w,this.y=i?i.y:Math.random()*pJS.canvas.h,this.radius=(pJS.particles.size_random?Math.random():1)*pJS.particles.size,pJS.retina&&(this.radius*=pJS.canvas.pxratio),this.color=e,this.opacity=a,this.vx=-.5+Math.random(),this.vy=-.5+Math.random(),this.draw=function(){switch(pJS.canvas.ctx.fillStyle="rgba("+this.color.r+","+this.color.g+","+this.color.b+","+this.opacity+")",pJS.canvas.ctx.beginPath(),pJS.particles.shape){case"circle":pJS.canvas.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,!1);break;case"edge":pJS.canvas.ctx.rect(this.x,this.y,2*this.radius,2*this.radius);break;case"triangle":pJS.canvas.ctx.moveTo(this.x,this.y-this.radius),pJS.canvas.ctx.lineTo(this.x+this.radius,this.y+this.radius),pJS.canvas.ctx.lineTo(this.x-this.radius,this.y+this.radius),pJS.canvas.ctx.closePath()}pJS.canvas.ctx.fill()}},pJS.fn.particlesCreate=function(){for(var e=0;e<pJS.particles.nb;e++)pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb,pJS.particles.opacity))},pJS.fn.particlesAnimate=function(){for(var e=0;e<pJS.particles.array.length;e++){var a=pJS.particles.array[e];a.x+=a.vx*(pJS.particles.anim.speed/2),a.y+=a.vy*(pJS.particles.anim.speed/2),a.x-a.radius>pJS.canvas.w?a.x=a.radius:a.x+a.radius<0&&(a.x=pJS.canvas.w+a.radius),a.y-a.radius>pJS.canvas.h?a.y=a.radius:a.y+a.radius<0&&(a.y=pJS.canvas.h+a.radius);for(var i=e+1;i<pJS.particles.array.length;i++){var t=pJS.particles.array[i];if(pJS.particles.line_linked.enable_auto&&pJS.fn.vendors.distanceParticles(a,t),pJS.interactivity.enable)switch(pJS.interactivity.mode){case"grab":pJS.fn.vendors.interactivity.grabParticles(a,t)}}}},pJS.fn.particlesDraw=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h),pJS.fn.particlesAnimate();for(var e=0;e<pJS.particles.array.length;e++){var a=pJS.particles.array[e];a.draw("rgba("+a.color.r+","+a.color.g+","+a.color.b+","+a.opacity+")")}},pJS.fn.particlesRemove=function(){pJS.particles.array=[]},pJS.fn.vendors.distanceParticles=function(e,a){var i=e.x-a.x,t=e.y-a.y,n=Math.sqrt(i*i+t*t);if(n<=pJS.particles.line_linked.distance){var c=pJS.particles.line_linked.color_rgb_line;if(pJS.canvas.ctx.beginPath(),pJS.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+(pJS.particles.line_linked.opacity-n/pJS.particles.line_linked.distance)+")",pJS.canvas.ctx.moveTo(e.x,e.y),pJS.canvas.ctx.lineTo(a.x,a.y),pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width,pJS.canvas.ctx.stroke(),pJS.canvas.ctx.closePath(),pJS.particles.line_linked.condensed_mode.enable){var i=e.x-a.x,t=e.y-a.y,s=i/(1e3*pJS.particles.line_linked.condensed_mode.rotateX),r=t/(1e3*pJS.particles.line_linked.condensed_mode.rotateY);a.vx+=s,a.vy+=r}}},pJS.fn.vendors.interactivity.listeners=function(){if("window"==pJS.interactivity.detect_on)var e=window;else var e=pJS.canvas.el;if(e.onmousemove=function(a){if(e==window)var i=a.clientX,t=a.clientY;else var i=a.offsetX||a.clientX,t=a.offsetY||a.clientY;pJS&&(pJS.interactivity.mouse.pos_x=i,pJS.interactivity.mouse.pos_y=t,pJS.retina&&(pJS.interactivity.mouse.pos_x*=pJS.canvas.pxratio,pJS.interactivity.mouse.pos_y*=pJS.canvas.pxratio),pJS.interactivity.status="mousemove")},e.onmouseleave=function(e){pJS&&(pJS.interactivity.mouse.pos_x=0,pJS.interactivity.mouse.pos_y=0,pJS.interactivity.status="mouseleave")},pJS.interactivity.events.onclick.enable)switch(pJS.interactivity.events.onclick.mode){case"push":e.onclick=function(e){if(pJS)for(var a=0;a<pJS.interactivity.events.onclick.nb;a++)pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color_rgb,pJS.particles.opacity,{x:pJS.interactivity.mouse.pos_x,y:pJS.interactivity.mouse.pos_y}))};break;case"remove":e.onclick=function(e){pJS.particles.array.splice(0,pJS.interactivity.events.onclick.nb)}}},pJS.fn.vendors.interactivity.grabParticles=function(e,a){var i=e.x-a.x,t=e.y-a.y,n=Math.sqrt(i*i+t*t),c=e.x-pJS.interactivity.mouse.pos_x,s=e.y-pJS.interactivity.mouse.pos_y,r=Math.sqrt(c*c+s*s);if(n<=pJS.particles.line_linked.distance&&r<=pJS.interactivity.mouse.distance&&"mousemove"==pJS.interactivity.status){var p=pJS.particles.line_linked.color_rgb_line;pJS.canvas.ctx.beginPath(),pJS.canvas.ctx.strokeStyle="rgba("+p.r+","+p.g+","+p.b+","+(pJS.interactivity.line_linked.opacity-r/pJS.interactivity.mouse.distance)+")",pJS.canvas.ctx.moveTo(e.x,e.y),pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x,pJS.interactivity.mouse.pos_y),pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width,pJS.canvas.ctx.stroke(),pJS.canvas.ctx.closePath()}},pJS.fn.vendors.destroy=function(){cancelAnimationFrame(pJS.fn.requestAnimFrame),n.remove(),delete pJS},i(),pJS.particles.anim.enable&&t(),pJS.interactivity.enable&&pJS.fn.vendors.interactivity.listeners()}function hexToRgb(e){var a=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;e=e.replace(a,function(e,a,i,t){return a+a+i+i+t+t});var i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return i?{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)}:null}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),window.cancelRequestAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),window.particlesJS=function(e,a){"string"!=typeof e&&(a=e,e="particles-js"),e||(e="particles-js");var i=document.createElement("canvas");i.style.width="100%",i.style.height="100%";var t=document.getElementById(e).appendChild(i);null!=t&&launchParticlesJS(e,a)};
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.js=e()}(this,function(){"use strict";function t(t,e,n,r,o){return r+(t-e)/(n-e)*(o-r)}function e(t,e,n){this.x=t,this.y=e,this.z=n}function n(t){t>0&&t<1&&(t*=65536),(t=Math.floor(t))<256&&(t|=t<<8);for(var e=0;e<256;e++){var n;n=1&e?p[e]^255&t:p[e]^t>>8&255,m[e]=m[e+256]=n,g[e]=g[e+256]=v[n%12]}}function r(t,e){var n,r,o,i,a,h=(t+e)*M,l=Math.floor(t+h),c=Math.floor(e+h),u=(l+c)*y,s=t-l+u,f=e-c+u;s>f?(i=1,a=0):(i=0,a=1);var d=s-i+y,v=f-a+y,p=s-1+2*y,w=f-1+2*y,x=g[(l&=255)+m[c&=255]],b=g[l+i+m[c+a]],E=g[l+1+m[c+1]],C=.5-s*s-f*f;n=C<0?0:(C*=C)*C*x.dot2(s,f);var L=.5-d*d-v*v;r=L<0?0:(L*=L)*L*b.dot2(d,v);var H=.5-p*p-w*w;return o=H<0?0:(H*=H)*H*E.dot2(p,w),70*(n+r+o)}function o(t){return t*t*t*(t*(6*t-15)+10)}function i(t,e,n){return(1-n)*t+n*e}function a(t,e){var n=Math.floor(t),r=Math.floor(e);t-=n,e-=r;var a=g[(n&=255)+m[r&=255]].dot2(t,e),h=g[n+m[r+1]].dot2(t,e-1),l=g[n+1+m[r]].dot2(t-1,e),c=g[n+1+m[r+1]].dot2(t-1,e-1),u=o(t);return i(i(a,l,u),i(h,c,u),o(e))}function h(t){function e(){n.offsetWidth!=r.offsetWidth&&0!=n.offsetWidth?requestAnimationFrame(e):(document.body.removeChild(n),document.body.removeChild(r),f.hasTouch&&E.classList.add("disable-touch-select"),function(t){var e=document.createElement("div");e.style.cssText="display:block;white-space:pre;position:absolute;",e.innerHTML="X".repeat(100)+"\n",e.innerHTML+="X\n".repeat(99),document.body.appendChild(e);var n=e.offsetWidth/100,r=e.offsetHeight/100;document.body.removeChild(e),t.charWidth=n,t.lineHeight=r,t.aspect=n/r}(X),document.addEventListener("mousemove",function(t){T.firstMove||(T.px=t.clientX,T.py=t.clientY,T.firstMove=!0),T.x=t.clientX,T.y=t.clientY}),document.addEventListener("click",function(t){s.fill(k,~~(Math.random()*L.length)),c(q,D,O)}),document.addEventListener("touchstart",function(t){T.x=t.touches[0].clientX,T.y=t.touches[0].clientY,T.px=T.x,T.py=T.y}),document.addEventListener("touchmove",function(t){T.x=t.touches[0].clientX,T.y=t.touches[0].clientY}),document.addEventListener("touchend",function(t){}),requestAnimationFrame(l),"function"==typeof t&&t())}var n=document.createElement("span"),r=document.createElement("span");n.style.visibility="hidden",r.style.visibility="hidden",n.innerHTML="X<br>",r.innerHTML="i<br>",document.body.appendChild(n),document.body.appendChild(r),requestAnimationFrame(e)}function l(t){var e=Math.ceil(window.innerWidth/X.charWidth),n=Math.ceil(window.innerHeight/X.lineHeight);for(e==O&&n==D||(O=e,D=n,s.resize2d(k,D,O,H),s.resize2d(W,D,O,H),s.resize2d(q,D,O,0),c(q,D,O,4),F.canvas.width=O,F.canvas.height=Math.ceil(D/X.aspect));E.childNodes.length>D;)E.removeChild(E.lastChild);for(;E.childNodes.length<D;)E.appendChild(document.createElement("span"));var r={metrics:X,chars:L};s.fill(W,H);var o=Math.floor(T.x/X.charWidth),i=Math.floor(T.y/X.lineHeight),a=Math.sqrt(Math.pow(T.px-T.x,2)+Math.pow(T.py-T.y,2));(B+=.05*(a-B))>0&&d.circle(k,r,o,i,Math.floor(B),L.map.get("0")),A.length=0;var h=!0,f=!1,v=void 0;try{for(var p,m=z[Symbol.iterator]();!(h=(p=m.next()).done);h=!0){var g=p.value;d.textBox(W,r,g.tokens,g.x(X),g.y(X),g.cols(X),A)}}catch(M){f=!0,v=M}finally{try{!h&&m["return"]&&m["return"]()}finally{if(f)throw v}}var y=2*Math.PI,w=F.canvas.width,x=F.canvas.height;F.save(),F.fillStyle="white",F.fillRect(0,0,w,x),F.scale(1,X.aspect),F.fillStyle="black";var b=Math.max(w,x),C=M(Math.cos(.0011*t),-1,1,.085*b,.85*b),P=Math.cos(265e-6*t)*w,S=Math.cos(271e-6*t)*x,Y=Math.cos(173e-6*t)*y;F.translate(w/2+P,x/2+S),F.rotate(Y);var j=Math.cos(y/3)*C,N=Math.sin(y/3)*C;F.beginPath(),F.moveTo(C,0),F.lineTo(j,-N),F.lineTo(j,N),F.closePath(),F.fill(),F.restore(),d.image(W,r,F);for(var R=0;R<D;R++){var I=E.childNodes[R],G=function(t,e){for(var n=t.length;t[n]==H&&n>0;)n--;for(var r="",o=0;o<n;o++){var i=t[o];r+=e.list[i]||" "}return r}(k[R],L);G=function(t,e){if(!e)return t;for(var n=e.length-1;n>=0;n--){var r=e[n].tag,o=e[n].offsX;t=u(r.close,t,o+r.length),t=u(r.open,t,o)}return t}(G,A[R]),I.innerHTML!=G&&(I.innerHTML=G)}for(var J=0;J<D;J++)for(var K=0;K<O;K++)q[J][K]>0?q[J][K]--:k[J][K]!=W[J][K]&&0==q[J][K]&&(k[J][K]=++k[J][K]%L.length);T.px=T.x,T.py=T.y,requestAnimationFrame(l)}function c(t,e,n){function r(t,e){for(var n=0;n<t.length;n++)for(var r=0;r<t[n].length;r++)t[n][r]=e(r,n,t[n][r])}var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:~~(5*Math.random());e=e||t.length,n=n||t[0].length,s.resize2d(t,e,n,0);var i=Math.floor(T.x/X.charWidth),a=Math.floor(T.y/X.lineHeight);if(0==o){var h=5+~~(10*Math.random());r(t,function(t,e){return t%h+2*e})}else 1==o?r(t,function(t,n){return t%2==0?2*n:2*(e-n)}):2==o?r(t,function(t,e){return e%2==0?~~((t+e)/3):~~((n-t+e)/3)}):3==o?r(t,function(t,e){return~~(Math.sqrt(Math.pow(i-t,2)+Math.pow((a-e)/X.aspect,2))/2)}):4==o&&(w.seed(Math.random()),r(t,function(t,e){return~~(120*w.perlin2(.03*t,.03*e/X.aspect))}))}function u(t,e,n){return n>0?e.substring(0,n)+t+e.substring(n,e.length):t+e}var s={resize2d:function(t,e,n,r){t.length=Math.min(e,t.length);for(var o=0;o<t.length;o++)if(t[o].length>n)t[o].length=n;else for(var i=t[o].length;i<n;i++)t[o][i]=r;for(;t.length<e;)t.push(new Array(n).fill(r))},fill:function(t,e){for(var n=0;n<t.length;n++)for(var r=0;r<t[n].length;r++)t[n][r]=e},set:function(t,e,n,r){e<0||e>=t.length||n<0||n>=t[e].length||(t[e][n]=r)}},f={hasTouch:"ontouchstart"in document.documentElement},d={image:function(e,n,r){for(var o=r.canvas,i=r.getImageData(0,0,o.width,o.height).data,a=Math.min(o.width,e[0].length),h=Math.min(o.height,e.length),l=n.chars.length,c=n.chars.map.get("1"),u=0;u<h;u++)for(var s=u*o.width,f=0;f<a;f++){var d=4*(f+s),v=i[d++];i[d++],i[d],v<255&&(f+u%2)%2==1&&(e[u][f]=Math.round(t(v,0,255,c,l-1)))}},circle:function(t,e,n,r,o,i){for(var a=e.metrics.aspect,h=o,l=Math.floor(o*a)+1,c=h*h,u=Math.max(n-h,0),s=Math.max(r-l,0),f=Math.min(n+h+1,t[0].length),d=Math.min(r+l+1,t.length),v=s;v<d;v++)for(var p=u;p<f;p++)Math.pow(p-n,2)+Math.pow((v-r)/a,2)<c&&(p+v%2)%2==0&&(t[v][p]=i)},textBox:function(t,e,n,r,o,i,a){for(var h=r,l=o,c=(t.length,t[0].length),u=Math.min(c-1,r+i),f=e.chars.map.get("—"),d=0;d<n.length;d++){var v=n[d],p=n[d+1];if("br"==v.tag)l+=1,h=r;else if("p"==v.tag)h!=r&&(h=r,l+=1);else if("hr"==v.tag)for(h!=r&&(h=r,l+=1);h<u;)s.set(t,l,h++,f);else{v.punctuation||h==r||(h+=1);var m=v.length;p&&p.punctuation&&(m+=p.length),h+m>u&&(h=r,l+=1);for(var g=0;g<v.length;g++)s.set(t,l,h+g,e.chars.map.get(v.text[g]));"a"==v.tag&&l>=0&&l<c&&(a[l]=a[l]||[],a[l].push({tag:v,offsX:h})),h+=v.length}}}};e.prototype.dot2=function(t,e){return this.x*t+this.y*e},e.prototype.dot3=function(t,e,n){return this.x*t+this.y*e+this.z*n};var v=[new e(1,1,0),new e((-1),1,0),new e(1,(-1),0),new e((-1),(-1),0),new e(1,0,1),new e((-1),0,1),new e(1,0,(-1)),new e((-1),0,(-1)),new e(0,1,1),new e(0,(-1),1),new e(0,1,(-1)),new e(0,(-1),(-1))],p=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],m=new Array(512),g=new Array(512);n(0);var M=.5*(Math.sqrt(3)-1),y=(3-Math.sqrt(3))/6,w={seed:n,simplex2:function(t,e){return(r(t,e)+1)/2},simplex3:function(t,e,n){return(r(t,e)+1)/2},perlin2:function(t,e){return(a(t,e)+1)/2},perlin3:function(t,e,n){return(a(t,e)+1)/2}},x=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},b=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),E=document.querySelector("output")||document.body.appendChild(document.createElement("output"));E.classList.add("disable-scroll");var C="aàbcdeèéfghiìjklmnoòpqrstuùüvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%/|\\()#?!\"'“”‘’;:π*+•—-_,. ",L={list:Array.from(C),map:new Map(Array.from(C).map(function(t,e){return[t,e]})),length:C.length},H=L.map.get(" "),T={x:-100,y:-100,px:-100,py:-100,pressed:!1,firstMove:!1},k=[],W=[],q=[],A=[],X={},z=[],O=0,D=0,B=0,F=document.createElement("canvas").getContext("2d"),P=function(){function t(e){x(this,t),this.DOMElement=e,this.tokens=[],this.refresh()}return b(t,[{key:"refresh",value:function(){this.tokens=function(t){var e=[],n=null,r=null;return t.replace(/<([^\s>]*)[^>]*>|[^\s<]*/g,function(t,o,i){o?("/"==o[0]?(n=null,r=null):(n=o.toLowerCase(),r=t),"p"!=n&&"br"!=n&&"hr"!=n||(e.push({tag:n}),n=null,r=null)):""!=t&&e.push({text:t,tag:n,open:r,close:n?"</"+n+">":null,length:t.length,punctuation:",;.:".indexOf(t)>=0})}),e}(this.DOMElement.innerHTML)}},{key:"cols",value:function(t){return Math.round(this.DOMElement.offsetWidth/t.charWidth)}},{key:"x",value:function(t){var e=this.DOMElement.getBoundingClientRect();return Math.round(e.left/t.charWidth)}},{key:"y",value:function(t){var e=this.DOMElement.getBoundingClientRect();return Math.round(e.top/t.lineHeight)}}]),t}();return{ert:{refresh:function(){z.forEach(function(t){t.refresh()})},track:function(t){var e=new P(t);z.push(e)},setup:h}}});