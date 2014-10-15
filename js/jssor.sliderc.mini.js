﻿(function(g,e,b,f,c,d,h){/*! Jssor */
new(function(){});var k=g.$JssorEasing$={$EaseLinear:function(a){return a},$EaseGoBack:function(a){return 1-b.abs(2-1)},$EaseSwing:function(a){return-b.cos(a*b.PI)/2+.5},$EaseInQuad:function(a){return a*a},$EaseOutQuad:function(a){return-a*(a-2)},$EaseInOutQuad:function(a){return(a*=2)<1?1/2*a*a:-1/2*(--a*(a-2)-1)},$EaseInCubic:function(a){return a*a*a},$EaseOutCubic:function(a){return(a-=1)*a*a+1},$EaseInOutCubic:function(a){return(a*=2)<1?1/2*a*a*a:1/2*((a-=2)*a*a+2)},$EaseInQuart:function(a){return a*a*a*a},$EaseOutQuart:function(a){return-((a-=1)*a*a*a-1)},$EaseInOutQuart:function(a){return(a*=2)<1?1/2*a*a*a*a:-1/2*((a-=2)*a*a*a-2)},$EaseInQuint:function(a){return a*a*a*a*a},$EaseOutQuint:function(a){return(a-=1)*a*a*a*a+1},$EaseInOutQuint:function(a){return(a*=2)<1?1/2*a*a*a*a*a:1/2*((a-=2)*a*a*a*a+2)},$EaseInSine:function(a){return 1-b.cos(a*b.PI/2)},$EaseOutSine:function(a){return b.sin(a*b.PI/2)},$EaseInOutSine:function(a){return-1/2*(b.cos(b.PI*a)-1)},$EaseInExpo:function(a){return a==0?0:b.pow(2,10*(a-1))},$EaseOutExpo:function(a){return a==1?1:-b.pow(2,-10*a)+1},$EaseInOutExpo:function(a){return a==0||a==1?a:(a*=2)<1?1/2*b.pow(2,10*(a-1)):1/2*(-b.pow(2,-10*--a)+2)},$EaseInCirc:function(a){return-(b.sqrt(1-a*a)-1)},$EaseOutCirc:function(a){return b.sqrt(1-(a-=1)*a)},$EaseInOutCirc:function(a){return(a*=2)<1?-1/2*(b.sqrt(1-a*a)-1):1/2*(b.sqrt(1-(a-=2)*a)+1)},$EaseInElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return-(b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c))},$EaseOutElastic:function(a){if(!a||a==1)return a;var c=.3,d=.075;return b.pow(2,-10*a)*b.sin((a-d)*2*b.PI/c)+1},$EaseInOutElastic:function(a){if(!a||a==1)return a;var c=.45,d=.1125;return(a*=2)<1?-.5*b.pow(2,10*(a-=1))*b.sin((a-d)*2*b.PI/c):b.pow(2,-10*(a-=1))*b.sin((a-d)*2*b.PI/c)*.5+1},$EaseInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},$EaseOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},$EaseInOutBack:function(a){var b=1.70158;return(a*=2)<1?1/2*a*a*(((b*=1.525)+1)*a-b):1/2*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},$EaseInBounce:function(a){return 1-k.$EaseOutBounce(1-a)},$EaseOutBounce:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},$EaseInOutBounce:function(a){return a<1/2?k.$EaseInBounce(a*2)*.5:k.$EaseOutBounce(a*2-1)*.5+.5},$EaseInWave:function(a){return 1-b.cos(a*b.PI*2)},$EaseOutWave:function(a){return b.sin(a*b.PI*2)},$EaseOutJump:function(a){return 1-((a*=2)<1?(a=1-a)*a*a:(a-=1)*a*a)},$EaseInJump:function(a){return(a*=2)<1?a*a*a:(a=2-a)*a*a}},p={Pe:37,Me:39},m,i,a=new function(){var i=this,mb=1,F=2,F=3,fb=4,jb=5,q=0,l=0,u=0,Z=0,x=0,rb=navigator.appName,k=navigator.userAgent,p=e.documentElement,B;function D(){if(!q)if(rb=="Microsoft Internet Explorer"&&!!g.attachEvent&&!!g.ActiveXObject){var d=k.indexOf("MSIE");q=mb;u=n(k.substring(d+5,k.indexOf(";",d)));/*@cc_on Z=@_jscript_version@*/;l=e.documentMode||u}else if(rb=="Netscape"&&!!g.addEventListener){var c=k.indexOf("Firefox"),a=k.indexOf("Safari"),h=k.indexOf("Chrome"),b=k.indexOf("AppleWebKit");if(c>=0){q=F;l=n(k.substring(c+8))}else if(a>=0){var i=k.substring(0,a).lastIndexOf("/");q=h>=0?fb:F;l=n(k.substring(i+1,a))}if(b>=0)x=n(k.substring(b+12))}else{var f=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);if(f){q=jb;l=n(f[2])}}}function s(){D();return q==mb}function N(){return s()&&(l<6||e.compatMode=="BackCompat")}function sb(){D();return q==F}function P(){D();return q==F}function eb(){D();return q==fb}function ib(){D();return q==jb}function ab(){return P()&&x>534&&x<535}function A(){return s()&&l<9}function v(a){if(!B){j(["transform","WebkitTransform","msTransform","MozTransform","OTransform"],function(b){if(a.style[b]!=h){B=b;return c}});B=B||"transform"}return B}function pb(a){return Object.prototype.toString.call(a)}var I;function j(a,d){if(pb(a)=="[object Array]"){for(var b=0;b<a.length;b++)if(d(a[b],b,a))return c}else for(var e in a)if(d(a[e],e,a))return c}function xb(){if(!I){I={};j(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){I["[object "+a+"]"]=a.toLowerCase()})}return I}function z(a){return a==f?String(a):xb()[pb(a)]||"object"}function y(a,b){return{x:a,y:b}}function qb(b,a){setTimeout(b,a||0)}function G(b,d,c){var a=!b||b=="inherit"?"":b;j(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.lastIndex+1,a.length-(b.lastIndex+1));a=d+e}});a=c+(a.indexOf(" ")!=0?" ":"")+a;return a}function cb(b,a){if(l<9)b.style.filter=a}function ub(b,a,c){if(Z<9){var e=b.style.filter,g=new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),f=a?"progid:DXImageTransform.Microsoft.Matrix(M11="+a[0][0]+", M12="+a[0][1]+", M21="+a[1][0]+", M22="+a[1][1]+", SizingMethod='auto expand')":"",d=G(e,[g],f);cb(b,d);i.Jc(b,c.y);i.Ic(b,c.x)}}i.Rb=s;i.Oe=sb;i.sb=eb;i.re=ib;i.qb=A;i.E=function(){return l};i.Uc=function(){return x};i.$Delay=qb;function nb(a){a.constructor===nb.caller&&a.Qc&&a.Qc()}i.Qc=nb;i.R=function(a){if(i.Wc(a))a=e.getElementById(a);return a};function t(a){return a||g.event}t=t;i.Ce=function(a){a=t(a);return a.target||a.srcElement||e};i.lc=function(a){a=t(a);var b=e.body;return{x:a.pageX||a.clientX+(p.scrollLeft||b.scrollLeft||0)-(p.clientLeft||b.clientLeft||0)||0,y:a.pageY||a.clientY+(p.scrollTop||b.scrollTop||0)-(p.clientTop||b.clientTop||0)||0}};function E(c,d,a){if(a!=h)c.style[d]=a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&g.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,f);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function W(b,c,a,d){if(a!=h){d&&(a+="px");E(b,c,a)}else return n(E(b,c))}function o(d,a){var b=a&2,c=a?W:E;return function(e,a){return c(e,d,a,b)}}function vb(b){if(s()&&u<9){var a=/opacity=([^)]*)/.exec(b.style.filter||"");return a?n(a[1])/100:1}else return n(b.style.opacity||"1")}function wb(c,a,f){if(s()&&u<9){var h=c.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=b.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=G(h,[i],d);cb(c,g)}else c.style.opacity=a==1?"":b.round(a*100)/100}function Y(e,a){var d=a.$Rotate||0,c=a.$Scale==h?1:a.$Scale;if(A()){var k=i.xe(d/180*b.PI,c,c);ub(e,!d&&c==1?f:k,i.ve(k,a.$OriginalWidth,a.$OriginalHeight))}else{var g=v(e);if(g){var j="rotate("+d%360+"deg) scale("+c+")";if(eb()&&x>535)j+=" perspective(2000px)";e.style[g]=j}}}i.we=function(b,a){if(ab())qb(i.s(f,Y,b,a));else Y(b,a)};i.De=function(b,c){var a=v(b);if(a)b.style[a+"Origin"]=c};i.pe=function(a,c){if(s()&&u<9||u<10&&N())a.style.zoom=c==1?"":c;else{var b=v(a);if(b){var f="scale("+c+")",e=a.style[b],g=new RegExp(/[\s]*scale\(.*?\)/g),d=G(e,[g],f);a.style[b]=d}}};i.ne=function(a){if(!a.style[v(a)]||a.style[v(a)]=="none")a.style[v(a)]="perspective(2000px)"};i.Ab=function(b,a){return function(c){c=t(c);var e=c.type,d=c.relatedTarget||(e=="mouseout"?c.toElement:c.fromElement);(!d||d!==a&&!i.Ge(a,d))&&b(c)}};i.f=function(a,c,d,b){a=i.R(a);if(a.addEventListener){c=="mousewheel"&&a.addEventListener("DOMMouseScroll",d,b);a.addEventListener(c,d,b)}else if(a.attachEvent){a.attachEvent("on"+c,d);b&&a.setCapture&&a.setCapture()}};i.Ke=function(a,c,d,b){a=i.R(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};i.Ne=function(b,a){i.f(A()?e:g,"mouseup",b,a)};i.T=function(a){a=t(a);a.preventDefault&&a.preventDefault();a.cancel=c;a.returnValue=d};i.s=function(d,c){var a=[].slice.call(arguments,2),b=function(){var b=a.concat([].slice.call(arguments,0));return c.apply(d,b)};return b};i.ue=function(a,b){if(b==h)return a.textContent||a.innerText;var c=e.createTextNode(b);i.sc(a);a.appendChild(c)};i.sc=function(a){a.innerHTML=""};i.G=function(c){for(var b=[],a=c.firstChild;a;a=a.nextSibling)a.nodeType==1&&b.push(a);return b};function ob(a,c,e,b){b=b||"u";for(a=a?a.firstChild:f;a;a=a.nextSibling)if(a.nodeType==1){if(S(a,b)==c)return a;if(!e){var d=ob(a,c,e,b);if(d)return d}}}i.r=ob;function gb(a,c,d){for(a=a?a.firstChild:f;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(!d){var b=gb(a,c,d);if(b)return b}}}i.Ae=gb;i.oe=function(b,a){return b.getElementsByTagName(a)};function V(c){for(var b=1;b<arguments.length;b++){var a=arguments[b];if(a)for(var d in a)c[d]=a[d]}return c}i.j=V;i.qe=function(a){return z(a)=="function"};i.Nb=function(a){return z(a)=="array"};i.Wc=function(a){return z(a)=="string"};i.te=function(a){return!isNaN(n(a))&&isFinite(a)};i.b=j;function Q(a){return e.createElement(a)}i.M=function(){return Q("DIV",e)};i.se=function(){return Q("SPAN",e)};i.Mb=function(){};function T(b,c,a){if(a==h)return b.getAttribute(c);b.setAttribute(c,a)}function S(a,b){return T(a,b)||T(a,"data-"+b)}i.B=S;function r(b,a){if(a==h)return b.className;b.className=a}i.kc=r;i.Tb=function(a){return a.parentNode};i.I=function(a){i.Y(a,"none")};i.q=function(a,b){i.Y(a,b?"none":"")};i.He=function(b,a){b.removeAttribute(a)};i.Ee=function(){return s()&&l<10};i.Fe=function(d,c){if(c)d.style.clip="rect("+b.round(c.$Top)+"px "+b.round(c.$Right)+"px "+b.round(c.$Bottom)+"px "+b.round(c.$Left)+"px)";else{var g=d.style.cssText,f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=G(g,f,"");a.rb(d,e)}};i.A=function(){return+new Date};i.u=function(b,a){b.appendChild(a)};i.Db=function(c,b,a){c.insertBefore(b,a)};i.eb=function(b,a){b.removeChild(a)};i.Le=function(b,a){j(a,function(a){i.eb(b,a)})};i.Ie=function(a){i.Le(a,i.G(a))};i.Je=function(b,a){return parseInt(b,a||10)};function n(a){return parseFloat(a)}i.Mc=n;i.Ge=function(b,a){var c=e.body;while(a&&b!=a&&c!=a)try{a=a.parentNode}catch(f){return d}return b==a};function U(b,a){return b.cloneNode(!a)}i.db=U;function M(a){if(a){var b=a.$FlyDirection;if(b&1)a.x=a.$ScaleHorizontal||1;if(b&2)a.x=-a.$ScaleHorizontal||-1;if(b&4)a.y=a.$ScaleVertical||1;if(b&8)a.y=-a.$ScaleVertical||-1;M(a.$Brother)}}i.pb=function(a){if(a){for(var b=0;b<a.length;b++)M(a[b]);for(var c in a)M(a[c])}};function O(b,a,c){a.onload=f;a.abort=f;b&&b(a,c)}i.fb=function(d,b){if(ib()&&l<11.6||!d)O(b,f);else{var a=new Image;a.onload=i.s(f,O,b,a);a.onabort=i.s(f,O,b,a,c);a.src=d}};i.md=function(e,b,f){var d=e.length+1;function c(a){d--;if(b&&a&&a.src==b.src)b=a;!d&&f&&f(b)}j(e,function(b){a.fb(b.src,c)});c()};i.Xc=function(c,j,i,h){if(h)c=U(c);for(var g=a.oe(c,j),e=g.length-1;e>-1;e--){var b=g[e],d=U(i);r(d,r(b));a.rb(d,b.style.cssText);var f=a.Tb(b);a.Db(f,d,b);a.eb(f,b)}return c};var C;function zb(b){var g=this,m,k,l,e;function f(){var a=m;if(e)a+="ds";else if(k)a+="dn";else if(l)a+="av";r(b,a)}function n(a){if(e)i.T(a);else{C.push(g);k=c;f()}}g.pd=function(){k=d;f()};g.rc=function(a){if(a!=h){l=a;f()}else return l};g.$Enable=function(a){if(a!=h){e=!a;f()}else return!e};b=i.R(b);if(!C){i.Ne(function(){var a=C;C=[];j(a,function(a){a.pd()})});C=[]}m=r(b);a.f(b,"mousedown",n)}i.Cb=function(a){return new zb(a)};i.zb=E;i.lb=o("overflow");i.m=o("top",2);i.l=o("left",2);i.i=o("width",2);i.g=o("height",2);i.Ic=o("marginLeft",2);i.Jc=o("marginTop",2);i.v=o("position");i.Y=o("display");i.D=o("zIndex",1);i.Qb=function(b,a,c){if(a!=h)wb(b,a,c);else return vb(b)};i.rb=function(a,b){if(b!=h)a.style.cssText=b;else return a.style.cssText};var R={$Opacity:i.Qb,$Top:i.m,$Left:i.l,Sb:i.i,cc:i.g,ob:i.v,bg:i.Y,$ZIndex:i.D},w;function H(){if(!w)w=V({dg:i.Jc,cg:i.Ic,$Clip:i.Fe,ab:i.we},R);return w}function kb(){H();w.ab=w.ab;return w}i.Wd=H;i.Yd=kb;i.ae=function(c,b){H();var a={};j(b,function(d,b){if(R[b])a[b]=R[b](c)});return a};i.N=function(c,b){var a=H();j(b,function(d,b){a[b]&&a[b](c,d)})};m=new function(){var a=this;function b(d,g){for(var j=d[0].length,i=d.length,h=g[0].length,f=[],c=0;c<i;c++)for(var k=f[c]=[],b=0;b<h;b++){for(var e=0,a=0;a<j;a++)e+=d[c][a]*g[a][b];k[b]=e}return f}a.ub=function(d,c){var a=b(d,[[c.x],[c.y]]);return y(a[0][0],a[1][0])}};i.xe=function(d,a,c){var e=b.cos(d),f=b.sin(d);return[[e*a,-f*c],[f*a,e*c]]};i.ve=function(d,c,a){var e=m.ub(d,y(-c/2,-a/2)),f=m.ub(d,y(c/2,-a/2)),g=m.ub(d,y(c/2,a/2)),h=m.ub(d,y(-c/2,a/2));return y(b.min(e.x,f.x,g.x,h.x)+c/2,b.min(e.y,f.y,g.y,h.y)+a/2)};i.ab=function(j,k,t,q,u,w,h){var c=k;if(j){c={};for(var e in k){var x=w[e]||1,r=u[e]||[0,1],d=(t-r[0])/r[1];d=b.min(b.max(d,0),1);d=d*x;var o=b.floor(d);if(d!=o)d-=o;var v=q[e]||q.L,p=v(d),g,s=j[e],n=k[e];if(a.te(n))g=s+(n-s)*p;else{g=a.j({W:{}},j[e]);a.b(n.W,function(c,b){var a=c*p;g.W[b]=a;g[b]+=a})}c[e]=g}if(j.$Zoom)c.ab={$Rotate:c.$Rotate||0,$Scale:c.$Zoom,$OriginalWidth:h.$OriginalWidth,$OriginalHeight:h.$OriginalHeight}}if(k.$Clip&&h.$Move){var i=c.$Clip.W,m=(i.$Top||0)+(i.$Bottom||0),l=(i.$Left||0)+(i.$Right||0);c.$Left=(c.$Left||0)+l;c.$Top=(c.$Top||0)+m;c.$Clip.$Left-=l;c.$Clip.$Right-=l;c.$Clip.$Top-=m;c.$Clip.$Bottom-=m}if(c.$Clip&&a.Ee()&&!c.$Clip.$Top&&!c.$Clip.$Left&&c.$Clip.$Right==h.$OriginalWidth&&c.$Clip.$Bottom==h.$OriginalHeight)c.$Clip=f;return c}},l=function(){var b=this,d=[];function i(a,b){d.push({Ob:a,Pb:b})}function h(b,c){a.b(d,function(a,e){a.Ob==b&&a.Pb===c&&d.splice(e,1)})}b.$On=b.addEventListener=i;b.$Off=b.removeEventListener=h;b.e=function(b){var c=[].slice.call(arguments,1);a.b(d,function(a){try{a.Ob==b&&a.Pb.apply(g,c)}catch(d){}})}};i=function(m,l,g,N,L,H){m=m||0;var e=this,q,n,o,w,x=0,E,F,D,z,i=0,s=0,A,j=m,h,f,p,t=[],y;function I(b){h+=b;f+=b;j+=b;i+=b;s+=b;a.b(t,function(a){a,a.$Shift(b)})}function M(a,b){var c=a-h+m*b;I(c);return f}function v(n,o){var d=n;if(p&&(d>=f||d<=h))d=((d-h)%p+p)%p+h;if(!A||w||o||i!=d){var k=b.min(d,f);k=b.max(k,h);if(!A||w||o||k!=s){if(H){var m=(k-j)/(l||1);if(g.ge&&a.sb()&&l)m=b.round(m/16*l)*16/l;if(g.$Reverse)m=1-m;var q=a.ab(L,H,m,E,D,F,g);a.b(q,function(b,a){y[a]&&y[a](N,b)})}e.Ib(s-j,k-j)}s=k;a.b(t,function(b,c){var a=n<i?t[t.length-c-1]:b;a.C(n,o)});var u=i,r=n;i=d;A=c;e.Bb(u,r)}}function B(a,c){c&&a.yb(f,1);f=b.max(f,a.Q());t.push(a)}function G(){if(q){var d=a.A(),e=b.min(d-x,80),c=i+e*o;x=d;if(c*o>=n*o)c=n;v(c);if(!w&&c*o>=n*o)J(z);else a.$Delay(G,g.$Interval)}}function u(d,g,j){if(!q){q=c;w=j;z=g;d=b.max(d,h);d=b.min(d,f);n=d;o=n<i?-1:1;e.mc();x=a.A();G()}}function J(a){if(q){w=q=z=d;e.nc();a&&a()}}e.$Play=function(a,b,c){u(a?i+a:f,b,c)};e.Sc=u;e.S=J;e.td=function(a){u(a)};e.H=function(){return i};e.Hc=function(){return n};e.gb=function(){return s};e.C=v;e.Ub=function(){v(h,c)};e.$Move=function(a){v(i+a)};e.$IsPlaying=function(){return q};e.Ld=function(a){p=a};e.yb=M;e.$Shift=I;e.P=function(a){B(a,0)};e.Hb=function(a){B(a,1)};e.Q=function(){return f};e.Bb=e.mc=e.nc=e.Ib=a.Mb;e.Fb=a.A();g=a.j({$Interval:15},g);p=g.Nc;y=a.j({},a.Wd(),g.Oc);h=j=m;f=m+l;F=g.$Round||{};D=g.$During||{};E=a.j({L:a.qe(g.$Easing)&&g.$Easing||k.$EaseSwing},g.$Easing)};var q;new function(){;function m(q,kc){var j=this;function Fc(){var a=this;i.call(a,-1e8,2e8);a.Nd=function(){var c=a.gb(),d=b.floor(c),f=u(d),e=c-b.floor(c);return{K:f,Od:d,ob:e}};a.Bb=function(d,a){var e=b.floor(a);if(e!=a&&a>d)e++;Xb(e,c);j.e(m.$EVT_POSITION_CHANGE,u(a),u(d),a,d)}}function Ec(){var b=this;i.call(b,0,0,{Nc:t});a.b(D,function(a){M&1&&a.Ld(t);b.Hb(a);a.$Shift(lb/ec)})}function Dc(){var a=this,b=Wb.$Elmt;i.call(a,-1,2,{$Easing:k.$EaseLinear,Oc:{ob:cc},Nc:t},b,{ob:1},{ob:-1});a.vb=b}function sc(q,p){var e=this,k,l,g,n,h;i.call(e,-1e8,2e8);e.mc=function(){T=c;Y=f;j.e(m.$EVT_SWIPE_START,u(y.H()),y.H())};e.nc=function(){T=d;n=d;var a=y.Nd();j.e(m.$EVT_SWIPE_END,u(y.H()),y.H());!a.ob&&Hc(a.Od,s)};e.Bb=function(f,e){var d;if(n)d=h;else{d=l;if(g){var c=e/g;if(a.sb()||a.Oe()){b.round(c*16/g)/16*g;if(a.E()<38)c=parseFloat(c.toFixed(4))}d=o.$SlideEasing(c)*(l-k)+k}}y.C(d)};e.xb=function(a,c,b,d){k=a;l=c;g=b;y.C(a);e.C(0);e.Sc(b,d)};e.ud=function(a){n=c;h=a;e.$Play(a,f,c)};e.sd=function(a){h=a};y=new Fc;y.P(q);y.P(p)}function tc(){var c=this,b=bc();a.D(b,0);c.$Elmt=b;c.tb=function(){a.I(b);a.sc(b)}}function Cc(p,n){var e=this,r,x,H,y,g,A=[],R,q,T,G,P,F,h,w,k;i.call(e,-v,v+1,{});function E(a){x&&x.fc();r&&r.fc();S(p,a);F=c;r=new I.$Class(p,I,1);x=new I.$Class(p,I);x.Ub();r.Ub()}function Z(){r.Fb<I.Fb&&E()}function M(n,q,l){if(!G){G=c;if(g&&l){var f=l.width,b=l.height,k=f,i=b;if(f&&b&&o.$FillMode){if(o.$FillMode&3&&(!(o.$FillMode&4)||f>L||b>K)){var h=d,p=L/K*b/f;if(o.$FillMode&1)h=p>1;else if(o.$FillMode&2)h=p<1;k=h?f*K/b:L;i=h?K:b*L/f}a.i(g,k);a.g(g,i);a.m(g,(K-i)/2);a.l(g,(L-k)/2)}a.v(g,"absolute");j.e(m.$EVT_LOAD_END,hc)}}a.I(q);n&&n(e)}function X(b,c,d,f){if(f==Y&&s==n&&U)if(!Gc){var a=u(b);B.Id(a,n,c,e,d);c.Bd();fb.yb(a,1);fb.C(a);z.xb(b,b,0)}}function ab(b){if(b==Y&&s==n){if(!h){var a=f;if(B)if(B.K==n)a=B.Jd();else B.tb();Z();h=new Ac(n,a,e.Cd(),e.Ad());h.Rc(k)}!h.$IsPlaying()&&h.Wb()}}function Q(d,c){if(d==n){if(d!=c)D[c]&&D[c].yd();else h&&h.zd();k&&k.$Enable();var j=Y=a.A();e.fb(a.s(f,ab,j))}else{var i=b.abs(n-d),g=v+o.$LazyLoading;(!P||i<=g||t-i<=g)&&e.fb()}}function bb(){if(s==n&&h){h.S();k&&k.$Quit();k&&k.$Disable();h.pc()}}function cb(){s==n&&h&&h.S()}function O(b){if(W)a.T(b);else j.e(m.$EVT_CLICK,n,b)}function N(){k=w.pInstance;h&&h.Rc(k)}e.fb=function(d,b){b=b||y;if(A.length&&!G){a.q(b);if(!T){T=c;j.e(m.$EVT_LOAD_START);a.b(A,function(b){if(!b.src){b.src=a.B(b,"src2");a.Y(b,b["display-origin"])}})}a.md(A,g,a.s(f,M,d,b))}else M(d,b)};e.ce=function(){if(B){var b=B.Hd(t);if(b){var e=Y=a.A(),c=n+ac,d=D[u(c)];return d.fb(a.s(f,X,c,d,b,e),y)}}gb(s+o.$AutoPlaySteps*ac)};e.hc=function(){Q(n,n)};e.yd=function(){k&&k.$Quit();k&&k.$Disable();e.zc();h&&h.le();h=f;E()};e.Bd=function(){a.I(p)};e.zc=function(){a.q(p)};e.je=function(){k&&k.$Enable()};function S(b,e,d){if(b["jssor-slider"])return;d=d||0;if(!F){if(b.tagName=="IMG"){A.push(b);if(!b.src){P=c;b["display-origin"]=a.Y(b);a.I(b)}}a.qb()&&a.D(b,(a.D(b)||0)+1);if(o.$HWA&&a.Uc()>0)(!J||a.Uc()<534||!jb)&&a.ne(b)}var f=a.G(b);a.b(f,function(f){var i=a.B(f,"u");if(i=="player"&&!w){w=f;if(w.pInstance)N();else a.f(w,"dataavailable",N)}if(i=="caption"){if(!a.Rb()&&!e){var h=a.db(f);a.Db(b,h,f);a.eb(b,f);f=h;e=c}}else if(!F&&!d&&!g&&a.B(f,"u")=="image"){g=f;if(g){if(g.tagName=="A"){R=g;a.N(R,V);q=a.db(g,c);a.f(q,"click",O);a.N(q,V);a.Y(q,"block");a.Qb(q,0);a.zb(q,"backgroundColor","#000");g=a.Ae(g,"IMG")}g.border=0;a.N(g,V)}}S(f,e,d+1)})}e.Ib=function(c,b){var a=v-b;cc(H,a)};e.Cd=function(){return r};e.Ad=function(){return x};e.K=n;l.call(e);var C=a.r(p,"thumb",c);if(C){e.ie=a.db(C);a.He(C,"id");a.I(C)}a.q(p);y=a.db(ib);a.D(y,1e3);a.f(p,"click",O);E(c);e.Pc=g;e.Cc=q;e.vb=H=p;a.u(H,y);j.$On(203,Q);j.$On(28,cb);j.$On(24,bb)}function Ac(h,q,v,u){var b=this,l=0,x=0,n,g,e,f,k,r,w,t,p=D[h];i.call(b,0,0);function y(){a.Ie(P);ic&&k&&p.Cc&&a.u(P,p.Cc);a.q(P,!k&&p.Pc)}function z(){if(r){r=d;j.e(m.$EVT_ROLLBACK_END,h,e,l,g,e,f);b.C(g)}b.Wb()}function A(a){t=a;b.S();b.Wb()}b.Wb=function(){var a=b.gb();if(!C&&!T&&!t&&s==h){if(!a){if(n&&!k){k=c;b.pc(c);j.e(m.$EVT_SLIDESHOW_START,h,l,x,n,f)}y()}var d,o=m.$EVT_STATE_CHANGE;if(a!=f)if(a==e)d=f;else if(a==g)d=e;else if(!a)d=g;else if(a>e){r=c;d=e;o=m.$EVT_ROLLBACK_START}else d=b.Hc();j.e(o,h,a,l,g,e,f);var i=U&&(!Q||G);if(a==f)i&&p.ce();else(i||a!=e)&&b.Sc(d,z)}};b.zd=function(){e==f&&e==b.gb()&&b.C(g)};b.le=function(){B&&B.K==h&&B.tb();var a=b.gb();a<f&&j.e(m.$EVT_STATE_CHANGE,h,-a-1,l,g,e,f)};b.pc=function(b){q&&a.lb(nb,b&&q.ib.$Outside?"":"hidden")};b.Ib=function(b,a){if(k&&a>=n){k=d;y();p.zc();B.tb();j.e(m.$EVT_SLIDESHOW_END,h,l,x,n,f)}j.e(m.$EVT_PROGRESS_CHANGE,h,a,l,g,e,f)};b.Rc=function(a){if(a&&!w){w=a;a.$On($JssorPlayer$.Ed,A)}};q&&b.Hb(q);n=b.Q();b.Q();b.Hb(v);g=v.Q();e=g+o.$AutoPlayInterval;u.$Shift(e);b.P(u);f=b.Q()}function cc(e,g){var f=x>0?x:mb,c=Eb*g*(f&1),d=Fb*g*(f>>1&1);if(a.sb()&&a.E()<38){c=c.toFixed(3);d=d.toFixed(3)}else{c=b.round(c);d=b.round(d)}if(a.Rb()&&a.E()>=10&&a.E()<11)e.style.msTransform="translate("+c+"px, "+d+"px)";else if(a.sb()&&a.E()>=30&&a.E()<34){e.style.WebkitTransition="transform 0s";e.style.WebkitTransform="translate3d("+c+"px, "+d+"px, 0px) perspective(2000px)"}else{a.l(e,c);a.m(e,d)}}function yc(c){var b=a.Ce(c).tagName;!N&&b!="INPUT"&&b!="TEXTAREA"&&b!="SELECT"&&wc()&&xc(c)}function Lb(){ub=T;Pb=z.Hc();E=y.H();if(C||!G&&Q&12){z.S();j.e(m.Zd)}}function jc(e){if(!C&&(G||!(Q&12))&&!z.$IsPlaying()){var c=y.H(),a=b.ceil(E);if(e&&b.abs(F)>=o.$MinDragOffsetToSlide){a=b.ceil(c);a+=kb}if(!(M&1))a=b.min(t-v,b.max(a,0));var d=b.abs(a-c);d=1-b.pow(1-d,5);if(!W&&ub)z.td(Pb);else if(c==a){xb.je();xb.hc()}else z.xb(c,a,d*Yb)}}function xc(b){C=c;Db=d;Y=f;a.f(e,sb,fc);a.A();W=0;Lb();if(!ub)x=0;if(J){var h=b.touches[0];yb=h.clientX;zb=h.clientY}else{var g=a.lc(b);yb=g.x;zb=g.y;a.T(b)}F=0;hb=0;kb=0;j.e(m.$EVT_DRAG_START,u(E),E,b)}function fc(e){if(C&&(!a.qb()||e.button)){var f;if(J){var l=e.touches;if(l&&l.length>0)f={x:l[0].clientX,y:l[0].clientY}}else f=a.lc(e);if(f){var j=f.x-yb,k=f.y-zb;if(b.floor(E)!=E)x=x||mb&N;if((j||k)&&!x){if(N==3)if(b.abs(k)>b.abs(j))x=2;else x=1;else x=N;if(J&&x==1&&b.abs(k)-b.abs(j)>3)Db=c}if(x){var d=k,i=Fb;if(x==1){d=j;i=Eb}if(!(M&1)){if(d>0){var g=i*s,h=d-g;if(h>0)d=g+b.sqrt(h)*5}if(d<0){var g=i*(t-v-s),h=-d-g;if(h>0)d=-g-b.sqrt(h)*5}}if(F-hb<-2)kb=0;else if(F-hb>2)kb=-1;hb=F;F=d;wb=E-F/i/(eb||1);if(F&&x&&!Db){a.T(e);if(!T)z.ud(wb);else z.sd(wb)}else a.qb()&&a.T(e)}}}else Ib(e)}function Ib(f){uc();if(C){C=d;a.A();a.Ke(e,sb,fc);W=F;W&&a.T(f);z.S();var b=y.H();j.e(m.$EVT_DRAG_END,u(b),b,u(E),E,f);jc(c);Lb()}}function rc(a){D[s];s=u(a);xb=D[s];Xb(a);return s}function Hc(a,b){x=0;rc(a);j.e(m.$EVT_PARK,u(a),b)}function Xb(b,c){Bb=b;a.b(S,function(a){a.dc(u(b),b,c)})}function wc(){var b=m.xc||0,a=R;if(J)a&1&&(a&=1);m.xc|=a;return N=a&~b}function uc(){if(N){m.xc&=~R;N=0}}function bc(){var b=a.M();a.N(b,V);a.v(b,"absolute");return b}function u(a){return(a%t+t)%t}function oc(a,c){if(c)if(!M){a=b.min(b.max(a+Bb,0),t-v);c=d}else if(M&2){a=u(a+Bb);c=d}gb(a,o.$SlideDuration,c)}function Cb(){a.b(S,function(a){a.gc(a.wb.$ChanceToShow<=G)})}function mc(){if(!G){G=1;Cb();if(!C){Q&12&&jc();Q&3&&D[s].hc()}}}function lc(){if(G){G=0;Cb();C||!(Q&12)||Lb()}}function nc(){V={Sb:L,cc:K,$Top:0,$Left:0};a.b(Z,function(b){a.N(b,V);a.v(b,"absolute");a.lb(b,"hidden");a.I(b)});a.N(ib,V)}function qb(b,a){gb(b,a,c)}function gb(g,f,k){if(Ub&&(!C||o.$NaviQuitDrag)){T=c;C=d;z.S();if(f==h)f=Yb;var e=Jb.gb(),a=g;if(k){a=e+g;if(g>0)a=b.ceil(a);else a=b.floor(a)}if(!(M&1)){a=u(a);a=b.max(0,b.min(a,t-v))}var j=(a-e)%t;a=e+j;var i=e==a?0:f*b.abs(j);i=b.min(i,f*v*1.5);z.xb(e,a,i||1)}}j.$PlayTo=gb;j.$GoTo=function(a){gb(a,1)};j.$Next=function(){qb(1)};j.$Prev=function(){qb(-1)};j.$Pause=function(){U=d};j.$Play=function(){if(!U){U=c;D[s]&&D[s].hc()}};j.$SetSlideshowTransitions=function(b){a.pb(b);o.$SlideshowOptions.$Transitions=b};j.$SetCaptionTransitions=function(b){a.pb(b);I.$CaptionTransitions=b;I.Fb=a.A()};j.$SlidesCount=function(){return Z.length};j.$CurrentIndex=function(){return s};j.$IsAutoPlaying=function(){return U};j.$IsDragging=function(){return C};j.$IsSliding=function(){return T};j.$IsMouseOver=function(){return!G};j.$LastDragSucceded=function(){return W};function db(){return a.i(w||q)}function ob(){return a.g(w||q)}j.$OriginalWidth=j.$GetOriginalWidth=db;j.$OriginalHeight=j.$GetOriginalHeight=ob;function Mb(c,f){if(c==h)return a.i(q);if(!w){var b=a.M(e);a.rb(b,a.rb(q));a.kc(b,a.kc(q));a.v(b,"relative");a.m(b,0);a.l(b,0);a.lb(b,"visible");w=a.M(e);a.v(w,"absolute");a.m(w,0);a.l(w,0);a.i(w,a.i(q));a.g(w,a.g(q));a.De(w,"0 0");a.u(w,b);var i=a.G(q);a.u(q,w);a.zb(q,"backgroundImage","");var g={navigator:bb&&bb.$Scale==d,arrowleft:O&&O.$Scale==d,arrowright:O&&O.$Scale==d,thumbnavigator:H&&H.$Scale==d,thumbwrapper:H&&H.$Scale==d};a.b(i,function(c){a.u(g[a.B(c,"u")]?q:b,c)});a.q(b);a.q(w)}eb=c/(f?a.g:a.i)(w);a.pe(w,eb);a.i(q,f?eb*db():c);a.g(q,f?c:eb*ob());a.b(S,function(a){a.bc()})}j.$ScaleHeight=j.$GetScaleHeight=function(b){if(b==h)return a.g(q);Mb(b,c)};j.$ScaleWidth=j.$SetScaleWidth=j.$GetScaleWidth=Mb;j.Dc=function(a){var d=b.ceil(u(lb/ec)),c=u(a-s+d);if(c>v){if(a-s>t/2)a-=t;else if(a-s<=-t/2)a+=t}else a=s+c-d;return a};l.call(this);j.$Elmt=q=a.R(q);var o=a.j({$FillMode:0,$LazyLoading:1,$StartIndex:0,$AutoPlay:d,$Loop:1,$HWA:c,$NaviQuitDrag:c,$AutoPlaySteps:1,$AutoPlayInterval:3e3,$PauseOnHover:1,$SlideDuration:500,$SlideEasing:k.$EaseOutQuad,$MinDragOffsetToSlide:20,$SlideSpacing:0,$DisplayPieces:1,$ParkingPosition:0,$UISearchMode:1,$PlayOrientation:1,$DragOrientation:1},kc),mb=o.$PlayOrientation&3,ac=(o.$PlayOrientation&4)/-4||1,cb=o.$SlideshowOptions,I=a.j({$Class:r,$PlayInMode:1,$PlayOutMode:1},o.$CaptionSliderOptions);a.pb(I.$CaptionTransitions);var bb=o.$BulletNavigatorOptions,O=o.$ArrowNavigatorOptions,H=o.$ThumbnailNavigatorOptions,X=!o.$UISearchMode,w,A=a.r(q,"slides",X),ib=a.r(q,"loading",X)||a.M(e),Ob=a.r(q,"navigator",X),gc=a.r(q,"arrowleft",X),dc=a.r(q,"arrowright",X),Nb=a.r(q,"thumbnavigator",X),qc=a.i(A),pc=a.g(A),V,Z=[],zc=a.G(A);a.b(zc,function(b){b.tagName=="DIV"&&!a.B(b,"u")&&Z.push(b)});var s=-1,Bb,xb,t=Z.length,L=o.$SlideWidth||qc,K=o.$SlideHeight||pc,Zb=o.$SlideSpacing,Eb=L+Zb,Fb=K+Zb,ec=mb&1?Eb:Fb,v=b.min(o.$DisplayPieces,t),nb,x,N,Db,J,S=[],Tb,Vb,Sb,ic,Gc,U,Q=o.$PauseOnHover,Yb=o.$SlideDuration,vb,jb,lb,Ub=v<t,M=Ub?o.$Loop:0,R,W,G=1,T,C,Y,yb=0,zb=0,F,hb,kb,Jb,y,fb,z,Wb=new tc,eb;U=o.$AutoPlay;j.wb=kc;nc();q["jssor-slider"]=c;a.D(A,a.D(A)||0);a.v(A,"absolute");nb=a.db(A);a.Db(a.Tb(A),nb,A);if(cb){ic=cb.$ShowLink;vb=cb.$Class;a.pb(cb.$Transitions);jb=v==1&&t>1&&vb&&(!a.Rb()||a.E()>=8)}lb=jb||v>=t||!(M&1)?0:o.$ParkingPosition;R=(v>1||lb?mb:-1)&o.$DragOrientation;var Ab=A,D=[],B,P,Hb="mousedown",sb="mousemove",Kb="mouseup",rb,E,ub,Pb,wb,ab;if(g.navigator.pointerEnabled||(ab=g.navigator.msPointerEnabled)){Hb=ab?"MSPointerDown":"pointerdown";sb=ab?"MSPointerMove":"pointermove";Kb=ab?"MSPointerUp":"pointerup";rb=ab?"MSPointerCancel":"pointercancel";if(R){var Gb="none";if(R==1)Gb="pan-y";else if(R==2)Gb="pan-x";a.zb(Ab,ab?"msTouchAction":"touchAction",Gb)}}else if("ontouchstart"in g||"createTouch"in e){J=c;Hb="touchstart";sb="touchmove";Kb="touchend";rb="touchcancel"}fb=new Dc;if(jb)B=new vb(Wb,L,K,cb,J);a.u(nb,fb.vb);a.lb(A,"hidden");P=bc();a.zb(P,"backgroundColor","#000");a.Qb(P,0);a.Db(Ab,P,Ab.firstChild);for(var tb=0;tb<Z.length;tb++){var Bc=Z[tb],hc=new Cc(Bc,tb);D.push(hc)}a.I(ib);Jb=new Ec;z=new sc(Jb,fb);if(R){a.f(A,Hb,yc);a.f(e,Kb,Ib);rb&&a.f(e,rb,Ib)}Q&=J?10:5;if(Ob&&bb){Tb=new bb.$Class(Ob,bb,db(),ob());S.push(Tb)}if(O&&gc&&dc){Vb=new O.$Class(gc,dc,O,db(),ob());S.push(Vb)}if(Nb&&H){H.$StartIndex=o.$StartIndex;Sb=new H.$Class(Nb,H);S.push(Sb)}a.b(S,function(a){a.ec(t,D,ib);a.$On(n.Eb,oc)});Mb(db());a.f(q,"mouseout",a.Ab(mc,q));a.f(q,"mouseover",a.Ab(lc,q));Cb();o.$ArrowKeyNavigation&&a.f(e,"keydown",function(a){if(a.keyCode==p.Pe)qb(-1);else a.keyCode==p.Me&&qb(1)});var pb=o.$StartIndex;if(!(M&1))pb=b.max(0,b.min(pb,t-v));z.xb(pb,pb,0)}m.$EVT_CLICK=21;m.$EVT_DRAG_START=22;m.$EVT_DRAG_END=23;m.$EVT_SWIPE_START=24;m.$EVT_SWIPE_END=25;m.$EVT_LOAD_START=26;m.$EVT_LOAD_END=27;m.Zd=28;m.$EVT_POSITION_CHANGE=202;m.$EVT_PARK=203;m.$EVT_SLIDESHOW_START=206;m.$EVT_SLIDESHOW_END=207;m.$EVT_PROGRESS_CHANGE=208;m.$EVT_STATE_CHANGE=209;m.$EVT_ROLLBACK_START=210;m.$EVT_ROLLBACK_END=211;g.$JssorSlider$=q=m};var n={Eb:1};g.$JssorBulletNavigator$=function(g,F,E,C){var h=this;l.call(h);g=a.R(g);var t,u,s,r,m=0,e,o,k,y,z,j,i,q,p,D=[],A=[];function x(a){a!=-1&&A[a].rc(a==m)}function v(a){h.e(n.Eb,a*o)}h.$Elmt=g;h.dc=function(a){if(a!=r){var d=m,c=b.floor(a/o);m=c;r=a;x(d);x(c)}};h.gc=function(b){a.q(g,b)};var B;h.bc=function(){if(!B||e.$Scale==d){e.$AutoCenter&1&&a.l(g,(E-u)/2);e.$AutoCenter&2&&a.m(g,(C-s)/2);B=c}};var w;h.ec=function(C){if(!w){t=b.ceil(C/o);m=0;var n=q+y,r=p+z,l=b.ceil(t/k)-1;u=q+n*(!j?l:k-1);s=p+r*(j?l:k-1);a.i(g,u);a.g(g,s);for(var d=0;d<t;d++){var B=a.se();a.ue(B,d+1);var h=a.Xc(i,"NumberTemplate",B,c);a.v(h,"absolute");var x=d%(l+1);a.l(h,!j?n*x:d%k*n);a.m(h,j?r*x:b.floor(d/(l+1))*r);a.u(g,h);D[d]=h;e.$ActionMode&1&&a.f(h,"click",a.s(f,v,d));e.$ActionMode&2&&a.f(h,"mouseover",a.Ab(a.s(f,v,d),h));A[d]=a.Cb(h)}w=c}};h.wb=e=a.j({$SpacingX:0,$SpacingY:0,$Orientation:1,$ActionMode:1},F);i=a.r(g,"prototype");q=a.i(i);p=a.g(i);a.eb(g,i);o=e.$Steps||1;k=e.$Lanes||1;y=e.$SpacingX;z=e.$SpacingY;j=e.$Orientation-1};g.$JssorArrowNavigator$=function(e,g,t,o,m){var b=this;l.call(b);var h,j,r=a.i(e),p=a.g(e);function k(a){b.e(n.Eb,a,c)}b.dc=function(b,a,c){if(c);};b.gc=function(b){a.q(e,b);a.q(g,b)};var s;b.bc=function(){if(!s||h.$Scale==d){if(h.$AutoCenter&1){a.l(e,(o-r)/2);a.l(g,(o-r)/2)}if(h.$AutoCenter&2){a.m(e,(m-p)/2);a.m(g,(m-p)/2)}s=c}};var q;b.ec=function(b){if(!q){a.f(e,"click",a.s(f,k,-j));a.f(g,"click",a.s(f,k,j));a.Cb(e);a.Cb(g);q=c}};b.wb=h=a.j({$Steps:1},t);j=h.$Steps};g.$JssorThumbnailNavigator$=function(i,A){var h=this,x,m,e,u=[],y,w,f,o,p,t,s,k,r,g,j;l.call(h);i=a.R(i);function z(o,d){var g=this,b,l,k;function p(){l.rc(m==d)}function i(){if(!r.$LastDragSucceded()){var a=f-d%f,b=r.Dc((d+a)/f-1),c=b*f+f-a;h.e(n.Eb,c)}}g.K=d;g.Lc=p;k=o.ie||o.Pc||a.M();g.vb=b=a.Xc(j,"ThumbnailTemplate",k,c);l=a.Cb(b);e.$ActionMode&1&&a.f(b,"click",i);e.$ActionMode&2&&a.f(b,"mouseover",a.Ab(i,b))}h.dc=function(c,d,e){var a=m;m=c;a!=-1&&u[a].Lc();u[c].Lc();!e&&r.$PlayTo(r.Dc(b.floor(d/f)))};h.gc=function(b){a.q(i,b)};h.bc=a.Mb;var v;h.ec=function(F,D){if(!v){x=F;b.ceil(x/f);m=-1;k=b.min(k,D.length);var h=e.$Orientation&1,n=t+(t+o)*(f-1)*(1-h),l=s+(s+p)*(f-1)*h,C=n+(n+o)*(k-1)*h,A=l+(l+p)*(k-1)*(1-h);a.v(g,"absolute");a.lb(g,"hidden");e.$AutoCenter&1&&a.l(g,(y-C)/2);e.$AutoCenter&2&&a.m(g,(w-A)/2);a.i(g,C);a.g(g,A);var j=[];a.b(D,function(l,e){var i=new z(l,e),d=i.vb,c=b.floor(e/f),k=e%f;a.l(d,(t+o)*k*(1-h));a.m(d,(s+p)*k*h);if(!j[c]){j[c]=a.M();a.u(g,j[c])}a.u(j[c],d);u.push(i)});var E=a.j({$AutoPlay:d,$NaviQuitDrag:d,$SlideWidth:n,$SlideHeight:l,$SlideSpacing:o*h+p*(1-h),$MinDragOffsetToSlide:12,$SlideDuration:200,$PauseOnHover:1,$PlayOrientation:e.$Orientation,$DragOrientation:e.$DisableDrag?0:e.$Orientation},e);r=new q(i,E);v=c}};h.wb=e=a.j({$SpacingX:3,$SpacingY:3,$DisplayPieces:1,$Orientation:1,$AutoCenter:3,$ActionMode:1},A);y=a.i(i);w=a.g(i);g=a.r(i,"slides",c);j=a.r(g,"prototype");t=a.i(j);s=a.g(j);a.eb(g,j);f=e.$Lanes||1;o=e.$SpacingX;p=e.$SpacingY;k=e.$DisplayPieces};function r(){i.call(this,0,0);this.fc=a.Mb}g.$JssorCaptionSlider$=function(q,k,g){var d=this,j,o=g?k.$PlayInMode:k.$PlayOutMode,f=k.$CaptionTransitions,p={ib:"t",$Delay:"d",$Duration:"du",x:"x",y:"y",$Rotate:"r",$Zoom:"z",$Opacity:"f",X:"b"},e={L:function(b,a){if(!isNaN(a.bb))b=a.bb;else b*=a.cd;return b},$Opacity:function(b,a){return this.L(b-1,a)}};e.$Zoom=e.$Opacity;i.call(d,0,0);function m(r,l){var k=[],i,j=[],c=[];function h(c,d){var b={};a.b(p,function(g,h){var e=a.B(c,g+(d||""));if(e){var f={};if(g=="t")f.bb=e;else if(e.indexOf("%")+1)f.cd=a.Mc(e)/100;else f.bb=a.Mc(e);b[h]=f}});return b}function n(){return f[b.floor(b.random()*f.length)]}function d(g){var h;if(g=="*")h=n();else if(g){var e=f[a.Je(g)]||f[g];if(a.Nb(e)){if(g!=i){i=g;c[g]=0;j[g]=e[b.floor(b.random()*e.length)]}else c[g]++;e=j[g];if(a.Nb(e)){e=e.length&&e[c[g]%e.length];if(a.Nb(e))e=e[b.floor(b.random()*e.length)]}}h=e;if(a.Wc(h))h=d(h)}return h}var q=a.G(r);a.b(q,function(b){var c=[];c.$Elmt=b;var f=a.B(b,"u")=="caption";a.b(g?[0,3]:[2],function(k,n){if(f){var j,g;if(k!=2||!a.B(b,"t3")){g=h(b,k);if(k==2&&!g.ib){g.$Delay=g.$Delay||{bb:0};g=a.j(h(b,0),g)}}if(g&&g.ib){j=d(g.ib.bb);if(j){var i=a.j({$Delay:0},j);a.b(g,function(c,a){var b=(e[a]||e.L).apply(e,[i[a],g[a]]);if(!isNaN(b))i[a]=b});if(!n)if(g.X)i.X=g.X.bb||0;else if(o&2)i.X=0}}c.push(i)}if(l%2&&!n)c.G=m(b,l+1)});k.push(c)});return k}function n(x,d,A){var h={$Easing:d.$Easing,$Round:d.$Round,$During:d.$During,$Reverse:g&&!A,ge:c},j=x,s=a.Tb(x),n=a.i(j),m=a.g(j),z=a.i(s),y=a.g(s),f={},k={},l=d.$ScaleClip||1;if(d.$Opacity)f.$Opacity=2-d.$Opacity;h.$OriginalWidth=n;h.$OriginalHeight=m;if(d.$Zoom||d.$Rotate){f.$Zoom=d.$Zoom?d.$Zoom-1:1;if(a.qb()||a.re())f.$Zoom=b.min(f.$Zoom,2);k.$Zoom=1;var C=d.$Rotate||0;f.$Rotate=C*360;k.$Rotate=0}else if(d.$Clip){var t={$Top:0,$Right:n,$Bottom:m,$Left:0},w=a.j({},t),e=w.W={},v=d.$Clip&4,q=d.$Clip&8,u=d.$Clip&1,r=d.$Clip&2;if(v&&q){e.$Top=m/2*l;e.$Bottom=-e.$Top}else if(v)e.$Bottom=-m*l;else if(q)e.$Top=m*l;if(u&&r){e.$Left=n/2*l;e.$Right=-e.$Left}else if(u)e.$Right=-n*l;else if(r)e.$Left=n*l;h.$Move=d.$Move;f.$Clip=w;k.$Clip=t}var o=0,p=0;if(d.x)o-=z*d.x;if(d.y)p-=y*d.y;if(o||p||h.$Move){f.$Left=o+a.l(j);f.$Top=p+a.m(j)}var B=d.$Duration;k=a.j(k,a.ae(j,f));h.Oc=a.Yd();return new i(d.$Delay,B,h,j,k,f)}function l(b,c){a.b(c,function(a){var e,g=a.$Elmt,c=a[0],i=a[1];if(c){e=n(g,c);b=e.yb(c.X==h?b:c.X,1)}b=l(b,a.G);if(i){var f=n(g,i,1);f.yb(b,1);d.P(f);j.P(f)}e&&d.P(e)});return b}d.fc=function(){d.C(d.Q()*(g||0));j.Ub()};j=new i(0,0);l(0,o?m(q,1):[])}})(window,document,Math,null,true,false)