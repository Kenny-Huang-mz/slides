const __vite__fileDeps=["assets/slidev/shiki-tZQk9NXI.js","assets/monaco/bundled-types-BM7NHMtp.js","assets/modules/vue-D1VB23sT.js","assets/modules/file-saver-DY7lxZlc.js","assets/monaco/bundled-types-Tai4iJjP.css","assets/modules/shiki-DW0p5VfM.js","assets/modules/shiki-BSchMNmt.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{l as le,_ as L,e as ue,n as te,j as N}from"../monaco/bundled-types-BM7NHMtp.js";import{aF as ce,d as W,t as y,E as de,o as a,b as d,a7 as pe,y as ne,Q as fe,ac as oe,aG as me,aA as ge,D as he,aa as _e,an as ve,e as C,x as T,H as k,F as j,ad as Q,c as J,i as ye,g as H,h as re,l as R,k as ie,aH as Ae,n as P,m as U,q as be,s as Ce,a6 as q}from"../modules/vue-D1VB23sT.js";import{l as Z}from"../lz-string-BTt4z63d.js";import{_ as V,a as se,$ as F,a5 as we,ag as X}from"../index-ChpsCojO.js";import{u as G,p as xe,f as Se}from"./context-CdRJgWv0.js";import{G as ke}from"../modules/unplugin-icons-kY-JN3ar.js";import{I as Ee}from"./IconButton-fYS54uWq.js";import{I as Me}from"./default-TmG2_zz-.js";import"../modules/file-saver-DY7lxZlc.js";import"../modules/shiki-DW0p5VfM.js";function Oe(i){return Array.from({length:i})}function $e(){console.log("Hello from snippets/external.ts")}const Be=Object.freeze(Object.defineProperty({__proto__:null,emptyArray:Oe,sayHello:$e},Symbol.toStringTag,{value:"Module"})),ee={vue:ce,"./external":Be},je=[],ze=le(async()=>{const i={javascript:D,js:D,typescript:D,ts:D},{shiki:t,themes:n}=await L(()=>import("./shiki-tZQk9NXI.js"),__vite__mapDeps([0,1,2,3,4,5,6])),p=await t,b=(l,u,e={})=>p.codeToHtml(l,{lang:u,theme:typeof n=="string"?n:ue.value?n.dark||"vitesse-dark":n.light||"vitesse-light",...e}),f=async(l,u,e)=>{try{const o=i[u];if(!o)throw new Error(`Runner for language "${u}" not found`);return await o(l,{options:e,highlight:b,run:async(s,r)=>await f(s,r,e)})}catch(o){return console.error(o),{error:`${o}`}}};for(const l of je){const u=await l(i);Object.assign(i,u)}return{highlight:b,run:f}});async function De(i){const t=[],n={},p=function(...e){t.push(e.map(f))};n.info=n.log=n.debug=n.warn=n.error=p,n.clear=()=>t.length=0;const b=Object.assign({},console,n);try{const e=`return async (console, __slidev_import) => {
      ${u(i)}
    }`;await new Function(e)()(b,o=>{const s=ee[o];if(!s)throw new Error(`Module not found: ${o}.
Available modules: ${Object.keys(ee).join(", ")}. Please refer to https://sli.dev/custom/config-code-runners#additional-runner-dependencies`);return s})}catch(e){return{error:String(e)}}function f(e){return typeof e=="string"?{text:e}:{text:l(e),highlightLang:"javascript"}}function l(e){var s;let o="";if(e instanceof Error)o=`Error: ${JSON.stringify(e.message)}`;else if(e==null||typeof e=="symbol")o=String(e);else if(Array.isArray(e))o=`[${e.map(l).join(", ")}]`;else if(e instanceof Set){const r=[...e];o=`Set (${e.size}) {${r.map(l).join(", ")}}`}else if(e instanceof Map){const r=[...e.entries()];o=`Map (${e.size}) {${r.map(([m,g])=>`${l(m)} => ${l(g)}`).join(", ")}}`}else if(e instanceof RegExp)o=e.toString();else if(typeof e=="string")o=JSON.stringify(e);else if(typeof e=="object"){const r=((s=e.constructor)==null?void 0:s.name)??"",m=r&&r==="Object"?"":r;o=(m?`${m}: `:"")+JSON.stringify(e,(w,A)=>A===void 0?"__undefined__":A,2).replace(/"__undefined__"/g,"undefined"),o=String(o)}else o=String(e);return o}function u(e){return e=e.replace('import "reflect-metadata"',"").replace('require("reflect-metadata")',""),e=e.replace("export {};",""),e}return t}let z;async function D(i){z??(z=await L(()=>import("../monaco/bundled-types-BM7NHMtp.js").then(n=>n.t),__vite__mapDeps([1,2,3,4]))),i=z.transpileModule(i,{compilerOptions:{module:z.ModuleKind.ESNext,target:z.ScriptTarget.ES2022},transformers:{after:[Le]}}).outputText;const t=/import\s*\((.+)\)/g;return i=i.replace(t,(n,p)=>`__slidev_import(${p})`),await De(i)}function Le(i){const{factory:t}=i,{isImportDeclaration:n,isNamedImports:p,NodeFlags:b}=z;return f=>{var u,e;const l=[...f.statements];for(let o=0;o<l.length;o++){const s=l[o];if(!n(s))continue;let r;const m=(u=s.importClause)==null?void 0:u.namedBindings,g=[];if((e=s.importClause)!=null&&e.name&&g.push(t.createBindingElement(void 0,t.createIdentifier("default"),s.importClause.name)),m)if(p(m)){for(const A of m.elements)g.push(t.createBindingElement(void 0,A.propertyName,A.name));r=t.createObjectBindingPattern(g)}else r=t.createIdentifier(m.name.text);else r=t.createObjectBindingPattern(g);const w=t.createVariableStatement(void 0,t.createVariableDeclarationList([t.createVariableDeclaration(r,void 0,void 0,t.createAwaitExpression(t.createCallExpression(t.createIdentifier("import"),void 0,[s.moduleSpecifier])))],b.Const));l[o]=w}return t.updateSourceFile(f,l)}}const Re=W({__name:"DomElement",props:{element:{type:null,required:!0}},setup(i){const t=i,n=y();return de(()=>{n.value&&n.value.appendChild(t.element)}),(p,b)=>(a(),d("div",{ref_key:"container",ref:n},null,512))}}),qe=V(Re,[["__file","/home/runner/work/slides/slides/node_modules/@slidev/client/internals/DomElement.vue"]]),Ve={key:0,class:"text-sm text-center opacity-50"},Ie={key:1,class:"text-sm text-center opacity-50"},Ne={key:2,class:"text-sm text-center opacity-50"},Te=["innerHTML"],Pe={key:1,class:"text-red-500"},He={key:3,class:"output-line"},Fe=["innerHTML"],We={key:2,class:"separator"},Je={key:0,class:"absolute right-1 top-1 max-h-full flex gap-1"},Ge=W({__name:"CodeRunner",props:{modelValue:{type:String,required:!0},lang:{type:String,required:!0},autorun:{type:[Boolean,String],required:!0},height:{type:String,required:!1},showOutputAt:{type:null,required:!1},highlightOutput:{type:Boolean,required:!0},runnerOptions:{type:Object,required:!1}},emits:["update:modelValue"],setup(i,{emit:t}){const n=i,p=t,{isPrintMode:b}=se(),f=pe(n,"modelValue",p),{$renderContext:l,$clicksContext:u}=G(),e=ne(()=>!["slide","presenter"].includes(l.value)),o=b.value?"once":n.autorun,s=y(o),r=fe(),m=y(0),g=y(),w=y(n.showOutputAt);if(n.showOutputAt){const E=F();oe(()=>{const $=we(n.showOutputAt),_=u.calculate($);_?(u.register(E,_),me(()=>{w.value=!_.isActive.value})):w.value=!1}),ge(()=>u.unregister(E))}const A=te(200,async()=>{if(e.value)return;const{highlight:E,run:$}=await ze();g.value=E;const _=setTimeout(()=>{s.value=!0},500);r.value=N(await $(f.value,n.lang,n.runnerOptions??{})),m.value+=1,s.value=!1,clearTimeout(_)});return o==="once"?A():o&&he(f,A,{immediate:!0}),(E,$)=>{var x;const _=ke;return a(),d(j,null,[_e(C("div",{class:"relative flex flex-col rounded-b border-t border-main",style:re({height:n.height}),"data-waitfor":".slidev-runner-output"},[e.value?(a(),d("div",Ve,' Code is disabled in the "'+T(k(l))+'" mode ',1)):s.value?(a(),d("div",Ie," Running... ")):(x=r.value)!=null&&x.length?(a(),d("div",{key:`run-${m.value}`,class:"slidev-runner-output"},[(a(!0),d(j,null,Q(r.value,(c,M)=>(a(),d(j,{key:M},["html"in c?(a(),d("div",{key:0,innerHTML:c.html},null,8,Te)):"error"in c?(a(),d("div",Pe,T(c.error),1)):"element"in c?(a(),J(qe,{key:2,element:c.element},null,8,["element"])):(a(),d("div",He,[(a(!0),d(j,null,Q(k(N)(c),(S,v)=>(a(),d(j,{key:v},[S.highlightLang&&g.value?(a(),d("span",{key:0,class:"highlighted",innerHTML:g.value(S.text,S.highlightLang)},null,8,Fe)):(a(),d("span",{key:1,class:ye(S.class)},T(S.text),3)),v<k(N)(c).length-1?(a(),d("span",We,",")):H("v-if",!0)],64))),128))]))],64))),128))])):(a(),d("div",Ne," Click the play button to run the code "))],4),[[ve,!w.value]]),k(f).trim()?(a(),d("div",Je,[R(Ee,{class:"w-8 h-8 max-h-full flex justify-center items-center",title:"Run code",onClick:k(A)},{default:ie(()=>[R(_)]),_:1},8,["onClick"])])):H("v-if",!0)],64)}}}),Ye=V(Ge,[["__file","/home/runner/work/slides/slides/node_modules/@slidev/client/internals/CodeRunner.vue"]]),Ke={class:"relative slidev-monaco-container"},Qe=W({__name:"Monaco",props:{codeLz:{type:String,required:!0,default:""},diffLz:{type:String,required:!1},lang:{type:String,required:!1,default:"typescript"},readonly:{type:Boolean,required:!1,default:!1},lineNumbers:{type:String,required:!1,default:"off"},height:{type:[Number,String],required:!1,default:"initial"},editorOptions:{type:null,required:!1},ata:{type:Boolean,required:!1,default:!0},runnable:{type:Boolean,required:!1,default:!1},autorun:{type:[Boolean,String],required:!1,default:!0},showOutputAt:{type:null,required:!1},outputHeight:{type:String,required:!1},highlightOutput:{type:Boolean,required:!1,default:!0},runnerOptions:{type:Object,required:!1}},setup(i){const t=i,n=y(Z.decompressFromBase64(t.codeLz).trimEnd()),p=t.diffLz&&y(Z.decompressFromBase64(t.diffLz).trimEnd()),f={ts:"typescript",js:"javascript"}[t.lang]??t.lang,u={typescript:"mts",javascript:"mjs",ts:"mts",js:"mjs"}[t.lang]??t.lang,e=y(),o=y(),s=y(0),r=y(),m=ne(()=>t.height==="auto"?`${s.value}px`:t.height==="initial"?`${r.value}px`:t.height),g=y(),{$page:w,$renderContext:A}=G(),{currentSlideNo:E}=se(),$=Ae(()=>Math.abs(w.value-E.value)<=1&&g.value,_=>{["slide","presenter"].includes(A.value)?_():setTimeout(_,5e3)});return oe(async()=>{const{default:_}=await L(()=>import("../monaco/bundled-types-BM7NHMtp.js").then(h=>h.q),__vite__mapDeps([1,2,3,4])),{ata:x,monaco:c}=await _(),M=c.editor.createModel(n.value,f,c.Uri.parse(`file:///${F()}.${u}`));M.onDidChangeContent(()=>n.value=M.getValue());const S={automaticLayout:!0,readOnly:t.readonly,lineNumbers:t.lineNumbers,minimap:{enabled:!1},overviewRulerBorder:!1,overviewRulerLanes:0,padding:{top:10,bottom:10},lineNumbersMinChars:3,bracketPairColorization:{enabled:!1},tabSize:2,fontSize:11.5,fontFamily:"var(--slidev-code-font-family)",scrollBeyondLastLine:!1,...t.editorOptions};let v;if(p){const h=c.editor.createModel(p.value,f,c.Uri.parse(`file:///${F()}.${u}`));h.onDidChangeContent(()=>n.value=M.getValue());const O=c.editor.createDiffEditor(o.value,{renderOverviewRuler:!1,...S});O.setModel({original:M,modified:h});const B=O.getOriginalEditor(),I=O.getModifiedEditor(),Y=()=>{const K=Math.max(B.getContentHeight(),I.getContentHeight())+4;r.value??(r.value=K),s.value=K,P(()=>O.layout())};B.onDidContentSizeChange(Y),I.onDidContentSizeChange(Y),v=I}else{const h=c.editor.create(o.value,{model:M,lineDecorationsWidth:0,...S});h.onDidContentSizeChange(O=>{const B=O.contentHeight+4;r.value??(r.value=B),s.value=B,P(()=>v.layout())}),v=h}g.value=()=>{$(),L(()=>import("../monaco/bundled-types-BM7NHMtp.js").then(h=>h.u),__vite__mapDeps([1,2,3,4])),t.ata&&(x(v.getValue()),v.onDidChangeModelContent(te(1e3,()=>{x(v.getValue())})))};const ae=v.layoutContentWidget.bind(v);v.layoutContentWidget=h=>{ae(h),h.getId()==="editor.contrib.resizableContentHoverWidget"&&(h._resizableNode.domNode.style.transform=h._positionPreference===1?"translateY(calc(100% * (var(--slidev-slide-scale) - 1)))":"")},P(()=>c.editor.remeasureFonts())}),(_,x)=>(a(),d("div",Ke,[C("div",{ref_key:"outer",ref:e,class:"relative slidev-monaco-container-inner",style:re({height:m.value})},[C("div",{ref_key:"container",ref:o,class:"absolute inset-0.5"},null,512)],4),t.runnable?(a(),J(Ye,{key:0,modelValue:n.value,"onUpdate:modelValue":x[0]||(x[0]=c=>n.value=c),lang:k(f),autorun:t.autorun,"show-output-at":t.showOutputAt,height:t.outputHeight,"highlight-output":t.highlightOutput,"runner-options":t.runnerOptions},null,8,["modelValue","lang","autorun","show-output-at","height","highlight-output","runner-options"])):H("v-if",!0)]))}}),Ue=V(Qe,[["__file","/home/runner/work/slides/slides/node_modules/@slidev/client/builtin/Monaco.vue"]]),Ze=C("h1",null,"Monaco Editor",-1),Xe=C("p",null,"Slidev provides built-in Monaco Editor support.",-1),et=C("p",null,[q("Add "),C("code",null,"{monaco}"),q(" to the code block to turn it into an editor:")],-1),tt=C("p",null,[q("Use "),C("code",null,"{monaco-run}"),q(" to create an editor that can execute the code directly in the slide:")],-1),nt={__name:"15",setup(i){return xe(X),G(),(t,n)=>{const p=Ue;return a(),J(Me,be(Ce(k(Se)(k(X),14))),{default:ie(()=>[Ze,Xe,et,R(p,U({"code-lz":"JYWwDg9gTgLgBAbzlApgMzgXzmqERwDkAbgK4qEBQoksicK4MAngIJRQCGzWOeBhAHQB6FAA8YKKADtOAGyqUAxhGkBneJw5wAvMnQAKRmBbsuzAwEYADAEpblIA",lang:"ts"},{}),null,16),tt,R(p,U({runnable:"","code-lz":"JYWwDg9gTgLgBAbzgNwKZQM7AgOzgXzgDMoIQ4ByZAV1QoChRJZE5VwYBPAQSigENOAGjgZBACVQAbKRALFS5CgDoA9KgAeMdDn5SG9MZ0kyIACgCU9AMa4MEKamWyA5mYAGNVHAAkCNJjYOPjuVrY49o7OEG7sYFy8ApwAPDjUIABG6AB8ZgCMAAwWylCoACbU1qhmRMAZcAC82XAA2srttRkincr8MGYAtHkWAIRwANTEdb39AwBMowC6Ii15InmLFlZAA",lang:"ts"},{}),null,16)]),_:1},16)}}},ft=V(nt,[["__file","/@slidev/slides/15.md"]]);export{ft as default};