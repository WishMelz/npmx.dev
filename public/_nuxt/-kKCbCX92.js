import{C as e,Dt as t,J as n,Mt as r,Nt as i,O as a,S as o,Z as s,b as c,m as l,w as u,x as d,yt as f}from"./kUfz05QF.js";import{Pt as p,xt as m}from"./BFpFzIqC2.js";import{t as h}from"./CoDvWl-S2.js";import{t as g}from"./Cz7ao2hv2.js";import{t as _}from"./DFfh5V4z2.js";import v from"./Cb330f4h2.js";var y={key:0},b=[`d`,`fill`],x=[`d`,`fill`],S=[`d`,`fill`],C=[`d`,`fill`],w=[`d`,`fill`],T=[`d`,`fill`],E=[`d`,`fill`],D={key:1},O=[`cx`,`cy`,`r`,`fill`],k={__name:`Digit`,props:{quanta:{type:String,default:null},backgroundColor:{type:String,default:`#e1e5e8`},color:{type:String,default:`#000000`},x:{type:Number,default:0},y:{type:Number,default:0},thickness:{type:Number,default:1}},setup(t){let r=t,i=f({0:`1111110`,1:`0110000`,2:`1101101`,3:`1111001`,4:`0110011`,5:`1011011`,6:`1011111`,7:`1110000`,8:`1111111`,9:`1111011`,"-":`0000001`,X:`0000000`}),a=c(()=>2*(r.thickness||1)),o=c(()=>[void 0,null].includes(r.quanta)?i.value.X:i.value[r.quanta]);return(r,i)=>(n(),u(l,null,[[void 0,null,`.`].includes(t.quanta)?e(``,!0):(n(),u(`g`,y,[d(`path`,{d:`M ${t.x} ${t.y}
                L ${t.x+a.value} ${t.y-a.value}
                L ${t.x+26-a.value} ${t.y-a.value}
                L ${t.x+26} ${t.y}
                L ${t.x+26-a.value} ${t.y+a.value}
                L ${t.x+a.value} ${t.y+a.value} Z`,fill:o.value[0]==1?t.color:t.backgroundColor,stroke:`none`},null,8,b),d(`path`,{d:`M ${t.x+28-a.value} ${t.y+28-a.value}
                L ${t.x+28-a.value} ${t.y+2+a.value}
                L ${t.x+28} ${t.y+2}
                L ${t.x+28+a.value} ${t.y+2+a.value}
                L ${t.x+28+a.value} ${t.y+28-a.value}
                L ${t.x+28} ${t.y+28}
                L ${t.x+28-a.value} ${t.y+28-a.value}`,fill:o.value[1]==1?t.color:t.backgroundColor,stroke:`none`},null,8,x),d(`path`,{d:`M ${t.x+28-a.value} ${t.y+58-a.value}
                L ${t.x+28-a.value} ${t.y+32+a.value}
                L ${t.x+28} ${t.y+32}
                L ${t.x+28+a.value} ${t.y+32+a.value}
                L ${t.x+28+a.value} ${t.y+58-a.value}
                L ${t.x+28} ${t.y+58}
                L ${t.x+28-a.value} ${t.y+58-a.value}`,fill:o.value[2]==1?t.color:t.backgroundColor,stroke:`none`},null,8,S),d(`path`,{d:`M ${t.x+a.value} ${t.y+60-a.value}
                L ${t.x} ${t.y+60}
                L ${t.x+a.value} ${t.y+60+a.value}
                L ${t.x+26-a.value} ${t.y+60+a.value}
                L ${t.x+26} ${t.y+60}
                L ${t.x+26-a.value} ${t.y+60-a.value}
                L ${t.x+a.value} ${t.y+60-a.value}`,fill:o.value[3]==1?t.color:t.backgroundColor,stroke:`none`},null,8,C),d(`path`,{d:`M ${t.x-2+a.value} ${t.y+58-a.value}
                L ${t.x-2+a.value} ${t.y+32+a.value}
                L ${t.x-2} ${t.y+32}
                L ${t.x-2-a.value} ${t.y+32+a.value}
                L ${t.x-2-a.value} ${t.y+58-a.value}
                L ${t.x-2} ${t.y+58}
                L ${t.x-2+a.value} ${t.y+58-a.value}`,fill:o.value[4]==1?t.color:t.backgroundColor,stroke:`none`},null,8,w),d(`path`,{d:`M ${t.x-2+a.value} ${t.y+28-a.value}
                L ${t.x-2+a.value} ${t.y+2+a.value}
                L ${t.x-2} ${t.y+2}
                L ${t.x-2-a.value} ${t.y+2+a.value}
                L ${t.x-2-a.value} ${t.y+28-a.value}
                L ${t.x-2} ${t.y+28}
                L ${t.x-2+a.value} ${t.y+28-a.value}`,fill:o.value[5]==1?t.color:t.backgroundColor,stroke:`none`},null,8,T),d(`path`,{d:`M ${t.x+a.value} ${t.y+30-a.value}
                L ${t.x} ${t.y+30}
                L ${t.x+a.value} ${t.y+30+a.value}
                L ${t.x+26-a.value} ${t.y+30+a.value}
                L ${t.x+26} ${t.y+30}
                L ${t.x+26-a.value} ${t.y+30-a.value}
                L ${t.x+a.value} ${t.y+30-a.value}`,fill:o.value[6]==1?t.color:t.backgroundColor,stroke:`none`},null,8,E)])),t.quanta==`.`?(n(),u(`g`,D,[d(`circle`,{cx:t.x-8,cy:t.y+60,r:2+a.value/2,fill:t.color},null,8,O)])):e(``,!0)],64))}},A=[`id`],j=[`xmlns`,`viewBox`,`aria-describedby`],M=g({__name:`vue-ui-digits`,props:{dataset:{type:Number,default:0},config:{type:Object,default(){return{}}}},setup(e){let{vue_ui_digits:f}=h(),g=e,y=c(()=>_({userConfig:g.config,defaultConfig:f})),b=c(()=>{let e=(g.dataset||0).toString().split(``),t=[],n={x:10,y:10},r=0;for(let i=0;i<e.length;i+=1){let a=e[i];t.push({x:n.x+r,y:n.y,quanta:a}),a==`.`?r+=2:r+=44}return t}),x=c(()=>Math.max(...b.value.map(e=>e.x))+36),S=p();return(c,f)=>(n(),u(l,null,[d(`div`,{class:`sr-only`,id:`digit-${t(S)}`},i(e.dataset),9,A),(n(),u(`svg`,{class:`vue-data-ui-component vue-ui-digits`,xmlns:t(m),viewBox:`0 0 ${x.value} 80`,style:r(`background:${y.value.backgroundColor};${y.value.height?`height:${y.value.height};`:``}${y.value.width?`width:${y.value.width}`:``}`),"aria-describedby":`digit-${t(S)}`},[a(v),(n(!0),u(l,null,s(b.value,e=>(n(),o(k,{x:e.x,y:e.y,quanta:e.quanta,color:y.value.digits.color,backgroundColor:y.value.digits.skeletonColor,thickness:y.value.digits.thickness},null,8,[`x`,`y`,`quanta`,`color`,`backgroundColor`,`thickness`]))),256))],12,j))],64))}},[[`__scopeId`,`data-v-be79ee67`]]);export{M as default};