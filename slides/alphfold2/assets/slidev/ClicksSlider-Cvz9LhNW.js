import{n as y}from"../modules/unplugin-icons-CnbedUqE.js";import{d as g,y as i,o as u,b as c,e as o,l as S,A as w,F as f,x as m,g as I,ad as z,aa as V,ab as $,h as x,i as d,p as B,a as D}from"../modules/vue-BxaKmS3U.js";import{o as F,r as M,C as N,_ as A}from"../index-B5wOFWXg.js";const k=a=>(B("data-v-46eb6e62"),a=a(),D(),a),L=["title"],T={class:"flex gap-0.5 items-center min-w-16 font-mono mr1"},j=k(()=>o("div",{"flex-auto":""},null,-1)),q={"text-primary":""},E=k(()=>o("span",{op25:""},"/",-1)),K={op50:""},R=["min","max"],U=g({__name:"ClicksSlider",props:{clicksContext:{type:null,required:!0}},setup(a){const n=a,s=i(()=>n.clicksContext.total),p=i(()=>F(0,n.clicksContext.clicksStart,s.value)),r=i(()=>s.value-p.value+1),t=i({get(){return n.clicksContext.current>s.value?-1:n.clicksContext.current},set(v){n.clicksContext.current=v}}),b=i(()=>M(p.value,s.value+1));function C(){(t.value<0||t.value>s.value)&&(t.value=0)}return(v,l)=>{const h=y;return u(),c("div",{class:d(["flex gap-1 items-center select-none",r.value?"":"op50"]),title:`Clicks in this slide: ${r.value}`},[o("div",T,[S(h,{"text-sm":"",op50:""}),j,t.value>=0&&t.value!==w(N)?(u(),c(f,{key:0},[o("span",q,m(t.value),1),E],64)):I("v-if",!0),o("span",K,m(s.value),1)]),o("div",{relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~",onDblclick:l[2]||(l[2]=e=>t.value=v.clicksContext.total)},[(u(!0),c(f,null,z(b.value,e=>(u(),c("div",{key:e,border:"y main","of-hidden":"",relative:"",class:d([e===0?"rounded-l border-l":"",e===s.value?"rounded-r border-r":""]),style:x({width:r.value>0?`${1/r.value*100}%`:"100%"})},[o("div",{absolute:"","inset-0":"",class:d(e<=t.value?"bg-primary op15":"")},null,2),o("div",{class:d([+e==+t.value?"text-primary font-bold op100 border-primary":"op30 border-main",e===0?"rounded-l":"",e===s.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},m(e),3)],6))),128)),V(o("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),class:"range",absolute:"","inset-0":"",type:"range",min:p.value,max:s.value,step:1,"z-10":"",op0:"",style:x({"--thumb-width":`${1/(r.value+1)*100}%`}),onMousedown:C,onFocus:l[1]||(l[1]=e=>{var _;return(_=e.currentTarget)==null?void 0:_.blur()})},null,44,R),[[$,t.value]])],32)],10,L)}}}),J=A(U,[["__scopeId","data-v-46eb6e62"],["__file","/home/runner/work/slides/slides/node_modules/@slidev/client/internals/ClicksSlider.vue"]]);export{J as C};
