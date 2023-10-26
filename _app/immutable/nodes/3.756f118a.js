import{s as F,f as X,i as H,n as Q,r as K}from"../chunks/scheduler.56f0b95c.js";import{S as tt,i as et,g as i,s as I,h as o,j as z,y as E,c as b,f as C,k as t,a as st,x as e,z as T,A as U}from"../chunks/index.5113b06a.js";import{c as at}from"../chunks/copy.65aa4a8b.js";function lt(s){let a,u,D="piracy.vip Movie Template Generator",y,p,l,L="TMDB id",N,r,M,v,h,B="MediaInfo",J,d,O,f,m,V="Download Link",j,c,S,g,x,W="Generate",Y,_,P="Copy",$,q,Z;return{c(){a=i("div"),u=i("h1"),u.textContent=D,y=I(),p=i("div"),l=i("label"),l.textContent=L,N=I(),r=i("input"),M=I(),v=i("div"),h=i("label"),h.textContent=B,J=I(),d=i("textarea"),O=I(),f=i("div"),m=i("label"),m.textContent=V,j=I(),c=i("input"),S=I(),g=i("div"),x=i("button"),x.textContent=W,Y=I(),_=i("button"),_.textContent=P,this.h()},l(w){a=o(w,"DIV",{class:!0});var n=z(a);u=o(n,"H1",{class:!0,"data-svelte-h":!0}),E(u)!=="svelte-1molmsd"&&(u.textContent=D),y=b(n),p=o(n,"DIV",{class:!0});var k=z(p);l=o(k,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),E(l)!=="svelte-11ie1fq"&&(l.textContent=L),N=b(k),r=o(k,"INPUT",{type:!0,name:!0,id:!0,class:!0}),k.forEach(C),M=b(n),v=o(n,"DIV",{class:!0});var A=z(v);h=o(A,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),E(h)!=="svelte-1x9a4hw"&&(h.textContent=B),J=b(A),d=o(A,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,class:!0}),z(d).forEach(C),A.forEach(C),O=b(n),f=o(n,"DIV",{class:!0});var G=z(f);m=o(G,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),E(m)!=="svelte-1dv375g"&&(m.textContent=V),j=b(G),c=o(G,"INPUT",{type:!0,name:!0,id:!0,class:!0}),G.forEach(C),S=b(n),g=o(n,"DIV",{class:!0});var R=z(g);x=o(R,"BUTTON",{class:!0,"data-svelte-h":!0}),E(x)!=="svelte-1ly3l6v"&&(x.textContent=W),Y=b(R),_=o(R,"BUTTON",{class:!0,"data-svelte-h":!0}),E(_)!=="svelte-ivdydy"&&(_.textContent=P),R.forEach(C),n.forEach(C),this.h()},h(){t(u,"class","text-white font-bold text-4xl"),t(l,"for","tmdbID"),t(l,"class","text-white"),t(r,"type","text"),t(r,"name","tmdbID"),t(r,"id","tmdbID"),t(r,"class","bg-slate-800 rounded-sm text-white"),t(p,"class","flex flex-col gap-4 pt-8"),t(h,"for","mediaInfo"),t(h,"class","text-white"),t(d,"name","mediaInfo"),t(d,"id","mediaInfo"),t(d,"cols","30"),t(d,"rows","10"),t(d,"class","bg-slate-800 rounded-sm text-white"),t(v,"class","flex flex-col gap-4 pt-8"),t(m,"for","downloadLink"),t(m,"class","text-white"),t(c,"type","text"),t(c,"name","downloadLink"),t(c,"id","downloadLink"),t(c,"class","bg-slate-800 rounded-sm text-white"),t(f,"class","flex flex-col gap-4 pt-8"),t(x,"class","text-white bg-slate-800 p-2 rounded-sm"),t(_,"class","text-white bg-slate-800 p-2 rounded-sm"),t(g,"class","pt-8 flex gap-4"),t(a,"class","min-h-screen bg-black px-8 py-8")},m(w,n){st(w,a,n),e(a,u),e(a,y),e(a,p),e(p,l),e(p,N),e(p,r),T(r,s[0]),e(a,M),e(a,v),e(v,h),e(v,J),e(v,d),T(d,s[1]),e(a,O),e(a,f),e(f,m),e(f,j),e(f,c),T(c,s[2]),e(a,S),e(a,g),e(g,x),e(g,Y),e(g,_),q||(Z=[U(r,"input",s[5]),U(d,"input",s[6]),U(c,"input",s[7]),U(x,"click",function(){H(s[4](s[0]))&&s[4](s[0]).apply(this,arguments)}),X($=at.call(null,_,s[3]))],q=!0)},p(w,[n]){s=w,n&1&&r.value!==s[0]&&T(r,s[0]),n&2&&T(d,s[1]),n&4&&c.value!==s[2]&&T(c,s[2]),$&&H($.update)&&n&8&&$.update.call(null,s[3])},i:Q,o:Q,d(w){w&&C(a),q=!1,K(Z)}}}function nt(s,a,u){let D="",y="",p="",l={},L="";const N=async h=>{var f;const B=`https://api.themoviedb.org/3/movie/${h}?language=en-US`;if(l=await(await fetch(B,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzFjNDY1MWI0NzBmNzM4ODczZjgwMzEwMzI1ZDg0OCIsInN1YiI6IjVlNmM1Yjg4YTliOWE0MDAxODlmMTI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NVCVdh-PubyRh2syIdxdJ7439KItBGHyHjbJch7zTmQ"}})).json(),l){let m=`https://image.tmdb.org/t/p/w500${l.poster_path}`,V=l.title,j=(f=l.release_date)==null?void 0:f.split("-")[0],c=l.release_date,S=l.runtime,g=l.vote_average,x=l.overview;u(3,L=`
    <p style="text-align:center;">
    <img
          alt="spacer.png"
          class="ipsImage"
          data-loaded="true"
          data-ratio="75.08"
          data-src=${m}
          height="500"
          src="https://piracy.vip/applications/core/interface/js/spacer.png"
          style="height:auto;"
          width="500"
        />
  </p>
  
  <p style="text-align:center;">
    <span style="font-size:24px;"
          ><strong
            >${V} <span style="color:#f1c40f;">(${j})</span></strong
          ></span
        >
  </p>
  
  <p style="text-align:center;">
      <span style="font-size:16px;">${c} | ${S}m | <span style="color:#f1c40f;">★</span> ${g}</span>
  </p>
  
  <!-- <p style="text-align:center;">
    <span style="font-size:16px;">{movieGenre}</span>
  </p> -->
  
  <p>
    <span style="font-size:24px;"
          ><span style="color:#f1c40f;"><strong>Overview</strong></span></span
        >
  </p>
  
  <p>
    ${x}
  </p>
  
  <p>
    <span style="font-size:24px;"
          ><span style="color:#f1c40f;"><strong>Mediainfo</strong></span></span
        >
  </p>
  
  <div class="ipsSpoiler" data-ipsspoiler="">
    <div class="ipsSpoiler_header">
      <span>Spoiler</span>
    </div>
  
    <div class="ipsSpoiler_contents" data-gramm="false">
      <pre class="ipsCode prettyprint lang-html prettyprinted"><span class="pln"><br>${y}</span></pre>
  
      <p>&nbsp;</p>
    </div>
  </div>
  
  <p>
    <span style="font-size:24px;"
          ><span style="color:#f1c40f;"><strong>Download</strong></span></span
        >
  </p>
  
  <div class="ipsSpoiler" data-ipsspoiler="">
    <div class="ipsSpoiler_header">
      <span>Spoiler</span>
    </div>
  
    <div class="ipsSpoiler_contents" data-gramm="false">
      <p>
        [hide]${p}[/hide]
      </p>
    </div>
  </div>
  
  <p>&nbsp;</p>
    `)}};function r(){D=this.value,u(0,D)}function M(){y=this.value,u(1,y)}function v(){p=this.value,u(2,p)}return[D,y,p,L,N,r,M,v]}class rt extends tt{constructor(a){super(),et(this,a,nt,lt,F,{})}}export{rt as component};
