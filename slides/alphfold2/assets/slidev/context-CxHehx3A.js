import{a2 as n,a8 as r,t as j,y as u,av as $,az as v}from"../modules/vue-BxaKmS3U.js";import{T as p,a2 as C,ag as x,a1 as S,Z as T,$ as R,ah as l,Y as g,ai as k,aj as E}from"../index-B5wOFWXg.js";function F(){const t=n(x),a=r(t,"nav"),s=n(S).value,e=r(s,"current"),i=n(T),c=n(R),o=n(l,{}),d=n(g,void 0),m=n(p,j(1)),f=n(C,u(()=>1));return{$slidev:t,$nav:a,$clicksContext:s,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function b(t){var i,c;$(l,t);const{$slidev:a,$page:s}=F(),e=a.nav.slides.find(o=>o.no===s.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function y(t,a){return{...v(t,a===0?k:E),frontmatter:t}}export{y as f,b as p,F as u};
