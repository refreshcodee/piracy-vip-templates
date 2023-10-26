import{s as F,f as X,i as H,n as Q,r as K}from"../chunks/scheduler.56f0b95c.js";import{S as tt,i as et,g as i,s as I,h as o,j as z,y as T,c as b,f as C,k as t,a as st,x as e,z as E,A as q}from"../chunks/index.5113b06a.js";import{c as at}from"../chunks/copy.65aa4a8b.js";function nt(s){let n,u,D="piracy.vip TV Template Generator",x,p,a,L="TMDB id",N,r,S,h,v,B="MediaInfo",J,d,V,f,m,$="Download Link",j,c,M,g,_,O="Generate",Y,y,P="Copy",k,W,Z;return{c(){n=i("div"),u=i("h1"),u.textContent=D,x=I(),p=i("div"),a=i("label"),a.textContent=L,N=I(),r=i("input"),S=I(),h=i("div"),v=i("label"),v.textContent=B,J=I(),d=i("textarea"),V=I(),f=i("div"),m=i("label"),m.textContent=$,j=I(),c=i("input"),M=I(),g=i("div"),_=i("button"),_.textContent=O,Y=I(),y=i("button"),y.textContent=P,this.h()},l(w){n=o(w,"DIV",{class:!0});var l=z(n);u=o(l,"H1",{class:!0,"data-svelte-h":!0}),T(u)!=="svelte-1vqxhn"&&(u.textContent=D),x=b(l),p=o(l,"DIV",{class:!0});var A=z(p);a=o(A,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(a)!=="svelte-11ie1fq"&&(a.textContent=L),N=b(A),r=o(A,"INPUT",{type:!0,name:!0,id:!0,class:!0}),A.forEach(C),S=b(l),h=o(l,"DIV",{class:!0});var G=z(h);v=o(G,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(v)!=="svelte-1x9a4hw"&&(v.textContent=B),J=b(G),d=o(G,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,class:!0}),z(d).forEach(C),G.forEach(C),V=b(l),f=o(l,"DIV",{class:!0});var R=z(f);m=o(R,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),T(m)!=="svelte-1dv375g"&&(m.textContent=$),j=b(R),c=o(R,"INPUT",{type:!0,name:!0,id:!0,class:!0}),R.forEach(C),M=b(l),g=o(l,"DIV",{class:!0});var U=z(g);_=o(U,"BUTTON",{class:!0,"data-svelte-h":!0}),T(_)!=="svelte-1e0vhmv"&&(_.textContent=O),Y=b(U),y=o(U,"BUTTON",{class:!0,"data-svelte-h":!0}),T(y)!=="svelte-1934sye"&&(y.textContent=P),U.forEach(C),l.forEach(C),this.h()},h(){t(u,"class","text-white font-bold text-4xl"),t(a,"for","tmdbID"),t(a,"class","text-white"),t(r,"type","text"),t(r,"name","tmdbID"),t(r,"id","tmdbID"),t(r,"class","bg-slate-800 rounded-sm text-white"),t(p,"class","flex flex-col gap-4 pt-8"),t(v,"for","mediaInfo"),t(v,"class","text-white"),t(d,"name","mediaInfo"),t(d,"id","mediaInfo"),t(d,"cols","30"),t(d,"rows","10"),t(d,"class","bg-slate-800 rounded-sm text-white"),t(h,"class","flex flex-col gap-4 pt-8"),t(m,"for","downloadLink"),t(m,"class","text-white"),t(c,"type","text"),t(c,"name","downloadLink"),t(c,"id","downloadLink"),t(c,"class","bg-slate-800 rounded-sm text-white"),t(f,"class","flex flex-col gap-4 pt-8"),t(_,"class","text-white bg-slate-800 p-2 rounded-sm"),t(y,"class","text-white bg-slate-800 p-2 rounded-sm"),t(g,"class","pt-8 flex gap-4"),t(n,"class","min-h-screen bg-black px-8 py-8")},m(w,l){st(w,n,l),e(n,u),e(n,x),e(n,p),e(p,a),e(p,N),e(p,r),E(r,s[0]),e(n,S),e(n,h),e(h,v),e(h,J),e(h,d),E(d,s[1]),e(n,V),e(n,f),e(f,m),e(f,j),e(f,c),E(c,s[2]),e(n,M),e(n,g),e(g,_),e(g,Y),e(g,y),W||(Z=[q(r,"input",s[5]),q(d,"input",s[6]),q(c,"input",s[7]),q(_,"click",function(){H(s[4](s[0]))&&s[4](s[0]).apply(this,arguments)}),X(k=at.call(null,y,s[3]))],W=!0)},p(w,[l]){s=w,l&1&&r.value!==s[0]&&E(r,s[0]),l&2&&E(d,s[1]),l&4&&c.value!==s[2]&&E(c,s[2]),k&&H(k.update)&&l&8&&k.update.call(null,s[3])},i:Q,o:Q,d(w){w&&C(n),W=!1,K(Z)}}}function lt(s,n,u){let D="",x="",p="",a={},L="";const N=async v=>{var f;const B=`https://api.themoviedb.org/3/tv/${v}?language=en-US`;if(a=await(await fetch(B,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzFjNDY1MWI0NzBmNzM4ODczZjgwMzEwMzI1ZDg0OCIsInN1YiI6IjVlNmM1Yjg4YTliOWE0MDAxODlmMTI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NVCVdh-PubyRh2syIdxdJ7439KItBGHyHjbJch7zTmQ"}})).json(),a){let m=`https://image.tmdb.org/t/p/w500${a.poster_path}`,$=a.original_name,j=(f=a.first_air_date)==null?void 0:f.split("-")[0],c=a.first_air_date,M=a.episode_run_time,g=a.vote_average,_=a.overview,O=a.number_of_seasons;u(3,L=`
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
            >${$} <span style="color:#f1c40f;">(${j})</span></strong
          ></span
        >
  </p>
  
  <p style="text-align:center;">
      <span style="font-size:16px;">${c} | ${M}m | ${O} Seasons | <span style="color:#f1c40f;">★</span> ${g}</span>
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
    ${_}
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
      <pre class="ipsCode prettyprint lang-html prettyprinted"><span class="pln"><br>${x}</span></pre>
  
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
    `)}};function r(){D=this.value,u(0,D)}function S(){x=this.value,u(1,x)}function h(){p=this.value,u(2,p)}return[D,x,p,L,N,r,S,h]}class rt extends tt{constructor(n){super(),et(this,n,lt,nt,F,{})}}export{rt as component};
