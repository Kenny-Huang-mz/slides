import{d as l,t as i,ac as u,D as c,E as m,o as d,b as f,i as p,A as s}from"../modules/vue-Bh9KshX3.js";import{u as _}from"./context-GcAjsDsJ.js";import{c as v}from"./DrawingPreview-BtRsyz7d.js";import{_ as g}from"../index-B6NwJAWO.js";import"../modules/shiki-Cpd82-Yi.js";const w=l({__name:"DrawingLayer",setup(h){const{drauu:e,drawingEnabled:o,loadCanvas:t}=v(),r=_().$scale,n=i();return u(()=>{e.mount(n.value,n.value.parentElement),c(r,a=>e.options.coordinateScale=1/a,{immediate:!0}),t()}),m(()=>{e.unmount()}),(a,D)=>(d(),f("svg",{ref_key:"svg",ref:n,class:p(["w-full h-full absolute top-0",{"pointer-events-none":!s(o),"touch-none":s(o)}])},null,2))}}),b=g(w,[["__file","/home/runner/work/slides/slides/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{b as default};