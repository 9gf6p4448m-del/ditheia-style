"use strict";(()=>{var Eg=Object.defineProperty;var Kn=(s,e,t)=>()=>{if(t)throw t[0];try{return s&&(e=s(s=0)),e}catch(n){throw t=[n],n}};var Sg=(s,e)=>{for(var t in e)Eg(s,t,{get:e[t],enumerable:!0})};function Ss(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ti[s&255]+ti[s>>8&255]+ti[s>>16&255]+ti[s>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[n&255]+ti[n>>8&255]+ti[n>>16&255]+ti[n>>24&255]).toLowerCase()}function Lt(s,e,t){return Math.max(e,Math.min(t,s))}function Gg(s,e){return(s%e+e)%e}function Au(s,e,t){return(1-t)*s+t*e}function ts(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function sn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}function wd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function mo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function tm(){let s=mo("canvas");return s.style.display="block",s}function go(s){s in jf||(jf[s]=!0,console.warn(s))}function nm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Wg(){let s={enabled:!0,workingColorSpace:mr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===en&&(i.r=Ts(i.r),i.g=Ts(i.g),i.b=Ts(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===en&&(i.r=ho(i.r),i.g=ho(i.g),i.b=ho(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cs?ya:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return go("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return go("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[mr]:{primaries:e,whitePoint:n,transfer:ya,toXYZ:Qf,fromXYZ:ep,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:en,toXYZ:Qf,fromXYZ:ep,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),s}function Ts(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ho(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function Pu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function ku(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ur.fromArray(s,r);let o=i.x*Math.abs(ur.x)+i.y*Math.abs(ur.y)+i.z*Math.abs(ur.z),l=e.dot(ur),c=t.dot(ur),h=n.dot(ur);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function qu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function iv(s,e,t,n,i,r,a,o){let l;if(e.side===Rn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===ws,o),l===null)return null;Gl.copy(o),Gl.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Gl);return c<t.near||c>t.far?null:{distance:c,point:Gl.clone(),object:s}}function Wl(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Nl),s.getVertexPosition(l,Bl),s.getVertexPosition(c,Ol);let h=iv(s,e,t,n,Nl,Bl,Ol,up);if(h){let u=new F;Es.getBarycoord(up,Nl,Bl,Ol,u),i&&(h.uv=Es.getInterpolatedAttribute(i,o,l,c,u,new ve)),r&&(h.uv1=Es.getInterpolatedAttribute(r,o,l,c,u,new ve)),a&&(h.normal=Es.getInterpolatedAttribute(a,o,l,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new F,materialIndex:0};Es.getNormal(Nl,Bl,Ol,d.normal),h.face=d,h.barycoord=u}return h}function Rr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function oi(s){let e={};for(let t=0;t<s.length;t++){let n=Rr(s[t]);for(let i in n)e[i]=n[i]}return e}function sv(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Rd(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Gt.workingColorSpace}function Yl(s,e,t,n,i,r){ao.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ha.x=r*ao.x-i*ao.y,ha.y=i*ao.x+r*ao.y):ha.copy(ao),s.copy(e),s.x+=ha.x,s.y+=ha.y,s.applyMatrix4(sm)}function Ad(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}function xp(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function dv(s,e){let t=1-s;return t*t*e}function fv(s,e){return 2*(1-s)*s*e}function pv(s,e){return s*s*e}function ga(s,e,t,n){return dv(s,e)+fv(s,t)+pv(s,n)}function mv(s,e){let t=1-s;return t*t*t*e}function gv(s,e){let t=1-s;return 3*t*t*s*e}function vv(s,e){return 3*(1-s)*s*s*e}function xv(s,e){return s*s*s*e}function va(s,e,t,n,i){return mv(s,e)+gv(s,t)+vv(s,n)+xv(s,i)}function yv(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=rm(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Sv(s,e,r,t)),s.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){let p=s[d],m=s[d+1];p<o&&(o=p),m<l&&(l=m),p>h&&(h=p),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Fa(r,a,t,o,l,c,0),a}function rm(s,e,t,n,i){let r;if(i===Fv(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=bp(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=bp(a/n|0,s[a],s[a+1],r);return r&&To(r,r.next)&&(Ua(r),r=r.next),r}function xr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(To(t,t.next)||bn(t.prev,t,t.next)===0)){if(Ua(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Fa(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Cv(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?_v(s,n,i,r):bv(s)){e.push(l.i,s.i,c.i),Ua(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Mv(xr(s),e),Fa(s,e,t,n,i,r,2)):a===2&&Ev(s,e,t,n,i,r):Fa(xr(s),e,t,n,i,r,1);break}}}function bv(s){let e=s.prev,t=s,n=s.next;if(bn(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),d=Math.max(i,r,a),p=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&ma(i,o,r,l,a,c,m.x,m.y)&&bn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function _v(s,e,t,n){let i=s.prev,r=s,a=s.next;if(bn(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,p=Math.min(o,l,c),m=Math.min(h,u,d),x=Math.max(o,l,c),v=Math.max(h,u,d),f=rd(p,m,e,t,n),y=rd(x,v,e,t,n),b=s.prevZ,g=s.nextZ;for(;b&&b.z>=f&&g&&g.z<=y;){if(b.x>=p&&b.x<=x&&b.y>=m&&b.y<=v&&b!==i&&b!==a&&ma(o,h,l,u,c,d,b.x,b.y)&&bn(b.prev,b,b.next)>=0||(b=b.prevZ,g.x>=p&&g.x<=x&&g.y>=m&&g.y<=v&&g!==i&&g!==a&&ma(o,h,l,u,c,d,g.x,g.y)&&bn(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=x&&b.y>=m&&b.y<=v&&b!==i&&b!==a&&ma(o,h,l,u,c,d,b.x,b.y)&&bn(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;g&&g.z<=y;){if(g.x>=p&&g.x<=x&&g.y>=m&&g.y<=v&&g!==i&&g!==a&&ma(o,h,l,u,c,d,g.x,g.y)&&bn(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Mv(s,e){let t=s;do{let n=t.prev,i=t.next.next;!To(n,i)&&am(n,t,t.next,i)&&za(n,i)&&za(i,n)&&(e.push(n.i,t.i,i.i),Ua(t),Ua(t.next),t=s=i),t=t.next}while(t!==s);return xr(t)}function Ev(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Dv(a,o)){let l=lm(a,o);a=xr(a,a.next),l=xr(l,l.next),Fa(a,e,t,n,i,r,0),Fa(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Sv(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=rm(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Pv(c))}i.sort(Tv);for(let r=0;r<i.length;r++)t=wv(i[r],t);return t}function Tv(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function wv(s,e){let t=Rv(s,e);if(!t)return e;let n=lm(t,s);return xr(n,n.next),xr(t,t.next)}function Rv(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if(To(s,t))return t;do{if(To(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&om(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);za(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Av(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Av(s,e){return bn(s.prev,s,e.prev)<0&&bn(e.next,s,s.next)<0}function Cv(s,e,t,n){let i=s;do i.z===0&&(i.z=rd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Iv(i)}function Iv(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function rd(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Pv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function om(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function ma(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&om(s,e,t,n,i,r,a,o)}function Dv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!kv(s,e)&&(za(s,e)&&za(e,s)&&Lv(s,e)&&(bn(s.prev,s,e.prev)||bn(s,e.prev,e))||To(s,e)&&bn(s.prev,s,s.next)>0&&bn(e.prev,e,e.next)>0)}function bn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function To(s,e){return s.x===e.x&&s.y===e.y}function am(s,e,t,n){let i=jl(bn(s,e,t)),r=jl(bn(s,e,n)),a=jl(bn(t,n,s)),o=jl(bn(t,n,e));return!!(i!==r&&a!==o||i===0&&Jl(s,t,e)||r===0&&Jl(s,n,e)||a===0&&Jl(t,s,n)||o===0&&Jl(t,e,n))}function Jl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function jl(s){return s>0?1:s<0?-1:0}function kv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&am(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function za(s,e){return bn(s.prev,s,s.next)<0?bn(s,e,s.next)>=0&&bn(s,s.prev,e)>=0:bn(s,e,s.prev)<0||bn(s,s.next,e)<0}function Lv(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function lm(s,e){let t=od(s.i,s.x,s.y),n=od(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bp(s,e,t,n){let i=od(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ua(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function od(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fv(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}function _p(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Mp(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}function zv(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}function Ql(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Uv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Pd(s,e,t,n){let i=qv(n);switch(t){case bd:return s*e;case Qc:return s*e/i.components*i.byteLength;case eh:return s*e/i.components*i.byteLength;case Md:return s*e*2/i.components*i.byteLength;case th:return s*e*2/i.components*i.byteLength;case _d:return s*e*3/i.components*i.byteLength;case ri:return s*e*4/i.components*i.byteLength;case nh:return s*e*4/i.components*i.byteLength;case Za:case Ja:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ja:case Qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sh:case oh:return Math.max(s,16)*Math.max(e,8)/4;case ih:case rh:return Math.max(s,8)*Math.max(e,8)/2;case ah:case lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case dh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case fh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ph:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case mh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case gh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case yh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case bh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _h:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Sh:case Th:case wh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rh:case Ah:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ch:case Ih:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qv(s){switch(s){case Ci:case gd:return{byteLength:1,components:1};case Io:case vd:case Qn:return{byteLength:2,components:1};case Jc:case jc:return{byteLength:2,components:4};case ir:case Zc:case Zi:return{byteLength:4,components:1};case xd:case yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}var wp,ud,Rp,dd,Dc,os,ws,Rn,nn,kn,Rs,Ai,fd,pd,kc,Ti,Ap,Cp,Ip,Pp,Sr,Dp,kp,Lp,nc,ic,qa,Fp,Ya,zp,Up,Hp,Np,Bp,Op,Lc,Fc,zc,pr,Uc,Hc,Ao,Nc,Bc,Vp,Gp,Ki,Oc,Vc,Gc,Co,Wc,Xc,qc,md,Tr,wr,Yc,$c,$a,En,Zs,sc,Un,Wp,Ka,$i,Kc,nr,Ci,gd,vd,Io,Zc,ir,Zi,Qn,Jc,jc,sr,xd,yd,bd,_d,ri,fo,rr,Qc,eh,Md,th,nh,Za,Ja,ja,Qa,ih,sh,rh,oh,ah,lh,ch,hh,uh,dh,fh,ph,mh,gh,vh,xh,yh,bh,_h,Mh,Eh,Sh,Th,wh,Rh,Ah,Ch,Ih,xa,rc,ec,nd,id,sd,Xp,qp,Po,Yp,Cs,Mt,mr,ya,en,qi,Ph,Ed,po,$p,Kp,Zp,Sd,Jp,jp,Qp,em,oc,Dh,Td,Yi,ba,As,ti,Ru,ac,ve,dn,F,Cu,Jf,Ct,Iu,jf,Qf,ep,Gt,qr,lc,Xg,vo,qg,Du,ii,Qt,cc,wn,_a,hc,di,xs,Gi,Cl,Yr,$r,Kr,Ws,Xs,hr,ra,Il,Pl,ur,Yg,oa,Lu,Js,ys,Fu,Dl,qs,zu,kl,Uu,xo,ht,Zr,Wi,$g,Kg,Ys,Ll,Ei,tp,np,Yn,Ma,Zg,ip,Jr,bs,Fl,aa,Jg,jg,sp,rp,op,ap,Qg,jr,Hu,Hn,Xi,_s,Nu,Ms,Qr,eo,lp,Bu,Ou,Vu,Gu,Wu,Xu,Es,im,$s,zl,Ze,ni,ev,Li,Ft,Pn,Ul,tv,jn,Ea,Sa,mt,nv,ki,Yu,to,Si,la,Xn,Vt,cp,dr,Hl,hp,Nl,Bl,Ol,$u,Vl,up,Gl,De,at,pi,rv,ov,Xt,Ta,Ks,dp,fp,qn,no,io,uc,wa,dc,Wt,av,yo,Ra,ns,Aa,ui,bo,si,so,ca,ro,oo,ao,ha,sm,Xl,ua,ql,pp,Ku,mp,xi,is,ss,lo,gp,$l,vp,lv,da,fa,gn,Zu,cv,hv,es,fr,uv,Kl,_o,fn,gr,Ca,Mo,js,ut,Sn,Ia,wi,Eo,fc,Zl,Ju,ju,Qu,pc,Pa,mc,Da,gc,ka,vc,vr,yp,xc,La,So,ad,uo,yi,yr,Qs,$n,Fi,Ha,Dn,fi,Na,bi,rs,Ba,Ht,yc,bc,br,_c,Mc,Ec,Ri,er,Sc,Tc,wc,Oa,tr,Rc,tc,Ac,cm,wo,co,Cc,Va,Ro,_r,ed,Ep,Sp,Ic,Tp,pa,td,ld,Ga,Mr,cd,Er,Wa,Pc,Xa,Cd,Hv,Id,Nv,Bv,Ov,Vv,Gv,Wv,Xv,hd,mn,GE,Dd=Kn(()=>{wp=0,ud=1,Rp=2,dd=1,Dc=2,os=3,ws=0,Rn=1,nn=2,kn=0,Rs=1,Ai=2,fd=3,pd=4,kc=5,Ti=100,Ap=101,Cp=102,Ip=103,Pp=104,Sr=200,Dp=201,kp=202,Lp=203,nc=204,ic=205,qa=206,Fp=207,Ya=208,zp=209,Up=210,Hp=211,Np=212,Bp=213,Op=214,Lc=0,Fc=1,zc=2,pr=3,Uc=4,Hc=5,Ao=6,Nc=7,Bc=0,Vp=1,Gp=2,Ki=0,Oc=1,Vc=2,Gc=3,Co=4,Wc=5,Xc=6,qc=7,md=300,Tr=301,wr=302,Yc=303,$c=304,$a=306,En=1e3,Zs=1001,sc=1002,Un=1003,Wp=1004,Ka=1005,$i=1006,Kc=1007,nr=1008,Ci=1009,gd=1010,vd=1011,Io=1012,Zc=1013,ir=1014,Zi=1015,Qn=1016,Jc=1017,jc=1018,sr=1020,xd=35902,yd=35899,bd=1021,_d=1022,ri=1023,fo=1026,rr=1027,Qc=1028,eh=1029,Md=1030,th=1031,nh=1033,Za=33776,Ja=33777,ja=33778,Qa=33779,ih=35840,sh=35841,rh=35842,oh=35843,ah=36196,lh=37492,ch=37496,hh=37808,uh=37809,dh=37810,fh=37811,ph=37812,mh=37813,gh=37814,vh=37815,xh=37816,yh=37817,bh=37818,_h=37819,Mh=37820,Eh=37821,Sh=36492,Th=36494,wh=36495,Rh=36283,Ah=36284,Ch=36285,Ih=36286,xa=2300,rc=2301,ec=2302,nd=2400,id=2401,sd=2402,Xp=3200,qp=3201,Po=0,Yp=1,Cs="",Mt="srgb",mr="srgb-linear",ya="linear",en="srgb",qi=7680,Ph=7681,Ed=517,po=519,$p=512,Kp=513,Zp=514,Sd=515,Jp=516,jp=517,Qp=518,em=519,oc=35044,Dh=35048,Td="300 es",Yi=2e3,ba=2001,As=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ru=Math.PI/180,ac=180/Math.PI;ve=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],p=r[a+1],m=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=x;return}if(u!==x||l!==d||c!==p||h!==m){let v=1-o,f=l*d+c*p+h*m+u*x,y=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){let _=Math.sqrt(b),S=Math.atan2(_,f*y);v=Math.sin(v*S)/_,o=Math.sin(o*S)/_}let g=o*y;if(l=l*v+d*g,c=c*v+p*g,h=h*v+m*g,u=u*v+x*g,v===1-o){let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*p-c*d,e[t+1]=l*m+h*d+c*u-o*p,e[t+2]=c*m+h*p+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u+d*p*m;break;case"YZX":this._x=d*h*u+c*p*m,this._y=c*p*u+d*h*m,this._z=c*h*m-d*p*u,this._w=c*h*u-d*p*m;break;case"XZY":this._x=d*h*u-c*p*m,this._y=c*p*u-d*h*m,this._z=c*h*m+d*p*u,this._w=c*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cu.copy(this).projectOnVector(e),this.sub(Cu)}reflect(e){return this.sub(Cu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cu=new F,Jf=new dn,Ct=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],x=i[0],v=i[3],f=i[6],y=i[1],b=i[4],g=i[7],_=i[2],S=i[5],w=i[8];return r[0]=a*x+o*y+l*_,r[3]=a*v+o*b+l*S,r[6]=a*f+o*g+l*w,r[1]=c*x+h*y+u*_,r[4]=c*v+h*b+u*S,r[7]=c*f+h*g+u*w,r[2]=d*x+p*y+m*_,r[5]=d*v+p*b+m*S,r[8]=d*f+p*g+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,m=t*u+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Iu.makeScale(e,t)),this}rotate(e){return this.premultiply(Iu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Iu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Iu=new Ct;jf={};Qf=new Ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ep=new Ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Gt=Wg();lc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=mo("canvas")),qr.width=e.width,qr.height=e.height;let i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ts(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ts(t[n]/255)*255):t[n]=Ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xg=0,vo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Pu(i[a].image)):r.push(Pu(i[a]))}else r=Pu(i);n.url=r}return t||(e.images[this.uuid]=n),n}};qg=0,Du=new F,ii=class s extends As{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Zs,i=Zs,r=$i,a=nr,o=ri,l=Ci,c=s.DEFAULT_ANISOTROPY,h=Cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Ss(),this.name="",this.source=new vo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Du).x}get height(){return this.source.getSize(Du).y}get depth(){return this.source.getSize(Du).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case En:e.x=e.x-Math.floor(e.x);break;case Zs:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case En:e.y=e.y-Math.floor(e.y);break;case Zs:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=md;ii.DEFAULT_ANISOTROPY=1;Qt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],m=l[9],x=l[2],v=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-v)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+v)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,g=(p+1)/2,_=(f+1)/2,S=(h+d)/4,w=(u+x)/4,T=(m+v)/4;return b>g&&b>_?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=S/n,r=w/n):g>_?g<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(g),n=S/i,r=T/i):_<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=w/r,i=T/r),this.set(n,i,r,t),this}let y=Math.sqrt((v-m)*(v-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(v-m)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this.w=Lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this.w=Lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cc=class extends As{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new ii(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:$i,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new vo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends cc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},_a=class extends ii{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=Zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},hc=class extends ii{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=Zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},di=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gi):Gi.fromBufferAttribute(r,a),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cl.copy(n.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Il.subVectors(this.max,ra),Yr.subVectors(e.a,ra),$r.subVectors(e.b,ra),Kr.subVectors(e.c,ra),Ws.subVectors($r,Yr),Xs.subVectors(Kr,$r),hr.subVectors(Yr,Kr);let t=[0,-Ws.z,Ws.y,0,-Xs.z,Xs.y,0,-hr.z,hr.y,Ws.z,0,-Ws.x,Xs.z,0,-Xs.x,hr.z,0,-hr.x,-Ws.y,Ws.x,0,-Xs.y,Xs.x,0,-hr.y,hr.x,0];return!ku(t,Yr,$r,Kr,Il)||(t=[1,0,0,0,1,0,0,0,1],!ku(t,Yr,$r,Kr,Il))?!1:(Pl.crossVectors(Ws,Xs),t=[Pl.x,Pl.y,Pl.z],ku(t,Yr,$r,Kr,Il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},xs=[new F,new F,new F,new F,new F,new F,new F,new F],Gi=new F,Cl=new di,Yr=new F,$r=new F,Kr=new F,Ws=new F,Xs=new F,hr=new F,ra=new F,Il=new F,Pl=new F,ur=new F;Yg=new di,oa=new F,Lu=new F,Js=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);let t=oa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(oa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(Lu)),this.expandByPoint(oa.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ys=new F,Fu=new F,Dl=new F,qs=new F,zu=new F,kl=new F,Uu=new F,xo=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ys)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ys.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ys.copy(this.origin).addScaledVector(this.direction,t),ys.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fu.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),qs.copy(this.origin).sub(Fu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Dl),o=qs.dot(this.direction),l=-qs.dot(Dl),c=qs.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fu).addScaledVector(Dl,d),p}intersectSphere(e,t){ys.subVectors(e.center,this.origin);let n=ys.dot(this.direction),i=ys.dot(ys)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ys)!==null}intersectTriangle(e,t,n,i,r){zu.subVectors(t,e),kl.subVectors(n,e),Uu.crossVectors(zu,kl);let a=this.direction.dot(Uu),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qs.subVectors(this.origin,e);let l=o*this.direction.dot(kl.crossVectors(qs,kl));if(l<0)return null;let c=o*this.direction.dot(zu.cross(qs));if(c<0||l+c>a)return null;let h=-o*qs.dot(Uu);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class s{constructor(e,t,n,i,r,a,o,l,c,h,u,d,p,m,x,v){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,p,m,x,v)}set(e,t,n,i,r,a,o,l,c,h,u,d,p,m,x,v){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=x,f[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Zr.setFromMatrixColumn(e,0).length(),r=1/Zr.setFromMatrixColumn(e,1).length(),a=1/Zr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,m=c*h,x=c*u;t[0]=d+x*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,m=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,p=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($g,e,Kg)}lookAt(e,t,n){let i=this.elements;return Ei.subVectors(e,t),Ei.lengthSq()===0&&(Ei.z=1),Ei.normalize(),Ys.crossVectors(n,Ei),Ys.lengthSq()===0&&(Math.abs(n.z)===1?Ei.x+=1e-4:Ei.z+=1e-4,Ei.normalize(),Ys.crossVectors(n,Ei)),Ys.normalize(),Ll.crossVectors(Ei,Ys),i[0]=Ys.x,i[4]=Ll.x,i[8]=Ei.x,i[1]=Ys.y,i[5]=Ll.y,i[9]=Ei.y,i[2]=Ys.z,i[6]=Ll.z,i[10]=Ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],x=n[6],v=n[10],f=n[14],y=n[3],b=n[7],g=n[11],_=n[15],S=i[0],w=i[4],T=i[8],M=i[12],E=i[1],A=i[5],D=i[9],B=i[13],P=i[2],N=i[6],W=i[10],ne=i[14],q=i[3],se=i[7],ue=i[11],pe=i[15];return r[0]=a*S+o*E+l*P+c*q,r[4]=a*w+o*A+l*N+c*se,r[8]=a*T+o*D+l*W+c*ue,r[12]=a*M+o*B+l*ne+c*pe,r[1]=h*S+u*E+d*P+p*q,r[5]=h*w+u*A+d*N+p*se,r[9]=h*T+u*D+d*W+p*ue,r[13]=h*M+u*B+d*ne+p*pe,r[2]=m*S+x*E+v*P+f*q,r[6]=m*w+x*A+v*N+f*se,r[10]=m*T+x*D+v*W+f*ue,r[14]=m*M+x*B+v*ne+f*pe,r[3]=y*S+b*E+g*P+_*q,r[7]=y*w+b*A+g*N+_*se,r[11]=y*T+b*D+g*W+_*ue,r[15]=y*M+b*B+g*ne+_*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],m=e[3],x=e[7],v=e[11],f=e[15];return m*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+x*(+t*l*p-t*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+v*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],x=e[13],v=e[14],f=e[15],y=u*v*c-x*d*c+x*l*p-o*v*p-u*l*f+o*d*f,b=m*d*c-h*v*c-m*l*p+a*v*p+h*l*f-a*d*f,g=h*x*c-m*u*c+m*o*p-a*x*p-h*o*f+a*u*f,_=m*u*l-h*x*l-m*o*d+a*x*d+h*o*v-a*u*v,S=t*y+n*b+i*g+r*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return e[0]=y*w,e[1]=(x*d*r-u*v*r-x*i*p+n*v*p+u*i*f-n*d*f)*w,e[2]=(o*v*r-x*l*r+x*i*c-n*v*c-o*i*f+n*l*f)*w,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*w,e[4]=b*w,e[5]=(h*v*r-m*d*r+m*i*p-t*v*p-h*i*f+t*d*f)*w,e[6]=(m*l*r-a*v*r-m*i*c+t*v*c+a*i*f-t*l*f)*w,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*p+t*l*p)*w,e[8]=g*w,e[9]=(m*u*r-h*x*r-m*n*p+t*x*p+h*n*f-t*u*f)*w,e[10]=(a*x*r-m*o*r+m*n*c-t*x*c-a*n*f+t*o*f)*w,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*w,e[12]=_*w,e[13]=(h*x*i-m*u*i+m*n*d-t*x*d-h*n*v+t*u*v)*w,e[14]=(m*o*i-a*x*i-m*n*l+t*x*l+a*n*v-t*o*v)*w,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,m=r*u,x=a*h,v=a*u,f=o*u,y=l*c,b=l*h,g=l*u,_=n.x,S=n.y,w=n.z;return i[0]=(1-(x+f))*_,i[1]=(p+g)*_,i[2]=(m-b)*_,i[3]=0,i[4]=(p-g)*S,i[5]=(1-(d+f))*S,i[6]=(v+y)*S,i[7]=0,i[8]=(m+b)*w,i[9]=(v-y)*w,i[10]=(1-(d+x))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Zr.set(i[0],i[1],i[2]).length(),a=Zr.set(i[4],i[5],i[6]).length(),o=Zr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Wi.copy(this);let c=1/r,h=1/a,u=1/o;return Wi.elements[0]*=c,Wi.elements[1]*=c,Wi.elements[2]*=c,Wi.elements[4]*=h,Wi.elements[5]*=h,Wi.elements[6]*=h,Wi.elements[8]*=u,Wi.elements[9]*=u,Wi.elements[10]*=u,t.setFromRotationMatrix(Wi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Yi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),p=(n+i)/(n-i),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===Yi)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ba)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Yi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),p=-(n+i)/(n-i),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===Yi)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===ba)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zr=new F,Wi=new ht,$g=new F(0,0,0),Kg=new F(1,1,1),Ys=new F,Ll=new F,Ei=new F,tp=new ht,np=new dn,Yn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";Ma=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zg=0,ip=new F,Jr=new dn,bs=new ht,Fl=new F,aa=new F,Jg=new F,jg=new dn,sp=new F(1,0,0),rp=new F(0,1,0),op=new F(0,0,1),ap={type:"added"},Qg={type:"removed"},jr={type:"childadded",child:null},Hu={type:"childremoved",child:null},Hn=class s extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new F,t=new Yn,n=new dn,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ct}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,t){return Jr.setFromAxisAngle(e,t),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(sp,e)}rotateY(e){return this.rotateOnAxis(rp,e)}rotateZ(e){return this.rotateOnAxis(op,e)}translateOnAxis(e,t){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sp,e)}translateY(e){return this.translateOnAxis(rp,e)}translateZ(e){return this.translateOnAxis(op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fl.copy(e):Fl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bs.lookAt(aa,Fl,this.up):bs.lookAt(Fl,aa,this.up),this.quaternion.setFromRotationMatrix(bs),i&&(bs.extractRotation(i.matrixWorld),Jr.setFromRotationMatrix(bs),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ap),jr.child=e,this.dispatchEvent(jr),jr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qg),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bs.multiply(e.parent.matrixWorld)),e.applyMatrix4(bs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ap),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,e,Jg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(aa,jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Hn.DEFAULT_UP=new F(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Xi=new F,_s=new F,Nu=new F,Ms=new F,Qr=new F,eo=new F,lp=new F,Bu=new F,Ou=new F,Vu=new F,Gu=new Qt,Wu=new Qt,Xu=new Qt,Es=class s{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xi.subVectors(e,t),i.cross(Xi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xi.subVectors(i,t),_s.subVectors(n,t),Nu.subVectors(e,t);let a=Xi.dot(Xi),o=Xi.dot(_s),l=Xi.dot(Nu),c=_s.dot(_s),h=_s.dot(Nu),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ms)===null?!1:Ms.x>=0&&Ms.y>=0&&Ms.x+Ms.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Ms)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ms.x),l.addScaledVector(a,Ms.y),l.addScaledVector(o,Ms.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Gu.setScalar(0),Wu.setScalar(0),Xu.setScalar(0),Gu.fromBufferAttribute(e,t),Wu.fromBufferAttribute(e,n),Xu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Gu,r.x),a.addScaledVector(Wu,r.y),a.addScaledVector(Xu,r.z),a}static isFrontFacing(e,t,n,i){return Xi.subVectors(n,t),_s.subVectors(e,t),Xi.cross(_s).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),_s.subVectors(this.a,this.b),Xi.cross(_s).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Qr.subVectors(i,n),eo.subVectors(r,n),Bu.subVectors(e,n);let l=Qr.dot(Bu),c=eo.dot(Bu);if(l<=0&&c<=0)return t.copy(n);Ou.subVectors(e,i);let h=Qr.dot(Ou),u=eo.dot(Ou);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Qr,a);Vu.subVectors(e,r);let p=Qr.dot(Vu),m=eo.dot(Vu);if(m>=0&&p<=m)return t.copy(r);let x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(eo,o);let v=h*m-p*u;if(v<=0&&u-h>=0&&p-m>=0)return lp.subVectors(r,i),o=(u-h)/(u-h+(p-m)),t.copy(i).addScaledVector(lp,o);let f=1/(v+x+d);return a=x*f,o=d*f,t.copy(n).addScaledVector(Qr,a).addScaledVector(eo,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},im={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$s={h:0,s:0,l:0},zl={h:0,s:0,l:0};Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Gt.workingColorSpace){if(e=Gg(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=qu(a,r,e+1/3),this.g=qu(a,r,e),this.b=qu(a,r,e-1/3)}return Gt.colorSpaceToWorking(this,i),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=im[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Gt.workingToColorSpace(ni.copy(this),e),Math.round(Lt(ni.r*255,0,255))*65536+Math.round(Lt(ni.g*255,0,255))*256+Math.round(Lt(ni.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.workingToColorSpace(ni.copy(this),t);let n=ni.r,i=ni.g,r=ni.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Gt.workingColorSpace){return Gt.workingToColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=Mt){Gt.workingToColorSpace(ni.copy(this),e);let t=ni.r,n=ni.g,i=ni.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($s),this.setHSL($s.h+e,$s.s+t,$s.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($s),e.getHSL(zl);let n=Au($s.h,zl.h,t),i=Au($s.s,zl.s,t),r=Au($s.l,zl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ni=new Ze;Ze.NAMES=im;ev=0,Li=class extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Ss(),this.name="",this.type="Material",this.blending=Rs,this.side=ws,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nc,this.blendDst=ic,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==ws&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nc&&(n.blendSrc=this.blendSrc),this.blendDst!==ic&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ft=class extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pn=new F,Ul=new ve,tv=0,jn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oc,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix3(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oc&&(e.usage=this.usage),e}},Ea=class extends jn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Sa=class extends jn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},mt=class extends jn{constructor(e,t,n){super(new Float32Array(e),t,n)}},nv=0,ki=new ht,Yu=new Hn,to=new F,Si=new di,la=new di,Xn=new F,Vt=class s extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wd(e)?Sa:Ea)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ct().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ki.makeRotationFromQuaternion(e),this.applyMatrix4(ki),this}rotateX(e){return ki.makeRotationX(e),this.applyMatrix4(ki),this}rotateY(e){return ki.makeRotationY(e),this.applyMatrix4(ki),this}rotateZ(e){return ki.makeRotationZ(e),this.applyMatrix4(ki),this}translate(e,t,n){return ki.makeTranslation(e,t,n),this.applyMatrix4(ki),this}scale(e,t,n){return ki.makeScale(e,t,n),this.applyMatrix4(ki),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Si.setFromBufferAttribute(r),this.morphTargetsRelative?(Xn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Xn),Xn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Xn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];la.setFromBufferAttribute(o),this.morphTargetsRelative?(Xn.addVectors(Si.min,la.min),Si.expandByPoint(Xn),Xn.addVectors(Si.max,la.max),Si.expandByPoint(Xn)):(Si.expandByPoint(la.min),Si.expandByPoint(la.max))}Si.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Xn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Xn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xn.fromBufferAttribute(o,c),l&&(to.fromBufferAttribute(e,c),Xn.add(to)),i=Math.max(i,n.distanceToSquared(Xn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<n.count;T++)o[T]=new F,l[T]=new F;let c=new F,h=new F,u=new F,d=new ve,p=new ve,m=new ve,x=new F,v=new F;function f(T,M,E){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),m.fromBufferAttribute(r,E),h.sub(c),u.sub(c),p.sub(d),m.sub(d);let A=1/(p.x*m.y-m.x*p.y);isFinite(A)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(A),v.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(A),o[T].add(x),o[M].add(x),o[E].add(x),l[T].add(v),l[M].add(v),l[E].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let T=0,M=y.length;T<M;++T){let E=y[T],A=E.start,D=E.count;for(let B=A,P=A+D;B<P;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let b=new F,g=new F,_=new F,S=new F;function w(T){_.fromBufferAttribute(i,T),S.copy(_);let M=o[T];b.copy(M),b.sub(_.multiplyScalar(_.dot(M))).normalize(),g.crossVectors(S,M);let A=g.dot(l[T])<0?-1:1;a.setXYZW(T,b.x,b.y,b.z,A)}for(let T=0,M=y.length;T<M;++T){let E=y[T],A=E.start,D=E.count;for(let B=A,P=A+D;B<P;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),x=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,v),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(v,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xn.fromBufferAttribute(e,t),Xn.normalize(),e.setXYZ(t,Xn.x,Xn.y,Xn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,m=0;for(let x=0,v=l.length;x<v;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[m++]=c[p++]}return new jn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cp=new ht,dr=new xo,Hl=new Js,hp=new F,Nl=new F,Bl=new F,Ol=new F,$u=new F,Vl=new F,up=new F,Gl=new F,De=class extends Hn{constructor(e=new Vt,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Vl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&($u.fromBufferAttribute(u,e),a?Vl.addScaledVector($u,h):Vl.addScaledVector($u.sub(t),h))}t.add(Vl)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hl.copy(n.boundingSphere),Hl.applyMatrix4(r),dr.copy(e.ray).recast(e.near),!(Hl.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Hl,hp)===null||dr.origin.distanceToSquared(hp)>(e.far-e.near)**2))&&(cp.copy(r).invert(),dr.copy(e.ray).applyMatrix4(cp),!(n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,dr)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let v=d[m],f=a[v.materialIndex],y=Math.max(v.start,p.start),b=Math.min(o.count,Math.min(v.start+v.count,p.start+p.count));for(let g=y,_=b;g<_;g+=3){let S=o.getX(g),w=o.getX(g+1),T=o.getX(g+2);i=Wl(this,f,e,n,c,h,u,S,w,T),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let v=m,f=x;v<f;v+=3){let y=o.getX(v),b=o.getX(v+1),g=o.getX(v+2);i=Wl(this,a,e,n,c,h,u,y,b,g),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let v=d[m],f=a[v.materialIndex],y=Math.max(v.start,p.start),b=Math.min(l.count,Math.min(v.start+v.count,p.start+p.count));for(let g=y,_=b;g<_;g+=3){let S=g,w=g+1,T=g+2;i=Wl(this,f,e,n,c,h,u,S,w,T),i&&(i.faceIndex=Math.floor(g/3),i.face.materialIndex=v.materialIndex,t.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let v=m,f=x;v<f;v+=3){let y=v,b=v+1,g=v+2;i=Wl(this,a,e,n,c,h,u,y,b,g),i&&(i.faceIndex=Math.floor(v/3),t.push(i))}}}};at=class s extends Vt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(u,2));function m(x,v,f,y,b,g,_,S,w,T,M){let E=g/w,A=_/T,D=g/2,B=_/2,P=S/2,N=w+1,W=T+1,ne=0,q=0,se=new F;for(let ue=0;ue<W;ue++){let pe=ue*A-B;for(let He=0;He<N;He++){let ot=He*E-D;se[x]=ot*y,se[v]=pe*b,se[f]=P,c.push(se.x,se.y,se.z),se[x]=0,se[v]=0,se[f]=S>0?1:-1,h.push(se.x,se.y,se.z),u.push(He/w),u.push(1-ue/T),ne+=1}}for(let ue=0;ue<T;ue++)for(let pe=0;pe<w;pe++){let He=d+pe+N*ue,ot=d+pe+N*(ue+1),Ne=d+(pe+1)+N*(ue+1),Ye=d+(pe+1)+N*ue;l.push(He,ot,Ye),l.push(ot,Ne,Ye),q+=6}o.addGroup(p,q,M),p+=q,d+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};pi={clone:Rr,merge:oi},rv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ov=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xt=class extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rv,this.fragmentShader=ov,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=sv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ta=class extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ks=new F,dp=new ve,fp=new ve,qn=class extends Ta{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ac*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ac*2*Math.atan(Math.tan(Ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z),Ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z)}getViewSize(e,t){return this.getViewBounds(e,dp,fp),t.subVectors(fp,dp)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ru*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},no=-90,io=1,uc=class extends Hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new qn(no,io,e,t);i.layers=this.layers,this.add(i);let r=new qn(no,io,e,t);r.layers=this.layers,this.add(r);let a=new qn(no,io,e,t);a.layers=this.layers,this.add(a);let o=new qn(no,io,e,t);o.layers=this.layers,this.add(o);let l=new qn(no,io,e,t);l.layers=this.layers,this.add(l);let c=new qn(no,io,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},wa=class extends ii{constructor(e=[],t=Tr,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},dc=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new at(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:kn});r.uniforms.tEquirect.value=t;let a=new De(i,r),o=t.minFilter;return t.minFilter===nr&&(t.minFilter=$i),new uc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Wt=class extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},av={type:"move"},yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let v=t.getJointPose(x,n),f=this._getHandJoint(c,x);v!==null&&(f.matrix.fromArray(v.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=v.radius),f.visible=v!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&d>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(av)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ra=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ns=class extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Aa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oc,this.updateRanges=[],this.version=0,this.uuid=Ss()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ss()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ss()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ui=new F,bo=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ui.fromBufferAttribute(this,t),ui.applyMatrix4(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ui.fromBufferAttribute(this,t),ui.applyNormalMatrix(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ui.fromBufferAttribute(this,t),ui.transformDirection(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ts(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ts(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ts(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ts(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ts(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),i=sn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new jn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},si=class extends Li{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ca=new F,ro=new F,oo=new F,ao=new ve,ha=new ve,sm=new ht,Xl=new F,ua=new F,ql=new F,pp=new ve,Ku=new ve,mp=new ve,xi=class extends Hn{constructor(e=new si){if(super(),this.isSprite=!0,this.type="Sprite",so===void 0){so=new Vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Aa(t,5);so.setIndex([0,1,2,0,2,3]),so.setAttribute("position",new bo(n,3,0,!1)),so.setAttribute("uv",new bo(n,2,3,!1))}this.geometry=so,this.material=e,this.center=new ve(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ro.setFromMatrixScale(this.matrixWorld),sm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),oo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ro.multiplyScalar(-oo.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Yl(Xl.set(-.5,-.5,0),oo,a,ro,i,r),Yl(ua.set(.5,-.5,0),oo,a,ro,i,r),Yl(ql.set(.5,.5,0),oo,a,ro,i,r),pp.set(0,0),Ku.set(1,0),mp.set(1,1);let o=e.ray.intersectTriangle(Xl,ua,ql,!1,ca);if(o===null&&(Yl(ua.set(-.5,.5,0),oo,a,ro,i,r),Ku.set(0,1),o=e.ray.intersectTriangle(Xl,ql,ua,!1,ca),o===null))return;let l=e.ray.origin.distanceTo(ca);l<e.near||l>e.far||t.push({distance:l,point:ca.clone(),uv:Es.getInterpolation(ca,Xl,ua,ql,pp,Ku,mp,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};is=class extends ii{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Un,h=Un,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ss=class extends jn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},lo=new ht,gp=new ht,$l=[],vp=new di,lv=new ht,da=new De,fa=new Js,gn=class extends De{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ss(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lo),vp.copy(e.boundingBox).applyMatrix4(lo),this.boundingBox.union(vp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Js),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,lo),fa.copy(e.boundingSphere).applyMatrix4(lo),this.boundingSphere.union(fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(da.geometry=this.geometry,da.material=this.material,da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fa.copy(this.boundingSphere),fa.applyMatrix4(n),e.ray.intersectsSphere(fa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,lo),gp.multiplyMatrices(n,lo),da.matrixWorld=gp,da.raycast(e,$l);for(let a=0,o=$l.length;a<o;a++){let l=$l[a];l.instanceId=r,l.object=this,t.push(l)}$l.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ss(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new is(new Float32Array(i*this.count),i,this.count,Qc,Zi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zu=new F,cv=new F,hv=new Ct,es=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Zu.subVectors(n,t).cross(cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Zu),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||hv.getNormalMatrix(e),i=this.coplanarPoint(Zu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fr=new Js,uv=new ve(.5,.5),Kl=new F,_o=class{constructor(e=new es,t=new es,n=new es,i=new es,r=new es,a=new es){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yi,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],m=r[8],x=r[9],v=r[10],f=r[11],y=r[12],b=r[13],g=r[14],_=r[15];if(i[0].setComponents(c-a,p-h,f-m,_-y).normalize(),i[1].setComponents(c+a,p+h,f+m,_+y).normalize(),i[2].setComponents(c+o,p+u,f+x,_+b).normalize(),i[3].setComponents(c-o,p-u,f-x,_-b).normalize(),n)i[4].setComponents(l,d,v,g).normalize(),i[5].setComponents(c-l,p-d,f-v,_-g).normalize();else if(i[4].setComponents(c-l,p-d,f-v,_-g).normalize(),t===Yi)i[5].setComponents(c+l,p+d,f+v,_+g).normalize();else if(t===ba)i[5].setComponents(l,d,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){fr.center.set(0,0,0);let t=uv.distanceTo(e.center);return fr.radius=.7071067811865476+t,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Kl.x=i.normal.x>0?e.max.x:e.min.x,Kl.y=i.normal.y>0?e.max.y:e.min.y,Kl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Kl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fn=class extends ii{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},gr=class extends ii{constructor(e,t,n=ir,i,r,a,o=Un,l=Un,c,h=fo,u=1){if(h!==fo&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ca=class extends ii{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Mo=class s extends Vt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,m=n*2+r,x=i+1,v=new F,f=new F;for(let y=0;y<=m;y++){let b=0,g=0,_=0,S=0;if(y<=n){let M=y/n,E=M*Math.PI/2;g=-h-e*Math.cos(E),_=e*Math.sin(E),S=-e*Math.cos(E),b=M*u}else if(y<=n+r){let M=(y-n)/r;g=-h+M*t,_=e,S=0,b=u+M*d}else{let M=(y-n-r)/n,E=M*Math.PI/2;g=h+e*Math.sin(E),_=e*Math.cos(E),S=e*Math.sin(E),b=u+d+M*u}let w=Math.max(0,Math.min(1,b/p)),T=0;y===0?T=.5/i:y===m&&(T=-.5/i);for(let M=0;M<=i;M++){let E=M/i,A=E*Math.PI*2,D=Math.sin(A),B=Math.cos(A);f.x=-_*B,f.y=g,f.z=_*D,o.push(f.x,f.y,f.z),v.set(-_*B,S,_*D),v.normalize(),l.push(v.x,v.y,v.z),c.push(E+T,w)}if(y>0){let M=(y-1)*x;for(let E=0;E<i;E++){let A=M+E,D=M+E+1,B=y*x+E,P=y*x+E+1;a.push(A,D,B),a.push(D,P,B)}}}this.setIndex(a),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},js=class s extends Vt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new F,h=new ve;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ut=class s extends Vt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],m=0,x=[],v=n/2,f=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(p,2));function y(){let g=new F,_=new F,S=0,w=(t-e)/n;for(let T=0;T<=r;T++){let M=[],E=T/r,A=E*(t-e)+e;for(let D=0;D<=i;D++){let B=D/i,P=B*l+o,N=Math.sin(P),W=Math.cos(P);_.x=A*N,_.y=-E*n+v,_.z=A*W,u.push(_.x,_.y,_.z),g.set(N,w,W).normalize(),d.push(g.x,g.y,g.z),p.push(B,1-E),M.push(m++)}x.push(M)}for(let T=0;T<i;T++)for(let M=0;M<r;M++){let E=x[M][T],A=x[M+1][T],D=x[M+1][T+1],B=x[M][T+1];(e>0||M!==0)&&(h.push(E,A,B),S+=3),(t>0||M!==r-1)&&(h.push(A,D,B),S+=3)}c.addGroup(f,S,0),f+=S}function b(g){let _=m,S=new ve,w=new F,T=0,M=g===!0?e:t,E=g===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,v*E,0),d.push(0,E,0),p.push(.5,.5),m++;let A=m;for(let D=0;D<=i;D++){let P=D/i*l+o,N=Math.cos(P),W=Math.sin(P);w.x=M*W,w.y=v*E,w.z=M*N,u.push(w.x,w.y,w.z),d.push(0,E,0),S.x=N*.5+.5,S.y=W*.5*E+.5,p.push(S.x,S.y),m++}for(let D=0;D<i;D++){let B=_+D,P=A+D;g===!0?h.push(P,P+1,B):h.push(P+1,P,B),T+=3}c.addGroup(f,T,g===!0?1:2),f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sn=class s extends ut{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ia=class s extends Vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new mt(r,3)),this.setAttribute("normal",new mt(r.slice(),3)),this.setAttribute("uv",new mt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let b=new F,g=new F,_=new F;for(let S=0;S<t.length;S+=3)p(t[S+0],b),p(t[S+1],g),p(t[S+2],_),l(b,g,_,y)}function l(y,b,g,_){let S=_+1,w=[];for(let T=0;T<=S;T++){w[T]=[];let M=y.clone().lerp(g,T/S),E=b.clone().lerp(g,T/S),A=S-T;for(let D=0;D<=A;D++)D===0&&T===S?w[T][D]=M:w[T][D]=M.clone().lerp(E,D/A)}for(let T=0;T<S;T++)for(let M=0;M<2*(S-T)-1;M++){let E=Math.floor(M/2);M%2===0?(d(w[T][E+1]),d(w[T+1][E]),d(w[T][E])):(d(w[T][E+1]),d(w[T+1][E+1]),d(w[T+1][E]))}}function c(y){let b=new F;for(let g=0;g<r.length;g+=3)b.x=r[g+0],b.y=r[g+1],b.z=r[g+2],b.normalize().multiplyScalar(y),r[g+0]=b.x,r[g+1]=b.y,r[g+2]=b.z}function h(){let y=new F;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let g=v(y)/2/Math.PI+.5,_=f(y)/Math.PI+.5;a.push(g,1-_)}m(),u()}function u(){for(let y=0;y<a.length;y+=6){let b=a[y+0],g=a[y+2],_=a[y+4],S=Math.max(b,g,_),w=Math.min(b,g,_);S>.9&&w<.1&&(b<.2&&(a[y+0]+=1),g<.2&&(a[y+2]+=1),_<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,b){let g=y*3;b.x=e[g+0],b.y=e[g+1],b.z=e[g+2]}function m(){let y=new F,b=new F,g=new F,_=new F,S=new ve,w=new ve,T=new ve;for(let M=0,E=0;M<r.length;M+=9,E+=6){y.set(r[M+0],r[M+1],r[M+2]),b.set(r[M+3],r[M+4],r[M+5]),g.set(r[M+6],r[M+7],r[M+8]),S.set(a[E+0],a[E+1]),w.set(a[E+2],a[E+3]),T.set(a[E+4],a[E+5]),_.copy(y).add(b).add(g).divideScalar(3);let A=v(_);x(S,E+0,y,A),x(w,E+2,b,A),x(T,E+4,g,A)}}function x(y,b,g,_){_<0&&y.x===1&&(a[b]=y.x-1),g.x===0&&g.z===0&&(a[b]=_/2/Math.PI+.5)}function v(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},wi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,p=(a-h)/d;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ve:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,i=[],r=[],a=[],o=new F,l=new ht;for(let p=0;p<=e;p++){let m=p/e;i[p]=this.getTangentAt(m,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Lt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,m))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Lt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],p*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Eo=class extends wi{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ve){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fc=class extends Eo{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Zl=new F,Ju=new Ad,ju=new Ad,Qu=new Ad,pc=class extends wi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new F){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Zl.subVectors(i[0],i[1]).add(i[0]),c=Zl);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Zl.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Zl),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),m<1e-4&&(m=x),v<1e-4&&(v=x),Ju.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,x,v),ju.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,x,v),Qu.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,x,v)}else this.curveType==="catmullrom"&&(Ju.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ju.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Qu.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ju.calc(l),ju.calc(l),Qu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new F().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Pa=class extends wi{constructor(e=new ve,t=new ve,n=new ve,i=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ve){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(va(e,i.x,r.x,a.x,o.x),va(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mc=class extends wi{constructor(e=new F,t=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new F){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(va(e,i.x,r.x,a.x,o.x),va(e,i.y,r.y,a.y,o.y),va(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Da=class extends wi{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gc=class extends wi{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends wi{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ga(e,i.x,r.x,a.x),ga(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vc=class extends wi{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ga(e,i.x,r.x,a.x),ga(e,i.y,r.y,a.y),ga(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vr=class extends wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(xp(o,l.x,c.x,h.x,u.x),xp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ve().fromArray(i))}return this}},yp=Object.freeze({__proto__:null,ArcCurve:fc,CatmullRomCurve3:pc,CubicBezierCurve:Pa,CubicBezierCurve3:mc,EllipseCurve:Eo,LineCurve:Da,LineCurve3:gc,QuadraticBezierCurve:ka,QuadraticBezierCurve3:vc,SplineCurve:vr}),xc=class extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yp[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new yp[i.type]().fromJSON(i))}return this}},La=class extends xc{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Da(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new ka(this.currentPoint.clone(),new ve(e,t),new ve(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Pa(this.currentPoint.clone(),new ve(e,t),new ve(n,i),new ve(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new vr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new Eo(e,t,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},So=class extends La{constructor(e){super(e),this.uuid=Ss(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new La().fromJSON(i))}return this}};ad=class{static triangulate(e,t,n=2){return yv(e,t,n)}},uo=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];_p(e),Mp(n,e);let a=e.length;t.forEach(_p);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Mp(n,t[l]);let o=ad.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};yi=class s extends Ia{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},yr=class s extends Vt{constructor(e=[new ve(0,-.5),new ve(.5,0),new ve(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Lt(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new F,d=new ve,p=new F,m=new F,x=new F,v=0,f=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:v=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,p.x=f*1,p.y=-v,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:v=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,p.x=f*1,p.y=-v,p.z=f*0,m.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(m)}for(let y=0;y<=t;y++){let b=n+y*h*i,g=Math.sin(b),_=Math.cos(b);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*g,u.y=e[S].y,u.z=e[S].x*_,a.push(u.x,u.y,u.z),d.x=y/t,d.y=S/(e.length-1),o.push(d.x,d.y);let w=l[3*S+0]*g,T=l[3*S+1],M=l[3*S+0]*_;c.push(w,T,M)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let g=b+y*e.length,_=g,S=g+e.length,w=g+e.length+1,T=g+1;r.push(_,S,T),r.push(w,T,S)}this.setIndex(r),this.setAttribute("position",new mt(a,3)),this.setAttribute("uv",new mt(o,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},Qs=class s extends Ia{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},$n=class s extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],m=[],x=[],v=[];for(let f=0;f<h;f++){let y=f*d-a;for(let b=0;b<c;b++){let g=b*u-r;m.push(g,-y,0),x.push(0,0,1),v.push(b/o),v.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let b=y+c*f,g=y+c*(f+1),_=y+1+c*(f+1),S=y+1+c*f;p.push(b,g,S),p.push(g,_,S)}this.setIndex(p),this.setAttribute("position",new mt(m,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Fi=class s extends Vt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/i,p=new F,m=new ve;for(let x=0;x<=i;x++){for(let v=0;v<=n;v++){let f=r+v/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<i;x++){let v=x*(n+1);for(let f=0;f<n;f++){let y=f+v,b=y,g=y+n+1,_=y+n+2,S=y+1;o.push(b,g,S),o.push(g,_,S)}}this.setIndex(o),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ha=class s extends Vt{constructor(e=new So([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new mt(i,3)),this.setAttribute("normal",new mt(r,3)),this.setAttribute("uv",new mt(a,2));function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;uo.isClockWise(p)===!1&&(p=p.reverse());for(let v=0,f=m.length;v<f;v++){let y=m[v];uo.isClockWise(y)===!0&&(m[v]=y.reverse())}let x=uo.triangulateShape(p,m);for(let v=0,f=m.length;v<f;v++){let y=m[v];p=p.concat(y)}for(let v=0,f=p.length;v<f;v++){let y=p[v];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let v=0,f=x.length;v<f;v++){let y=x[v],b=y[0]+u,g=y[1]+u,_=y[2]+u;n.push(b,g,_),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return zv(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};Dn=class s extends Vt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new F,d=new F,p=[],m=[],x=[],v=[];for(let f=0;f<=n;f++){let y=[],b=f/n,g=0;f===0&&a===0?g=.5/t:f===n&&l===Math.PI&&(g=-.5/t);for(let _=0;_<=t;_++){let S=_/t;u.x=-e*Math.cos(i+S*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(i+S*r)*Math.sin(a+b*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),v.push(S+g,1-b),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<t;y++){let b=h[f][y+1],g=h[f][y],_=h[f+1][y],S=h[f+1][y+1];(f!==0||a>0)&&p.push(b,g,S),(f!==n-1||l<Math.PI)&&p.push(g,_,S)}this.setIndex(p),this.setAttribute("position",new mt(m,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},fi=class s extends Vt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new F,u=new F,d=new F;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let x=m/i*r,v=p/n*Math.PI*2;u.x=(e+t*Math.cos(v))*Math.cos(x),u.y=(e+t*Math.cos(v))*Math.sin(x),u.z=t*Math.sin(v),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let x=(i+1)*p+m-1,v=(i+1)*(p-1)+m-1,f=(i+1)*(p-1)+m,y=(i+1)*p+m;a.push(x,v,y),a.push(v,f,y)}this.setIndex(a),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Na=class extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bi=class extends Li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rs=class extends Li{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ze(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ba=class extends Li{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Ht=class extends Li{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yc=class extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bc=class extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};br=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_c=class extends br{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nd,endingEnd:nd}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case id:r=e,o=2*t-n;break;case sd:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case id:a=e,l=2*n-t;break;case sd:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),x=m*m,v=x*m,f=-d*v+2*d*x-d*m,y=(1+d)*v+(-1.5-2*d)*x+(-.5+d)*m+1,b=(-1-p)*v+(1.5+p)*x+.5*m,g=p*v-p*x;for(let _=0;_!==o;++_)r[_]=f*a[h+_]+y*a[c+_]+b*a[l+_]+g*a[u+_];return r}},Mc=class extends br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Ec=class extends br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ri=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ql(t,this.TimeBufferType),this.values=Ql(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ql(e.times,Array),values:Ql(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _c(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xa:t=this.InterpolantFactoryMethodDiscrete;break;case rc:t=this.InterpolantFactoryMethodLinear;break;case ec:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xa;case this.InterpolantFactoryMethodLinear:return rc;case this.InterpolantFactoryMethodSmooth:return ec}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Uv(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ec,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[d+m]||x!==t[p+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Ri.prototype.ValueTypeName="";Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=rc;er=class extends Ri{constructor(e,t,n){super(e,t,n)}};er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=xa;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;Sc=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}};Sc.prototype.ValueTypeName="color";Tc=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}};Tc.prototype.ValueTypeName="number";wc=class extends br{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Oa=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new wc(this.times,this.values,this.getValueSize(),e)}};Oa.prototype.ValueTypeName="quaternion";Oa.prototype.InterpolantFactoryMethodSmooth=void 0;tr=class extends Ri{constructor(e,t,n){super(e,t,n)}};tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=xa;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;Rc=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}};Rc.prototype.ValueTypeName="vector";tc={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Ac=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},cm=new Ac,wo=class{constructor(e){this.manager=e!==void 0?e:cm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};wo.DEFAULT_MATERIAL_NAME="__DEFAULT";co=new WeakMap,Cc=class extends wo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=tc.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=co.get(a);u===void 0&&(u=[],co.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=mo("img");function l(){h(),t&&t(this);let u=co.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}co.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),tc.remove(`image:${e}`);let d=co.get(this)||[];for(let p=0;p<d.length;p++){let m=d[p];m.onError&&m.onError(u)}co.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),tc.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},Va=class extends wo{constructor(e){super(e)}load(e,t,n,i){let r=new ii,a=new Cc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ro=class extends Hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},_r=class extends Ro{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ed=new ht,Ep=new F,Sp=new F,Ic=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ep),Sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sp),t.updateMatrixWorld(),ed.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ed)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Tp=new ht,pa=new F,td=new F,ld=class extends Ic{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pa.setFromMatrixPosition(e.matrixWorld),n.position.copy(pa),td.copy(n.position),td.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(td),n.updateMatrixWorld(),i.makeTranslation(-pa.x,-pa.y,-pa.z),Tp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tp,n.coordinateSystem,n.reversedDepth)}},Ga=class extends Ro{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ld}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Mr=class extends Ta{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cd=class extends Ic{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Er=class extends Ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.target=new Hn,this.shadow=new cd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Wa=class extends Vt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Pc=class extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Xa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Cd="\\[\\]\\.:\\/",Hv=new RegExp("["+Cd+"]","g"),Id="[^"+Cd+"]",Nv="[^"+Cd.replace("\\.","")+"]",Bv=/((?:WC+[\/:])*)/.source.replace("WC",Id),Ov=/(WCOD+)?/.source.replace("WCOD",Nv),Vv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Id),Gv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Id),Wv=new RegExp("^"+Bv+Ov+Vv+Gv+"$"),Xv=["material","materials","bones","map"],hd=class{constructor(e,t,n){let i=n||mn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mn=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hv,"")}static parseTrackName(e){let t=Wv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Xv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mn.Composite=hd;mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mn.prototype.GetterByBindingType=[mn.prototype._getValue_direct,mn.prototype._getValue_array,mn.prototype._getValue_arrayElement,mn.prototype._getValue_toArray];mn.prototype.SetterByBindingTypeAndVersioning=[[mn.prototype._setValue_direct,mn.prototype._setValue_direct_setNeedsUpdate,mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_array,mn.prototype._setValue_array_setNeedsUpdate,mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_arrayElement,mn.prototype._setValue_arrayElement_setNeedsUpdate,mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_fromArray,mn.prototype._setValue_fromArray_setNeedsUpdate,mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];GE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180")});function km(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Jv(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],x=u[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}function Db(s,e,t,n,i,r,a){let o=new Ze(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function m(b){let g=b.isScene===!0?b.background:null;return g&&g.isTexture&&(g=(b.backgroundBlurriness>0?t:e).get(g)),g}function x(b){let g=!1,_=m(b);_===null?f(o,l):_&&_.isColor&&(f(_,1),g=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(b,g){let _=m(g);_&&(_.isCubeTexture||_.mapping===$a)?(h===void 0&&(h=new De(new at(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:Rr(as.backgroundCube.uniforms),vertexShader:as.backgroundCube.vertexShader,fragmentShader:as.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ar.copy(g.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(Ar)),h.material.toneMapped=Gt.getTransfer(_.colorSpace)!==en,(u!==_||d!==_.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new De(new $n(2,2),new Xt({name:"BackgroundMaterial",uniforms:Rr(as.background.uniforms),vertexShader:as.background.vertexShader,fragmentShader:as.background.fragmentShader,side:ws,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(_.colorSpace)!==en,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,g){b.getRGB(kh,Rd(s)),n.buffers.color.setClear(kh.r,kh.g,kh.b,g,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,g=1){o.set(b),l=g,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:x,addToRenderList:v,dispose:y}}function kb(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(E,A,D,B,P){let N=!1,W=u(B,D,A);r!==W&&(r=W,c(r.object)),N=p(E,B,D,P),N&&m(E,B,D,P),P!==null&&e.update(P,s.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,g(E,A,D,B),P!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return s.createVertexArray()}function c(E){return s.bindVertexArray(E)}function h(E){return s.deleteVertexArray(E)}function u(E,A,D){let B=D.wireframe===!0,P=n[E.id];P===void 0&&(P={},n[E.id]=P);let N=P[A.id];N===void 0&&(N={},P[A.id]=N);let W=N[B];return W===void 0&&(W=d(l()),N[B]=W),W}function d(E){let A=[],D=[],B=[];for(let P=0;P<t;P++)A[P]=0,D[P]=0,B[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:B,object:E,attributes:{},index:null}}function p(E,A,D,B){let P=r.attributes,N=A.attributes,W=0,ne=D.getAttributes();for(let q in ne)if(ne[q].location>=0){let ue=P[q],pe=N[q];if(pe===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor)),ue===void 0||ue.attribute!==pe||pe&&ue.data!==pe.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function m(E,A,D,B){let P={},N=A.attributes,W=0,ne=D.getAttributes();for(let q in ne)if(ne[q].location>=0){let ue=N[q];ue===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(ue=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(ue=E.instanceColor));let pe={};pe.attribute=ue,ue&&ue.data&&(pe.data=ue.data),P[q]=pe,W++}r.attributes=P,r.attributesNum=W,r.index=B}function x(){let E=r.newAttributes;for(let A=0,D=E.length;A<D;A++)E[A]=0}function v(E){f(E,0)}function f(E,A){let D=r.newAttributes,B=r.enabledAttributes,P=r.attributeDivisors;D[E]=1,B[E]===0&&(s.enableVertexAttribArray(E),B[E]=1),P[E]!==A&&(s.vertexAttribDivisor(E,A),P[E]=A)}function y(){let E=r.newAttributes,A=r.enabledAttributes;for(let D=0,B=A.length;D<B;D++)A[D]!==E[D]&&(s.disableVertexAttribArray(D),A[D]=0)}function b(E,A,D,B,P,N,W){W===!0?s.vertexAttribIPointer(E,A,D,P,N):s.vertexAttribPointer(E,A,D,B,P,N)}function g(E,A,D,B){x();let P=B.attributes,N=D.getAttributes(),W=A.defaultAttributeValues;for(let ne in N){let q=N[ne];if(q.location>=0){let se=P[ne];if(se===void 0&&(ne==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),ne==="instanceColor"&&E.instanceColor&&(se=E.instanceColor)),se!==void 0){let ue=se.normalized,pe=se.itemSize,He=e.get(se);if(He===void 0)continue;let ot=He.buffer,Ne=He.type,Ye=He.bytesPerElement,ie=Ne===s.INT||Ne===s.UNSIGNED_INT||se.gpuType===Zc;if(se.isInterleavedBufferAttribute){let K=se.data,ye=K.stride,Te=se.offset;if(K.isInstancedInterleavedBuffer){for(let me=0;me<q.locationSize;me++)f(q.location+me,K.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let me=0;me<q.locationSize;me++)v(q.location+me);s.bindBuffer(s.ARRAY_BUFFER,ot);for(let me=0;me<q.locationSize;me++)b(q.location+me,pe/q.locationSize,Ne,ue,ye*Ye,(Te+pe/q.locationSize*me)*Ye,ie)}else{if(se.isInstancedBufferAttribute){for(let K=0;K<q.locationSize;K++)f(q.location+K,se.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let K=0;K<q.locationSize;K++)v(q.location+K);s.bindBuffer(s.ARRAY_BUFFER,ot);for(let K=0;K<q.locationSize;K++)b(q.location+K,pe/q.locationSize,Ne,ue,pe*Ye,pe/q.locationSize*K*Ye,ie)}}else if(W!==void 0){let ue=W[ne];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(q.location,ue);break;case 3:s.vertexAttrib3fv(q.location,ue);break;case 4:s.vertexAttrib4fv(q.location,ue);break;default:s.vertexAttrib1fv(q.location,ue)}}}}y()}function _(){T();for(let E in n){let A=n[E];for(let D in A){let B=A[D];for(let P in B)h(B[P].object),delete B[P];delete A[D]}delete n[E]}}function S(E){if(n[E.id]===void 0)return;let A=n[E.id];for(let D in A){let B=A[D];for(let P in B)h(B[P].object),delete B[P];delete A[D]}delete n[E.id]}function w(E){for(let A in n){let D=n[A];if(D[E.id]===void 0)continue;let B=D[E.id];for(let P in B)h(B[P].object),delete B[P];delete D[E.id]}}function T(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:M,dispose:_,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:v,disableUnusedAttributes:y}}function Lb(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Fb(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==ri&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let T=w===Qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ci&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Zi&&!T)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),g=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=m>0,S=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:g,vertexTextures:_,maxSamples:S}}function zb(s){let e=this,t=null,n=0,i=!1,r=!1,a=new es,o=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,x=u.clipIntersection,v=u.clipShadows,f=s.get(u);if(!i||m===null||m.length===0||r&&!v)r?h(null):c();else{let y=r?0:n,b=y*4,g=f.clippingState||null;l.value=g,g=h(m,d,b,p);for(let _=0;_!==b;++_)g[_]=t[_];f.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,m){let x=u!==null?u.length:0,v=null;if(x!==0){if(v=l.value,m!==!0||v===null){let f=p+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(v===null||v.length<f)&&(v=new Float32Array(f));for(let b=0,g=p;b!==x;++b,g+=4)a.copy(u[b]).applyMatrix4(y,o),a.normal.toArray(v,g),v[g+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,v}}function Ub(s){let e=new WeakMap;function t(a,o){return o===Yc?a.mapping=Tr:o===$c&&(a.mapping=wr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Yc||o===$c)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new dc(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function Nb(s){let e=[],t=[],n=[],i=s,r=s-ko+1+hm.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-ko?l=hm[a-s+ko-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,x=3,v=2,f=1,y=new Float32Array(x*m*p),b=new Float32Array(v*m*p),g=new Float32Array(f*m*p);for(let S=0;S<p;S++){let w=S%3*2/3-1,T=S>2?0:-1,M=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];y.set(M,x*m*S),b.set(d,v*m*S);let E=[S,S,S,S,S,S];g.set(E,f*m*S)}let _=new Vt;_.setAttribute("position",new jn(y,x)),_.setAttribute("uv",new jn(b,v)),_.setAttribute("faceIndex",new jn(g,f)),e.push(_),i>ko&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fm(s,e,t){let n=new wn(s,e,t);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lh(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Bb(s,e,t){let n=new Float32Array(Pr),i=new F(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function pm(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function mm(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Yd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ob(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Yc||l===$c,h=l===Tr||l===wr;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Fo(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Fo(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Vb(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&go("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Gb(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],s.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,m=u.attributes.position,x=0;if(p!==null){let y=p.array;x=p.version;for(let b=0,g=y.length;b<g;b+=3){let _=y[b+0],S=y[b+1],w=y[b+2];d.push(_,S,S,w,w,_)}}else if(m!==void 0){let y=m.array;x=m.version;for(let b=0,g=y.length/3-1;b<g;b+=3){let _=b+0,S=b+1,w=b+2;d.push(_,S,S,w,w,_)}}else return;let v=new(wd(d)?Sa:Ea)(d,1);v.version=x;let f=r.get(u);f&&e.remove(f),r.set(u,v)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Wb(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,m){m!==0&&(s.drawElementsInstanced(n,p,r,d*a,m),t.update(p,n,m))}function h(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,m);let v=0;for(let f=0;f<m;f++)v+=p[f];t.update(v,n,1)}function u(d,p,m,x){if(m===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],x[f]);else{v.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,m);let f=0;for(let y=0;y<m;y++)f+=p[y]*x[y];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Xb(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qb(s,e,t){let n=new WeakMap,i=new Qt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let M=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,v=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;p===!0&&(b=1),m===!0&&(b=2),x===!0&&(b=3);let g=o.attributes.position.count*b,_=1;g>e.maxTextureSize&&(_=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let S=new Float32Array(g*_*4*u),w=new _a(S,g,_,u);w.type=Zi,w.needsUpdate=!0;let T=b*4;for(let E=0;E<u;E++){let A=v[E],D=f[E],B=y[E],P=g*_*4*E;for(let N=0;N<A.count;N++){let W=N*T;p===!0&&(i.fromBufferAttribute(A,N),S[P+W+0]=i.x,S[P+W+1]=i.y,S[P+W+2]=i.z,S[P+W+3]=0),m===!0&&(i.fromBufferAttribute(D,N),S[P+W+4]=i.x,S[P+W+5]=i.y,S[P+W+6]=i.z,S[P+W+7]=0),x===!0&&(i.fromBufferAttribute(B,N),S[P+W+8]=i.x,S[P+W+9]=i.y,S[P+W+10]=i.z,S[P+W+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new ve(g,_)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Yb(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}function zo(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=vm[i];if(r===void 0&&(r=new Float32Array(i),vm[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Nn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Bn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Uh(s,e){let t=xm[e];t===void 0&&(t=new Int32Array(e),xm[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function $b(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Kb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;s.uniform2fv(this.addr,e),Bn(t,e)}}function Zb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nn(t,e))return;s.uniform3fv(this.addr,e),Bn(t,e)}}function Jb(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;s.uniform4fv(this.addr,e),Bn(t,e)}}function jb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bn(t,e)}else{if(Nn(t,n))return;_m.set(n),s.uniformMatrix2fv(this.addr,!1,_m),Bn(t,n)}}function Qb(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bn(t,e)}else{if(Nn(t,n))return;bm.set(n),s.uniformMatrix3fv(this.addr,!1,bm),Bn(t,n)}}function e1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bn(t,e)}else{if(Nn(t,n))return;ym.set(n),s.uniformMatrix4fv(this.addr,!1,ym),Bn(t,n)}}function t1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function n1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;s.uniform2iv(this.addr,e),Bn(t,e)}}function i1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;s.uniform3iv(this.addr,e),Bn(t,e)}}function s1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;s.uniform4iv(this.addr,e),Bn(t,e)}}function r1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function o1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nn(t,e))return;s.uniform2uiv(this.addr,e),Bn(t,e)}}function a1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nn(t,e))return;s.uniform3uiv(this.addr,e),Bn(t,e)}}function l1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nn(t,e))return;s.uniform4uiv(this.addr,e),Bn(t,e)}}function c1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(gm.compareFunction=Sd,r=gm):r=Lm,t.setTexture2D(e||r,i)}function h1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zm,i)}function u1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Um,i)}function d1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Fm,i)}function f1(s){switch(s){case 5126:return $b;case 35664:return Kb;case 35665:return Zb;case 35666:return Jb;case 35674:return jb;case 35675:return Qb;case 35676:return e1;case 5124:case 35670:return t1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return s1;case 5125:return r1;case 36294:return o1;case 36295:return a1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return d1}}function p1(s,e){s.uniform1fv(this.addr,e)}function m1(s,e){let t=zo(e,this.size,2);s.uniform2fv(this.addr,t)}function g1(s,e){let t=zo(e,this.size,3);s.uniform3fv(this.addr,t)}function v1(s,e){let t=zo(e,this.size,4);s.uniform4fv(this.addr,t)}function x1(s,e){let t=zo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function y1(s,e){let t=zo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function b1(s,e){let t=zo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function _1(s,e){s.uniform1iv(this.addr,e)}function M1(s,e){s.uniform2iv(this.addr,e)}function E1(s,e){s.uniform3iv(this.addr,e)}function S1(s,e){s.uniform4iv(this.addr,e)}function T1(s,e){s.uniform1uiv(this.addr,e)}function w1(s,e){s.uniform2uiv(this.addr,e)}function R1(s,e){s.uniform3uiv(this.addr,e)}function A1(s,e){s.uniform4uiv(this.addr,e)}function C1(s,e,t){let n=this.cache,i=e.length,r=Uh(t,i);Nn(n,r)||(s.uniform1iv(this.addr,r),Bn(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Lm,r[a])}function I1(s,e,t){let n=this.cache,i=e.length,r=Uh(t,i);Nn(n,r)||(s.uniform1iv(this.addr,r),Bn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||zm,r[a])}function P1(s,e,t){let n=this.cache,i=e.length,r=Uh(t,i);Nn(n,r)||(s.uniform1iv(this.addr,r),Bn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Um,r[a])}function D1(s,e,t){let n=this.cache,i=e.length,r=Uh(t,i);Nn(n,r)||(s.uniform1iv(this.addr,r),Bn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Fm,r[a])}function k1(s){switch(s){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return v1;case 35674:return x1;case 35675:return y1;case 35676:return b1;case 5124:case 35670:return _1;case 35667:case 35671:return M1;case 35668:case 35672:return E1;case 35669:case 35673:return S1;case 5125:return T1;case 36294:return w1;case 36295:return R1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return I1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return D1}}function Mm(s,e){s.seq.push(e),s.map[e.id]=e}function L1(s,e,t){let n=s.name,i=n.length;for(Hd.lastIndex=0;;){let r=Hd.exec(n),a=Hd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Mm(t,c===void 0?new Nd(o,s,e):new Bd(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Od(o),Mm(t,u)),t=u}}}function Em(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}function U1(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function H1(s){Gt._getMatrix(Sm,Gt.workingColorSpace,s);let e=`mat3( ${Sm.elements.map(t=>t.toFixed(4))} )`;switch(Gt.getTransfer(s)){case ya:return[e,"LinearTransferOETF"];case en:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Tm(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+U1(s.getShaderSource(e),o)}else return r}function N1(s,e){let t=H1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function B1(s,e){let t;switch(e){case Oc:t="Linear";break;case Vc:t="Reinhard";break;case Gc:t="Cineon";break;case Co:t="ACESFilmic";break;case Xc:t="AgX";break;case qc:t="Neutral";break;case Wc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function O1(){Gt.getLuminanceCoefficients(Fh);let s=Fh.x.toFixed(4),e=Fh.y.toFixed(4),t=Fh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function G1(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function W1(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function el(s){return s!==""}function wm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Vd(s){return s.replace(X1,Y1)}function Y1(s,e){let t=Pt[e];if(t===void 0){let n=q1.get(e);if(n!==void 0)t=Pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vd(t)}function Am(s){return s.replace($1,K1)}function K1(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Cm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Z1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===dd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Dc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===os&&(e="SHADOWMAP_TYPE_VSM"),e}function J1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Tr:case wr:e="ENVMAP_TYPE_CUBE";break;case $a:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j1(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===wr&&(e="ENVMAP_MODE_REFRACTION"),e}function Q1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Bc:e="ENVMAP_BLENDING_MULTIPLY";break;case Vp:e="ENVMAP_BLENDING_MIX";break;case Gp:e="ENVMAP_BLENDING_ADD";break}return e}function e_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function t_(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Z1(t),c=J1(t),h=j1(t),u=Q1(t),d=e_(t),p=V1(t),m=G1(r),x=i.createProgram(),v,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(el).join(`
`),v.length>0&&(v+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(el).join(`
`),f.length>0&&(f+=`
`)):(v=[Cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),f=[Cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ki?"#define TONE_MAPPING":"",t.toneMapping!==Ki?Pt.tonemapping_pars_fragment:"",t.toneMapping!==Ki?B1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,N1("linearToOutputTexel",t.outputColorSpace),O1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(el).join(`
`)),a=Vd(a),a=wm(a,t),a=Rm(a,t),o=Vd(o),o=wm(o,t),o=Rm(o,t),a=Am(a),o=Am(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,v=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,f=["#define varying in",t.glslVersion===Td?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=y+v+a,g=y+f+o,_=Em(i,i.VERTEX_SHADER,b),S=Em(i,i.FRAGMENT_SHADER,g);i.attachShader(x,_),i.attachShader(x,S),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function w(A){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(x)||"",B=i.getShaderInfoLog(_)||"",P=i.getShaderInfoLog(S)||"",N=D.trim(),W=B.trim(),ne=P.trim(),q=!0,se=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,_,S);else{let ue=Tm(i,_,"vertex"),pe=Tm(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+ue+`
`+pe)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(W===""||ne==="")&&(se=!1);se&&(A.diagnostics={runnable:q,programLog:N,vertexShader:{log:W,prefix:v},fragmentShader:{log:ne,prefix:f}})}i.deleteShader(_),i.deleteShader(S),T=new Lo(i,x),M=W1(i,x)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(x,F1)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=_,this.fragmentShader=S,this}function i_(s,e,t,n,i,r,a){let o=new Ma,l=new Gd,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function v(M,E,A,D,B){let P=D.fog,N=B.geometry,W=M.isMeshStandardMaterial?D.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),q=ne&&ne.mapping===$a?ne.image.height:null,se=m[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ue=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,pe=ue!==void 0?ue.length:0,He=0;N.morphAttributes.position!==void 0&&(He=1),N.morphAttributes.normal!==void 0&&(He=2),N.morphAttributes.color!==void 0&&(He=3);let ot,Ne,Ye,ie;if(se){let Ut=as[se];ot=Ut.vertexShader,Ne=Ut.fragmentShader}else ot=M.vertexShader,Ne=M.fragmentShader,l.update(M),Ye=l.getVertexShaderID(M),ie=l.getFragmentShaderID(M);let K=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Te=B.isInstancedMesh===!0,me=B.isBatchedMesh===!0,$e=!!M.map,nt=!!M.matcap,z=!!ne,lt=!!M.aoMap,Ke=!!M.lightMap,Xe=!!M.bumpMap,ze=!!M.normalMap,It=!!M.displacementMap,we=!!M.emissiveMap,qe=!!M.metalnessMap,Rt=!!M.roughnessMap,_t=M.anisotropy>0,H=M.clearcoat>0,R=M.dispersion>0,Y=M.iridescence>0,ce=M.sheen>0,fe=M.transmission>0,le=_t&&!!M.anisotropyMap,Je=H&&!!M.clearcoatMap,be=H&&!!M.clearcoatNormalMap,Ve=H&&!!M.clearcoatRoughnessMap,Ie=Y&&!!M.iridescenceMap,_e=Y&&!!M.iridescenceThicknessMap,Pe=ce&&!!M.sheenColorMap,rt=ce&&!!M.sheenRoughnessMap,et=!!M.specularMap,ke=!!M.specularColorMap,it=!!M.specularIntensityMap,X=fe&&!!M.transmissionMap,de=fe&&!!M.thicknessMap,$=!!M.gradientMap,Be=!!M.alphaMap,xe=M.alphaTest>0,ae=!!M.alphaHash,Ue=!!M.extensions,gt=Ki;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(gt=s.toneMapping);let bt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:ot,fragmentShader:Ne,defines:M.defines,customVertexShaderID:Ye,customFragmentShaderID:ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:me,batchingColor:me&&B._colorsTexture!==null,instancing:Te,instancingColor:Te&&B.instanceColor!==null,instancingMorph:Te&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:mr,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:nt,envMap:z,envMapMode:z&&ne.mapping,envMapCubeUVHeight:q,aoMap:lt,lightMap:Ke,bumpMap:Xe,normalMap:ze,displacementMap:d&&It,emissiveMap:we,normalMapObjectSpace:ze&&M.normalMapType===Yp,normalMapTangentSpace:ze&&M.normalMapType===Po,metalnessMap:qe,roughnessMap:Rt,anisotropy:_t,anisotropyMap:le,clearcoat:H,clearcoatMap:Je,clearcoatNormalMap:be,clearcoatRoughnessMap:Ve,dispersion:R,iridescence:Y,iridescenceMap:Ie,iridescenceThicknessMap:_e,sheen:ce,sheenColorMap:Pe,sheenRoughnessMap:rt,specularMap:et,specularColorMap:ke,specularIntensityMap:it,transmission:fe,transmissionMap:X,thicknessMap:de,gradientMap:$,opaque:M.transparent===!1&&M.blending===Rs&&M.alphaToCoverage===!1,alphaMap:Be,alphaTest:xe,alphaHash:ae,combine:M.combine,mapUv:$e&&x(M.map.channel),aoMapUv:lt&&x(M.aoMap.channel),lightMapUv:Ke&&x(M.lightMap.channel),bumpMapUv:Xe&&x(M.bumpMap.channel),normalMapUv:ze&&x(M.normalMap.channel),displacementMapUv:It&&x(M.displacementMap.channel),emissiveMapUv:we&&x(M.emissiveMap.channel),metalnessMapUv:qe&&x(M.metalnessMap.channel),roughnessMapUv:Rt&&x(M.roughnessMap.channel),anisotropyMapUv:le&&x(M.anisotropyMap.channel),clearcoatMapUv:Je&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:be&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:rt&&x(M.sheenRoughnessMap.channel),specularMapUv:et&&x(M.specularMap.channel),specularColorMapUv:ke&&x(M.specularColorMap.channel),specularIntensityMapUv:it&&x(M.specularIntensityMap.channel),transmissionMapUv:X&&x(M.transmissionMap.channel),thicknessMapUv:de&&x(M.thicknessMap.channel),alphaMapUv:Be&&x(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ze||_t),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!N.attributes.uv&&($e||Be),fog:!!P,useFog:M.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:B.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:He,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:gt,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&Gt.getTransfer(M.map.colorSpace)===en,decodeVideoTextureEmissive:we&&M.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(M.emissiveMap.colorSpace)===en,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===nn,flipSided:M.side===Rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ue&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&M.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function f(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)E.push(A),E.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(y(E,M),b(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function b(M,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),M.push(o.mask)}function g(M){let E=m[M.type],A;if(E){let D=as[E];A=pi.clone(D.uniforms)}else A=M.uniforms;return A}function _(M,E){let A;for(let D=0,B=h.length;D<B;D++){let P=h[D];if(P.cacheKey===E){A=P,++A.usedTimes;break}}return A===void 0&&(A=new t_(s,E,M,r),h.push(A)),A}function S(M){if(--M.usedTimes===0){let E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function w(M){l.remove(M)}function T(){l.dispose()}return{getParameters:v,getProgramCacheKey:f,getUniforms:g,acquireProgram:_,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:T}}function s_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function r_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Im(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Pm(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,p,m,x,v){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:x,group:v},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=m,f.renderOrder=u.renderOrder,f.z=x,f.group=v),e++,f}function o(u,d,p,m,x,v){let f=a(u,d,p,m,x,v);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(u,d,p,m,x,v){let f=a(u,d,p,m,x,v);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||r_),n.length>1&&n.sort(d||Im),i.length>1&&i.sort(d||Im)}function h(){for(let u=e,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function o_(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Pm,s.set(n,[a])):i>=r.length?(a=new Pm,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function a_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ze};break;case"SpotLight":t={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function l_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}function h_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function u_(s){let e=new a_,t=l_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let i=new F,r=new ht,a=new ht;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,m=0,x=0,v=0,f=0,y=0,b=0,g=0,_=0,S=0,w=0;c.sort(h_);for(let M=0,E=c.length;M<E;M++){let A=c[M],D=A.color,B=A.intensity,P=A.distance,N=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=D.r*B,u+=D.g*B,d+=D.b*B;else if(A.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(A.sh.coefficients[W],B);w++}else if(A.isDirectionalLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let ne=A.shadow,q=t.get(A);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,n.directionalShadow[p]=q,n.directionalShadowMap[p]=N,n.directionalShadowMatrix[p]=A.shadow.matrix,y++}n.directional[p]=W,p++}else if(A.isSpotLight){let W=e.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(D).multiplyScalar(B),W.distance=P,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,n.spot[x]=W;let ne=A.shadow;if(A.map&&(n.spotLightMap[_]=A.map,_++,ne.updateMatrices(A),A.castShadow&&S++),n.spotLightMatrix[x]=ne.matrix,A.castShadow){let q=t.get(A);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=N,g++}x++}else if(A.isRectAreaLight){let W=e.get(A);W.color.copy(D).multiplyScalar(B),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),n.rectArea[v]=W,v++}else if(A.isPointLight){let W=e.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){let ne=A.shadow,q=t.get(A);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,q.shadowCameraNear=ne.camera.near,q.shadowCameraFar=ne.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=N,n.pointShadowMatrix[m]=A.shadow.matrix,b++}n.point[m]=W,m++}else if(A.isHemisphereLight){let W=e.get(A);W.skyColor.copy(A.color).multiplyScalar(B),W.groundColor.copy(A.groundColor).multiplyScalar(B),n.hemi[f]=W,f++}}v>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=We.LTC_FLOAT_1,n.rectAreaLTC2=We.LTC_FLOAT_2):(n.rectAreaLTC1=We.LTC_HALF_1,n.rectAreaLTC2=We.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==p||T.pointLength!==m||T.spotLength!==x||T.rectAreaLength!==v||T.hemiLength!==f||T.numDirectionalShadows!==y||T.numPointShadows!==b||T.numSpotShadows!==g||T.numSpotMaps!==_||T.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=v,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=g+_-S,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,T.directionalLength=p,T.pointLength=m,T.spotLength=x,T.rectAreaLength=v,T.hemiLength=f,T.numDirectionalShadows=y,T.numPointShadows=b,T.numSpotShadows=g,T.numSpotMaps=_,T.numLightProbes=w,n.version=c_++)}function l(c,h){let u=0,d=0,p=0,m=0,x=0,v=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){let b=c[f];if(b.isDirectionalLight){let g=n.directional[u];g.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),g.direction.sub(i),g.direction.transformDirection(v),u++}else if(b.isSpotLight){let g=n.spot[p];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(v),g.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),g.direction.sub(i),g.direction.transformDirection(v),p++}else if(b.isRectAreaLight){let g=n.rectArea[m];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(v),a.identity(),r.copy(b.matrixWorld),r.premultiply(v),a.extractRotation(r),g.halfWidth.set(b.width*.5,0,0),g.halfHeight.set(0,b.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){let g=n.point[d];g.position.setFromMatrixPosition(b.matrixWorld),g.position.applyMatrix4(v),d++}else if(b.isHemisphereLight){let g=n.hemi[x];g.direction.setFromMatrixPosition(b.matrixWorld),g.direction.transformDirection(v),x++}}}return{setup:o,setupView:l,state:n}}function Dm(s){let e=new u_(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function d_(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Dm(s),e.set(i,[o])):r>=a.length?(o=new Dm(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function m_(s,e,t){let n=new _o,i=new ve,r=new ve,a=new Qt,o=new yc({depthPacking:qp}),l=new bc,c={},h=t.maxTextureSize,u={[ws]:Rn,[Rn]:ws,[nn]:nn},d=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:f_,fragmentShader:p_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new Vt;m.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new De(m,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dd;let f=this.type;this.render=function(S,w,T){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||S.length===0)return;let M=s.getRenderTarget(),E=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),D=s.state;D.setBlending(kn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=f!==os&&this.type===os,P=f===os&&this.type!==os;for(let N=0,W=S.length;N<W;N++){let ne=S[N],q=ne.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let se=q.getFrameExtents();if(i.multiply(se),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/se.x),i.x=r.x*se.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/se.y),i.y=r.y*se.y,q.mapSize.y=r.y)),q.map===null||B===!0||P===!0){let pe=this.type!==os?{minFilter:Un,magFilter:Un}:{};q.map!==null&&q.map.dispose(),q.map=new wn(i.x,i.y,pe),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let ue=q.getViewportCount();for(let pe=0;pe<ue;pe++){let He=q.getViewport(pe);a.set(r.x*He.x,r.y*He.y,r.x*He.z,r.y*He.w),D.viewport(a),q.updateMatrices(ne,pe),n=q.getFrustum(),g(w,T,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===os&&y(q,T),q.needsUpdate=!1}f=this.type,v.needsUpdate=!1,s.setRenderTarget(M,E,A)};function y(S,w){let T=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new wn(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(w,null,T,d,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(w,null,T,p,x,null)}function b(S,w,T,M){let E=null,A=T.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)E=A;else if(E=T.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=E.uuid,B=w.uuid,P=c[D];P===void 0&&(P={},c[D]=P);let N=P[B];N===void 0&&(N=E.clone(),P[B]=N,w.addEventListener("dispose",_)),E=N}if(E.visible=w.visible,E.wireframe=w.wireframe,M===os?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,T.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let D=s.properties.get(E);D.light=T}return E}function g(S,w,T,M,E){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===os)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,S.matrixWorld);let B=e.update(S),P=S.material;if(Array.isArray(P)){let N=B.groups;for(let W=0,ne=N.length;W<ne;W++){let q=N[W],se=P[q.materialIndex];if(se&&se.visible){let ue=b(S,se,M,E);S.onBeforeShadow(s,S,w,T,B,ue,q),s.renderBufferDirect(T,null,B,ue,S,q),S.onAfterShadow(s,S,w,T,B,ue,q)}}}else if(P.visible){let N=b(S,P,M,E);S.onBeforeShadow(s,S,w,T,B,N,null),s.renderBufferDirect(T,null,B,N,S,null),S.onAfterShadow(s,S,w,T,B,N,null)}}let D=S.children;for(let B=0,P=D.length;B<P;B++)g(D[B],w,T,M,E)}function _(S){S.target.removeEventListener("dispose",_);for(let T in c){let M=c[T],E=S.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function v_(s,e){function t(){let X=!1,de=new Qt,$=null,Be=new Qt(0,0,0,0);return{setMask:function(xe){$!==xe&&!X&&(s.colorMask(xe,xe,xe,xe),$=xe)},setLocked:function(xe){X=xe},setClear:function(xe,ae,Ue,gt,bt){bt===!0&&(xe*=gt,ae*=gt,Ue*=gt),de.set(xe,ae,Ue,gt),Be.equals(de)===!1&&(s.clearColor(xe,ae,Ue,gt),Be.copy(de))},reset:function(){X=!1,$=null,Be.set(-1,0,0,0)}}}function n(){let X=!1,de=!1,$=null,Be=null,xe=null;return{setReversed:function(ae){if(de!==ae){let Ue=e.get("EXT_clip_control");ae?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),de=ae;let gt=xe;xe=null,this.setClear(gt)}},getReversed:function(){return de},setTest:function(ae){ae?K(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(ae){$!==ae&&!X&&(s.depthMask(ae),$=ae)},setFunc:function(ae){if(de&&(ae=g_[ae]),Be!==ae){switch(ae){case Lc:s.depthFunc(s.NEVER);break;case Fc:s.depthFunc(s.ALWAYS);break;case zc:s.depthFunc(s.LESS);break;case pr:s.depthFunc(s.LEQUAL);break;case Uc:s.depthFunc(s.EQUAL);break;case Hc:s.depthFunc(s.GEQUAL);break;case Ao:s.depthFunc(s.GREATER);break;case Nc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=ae}},setLocked:function(ae){X=ae},setClear:function(ae){xe!==ae&&(de&&(ae=1-ae),s.clearDepth(ae),xe=ae)},reset:function(){X=!1,$=null,Be=null,xe=null,de=!1}}}function i(){let X=!1,de=null,$=null,Be=null,xe=null,ae=null,Ue=null,gt=null,bt=null;return{setTest:function(Ut){X||(Ut?K(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(Ut){de!==Ut&&!X&&(s.stencilMask(Ut),de=Ut)},setFunc:function(Ut,Gn,ci){($!==Ut||Be!==Gn||xe!==ci)&&(s.stencilFunc(Ut,Gn,ci),$=Ut,Be=Gn,xe=ci)},setOp:function(Ut,Gn,ci){(ae!==Ut||Ue!==Gn||gt!==ci)&&(s.stencilOp(Ut,Gn,ci),ae=Ut,Ue=Gn,gt=ci)},setLocked:function(Ut){X=Ut},setClear:function(Ut){bt!==Ut&&(s.clearStencil(Ut),bt=Ut)},reset:function(){X=!1,de=null,$=null,Be=null,xe=null,ae=null,Ue=null,gt=null,bt=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,x=!1,v=null,f=null,y=null,b=null,g=null,_=null,S=null,w=new Ze(0,0,0),T=0,M=!1,E=null,A=null,D=null,B=null,P=null,N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ne=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=ne>=2);let se=null,ue={},pe=s.getParameter(s.SCISSOR_BOX),He=s.getParameter(s.VIEWPORT),ot=new Qt().fromArray(pe),Ne=new Qt().fromArray(He);function Ye(X,de,$,Be){let xe=new Uint8Array(4),ae=s.createTexture();s.bindTexture(X,ae),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ue=0;Ue<$;Ue++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(de,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(de+Ue,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return ae}let ie={};ie[s.TEXTURE_2D]=Ye(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=Ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=Ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=Ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(s.DEPTH_TEST),a.setFunc(pr),Xe(!1),ze(ud),K(s.CULL_FACE),lt(kn);function K(X){h[X]!==!0&&(s.enable(X),h[X]=!0)}function ye(X){h[X]!==!1&&(s.disable(X),h[X]=!1)}function Te(X,de){return u[X]!==de?(s.bindFramebuffer(X,de),u[X]=de,X===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=de),X===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=de),!0):!1}function me(X,de){let $=p,Be=!1;if(X){$=d.get(de),$===void 0&&($=[],d.set(de,$));let xe=X.textures;if($.length!==xe.length||$[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,Ue=xe.length;ae<Ue;ae++)$[ae]=s.COLOR_ATTACHMENT0+ae;$.length=xe.length,Be=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,Be=!0);Be&&s.drawBuffers($)}function $e(X){return m!==X?(s.useProgram(X),m=X,!0):!1}let nt={[Ti]:s.FUNC_ADD,[Ap]:s.FUNC_SUBTRACT,[Cp]:s.FUNC_REVERSE_SUBTRACT};nt[Ip]=s.MIN,nt[Pp]=s.MAX;let z={[Sr]:s.ZERO,[Dp]:s.ONE,[kp]:s.SRC_COLOR,[nc]:s.SRC_ALPHA,[Up]:s.SRC_ALPHA_SATURATE,[Ya]:s.DST_COLOR,[qa]:s.DST_ALPHA,[Lp]:s.ONE_MINUS_SRC_COLOR,[ic]:s.ONE_MINUS_SRC_ALPHA,[zp]:s.ONE_MINUS_DST_COLOR,[Fp]:s.ONE_MINUS_DST_ALPHA,[Hp]:s.CONSTANT_COLOR,[Np]:s.ONE_MINUS_CONSTANT_COLOR,[Bp]:s.CONSTANT_ALPHA,[Op]:s.ONE_MINUS_CONSTANT_ALPHA};function lt(X,de,$,Be,xe,ae,Ue,gt,bt,Ut){if(X===kn){x===!0&&(ye(s.BLEND),x=!1);return}if(x===!1&&(K(s.BLEND),x=!0),X!==kc){if(X!==v||Ut!==M){if((f!==Ti||g!==Ti)&&(s.blendEquation(s.FUNC_ADD),f=Ti,g=Ti),Ut)switch(X){case Rs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ai:s.blendFunc(s.ONE,s.ONE);break;case fd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ai:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case fd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}y=null,b=null,_=null,S=null,w.set(0,0,0),T=0,v=X,M=Ut}return}xe=xe||de,ae=ae||$,Ue=Ue||Be,(de!==f||xe!==g)&&(s.blendEquationSeparate(nt[de],nt[xe]),f=de,g=xe),($!==y||Be!==b||ae!==_||Ue!==S)&&(s.blendFuncSeparate(z[$],z[Be],z[ae],z[Ue]),y=$,b=Be,_=ae,S=Ue),(gt.equals(w)===!1||bt!==T)&&(s.blendColor(gt.r,gt.g,gt.b,bt),w.copy(gt),T=bt),v=X,M=!1}function Ke(X,de){X.side===nn?ye(s.CULL_FACE):K(s.CULL_FACE);let $=X.side===Rn;de&&($=!$),Xe($),X.blending===Rs&&X.transparent===!1?lt(kn):lt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),r.setMask(X.colorWrite);let Be=X.stencilWrite;o.setTest(Be),Be&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),we(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(X){E!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),E=X)}function ze(X){X!==wp?(K(s.CULL_FACE),X!==A&&(X===ud?s.cullFace(s.BACK):X===Rp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),A=X}function It(X){X!==D&&(W&&s.lineWidth(X),D=X)}function we(X,de,$){X?(K(s.POLYGON_OFFSET_FILL),(B!==de||P!==$)&&(s.polygonOffset(de,$),B=de,P=$)):ye(s.POLYGON_OFFSET_FILL)}function qe(X){X?K(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function Rt(X){X===void 0&&(X=s.TEXTURE0+N-1),se!==X&&(s.activeTexture(X),se=X)}function _t(X,de,$){$===void 0&&(se===null?$=s.TEXTURE0+N-1:$=se);let Be=ue[$];Be===void 0&&(Be={type:void 0,texture:void 0},ue[$]=Be),(Be.type!==X||Be.texture!==de)&&(se!==$&&(s.activeTexture($),se=$),s.bindTexture(X,de||ie[X]),Be.type=X,Be.texture=de)}function H(){let X=ue[se];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function R(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Y(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function le(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Je(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ve(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pe(X){ot.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),ot.copy(X))}function rt(X){Ne.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Ne.copy(X))}function et(X,de){let $=c.get(de);$===void 0&&($=new WeakMap,c.set(de,$));let Be=$.get(X);Be===void 0&&(Be=s.getUniformBlockIndex(de,X.name),$.set(X,Be))}function ke(X,de){let Be=c.get(de).get(X);l.get(de)!==Be&&(s.uniformBlockBinding(de,Be,X.__bindingPointIndex),l.set(de,Be))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},se=null,ue={},u={},d=new WeakMap,p=[],m=null,x=!1,v=null,f=null,y=null,b=null,g=null,_=null,S=null,w=new Ze(0,0,0),T=0,M=!1,E=null,A=null,D=null,B=null,P=null,ot.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:ye,bindFramebuffer:Te,drawBuffers:me,useProgram:$e,setBlending:lt,setMaterial:Ke,setFlipSided:Xe,setCullFace:ze,setLineWidth:It,setPolygonOffset:we,setScissorTest:qe,activeTexture:Rt,bindTexture:_t,unbindTexture:H,compressedTexImage2D:R,compressedTexImage3D:Y,texImage2D:Ie,texImage3D:_e,updateUBOMapping:et,uniformBlockBinding:ke,texStorage2D:be,texStorage3D:Ve,texSubImage2D:ce,texSubImage3D:fe,compressedTexSubImage2D:le,compressedTexSubImage3D:Je,scissor:Pe,viewport:rt,reset:it}}function x_(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(H,R){return p?new OffscreenCanvas(H,R):mo("canvas")}function x(H,R,Y){let ce=1,fe=_t(H);if((fe.width>Y||fe.height>Y)&&(ce=Y/Math.max(fe.width,fe.height)),ce<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){let le=Math.floor(ce*fe.width),Je=Math.floor(ce*fe.height);u===void 0&&(u=m(le,Je));let be=R?m(le,Je):u;return be.width=le,be.height=Je,be.getContext("2d").drawImage(H,0,0,le,Je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+le+"x"+Je+")."),be}else return"data"in H&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),H;return H}function v(H){return H.generateMipmaps}function f(H){s.generateMipmap(H)}function y(H){return H.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?s.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(H,R,Y,ce,fe=!1){if(H!==null){if(s[H]!==void 0)return s[H];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let le=R;if(R===s.RED&&(Y===s.FLOAT&&(le=s.R32F),Y===s.HALF_FLOAT&&(le=s.R16F),Y===s.UNSIGNED_BYTE&&(le=s.R8)),R===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(le=s.R8UI),Y===s.UNSIGNED_SHORT&&(le=s.R16UI),Y===s.UNSIGNED_INT&&(le=s.R32UI),Y===s.BYTE&&(le=s.R8I),Y===s.SHORT&&(le=s.R16I),Y===s.INT&&(le=s.R32I)),R===s.RG&&(Y===s.FLOAT&&(le=s.RG32F),Y===s.HALF_FLOAT&&(le=s.RG16F),Y===s.UNSIGNED_BYTE&&(le=s.RG8)),R===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(le=s.RG8UI),Y===s.UNSIGNED_SHORT&&(le=s.RG16UI),Y===s.UNSIGNED_INT&&(le=s.RG32UI),Y===s.BYTE&&(le=s.RG8I),Y===s.SHORT&&(le=s.RG16I),Y===s.INT&&(le=s.RG32I)),R===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(le=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(le=s.RGB16UI),Y===s.UNSIGNED_INT&&(le=s.RGB32UI),Y===s.BYTE&&(le=s.RGB8I),Y===s.SHORT&&(le=s.RGB16I),Y===s.INT&&(le=s.RGB32I)),R===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(le=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(le=s.RGBA16UI),Y===s.UNSIGNED_INT&&(le=s.RGBA32UI),Y===s.BYTE&&(le=s.RGBA8I),Y===s.SHORT&&(le=s.RGBA16I),Y===s.INT&&(le=s.RGBA32I)),R===s.RGB&&(Y===s.UNSIGNED_INT_5_9_9_9_REV&&(le=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(le=s.R11F_G11F_B10F)),R===s.RGBA){let Je=fe?ya:Gt.getTransfer(ce);Y===s.FLOAT&&(le=s.RGBA32F),Y===s.HALF_FLOAT&&(le=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(le=Je===en?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(le=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(le=s.RGB5_A1)}return(le===s.R16F||le===s.R32F||le===s.RG16F||le===s.RG32F||le===s.RGBA16F||le===s.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function g(H,R){let Y;return H?R===null||R===ir||R===sr?Y=s.DEPTH24_STENCIL8:R===Zi?Y=s.DEPTH32F_STENCIL8:R===Io&&(Y=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ir||R===sr?Y=s.DEPTH_COMPONENT24:R===Zi?Y=s.DEPTH_COMPONENT32F:R===Io&&(Y=s.DEPTH_COMPONENT16),Y}function _(H,R){return v(H)===!0||H.isFramebufferTexture&&H.minFilter!==Un&&H.minFilter!==$i?Math.log2(Math.max(R.width,R.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?R.mipmaps.length:1}function S(H){let R=H.target;R.removeEventListener("dispose",S),T(R),R.isVideoTexture&&h.delete(R)}function w(H){let R=H.target;R.removeEventListener("dispose",w),E(R)}function T(H){let R=n.get(H);if(R.__webglInit===void 0)return;let Y=H.source,ce=d.get(Y);if(ce){let fe=ce[R.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&M(H),Object.keys(ce).length===0&&d.delete(Y)}n.remove(H)}function M(H){let R=n.get(H);s.deleteTexture(R.__webglTexture);let Y=H.source,ce=d.get(Y);delete ce[R.__cacheKey],a.memory.textures--}function E(H){let R=n.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),n.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(R.__webglFramebuffer[ce]))for(let fe=0;fe<R.__webglFramebuffer[ce].length;fe++)s.deleteFramebuffer(R.__webglFramebuffer[ce][fe]);else s.deleteFramebuffer(R.__webglFramebuffer[ce]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[ce])}else{if(Array.isArray(R.__webglFramebuffer))for(let ce=0;ce<R.__webglFramebuffer.length;ce++)s.deleteFramebuffer(R.__webglFramebuffer[ce]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ce=0;ce<R.__webglColorRenderbuffer.length;ce++)R.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[ce]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let Y=H.textures;for(let ce=0,fe=Y.length;ce<fe;ce++){let le=n.get(Y[ce]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(Y[ce])}n.remove(H)}let A=0;function D(){A=0}function B(){let H=A;return H>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+H+" texture units while this GPU supports only "+i.maxTextures),A+=1,H}function P(H){let R=[];return R.push(H.wrapS),R.push(H.wrapT),R.push(H.wrapR||0),R.push(H.magFilter),R.push(H.minFilter),R.push(H.anisotropy),R.push(H.internalFormat),R.push(H.format),R.push(H.type),R.push(H.generateMipmaps),R.push(H.premultiplyAlpha),R.push(H.flipY),R.push(H.unpackAlignment),R.push(H.colorSpace),R.join()}function N(H,R){let Y=n.get(H);if(H.isVideoTexture&&qe(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&Y.__version!==H.version){let ce=H.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(Y,H,R);return}}else H.isExternalTexture&&(Y.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+R)}function W(H,R){let Y=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&Y.__version!==H.version){ie(Y,H,R);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+R)}function ne(H,R){let Y=n.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&Y.__version!==H.version){ie(Y,H,R);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+R)}function q(H,R){let Y=n.get(H);if(H.version>0&&Y.__version!==H.version){K(Y,H,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+R)}let se={[En]:s.REPEAT,[Zs]:s.CLAMP_TO_EDGE,[sc]:s.MIRRORED_REPEAT},ue={[Un]:s.NEAREST,[Wp]:s.NEAREST_MIPMAP_NEAREST,[Ka]:s.NEAREST_MIPMAP_LINEAR,[$i]:s.LINEAR,[Kc]:s.LINEAR_MIPMAP_NEAREST,[nr]:s.LINEAR_MIPMAP_LINEAR},pe={[$p]:s.NEVER,[em]:s.ALWAYS,[Kp]:s.LESS,[Sd]:s.LEQUAL,[Zp]:s.EQUAL,[Qp]:s.GEQUAL,[Jp]:s.GREATER,[jp]:s.NOTEQUAL};function He(H,R){if(R.type===Zi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===$i||R.magFilter===Kc||R.magFilter===Ka||R.magFilter===nr||R.minFilter===$i||R.minFilter===Kc||R.minFilter===Ka||R.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(H,s.TEXTURE_WRAP_S,se[R.wrapS]),s.texParameteri(H,s.TEXTURE_WRAP_T,se[R.wrapT]),(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)&&s.texParameteri(H,s.TEXTURE_WRAP_R,se[R.wrapR]),s.texParameteri(H,s.TEXTURE_MAG_FILTER,ue[R.magFilter]),s.texParameteri(H,s.TEXTURE_MIN_FILTER,ue[R.minFilter]),R.compareFunction&&(s.texParameteri(H,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(H,s.TEXTURE_COMPARE_FUNC,pe[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Un||R.minFilter!==Ka&&R.minFilter!==nr||R.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(H,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ot(H,R){let Y=!1;H.__webglInit===void 0&&(H.__webglInit=!0,R.addEventListener("dispose",S));let ce=R.source,fe=d.get(ce);fe===void 0&&(fe={},d.set(ce,fe));let le=P(R);if(le!==H.__cacheKey){fe[le]===void 0&&(fe[le]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),fe[le].usedTimes++;let Je=fe[H.__cacheKey];Je!==void 0&&(fe[H.__cacheKey].usedTimes--,Je.usedTimes===0&&M(R)),H.__cacheKey=le,H.__webglTexture=fe[le].texture}return Y}function Ne(H,R,Y){return Math.floor(Math.floor(H/Y)/R)}function Ye(H,R,Y,ce){let le=H.updateRanges;if(le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,R.width,R.height,Y,ce,R.data);else{le.sort((_e,Pe)=>_e.start-Pe.start);let Je=0;for(let _e=1;_e<le.length;_e++){let Pe=le[Je],rt=le[_e],et=Pe.start+Pe.count,ke=Ne(rt.start,R.width,4),it=Ne(Pe.start,R.width,4);rt.start<=et+1&&ke===it&&Ne(rt.start+rt.count-1,R.width,4)===ke?Pe.count=Math.max(Pe.count,rt.start+rt.count-Pe.start):(++Je,le[Je]=rt)}le.length=Je+1;let be=s.getParameter(s.UNPACK_ROW_LENGTH),Ve=s.getParameter(s.UNPACK_SKIP_PIXELS),Ie=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,R.width);for(let _e=0,Pe=le.length;_e<Pe;_e++){let rt=le[_e],et=Math.floor(rt.start/4),ke=Math.ceil(rt.count/4),it=et%R.width,X=Math.floor(et/R.width),de=ke,$=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,it),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),t.texSubImage2D(s.TEXTURE_2D,0,it,X,de,$,Y,ce,R.data)}H.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,be),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ie)}}function ie(H,R,Y){let ce=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ce=s.TEXTURE_3D);let fe=ot(H,R),le=R.source;t.bindTexture(ce,H.__webglTexture,s.TEXTURE0+Y);let Je=n.get(le);if(le.version!==Je.__version||fe===!0){t.activeTexture(s.TEXTURE0+Y);let be=Gt.getPrimaries(Gt.workingColorSpace),Ve=R.colorSpace===Cs?null:Gt.getPrimaries(R.colorSpace),Ie=R.colorSpace===Cs||be===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let _e=x(R.image,!1,i.maxTextureSize);_e=Rt(R,_e);let Pe=r.convert(R.format,R.colorSpace),rt=r.convert(R.type),et=b(R.internalFormat,Pe,rt,R.colorSpace,R.isVideoTexture);He(ce,R);let ke,it=R.mipmaps,X=R.isVideoTexture!==!0,de=Je.__version===void 0||fe===!0,$=le.dataReady,Be=_(R,_e);if(R.isDepthTexture)et=g(R.format===rr,R.type),de&&(X?t.texStorage2D(s.TEXTURE_2D,1,et,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,et,_e.width,_e.height,0,Pe,rt,null));else if(R.isDataTexture)if(it.length>0){X&&de&&t.texStorage2D(s.TEXTURE_2D,Be,et,it[0].width,it[0].height);for(let xe=0,ae=it.length;xe<ae;xe++)ke=it[xe],X?$&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,ke.width,ke.height,Pe,rt,ke.data):t.texImage2D(s.TEXTURE_2D,xe,et,ke.width,ke.height,0,Pe,rt,ke.data);R.generateMipmaps=!1}else X?(de&&t.texStorage2D(s.TEXTURE_2D,Be,et,_e.width,_e.height),$&&Ye(R,_e,Pe,rt)):t.texImage2D(s.TEXTURE_2D,0,et,_e.width,_e.height,0,Pe,rt,_e.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){X&&de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,et,it[0].width,it[0].height,_e.depth);for(let xe=0,ae=it.length;xe<ae;xe++)if(ke=it[xe],R.format!==ri)if(Pe!==null)if(X){if($)if(R.layerUpdates.size>0){let Ue=Pd(ke.width,ke.height,R.format,R.type);for(let gt of R.layerUpdates){let bt=ke.data.subarray(gt*Ue/ke.data.BYTES_PER_ELEMENT,(gt+1)*Ue/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,gt,ke.width,ke.height,1,Pe,bt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,ke.width,ke.height,_e.depth,Pe,ke.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,et,ke.width,ke.height,_e.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?$&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,ke.width,ke.height,_e.depth,Pe,rt,ke.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,et,ke.width,ke.height,_e.depth,0,Pe,rt,ke.data)}else{X&&de&&t.texStorage2D(s.TEXTURE_2D,Be,et,it[0].width,it[0].height);for(let xe=0,ae=it.length;xe<ae;xe++)ke=it[xe],R.format!==ri?Pe!==null?X?$&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,ke.width,ke.height,Pe,ke.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,et,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?$&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,ke.width,ke.height,Pe,rt,ke.data):t.texImage2D(s.TEXTURE_2D,xe,et,ke.width,ke.height,0,Pe,rt,ke.data)}else if(R.isDataArrayTexture)if(X){if(de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,et,_e.width,_e.height,_e.depth),$)if(R.layerUpdates.size>0){let xe=Pd(_e.width,_e.height,R.format,R.type);for(let ae of R.layerUpdates){let Ue=_e.data.subarray(ae*xe/_e.data.BYTES_PER_ELEMENT,(ae+1)*xe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ae,_e.width,_e.height,1,Pe,rt,Ue)}R.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Pe,rt,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,_e.width,_e.height,_e.depth,0,Pe,rt,_e.data);else if(R.isData3DTexture)X?(de&&t.texStorage3D(s.TEXTURE_3D,Be,et,_e.width,_e.height,_e.depth),$&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Pe,rt,_e.data)):t.texImage3D(s.TEXTURE_3D,0,et,_e.width,_e.height,_e.depth,0,Pe,rt,_e.data);else if(R.isFramebufferTexture){if(de)if(X)t.texStorage2D(s.TEXTURE_2D,Be,et,_e.width,_e.height);else{let xe=_e.width,ae=_e.height;for(let Ue=0;Ue<Be;Ue++)t.texImage2D(s.TEXTURE_2D,Ue,et,xe,ae,0,Pe,rt,null),xe>>=1,ae>>=1}}else if(it.length>0){if(X&&de){let xe=_t(it[0]);t.texStorage2D(s.TEXTURE_2D,Be,et,xe.width,xe.height)}for(let xe=0,ae=it.length;xe<ae;xe++)ke=it[xe],X?$&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Pe,rt,ke):t.texImage2D(s.TEXTURE_2D,xe,et,Pe,rt,ke);R.generateMipmaps=!1}else if(X){if(de){let xe=_t(_e);t.texStorage2D(s.TEXTURE_2D,Be,et,xe.width,xe.height)}$&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,rt,_e)}else t.texImage2D(s.TEXTURE_2D,0,et,Pe,rt,_e);v(R)&&f(ce),Je.__version=le.version,R.onUpdate&&R.onUpdate(R)}H.__version=R.version}function K(H,R,Y){if(R.image.length!==6)return;let ce=ot(H,R),fe=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+Y);let le=n.get(fe);if(fe.version!==le.__version||ce===!0){t.activeTexture(s.TEXTURE0+Y);let Je=Gt.getPrimaries(Gt.workingColorSpace),be=R.colorSpace===Cs?null:Gt.getPrimaries(R.colorSpace),Ve=R.colorSpace===Cs||Je===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Ie=R.isCompressedTexture||R.image[0].isCompressedTexture,_e=R.image[0]&&R.image[0].isDataTexture,Pe=[];for(let ae=0;ae<6;ae++)!Ie&&!_e?Pe[ae]=x(R.image[ae],!0,i.maxCubemapSize):Pe[ae]=_e?R.image[ae].image:R.image[ae],Pe[ae]=Rt(R,Pe[ae]);let rt=Pe[0],et=r.convert(R.format,R.colorSpace),ke=r.convert(R.type),it=b(R.internalFormat,et,ke,R.colorSpace),X=R.isVideoTexture!==!0,de=le.__version===void 0||ce===!0,$=fe.dataReady,Be=_(R,rt);He(s.TEXTURE_CUBE_MAP,R);let xe;if(Ie){X&&de&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,it,rt.width,rt.height);for(let ae=0;ae<6;ae++){xe=Pe[ae].mipmaps;for(let Ue=0;Ue<xe.length;Ue++){let gt=xe[Ue];R.format!==ri?et!==null?X?$&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,0,0,gt.width,gt.height,et,gt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,it,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,0,0,gt.width,gt.height,et,ke,gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue,it,gt.width,gt.height,0,et,ke,gt.data)}}}else{if(xe=R.mipmaps,X&&de){xe.length>0&&Be++;let ae=_t(Pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,it,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(_e){X?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Pe[ae].width,Pe[ae].height,et,ke,Pe[ae].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,it,Pe[ae].width,Pe[ae].height,0,et,ke,Pe[ae].data);for(let Ue=0;Ue<xe.length;Ue++){let bt=xe[Ue].image[ae].image;X?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,0,0,bt.width,bt.height,et,ke,bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,it,bt.width,bt.height,0,et,ke,bt.data)}}else{X?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,et,ke,Pe[ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,it,et,ke,Pe[ae]);for(let Ue=0;Ue<xe.length;Ue++){let gt=xe[Ue];X?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,0,0,et,ke,gt.image[ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ue+1,it,et,ke,gt.image[ae])}}}v(R)&&f(s.TEXTURE_CUBE_MAP),le.__version=fe.version,R.onUpdate&&R.onUpdate(R)}H.__version=R.version}function ye(H,R,Y,ce,fe,le){let Je=r.convert(Y.format,Y.colorSpace),be=r.convert(Y.type),Ve=b(Y.internalFormat,Je,be,Y.colorSpace),Ie=n.get(R),_e=n.get(Y);if(_e.__renderTarget=R,!Ie.__hasExternalTextures){let Pe=Math.max(1,R.width>>le),rt=Math.max(1,R.height>>le);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?t.texImage3D(fe,le,Ve,Pe,rt,R.depth,0,Je,be,null):t.texImage2D(fe,le,Ve,Pe,rt,0,Je,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,H),we(R)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,fe,_e.__webglTexture,0,It(R)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,fe,_e.__webglTexture,le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(H,R,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,H),R.depthBuffer){let ce=R.depthTexture,fe=ce&&ce.isDepthTexture?ce.type:null,le=g(R.stencilBuffer,fe),Je=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=It(R);we(R)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,le,R.width,R.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,le,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,le,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Je,s.RENDERBUFFER,H)}else{let ce=R.textures;for(let fe=0;fe<ce.length;fe++){let le=ce[fe],Je=r.convert(le.format,le.colorSpace),be=r.convert(le.type),Ve=b(le.internalFormat,Je,be,le.colorSpace),Ie=It(R);Y&&we(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,Ve,R.width,R.height):we(R)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,Ve,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,Ve,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(H,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,H),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ce=n.get(R.depthTexture);ce.__renderTarget=R,(!ce.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),N(R.depthTexture,0);let fe=ce.__webglTexture,le=It(R);if(R.depthTexture.format===fo)we(R)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,fe,0);else if(R.depthTexture.format===rr)we(R)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function $e(H){let R=n.get(H),Y=H.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==H.depthTexture){let ce=H.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ce){let fe=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ce.removeEventListener("dispose",fe)};ce.addEventListener("dispose",fe),R.__depthDisposeCallback=fe}R.__boundDepthTexture=ce}if(H.depthTexture&&!R.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");let ce=H.texture.mipmaps;ce&&ce.length>0?me(R.__webglFramebuffer[0],H):me(R.__webglFramebuffer,H)}else if(Y){R.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[ce]),R.__webglDepthbuffer[ce]===void 0)R.__webglDepthbuffer[ce]=s.createRenderbuffer(),Te(R.__webglDepthbuffer[ce],H,!1);else{let fe=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=R.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,le)}}else{let ce=H.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),Te(R.__webglDepthbuffer,H,!1);else{let fe=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,le)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(H,R,Y){let ce=n.get(H);R!==void 0&&ye(ce.__webglFramebuffer,H,H.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&$e(H)}function z(H){let R=H.texture,Y=n.get(H),ce=n.get(R);H.addEventListener("dispose",w);let fe=H.textures,le=H.isWebGLCubeRenderTarget===!0,Je=fe.length>1;if(Je||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=R.version,a.memory.textures++),le){Y.__webglFramebuffer=[];for(let be=0;be<6;be++)if(R.mipmaps&&R.mipmaps.length>0){Y.__webglFramebuffer[be]=[];for(let Ve=0;Ve<R.mipmaps.length;Ve++)Y.__webglFramebuffer[be][Ve]=s.createFramebuffer()}else Y.__webglFramebuffer[be]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Y.__webglFramebuffer=[];for(let be=0;be<R.mipmaps.length;be++)Y.__webglFramebuffer[be]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Je)for(let be=0,Ve=fe.length;be<Ve;be++){let Ie=n.get(fe[be]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),a.memory.textures++)}if(H.samples>0&&we(H)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let be=0;be<fe.length;be++){let Ve=fe[be];Y.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[be]);let Ie=r.convert(Ve.format,Ve.colorSpace),_e=r.convert(Ve.type),Pe=b(Ve.internalFormat,Ie,_e,Ve.colorSpace,H.isXRRenderTarget===!0),rt=It(H);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Pe,H.width,H.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Y.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),H.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Te(Y.__webglDepthRenderbuffer,H,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),He(s.TEXTURE_CUBE_MAP,R);for(let be=0;be<6;be++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ve=0;Ve<R.mipmaps.length;Ve++)ye(Y.__webglFramebuffer[be][Ve],H,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ve);else ye(Y.__webglFramebuffer[be],H,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);v(R)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Je){for(let be=0,Ve=fe.length;be<Ve;be++){let Ie=fe[be],_e=n.get(Ie),Pe=s.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Pe=H.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,_e.__webglTexture),He(Pe,Ie),ye(Y.__webglFramebuffer,H,Ie,s.COLOR_ATTACHMENT0+be,Pe,0),v(Ie)&&f(Pe)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(be=H.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,ce.__webglTexture),He(be,R),R.mipmaps&&R.mipmaps.length>0)for(let Ve=0;Ve<R.mipmaps.length;Ve++)ye(Y.__webglFramebuffer[Ve],H,R,s.COLOR_ATTACHMENT0,be,Ve);else ye(Y.__webglFramebuffer,H,R,s.COLOR_ATTACHMENT0,be,0);v(R)&&f(be),t.unbindTexture()}H.depthBuffer&&$e(H)}function lt(H){let R=H.textures;for(let Y=0,ce=R.length;Y<ce;Y++){let fe=R[Y];if(v(fe)){let le=y(H),Je=n.get(fe).__webglTexture;t.bindTexture(le,Je),f(le),t.unbindTexture()}}}let Ke=[],Xe=[];function ze(H){if(H.samples>0){if(we(H)===!1){let R=H.textures,Y=H.width,ce=H.height,fe=s.COLOR_BUFFER_BIT,le=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Je=n.get(H),be=R.length>1;if(be)for(let Ie=0;Ie<R.length;Ie++)t.bindFramebuffer(s.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer);let Ve=H.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let Ie=0;Ie<R.length;Ie++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Je.__webglColorRenderbuffer[Ie]);let _e=n.get(R[Ie]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,Y,ce,0,0,Y,ce,fe,s.NEAREST),l===!0&&(Ke.length=0,Xe.length=0,Ke.push(s.COLOR_ATTACHMENT0+Ie),H.depthBuffer&&H.resolveDepthBuffer===!1&&(Ke.push(le),Xe.push(le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Ie=0;Ie<R.length;Ie++){t.bindFramebuffer(s.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,Je.__webglColorRenderbuffer[Ie]);let _e=n.get(R[Ie]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,_e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.resolveDepthBuffer===!1&&l){let R=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function It(H){return Math.min(i.maxSamples,H.samples)}function we(H){let R=n.get(H);return H.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function qe(H){let R=a.render.frame;h.get(H)!==R&&(h.set(H,R),H.update())}function Rt(H,R){let Y=H.colorSpace,ce=H.format,fe=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||Y!==mr&&Y!==Cs&&(Gt.getTransfer(Y)===en?(ce!==ri||fe!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),R}function _t(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(c.width=H.naturalWidth||H.width,c.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(c.width=H.displayWidth,c.height=H.displayHeight):(c.width=H.width,c.height=H.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=N,this.setTexture2DArray=W,this.setTexture3D=ne,this.setTextureCube=q,this.rebindTextures=nt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=we}function y_(s,e){function t(n,i=Cs){let r,a=Gt.getTransfer(i);if(n===Ci)return s.UNSIGNED_BYTE;if(n===Jc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===jc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===yd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===gd)return s.BYTE;if(n===vd)return s.SHORT;if(n===Io)return s.UNSIGNED_SHORT;if(n===Zc)return s.INT;if(n===ir)return s.UNSIGNED_INT;if(n===Zi)return s.FLOAT;if(n===Qn)return s.HALF_FLOAT;if(n===bd)return s.ALPHA;if(n===_d)return s.RGB;if(n===ri)return s.RGBA;if(n===fo)return s.DEPTH_COMPONENT;if(n===rr)return s.DEPTH_STENCIL;if(n===Qc)return s.RED;if(n===eh)return s.RED_INTEGER;if(n===Md)return s.RG;if(n===th)return s.RG_INTEGER;if(n===nh)return s.RGBA_INTEGER;if(n===Za||n===Ja||n===ja||n===Qa)if(a===en)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ih||n===sh||n===rh||n===oh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ih)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===rh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ah||n===lh||n===ch)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ah||n===lh)return a===en?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ch)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hh||n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===vh||n===xh||n===yh||n===bh||n===_h||n===Mh||n===Eh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ph)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_h)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eh)return a===en?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sh||n===Th||n===wh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sh)return a===en?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Th)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rh||n===Ah||n===Ch||n===Ih)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ah)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ch)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ih)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}function E_(s,e){function t(v,f){v.matrixAutoUpdate===!0&&v.updateMatrix(),f.value.copy(v.matrix)}function n(v,f){f.color.getRGB(v.fogColor.value,Rd(s)),f.isFog?(v.fogNear.value=f.near,v.fogFar.value=f.far):f.isFogExp2&&(v.fogDensity.value=f.density)}function i(v,f,y,b,g){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(v,f):f.isMeshToonMaterial?(r(v,f),u(v,f)):f.isMeshPhongMaterial?(r(v,f),h(v,f)):f.isMeshStandardMaterial?(r(v,f),d(v,f),f.isMeshPhysicalMaterial&&p(v,f,g)):f.isMeshMatcapMaterial?(r(v,f),m(v,f)):f.isMeshDepthMaterial?r(v,f):f.isMeshDistanceMaterial?(r(v,f),x(v,f)):f.isMeshNormalMaterial?r(v,f):f.isLineBasicMaterial?(a(v,f),f.isLineDashedMaterial&&o(v,f)):f.isPointsMaterial?l(v,f,y,b):f.isSpriteMaterial?c(v,f):f.isShadowMaterial?(v.color.value.copy(f.color),v.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(v,f){v.opacity.value=f.opacity,f.color&&v.diffuse.value.copy(f.color),f.emissive&&v.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(v.map.value=f.map,t(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,t(f.alphaMap,v.alphaMapTransform)),f.bumpMap&&(v.bumpMap.value=f.bumpMap,t(f.bumpMap,v.bumpMapTransform),v.bumpScale.value=f.bumpScale,f.side===Rn&&(v.bumpScale.value*=-1)),f.normalMap&&(v.normalMap.value=f.normalMap,t(f.normalMap,v.normalMapTransform),v.normalScale.value.copy(f.normalScale),f.side===Rn&&v.normalScale.value.negate()),f.displacementMap&&(v.displacementMap.value=f.displacementMap,t(f.displacementMap,v.displacementMapTransform),v.displacementScale.value=f.displacementScale,v.displacementBias.value=f.displacementBias),f.emissiveMap&&(v.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,v.emissiveMapTransform)),f.specularMap&&(v.specularMap.value=f.specularMap,t(f.specularMap,v.specularMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest);let y=e.get(f),b=y.envMap,g=y.envMapRotation;b&&(v.envMap.value=b,Cr.copy(g),Cr.x*=-1,Cr.y*=-1,Cr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Cr.y*=-1,Cr.z*=-1),v.envMapRotation.value.setFromMatrix4(M_.makeRotationFromEuler(Cr)),v.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=f.reflectivity,v.ior.value=f.ior,v.refractionRatio.value=f.refractionRatio),f.lightMap&&(v.lightMap.value=f.lightMap,v.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,v.lightMapTransform)),f.aoMap&&(v.aoMap.value=f.aoMap,v.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,v.aoMapTransform))}function a(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,f.map&&(v.map.value=f.map,t(f.map,v.mapTransform))}function o(v,f){v.dashSize.value=f.dashSize,v.totalSize.value=f.dashSize+f.gapSize,v.scale.value=f.scale}function l(v,f,y,b){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.size.value=f.size*y,v.scale.value=b*.5,f.map&&(v.map.value=f.map,t(f.map,v.uvTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,t(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function c(v,f){v.diffuse.value.copy(f.color),v.opacity.value=f.opacity,v.rotation.value=f.rotation,f.map&&(v.map.value=f.map,t(f.map,v.mapTransform)),f.alphaMap&&(v.alphaMap.value=f.alphaMap,t(f.alphaMap,v.alphaMapTransform)),f.alphaTest>0&&(v.alphaTest.value=f.alphaTest)}function h(v,f){v.specular.value.copy(f.specular),v.shininess.value=Math.max(f.shininess,1e-4)}function u(v,f){f.gradientMap&&(v.gradientMap.value=f.gradientMap)}function d(v,f){v.metalness.value=f.metalness,f.metalnessMap&&(v.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,v.metalnessMapTransform)),v.roughness.value=f.roughness,f.roughnessMap&&(v.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,v.roughnessMapTransform)),f.envMap&&(v.envMapIntensity.value=f.envMapIntensity)}function p(v,f,y){v.ior.value=f.ior,f.sheen>0&&(v.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),v.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(v.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,v.sheenColorMapTransform)),f.sheenRoughnessMap&&(v.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,v.sheenRoughnessMapTransform))),f.clearcoat>0&&(v.clearcoat.value=f.clearcoat,v.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(v.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,v.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(v.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Rn&&v.clearcoatNormalScale.value.negate())),f.dispersion>0&&(v.dispersion.value=f.dispersion),f.iridescence>0&&(v.iridescence.value=f.iridescence,v.iridescenceIOR.value=f.iridescenceIOR,v.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(v.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,v.iridescenceMapTransform)),f.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),f.transmission>0&&(v.transmission.value=f.transmission,v.transmissionSamplerMap.value=y.texture,v.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(v.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,v.transmissionMapTransform)),v.thickness.value=f.thickness,f.thicknessMap&&(v.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=f.attenuationDistance,v.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(v.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(v.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=f.specularIntensity,v.specularColor.value.copy(f.specularColor),f.specularColorMap&&(v.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,v.specularColorMapTransform)),f.specularIntensityMap&&(v.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,v.specularIntensityMapTransform))}function m(v,f){f.matcap&&(v.matcap.value=f.matcap)}function x(v,f){let y=e.get(f).light;v.referencePosition.value.setFromMatrixPosition(y.matrixWorld),v.nearDistance.value=y.shadow.camera.near,v.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function S_(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let g=b.program;n.uniformBlockBinding(y,g)}function c(y,b){let g=i[y.id];g===void 0&&(m(y),g=h(y),i[y.id]=g,y.addEventListener("dispose",v));let _=b.program;n.updateUBOMapping(y,_);let S=e.render.frame;r[y.id]!==S&&(d(y),r[y.id]=S)}function h(y){let b=u();y.__bindingPointIndex=b;let g=s.createBuffer(),_=y.__size,S=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,g),s.bufferData(s.UNIFORM_BUFFER,_,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,g),g}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let b=i[y.id],g=y.uniforms,_=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let S=0,w=g.length;S<w;S++){let T=Array.isArray(g[S])?g[S]:[g[S]];for(let M=0,E=T.length;M<E;M++){let A=T[M];if(p(A,S,M,_)===!0){let D=A.__offset,B=Array.isArray(A.value)?A.value:[A.value],P=0;for(let N=0;N<B.length;N++){let W=B[N],ne=x(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,D+P,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,P),P+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,b,g,_){let S=y.value,w=b+"_"+g;if(_[w]===void 0)return typeof S=="number"||typeof S=="boolean"?_[w]=S:_[w]=S.clone(),!0;{let T=_[w];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return _[w]=S,!0}else if(T.equals(S)===!1)return T.copy(S),!0}return!1}function m(y){let b=y.uniforms,g=0,_=16;for(let w=0,T=b.length;w<T;w++){let M=Array.isArray(b[w])?b[w]:[b[w]];for(let E=0,A=M.length;E<A;E++){let D=M[E],B=Array.isArray(D.value)?D.value:[D.value];for(let P=0,N=B.length;P<N;P++){let W=B[P],ne=x(W),q=g%_,se=q%ne.boundary,ue=q+se;g+=se,ue!==0&&_-ue<ne.storage&&(g+=_-ue),D.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=g,g+=ne.storage}}}let S=g%_;return S>0&&(g+=_-S),y.__size=g,y.__cache={},this}function x(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),b}function v(y){let b=y.target;b.removeEventListener("dispose",v);let g=a.indexOf(b.__bindingPointIndex);a.splice(g,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function f(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}var jv,Qv,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,mx,gx,vx,xx,yx,bx,_x,Mx,Ex,Sx,Tx,wx,Rx,Ax,Cx,Ix,Px,Dx,kx,Lx,Fx,zx,Ux,Hx,Nx,Bx,Ox,Vx,Gx,Wx,Xx,qx,Yx,$x,Kx,Zx,Jx,jx,Qx,ey,ty,ny,iy,sy,ry,oy,ay,ly,cy,hy,uy,dy,fy,py,my,gy,vy,xy,yy,by,_y,My,Ey,Sy,Ty,wy,Ry,Ay,Cy,Iy,Py,Dy,ky,Ly,Fy,zy,Uy,Hy,Ny,By,Oy,Vy,Gy,Wy,Xy,qy,Yy,$y,Ky,Zy,Jy,jy,Qy,eb,tb,nb,ib,sb,rb,ob,ab,lb,cb,hb,ub,db,fb,pb,mb,gb,vb,xb,yb,bb,_b,Mb,Eb,Sb,Tb,wb,Rb,Ab,Cb,Ib,Pt,We,as,kh,Ar,Pb,ko,hm,Pr,kd,um,Ld,Fd,zd,Ud,Ir,Do,dm,Hb,Fo,Lm,gm,Fm,zm,Um,vm,xm,ym,bm,_m,Nd,Bd,Od,Hd,Lo,F1,z1,Sm,Fh,X1,q1,$1,n_,Gd,Wd,c_,f_,p_,g_,b_,__,Xd,qd,Cr,M_,zh,pn=Kn(()=>{Dd();Dd();jv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ix=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ox=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ux=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_x=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ex=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ux=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ay=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,py=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,my=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,by=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_y=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,My=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ey=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ty=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ry=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ay=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Py=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ky=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ly=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,By=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,rb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ob=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ub=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,db=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pt={alphahash_fragment:jv,alphahash_pars_fragment:Qv,alphamap_fragment:ex,alphamap_pars_fragment:tx,alphatest_fragment:nx,alphatest_pars_fragment:ix,aomap_fragment:sx,aomap_pars_fragment:rx,batching_pars_vertex:ox,batching_vertex:ax,begin_vertex:lx,beginnormal_vertex:cx,bsdfs:hx,iridescence_fragment:ux,bumpmap_pars_fragment:dx,clipping_planes_fragment:fx,clipping_planes_pars_fragment:px,clipping_planes_pars_vertex:mx,clipping_planes_vertex:gx,color_fragment:vx,color_pars_fragment:xx,color_pars_vertex:yx,color_vertex:bx,common:_x,cube_uv_reflection_fragment:Mx,defaultnormal_vertex:Ex,displacementmap_pars_vertex:Sx,displacementmap_vertex:Tx,emissivemap_fragment:wx,emissivemap_pars_fragment:Rx,colorspace_fragment:Ax,colorspace_pars_fragment:Cx,envmap_fragment:Ix,envmap_common_pars_fragment:Px,envmap_pars_fragment:Dx,envmap_pars_vertex:kx,envmap_physical_pars_fragment:Wx,envmap_vertex:Lx,fog_vertex:Fx,fog_pars_vertex:zx,fog_fragment:Ux,fog_pars_fragment:Hx,gradientmap_pars_fragment:Nx,lightmap_pars_fragment:Bx,lights_lambert_fragment:Ox,lights_lambert_pars_fragment:Vx,lights_pars_begin:Gx,lights_toon_fragment:Xx,lights_toon_pars_fragment:qx,lights_phong_fragment:Yx,lights_phong_pars_fragment:$x,lights_physical_fragment:Kx,lights_physical_pars_fragment:Zx,lights_fragment_begin:Jx,lights_fragment_maps:jx,lights_fragment_end:Qx,logdepthbuf_fragment:ey,logdepthbuf_pars_fragment:ty,logdepthbuf_pars_vertex:ny,logdepthbuf_vertex:iy,map_fragment:sy,map_pars_fragment:ry,map_particle_fragment:oy,map_particle_pars_fragment:ay,metalnessmap_fragment:ly,metalnessmap_pars_fragment:cy,morphinstance_vertex:hy,morphcolor_vertex:uy,morphnormal_vertex:dy,morphtarget_pars_vertex:fy,morphtarget_vertex:py,normal_fragment_begin:my,normal_fragment_maps:gy,normal_pars_fragment:vy,normal_pars_vertex:xy,normal_vertex:yy,normalmap_pars_fragment:by,clearcoat_normal_fragment_begin:_y,clearcoat_normal_fragment_maps:My,clearcoat_pars_fragment:Ey,iridescence_pars_fragment:Sy,opaque_fragment:Ty,packing:wy,premultiplied_alpha_fragment:Ry,project_vertex:Ay,dithering_fragment:Cy,dithering_pars_fragment:Iy,roughnessmap_fragment:Py,roughnessmap_pars_fragment:Dy,shadowmap_pars_fragment:ky,shadowmap_pars_vertex:Ly,shadowmap_vertex:Fy,shadowmask_pars_fragment:zy,skinbase_vertex:Uy,skinning_pars_vertex:Hy,skinning_vertex:Ny,skinnormal_vertex:By,specularmap_fragment:Oy,specularmap_pars_fragment:Vy,tonemapping_fragment:Gy,tonemapping_pars_fragment:Wy,transmission_fragment:Xy,transmission_pars_fragment:qy,uv_pars_fragment:Yy,uv_pars_vertex:$y,uv_vertex:Ky,worldpos_vertex:Zy,background_vert:Jy,background_frag:jy,backgroundCube_vert:Qy,backgroundCube_frag:eb,cube_vert:tb,cube_frag:nb,depth_vert:ib,depth_frag:sb,distanceRGBA_vert:rb,distanceRGBA_frag:ob,equirect_vert:ab,equirect_frag:lb,linedashed_vert:cb,linedashed_frag:hb,meshbasic_vert:ub,meshbasic_frag:db,meshlambert_vert:fb,meshlambert_frag:pb,meshmatcap_vert:mb,meshmatcap_frag:gb,meshnormal_vert:vb,meshnormal_frag:xb,meshphong_vert:yb,meshphong_frag:bb,meshphysical_vert:_b,meshphysical_frag:Mb,meshtoon_vert:Eb,meshtoon_frag:Sb,points_vert:Tb,points_frag:wb,shadow_vert:Rb,shadow_frag:Ab,sprite_vert:Cb,sprite_frag:Ib},We={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},as={basic:{uniforms:oi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:oi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:oi([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:oi([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:oi([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:oi([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:oi([We.points,We.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:oi([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:oi([We.common,We.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:oi([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:oi([We.sprite,We.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:oi([We.common,We.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:oi([We.lights,We.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};as.physical={uniforms:oi([as.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};kh={r:0,b:0,g:0},Ar=new Yn,Pb=new ht;ko=4,hm=[.125,.215,.35,.446,.526,.582],Pr=20,kd=new Mr,um=new Ze,Ld=null,Fd=0,zd=0,Ud=!1,Ir=(1+Math.sqrt(5))/2,Do=1/Ir,dm=[new F(-Ir,Do,0),new F(Ir,Do,0),new F(-Do,0,Ir),new F(Do,0,Ir),new F(0,Ir,-Do),new F(0,Ir,Do),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Hb=new F,Fo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Hb}=r;Ld=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ld,Fd,zd),this._renderer.xr.enabled=Ud,e.scissorTest=!1,Lh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tr||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ld=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$i,minFilter:$i,generateMipmaps:!1,type:Qn,format:ri,colorSpace:mr,depthBuffer:!1},i=fm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fm(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nb(r)),this._blurMaterial=Bb(r,e,t)}return i}_compileMaterial(e){let t=new De(this._lodPlanes[0],e);this._renderer.compile(t,kd)}_sceneToCubeUV(e,t,n,i,r){let l=new qn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(um),u.toneMapping=Ki,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let x=new Ft({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),v=new De(new at,x),f=!1,y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,f=!0):(x.color.copy(um),f=!0);for(let b=0;b<6;b++){let g=b%3;g===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):g===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let _=this._cubeSize;Lh(i,g*_,b>2?_:0,_,_),u.setRenderTarget(i),f&&u.render(v,l),u.render(e,l)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Tr||e.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new De(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Lh(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,kd)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=dm[(i-r-1)%dm.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new De(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Pr-1),x=r/m,v=isFinite(r)?1+Math.floor(h*x):Pr;v>Pr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Pr}`);let f=[],y=0;for(let w=0;w<Pr;++w){let T=w/x,M=Math.exp(-T*T/2);f.push(M),w===0?y+=M:w<v&&(y+=2*M)}for(let w=0;w<f.length;w++)f[w]=f[w]/y;d.envMap.value=e.texture,d.samples.value=v,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-n;let g=this._sizeLods[i],_=3*g*(i>b-ko?i-b+ko:0),S=4*(this._cubeSize-g);Lh(t,_,S,3*g,2*g),l.setRenderTarget(t),l.render(u,kd)}};Lm=new ii,gm=new gr(1,1),Fm=new _a,zm=new hc,Um=new wa,vm=[],xm=[],ym=new Float32Array(16),bm=new Float32Array(9),_m=new Float32Array(4);Nd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=f1(t.type)}},Bd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k1(t.type)}},Od=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Hd=/(\w+)(\])?(\[|\.)?/g;Lo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);L1(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};F1=37297,z1=0;Sm=new Ct;Fh=new F;X1=/^[ \t]*#include +<([\w\d./]+)>/gm;q1=new Map;$1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;n_=0,Gd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Wd(e),t.set(e,n)),n}},Wd=class{constructor(e){this.id=n_++,this.code=e,this.usedTimes=0}};c_=0;f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;g_={[Lc]:Fc,[zc]:Ao,[Uc]:Nc,[pr]:Hc,[Fc]:Lc,[Ao]:zc,[Nc]:Uc,[Hc]:pr};b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,__=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ca(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Xt({vertexShader:b_,fragmentShader:__,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},qd=class extends As{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,m=null,x=typeof XRWebGLBinding<"u",v=new Xd,f={},y=t.getContextAttributes(),b=null,g=null,_=[],S=[],w=new ve,T=null,M=new qn;M.viewport=new Qt;let E=new qn;E.viewport=new Qt;let A=[M,E],D=new Pc,B=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let K=_[ie];return K===void 0&&(K=new yo,_[ie]=K),K.getTargetRaySpace()},this.getControllerGrip=function(ie){let K=_[ie];return K===void 0&&(K=new yo,_[ie]=K),K.getGripSpace()},this.getHand=function(ie){let K=_[ie];return K===void 0&&(K=new yo,_[ie]=K),K.getHandSpace()};function N(ie){let K=S.indexOf(ie.inputSource);if(K===-1)return;let ye=_[K];ye!==void 0&&(ye.update(ie.inputSource,ie.frame,c||a),ye.dispatchEvent({type:ie.type,data:ie.inputSource}))}function W(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",ne);for(let ie=0;ie<_.length;ie++){let K=S[ie];K!==null&&(S[ie]=null,_[ie].disconnect(K))}B=null,P=null,v.reset();for(let ie in f)delete f[ie];e.setRenderTarget(b),p=null,d=null,u=null,i=null,g=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(ie){if(i=ie,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",W),i.addEventListener("inputsourceschange",ne),y.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Te=null,me=null;y.depth&&(me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=y.stencil?rr:fo,Te=y.stencil?sr:ir);let $e={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer($e),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new wn(d.textureWidth,d.textureHeight,{format:ri,type:Ci,depthTexture:new gr(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new wn(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ne(ie){for(let K=0;K<ie.removed.length;K++){let ye=ie.removed[K],Te=S.indexOf(ye);Te>=0&&(S[Te]=null,_[Te].disconnect(ye))}for(let K=0;K<ie.added.length;K++){let ye=ie.added[K],Te=S.indexOf(ye);if(Te===-1){for(let $e=0;$e<_.length;$e++)if($e>=S.length){S.push(ye),Te=$e;break}else if(S[$e]===null){S[$e]=ye,Te=$e;break}if(Te===-1)break}let me=_[Te];me&&me.connect(ye)}}let q=new F,se=new F;function ue(ie,K,ye){q.setFromMatrixPosition(K.matrixWorld),se.setFromMatrixPosition(ye.matrixWorld);let Te=q.distanceTo(se),me=K.projectionMatrix.elements,$e=ye.projectionMatrix.elements,nt=me[14]/(me[10]-1),z=me[14]/(me[10]+1),lt=(me[9]+1)/me[5],Ke=(me[9]-1)/me[5],Xe=(me[8]-1)/me[0],ze=($e[8]+1)/$e[0],It=nt*Xe,we=nt*ze,qe=Te/(-Xe+ze),Rt=qe*-Xe;if(K.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Rt),ie.translateZ(qe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),me[10]===-1)ie.projectionMatrix.copy(K.projectionMatrix),ie.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let _t=nt+qe,H=z+qe,R=It-Rt,Y=we+(Te-Rt),ce=lt*z/H*_t,fe=Ke*z/H*_t;ie.projectionMatrix.makePerspective(R,Y,ce,fe,_t,H),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function pe(ie,K){K===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(K.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(i===null)return;let K=ie.near,ye=ie.far;v.texture!==null&&(v.depthNear>0&&(K=v.depthNear),v.depthFar>0&&(ye=v.depthFar)),D.near=E.near=M.near=K,D.far=E.far=M.far=ye,(B!==D.near||P!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,P=D.far),D.layers.mask=ie.layers.mask|6,M.layers.mask=D.layers.mask&3,E.layers.mask=D.layers.mask&5;let Te=ie.parent,me=D.cameras;pe(D,Te);for(let $e=0;$e<me.length;$e++)pe(me[$e],Te);me.length===2?ue(D,M,E):D.projectionMatrix.copy(M.projectionMatrix),He(ie,D,Te)};function He(ie,K,ye){ye===null?ie.matrix.copy(K.matrixWorld):(ie.matrix.copy(ye.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(K.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(K.projectionMatrix),ie.projectionMatrixInverse.copy(K.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ac*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(D)},this.getCameraTexture=function(ie){return f[ie]};let ot=null;function Ne(ie,K){if(h=K.getViewerPose(c||a),m=K,h!==null){let ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let Te=!1;ye.length!==D.cameras.length&&(D.cameras.length=0,Te=!0);for(let z=0;z<ye.length;z++){let lt=ye[z],Ke=null;if(p!==null)Ke=p.getViewport(lt);else{let ze=u.getViewSubImage(d,lt);Ke=ze.viewport,z===0&&(e.setRenderTargetTextures(g,ze.colorTexture,ze.depthStencilTexture),e.setRenderTarget(g))}let Xe=A[z];Xe===void 0&&(Xe=new qn,Xe.layers.enable(z),Xe.viewport=new Qt,A[z]=Xe),Xe.matrix.fromArray(lt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(lt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),z===0&&(D.matrix.copy(Xe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Te===!0&&D.cameras.push(Xe)}let me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let z=u.getDepthInformation(ye[0]);z&&z.isValid&&z.texture&&v.init(z,i.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let z=0;z<ye.length;z++){let lt=ye[z].camera;if(lt){let Ke=f[lt];Ke||(Ke=new Ca,f[lt]=Ke);let Xe=u.getCameraImage(lt);Ke.sourceTexture=Xe}}}}for(let ye=0;ye<_.length;ye++){let Te=S[ye],me=_[ye];Te!==null&&me!==void 0&&me.update(Te,K,c||a)}ot&&ot(ie,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}let Ye=new km;Ye.setAnimationLoop(Ne),this.setAnimationLoop=function(ie){ot=ie},this.dispose=function(){}}},Cr=new Yn,M_=new ht;zh=class{constructor(e={}){let{canvas:t=tm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),x=new Int32Array(4),v=null,f=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let g=this,_=!1;this._outputColorSpace=Mt;let S=0,w=0,T=null,M=-1,E=null,A=new Qt,D=new Qt,B=null,P=new Ze(0),N=0,W=t.width,ne=t.height,q=1,se=null,ue=null,pe=new Qt(0,0,W,ne),He=new Qt(0,0,W,ne),ot=!1,Ne=new _o,Ye=!1,ie=!1,K=new ht,ye=new F,Te=new Qt,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function nt(){return T===null?q:1}let z=n;function lt(I,Z){return t.getContext(I,Z)}try{let I={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",xe,!1),z===null){let Z="webgl2";if(z=lt(Z,I),z===null)throw lt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ke,Xe,ze,It,we,qe,Rt,_t,H,R,Y,ce,fe,le,Je,be,Ve,Ie,_e,Pe,rt,et,ke,it;function X(){Ke=new Vb(z),Ke.init(),et=new y_(z,Ke),Xe=new Fb(z,Ke,e,et),ze=new v_(z,Ke),Xe.reversedDepthBuffer&&d&&ze.buffers.depth.setReversed(!0),It=new Xb(z),we=new s_,qe=new x_(z,Ke,ze,we,Xe,et,It),Rt=new Ub(g),_t=new Ob(g),H=new Jv(z),ke=new kb(z,H),R=new Gb(z,H,It,ke),Y=new Yb(z,R,H,It),_e=new qb(z,Xe,qe),be=new zb(we),ce=new i_(g,Rt,_t,Ke,Xe,ke,be),fe=new E_(g,we),le=new o_,Je=new d_(Ke),Ie=new Db(g,Rt,_t,ze,Y,p,l),Ve=new m_(g,Y,Xe),it=new S_(z,It,Xe,ze),Pe=new Lb(z,Ke,It),rt=new Wb(z,Ke,It),It.programs=ce.programs,g.capabilities=Xe,g.extensions=Ke,g.properties=we,g.renderLists=le,g.shadowMap=Ve,g.state=ze,g.info=It}X();let de=new qd(g,z);this.xr=de,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let I=Ke.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Ke.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(I){I!==void 0&&(q=I,this.setSize(W,ne,!1))},this.getSize=function(I){return I.set(W,ne)},this.setSize=function(I,Z,re=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=I,ne=Z,t.width=Math.floor(I*q),t.height=Math.floor(Z*q),re===!0&&(t.style.width=I+"px",t.style.height=Z+"px"),this.setViewport(0,0,I,Z)},this.getDrawingBufferSize=function(I){return I.set(W*q,ne*q).floor()},this.setDrawingBufferSize=function(I,Z,re){W=I,ne=Z,q=re,t.width=Math.floor(I*re),t.height=Math.floor(Z*re),this.setViewport(0,0,I,Z)},this.getCurrentViewport=function(I){return I.copy(A)},this.getViewport=function(I){return I.copy(pe)},this.setViewport=function(I,Z,re,oe){I.isVector4?pe.set(I.x,I.y,I.z,I.w):pe.set(I,Z,re,oe),ze.viewport(A.copy(pe).multiplyScalar(q).round())},this.getScissor=function(I){return I.copy(He)},this.setScissor=function(I,Z,re,oe){I.isVector4?He.set(I.x,I.y,I.z,I.w):He.set(I,Z,re,oe),ze.scissor(D.copy(He).multiplyScalar(q).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(I){ze.setScissorTest(ot=I)},this.setOpaqueSort=function(I){se=I},this.setTransparentSort=function(I){ue=I},this.getClearColor=function(I){return I.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(I=!0,Z=!0,re=!0){let oe=0;if(I){let j=!1;if(T!==null){let Ee=T.texture.format;j=Ee===nh||Ee===th||Ee===eh}if(j){let Ee=T.texture.type,Oe=Ee===Ci||Ee===ir||Ee===Io||Ee===sr||Ee===Jc||Ee===jc,Qe=Ie.getClearColor(),Ge=Ie.getClearAlpha(),dt=Qe.r,vt=Qe.g,st=Qe.b;Oe?(m[0]=dt,m[1]=vt,m[2]=st,m[3]=Ge,z.clearBufferuiv(z.COLOR,0,m)):(x[0]=dt,x[1]=vt,x[2]=st,x[3]=Ge,z.clearBufferiv(z.COLOR,0,x))}else oe|=z.COLOR_BUFFER_BIT}Z&&(oe|=z.DEPTH_BUFFER_BIT),re&&(oe|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Ie.dispose(),le.dispose(),Je.dispose(),we.dispose(),Rt.dispose(),_t.dispose(),Y.dispose(),ke.dispose(),it.dispose(),ce.dispose(),de.dispose(),de.removeEventListener("sessionstart",ci),de.removeEventListener("sessionend",_i),vn.stop()};function $(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let I=It.autoReset,Z=Ve.enabled,re=Ve.autoUpdate,oe=Ve.needsUpdate,j=Ve.type;X(),It.autoReset=I,Ve.enabled=Z,Ve.autoUpdate=re,Ve.needsUpdate=oe,Ve.type=j}function xe(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ae(I){let Z=I.target;Z.removeEventListener("dispose",ae),Ue(Z)}function Ue(I){gt(I),we.remove(I)}function gt(I){let Z=we.get(I).programs;Z!==void 0&&(Z.forEach(function(re){ce.releaseProgram(re)}),I.isShaderMaterial&&ce.releaseShaderCache(I))}this.renderBufferDirect=function(I,Z,re,oe,j,Ee){Z===null&&(Z=me);let Oe=j.isMesh&&j.matrixWorld.determinant()<0,Qe=Ko(I,Z,re,oe,j);ze.setMaterial(oe,Oe);let Ge=re.index,dt=1;if(oe.wireframe===!0){if(Ge=R.getWireframeAttribute(re),Ge===void 0)return;dt=2}let vt=re.drawRange,st=re.attributes.position,At=vt.start*dt,qt=(vt.start+vt.count)*dt;Ee!==null&&(At=Math.max(At,Ee.start*dt),qt=Math.min(qt,(Ee.start+Ee.count)*dt)),Ge!==null?(At=Math.max(At,0),qt=Math.min(qt,Ge.count)):st!=null&&(At=Math.max(At,0),qt=Math.min(qt,st.count));let rn=qt-At;if(rn<0||rn===1/0)return;ke.setup(j,oe,Qe,re,Ge);let tn,Kt=Pe;if(Ge!==null&&(tn=H.get(Ge),Kt=rt,Kt.setIndex(tn)),j.isMesh)oe.wireframe===!0?(ze.setLineWidth(oe.wireframeLinewidth*nt()),Kt.setMode(z.LINES)):Kt.setMode(z.TRIANGLES);else if(j.isLine){let ct=oe.linewidth;ct===void 0&&(ct=1),ze.setLineWidth(ct*nt()),j.isLineSegments?Kt.setMode(z.LINES):j.isLineLoop?Kt.setMode(z.LINE_LOOP):Kt.setMode(z.LINE_STRIP)}else j.isPoints?Kt.setMode(z.POINTS):j.isSprite&&Kt.setMode(z.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)go("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Kt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))Kt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let ct=j._multiDrawStarts,Zt=j._multiDrawCounts,Nt=j._multiDrawCount,Cn=Ge?H.get(Ge).bytesPerElement:1,Mi=we.get(oe).currentProgram.getUniforms();for(let In=0;In<Nt;In++)Mi.setValue(z,"_gl_DrawID",In),Kt.render(ct[In]/Cn,Zt[In])}else if(j.isInstancedMesh)Kt.renderInstances(At,rn,j.count);else if(re.isInstancedBufferGeometry){let ct=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Zt=Math.min(re.instanceCount,ct);Kt.renderInstances(At,rn,Zt)}else Kt.render(At,rn)};function bt(I,Z,re){I.transparent===!0&&I.side===nn&&I.forceSinglePass===!1?(I.side=Rn,I.needsUpdate=!0,Bs(I,Z,re),I.side=ws,I.needsUpdate=!0,Bs(I,Z,re),I.side=nn):Bs(I,Z,re)}this.compile=function(I,Z,re=null){re===null&&(re=I),f=Je.get(re),f.init(Z),b.push(f),re.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(f.pushLight(j),j.castShadow&&f.pushShadow(j))}),I!==re&&I.traverseVisible(function(j){j.isLight&&j.layers.test(Z.layers)&&(f.pushLight(j),j.castShadow&&f.pushShadow(j))}),f.setupLights();let oe=new Set;return I.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Ee=j.material;if(Ee)if(Array.isArray(Ee))for(let Oe=0;Oe<Ee.length;Oe++){let Qe=Ee[Oe];bt(Qe,re,j),oe.add(Qe)}else bt(Ee,re,j),oe.add(Ee)}),f=b.pop(),oe},this.compileAsync=function(I,Z,re=null){let oe=this.compile(I,Z,re);return new Promise(j=>{function Ee(){if(oe.forEach(function(Oe){we.get(Oe).currentProgram.isReady()&&oe.delete(Oe)}),oe.size===0){j(I);return}setTimeout(Ee,10)}Ke.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ut=null;function Gn(I){Ut&&Ut(I)}function ci(){vn.stop()}function _i(){vn.start()}let vn=new km;vn.setAnimationLoop(Gn),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(I){Ut=I,de.setAnimationLoop(I),I===null?vn.stop():vn.start()},de.addEventListener("sessionstart",ci),de.addEventListener("sessionend",_i),this.render=function(I,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(Z),Z=de.getCamera()),I.isScene===!0&&I.onBeforeRender(g,I,Z,T),f=Je.get(I,b.length),f.init(Z),b.push(f),K.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Ne.setFromProjectionMatrix(K,Yi,Z.reversedDepth),ie=this.localClippingEnabled,Ye=be.init(this.clippingPlanes,ie),v=le.get(I,y.length),v.init(),y.push(v),de.enabled===!0&&de.isPresenting===!0){let Ee=g.xr.getDepthSensingMesh();Ee!==null&&ji(Ee,Z,-1/0,g.sortObjects)}ji(I,Z,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(se,ue),$e=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,$e&&Ie.addToRenderList(v,I),this.info.render.frame++,Ye===!0&&be.beginShadows();let re=f.state.shadowsArray;Ve.render(re,I,Z),Ye===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset();let oe=v.opaque,j=v.transmissive;if(f.setupLights(),Z.isArrayCamera){let Ee=Z.cameras;if(j.length>0)for(let Oe=0,Qe=Ee.length;Oe<Qe;Oe++){let Ge=Ee[Oe];Ns(oe,j,I,Ge)}$e&&Ie.render(I);for(let Oe=0,Qe=Ee.length;Oe<Qe;Oe++){let Ge=Ee[Oe];Hs(v,I,Ge,Ge.viewport)}}else j.length>0&&Ns(oe,j,I,Z),$e&&Ie.render(I),Hs(v,I,Z);T!==null&&w===0&&(qe.updateMultisampleRenderTarget(T),qe.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(g,I,Z),ke.resetDefaultState(),M=-1,E=null,b.pop(),b.length>0?(f=b[b.length-1],Ye===!0&&be.setGlobalState(g.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?v=y[y.length-1]:v=null};function ji(I,Z,re,oe){if(I.visible===!1)return;if(I.layers.test(Z.layers)){if(I.isGroup)re=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Z);else if(I.isLight)f.pushLight(I),I.castShadow&&f.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Ne.intersectsSprite(I)){oe&&Te.setFromMatrixPosition(I.matrixWorld).applyMatrix4(K);let Oe=Y.update(I),Qe=I.material;Qe.visible&&v.push(I,Oe,Qe,re,Te.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Ne.intersectsObject(I))){let Oe=Y.update(I),Qe=I.material;if(oe&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Te.copy(I.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Te.copy(Oe.boundingSphere.center)),Te.applyMatrix4(I.matrixWorld).applyMatrix4(K)),Array.isArray(Qe)){let Ge=Oe.groups;for(let dt=0,vt=Ge.length;dt<vt;dt++){let st=Ge[dt],At=Qe[st.materialIndex];At&&At.visible&&v.push(I,Oe,At,re,Te.z,st)}}else Qe.visible&&v.push(I,Oe,Qe,re,Te.z,null)}}let Ee=I.children;for(let Oe=0,Qe=Ee.length;Oe<Qe;Oe++)ji(Ee[Oe],Z,re,oe)}function Hs(I,Z,re,oe){let j=I.opaque,Ee=I.transmissive,Oe=I.transparent;f.setupLightsView(re),Ye===!0&&be.setGlobalState(g.clippingPlanes,re),oe&&ze.viewport(A.copy(oe)),j.length>0&&ps(j,Z,re),Ee.length>0&&ps(Ee,Z,re),Oe.length>0&&ps(Oe,Z,re),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Ns(I,Z,re,oe){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[oe.id]===void 0&&(f.state.transmissionRenderTarget[oe.id]=new wn(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Qn:Ci,minFilter:nr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));let Ee=f.state.transmissionRenderTarget[oe.id],Oe=oe.viewport||A;Ee.setSize(Oe.z*g.transmissionResolutionScale,Oe.w*g.transmissionResolutionScale);let Qe=g.getRenderTarget(),Ge=g.getActiveCubeFace(),dt=g.getActiveMipmapLevel();g.setRenderTarget(Ee),g.getClearColor(P),N=g.getClearAlpha(),N<1&&g.setClearColor(16777215,.5),g.clear(),$e&&Ie.render(re);let vt=g.toneMapping;g.toneMapping=Ki;let st=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),f.setupLightsView(oe),Ye===!0&&be.setGlobalState(g.clippingPlanes,oe),ps(I,re,oe),qe.updateMultisampleRenderTarget(Ee),qe.updateRenderTargetMipmap(Ee),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let qt=0,rn=Z.length;qt<rn;qt++){let tn=Z[qt],Kt=tn.object,ct=tn.geometry,Zt=tn.material,Nt=tn.group;if(Zt.side===nn&&Kt.layers.test(oe.layers)){let Cn=Zt.side;Zt.side=Rn,Zt.needsUpdate=!0,Vr(Kt,re,oe,ct,Zt,Nt),Zt.side=Cn,Zt.needsUpdate=!0,At=!0}}At===!0&&(qe.updateMultisampleRenderTarget(Ee),qe.updateRenderTargetMipmap(Ee))}g.setRenderTarget(Qe,Ge,dt),g.setClearColor(P,N),st!==void 0&&(oe.viewport=st),g.toneMapping=vt}function ps(I,Z,re){let oe=Z.isScene===!0?Z.overrideMaterial:null;for(let j=0,Ee=I.length;j<Ee;j++){let Oe=I[j],Qe=Oe.object,Ge=Oe.geometry,dt=Oe.group,vt=Oe.material;vt.allowOverride===!0&&oe!==null&&(vt=oe),Qe.layers.test(re.layers)&&Vr(Qe,Z,re,Ge,vt,dt)}}function Vr(I,Z,re,oe,j,Ee){I.onBeforeRender(g,Z,re,oe,j,Ee),I.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),j.onBeforeRender(g,Z,re,oe,I,Ee),j.transparent===!0&&j.side===nn&&j.forceSinglePass===!1?(j.side=Rn,j.needsUpdate=!0,g.renderBufferDirect(re,Z,oe,j,I,Ee),j.side=ws,j.needsUpdate=!0,g.renderBufferDirect(re,Z,oe,j,I,Ee),j.side=nn):g.renderBufferDirect(re,Z,oe,j,I,Ee),I.onAfterRender(g,Z,re,oe,j,Ee)}function Bs(I,Z,re){Z.isScene!==!0&&(Z=me);let oe=we.get(I),j=f.state.lights,Ee=f.state.shadowsArray,Oe=j.state.version,Qe=ce.getParameters(I,j.state,Ee,Z,re),Ge=ce.getProgramCacheKey(Qe),dt=oe.programs;oe.environment=I.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(I.isMeshStandardMaterial?_t:Rt).get(I.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&I.envMap===null?Z.environmentRotation:I.envMapRotation,dt===void 0&&(I.addEventListener("dispose",ae),dt=new Map,oe.programs=dt);let vt=dt.get(Ge);if(vt!==void 0){if(oe.currentProgram===vt&&oe.lightsStateVersion===Oe)return Pi(I,Qe),vt}else Qe.uniforms=ce.getUniforms(I),I.onBeforeCompile(Qe,g),vt=ce.acquireProgram(Qe,Ge),dt.set(Ge,vt),oe.uniforms=Qe.uniforms;let st=oe.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(st.clippingPlanes=be.uniform),Pi(I,Qe),oe.needsLights=Jo(I),oe.lightsStateVersion=Oe,oe.needsLights&&(st.ambientLightColor.value=j.state.ambient,st.lightProbe.value=j.state.probe,st.directionalLights.value=j.state.directional,st.directionalLightShadows.value=j.state.directionalShadow,st.spotLights.value=j.state.spot,st.spotLightShadows.value=j.state.spotShadow,st.rectAreaLights.value=j.state.rectArea,st.ltc_1.value=j.state.rectAreaLTC1,st.ltc_2.value=j.state.rectAreaLTC2,st.pointLights.value=j.state.point,st.pointLightShadows.value=j.state.pointShadow,st.hemisphereLights.value=j.state.hemi,st.directionalShadowMap.value=j.state.directionalShadowMap,st.directionalShadowMatrix.value=j.state.directionalShadowMatrix,st.spotShadowMap.value=j.state.spotShadowMap,st.spotLightMatrix.value=j.state.spotLightMatrix,st.spotLightMap.value=j.state.spotLightMap,st.pointShadowMap.value=j.state.pointShadowMap,st.pointShadowMatrix.value=j.state.pointShadowMatrix),oe.currentProgram=vt,oe.uniformsList=null,vt}function hi(I){if(I.uniformsList===null){let Z=I.currentProgram.getUniforms();I.uniformsList=Lo.seqWithValue(Z.seq,I.uniforms)}return I.uniformsList}function Pi(I,Z){let re=we.get(I);re.outputColorSpace=Z.outputColorSpace,re.batching=Z.batching,re.batchingColor=Z.batchingColor,re.instancing=Z.instancing,re.instancingColor=Z.instancingColor,re.instancingMorph=Z.instancingMorph,re.skinning=Z.skinning,re.morphTargets=Z.morphTargets,re.morphNormals=Z.morphNormals,re.morphColors=Z.morphColors,re.morphTargetsCount=Z.morphTargetsCount,re.numClippingPlanes=Z.numClippingPlanes,re.numIntersection=Z.numClipIntersection,re.vertexAlphas=Z.vertexAlphas,re.vertexTangents=Z.vertexTangents,re.toneMapping=Z.toneMapping}function Ko(I,Z,re,oe,j){Z.isScene!==!0&&(Z=me),qe.resetTextureUnits();let Ee=Z.fog,Oe=oe.isMeshStandardMaterial?Z.environment:null,Qe=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:mr,Ge=(oe.isMeshStandardMaterial?_t:Rt).get(oe.envMap||Oe),dt=oe.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,vt=!!re.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),st=!!re.morphAttributes.position,At=!!re.morphAttributes.normal,qt=!!re.morphAttributes.color,rn=Ki;oe.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(rn=g.toneMapping);let tn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Kt=tn!==void 0?tn.length:0,ct=we.get(oe),Zt=f.state.lights;if(Ye===!0&&(ie===!0||I!==E)){let ee=I===E&&oe.id===M;be.setState(oe,I,ee)}let Nt=!1;oe.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==Zt.state.version||ct.outputColorSpace!==Qe||j.isBatchedMesh&&ct.batching===!1||!j.isBatchedMesh&&ct.batching===!0||j.isBatchedMesh&&ct.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&ct.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&ct.instancing===!1||!j.isInstancedMesh&&ct.instancing===!0||j.isSkinnedMesh&&ct.skinning===!1||!j.isSkinnedMesh&&ct.skinning===!0||j.isInstancedMesh&&ct.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ct.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ct.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ct.instancingMorph===!1&&j.morphTexture!==null||ct.envMap!==Ge||oe.fog===!0&&ct.fog!==Ee||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==be.numPlanes||ct.numIntersection!==be.numIntersection)||ct.vertexAlphas!==dt||ct.vertexTangents!==vt||ct.morphTargets!==st||ct.morphNormals!==At||ct.morphColors!==qt||ct.toneMapping!==rn||ct.morphTargetsCount!==Kt)&&(Nt=!0):(Nt=!0,ct.__version=oe.version);let Cn=ct.currentProgram;Nt===!0&&(Cn=Bs(oe,Z,j));let Mi=!1,In=!1,Di=!1,on=Cn.getUniforms(),Tn=ct.uniforms;if(ze.useProgram(Cn.program)&&(Mi=!0,In=!0,Di=!0),oe.id!==M&&(M=oe.id,In=!0),Mi||E!==I){ze.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),on.setValue(z,"projectionMatrix",I.projectionMatrix),on.setValue(z,"viewMatrix",I.matrixWorldInverse);let ge=on.map.cameraPosition;ge!==void 0&&ge.setValue(z,ye.setFromMatrixPosition(I.matrixWorld)),Xe.logarithmicDepthBuffer&&on.setValue(z,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&on.setValue(z,"isOrthographic",I.isOrthographicCamera===!0),E!==I&&(E=I,In=!0,Di=!0)}if(j.isSkinnedMesh){on.setOptional(z,j,"bindMatrix"),on.setOptional(z,j,"bindMatrixInverse");let ee=j.skeleton;ee&&(ee.boneTexture===null&&ee.computeBoneTexture(),on.setValue(z,"boneTexture",ee.boneTexture,qe))}j.isBatchedMesh&&(on.setOptional(z,j,"batchingTexture"),on.setValue(z,"batchingTexture",j._matricesTexture,qe),on.setOptional(z,j,"batchingIdTexture"),on.setValue(z,"batchingIdTexture",j._indirectTexture,qe),on.setOptional(z,j,"batchingColorTexture"),j._colorsTexture!==null&&on.setValue(z,"batchingColorTexture",j._colorsTexture,qe));let U=re.morphAttributes;if((U.position!==void 0||U.normal!==void 0||U.color!==void 0)&&_e.update(j,re,Cn),(In||ct.receiveShadow!==j.receiveShadow)&&(ct.receiveShadow=j.receiveShadow,on.setValue(z,"receiveShadow",j.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(Tn.envMap.value=Ge,Tn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Z.environment!==null&&(Tn.envMapIntensity.value=Z.environmentIntensity),In&&(on.setValue(z,"toneMappingExposure",g.toneMappingExposure),ct.needsLights&&Zo(Tn,Di),Ee&&oe.fog===!0&&fe.refreshFogUniforms(Tn,Ee),fe.refreshMaterialUniforms(Tn,oe,q,ne,f.state.transmissionRenderTarget[I.id]),Lo.upload(z,hi(ct),Tn,qe)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Lo.upload(z,hi(ct),Tn,qe),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&on.setValue(z,"center",j.center),on.setValue(z,"modelViewMatrix",j.modelViewMatrix),on.setValue(z,"normalMatrix",j.normalMatrix),on.setValue(z,"modelMatrix",j.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){let ee=oe.uniformsGroups;for(let ge=0,Fe=ee.length;ge<Fe;ge++){let Me=ee[ge];it.update(Me,Cn),it.bind(Me,Cn)}}return Cn}function Zo(I,Z){I.ambientLightColor.needsUpdate=Z,I.lightProbe.needsUpdate=Z,I.directionalLights.needsUpdate=Z,I.directionalLightShadows.needsUpdate=Z,I.pointLights.needsUpdate=Z,I.pointLightShadows.needsUpdate=Z,I.spotLights.needsUpdate=Z,I.spotLightShadows.needsUpdate=Z,I.rectAreaLights.needsUpdate=Z,I.hemisphereLights.needsUpdate=Z}function Jo(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,Z,re){let oe=we.get(I);oe.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),we.get(I.texture).__webglTexture=Z,we.get(I.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:re,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,Z){let re=we.get(I);re.__webglFramebuffer=Z,re.__useDefaultFramebuffer=Z===void 0};let jo=z.createFramebuffer();this.setRenderTarget=function(I,Z=0,re=0){T=I,S=Z,w=re;let oe=!0,j=null,Ee=!1,Oe=!1;if(I){let Ge=we.get(I);if(Ge.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(z.FRAMEBUFFER,null),oe=!1;else if(Ge.__webglFramebuffer===void 0)qe.setupRenderTarget(I);else if(Ge.__hasExternalTextures)qe.rebindTextures(I,we.get(I.texture).__webglTexture,we.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let st=I.depthTexture;if(Ge.__boundDepthTexture!==st){if(st!==null&&we.has(st)&&(I.width!==st.image.width||I.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(I)}}let dt=I.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Oe=!0);let vt=we.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(vt[Z])?j=vt[Z][re]:j=vt[Z],Ee=!0):I.samples>0&&qe.useMultisampledRTT(I)===!1?j=we.get(I).__webglMultisampledFramebuffer:Array.isArray(vt)?j=vt[re]:j=vt,A.copy(I.viewport),D.copy(I.scissor),B=I.scissorTest}else A.copy(pe).multiplyScalar(q).floor(),D.copy(He).multiplyScalar(q).floor(),B=ot;if(re!==0&&(j=jo),ze.bindFramebuffer(z.FRAMEBUFFER,j)&&oe&&ze.drawBuffers(I,j),ze.viewport(A),ze.scissor(D),ze.setScissorTest(B),Ee){let Ge=we.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ge.__webglTexture,re)}else if(Oe){let Ge=Z;for(let dt=0;dt<I.textures.length;dt++){let vt=we.get(I.textures[dt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+dt,vt.__webglTexture,re,Ge)}}else if(I!==null&&re!==0){let Ge=we.get(I.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ge.__webglTexture,re)}M=-1},this.readRenderTargetPixels=function(I,Z,re,oe,j,Ee,Oe,Qe=0){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=we.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge){ze.bindFramebuffer(z.FRAMEBUFFER,Ge);try{let dt=I.textures[Qe],vt=dt.format,st=dt.type;if(!Xe.textureFormatReadable(vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=I.width-oe&&re>=0&&re<=I.height-j&&(I.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Qe),z.readPixels(Z,re,oe,j,et.convert(vt),et.convert(st),Ee))}finally{let dt=T!==null?we.get(T).__webglFramebuffer:null;ze.bindFramebuffer(z.FRAMEBUFFER,dt)}}},this.readRenderTargetPixelsAsync=async function(I,Z,re,oe,j,Ee,Oe,Qe=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=we.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge)if(Z>=0&&Z<=I.width-oe&&re>=0&&re<=I.height-j){ze.bindFramebuffer(z.FRAMEBUFFER,Ge);let dt=I.textures[Qe],vt=dt.format,st=dt.type;if(!Xe.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let At=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,At),z.bufferData(z.PIXEL_PACK_BUFFER,Ee.byteLength,z.STREAM_READ),I.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Qe),z.readPixels(Z,re,oe,j,et.convert(vt),et.convert(st),0);let qt=T!==null?we.get(T).__webglFramebuffer:null;ze.bindFramebuffer(z.FRAMEBUFFER,qt);let rn=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await nm(z,rn,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,At),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ee),z.deleteBuffer(At),z.deleteSync(rn),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,Z=null,re=0){let oe=Math.pow(2,-re),j=Math.floor(I.image.width*oe),Ee=Math.floor(I.image.height*oe),Oe=Z!==null?Z.x:0,Qe=Z!==null?Z.y:0;qe.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,re,0,0,Oe,Qe,j,Ee),ze.unbindTexture()};let Qo=z.createFramebuffer(),ea=z.createFramebuffer();this.copyTextureToTexture=function(I,Z,re=null,oe=null,j=0,Ee=null){Ee===null&&(j!==0?(go("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=j,j=0):Ee=0);let Oe,Qe,Ge,dt,vt,st,At,qt,rn,tn=I.isCompressedTexture?I.mipmaps[Ee]:I.image;if(re!==null)Oe=re.max.x-re.min.x,Qe=re.max.y-re.min.y,Ge=re.isBox3?re.max.z-re.min.z:1,dt=re.min.x,vt=re.min.y,st=re.isBox3?re.min.z:0;else{let U=Math.pow(2,-j);Oe=Math.floor(tn.width*U),Qe=Math.floor(tn.height*U),I.isDataArrayTexture?Ge=tn.depth:I.isData3DTexture?Ge=Math.floor(tn.depth*U):Ge=1,dt=0,vt=0,st=0}oe!==null?(At=oe.x,qt=oe.y,rn=oe.z):(At=0,qt=0,rn=0);let Kt=et.convert(Z.format),ct=et.convert(Z.type),Zt;Z.isData3DTexture?(qe.setTexture3D(Z,0),Zt=z.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(qe.setTexture2DArray(Z,0),Zt=z.TEXTURE_2D_ARRAY):(qe.setTexture2D(Z,0),Zt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment);let Nt=z.getParameter(z.UNPACK_ROW_LENGTH),Cn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Mi=z.getParameter(z.UNPACK_SKIP_PIXELS),In=z.getParameter(z.UNPACK_SKIP_ROWS),Di=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,tn.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,tn.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,dt),z.pixelStorei(z.UNPACK_SKIP_ROWS,vt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,st);let on=I.isDataArrayTexture||I.isData3DTexture,Tn=Z.isDataArrayTexture||Z.isData3DTexture;if(I.isDepthTexture){let U=we.get(I),ee=we.get(Z),ge=we.get(U.__renderTarget),Fe=we.get(ee.__renderTarget);ze.bindFramebuffer(z.READ_FRAMEBUFFER,ge.__webglFramebuffer),ze.bindFramebuffer(z.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Me=0;Me<Ge;Me++)on&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,we.get(I).__webglTexture,j,st+Me),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,we.get(Z).__webglTexture,Ee,rn+Me)),z.blitFramebuffer(dt,vt,Oe,Qe,At,qt,Oe,Qe,z.DEPTH_BUFFER_BIT,z.NEAREST);ze.bindFramebuffer(z.READ_FRAMEBUFFER,null),ze.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(j!==0||I.isRenderTargetTexture||we.has(I)){let U=we.get(I),ee=we.get(Z);ze.bindFramebuffer(z.READ_FRAMEBUFFER,Qo),ze.bindFramebuffer(z.DRAW_FRAMEBUFFER,ea);for(let ge=0;ge<Ge;ge++)on?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,U.__webglTexture,j,st+ge):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,U.__webglTexture,j),Tn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ee.__webglTexture,Ee,rn+ge):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ee.__webglTexture,Ee),j!==0?z.blitFramebuffer(dt,vt,Oe,Qe,At,qt,Oe,Qe,z.COLOR_BUFFER_BIT,z.NEAREST):Tn?z.copyTexSubImage3D(Zt,Ee,At,qt,rn+ge,dt,vt,Oe,Qe):z.copyTexSubImage2D(Zt,Ee,At,qt,dt,vt,Oe,Qe);ze.bindFramebuffer(z.READ_FRAMEBUFFER,null),ze.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Tn?I.isDataTexture||I.isData3DTexture?z.texSubImage3D(Zt,Ee,At,qt,rn,Oe,Qe,Ge,Kt,ct,tn.data):Z.isCompressedArrayTexture?z.compressedTexSubImage3D(Zt,Ee,At,qt,rn,Oe,Qe,Ge,Kt,tn.data):z.texSubImage3D(Zt,Ee,At,qt,rn,Oe,Qe,Ge,Kt,ct,tn):I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ee,At,qt,Oe,Qe,Kt,ct,tn.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ee,At,qt,tn.width,tn.height,Kt,tn.data):z.texSubImage2D(z.TEXTURE_2D,Ee,At,qt,Oe,Qe,Kt,ct,tn);z.pixelStorei(z.UNPACK_ROW_LENGTH,Nt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Cn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Mi),z.pixelStorei(z.UNPACK_SKIP_ROWS,In),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Di),Ee===0&&Z.generateMipmaps&&z.generateMipmap(Zt),ze.unbindTexture()},this.initRenderTarget=function(I){we.get(I).__webglFramebuffer===void 0&&qe.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?qe.setTextureCube(I,0):I.isData3DTexture?qe.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?qe.setTexture2DArray(I,0):qe.setTexture2D(I,0),ze.unbindTexture()},this.resetState=function(){S=0,w=0,T=null,ze.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Gt._getUnpackColorSpace()}}});var hs,ou=Kn(()=>{hs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}});var gi,PM,pf,DM,us,Ur=Kn(()=>{pn();gi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},PM=new Mr(-1,1,1,-1,0,1),pf=class extends Vt{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}},DM=new pf,us=class{constructor(e){this._mesh=new De(DM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,PM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var au,F0=Kn(()=>{pn();Ur();au=class extends gi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=pi.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new us(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var fl,lu,z0=Kn(()=>{Ur();fl=class extends gi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},lu=class extends gi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var cu,U0=Kn(()=>{pn();ou();F0();z0();cu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ve);this._width=n.width,this._height=n.height,t=new wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new au(hs),this.copyPass.material.blending=kn,this.clock=new Xa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}fl!==void 0&&(a instanceof fl?n=!0:a instanceof lu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var hu,H0=Kn(()=>{pn();Ur();hu=class extends gi{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}});function N0(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=kM(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new F(Math.cos(l),Math.sin(l),0).normalize();i[a*4]=(c.x*.5+.5)*255,i[a*4+1]=(c.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let r=new is(i,e,e);return r.wrapS=En,r.wrapT=En,r.needsUpdate=!0,r}function kM(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}var pl,ml,uu,B0=Kn(()=>{pn();pl={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ve},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ht},cameraProjectionMatrixInverse:{value:new ht},cameraWorldMatrix:{value:new ht},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},ml={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},uu={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`}});function mf(s,e,t){let n=LM(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function LM(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new F(Math.cos(r),Math.sin(r),a))}return n}var gl,O0=Kn(()=>{pn();gl={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:mf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ve},cameraProjectionMatrixInverse:{value:new ht},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`}});var du,V0=Kn(()=>{du=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,p=c-u,m=e-d,x=t-p,v,f;m>x?(v=1,f=0):(v=0,f=1);let y=m-v+h,b=x-f+h,g=m-1+2*h,_=x-1+2*h,S=l&255,w=c&255,T=this.perm[S+this.perm[w]]%12,M=this.perm[S+v+this.perm[w+f]]%12,E=this.perm[S+1+this.perm[w+1]]%12,A=.5-m*m-x*x;A<0?n=0:(A*=A,n=A*A*this._dot(this.grad3[T],m,x));let D=.5-y*y-b*b;D<0?i=0:(D*=D,i=D*D*this._dot(this.grad3[M],y,b));let B=.5-g*g-_*_;return B<0?r=0:(B*=B,r=B*B*this._dot(this.grad3[E],g,_)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),u=Math.floor(t+c),d=Math.floor(n+c),p=1/6,m=(h+u+d)*p,x=h-m,v=u-m,f=d-m,y=e-x,b=t-v,g=n-f,_,S,w,T,M,E;y>=b?b>=g?(_=1,S=0,w=0,T=1,M=1,E=0):y>=g?(_=1,S=0,w=0,T=1,M=0,E=1):(_=0,S=0,w=1,T=1,M=0,E=1):b<g?(_=0,S=0,w=1,T=0,M=1,E=1):y<g?(_=0,S=1,w=0,T=0,M=1,E=1):(_=0,S=1,w=0,T=1,M=1,E=0);let A=y-_+p,D=b-S+p,B=g-w+p,P=y-T+2*p,N=b-M+2*p,W=g-E+2*p,ne=y-1+3*p,q=b-1+3*p,se=g-1+3*p,ue=h&255,pe=u&255,He=d&255,ot=this.perm[ue+this.perm[pe+this.perm[He]]]%12,Ne=this.perm[ue+_+this.perm[pe+S+this.perm[He+w]]]%12,Ye=this.perm[ue+T+this.perm[pe+M+this.perm[He+E]]]%12,ie=this.perm[ue+1+this.perm[pe+1+this.perm[He+1]]]%12,K=.6-y*y-b*b-g*g;K<0?i=0:(K*=K,i=K*K*this._dot3(this.grad3[ot],y,b,g));let ye=.6-A*A-D*D-B*B;ye<0?r=0:(ye*=ye,r=ye*ye*this._dot3(this.grad3[Ne],A,D,B));let Te=.6-P*P-N*N-W*W;Te<0?a=0:(Te*=Te,a=Te*Te*this._dot3(this.grad3[Ye],P,N,W));let me=.6-ne*ne-q*q-se*se;return me<0?o=0:(me*=me,o=me*me*this._dot3(this.grad3[ie],ne,q,se)),32*(i+r+a+o)}noise4d(e,t,n,i){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,d,p,m,x=(e+t+n+i)*l,v=Math.floor(e+x),f=Math.floor(t+x),y=Math.floor(n+x),b=Math.floor(i+x),g=(v+f+y+b)*c,_=v-g,S=f-g,w=y-g,T=b-g,M=e-_,E=t-S,A=n-w,D=i-T,B=M>E?32:0,P=M>A?16:0,N=E>A?8:0,W=M>D?4:0,ne=E>D?2:0,q=A>D?1:0,se=B+P+N+W+ne+q,ue=a[se][0]>=3?1:0,pe=a[se][1]>=3?1:0,He=a[se][2]>=3?1:0,ot=a[se][3]>=3?1:0,Ne=a[se][0]>=2?1:0,Ye=a[se][1]>=2?1:0,ie=a[se][2]>=2?1:0,K=a[se][3]>=2?1:0,ye=a[se][0]>=1?1:0,Te=a[se][1]>=1?1:0,me=a[se][2]>=1?1:0,$e=a[se][3]>=1?1:0,nt=M-ue+c,z=E-pe+c,lt=A-He+c,Ke=D-ot+c,Xe=M-Ne+2*c,ze=E-Ye+2*c,It=A-ie+2*c,we=D-K+2*c,qe=M-ye+3*c,Rt=E-Te+3*c,_t=A-me+3*c,H=D-$e+3*c,R=M-1+4*c,Y=E-1+4*c,ce=A-1+4*c,fe=D-1+4*c,le=v&255,Je=f&255,be=y&255,Ve=b&255,Ie=o[le+o[Je+o[be+o[Ve]]]]%32,_e=o[le+ue+o[Je+pe+o[be+He+o[Ve+ot]]]]%32,Pe=o[le+Ne+o[Je+Ye+o[be+ie+o[Ve+K]]]]%32,rt=o[le+ye+o[Je+Te+o[be+me+o[Ve+$e]]]]%32,et=o[le+1+o[Je+1+o[be+1+o[Ve+1]]]]%32,ke=.6-M*M-E*E-A*A-D*D;ke<0?h=0:(ke*=ke,h=ke*ke*this._dot4(r[Ie],M,E,A,D));let it=.6-nt*nt-z*z-lt*lt-Ke*Ke;it<0?u=0:(it*=it,u=it*it*this._dot4(r[_e],nt,z,lt,Ke));let X=.6-Xe*Xe-ze*ze-It*It-we*we;X<0?d=0:(X*=X,d=X*X*this._dot4(r[Pe],Xe,ze,It,we));let de=.6-qe*qe-Rt*Rt-_t*_t-H*H;de<0?p=0:(de*=de,p=de*de*this._dot4(r[rt],qe,Rt,_t,H));let $=.6-R*R-Y*Y-ce*ce-fe*fe;return $<0?m=0:($*=$,m=$*$*this._dot4(r[et],R,Y,ce,fe)),27*(h+u+d+p+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}}});var vl,G0=Kn(()=>{pn();Ur();B0();O0();ou();V0();vl=class s extends gi{constructor(e,t,n=512,i=512,r,a,o){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=N0(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new wn(this.width,this.height,{type:Qn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Xt({defines:Object.assign({},pl.defines),uniforms:pi.clone(pl.uniforms),vertexShader:pl.vertexShader,fragmentShader:pl.fragmentShader,blending:kn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ba,this.normalMaterial.blending=kn,this.pdMaterial=new Xt({defines:Object.assign({},gl.defines),uniforms:pi.clone(gl.uniforms),vertexShader:gl.vertexShader,fragmentShader:gl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Xt({defines:Object.assign({},ml.defines),uniforms:pi.clone(ml.uniforms),vertexShader:ml.vertexShader,fragmentShader:ml.fragmentShader,blending:kn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Xt({uniforms:pi.clone(hs.uniforms),vertexShader:hs.vertexShader,fragmentShader:hs.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ya,blendDst:Sr,blendEquation:Ti,blendSrcAlpha:qa,blendDstAlpha:Sr,blendEquationAlpha:Ti}),this.blendMaterial=new Xt({uniforms:pi.clone(uu.uniforms),vertexShader:uu.vertexShader,fragmentShader:uu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:kc,blendSrc:Ya,blendDst:Sr,blendEquation:Ti,blendSrcAlpha:qa,blendDstAlpha:Sr,blendEquationAlpha:Ti}),this._fsQuad=new us(null),this._originalClearColor=new Ze,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new gr,this.depthTexture.format=rr,this.depthTexture.type=sr,this.normalRenderTarget=new wn(this.width,this.height,{minFilter:Un,magFilter:Un,type:Qn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=mf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=kn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=kn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=kn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=kn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=kn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new du,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;i[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new is(i,e,e,ri,Ci);return r.wrapS=En,r.wrapT=En,r.needsUpdate=!0,r}};vl.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5}});var W0,X0=Kn(()=>{pn();W0={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`}});var Oo,q0=Kn(()=>{pn();Ur();ou();X0();Oo=class s extends gi{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ve(e.x,e.y):new ve(256,256),this.clearColor=new Ze(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new wn(r,a,{type:Qn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new wn(r,a,{type:Qn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new wn(r,a,{type:Qn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=W0;this.highPassUniforms=pi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ve(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=pi.clone(hs.uniforms),this.blendMaterial=new Xt({uniforms:this.copyUniforms,vertexShader:hs.vertexShader,fragmentShader:hs.fragmentShader,blending:Ai,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ze,this._oldClearAlpha=1,this._basic=new Ft,this._fsQuad=new us(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ve(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ve(.5,.5)},direction:{value:new ve(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Oo.BlurDirectionX=new ve(1,0);Oo.BlurDirectionY=new ve(0,1)});var xl,Y0=Kn(()=>{xl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`}});var fu,$0=Kn(()=>{pn();Ur();Y0();fu=class extends gi{constructor(){super(),this.uniforms=pi.clone(xl.uniforms),this.material=new Na({name:xl.name,uniforms:this.uniforms,vertexShader:xl.vertexShader,fragmentShader:xl.fragmentShader}),this._fsQuad=new us(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Gt.getTransfer(this._outputColorSpace)===en&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Co?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Wc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}});var K0={};Sg(K0,{makeVcPost:()=>FM});function FM(s,e,t,n,i){let r=s.getPixelRatio(),a=new wn(n*r,i*r,{type:Qn,stencilBuffer:!0}),o=new cu(s,a);o.setPixelRatio(r),o.setSize(n,i),o.addPass(new hu(e,t));let l=new vl(e,t,n,i);return l.blendIntensity=.75,l.updateGtaoMaterial({radius:.6,distanceExponent:1.5,thickness:1.2,scale:1}),o.addPass(l),o.addPass(new Oo(new ve(n,i),.3,.5,.88)),o.addPass(new fu),{render:()=>o.render(),setSize:(c,h)=>{o.setPixelRatio(s.getPixelRatio()),o.setSize(c,h),l.setSize(c,h)}}}var Z0=Kn(()=>{"use strict";pn();U0();H0();G0();q0();$0()});var ei=.016666666666666666,Oi={radius:10,points:56,seed:7},yu={hp:100,speed:6.2,radius:.5},bu={hp:100,speed:5,radius:.5},ta=.5,Sl=.8,na=.25,Vi={shots:3,interval:.08,cooldown:.5,speed:24,range:9,radius:.22,dmg:6,autoAimRange:10},Cf=3,an={windup:.3,cooldown:6,speed:26,range:11,radius:.45,dmg:12,slow:1.6},ln={windup:.12,recover:.2,cooldown:7,range:3.2,halfAngle:40*Math.PI/180,dmg:10},vi={base:2.4,lowHpBonus:5.6,slowedBonus:1,knockTime:.35,dashCancelAfter:.1,edgeGrace:.12},Zn={distance:3.6,time:.16,cooldown:3.5},If=.15,_u={duration:1.2,gravity:30},jt={hold:.8,protect:.2,climb:.2,landInset:1.2,lock:4,inputKeep:.15,hangOut:.45,catch:.08,landMargin:.35,searchAlong:.6,minInset:.6},Pf=2.5,Mn={windup:.3,shots:2,interval:.12,speed:15,range:9,radius:.25,dmg:6,cooldownMin:1.4,cooldownMax:2.1},yn={windup:.65,recover:.6,cooldown:6,range:3,halfAngle:45*Math.PI/180,dmg:14},hn={think:.15,preferMin:4.5,preferMax:7.5,edgeDanger:2.2,dodgeChance:.35,dodgeReactMin:.22,dodgeReactMax:.4,dodgeCooldown:4,edgeSaveChance:.5,edgeSaveReact:.25,strafeSwitchMin:1.5,strafeSwitchMax:2.5},Tl={basic:.025,control:.06,push:.09,enemyBasic:.03,enemyHeavy:.09,melee1:.04,melee2:.04,melee3:.07,charge:.09,counterBash:.09,counterMelee:.04},lr=Math.PI/180,Re={player:{hp:100,speed:6.2,radius:.5},edgeMargin:.35,melee:[{shape:"line",range:2.2,width:.6,halfAngle:0,windup:.1,recover:.12,dmg:8,stun:.18,knock:0,step:.3},{shape:"line",range:2.4,width:.6,halfAngle:0,windup:.1,recover:.12,dmg:8,stun:.18,knock:0,step:.3},{shape:"fan",range:2,width:0,halfAngle:70*lr,windup:.18,recover:.3,dmg:12,stun:0,knock:1.6,step:0}],meleeActive:.05,comboWindow:.35,attackMoveMult:.35,target:{keep:3.5,autoRange:3,autoHalfAngle:90*lr},recoil:.25,charge:{windup:.1,time:.22,distance:4,cooldown:6,contact:1,autoRange:6,dmg:6,breakDur:1.2,bounce:1,bounceStun:.35,archerStun:.4,hitRecover:.15,missRecover:.3,bounceTime:.12},guard:{moveMult:.4,maxHold:2,lock:1,turnRate:720*lr,blockHalfAngle:70*lr,perfect:.2,perfectBreak:1,chipDmg:3,pushback:.6,arrowScan:6,threatDrop:8,pushbackTime:.1},counter:{dur:.8,bash:{range:3.2,halfAngle:40*lr,dmg:14,knockMult:1.5,aimRange:3.7,recover:.2},melee:{step:.8,aimRange:3.5}},bearer:{hp:90,speed:4,frontHalfAngle:60*lr,turnRate:100*lr,heavyArmor:.25,approach:2.5},archer:{hp:60,speed:4.5,preferMin:6,preferMax:8,backstepTrigger:2.5,backstep:3,backstepCooldown:4,backstepTime:.25},stack:{window:1.5,hits:3,armor:.8},revive:{count:1,delay:1.5,hpFrac:.5,protect:1.5,edge:1.5,enemyClear:3,grid:.25},waves:{list:[["archer","archer"],["shieldbearer","archer"],["shieldbearer","shieldbearer","archer"]],gap:1.5,markLead:.8,minPlayerDist:5,minEdge:1.5,spacing:1.5,grid:.5},killEdge:2,inputBuffer:.15},St={islands:[{seed:21,waves:[["archer","archer"],["shieldbearer","archer"]]},{seed:13,waves:[["shieldbearer","archer","archer"],["shieldbearer","shieldbearer","archer"]]},{seed:37,waves:[["shieldbearer","shieldbearer","archer"],["shieldbearer","shieldbearer","archer","archer"]]}],exit:{delay:1,minDist:3,hold:.6,ring:1,apart:4},stages:[{kind:"battle",island:1},{kind:"altar",altar:"A"},{kind:"battle",island:2},{kind:"battle",island:3},{kind:"altar",altar:"B"}],reward:{islands:[1,2],coins:3,healFrac:.3},coin:{pickup:1.5,inset:.6,edge:.3,radius:.2,grid:.1},altar:{seed:901,radius:7,shape:[{k:3,amp:.035,phase:.6},{k:5,amp:.02,phase:2.2}],statueR:.6,spots:[{kind:"athena",pos:{x:-3,z:-1.8}},{kind:"hermes",pos:{x:0,z:-3.4}},{kind:"poseidon",pos:{x:3,z:-1.8}},{kind:"convert",pos:{x:-5.2,z:.6}},{kind:"revive",pos:{x:5.2,z:.6}}],exitAngle:Math.PI/3,exitFromLanding:3,exitFromSpot:2.5,reach:1.5,maxBlessings:2,price:{bless:10,convert:7,revive:8}},jump:{air:1.5,protect:1,swapAt:.75},gen:{terms:[{k:2,amp:[.04,.07]},{k:3,amp:[.05,.08]},{k:5,amp:[.03,.05]},{k:9,amp:[.02,.03]}],rockR:[.8,1.3],rockDist:[2.8,6.5],rockEdge:1.5,rockGap:1.2,rockTries:400,keepOut:[{x:0,z:0,r:2},{x:0,z:3.5,r:1.5}]}},Os="v0.6.0";var tt=(s,e)=>({x:s.x+e.x,z:s.z+e.z}),ft=(s,e)=>({x:s.x-e.x,z:s.z-e.z}),he=(s,e)=>({x:s.x*e,z:s.z*e}),yt=s=>Math.hypot(s.x,s.z),pt=(s,e)=>Math.hypot(s.x-e.x,s.z-e.z),cn=(s,e)=>s.x*e.x+s.z*e.z;function Ae(s){let e=Math.hypot(s.x,s.z);return e>1e-9?{x:s.x/e,z:s.z/e}:{x:0,z:0}}var gs=s=>({x:Math.cos(s),z:Math.sin(s)}),Wn=s=>Math.atan2(s.z,s.x),Jn=s=>({x:-s.z,z:s.x});function Gr(s,e){let t=Math.cos(e),n=Math.sin(e);return{x:s.x*t-s.z*n,z:s.x*n+s.z*t}}function wl(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Vs(s){return s===void 0||s===Oi.seed?Tg():s===St.altar.seed?Rl():wg(s)}function Rl(){let s=St.altar,e=Oi.points,t=[];for(let r=0;r<e;r++){let a=r/e*Math.PI*2,o=1;for(let l of s.shape)o+=l.amp*Math.sin(l.k*a+l.phase);t.push({x:Math.cos(a)*o*s.radius,z:Math.sin(a)*o*s.radius})}let n=s.spots.map(r=>({kind:r.kind,pos:{...r.pos},facing:Math.atan2(-r.pos.z,-r.pos.x)})),i=n.filter(r=>r.kind==="athena"||r.kind==="hermes"||r.kind==="poseidon").map(r=>({pos:{...r.pos},r:s.statueR}));return{poly:t,radius:s.radius,rocks:i,seed:s.seed,kind:"altar",spots:n}}function Tg(){let s=Oi.points,e=Oi.radius,t=Oi.seed,n=[];for(let i=0;i<s;i++){let r=i/s*Math.PI*2,a=e*(1+.07*Math.sin(3*r+t)+.05*Math.sin(5*r+t*2.1)+.03*Math.sin(9*r+t*.7));n.push({x:Math.cos(r)*a,z:Math.sin(r)*a})}return{poly:n,radius:e,rocks:[{pos:{x:-2.6,z:-3},r:1.3},{pos:{x:3.6,z:2.6},r:.85}]}}function wg(s){let e=St.gen,t=wl(s),n=h=>h[0]+(h[1]-h[0])*t(),i=e.terms.map(h=>({k:h.k,amp:n(h.amp),phase:t()*Math.PI*2})),r=Oi.points,a=Oi.radius,o=[];for(let h=0;h<r;h++){let u=h/r*Math.PI*2,d=1;for(let p of i)d+=p.amp*Math.sin(p.k*u+p.phase);o.push({x:Math.cos(u)*d*a,z:Math.sin(u)*d*a})}let l=t()<.5?2:3,c=[];for(let h=0;h<e.rockTries&&c.length<l;h++){let u=n(e.rockR),d=t()*Math.PI*2,p=n(e.rockDist),m={x:Math.cos(d)*p,z:Math.sin(d)*p};Rg(m,u,o,c)&&c.push({pos:m,r:u})}return{poly:o,radius:a,rocks:c,seed:s}}function Rg(s,e,t,n){let i=St.gen;return Bt(s,t)-e<i.rockEdge||n.some(r=>Math.hypot(r.pos.x-s.x,r.pos.z-s.z)<r.r+e+i.rockGap)?!1:i.keepOut.every(r=>Math.hypot(r.x-s.x,r.z-s.z)>=e+r.r)}function Mu(s,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let r=e[n],a=e[i];r.z>s.z!=a.z>s.z&&s.x<(a.x-r.x)*(s.z-r.z)/(a.z-r.z)+r.x&&(t=!t)}return t}function Bt(s,e){let t=1/0;for(let n=0,i=e.length-1;n<e.length;i=n++)t=Math.min(t,Qi(s,e[i],e[n]));return Mu(s,e)?t:-t}function Qi(s,e,t){let n=t.x-e.x,i=t.z-e.z,r=n*n+i*i,a=r===0?0:Math.max(0,Math.min(1,((s.x-e.x)*n+(s.z-e.z)*i)/r)),o=e.x+n*a-s.x,l=e.z+i*a-s.z;return Math.hypot(o,l)}function Wr(s,e,t,n){return Qi(t,s,e)<n}function Lf(s,e){return{rng:s,thinkT:0,strafeDir:s()<.5?1:-1,strafeT:0,move:{x:0,z:0},wantHeavy:!1,seen:new Set,dodge:null,edgeSaveAt:null,edgeSaveRolled:!1,aggression:e==="1v2"?.18:.28}}var Ag=()=>({move:{x:0,z:0},fire:!1,fireDir:null,cast:null,dash:!1,dashDir:null});function Df(s,e,t,n){let i=Ae(Jn(t)),r=tt(e.pos,he(i,n)),a=tt(e.pos,he(i,-n)),o=s.edgeDistance(r),l=s.edgeDistance(a);return Math.max(o,l)<1.2?Ae(he(e.pos,-1)):o>=l?i:he(i,-1)}function Ff(s,e,t,n){let i=Ag(),r=s.state,a=s.player,o=r.time;if(!a||a.state==="dead"||a.state==="falling")return i;if(e.state==="knocked")return t.edgeSaveRolled||(t.edgeSaveRolled=!0,cn(Ae(e.knockVel),Ae(e.pos))>.3&&t.rng()<hn.edgeSaveChance&&(t.edgeSaveAt=o+hn.edgeSaveReact)),t.edgeSaveAt!==null&&o>=t.edgeSaveAt&&s.edgeDistance(e.pos)<2.5&&(t.edgeSaveAt=null,i.dash=!0,i.dashDir=Ae(he(e.pos,-1))),i;t.edgeSaveRolled=!1,t.edgeSaveAt=null;for(let d of s.pendingProjectiles()){if(d.team===e.team)continue;let p=`p${d.id}`;if(t.seen.has(p))continue;t.seen.add(p);let m=ft(e.pos,d.pos),x=cn(m,d.dir);x<=0||x>8||Math.abs(m.x*d.dir.z-m.z*d.dir.x)>e.radius+d.radius+.3||kf(s,e,t,d.dir,d.kind==="control"?.9:.35)}if(a.windup&&a.windup.skill==="control"){let d=`w${a.id}:${(o-a.windup.t).toFixed(2)}`;if(!t.seen.has(d)){t.seen.add(d);let p=ft(e.pos,a.pos),m=cn(p,a.windup.dir),x=Math.abs(p.x*a.windup.dir.z-p.z*a.windup.dir.x);m>0&&m<an.range&&x<e.radius+an.radius+.3&&kf(s,e,t,a.windup.dir,1)}}if(t.seen.size>400&&t.seen.clear(),t.dodge&&o>=t.dodge.at){if(t.dodge.dash)return e.cooldowns.dash<=0&&(e.state==="idle"||e.state==="windup")&&(i.dash=!0,i.dashDir=t.dodge.dir),t.dodge=null,i;if(o<t.dodge.until)return i.move=t.dodge.dir,i;t.dodge=null}if(e.state!=="idle")return i.move=he(t.move,.5),i;t.thinkT-=n,t.strafeT-=n;let l=ft(a.pos,e.pos),c=yt(l),h=Ae(l),u=s.edgeDistance(e.pos);if(t.thinkT<=0){t.thinkT=hn.think,t.strafeT<=0&&(t.strafeT=hn.strafeSwitchMin+(hn.strafeSwitchMax-hn.strafeSwitchMin)*t.rng(),t.rng()<.5&&(t.strafeDir=t.strafeDir===1?-1:1)),!t.wantHeavy&&e.cooldowns.push<=0&&s.heavyOwner===null&&t.rng()<t.aggression&&(t.wantHeavy=!0);let d,p=he(Jn(h),t.strafeDir);if(u<hn.edgeDanger)d=Ae(tt(he(Ae(he(e.pos,-1)),1.4),he(p,.5)));else if(t.wantHeavy)d=h;else if(c>hn.preferMax)d=Ae(tt(h,he(p,.4)));else if(c<hn.preferMin){let m=he(h,-1);d=s.edgeDistance(tt(e.pos,he(m,2)))<hn.edgeDanger+.5?p:Ae(tt(m,he(p,.5)))}else d=p;s.edgeDistance(tt(e.pos,he(d,1.5)))<hn.edgeDanger*.6&&(t.strafeDir=t.strafeDir===1?-1:1,d=Ae(he(e.pos,-1)));for(let m of r.island.rocks){let x=tt(e.pos,he(d,1.2));pt(x,m.pos)<m.r+e.radius+.3&&(d=Ae(tt(d,he(Jn(Ae(ft(m.pos,e.pos))),t.strafeDir*1.5))))}t.move=d}if(i.move=t.move,t.wantHeavy){if(s.heavyOwner!==null&&s.heavyOwner!==e.id)t.wantHeavy=!1;else if(c<yn.range-.4&&e.cooldowns.push<=0)return t.wantHeavy=!1,i.cast={skill:"push",dir:h},i}else if(e.cooldowns.basic<=0&&c<Mn.range-.5&&s.lineOfSight(e.pos,a.pos)){let d=(t.rng()-.5)*2*(6*Math.PI/180);i.fire=!0,i.fireDir=Gr(h,d)}return i}function kf(s,e,t,n,i){if(t.dodge)return;let r=hn.dodgeReactMin+(hn.dodgeReactMax-hn.dodgeReactMin)*t.rng(),a=t.rng(),o=s.state.time;a<hn.dodgeChance*i&&e.cooldowns.dash<=0?t.dodge={at:o+r,dir:Df(s,e,n,Zn.distance),dash:!0,until:0}:a<(hn.dodgeChance+.3)*i&&(t.dodge={at:o+r,dir:Df(s,e,n,1.5),dash:!1,until:o+r+.35})}function Hf(s){return{rng:s,delay:.3,cursor:0,cdEst:{push:null,control:null,dash:null},strategy:"kite",until:0,reason:"start",distErr:1,risky:!1,preDashed:!1,myControlHitT:-99,edgeSaveAt:null,knockSeenT:-99,lastPerceived:null,moveDir:null,climbAt:null,lastEngageT:0,rockShots:0,stalls:[],decisions:[]}}var Cg=()=>({move:{x:0,z:0},fire:!1,fireDir:null,cast:null,dash:!1,dashDir:null}),ia=ln.range+.5,Ig=.5;function Nf(s,e,t){let n=Cg(),i=s.state,r=e,a=s.player,o=i.time,l=t.rng,c=o-t.delay;for(let{t:D,e:B}of s.log)if(!(D<=t.cursor||D>c)){if("ownerId"in B&&B.ownerId===a.id){let P=(l()*2-1)*Ig;B.type==="cast"&&B.skill==="push"?t.cdEst.push=D+ln.cooldown+P:B.type==="shoot"&&B.kind==="control"?t.cdEst.control=D+an.cooldown+P:B.type==="dash"&&(t.cdEst.dash=D+Zn.cooldown+P,t.lastEngageT=o)}B.type==="hit"&&(B.sourceId===r.id&&B.kind==="control"&&(t.myControlHitT=D),(B.sourceId===r.id||B.targetId===r.id)&&(t.lastEngageT=o)),B.type==="blocked"&&B.ownerId===r.id&&t.rockShots++}if(t.cursor=Math.max(t.cursor,c),r.state==="ledge")return t.climbAt===null&&(t.climbAt=o-r.stateT+.2+l()*.15),o>=t.climbAt&&(t.climbAt=null,n.dash=!0),n;if(t.climbAt=null,r.state==="climb")return n;let h=s.snapshotAt(c);if(!h)return n;t.lastPerceived=h.pos;let u=s.snapshotAt(c-.1),d=u&&h.t-u.t>.05?he(ft(h.pos,u.pos),1/(h.t-u.t)):{x:0,z:0},p=D=>{let B=he(d,t.delay+D);return yt(B)>3&&(B=he(Ae(B),3)),tt(h.pos,B)};if(h.state==="falling"||h.state==="dead")return n;if(r.state==="knocked"){if(t.knockSeenT!==r.stateT&&r.stateT<.02){t.knockSeenT=r.stateT;let D=cn(Ae(r.knockVel),Ae(r.pos))>.2&&s.edgeDistance(r.pos)<4;t.edgeSaveAt=D&&r.cooldowns.dash<=0?o+.18+l()*.17:null}return t.edgeSaveAt!==null&&o>=t.edgeSaveAt&&(t.edgeSaveAt=null,n.dash=!0,n.dashDir=Ae(he(r.pos,-1))),n}if(t.edgeSaveAt=null,r.state!=="idle"&&r.state!=="windup"&&r.state!=="recover")return n;let m=pt(r.pos,h.pos),x=m*t.distErr,v=Ae(ft(h.pos,r.pos)),f=s.lineOfSight(r.pos,h.pos),y=s.edgeDistance(r.pos),b=t.cdEst.push===null||o>=t.cdEst.push,g=r.cooldowns.push<=0,_=r.cooldowns.control<=0,S=r.cooldowns.dash<=0;if(h.state==="ledge"&&(r.state==="idle"||r.state==="recover"))return n.move=Uf(s,r,t,zf(s,r,v),6),g&&x<=ia-.3&&r.state==="idle"?(n.cast={skill:"push",dir:sa(r.pos,h.pos,l,4,r.facing)},t.lastEngageT=o):f&&r.state==="idle"&&(n.fire=!0,n.fireDir=sa(r.pos,h.pos,l,8,r.facing)),n;let w="";y<1.5&&(w="edge");let T=h.windup;if(T&&(T.skill==="push"||T.skill==="control")&&h.t-T.startT<T.dur+.05){let D=ft(r.pos,h.pos),B=cn(D,T.dir),P=Math.abs(D.x*T.dir.z-D.z*T.dir.x),N=T.skill==="push"?ia:an.range;B>0&&B<N&&P<(T.skill==="push"?2.2:1.2)&&(w="threat")}if(w==="threat"&&S&&l()<.6){let D=Ae(Jn(T.dir)),B=tt(r.pos,he(D,Zn.distance)),P=tt(r.pos,he(D,-Zn.distance));return n.dash=!0,n.dashDir=s.edgeDistance(B)>=s.edgeDistance(P)?D:he(D,-1),t.lastEngageT=o,n}if(o>=t.until||w==="edge"&&t.strategy!=="retreat"){t.delay=.25+l()*.15,t.distErr=1+(l()*2-1)*.08,t.risky=l()<.25,t.preDashed=!1;let D=o-t.myControlHitT<1.5,B={approach:.35+(b?0:.45)+(g?.15:-.4)+(h.slowed?.3:0)+(D?.4:0)+(t.risky?.5:0),kite:.45+(x<3.5?.2:0)+(b?.15:0),flank:.25+(f?0:.35),retreat:w==="edge"?5:y<2.5?.6:0},P="kite",N=-1/0;for(let W of Object.keys(B)){let ne=B[W]+l()*.35;ne>N&&(N=ne,P=W)}t.strategy=P,t.until=o+1+l()*1,t.reason=w==="edge"?"\u9760\u8FD1\u5CF6\u7DE3":`\u5C0D\u624B\u9707\u64CA${b?"\u53EF\u80FD\u53EF\u7528":"\u4F30\u8A08\u51B7\u537B\u4E2D"}${t.risky?"\uFF08\u5192\u96AA\uFF09":""}${D?"\u3001\u525B\u675F\u7E1B\u547D\u4E2D":""}`,t.decisions.push({t:o,strategy:P,reason:t.reason}),t.decisions.length>400&&t.decisions.shift()}let M={x:0,z:0},E=Ae(he(r.pos,-1));switch(t.strategy){case"approach":M=v,g&&x<=ia-.3&&r.state==="idle"&&(n.cast={skill:"push",dir:sa(r.pos,p(ln.windup),l,4,r.facing)},t.lastEngageT=o);break;case"kite":{let D=x<5?he(v,-1):x>7?v:{x:0,z:0};if(M=Ae(tt(D,he(Jn(v),.8))),!t.preDashed&&S&&b&&x<ia+.4&&l()<.3)return t.preDashed=!0,n.dash=!0,n.dashDir=Ae(tt(he(v,-1),he(E,.5))),t.lastEngageT=o,n;break}case"flank":M=Ae(tt(he(Jn(v),1),he(v,.3)));break;case"retreat":M=E;break}M=zf(s,r,M);let A=t.decisions.length>0&&t.decisions[t.decisions.length-1].t===o;return M=Uf(s,r,t,M,A?1/0:m<ia+1?6:1),n.move=M,r.state==="idle"&&!n.cast&&f&&(_&&x>4&&x<an.range-1&&t.strategy!=="retreat"&&l()<.02?(n.cast={skill:"control",dir:sa(r.pos,p(an.windup+x/an.speed),l,8,r.facing)},t.lastEngageT=o):x<Vi.range-.5&&(n.fire=!0,n.fireDir=sa(r.pos,p(x/Vi.speed),l,8,r.facing),x<Vi.range-1&&(t.lastEngageT=o))),o-t.lastEngageT>8&&(t.stalls.push({t:o,strategy:t.strategy,reason:t.reason,dist:Math.round(m*10)/10,los:f,rockShots:t.rockShots}),t.lastEngageT=o,t.rockShots=0),n}function sa(s,e,t,n,i){let r=(t()*2-1)*(n*Math.PI)/180,a=ft(e,s);return Gr(yt(a)>1e-6?Ae(a):{x:Math.cos(i),z:Math.sin(i)},r)}function zf(s,e,t){if(yt(t)<.01)return t;let n=Ae(t);s.edgeDistance(tt(e.pos,he(n,1.5)))<1.6&&(n=Ae(tt(n,he(Ae(he(e.pos,-1)),1.5))));for(let i of s.state.island.rocks)if(pt(tt(e.pos,he(n,1.2)),i.pos)<i.r+e.radius+.3){let r=Jn(Ae(ft(i.pos,e.pos)));n=Ae(tt(n,he(cn(r,n)>=0?r:he(r,-1),1.5)))}return n}var Pg=420*Math.PI/180/60;function Uf(s,e,t,n,i){if(yt(n)<.01)return n;let r=Ae(n);if(!t.moveDir)return t.moveDir=r,r;let a=Math.atan2(t.moveDir.z,t.moveDir.x),l=Math.atan2(r.z,r.x)-a;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;let c=s.edgeDistance(tt(e.pos,he(t.moveDir,1.2)))<1.2,h=Pg*Math.max(i,c?3:1),u=a+Math.max(-h,Math.min(h,l));return t.moveDir={x:Math.cos(u),z:Math.sin(u)},t.moveDir}var cr={move:{x:0,z:0},fire:!1,fireDir:null,cast:null,dash:!1,dashDir:null},Yt=class s{constructor(e,t=1,n="s0",i=2.6){this.aiEnabled=!0;this.hitstop=0;this.coverOverride=null;this.heavyOwner=null;this.events=[];this.nextId=1;this.bursts=new Map;this.ai=new Map;this.mirror=new Map;this.outsideT=new Map;this.dashMoved=new Map;this.dashBuf=new Map;this.outSource=new Map;this.ledge=new Map;this.ledgeLock=new Map;this.edgeRec=new Map;this.fallVel=new Map;this.lastHitKind=new Map;this.controlMark=new Map;this.ended=!1;this.log=[];this.history=[];this.rng=wl(t);let r=Vs(),a=n!=="s0"?"hunter":"s0enemy",o=[this.makeFighter("player",0,"\u4F60",{x:0,z:3.5},-Math.PI/2,"hunter")];e==="1v1"?o.push(this.makeFighter("enemy",1,"\u7D05\u7375\u624B",{x:.5,z:-4.5},Math.PI/2,a)):e!=="waves"&&e!=="run"&&(o.push(this.makeFighter("enemy",1,"\u7D05\u7375\u624B",{x:-3.8,z:-4.2},Math.PI/2,a)),o.push(this.makeFighter("enemy",2,"\u6A58\u7375\u624B",{x:4.6,z:-3},Math.PI/2,a)));for(let l of o)l.team==="enemy"&&(l.kit==="hunter"?this.mirror.set(l.id,Hf(this.rng)):this.ai.set(l.id,Lf(this.rng,e)));this.state={time:0,mode:e,variant:n,island:r,fighters:o,projectiles:[],playerId:o[0].id,result:null,loseText:null,ledgeDepth:n==="v3"?i:null,edgeLog:[],stats:{shotsFired:0,shotsHit:0,combos:0,kills:{fall:0,hp:0}}}}makeFighter(e,t,n,i,r,a){let o=a==="hunter",l=o?yu:bu,c=o?{basic:Vi.cooldown,control:an.cooldown,push:ln.cooldown,dash:Zn.cooldown}:{basic:Mn.cooldownMax,control:0,push:yn.cooldown,dash:hn.dodgeCooldown};return{id:this.nextId++,team:e,variant:t,kit:a,name:n,pos:{...i},y:0,facing:r,moveVel:{x:0,z:0},radius:l.radius,hp:l.hp,maxHp:l.hp,state:"idle",stateT:0,windup:null,burstLeft:0,cooldowns:{basic:0,control:0,push:o?0:2.5,dash:0},cooldownMax:c,slowT:0,invulnT:0,hitFlashT:0,sinceShotT:99,knockVel:{x:0,z:0},deathCause:null,lastHitBy:null,lastHitAt:-99}}get player(){return this.state.fighters[0]}fighter(e){return this.state.fighters.find(t=>t.id===e)}drainEvents(){let e=this.events;return this.events=[],e}emit(e){this.events.push(e),this.log.push({t:this.state?this.state.time:0,e})}recordHistory(){let e=this.player,t=this.state.time;for(this.history.push({t,pos:{...e.pos},facing:e.facing,state:e.state,windup:e.windup?{skill:e.windup.skill,dir:{...e.windup.dir},startT:t-e.windup.t,dur:e.windup.dur}:null,slowed:e.slowT>0});this.history.length&&this.history[0].t<t-1.5;)this.history.shift();for(;this.log.length&&this.log[0].t<t-3;)this.log.shift()}snapshotAt(e){for(let t=this.history.length-1;t>=0;t--)if(this.history[t].t<=e+1e-9)return this.history[t];return null}static alive(e){return e.state!=="dead"&&e.state!=="falling"&&e.state!=="reviving"}canLedge(e){return this.state.variant==="v3"}suspended(e){return!1}step(e){let t=this.state,n=ei;t.time+=n;for(let i of t.fighters)this.tickTimers(i,n);for(let i of t.fighters){if(!s.alive(i))continue;let r;this.ended?r=cr:i.team==="player"?r=e:this.aiEnabled?i.kit==="hunter"?r=Nf(this,i,this.mirror.get(i.id)):r=Ff(this,i,this.ai.get(i.id),n):r=cr,this.control(i,r)}for(let i of t.fighters)this.advance(i,n);this.separate(),this.moveProjectiles(n),this.checkEnd(),this.recordHistory()}tickTimers(e,t){e.stateT+=t;for(let n of["basic","control","push","dash"])e.cooldowns[n]=Math.max(0,e.cooldowns[n]-t);e.slowT=Math.max(0,e.slowT-t),e.invulnT=Math.max(0,e.invulnT-t),e.hitFlashT=Math.max(0,e.hitFlashT-t),e.sinceShotT+=t}setState(e,t){e.state=t,e.stateT=0}facingDir(e){return gs(e.facing)}autoTarget(e,t){let n=null,i=1/0;for(let r of this.state.fighters){if(r.team===e.team||!s.alive(r))continue;let a=pt(e.pos,r.pos);if(a>t)continue;let o=a+(this.lineOfSight(e.pos,r.pos)?0:6);o<i&&(i=o,n=r)}return n}lineOfSight(e,t){return!this.state.island.rocks.some(n=>Wr(e,t,n.pos,n.r))}aimOrAuto(e,t,n){if(t&&yt(t)>.01)return Ae(t);if(e.team==="enemy"&&e.kit==="hunter")return this.facingDir(e);let i=this.autoTarget(e,n);return i?Ae(ft(i.pos,e.pos)):this.facingDir(e)}control(e,t){if(e.state==="ledge"){e.moveVel={x:0,z:0},t.dash&&this.startClimb(e,"accepted@"+this.state.time.toFixed(2));return}if(e.state==="climb"){e.moveVel={x:0,z:0};return}if(this.state.variant!=="s0"){if(this.controlDashBuffered(e,t))return}else if(t.dash&&e.cooldowns.dash<=0&&this.canDash(e)){this.startDash(e,t);return}if(e.state==="idle"&&t.cast){if(e.kit==="hunter"){let n=t.cast.skill;if(e.cooldowns[n]<=0){let i=n==="control"?an.range:ln.range+2;this.startWindup(e,n,this.aimOrAuto(e,t.cast.dir,i),n==="control"?an.windup:ln.windup);return}}else if(t.cast.skill==="push"&&e.cooldowns.push<=0&&(this.heavyOwner===null||this.heavyOwner===e.id)){this.heavyOwner=e.id,this.startWindup(e,"enemyHeavy",this.aimOrAuto(e,t.cast.dir,6),yn.windup);return}}if(e.state==="idle"&&t.fire&&e.burstLeft===0&&e.cooldowns.basic<=0)if(e.kit==="hunter"){let n=this.aimOrAuto(e,t.fireDir,Vi.autoAimRange);e.burstLeft=Vi.shots,e.cooldowns.basic=Vi.cooldown,this.bursts.set(e.id,{dir:n,timer:0,kind:"basic"}),e.facing=Wn(n)}else{this.startWindup(e,"enemyBasic",this.aimOrAuto(e,t.fireDir,Mn.range),Mn.windup);return}if(e.state==="idle"||e.state==="windup"||e.state==="recover"){let n=t.move,i=yt(n);i>1&&(n=he(n,1/i));let r=e.kit==="hunter"?yu.speed:bu.speed;e.slowT>0&&(r*=ta),e.burstLeft>0&&(r*=Sl),e.state==="windup"&&(r*=na),e.state==="recover"&&(r*=.3),e.moveVel=he(n,r);let a=e.team==="enemy"&&e.kit==="hunter"&&e.sinceShotT<.6;e.state==="idle"&&e.burstLeft===0&&i>.1&&!a&&(e.facing=Wn(n))}else e.moveVel={x:0,z:0}}canDash(e){return e.state==="idle"||e.state==="windup"||e.state==="knocked"&&e.stateT>=vi.dashCancelAfter}controlDashBuffered(e,t){if(t.dash){let i=t.dashDir&&yt(t.dashDir)>.01?Ae(t.dashDir):yt(t.move)>.2?Ae(t.move):this.facingDir(e);e.cooldowns.dash>0?this.canLedge(e)?this.dashBuf.set(e.id,{at:this.state.time,dir:i,dashOk:!1}):this.dashBuf.delete(e.id):this.dashBuf.set(e.id,{at:this.state.time,dir:i,dashOk:!0})}let n=this.dashBuf.get(e.id);return n?this.state.time-n.at>If+1e-9?(this.dashBuf.delete(e.id),!1):e.state==="knocked"&&e.stateT<vi.dashCancelAfter||!n.dashOk?!1:e.cooldowns.dash>0||!this.canDash(e)?(this.canLedge(e)?n.dashOk=!1:this.dashBuf.delete(e.id),!1):(this.dashBuf.delete(e.id),this.startDash(e,{...cr,dashDir:n.dir}),!0):!1}predictedKnockStop(e){let t={...e.pos},n=e.stateT;for(;n<vi.knockTime-1e-9;){n+=ei;let i=1-Math.min(1,n/vi.knockTime);t=tt(t,he(e.knockVel,ei*i))}return t}nearestEdgePoint(e){let t=this.state.island.poly,n=t[0],i=1/0;for(let r=0,a=t.length-1;r<t.length;a=r++){let o=t[a],l=t[r],c=ft(l,o),h=cn(c,c),u=h===0?0:Math.max(0,Math.min(1,cn(ft(e,o),c)/h)),d=tt(o,he(c,u)),p=pt(e,d);p<i&&(i=p,n=d)}return n}climbPathOk(e,t,n){return Bt(n,this.state.island.poly)>=jt.landMargin&&this.state.island.rocks.every(i=>pt(n,i.pos)>=i.r+e.radius&&Qi(i.pos,t,n)>=i.r+e.radius)}findLanding(e,t,n,i){let r={x:-n.z,z:n.x},a=(o,l)=>this.climbPathOk(e,i??o,l);for(let o of[jt.landInset,(jt.landInset+jt.minInset)/2,jt.minInset])for(let l of[0,.2,-.2,.4,-.4,jt.searchAlong,-jt.searchAlong]){let c=t,h=n;if(l!==0){let p=tt(tt(t,he(r,l)),he(n,-.5));c=this.nearestEdgePoint(p);let m=ft(c,p);if(yt(m)<1e-6)continue;h=Ae(m)}let u=tt(c,he(h,-jt.hangOut)),d=tt(c,he(h,o));if(a(u,d))return{edge:c,inward:h,land:d}}return null}tryLedge(e,t){let n=this.state,i=n.ledgeDepth??2.6,r=this.edgeRec.get(e.id),a=this.outSource.get(e.id)??"knock";r||(r={t:Math.round(n.time*100)/100,who:e.name,source:a,depth:null,basis:null,eligible:!1,reason:null,input:"none",outcome:"pending"},this.edgeRec.set(e.id,r),n.edgeLog.push(r),n.edgeLog.length>20&&n.edgeLog.shift());let o=r,l=y=>(o.eligible=!1,o.reason=y,!1);if(a==="dash")return l("dash-out");let c=t==="predicted"?this.predictedKnockStop(e):e.pos,h=-Bt(c,n.island.poly);o.depth=h,o.basis=t;let u=this.ledgeLock.get(e.id);if(u&&(n.time<u.until-1e-9||!u.landed))return l("locked");if(h>i)return l("too-deep");let d=this.nearestEdgePoint(e.pos),p=ft(d,e.pos),m=yt(p)>1e-6?Ae(p):Ae(he(e.pos,-1)),x=this.findLanding(e,d,m);if(!x)return l("no-landing");o.eligible=!0,o.reason=null;let v=tt(x.edge,he(x.inward,-jt.hangOut));this.cancelWindup(e),e.burstLeft=0,this.bursts.delete(e.id),e.knockVel={x:0,z:0},e.moveVel={x:0,z:0},e.facing=Wn(x.inward),e.invulnT=Math.max(e.invulnT,jt.protect),this.outsideT.set(e.id,0),this.ledge.set(e.id,{start:{...e.pos},hang:v,edge:x.edge,inward:x.inward,land:x.land,climbFrom:null,climbQueued:!1,rec:o}),this.ledgeLock.set(e.id,{until:n.time+jt.lock,landed:!1}),this.setState(e,"ledge"),this.emit({type:"ledgeGrab",ownerId:e.id,pos:v,edge:x.edge,inward:x.inward,depth:h});let f=this.dashBuf.get(e.id);return this.dashBuf.delete(e.id),f&&n.time-f.at<=jt.inputKeep+1e-9&&this.startClimb(e,"buffered@"+f.at.toFixed(2)),!0}startClimb(e,t){let n=this.ledge.get(e.id);if(!n||n.climbQueued)return;n.rec.input=t;let i={...e.pos};if(!this.climbPathOk(e,i,n.land)){let r=this.findLanding(e,n.edge,n.inward,i);if(r)n.land=r.land;else{n.climbQueued=!0;return}}this.beginClimb(e,i)}beginClimb(e,t){let n=this.ledge.get(e.id);n.climbFrom={...t},this.setState(e,"climb"),this.emit({type:"ledgeClimb",ownerId:e.id,from:{...t},to:{...n.land}})}dropLedge(e,t,n){let i=this.ledge.get(e.id);i&&(i.rec.outcome=t),this.edgeRec.delete(e.id),this.emit({type:"ledgeDrop",ownerId:e.id,reason:t}),this.startFall(e,he(Ae(n),2))}onBackOnIsland(e){let t=this.edgeRec.get(e.id);t&&t.outcome==="pending"&&(t.outcome="rescue"),this.edgeRec.delete(e.id),this.outSource.delete(e.id)}startWindup(e,t,n,i){e.windup={skill:t,t:0,dur:i,dir:n},e.facing=Wn(n),this.setState(e,"windup"),this.emit({type:"windupStart",ownerId:e.id,skill:t,dir:n,dur:i})}cancelWindup(e){e.windup&&(this.emit({type:"cancel",ownerId:e.id,skill:e.windup.skill}),e.windup.skill==="enemyHeavy"&&this.heavyOwner===e.id&&(this.heavyOwner=null),e.windup=null)}startDash(e,t){this.cancelWindup(e),e.burstLeft=0,this.bursts.delete(e.id);let n=t.dashDir&&yt(t.dashDir)>.01?Ae(t.dashDir):null;!n&&yt(t.move)>.2&&(n=Ae(t.move)),n||(n=this.facingDir(e)),e.state==="knocked"&&Bt(e.pos,this.state.island.poly)<2.5&&this.emit({type:"edgeSave",ownerId:e.id}),this.outSource.set(e.id,e.state==="knocked"?"knock":"dash"),e.knockVel=he(n,Zn.distance/Zn.time),e.facing=Wn(n),e.cooldowns.dash=e.cooldownMax.dash,e.invulnT=Zn.time+.04,this.dashMoved.set(e.id,0),this.outsideT.set(e.id,0),this.setState(e,"dash"),this.emit({type:"dash",ownerId:e.id,from:{...e.pos},dir:n})}advance(e,t){let n=this.state.island.poly;switch(e.state){case"dead":return;case"falling":{let i=this.fallVel.get(e.id)??{x:0,z:0};e.pos=tt(e.pos,he(i,t)),e.y=-.5*_u.gravity*e.stateT*e.stateT,e.stateT>=_u.duration&&this.die(e,"fall");return}case"windup":{let i=e.windup;i.t+=t,this.walk(e,t),i.t>=i.dur&&this.releaseWindup(e);break}case"recover":this.walk(e,t),e.stateT>=(e.kit==="hunter"?ln.recover:yn.recover)&&this.setState(e,"idle");break;case"dash":{let i=this.dashMoved.get(e.id)??0,r=Math.min(t,Zn.time-i);if(e.pos=tt(e.pos,he(e.knockVel,r)),this.dashMoved.set(e.id,i+r),this.pushOutOfRocks(e),i+r>=Zn.time-1e-9){let a=Ae(e.knockVel);if(e.knockVel={x:0,z:0},Bt(e.pos,n)<0){if(this.canLedge(e)&&this.tryLedge(e,"actual"))return;this.startFall(e,he(a,2));return}this.onBackOnIsland(e),this.setState(e,"idle")}break}case"knocked":{let i=1-Math.min(1,e.stateT/vi.knockTime);if(e.pos=tt(e.pos,he(e.knockVel,t*i)),this.pushOutOfRocks(e),Bt(e.pos,n)<0){if(this.canLedge(e)&&(this.outsideT.get(e.id)??0)===0&&this.tryLedge(e,"predicted"))return;let r=(this.outsideT.get(e.id)??0)+t;if(this.outsideT.set(e.id,r),r>vi.edgeGrace){this.startFall(e,he(e.knockVel,.5*Math.max(i,.3)));return}}else this.outsideT.set(e.id,0);if(e.stateT>=vi.knockTime){if(Bt(e.pos,n)<0){this.startFall(e,he(Ae(e.knockVel),1.5));return}e.knockVel={x:0,z:0},this.onBackOnIsland(e),this.setState(e,"idle")}break}case"ledge":{let i=this.ledge.get(e.id),r=Math.min(1,e.stateT/jt.catch);if(e.pos=tt(i.start,he(ft(i.hang,i.start),r)),i.climbQueued&&r>=1){i.climbQueued=!1,this.beginClimb(e,i.hang);return}e.stateT>=jt.hold-1e-9&&this.dropLedge(e,"timeout",he(i.inward,-1));return}case"climb":{let i=this.ledge.get(e.id),r=Math.min(1,e.stateT/jt.climb);e.pos=tt(i.climbFrom,he(ft(i.land,i.climbFrom),r)),r>=1-1e-9&&(this.ledgeLock.get(e.id).landed=!0,i.rec.outcome="climbed",this.ledge.delete(e.id),this.outSource.delete(e.id),this.edgeRec.delete(e.id),this.setState(e,"idle"));return}case"idle":this.walk(e,t);break}if((e.state==="idle"||e.state==="windup"||e.state==="recover")&&Bt(e.pos,n)<0){this.startFall(e,{x:0,z:0});return}this.tickBurst(e,t)}walk(e,t){let n=this.state.island.poly,i=.35,r=Bt(e.pos,n),a=c=>{let h=Bt(c,n);return h>=i||h>=r},o=he(e.moveVel,t);if(o.x===0&&o.z===0)return;let l=tt(e.pos,o);if(a(l))e.pos=l;else{let c={x:e.pos.x+o.x,z:e.pos.z},h={x:e.pos.x,z:e.pos.z+o.z};a(c)?e.pos=c:a(h)&&(e.pos=h)}this.pushOutOfRocks(e)}pushOutOfRocks(e){for(let t of this.state.island.rocks){let n=ft(e.pos,t.pos),i=yt(n),r=t.r+e.radius;i<r&&(e.pos=tt(t.pos,he(i>1e-6?he(n,1/i):{x:1,z:0},r)))}}separate(){let e=this.state.fighters.filter(t=>s.alive(t)&&t.state!=="dash"&&t.state!=="ledge"&&t.state!=="climb"&&!this.suspended(t));for(let t=0;t<e.length;t++)for(let n=t+1;n<e.length;n++){let i=e[t],r=e[n],a=ft(r.pos,i.pos),o=yt(a),l=i.radius+r.radius;if(o<l&&o>1e-6){let c=he(a,(l-o)/o/2),h=this.state.island.poly,u=(m,x)=>{let v=Bt(x,h);return v>=.35||v>=Bt(m.pos,h)},d=ft(i.pos,c),p=tt(r.pos,c);i.state!=="knocked"&&u(i,d)&&(i.pos=d),r.state!=="knocked"&&u(r,p)&&(r.pos=p)}}for(let t of e)this.pushOutOfRocks(t)}tickBurst(e,t){if(e.burstLeft<=0||!s.alive(e))return;let n=this.bursts.get(e.id);if(!n){e.burstLeft=0;return}if(n.timer-=t,n.timer>0)return;let i=n.kind==="basic"?Vi:Mn;this.spawnProjectile(e,n.kind,n.dir,i.speed,i.range,i.radius),e.team==="player"&&this.state.stats.shotsFired++,e.sinceShotT=0,e.burstLeft--,n.timer=i.interval,e.burstLeft<=0&&this.bursts.delete(e.id)}spawnProjectile(e,t,n,i,r,a){let o=tt(e.pos,he(n,e.radius+.15));this.state.projectiles.push({id:this.nextId++,kind:t,ownerId:e.id,team:e.team,pos:o,dir:{...n},speed:i,traveled:0,range:r,radius:a,alive:!0}),this.emit({type:"shoot",ownerId:e.id,kind:t,pos:{...o},dir:{...n}})}releaseWindup(e){let t=e.windup;switch(e.windup=null,t.skill){case"control":this.spawnProjectile(e,"control",t.dir,an.speed,an.range,an.radius),e.sinceShotT=0,e.cooldowns.control=an.cooldown,this.setState(e,"idle");break;case"push":this.coneStrike(e,t.dir,ln.range,ln.halfAngle,ln.dmg,"push"),e.cooldowns.push=ln.cooldown,this.setState(e,"recover");break;case"enemyBasic":{let n=Mn.cooldownMin+(Mn.cooldownMax-Mn.cooldownMin)*this.rng();e.cooldowns.basic=this.state.mode==="1v2"?n*1.4:n,e.burstLeft=Mn.shots,this.bursts.set(e.id,{dir:t.dir,timer:0,kind:"enemyBasic"}),this.setState(e,"idle");break}case"enemyHeavy":this.coneStrike(e,t.dir,yn.range,yn.halfAngle,yn.dmg,"enemyHeavy"),e.cooldowns.push=yn.cooldown,this.heavyOwner===e.id&&(this.heavyOwner=null),this.setState(e,"recover");break}}coneStrike(e,t,n,i,r,a){this.emit({type:"cast",ownerId:e.id,skill:a,pos:{...e.pos},dir:{...t}});for(let o of this.state.fighters){if(o.team===e.team||!s.alive(o))continue;let l=ft(o.pos,e.pos),c=yt(l);if(!(c>n+o.radius||!(c<.6||cn(he(l,1/c),t)>=Math.cos(i)))){if(this.coverOverride??this.state.variant!=="s0"){let u=this.rockOnSegment(e.pos,o.pos);if(u){this.emit({type:"blockedStrike",ownerId:e.id,targetId:o.id,skill:a,pos:u,dir:{...t}});continue}}this.damage(o,e,a,r,t)}}}rockOnSegment(e,t){let i=1/0,r=null,a=ft(t,e),o=cn(a,a);for(let l of this.state.island.rocks){if(Qi(l.pos,e,t)>=l.r-1e-6)continue;let c=ft(e,l.pos),h=2*cn(c,a),u=cn(c,c)-l.r*l.r,d=Math.max(0,h*h-4*o*u),p=o>0?Math.max(0,(-h-Math.sqrt(d))/(2*o)):0;p<i&&(i=p,r=tt(e,he(a,p)))}return r}static knockDistance(e,t,n){return vi.base+vi.lowHpBonus*(1-Math.max(0,e)/t)+(n?vi.slowedBonus:0)}damage(e,t,n,i,r){if(!s.alive(e)||e.invulnT>0)return!1;let a=this.state,o=e.slowT>0;e.hp=Math.max(0,e.hp-i),e.hitFlashT=.12,e.lastHitBy=t.id,e.lastHitAt=a.time,this.lastHitKind.set(e.id,n),this.state.variant!=="s0"&&n==="basic"||(this.hitstop=Math.max(this.hitstop,Tl[n])),n==="control"&&(e.slowT=an.slow,t.team==="player"&&this.controlMark.set(e.id,a.time));let l=0;if(r&&e.hp>0&&e.state==="ledge")return this.emit({type:"hit",targetId:e.id,sourceId:t.id,kind:n,pos:{...e.pos},dir:{...r},dmg:i,knock:0}),this.dropLedge(e,"knocked",r),!0;if(r&&e.hp>0){if(e.state==="climb"){let c=this.ledge.get(e.id);c&&(c.rec.outcome="knocked",this.ledge.delete(e.id),this.edgeRec.delete(e.id))}this.outSource.set(e.id,"knock"),l=s.knockDistance(e.hp,e.maxHp,o),this.cancelWindup(e),e.burstLeft=0,this.bursts.delete(e.id),e.knockVel=he(r,2*l/vi.knockTime),e.facing=Wn(he(r,-1)),this.outsideT.set(e.id,0),this.setState(e,"knocked")}if(this.emit({type:"hit",targetId:e.id,sourceId:t.id,kind:n,pos:{...e.pos},dir:r?{...r}:Ae(ft(e.pos,t.pos)),dmg:i,knock:l}),n==="push"&&t.team==="player"){let c=this.controlMark.get(e.id);c!==void 0&&a.time-c<=Pf&&(a.stats.combos++,this.controlMark.delete(e.id),this.emit({type:"combo",ownerId:t.id,targetId:e.id}))}return e.hp<=0&&(this.cancelWindup(e),this.die(e,"hp")),!0}startFall(e,t){this.dashBuf.delete(e.id);let n=this.edgeRec.get(e.id);n&&n.outcome==="pending"&&(n.outcome="fall"),this.edgeRec.delete(e.id),this.ledge.delete(e.id),this.cancelWindup(e),e.burstLeft=0,this.bursts.delete(e.id),this.fallVel.set(e.id,t),e.moveVel={x:0,z:0},this.setState(e,"falling"),this.emit({type:"fall",ownerId:e.id,pos:{...e.pos}})}die(e,t){if(this.dashBuf.delete(e.id),t==="hp"){let r=this.ledge.get(e.id);r&&r.rec.outcome==="pending"&&(r.rec.outcome="hp");let a=this.edgeRec.get(e.id);a&&a.outcome==="pending"&&(a.outcome="hp"),this.ledge.delete(e.id),this.edgeRec.delete(e.id)}let n=this.state;e.deathCause=t,e.knockVel={x:0,z:0},this.setState(e,"dead");let i=e.lastHitBy!==null&&n.time-e.lastHitAt<4?e.lastHitBy:null;e.team==="enemy"&&i===n.playerId&&n.stats.kills[t]++,this.emit({type:"death",ownerId:e.id,cause:t,pos:{...e.pos},killerId:i})}moveProjectiles(e){let t=this.state;for(let n of t.projectiles){if(!n.alive)continue;let i=n.pos,r=n.speed*e,a=tt(i,he(n.dir,r));if(n.traveled+=r,t.island.rocks.some(c=>Wr(i,a,c.pos,c.r+n.radius*.5))){n.alive=!1,this.emit({type:"blocked",pos:a,kind:n.kind,ownerId:n.ownerId});continue}let o=null,l=1/0;for(let c of t.fighters)if(!(c.team===n.team||!s.alive(c)||c.invulnT>0)&&Qi(c.pos,i,a)<c.radius+n.radius){let h=pt(i,c.pos);h<l&&(l=h,o=c)}if(n.pos=a,o){n.alive=!1;let c=this.fighter(n.ownerId),h=n.kind,u=this.state.variant!=="s0"?Cf:Vi.dmg,d=n.kind==="basic"?u:n.kind==="control"?an.dmg:Mn.dmg;this.damage(o,c,h,d,null)&&n.team==="player"&&n.kind==="basic"&&t.stats.shotsHit++;continue}n.traveled>=n.range&&(n.alive=!1,this.emit({type:"expire",pos:a,kind:n.kind}))}t.projectiles=t.projectiles.filter(n=>n.alive)}checkEnd(){if(this.ended)return;let e=this.state,t=this.player;t.state==="dead"?(e.result="lose",e.loseText=this.loseText(t)):e.fighters.every(n=>n.team==="player"||n.state==="dead")&&(e.result="win"),e.result&&(this.ended=!0,this.dashBuf.clear(),this.emit({type:"roundEnd",result:e.result}))}loseText(e){let t=this.state,n=e.lastHitBy!==null&&t.time-e.lastHitAt<4?this.fighter(e.lastHitBy):void 0,i=this.lastHitKind.get(e.id);return e.deathCause==="fall"?n?i==="enemyHeavy"?`\u88AB${n.name}\u7684\u91CD\u64CA\u63A8\u4E0B\u61F8\u5D16\u2014\u2014\u770B\u5230\u7D05\u8272\u6247\u5F62\u5C31\u5F80\u5074\u908A\u9583\uFF0C\u6216\u7528\u885D\u523A\u8EB2\u958B`:i==="push"?`\u88AB${n.name}\u7684\u9707\u64CA\u63A8\u4E0B\u61F8\u5D16\u2014\u2014\u6CE8\u610F\u7260\u9760\u8FD1\u7684\u8DDD\u96E2\uFF0C\u6216\u9810\u5224\u885D\u523A\uFF1B\u88AB\u64CA\u98DB\u6642\u63D0\u65E9\u6309\u885D\u523A\u6709\u6A5F\u6703\u6551\u56DE`:`\u88AB${n.name}\u903C\u4E0B\u61F8\u5D16\u2014\u2014\u88AB\u64CA\u98DB\u6642\u53EF\u4EE5\u99AC\u4E0A\u885D\u523A\u56DE\u5CF6\u4E0A`:"\u4F60\u81EA\u5DF1\u885D\u51FA\u4E86\u61F8\u5D16\u2014\u2014\u885D\u523A\u524D\u5148\u770B\u8173\u4E0B":n?`\u751F\u547D\u88AB${n.name}\u6253\u5230\u6B78\u96F6\u2014\u2014\u5728\u7260\u51FA\u62DB\u5F8C\u7684\u7A7A\u6A94\u53CD\u64CA\uFF0C\u5225\u786C\u62DA`:"\u751F\u547D\u6B78\u96F6"}edgeDistance(e){return Bt(e,this.state.island.poly)}pendingProjectiles(){return this.state.projectiles}place(e,t,n){let i=this.fighter(e);i&&(i.pos={...t},n!==void 0&&(i.facing=n))}debugKill(e,t){let n=this.fighter(e);!n||!s.alive(n)||(t==="hp"?(n.hp=0,this.die(n,"hp")):this.startFall(n,{x:0,z:0}))}debugDamage(e,t,n,i,r){let a=this.fighter(e),o=this.fighter(t);return a&&o?this.damage(a,o,n,i,r):!1}};function Bf(s){return{rng:s,thinkT:0,strafeDir:s()<.5?1:-1,strafeT:0,move:{x:0,z:0}}}var Of=()=>({move:{x:0,z:0},fire:!1,fireDir:null,cast:null,dash:!1,dashDir:null,face:null});function Vf(s){return s.state!=="dead"&&s.state!=="falling"&&s.state!=="reviving"}function Gf(s,e,t,n){let i=t;for(let r of s.state.island.rocks){let a=tt(e.pos,he(i,1.2));if(pt(a,r.pos)>=r.r+e.radius+.3)continue;let o=Jn(Ae(ft(r.pos,e.pos))),l=cn(i,o);i=Ae(tt(i,he(o,(Math.abs(l)>.001?Math.sign(l):n)*1.5)))}return i}function Wf(s,e,t,n){let i=Of(),r=s.player;if(!Vf(r))return i;let a=ft(r.pos,e.pos),o=yt(a),l=o>1e-6?he(a,1/o):{x:Math.cos(e.facing),z:Math.sin(e.facing)};if(i.face=l,e.state!=="idle")return i;if(o<=Re.bearer.approach&&e.cooldowns.push<=0&&(s.heavyOwner===null||s.heavyOwner===e.id)&&(e.breakT??0)<=0)return i.cast={skill:"push",dir:null},i;let c=o>1.4?l:{x:0,z:0};return yt(c)>0&&(c=Gf(s,e,c,t.strafeDir),s.edgeDistance(tt(e.pos,he(c,1.2)))<.8&&(c=Ae(tt(c,he(Ae(he(e.pos,-1)),.8))))),i.move=c,i}function Xf(s,e,t,n){let i=Of(),r=s.player;if(!Vf(r))return i;let a=ft(r.pos,e.pos),o=yt(a),l=o>1e-6?he(a,1/o):{x:1,z:0};if(e.state!=="idle")return i.move=he(t.move,.5),i;if(o<Re.archer.backstepTrigger&&e.cooldowns.dash<=0)return i.dash=!0,i.dashDir=Dg(s,e,l),i;if(t.thinkT-=n,t.strafeT-=n,t.thinkT<=0){t.thinkT=hn.think,t.strafeT<=0&&(t.strafeT=hn.strafeSwitchMin+(hn.strafeSwitchMax-hn.strafeSwitchMin)*t.rng(),t.rng()<.5&&(t.strafeDir=t.strafeDir===1?-1:1));let c=he(Jn(l),t.strafeDir),h,u=Re.archer;if(r.state==="guard"&&r.shieldDir){let d=Ae(Jn(r.shieldDir)),p=he(d,-1),m=tt(r.pos,he(d,(u.preferMin+u.preferMax)/2)),x=tt(r.pos,he(p,(u.preferMin+u.preferMax)/2)),v=s.edgeDistance(m)>1.5?pt(m,e.pos):1/0,f=s.edgeDistance(x)>1.5?pt(x,e.pos):1/0,y=v<=f?m:x;h=pt(y,e.pos)>.6?Ae(ft(y,e.pos)):c}else if(o>u.preferMax)h=Ae(tt(l,he(c,.4)));else if(o<u.preferMin){let d=he(l,-1);h=s.edgeDistance(tt(e.pos,he(d,2)))<hn.edgeDanger+.5?c:Ae(tt(d,he(c,.5)))}else h=c;s.edgeDistance(tt(e.pos,he(h,1.5)))<hn.edgeDanger*.6&&(t.strafeDir=t.strafeDir===1?-1:1,h=Ae(he(e.pos,-1))),t.move=Gf(s,e,h,t.strafeDir)}if(i.move=t.move,e.cooldowns.basic<=0&&o<Mn.range-.5&&s.lineOfSight(e.pos,r.pos)){let c=(t.rng()-.5)*2*(6*Math.PI/180);i.fire=!0,i.fireDir=Gr(l,c)}return i}function Dg(s,e,t){let n=he(t,-1),i=[n,Ae(tt(n,Jn(t))),Ae(ft(n,Jn(t))),Ae(Jn(t)),he(Ae(Jn(t)),-1)],r=n,a=-1/0;for(let o of i){let l=s.edgeDistance(tt(e.pos,he(o,Re.archer.backstep)));if(o===n&&l>=1)return n;l>a&&(a=l,r=o)}return r}var Ot=1e-9;function qf(s,e){let t=yt(s),n=yt(e);return t<1e-12||n<1e-12?Math.PI:Math.acos(Math.max(-1,Math.min(1,cn(s,e)/(t*n))))}function kg(s,e,t){let n=Math.atan2(s.x*e.z-s.z*e.x,cn(s,e));return Math.abs(n)<=t+Ot?Ae(e):gs(Wn(s)+Math.sign(n)*t)}function Lg(s,e,t){let n=e-s;for(;n>Math.PI;)n-=2*Math.PI;for(;n<-Math.PI;)n+=2*Math.PI;return Math.abs(n)<=t?e:s+Math.sign(n)*t}var Yf={dash:0,bash:1,counterMelee:1,guard:2,throw:3,charge:3,push:3,fire:4},$f={1:"melee1",2:"melee2",3:"melee3"},Eu=s=>s==="melee1"||s==="melee2"||s==="melee3",Xr=class extends Yt{constructor(t=1,n="ares",i){super(i?.mode??"waves",t,i?.variant??"v4");this.scripted=new Map;this.fxMap=new Map;this.aiV4=new Map;this.buf=null;this.combo=null;this.comboManualDir=null;this.lastMeleeTarget=null;this.guardSt=null;this.counter=null;this.threat=null;this.waveIdx=0;this.wavePhase="fight";this.waveClearAt=0;this.waveMembers=[];this.pendingSpawns=[];this.waveList=Re.waves.list;this.droppedPresses=0;i&&(this.state.island=i.island,this.waveList=i.waves),this.nextId=1;let r=this.makeFighter("player",0,"\u4F60",{x:0,z:3.5},-Math.PI/2,"guardian");r.hp=r.maxHp=Re.player.hp,r.radius=Re.player.radius,r.cooldowns={basic:0,control:0,push:0,dash:0},r.cooldownMax={basic:0,control:an.cooldown,push:n==="ares"?Re.charge.cooldown:n==="none"?ln.cooldown:Re.guard.lock,dash:Zn.cooldown},r.path=n,this.initV4Fields(r),r.shieldDir=n==="mars"?gs(r.facing):null,this.state.fighters=[r],this.state.playerId=r.id,this.state.ledgeDepth=2.6,this.state.v4={path:n,wave:{index:0,total:this.waveList.length,remaining:0},revivesLeft:Re.revive.count,kills:[],breaks:0,perfectBlocks:0,counters:{bash:0,melee:0}},this.spawnWave(1,this.chooseSpawns(this.waveList[0].length)),this.sync(r)}untouchable(t){return t.invulnT>0||(t.protectT??0)>0}wonNow(){return this.wavePhase==="done"}onDamaged(t,n,i,r){}beginWaves(t){this.waveList=t,this.waveIdx=0,this.waveMembers=[],this.pendingSpawns=[],this.spawnWave(1,this.chooseSpawns(t[0].length))}calmPlayer(t){let n=this.fx(t);this.cancelWindup(t),n.act=null,n.slide=null,n.hitstunT=0,n.stunKind=null,n.heavyArmor=!1,this.clearPlayer(t),t.burstLeft=0,this.bursts.delete(t.id),this.dashBuf.delete(t.id),t.knockVel={x:0,z:0},t.moveVel={x:0,z:0},t.breakT=0,this.setState(t,"idle")}initV4Fields(t){t.breakT=0,t.armorT=0,t.armorKind=null,t.shieldDir=null,t.shieldUp=!1,t.guard=null,t.counterT=0,t.counterTargetId=null,t.meleeStep=0,t.protectT=0}fx(t){let n=this.fxMap.get(t.id);return n||(n={hitstunT:0,stunKind:null,heavyArmor:!1,stackArmorT:0,stackHits:[],act:null,slide:null,noTurnUntil:-1},this.fxMap.set(t.id,n)),n}canLedge(t){return t.team==="player"}enemies(){return this.state.fighters.filter(t=>t.team==="enemy"&&Yt.alive(t))}armored(t){let n=this.fx(t);return n.heavyArmor||n.stackArmorT>0}coverOn(){return this.coverOverride??!0}step(t){let n=this.state,i=ei;n.time+=i;for(let r of n.fighters)this.tickTimers(r,i);for(let r of n.fighters)Yt.alive(r)&&!this.suspended(r)&&this.settle(r);for(let r of n.fighters){if(!Yt.alive(r)||this.suspended(r))continue;let a;if(this.ended)a=cr;else if(r.team==="player")a=t;else{let o=this.scripted.get(r.id);o?(a=o,this.scripted.delete(r.id)):this.aiEnabled?a=this.aiFor(r):a=cr}this.control(r,a)}for(let r of n.fighters)this.suspended(r)||this.advance(r,i);this.separate(),this.moveProjectiles(i),this.tickWaves(),this.checkEnd();for(let r of n.fighters)this.sync(r);this.recordHistory()}aiFor(t){let n=this.aiV4.get(t.id);return n||(n=Bf(this.rng),this.aiV4.set(t.id,n)),t.kit==="shieldbearer"?Wf(this,t,n,ei):Xf(this,t,n,ei)}tickTimers(t,n){super.tickTimers(t,n);let i=this.fx(t);i.hitstunT=Math.max(0,i.hitstunT-n),i.stackArmorT=Math.max(0,i.stackArmorT-n),t.breakT=Math.max(0,(t.breakT??0)-n),t.protectT=Math.max(0,(t.protectT??0)-n),t.guard&&(t.guard.since+=n),(t.counterT??0)>0&&(t.counterT=Math.max(0,(t.counterT??0)-n))}settle(t){let n=this.fx(t),i=this.state.time;t.state==="hitstun"&&n.hitstunT<=Ot&&(n.stunKind=null,this.setState(t,"idle")),t.state==="recover"&&n.act&&(n.act.kind==="melee"||n.act.kind==="recover")&&t.stateT>=n.act.recDur-Ot?this.endRecover(t):t.state==="recover"&&(!n.act||n.act.kind!=="melee"&&n.act.kind!=="recover")&&this.endRecover(t),t.state==="idle"&&n.hitstunT>Ot&&this.setState(t,"hitstun"),t.team==="player"&&(t.state==="guard"&&this.guardSt&&i-this.guardSt.raisedAt>=Re.guard.maxHold-Ot&&this.lowerGuard(t,"timeout",!0),this.counter&&(t.counterT??0)<=Ot&&this.loseCounter(t,this.counter.released?"timeout":"held"),this.combo&&t.state==="idle"&&i>this.combo.until+Ot&&this.resetCombo(t))}endRecover(t){let n=this.fx(t),i=n.act;n.act=null,this.setState(t,"idle"),i&&i.kind==="melee"&&(i.struck||(this.lastMeleeTarget=null),this.combo&&(this.combo.until=this.state.time+Re.comboWindow))}sync(t){let n=this.fx(t);n.heavyArmor&&t.windup?(t.armorT=Math.max(0,t.windup.dur-t.windup.t),t.armorKind="heavy"):n.stackArmorT>0?(t.armorT=n.stackArmorT,t.armorKind="stack"):(t.armorT=0,t.armorKind=null),t.kit==="shieldbearer"&&(t.shieldDir=gs(t.facing),t.shieldUp=Yt.alive(t)&&(t.breakT??0)<=0),t.team==="player"&&(t.guard&&(t.guard.perfect=t.guard.since<=Re.guard.perfect+Ot),t.counterTargetId=this.counter?this.counter.targetId:null,this.counter||(t.counterT=0))}control(t,n){t.team==="player"?this.controlPlayer(t,n):this.controlEnemy(t,n)}controlPlayer(t,n){let i=this.state.time;if(t.path==="mars"&&(this.counter&&!this.counter.released&&!n.guardHeld?(this.counter.released=!0,t.state==="guard"&&this.lowerGuard(t,"release",!1)):t.state==="guard"&&!n.guardHeld&&this.lowerGuard(t,"release",!0)),n.dash&&this.counter&&this.loseCounter(t,"dash"),t.state==="ledge"||t.state==="climb"||t.state==="knocked"){this.dropBuf(),this.droppedPresses+=(n.firePressed?1:0)+(n.cast?1:0)+(t.path==="mars"&&n.guardPressed?1:0),super.control(t,n);return}let r=n.dashDir&&yt(n.dashDir)>.01?Ae(n.dashDir):yt(n.move)>.2?Ae(n.move):this.facingDir(t);n.dash&&this.dashBuf.set(t.id,{at:i,dir:r,dashOk:!1});let a=[],o=this.counterUsable(t);if(n.dash&&a.push({type:"dash",at:i,dir:r,untilRecEnd:!1}),t.path==="mars"&&n.guardPressed&&a.push({type:o?"bash":"guard",at:i,dir:n.guardDir??null,untilRecEnd:!1}),n.cast){let h=n.cast.skill==="control"?"throw":t.path==="ares"?"charge":t.path==="none"?"push":null;h&&a.push({type:h,at:i,dir:n.cast.dir,untilRecEnd:!1})}n.firePressed&&a.push({type:o?"counterMelee":"fire",at:i,dir:n.fireDir,untilRecEnd:!1}),a.sort((c,h)=>Yf[c.type]-Yf[h.type]);let l=!1;for(let c of a){if(l){this.droppedPresses++;continue}if(this.onCooldown(t,c)){this.droppedPresses++;continue}let h=this.pressRule(t,c);if(h==="drop"){this.droppedPresses++;continue}this.dropBuf(),this.buf={...c,untilRecEnd:h==="recEnd"},l=!0}if(this.buf&&!this.buf.untilRecEnd&&i-this.buf.at>Re.inputBuffer+Ot&&this.dropBuf(),this.buf){let c=this.pressRule(t,this.buf);if(c==="now"){let h=this.buf;if(this.buf=null,this.execute(t,h,n)){this.playerMove(t,n),this.updateGuardDir(t,n);return}this.droppedPresses++}else c==="drop"&&this.dropBuf()}!this.buf&&n.fire&&this.activity(t)==="free"&&this.startMelee(t,n,null),this.playerMove(t,n),this.updateGuardDir(t,n)}dropBuf(){this.buf&&this.droppedPresses++,this.buf=null}onCooldown(t,n){switch(n.type){case"dash":return t.cooldowns.dash>0;case"throw":return t.cooldowns.control>0;case"charge":case"push":case"guard":return t.cooldowns.push>0;default:return!1}}activity(t){let n=this.fx(t);switch(t.state){case"idle":return(t.breakT??0)>0||n.hitstunT>Ot?"stun":"free";case"hitstun":return"stun";case"windup":{let i=t.windup?.skill;return Eu(i)?"meleeWindup":i==="charge"?"charge":"castWindup"}case"recover":{let i=n.act;return i&&i.kind==="recover"&&(i.tag==="chargeHit"||i.tag==="chargeMiss")?"charge":"meleeRecover"}case"charge":return"charge";case"guard":return"guard";case"dash":return"dash";default:return"other"}}pressRule(t,n){let i=n.type==="fire"||n.type==="counterMelee";switch(this.activity(t)){case"free":return"now";case"meleeWindup":case"castWindup":return n.type==="dash"?"now":"drop";case"meleeRecover":{if(n.type!=="dash")return"buffer";let r=this.fx(t).act;return(r&&(r.kind==="melee"||r.kind==="recover")?r.recDur:0)-t.stateT<=Re.inputBuffer+Ot?"recEnd":"drop"}case"charge":return i?"buffer":"drop";case"guard":return n.type==="dash"?"now":"drop";case"dash":case"stun":return n.type==="dash"?"drop":"buffer";default:return"drop"}}execute(t,n,i){switch(n.type){case"dash":return this.doDash(t,n.dir??this.facingDir(t));case"bash":return this.counterUsable(t)?this.doCounterBash(t,i):i.guardHeld?this.raiseGuard(t,i,n.at):!1;case"counterMelee":return this.counterUsable(t)?this.doCounterMelee(t,i):this.startMelee(t,i,n.dir);case"guard":return i.guardHeld?this.raiseGuard(t,i,n.at):!1;case"throw":return t.cooldowns.control>0?!1:(this.resetCombo(t),this.startWindup(t,"control",this.aimOrAuto(t,n.dir,an.range),an.windup),!0);case"charge":return this.startCharge(t,i,n);case"push":return t.cooldowns.push>0?!1:(this.resetCombo(t),this.startWindup(t,"push",this.aimOrAuto(t,n.dir,ln.range+2),ln.windup),!0);case"fire":return this.startMelee(t,i,n.dir)}}playerMove(t,n){let i=this.fx(t),r=0;switch(t.state){case"idle":r=(t.breakT??0)>0?.5:1;break;case"windup":r=Eu(t.windup?.skill)?Re.attackMoveMult:t.windup?.skill==="charge"?0:na;break;case"recover":{let c=i.act;r=c&&c.kind==="melee"?Re.attackMoveMult:c&&c.kind==="recover"&&(c.tag==="chargeHit"||c.tag==="chargeMiss")?0:.3;break}case"guard":r=Re.guard.moveMult;break;default:r=0}if(r<=0){t.moveVel={x:0,z:0};return}let a=n.move,o=yt(a);o>1&&(a=he(a,1/o));let l=Re.player.speed*r*(t.slowT>0?ta:1);t.moveVel=he(a,l),t.state==="idle"&&o>.1&&(t.facing=Wn(a))}doDash(t,n){return t.cooldowns.dash>0?!1:(t.state==="guard"&&this.lowerGuard(t,"dash",!0),this.resetCombo(t),this.fx(t).act=null,this.fx(t).slide=null,this.dashBuf.delete(t.id),this.startDash(t,{...cr,dashDir:n}),!0)}comboNext(){return this.combo&&this.state.time<=this.combo.until+Ot?this.combo.next:1}resetCombo(t){t.team==="player"&&(this.combo=null,this.comboManualDir=null,this.lastMeleeTarget=null,t.meleeStep=0)}meleeDir(t,n){if(this.comboManualDir)return this.comboManualDir;let i=this.lastMeleeTarget!==null?this.fighter(this.lastMeleeTarget):void 0;if(i&&Yt.alive(i)&&pt(i.pos,t.pos)<=Re.target.keep+Ot&&pt(i.pos,t.pos)>1e-6)return Ae(ft(i.pos,t.pos));let r=this.facingDir(t),a=null,o=1/0;for(let l of this.enemies()){let c=pt(l.pos,t.pos);c>Re.target.autoRange+Ot||c<1e-6||cn(Ae(ft(l.pos,t.pos)),r)<Math.cos(Re.target.autoHalfAngle)-Ot||c<o&&(o=c,a=l)}return a?Ae(ft(a.pos,t.pos)):yt(n.move)>.2?Ae(n.move):r}startMelee(t,n,i){let r=this.comboNext();r===1&&(this.comboManualDir=null);let a=n.fireDir&&yt(n.fireDir)>.01?Ae(n.fireDir):i&&yt(i)>.01?Ae(i):null;a&&(this.comboManualDir=a);let o=this.meleeDir(t,n),l=Re.melee[r-1];return this.fx(t).act={kind:"melee",step:r,counter:!1,dir:o,hitIds:new Set,stepLeft:l.step,stepSpeed:l.step/l.windup,recDur:l.recover,struck:!1,bestD:1/0},this.combo={next:r===3?1:r+1,until:1/0},t.meleeStep=r,this.startWindup(t,$f[r],o,l.windup),!0}releaseMelee(t){let n=this.fx(t).act;t.windup=null,this.setState(t,"recover"),n&&n.kind==="melee"&&this.strikeMelee(t,n,!0)}meleeGeom(t,n,i,r){let a=Re.melee[r-1],o=ft(n.pos,t.pos),l=yt(o);if(l>a.range+n.radius+Ot)return!1;if(l<.6)return!0;if(a.shape==="fan")return cn(he(o,1/l),i)>=Math.cos(a.halfAngle)-Ot;let c=cn(o,i),h=Math.abs(o.x*i.z-o.z*i.x);return c>=0&&h<=a.width/2+n.radius+Ot}strikeMelee(t,n,i){let r=Re.melee[n.step-1],a=n.counter?"counterMelee":$f[n.step],o=!1,l=null;for(let c of[...this.state.fighters]){if(c.team===t.team||!Yt.alive(c)||n.hitIds.has(c.id)||!this.meleeGeom(t,c,n.dir,n.step)||this.coverOn()&&this.rockOnSegment(t.pos,c.pos))continue;n.hitIds.add(c.id);let h=pt(t.pos,c.pos),u=this.resolveHit(t,c,{kind:a,dmg:r.dmg,fromDir:Ae(ft(t.pos,c.pos)),melee:!0,stun:r.stun>0?r.stun:void 0,knock:r.knock>0?{dir:n.dir,dist:r.knock}:null});u==="bearer"?l=c:(u==="hit"||u==="armored")&&(o=!0,n.struck=!0,h<n.bestD&&(n.bestD=h,this.lastMeleeTarget=c.id))}i&&this.emit({type:"melee",ownerId:t.id,step:n.step,pos:{...t.pos},dir:{...n.dir},hit:o,counter:n.counter}),l&&Yt.alive(t)&&this.recoil(t,l)}recoil(t,n){let i=this.fx(t);i.act=null,this.cancelWindup(t),this.resetCombo(t),i.hitstunT=Math.max(i.hitstunT,Re.recoil),i.stunKind="recoil",t.state!=="knocked"&&this.setState(t,"hitstun"),this.emit({type:"recoil",ownerId:t.id,dir:Ae(ft(t.pos,n.pos)),dur:Re.recoil})}startCharge(t,n,i){if(t.cooldowns.push>0)return!1;let r=i.dir&&yt(i.dir)>.01?Ae(i.dir):null;if(!r&&yt(n.move)>.2&&(r=Ae(n.move)),!r){let a=null,o=1/0;for(let l of this.enemies()){let c=pt(l.pos,t.pos);c<=Re.charge.autoRange+Ot&&c>1e-6&&c<o&&(o=c,a=l)}r=a?Ae(ft(a.pos,t.pos)):this.facingDir(t)}return this.resetCombo(t),t.cooldowns.push=Math.max(0,Re.charge.cooldown-(this.state.time-i.at)),this.fx(t).act={kind:"charge",dir:r,moved:0},this.startWindup(t,"charge",r,Re.charge.windup),!0}advanceCharge(t,n){let i=this.fx(t),r=i.act;if(!r||r.kind!=="charge"){this.setState(t,"idle");return}let a=Re.charge,o=Math.min(a.distance-r.moved,a.distance/a.time*n),l=this.activeMove(t,he(r.dir,o),"contact");if(r.moved+=l.moved,l.enemy){this.chargeImpact(t,l.enemy,r);return}(l.blocked||r.moved>=a.distance-1e-6)&&(i.act={kind:"recover",tag:"chargeMiss",recDur:a.missRecover},this.setState(t,"recover"))}chargeImpact(t,n,i){let r=this.fx(t),a=Re.charge,o=n.kit==="shieldbearer"?{knock:{dir:i.dir},breakDur:a.breakDur}:{knock:{dir:i.dir},stun:a.archerStun},l=this.resolveHit(t,n,{kind:"charge",dmg:a.dmg,fromDir:Ae(ft(t.pos,n.pos)),melee:!0,...o});if(Yt.alive(t)){if(l==="bearer"){r.act=null,r.hitstunT=Math.max(r.hitstunT,a.bounceStun),r.stunKind="bounce",r.slide={dir:he(i.dir,-1),left:a.bounce,speed:a.bounce/a.bounceTime},this.setState(t,"hitstun"),this.emit({type:"recoil",ownerId:t.id,dir:he(i.dir,-1),dur:a.bounceStun});return}r.act={kind:"recover",tag:"chargeHit",recDur:a.hitRecover},this.setState(t,"recover")}}raiseGuard(t,n,i){if(t.path!=="mars"||t.cooldowns.push>0)return!1;let r=this.state.time;this.resetCombo(t),this.fx(t).act=null,this.guardSt={pressAt:i,raisedAt:r,counterMade:!1},t.guard={since:r-i,perfect:r-i<=Re.guard.perfect+Ot},t.shieldUp=!0,this.threat=null;let o=(n.guardDir&&yt(n.guardDir)>.01?Ae(n.guardDir):null)??this.autoGuardDir(t)??this.facingDir(t);return t.shieldDir=o,t.facing=Wn(o),this.setState(t,"guard"),this.emit({type:"guardUp",ownerId:t.id}),!0}lowerGuard(t,n,i){t.state==="guard"&&this.setState(t,"idle"),t.guard=null,t.shieldUp=!1,this.guardSt=null,this.threat=null,i&&(t.cooldowns.push=Re.guard.lock),this.emit({type:"guardDown",ownerId:t.id,reason:n})}updateGuardDir(t,n){if(t.state!=="guard"||!t.shieldDir)return;let i=n.guardDir&&yt(n.guardDir)>.01?Ae(n.guardDir):null;i&&(this.threat=null);let r=i??this.autoGuardDir(t);r&&(t.shieldDir=kg(t.shieldDir,r,Re.guard.turnRate*ei)),t.facing=Wn(t.shieldDir)}heavyCovers(t,n){let i=t.windup;if(!i||i.skill!=="enemyHeavy"||t.state!=="windup")return!1;let r=ft(n.pos,t.pos),a=yt(r);return a>yn.range+n.radius||!(a<.6||cn(he(r,1/a),i.dir)>=Math.cos(yn.halfAngle))?!1:!this.rockOnSegment(t.pos,n.pos)}arrowHeading(t,n){let i=ft(n.pos,t.pos),r=cn(i,t.dir);if(r<=0||Math.abs(i.x*t.dir.z-i.z*t.dir.x)>n.radius+t.radius||t.range-t.traveled<r-n.radius)return null;let o=tt(t.pos,he(t.dir,r));return this.state.island.rocks.some(l=>Wr(t.pos,o,l.pos,l.r+t.radius*.5))?null:r}threatValid(t,n){if(n.kind==="heavy"){let r=this.fighter(n.id);return!r||!Yt.alive(r)||r.windup!==n.w||pt(r.pos,t.pos)>Re.guard.threatDrop?!1:this.heavyCovers(r,t)}let i=this.state.projectiles.find(r=>r.id===n.id);return!i||!i.alive||pt(i.pos,t.pos)>Re.guard.threatDrop?!1:this.arrowHeading(i,t)!==null}autoGuardDir(t){if(this.threat&&!this.threatValid(t,this.threat)&&(this.threat=null),!this.threat){let r=null,a=1/0;for(let o of this.enemies()){if(!this.heavyCovers(o,t))continue;let l=o.windup,c=l.dur-l.t;c<a&&(a=c,r={kind:"heavy",id:o.id,w:l})}for(let o of this.state.projectiles){if(!o.alive||o.team===t.team||o.kind!=="enemyBasic")continue;let l=pt(o.pos,t.pos);if(l>Re.guard.arrowScan||this.arrowHeading(o,t)===null)continue;let c=l/o.speed;c<a&&(a=c,r={kind:"arrow",id:o.id})}this.threat=r}let n=this.threat;if(!n)return null;if(n.kind==="heavy"){let r=this.fighter(n.id);return Ae(ft(r.pos,t.pos))}let i=this.state.projectiles.find(r=>r.id===n.id);return he(i.dir,-1)}counterUsable(t){return this.counter!==null&&this.counter.released&&(t.counterT??0)>Ot}loseCounter(t,n){this.counter&&(this.counter=null,t.counterT=0,t.counterTargetId=null,this.emit({type:"counterLost",ownerId:t.id,reason:n}))}useCounter(t,n){this.counter=null,t.counterT=0,t.counterTargetId=null,this.state.v4.counters[n]++,this.emit({type:"counterUsed",ownerId:t.id,kind:n})}counterAim(t,n,i,r){let a=this.counter?this.fighter(this.counter.targetId):void 0;return a&&Yt.alive(a)&&pt(a.pos,t.pos)<=n+Ot&&pt(a.pos,t.pos)>1e-6?Ae(ft(a.pos,t.pos)):i&&yt(i)>.01?Ae(i):this.meleeDir(t,r)}doCounterBash(t,n){let i=Re.counter.bash;this.resetCombo(t);let r=this.counterAim(t,i.aimRange,n.guardDir,n);this.useCounter(t,"bash"),t.facing=Wn(r);for(let a of[...this.state.fighters]){if(a.team===t.team||!Yt.alive(a))continue;let o=ft(a.pos,t.pos),l=yt(o);l>i.range+a.radius||(l<.6||cn(he(o,1/l),r)>=Math.cos(i.halfAngle)-Ot)&&(this.coverOn()&&this.rockOnSegment(t.pos,a.pos)||this.resolveHit(t,a,{kind:"counterBash",dmg:i.dmg,fromDir:Ae(ft(t.pos,a.pos)),melee:!0,knock:{dir:r,mult:i.knockMult}}))}return t.cooldowns.push=Re.guard.lock,Yt.alive(t)&&t.state!=="knocked"&&(this.fx(t).act={kind:"recover",tag:"bash",recDur:i.recover},this.setState(t,"recover")),!0}doCounterMelee(t,n){let i=Re.counter.melee;this.resetCombo(t);let r=n.fireDir&&yt(n.fireDir)>.01?Ae(n.fireDir):null,a=this.counterAim(t,i.aimRange,r,n);r&&(this.comboManualDir=r),this.useCounter(t,"melee"),t.facing=Wn(a),this.activeMove(t,he(a,i.step),"stop");let o=Re.melee[0],l={kind:"melee",step:1,counter:!0,dir:a,hitIds:new Set,stepLeft:0,stepSpeed:0,recDur:o.recover,struck:!1,bestD:1/0};return this.fx(t).act=l,this.combo={next:2,until:1/0},t.meleeStep=1,this.setState(t,"recover"),this.strikeMelee(t,l,!0),!0}canTurn(t){return t.state==="idle"&&this.state.time>=this.fx(t).noTurnUntil-Ot}controlEnemy(t,n){let i=this.fx(t),r=(t.breakT??0)>0;if(t.kit==="shieldbearer"&&n.face&&yt(n.face)>.01&&this.canTurn(t)&&(t.facing=Lg(t.facing,Wn(n.face),Re.bearer.turnRate*ei)),t.state==="idle"&&!r&&i.hitstunT<=Ot){if(t.kit==="shieldbearer"&&n.cast&&n.cast.skill==="push"&&t.cooldowns.push<=0&&(this.heavyOwner===null||this.heavyOwner===t.id)){this.heavyOwner=t.id,this.startWindup(t,"enemyHeavy",this.facingDir(t),yn.windup),t.moveVel={x:0,z:0};return}if(t.kit==="archer"){if(n.dash&&n.dashDir&&yt(n.dashDir)>.01&&t.cooldowns.dash<=0){this.startBackstep(t,Ae(n.dashDir));return}if(n.fire&&t.burstLeft===0&&t.cooldowns.basic<=0){this.startWindup(t,"enemyBasic",this.aimOrAuto(t,n.fireDir,Mn.range),Mn.windup);return}}}if(t.state==="idle"||t.state==="windup"||t.state==="recover"){let a=n.move,o=yt(a);o>1&&(a=he(a,1/o));let l=t.kit==="shieldbearer"?Re.bearer.speed:Re.archer.speed;t.slowT>0&&(l*=ta),r&&(l*=.5),t.burstLeft>0&&(l*=Sl),t.state==="windup"&&(l*=na),t.state==="recover"&&(l*=.3),t.moveVel=he(a,l),t.kit==="archer"&&t.state==="idle"&&t.burstLeft===0&&o>.1&&(t.facing=Wn(a))}else t.moveVel={x:0,z:0}}startBackstep(t,n){t.cooldowns.dash=Re.archer.backstepCooldown,this.fx(t).act={kind:"backstep",dir:n,left:Re.archer.backstep},t.moveVel={x:0,z:0},this.setState(t,"dash"),this.emit({type:"dash",ownerId:t.id,from:{...t.pos},dir:{...n}})}advance(t,n){let i=this.fx(t);switch(t.state){case"dead":case"falling":case"knocked":case"ledge":case"climb":super.advance(t,n);return;case"dash":if(i.act&&i.act.kind==="backstep"){this.advanceBackstep(t,i.act,n);break}super.advance(t,n);return;case"reviving":t.stateT>=Re.revive.delay-Ot&&this.revive(t);return;case"windup":this.advanceWindup(t,n);break;case"recover":this.walk(t,n),i.act&&i.act.kind==="melee"&&t.stateT<=Re.meleeActive+Ot&&this.strikeMelee(t,i.act,!1);break;case"charge":this.advanceCharge(t,n);break;case"idle":case"guard":this.walk(t,n);break;case"hitstun":t.moveVel={x:0,z:0};break}if(i.slide&&(t.state==="idle"||t.state==="hitstun"||t.state==="guard"||t.state==="recover"||t.state==="windup")){let a=Math.min(i.slide.left,i.slide.speed*n),o=this.activeMove(t,he(i.slide.dir,a),"stop");i.slide.left-=a,(o.blocked||i.slide.left<=1e-6)&&(i.slide=null)}if((t.state==="idle"||t.state==="windup"||t.state==="recover"||t.state==="hitstun"||t.state==="guard"||t.state==="charge"||t.state==="dash")&&Bt(t.pos,this.state.island.poly)<0){this.startFall(t,{x:0,z:0});return}this.tickBurst(t,n)}advanceBackstep(t,n,i){let r=Math.min(n.left,Re.archer.backstep/Re.archer.backstepTime*i),a=this.activeMove(t,he(n.dir,r),"none");n.left-=r,(a.blocked||n.left<=1e-6)&&(this.fx(t).act=null,this.setState(t,"idle"))}advanceWindup(t,n){let i=t.windup,r=this.fx(t);i.t+=n;let a=r.act;if(Eu(i.skill)&&a&&a.kind==="melee"&&a.stepLeft>0){let o=Math.min(a.stepLeft,a.stepSpeed*n),l=this.activeMove(t,he(a.dir,o),"stop");a.stepLeft=l.blocked?0:a.stepLeft-o}i.skill==="enemyHeavy"&&!r.heavyArmor&&i.t>=i.dur-Re.bearer.heavyArmor-Ot&&(r.heavyArmor=!0,this.emit({type:"armor",ownerId:t.id,kind:"heavy",dur:Re.bearer.heavyArmor})),i.skill!=="charge"&&this.walk(t,n),i.t>=i.dur-Ot&&this.releaseV4(t)}releaseV4(t){let n=t.windup,i=this.fx(t);switch(n.skill){case"melee1":case"melee2":case"melee3":this.releaseMelee(t);return;case"charge":t.windup=null,this.setState(t,"charge"),this.emit({type:"charge",ownerId:t.id,from:{...t.pos},dir:{...n.dir}});return;case"enemyHeavy":this.releaseWindup(t),i.heavyArmor=!1,i.noTurnUntil=this.state.time+yn.recover,t.state==="recover"&&(i.act={kind:"recover",tag:"heavy",recDur:yn.recover});return;case"push":this.releaseWindup(t),t.state==="recover"&&(i.act={kind:"recover",tag:"push",recDur:ln.recover});return;default:this.releaseWindup(t)}}activeMove(t,n,i){if(i==="contact"){let h=this.contactAt(t,t.pos);if(h)return{moved:0,blocked:"enemy",enemy:h}}let r=yt(n);if(r<1e-12)return{moved:0,blocked:null,enemy:null};let a=Math.max(1,Math.ceil(r/.02)),o=he(n,1/a),l=r/a,c=0;for(let h=0;h<a;h++){let u=tt(t.pos,o),d=this.moveBlock(t,t.pos,u,i);if(d){let p=0,m=1;for(let x=0;x<30;x++){let v=(p+m)/2;this.moveBlock(t,t.pos,tt(t.pos,he(o,v)),i)?m=v:p=v}return t.pos=tt(t.pos,he(o,p)),c+=l*p,{moved:c,blocked:d.kind,enemy:d.enemy}}t.pos=u,c+=l}return{moved:c,blocked:null,enemy:null}}contactAt(t,n){let i=null,r=1/0;for(let a of this.state.fighters){if(a.team===t.team||!Yt.alive(a))continue;let o=pt(n,a.pos);o<=Re.charge.contact+Ot&&o<r&&(r=o,i=a)}return i}moveBlock(t,n,i,r){let a=this.state.island.poly,o=Bt(i,a);if(o<Re.edgeMargin&&o<Bt(n,a)-1e-12)return{kind:"edge",enemy:null};for(let l of this.state.island.rocks){let c=pt(i,l.pos),h=l.r+t.radius;if(c<h&&c<pt(n,l.pos)-1e-12)return{kind:"rock",enemy:null}}if(r==="contact"){let l=this.contactAt(t,i);if(l)return{kind:"enemy",enemy:l}}else if(r==="stop")for(let l of this.state.fighters){if(l.team===t.team||!Yt.alive(l))continue;let c=pt(i,l.pos),h=t.radius+l.radius;if(c<h&&c<pt(n,l.pos)-1e-12)return{kind:"enemy",enemy:l}}return null}cancelWindup(t){if(t.windup){let n=this.fx(t);n.heavyArmor=!1,n.act&&(n.act.kind==="melee"||n.act.kind==="charge")&&(n.act=null)}super.cancelWindup(t)}resolveHit(t,n,i){let r=this.state;if(this.untouchable(n))return"invuln";if(n.kit==="shieldbearer"&&(n.breakT??0)<=0&&qf(i.fromDir,this.facingDir(n))<=Re.bearer.frontHalfAngle+1e-7)return this.emit({type:"shieldBlock",attackerId:t.id,targetId:n.id,kind:"bearer",skill:i.kind,pos:tt(n.pos,he(i.fromDir,n.radius)),dir:he(i.fromDir,-1)}),"bearer";if(n.state==="guard"&&n.shieldUp&&n.shieldDir&&n.guard&&qf(i.fromDir,n.shieldDir)<=Re.guard.blockHalfAngle+1e-7)return this.guardBlock(t,n,i);let a=n.slowT>0,o=n.hp;n.hp=Math.max(0,n.hp-i.dmg),this.onDamaged(t,n,i.kind,o-n.hp),n.hitFlashT=.12,n.lastHitBy=t.id,n.lastHitAt=r.time,this.lastHitKind.set(n.id,i.kind),this.hitstop=Math.max(this.hitstop,Tl[i.kind]),i.slow&&(n.slowT=i.slow),n.team==="player"&&this.loseCounter(n,"hit");let l=this.armored(n),c=0,h=!1,u=!1;if(n.hp>0&&!l&&(i.breakDur&&this.applyBreak(t,n,i.breakDur),i.knock&&(c=i.knock.dist??Yt.knockDistance(n.hp,n.maxHp,a)*(i.knock.mult??1),u=this.applyKnock(n,i.knock.dir,c,t,i.kind),h=!0),i.stun&&!u&&(this.applyStun(n,i.stun),h=!0)),u||this.emit({type:"hit",targetId:n.id,sourceId:t.id,kind:i.kind,pos:{...n.pos},dir:i.knock?Ae(i.knock.dir):he(i.fromDir,-1),dmg:i.dmg,knock:c}),n.hp<=0)return this.cancelWindup(n),this.die(n,"hp"),"hit";if(l)return"armored";if(h){let d=this.fx(n),p=r.time;d.stackHits=d.stackHits.filter(m=>p-m<=Re.stack.window+Ot),d.stackHits.push(p),d.stackHits.length>=Re.stack.hits&&(d.stackHits=[],d.stackArmorT=Re.stack.armor,this.emit({type:"armor",ownerId:n.id,kind:"stack",dur:Re.stack.armor}))}return"hit"}guardBlock(t,n,i){let r=Re.guard,a=n.guard.since<=r.perfect+Ot;if(this.emit({type:"shieldBlock",attackerId:t.id,targetId:n.id,kind:a?"perfect":"guard",skill:i.kind,pos:tt(n.pos,he(i.fromDir,n.radius)),dir:he(i.fromDir,-1)}),a)return this.state.v4.perfectBlocks++,i.melee&&(this.applyBreak(n,t,r.perfectBreak),this.guardSt&&!this.guardSt.counterMade&&(this.guardSt.counterMade=!0,this.counter={targetId:t.id,released:!1},n.counterT=Re.counter.dur,n.counterTargetId=t.id,this.emit({type:"counterReady",ownerId:n.id,targetId:t.id,dur:Re.counter.dur}))),"perfect";if(i.melee){let o=n.hp;n.hp=Math.max(0,n.hp-r.chipDmg),this.onDamaged(t,n,i.kind,o-n.hp),n.lastHitBy=t.id,n.lastHitAt=this.state.time,this.lastHitKind.set(n.id,i.kind),this.fx(n).slide={dir:he(i.fromDir,-1),left:r.pushback,speed:r.pushback/r.pushbackTime},n.hp<=0&&this.die(n,"hp")}return"guard"}applyBreak(t,n,i){let r=this.fx(n);n.breakT=Math.max(n.breakT??0,i),n.state==="windup"&&(this.cancelWindup(n),r.act=null,this.setState(n,"idle")),n.burstLeft=0,this.bursts.delete(n.id),this.emit({type:"guardBreak",targetId:n.id,sourceId:t.id,dur:i,pos:{...n.pos}}),n.team==="enemy"&&this.state.v4.breaks++}applyStun(t,n){let i=this.fx(t);i.hitstunT=Math.max(i.hitstunT,n),i.stunKind="hit",t.team==="player"&&(t.state==="guard"&&this.lowerGuard(t,"hit",!0),this.resetCombo(t),this.dropBuf()),(t.state==="idle"||t.state==="windup"||t.state==="recover"||t.state==="hitstun"||t.state==="guard"||t.state==="charge"||t.state==="dash")&&(this.cancelWindup(t),t.burstLeft=0,this.bursts.delete(t.id),i.act=null,i.slide=null,this.setState(t,"hitstun"))}applyKnock(t,n,i,r,a){let o=Ae(n);if(t.state==="ledge")return this.emit({type:"hit",targetId:t.id,sourceId:r.id,kind:a,pos:{...t.pos},dir:{...o},dmg:0,knock:0}),this.dropLedge(t,"knocked",o),!0;if(t.state==="climb"){let c=this.ledge.get(t.id);c&&(c.rec.outcome="knocked",this.ledge.delete(t.id),this.edgeRec.delete(t.id))}t.team==="player"&&(t.state==="guard"&&this.lowerGuard(t,"hit",!0),this.resetCombo(t),this.dropBuf());let l=this.fx(t);return l.act=null,l.slide=null,this.outSource.set(t.id,"knock"),this.cancelWindup(t),t.burstLeft=0,this.bursts.delete(t.id),t.knockVel=he(o,2*i/vi.knockTime),t.kit!=="shieldbearer"&&(t.facing=Wn(he(o,-1))),this.outsideT.set(t.id,0),this.setState(t,"knocked"),!1}coneStrike(t,n,i,r,a,o){this.emit({type:"cast",ownerId:t.id,skill:o,pos:{...t.pos},dir:{...n}});for(let l of[...this.state.fighters]){if(l.team===t.team||!Yt.alive(l))continue;let c=ft(l.pos,t.pos),h=yt(c);if(!(h>i+l.radius)&&(h<.6||cn(he(c,1/h),n)>=Math.cos(r))){if(this.coverOn()){let u=this.rockOnSegment(t.pos,l.pos);if(u){this.emit({type:"blockedStrike",ownerId:t.id,targetId:l.id,skill:o,pos:u,dir:{...n}});continue}}this.resolveHit(t,l,{kind:o,dmg:a,fromDir:Ae(ft(t.pos,l.pos)),melee:o==="enemyHeavy",knock:{dir:n}})}}}moveProjectiles(t){let n=this.state;for(let i of n.projectiles){if(!i.alive)continue;let r=i.pos,a=i.speed*t,o=tt(r,he(i.dir,a));if(i.traveled+=a,n.island.rocks.some(h=>Wr(r,o,h.pos,h.r+i.radius*.5))){i.alive=!1,this.emit({type:"blocked",pos:o,kind:i.kind,ownerId:i.ownerId});continue}let l=null,c=1/0;for(let h of n.fighters)if(!(h.team===i.team||!Yt.alive(h)||this.untouchable(h))&&Qi(h.pos,r,o)<h.radius+i.radius){let u=pt(r,h.pos);u<c&&(c=u,l=h)}if(i.pos=o,l){i.alive=!1;let h=this.fighter(i.ownerId);if(h){let u=he(i.dir,-1);i.kind==="control"?this.resolveHit(h,l,{kind:"control",dmg:an.dmg,fromDir:u,slow:an.slow,melee:!1}):this.resolveHit(h,l,{kind:i.kind,dmg:i.kind==="enemyBasic"?Mn.dmg:3,fromDir:u,melee:!1})}continue}i.traveled>=i.range&&(i.alive=!1,this.emit({type:"expire",pos:o,kind:i.kind}))}n.projectiles=n.projectiles.filter(i=>i.alive)}clearPlayer(t){t.team==="player"&&((t.guard||t.shieldUp)&&(t.guard=null,t.shieldUp=!1,this.guardSt=null),this.counter&&this.loseCounter(t,"hit"),this.resetCombo(t),this.dropBuf(),this.threat=null)}startFall(t,n){let i=this.fx(t);i.act=null,i.slide=null,i.hitstunT=0,i.heavyArmor=!1,this.clearPlayer(t),super.startFall(t,n)}die(t,n){let i=this.state,r=i.v4,a=this.fx(t);if(this.cancelWindup(t),a.act=null,a.slide=null,a.hitstunT=0,a.heavyArmor=!1,a.stackArmorT=0,a.stackHits=[],t.burstLeft=0,this.bursts.delete(t.id),t.team==="player"&&r.revivesLeft>0){if(r.revivesLeft--,this.clearPlayer(t),this.dashBuf.delete(t.id),n==="hp"){let o=this.ledge.get(t.id);o&&o.rec.outcome==="pending"&&(o.rec.outcome="hp");let l=this.edgeRec.get(t.id);l&&l.outcome==="pending"&&(l.outcome="hp"),this.ledge.delete(t.id),this.edgeRec.delete(t.id)}t.hp=0,t.breakT=0,t.knockVel={x:0,z:0},t.moveVel={x:0,z:0},this.setState(t,"reviving"),this.emit({type:"reviveStart",ownerId:t.id,delay:Re.revive.delay});return}if(t.team==="enemy"){let o=t.lastHitBy!==null&&i.time-t.lastHitAt<4?t.lastHitBy:null;r.kills.push({t:Math.round(i.time*1e3)/1e3,how:n,where:Bt(t.pos,i.island.poly)<=Re.killEdge?"edge":"center",by:o!==null?this.lastHitKind.get(t.id)??null:null,victim:t.kit})}super.die(t,n)}legalRevivePoints(){let t=this.state,n=Re.revive.grid,i=Re.player.radius,r=t.island.poly.map(l=>l.x),a=t.island.poly.map(l=>l.z),o=[];for(let l=Math.floor(Math.min(...r)/n);l<=Math.ceil(Math.max(...r)/n);l++)for(let c=Math.floor(Math.min(...a)/n);c<=Math.ceil(Math.max(...a)/n);c++){let h={x:l*n,z:c*n};Bt(h,t.island.poly)<Re.revive.edge||t.island.rocks.some(u=>pt(h,u.pos)<u.r+i)||o.push(h)}return o}revivePoint(){let t=this.legalRevivePoints(),n=this.enemies(),i=c=>n.reduce((h,u)=>Math.min(h,pt(c,u.pos)),1/0),r=null,a=1/0;for(let c of t){if(i(c)<Re.revive.enemyClear)continue;let h=yt(c);h<a-Ot&&(a=h,r=c)}if(r)return{...r};let o=t[0],l=-1/0;for(let c of t){let h=i(c);h>l+Ot&&(l=h,o=c)}return{...o}}revive(t){let n=this.revivePoint();t.pos=n,t.y=0,t.hp=t.maxHp*Re.revive.hpFrac,t.protectT=Re.revive.protect,t.knockVel={x:0,z:0},t.moveVel={x:0,z:0},t.deathCause=null,t.slowT=0,t.invulnT=0,this.fallVel.delete(t.id),this.outSource.delete(t.id),this.setState(t,"idle"),this.emit({type:"revive",ownerId:t.id,pos:{...n},protect:Re.revive.protect})}spawnCandidates(){let t=this.state,n=Re.waves,i=n.grid,r=this.player,a=t.island.poly.map(c=>c.x),o=t.island.poly.map(c=>c.z),l=[];for(let c=Math.floor(Math.min(...a)/i);c<=Math.ceil(Math.max(...a)/i);c++)for(let h=Math.floor(Math.min(...o)/i);h<=Math.ceil(Math.max(...o)/i);h++){let u={x:c*i,z:h*i};Bt(u,t.island.poly)<n.minEdge||t.island.rocks.some(d=>pt(u,d.pos)<d.r+.5)||pt(u,r.pos)<n.minPlayerDist||l.push(u)}return l}chooseSpawns(t){let n=Re.waves,i=this.spawnCandidates(),r=[];for(let a=0;a<t;a++){let o=i.filter(c=>r.every(h=>pt(h,c)>=n.spacing)&&this.enemies().every(h=>pt(h.pos,c)>=n.spacing)),l=o.length?o:i;r.push({...l[Math.floor(this.rng()*l.length)%l.length]})}return r}spawnWave(t,n){let i=this.waveList[t-1],r=this.player;this.waveIdx=t,this.waveMembers=[],i.forEach((a,o)=>{let l=n[o],c=a==="shieldbearer",h=this.makeFighter("enemy",c?1:2,c?"\u76FE\u5175":"\u5F13\u624B",l,Wn(ft(r.pos,l)),a);h.hp=h.maxHp=c?Re.bearer.hp:Re.archer.hp,h.cooldownMax=c?{basic:0,control:0,push:yn.cooldown,dash:0}:{basic:Mn.cooldownMax,control:0,push:0,dash:Re.archer.backstepCooldown},h.cooldowns={basic:0,control:0,push:c?2.5:0,dash:0},this.initV4Fields(h),this.state.fighters.push(h),this.waveMembers.push(h.id),this.sync(h)}),this.wavePhase="fight",this.emit({type:"waveStart",index:t,total:this.waveList.length}),this.updateWaveState()}updateWaveState(){let t=this.state.v4.wave;t.index=this.waveIdx,t.total=this.waveList.length,t.remaining=this.waveMembers.filter(n=>{let i=this.fighter(n);return i!==void 0&&Yt.alive(i)}).length}tickWaves(){let t=this.state.time,n=Re.waves;if(this.wavePhase==="fight"&&this.waveMembers.every(i=>this.fighter(i)?.state==="dead")&&(this.emit({type:"waveClear",index:this.waveIdx}),this.waveIdx>=this.waveList.length?this.wavePhase="done":(this.wavePhase="gap",this.waveClearAt=t)),this.wavePhase==="gap"&&t>=this.waveClearAt+n.gap-n.markLead-Ot){let i=this.waveList[this.waveIdx],r=this.chooseSpawns(i.length);this.pendingSpawns=i.map((a,o)=>({kit:a,pos:r[o]}));for(let a of this.pendingSpawns)this.emit({type:"spawnMark",pos:{...a.pos},lead:n.markLead});this.wavePhase="marked"}this.wavePhase==="marked"&&t>=this.waveClearAt+n.gap-Ot&&!this.ended&&(this.spawnWave(this.waveIdx+1,this.pendingSpawns.map(i=>i.pos)),this.pendingSpawns=[]),this.updateWaveState()}checkEnd(){if(this.ended)return;let t=this.state,n=this.player;n.state==="dead"?(t.result="lose",t.loseText=this.loseText(n)):this.wonNow()&&(t.result="win"),t.result&&(this.ended=!0,this.dashBuf.clear(),this.dropBuf(),this.emit({type:"roundEnd",result:t.result}))}get wave(){return{index:this.waveIdx,phase:this.wavePhase}}debugPlayer(){let t=this.fx(this.player);return{buffered:this.buf?this.buf.type:null,counter:this.counter?{...this.counter}:null,combo:this.combo?{...this.combo}:null,lastTarget:this.lastMeleeTarget,stunKind:t.stunKind,hitstunT:t.hitstunT}}debugFx(t){let n=this.fighter(t),i=this.fx(n);return{hitstunT:i.hitstunT,heavyArmor:i.heavyArmor,stackArmorT:i.stackArmorT,stackCount:i.stackHits.length}}debugDamage(t,n,i,r,a){let o=this.fighter(t),l=this.fighter(n);if(!o||!l||!Yt.alive(o)||this.untouchable(o))return!1;let c=o.slowT>0;if(o.hp=Math.max(0,o.hp-r),o.lastHitBy=l.id,o.lastHitAt=this.state.time,this.lastHitKind.set(o.id,i),o.hp<=0)return this.die(o,"hp"),!0;let h=0;return a&&(h=Yt.knockDistance(o.hp,o.maxHp,c),this.applyKnock(o,a,h,l,i))||this.emit({type:"hit",targetId:o.id,sourceId:l.id,kind:i,pos:{...o.pos},dir:a?Ae(a):Ae(ft(o.pos,l.pos)),dmg:r,knock:h}),!0}debugSpawn(t,n,i){let r=t==="shieldbearer",a=this.makeFighter("enemy",r?1:2,r?"\u76FE\u5175":"\u5F13\u624B",n,i??0,t);return a.hp=a.maxHp=r?Re.bearer.hp:Re.archer.hp,a.cooldownMax=r?{basic:0,control:0,push:yn.cooldown,dash:0}:{basic:Mn.cooldownMax,control:0,push:0,dash:Re.archer.backstepCooldown},a.cooldowns={basic:0,control:0,push:0,dash:0},this.initV4Fields(a),this.state.fighters.push(a),this.sync(a),a}debugClearWave(){let t=new Set(this.waveMembers);this.state.fighters=this.state.fighters.filter(n=>!t.has(n.id)),this.waveMembers=[],this.wavePhase="off",this.updateWaveState()}};var un=1e-9,vs=s=>Math.round(s*1e3)/1e3;function Fg(s,e=Re.revive.edge,t=Re.revive.grid,n=Re.player.radius){let i=s.poly.map(o=>o.x),r=s.poly.map(o=>o.z),a=[];for(let o=Math.floor(Math.min(...i)/t);o<=Math.ceil(Math.max(...i)/t);o++)for(let l=Math.floor(Math.min(...r)/t);l<=Math.ceil(Math.max(...r)/t);l++){let c={x:o*t,z:l*t};Bt(c,s.poly)<e||s.rocks.some(h=>pt(c,h.pos)<h.r+n)||a.push(c)}return a}function Su(s){let e=Fg(s),t=e[0],n=1/0;for(let i of e){let r=yt(i);r<n-un&&(n=r,t=i)}return{...t}}function Tu(s){let e=s.poly.filter(t=>s.rocks.every(n=>pt(t,n.pos)-n.r>=St.exit.ring-un));return e.length?e:s.poly}function wu(s,e,t=St.exit.minDist){let n=Tu(s),i=null,r=1/0;for(let a of n){let o=pt(a,e);o>=t-un&&o<r-un&&(r=o,i=a)}return i||(i=Zf(n,e)),i?{...i}:null}function Zf(s,e){let t=null,n=-1/0;for(let i of s){let r=pt(i,e);r>n+un&&(n=r,t=i)}return t}function zg(s,e,t=St.exit.minDist,n=St.exit.apart){let i=wu(s,e,t);if(!i)return[];let r=Tu(s),a=r.filter(c=>pt(c,i)>=n-un),o=null,l=1/0;for(let c of a){let h=pt(c,e);h>=t-un&&h<l-un&&(l=h,o=c)}return o||(o=Zf(a,e)),o?[i,{...o}]:Ug(r)??[i]}function Ug(s){let e=null,t=-1/0;for(let n=0;n<s.length;n++)for(let i=n+1;i<s.length;i++){let r=pt(s[n],s[i]);r>t+un&&(t=r,e=[{...s[n]},{...s[i]}])}return e}function Hg(s){let e=St.altar,t=Su(s),n=gs(e.exitAngle),i=Tu(s).filter(o=>pt(o,t)>=e.exitFromLanding-un&&(s.spots??[]).every(l=>pt(o,l.pos)>=e.exitFromSpot-un)),r=null,a=-1/0;for(let o of i){let l=(o.x*n.x+o.z*n.z)/Math.max(yt(o),un);l>a+un&&(a=l,r=o)}return r?{...r}:wu(s,t)}function Ng(s,e){let t=null,n=1/0;for(let i of s.spots??[]){let r=pt(e,i.pos);r<St.altar.reach-un&&r<n-un&&(n=r,t=i)}return t}function Kf(s,e){return Bt(e,s.poly)>=St.coin.edge-un&&s.rocks.every(t=>pt(e,t.pos)>=t.r+St.coin.radius-un)}function Bg(s,e,t){let n={...e};if(t){let c=s.poly,h=0,u=1/0;for(let b=0,g=c.length-1;b<c.length;g=b++){let _=Qi(e,c[g],c[b]);_<u-un&&(u=_,h=b)}let d=c[(h+c.length-1)%c.length],p=c[h],m=ft(p,d),x=m.x*m.x+m.z*m.z,v=x===0?0:Math.max(0,Math.min(1,((e.x-d.x)*m.x+(e.z-d.z)*m.z)/x)),f=tt(d,he(m,v)),y=Ae({x:-m.z,z:m.x});n=tt(f,he(y,St.coin.inset))}if(Kf(s,n))return n;let i=St.coin.grid,r=s.poly.map(c=>c.x),a=s.poly.map(c=>c.z),o=n,l=1/0;for(let c=Math.floor(Math.min(...r)/i);c<=Math.ceil(Math.max(...r)/i);c++)for(let h=Math.floor(Math.min(...a)/i);h<=Math.ceil(Math.max(...a)/i);h++){let u={x:c*i,z:h*i},d=pt(u,n);d<l-un&&Kf(s,u)&&(l=d,o=u)}return o}function Og(s){return{path:s,result:null,reached:{island:1,wave:1},islandTimes:[],waveTimes:[],downs:[],damageTaken:[],kills:[],breaks:0,perfectBlocks:0,counters:{bash:0,melee:0},droppedPresses:0,again:!1,shortcuts:[],reachedStage:1,coins:{fromKills:0,fromJumps:0,spent:[],end:0},jumps:[],altars:[],blessings:[],converts:[],revivesBought:[]}}var Vg=(s,e)=>s.kind!==e.kind?!1:s.kind==="bless"&&e.kind==="bless"?s.blessing===e.blessing&&(s.replace??null)===(e.replace??null):!0,Al=s=>s.kind==="bless"?s.replace?{kind:"bless",blessing:s.blessing,replace:s.replace}:{kind:"bless",blessing:s.blessing}:{kind:s.kind},Gs=class extends Xr{constructor(t=1,n="ares"){let i=St.islands[0];super(t,n,{mode:"run",variant:"s1",island:Vs(i.seed),waves:i.waves});this.clearAt=0;this.ringT=0;this.ringAt=-1;this.jump=null;this.arriveAt=0;this.stageOpen=!0;this.fallFrom=null;this.victory=!1;this.nextCoinId=1;this.blessCount={A:0,B:0};this.convertUsed=new Set;let r=Og(n);r.waveTimes.push({island:1,wave:1,t:0}),this.state.s1={islandIndex:1,islandTotal:St.islands.length,phase:"fight",exits:[],phaseT:0,record:r,stageIndex:1,stageTotal:St.stages.length,stage:{kind:"battle"},coins:0,drops:[],blessings:[],offers:[]},this.events.unshift({type:"islandStart",index:1,total:St.islands.length,seed:i.seed,kind:"battle"}),this.syncRecord()}get s1(){return this.state.s1}get stageCfg(){return St.stages[this.s1.stageIndex-1]}altarHere(){let t=this.stageCfg;return t.kind==="altar"?t.altar:null}suspended(t){return t.team==="player"&&this.state.s1?.phase==="air"}untouchable(t){return t.team==="player"&&this.state.s1?.phase==="air"?!0:super.untouchable(t)}wonNow(){return this.victory}emit(t){super.emit(t);let n=this.state?.s1;n&&t.type==="waveStart"&&n.record.waveTimes.push({island:n.islandIndex,wave:t.index,t:vs(this.state.time)})}onDamaged(t,n,i,r){let a=this.state.s1;if(!a||n.team!=="player"||r<=0)return;let o=a.record.damageTaken.find(l=>l.byKit===t.kit&&l.skill===i);o||(o={byKit:t.kit,skill:i,total:0,count:0},a.record.damageTaken.push(o)),o.total=vs(o.total+r),o.count++}startFall(t,n){t.team==="player"&&(this.fallFrom={t:this.state.time,pos:{...t.pos}}),super.startFall(t,n),t.team==="enemy"&&this.state.s1&&this.dropCoin(t.pos,!0)}die(t,n){let i=this.state,r=i.s1,a=i.v4;if(!r){super.die(t,n);return}if(t.team==="player"){let l=t.lastHitBy!==null&&i.time-t.lastHitAt<4?this.fighter(t.lastHitBy):void 0,c=n==="fall"&&this.fallFrom?this.fallFrom:{t:i.time,pos:t.pos};r.record.downs.push({t:vs(c.t),island:r.islandIndex,wave:a.wave.index,pos:{...c.pos},cause:n,byKit:l&&l.team==="enemy"?l.kit:null,revived:a.revivesLeft>0}),this.fallFrom=null,super.die(t,n);return}let o=a.kills.length;super.die(t,n);for(let l=o;l<a.kills.length;l++)r.record.kills.push({...a.kills[l],island:r.islandIndex});t.team==="enemy"&&n==="hp"&&this.dropCoin(t.pos,!1)}step(t){super.step(t),this.tickS1(t.altar??null)}tickS1(t){let n=this.state,i=this.s1,r=n.time;if(this.ended&&i.phase!=="done")this.finish();else switch(i.phase){case"fight":this.wavePhase==="done"&&(i.phase="cleared",this.clearAt=r,i.phaseT=St.exit.delay);break;case"cleared":i.phaseT=Math.max(0,this.clearAt+St.exit.delay-r),r>=this.clearAt+St.exit.delay-un&&this.openExit();break;case"exit":this.tickExit();break;case"air":this.tickAir();break;case"landed":i.phaseT=this.player.protectT??0,i.phaseT<=un&&(i.phaseT=0,this.altarHere()?this.openExit():i.phase="fight");break;case"done":break}this.tickCoins(),t&&this.altarAct(t),i.offers=this.currentOffers(),this.syncRecord()}openExit(){let t=this.s1,n=this.state.island,i=this.stageCfg,r,a;if(i.kind==="altar")r=[Hg(n)],a=["none"];else if(St.reward.islands.includes(i.island))r=zg(n,this.player.pos),a=["coins","heal"];else{let o=wu(n,this.player.pos);r=o?[o]:[],a=["none"]}t.exits=r.map((o,l)=>({pos:o,progress:0,reward:a[l]??"none"})),t.phase="exit",t.phaseT=0,this.ringT=0,this.ringAt=-1,this.emit({type:"exitOpen",pos:t.exits.map(o=>({...o.pos}))})}tickExit(){let t=this.s1.exits;if(!t.length)return;let n=this.player,r=Yt.alive(n)&&n.state!=="ledge"&&n.state!=="climb"?t.findIndex(o=>pt(n.pos,o.pos)<=St.exit.ring+un):-1,a=r>=0;a&&r!==this.ringAt&&(this.ringT=0,this.ringAt=r),a?this.ringT+=ei:this.ringT=0,t.forEach((o,l)=>{o.progress=l===this.ringAt?Math.min(1,this.ringT/St.exit.hold):0}),a&&this.ringT>=St.exit.hold-un&&this.startJump(t[r].reward)}startJump(t){let n=this.s1,i=this.player,r=this.state.time,a={...i.pos};if(this.calmPlayer(i),n.record.jumps.push({t:vs(r),from:n.stageIndex,reward:t}),this.leaveStage(r),this.ringT=0,this.emit({type:"jumpStart",ownerId:i.id,from:a}),this.collectDrops(),n.stageIndex>=n.stageTotal){this.victory=!0,this.checkEnd(),this.finish();return}let o=St.stages[n.stageIndex],l=o.kind==="altar"?Rl():Vs(St.islands[o.island-1].seed);this.jump={at:r,from:a,to:Su(l),island:l,swapped:!1,reward:t},n.phase="air",n.phaseT=St.jump.air}tickAir(){let t=this.s1,n=this.player,i=this.jump,r=this.state.time-i.at;t.phaseT=Math.max(0,St.jump.air-r),!i.swapped&&r>=St.jump.swapAt-un&&this.swapIsland(),n.pos=i.swapped?{...i.to}:{...i.from},n.moveVel={x:0,z:0},r>=St.jump.air-un&&this.land()}swapIsland(){let t=this.state,n=this.s1,i=this.jump;i.swapped=!0,n.stageIndex++;let r=this.stageCfg;r.kind==="battle"&&(n.islandIndex=r.island),n.stage=r.kind==="battle"?{kind:"battle"}:{kind:"altar",altar:r.altar},t.island=i.island,t.fighters=t.fighters.filter(a=>a.team==="player"),t.projectiles=[],this.heavyOwner=null,this.wavePhase="off",this.waveMembers=[],this.pendingSpawns=[],n.exits=[],n.drops=[],this.emitIslandStart()}emitIslandStart(){let t=this.s1,n=this.stageCfg,i=this.state.island.seed??0;n.kind==="altar"?this.emit({type:"islandStart",index:t.islandIndex,total:t.islandTotal,seed:i,kind:"altar",altar:n.altar}):this.emit({type:"islandStart",index:t.islandIndex,total:t.islandTotal,seed:i,kind:"battle"})}land(){let t=this.s1,n=this.player,i=this.jump;this.jump=null,n.pos={...i.to},n.y=0,n.moveVel={x:0,z:0},n.knockVel={x:0,z:0},n.protectT=St.jump.protect,t.phase="landed",t.phaseT=St.jump.protect,this.arriveAt=this.state.time,this.stageOpen=!0,this.emit({type:"land",ownerId:n.id,pos:{...i.to},index:t.islandIndex}),i.reward!=="none"&&this.grantReward(i.reward,i.to);let r=this.stageCfg;r.kind==="altar"?t.record.altars.push({altar:r.altar,arrive:vs(this.state.time),leave:null}):this.beginWaves(St.islands[r.island-1].waves)}grantReward(t,n){let i=this.s1,r=this.player;if(t==="coins"){let a=St.reward.coins;i.coins+=a,i.record.coins.fromJumps+=a,this.emit({type:"reward",kind:"coins",amount:a,pos:{...n}})}else if(t==="heal"){let a=Math.min(r.maxHp*St.reward.healFrac,r.maxHp-r.hp);r.hp+=a,this.emit({type:"reward",kind:"heal",amount:a,pos:{...n}})}}finish(){let t=this.s1;t.phase="done",t.phaseT=0,t.offers=[],t.record.result=this.state.result,this.stageOpen&&this.leaveStage(this.state.time)}leaveStage(t){let n=this.s1,i=this.stageCfg;if(this.stageOpen=!1,i.kind==="battle"){this.addIslandTime(n.islandIndex,t-this.arriveAt);return}let r=n.record.altars,a=r[r.length-1];a&&a.altar===i.altar&&a.leave===null&&(a.leave=vs(t))}addIslandTime(t,n){let i=this.s1.record.islandTimes;for(;i.length<t;)i.push(0);i[t-1]=vs(i[t-1]+n)}syncRecord(){let t=this.s1,n=this.state.v4,i=t.record;i.reached={island:t.islandIndex,wave:n.wave.index},i.reachedStage=t.stageIndex,i.coins.end=t.coins,i.breaks=n.breaks,i.perfectBlocks=n.perfectBlocks,i.counters={...n.counters},i.droppedPresses=this.droppedPresses}dropCoin(t,n){let i=this.s1,r=Bg(this.state.island,t,n),a=this.nextCoinId++;i.drops.push({id:a,pos:r}),this.emit({type:"coinDrop",id:a,pos:{...r}})}tickCoins(){let t=this.s1,n=this.player;if(t.phase==="air"||t.phase==="done"||!Yt.alive(n)||!t.drops.length)return;let i=[];for(let r of t.drops)pt(n.pos,r.pos)<St.coin.pickup-un?(t.coins++,t.record.coins.fromKills++,this.emit({type:"coinPickup",id:r.id,pos:{...r.pos},coins:t.coins})):i.push(r);t.drops=i}collectDrops(){let t=this.s1,n=t.drops.map(i=>i.id);n.length&&(t.coins+=n.length,t.record.coins.fromKills+=n.length,t.drops=[],this.emit({type:"coinsCollected",ids:n,coins:t.coins}))}currentOffers(){let t=this.s1,n=this.altarHere(),i=this.player;if(!n||t.phase==="air"||t.phase==="done"||!Yt.alive(i))return[];let r=Ng(this.state.island,i.pos);return r?this.offersFor(r.kind,n):[]}offersFor(t,n){let i=this.s1,r=this.state.v4,a=St.altar.price,o=i.blessings,l=i.coins,c=(u,d,p)=>{let m=l>=d,x=p??(m?void 0:"coins");return x?{spot:t,action:u,price:d,ok:!1,reason:x}:{spot:t,action:u,price:d,ok:!0}};if(t==="convert"){let d=(this.player.path??r.path)==="none"?"noPath":this.convertUsed.has(n)?"convertUsed":void 0;return[c({kind:"convert"},a.convert,d)]}if(t==="revive")return[c({kind:"revive"},a.revive,r.revivesLeft>0?"hasRevive":void 0)];let h=n==="A"&&this.blessCount.A===0?0:a.bless;return o.includes(t)?[c({kind:"bless",blessing:t},h,"held")]:o.length<St.altar.maxBlessings?[c({kind:"bless",blessing:t},h)]:o.map(u=>c({kind:"bless",blessing:t,replace:u},h))}altarAct(t){let n=this.s1.phase==="done"?void 0:this.currentOffers().find(i=>Vg(i.action,t));if(!n){this.emit({type:"altarDenied",action:Al(t),reason:"notHere"});return}if(!n.ok){this.emit({type:"altarDenied",action:Al(t),reason:n.reason});return}this.buy(n)}buy(t){let n=this.s1,i=this.state.v4,r=this.player,a=n.record,o=vs(this.state.time),l=this.altarHere(),c=t.action;if(n.coins-=t.price,t.price>0&&a.coins.spent.push({t:o,altar:l,action:Al(c),price:t.price}),c.kind==="bless"){let h=n.blessings,u=c.replace??null;u&&h.splice(h.indexOf(u),1),h.push(c.blessing),this.blessCount[l]++,a.blessings.push({t:o,altar:l,blessing:c.blessing,replaced:u,price:t.price})}else if(c.kind==="convert"){let h=r.path??i.path,u=h==="ares"?"mars":"ares";this.setPath(u),this.convertUsed.add(l),a.converts.push({t:o,altar:l,from:h,to:u})}else i.revivesLeft=Re.revive.count,a.revivesBought.push({t:o,altar:l});this.emit({type:"altarBuy",action:Al(c),price:t.price,coins:n.coins})}setPath(t){let n=this.player;this.calmPlayer(n),n.path=t,this.state.v4.path=t,n.cooldownMax.push=t==="ares"?Re.charge.cooldown:t==="none"?ln.cooldown:Re.guard.lock,n.cooldowns.push=0,n.shieldDir=t==="mars"?gs(n.facing):null}debugClearIsland(){let t=this.state,n=this.s1;this.ended||this.altarHere()||n.phase!=="fight"&&n.phase!=="landed"||(t.fighters=t.fighters.filter(i=>i.team==="player"),t.projectiles=t.projectiles.filter(i=>i.team==="player"),this.waveMembers=[],this.pendingSpawns=[],this.wavePhase="done",this.heavyOwner=null,n.record.shortcuts.push(`clear@${n.islandIndex}`))}debugGotoIsland(t){let n=this.s1,i=St.islands[t-1];this.ended||!Number.isInteger(t)||t<1||t>n.islandTotal||!Yt.alive(this.player)||(this.gotoStage(St.stages.findIndex(r=>r.kind==="battle"&&r.island===t)+1,Vs(i.seed)),n.phase="fight",n.record.shortcuts.push(`goto@${t}`),this.emitIslandStart(),this.beginWaves(i.waves),this.syncRecord())}debugGotoAltar(t){let n=this.s1,i=St.stages.findIndex(r=>r.kind==="altar"&&r.altar===t)+1;this.ended||i<1||!Yt.alive(this.player)||(this.gotoStage(i,Rl()),this.wavePhase="off",this.waveMembers=[],this.pendingSpawns=[],n.phase="landed",n.record.altars.push({altar:t,arrive:vs(this.state.time),leave:null}),n.record.shortcuts.push(`altar@${t}`),this.emitIslandStart(),this.syncRecord())}debugSetCoins(t){!Number.isInteger(t)||t<0||(this.s1.coins=t,this.s1.record.shortcuts.push(`coins@${t}`),this.syncRecord())}gotoStage(t,n){let i=this.state,r=this.s1,a=this.player;this.stageOpen&&this.leaveStage(i.time),this.collectDrops();let o=St.stages[t-1];this.calmPlayer(a),this.jump=null,this.ringT=0,this.ringAt=-1,r.stageIndex=t,o.kind==="battle"?r.islandIndex=o.island:r.islandIndex=St.stages.slice(0,t).filter(l=>l.kind==="battle").length,r.stage=o.kind==="battle"?{kind:"battle"}:{kind:"altar",altar:o.altar},i.island=n,i.fighters=i.fighters.filter(l=>l.team==="player"),i.projectiles=[],this.heavyOwner=null,r.exits=[],r.drops=[],r.phaseT=0,a.pos=Su(i.island),a.y=0,this.arriveAt=i.time,this.stageOpen=!0}};pn();pn();pn();function $t(s){let e=s>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var zt=(s,e,t)=>s<e?e:s>t?t:s,ai=(s,e,t)=>s+(e-s)*t,Ji=(s,e,t)=>{let n=zt((t-s)/(e-s||1e-6),0,1);return n*n*(3-2*n)},Uo=(s,e)=>1-Math.exp(-s*e);function An(s){return[(s>>16&255)/255,(s>>8&255)/255,(s&255)/255]}function $d(s){return"#"+s.toString(16).padStart(6,"0")}function Is(s,e){let t=document.createElement("canvas");t.width=s,t.height=e;let n=t.getContext("2d");return{c:t,g:n}}function Ps(s,e={}){let t=new fn(s);return e.srgb!==!1&&(t.colorSpace=Mt),e.repeat&&(t.wrapS=En,t.wrapT=En),t.anisotropy=4,t}var Ln=11;function tl(s,e){let t=zt(Math.round(s[0]*e),0,255),n=zt(Math.round(s[1]*e),0,255),i=zt(Math.round(s[2]*e),0,255);return`rgb(${t},${n},${i})`}function Kd(s,e,t=!1){let{c:n,g:i}=Is(e,e),r=$t(11),a=$t(12),o=v=>(v+Ln)/(Ln*2)*e,l=e/(Ln*2),c=(v,f)=>t?.15+.85*Ji(4.5,7,Math.hypot(v,f)):1,h=v=>v/e*Ln*2-Ln;i.fillStyle="#9b7c59",i.fillRect(0,0,e,e);for(let v=0;v<2600;v++){let f=r()*e,y=r()*e,b=(2+r()*16)*(e/1024),g=c(h(f),h(y));i.fillStyle=r()<.5?`rgba(70,48,28,${(.04+r()*.07)*g})`:`rgba(206,170,128,${(.04+r()*.07)*g})`,i.beginPath(),i.arc(f,y,b,0,Math.PI*2),i.fill()}let u=1.9,d=[166,140,108];for(let v=-Ln;v<Ln;v+=u)for(let f=-Ln;f<Ln;f+=u){let y=v+u/2+(r()-.5)*u*.5,b=f+u/2+(r()-.5)*u*.5;if(Bt({x:y,z:b},s.poly)<.2)continue;let g=Math.hypot(y,b)/s.radius,_=6+Math.floor(r()*2),S=u*(.42+r()*.1),w=r()*Math.PI;i.beginPath();for(let M=0;M<_;M++){let E=w+M/_*Math.PI*2+(r()-.5)*.35,A=S*(.85+r()*.3),D=o(y+Math.cos(E)*A),B=o(b+Math.sin(E)*A);M===0?i.moveTo(D,B):i.lineTo(D,B)}i.closePath(),i.fillStyle=tl(d,.88+r()*.22+(1-g)*-.03);let T=c(y,b);i.globalAlpha=(.42+g*.4)*T,i.fill(),i.globalAlpha=.5*T,i.strokeStyle="rgba(62,44,28,0.75)",i.lineWidth=2.2*(e/1024),i.stroke(),i.globalAlpha=1}for(let v=0;v<160;v++){let f=(r()*2-1)*s.radius,y=(r()*2-1)*s.radius;if(Bt({x:f,z:y},s.poly)<.6)continue;let b=(.08+r()*.16)*l,g=b*(.6+r()*.3),_=r()*3,S=tl([150,142,130],.8+r()*.4),w=r()*3;t&&Math.hypot(f,y)<6&&a()<.9||(i.fillStyle="rgba(40,28,18,0.35)",i.beginPath(),i.ellipse(o(f)+b*.25,o(y)+g*.45,b,g,_,0,Math.PI*2),i.fill(),i.fillStyle=S,i.beginPath(),i.ellipse(o(f),o(y),b,g,w,0,Math.PI*2),i.fill())}let p=[96,116,52],m=(v,f,y)=>{let b=5+Math.floor(r()*6);for(let g=0;g<b;g++){let _=(r()-.5)*y*2,S=(r()-.5)*y*2,w=(.07+r()*.2)*l;i.fillStyle=tl(p,.7+r()*.45),i.globalAlpha=.55+r()*.3,i.beginPath(),i.arc(o(v+_),o(f+S),w,0,Math.PI*2),i.fill()}i.globalAlpha=1};for(let v=0;v<2600;v++){let f=(r()*2-1)*s.radius*1.1,y=(r()*2-1)*s.radius*1.1,b=Bt({x:f,z:y},s.poly);if(b<0)continue;let g=b<2.6?Math.pow(1-b/2.6,1.4):.015;r()<g*.5&&m(f,y,.4)}for(let v of s.rocks){for(let f=0;f<22;f++){let y=r()*Math.PI*2,b=v.r*(.7+r()*.9);m(v.pos.x+Math.cos(y)*b,v.pos.z+Math.sin(y)*b,.35)}i.fillStyle="rgba(30,22,14,0.28)",i.beginPath(),i.arc(o(v.pos.x),o(v.pos.z),v.r*1.15*l,0,Math.PI*2),i.fill()}for(let v=0;v<70;v++){let f=(r()*2-1)*s.radius,y=(r()*2-1)*s.radius,b=Bt({x:f,z:y},s.poly);b<.4||b>3.2||(i.fillStyle="#f4f1e6",i.beginPath(),i.arc(o(f),o(y),.06*l,0,Math.PI*2),i.fill(),i.fillStyle="#e8c85a",i.beginPath(),i.arc(o(f),o(y),.025*l,0,Math.PI*2),i.fill())}i.save(),i.beginPath(),s.poly.forEach((v,f)=>f===0?i.moveTo(o(v.x),o(v.z)):i.lineTo(o(v.x),o(v.z))),i.closePath(),i.clip(),i.lineJoin="round";for(let[v,f]of[[1.4,.05],[1,.06],[.65,.08],[.35,.1]])i.strokeStyle=`rgba(34,24,14,${f})`,i.lineWidth=v*2*l,i.stroke();i.restore();let x=Ps(n);return x.anisotropy=8,x}function Hm(){let{c:e,g:t}=Is(256,256),n=$t(23);t.fillStyle="#c2bbb0",t.fillRect(0,0,256,256);for(let i=0;i<900;i++){let r=n()*256,a=n()*256,o=2+n()*14;t.fillStyle=n()<.5?`rgba(40,36,34,${.04+n()*.1})`:`rgba(210,200,185,${.03+n()*.08})`;for(let l of[-256,0,256])t.beginPath(),t.arc(r+l,a,o,0,Math.PI*2),t.fill()}for(let i=0;i<26;i++){let r=n()*256;t.strokeStyle=`rgba(30,26,24,${.16+n()*.2})`,t.lineWidth=1+n()*2,t.beginPath();let a=r;t.moveTo(a,0);for(let o=0;o<=256;o+=16)a+=(n()-.5)*5,t.lineTo(a,o);t.stroke()}return Ps(e,{repeat:!0})}function Nm(){let{c:e,g:t}=Is(512,512),n=$t(31);for(let i=0;i<70;i++){let r=n()*512,a=n()*512,o=30+n()*90;for(let l of[-512,0,512])for(let c of[-512,0,512]){let h=t.createRadialGradient(r+l,a+c,0,r+l,a+c,o);h.addColorStop(0,"rgba(255,255,255,0.28)"),h.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=h,t.fillRect(r+l-o,a+c-o,o*2,o*2)}}return Ps(e,{repeat:!0})}function Hh(){let{c:e,g:t}=Is(128,128),n=t.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,128,128),Ps(e)}function Bm(){let{c:t,g:n}=Is(256,64),i=n.createLinearGradient(0,0,256,0);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.65,"rgba(255,255,255,0.35)"),i.addColorStop(1,"rgba(255,255,255,1)");for(let a=0;a<64;a++){let o=Math.abs((a+.5)/64-.5)*2,l=Math.pow(1-o,1.6);n.globalAlpha=l,n.fillStyle=i,n.fillRect(0,a,256,1)}n.globalAlpha=1;let r=n.createLinearGradient(0,0,256,0);return r.addColorStop(.5,"rgba(255,255,255,0)"),r.addColorStop(1,"rgba(255,255,255,1)"),n.fillStyle=r,n.fillRect(0,64/2-4,256,8),Ps(t)}function Om(){let{c:t,g:n}=Is(256,64),i=n.createLinearGradient(0,0,256,0);return i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.8,"rgba(255,255,255,0.7)"),i.addColorStop(1,"rgba(255,255,255,1)"),n.fillStyle=i,n.globalAlpha=.28,n.beginPath(),n.moveTo(0,64/2),n.lineTo(256*.82,64/2-14),n.lineTo(256*.82,64/2+14),n.closePath(),n.fill(),n.globalAlpha=1,n.fillStyle=i,n.beginPath(),n.moveTo(0,64/2),n.lineTo(256*.84,64/2-4),n.lineTo(256*.84,64/2+4),n.closePath(),n.fill(),n.fillStyle="#fff",n.beginPath(),n.moveTo(254,64/2),n.lineTo(256*.78,64/2-22),n.lineTo(256*.83,64/2),n.lineTo(256*.78,64/2+22),n.closePath(),n.fill(),n.globalAlpha=.5,n.fillRect(256*.55,64/2-1.5,256*.3,3),Ps(t)}function Vm(s,e){let{c:t,g:n}=Is(e,e),i=$t(41),r=Ln,a=u=>(u+r)/(r*2)*e,o=e/(r*2);n.fillStyle="#e2d2b2",n.fillRect(0,0,e,e);for(let u=0;u<90;u++){let d=i()*e,p=i()*e,m=(40+i()*120)*(e/1024),x=n.createRadialGradient(d,p,0,d,p,m);x.addColorStop(0,i()<.5?"rgba(232,220,196,0.22)":"rgba(196,180,152,0.18)"),x.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=x,n.fillRect(d-m,p-m,m*2,m*2)}let l=Math.max(1.5,2.2*(e/1024)),c=-r;for(;c<r;){let u=1.6+i()*1,d=-r-i()*2;for(;d<r;){let p=1.8+i()*1.4,m=()=>(i()-.5)*.08,x=[[d+m(),c+m()],[d+p+m(),c+m()],[d+p+m(),c+u+m()],[d+m(),c+u+m()]],v=.93+i()*.11;if(n.beginPath(),x.forEach(([f,y],b)=>b===0?n.moveTo(a(f),a(y)):n.lineTo(a(f),a(y))),n.closePath(),n.fillStyle=tl([236,221,192],v),n.fill(),n.strokeStyle="rgba(255,248,232,0.35)",n.lineWidth=l*.8,n.beginPath(),n.moveTo(a(x[3][0]),a(x[3][1])),n.lineTo(a(x[0][0]),a(x[0][1])),n.lineTo(a(x[1][0]),a(x[1][1])),n.stroke(),n.strokeStyle="rgba(122,104,80,0.6)",n.lineWidth=l,n.beginPath(),x.forEach(([f,y],b)=>b===0?n.moveTo(a(f),a(y)):n.lineTo(a(f),a(y))),n.closePath(),n.stroke(),i()<.35){n.strokeStyle="rgba(110,94,72,0.45)",n.lineWidth=l*.55;let f=d+p*(.2+i()*.6),y=c+u*(.1+i()*.2);n.beginPath(),n.moveTo(a(f),a(y));for(let b=0;b<4;b++)f+=(i()-.5)*.5,y+=u*.2,n.lineTo(a(f),a(y));n.stroke()}if(i()<.2){let f=d+(i()<.5?0:p),y=c+(i()<.5?0:u),b=.18+i()*.2;n.fillStyle="rgba(150,132,104,0.45)",n.beginPath(),n.moveTo(a(f),a(y)),n.lineTo(a(f+(f===d?b:-b)),a(y)),n.lineTo(a(f),a(y+(y===c?b:-b))),n.closePath(),n.fill()}d+=p}c+=u}for(let u=0;u<1800;u++){let d=(i()*2-1)*s.radius*1.1,p=(i()*2-1)*s.radius*1.1,m=Bt({x:d,z:p},s.poly);if(m<0||m>1.3||i()>Math.pow(1-m/1.3,1.5)*.7)continue;let x=(.06+i()*.16)*o;n.fillStyle=tl([112,126,70],.75+i()*.4),n.globalAlpha=.6+i()*.3,n.beginPath(),n.arc(a(d),a(p),x,0,Math.PI*2),n.fill(),n.globalAlpha=1,i()<.12&&(n.fillStyle="#e8c44a",n.beginPath(),n.arc(a(d+.1),a(p),.05*o,0,Math.PI*2),n.fill())}for(let u of s.rocks)n.fillStyle="rgba(80,66,48,0.18)",n.beginPath(),n.arc(a(u.pos.x),a(u.pos.z),u.r*1.12*o,0,Math.PI*2),n.fill();n.save(),n.beginPath(),s.poly.forEach((u,d)=>d===0?n.moveTo(a(u.x),a(u.z)):n.lineTo(a(u.x),a(u.z))),n.closePath(),n.clip(),n.lineJoin="round";for(let[u,d]of[[.9,.05],[.5,.07],[.22,.09]])n.strokeStyle=`rgba(70,56,40,${d})`,n.lineWidth=u*2*o,n.stroke();n.restore();let h=Ps(t);return h.anisotropy=8,h}function Gm(){let{c:e,g:t}=Is(256,256),n=$t(43);t.fillStyle="#e9e1d0",t.fillRect(0,0,256,256);for(let i=0;i<18;i++){t.strokeStyle=`rgba(140,128,112,${.12+n()*.18})`,t.lineWidth=.8+n()*1.6;let r=n()*256,a=0;for(t.beginPath(),t.moveTo(r,a);a<256;)r+=(n()-.5)*18,a+=10+n()*20,t.lineTo(r,a);t.stroke()}for(let i=0;i<400;i++)t.fillStyle=`rgba(${n()<.5?"120,110,96":"255,250,240"},${.03+n()*.05})`,t.beginPath(),t.arc(n()*256,n()*256,2+n()*8,0,Math.PI*2),t.fill();return Ps(e,{repeat:!0})}var Bh=typeof location<"u"?new URLSearchParams(location.search):new URLSearchParams,Zd=Bh.get("art"),xt={myth:Zd==="myth",near:Bh.get("cam")==="near"};function Jd(s){return Zd==="myth"?!0:Zd==="base"?!1:s==="v4"||s==="s1"}var Nh=Bh.get("style"),On=Nh==="va"||Nh==="vb"||Nh==="vc"?Nh:"v0",Dr=Bh.get("bf")!=="0";pn();pn();pn();function nl(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Vt,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let m=0;m<p.count;++m)u.push(p.getX(m)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Wm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let x=0;x<a[h].length;++x)p.push(a[h][x][d]);let m=Wm(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function Wm(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new jn(a,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,p=h.count;d<p;d++)for(let m=0;m<t;m++){let x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Xm(s,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count,a=0,o=Object.keys(s.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let y=0,b=o.length;y<b;y++){let g=o[y],_=s.attributes[g];l[g]=new _.constructor(new _.array.constructor(_.count*_.itemSize),_.itemSize,_.normalized);let S=s.morphAttributes[g];S&&(c[g]||(c[g]=[]),S.forEach((w,T)=>{let M=new w.array.constructor(w.count*w.itemSize);c[g][T]=new w.constructor(M,w.itemSize,w.normalized)}))}let p=e*.5,m=Math.log10(1/e),x=Math.pow(10,m),v=p*x;for(let y=0;y<r;y++){let b=n?n.getX(y):y,g="";for(let _=0,S=o.length;_<S;_++){let w=o[_],T=s.getAttribute(w),M=T.itemSize;for(let E=0;E<M;E++)g+=`${~~(T[u[E]](b)*x+v)},`}if(g in t)h.push(t[g]);else{for(let _=0,S=o.length;_<S;_++){let w=o[_],T=s.getAttribute(w),M=s.morphAttributes[w],E=T.itemSize,A=l[w],D=c[w];for(let B=0;B<E;B++){let P=u[B],N=d[B];if(A[N](a,T[P](b)),M)for(let W=0,ne=M.length;W<ne;W++)D[W][N](a,M[W][P](b))}}t[g]=a,h.push(a),a++}}let f=s.clone();for(let y in s.attributes){let b=l[y];if(f.setAttribute(y,new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)),y in c)for(let g=0;g<c[y].length;g++){let _=c[y][g];f.morphAttributes[y][g]=new _.constructor(_.array.slice(0,a*_.itemSize),_.itemSize,_.normalized)}}return f.setIndex(h),f}function Oh(s){let e=s.length;return s.map((t,n)=>{let i=s[(n+e-1)%e],r=s[(n+1)%e],a=r.x-i.x,o=r.z-i.z,l=Math.hypot(a,o)||1,c=o/l,h=-a/l;return c*t.x+h*t.z<0&&(c=-c,h=-h),{x:c,z:h}})}function zi(s,e,t=0){let n=Oh(s),i=[],r=t;for(let a=0;a<s.length;a++){let o=s[a],l=s[(a+1)%s.length],c=n[a],h=n[(a+1)%s.length],u=Math.hypot(l.x-o.x,l.z-o.z);for(let d=(e-r%e)%e;d<u;d+=e){let p=d/u,m=c.x+(h.x-c.x)*p,x=c.z+(h.z-c.z)*p,v=Math.hypot(m,x)||1;i.push({x:o.x+(l.x-o.x)*p,z:o.z+(l.z-o.z)*p,nx:m/v,nz:x/v})}r+=u}return i}var ls={clay:"#c8692f",black:"#1b120e",white:"#efe6d2",purple:"#7a2438"};function il(s,e,t,n,i=n){s.beginPath(),s.moveTo(e,t+i),s.lineTo(e,t),s.lineTo(e+n*.78,t),s.lineTo(e+n*.78,t+i*.72),s.lineTo(e+n*.3,t+i*.72),s.lineTo(e+n*.3,t+i*.36),s.lineTo(e+n*.52,t+i*.36),s.moveTo(e,t+i),s.lineTo(e+n,t+i),s.stroke()}function qm(s=ls.clay,e=ls.black,t={w:480,key:84,keyH:84,step:96,lw:11}){let n=t.w,i=128,r=t.key,a=document.createElement("canvas");a.width=n,a.height=i;let o=a.getContext("2d");o.fillStyle=s,o.fillRect(0,0,n,i),o.fillStyle=e,o.fillRect(0,0,n,12),o.fillRect(0,i-12,n,12),o.strokeStyle=e,o.lineWidth=t.lw,o.lineCap="square",o.lineJoin="miter";for(let c=0;c<Math.round(n/t.step);c++)il(o,c*t.step+6,(i-t.keyH)/2,r,t.keyH);let l=new fn(a);return l.colorSpace=Mt,l.wrapS=En,l.anisotropy=4,l}function T_(s,e,t,n,i){s.save(),s.translate(e,t),s.scale(n,n),s.fillStyle=ls.black,s.strokeStyle=ls.black,s.lineCap="round",s.beginPath(),s.ellipse(0,0,40,18,0,0,Math.PI*2),s.fill(),s.beginPath(),s.ellipse(36,-10,14,12,.5,0,Math.PI*2),s.fill(),s.lineWidth=7;for(let[r,a]of[[-26,.5],[-16,-.4],[18,.5],[28,-.4]])s.beginPath(),s.moveTo(r,10),s.lineTo(r+Math.sin(a)*26,36),s.stroke();if(s.lineWidth=5,i===0)s.beginPath(),s.moveTo(40,-18),s.quadraticCurveTo(50,-36,62,-30),s.stroke();else if(i===1){s.beginPath(),s.moveTo(-36,-16);for(let r=0;r<6;r++)s.lineTo(-30+r*12,-26-r%2*8);s.lineTo(34,-16),s.fill()}else s.beginPath(),s.moveTo(34,-20),s.quadraticCurveTo(30,-44,14,-46),s.stroke();s.beginPath(),s.moveTo(-40,-4),s.quadraticCurveTo(-54,-14,-52,4),s.stroke(),s.strokeStyle=ls.clay,s.lineWidth=2.5,s.beginPath(),s.moveTo(-6,-14),s.quadraticCurveTo(-14,0,-4,14),s.stroke(),s.restore()}function w_(){let t=document.createElement("canvas");t.width=1024,t.height=512;let n=t.getContext("2d"),i=a=>512*(1-a);n.fillStyle=ls.clay,n.fillRect(0,0,1024,512),n.fillStyle=ls.black,n.fillRect(0,i(.08),1024,512*.08);for(let a=0;a<24;a++){let o=a/24*1024;n.beginPath(),n.moveTo(o,i(.08)),n.lineTo(o+1024/48,i(.21)),n.lineTo(o+1024/24,i(.08)),n.fill()}n.fillRect(0,i(.26),1024,512*.04);for(let a=0;a<6;a++)T_(n,(a+.5)*(1024/6),i(.38),1.25,a%3);n.fillRect(0,i(.53),1024,512*.03),n.strokeStyle=ls.black,n.lineWidth=6;for(let a=0;a<16;a++)il(n,a*64+6,i(.6)+3,28);n.fillRect(0,i(.64),1024,512*.04);for(let a=0;a<10;a++){let o=(a+.5)*102.4,l=i(.66);for(let c=-2;c<=2;c++)n.beginPath(),n.ellipse(o+c*9,l-34+Math.abs(c)*7,5,26-Math.abs(c)*5,c*.28,0,Math.PI*2),n.fill()}n.fillRect(0,0,1024,i(.8)),n.strokeStyle=ls.white,n.lineWidth=3;for(let a of[.86,.94])n.beginPath(),n.moveTo(0,i(a)),n.lineTo(1024,i(a)),n.stroke();n.strokeStyle=ls.purple,n.lineWidth=6,n.beginPath(),n.moveTo(0,i(.235)),n.lineTo(1024,i(.235)),n.stroke();let r=new fn(t);return r.colorSpace=Mt,r.anisotropy=4,r}function Ym(s,e){let t=new vr([new ve(.01,0),new ve(1.1,.05),new ve(.9,.6),new ve(1.7,1.6),new ve(2.7,3.6),new ve(2.9,5),new ve(2.5,6.5),new ve(1.5,7.6),new ve(1,8.3),new ve(1.05,9.3),new ve(1.5,9.7)]).getSpacedPoints(48),n=e(w_()),i=e(new Ht({map:n,emissive:3807756})),r=e(new Ft({color:1182216,side:Rn,fog:!1})),a=new Wt;a.name="bg-myth-vase";let o=Math.PI*2*.74;a.add(new De(e(new yr(t,40,.6,o)),i)),a.add(new De(e(new yr(t.map(l=>new ve(Math.max(.01,l.x-.08),l.y)),40,.6,o)),r));for(let l of[.9,.9+Math.PI]){let c=new De(e(new fi(1.2,.22,6,14,Math.PI)),r);c.position.set(Math.cos(l)*1.9,7.6,-Math.sin(l)*1.9),c.rotation.set(0,l,-Math.PI/2-.2),a.add(c)}for(let l=0;l<4;l++){let c=t.slice(14+l*7,24+l*7),h=new De(e(new yr(c,6,.6+o+.15+l*.32,.38)),i),u=.6+o+.35+l*.32;h.position.set(Math.cos(u)*(1.6+l*.7),.6+l*.5,-Math.sin(u)*(1.6+l*.7)),h.rotation.set(l*.3,l*.5,.2-l*.15),a.add(h)}a.scale.setScalar(1.15),a.position.set(-24,-15,-22),a.rotation.set(.15,2.4,.32),s.add(a)}function cs(s,e,t,n,i,r){let a=Oh(s),o=[],l=[],c=[],h=0,u=s.length;for(let p=0;p<=u;p++){let m=p%u,x=s[m],v=a[m];if(p>0){let f=s[(p-1)%u];h+=Math.hypot(x.x-f.x,x.z-f.z)}if(o.push(x.x+v.x*e,t,x.z+v.z*e,x.x+v.x*n,i,x.z+v.z*n),l.push(h/r,1,h/r,0),p<u){let f=p*2;c.push(f,f+1,f+2,f+1,f+3,f+2)}}let d=new Vt;return d.setAttribute("position",new mt(o,3)),d.setAttribute("uv",new mt(l,2)),d.setIndex(c),d.computeVertexNormals(),d}function kr(s){let e=[],t=new ht,n=new dn,i=new Yn;s((a,o,l,c,h,u,d,p=1,m=1,x=1)=>{n.setFromEuler(i.set(h,u,d)),t.compose(new F(o,l,c),n,new F(p,m,x));let v=a.index?a.toNonIndexed():a;v!==a&&a.dispose();for(let f of Object.keys(v.attributes))f!=="position"&&f!=="normal"&&v.deleteAttribute(f);e.push(v.applyMatrix4(t))});let r=nl(e,!1);for(let a of e)a.dispose();return r.computeVertexNormals(),r}var R_=()=>kr(s=>{s(new yi(1,1),0,1.9,0,0,0,0,.42,1.6,.42),s(new ut(.08,.1,.5,5),0,.25,0,0,0,0)});function Vh(s,e,t,n,i,r){let a=[],o=$t(61);for(let h of t){if(h.tier!==0)continue;let u=1+Math.floor(o()*2);for(let d=0;d<u;d++)a.push({x:h.x+(o()-.5)*h.w*.6,y:h.top+h.capH,z:h.z+(o()-.5)*h.w*.5,s:.55+o()*.35})}for(let h of n)for(let u=0;u<2;u++)a.push({x:h.x+(o()-.5)*h.s*1.4,y:h.y+h.s*.35,z:h.z+(o()-.5)*h.s,s:h.s*(.55+o()*.3)});a.push(...i);let l=new gn(e(R_()),e(new Ht({color:r})),a.length);l.name="bg-cypress";let c=new ht;a.forEach((h,u)=>{c.makeScale(h.s,h.s,h.s).setPosition(h.x,h.y,h.z),l.setMatrixAt(u,c)}),s.add(l)}var wt={glaze:2036761,sheen:473193,clay:14713396,clayShade:13132326,red:8470825,redHi:11683370,white:16638371,patina:5798995,patinaDark:4348214,bronze:5389600,gold:13411661},Ui=s=>"#"+s.toString(16).padStart(6,"0"),Ds=(s,e,t)=>{let n=new Ze(s),i=new Ze(e);return n.lerp(i,t).getHex()},Fr=s=>[(s>>16&255)/255,(s>>8&255)/255,(s&255)/255],Qd=wt.sheen,A_=Ds(wt.sheen,wt.glaze,.7),or={fog:Ds(Qd,wt.glaze,.5),skyFar:Fr(Qd),skyNear:Fr(A_),wall:{rock:Fr(Ds(wt.glaze,wt.sheen,.55)),moss:Fr(Ds(wt.glaze,wt.sheen,.4)),deep:Fr(Ds(wt.glaze,0,.5))},lip:Fr(Ds(wt.clayShade,wt.white,.3)),lights:{sky:7110848,ground:4860440,hemi:1,sun:16773340,sunK:2.4},column:Ds(wt.white,16777215,.35)},Lr=null;function Jm(){let i=document.createElement("canvas");i.width=512,i.height=128;let r=i.getContext("2d");for(let l=0;l<16;l++){let c=l*32-16,h=r.createLinearGradient(c,0,c+32,0);h.addColorStop(0,"#d9c7b0"),h.addColorStop(.5,"#ffffff"),h.addColorStop(1,"#d9c7b0"),r.fillStyle=h,r.fillRect(c,0,32,128)}let a=r.createLinearGradient(512-32/2,0,512+32/2,0);a.addColorStop(0,"#d9c7b0"),a.addColorStop(.5,"#ffffff"),a.addColorStop(1,"#d9c7b0"),r.fillStyle=a,r.fillRect(512-32/2,0,32/2,128),r.strokeStyle=Ui(wt.glaze),r.globalAlpha=.75,r.lineWidth=32*.16;for(let l=0;l<16;l++){let c=(l+.5)*32;r.beginPath(),r.moveTo(c,0),r.lineTo(c,128),r.stroke()}r.globalAlpha=1;let o=new fn(i);return o.colorSpace=Mt,o.wrapS=En,o.anisotropy=4,o}function Ho(){if(Lr)return Lr;let s=new Uint8Array([90,90,90,255,175,175,175,255,255,255,255,255]);return Lr=new is(s,3,1,ri),Lr.minFilter=Lr.magFilter=Un,Lr.needsUpdate=!0,Lr}var $m="vc/",zr=s=>window.__VC_ASSETS?.[s]??($m!==null?$m+s:void 0);function jd(s){let e=zr(s);if(!e)return Promise.resolve(null);let t=new Image;return t.src=e,t.decode().then(()=>t,()=>null)}function jm(s,e){let t=document.createElement("canvas");t.width=e,t.height=e;let n=t.getContext("2d"),i=new fn(t);return i.colorSpace=Mt,i.anisotropy=4,Km(n,s,e,null,null,null),(zr("vc-T1-ground.jpg")||zr("vc-T3-wave.png")||zr("vc-T4-sun.png"))&&Wh(Promise.all([jd("vc-T1-ground.jpg"),jd("vc-T3-wave.png"),jd("vc-T4-sun.png")]).then(([r,a,o])=>{Km(n,s,e,r,a,o),i.needsUpdate=!0})),i}function Km(s,e,t,n,i,r,a=!0){let o=$t(97),l=Ln,c=f=>(f+l)/(l*2)*t,h=t/(l*2),u=f=>{let[y,b,g]=Fr(wt.white).map(_=>Math.round(_*255));return`rgba(${y},${b},${g},${f})`};if(s.setTransform(1,0,0,1,0,0),s.globalAlpha=1,s.globalCompositeOperation="source-over",n){let f=s.createPattern(n,"repeat");f.setTransform(new DOMMatrix().scale(5*h/n.width)),s.fillStyle=f,s.fillRect(0,0,t,t),s.globalAlpha=.3,s.fillStyle=Ui(wt.clayShade),s.fillRect(0,0,t,t),s.globalAlpha=1}else{s.fillStyle=Ui(wt.clayShade),s.fillRect(0,0,t,t);let f=s.getImageData(0,0,t,t),y=f.data;for(let g=0;g<y.length;g+=4){let _=(o()-.5)*22;y[g]+=_,y[g+1]+=_*.8,y[g+2]+=_*.6}s.putImageData(f,0,0);let b=-l;for(;b<l;){let g=1.8+o()*1.4,_=-l-o()*2;for(;_<l;){let S=2+o()*1.8,w=Math.hypot(_+S/2,b+g/2),T=Math.min(.5,Math.max(.16,(w-1.5)/14)),M=[[_,b],[_+S,b+(o()-.5)*.3],[_+S+(o()-.5)*.3,b+g],[_+(o()-.5)*.3,b+g+(o()-.5)*.2]];s.lineJoin="round",s.strokeStyle=`rgba(232,160,96,${T*.7})`,s.lineWidth=.05*h,s.beginPath(),M.forEach(([E,A],D)=>D?s.lineTo(c(E)+2,c(A)+2):s.moveTo(c(E)+2,c(A)+2)),s.closePath(),s.stroke(),s.strokeStyle=`rgba(52,24,18,${T})`,s.lineWidth=.035*h,s.beginPath(),M.forEach(([E,A],D)=>D?s.lineTo(c(E),c(A)):s.moveTo(c(E),c(A))),s.closePath(),s.stroke(),_+=S}b+=g}}for(let f=0;f<12;f++){let y=o()*t,b=o()*t,g=(2.4+o()*3)*h,_=s.createRadialGradient(y,b,0,y,b,g);_.addColorStop(0,f%2?"rgba(236,150,74,0.18)":"rgba(120,52,24,0.2)"),_.addColorStop(1,"rgba(0,0,0,0)"),s.fillStyle=_,s.fillRect(y-g,b-g,g*2,g*2)}let d=P_(e),p=f=>{zi(e.poly,.3).forEach((b,g)=>g?s.lineTo(c(b.x-b.nx*f),c(b.z-b.nz*f)):s.moveTo(c(b.x-b.nx*f),c(b.z-b.nz*f))),s.closePath()};if(a){s.save(),s.beginPath(),p(sl),s.rect(c(-rl),c(-rl),2*rl*h,2*rl*h),s.clip("evenodd");for(let f of D_(e)){let y=c(f.x0),b=c(f.z0),g=(f.x1-f.x0)*h,_=(f.z1-f.z0)*h;f.tone>0?(s.fillStyle=`rgba(246,200,150,${f.tone})`,s.fillRect(y,b,g,_)):f.tone<0&&(s.fillStyle=`rgba(110,48,22,${-f.tone})`,s.fillRect(y,b,g,_));for(let[S,w,T]of f.wear){let M=s.createRadialGradient(c(S),c(w),0,c(S),c(w),T*h);M.addColorStop(0,"rgba(246,206,160,0.16)"),M.addColorStop(1,"rgba(246,206,160,0)"),s.save(),s.beginPath(),s.rect(y,b,g,_),s.clip(),s.fillStyle=M,s.fillRect(c(S)-T*h,c(w)-T*h,T*2*h,T*2*h),s.restore()}s.strokeStyle="rgba(255,220,176,0.2)",s.lineWidth=.025*h,s.beginPath(),s.moveTo(y+.03*h,b+_),s.lineTo(y+.03*h,b+.03*h),s.lineTo(y+g,b+.03*h),s.stroke(),s.strokeStyle="rgba(46,22,16,0.36)",s.lineWidth=.03*h,s.strokeRect(y,b,g,_)}s.restore()}{let f=(S,w,T)=>!!d&&Math.hypot(S-d.x,w-d.z)<d.r+T,y=(Gh+sl)/2,b=sl-Gh;s.strokeStyle=u(.62),s.lineWidth=.05*h,s.lineCap="butt";for(let S of[Gh+.04,sl-.04]){let w=zi(e.poly,.15).map(T=>({x:T.x-T.nx*S,z:T.z-T.nz*S}));s.beginPath(),w.forEach((T,M)=>{let E=w[(M+1)%w.length];f(T.x,T.z,.2)||f(E.x,E.z,.2)||(s.moveTo(c(T.x),c(T.z)),s.lineTo(c(E.x),c(E.z)))}),s.stroke()}s.strokeStyle=u(.62),s.lineWidth=.065*h,s.lineJoin="miter";let g=.6*h,_=b*.62*h;for(let S of zi(e.poly,.6)){let w=S.x-S.nx*y,T=S.z-S.nz*y;f(w,T,.5)||(s.save(),s.translate(c(w),c(T)),s.rotate(Math.atan2(S.nx,-S.nz)),il(s,-g/2,-_/2,g,_),s.restore())}}if(d&&r){s.globalAlpha=.55;let f=d.r*2*h;s.drawImage(r,c(d.x)-f/2,c(d.z)-f/2,f,f),s.globalAlpha=1}else if(d){let f=d.r/2.8;s.save(),s.translate(c(d.x),c(d.z)),s.scale(f,f),s.strokeStyle=u(.42),s.lineWidth=.16*h,s.beginPath(),s.arc(0,0,1.25*h,0,Math.PI*2),s.stroke(),s.fillStyle=u(.34);for(let y=0;y<16;y++){let b=y/16*Math.PI*2,g=1.5*h,_=(y%2?2.3:2.8)*h,S=.13;s.beginPath(),s.moveTo(Math.cos(b-S)*g,Math.sin(b-S)*g),s.lineTo(Math.cos(b)*_,Math.sin(b)*_),s.lineTo(Math.cos(b+S)*g,Math.sin(b+S)*g),s.closePath(),s.fill()}s.restore()}let m=zi(e.poly,1);s.strokeStyle="rgba(31,20,25,0.6)",s.lineCap="round";for(let f=0;f<7;f++){let y=m[Math.floor(o()*40)%m.length],b=y.x,g=y.z,_=-y.nx,S=-y.nz;s.lineWidth=.035*h,s.beginPath(),s.moveTo(c(b),c(g));let w=6+Math.floor(o()*6);for(let T=0;T<w;T++){let M=Math.atan2(S,_)+(o()-.5)*.9;_=Math.cos(M),S=Math.sin(M),b+=_*.5,g+=S*.5,s.lineTo(c(b),c(g))}s.stroke()}let x=zi(e.poly,.15).map(f=>({x:f.x-f.nx*1,z:f.z-f.nz*1,ang:Math.atan2(f.nx,-f.nz)})),v=.6*h;if(i){let y=i.width/i.height*.6;x.forEach((b,g)=>{let _=g*.15%y/y*i.width,S=.15/y*i.width;s.save(),s.translate(c(b.x),c(b.z)),s.rotate(b.ang),s.drawImage(i,_,0,Math.max(1,Math.min(S,i.width-_)),i.height,-.15*h*.5-.5,-v/2,.15*h+1,v),s.restore()})}else{s.strokeStyle=u(.9),s.lineWidth=v,s.lineJoin="round",s.beginPath(),x.forEach((b,g)=>g?s.lineTo(c(b.x),c(b.z)):s.moveTo(c(b.x),c(b.z))),s.closePath(),s.stroke(),s.strokeStyle=Ui(wt.clayShade),s.lineWidth=.08*h,s.lineCap="round";let f=1.05*h,y=v*.8;for(let b=0;b<x.length;b+=7){let g=x[b];s.save(),s.translate(c(g.x),c(g.z)),s.rotate(g.ang),s.beginPath(),s.moveTo(-f/2,y*.32),s.quadraticCurveTo(-f*.25,-y*.55,f*.1,-y*.32);for(let _=0;_<=26;_++){let S=_/26,w=-Math.PI/2+S*Math.PI*2.3,T=y*.32*(1-S*.8);s.lineTo(f*.1+Math.cos(w)*T,Math.sin(w)*T)}s.moveTo(f*.1,y*.32),s.lineTo(f/2,y*.32),s.stroke(),s.restore()}}for(let f of zi(e.poly,.7,o())){if(o()<.5)continue;let y=f.x-f.nx*(.25+o()*.25),b=f.z-f.nz*(.25+o()*.25);s.fillStyle=Ui(wt.redHi);for(let g=0;g<4;g++)s.beginPath(),s.arc(c(y+(o()-.5)*.25),c(b+(o()-.5)*.25),.04*h,0,Math.PI*2),s.fill()}s.globalCompositeOperation="saturation",s.globalAlpha=1-C_,s.fillStyle="#808080",s.fillRect(0,0,t,t),s.globalCompositeOperation="source-over",s.globalAlpha=1}var C_=.59,Qm=3.5;function I_(s,e){let t=Math.cos(e),n=Math.sin(e),i=0;for(;i<30&&Bt({x:t*i,z:n*i},s)>0;)i+=.05;return i}function P_(s){let t=Gh,n=null,i=-1/0;for(let r=0;r<72;r++){let a=r/72*Math.PI*2,o=I_(s.poly,a)-t-2.7;if(o<Qm+2.7)continue;let l={x:Math.cos(a)*o,z:Math.sin(a)*o};if(Bt(l,s.poly)<t+2.7-.05||(s.rocks??[]).some(h=>Math.hypot(l.x-h.pos.x,l.z-h.pos.z)<h.r+2.7))continue;let c=o-Math.sin(a)*.01;c>i&&(i=c,n={...l,r:2.7})}return n}function D_(s){let e=$t(131),t=1.4,n=rl,i=Ln,r=[],a=(l,c,h,u)=>{let d=e(),p=d<.2?.12+e()*.06:d<.45?-(.06+e()*.05):0,m=[];if(p>0)for(let x=0;x<2;x++)m.push([l+e()*(c-l),h+e()*(u-h),.35+e()*.3]);Bt({x:(l+c)/2,z:(h+u)/2},s.poly)>=sl&&r.push({x0:l,z0:h,x1:c,z1:u,tone:p,wear:m})},o=(l,c,h)=>{let u=Math.sign(c-l);for(let d=l;u*(c-d)>0;){let p=1.6+e()*.8,m=d+u*p;a(Math.min(d,m),Math.max(d,m),h,h+t),d=m}};for(let l=-n-Math.ceil((i-n)/t)*t;l<i;l+=t)l+t>-n+1e-6&&l<n-1e-6?(o(n,i,l),o(-n,-i,l)):o(-i-e()*2,i,l);return r}var sl=1.95,Gh=1.35,rl=Qm+.1;function k_(){let a=document.createElement("canvas");a.width=432,a.height=128;let o=a.getContext("2d");o.fillStyle=Ui(wt.glaze),o.fillRect(0,0,432,128),o.fillStyle=Ui(wt.clay),o.fillRect(0,10,432,5),o.fillRect(0,113,432,5),o.strokeStyle=Ui(wt.clay),o.lineWidth=15,o.lineCap="square",o.lineJoin="miter";let l=52/2;for(let d=0;d<3;d++)il(o,d*112+8,l,104,76);let c=346,h=76;o.lineWidth=9,o.strokeRect(c,l+2,h,72),o.beginPath(),o.moveTo(c+8,l+10),o.lineTo(c+h-8,l+76-10),o.moveTo(c+h-8,l+10),o.lineTo(c+8,l+76-10),o.stroke();let u=new fn(a);return u.colorSpace=Mt,u.wrapS=En,u.anisotropy=4,u}function L_(){let t=document.createElement("canvas");t.width=256,t.height=128;let n=t.getContext("2d");n.fillStyle=Ui(wt.clay),n.fillRect(0,0,256,128),n.fillStyle=Ui(wt.glaze),n.fillRect(0,0,256,6),n.fillRect(0,122,256,6);for(let r=0;r<8;r++){let a=r/8*256;n.beginPath(),n.moveTo(a+2,122),n.lineTo(a+256/16,14),n.lineTo(a+256/8-2,122),n.fill()}let i=new fn(t);return i.colorSpace=Mt,i.wrapS=En,i}var e0=new Va,t0=[];function Zm(s,e){let t=zr(s);!t&&location.protocol==="file:"||t0.push(e0.loadAsync(t??s).then(n=>{n.colorSpace=Mt,n.wrapS=En,n.anisotropy=4,e.map=n,e.visible=!0,e.needsUpdate=!0}).catch(()=>{}))}function Wh(s){t0.push(s.then(()=>{}))}function F_(s){let n=document.createElement("canvas");n.width=512,n.height=200;let i=n.getContext("2d"),r=$t(s),a=[];for(let h=0;h<7;h++)a.push([70+h*62+(r()-.5)*20,120-Math.sin(h/6*Math.PI)*40+(r()-.5)*16,46+r()*26]);let o=Ui(wt.gold);i.fillStyle=o;for(let[h,u,d]of a)i.beginPath(),i.arc(h,u,d,0,Math.PI*2),i.fill();i.fillRect(40,120,432,80),i.fillStyle=Ui(Ds(wt.sheen,wt.glaze,.25));for(let[h,u,d]of a)i.beginPath(),i.arc(h,u,d-5,0,Math.PI*2),i.fill();i.fillRect(45,125,422,80),i.strokeStyle=o,i.lineWidth=4,i.lineCap="round";for(let h=0;h<3;h++){let[u,d,p]=a[1+h*2];i.beginPath();for(let m=0;m<=40;m++){let x=m/40,v=x*Math.PI*3,f=p*.62*(1-x*.85);i.lineTo(u+Math.cos(v)*f,d+Math.sin(v)*f)}i.stroke()}let l=i.createLinearGradient(0,140,0,200);l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,1)"),i.globalCompositeOperation="destination-out",i.fillStyle=l,i.fillRect(0,140,512,60);let c=new fn(n);return c.colorSpace=Mt,c}var z_=()=>kr(s=>{s(new at(1,.22,.7),0,0,0,0,0,0)});function n0(s,e,t,n){let i=e.poly,r=h=>t(new rs({gradientMap:Ho(),...h})),a=new De(t(cs(i,-.14,.022,-.01,.022,1)),t(new Ft({color:wt.glaze,fog:!1,side:nn})));a.name="edge-ink",a.renderOrder=2,s.add(a);let o=new De(t(cs(i,.06,0,.06,-1,3.43)),r({map:t(k_()),side:nn}));if(o.name="edge-frieze",s.add(o),zr("vc-T2-cliff.jpg")){let h=r({side:nn,visible:!1});Zm("vc-T2-cliff.jpg",h);let u=new De(t(cs(i,.07,-1,.12,-4.2,3.2*(1748/512))),h);u.name="edge-frieze-figures",s.add(u)}else{let h=r({side:nn,visible:!1});Zm("vc-frieze-figures.png",h);let u=new De(t(cs(i,.07,-1,.09,-2.6,3.88)),h);u.name="edge-frieze-figures",s.add(u);let d=new De(t(cs(i,.09,-2.6,.1,-3.2,1.2)),r({map:t(L_()),side:nn}));d.name="edge-frieze-rays",s.add(d)}{let h=$t(83),u=zi(i,1.6,.3),d=new gn(t(z_()),r({color:16777215}),u.length);d.name="edge-shards";let p=new ht,m=new dn,x=new Yn,v=new Ze;u.forEach((f,y)=>{let b=.5+h()*.9,g=.6+h()*1.6;m.setFromEuler(x.set(h()*3,h()*3,h()*3)),p.compose(new F(f.x+f.nx*g,-5.5-h()*6,f.z+f.nz*g),m,new F(b,b,b)),d.setMatrixAt(y,p),d.setColorAt(y,v.setHex(y%3?wt.glaze:wt.clay))}),s.add(d)}let l=[1,2,3].map(h=>zr(`vc-T5-cloud-${h}.png`)),c=[510/256,273/256,364/256];for(let[h,u,d,p,m]of[[-18,-8,9,18,1],[-27,-11,0,20,2],[19,-8,9,18,3],[28,-11,0,20,4],[-31,-12,-14,22,5],[32,-12,-14,22,6],[0,-15,18,28,7],[-12,-6,-22,16,8]]){let x=m%3,v=l[x],f=v?c[x]:512/200,y=t(new si({map:v?null:t(F_(m)),transparent:!0,depthWrite:!1,fog:!1,visible:!v}));v&&Wh(e0.loadAsync(v).then(g=>{g.colorSpace=Mt,t(g),y.map=g,y.visible=!0,y.needsUpdate=!0}));let b=new xi(y);b.name="bg-cloud",b.position.set(h,u,d),b.scale.set(p,p/f,1),s.add(b)}{let h=new Wt;h.name="bg-myth-temple";let u=r({color:Ds(Qd,wt.glaze,.55)}),d=(m,x,v,f)=>{let y=new De(t(m),u);return y.position.set(x,v,f),h.add(y),y};d(new Sn(5,7,7),0,-3.6,0).rotation.x=Math.PI,d(new ut(5.1,5,.6,9),0,0,0);for(let m=0;m<6;m++)d(new ut(.28,.32,m%3===1?2.2:3.4,8),-3+m*1.2,m%3===1?1.4:2,.6);d(new at(4.2,.4,1.4),-1.6,3.9,.6);for(let m=0;m<4;m++)d(new at(.9,1.2+m%2*1.6,.9),1.6+m*.9,.9,-1.4);h.position.set(22,-11,-19),s.add(h);let p=new xi(t(new si({map:t(U_()),transparent:!0,depthWrite:!1,fog:!1})));p.name="bg-moon",p.position.set(25,-10.5,-29),p.scale.set(14,14,1),s.add(p)}Vh(s,t,n.pillars,n.islets,[{x:18.8,y:-10.7,z:-18.6,s:1.2},{x:25.6,y:-10.7,z:-19.4,s:1.4}],1054748)}function U_(){let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(64,64,6,64,64,64);t.addColorStop(0,"rgba(255,246,220,1)"),t.addColorStop(.16,"rgba(255,240,206,0.95)"),t.addColorStop(.2,"rgba(216,190,140,0.35)"),t.addColorStop(1,"rgba(216,190,140,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let n=new fn(s);return n.colorSpace=Mt,n}pn();var i0=new ht,s0=new dn,H_=new F,N_=new F;function Dt(s,e,t,n,i=0,r=0,a=0,o=1){return s0.setFromEuler(new Yn(i,r,a)),i0.compose(N_.set(e,t,n),s0,H_.set(o,o,o)),s.applyMatrix4(i0)}function ks(s,e,t,n){let i=s.map(o=>{let l=o.index?o.toNonIndexed():o;for(let c of Object.keys(l.attributes))c!=="position"&&c!=="normal"&&l.deleteAttribute(c);return l}),r=t(nl(i,!1));r.computeVertexNormals();for(let o of s)o.dispose();let a=new De(r,e);return a.name=n,a.castShadow=!0,a.receiveShadow=!0,a}var Xh={athena:10406399,hermes:16765786,poseidon:6222032},ef={athena:{fill:["M12 2.5l7.5 2.8v6.2c0 4.5-3 8-7.5 10-4.5-2-7.5-5.5-7.5-10V5.3z"],inner:["M12 6.5v11M7.5 11h9"]},hermes:{fill:["M5 9h6v6h6.5a2.5 2.5 0 0 1 2.5 2.5V19H5z"],stroke:["M11 7.5c1.8-3.2 5-4.2 9-3.2-2.5.8-3.8 2-4.5 3.8M11 9c1.5-2.2 3.8-3 6.5-2.5"]},poseidon:{stroke:["M12 21.5V6.5M5 4.5v4.5a7 7 0 0 0 14 0V4.5M12 2.5L10.2 5.5M12 2.5l1.8 3M5 4.5L3.5 6.8M5 4.5l1.5 2.3M19 4.5l-1.5 2.3M19 4.5l1.5 2.3"]}},o0=.35,a0=(()=>{let s=e=>'<svg viewBox="0 0 24 24">'+(e.fill??[]).map(t=>`<path d="${t}" fill="currentColor"/>`).join("")+(e.stroke??[]).map(t=>`<path d="${t}" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>`).join("")+(e.inner??[]).map(t=>`<path d="${t}" fill="none" stroke="#0b1a2b" stroke-width="1.8" stroke-linecap="round"/>`).join("")+"</svg>";return{athena:{text:"\u96C5\u5178\u5A1C",color:Xh.athena,svg:s(ef.athena),front:.55},hermes:{text:"\u8D6B\u8033\u58A8\u65AF",color:Xh.hermes,svg:s(ef.hermes),front:.55},poseidon:{text:"\u6CE2\u8CFD\u9813",color:Xh.poseidon,svg:s(ef.poseidon),front:.55},convert:{text:"\u6230\u795E\u796D\u58C7",color:16747098,svg:s({stroke:["M5 5l14 14M19 5L5 19M3.5 8.5l5-5M15.5 20.5l5-5"]}),front:.8},revive:{text:"\u5361\u620E\u7684\u5C0F\u8239",color:10479871,svg:s({fill:["M2.5 14h19l-3.5 5.5H6z"],stroke:["M12 3.5v10.5M12 4.5l5.5 7H12"]}),front:0}}})(),Ce=.6,je=(s,e,t)=>new F(s,e,t),B_=new F(0,1,0);function Vn(s,e,t,n,i=6){let r=new ut(n,t,s.distanceTo(e),i,1),a=new dn().setFromUnitVectors(B_,e.clone().sub(s).normalize());return r.applyMatrix4(new ht().compose(s.clone().add(e).multiplyScalar(.5),a,je(1,1,1)))}var Hi=(s,e,t=1,n=1,i=1)=>new yi(e,1).applyMatrix4(new ht().compose(s,new dn,je(t,n,i)));function tf(){let s=(e,t,n,i)=>Dt(new ut(e,t,n,8),0,i,0,0,Math.PI/8,0);return[s(.66,.72,.24,.12),s(.58,.62,.2,.34),s(.5,.54,.16,.52)]}function nf(s){let e=s.broad??1,t=s.chest.clone().lerp(s.head,.45),n=(i,r=.16)=>Dt(new at(.3,.09,.13),i.x+r*.5,i.y-.05,i.z);return[Dt(new at(.34,.3,.42*e),s.pelvis.x,s.pelvis.y,s.pelvis.z),Vn(s.pelvis,s.chest,.2*e,.27*e,7),Dt(new at(.34,.36,.66*e),s.chest.x,s.chest.y-.02,s.chest.z),Vn(s.chest,t,.09,.08,6),Hi(s.head,s.headR,.95,1.12,.9),Vn(s.shL,s.elL,.085*e,.07*e),Vn(s.elL,s.haL,.07*e,.055),Vn(s.shR,s.elR,.085*e,.07*e),Vn(s.elR,s.haR,.07*e,.055),Hi(s.shL,.11*e),Hi(s.shR,.11*e),Hi(s.haL,.075),Hi(s.haR,.075),Vn(s.hipL,s.knL,.13,.095),Vn(s.knL,s.anL,.095,.065),Vn(s.hipR,s.knR,.13,.095),Vn(s.knR,s.anR,.095,.065),n(s.anL),n(s.anR)]}var qh=(s,e,t,n,i,r=0,a=9)=>Dt(new ut(n,i,e-t,a,1),s,(e+t)/2,r);function O_(){let s={pelvis:je(0,Ce+1.75,0),chest:je(.02,Ce+2.42,0),head:je(.04,Ce+2.98,0),headR:.21,shL:je(0,Ce+2.62,-.36),elL:je(.2,Ce+2.2,-.5),haL:je(.36,Ce+2.05,-.42),shR:je(0,Ce+2.62,.36),elR:je(.14,Ce+2.28,.52),haR:je(.3,Ce+2.42,.56),hipL:je(0,Ce+1.65,-.13),knL:je(.04,Ce+.9,-.15),anL:je(.02,Ce+.1,-.16),hipR:je(0,Ce+1.65,.13),knR:je(.08,Ce+.9,.16),anR:je(.1,Ce+.1,.17)},e=[...tf(),...nf(s),qh(0,Ce+1.95,Ce+.12,.3,.56),qh(.01,Ce+2.5,Ce+1.7,.27,.36,0,8),Hi(je(.03,Ce+3.04,0),.24,1,.95,.95),Dt(new at(.06,.26,.34),.25,Ce+2.94,0),Vn(je(.3,Ce+.05,.56),je(.3,Ce+3.75,.56),.035,.035),Dt(new ut(.62,.62,.08,14),.5,Ce+1.95,-.5,0,0,Math.PI/2)],t=[Dt(new ut(.46,.46,.08,10,1,!1,0,Math.PI),-.04,Ce+3.18,0,Math.PI/2,0,0),Dt(new Qs(.16),.3,Ce+3.95,.56).scale(1,1,1),Dt(new ut(.5,.5,.06,14),.55,Ce+1.95,-.5,0,0,Math.PI/2),Hi(je(.6,Ce+1.95,-.5),.1)];return{body:e,accent:t}}function V_(){let s={pelvis:je(0,Ce+1.85,0),chest:je(.24,Ce+2.45,0),head:je(.38,Ce+2.95,0),headR:.2,shL:je(.2,Ce+2.62,-.35),elL:je(-.12,Ce+2.4,-.5),haL:je(-.38,Ce+2.3,-.56),shR:je(.26,Ce+2.62,.35),elR:je(.5,Ce+2.82,.44),haR:je(.66,Ce+3.08,.44),hipL:je(.02,Ce+1.76,-.13),knL:je(.5,Ce+1.55,-.14),anL:je(.42,Ce+.98,-.14),hipR:je(-.02,Ce+1.76,.13),knR:je(-.22,Ce+1.08,.14),anR:je(-.4,Ce+.62,.14)},e=new yi(.42,0),t=e.getAttribute("position");for(let o=0;o<t.count;o++)t.setY(o,t.getY(o)*.75);let n=[...nf(s),Dt(e,-.32,Ce+.28,.12),qh(.06,Ce+2.05,Ce+1.6,.27,.38,0,8),Dt(new at(.06,.75,.2),.3,Ce+2.25,0,0,0,.9),Dt(new at(.05,.22,.75),-.45,Ce+2.05,-.3,.2,.5,.25),Dt(new at(.05,.18,.6),-.85,Ce+2.15,-.45,.1,.4,.35)],i=(o,l,c,h,u)=>[Dt(new at(.05,.26*u,.1*u),o-.04,l+.06*u,c+h*.08*u,h*.9,0,-.5),Dt(new at(.05,.2*u,.09*u),o-.1,l+.04*u,c+h*.13*u,h*1.2,0,-.6)],r=[Hi(je(.39,Ce+3.08,0),.21,1,.7,1),Dt(new ut(.3,.3,.04,10),.39,Ce+3.02,0),...i(.36,Ce+3.08,.2,1,1.4),...i(.36,Ce+3.08,-.2,-1,1.4),Vn(je(.66,Ce+2.35,.44),je(.66,Ce+3.85,.44),.032,.032),Hi(je(.66,Ce+3.9,.44),.08),...i(.66,Ce+3.72,.5,1,1.5),...i(.66,Ce+3.72,.38,-1,1.5),Dt(new fi(.09,.025,4,8),.66,Ce+3.3,.44,Math.PI/2,0,0),Dt(new fi(.09,.025,4,8),.66,Ce+3.05,.44,Math.PI/2,0,0),...i(s.anL.x,s.anL.y,s.anL.z-.08,-1,1.3),...i(s.anR.x,s.anR.y,s.anR.z+.08,1,1.3),Dt(new at(.2,.05,.15),s.anL.x+.04,s.anL.y-.02,s.anL.z),Dt(new at(.2,.05,.15),s.anR.x+.04,s.anR.y-.02,s.anR.z)],a=new ht().makeRotationY(-1.22);for(let o of[...n,...r])o.applyMatrix4(a);return{body:[...tf(),...n],accent:r}}function G_(){let s={pelvis:je(0,Ce+1.78,0),chest:je(.02,Ce+2.45,0),head:je(.05,Ce+3.02,0),headR:.22,broad:1.18,shL:je(0,Ce+2.66,-.44),elL:je(.04,Ce+2.2,-.56),haL:je(.08,Ce+1.75,-.56),shR:je(0,Ce+2.66,.44),elR:je(.14,Ce+2.26,.6),haR:je(.26,Ce+2.45,.62),hipL:je(0,Ce+1.68,-.14),knL:je(.04,Ce+.92,-.16),anL:je(.04,Ce+.1,-.18),hipR:je(0,Ce+1.68,.14),knR:je(.06,Ce+.92,.17),anR:je(.08,Ce+.1,.19)},e=[...tf(),...nf(s),qh(0,Ce+1.9,Ce+.12,.33,.58),Hi(s.haL,.1),Dt(new Sn(.17,.48,6),.17,Ce+2.76,0,Math.PI,0,0),Hi(je(-.08,Ce+2.95,0),.22,.8,1.2,1.05),Vn(je(.28,Ce+.05,.62),je(.28,Ce+3.5,.62),.04,.04)],t=[Dt(new ut(.24,.25,.1,9),.05,Ce+3.17,0),...[0,1,2,3,4].map(n=>{let i=n/5*Math.PI*2;return Dt(new Sn(.05,.24,4),.05+Math.cos(i)*.21,Ce+3.32,Math.sin(i)*.21)}),Dt(new at(.09,.09,.72),.28,Ce+3.52,.62),Vn(je(.28,Ce+3.52,.28),je(.28,Ce+3.95,.28),.04,.02),Vn(je(.28,Ce+3.52,.62),je(.28,Ce+4.08,.62),.05,.02),Vn(je(.28,Ce+3.52,.96),je(.28,Ce+3.95,.96),.04,.02),Dt(new Qs(.09),.28,Ce+3.3,.62)];return{body:e,accent:t}}function W_(){let e=document.createElement("canvas");e.width=512,e.height=512;let t=e.getContext("2d"),n=512/2,i=(o,l,c)=>{t.beginPath(),t.arc(n,n,l,0,Math.PI*2),t.arc(n,n,o,0,Math.PI*2,!0),t.fillStyle=c,t.fill("evenodd")};t.fillStyle="#e6d6b6",t.fillRect(0,0,512,512),i(n*.9,n*.98,"#b98a52"),i(n*.84,n*.9,"#efe2c6"),i(n*.78,n*.84,"#9a6a3c");for(let o=0;o<48;o++){let l=o/48*Math.PI*2;t.save(),t.translate(n+Math.cos(l)*n*.94,n+Math.sin(l)*n*.94),t.rotate(l),t.fillStyle=o%2?"#7d5530":"#d9b67a",t.fillRect(-6,-6,12,12),t.restore()}i(n*.5,n*.78,"rgba(226,208,176,0.55)"),i(n*.46,n*.5,"#9a6a3c");let r=(o,l,c,h,u)=>{t.beginPath();for(let d=0;d<c*2;d++){let p=h+d/(c*2)*Math.PI*2,m=d%2?o:l;t.lineTo(n+Math.cos(p)*m,n+Math.sin(p)*m)}t.closePath(),t.fillStyle=u,t.fill()};r(n*.16,n*.44,8,-Math.PI/2,"#c9965a"),r(n*.12,n*.34,4,-Math.PI/2,"#efe2c6"),i(0,n*.09,"#7d5530");let a=new fn(e);return a.colorSpace=Mt,a.anisotropy=4,a}function r0(s,e){let t={at:s[0],n:{x:1,z:0},t:{x:0,z:1}},n=1/0;for(let i=0;i<s.length;i++){let r=s[i],a=s[(i+1)%s.length],o=a.x-r.x,l=a.z-r.z,c=o*o+l*l,h=c?Math.max(0,Math.min(1,((e.x-r.x)*o+(e.z-r.z)*l)/c)):0,u={x:r.x+o*h,z:r.z+l*h},d=Math.hypot(u.x-e.x,u.z-e.z);if(d<n){n=d;let p=Math.sqrt(c)||1;t={at:u,n:{x:l/p,z:-o/p},t:{x:o/p,z:l/p}}}}return t.n.x*t.at.x+t.n.z*t.at.z<0&&(t.n={x:-t.n.x,z:-t.n.z}),t}function l0(s,e,t,n){let i=new Map,r=t(new Ht({map:n,color:15920352})),a=A=>t(new Ht({map:n,color:A})),o=a(6965808),l=a(2762546),c=a(12617792),h=a(11544606),u=t(new Ft({color:16756810,fog:!1})),d=t(new Ft({color:10479871,fog:!1})),p=null;for(let A of e.spots??[]){let D=new Wt;if(D.position.set(A.pos.x,0,A.pos.z),D.rotation.y=-A.facing,A.kind==="athena"||A.kind==="hermes"||A.kind==="poseidon"){let B=A.kind==="athena"?O_():A.kind==="hermes"?V_():G_();D.add(ks(B.body,r,t,`statue-${A.kind}-mesh`)),D.add(ks(B.accent,a(Xh[A.kind]),t,`statue-${A.kind}-accent`)),D.name=`statue-${A.kind}`}else if(A.kind==="convert"){D.add(ks([Dt(new at(1,.85,.75),0,.425,0),Dt(new at(1.15,.1,.9),0,.9,0)],r,t,"altar-convert-stone")),D.add(ks([Dt(new ut(.32,.18,.22,10),0,1.06,0)],c,t,"altar-convert-bowl"));let B=new De(t(new Sn(.2,.5,6)),u);B.position.set(0,1.4,0),B.name="altar-convert-fire",D.add(B),D.add(ks([Dt(new ut(.03,.03,2.3,5),-.45,1.15,0,.5,0,0),Dt(new ut(.03,.03,2.3,5),-.45,1.15,0,-.5,0,0),Dt(new ut(.03,.03,2.4,5),-.6,1.2,.55)],o,t,"altar-convert-spears"));let P=new De(t(new at(.55,.85,.03)),h);P.position.set(-.6,1.85,.27),P.rotation.y=Math.PI/2,P.name="altar-convert-banner",D.add(P),D.name="altar-convert"}else if(A.kind==="revive"){let B=r0(e.poly,A.pos),P=B.t.z<=0?B.t:{x:-B.t.x,z:-B.t.z},N=r0(e.poly,{x:A.pos.x+B.n.x*2+P.x*1.5,z:A.pos.z+B.n.z*2+P.z*1.5}),W=N.t.z<=0?N.t:{x:-N.t.x,z:-N.t.z},ne={x:N.at.x+N.n.x*.55,z:N.at.z+N.n.z*.55},q=ne.x-A.pos.x,se=ne.z-A.pos.z,ue=Math.hypot(q,se)||1,pe=q/ue,He=se/ue,ot=-Math.atan2(He,pe),Ne=[];for(let nt=.12;nt<ue;nt+=.27)Ne.push(Dt(new at(.22,.05,1.05),A.pos.x+pe*nt,.035,A.pos.z+He*nt,0,ot,0));for(let nt of[-1,1])Ne.push(Dt(new at(ue,.07,.08),A.pos.x+pe*ue/2-He*nt*.5,.03,A.pos.z+He*ue/2+pe*nt*.5,0,ot,0));for(let nt of[-1,1])Ne.push(Vn(je(ne.x-He*nt*.42,.02,ne.z+pe*nt*.42),je(ne.x-He*nt*.42,-1.6,ne.z+pe*nt*.42),.07,.06));let Ye=ks(Ne,o,t,"altar-revive-dock");s.add(Ye);let ie={x:A.pos.x-He*.45,z:A.pos.z+pe*.45},K={x:N.at.x+N.n.x*.85+W.x*1,z:N.at.z+N.n.z*.85+W.z*1},ye={x:K.x-W.x*1.35,z:K.z-W.z*1.35};s.add(ks([Vn(je(ie.x,0,ie.z),je(ie.x,.5,ie.z),.1,.09,8),Hi(je(ie.x,.52,ie.z),.12,1,.6,1),Vn(je(ie.x,.42,ie.z),je(ye.x,.25,ye.z),.02,.02,4)],l,t,"altar-revive-bollard")),D.position.set(K.x,0,K.z),D.rotation.y=-Math.atan2(-W.z,-W.x);let Te=new at(2.7,.42,1,6,1,1),me=Te.getAttribute("position");for(let nt=0;nt<me.count;nt++){let z=me.getX(nt),lt=me.getY(nt),Ke=me.getZ(nt),Xe=Math.abs(z)/1.35;me.setXYZ(nt,z,lt+Xe*Xe*.35,Ke*(1-Xe*Xe*.85)*(lt<0?.7:1))}D.add(ks([Dt(Te,0,-.3,0)],o,t,"altar-revive-hull")),D.add(ks([Dt(new Sn(.32,1.45,7),-.55,.6,0),Dt(new Dn(.17,8,6),-.55,1.3,0),Dt(new ut(.025,.025,1.9,5),-.15,.8,0)],l,t,"altar-revive-charon"));let $e=new De(t(new Dn(.11,8,6)),d);$e.position.set(-.15,1.8,0),$e.name="altar-revive-lantern",D.add($e),D.name="altar-revive",p=N.at}s.add(D),i.set(A.kind,D)}let m=new De(t(new js(3.4,64).rotateX(-Math.PI/2)),t(new Ht({map:t(W_()),polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})));m.position.set(0,.012,0),m.receiveShadow=!0,m.name="altar-mosaic",s.add(m);let x=[],v=e.poly,f=v.map((A,D)=>{let B=v[(D+1)%v.length];return Math.hypot(B.x-A.x,B.z-A.z)}),y=f.reduce((A,D)=>A+D,0),b=Math.max(8,Math.round(y/1.05));for(let A=0,D=0,B=0;A<b;A++){let P=A/b*y;for(;B+f[D]<P;)B+=f[D],D++;let N=v[D],W=v[(D+1)%v.length],ne=(P-B)/(f[D]||1),q={x:N.x+(W.x-N.x)*ne,z:N.z+(W.z-N.z)*ne},se=Math.hypot(q.x,q.z)||1;x.push({x:q.x-q.x/se*.3,z:q.z-q.z/se*.3})}let g=p,_=x.map(A=>!g||Math.hypot(A.x-g.x,A.z-g.z)>1),S=.62,w=.6,T=new De(new Vt,r);T.name="altar-rail",T.castShadow=!0,T.receiveShadow=!0;let M=null,E=()=>{let A=[];for(let P=0;P<x.length;P++){let N=x[P],W=x[(P+1)%x.length];if(_[P]&&A.push(Dt(new at(.13,S,.13),N.x,S/2,N.z)),_[P]&&_[(P+1)%x.length]){let ne=Math.hypot(W.x-N.x,W.z-N.z);A.push(Dt(new at(ne,.09,.15),(N.x+W.x)/2,w,(N.z+W.z)/2,0,-Math.atan2(W.z-N.z,W.x-N.x),0))}}let D=A.map(P=>{let N=P.toNonIndexed();P.dispose();for(let W of Object.keys(N.attributes))W!=="position"&&W!=="normal"&&N.deleteAttribute(W);return N}),B=nl(D,!1);for(let P of D)P.dispose();M?.dispose(),M=B,T.geometry=B};return E(),s.add(T),t({dispose:()=>M?.dispose()}),{spots:i,mosaic:m,rail:[T],railPosts:()=>_.filter(Boolean).length,openRailAt(A,D){let B=!1;for(let P=0;P<x.length;P++)_[P]&&Math.hypot(x[P].x-A.x,x[P].z-A.z)<D&&(_[P]=!1,B=!0);B&&E()}}}function c0(s,e){return(s.spots??[]).some(t=>Math.hypot(t.pos.x-e.pos.x,t.pos.z-e.pos.z)<Math.max(.3,e.r*.5))}pn();var Fn=On==="va"||On==="vb"||On==="vc",mi=On==="vb",Ls=On==="vc",X_={va:{skyFar:[.27,.32,.44],skyNear:[.17,.21,.3],fog:3950430,ground:"#7f8f82",blobs:["rgba(98,118,66,0.42)","rgba(160,168,152,0.32)","rgba(84,100,104,0.3)"],stone:"#a2a89e",ink:"#2a2622",lip:10133656,lipStone:[.68,.7,.65],rock:[.42,.43,.42],moss:[.33,.38,.27],deep:[.12,.14,.2],drip:[7238780,6252144,8159880],vine:[11883822,10107952,4086334,7307078],bloom:[15525588,14184506,12603466],cloud:["rgba(184,192,208,","rgba(104,116,140,"],giant:12237232},vb:{skyFar:[.3,.22,.58],skyNear:[.14,.03,.18],fog:3021898,ground:"#9686ae",blobs:["rgba(244,168,112,0.42)","rgba(190,210,80,0.26)","rgba(90,70,170,0.30)"],stone:"#b8a6cc",ink:"#1a1020",lip:13153500,lipStone:[.86,.78,.92],rock:[.52,.38,.56],moss:[.36,.42,.62],deep:[.12,.05,.18],drip:[11559066,6969520,9063050],vine:[],bloom:[],cloud:["rgba(240,190,230,","rgba(150,100,180,"],giant:13667e3}},Ni=()=>X_[mi?"vb":"va"],u0=()=>Ls?or.fog:Ni().fog,d0=()=>Ls?or.wall:{rock:Ni().rock,moss:Ni().moss,deep:Ni().deep},f0=()=>Ls?or.lights:mi?null:{sky:14213358,ground:5919814,hemi:1.25,sun:16773336,sunK:2.5},p0=()=>Ls?or.lip:Ni().lipStone,m0=()=>Ls?or.column:mi?14728392:10922658,h0=s=>`vec3(${s.map(e=>e.toFixed(3)).join(",")})`,sf=s=>`mix(${h0(Ls?or.skyFar:Ni().skyFar)}, ${h0(Ls?or.skyNear:Ni().skyNear)}, smoothstep(-30.0, 20.0, ${s}))`;function g0(s,e){if(Ls)return jm(s,e);let t=Ni(),n=document.createElement("canvas");n.width=e,n.height=e;let i=n.getContext("2d"),r=$t(91),a=Ln,o=u=>(u+a)/(a*2)*e,l=e/(a*2);i.fillStyle=t.ground,i.fillRect(0,0,e,e);for(let u=0;u<16;u++){let d=r()*e,p=r()*e,m=(2.6+r()*3.6)*l,x=i.createRadialGradient(d,p,0,d,p,m);x.addColorStop(0,t.blobs[u%t.blobs.length]),x.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=x,i.fillRect(d-m,p-m,m*2,m*2)}let c=(u,d,p,m,x,v)=>{i.save(),i.translate(o(u),o(d)),i.rotate(r()*Math.PI),i.beginPath();for(let f=0;f<m;f++){let y=f/m*Math.PI*2,b=p*(.8+r()*.3);i.lineTo(Math.cos(y)*b*1.3,Math.sin(y)*b)}i.closePath(),i.fillStyle=x,i.fill(),v>0&&(i.strokeStyle=t.ink,i.lineWidth=.04*l,i.globalAlpha=v,i.stroke(),i.globalAlpha=1),i.restore()};if(!mi){let u=-a;for(;u<a;){let d=1.6+r()*1,p=-a-r()*2;for(;p<a;){let m=1.8+r()*1.4,x=Math.hypot(p+m/2,u+d/2);i.strokeStyle=t.ink,i.globalAlpha=Math.min(.22,Math.max(.08,(x-2)/25)),i.lineWidth=.04*l,i.lineJoin="round",i.beginPath(),i.moveTo(o(p)+3,o(u)+3),i.lineTo(o(p+m)-3+(r()-.5)*6,o(u)+3),i.lineTo(o(p+m)-3,o(u+d)-3+(r()-.5)*6),i.lineTo(o(p)+3+(r()-.5)*6,o(u+d)-3),i.closePath(),i.stroke(),i.globalAlpha=1,p+=m}u+=d}}for(let[u,d,p]of[[.32,.62,.3],[.78,.9,.24],[1.18,1.4,.18]])for(let m of zi(s.poly,d,r()*d))!mi&&r()<.35||c(m.x-m.nx*(u+(r()-.5)*.2),m.z-m.nz*(u+(r()-.5)*.2),(p*(mi?1:.7+r()*.7)+r()*.1)*l,mi?9:6,t.stone,u<1?.8:.45);let h=new fn(n);return h.colorSpace=Mt,h.anisotropy=4,h}function q_(s){let e=Ni(),t=256,n=64,i=document.createElement("canvas");i.width=t,i.height=n;let r=i.getContext("2d"),a=$t(13);r.fillStyle=s,r.fillRect(0,0,t,n),r.fillStyle="rgba(255,255,255,0.16)",r.fillRect(0,0,t,9),r.strokeStyle=e.ink,r.lineWidth=3,r.beginPath(),r.moveTo(0,2),r.lineTo(t,2),r.moveTo(0,n-2),r.lineTo(t,n-2),r.stroke();let o=0;for(;o<t;){let c=36+a()*30;r.beginPath(),r.moveTo(o,2),r.lineTo(o+(a()-.5)*6,n-2),r.stroke(),o+=c}r.fillStyle="rgba(96,116,66,0.45)";for(let c=0;c<5;c++)r.beginPath(),r.ellipse(a()*t,8+a()*10,12+a()*10,4,0,0,Math.PI*2),r.fill();let l=new fn(i);return l.colorSpace=Mt,l.wrapS=En,l}function Y_(s,e,t,n){let i=Oh(s),r=s.length,a=8,o=[],l=[];for(let h=0;h<=r;h++){let u=s[h%r],d=i[h%r];for(let p=0;p<=a;p++){let m=p/a*Math.PI*2,x=n+Math.cos(m)*e;o.push(u.x+d.x*x,t+Math.sin(m)*e,u.z+d.z*x)}if(h<r)for(let p=0;p<a;p++){let m=h*(a+1)+p,x=m+a+1;l.push(m,x,m+1,m+1,x,x+1)}}let c=new Vt;return c.setAttribute("position",new mt(o,3)),c.setIndex(l),c.computeVertexNormals(),c}var $_=()=>kr(s=>{for(let e=0;e<3;e++){let t=(e-1)*.14,n=.7+e%2*.35;s(new ut(.025,.035,n,4),t,-n/2,.02,.12,0,(e-1)*.18),s(new Qs(.11,0),t*1.3,-n*.55,.05,0,0,0,1.3,.6,.4)}}),K_=()=>kr(s=>{s(new yi(.13,0),0,0,0,0,0,0);for(let e=0;e<5;e++){let t=e/5*Math.PI*2;s(new yi(.075,0),Math.cos(t)*.14,Math.sin(t)*.14,.02,0,0,0)}}),Z_=()=>kr(s=>{s(new Sn(.45,1,mi?7:5),0,-.5,0,Math.PI,0,0),mi&&s(new Dn(.16,7,5),0,-1,0,0,0,0)});function J_(){let s=Ni(),e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d"),n=$t(29);for(let r=0;r<14;r++){let a=40+n()*176,o=50+n()*40,l=22+n()*28,c=t.createRadialGradient(a,o-l*.3,l*.2,a,o,l);c.addColorStop(0,s.cloud[0]+"0.95)"),c.addColorStop(.7,s.cloud[1]+"0.75)"),c.addColorStop(1,s.cloud[1]+"0)"),t.fillStyle=c,t.beginPath(),t.arc(a,o,l,0,Math.PI*2),t.fill()}let i=new fn(e);return i.colorSpace=Mt,i}function j_(s,e){let t=Ni(),n=e(new Ht({color:t.giant})),i=e(new Ht({color:mi?2756656:3817544})),r=e(new Ht({color:mi?6965888:6975608})),a=(c,h,u,d,p,m)=>{let x=new De(e(h),u);return x.position.set(d,p,m),c.add(x),x};if(mi){let c=new Wt;c.name="bg-myth-face",a(c,new yi(1,2),n,0,0,0).scale.set(5.5,7.5,5),a(c,new Sn(.9,3.2,6),n,0,.2,5).rotation.x=Math.PI/2+.3,a(c,new at(7.5,.9,1.6),n,0,2.3,4.2);for(let u of[-1,1])a(c,new at(2.2,.2,.4),i,u*1.9,1.4,4.95).rotation.z=u*.1;a(c,new at(2.6,.24,.4),i,0,-2.6,4.8),c.position.set(-25,-8,-17),c.rotation.set(-.15,.8,.5),s.add(c);let h=new Wt;h.name="bg-myth-spire";for(let u=0;u<8;u++){let d=a(h,new ut(1.15-u*.04,1.2-u*.04,2,10),u%2?n:r,Math.sin(u*.8)*.9,u*2,Math.cos(u*.6)*.4);d.rotation.z=Math.sin(u*.9)*.18}for(let u of[-1,1])a(h,new fi(.7,.32,6,12),n,u*1.3+.6,16.4,0).rotation.y=Math.PI/2;h.position.set(27,-20,-19),h.rotation.z=-.15,s.add(h);return}let o=new Wt;o.name="bg-myth-temple";let l=n;a(o,new Sn(3.2,6,7),r,0,-3.2,0).rotation.x=Math.PI,a(o,new ut(3.3,3.2,.5,9),r,0,-.1,0),a(o,new at(3.6,.3,2.2),l,.2,.3,0);for(let c of[.8,-.8])for(let h=0;h<4;h++)a(o,new ut(.17,.2,2.2,8),l,-1.3+h*(2.9/3)+.2,1.55,c);a(o,new at(3.4,.35,2.1),l,.2,2.8,0),a(o,new ut(1.2,1.2,3.3,3),l,.2,3.3,0).rotation.set(0,0,Math.PI/2),o.position.set(27,-9,-22),o.scale.setScalar(1.05),o.rotation.y=-.5,s.add(o),Dr&&Ym(s,e)}function Q_(s,e){let t=e(J_()),n=e(new si({map:t,transparent:!0,depthWrite:!1,fog:!1,opacity:mi?.75:.8})),i=[[-17,-9,9,16],[-24,-11,2,18],[18,-9,9,16],[25,-11,1,18],[-30,-14,-12,20],[31,-14,-12,20],[0,-16,18,26]];for(let[r,a,o,l]of i){let c=new xi(n);c.name="bg-cloud",c.position.set(r,a,o),c.scale.set(l,l/2,1),s.add(c)}}function v0(s,e,t,n){if(Ls){n0(s,e,t,n);return}let i=Ni(),r=e.poly,a=new De(t(cs(r,-.14,.022,-.01,.022,1)),t(new Ft({color:new Ze(i.ink),fog:!1,side:nn})));if(a.name="edge-ink",a.renderOrder=2,s.add(a),mi){let o=new De(t(Y_(r,.17,-.13,.05)),t(new bi({color:i.lip,roughness:.9,metalness:0})));o.name="edge-lip",o.receiveShadow=!0,s.add(o)}else{let o=(y,b,g,_,S)=>{let w=t(new Ht({map:t(q_(b)),side:nn})),T=new De(t(cs(r,g,_,g,S,1.6)),w);T.name=y,s.add(T)};if(Dr){let y=new De(t(cs(r,.06,0,.06,-1,3.75)),t(new Ht({map:t(qm()),side:nn,emissive:2756614})));y.name="edge-frieze",s.add(y),o("edge-frieze-back","#7c827c",.03,-.85,-1.4)}else o("edge-frieze","#b4b8ae",.06,0,-.5),o("edge-frieze-back","#7c827c",.03,-.4,-.95);let l=$t(57),c=zi(r,1,.4).filter(()=>l()>.25),h=new gn(t($_()),t(new Ht({color:16777215})),c.length);h.name="edge-flora";let u=new gn(t(K_()),t(new Ht({color:16777215})),c.length*2);u.name="edge-flora-bloom";let d=new ht,p=new dn,m=new Ze,x=new F(0,1,0),v=new F,f=[];c.forEach((y,b)=>{let g=1.2+l()*.7,_=.3;p.setFromAxisAngle(x,Math.atan2(y.nx,y.nz));let S=new F(y.x+y.nx*_,Dr?-1.05:-.6,y.z+y.nz*_);d.compose(S,p,new F(g,g,g)),h.setMatrixAt(b,d),h.setColorAt(b,m.setHex(i.vine[Math.floor(l()*i.vine.length)]));let w=i.bloom[Math.floor(l()*i.bloom.length)];for(let T=0;T<2;T++)v.set((T-.5)*.26*g,(-.75-T*.3)*g,.12).applyQuaternion(p).add(S),d.compose(v,p,new F(g*.55,g*.55,g*.55)),u.setMatrixAt(b*2+T,d),u.setColorAt(b*2+T,m.setHex(w));f.push({x:S.x,z:S.z})}),h.userData.spots=f,s.add(h,u)}{let o=$t(83),l=zi(r,.9,.2),c=new gn(t(Z_()),t(new Ht({color:16777215})),l.length);c.name="edge-stalactite";let h=new ht,u=new Ze;l.forEach((d,p)=>{let m=.6+o()*.7,x=1.5+o()*3.5,v=.2+o()*.3;h.makeScale(m,x,m).setPosition(d.x+d.nx*v,-4.7-o()*.4,d.z+d.nz*v),c.setMatrixAt(p,h),c.setColorAt(p,u.setHex(i.drip[p%i.drip.length]))}),s.add(c)}Q_(s,t),j_(s,t),mi||Vh(s,t,n.pillars,n.islets,[{x:24.8,y:-8.7,z:-23.2,s:1.1},{x:28.8,y:-8.7,z:-20.4,s:1.25},{x:29.8,y:-8.7,z:-22.6,s:.95}],2899504)}var x0=()=>xt.myth?Fn?u0():2829386:6984904,eM=40,tM=110,y0=-18;function nM(){let s=$t(77),e=[],t=[[-21.2,-10.2,-3,7,1.6],[-17.9,-10.4,-5,6,1.3],[-24.2,-8.8,-8,3.5,1.4],[23.6,-12.5,-6,4.5,1.5],[21.5,-13.5,-9,4,1.1]];for(let[r,a,o,l,c]of t)e.push({x:r,z:a,top:o,len:l,w:c,capH:.25+s()*.15,haze:.14,tier:0});for(let r=0;r<14;r++){let a=r%2===0?-1:1;e.push({x:a*(28+s()*8),z:-26+s()*14,top:-9-s()*5,len:0,w:1.6+s()*1.4,capH:.3+s()*.2,haze:.5,tier:1})}for(let r=0;r<16;r++){let a,o,l,c=2.6+s()*3;if(r<10)a=(r%2===0?-1:1)*(36+s()*14),o=-36+s()*20,l=-12-s()*4,c=2+s()*1.6;else{let h=Math.PI*(1.2+s()*.6),u=55+s()*20;a=Math.cos(h)*u,o=Math.sin(h)*u,l=-7+s()*15}e.push({x:a,z:o,top:l,len:0,w:c,capH:.4+s()*.3,haze:.66,tier:2})}let n=[],i=[[-27.9,-21.3,-9,1.6],[-31.1,-16.8,-13,1.3],[27.5,-20.7,-9,1.5],[32.2,-17.9,-13,1.2],[-36,-28,-10,2],[37,-30,-11,1.9]];for(let[r,a,o,l]of i)n.push({x:r,z:a,y:o,s:l,haze:.5});return{pillars:e,islets:n}}var Yh=nM(),$h=new Ze,Fs=(s,e,t)=>($h.setRGB(s,e,t,Mt),[$h.r,$h.g,$h.b]);function Jh(s,e){let t=e.x-s.x,n=e.z-s.z,i=Math.hypot(t,n)||1;return{x:n/i,z:-t/i}}function b0(s){let e=s.length;return s.map((t,n)=>{let i=Jh(s[(n+e-1)%e],s[n]),r=Jh(s[n],s[(n+1)%e]),a=i.x+r.x,o=i.z+r.z,l=Math.hypot(a,o)||1;return{x:a/l,z:o/l}})}var ol=class{constructor(){this.pos=[];this.col=[];this.uv=[]}tri(e,t,n,i,r,a,o,l,c){this.pos.push(...e,...t,...n),this.col.push(...i,...r,...a),this.uv.push(...o,...l,...c)}quad(e,t,n){this.tri(e[0],e[1],e[2],t[0],t[1],t[2],n[0],n[1],n[2]),this.tri(e[0],e[2],e[3],t[0],t[2],t[3],n[0],n[2],n[3])}build(){let e=new Vt;return e.setAttribute("position",new mt(this.pos,3)),e.setAttribute("color",new mt(this.col,3)),e.setAttribute("uv",new mt(this.uv,2)),e.computeVertexNormals(),e}};function iM(s){let e=new So(s.poly.map(r=>new ve(r.x,-r.z))),t=new Ha(e,1);t.rotateX(-Math.PI/2);let n=t.getAttribute("position"),i=t.getAttribute("uv");for(let r=0;r<n.count;r++)i.setXY(r,(n.getX(r)+Ln)/(Ln*2),1-(n.getZ(r)+Ln)/(Ln*2));return t.computeVertexNormals(),t}function sM(s,e=!1){let t=$t(5),n=s.poly,i=n.length,r=new ol,a=e&&Fn?d0():null,o=a?a.rock:e?[.45,.41,.4]:[.74,.71,.67],l=a?a.moss:e?[.5,.55,.32]:[.43,.52,.24],c=a?a.deep:e?[.1,.09,.17]:[.28,.3,.36],h=e?.3:1,u=[{yTop:0,yBot:-5,sTop:1,sBot:.975},{yTop:-5,yBot:-13,sTop:.975,sBot:.58}],d=0,p=[];for(let f=0;f<i;f++)p.push(d),d+=Math.hypot(n[(f+1)%i].x-n[f].x,n[(f+1)%i].z-n[f].z);let m=[];u.forEach((f,y)=>{let b=[],g=[],_=[],S=[],w=[];for(let T=0;T<i;){let M=2+Math.floor(t()*2),E=.15+t()*.6,A=(f.yBot-f.yTop)*(y===0?1:.75+t()*.3),D=f.sBot*(.94+t()*.08),B=.8+t()*.32;for(let P=0;P<M&&T<i;P++,T++)g.push(E),_.push(A),S.push(D),w.push(B*(.97+t()*.06))}for(let T=0;T<i;T++){let M=n[T],E=n[(T+1)%i],A=Jh(M,E),D=y===0?g[T]:m[T]-.05-t()*.4;y===0&&m.push(D);let B=f.yTop+_[T],P=S[T],N=y===0?0:D,W=[M.x*f.sTop+A.x*N,f.yTop,M.z*f.sTop+A.z*N],ne=[E.x*f.sTop+A.x*N,f.yTop,E.z*f.sTop+A.z*N],q=[E.x*P+A.x*D,B,E.z*P+A.z*D],se=[M.x*P+A.x*D,B,M.z*P+A.z*D];b.push([W,ne,q,se]);let ue=w[T],pe=t()*.06,He=[o[0]*ue+pe,o[1]*ue,o[2]*ue-pe*.5],ot=(y===0?.25+t()*.4:.06*t())*h,Ne=He.map(($e,nt)=>ai($e,l[nt],ot)),Ye=He.map(($e,nt)=>ai($e*(y===0?.85:.7),c[nt],e?y===0?.35:.85:y===0?.1:.45)),ie=Math.hypot(E.x-M.x,E.z-M.z),K=p[T]/3.2,ye=K+ie/3.2,Te=-f.yTop/3.2,me=-B/3.2;r.quad([W,ne,q,se],[Fs(Ne[0],Ne[1],Ne[2]),Fs(Ne[0],Ne[1],Ne[2]),Fs(Ye[0],Ye[1],Ye[2]),Fs(Ye[0],Ye[1],Ye[2])],[[K,Te],[ye,Te],[ye,me],[K,me]])}for(let T=0;T<i;T++){let M=b[T],E=b[(T+1)%i],A=Fs(o[0]*.7,o[1]*.7,o[2]*.7),D=Fs(c[0],c[1],c[2]);r.quad([M[1],E[0],E[3],M[2]],[A,A,D,D],[[0,0],[.3,0],[.3,1],[0,1]])}});let x=n.map(f=>[f.x*.58,-12,f.z*.58]),v=Fs(.2,.22,.28);for(let f=0;f<i;f++){let y=x[f],b=x[(f+1)%i];r.tri(y,b,[0,-17,0],v,v,v,[0,0],[0,0],[0,0])}return r.build()}function rM(s,e=!1){let t=$t(9),n=s.poly,i=n.length,r=b0(n),a=new ol,o=e&&Fn?p0():e?[1,.97,.9]:[.84,.8,.72],l=e&&Fn?o:[.45,.56,.25],c=[];for(let h=0;h<i;h++){let u=.28+t()*.6,d=.03+t()*.09,p=(f,y)=>[n[h].x-r[h].x*f,y,n[h].z-r[h].z*f],m=zt(.5+.5*Math.sin(h*.61+1.7)*Math.cos(h*.23)+(t()-.5)*.5,0,1),x=.9+t()*.16,v=o.map((f,y)=>ai(f*x,l[y],m*(e?.2:.75)));c.push({inner:p(u,.012),crest:p(u*.42,d),outer:p(0,0),c:v})}for(let h=0;h<i;h++){let u=c[h],d=c[(h+1)%i],p=(m,x)=>Fs(m[0]*x,m[1]*x,m[2]*x);a.quad([u.inner,d.inner,d.crest,u.crest],[p(u.c,.95),p(d.c,.95),p(d.c,1.06),p(u.c,1.06)],[[0,0],[0,0],[0,0],[0,0]]),a.quad([u.crest,d.crest,d.outer,u.outer],[p(u.c,1.06),p(d.c,1.06),p(d.c,.88),p(u.c,.88)],[[0,0],[0,0],[0,0],[0,0]])}return a.build()}var oM=()=>xt.myth?Fn?sf("vHazeZ"):"mix(vec3(0.290,0.300,0.460), vec3(0.040,0.040,0.090), smoothstep(-30.0, 20.0, vHazeZ))":"mix(vec3(0.561,0.714,0.878), vec3(0.247,0.435,0.659), smoothstep(-30.0, 20.0, vHazeZ))";function Kh(s,e,t,n,i,r=!1){s.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying float vHazeY;
varying float vHazeZ;`).replace("#include <project_vertex>",`#include <project_vertex>
  vec4 hazeW = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
  vHazeZ = hazeW.z;
  vHazeY = `+(r?"transformed.y;":"hazeW.y;")),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying float vHazeY;
varying float vHazeZ;`).replace("#include <fog_fragment>",["float hazeF = max(smoothstep(fogNear, fogFar, vFogDepth), smoothstep("+t.toFixed(2)+", "+n.toFixed(2)+", vHazeY) * "+i.toFixed(2)+");","gl_FragColor.rgb = mix(gl_FragColor.rgb, "+oM()+", 1.0 - (1.0 - "+e.toFixed(2)+") * (1.0 - hazeF));"].join(`
`))};let a=xt.myth;return s.customProgramCacheKey=()=>`haze${e}_${t}_${n}_${i}_${r}_${a}`,s}function Zh(s){let e=$t(s),t=new yi(1,1),n=t.getAttribute("position"),i=new Map;for(let r=0;r<n.count;r++){let a=`${n.getX(r).toFixed(3)},${n.getY(r).toFixed(3)},${n.getZ(r).toFixed(3)}`,o=i.get(a);o===void 0&&(o=.8+e()*.38,i.set(a,o)),n.setXYZ(r,n.getX(r)*o,n.getY(r)*o,n.getZ(r)*o)}return t.computeVertexNormals(),t}function aM(s){let e=$t(61),t=s.poly,n=t.length,i=new ol,r=[.97,.92,.82],a=[.16,.14,.23],o=11,l=.05,c=u=>u>-5?1-.005*-u:.975-(-u-5)/8*.395,h=(u,d,p)=>{let m=Math.min(1,-d/o),x=r.map((v,f)=>ai(v*u,a[f],Math.pow(m,1.4)*.85)*p);return Fs(x[0],x[1],x[2])};for(let u=0;u<n;){let d=e()<.55?1:2,p=t[u],m=t[(u+d)%n],x=Jh(p,m),v=Math.hypot(m.x-p.x,m.z-p.z),f=l/v,y=1-l/v,b=-.03-e()*.05,g=0;for(;b>-o;){let _=.8+e()*.7,S=Math.max(-o,b-_),w=g===0?e()*.06:.08+e()*.32+Math.min(.2,g*.02),T=.85+e()*.2,M=(P,N,W)=>{let ne=c(N),q=(p.x+(m.x-p.x)*P)*ne+x.x*W,se=(p.z+(m.z-p.z)*P)*ne+x.z*W;return[q,N,se]},E=b-l,A=S+l,D=[M(f,E,w),M(y,E,w),M(y,A,w),M(f,A,w)];i.quad(D,[h(T,E,1),h(T,E,1),h(T,A,1),h(T,A,1)],[[0,0],[v/3,0],[v/3,_/3],[0,_/3]]);let B=[M(f,E,0),M(y,E,0),M(y,E,w),M(f,E,w)];i.quad(B,[h(T,E,1.12),h(T,E,1.12),h(T,E,1.12),h(T,E,1.12)],[[0,0],[0,0],[0,0],[0,0]]),i.quad([M(f,E,0),M(f,E,w),M(f,A,w),M(f,A,0)],[h(T,E,.7),h(T,E,.7),h(T,A,.7),h(T,A,.7)],[[0,0],[0,0],[0,0],[0,0]]),i.quad([M(y,E,w),M(y,E,0),M(y,A,0),M(y,A,w)],[h(T,E,.7),h(T,E,.7),h(T,A,.7),h(T,A,.7)],[[0,0],[0,0],[0,0],[0,0]]),b=S,g++}u+=d}return i.build()}function lM(s,e,t,n,i,r){let a=$t(500+t),o=xt.myth&&On==="vc",l=o?16:24,c=o?.09:.05,h=e.r*(1.7+a()*.4),u=new ut(e.r*.9,e.r*.98,h,48,4),d=u.getAttribute("position");for(let v=0;v<d.count;v++){let f=d.getX(v),y=d.getY(v),b=d.getZ(v),g=Math.atan2(b,f);if(Math.hypot(f,b)<1e-4)continue;let S=1-c*Math.pow(.5+.5*Math.cos(g*l),3),w=y;y>h/2-.001&&(w=y-(.5+.5*Math.sin(g*3+t))*e.r*.35-a()*e.r*.05),d.setXYZ(v,f*S,w,b*S)}u.computeVertexNormals(),u.translate(0,h/2,0),i(u);let p=i(new Ht({map:o?i(Jm()):n,color:xt.myth&&Fn?m0():15920352})),m=new De(u,p);m.castShadow=!0,m.receiveShadow=!0,m.position.set(e.pos.x,0,e.pos.z),m.rotation.y=a()*6,m.name="rock-column",s.add(m);let x=new De(i(new ut(e.r*1.08,e.r*1.08,.18,32).translate(0,.09,0)),p);x.position.copy(m.position),x.receiveShadow=!0,x.castShadow=!0,s.add(x),r.push({x:e.pos.x,z:e.pos.z,mat:p,k:0})}function jh(s,e,t){let n=new Wt;s.add(n);let i=[],r=P=>(i.push(P),P);s.background=new Ze(x0()),s.fog=new Ra(x0(),eM,tM);let a=xt.myth&&Fn?f0():null,o=a?new _r(a.sky,a.ground,a.hemi):xt.myth?new _r(10791124,8019008,1.3):new _r(13624063,9072210,1.7);n.add(o);let l=a?new Er(a.sun,a.sunK):xt.myth?new Er(16765594,4):new Er(16773590,2.7);xt.myth?l.position.set(-15,8,7):l.position.set(-9,17,4),l.target.position.set(0,0,0),l.castShadow=!0,l.shadow.mapSize.set(t.shadowSize,t.shadowSize);let c=l.shadow.camera;c.left=-13.5,c.right=13.5,c.top=13.5,c.bottom=-13.5,c.near=4,c.far=48,xt.myth&&(c.left=-16,c.right=16,c.top=16,c.bottom=-16,c.far=60),l.shadow.bias=-4e-4,l.shadow.normalBias=.04,n.add(l,l.target);let h=r(xt.myth?Fn?g0(e,t.groundTexSize):Vm(e,t.groundTexSize):Kd(e,t.groundTexSize)),u=r(Hm()),d=xt.myth&&On==="vc",p=r(d?new rs({map:h,gradientMap:Ho()}):new Ht({map:h})),m=null,x=r(d?new rs({vertexColors:!0,side:nn,gradientMap:Ho()}):new Ht({vertexColors:!0,map:u,side:nn,emissive:xt.myth?1381148:3946805})),v=r(new Ht({vertexColors:!0,side:nn,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),f=new De(r(iM(e)),p);f.receiveShadow=!0,n.add(f);let y=new De(r(sM(e,xt.myth)),x);if(xt.myth){let P=new De(r(aM(e)),r(new Ht({vertexColors:!0})));P.receiveShadow=!0,n.add(P)}n.add(y);let b=new De(r(rM(e,xt.myth)),v);if(b.receiveShadow=!0,n.add(b),!(xt.myth&&Fn)){let P=$t(13),N=e.poly,W=N.length,ne=b0(N),q=70,se=r(new Sn(.09,.34,5).translate(0,.17,0)),ue=r(new Ht({flatShading:!0})),pe=new gn(se,ue,q),He=new ht,ot=new dn,Ne=new F,Ye=new F,ie=new Ze,K=new F(0,1,0);for(let ye=0;ye<q;ye++){let Te=Math.floor(P()*W),me=.15+P()*1.1;Ye.set(N[Te].x-ne[Te].x*me,.01,N[Te].z-ne[Te].z*me);let $e=.55+P()*.6;Ne.set($e,$e*(.7+P()*.7),$e),ot.setFromAxisAngle(K,P()*6),He.compose(Ye,ot,Ne),pe.setMatrixAt(ye,He);let nt=.75+P()*.5;ie.setRGB(.4*nt,.55*nt,.2*nt,Mt),pe.setColorAt(ye,ie)}pe.receiveShadow=!0,n.add(pe)}let g=[],_=new Ze(16767392),S=xt.myth?r(Gm()):null;e.rocks.forEach((P,N)=>{if(e.kind==="altar"&&c0(e,P))return;if(S){lM(n,P,N,S,r,g);return}let W=$t(100+N),ne=new Wt,q=r(new Ht({map:u,color:14867666,flatShading:!0}));g.push({x:P.pos.x,z:P.pos.z,mat:q,k:0});let se=r(new Ht({color:7311164,flatShading:!0})),ue=r(Zh(200+N)),pe=new De(ue,q);pe.scale.set(P.r*1,P.r*1.05,P.r*.95),pe.position.y=P.r*.62,pe.rotation.y=W()*6,pe.castShadow=!0,pe.receiveShadow=!0,ne.add(pe);let He=new De(ue,se);He.scale.set(P.r*.72,P.r*.2,P.r*.7),He.position.y=P.r*1.5,He.rotation.y=W()*6,He.castShadow=!0,ne.add(He);for(let ot=0;ot<4;ot++){let Ne=ot/4*Math.PI*2+W(),Ye=P.r*(.85+W()*.5),ie=new De(r(Zh(300+N*10+ot)),q),K=P.r*(.22+W()*.2);ie.scale.set(K,K*.8,K),ie.position.set(Math.cos(Ne)*Ye,K*.45,Math.sin(Ne)*Ye),ie.rotation.y=W()*6,ie.castShadow=!0,ie.receiveShadow=!0,ne.add(ie)}ne.position.set(P.pos.x,0,P.pos.z),n.add(ne)});{let P=r(new ut(.8,1,1,6,1).translate(0,.5,0)),N=new ut(1,.7,1,6,3).translate(0,-.5,0);{let z=$t(902),lt=N.getAttribute("position");for(let Ke=0;Ke<lt.count;Ke++){let Xe=lt.getY(Ke);if(Xe<-.05&&Xe>-.95){let ze=.82+z()*.36;lt.setXYZ(Ke,lt.getX(Ke)*ze,Xe,lt.getZ(Ke)*ze)}}N.computeVertexNormals()}r(N);let W=r(Zh(901)),ne=$t(78),q=new ht,se=new dn,ue=new F,pe=new F,He=new F(0,1,0),ot=new Ze;for(let z of[0,1,2]){let lt=Yh.pillars.filter((qe,Rt)=>qe.tier===z&&(!xt.myth||Rt%2===0)),Ke=lt[0].haze,Xe=r(Kh(new Ht({map:u,flatShading:!0,color:xt.myth?6972536:13683391}),Ke,z===0?-.15:-4,z===0?-.95:-17,z===0?1:.92,z===0)),ze=r(Kh(new Ht({flatShading:!0,color:xt.myth?4608570:6982202}),Ke,-4,-17,.92)),It=new gn(z===0?N:P,Xe,lt.length),we=new gn(W,ze,lt.length);lt.forEach((qe,Rt)=>{if(se.setFromAxisAngle(He,ne()*3),qe.len>0)pe.set(qe.x,qe.top,qe.z),ue.set(qe.w,qe.len,qe.w);else{let H=y0-22;pe.set(qe.x,H,qe.z),ue.set(qe.w,qe.top-H,qe.w)}q.compose(pe,se,ue),It.setMatrixAt(Rt,q);let _t=.82+ne()*.3;It.setColorAt(Rt,ot.setRGB(_t,_t*.98,_t*.95,Mt)),pe.set(qe.x,qe.top,qe.z),ue.set(qe.w*.92,qe.capH,qe.w*.92),q.compose(pe,se,ue),we.setMatrixAt(Rt,q)}),It.frustumCulled=!1,we.frustumCulled=!1,n.add(It,we)}let Ne=Yh.islets,Ye=Ne[0].haze,ie=r(Zh(950)),K=r(new Sn(1,1.9,7).rotateX(Math.PI).translate(0,-.95,0)),ye=r(Kh(new Ht({color:9077626,flatShading:!0}),Ye,-6,-17,.9)),Te=r(Kh(new Ht({color:6982202,flatShading:!0}),Ye,-6,-17,.9)),me=new gn(K,ye,Ne.length),$e=new gn(ie,ye,Ne.length),nt=new gn(ie,Te,Ne.length);Ne.forEach((z,lt)=>{se.setFromAxisAngle(He,ne()*6),pe.set(z.x,z.y,z.z),ue.set(z.s,z.s*.3,z.s),q.compose(pe,se,ue),$e.setMatrixAt(lt,q),pe.set(z.x,z.y+z.s*.12,z.z),ue.set(z.s*.82,z.s*.16,z.s*.82),q.compose(pe,se,ue),nt.setMatrixAt(lt,q),pe.set(z.x,z.y-z.s*.05,z.z),ue.set(z.s*.95,z.s,z.s*.95),q.compose(pe,se,ue),me.setMatrixAt(lt,q)});for(let z of[me,$e,nt])z.frustumCulled=!1,n.add(z)}let w=r(Nm());w.repeat.set(2.4,2.4);let T=[],M=new De(r(new $n(400,400).rotateX(-Math.PI/2)),r(new Xt({fog:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:xt.myth?Fn?`varying vec3 vW; void main(){ gl_FragColor = vec4(${sf("vW.z")}, 1.0); }`:"varying vec3 vW; void main(){ float t = smoothstep(-30.0, 20.0, vW.z); vec3 c = mix(vec3(0.290,0.300,0.460), vec3(0.040,0.040,0.090), t); gl_FragColor = vec4(c, 1.0); }":"varying vec3 vW; void main(){ float t = smoothstep(-30.0, 20.0, vW.z); vec3 c = mix(vec3(0.561,0.714,0.878), vec3(0.247,0.435,0.659), t); gl_FragColor = vec4(c, 1.0); }"})));M.position.y=y0,n.add(M),[[-14,.12]].forEach(([P,N])=>{let W=r(new Ft({map:w,transparent:!0,opacity:xt.myth?.07:N,depthWrite:!1,color:xt.myth?6973088:13229298})),ne=new De(r(new $n(260,260).rotateX(-Math.PI/2)),W);ne.position.y=P,ne.renderOrder=-5,n.add(ne),T.push(ne)});let E=r(Hh()),A=[];{let P=$t(55);for(let N=0;N<(xt.myth?0:12);N++){let W=r(new si({map:E,transparent:!0,opacity:.12+P()*.1,depthWrite:!1,color:14017782})),ne=new xi(W),q=P()*Math.PI*2,se=15+P()*28;ne.position.set(Math.cos(q)*se,-7-P()*9,Math.sin(q)*se);let ue=14+P()*16;ne.scale.set(ue,ue*.55,1),n.add(ne),A.push(ne)}}let D=0;xt.myth&&Fn&&v0(n,e,r,{pillars:Yh.pillars.filter((P,N)=>N%2===0),islets:Yh.islets});let B=e.kind==="altar"?l0(n,e,r,S):null;return{hitRock(P,N){let W=g[0],ne=1/0;for(let q of g){let se=(q.x-P)**2+(q.z-N)**2;se<ne&&(ne=se,W=q)}W&&(W.k=1)},setVariant(P){if(xt.myth)return;let N=P==="v2"?m??(m=r(Kd(e,t.groundTexSize,!0))):h;p.map!==N&&(p.map=N,p.needsUpdate=!0)},update(P){D+=P;for(let N of g)N.k<=0||(N.k=Math.max(0,N.k-P/.35),N.mat.emissive.copy(_).multiplyScalar(.75*N.k*N.k));w.offset.set(D*.004,D*.002),T[T.length-1].position.x=Math.sin(D*.05)*4;for(let N=0;N<A.length;N++)A[N].position.x+=P*(.25+N%3*.12),A[N].position.x>48&&(A[N].position.x=-48)},root:n,altar:B,dispose(){for(let P of i)P.dispose();n.removeFromParent()}}}pn();pn();var cM=.07,af=On==="vb",No=On==="vc",hM=af?1708064:No?1314316:2761760,uM={va:{13144383:15722194,8411178:12094022,38068:14076334,14264706:15255720,5913894:4863012,8018490:4863012,1489104:12094022},vb:{13144383:15783556,8411178:13214270,38068:15231656,14264706:15777952,5913894:8014474,2054758:2795680,8018490:8014474},vc:{13144383:wt.white,8411178:wt.gold,38068:15782560,14264706:15642736,5913894:wt.bronze,2054758:wt.red,8018490:wt.bronze,1489104:wt.white}},dM={va:{4935512:6171688,2829619:4595743,3025968:5382182,7228474:8015416,2366487:3021844,2762281:4856866,3812386:4861984},vb:{4935512:4160110,2829619:3103314,3025968:5913210,7228474:12116042,2366487:2377279,2762281:3809092,3812386:8014474},vc:{4935512:wt.patinaDark,2829619:3095080,3025968:3951156,7228474:wt.patina,2366487:wt.bronze,2762281:2897446,3812386:wt.bronze}};function _0(s,e){return(s?uM:dM)[af?"vb":No?"vc":"va"][e]??e}var fM={roughness:.88,metalness:.04};function M0(s){return No?new rs({color:s,gradientMap:Ho()}):new bi({color:s,...fM})}function pM(s){let e=new Vt;e.setAttribute("position",s.attributes.position.clone()),s.index&&e.setIndex(s.index.clone());let t=Xm(e,1e-4);return e.dispose(),t.computeVertexNormals(),t}var rf=null;function mM(){if(rf)return rf;let s=new Ft({color:hM,side:Rn});return s.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
mvPosition.xyz += normalize(normalMatrix * normal) * ${cM.toFixed(3)};
gl_Position = projectionMatrix * mvPosition;`)},s.customProgramCacheKey=()=>"style-ink",rf=s,s}function E0(s){let e=[],t=new F;s.traverse(n=>{let i=n;!i.isMesh||i.userData.noInk||i.material.transparent||(i.geometry.boundingBox||i.geometry.computeBoundingBox(),i.geometry.boundingBox.getSize(t),!(Math.min(t.x,t.y,t.z)<.02)&&e.push(i))});for(let n of e){let i=new De(pM(n.geometry),mM());i.name=(n.name||"body")+"-outline",i.userData.noInk=!0,i.castShadow=!1,n.add(i)}}var of={clay:"#c8692f",black:"#1b120e",white:"#efe6d2",purple:"#7a2438"};function Qh(s,e,t,n=of.clay,i=of.black,r="#2a201a"){let a=document.createElement("canvas");a.width=e,a.height=t;let o=a.getContext("2d"),{white:l,purple:c}=of,h=n,u=i,d=e/2,p=t/2,m=Math.min(e,t)/2;o.fillStyle=e===t?h:r,o.fillRect(0,0,e,t),o.fillStyle=h,o.beginPath(),o.arc(d,p,m*.98,0,Math.PI*2),o.fill(),o.lineWidth=m*.12,o.strokeStyle=u,o.beginPath(),o.arc(d,p,m*.88,0,Math.PI*2),o.stroke(),o.fillStyle=h;for(let f=0;f<18;f++){let y=f/18*Math.PI*2;o.beginPath(),o.arc(d+Math.cos(y)*m*.88,p+Math.sin(y)*m*.88,m*.025,0,Math.PI*2),o.fill()}o.save(),o.translate(d,p),o.scale(m/128,m/128),o.fillStyle=u,o.strokeStyle=u,o.lineCap="round",o.lineJoin="round";let x=()=>{o.strokeStyle=h,o.lineWidth=3.5};if(s==="owl"){o.beginPath(),o.ellipse(-6,14,40,54,-.25,0,Math.PI*2),o.fill(),o.beginPath(),o.arc(14,-44,32,0,Math.PI*2),o.fill(),o.beginPath(),o.moveTo(42,-46),o.quadraticCurveTo(58,-40,46,-26),o.lineTo(40,-34),o.closePath(),o.fill(),o.beginPath(),o.moveTo(0,-70),o.lineTo(-6,-92),o.lineTo(16,-74),o.closePath(),o.fill(),o.beginPath(),o.moveTo(-34,50),o.lineTo(-62,84),o.lineTo(-24,66),o.closePath(),o.fill(),o.lineWidth=7,o.beginPath(),o.moveTo(-50,76),o.lineTo(60,76),o.stroke();for(let f=0;f<4;f++)o.beginPath(),o.ellipse(-30+f*26,68-f%2*16,10,4,f%2?.5:-.5,0,Math.PI*2),o.fill();o.fillStyle=l,o.beginPath(),o.arc(24,-46,9,0,Math.PI*2),o.fill(),o.fillStyle=u,o.beginPath(),o.arc(26,-46,4,0,Math.PI*2),o.fill(),x(),o.beginPath(),o.moveTo(-28,-8),o.quadraticCurveTo(-10,20,-30,52),o.stroke(),o.beginPath(),o.moveTo(-14,-2),o.quadraticCurveTo(2,24,-14,50),o.stroke(),o.beginPath(),o.arc(14,-44,22,.6*Math.PI,1.4*Math.PI),o.stroke()}else if(s==="bull"){o.beginPath(),o.ellipse(-10,6,58,30,0,0,Math.PI*2),o.fill(),o.beginPath(),o.ellipse(22,-12,30,26,0,0,Math.PI*2),o.fill(),o.beginPath(),o.ellipse(60,12,18,22,.4,0,Math.PI*2),o.fill();for(let f of[-50,-30,14,34])o.fillRect(f,26,11,34);o.lineWidth=7,o.beginPath(),o.moveTo(56,-6),o.quadraticCurveTo(70,-30,88,-26),o.stroke(),o.lineWidth=5,o.beginPath(),o.moveTo(-66,0),o.quadraticCurveTo(-86,14,-80,40),o.stroke(),o.fillStyle=c,o.beginPath(),o.ellipse(18,-6,14,10,.3,0,Math.PI*2),o.fill(),x(),o.beginPath(),o.arc(64,6,4,0,Math.PI*2),o.stroke(),o.beginPath(),o.moveTo(-2,-28),o.quadraticCurveTo(-14,0,0,28),o.stroke(),o.beginPath(),o.moveTo(-44,-16),o.quadraticCurveTo(-34,6,-46,26),o.stroke()}else if(s==="eagle"){o.beginPath(),o.ellipse(0,12,22,44,0,0,Math.PI*2),o.fill(),o.beginPath(),o.arc(8,-42,18,0,Math.PI*2),o.fill(),o.beginPath(),o.moveTo(22,-48),o.quadraticCurveTo(42,-44,32,-28),o.lineTo(22,-36),o.closePath(),o.fill();for(let f of[-1,1])for(let y=0;y<5;y++){let b=-.25-y*.3,g=76-y*7,_=f*14,S=-8+y*7,w=f*Math.cos(b),T=Math.sin(b),M=-T*7,E=w*7;o.beginPath(),o.moveTo(_+M,S+E),o.lineTo(_+w*g+M*.6,S+T*g+E*.6),o.lineTo(_+w*(g+8),S+T*(g+8)),o.lineTo(_+w*g-M*.6,S+T*g-E*.6),o.lineTo(_-M,S-E),o.closePath(),o.fill()}for(let f of[-.35,0,.35])o.beginPath(),o.moveTo(-8,46),o.lineTo(Math.sin(f)*40,84),o.lineTo(Math.sin(f)*40+10,82),o.lineTo(8,46),o.closePath(),o.fill();x(),o.beginPath(),o.arc(12,-44,4,0,Math.PI*2),o.stroke();for(let f of[0,16,32])o.beginPath(),o.moveTo(-12,f),o.quadraticCurveTo(0,f+8,12,f),o.stroke()}else if(s==="trident"){o.fillRect(-6,-40,12,120),o.beginPath(),o.moveTo(-44,-60),o.quadraticCurveTo(0,-24,44,-60),o.lineTo(44,-48),o.quadraticCurveTo(0,-12,-44,-48),o.closePath(),o.fill();for(let[f,y]of[[-44,-92],[0,-104],[44,-92]])o.fillRect(f-5,y+14,10,(f===0?-40:-54)-y-14+20),o.beginPath(),o.moveTo(f,y),o.lineTo(f+12,y+22),o.lineTo(f,y+16),o.lineTo(f-12,y+22),o.closePath(),o.fill()}else{o.beginPath(),o.ellipse(-8,4,58,34,0,0,Math.PI*2),o.fill(),o.beginPath(),o.moveTo(40,-24),o.lineTo(84,4),o.lineTo(82,18),o.lineTo(42,24),o.closePath(),o.fill(),o.beginPath(),o.moveTo(-58,-16);for(let f=0;f<=10;f++)o.lineTo(-58+f*10,-30-(f%2?16:4));o.lineTo(44,-22),o.closePath(),o.fill();for(let f of[-44,-22,14,32])o.fillRect(f,28,11,30);o.lineWidth=6,o.beginPath(),o.moveTo(-64,-2),o.quadraticCurveTo(-82,-14,-76,-28),o.stroke(),o.fillStyle=l,o.beginPath(),o.moveTo(66,14),o.quadraticCurveTo(80,4,72,-6),o.lineTo(68,2),o.closePath(),o.fill(),x(),o.beginPath(),o.arc(56,-4,4,0,Math.PI*2),o.stroke(),o.beginPath(),o.moveTo(22,-24),o.quadraticCurveTo(10,0,24,24),o.stroke(),o.beginPath(),o.moveTo(-46,-12),o.quadraticCurveTo(-36,6,-48,24),o.stroke()}o.restore();let v=new fn(a);return v.colorSpace=Mt,v.anisotropy=4,v}var gM=0;function lf(s,e,t){let n=t(16777215),i=o=>"#"+o.toString(16).padStart(6,"0");n.map=No?e?Qh("eagle",256,256,i(wt.white),i(wt.glaze)):Qh("trident",192,288,i(wt.patinaDark),i(wt.gold),"#2f3a28"):e?Qh("owl",256,256):Qh(gM++%2?"boar":"bull",192,288);let r=e?new js(.43,28):new $n(.7,1.1),a=new De(r.rotateY(Math.PI/2),n);return a.name="shield-emblem",a.userData.noInk=!0,a.position.x=e?.03:.05,s.add(a),n}function S0(){let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64),n=af?"255,160,215":No?"255,232,196":"252,242,214";t.addColorStop(0,`rgba(${n},0.62)`),t.addColorStop(.68,`rgba(${n},0.55)`),t.addColorStop(1,`rgba(${n},0)`),e.fillStyle=t,e.fillRect(0,0,128,128);let i=new fn(s);i.colorSpace=Mt;let r=new De(new js(1.45,40).rotateX(-Math.PI/2),new Ft({map:i,transparent:!0,depthWrite:!1,fog:!1}));return r.name="foot-pool",r.position.y=-.01,r.renderOrder=No?4:5,r}var vM=new Ze(16777215),xM=1.32,yM=1.18,eu=1.55,bM=.55,tu={0:{ring:3729663,armor:15134194,trim:2854822,cloth:3126728,skin:15122330,hair:16054008,dark:2765888,glow:5894399},1:{ring:16730685,armor:10234406,trim:4855060,cloth:8003356,skin:3811880,hair:8003356,dark:2824986,glow:16734780},2:{ring:16751150,armor:12740124,trim:5911572,cloth:9062932,skin:9067068,hair:3810322,dark:3023382,glow:16754746}},cf=16730685,T0=2054758;function w0(s){return xt.myth&&s!==0?cf:tu[s].ring}function R0(s){return xt.myth&&s!==0?tu[1].glow:tu[s].glow}var al=class{constructor(e,t,n="default"){this.root=new Wt;this.ground=new Wt;this.pivot=new Wt;this.rig=new Wt;this.wpn=new Wt;this.legL=new Wt;this.legR=new Wt;this.cape=null;this.tail=null;this.halo=null;this.rim={uRimK:{value:0},uRimC:{value:new Ze}};this.identityMat=null;this.mats=[];this.ringMats=[];this.shadowMeshes=[];this.phase=0;this.lean=0;this.side=0;this.raise=0;this.crouch=0;this.lunge=0;this.bob=0;this.castT=99;this.castSkill=null;this.dustT=0;this.wasShadow=!0;this.pulseT=0;this.prevState="idle";this.weaponParts=[];this.xrayMat=null;this.xray=[];this.xrayOn=!1;this.fromLedge=!1;this.dropReason=null;this.ledgeEdge=null;this.shieldPivot=null;this.shieldMesh=null;this.shieldRest={x:0,y:0,z:0,rz:0};this.shieldMats=[];this.blockT=99;this.recoilT=99;this.airK=null;this.meleeT=99;this.meleeStep=1;this._gc=null;this.variant=t,this.look=n;let i=tu[n!=="default"&&t===2?1:t];if(this.palette=i,this.rim.uRimC.value.setHex(i.ring),n!=="default"){this.buildMyth(e,n);return}let r=T=>{let M=new Ht({color:T});return M.stencilWrite=!0,M.stencilRef=1,M.stencilFunc=po,M.stencilZPass=Ph,M.onBeforeCompile=E=>{E.uniforms.uRimK=this.rim.uRimK,E.uniforms.uRimC=this.rim.uRimC,E.fragmentShader=E.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRimK;
uniform vec3 uRimC;`).replace("#include <opaque_fragment>",`outgoingLight += uRimC * uRimK * pow(1.0 - saturate(dot(normal, normalize(vViewPosition))), 2.0);
#include <opaque_fragment>`)},M.customProgramCacheKey=()=>"fighter-rim",this.mats.push(M),M},a=r(i.armor),o=r(i.trim),l=r(i.cloth),c=r(i.skin),h=r(i.hair),u=r(i.dark);this.glowMat=new Ft({color:i.glow,transparent:!0,fog:!1}),this.root.add(this.pivot),this.pivot.position.y=.9,this.pivot.add(this.rig),this.rig.position.y=-.9;let d=(T,M,E,A,D,B,P=!0)=>{let N=new De(M,E);return N.position.set(A,D,B),N.castShadow=P,P&&this.shadowMeshes.push(N),T.add(N),N};for(let[T,M]of[[this.legL,-.13],[this.legR,.13]])T.position.set(0,.86,M),d(T,new ut(.085,.065,.66,8),u,0,-.33,0),d(T,new at(.26,.12,.15),o,.05,-.74,0),this.rig.add(T);d(this.rig,new Mo(.2,.36,4,10),a,0,1.2,0).scale.set(.8,1,1.25),d(this.rig,new ut(.215,.215,.09,12),o,0,.96,0).scale.set(.82,1,1.28);for(let T of[-.27,.27])d(this.rig,new Dn(.14,10,8),o,0,1.46,T).scale.set(.9,.7,1);if(d(this.rig,new Dn(.17,14,12),c,.03,1.66,0),t===0){d(this.rig,new Dn(.2,14,12),h,-.03,1.7,0).scale.set(1,.92,1.04);let M=d(this.rig,new Sn(.1,.45,8),h,-.27,1.55,0);M.rotation.z=Math.PI/2+.5,this.tail=M,d(this.rig,new at(.08,.06,.26),r(2808046),.14,1.67,0,!1)}else{d(this.rig,new Dn(.22,14,12),l,-.03,1.69,0).scale.set(1.05,.95,1.02);let M=d(this.rig,new Sn(.14,.4,8),l,-.25,1.6,0);M.rotation.z=Math.PI/2+.7,d(this.rig,new Dn(.12,10,8),u,.1,1.64,0,!1).scale.set(.8,1,1.15),d(this.rig,new at(.06,.04,.16),this.glowMat,.17,1.66,0,!1)}let m=new Wt;m.position.set(-.17,1.5,0);let x=new ut(.22,.4,.95,4,1).rotateY(Math.PI/4);d(m,x,t===0?r(2340812):l,0,-.45,0).scale.set(.12,1,1),this.rig.add(m),this.cape=m,this.wpn.position.set(.04,1.34,0),this.rig.add(this.wpn);let f=[];for(let T of[-.26,.26]){let M=d(this.wpn,new ut(.06,.05,.44,8),a,.17,-.05,T*.7);M.rotation.z=-Math.PI/2+.25,M.rotation.x=T>0?-.35:.35,f.push(M)}if(this.glowTip=new De(new Dn(.1,10,8),this.glowMat),t===0)d(this.wpn,new at(.95,.13,.11),u,.62,-.08,.05),d(this.wpn,new at(.3,.2,.09),o,.25,-.12,.05),d(this.wpn,new ut(.05,.05,.5,8),u,1.25,-.08,.05).rotation.z=Math.PI/2,d(this.wpn,new at(.2,.05,.05),r(5894399),.72,0,.05,!1),this.glowTip.position.set(1.52,-.08,.05);else if(t===1){d(this.wpn,new ut(.035,.035,1.9,6),r(5913380),.65,-.07,.05).rotation.z=Math.PI/2;let T=d(this.wpn,new Sn(.1,.5,4),r(2763312),1.82,-.07,.05);T.rotation.z=-Math.PI/2,d(this.wpn,new fi(.08,.025,6,10),o,1.55,-.07,.05).rotation.y=Math.PI/2,this.glowTip.position.set(2.1,-.07,.05)}else d(this.wpn,new ut(.045,.045,1.4,6),r(4862496),.5,-.07,.05).rotation.z=Math.PI/2,d(this.wpn,new at(.38,.34,.5),r(3747882),1.25,-.07,.05),d(this.wpn,new at(.42,.1,.54),a,1.25,-.07,.05,!1),this.glowTip.position.set(1.25,.18,.05);this.wpn.add(this.glowTip);for(let T of this.wpn.children)f.includes(T)||this.weaponParts.push(T);let y=new Ft({color:i.ring,transparent:!0,opacity:.95,depthWrite:!1,fog:!1}),b=new Ft({color:i.ring,transparent:!0,opacity:.2,depthWrite:!1,fog:!1});this.ringMats.push(y,b);let g=new De(new Fi(.6,.7,40).rotateX(-Math.PI/2),y),_=new De(new Fi(.7,.86,40).rotateX(-Math.PI/2),b);this.halo=_;let S=new Vt;S.setAttribute("position",new mt([1.22,0,0,.82,0,.2,.82,0,-.2],3)),S.setIndex([0,2,1]),S.computeVertexNormals();let w=new De(S,new Ft({color:i.ring,transparent:!0,opacity:.95,depthWrite:!1,side:nn,fog:!1}));this.ringMats.push(w.material);for(let T of[g,_,w])T.renderOrder=6,this.ground.add(T);e.add(this.root,this.ground)}buildMyth(e,t){let n=this.variant===0,i=this.palette,r=n?i.ring:cf;this.rim.uRimC.value.setHex(r);let a=P=>(P.stencilWrite=!0,P.stencilRef=1,P.stencilFunc=po,P.stencilZPass=Ph,P.onBeforeCompile=N=>{N.uniforms.uRimK=this.rim.uRimK,N.uniforms.uRimC=this.rim.uRimC,N.fragmentShader=N.fragmentShader.replace("#include <common>",`#include <common>
uniform float uRimK;
uniform vec3 uRimC;`).replace("#include <opaque_fragment>",`outgoingLight += uRimC * uRimK * pow(1.0 - saturate(dot(normal, normalize(vViewPosition))), 2.0);
#include <opaque_fragment>`)},P.customProgramCacheKey=()=>"fighter-rim",this.mats.push(P),P),o=P=>a(M0(_0(n,P))),l=P=>Fn?o(P):a(new Ht({color:P})),c=(P,N,W)=>Fn?o(P):a(new bi({color:P,metalness:N,roughness:W})),h=n?c(13144383,.85,.32):c(4935512,.75,.45),u=n?c(8411178,.8,.45):c(2829619,.7,.55),d=new Ft({color:n?1696754:16720916,fog:!1});this.identityMat=d;let p=l(n?38068:3025968),m=l(n?14264706:7228474),x=l(n?5913894:2366487),v=l(n?T0:13904416),f=l(n?T0:2762281),y=l(n?8018490:3812386);this.glowMat=new Ft({color:i.glow,transparent:!0,fog:!1}),this.root.add(this.pivot),this.pivot.position.y=.9,this.pivot.add(this.rig),this.rig.position.y=-.9;let b=(P,N,W,ne,q,se,ue=!0)=>{let pe=new De(N,W);return pe.position.set(ne,q,se),pe.castShadow=ue,ue&&this.shadowMeshes.push(pe),P.add(pe),pe};for(let[P,N]of[[this.legL,-.13],[this.legR,.13]])P.position.set(0,.86,N),b(P,new ut(.085,.07,.66,8),n?m:u,0,-.33,0),b(P,new ut(.075,.08,.3,8),h,.01,-.5,0),b(P,new at(.26,.12,.15),x,.05,-.74,0),this.rig.add(P);b(this.rig,new Mo(.2,.36,4,10),h,0,1.2,0).scale.set(.82,1,1.25),b(this.rig,new ut(.24,.3,.28,10),p,0,.94,0).scale.set(.85,1,1.2),b(this.rig,new ut(.225,.225,.09,12),d,0,1.04,0,!1).scale.set(.84,1,1.28);for(let P of[-.27,.27])b(this.rig,new Dn(.14,10,8),n?d:l(13114900),0,1.46,P).scale.set(.95,.7,1);b(this.rig,new Dn(.16,12,10),m,.04,1.65,0),b(this.rig,new Dn(.2,14,12,0,Math.PI*2,0,Math.PI*.62),n?c(1489104,.5,.35):h,-.01,1.66,0).scale.set(1.05,1,1.05),b(this.rig,new at(.05,.14,.05),h,.19,1.64,0,!1),b(this.rig,new fi(.2,.055,6,14,Math.PI),n?v:d,-.01,1.78,0).scale.set(1.1,.9,.7);let _=new Wt;_.position.set(-.18,1.5,0),b(_,new ut(n?.24:.2,n?.46:.32,n?1.05:.7,4,1).rotateY(Math.PI/4),f,0,n?-.5:-.35,0).scale.set(.12,1,1),this.rig.add(_),this.cape=_,this.wpn.position.set(.04,1.34,0),this.rig.add(this.wpn);let w=[];for(let P of[-.26,.26]){let N=b(this.wpn,new ut(.06,.05,.44,8),n?p:u,.17,-.05,P*.7);N.rotation.z=-Math.PI/2+.25,N.rotation.x=P>0?-.35:.35,w.push(N)}if(this.glowTip=new De(new Dn(.1,10,8),this.glowMat),t==="myth-archer"){let P=new Wt;P.name="bow",P.position.set(.5,-.02,.05);let N=b(P,new fi(.55,.03,6,20,Math.PI*.9),y,0,0,0);N.rotation.z=-Math.PI*.45,b(P,new ut(.008,.008,1.08,4),l(14209216),.55*Math.cos(Math.PI*.45),0,0,!1),b(P,new ut(.018,.018,.8,5),y,.25,0,0,!1).rotation.z=Math.PI/2,this.wpn.add(P),this.glowTip.position.set(.95,-.02,.05)}else if(this.variant===2&&t==="myth")b(this.wpn,new ut(.045,.045,1.4,6),y,.5,-.07,.05).rotation.z=Math.PI/2,b(this.wpn,new at(.38,.34,.5),u,1.25,-.07,.05),b(this.wpn,new at(.42,.1,.54),v,1.25,-.07,.05,!1),this.glowTip.position.set(1.25,.18,.05);else{let P=t==="myth-shield"?1.5:2.2,N=b(this.wpn,new ut(.03,.03,P,6),y,P/2-.35,-.07,.05);N.rotation.z=Math.PI/2,N.name="spear";let W=b(this.wpn,new Sn(.075,.34,4),n?h:u,P-.18,-.07,.05);W.rotation.z=-Math.PI/2,this.glowTip.position.set(P+.02,-.07,.05)}this.wpn.add(this.glowTip);for(let P of this.wpn.children)w.includes(P)||this.weaponParts.push(P);if(n||t==="myth-shield"){let P=new Wt;if(P.name=n?"round-shield":"tower-shield",n)P.position.set(.3,1.18,-.2),P.rotation.z=.55,b(P,new ut(.5,.5,.05,28).rotateZ(Math.PI/2),h,0,0,0),b(P,new fi(.5,.05,6,28).rotateY(Math.PI/2),d,0,0,0,!1),Fn&&Dr?lf(P,!0,o):b(P,new Dn(.1,10,8),d,.04,0,0,!1);else{P.position.set(.36,1.02,-.1),P.rotation.z=.25;let W=c(2829619,.7,.55),ne=c(4935512,.75,.45),q=l(13904416);this.shieldMats.push(W,ne,q),b(P,new at(.07,1.25,.82),W,0,0,0),b(P,new at(.08,1.31,.06),ne,0,0,.41,!1),b(P,new at(.08,1.31,.06),ne,0,0,-.41,!1),Fn&&Dr?this.shieldMats.push(lf(P,!1,o)):b(P,new at(.085,.86,.12),q,0,0,0,!1)}let N=new Wt;N.add(P),this.rig.add(N),this.shieldPivot=N,this.shieldMesh=P,this.shieldRest={x:P.position.x,y:P.position.y,z:P.position.z,rz:P.rotation.z},this.weaponParts.push(P)}let T=new Ft({color:r,transparent:!0,opacity:.95,depthWrite:!1,fog:!1}),M=new Ft({color:r,transparent:!0,opacity:.38,depthWrite:!1,fog:!1});this.ringMats.push(T,M);let E=new De(new Fi(.55,.75,40).rotateX(-Math.PI/2),T),A=new De(new Fi(.75,.95,40).rotateX(-Math.PI/2),M);this.halo=A;let D=new Vt;D.setAttribute("position",new mt([1.22,0,0,.82,0,.2,.82,0,-.2],3)),D.setIndex([0,2,1]),D.computeVertexNormals();let B=new De(D,new Ft({color:r,transparent:!0,opacity:.95,depthWrite:!1,side:nn,fog:!1}));this.ringMats.push(B.material);for(let P of[E,A,B])P.renderOrder=6,this.ground.add(P);Fn&&(E0(this.root),n&&this.ground.add(S0())),e.add(this.root,this.ground)}styleProbe(){let e=[],t=0,n=0,i=0,r=new F,a=new F,o=c=>{for(let h=c;h;h=h.parent)if(this.weaponParts.includes(h))return!0;return!1};this.root.updateMatrixWorld(!0),this.root.traverse(c=>{let h=c;if(!h.isMesh)return;if(h.name.endsWith("-outline")){t++;return}let u=h.material;u.transparent||i++,h.children.some(d=>d.name.endsWith("-outline"))&&n++,h.geometry.boundingBox||h.geometry.computeBoundingBox(),h.geometry.boundingBox.getSize(r),h.matrixWorld.decompose(new F,new dn,a),e.push({type:u.type,rough:u.roughness??-1,metal:u.metalness??-1,name:h.name,color:u.color?"#"+u.color.getHexString():"",vol:+(r.x*r.y*r.z*a.x*a.y*a.z).toFixed(5),weapon:o(h)})});let l=[this.legL.rotation.z,this.legR.rotation.z,this.pivot.position.y,this.pivot.rotation.z,this.wpn.rotation.z,this.wpn.position.x].map(c=>+c.toFixed(5));return{mats:e,outlines:t,inked:n,solid:i,pose:l}}buildXray(){let e=new Ft({color:this.look!=="default"&&this.variant!==0?cf:this.palette.ring,transparent:!0,opacity:bM,depthFunc:Ao,depthWrite:!1,fog:!1,stencilWrite:!0,stencilRef:1,stencilFunc:Ed,stencilFail:qi,stencilZFail:qi,stencilZPass:qi});this.xrayMat=e;let t=[];this.root.traverse(n=>{let i=n;i.isMesh&&!this.weaponParts.includes(i)&&t.push(i)});for(let n of t){let i=new De(n.geometry,e);i.visible=!1,i.renderOrder=30,n.add(i),this.xray.push(i)}}onMelee(e){this.meleeT=0,this.meleeStep=e}setAir(e){this.airK=e}onShieldBlock(){this.blockT=0}onRecoil(){this.recoilT=0}onLedgeDrop(e){this.fromLedge=!0,this.dropReason=e}update(e,t,n=!1){let i=this.palette,r=Math.hypot(e.moveVel.x,e.moveVel.z),a=e.state==="falling",o=e.state==="dead",l=e.state==="knocked",c=e.state==="ledge",h=e.state==="climb";c?(this.fromLedge=!0,this.dropReason=null):!a&&!l&&!o&&!h&&(this.fromLedge=!1),h&&e.stateT>=jt.climb*.999&&(this.fromLedge=!1);let u=h?Ji(0,jt.climb,e.stateT):0;this.root.position.set(e.pos.x,e.y,e.pos.z);let d=n&&e.state==="windup"&&e.windup?Math.atan2(e.windup.dir.z,e.windup.dir.x):e.facing;this.root.rotation.y=-d,this.ground.position.set(e.pos.x,.035,e.pos.z),this.ground.rotation.y=-d,this.ground.scale.setScalar(n?e.radius/.6:yM),this.halo&&this.halo.scale.setScalar(n?1.3:1),this.tail&&(this.tail.scale.setScalar(n?.55:1),this.tail.position.x=n?-.22:-.27),this.rim.uRimK.value=n?this.look!=="default"?this.variant===0?.5:.4:.9:0,this.castT+=t;let p=1;o&&(p=1-Ji(1,1.5,e.stateT)),e.y<-16&&(p=0),this.root.visible=p>.01,this.ground.visible=!a&&!o&&e.y>-.2&&!c&&!(h&&u<.6)&&!(l&&this.fromLedge),this.root.scale.setScalar(Math.max(p,.001)*xM);let m=!a&&e.y>-.4&&!c&&!h&&!this.fromLedge;if(m!==this.wasShadow){for(let K of this.shadowMeshes)K.castShadow=m;this.wasShadow=m}let x=0,v=0,f=.05,y=0,b=0,g=0,_=e.windup,S=_?zt(_.t/Math.max(_.dur,.01),0,1):0,w=this.castT<.3?this.castT/.3:1;if(e.state==="windup"&&_&&(g=n?Math.max(.45,S):S,_.skill==="enemyHeavy"?(f=ai(.05,2,Ji(0,.85,S)),x=ai(0,.28,S),y=.04):_.skill==="enemyBasic"?(f=ai(.05,.35,S),b=-.16*S,x=.1*S):_.skill==="control"?(f=ai(.05,.22,S),b=-.1*S,x=.12*S,y=.05*S):(f=.3,b=-.12,x=.18)),this.castSkill&&this.castT<.45){let K=1-w;this.castSkill==="enemyHeavy"?(f=ai(-.45,2,K*K),x=ai(-.35,.1,K),b=.28*(1-K)):(f=ai(.05,.4,K),b=.42*(1-K),x=ai(-.3,0,K))}e.state==="recover"&&(x=Math.max(x,-.12)),this.blockT+=t,this.recoilT+=t,e.state==="hitstun"&&(this.recoilT<.35?(x=-.75,f=.9,y=0,b=-.25):(x=-.3,f=-.35,y=.05)),(e.state==="charge"||e.state==="windup"&&_?.skill==="charge")&&(x=.5,y=.12,b=.15,f=-.2),e.state==="guard"&&(f=-.3,x=.06,y=.06);let T=e.state==="windup"&&_&&(_.skill==="melee1"||_.skill==="melee2"||_.skill==="melee3")?_.skill:null;(T==="melee1"||T==="melee2")&&(b=-.12*S,f=.05);let M=(e.breakT??0)>0;if(M&&(x=.18,f=-.5),e.state==="dash"&&(x=-.42,y=.1,b=.12,f=.2),l){let K=Math.hypot(e.knockVel.x,e.knockVel.z)||1,ye=(e.knockVel.x*Math.cos(e.facing)+e.knockVel.z*Math.sin(e.facing))/K,Te=(-e.knockVel.x*Math.sin(e.facing)+e.knockVel.z*Math.cos(e.facing))/K,me=.62*Ji(0,.08,e.stateT);x=-me*ye,v=me*Te,f=-.9,y=.06}let E=e.sinceShotT<.4?Math.exp(-e.sinceShotT*18):0;b-=E*.2,f+=E*.14,e.burstLeft>0&&(f=Math.max(f,.1),x=Math.max(x,.06));let A=n&&e.state==="windup"&&this.prevState!=="windup";this.prevState=e.state;let D=A?1:Uo(e.state==="windup"||this.castT<.45||l?30:16,t);this.lean+=(x-this.lean)*D,this.side+=(v-this.side)*D,this.raise+=(f-this.raise)*D,this.crouch+=(y-this.crouch)*D,this.lunge+=(b-this.lunge)*D;let B=!a&&!o&&!l&&r>.15&&e.state!=="dash";B&&(this.phase+=t*(6+r*1.7));let P=B?zt(r/5,.25,1)*.75:0,N=Math.sin(this.phase)*P,W=B?Math.abs(Math.sin(this.phase))*.05:0;this.bob+=(W-this.bob)*Uo(20,t);let ne=a?Math.sin(e.stateT*22)*.6:l?.55:e.state==="dash"?.9:0;if(this.legL.rotation.z=B?N:ne,this.legR.rotation.z=B?-N:-ne*(a?1:-.4),this.pivot.position.set(this.lunge,.9-this.crouch+this.bob,0),this.pivot.rotation.set(0,0,0),this.pivot.rotation.z=-this.lean,this.pivot.rotation.x=this.side,this.wpn.rotation.z=this.raise,this.wpn.position.x=.04+(E>0?-E*.12:0)+(e.state==="windup"&&_&&_.skill!=="enemyHeavy"?-.08*S:0),this.meleeT+=t,this.wpn.rotation.y=0,T==="melee3"&&(this.wpn.rotation.y=.9*S),this.meleeT<.2&&(this.meleeStep===3?this.wpn.rotation.y=ai(.9,-.9,zt(this.meleeT/.14,0,1)):this.wpn.position.x+=.42*(1-zt(this.meleeT/.18,0,1))),M&&(this.pivot.rotation.x+=Math.sin(this.pulseT*14)*.12,this.pivot.rotation.z+=Math.cos(this.pulseT*11)*.08),c){let K=Ji(jt.protect,jt.hold,e.stateT),ye=e.stateT;this.pivot.position.set(-.04+Math.sin(ye*38)*.025*K,.9-eu,0),this.pivot.rotation.set(Math.sin(ye*3.2)*.05,0,-.12),this.wpn.rotation.z=1.35+Math.sin(ye*30)*.06*K,this.wpn.position.x=.04,this.legL.rotation.z=.12+Math.sin(ye*5)*(.1+.25*K),this.legR.rotation.z=-.08+Math.sin(ye*5+1.4)*(.1+.25*K)}else if(h){let K=Math.sin(u*Math.PI);this.pivot.position.set(.06*K,.9-eu*(1-u)+K*.22,0),this.pivot.rotation.set(0,0,-.5*K),this.wpn.rotation.z=ai(1.35,.05,u),this.legL.rotation.z=-.9*K,this.legR.rotation.z=-.7*K}else if(a&&this.fromLedge)this.pivot.position.y=.9-eu,this.dropReason==="timeout"?(this.pivot.rotation.set(e.stateT*1.2,0,e.stateT*.5),this.wpn.rotation.z=1.5,this.legL.rotation.z=.2,this.legR.rotation.z=-.2):this.pivot.rotation.set(e.stateT*6.5,0,e.stateT*3.2);else if(l&&this.fromLedge)this.pivot.position.y=.9-eu;else if(a)this.pivot.rotation.set(e.stateT*6.5,0,e.stateT*3.2);else if(o){let K=Ji(0,.3,e.stateT);this.pivot.rotation.set(0,0,K*(Math.PI/2)),this.pivot.position.y=.9-K*.6,this.legL.rotation.z=K*.3,this.legR.rotation.z=K*-.2,this.wpn.rotation.z=-.4*K}if(this.shieldPivot&&this.shieldMesh){let K=e.shieldDir,ye=e.state==="guard"&&e.shieldUp!==!1,Te=K?Math.atan2(K.z,K.x)-d:0,me=this.shieldMesh;this.shieldPivot.rotation.y=K&&(ye||this.look==="myth-shield")?-Te:0,ye?(me.position.set(.58,1.25,0),me.rotation.z=.3):M?(me.position.set(this.shieldRest.x+.12,.5,this.shieldRest.z-.12),me.rotation.z=-1):e.state==="charge"&&this.variant===0?(me.position.set(.42,1.15,0),me.rotation.z=.2):(me.position.set(this.shieldRest.x,this.shieldRest.y,this.shieldRest.z),me.rotation.z=this.shieldRest.rz)}let q=c||h&&u<.8||this.fromLedge;for(let K of this.weaponParts)K.visible=!q;let se=c||h;if(se&&!this.xrayMat&&this.buildXray(),se!==this.xrayOn){for(let K of this.xray)K.visible=se;this.xrayOn=se}if(this.cape){let K=Math.sin(this.phase*.9+1.3)*.06*zt(r/5,0,1);this.cape.rotation.z=-(.12+zt(r/6,0,1)*.42+(e.state==="dash"?.45:0)+K+(a?.7:0)),this.cape.rotation.x=Math.sin(this.phase*.5)*.04,c&&(this.cape.rotation.z=-.05,this.cape.rotation.x=Math.sin(e.stateT*3.2)*.06)}let ue=zt(e.hitFlashT*10,0,1),pe=g*.2,He=this.glowColor(i.glow),ot=c&&e.stateT<jt.protect?.22*(1-Ji(jt.protect*.7,jt.protect,e.stateT)):(e.protectT??0)>0?.3:0,Ne=(e.armorT??0)>0?.22+.12*Math.sin(this.pulseT*20):0;for(let K of this.mats)K.emissive.setRGB(ue*.95+He[0]*pe+ot+Ne,ue*.95+He[1]*pe+ot*.9+Ne*.35,ue*.95+He[2]*pe+ot*.6+Ne*.1);if(this.blockT<.15){let K=1.1*(1-this.blockT/.15);for(let ye of this.shieldMats)ye.emissive.setRGB(ye.emissive.r+K,ye.emissive.g+K,ye.emissive.b+K)}let Ye=zt(g+E*1.2+(this.castT<.25?.8:0),0,1);this.glowMat.opacity=.35+Ye*.65,this.glowTip.scale.setScalar(.7+Ye*1.5),this.glowMat.color.setHex(i.glow).lerp(vM,Ye*.5),this.pulseT+=t;let ie=e.state==="windup"?.7+.3*Math.sin(this.pulseT*30):1;if(this.ringMats[0].opacity=.95*ie,this.airK!==null){let K=this.airK;K<.5?(this.pivot.rotation.set(0,0,-1.2*Ji(.05,.35,K)),this.wpn.rotation.z=1.1):(this.pivot.rotation.set(0,0,.12),this.legL.rotation.z=.35,this.legR.rotation.z=-.35,this.wpn.rotation.z=.9),this.ground.visible=!1}if(e.state==="reviving")this.root.visible=!1,this.ground.visible=!1;else if((e.protectT??0)>0&&this.root.visible){let K=Math.floor(this.pulseT*12)%2===0;this.root.visible=K}}glowColor(e){if(!this._gc){let t=new Ze(e);this._gc=[t.r,t.g,t.b]}return this._gc}wantDust(e,t){return e.state!=="knocked"?(this.dustT=0,!1):(this.dustT-=t,this.dustT<=0?(this.dustT=.045,!0):!1)}tipWorld(e){return this.root.updateMatrixWorld(!0),this.glowTip.getWorldPosition(e)}dispose(){for(let e of[this.root,this.ground])e.traverse(t=>{let n=t;n.geometry&&n.geometry.dispose()});for(let e of this.mats)e.dispose();this.glowMat.dispose(),this.xrayMat?.dispose(),this.identityMat?.dispose();for(let e of this.ringMats)e.dispose();this.root.removeFromParent(),this.ground.removeFromParent()}};pn();var _M=`
attribute vec4 aPosSize;
attribute vec4 aColor;
attribute vec2 aShape;
varying vec2 vUv;
varying vec4 vColor;
varying float vCrisp;
void main() {
  vUv = uv;
  vColor = aColor;
  vCrisp = aShape.y;
  vec4 mv = viewMatrix * vec4(aPosSize.xyz, 1.0);
  mv.xy += position.xy * vec2(aPosSize.w, aPosSize.w * aShape.x);
  gl_Position = projectionMatrix * mv;
}`,MM=`
varying vec2 vUv;
varying vec4 vColor;
varying float vCrisp;
void main() {
  float d = length(vUv - 0.5) * 2.0;
  float soft = pow(clamp(1.0 - d, 0.0, 1.0), 1.6);
  float crisp = 1.0 - smoothstep(0.82, 1.0, d);
  float a = mix(soft, crisp, vCrisp) * vColor.a;
  if (a < 0.003) discard;
  gl_FragColor = vec4(vColor.rgb, a);
}`,ll=class{constructor(e,t){this.n=0;this.cap=e,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.s=new Float32Array(e*4),this.c=new Float32Array(e*4),this.l=new Float32Array(e*4),this.fl=new Uint8Array(e);let n=new $n(1,1);this.geo=new Wa,this.geo.index=n.index,this.geo.setAttribute("position",n.getAttribute("position")),this.geo.setAttribute("uv",n.getAttribute("uv")),this.aPosSize=new ss(new Float32Array(e*4),4),this.aColor=new ss(new Float32Array(e*4),4),this.aShape=new ss(new Float32Array(e*2),2);for(let i of[this.aPosSize,this.aColor,this.aShape])i.setUsage(Dh);this.geo.setAttribute("aPosSize",this.aPosSize),this.geo.setAttribute("aColor",this.aColor),this.geo.setAttribute("aShape",this.aShape),this.geo.instanceCount=0,this.mat=new Xt({vertexShader:_M,fragmentShader:MM,transparent:!0,depthWrite:!1,blending:t?Ai:Rs,fog:!1}),this.mesh=new De(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=t?20:15}get count(){return this.n}spawn(e){if(this.n>=this.cap)return;let t=this.n++;this.p[t*3]=e.x,this.p[t*3+1]=e.y,this.p[t*3+2]=e.z,this.v[t*3]=e.vx??0,this.v[t*3+1]=e.vy??0,this.v[t*3+2]=e.vz??0,this.s[t*4]=e.size,this.s[t*4+1]=e.size1??e.size,this.s[t*4+2]=e.aspect??1,this.s[t*4+3]=e.crisp??0,this.c[t*4]=e.color[0],this.c[t*4+1]=e.color[1],this.c[t*4+2]=e.color[2],this.c[t*4+3]=e.alpha??1,this.l[t*4]=0,this.l[t*4+1]=e.life,this.l[t*4+2]=e.gravity??0,this.l[t*4+3]=e.drag??0,this.fl[t]=e.floor===!1?0:1}update(e){let t=0;for(;t<this.n;){let a=t*4,o=t*3;if(this.l[a]+=e,this.l[a]>=this.l[a+1]){this.remove(t);continue}let l=Math.exp(-this.l[a+3]*e);this.v[o]*=l,this.v[o+1]=this.v[o+1]*l-this.l[a+2]*e,this.v[o+2]*=l,this.p[o]+=this.v[o]*e,this.p[o+1]+=this.v[o+1]*e,this.p[o+2]+=this.v[o+2]*e,this.fl[t]&&this.p[o+1]<.03&&this.l[a+2]>0&&this.p[o+1]>-1&&(this.p[o+1]=.03,this.v[o+1]*=-.25,this.v[o]*=.6,this.v[o+2]*=.6),t++}let n=this.aPosSize.array,i=this.aColor.array,r=this.aShape.array;for(let a=0;a<this.n;a++){let o=this.l[a*4]/this.l[a*4+1];n[a*4]=this.p[a*3],n[a*4+1]=this.p[a*3+1],n[a*4+2]=this.p[a*3+2],n[a*4+3]=this.s[a*4]+(this.s[a*4+1]-this.s[a*4])*o,i[a*4]=this.c[a*4],i[a*4+1]=this.c[a*4+1],i[a*4+2]=this.c[a*4+2];let l=1-o;i[a*4+3]=this.c[a*4+3]*l*(o<.08?o/.08+.2:1),r[a*2]=this.s[a*4+2],r[a*2+1]=this.s[a*4+3]}this.aPosSize.needsUpdate=!0,this.aColor.needsUpdate=!0,this.aShape.needsUpdate=!0,this.geo.instanceCount=this.n}clear(){this.n=0,this.geo.instanceCount=0}remove(e){let t=--this.n;e!==t&&(this.p.copyWithin(e*3,t*3,t*3+3),this.v.copyWithin(e*3,t*3,t*3+3),this.s.copyWithin(e*4,t*4,t*4+4),this.c.copyWithin(e*4,t*4,t*4+4),this.l.copyWithin(e*4,t*4,t*4+4),this.fl[e]=this.fl[t])}dispose(){this.geo.dispose(),this.mat.dispose()}},cl=class{constructor(e,t){this.n=0;this.m=new ht;this.col=new Ze;this.X=new F;this.Y=new F;this.Z=new F;this.P=new F;this.view=new F(0,-1,-1).normalize();this.cap=e;let n=new Ft({map:t,transparent:!0,depthWrite:!1,blending:Ai,fog:!1});this.mesh=new gn(new $n(1,1),n,e),this.mesh.instanceMatrix.setUsage(Dh),this.mesh.frustumCulled=!1,this.mesh.renderOrder=22,this.mesh.count=0,this.mesh.setColorAt(0,this.col.setRGB(1,1,1))}begin(){this.n=0}push(e,t,n,i,r,a){if(this.n>=this.cap||a<=.003)return;this.X.copy(t).normalize(),this.Y.crossVectors(this.X,this.view),this.Y.lengthSq()<1e-6&&this.Y.set(0,1,0),this.Y.normalize(),this.Z.crossVectors(this.X,this.Y).normalize(),this.P.copy(e).addScaledVector(this.X,-n/2),this.m.makeBasis(this.X.multiplyScalar(n),this.Y.multiplyScalar(i),this.Z),this.m.setPosition(this.P),this.mesh.setMatrixAt(this.n,this.m),this.col.setRGB(r[0],r[1],r[2],Mt).multiplyScalar(a);let o=this.mesh.instanceColor.array;o[this.n*3]=this.col.r,o[this.n*3+1]=this.col.g,o[this.n*3+2]=this.col.b,this.n++}end(){this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}};pn();var df=.05,C0=`
varying vec2 vP;
void main() { vP = position.xz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,EM=`
uniform vec3 uColor;
uniform float uHalf;
uniform float uProgress;
uniform float uAlpha;
uniform float uTime;
uniform float uBase;
uniform float uEdge;
varying vec2 vP;
void main() {
  float r = length(vP);
  float ang = abs(atan(vP.y, vP.x));
  float aa = fwidth(r) * 1.2;
  float aaA = fwidth(ang) * 1.2 + 1e-4;
  float inside = (1.0 - smoothstep(1.0 - aa, 1.0, r)) * (1.0 - smoothstep(uHalf - aaA, uHalf, ang));
  float fillMask = 1.0 - smoothstep(uProgress - aa * 2.0, uProgress + aa * 2.0, r);
  float rimW = mix(5.0, 10.0, uEdge);
  float rim = smoothstep(1.0 - aa * rimW, 1.0 - aa * (rimW - 3.0), r) * (1.0 - smoothstep(1.0 - aa * 2.0, 1.0, r));
  float sideW = mix(6.0, 12.0, uEdge);
  float side = smoothstep(uHalf - aaA * sideW, uHalf - aaA * (sideW - 4.0), ang);
  float front = smoothstep(uProgress - aa * 6.0, uProgress, r) * (1.0 - smoothstep(uProgress, uProgress + aa * 2.0, r)) * step(uProgress, 0.995);
  // uEdge\uFF1D1\uFF1A\u5916\u7DE3\u8207\u5169\u5074\u6539\u6210\u4E0D\u900F\u660E\u7684\u5BE6\u7DDA\u4EAE\u908A\uFF08v4 \u5C3E\u6BB5\u9738\u9AD4\u3001\u6CE2\u6B21\u843D\u9EDE\uFF09\uFF1B0\uFF1D\u73FE\u884C
  float edge = uEdge * clamp(rim + side, 0.0, 1.0);
  float a = inside * (uBase + 0.46 * fillMask) + inside * (rim * 0.55 + side * 0.5 + front * 0.5) + inside * edge;
  vec3 col = mix(uColor, vec3(1.0), clamp(rim * 0.35 + side * 0.3 + front * 0.5, 0.0, 0.7));
  col = mix(col, vec3(1.0, 0.93, 0.62), edge * 0.85);
  a *= uAlpha;
  if (a < 0.003) discard;
  gl_FragColor = vec4(col, a);
}`,SM=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,TM=`
uniform vec3 uColor;
uniform float uAlpha;
uniform float uFill;
uniform float uSoft;
uniform float uBase;
varying vec2 vUv;
void main() {
  float v = abs(vUv.y - 0.5) * 2.0;
  float u = vUv.x;
  float edge = 1.0 - smoothstep(0.55, 1.0, v);
  float core = 1.0 - smoothstep(0.0, 0.45, v);
  float line = smoothstep(0.78, 0.9, v) * (1.0 - smoothstep(0.9, 1.0, v));
  float filled = 1.0 - smoothstep(uFill - 0.03, uFill + 0.03, u);
  float tailFade = mix(1.0, 1.0 - smoothstep(0.55, 1.0, u), uSoft);
  float a = (edge * (uBase + 0.4 * filled) + core * 0.28 * (0.4 + filled) + line * 0.55) * tailFade * uAlpha;
  if (a < 0.003) discard;
  vec3 col = mix(uColor, vec3(1.0), core * 0.35 + line * 0.2);
  gl_FragColor = vec4(col, a);
}`,wM=`
uniform vec3 uColor;
uniform float uProgress;
uniform float uAlpha;
varying vec2 vP;
void main() {
  // \u56FA\u5B9A\u5BEC\u5EA6\u7684\u5E73\u6ED1\uFF08\u4E0D\u7528 fwidth\uFF1A\u6A19\u8A18\u5728\u87A2\u5E55\u4E0A\u53EA\u6709\u5E7E\u5341\u50CF\u7D20\uFF0Cfwidth \u7684 L1 \u7BC4\u6578\u6703\u628A\u5713\u908A\u78E8\u6210\u83F1\u5F62\uFF09
  float r = length(vP);
  float inside = 1.0 - smoothstep(0.97, 1.0, r);
  float rim = smoothstep(0.8, 0.86, r) * inside;
  float fill = 1.0 - smoothstep(uProgress - 0.04, uProgress + 0.04, r);
  float core = 1.0 - smoothstep(0.16, 0.22, r);
  float a = (0.3 * inside + 0.4 * fill * inside + 0.5 * core + rim) * uAlpha;
  if (a < 0.003) discard;
  vec3 col = mix(uColor, vec3(1.0, 0.93, 0.8), rim * 0.35);
  gl_FragColor = vec4(col, min(a, 1.0));
}`,nu=class{constructor(e,t){this.items=[];this.used=0;let n=new $n(2,2).rotateX(-Math.PI/2);for(let i=0;i<t;i++){let r={uColor:{value:new F(1,0,0)},uHalf:{value:.8},uProgress:{value:1},uAlpha:{value:1},uTime:{value:0},uBase:{value:.16},uEdge:{value:0}},a=new Xt({vertexShader:C0,fragmentShader:On==="vc"?hf:Fn?I0:EM,uniforms:r,transparent:!0,depthWrite:!1,fog:!1}),o=new De(n,a);o.visible=!1,o.renderOrder=On==="vc"?6.5:5,o.frustumCulled=!1,e.add(o),this.items.push({mesh:o,u:r})}}begin(){this.used=0}push(e,t,n,i,r,a,o,l,c=.16,h=0){if(this.used>=this.items.length)return;let u=this.items[this.used++];u.mesh.visible=!0,u.mesh.position.set(e,df,t),u.mesh.rotation.y=-n,u.mesh.scale.set(i,1,i),u.u.uColor.value.set(o[0],o[1],o[2]),u.u.uHalf.value=r,u.u.uProgress.value=a,u.u.uAlpha.value=l,u.u.uBase.value=c,u.u.uEdge.value=h}end(){for(let e=this.used;e<this.items.length;e++)this.items[e].mesh.visible=!1}},I0=`
uniform vec3 uColor;
uniform float uHalf;
uniform float uProgress;
uniform float uAlpha;
uniform float uTime;
uniform float uBase;
uniform float uEdge;
varying vec2 vP;
void main() {
  float r = length(vP);
  float ang = abs(atan(vP.y, vP.x));
  float aa = fwidth(r) * 1.2;
  float aaA = fwidth(ang) * 1.2 + 1e-4;
  float inside = (1.0 - smoothstep(1.0 - aa, 1.0, r)) * (1.0 - smoothstep(uHalf - aaA, uHalf, ang));
  float fillMask = 1.0 - smoothstep(uProgress - aa * 2.0, uProgress + aa * 2.0, r);
  float ink = max(smoothstep(1.0 - aa * 4.5, 1.0 - aa * 3.5, r), smoothstep(uHalf - aaA * 4.5, uHalf - aaA * 3.5, ang));
  float lite = max(smoothstep(1.0 - aa * 7.5, 1.0 - aa * 6.5, r), smoothstep(uHalf - aaA * 7.5, uHalf - aaA * 6.5, ang)) * (1.0 - ink);
  float hatch = step(0.5, fract((vP.x + vP.y) * 4.5));
  vec3 bright = mix(uColor, vec3(1.0), 0.45);
  vec3 col = mix(bright, uColor * 0.35, hatch * fillMask * 0.8);
  float a = inside * (uBase * 0.7 + fillMask * (0.5 + 0.25 * hatch));
  col = mix(col, vec3(1.0, 0.97, 0.9), lite);
  a = max(a, inside * lite * 0.9);
  col = mix(col, vec3(0.03, 0.02, 0.02), ink);
  a = max(a, inside * ink * 0.95);
  a *= uAlpha;
  if (a < 0.003) discard;
  gl_FragColor = vec4(col, a);
}`,P0="float ink = max(smoothstep(0.925, 0.935, r), smoothstep(uHalf - 0.065, uHalf - 0.055, ang));",D0="float lite = max(smoothstep(0.875, 0.885, r), smoothstep(uHalf - 0.115, uHalf - 0.105, ang)) * (1.0 - ink);",hf=I0.replace("float ink = max(smoothstep(1.0 - aa * 4.5, 1.0 - aa * 3.5, r), smoothstep(uHalf - aaA * 4.5, uHalf - aaA * 3.5, ang));",P0).replace("float lite = max(smoothstep(1.0 - aa * 7.5, 1.0 - aa * 6.5, r), smoothstep(uHalf - aaA * 7.5, uHalf - aaA * 6.5, ang)) * (1.0 - ink);",D0).replace("a = max(a, inside * ink * 0.95);","a = max(a, inside * ink);");if(!hf.includes(P0)||!hf.includes(D0))throw new Error("telegraph: VC \u6247\u5F62 shader \u66FF\u63DB\u5931\u6557");var uf=class{constructor(e,t){this.items=[];this.used=0;let n=new $n(1,1).rotateX(-Math.PI/2);for(let i=0;i<t;i++){let r={uColor:{value:new F(1,0,0)},uAlpha:{value:1},uFill:{value:1},uSoft:{value:1},uBase:{value:.2}},a=new Xt({vertexShader:SM,fragmentShader:TM,uniforms:r,transparent:!0,depthWrite:!1,fog:!1}),o=new De(n,a);o.visible=!1,o.renderOrder=5,o.frustumCulled=!1,e.add(o),this.items.push({mesh:o,u:r})}}begin(){this.used=0}push(e,t,n,i,r,a,o,l,c=1,h=.2){if(this.used>=this.items.length)return;let u=this.items[this.used++];u.mesh.visible=!0,u.mesh.position.set(e+Math.cos(n)*i*.5,df,t+Math.sin(n)*i*.5),u.mesh.rotation.y=-n,u.mesh.scale.set(i,1,r),u.u.uColor.value.set(o[0],o[1],o[2]),u.u.uFill.value=a,u.u.uAlpha.value=l,u.u.uSoft.value=c,u.u.uBase.value=h}end(){for(let e=this.used;e<this.items.length;e++)this.items[e].mesh.visible=!1}},hl=class{constructor(e,t){this.items=[];this.used=0;let n=new $n(2,2).rotateX(-Math.PI/2);for(let i=0;i<t;i++){let r={uColor:{value:new F(1,0,0)},uProgress:{value:0},uAlpha:{value:1}},a=new Xt({vertexShader:C0,fragmentShader:wM,uniforms:r,transparent:!0,depthWrite:!1,fog:!1}),o=new De(n,a);o.visible=!1,o.renderOrder=5,o.frustumCulled=!1,e.add(o),this.items.push({mesh:o,u:r})}}begin(){this.used=0}push(e,t,n,i,r,a){if(this.used>=this.items.length)return;let o=this.items[this.used++];o.mesh.visible=!0,o.mesh.position.set(e,df,t),o.mesh.scale.set(n,1,n),o.u.uColor.value.set(r[0],r[1],r[2]),o.u.uProgress.value=i,o.u.uAlpha.value=a}end(){for(let e=this.used;e<this.items.length;e++)this.items[e].mesh.visible=!1}},RM=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,AM=`
uniform vec3 uColor;
uniform float uAlpha;
uniform float uTime;
varying vec2 vUv;
void main() {
  float x = abs(vUv.x - 0.5) * 2.0;
  float core = pow(max(1.0 - x, 0.0), 3.0);
  float halo = pow(max(1.0 - x, 0.0), 1.1) * 0.6;
  float fadeTop = pow(1.0 - vUv.y, 1.3);
  float band = 0.8 + 0.2 * sin((vUv.y * 7.0 - uTime * 1.6) * 6.2831);
  float a = (core + halo) * fadeTop * band * uAlpha;
  if (a < 0.003) discard;
  gl_FragColor = vec4(mix(uColor, vec3(1.0), core * 0.6), a);
}`;function A0(s){let t=document.createElement("canvas");t.width=128,t.height=128;let n=t.getContext("2d");n.fillStyle="rgba(20,16,30,0.72)",n.beginPath(),n.arc(128/2,128/2,128*.46,0,Math.PI*2),n.fill(),n.lineWidth=5,n.strokeStyle=s==="coins"?"#ffd25a":"#ff6b6b",n.stroke(),s==="coins"?(n.fillStyle="#ffc83d",n.beginPath(),n.arc(128/2,128*.4,128*.2,0,Math.PI*2),n.fill(),n.lineWidth=4,n.strokeStyle="#a8761c",n.beginPath(),n.arc(128/2,128*.4,128*.13,0,Math.PI*2),n.stroke()):(n.fillStyle="#ff4d5e",n.beginPath(),n.moveTo(64,53.76+15.36*1.6),n.bezierCurveTo(64-15.36*2.2,53.76+15.36*.2,64-15.36*1.2,53.76-15.36*1.6,64,53.76-15.36*.5),n.bezierCurveTo(64+15.36*1.2,53.76-15.36*1.6,64+15.36*2.2,53.76+15.36*.2,64,53.76+15.36*1.6),n.fill()),n.fillStyle="#fff6e0",n.font=`800 ${128*.2}px "Segoe UI",system-ui,sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(s==="coins"?"+3":"+30%",128/2,128*.76);let i=new fn(t);return i.colorSpace=Mt,i}var ul=class{constructor(e,t){this.beams=[];this.icons=[];this.time=0;let n=new $n(2.6,10).translate(0,5,0);for(let i=0;i<t;i++){let r={uColor:{value:new F(1,.94,.78)},uAlpha:{value:1},uTime:{value:0}},a=new Xt({vertexShader:RM,fragmentShader:AM,uniforms:r,transparent:!0,depthWrite:!1,blending:Ai,fog:!1,side:nn}),o=new De(n,a);o.visible=!1,o.renderOrder=7,o.frustumCulled=!1,e.add(o),this.beams.push({mesh:o,u:r})}this.rings=new hl(e,t),this.iconMats={coins:new si({map:A0("coins"),depthTest:!1,transparent:!0,fog:!1}),heal:new si({map:A0("heal"),depthTest:!1,transparent:!0,fog:!1})};for(let i=0;i<t;i++){let r=new xi(this.iconMats.coins);r.visible=!1,r.renderOrder=9,r.scale.setScalar(1.5),e.add(r),this.icons.push(r)}}iconOf(e){let t=this.icons[e];return t&&t.visible?t.name==="icon-heal"?"heal":"coins":"none"}update(e,t,n){this.time+=n,this.rings.begin();for(let i=0;i<this.beams.length;i++){let r=this.beams[i],a=e[i];r.mesh.visible=!!a;let o=this.icons[i],l=a&&(a.reward==="coins"||a.reward==="heal")?a.reward:null;if(o.visible=!!l,l&&(o.material=this.iconMats[l],o.name=`icon-${l}`,o.position.set(a.pos.x,3+Math.sin(this.time*2+i)*.12,a.pos.z)),!a)continue;r.mesh.position.set(a.pos.x,0,a.pos.z),r.mesh.rotation.y=Math.atan2(t.position.x-a.pos.x,t.position.z-a.pos.z);let c=Math.max(0,Math.min(1,a.progress));r.u.uTime.value=this.time*(1+c*2),r.u.uAlpha.value=.75+.25*c+.1*Math.sin(this.time*4),this.rings.push(a.pos.x,a.pos.z,1,c,[1,.86+.14*c,.55+.45*c],.85+.15*c)}this.rings.end()}},iu=class{constructor(e){this.sectors=new nu(e,5),this.flashes=new nu(e,4),this.strips=new uf(e,8)}};pn();var ff=48,CM=40,dl=class{constructor(e){this.parent=e;this.flyPool=[];this.flying=[];this.m=new ht;this.q=new dn;this.s=new F;this.p=new F;this.up=new F(0,1,0);this.t=0;this.last=new Map;this.coinGeo=new ut(.34,.34,.08,20).rotateZ(Math.PI/2),this.coinMat=new bi({color:16762941,metalness:.75,roughness:.28,emissive:9066496}),this.coins=new gn(this.coinGeo,this.coinMat,ff),this.coins.name="coins",this.coins.castShadow=!0,this.coins.frustumCulled=!1,this.ringMat=new Ft({color:16765530,transparent:!0,opacity:.85,depthWrite:!1,fog:!1}),this.rings=new gn(new Fi(.38,.56,24).rotateX(-Math.PI/2),this.ringMat,ff),this.rings.name="coin-rings",this.rings.renderOrder=6,this.rings.frustumCulled=!1,this.coins.count=0,this.rings.count=0,e.add(this.coins,this.rings)}flyMesh(e){let t=this.flyPool.find(n=>!n.visible);return t||(this.flyPool.length>=CM?t=this.flyPool[0]:(t=new De(this.coinGeo,this.coinMat),t.frustumCulled=!1,this.parent.add(t),this.flyPool.push(t))),t.name=e,t.visible=!0,t}pickup(e){let t=this.flyMesh("fx-coin-pickup");this.flying.push({mesh:t,from:new F(e.x,.45,e.z),age:0,dur:.25,delay:0})}collect(e){e.forEach((t,n)=>{let i=this.last.get(t);if(!i)return;let r=this.flyMesh("fx-coin-collect");this.flying.push({mesh:r,from:new F(i.x,.45,i.z),age:0,dur:.45,delay:n*.04})})}update(e,t,n){this.t+=n;let i=Math.min(e.length,ff);this.last.clear();for(let r=0;r<i;r++){let a=e[r];this.last.set(a.id,{x:a.pos.x,z:a.pos.z});let o=.45+Math.sin(this.t*3+a.id)*.08;this.q.setFromAxisAngle(this.up,this.t*2.6+a.id),this.m.compose(this.p.set(a.pos.x,o,a.pos.z),this.q,this.s.set(1,1,1)),this.coins.setMatrixAt(r,this.m);let l=1+Math.sin(this.t*4+a.id)*.08;this.m.compose(this.p.set(a.pos.x,.04,a.pos.z),this.q.identity(),this.s.set(l,1,l)),this.rings.setMatrixAt(r,this.m)}this.coins.count=i,this.rings.count=i,this.coins.instanceMatrix.needsUpdate=!0,this.rings.instanceMatrix.needsUpdate=!0;for(let r=this.flying.length-1;r>=0;r--){let a=this.flying[r];a.age+=n;let o=Math.min(1,Math.max(0,(a.age-a.delay)/a.dur)),l=t??{x:a.from.x,y:a.from.y+6,z:a.from.z},c=o*o;a.mesh.position.set(a.from.x+(l.x-a.from.x)*c,a.from.y+(l.y-a.from.y)*c+Math.sin(o*Math.PI)*.8,a.from.z+(l.z-a.from.z)*c),a.mesh.rotation.y=this.t*10,a.mesh.scale.setScalar(1-.5*o),o>=1&&(a.mesh.visible=!1,this.flying.splice(r,1))}}get shown(){return this.coins.count}clear(){this.coins.count=0,this.rings.count=0;for(let e of this.flying)e.mesh.visible=!1;this.flying.length=0,this.last.clear()}};var k0=2*Math.PI*15,IM="#ffe6a3",L0="render-overlay-style",su=class{constructor(e){this.root=e;this.bars=new Map;this.arrows=new Map;this.ledgeRings=new Map;this.breakMarks=new Map;this.cloud=null;this.labels=new Map;this.rewards=[];this.clock=0;this.nums=[];this.w=852;this.h=393;if(e.style.pointerEvents="none",e.style.overflow="hidden",!document.getElementById(L0)){let t=document.createElement("style");t.id=L0,t.textContent=`
        .ro-abs{position:absolute;left:0;top:0;will-change:transform,opacity;pointer-events:none}
        .ro-bar{background:rgba(6,12,20,.78);border:1px solid rgba(0,0,0,.55);border-radius:3px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.45)}
        .ro-bar>div{position:absolute;left:0;top:0;bottom:0;display:block;transform-origin:0 50%}
        .ro-num{font:800 16px/1 "Segoe UI",system-ui,-apple-system,sans-serif;letter-spacing:.02em;text-shadow:0 1px 0 #000,0 0 3px #000,0 0 6px rgba(0,0,0,.5);white-space:nowrap}
        .ro-arrow{width:0;height:0}
        .ro-ledge{width:0;height:0}
        .ro-ledge>svg{position:absolute;overflow:visible;filter:drop-shadow(0 0 2px rgba(0,0,0,.85))}
        .ro-arrow>i{position:absolute;left:-13px;top:-11px;width:0;height:0;border-top:11px solid transparent;border-bottom:11px solid transparent;border-left:20px solid #ff4a3d;filter:drop-shadow(0 0 3px rgba(0,0,0,.8))}
      `,document.head.appendChild(t)}for(let t=0;t<18;t++){let n=document.createElement("div");n.className="ro-abs ro-num",n.style.opacity="0",e.appendChild(n),this.nums.push({el:n,x:0,z:0,y:0,age:0,life:.8,active:!1,drift:0,ox:0,oy:0,rise:46})}}resize(e,t){this.w=e,this.h=t}spawnNumber(e,t,n,i,r,a){let o=this.nums.find(l=>!l.active)??this.nums.reduce((l,c)=>l.age>c.age?l:c);o.active=!0,o.age=0,o.life=.85,o.x=e.x,o.z=e.z,o.y=t,a?(o.drift=0,o.ox=a.x,o.oy=a.y,o.rise=14):(o.ox=0,o.oy=0,o.rise=46,o.drift=(Math.random()-.5)*22),o.el.textContent=n,o.el.style.color=$d(i),o.el.style.fontSize=`${Math.round(r)}px`}makeBar(e){let t=document.createElement("div");t.className="ro-abs ro-bar";let n=document.createElement("div"),i=document.createElement("div");return n.style.background="#fff",n.style.opacity="0.85",i.style.background=e==="player"?"linear-gradient(#7ff6ff,#27c6dc)":"linear-gradient(#ff6a5c,#d12c26)",t.appendChild(n),t.appendChild(i),this.root.appendChild(t),{el:t,fill:i,lag:n,lagV:1,team:e}}makeArrow(){let e=document.createElement("div");return e.className="ro-abs ro-arrow",e.appendChild(document.createElement("i")),this.root.appendChild(e),e}makeLedgeRing(){let e=document.createElement("div");e.className="ro-abs ro-ledge";let t="http://www.w3.org/2000/svg",n=document.createElementNS(t,"svg");n.setAttribute("viewBox","-20 -20 40 40");let i=document.createElementNS(t,"circle"),r=document.createElementNS(t,"circle");for(let a of[i,r])a.setAttribute("r","15"),a.setAttribute("fill","none");return i.setAttribute("stroke","rgba(0,0,0,0.45)"),i.setAttribute("stroke-width","6"),r.setAttribute("stroke-width","4"),r.setAttribute("stroke-linecap","round"),r.setAttribute("transform","rotate(-90)"),r.setAttribute("stroke-dasharray",String(k0)),n.appendChild(i),n.appendChild(r),e.appendChild(n),this.root.appendChild(e),{el:e,arc:r,base:i}}updateLedge(e,t,n){this.clock+=n;let i=new Set,r=Math.round(zt(this.h*.095,30,72));for(let a of e){if(a.state!=="ledge")continue;i.add(a.id);let o=this.ledgeRings.get(a.id);o||(o=this.makeLedgeRing(),this.ledgeRings.set(a.id,o));let l=zt(1-a.stateT/jt.hold,0,1),c=a.stateT<jt.protect,h=!c&&l<.375,u=c?IM:$d(w0(a.variant));o.arc.setAttribute("stroke",u),o.arc.setAttribute("stroke-dashoffset",(k0*(1-l)).toFixed(2)),o.arc.setAttribute("stroke-width",h?"5.5":"4"),o.arc.dataset.left=l.toFixed(4),o.arc.dataset.phase=c?"protect":"hold";let d=h?1+.12*Math.abs(Math.sin(this.clock*26)):1,p=t(a.pos,.15),m=o.el.firstChild;m.setAttribute("width",String(r)),m.setAttribute("height",String(r)),m.style.left=`${-r/2}px`,m.style.top=`${-r/2}px`,o.el.style.opacity="1",o.el.style.transform=`translate3d(${p.x.toFixed(1)}px,${p.y.toFixed(1)}px,0) scale(${d.toFixed(3)})`}for(let[a,o]of this.ledgeRings)i.has(a)||(o.el.remove(),this.ledgeRings.delete(a))}makeBreakMark(){let e=document.createElement("div");e.className="ro-abs ro-break",e.style.width="0",e.style.height="0";let t="http://www.w3.org/2000/svg",n=document.createElementNS(t,"svg");n.setAttribute("viewBox","-12 -13 24 26"),n.style.position="absolute",n.style.overflow="visible",n.style.filter="drop-shadow(0 0 2px rgba(0,0,0,.9))";let i=document.createElementNS(t,"path");i.setAttribute("d","M0 -11 L10 -7 L9 3 Q6 9 0 12 Q-6 9 -9 3 L-10 -7 Z"),i.setAttribute("stroke","rgba(0,0,0,.6)"),i.setAttribute("stroke-width","1.5");let r=document.createElementNS(t,"path");return r.setAttribute("d","M1 -11 L-2 -4 L3 0 L-1 5 L1 12"),r.setAttribute("fill","none"),r.setAttribute("stroke","rgba(20,16,24,.95)"),r.setAttribute("stroke-width","2.6"),r.setAttribute("stroke-linejoin","round"),n.appendChild(i),n.appendChild(r),e.appendChild(n),this.root.appendChild(e),{el:e,svg:n}}updateBreakMarks(e,t,n){let i=null;for(let o of e)(o.counterT??0)>0&&o.counterTargetId!=null&&(i=o.counterTargetId);let r=new Set,a=Math.round(zt(this.h*.06,18,44));for(let o of e){if(!((o.breakT??0)>0)||o.state==="dead"||o.state==="falling")continue;r.add(o.id);let l=this.breakMarks.get(o.id);l||(l=this.makeBreakMark(),this.breakMarks.set(o.id,l));let c=o.id===i,h=t(o.pos,n?n(o):2.25),u=Math.round(zt(this.h*.11,38,92)),d=c?1+.18*Math.abs(Math.sin(this.clock*12)):1;l.svg.firstChild.setAttribute("fill",c?"#ffc23a":"#e9e6df"),l.el.dataset.mark=c?"counter":"break",l.svg.setAttribute("width",String(a)),l.svg.setAttribute("height",String(Math.round(a*1.08))),l.svg.style.left=`${-a/2}px`,l.svg.style.top=`${-a*.54}px`,l.el.style.opacity=h.visible?"1":"0",l.el.style.transform=`translate3d(${(h.x-u/2-a*.55).toFixed(1)}px,${h.y.toFixed(1)}px,0) scale(${d.toFixed(3)})`}for(let[o,l]of this.breakMarks)r.has(o)||(l.el.remove(),this.breakMarks.delete(o))}setClouds(e,t){if(e<=.001){this.cloud&&(this.cloud.style.opacity="0");return}if(!this.cloud){let i=document.createElement("div");i.className="ro-cloud",i.style.cssText="position:absolute;inset:0;z-index:5;pointer-events:none;will-change:opacity,background-position;background-color:#d9d3e6;background-image:radial-gradient(ellipse 38% 20% at 30% 40%,rgba(246,243,250,.95),rgba(246,243,250,0) 70%),radial-gradient(ellipse 34% 18% at 72% 58%,rgba(240,236,247,.9),rgba(240,236,247,0) 70%),radial-gradient(ellipse 46% 20% at 52% 50%,rgba(196,188,214,.7),rgba(196,188,214,0) 70%),radial-gradient(ellipse 40% 20% at 18% 55%,rgba(250,248,252,.85),rgba(250,248,252,0) 70%);background-size:100% 160%,100% 140%,100% 180%,100% 150%;background-repeat:repeat-y;",this.root.appendChild(i),this.cloud=i}let n=Math.max(0,t)*this.h*2.2;this.cloud.style.opacity=e.toFixed(3),this.cloud.style.backgroundPosition=`0 ${(-n).toFixed(1)}px,0 ${(-n*1.4).toFixed(1)}px,0 ${(-n*.8).toFixed(1)}px,0 ${(-n*1.8).toFixed(1)}px`}spawnReward(e,t,n){let i=this.rewards.find(a=>!a.active);if(!i){let a=document.createElement("div");a.className="ro-abs ro-reward",a.style.cssText+=';z-index:4;font:900 22px/1 "Segoe UI",system-ui,-apple-system,sans-serif;white-space:nowrap;text-shadow:0 1px 0 #000,0 0 4px #000,0 0 8px rgba(0,0,0,.6);opacity:0',this.root.appendChild(a),i={el:a,x:0,z:0,age:0,life:1.4,active:!1},this.rewards.push(i)}i.active=!0,i.age=0,i.x=e.x,i.z=e.z;let r='<i style="display:inline-block;width:.8em;height:.8em;border-radius:50%;margin-right:.18em;vertical-align:-.06em;background:radial-gradient(circle at 40% 35%,#fff0a8,#e2a226 70%);box-shadow:0 0 0 2px #7a4e0e"></i>';i.el.innerHTML=t==="coins"?`${r}+${n}`:`<b style="color:#ff5d6c;margin-right:.12em">\u2665</b>+${n}`,i.el.style.color=t==="coins"?"#ffd65a":"#8dff9a",i.el.style.fontSize=`${Math.round(zt(this.h*.065,20,44))}px`,i.el.dataset.fx=`reward-${t}`,i.el.dataset.active="1"}setLabels(e,t){let n=new Set,i=Math.round(zt(this.h*.032,11,22));for(let r of e){n.add(r.key);let a=this.labels.get(r.key);if(!a){a=document.createElement("div"),a.className="ro-abs ro-label",a.dataset.label=r.key,a.style.cssText+=';display:flex;align-items:center;gap:.3em;padding:.22em .55em .22em .35em;border-radius:.5em;background:rgba(11,20,34,.78);border:1px solid rgba(255,255,255,.22);color:#f2f4f8;font:700 13px/1 "Segoe UI",system-ui,-apple-system,sans-serif;white-space:nowrap;box-shadow:0 2px 6px rgba(0,0,0,.45)',a.innerHTML=`<i style="display:block;width:1.25em;height:1.25em;color:${r.color}">${r.svg}</i><span>${r.text}</span>`;let l=a.querySelector("svg");l&&(l.style.width="100%",l.style.height="100%",l.style.display="block"),this.root.appendChild(a),this.labels.set(r.key,a)}a.style.fontSize=`${i}px`,a.style.opacity=r.visible?"1":"0",a.dataset.active=r.visible?"1":"0";let o=r.x;if(t){let l=a.offsetWidth/2+4;o=zt(o,t.left+l,this.w-t.right-l)}a.style.transform=`translate3d(${o.toFixed(1)}px,${r.y.toFixed(1)}px,0) translate(-50%,-50%)`}for(let[r,a]of this.labels)n.has(r)||(a.style.opacity="0",a.dataset.active="0")}updateRewards(e,t){for(let n of this.rewards){if(!n.active)continue;if(n.age+=t,n.age>=n.life){n.active=!1,n.el.style.opacity="0",n.el.dataset.active="0";continue}let i=n.age/n.life,r=e({x:n.x,z:n.z},2.6),a=i<.1?.6+i/.1*.6:1.2-Math.min(.2,i-.1);n.el.style.opacity=String(i<.65?1:1-(i-.65)/.35),n.el.style.transform=`translate3d(${r.x.toFixed(1)}px,${(r.y-50*(1-Math.pow(1-i,2))).toFixed(1)}px,0) translate(-50%,-50%) scale(${a.toFixed(2)})`}}update(e,t,n,i){this.rewards.length&&this.updateRewards(t,n),this.updateLedge(e,t,n),(this.breakMarks.size||e.some(l=>(l.breakT??0)>0))&&this.updateBreakMarks(e,t,i);let r=new Set,a=Math.round(zt(this.h*.11,38,92)),o=Math.round(zt(this.h*.017,5,9));for(let l of e){r.add(l.id);let c=this.bars.get(l.id);c||(c=this.makeBar(l.team),this.bars.set(l.id,c));let h=l.state!=="dead"&&l.state!=="falling"&&l.state!=="reviving"&&l.hp>0,u=t(l.pos,i?i(l):2.25),d=h&&u.visible;if(c.el.style.opacity=d?"1":"0",d){let p=zt(l.hp/l.maxHp,0,1);c.lagV=p>=c.lagV?p:Math.max(p,c.lagV-n*.7),c.el.style.width=`${a}px`,c.el.style.height=`${o}px`,c.el.style.transform=`translate3d(${Math.round(u.x-a/2)}px,${Math.round(u.y-o/2)}px,0)`,c.fill.style.width=`${(p*100).toFixed(1)}%`,c.lag.style.width=`${(c.lagV*100).toFixed(1)}%`}if(l.team==="enemy"){let p=this.arrows.get(l.id);p||(p={el:this.makeArrow(),id:l.id},this.arrows.set(l.id,p));let m=t(l.pos,1),x=10;if(h&&(m.x<x||m.x>this.w-x||m.y<x||m.y>this.h-x||!m.visible)){let f=this.w/2,y=this.h/2,b=m.x-f,g=m.y-y;Math.abs(b)<.001&&Math.abs(g)<.001&&(g=-1);let _=26,S=Math.min((f-_)/Math.max(Math.abs(b),.001),(y-_)/Math.max(Math.abs(g),.001)),w=f+b*S,T=y+g*S,M=Math.atan2(g,b);p.el.style.opacity="1",p.el.style.transform=`translate3d(${w.toFixed(1)}px,${T.toFixed(1)}px,0) rotate(${M}rad)`}else p.el.style.opacity="0"}}for(let[l,c]of this.bars)r.has(l)||(c.el.remove(),this.bars.delete(l));for(let[l,c]of this.arrows)r.has(l)||(c.el.remove(),this.arrows.delete(l));for(let l of this.nums){if(!l.active)continue;if(l.age+=n,l.age>=l.life){l.active=!1,l.el.style.opacity="0";continue}let c=l.age/l.life,h=t({x:l.x,z:l.z},l.y),u=l.rise*(1-Math.pow(1-c,2)),d=c<.12?.7+c/.12*.6:1.3-Math.min(.3,(c-.12)*.7);l.el.style.opacity=String(c<.6?1:1-(c-.6)/.4),l.el.style.transform=`translate3d(${(h.x+l.drift*c+l.ox).toFixed(1)}px,${(h.y-u+l.oy).toFixed(1)}px,0) translate(-50%,-50%) scale(${d.toFixed(2)})`}}clear(){for(let e of this.ledgeRings.values())e.el.remove();this.ledgeRings.clear();for(let e of this.breakMarks.values())e.el.remove();this.breakMarks.clear();for(let e of this.rewards)e.active=!1,e.el.style.opacity="0",e.el.dataset.active="0";for(let e of this.nums)e.active=!1,e.el.style.opacity="0";for(let e of this.bars.values())e.el.remove();for(let e of this.arrows.values())e.el.remove();this.bars.clear(),this.arrows.clear()}dispose(){this.clear();for(let e of this.nums)e.el.remove()}};pn();var ru=class extends ns{constructor(){super();let e=new at;e.deleteAttribute("uv");let t=new bi({side:Rn}),n=new bi,i=new Ga(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let r=new De(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new gn(e,n,6),o=new Hn;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new De(e,Bo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new De(e,Bo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new De(e,Bo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new De(e,Bo(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new De(e,Bo(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let p=new De(e,Bo(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Bo(s){return new Ht({color:0,emissive:16777215,emissiveIntensity:s})}var pu=38,zs=51*Math.PI/180,zM=xt.near?12.5:15.3,UM=xt.near?22.1*(12.5/15.3):22.1,J0=.6,HM=2.6,eg=218,tg=154,NM=(eg-tg)/2,Hr=An(5239039),zn=[1,1,1],Nr=An(16726832),li=An(16747050),BM=[.72,.74,.78],j0=An(12098936),Vo=An(9077624),Br=[.86,.87,.9],OM=An(16773572),VM=An(15260868),ds=An(16758062),GM=An(16773824),WM=An(16764774),Q0=An(16765530),XM=An(9306010),gf=An(16773320),qM=An(5922408),fs={melee:[2.2,2.4,2],sweepHalf:70*Math.PI/180,charge:4,bash:3.2,bashHalf:40*Math.PI/180,guardHalf:70*Math.PI/180};function Go(s,e,t,n,i,r){let a=r;for(let o of s){let l=e-o.pos.x,c=t-o.pos.z,h=l*n+c*i,u=l*l+c*c-o.r*o.r,d=h*h-u;if(d<0)continue;let p=-h-Math.sqrt(d);p>0&&p<a&&(a=p)}return a}function ng(s,e,t){let n=t,i=0,r=Math.min(window.devicePixelRatio||1,2),a=new zh({canvas:s,antialias:r<2,powerPreference:"high-performance",alpha:!1,stencil:!0});a.setPixelRatio(r),a.shadowMap.enabled=!0,a.shadowMap.type=Dc,a.outputColorSpace=Mt;let o=()=>{a.toneMapping=xt.myth?Co:Ki,a.toneMappingExposure=xt.myth?1.22:1};xt.myth&&o(),typeof window<"u"&&(window.__THREE_GAME_DIAGNOSTICS__={renderer:a.info});let l=new ns,c=/iPhone|iPad|Android/i.test(navigator.userAgent),h={shadowSize:c?1536:2048,groundTexSize:c?1024:2048},u=jh(l,n,h),d=new Map,p=L=>`${L.poly.length}:${L.poly[0].x.toFixed(3)},${L.poly[0].z.toFixed(3)}:${L.rocks.map(O=>`${O.pos.x.toFixed(2)},${O.pos.z.toFixed(2)},${O.r}`).join(";")}`,m=p(t),x=(L,O)=>`${L?"m":"b"}|${p(O)}`;d.set(x(xt.myth,n),{world:u,background:l.background,fog:l.fog});let v=null,f=()=>{if(!v){let L=new Fo(a);v=L.fromScene(new ru,.04).texture,L.dispose()}return v},y=()=>{l.environment=xt.myth?f():null,l.environmentIntensity=.7};xt.myth&&y();function b(L){let O=new ns;return{world:jh(O,L,h),background:O.background,fog:O.fog}}function g(L,O){if(L.world===u){n=O;return}let V=u;u.root.removeFromParent(),l.add(L.world.root),l.background=L.background,l.fog=L.fog,u=L.world,n=O,Z.clear();for(let[C,k]of d)k.world===V&&!C.endsWith(`|${m}`)&&(V.dispose(),d.delete(C))}function _(L){xt.myth=L;let O=x(L,n),V=d.get(O);V||(V=b(n),d.set(O,V)),g(V,n),o(),y();for(let C of we.values())C.dispose();we.clear()}let S=null,w=[],T=null,M=null,E=0;function A(L){if(p(L)===p(n)){n=L,S=null;return}S&&p(S.isl)===p(L)||(S={isl:L,stage:0,slot:null})}function D(L){let O=S;if(!O)return;let V=x(xt.myth,O.isl);for(;;){if(O.stage===0)O.slot=d.get(V)??null,O.slot||(O.slot=b(O.isl),d.set(V,O.slot)),O.stage=1;else if(O.stage===1){let C=new ns;C.add(O.slot.world.root),C.environment=l.environment,C.environmentIntensity=l.environmentIntensity,C.fog=O.slot.fog,a.compile(C,Ne),O.slot.world.root.traverse(k=>{let G=k.material;for(let Q of Array.isArray(G)?G:G?[G]:[])for(let te of Object.values(Q))te&&te.isTexture&&a.initTexture(te)}),O.slot.world.root.removeFromParent(),O.stage=2}else{if(L&&E<.95)return;w.push({inAir:L,cover:E}),g(O.slot,O.isl),S=null;return}if(L)return}}let B=L=>L<.3?P(.08,.3,L):1-P(.68,.92,L);function P(L,O,V){let C=zt((V-L)/(O-L),0,1);return C*C*(3-2*C)}function N(L,O,V){if(O<.5){let G=V??L.pos,Q=Math.hypot(G.x,G.z)||1,te=2.2*P(0,.5,O),J=O<.2?1.1*Math.sin(O/.2*(Math.PI/2)):1.1-Math.pow((O-.2)/.3,2)*9;return{pos:{x:G.x+G.x/Q*te,z:G.z+G.z/Q*te},y:J}}let C=Mu(L.pos,n.poly)&&Bt(L.pos,n.poly)>2,k=(1-O)/.5;return{pos:C?L.pos:{x:0,z:0},y:9*k*k}}let W=new Map,ne=L=>{if(!xt.myth)return"default";let O=W.get(L.id);return O||(L.kit==="shieldbearer"?"myth-shield":L.kit==="archer"?"myth-archer":"myth")},q=[],se=new Map,ue=[],pe=null,He=new Map,ot=!0,Ne=new qn(pu,16/9,1,220);Ne.rotation.set(-zs,0,0);let Ye=new qn(pu,16/9,1,220);Ye.rotation.set(-zs,0,0);let ie=new F(0,-Math.sin(zs),-Math.cos(zs)),K=new F(1,0,0),ye=new F(0,Math.cos(zs),-Math.sin(zs)),Te=new ll(900,!0),me=new ll(520,!1),$e=new cl(200,Bm()),nt=new cl(40,Om());$e.view.copy(ie),nt.view.copy(ie);let z=new iu(l);l.add(me.mesh,Te.mesh,$e.mesh,nt.mesh);let lt=[];{let L=new Fi(.86,1,56).rotateX(-Math.PI/2);for(let O=0;O<10;O++){let V=new Ft({color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:Ai,fog:!1}),C=new De(L,V);C.visible=!1,C.renderOrder=7,C.frustumCulled=!1,l.add(C),lt.push({mesh:C,mat:V,age:0,life:1,r0:0,r1:1,alpha:1,on:!1})}}let Ke=[],Xe=[],ze=new su(e),It=null;xt.myth&&On==="vc"&&Wh(Promise.resolve().then(()=>(Z0(),K0)).then(L=>{It=L.makeVcPost(a,l,Ne,Rt,_t),a.info.autoReset=!1}));let we=new Map,qe=new Map,Rt=s.clientWidth||window.innerWidth||852,_t=s.clientHeight||window.innerHeight||393,H=-.8,R=new ve(0,H),Y=0,ce=0,fe=0,le=new ve,Je=0,be=1,Ve=0,Ie=new F,_e=new F,Pe=new F;function rt(L){let O=Math.tan(pu*Math.PI/360);return Math.max(zM/2/O,UM/2/(L*O))}function et(L,O,V,C,k=0,G=0){L.position.set(O+k,C*Math.sin(zs)+G,V+C*Math.cos(zs)),L.updateMatrixWorld(!0)}function ke(L,O){Rt=Math.max(1,L),_t=Math.max(1,O),a.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),a.setSize(Rt,_t,!1);for(let C of[Ne,Ye])C.aspect=Rt/_t,C.updateProjectionMatrix();ze.resize(Rt,_t),It?.setSize(Rt,_t);let V=rt(Rt/_t);et(Ne,R.x,R.y,V),et(Ye,R.x,R.y,V)}function it(L,O=0){return Pe.set(L.x,O,L.z).project(Ne),{x:(Pe.x*.5+.5)*Rt,y:(-Pe.y*.5+.5)*_t,visible:Pe.z<1&&Pe.x>=-1&&Pe.x<=1&&Pe.y>=-1&&Pe.y<=1}}function X(L,O){let V=L/Rt*2-1,C=-(O/_t)*2+1;if(Ie.set(V,C,.5).unproject(Ye),_e.copy(Ie).sub(Ye.position),_e.y>-1e-6)return null;let k=-Ye.position.y/_e.y;return k>0?{x:Ye.position.x+_e.x*k,z:Ye.position.z+_e.z*k}:null}let de=()=>Math.random(),$=(L,O)=>L+(O-L)*de();function Be(L,O,V,C,k,G,Q){let te=lt.find(J=>!J.on)??lt[0];te.on=!0,te.age=0,te.life=k,te.r0=V,te.r1=C,te.alpha=Q,te.mesh.position.set(L,.09,O),te.mat.color.setRGB(G[0],G[1],G[2],Mt),te.mesh.visible=!0}function xe(L,O,V,C,k,G=.1,Q=1){Te.spawn({x:L,y:O,z:V,size:C,size1:C*.25,color:k,life:G,alpha:Q})}function ae(L,O,V,C,k,G,Q,te){for(let J=0;J<C;J++){let Se;Q?Se=Math.atan2(-Q.z,-Q.x)+(de()-.5)*te:Se=de()*Math.PI*2;let Le=k*$(.4,1);Te.spawn({x:L,y:O,z:V,vx:Math.cos(Se)*Le,vy:$(.5,4),vz:Math.sin(Se)*Le,size:$(.07,.16),size1:.02,color:de()<.35?zn:G,life:$(.18,.42),gravity:9,drag:2.5})}}function Ue(L,O,V,C,k,G=1.2){for(let Q=0;Q<V;Q++){let te=de()*Math.PI*2,J=$(.3,1)*C;me.spawn({x:L+Math.cos(te)*.15,y:.12,z:O+Math.sin(te)*.15,vx:Math.cos(te)*J,vy:$(.2,1)*G,vz:Math.sin(te)*J,size:k*$(.5,.9),size1:k*$(1.4,2),color:j0,alpha:.55,life:$(.4,.8),drag:3.2})}}function gt(L,O,V,C,k,G){for(let Q=0;Q<C;Q++){let te=de()*Math.PI*2,J=G*$(.3,1);me.spawn({x:L,y:O,z:V,vx:Math.cos(te)*J,vy:$(2,6),vz:Math.sin(te)*J,size:$(.06,.13),size1:.05,color:k.map(Se=>Se*$(.6,1.1)),alpha:1,life:$(.5,.9),gravity:16,drag:.6,crisp:1})}}function bt(L,O,V,C,k,G,Q,te,J=.2){let Se=Q?Math.atan2(-Q.z*Math.sin(zs),-Q.x):0;for(let Le=0;Le<C;Le++){let Et=Q?Se+(de()-.5)*te:Le/C*Math.PI*2+de()*.5,Tt=new F().copy(K).multiplyScalar(Math.cos(Et)).addScaledVector(ye,Math.sin(Et));Ke.push({x:L,y:O,z:V,dir:Tt,r1:k*$(.7,1.2),len0:k*.3,len1:k*$(.6,1),width:$(.1,.2),age:0,life:J*$(.8,1.2),color:G})}}function Ut(L,O,V,C){me.spawn({x:L,y:1.05,z:O,size:V*1.4,size1:V*.6,color:ds,alpha:.95,life:.2});for(let k=0;k<C;k++){let G=de()*Math.PI*2,Q=$(3,8);me.spawn({x:L,y:$(.7,1.4),z:O,vx:Math.cos(G)*Q,vy:$(.5,3.5),vz:Math.sin(G)*Q,size:$(.12,.24),size1:.05,color:ds,alpha:1,life:$(.22,.36),gravity:9,drag:3,crisp:1})}}function Gn(L,O,V,C){for(let k=0;k<C;k++){let G=$(.6,2.2);me.spawn({x:L-V.x*$(0,.25),y:$(-.05,.1),z:O-V.z*$(0,.25),vx:-V.x*G+$(-.6,.6),vy:$(.5,2.5),vz:-V.z*G+$(-.6,.6),size:$(.06,.12),size1:.05,color:Vo.map(Q=>Q*$(.7,1.1)),alpha:1,life:$(.6,1),gravity:16,drag:.4,crisp:1,floor:!1})}}function ci(L){return L.state==="ledge"?1.25:L.state==="climb"?1.25+(2.25-1.25)*zt(L.stateT/jt.climb,0,1):2.25}function _i(L){return L?An(R0(L.variant)):Hr}function vn(L){return!L||L.team==="player"?Hr:xt.myth?Nr:L.variant===2?li:Nr}let ji=[];function Hs(L,O){let V=null,C=1/0;for(let k of ji){if(k.kind!==L)continue;let G=(k.x-O.x)**2+(k.z-O.z)**2;G<C&&(C=G,V=k.ownerId)}return V}function Ns(L,O,V){let C=L.targetId===O.playerId,{x:k,z:G}=L.pos,Q=1,te=L.dir,J=0,Se=14678783,Le=vn(V.get(L.sourceId));switch(L.kind){case"basic":xe(k,Q,G,.7,Le,.09),ae(k,Q,G,6,6,Le,te,2.4),bt(k,Q,G,4,.9,Le,te,2.2,.16),J=.07,Se=13629951;break;case"control":xe(k,Q,G,1.3,Le,.14),ae(k,Q,G,12,8,Le,te,3.4),bt(k,Q,G,7,1.7,Le,te,3.6,.22),Be(k,G,.3,1.2,.26,Le,.6),J=.2,Se=8057599;break;case"push":xe(k,Q,G,1.9,zn,.16),ae(k,Q,G,16,9,Le,null,6.3),bt(k,Q,G,10,2.4,Le,null,6.3,.26),Be(k,G,.4,2.2,.32,Le,.7),Ue(k,G,9,3.2,.7),J=.42,Se=16777215;break;case"enemyBasic":xe(k,Q,G,.8,li,.1),ae(k,Q,G,8,6,li,te,2.6),bt(k,Q,G,5,1.1,li,te,2.4,.18),J=C?.14:0,Se=16739162;break;case"enemyHeavy":xe(k,Q,G,2,li,.16),ae(k,Q,G,16,9,li,null,6.3),bt(k,Q,G,10,2.5,li,null,6.3,.26),Be(k,G,.4,2.9,.38,li,.95),Ue(k,G,10,3.4,.75),gt(k,.5,G,6,Vo,4),J=C?.6:.3,Se=16739162;break;case"melee1":case"melee2":xe(k,Q,G,.8,zn,.09),ae(k,Q,G,7,6,Le,te,2.4),bt(k,Q,G,5,1,Le,te,2.2,.16),J=.08;break;case"melee3":xe(k,Q,G,1.2,zn,.11),ae(k,Q,G,11,7,Le,te,3),bt(k,Q,G,7,1.5,Le,te,3,.2),J=.16;break;case"charge":xe(k,Q,G,1.7,zn,.14),ae(k,Q,G,14,8,Le,te,3.6),bt(k,Q,G,9,2,Le,te,3.6,.24),Be(k,G,.4,1.8,.3,Le,.7),Ue(k,G,8,2.6,.65),J=.3;break;case"counterBash":case"counterMelee":{let _n=L.kind==="counterBash";xe(k,Q,G,_n?1.8:1.1,zn,.12),ae(k,Q,G,_n?14:9,8,ds,te,3.2),bt(k,Q,G,_n?9:6,_n?2:1.4,ds,te,3.2,.22),Ut(k,G,_n?1.2:.8,_n?18:10),J=_n?.34:.16,Se=16769162;break}}L.knock>.2&&Ue(k,G,4,1.6,.55,.6),Y=Math.min(1,Y+J),C&&(Se=16739162);let Et=zt(_t/393,.9,1.8),Tt=V.get(L.targetId);if(xt.myth&&Tt){let _n=V.get(L.sourceId),ms=_n&&Math.sign(it(Tt.pos).x-it(_n.pos).x)||1,ar=zt(_t*.04,14,30);ze.spawnNumber(Tt.pos,ci(Tt),String(Math.round(L.dmg)),Se,zt(14+L.dmg*.9,15,30)*Et*.62,{x:ms*ar*1.2,y:-ar*1.6})}else ze.spawnNumber(L.pos,1.9,String(Math.round(L.dmg)),Se,zt(14+L.dmg*.9,15,30)*Et)}function ps(L,O,V){for(let C of L)switch(C.type){case"shoot":{let k=V.get(C.ownerId),G=_i(k),Q=C.pos.x+C.dir.x*.15,te=C.pos.z+C.dir.z*.15;xe(Q,1.1,te,.6,G,.07);for(let J=0;J<3;J++){let Se=Math.atan2(C.dir.z,C.dir.x)+(de()-.5)*.7,Le=$(3,7);Te.spawn({x:Q,y:1.1,z:te,vx:Math.cos(Se)*Le,vy:$(-.5,1),vz:Math.sin(Se)*Le,size:.09,size1:.02,color:G,life:.14,drag:3})}break}case"hit":Ns(C,O,V),xt.myth&&C.knock>.2&&He.set(C.targetId,{x:C.pos.x,z:C.pos.z,age:0,color:vn(V.get(C.sourceId))});break;case"cast":{let k=V.get(C.ownerId),G=we.get(C.ownerId);G&&(G.castT=0,G.castSkill=C.skill);let Q=C.skill==="enemyHeavy",te=Q?yn.range:ln.range,J=Q?yn.halfAngle:ln.halfAngle,Se=Math.atan2(C.dir.z,C.dir.x),Le=k?k.pos.x:C.pos.x,Et=k?k.pos.z:C.pos.z;Xe.push({x:Le,z:Et,angle:Se,range:te,half:J,color:Q?li:vn(k),age:0,life:.22});for(let Tt=0;Tt<7;Tt++){let _n=Se+(de()-.5)*J*1.8,ms=te*$(.5,.95);Ue(Le+Math.cos(_n)*ms,Et+Math.sin(_n)*ms,1,1,Q?.7:.5,.5)}Q&&(Be(Le+Math.cos(Se)*te*.55,Et+Math.sin(Se)*te*.55,.3,te*.8,.3,li,.6),Y=Math.min(1,Y+.12));break}case"dash":{let k=V.get(C.ownerId),G=_i(k),Q=5;for(let te=0;te<Q;te++){let J=te/(Q-1)*Zn.distance;Te.spawn({x:C.from.x+C.dir.x*J,y:.95,z:C.from.z+C.dir.z*J,size:.62,size1:.5,aspect:2.7,color:G,alpha:.5-te*.04,life:.26+te*.045})}Ue(C.from.x,C.from.z,6,2.2,.5,.4);break}case"blocked":{let{x:k,z:G}=C.pos,Q=C.kind==="enemyBasic"?li:vn(V.get(Hs(C.kind,C.pos)??-1));xe(k,.9,G,.5,Q,.08),gt(k,.9,G,10,Vo,4.5),Ue(k,G,3,1.2,.45,.6),ae(k,.9,G,5,5,Q,null,6.3);break}case"blockedStrike":{let k=C.skill==="enemyHeavy"?li:vn(V.get(C.ownerId)),{x:G,z:Q}=C.pos;u.hitRock(G,Q),xe(G,1.15,Q,2.2,zn,.14),xe(G,1.15,Q,1.4,k,.24,.85),ae(G,1.15,Q,22,8,k,C.dir,3.4),bt(G,1.15,Q,10,2.1,OM,C.dir,3.8,.4),gt(G,1,Q,22,Vo,6),Ue(G,Q,7,2,.7,.9);break}case"expire":{let k=C.kind==="enemyBasic"?li:vn(V.get(Hs(C.kind,C.pos)??-1));ae(C.pos.x,.95,C.pos.z,4,2.2,k,null,6.3);break}case"ledgeGrab":{let k=we.get(C.ownerId);k&&(k.ledgeEdge={x:C.edge.x,z:C.edge.z});let G=C.inward.z,Q=-C.inward.x;for(let te=0;te<10;te++){let J=(te%2?1:-1)*$(.35,1.3),Se=C.edge.x+G*J,Le=C.edge.z+Q*J;me.spawn({x:Se,y:.1,z:Le,vx:G*Math.sign(J)*$(.6,1.6)-C.inward.x*.4,vy:$(.4,1.2),vz:Q*Math.sign(J)*$(.6,1.6)-C.inward.z*.4,size:$(.35,.6),size1:$(.8,1.2),color:VM,alpha:.75,life:$(.45,.8),drag:3})}Gn(C.edge.x,C.edge.z,C.inward,14);for(let te of[-1,1])ae(C.edge.x+G*te*.3,.12,C.edge.z+Q*te*.3,4,3,zn,null,6.3);break}case"ledgeClimb":{let k=C.to.x-C.from.x,G=C.to.z-C.from.z,Q=Math.hypot(k,G)||1;Ue(C.from.x+k/Q*jt.hangOut,C.from.z+G/Q*jt.hangOut,5,1.2,.5,.6);break}case"ledgeDrop":{let k=we.get(C.ownerId);k?.onLedgeDrop(C.reason);let G=k?.ledgeEdge,Q=V.get(C.ownerId);if(G&&Q){let te=G.x-Q.pos.x,J=G.z-Q.pos.z,Se=Math.hypot(te,J)||1;Gn(G.x,G.z,{x:te/Se,z:J/Se},C.reason==="knocked"?12:7),C.reason==="timeout"&&Ue(G.x,G.z,4,.8,.4,.3)}break}case"melee":{we.get(C.ownerId)?.onMelee(C.step);let k=V.get(C.ownerId),G=C.counter?ds:vn(k),Q=Math.atan2(C.dir.z,C.dir.x),te=k?k.pos.x:C.pos.x,J=k?k.pos.z:C.pos.z;C.step===3?Xe.push({x:te,z:J,angle:Q,range:fs.melee[2],half:fs.sweepHalf,color:G,age:0,life:.16}):q.push({x:te,z:J,dx:C.dir.x,dz:C.dir.z,len:fs.melee[C.step-1],age:0,life:.13,color:G});break}case"shieldBlock":{let{x:k,z:G}=C.pos;if(C.kind==="bearer")we.get(C.targetId)?.onShieldBlock(),qt(C.pos,C.dir),Y=Math.min(1,Y+.12);else if(C.kind==="perfect")Ut(k,G,1.3,30),bt(k,1.1,G,10,1.9,ds,null,6.3,.26),Be(k,G,.3,1.6,.28,ds,.8),Y=Math.min(1,Y+.12);else for(let Q=0;Q<9;Q++){let te=Math.atan2(-C.dir.z,-C.dir.x)+(de()-.5)*2.4,J=$(2.5,6);me.spawn({x:k,y:$(.8,1.3),z:G,vx:Math.cos(te)*J,vy:$(.5,2.5),vz:Math.sin(te)*J,size:$(.09,.16),size1:.04,color:Br,alpha:1,life:$(.16,.26),gravity:9,drag:3,crisp:1})}break}case"recoil":{we.get(C.ownerId)?.onRecoil();let k=V.get(C.ownerId);k&&(Ue(k.pos.x,k.pos.z,5,1.6,.5,.5),bt(k.pos.x,1.3,k.pos.z,4,.8,Br,C.dir,1.2,.2));break}case"guardBreak":{let k=V.get(C.targetId),G=k?k.pos.x:C.pos.x,Q=k?k.pos.z:C.pos.z;xe(C.pos.x,1,C.pos.z,1.2,zn,.12),gt(C.pos.x,1,C.pos.z,12,qM,5);for(let te=0;te<6;te++){let J=te/6*Math.PI*2+de()*.4;me.spawn({x:G+Math.cos(J)*.2,y:2,z:Q+Math.sin(J)*.2,vx:Math.cos(J)*1.6,vy:$(2,3),vz:Math.sin(J)*1.6,size:.14,size1:.08,color:[.8,.93,1],alpha:.95,life:.5,gravity:9,drag:.8,crisp:1,floor:!1})}Y=Math.min(1,Y+.16);break}case"armor":{let k=V.get(C.ownerId);k&&Be(k.pos.x,k.pos.z,.5,1.3,.25,li,.8);break}case"charge":{se.set(C.ownerId,{x:C.from.x,z:C.from.z,age:0,lx:C.from.x,lz:C.from.z}),Ue(C.from.x,C.from.z,6,2,.55,.5);break}case"counterReady":{let k=V.get(C.ownerId);k&&(Be(k.pos.x,k.pos.z,.5,1.6,.3,ds,.9),Ut(k.pos.x,k.pos.z,.7,8));break}case"counterUsed":{let k=V.get(C.ownerId);k&&C.kind==="bash"&&Xe.push({x:k.pos.x,z:k.pos.z,angle:k.facing,range:fs.bash,half:fs.bashHalf,color:ds,age:0,life:.2});break}case"revive":{let{x:k,z:G}=C.pos;Be(k,G,.3,1.8,.4,Hr,.9);for(let Q=0;Q<24;Q++){let te=de()*Math.PI*2,J=$(.1,.5);Te.spawn({x:k+Math.cos(te)*J,y:$(0,.6),z:G+Math.sin(te)*J,vy:$(2,5),size:$(.12,.26),size1:.03,color:de()<.5?Hr:zn,alpha:.9,life:$(.5,.9),gravity:-1,drag:1.2})}Ue(k,G,8,2.2,.55,.5);break}case"jumpStart":{M={x:C.from.x,z:C.from.z},Ue(C.from.x,C.from.z,8,2.2,.6,.8);let k=Math.hypot(C.from.x,C.from.z)||1;Gn(C.from.x,C.from.z,{x:-C.from.x/k,z:-C.from.z/k},10);break}case"exitOpen":{for(let k of C.pos){Be(k.x,k.z,.3,1.8,.5,gf,.9);for(let G=0;G<18;G++){let Q=de()*Math.PI*2,te=$(.1,.8);Te.spawn({x:k.x+Math.cos(Q)*te,y:$(0,.8),z:k.z+Math.sin(Q)*te,vy:$(2,5),size:$(.12,.24),size1:.03,color:gf,alpha:.9,life:$(.6,1.1),gravity:-1,drag:1})}}break}case"coinDrop":{for(let k=0;k<8;k++){let G=de()*Math.PI*2;Te.spawn({x:C.pos.x,y:.5,z:C.pos.z,vx:Math.cos(G)*2,vy:$(1,3),vz:Math.sin(G)*2,size:$(.1,.18),size1:.02,color:Q0,alpha:.9,life:$(.3,.5),gravity:6,drag:2})}break}case"coinPickup":Oe().pickup(C.pos);break;case"coinsCollected":Oe().collect(C.ids);break;case"reward":{ze.spawnReward(C.pos,C.kind,C.amount),Be(C.pos.x,C.pos.z,.4,2,.45,C.kind==="coins"?Q0:XM,.9);break}case"altarBuy":vt(C.action);break;case"land":{let{x:k,z:G}=C.pos;Ue(k,G,18,3.6,.85,.9),gt(k,.2,G,10,Vo,4),Be(k,G,.4,2.6,.4,zn,.8),Y=Math.min(1,Y+.3);break}case"spawnMark":{ue.push({x:C.pos.x,z:C.pos.z,age:0,lead:Math.max(.1,C.lead)});break}case"edgeSave":{let k=V.get(C.ownerId);k&&(Be(k.pos.x,k.pos.z,.5,1.5,.3,zn,.9),ae(k.pos.x,.9,k.pos.z,8,4,zn,null,6.3));break}case"fall":{let{x:k,z:G}=C.pos;Ue(k,G,14,3.2,.8,1.8),gt(k,.3,G,8,Vo,3),Je=.7,ce=1,fe=1,le.set(k,G),Y=Math.min(1,Y+.18);break}case"death":{if(C.cause==="fall")break;let k=V.get(C.ownerId),G=_i(k),{x:Q,z:te}=C.pos;for(let J=0;J<40;J++){let Se=de()*Math.PI*2,Le=$(.2,1.6);Te.spawn({x:Q+Math.cos(Se)*.25,y:$(.2,1.8),z:te+Math.sin(Se)*.25,vx:Math.cos(Se)*Le,vy:$(.8,3.2),vz:Math.sin(Se)*Le,size:$(.12,.3),size1:.02,color:de()<.5?G:zn,alpha:.9,life:$(.6,1.2),gravity:-1.2,drag:1.4})}Be(Q,te,.4,2.4,.5,G,.8),xe(Q,1,te,2.2,G,.2,.8),Je=.35,Y=Math.min(1,Y+.2);break}default:break}}function Vr(L){z.flashes.begin();for(let O=Xe.length-1;O>=0;O--){let V=Xe[O];if(V.age+=L,V.age>=V.life){Xe.splice(O,1);continue}let C=V.age/V.life;z.flashes.push(V.x,V.z,V.angle,V.range*(.85+.15*C),V.half,1,V.color,(1-C)*1.2)}z.flashes.end()}function Bs(L){for(let O=Ke.length-1;O>=0;O--){let V=Ke[O];V.age+=L,V.age>=V.life&&Ke.splice(O,1)}for(let O of Ke){let V=O.age/O.life,C=1-Math.pow(1-V,2.2),k=O.r1*C,G=Math.min(O.len0+(O.len1-O.len0)*V,k+.15);Ie.set(O.x+O.dir.x*k,O.y+O.dir.y*k,O.z+O.dir.z*k),$e.push(Ie,O.dir,G,O.width*(1-V*.6),O.color,1-V*V)}}function hi(L){for(let O of lt){if(!O.on)continue;if(O.age+=L,O.age>=O.life){O.on=!1,O.mesh.visible=!1;continue}let V=O.age/O.life,C=1-Math.pow(1-V,2.4),k=O.r0+(O.r1-O.r0)*C;O.mesh.scale.set(k,1,k),O.mat.opacity=O.alpha*(1-V)}}let Pi=new F;function Ko(L,O){let V=new Set;ji.length=0;for(let C of L.projectiles){if(!C.alive)continue;V.add(C.id),ji.push({kind:C.kind,x:C.pos.x,z:C.pos.z,ownerId:C.ownerId});let k=C.team==="player"?Hr:O.get(C.ownerId)?vn(O.get(C.ownerId)):Nr;Pi.set(C.dir.x,0,C.dir.z),Ie.set(C.pos.x,.95,C.pos.z);let G=C.kind==="basic"?1.4:.7,Q=Math.floor(C.traveled/G),te=qe.get(C.id);if(te===void 0||Q>te){qe.set(C.id,Q);let J=C.kind==="enemyBasic"?li:k,Se=C.kind==="basic"?.9:1.6;Te.spawn({x:C.pos.x-C.dir.x*Se+$(-.08,.08),y:.95+$(-.1,.1),z:C.pos.z-C.dir.z*Se+$(-.08,.08),size:C.kind==="basic"?.1:.16,size1:.02,color:J,alpha:.9,life:.38,vx:$(-.3,.3),vz:$(-.3,.3),vy:$(0,.4)})}C.kind==="basic"?($e.push(Ie,Pi,2.2,.5,k,1),$e.push(Ie,Pi,.9,.24,zn,1)):C.kind==="control"?(nt.push(Ie,Pi,3.8,1.1,k,1),$e.push(Ie,Pi,2.4,.8,k,.7)):(nt.push(Ie,Pi,3.1,1.4,li,1),$e.push(Ie,Pi,2.3,.95,Nr,.75))}for(let C of qe.keys())V.has(C)||qe.delete(C)}function Zo(L,O){z.sectors.begin(),z.strips.begin();let V=n.rocks,C=.55+.45*Math.sin(Ve*48),k=L.variant!=="s0",G=k?.55:.16,Q=k?.34:.2,te=k?.8+.2*C:.5+.5*C;for(let J of L.fighters){if(J.state==="guard"&&J.shieldDir&&J.shieldUp!==!1){let Tt=J.guard?.perfect===!0;z.sectors.push(J.pos.x,J.pos.z,Math.atan2(J.shieldDir.z,J.shieldDir.x),1.6,fs.guardHalf,1,Tt?ds:Hr,Tt?.9:.6,.1)}let Se=J.windup;if(!Se||J.state!=="windup")continue;let Le=Math.atan2(Se.dir.z,Se.dir.x),Et=zt(Se.t/Math.max(Se.dur,.001),0,1);switch(Se.skill){case"enemyHeavy":{let Tt=J.armorKind==="heavy"&&(J.armorT??0)>0?1:0;z.sectors.push(J.pos.x,J.pos.z,Le,yn.range,yn.halfAngle,Et,Nr,1,G,Tt);break}case"melee1":case"melee2":{let Tt=Go(V,J.pos.x,J.pos.z,Se.dir.x,Se.dir.z,fs.melee[Se.skill==="melee1"?0:1]);z.strips.push(J.pos.x,J.pos.z,Le,Tt,.6,Et,vn(J),.6,.7,.18);break}case"melee3":z.sectors.push(J.pos.x,J.pos.z,Le,fs.melee[2],fs.sweepHalf,Et,vn(J),.7,.25);break;case"charge":{let Tt=Go(V,J.pos.x,J.pos.z,Se.dir.x,Se.dir.z,fs.charge);z.strips.push(J.pos.x,J.pos.z,Le,Tt,1,Et,vn(J),.85,.5,Q);break}case"enemyBasic":{let Tt=Go(V,J.pos.x,J.pos.z,Se.dir.x,Se.dir.z,Mn.range);z.strips.push(J.pos.x,J.pos.z,Le,Tt,.11,1,Nr,te,.5,Q);break}case"control":{let Tt=Go(V,J.pos.x,J.pos.z,Se.dir.x,Se.dir.z,an.range);z.strips.push(J.pos.x,J.pos.z,Le,Tt,.95,Et,vn(J),.9,.6,Q);break}case"push":z.sectors.push(J.pos.x,J.pos.z,Le,ln.range,ln.halfAngle,Et,vn(J),.9,G);break}}if(O){let J=L.fighters.find(Se=>Se.id===L.playerId);if(J&&J.state!=="dead"&&J.state!=="falling"){let Se=O.cancel?BM:Hr,Le=Math.atan2(O.dir.z,O.dir.x);if(O.skill==="basic"){let Et=Go(V,J.pos.x,J.pos.z,O.dir.x,O.dir.z,9);z.strips.push(J.pos.x,J.pos.z,Le,Et,.09,1,Se,O.cancel?.55:.85,.7)}else if(O.skill==="control"){let Et=Go(V,J.pos.x,J.pos.z,O.dir.x,O.dir.z,11);z.strips.push(J.pos.x,J.pos.z,Le,Et,.9,0,Se,O.cancel?.5:.8,.8)}else z.sectors.push(J.pos.x,J.pos.z,Le,ln.range,ln.halfAngle,1,Se,O.cancel?.6:.8)}}z.sectors.end(),z.strips.end()}function Jo(L,O,V,C,k){let G=zt(k,0,.1);Ve+=G,Je=Math.max(0,Je-G),be+=((Je>0?.32:1)-be)*Uo(14,G);let Q=G*be,te=Jd(L.variant);te!==xt.myth&&_(te),L.island&&p(L.island)!==p(n)&&(!S||p(S.isl)!==p(L.island))&&A(L.island);let J=L.s1;J&&J.phase==="air"?T||(T={dur:Math.max(.1,J.phaseT),from:M}):T=null;let Se=T&&J?zt(1-J.phaseT/T.dur,0,1):-1;E=Se>=0?B(Se):0,ze.setClouds(E,Se),S&&D(Se>=0);let Le=new Map;for(let Jt of L.fighters)Le.set(Jt.id,Jt);for(let Jt of L.fighters){let xn=we.get(Jt.id);xn&&(xn.variant!==Jt.variant||xn.look!==ne(Jt))&&(xn.dispose(),we.delete(Jt.id),xn=void 0),xn||(xn=new al(l,Jt.variant,ne(Jt)),we.set(Jt.id,xn))}for(let[Jt,xn]of we)Le.has(Jt)||(xn.dispose(),we.delete(Jt));ps(O,L,Le);let Et=new Map;if(J){let Jt=Le.get(L.playerId);if(Jt&&Se>=0){let xn=N(Jt,Se,T.from);Et.set(Jt.id,{...Jt,pos:xn.pos,y:xn.y,state:"idle",moveVel:{x:0,z:0}})}else Jt&&J.phase==="landed"&&!((Jt.protectT??0)>0)&&Et.set(Jt.id,{...Jt,protectT:Math.max(.01,J.phaseT)})}let Tt=Et.get(L.playerId)??Le.get(L.playerId),_n=2*rt(Rt/_t)*Math.tan(pu*Math.PI/360)/_t,ar=(L.variant!=="s0"?NM*_n:0)+(Tt?Tt.pos.x:0)*J0,bg=H+(Tt?Tt.pos.z:0)*J0,Sf=Uo(HM,G);R.x+=(ar-R.x)*Sf,R.y+=(bg-R.y)*Sf,fe=Math.max(0,fe-G*1.1),ce=Math.max(0,ce-G*1.5);let Tf=R.x+(le.x*.5-R.x)*.4*fe*fe,wf=R.y+(le.y*.5-R.y)*.4*fe*fe,Rf=rt(Rt/_t)*(1-.1*Math.sin(ce*Math.PI*.5));et(Ye,Tf,wf,Rf),Y=Math.max(0,Y-G*2.4);let Af=Y*Y*.55,_g=(Math.sin(Ve*53.1)+Math.sin(Ve*31.7+1.3))*.5*Af,Mg=(Math.sin(Ve*47.3+2.1)+Math.sin(Ve*29.1))*.5*Af;et(Ne,Tf,wf,Rf,_g,Mg),Ne.rotation.z=Math.sin(Ve*41)*Y*Y*.012,Ne.updateMatrixWorld(!0);for(let Jt of L.fighters){let xn=Et.get(Jt.id)??Jt,xu=we.get(xn.id);xu.setAir(Jt.id===L.playerId&&Se>=0?Se:null),xu.update(xn,C,L.variant!=="s0"),xu.wantDust(xn,Q)&&Ue(xn.pos.x,xn.pos.z,2,1,.45,.4),xn.state==="falling"&&de()<.9&&Te.spawn({x:xn.pos.x+$(-.15,.15),y:xn.y+.9,z:xn.pos.z+$(-.15,.15),size:.28,size1:.1,aspect:2.8,color:[.9,.95,1],alpha:.4,life:.4,vy:3})}if($e.begin(),nt.begin(),Ko(L,Le),Bs(Q),xt.myth&&ot&&jo(Le,Q),q.length&&Qo(Q),se.size&&ea(Le,Q),$e.end(),nt.end(),Zo(L,V),(ue.length||pe)&&At(Q),(I||J&&J.phase==="exit")&&re(J,G),Ee||J?.drops&&J.drops.length){let Jt=Et.get(L.playerId)??Le.get(L.playerId);Oe().update(J?.drops??[],Jt?{x:Jt.pos.x,y:Jt.y+1.3,z:Jt.pos.z}:null,Q)}Ge.length&&st(Q),i=L.playerId,Vr(Q),hi(Q),Te.update(Q),me.update(Q),u.setVariant(L.variant==="s0"?"s0":"v2"),u.update(G),E<.999&&(It?(a.info.reset(),It.render()):a.render(l,Ne)),(u.altar||oe)&&j(),ze.update(L.fighters,it,G,ci)}function jo(L,O){for(let[V,C]of He){C.age+=O;let k=L.get(V);if(!k||C.age>=.2){He.delete(V);continue}let G=k.pos.x-C.x,Q=k.pos.z-C.z,te=Math.hypot(G,Q);if(te<.05)continue;let J=1-C.age/.2;Ie.set(k.pos.x,.9,k.pos.z),_e.set(G/te,0,Q/te),$e.push(Ie,_e,te,.55*J+.1,C.color,.9*J),$e.push(Ie,_e,te*.8,.2*J+.05,zn,.8*J)}}function Qo(L){for(let O=q.length-1;O>=0;O--){let V=q[O];if(V.age+=L,V.age>=V.life){q.splice(O,1);continue}let C=V.age/V.life,k=V.len*(.55+.45*(1-Math.pow(1-C,3)));Ie.set(V.x+V.dx*k,1.05,V.z+V.dz*k),_e.set(V.dx,0,V.dz),$e.push(Ie,_e,k*.8,.42*(1-C*.5),V.color,.9*(1-C)),$e.push(Ie,_e,k*.5,.16,zn,.9*(1-C))}}function ea(L,O){for(let[V,C]of se){let k=L.get(V);if(!k){se.delete(V);continue}if(k.state!=="charge"&&(C.age+=O),C.age>=.25){se.delete(V);continue}let G=k.pos.x-C.x,Q=k.pos.z-C.z,te=Math.hypot(G,Q);if(te<.05)continue;let J=1-C.age/.25,Se=vn(k);if(Ie.set(k.pos.x,.9,k.pos.z),_e.set(G/te,0,Q/te),$e.push(Ie,_e,te,.95*J+.1,Se,.85*J),$e.push(Ie,_e,te*.85,.35*J+.05,zn,.85*J),k.state==="charge"){let Le=k.pos.x-C.lx,Et=k.pos.z-C.lz,Tt=Math.hypot(Le,Et),_n=Math.max(1,Math.ceil(Tt/.15));for(let ms=0;ms<_n;ms++){let ar=(ms+.5)/_n;me.spawn({x:C.lx+Le*ar,y:$(.6,1.2),z:C.lz+Et*ar,size:.75,size1:.35,color:Se,alpha:.55,life:.28,drag:2})}me.spawn({x:k.pos.x,y:.12,z:k.pos.z,vx:-G/te*2,vy:$(.3,1),vz:-Q/te*2,size:.4,size1:.9,color:j0,alpha:.5,life:.4,drag:3})}C.lx=k.pos.x,C.lz=k.pos.z}}let I=null,Z=new Set;function re(L,O){I||(I=new ul(l,2));let V=L&&L.phase==="exit"?L.exits:[];if(I.update(V,Ne,O),u.altar)for(let C of V){let k=`${C.pos.x.toFixed(2)},${C.pos.z.toFixed(2)}`;Z.has(k)||(Z.add(k),u.altar.openRailAt(C.pos,1.7))}for(let C of V)if(de()<.25){let k=de()*Math.PI*2,G=$(.2,1);Te.spawn({x:C.pos.x+Math.cos(k)*G,y:$(0,.4),z:C.pos.z+Math.sin(k)*G,vy:$(1.5,3.5),size:$(.1,.2),size1:.03,color:gf,alpha:.8,life:$(.7,1.2),gravity:-.5,drag:.8})}}let oe=!1;function j(){let L=u.altar;if(!L){ze.setLabels([]),oe=!1;return}let O=[];for(let V of n.spots??[]){let C=V.kind;if(!L.spots.has(C))continue;let k=a0[C],G=it({x:V.pos.x+Math.cos(V.facing)*k.front,z:V.pos.z+Math.sin(V.facing)*k.front},o0);O.push({key:C,text:k.text,svg:k.svg,color:"#"+k.color.toString(16).padStart(6,"0"),x:G.x,y:G.y,visible:G.visible})}ze.setLabels(O,{left:tg,right:eg}),oe=!0}let Ee=null,Oe=()=>Ee??(Ee=new dl(l)),Qe=null,Ge=[],dt={athena:An(16770984),hermes:An(14218495),poseidon:An(10478335),convert:An(16747098),revive:An(10479871)};function vt(L){let O=L.kind==="bless"?L.blessing:L.kind,V=u.altar?.spots.get(O),C=(n.spots??[]).find(J=>J.kind===O),k=V?V.getWorldPosition(new F):C?new F(C.pos.x,0,C.pos.z):null;if(!k)return;let G=dt[O];Qe??(Qe=Hh());let Q=new Wt;Q.name=`fx-altar-${O}`;let te=new xi(new si({map:Qe,color:new Ze().setRGB(G[0],G[1],G[2],Mt),blending:Ai,depthWrite:!1,transparent:!0,fog:!1}));te.position.set(0,O==="revive"?1.2:2.2,0),Q.add(te),Q.position.copy(k),l.add(Q),Ge.push({grp:Q,sprite:te,age:0,life:1}),Be(k.x,k.z,.6,2.6,.7,G,.9);for(let J=0;J<26;J++){let Se=de()*Math.PI*2,Le=$(.2,1);Te.spawn({x:k.x+Math.cos(Se)*Le,y:$(.2,2.6),z:k.z+Math.sin(Se)*Le,vy:$(1.5,4),size:$(.12,.26),size1:.03,color:de()<.4?zn:G,alpha:.9,life:$(.6,1),gravity:-.6,drag:1})}}function st(L){for(let O=Ge.length-1;O>=0;O--){let V=Ge[O];if(V.age+=L,V.age>=V.life){V.grp.removeFromParent(),V.sprite.material.dispose(),Ge.splice(O,1);continue}let C=V.age/V.life;V.sprite.scale.setScalar(1.5+3.5*Math.sin(Math.min(1,C*1.6)*Math.PI*.5)),V.sprite.material.opacity=(C<.15?C/.15:1-(C-.15)/.85)*.95}}function At(L){pe||(pe=new hl(l,4)),pe.begin();for(let O=ue.length-1;O>=0;O--){let V=ue[O];if(V.age+=L,V.age>=V.lead+.2){ue.splice(O,1);continue}let C=zt(V.age/V.lead,0,1),k=V.age>V.lead?1-(V.age-V.lead)/.2:1,G=.85+.15*Math.sin(V.age*18);pe.push(V.x,V.z,1.1,C,Nr,k*G)}pe.end()}function qt(L,O){let V=Math.atan2(-O.z,-O.x);me.spawn({x:L.x,y:1,z:L.z,size:2.6,size1:.9,color:Br,alpha:.95,life:.2}),me.spawn({x:L.x,y:1,z:L.z,size:1.2,size1:2.4,color:zn,alpha:.7,life:.16});for(let C=0;C<70;C++){let k=V+(de()-.5)*3.2,G=$(5,13);me.spawn({x:L.x,y:$(.5,1.6),z:L.z,vx:Math.cos(k)*G,vy:$(.8,4.5),vz:Math.sin(k)*G,size:$(.16,.32),size1:.06,color:Br,alpha:1,life:$(.24,.4),gravity:9,drag:2.6,crisp:1})}bt(L.x,1,L.z,10,1.8,Br,O,3.4,.24);for(let C=0;C<14;C++){let k=V+(de()-.5)*2.6,G=$(10,17),Q=Math.cos(k)*G,te=$(1.5,5),J=Math.sin(k)*G,Se=$(.8,1.3),Le=$(.26,.38);for(let Et=0;Et<6;Et++){let Tt=Et*.014;me.spawn({x:L.x-Q*Tt,y:Se-te*Tt,z:L.z-J*Tt,vx:Q,vy:te,vz:J,size:.2-Et*.026,size1:.04,color:Et<2?GM:WM,alpha:1,life:Le-Tt,gravity:14,drag:1.2,crisp:1})}}}function rn(L,O){me.spawn({x:L.x,y:1,z:L.z,size:1.4,size1:.5,color:Br,alpha:.9,life:.16});for(let V=0;V<36;V++){let C=Math.atan2(-O.z,-O.x)+(de()-.5)*2.8,k=$(4,10);me.spawn({x:L.x,y:$(.6,1.5),z:L.z,vx:Math.cos(C)*k,vy:$(.5,3.5),vz:Math.sin(C)*k,size:$(.13,.25),size1:.05,color:Br,alpha:1,life:$(.2,.32),gravity:9,drag:3,crisp:1})}}function tn(){for(let L of we.values())L.dispose();we.clear(),qe.clear(),Te.clear(),me.clear(),Ke.length=0,Xe.length=0,He.clear(),q.length=0,se.clear(),ue.length=0,T=null,M=null,E=0,ze.setClouds(0,-1),Ee?.clear(),Z.clear();for(let L of Ge)L.grp.removeFromParent(),L.sprite.material.dispose();Ge.length=0;for(let L of lt)L.on=!1,L.mesh.visible=!1;ze.clear(),Y=0,ce=0,fe=0,Je=0,be=1}ke(Rt,_t);let Kt=[],ct=[];function Zt(){if(xt.myth||!Jd("v4"))return;let L=Math.random,O=625341585;Math.random=()=>{O=O+1831565813>>>0;let k=O;return k=Math.imul(k^k>>>15,k|1),k^=k+Math.imul(k^k>>>7,k|61),((k^k>>>14)>>>0)/4294967296};let V=a.getRenderTarget(),C=new Qt;try{xt.myth=!0;let k=new ns,G=jh(k,n,h);d.set(x(!0,n),{world:G,background:k.background,fog:k.fog}),k.environment=f(),k.environmentIntensity=.7;for(let[J,Se]of[[0,"myth"],[1,"myth-shield"],[2,"myth-archer"]])Kt.push(new al(k,J,Se));let Q=new ul(k,2);Q.update([{pos:{x:1,z:0},progress:.5,reward:"coins"},{pos:{x:-1,z:0},progress:.5,reward:"heal"}],Ne,.016);let te=new dl(k);te.update([{id:1,pos:{x:0,z:1}}],null,.016),ct.push(Q,te),o(),a.compile(k,Ne);for(let J of[...l.children])J!==u.root&&a.compile(J,Ne,k);k.traverse(J=>{let Se=J.material;for(let Le of Array.isArray(Se)?Se:Se?[Se]:[])for(let Et of Object.values(Le))Et&&Et.isTexture&&a.initTexture(Et)}),a.setRenderTarget(null),a.getViewport(C),a.setViewport(0,0,4,4),a.render(k,Ne)}finally{xt.myth=!1,o(),a.setRenderTarget(V),C.z>0&&a.setViewport(C),Math.random=L}}Zt();let Nt=L=>{W.clear();for(let[O,V]of Object.entries(L))W.set(Number(O),V)},Cn=L=>{ot=L},Mi=L=>we.get(L)?.look??null,In=L=>we.get(L)?.root.visible??!1,Di=()=>{let L=new di,O=te=>(L.setFromObject(te),{min:L.min.toArray().map(J=>+J.toFixed(3)),max:L.max.toArray().map(J=>+J.toFixed(3)),height:+L.max.y.toFixed(3)}),V=we.get(i),C=null;V&&(L.setFromObject(V.root),C=+(L.max.y-V.root.position.y).toFixed(3));let k=u.altar,G=[];l.traverseVisible(te=>{te.name.startsWith("fx-")&&G.push(te.name)});for(let te of e.querySelectorAll("[data-fx]"))te.dataset.active==="1"&&G.push(te.dataset.fx);let Q=[];return u.root.traverse(te=>{te.name.startsWith("altar-mosaic")&&Q.push(te.name)}),{island:n.kind??"battle",playerHeight:C,spots:k?[...k.spots].map(([te,J])=>({kind:te,name:J.name,...O(J)})):[],rail:k?{top:+Math.max(...k.rail.map(te=>(L.setFromObject(te),L.max.y))).toFixed(3),posts:k.railPosts()}:null,mosaic:Q,columns:Fe().length,labels:[...e.querySelectorAll(".ro-label")].filter(te=>te.dataset.active==="1").map(te=>({kind:te.dataset.label,text:te.textContent})),coins:Ee?Ee.shown:0,beacons:I?[0,1].map(te=>({icon:I.iconOf(te)})):[],fx:G}},on=(L,O)=>{let C=new F(L.x,O,L.z).clone().sub(Ne.position),k=C.length(),G=new xo(Ne.position.clone(),C.normalize()),Q=[],te=new di,J=new F;for(let[Se,Le]of u.altar?.spots??[])Se!=="athena"&&Se!=="hermes"&&Se!=="poseidon"||(te.setFromObject(Le),G.intersectBox(te,J)&&J.distanceTo(Ne.position)<k&&Q.push(Se));return{hits:Q,dist:+k.toFixed(2)}},Tn=L=>{let O=u.root.getObjectByName(L);if(!O)return null;let V=new di().setFromObject(O),C=1e9,k=1e9,G=-1e9,Q=-1e9;for(let te of[V.min.x,V.max.x])for(let J of[V.min.y,V.max.y])for(let Se of[V.min.z,V.max.z]){let Le=it({x:te,z:Se},J);C=Math.min(C,Le.x),k=Math.min(k,Le.y),G=Math.max(G,Le.x),Q=Math.max(Q,Le.y)}return{x0:Math.round(C),y0:Math.round(k),x1:Math.round(G),y1:Math.round(Q)}},U=L=>{let O=we.get(L);if(!O)return null;let V=new di().setFromObject(O.root),C=1e9,k=1e9,G=-1e9,Q=-1e9;for(let te of[V.min.x,V.max.x])for(let J of[V.min.y,V.max.y])for(let Se of[V.min.z,V.max.z]){let Le=it({x:te,z:Se},J);C=Math.min(C,Le.x),k=Math.min(k,Le.y),G=Math.max(G,Le.x),Q=Math.max(Q,Le.y)}return{rect:{x0:Math.round(C),y0:Math.round(k),x1:Math.round(G),y1:Math.round(Q)},ring:+O.ground.scale.x.toFixed(4),pos:O.root.position.toArray().map(te=>+te.toFixed(4)),facingY:+O.root.rotation.y.toFixed(4),probe:O.styleProbe()}},ee=()=>Ne.position.toArray().map(L=>+L.toFixed(4)),ge=L=>{let O=[],V=new F;return u.root.updateMatrixWorld(!0),u.root.traverse(C=>{if(!C.name.startsWith(L))return;let k=1/0;C.traverse(G=>{let Q=G;if(!Q.isMesh||!Q.geometry)return;let te=Q.geometry.getAttribute("position"),J=Q.isInstancedMesh?Q:null,Se=J?J.count:1,Le=new ht;for(let Et=0;Et<Se;Et++){J&&J.getMatrixAt(Et,Le);for(let Tt=0;Tt<te.count;Tt+=1)V.fromBufferAttribute(te,Tt),J&&V.applyMatrix4(Le),V.applyMatrix4(Q.matrixWorld),k=Math.min(k,Math.hypot(V.x,V.z))}}),O.push({name:C.name,minDist:+k.toFixed(3),spots:C.userData.spots??null,count:C.isInstancedMesh?C.count:1})}),O},Fe=()=>{let L=[];return u.root.traverse(O=>{O.name==="rock-column"&&L.push({x:O.position.x,z:O.position.z})}),L};return{render:Jo,resize:ke,worldToScreen:it,screenToGround:X,reset:tn,setIsland:A,setDemoLooks:Nt,blockSpark:rn,setKnockTrails:Cn,lookOf:Mi,drawn:In,rockColumns:Fe,swapLog:()=>w.splice(0),s1bDebug:Di,raycastToBeamTop:on,screenRect:Tn,fighterDebug:U,cameraPos:ee,objectInfo:ge}}var Wo=62,vf=50,xf=.14,YM=14,$M=1.1,mu=.8,Or={basic:'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="24" cy="24" r="3.5" fill="currentColor"/><path d="M24 4v10M24 34v10M4 24h10M34 24h10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',control:'<svg viewBox="0 0 48 48"><circle cx="21" cy="21" r="11" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="21" cy="21" r="2.5" fill="currentColor"/><path d="M21 4v8M21 30v8M4 21h8M30 21h8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><circle cx="36" cy="36" r="8" fill="#0b1a2b" stroke="currentColor" stroke-width="2.5"/><path d="M36 31v5l3 2" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>',push:'<svg viewBox="0 0 48 48"><path d="M8 24l12-10v7h8v6h-8v7z" fill="currentColor"/><path d="M32 10l6 6M34 24h8M32 38l6-6" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',dash:'<svg viewBox="0 0 48 48"><path d="M8 12l12 12-12 12M22 12l12 12-12 12" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>'},yl={basic:'<svg viewBox="0 0 48 48"><path d="M6 42L31 17" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><path d="M27.5 13.5L42 6l-7.5 14.5z" fill="currentColor"/><path d="M4 32l8-8M14 44l8-8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/></svg>',control:'<svg viewBox="0 0 48 48"><path d="M6 38Q18 10 40 22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="2 5" opacity="0.65"/><path d="M12 36l24-12" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><path d="M34 17l11 6-11 7z" fill="currentColor"/></svg>',push:'<svg viewBox="0 0 48 48"><circle cx="21" cy="24" r="15" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="3"/><circle cx="21" cy="24" r="7" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="21" cy="24" r="2.5" fill="currentColor"/><path d="M40 15l6 9-6 9" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>'},gu={athena:"\u96C5\u5178\u5A1C",hermes:"\u8D6B\u8033\u58A8\u65AF",poseidon:"\u6CE2\u8CFD\u9813"},KM={athena:'<svg viewBox="0 0 24 24"><path d="M12 2.500l7.500 2.800v6.200c0 4.500-3 8-7.500 10-4.500-2-7.500-5.500-7.500-10V5.300z" fill="currentColor"/><path d="M12 6.500v11M7.500 11h9" stroke="#0b1a2b" stroke-width="1.800" stroke-linecap="round"/></svg>',hermes:'<svg viewBox="0 0 24 24"><path d="M5 9h6v6h6.500a2.500 2.500 0 0 1 2.500 2.500V19H5z" fill="currentColor"/><path d="M11 7.500c1.800-3.200 5-4.200 9-3.200-2.500.8-3.800 2-4.500 3.800M11 9c1.500-2.200 3.800-3 6.500-2.500" fill="none" stroke="currentColor" stroke-width="1.600" stroke-linecap="round"/></svg>',poseidon:'<svg viewBox="0 0 24 24"><path d="M12 21.500V6.500M5 4.500v4.500a7 7 0 0 0 14 0V4.500M12 2.500L10.200 5.500M12 2.500l1.800 3M5 4.500L3.500 6.800M5 4.500l1.500 2.300M19 4.500l-1.500 2.300M19 4.500l1.500 2.300" fill="none" stroke="currentColor" stroke-width="1.900" stroke-linecap="round" stroke-linejoin="round"/></svg>'},ZM={...gu,convert:"\u6230\u795E\u796D\u58C7",revive:"\u5361\u620E\u7684\u5C0F\u8239"},JM='<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5" fill="#ffd35a" stroke="#b8860b" stroke-width="1.5"/><circle cx="12" cy="12" r="5.5" fill="none" stroke="#b8860b" stroke-width="1.5"/></svg>',jM={coins:"\u9322\u4E0D\u5920",held:"\u5DF2\u6301\u6709",convertUsed:"\u9019\u5EA7\u5DF2\u6539\u5949",hasRevive:"\u5FA9\u6D3B\u9084\u5728",noPath:"\u7121\u9053\u8DEF\u4E0D\u80FD\u6539\u5949",notHere:""},QM='<svg viewBox="0 0 48 48"><path d="M4 14h12M2 24h16M4 34h12" stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity="0.6"/><path d="M20 10l14 14-14 14" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M42 8v32" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>',og=new URLSearchParams(location.search),Us=og.get("art")==="myth",bf=og.get("cam")==="near",ig=()=>`${Us?" \xB7 \u795E\u8A71":""}${bf?" \xB7 \u62C9\u8FD1":""}`;function sg(s,e){let t=new URLSearchParams(location.search);t.get(s)===e?t.delete(s):t.set(s,e);let n=t.toString();history.replaceState(null,"",`${location.pathname}${n?`?${n}`:""}${location.hash}`),location.reload()}var yf=[{id:"basic",label:"\u57FA\u790E\u653B\u64CA",cls:"big"},{id:"dash",label:"\u4F4D\u79FB",cls:""},{id:"control",label:"\u63A7\u5236",cls:""},{id:"push",label:"\u64CA\u9000",cls:""}],eE=(s,e)=>`
<div class="hud" hidden>
  <div class="hp" data-box="hp"><div class="hp-fill"></div><span class="hp-text">100 / 100</span></div>
  <div class="timer" data-box="timer">00:00</div>
  <button class="pause" data-box="pause" aria-label="\u66AB\u505C"><svg viewBox="0 0 24 24"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor"/></svg></button>
  <div class="ver" data-box="ver"></div>
  <div class="coins s1only" title="\u9280\u5E63"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.5" fill="#ffd35a" stroke="#b8860b" stroke-width="1.5"/><circle cx="12" cy="12" r="5.5" fill="none" stroke="#b8860b" stroke-width="1.5"/></svg><span class="coins-n">0</span></div>
  <div class="hudrow">
    <div class="revive v4only" title="\u5269\u9918\u5FA9\u6D3B\u6B21\u6578"><svg viewBox="0 0 24 24"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.800-8 11-8 11z" fill="currentColor"/></svg><span class="revive-n">\xD71</span></div>
    <div class="blessings s1only"></div>
  </div>
  <div class="wave v4only">\u7B2C 1 \u6CE2</div>
  <div class="protect">\u4FDD\u8B77\u4E2D</div>
  <div class="exit-hint">\u6E05\u5834\uFF01\u8D70\u9032\u51FA\u53E3\u5149\u5708</div>
  <div class="reviving"><b>\u5361\u620E\u6E21\u4F60\u56DE\u4F86</b><i class="reviving-t"></i></div>
</div>
<div class="controls" hidden>
  <div class="stick-zone"></div>
  <div class="offers" hidden></div>
  <div class="stick" data-box="stick"><div class="knob"></div></div>
  ${yf.map(t=>`<div class="skill ${t.id} ${t.cls}" data-skill="${t.id}" data-box="skill-${t.id}" data-icon="${e&&t.id!=="dash"?"myth":"default"}" aria-label="${t.label}">${s[t.id]}${t.id==="dash"?'<u class="lbl">\u7FFB\u56DE</u>':""}<i class="cd"></i><b class="cdt"></b><em class="cancel">\u53D6\u6D88</em><em class="auto">\u81EA\u52D5</em></div>`).join("")}
</div>
<div class="banner" aria-live="polite"></div>
<div class="menu menu-title" hidden>
  <div class="panel">
    <h1>\u6D6E\u5CF6\u7375\u4EBA S0</h1>
    <p class="sub">\u4FEF\u8996\u89D2\u7375\u4EBA\u6230\u9B25\u539F\u578B</p>
    <p class="title-ver"></p>
    <div class="modes entries">
      <section class="mode main v4row">
        <h3>\u5019\u9078 v0.4 \u8FD1\u6230\uFF08\u9078\u9053\u8DEF\uFF09</h3>
        <div class="btns row"><div class="tbtn main" role="button" data-act="v4-ares">\u963F\u745E\u65AF</div><div class="tbtn main" role="button" data-act="v4-mars">\u746A\u723E\u65AF</div><div class="tbtn" role="button" data-act="v4-none">\u7121\u9053\u8DEF\uFF08\u5C0D\u7167\uFF09</div></div>
      </section>
      <section class="mode main v4row">
        <h3>\u5019\u9078 S1\uFF08\u5B8C\u6574\u4E00\u5C40\uFF09</h3>
        <div class="btns row"><div class="tbtn main" role="button" data-act="s1-ares">\u963F\u745E\u65AF</div><div class="tbtn main" role="button" data-act="s1-mars">\u746A\u723E\u65AF</div><div class="tbtn" role="button" data-act="s1-none">\u7121\u9053\u8DEF\uFF08\u5C0D\u7167\uFF09</div></div>
      </section>
    </div>
    <div class="modes">
      <section class="mode main">
        <h3>\u5019\u9078 v0.2\uFF08\u93E1\u50CF\u7375\u4EBA\uFF09</h3>
        <div class="btns row"><button data-act="start-v2-1v1">1 \u5C0D 1</button></div>
      </section>
      <section class="mode main">
        <h3>\u5019\u9078 v0.3 \u6500\u9644</h3>
        <div class="btns row"><button data-act="start-v3-1v1">1 \u5C0D 1</button></div>
        <button class="depth" data-act="ledge-depth">\u6500\u9644\u9580\u6ABB\uFF1A2.6</button>
      </section>
      <section class="mode alt">
        <h3>S0 \u57FA\u6E96</h3>
        <div class="btns row"><button class="ghost" data-act="start-s0-1v1">1 \u5C0D 1</button><button class="ghost" data-act="start-s0-1v2">1 \u5C0D 2</button></div>
      </section>
    </div>
    <div class="btns row"><div class="tbtn" role="button" data-act="art-toggle">\u756B\u9762\uFF1A${e?"\u795E\u8A71\u907A\u8DE1\uFF08\u5019\u9078\uFF09":"\u73FE\u884C"}</div><div class="tbtn" role="button" data-act="cam-toggle">\u93E1\u982D\uFF1A${bf?"\u62C9\u8FD1":"\u5168\u5CF6"}</div><button class="ghost small" data-act="howto">\u64CD\u4F5C\u8AAA\u660E</button></div>
  </div>
</div>
<div class="menu menu-howto" hidden>
  <div class="panel wide">
    <h2>\u64CD\u4F5C\u8AAA\u660E</h2>
    <div class="cols">
      <div><h3>\u89F8\u63A7</h3><ul>
        <li>\u5DE6\u624B\u62D6\u66F3\uFF1D\u79FB\u52D5\uFF08\u6416\u687F\u51FA\u73FE\u5728\u6309\u4E0B\u7684\u4F4D\u7F6E\uFF09</li>
        <li>\u5927\u9375\uFF1D\u57FA\u790E\u653B\u64CA\uFF1A\u6309\u4F4F\u9023\u5C04\uFF1B\u9EDE\u4E00\u4E0B\u81EA\u52D5\u7784\u6E96\uFF0C\u62D6\u66F3\u624B\u52D5\u7784\u6E96</li>
        <li>\u63A7\u5236\uFF0F\u64CA\u9000\u9375\uFF1A\u9EDE\u4E00\u4E0B\u81EA\u52D5\u7784\u6E96\uFF1B\u62D6\u66F3\u7784\u6E96\u5F8C\u653E\u958B\u65BD\u653E</li>
        <li>\u62D6\u96E2\u518D\u62D6\u56DE\u6309\u9375\u4E2D\u5FC3\u653E\u958B\uFF1D\u53D6\u6D88\u65BD\u653E</li>
        <li>\u4F4D\u79FB\u9375\uFF1A\u6CBF\u6416\u687F\u65B9\u5411\u885D\u523A</li>
      </ul></div>
      <div><h3>\u684C\u9762</h3><ul>
        <li>WASD \u79FB\u52D5\u3001\u6ED1\u9F20\u7784\u6E96\u3001\u5DE6\u9375\u6309\u4F4F\u5C04\u64CA</li>
        <li>Q\uFF1D\u63A7\u5236\u3001E\uFF1D\u64CA\u9000\uFF1A\u6309\u4F4F\u986F\u793A\u6307\u793A\u5668\uFF0C\u653E\u958B\u65BD\u653E</li>
        <li>\u6309\u4F4F\u671F\u9593\u6309\u53F3\u9375\u6216 Esc\uFF1D\u53D6\u6D88</li>
        <li>\u7A7A\u767D\u9375\uFF0FShift\uFF1D\u885D\u523A\uFF1BEsc\uFF1D\u66AB\u505C</li>
      </ul></div>
    </div>
    <p class="note">\u5019\u9078 v0.4\uFF1A\u666E\u653B\u6309\u4F4F\u9023\u64CA\u4E09\u6BB5\u3002\u963F\u745E\u65AF\uFF1D\u9EDE\u9053\u8DEF\u9375\u885D\u649E\uFF1B\u746A\u723E\u65AF\uFF1D\u6309\u4F4F\u9053\u8DEF\u9375\u8209\u76FE\uFF08\u62D6\u66F3\u6307\u5B9A\u76FE\u5411\uFF0C\u62D6\u56DE\u4E2D\u5FC3\uFF1D\u81EA\u52D5\uFF09\uFF0C\u5B8C\u7F8E\u683C\u64CB\u5F8C\u51FA\u73FE\u91D1\u5149\u53CD\u64CA\u6A5F\u6703\uFF0C\u6309\u666E\u653B\u6216\u9053\u8DEF\u9375\u53CD\u64CA\u3002\u9375\u76E4\uFF1AJ\uFF1D\u666E\u653B\uFF08\u6309\u4F4F\u9023\u64CA\uFF09\u3001E\uFF1D\u9053\u8DEF\u9375\uFF08\u746A\u723E\u65AF\u6309\u4F4F\u8209\u76FE\uFF09\u3001Q\uFF1D\u64F2\u77DB\u3002</p>
    <p class="note">\u5019\u9078 v0.3\uFF1A\u88AB\u64CA\u9000\u51FA\u754C\u6642\u6703\u6293\u4F4F\u5D16\u908A 0.8 \u79D2\uFF0C\u6309\u885D\u523A\u9375\u7FFB\u56DE\uFF1B\u88AB\u9707\u64CA\u6253\u4E2D\u6703\u9B06\u624B\u3002</p>
    <p class="note">\u5019\u9078\u7248\uFF1A\u5CA9\u77F3\u6703\u64CB\u5B50\u5F48\u548C\u9707\u64CA\uFF1B\u88AB\u64CA\u98DB\u6642\u63D0\u65E9\u6309\u885D\u523A\uFF0C\u6703\u5728\u53EF\u4EE5\u885D\u523A\u7684\u77AC\u9593\u81EA\u52D5\u767C\u52D5\uFF08\u7D04 0.15 \u79D2\u5167\uFF09\u3002</p>
    <div class="btns"><button data-act="back">\u8FD4\u56DE</button></div>
  </div>
</div>
<div class="menu menu-pause" hidden>
  <div class="panel">
    <h2>\u66AB\u505C</h2>
    <div class="btns">
      <button data-act="resume">\u7E7C\u7E8C</button>
      <button data-act="restart">\u91CD\u65B0\u958B\u59CB</button>
      <button data-act="title">\u56DE\u6A19\u984C</button>
      <button class="ghost" data-act="mute">\u97F3\u6548\uFF1A\u958B</button>
    </div>
  </div>
</div>
<div class="menu menu-result" hidden>
  <div class="panel">
    <h2 class="res-title">\u52DD\u5229</h2>
    <p class="res-text"></p>
    <details class="edge" hidden>
      <summary>\u51FA\u754C\u7D00\u9304\uFF08<span class="edge-n">0</span>\uFF09</summary>
      <div class="edge-list"></div>
    </details>
    <div class="s1res" hidden><p class="s1where"></p><p class="s1death"></p><p class="s1coins"></p></div>
    <div class="v4res" hidden><p class="v4kills"></p><p class="v4meta"></p></div>
    <dl class="stats">
      <div><dt>\u547D\u4E2D\u7387</dt><dd data-stat="acc">\u2014</dd></div>
      <div><dt>\u9023\u62DB\u6578</dt><dd data-stat="combos">0</dd></div>
      <div><dt>\u64CA\u843D\u6578</dt><dd data-stat="fall">0</dd></div>
      <div><dt>\u64CA\u5012\u6578</dt><dd data-stat="hp">0</dd></div>
    </dl>
    <div class="btns row">
      <button data-act="again">\u518D\u4E00\u5834</button>
      <button class="ghost" data-act="title">\u56DE\u6A19\u984C</button>
      <div class="tbtn" role="button" data-act="copy-record" hidden>\u8907\u88FD\u7D00\u9304</div>
      <div class="tbtn" role="button" data-act="clear-record" hidden>\u6E05\u9664\u7D00\u9304</div>
    </div>
    <p class="clear-confirm" hidden>\u78BA\u5B9A\u6E05\u9664\u5168\u90E8 <b class="clear-n">0</b> \u5C40\u7D00\u9304\uFF1F<span class="tbtn tiny danger" role="button" data-act="clear-yes">\u78BA\u5B9A</span><span class="tbtn tiny" role="button" data-act="clear-no">\u53D6\u6D88</span></p>
    <p class="copy-status" hidden></p>
    <textarea class="copybox" readonly hidden aria-label="\u8A66\u73A9\u7D00\u9304 JSON"></textarea>
  </div>
</div>
<div class="rotate"><div>\u8ACB\u628A\u624B\u6A5F\u8F49\u6210\u6A6B\u5F0F</div></div>
`,rg=(s,e)=>{let t=Math.hypot(s,e);return t<1e-6?null:{x:s/t,z:e/t}};function ag(s,e){s.innerHTML=eE(Us?{...Or,...yl}:Or,Us),s.classList.toggle("art-myth",Us);let t=U=>s.querySelector(U),n=t(".hud"),i=t(".controls"),r={title:t(".menu-title"),howto:t(".menu-howto"),pause:t(".menu-pause"),result:t(".menu-result")},a=t(".stick-zone"),o=t(".stick"),l=t(".knob"),c=t(".hp-fill"),h=t(".hp-text"),u=t(".timer"),d=t(".ver"),p=t(".banner"),m=Object.fromEntries(yf.map(U=>[U.id,t(`.skill.${U.id}`)])),x=Object.fromEntries(yf.map(U=>[U.id,{ring:m[U.id].querySelector(".cd"),text:m[U.id].querySelector(".cdt")}])),v=document.querySelector('meta[name="build-sha"]')?.getAttribute("content")??"",f=`${Os} \xB7 ${v&&!v.startsWith("__")?v:"dev"}${ig()}`;d.textContent=f,t(".title-ver").textContent=`${Os}${ig()}`;let y=!1,b=!1,g=!1,_="1v1",S="s0",w=2.6,T="ares",M=!1,E=null,A={basic:null,control:null,push:null},D=null,B=!1,P=!1,N=!1,W=!1,ne=!1,q=new Set,se=null,ue=!1,pe=!1,He=!1,ot=0,Ne=0,Ye=null,ie=()=>y&&!b,K={basic:0,control:0,push:0,dash:0};function ye(U){if(U==="basic"||!(K[U]>.05))return;let ee=m[U];ee.classList.remove("denied"),ee.offsetWidth,ee.classList.add("denied"),window.setTimeout(()=>ee.classList.remove("denied"),300)}let Te=()=>S==="v4"||S==="s1",me=()=>Te()&&T==="mars";function $e(U,ee){return ee!=="basic"&&U.dragged&&Math.hypot(U.x-U.cx,U.y-U.cy)<U.r*mu}function nt(U){let ee=rg(U.x-U.cx,U.y-U.cy);return ee&&Math.hypot(U.x-U.cx,U.y-U.cy)>=U.r*mu&&(U.lastDir=ee),U.lastDir}function z(){if(!He)return null;let U=e.getPlayerPos(),ee=U&&e.screenToGround(ot,Ne);return!U||!ee||(Ye=rg(ee.x-U.x,ee.z-U.z)??Ye),Ye}function lt(){o.classList.remove("active"),o.style.left=o.style.top=o.style.bottom="",l.style.transform=""}function Ke(){E=null,lt();for(let U of["basic","control","push"])A[U]=null;for(let U of Object.keys(m))m[U].classList.remove("pressed","aiming","cancelling","autoaim","denied");D=null,B=!1,P=!1,N=!1,q.clear(),se=null,ue=!1,pe=!1,W=!1,ne=!1}a.addEventListener("pointerdown",U=>{if(U.pointerType==="mouse"||E||!ie())return;U.preventDefault(),a.setPointerCapture(U.pointerId);let ee=Math.min(Math.max(U.clientX,Wo+4),window.innerWidth-Wo-4),ge=Math.min(Math.max(U.clientY,Wo+4),window.innerHeight-Wo-4);E={pid:U.pointerId,cx:ee,cy:ge,move:{x:0,z:0}},o.classList.add("active"),o.style.left=`${ee-Wo}px`,o.style.top=`${ge-Wo}px`,o.style.bottom="auto",Xe(U)});function Xe(U){if(!E||U.pointerId!==E.pid)return;let ee=U.clientX-E.cx,ge=U.clientY-E.cy,Fe=Math.hypot(ee,ge),Me=Fe>vf?vf/Fe:1;l.style.transform=`translate(${ee*Me}px, ${ge*Me}px)`;let L=Math.min(Fe/vf,1);if(L<=xf)E.move={x:0,z:0};else{let O=(L-xf)/(1-xf);E.move={x:ee/Fe*O,z:ge/Fe*O}}}function ze(U){!E||U.pointerId!==E.pid||(E=null,lt())}a.addEventListener("pointermove",Xe),a.addEventListener("pointerup",ze),a.addEventListener("pointercancel",ze);for(let U of["basic","control","push"]){let ee=m[U];ee.addEventListener("pointerdown",Fe=>{if(A[U]||!ie())return;Fe.preventDefault(),ee.setPointerCapture(Fe.pointerId);let Me=ee.getBoundingClientRect();A[U]={pid:Fe.pointerId,cx:Me.left+Me.width/2,cy:Me.top+Me.height/2,r:Me.width/2,sx:Fe.clientX,sy:Fe.clientY,x:Fe.clientX,y:Fe.clientY,dragged:!1,lastDir:null},ee.classList.add("pressed"),ye(U),U==="basic"&&Te()&&(P=!0),U==="push"&&me()&&(N=!0,ee.classList.add("autoaim"))}),ee.addEventListener("pointermove",Fe=>{let Me=A[U];if(!(!Me||Fe.pointerId!==Me.pid)){if(Me.x=Fe.clientX,Me.y=Fe.clientY,!Me.dragged&&Math.hypot(Me.x-Me.sx,Me.y-Me.sy)>=YM&&Math.hypot(Me.x-Me.cx,Me.y-Me.cy)>Me.r*$M&&(Me.dragged=!0),U==="push"&&me()){let L=!Me.dragged||Math.hypot(Me.x-Me.cx,Me.y-Me.cy)<Me.r*mu;ee.classList.toggle("aiming",!L),ee.classList.toggle("autoaim",L);return}ee.classList.toggle("aiming",Me.dragged),ee.classList.toggle("cancelling",$e(Me,U))}});let ge=(Fe,Me)=>{let L=A[U];!L||Fe.pointerId!==L.pid||(L.x=Fe.clientX,L.y=Fe.clientY,A[U]=null,ee.classList.remove("pressed","aiming","cancelling","autoaim"),!(U==="basic"||Me||!ie())&&(U==="push"&&me()||(L.dragged?$e(L,U)||(D={skill:U,dir:nt(L)}):D={skill:U,dir:null})))};ee.addEventListener("pointerup",Fe=>ge(Fe,!1)),ee.addEventListener("pointercancel",Fe=>ge(Fe,!0))}m.dash.addEventListener("pointerdown",U=>{ie()&&(U.preventDefault(),B=!0,ye("dash"),m.dash.classList.add("pressed"))});let It=()=>m.dash.classList.remove("pressed");m.dash.addEventListener("pointerup",It),m.dash.addEventListener("pointercancel",It);let we=U=>{se||(se=U,ue=!1)};window.addEventListener("keydown",U=>{if(_t(),U.code==="Escape"){if(U.repeat)return;se&&!ue?ue=!0:ie()&&Ue();return}if(ie()){if(U.repeat){U.code==="Space"&&U.preventDefault();return}switch(U.code){case"KeyW":case"KeyA":case"KeyS":case"KeyD":q.add(U.code);break;case"KeyQ":ye("control"),we("control");break;case"KeyE":ye("push"),me()?W||(W=!0,N=!0,m.push.classList.add("pressed","autoaim")):we("push");break;case"KeyJ":Te()&&!ne&&(ne=!0,P=!0,m.basic.classList.add("pressed"));break;case"Space":U.preventDefault(),B=!0,ye("dash");break;case"ShiftLeft":case"ShiftRight":B=!0,ye("dash");break}}}),window.addEventListener("keyup",U=>{q.delete(U.code),U.code==="KeyE"&&W&&(W=!1,m.push.classList.remove("pressed","autoaim")),U.code==="KeyJ"&&ne&&(ne=!1,m.basic.classList.remove("pressed"));let ee=U.code==="KeyQ"?"control":U.code==="KeyE"?"push":null;ee&&se===ee&&(!ue&&ie()&&(D={skill:ee,dir:z()}),se=null,ue=!1)});let qe=U=>!U.target.closest(".skill, .pause, .menu, .stick, .offers");window.addEventListener("pointerdown",U=>{if(U.pointerType==="mouse"){if(He=!0,ot=U.clientX,Ne=U.clientY,U.button===2){se&&(ue=!0);return}U.button===0&&ie()&&qe(U)&&(pe=!0,Te()&&(P=!0))}}),window.addEventListener("pointermove",U=>{U.pointerType==="mouse"&&(He=!0,ot=U.clientX,Ne=U.clientY)}),window.addEventListener("pointerup",U=>{U.pointerType==="mouse"&&U.button===0&&(pe=!1)}),window.addEventListener("blur",Ke),document.addEventListener("visibilitychange",()=>{document.hidden&&(Ke(),ie()&&Ue())});let Rt=U=>U.preventDefault();for(let U of["gesturestart","gesturechange","gestureend","dblclick","contextmenu","selectstart","dragstart"])document.addEventListener(U,Rt);document.addEventListener("touchmove",U=>{U.target.closest?.(".edge-list, .copybox")||U.preventDefault()},{passive:!1});function _t(){M||(M=!0,e.onFirstGesture())}window.addEventListener("pointerup",_t,!0);let H=new Date().toISOString(),R="s1-run-log/v1",Y="s1-run-log/v1-live",ce=30,fe={get(U){try{return localStorage.getItem(U)}catch{return null}},set(U,ee){try{localStorage.setItem(U,ee)}catch{}},remove(U){try{localStorage.removeItem(U)}catch{}}},le=U=>{let ee=U;return!!ee&&typeof ee=="object"&&typeof ee.index=="number"&&typeof ee.endedAt=="string"&&!!ee.record&&typeof ee.record=="object"};function Je(){let U=[];try{let ge=fe.get(R),Fe=ge?JSON.parse(ge):[];Array.isArray(Fe)&&(U=Fe.filter(le))}catch{U=[]}try{let ge=fe.get(Y);if(ge){let Fe=JSON.parse(ge);Fe&&typeof Fe=="object"&&U.push({index:(U.length?U[U.length-1].index:0)+1,endedAt:new Date().toISOString(),endedBy:"abandoned",next:"reload",rematch:!1,record:Fe}),fe.remove(Y)}}catch{fe.remove(Y)}let ee=U[U.length-1];return ee&&ee.next===null&&(ee.next="reload",ee.rematch=!1),U.slice(-ce)}let be=Je(),Ve=()=>fe.set(R,JSON.stringify(be));Ve();let Ie=be[be.length-1]??null,_e=-1/0,Pe=!1,rt=null;function et(U,ee){Ie={index:(be.length?be[be.length-1].index:0)+1,endedAt:new Date().toISOString(),endedBy:ee,next:null,rematch:!1,record:JSON.parse(JSON.stringify(U))},be.push(Ie),be.length>ce&&be.splice(0,be.length-ce),Ve(),fe.remove(Y)}function ke(U){Pe&&rt&&et(rt,"abandoned"),Pe=!1,Ie&&Ie.next===null&&(Ie.next=U,Ie.rematch=U==="again",Ve()),fe.remove(Y)}function it(U){t(".clear-confirm").hidden=!U,t(".clear-n").textContent=String(be.length),r.result.classList.toggle("confirming",U),U&&(t(".copy-status").hidden=!0)}function X(){be.length=0,Ie=null,fe.remove(R),fe.remove(Y),it(!1),t(".copy-status").hidden=!1,t(".copy-status").textContent="\u5DF2\u6E05\u9664\u5168\u90E8\u7D00\u9304\uFF080 \u5C40\uFF09"}let de=()=>({schema:"s1-run-log/1",copiedAt:new Date().toISOString(),pageOpenedAt:H,build:{version:Os,sha:v&&!v.startsWith("__")?v:"dev",art:Us?"myth":"default",cam:bf?"near":"far"},note:"rematch\uFF1D\u8A72\u5C40\u7D50\u675F\u5F8C\u6709\u6C92\u6709\u6309\u300C\u518D\u4E00\u5834\u300D\uFF1Bnext\uFF1D\u7D50\u675F\u5F8C\u7684\u7B2C\u4E00\u500B\u52D5\u4F5C\uFF08again\uFF0Frestart\uFF0Ftitle\uFF0Fother-entry\uFF0Fnull\uFF1D\u9084\u6C92\u52D5\u4F5C\uFF09\uFF1BendedBy\uFF1Dresult \u6253\u5B8C\u3001abandoned \u4E2D\u9014\u96E2\u958B",runs:be});async function $(){let U=JSON.stringify(de(),null,2),ee=t(".copy-status"),ge=t(".copybox");ee.hidden=!1,ge.hidden=!0;try{if(!navigator.clipboard?.writeText)throw new Error("no clipboard");await navigator.clipboard.writeText(U),ee.textContent=`\u5DF2\u8907\u88FD\uFF08${be.length} \u5C40\uFF09`}catch{r.result.classList.add("copying"),ge.value=U,ge.hidden=!1,ge.focus(),ge.select(),ge.setSelectionRange(0,U.length),ge.scrollTop=0;let Fe=!1;try{Fe=document.execCommand("copy")}catch{Fe=!1}ee.textContent=Fe?`\u5DF2\u8907\u88FD\uFF08${be.length} \u5C40\uFF09`:"\u7121\u6CD5\u81EA\u52D5\u8907\u88FD\uFF1A\u5167\u5BB9\u5DF2\u5168\u9078\uFF0C\u8ACB\u624B\u52D5\u62F7\u8C9D\uFF08\u9577\u6309\u2192\u62F7\u8C9D\uFF09"}}let Be={s0enemy:"\u6575\u4EBA",hunter:"\u7375\u624B",guardian:"\u76FE\u77DB\u885B\u58EB",shieldbearer:"\u76FE\u5175",archer:"\u5F13\u624B"},xe=()=>{for(let U of Object.values(r))U.hidden=!0};function ae(U,ee,ge){_=U,S=ee,ge&&(T=ge),Pe=ee==="s1",rt=null,_e=-1/0,fe.remove(Y),Ut(),ee==="v3"?e.onStart(U,ee,{ledgeDepth:w}):ee==="v4"||ee==="s1"?e.onStart(U,ee,{path:T}):e.onStart(U,ee),Tn.showPlaying()}function Ue(){Ke(),b=!0,e.onPause(),r.pause.hidden=!1}let gt=t('[data-act="mute"]');s.addEventListener("click",U=>{let ee=U.target.closest("[data-act]")?.getAttribute("data-act");if(ee){if(/^(start-|v4-|s1-)/.test(ee)&&ke("other-entry"),ee==="altar"){Nt(Number(U.target.closest("[data-idx]")?.getAttribute("data-idx")));return}switch(ee){case"start-v2-1v1":ae("1v1","v2");break;case"art-toggle":sg("art","myth");break;case"cam-toggle":sg("cam","near");break;case"start-v3-1v1":ae("1v1","v3");break;case"s1-ares":ae("run","s1","ares");break;case"s1-mars":ae("run","s1","mars");break;case"s1-none":ae("run","s1","none");break;case"copy-record":it(!1),$();break;case"clear-record":it(!0);break;case"clear-no":it(!1);break;case"clear-yes":X();break;case"v4-ares":ae("waves","v4","ares");break;case"v4-mars":ae("waves","v4","mars");break;case"v4-none":ae("waves","v4","none");break;case"ledge-depth":w=w===2.6?1.5:2.6,U.target.closest("[data-act]").textContent=`\u6500\u9644\u9580\u6ABB\uFF1A${w}`;break;case"start-s0-1v1":ae("1v1","s0");break;case"start-s0-1v2":ae("1v2","s0");break;case"again":ke("again"),ae(_,S,T);break;case"restart":ke("restart"),ae(_,S,T);break;case"howto":r.title.hidden=!0,r.howto.hidden=!1;break;case"back":r.howto.hidden=!0,r.title.hidden=!1;break;case"resume":b=!1,r.pause.hidden=!0,e.onResume();break;case"title":ke("title"),Tn.showTitle();break;case"mute":g=!g,gt.textContent=`\u97F3\u6548\uFF1A${g?"\u95DC":"\u958B"}`,e.setMuted(g);break}}}),t(".pause").addEventListener("click",()=>{ie()&&Ue()});let bt={basic:"",control:"",push:"",dash:""};function Ut(){let U=Te(),ee={basic:U||Us?{tag:"myth",svg:yl.basic}:{tag:"default",svg:Or.basic},control:U||Us?{tag:"myth",svg:yl.control}:{tag:"default",svg:Or.control},push:U&&T==="ares"?{tag:"charge",svg:QM}:U?T==="mars"?{tag:"myth",svg:yl.push}:{tag:"default",svg:Or.push}:Us?{tag:"myth",svg:yl.push}:{tag:"default",svg:Or.push},dash:{tag:"default",svg:Or.dash}};for(let ge of Object.keys(ee))bt[ge]!==ee[ge].tag&&(bt[ge]=ee[ge].tag,m[ge].dataset.icon=ee[ge].tag,m[ge].querySelector("svg").outerHTML=ee[ge].svg)}bt.basic=Us?"myth":"default",bt.control=bt.basic,bt.push=bt.basic,bt.dash="default";let Gn={ares:"\u963F\u745E\u65AF",mars:"\u746A\u723E\u65AF",none:"\u7121\u9053\u8DEF"},ci=1.5,_i="",vn=t(".revive-n"),ji=t(".revive"),Hs=t(".wave"),Ns=t(".protect"),ps=t(".reviving"),Vr=t(".reviving-t"),Bs=U=>U.variant==="s1"?`\u5019\u9078 S1\uFF08${Gn[U.s1?.record.path??U.v4?.path??T]}\uFF09`:U.variant==="v4"?`\u5019\u9078 v0.4\uFF08${Gn[U.v4?.path??T]}\uFF09`:U.variant==="v3"?`\u5019\u9078 v0.3\uFF08\u6500\u9644 ${U.ledgeDepth??2.6}\uFF09`:U.variant==="v2"?"\u5019\u9078 v0.2":"S0 \u57FA\u6E96",hi={ver:"",hp:"",fill:"",time:"",low:!1},Pi={basic:{ring:"",text:"",cooling:!1},control:{ring:"",text:"",cooling:!1},push:{ring:"",text:"",cooling:!1},dash:{ring:"",text:"",cooling:!1}},Ko={knock:"\u64CA\u9000",dash:"\u885D\u523A"},Zo={predicted:"\u9810\u8A08",actual:"\u5BE6\u969B"},Jo={"dash-out":"\u4E3B\u52D5\u885D\u523A","too-deep":"\u592A\u6DF1",locked:"\u9396\u5B9A\u4E2D","no-landing":"\u7121\u843D\u9EDE"},jo={pending:"\u9032\u884C\u4E2D",rescue:"\u6551\u56DE",climbed:"\u7FFB\u56DE",knocked:"\u88AB\u6253\u843D",timeout:"\u6642\u9593\u5230",hp:"\u8840\u76E1",fall:"\u589C\u843D"},Qo=U=>U.startsWith("accepted")?`\u5DF2\u6309${U.slice(8)}`:U.startsWith("buffered")?`\u63D0\u65E9\u6309${U.slice(8)}`:U==="none"?"\u6C92\u6309":U,ea=U=>[`${U.t.toFixed(1)}s`,U.who,Ko[U.source]??U.source,U.depth===null?"\u2014":`${U.depth.toFixed(1)}${U.basis?` ${Zo[U.basis]}`:""}`,U.eligible?"\u53EF\u6500\u9644":`\u4E0D\u53EF\uFF08${U.reason?Jo[U.reason]??U.reason:"\u2014"}\uFF09`,Qo(U.input),jo[U.outcome]??U.outcome],I=t(".edge"),Z=t(".edge-list");I.addEventListener("toggle",()=>r.result.classList.toggle("edge-open",I.open));function re(U){let ee=U.edgeLog??[];I.hidden=ee.length===0&&U.variant!=="v3",I.open=!1,r.result.classList.remove("edge-open"),t(".edge-n").textContent=String(ee.length);let ge=document.createElement("table"),Fe=ge.insertRow();for(let Me of["\u6642\u9593","\u8AB0","\u4F86\u6E90","\u6DF1\u5EA6","\u53EF\u5426\u6500\u9644","\u7FFB\u56DE\u9375","\u7D50\u679C"]){let L=document.createElement("th");L.textContent=Me,Fe.appendChild(L)}for(let Me of ee){let L=ge.insertRow();for(let O of ea(Me))L.insertCell().textContent=O}if(ee.length===0){let Me=ge.insertRow().insertCell();Me.colSpan=7,Me.textContent="\u672C\u5834\u6C92\u6709\u51FA\u754C"}Z.replaceChildren(ge)}function oe(U){let ee=U.s1,ge=t(".s1res"),Fe=t('[data-act="copy-record"]');if(ge.hidden=!ee,Fe.hidden=!ee,t('[data-act="clear-record"]').hidden=!ee,it(!1),t(".copy-status").hidden=!0,t(".copybox").hidden=!0,r.result.classList.remove("copying"),!ee)return;let Me=ee.record;Pe=!1,et(Me,"result"),t(".s1where").textContent=`${U.result==="win"?"\u901A\u95DC":"\u6B62\u6B65"}\uFF1A\u5CF6 ${Me.reached.island}\uFF0F${ee.islandTotal} \xB7 \u7B2C ${Me.reached.wave} \u6CE2 \xB7 ${Gn[Me.path]}`;let L=Me.coins;t(".s1coins").textContent=L?`\u9280\u5E63\uFF1A\u6536\u5165 ${L.fromKills+L.fromJumps}\uFF08\u64CA\u6BBA ${L.fromKills}\uFF0B\u8DF3\u9EDE ${L.fromJumps}\uFF09\u3001\u82B1\u8CBB ${L.spent.reduce((V,C)=>V+C.price,0)}\u3001\u9918\u984D ${L.end}`:"";let O=[...Me.downs].reverse().find(V=>!V.revived)??Me.downs[Me.downs.length-1];t(".s1death").textContent=U.result==="win"||!O?"":`\u6B7B\u56E0\uFF1A${O.cause==="fall"?"\u589C\u843D":"\u8840\u91CF\u6B78\u96F6"}${O.byKit?`\uFF08${Be[O.byKit]}\uFF09`:""}\uFF08\u5CF6 ${O.island}\uFF0F\u7B2C ${O.wave} \u6CE2\uFF0C${O.t.toFixed(1)} \u79D2\uFF09`}function j(U){let ee=t(".v4res"),ge=U.v4;if(ee.hidden=!ge,!ge)return;let Fe=(L,O)=>ge.kills.filter(V=>V.how===L&&V.where===O).length,Me=(L,O)=>`${O} ${Fe(L,"center")+Fe(L,"edge")}\uFF08\u4E2D\u592E ${Fe(L,"center")}\uFF0F\u5D16\u908A ${Fe(L,"edge")}\uFF09`;t(".v4kills").textContent=`${Me("hp","\u6253\u6B7B")}\u3000${Me("fall","\u64CA\u843D")}`,t(".v4meta").textContent=`${Gn[ge.path]} \xB7 \u7B2C ${ge.wave.index}\uFF0F${ge.wave.total} \u6CE2 \xB7 \u7834\u9632 ${ge.breaks} \xB7 \u5B8C\u7F8E\u683C\u64CB ${ge.perfectBlocks} \xB7 \u53CD\u64CA \u76FE\u64CA ${ge.counters.bash}\uFF0F\u8FD1\u8EAB ${ge.counters.melee}`}let Ee=null;function Oe(U,ee){let ge=U.v4,Fe=U.s1,Me=ge?.revivesLeft;ji.style.display=Me===void 0?"none":"",vn.textContent=`\xD7${Me??0}`,ji.classList.toggle("spent",(Me??0)<=0);let L=ge?.wave.index??Fe?.record.reached.wave;if(Fe?.stage?.kind==="altar"){let k=`\u796D\u58C7 ${Fe.stage.altar}`;Hs.textContent=k;let G=`altar-${Fe.stage.altar}`;G!==_i&&(_i=G,Tn.banner(k,"info"))}else if(L!==void 0){let k=Fe?`\u5CF6 ${Fe.islandIndex}\uFF0F${Fe.islandTotal} \xB7 \u7B2C ${L} \u6CE2`:`\u7B2C ${L} \u6CE2`;Hs.textContent=k;let G=`${Fe?.islandIndex??0}-${L}`;if(G!==_i){let Q=!!Fe&&_i.split("-")[0]!==String(Fe.islandIndex);_i=G,L>0&&Tn.banner(Q?k:`\u7B2C ${L} \u6CE2`,"info")}}let O=ee.protectT??0;Ns.classList.toggle("on",O>0),O>0&&(Ns.textContent=`\u4FDD\u8B77\u4E2D ${O.toFixed(1)}`),c.parentElement.classList.toggle("protected",O>0);let V=ee.state==="reviving";ps.classList.toggle("on",V),V&&(Vr.textContent=Math.max(0,ci-ee.stateT).toFixed(1));let C=(ee.counterT??0)>0;m.basic.classList.toggle("counter",C),m.push.classList.toggle("counter",C)}let Qe=t(".coins"),Ge=t(".coins-n"),dt=t(".blessings"),vt=t(".offers"),st=null,At="",qt="",rn=[];function tn(U){let ee=U.s1;if(U.variant!=="s1"||!ee){st=null,At="",Zt([]);return}ee.coins!==void 0&&(Ge.textContent=String(ee.coins),st!==null&&ee.coins!==st&&(Qe.classList.remove("pop"),Qe.offsetWidth,Qe.classList.add("pop")),st=ee.coins);let ge=(ee.blessings??[]).slice(0,2),Fe=ge.join(",");Fe!==At&&(At=Fe,dt.replaceChildren(...ge.map(Me=>{let L=document.createElement("div");return L.className=`bless ${Me}`,L.dataset.blessing=Me,L.title=gu[Me],L.innerHTML=KM[Me],L}))),Zt((ee.offers??[]).filter(Me=>Me.reason!=="notHere"))}let Kt=()=>T==="mars"?"\u963F\u745E\u65AF":"\u746A\u723E\u65AF",ct=U=>{let ee=U.action;return ee.kind==="bless"?ee.replace?`\u63DB\u6389 ${gu[ee.replace]}`:gu[ee.blessing]:ee.kind==="convert"?`\u6539\u5949 ${Kt()}`:"\u7948\u6C42\u5FA9\u6D3B"};function Zt(U){let ee=JSON.stringify([U.map(Me=>[Me.spot,Me.action,Me.price,Me.ok,Me.reason]),T]);if(ee===qt)return;qt=ee,rn=U,vt.hidden=U.length===0;let ge=document.createElement("div");ge.className="offers-target",ge.textContent=U.length?ZM[U[0].spot]:"";let Fe=document.createElement("div");Fe.className="offers-row",Fe.append(...U.map((Me,L)=>{let O=document.createElement("div");O.className=`offer ${Me.price===0?"free":"paid"}${Me.ok?"":" off"}`,O.setAttribute("role","button"),O.setAttribute("aria-disabled",Me.ok?"false":"true"),O.dataset.act="altar",O.dataset.idx=String(L);let V=document.createElement("b");V.className="offer-name",V.textContent=ct(Me);let C=document.createElement("span");if(C.className="offer-price",Me.price===0?C.textContent="\u514D\u8CBB":(C.innerHTML=`${JM}<i></i>`,C.querySelector("i").textContent=String(Me.price)),O.append(V,C),!Me.ok){let k=document.createElement("em");k.className="offer-reason",k.textContent=Me.reason?jM[Me.reason]:"\u4E0D\u80FD\u8CB7",O.append(k)}return O})),vt.replaceChildren(ge,Fe)}function Nt(U){let ee=rn[U];!ee||!ee.ok||e.onAltar?.(ee.action)}let Cn=t(".exit-hint"),Mi=!1,In=[];function Di(){for(let U of In)window.clearTimeout(U);In=[],Cn.classList.remove("on","fade"),s.classList.remove("hint-on")}function on(U){let ee=U.s1?.phase==="exit";ee&&!Mi?(Di(),Cn.textContent=U.s1?.stage?.kind==="altar"?"\u8D70\u9032\u51FA\u53E3\u5149\u5708":"\u6E05\u5834\uFF01\u8D70\u9032\u51FA\u53E3\u5149\u5708",Cn.classList.add("on"),s.classList.add("hint-on"),In.push(window.setTimeout(()=>Cn.classList.add("fade"),2500)),In.push(window.setTimeout(Di,3e3))):!ee&&Mi&&Di(),Mi=ee}let Tn={readIntent(){let U={move:{x:0,z:0},fire:!1,fireDir:null,cast:null,dash:!1,dashDir:null};if(!ie())return D=null,B=!1,P=!1,N=!1,U;let ee;if(E)ee=E.move;else{let V=(q.has("KeyD")?1:0)-(q.has("KeyA")?1:0),C=(q.has("KeyS")?1:0)-(q.has("KeyW")?1:0);V&&C&&(V*=Math.SQRT1_2,C*=Math.SQRT1_2),ee={x:V,z:C}}let ge=A.basic,Fe=Te(),Me=!!ge||pe||ne||Fe&&P,L=null;ge&&ge.dragged?L=nt(ge):!ge&&pe&&(L=z());let O={move:{x:ee.x,z:ee.z},fire:Me,fireDir:L,cast:D,dash:B,dashDir:null};if(Fe&&(O.firePressed=P),me()){let V=A.push;O.guardHeld=!!V||W||N,O.guardPressed=N,O.guardDir=V&&V.dragged&&Math.hypot(V.x-V.cx,V.y-V.cy)>=V.r*mu?nt(V):null}return D=null,B=!1,P=!1,N=!1,O},aimPreview(){if(!ie())return null;for(let ee of["control","push"]){if(ee==="push"&&me())continue;let ge=A[ee];if(ge&&ge.dragged){let Fe=$e(ge,ee),Me=nt(ge);if(Me)return{skill:ee,dir:Me,cancel:Fe}}}if(se)return{skill:se,dir:z()??{x:1,z:0},cancel:ue};let U=A.basic;if(U&&U.dragged){let ee=nt(U);if(ee)return{skill:"basic",dir:ee,cancel:!1}}if(!U&&pe){let ee=z();if(ee)return{skill:"basic",dir:ee,cancel:!1}}return null},update(U){let ee=`${Bs(U)} \xB7 ${f}`;ee!==hi.ver&&(hi.ver=ee,d.textContent=ee);let ge=U.fighters.find(G=>G.id===U.playerId);if(!ge)return;let Me=`${Math.max(0,Math.ceil(ge.hp))} / ${Math.ceil(ge.maxHp)}`;Me!==hi.hp&&(hi.hp=Me,h.textContent=Me);let L=`${Math.max(0,Math.min(1,ge.hp/ge.maxHp))*100}%`;L!==hi.fill&&(hi.fill=L,c.style.width=L);let O=ge.hp/ge.maxHp<.3;O!==hi.low&&(hi.low=O,c.classList.toggle("low",O));let V=Math.max(0,Math.floor(U.time)),C=`${String(Math.floor(V/60)).padStart(2,"0")}:${String(V%60).padStart(2,"0")}`;C!==hi.time&&(hi.time=C,u.textContent=C),U.s1&&(rt=U.s1.record,Pe&&performance.now()-_e>=2e3&&(_e=performance.now(),fe.set(Y,JSON.stringify(U.s1.record)))),(U.variant!==S||(U.variant==="v4"||U.variant==="s1")&&ge.path&&ge.path!==T)&&(S=U.variant,_=U.mode,ge.path&&(T=ge.path),Ut());let k=U.variant==="v4"||U.variant==="s1";n.classList.toggle("v4",k),k&&Oe(U,ge),n.classList.toggle("s1",U.variant==="s1"),tn(U),on(U),m.dash.classList.toggle("ledge",ge.state==="ledge"),m.dash.classList.toggle("climbing",ge.state==="climb");for(let G of Object.keys(x)){let te=G==="dash"&&(ge.state==="ledge"||ge.state==="climb")?0:ge.cooldowns[G]??0,J=ge.cooldownMax[G]??0;K[G]=te;let Le=`${((J>0?Math.max(0,Math.min(1,te/J)):0)*360).toFixed(0)}deg`,Et=G!=="basic"&&te>.05?te>=10?te.toFixed(0):te.toFixed(1):"",Tt=Pi[G];Le!==Tt.ring&&(Tt.ring=Le,x[G].ring.style.setProperty("--cd",Le)),Et!==Tt.text&&(Tt.text=Et,x[G].text.textContent=Et);let _n=te>.05;_n!==Tt.cooling&&(Tt.cooling=_n,m[G].classList.toggle("cooling",_n))}},showTitle(){Ee?.cancel(),Zt([]),Ke(),y=!1,b=!1,xe(),n.hidden=!0,i.hidden=!0,r.title.hidden=!1},showResult(U){Ee?.cancel(),Zt([]),Ke(),y=!1,b=!1,_=U.mode,S=U.variant,U.ledgeDepth&&(w=U.ledgeDepth),U.v4&&(T=U.v4.path),xe(),n.hidden=!0,i.hidden=!0;let ee=U.result==="win",ge=r.result;ge.classList.toggle("win",ee),ge.classList.toggle("lose",!ee),ge.classList.toggle("no-stats",U.variant==="v4"||U.variant==="s1"),ge.querySelector(".res-title").textContent=ee?"\u52DD\u5229":"\u5931\u6557",ge.querySelector(".res-text").textContent=ee?"":U.loseText??"";let Fe=U.stats,Me=(L,O)=>{ge.querySelector(`[data-stat="${L}"]`).textContent=O};Me("acc",Fe.shotsFired>0?`${Math.round(Fe.shotsHit*100/Fe.shotsFired)}%\uFF08${Fe.shotsHit}/${Fe.shotsFired}\uFF09`:"\u2014"),Me("combos",String(Fe.combos)),Me("fall",String(Fe.kills.fall)),Me("hp",String(Fe.kills.hp)),re(U),j(U),oe(U),ge.hidden=!1},showPlaying(){Ke(),y=!0,b=!1,xe(),n.hidden=!1,i.hidden=!1,_i="";for(let U of[Ns,ps])U.classList.remove("on");m.basic.classList.remove("counter"),m.push.classList.remove("counter"),n.classList.toggle("v4",Te()),n.classList.toggle("s1",S==="s1"),Di(),Mi=!1,st=null,At="",Zt([]),dt.replaceChildren()},banner(U,ee){p.textContent=U,p.className=`banner ${ee}`,Ee?.cancel(),typeof p.animate=="function"&&(Ee=p.animate([{opacity:0,transform:"translate(-50%, 0) scale(0.7)"},{opacity:1,transform:"translate(-50%, 0) scale(1.05)",offset:.15},{opacity:1,transform:"translate(-50%, 0) scale(1)",offset:.65},{opacity:0,transform:"translate(-50%, -14px) scale(1)"}],{duration:1200,easing:"ease-out",fill:"both"}))}};return Tn.showTitle(),Tn}var tE={shootP:.05,shootE:.14,hitP:.05,hitE:.07,hurt:.12,windupH:.4,windupB:.25,windupP:.2,windupEP:.35,windupEC:.3,shootEC:.2,strikeBlocked:.2,ledgeGrabP:.3,ledgeGrabE:.3,ledgeRdy:.1,ledgeClimbP:.2,ledgeClimbE:.2,ledgeDropP:.3,ledgeDropE:.3,meleeP:.08,meleeE:.15,blockB:.12,blockG:.1,blockPf:.2,recoilP:.15,recoilE:.2,gBreak:.5,armorP:.4,armorE:.4,chargeP:.3,chargeE:.3,cReady:.3,cUsed:.15,cLost:.3,reviveS:.5,reviveG:.5,wave:.6,exitOpen:1,jump:1.5,land:1,coinPick:.05,coinsAll:.5,rewardC:.5,rewardH:.5,buyBless:.3,buyConv:.3,buyRev:.3,denied:.15,windupM:.2,cast:.1,dash:.1,blocked:.07,fall:.3,combo:.15};function lg(){let s=null,e=null,t=null,n=!1,i=0,r={},a=0,o=-9,l=new Map,c=.2;function h(g){let _=l.get(g);_!==void 0&&(clearTimeout(_),l.delete(g))}function u(){if(s)return s;let g=window,_=g.AudioContext||g.webkitAudioContext;if(!_)return null;try{s=new _}catch{return null}e=s.createGain(),e.gain.value=n?0:.5;let S=s.createDynamicsCompressor();S.threshold.value=-18,S.ratio.value=6,S.attack.value=.003,S.release.value=.15,e.connect(S),S.connect(s.destination),t=s.createBuffer(1,s.sampleRate,s.sampleRate);let w=t.getChannelData(0);for(let T=0;T<w.length;T++)w[T]=Math.random()*2-1;return s}function d(g){return i>=28?!1:(i++,setTimeout(()=>{i=Math.max(0,i-1)},(g+.1)*1e3),!0)}function p(g,_,S,w,T=.004){g.gain.setValueAtTime(1e-4,_),g.gain.linearRampToValueAtTime(S,_+T),g.gain.exponentialRampToValueAtTime(1e-4,_+w)}function m(g,_,S,w,T,M,E=0){if(!e||!d(T+E))return;let A=g.currentTime+E,D=g.createOscillator(),B=g.createGain();D.type=_,D.frequency.setValueAtTime(S,A),w!==S&&D.frequency.exponentialRampToValueAtTime(Math.max(20,w),A+T),p(B,A,M,T),D.connect(B),B.connect(e),D.start(A),D.stop(A+T+.02)}function x(g,_,S,w,T,M,E,A=0){if(!e||!t||!d(M+A))return;let D=g.currentTime+A,B=g.createBufferSource();B.buffer=t,B.loop=!0;let P=g.createBiquadFilter();P.type=_,P.Q.value=T,P.frequency.setValueAtTime(S,D),w!==S&&P.frequency.exponentialRampToValueAtTime(Math.max(20,w),D+M);let N=g.createGain();p(N,D,E,M,.006),B.connect(P),P.connect(N),N.connect(e),B.start(D,Math.random()*.5),B.stop(D+M+.02)}function v(g,_){let S=g.currentTime;return S-(r[_]??-1)<(tE[_]??.05)?!1:(r[_]=S,!0)}function f(g,_,S){let w=_==="melee3"||_==="charge"||_==="counterBash",T=S?1.15:1;m(g,"sine",w?130:160,w?48:70,w?.3:.18,(w?.55:.42)*T),x(g,"lowpass",w?1100:1500,200,.7,w?.2:.11,(w?.3:.22)*T),(_==="counterBash"||_==="counterMelee")&&m(g,"triangle",880,660,.1,.12,.02),S&&m(g,"triangle",300,200,.1,.1)}function y(g,_,S){if(_==="melee1"||_==="melee2"||_==="melee3"||_==="charge"||_==="counterBash"||_==="counterMelee"){f(g,_,S);return}let w=_==="push"||_==="enemyHeavy";S?(m(g,"sine",w?150:200,w?55:90,w?.32:.2,w?.5:.36),x(g,"lowpass",1400,300,.7,w?.26:.14,w?.3:.2),m(g,"triangle",330,220,.12,.12)):w?(m(g,"sine",170,60,.28,.42),x(g,"bandpass",900,250,.9,.22,.26)):_==="control"?(m(g,"triangle",520,300,.12,.2),x(g,"bandpass",2400,1400,1.2,.09,.14)):(m(g,"square",760,520,.05,.07),x(g,"highpass",3e3,3e3,.7,.05,.1))}function b(g,_,S){switch(_.type){case"shoot":{let w=_.ownerId===S;if(!v(g,w?"shootP":_.kind==="control"?"shootEC":"shootE"))return;if(!w&&_.kind==="control")m(g,"sawtooth",240,150,.14,.09),x(g,"bandpass",700,350,2,.12,.09);else if(w){let T=_.kind==="control";m(g,"square",T?520:900,T?260:380,.07,.07),x(g,"bandpass",2600,1200,1.4,.05,.08)}else m(g,"sine",300,150,.09,.1),x(g,"lowpass",900,400,.8,.06,.08);return}case"hit":{let w=_.targetId===S;if(!w&&_.sourceId!==S||!v(g,w?"hurt":"hitP"))return;y(g,_.kind,w);return}case"windupStart":{if(_.skill==="enemyHeavy"){if(!v(g,"windupH"))return;m(g,"triangle",392,440,.16,.26),m(g,"triangle",523,587,.2,.28,.15),m(g,"sine",196,262,Math.min(.5,_.dur),.18)}else if(_.skill==="enemyBasic"){if(!v(g,"windupB"))return;m(g,"sine",620,700,.06,.07)}else if(_.skill==="melee1"||_.skill==="melee2"||_.skill==="melee3"||_.skill==="charge"){if(_.ownerId===S||!v(g,"windupM"))return;_.skill==="charge"?(m(g,"sawtooth",80,140,Math.min(.4,_.dur),.14),x(g,"lowpass",300,700,.8,.25,.1)):m(g,"sine",330,_.skill==="melee3"?420:380,.08,.09)}else if(_.ownerId!==S&&_.skill==="push"){if(!v(g,"windupEP"))return;m(g,"sine",90,190,.2,.3),x(g,"lowpass",300,1100,.9,.18,.16)}else if(_.ownerId!==S&&_.skill==="control"){if(!v(g,"windupEC"))return;m(g,"sawtooth",700,1500,.14,.1),x(g,"bandpass",2400,4200,3,.1,.1)}else if(_.ownerId===S){if(!v(g,"windupP"))return;m(g,"sine",240,380,Math.min(.3,_.dur),.09)}return}case"cast":{if(!v(g,"cast"))return;let w=_.skill==="enemyHeavy";m(g,"sine",w?120:140,40,.38,w?.55:.5),x(g,"lowpass",1800,150,.8,.3,.3);return}case"dash":{if(!v(g,"dash"))return;let w=_.ownerId===S;x(g,"bandpass",600,3800,1.1,.22,w?.26:.14);return}case"blocked":{if(!v(g,"blocked"))return;m(g,"triangle",190,110,.07,.2),x(g,"bandpass",1500,900,2,.06,.2);return}case"fall":{if(!v(g,"fall"))return;let T=_.ownerId===S?.3:.2;x(g,"bandpass",1800,220,1.6,.9,T),m(g,"sine",700,120,.9,T*.45);return}case"blockedStrike":{if(!v(g,"strikeBlocked"))return;let w=_.ownerId===S||_.targetId===S?1:.5;m(g,"sine",110,45,.3,.5*w),x(g,"lowpass",700,120,.8,.22,.3*w);return}case"ledgeGrab":{let w=_.ownerId===S;if(!v(g,w?"ledgeGrabP":"ledgeGrabE"))return;m(g,"sine",95,50,.26,w?.5:.28),x(g,"bandpass",1800,500,1.1,.2,w?.26:.16),x(g,"highpass",4200,2600,.7,.07,w?.1:.06,.05),w||(m(g,"square",740,740,.06,.1,.04),m(g,"square",988,988,.08,.1,.13)),h(_.ownerId),l.set(_.ownerId,setTimeout(()=>{l.delete(_.ownerId),!(n||!s||s.state!=="running"||!v(s,"ledgeRdy"))&&(w?m(s,"sine",1040,1040,.05,.1):m(s,"sawtooth",1480,1480,.07,.09))},c*1e3));return}case"ledgeClimb":{h(_.ownerId);let w=_.ownerId===S;if(!v(g,w?"ledgeClimbP":"ledgeClimbE"))return;x(g,"bandpass",500,2200,1,.18,w?.22:.12),m(g,"triangle",w?220:300,w?420:600,.16,w?.16:.09),m(g,"sine",w?120:160,w?70:100,.12,w?.3:.16,.17);return}case"ledgeDrop":{h(_.ownerId);let w=_.ownerId===S;if(!v(g,w?"ledgeDropP":"ledgeDropE"))return;let T=w?1:.6;_.reason==="knocked"?(m(g,"sine",180,55,.3,.45*T),x(g,"lowpass",1600,250,.8,.24,.26*T)):(x(g,"bandpass",3e3,700,1.6,.3,.2*T),m(g,"sine",420,130,.32,.18*T));return}case"melee":{let w=_.ownerId===S;if(!v(g,w?"meleeP":"meleeE"))return;let T=w?1:.55;_.hit?x(g,"bandpass",1500,700,1.2,.07,.07*T):(x(g,"bandpass",_.counter?3200:2400,_.counter?900:600,1.3,.16,.2*T),m(g,"sine",_.step===3?260:340,140,.12,.08*T));return}case"shieldBlock":{if(_.attackerId!==S&&_.targetId!==S)return;if(_.kind==="bearer"){if(!v(g,"blockB"))return;m(g,"sine",410,380,.28,.26),m(g,"sine",655,610,.2,.2),x(g,"highpass",2500,2500,.8,.1,.18)}else if(_.kind==="perfect"){if(!v(g,"blockPf"))return;m(g,"sine",1568,1568,.45,.28),m(g,"sine",2349,2349,.35,.2,.01),m(g,"triangle",3136,3136,.2,.08,.02),x(g,"highpass",6e3,6e3,.7,.08,.12)}else{if(!v(g,"blockG"))return;m(g,"square",1200,900,.07,.1),x(g,"bandpass",3200,2200,1.8,.06,.14)}return}case"recoil":{let w=_.ownerId===S;if(!v(g,w?"recoilP":"recoilE"))return;m(g,"sine",300,110,.12,w?.3:.16);return}case"guardBreak":{if(!v(g,"gBreak"))return;let w=_.targetId===S?1:.8;m(g,"sawtooth",700,520,.09,.14*w),m(g,"sawtooth",820,430,.09,.12*w,.1),m(g,"sawtooth",620,300,.12,.09*w,.2),x(g,"bandpass",2800,500,1.4,.3,.18*w),m(g,"sine",150,60,.25,.3*w,.02);return}case"armor":{let w=_.ownerId===S;if(!v(g,w?"armorP":"armorE"))return;m(g,"sine",70,95,Math.min(.35,_.dur),w?.22:.14),x(g,"lowpass",260,520,.9,.2,w?.1:.06);return}case"charge":{let w=_.ownerId===S;if(!v(g,w?"chargeP":"chargeE"))return;let T=w?1:.6;x(g,"lowpass",350,1100,.9,.4,.3*T),m(g,"sawtooth",70,130,.35,.16*T);return}case"counterReady":{if(_.ownerId!==S||!v(g,"cReady"))return;m(g,"triangle",1175,1175,.12,.18),m(g,"triangle",1568,1568,.2,.2,.09),x(g,"highpass",6500,6500,.7,.1,.06,.09);return}case"counterUsed":{if(_.ownerId!==S||!v(g,"cUsed"))return;_.kind==="bash"?(m(g,"square",700,260,.08,.14),m(g,"sine",110,55,.14,.3)):(x(g,"bandpass",3e3,900,1.3,.1,.16),m(g,"triangle",1318,1318,.08,.12,.02));return}case"counterLost":{if(_.ownerId!==S||!v(g,"cLost"))return;m(g,"sine",880,440,.14,.1);return}case"reviveStart":{if(_.ownerId!==S||!v(g,"reviveS"))return;m(g,"sine",196,165,.5,.2),m(g,"sine",196,165,.45,.1,.28),x(g,"lowpass",500,200,.7,.6,.08);return}case"revive":{if(_.ownerId!==S||!v(g,"reviveG"))return;[392,523.25,659.25,783.99].forEach((w,T)=>m(g,"triangle",w,w,T===3?.45:.14,.2,T*.09));return}case"waveStart":{if(!v(g,"wave"))return;m(g,"sawtooth",220,220,.4,.1),m(g,"sawtooth",330,330,.4,.1,.18),_.index>=_.total-1&&m(g,"sawtooth",440,440,.5,.1,.36);return}case"exitOpen":{if(!v(g,"exitOpen"))return;m(g,"sine",784,784,.35,.16),m(g,"sine",1175,1175,.5,.14,.12),m(g,"triangle",1568,1568,.45,.07,.24),x(g,"highpass",6e3,6e3,.7,.2,.05,.12);return}case"jumpStart":{if(_.ownerId!==S||!v(g,"jump"))return;m(g,"sine",160,70,.14,.3),x(g,"bandpass",600,2600,.9,.35,.18,.05),x(g,"bandpass",2600,500,.8,1.2,.22,.35);return}case"land":{if(_.ownerId!==S||!v(g,"land"))return;m(g,"sine",90,38,.45,.6),x(g,"lowpass",900,120,.8,.4,.4),x(g,"highpass",3500,2200,.7,.18,.12,.06);return}case"coinPickup":{if(!v(g,"coinPick"))return;let w=g.currentTime;a=w-o<.5?Math.min(a+1,7):0,o=w;let T=Math.round(1320*Math.pow(2,a/12));m(g,"sine",T,T,.09,.09),m(g,"triangle",T*2,T*2,.05,.025);return}case"coinsCollected":{if(!v(g,"coinsAll"))return;[1047,1319,1568,2093].forEach((w,T)=>m(g,"sine",w,w,.16,.1,T*.045)),x(g,"highpass",6500,6500,.7,.2,.05,.05);return}case"reward":{if(_.kind==="coins"){if(!v(g,"rewardC"))return;m(g,"sine",1568,1568,.3,.2),m(g,"sine",2093,2093,.4,.2,.1),m(g,"triangle",3136,3136,.2,.06,.1)}else{if(!v(g,"rewardH"))return;m(g,"sine",392,523,.55,.16),m(g,"sine",494,659,.55,.12,.05),m(g,"triangle",196,262,.6,.12)}return}case"altarBuy":{let w=_.action.kind;if(w==="bless"){if(!v(g,"buyBless"))return;[261.63,329.63,392,523.25].forEach((T,M)=>m(g,"sine",T,T,.9,.14,M*.04)),x(g,"highpass",7e3,7e3,.7,.4,.05,.2),_.price===0&&m(g,"sine",1046.5,1046.5,.6,.08,.3)}else if(w==="convert"){if(!v(g,"buyConv"))return;m(g,"sawtooth",330,330,.12,.1),m(g,"sawtooth",440,440,.16,.1,.1),x(g,"bandpass",2800,1400,1.6,.2,.16),m(g,"sine",880,880,.35,.1,.18)}else{if(!v(g,"buyRev"))return;m(g,"sine",196,294,.8,.2),m(g,"sine",196,294,.7,.1,.3),x(g,"lowpass",600,250,.7,.7,.08)}return}case"altarDenied":{if(!v(g,"denied"))return;m(g,"square",180,140,.1,.1),m(g,"square",160,120,.12,.1,.12);return}case"combo":{if(!v(g,"combo"))return;m(g,"sine",988,988,.14,.2),m(g,"sine",1319,1319,.22,.2,.08),m(g,"triangle",1976,1976,.2,.06,.08);return}case"roundEnd":{let w=_.result==="win",T=w?[523.25,659.25,783.99,1046.5]:[392,349.23,311.13,233.08];T.forEach((M,E)=>{let A=E===T.length-1;m(g,w?"triangle":"sine",M,M,A?.7:.2,.28,E*.17),w&&A&&m(g,"sine",M*1.5,M*1.5,.7,.1,E*.17)});return}default:return}}return{unlock(){let g=u();if(g)try{g.resume();let _=g.createBuffer(1,1,22050),S=g.createBufferSource();S.buffer=_,S.connect(g.destination),S.start(0)}catch{}},play(g,_){if(!(n||!s||!e||g.length===0)){if(s.state!=="running"){s.resume().catch(()=>{});return}for(let S of g)try{b(s,S,_)}catch{}}},setMuted(g){n=g,e&&s&&e.gain.setTargetAtTime(g?0:.5,s.currentTime,.01)}}}function nE(s){let e=/v(\d+(?:\.\d+)*)/.exec(s);return e?e[1]:"0"}function iE(s,e){let t=s.split(".").map(Number),n=e.split(".").map(Number);for(let i=0;i<Math.max(t.length,n.length);i++){let r=(t[i]||0)-(n[i]||0);if(r)return r}return 0}function sE(s,e,t){let n=new URLSearchParams(e);return n.set("v",t),`${s}?${n.toString()}`}function cg(s){if(!/^https?:/.test(location.protocol))return;let e=nE(Os),t=document.createElement("button");t.id="updBar",s.appendChild(t);let n=0,i=null;t.addEventListener("click",()=>{i&&location.replace(sE(location.pathname,location.search,i))});let r=a=>{let o=Date.now();if(!a&&o-n<6e4)return;n=o;let l=`${location.pathname.replace(/[^/]*$/,"")}index.html?upd=${o}`;fetch(l,{cache:"no-store"}).then(c=>c.ok?c.text():"").then(c=>{let h=/<meta name="app-version" content="([\d.]+)"/.exec(c);!h||iE(h[1],e)<=0||(i=h[1],t.textContent=`\u{1F195} \u6709\u65B0\u7248 v${i}\uFF0C\u9EDE\u9019\u88E1\u66F4\u65B0`,t.classList.add("on"))}).catch(()=>{})};document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&r(!1)}),addEventListener("pageshow",()=>r(!1)),setTimeout(()=>r(!0),1500)}var fg=new URLSearchParams(location.search),rE=document.getElementById("game"),oE=document.getElementById("overlay"),pg=document.getElementById("ui"),aE=Vs(),$o=ng(rE,oE,aE),Mf=lg(),kt=null,Yo=!1,mg=fg.get("ai")!=="0",Xo=0,bl=0,Ml=0,qo=-1,_l=[],hg=Oi.seed,gg=()=>JSON.parse(JSON.stringify(_l)),El=null,vg=s=>{El=s},Bi=ag(pg,{onStart:(s,e,t)=>xg(s,void 0,e,t),onPause:()=>{Yo=!0},onResume:()=>{Yo=!1},getPlayerPos:()=>kt?kt.player.pos:null,screenToGround:(s,e)=>$o.screenToGround(s,e),onFirstGesture:()=>Mf.unlock(),setMuted:s=>Mf.setMuted(s),runLog:gg,onAltar:vg});function vu(){if(!kt)return;let s=kt.state.island.seed??Oi.seed;s!==hg&&(hg=s,$o.setIsland?.(kt.state.island))}function xg(s,e,t="s0",n={}){let i=e??(Number(fg.get("seed"))||Date.now()%1e9);if(t==="s1"){n.again&&_l.length&&(_l[_l.length-1].again=!0);let r=new Gs(i,n.path??"ares");_l.push(r.state.s1.record),kt=r}else kt=t==="v4"?new Xr(i,n.path??"ares"):new Yt(s,i,t,n.ledgeDepth??2.6);kt.aiEnabled=mg,$o.reset(),vu(),Bi.showPlaying(),Yo=!1,Xo=0,bl=0,Ml=0,qo=-1,El=null}var ug=new Map;function _f(s,e,t){let n=performance.now();n-(ug.get(s)??-1e9)<1200||(ug.set(s,n),Bi.banner(e,t))}function lE(s){if(!kt)return;let e=kt.state.playerId;for(let t of s)t.type==="combo"?Bi.banner("\u9023\u62DB\uFF01","good"):t.type==="fall"?t.ownerId===e?Bi.banner("\u589C\u843D\u2026\u2026","bad"):(Bi.banner("\u64CA\u843D\uFF01","good"),Ml=.6):t.type==="death"&&t.ownerId!==e&&t.cause==="hp"?Bi.banner("\u64CA\u5012\uFF01","good"):t.type==="edgeSave"&&t.ownerId===e?Bi.banner("\u9A5A\u96AA\u6551\u56DE\uFF01","info"):t.type==="shieldBlock"?t.kind==="bearer"&&t.attackerId===e?_f("bearer","\u683C\u64CB","bad"):t.kind==="guard"&&t.targetId===e&&t.skill==="enemyHeavy"?_f("early","\u592A\u65E9","info"):t.kind==="perfect"&&t.targetId===e&&_f("perfect","\u5B8C\u7F8E\u683C\u64CB\uFF01","good"):t.type==="roundEnd"?qo=1.3:t.type==="islandStart"&&vu()}var dg=performance.now();function yg(s){let e=Math.min(.1,(s-dg)/1e3);dg=s;let t=[],n=0;if(kt&&!Yo){if(bl>0)bl-=e;else{let i=Ml>0?.35:1;Ml=Math.max(0,Ml-e),Xo+=e*i;let r=0;for(;Xo>=ei&&r<6;){let a=Bi.readIntent();El?(kt.step({...a,altar:El}),El=null):kt.step(a);for(let o of kt.drainEvents())t.push(o);if(Xo-=ei,n+=ei,r++,kt.hitstop>0){bl=Math.max(bl,kt.hitstop),kt.hitstop=0,Xo=0;break}}r>=6&&(Xo=0)}lE(t),Mf.play(t,kt.state.playerId),qo>0&&(qo-=e,qo<=0&&(qo=-1,Bi.showResult(kt.state)))}kt&&($o.render(kt.state,t,Yo?null:Bi.aimPreview(),n,e),Bi.update(kt.state)),requestAnimationFrame(yg)}function Ef(){let s=window.visualViewport;$o.resize(s?s.width:innerWidth,s?s.height:innerHeight)}addEventListener("resize",Ef);window.visualViewport?.addEventListener("resize",Ef);Ef();kt=new Yt("1v1",1);kt.aiEnabled=!1;Bi.showTitle();var cE={state:()=>JSON.parse(JSON.stringify(kt.state)),start:(s,e,t,n)=>xg(s,e,t,n),setAI:s=>{mg=s,kt&&(kt.aiEnabled=s)},place:(s,e,t)=>kt?.place(s,e,t),kill:(s,e)=>kt?.debugKill(s,e),freeze:s=>{Yo=s},knock:(s,e,t)=>{if(!kt)return;let n=kt.state.fighters.find(i=>i.id!==s);n&&kt.debugDamage(s,n.id,"push",t??0,e)},project:(s,e)=>$o.worldToScreen(s,e),version:`${Os} (fc86d1a)`,s1Clear:()=>{kt instanceof Gs&&kt.debugClearIsland()},s1Goto:s=>{kt instanceof Gs&&(kt.debugGotoIsland(s),vu())},runLog:gg,s1GotoAltar:s=>{kt instanceof Gs&&(kt.debugGotoAltar(s),vu())},s1Coins:s=>{kt instanceof Gs&&kt.debugSetCoins(s)},s1Altar:vg};window.__hunter=cE;cg(pg);requestAnimationFrame(yg);if(new URLSearchParams(location.search).has("style")){let s=document.createElement("div");s.id="style-badge",s.style.cssText=["position:fixed","left:calc(env(safe-area-inset-left, 0px) + 16px)","top:calc(env(safe-area-inset-top, 0px) + 44px)","z-index:99999","pointer-events:none","font:600 11px/1.3 ui-monospace, Menlo, Consolas, monospace","color:#fff","background:rgba(0,0,0,0.55)","padding:2px 6px","border-radius:4px","white-space:nowrap"].join(";");let e=`${On.toUpperCase()} \xB7 10-21 00:59`;s.textContent=`${e} \xB7 \u2014 fps`,document.body.appendChild(s);let t=0,n=performance.now(),i=r=>{t++,r-n>=500&&(s.textContent=`${e} \xB7 ${Math.round(t*1e3/(r-n))} fps`,t=0,n=r),requestAnimationFrame(i)};requestAnimationFrame(i)}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=app.js.map
