import{a as O}from"./modules/file-saver-DY7lxZlc.js";var _={exports:{}};_.exports;(function(m){var S=function(){var A=String.fromCharCode,M="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",y={};function j(o,r){if(!y[o]){y[o]={};for(var f=0;f<o.length;f++)y[o][o.charAt(f)]=f}return y[o][r]}var d={compressToBase64:function(o){if(o==null)return"";var r=d._compress(o,6,function(f){return M.charAt(f)});switch(r.length%4){default:case 0:return r;case 1:return r+"===";case 2:return r+"==";case 3:return r+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:d._decompress(o.length,32,function(r){return j(M,o.charAt(r))})},compressToUTF16:function(o){return o==null?"":d._compress(o,15,function(r){return A(r+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:d._decompress(o.length,16384,function(r){return o.charCodeAt(r)-32})},compressToUint8Array:function(o){for(var r=d.compress(o),f=new Uint8Array(r.length*2),e=0,i=r.length;e<i;e++){var p=r.charCodeAt(e);f[e*2]=p>>>8,f[e*2+1]=p%256}return f},decompressFromUint8Array:function(o){if(o==null)return d.decompress(o);for(var r=new Array(o.length/2),f=0,e=r.length;f<e;f++)r[f]=o[f*2]*256+o[f*2+1];var i=[];return r.forEach(function(p){i.push(A(p))}),d.decompress(i.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":d._compress(o,6,function(r){return g.charAt(r)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),d._decompress(o.length,32,function(r){return j(g,o.charAt(r))}))},compress:function(o){return d._compress(o,16,function(r){return A(r)})},_compress:function(o,r,f){if(o==null)return"";var e,i,p={},w={},v="",x="",u="",h=2,a=3,c=2,l=[],n=0,s=0,t;for(t=0;t<o.length;t+=1)if(v=o.charAt(t),Object.prototype.hasOwnProperty.call(p,v)||(p[v]=a++,w[v]=!0),x=u+v,Object.prototype.hasOwnProperty.call(p,x))u=x;else{if(Object.prototype.hasOwnProperty.call(w,u)){if(u.charCodeAt(0)<256){for(e=0;e<c;e++)n=n<<1,s==r-1?(s=0,l.push(f(n)),n=0):s++;for(i=u.charCodeAt(0),e=0;e<8;e++)n=n<<1|i&1,s==r-1?(s=0,l.push(f(n)),n=0):s++,i=i>>1}else{for(i=1,e=0;e<c;e++)n=n<<1|i,s==r-1?(s=0,l.push(f(n)),n=0):s++,i=0;for(i=u.charCodeAt(0),e=0;e<16;e++)n=n<<1|i&1,s==r-1?(s=0,l.push(f(n)),n=0):s++,i=i>>1}h--,h==0&&(h=Math.pow(2,c),c++),delete w[u]}else for(i=p[u],e=0;e<c;e++)n=n<<1|i&1,s==r-1?(s=0,l.push(f(n)),n=0):s++,i=i>>1;h--,h==0&&(h=Math.pow(2,c),c++),p[x]=a++,u=String(v)}if(u!==""){if(Object.prototype.hasOwnProperty.call(w,u)){if(u.charCodeAt(0)<256){for(e=0;e<c;e++)n=n<<1,s==r-1?(s=0,l.push(f(n)),n=0):s++;for(i=u.charCodeAt(0),e=0;e<8;e++)n=n<<1|i&1,s==r-1?(s=0,l.push(f(n)),n=0):s++,i=i>>1}else{for(i=1,e=0;e<c;e++)n=n<<1|i,s==r-1?(s=0,l.push(f(n)),n=0):s++,i=0;for(i=u.charCodeAt(0),e=0;e<16;e++)n=n<<1|i&1,s==r-1?(s=0,l.push(f(n)),n=0):s++,i=i>>1}h--,h==0&&(h=Math.pow(2,c),c++),delete w[u]}else for(i=p[u],e=0;e<c;e++)n=n<<1|i&1,s==r-1?(s=0,l.push(f(n)),n=0):s++,i=i>>1;h--,h==0&&(h=Math.pow(2,c),c++)}for(i=2,e=0;e<c;e++)n=n<<1|i&1,s==r-1?(s=0,l.push(f(n)),n=0):s++,i=i>>1;for(;;)if(n=n<<1,s==r-1){l.push(f(n));break}else s++;return l.join("")},decompress:function(o){return o==null?"":o==""?null:d._decompress(o.length,32768,function(r){return o.charCodeAt(r)})},_decompress:function(o,r,f){var e=[],i=4,p=4,w=3,v="",x=[],u,h,a,c,l,n,s,t={val:f(0),position:r,index:1};for(u=0;u<3;u+=1)e[u]=u;for(a=0,l=Math.pow(2,2),n=1;n!=l;)c=t.val&t.position,t.position>>=1,t.position==0&&(t.position=r,t.val=f(t.index++)),a|=(c>0?1:0)*n,n<<=1;switch(a){case 0:for(a=0,l=Math.pow(2,8),n=1;n!=l;)c=t.val&t.position,t.position>>=1,t.position==0&&(t.position=r,t.val=f(t.index++)),a|=(c>0?1:0)*n,n<<=1;s=A(a);break;case 1:for(a=0,l=Math.pow(2,16),n=1;n!=l;)c=t.val&t.position,t.position>>=1,t.position==0&&(t.position=r,t.val=f(t.index++)),a|=(c>0?1:0)*n,n<<=1;s=A(a);break;case 2:return""}for(e[3]=s,h=s,x.push(s);;){if(t.index>o)return"";for(a=0,l=Math.pow(2,w),n=1;n!=l;)c=t.val&t.position,t.position>>=1,t.position==0&&(t.position=r,t.val=f(t.index++)),a|=(c>0?1:0)*n,n<<=1;switch(s=a){case 0:for(a=0,l=Math.pow(2,8),n=1;n!=l;)c=t.val&t.position,t.position>>=1,t.position==0&&(t.position=r,t.val=f(t.index++)),a|=(c>0?1:0)*n,n<<=1;e[p++]=A(a),s=p-1,i--;break;case 1:for(a=0,l=Math.pow(2,16),n=1;n!=l;)c=t.val&t.position,t.position>>=1,t.position==0&&(t.position=r,t.val=f(t.index++)),a|=(c>0?1:0)*n,n<<=1;e[p++]=A(a),s=p-1,i--;break;case 2:return x.join("")}if(i==0&&(i=Math.pow(2,w),w++),e[s])v=e[s];else if(s===p)v=h+h.charAt(0);else return null;x.push(v),e[p++]=h+v.charAt(0),i--,h=v,i==0&&(i=Math.pow(2,w),w++)}}};return d}();m!=null?m.exports=S:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return S})})(_);var U=_.exports;const T=O(U);export{T as l};
