import{C as e,Dt as t,J as n,Mt as r,S as i,Z as a,b as o,m as s,w as c,x as l,yt as u}from"./BLt7TXlb.js";import{bt as d}from"./Cf-0F-2c.js";import{n as f,t as p}from"./8DvoFuCx.js";var m={key:0},h=[`d`,`fill`],g=[`d`,`fill`],_=[`d`,`fill`],v=[`d`,`fill`],y=[`d`,`fill`],b=[`d`,`fill`],x=[`d`,`fill`],S={key:1},C=[`cx`,`cy`,`r`,`fill`],w={__name:`Digit`,props:{quanta:{type:String,default:null},backgroundColor:{type:String,default:`#e1e5e8`},color:{type:String,default:`#000000`},x:{type:Number,default:0},y:{type:Number,default:0},thickness:{type:Number,default:1}},setup(t){let r=t,i=u({0:`1111110`,1:`0110000`,2:`1101101`,3:`1111001`,4:`0110011`,5:`1011011`,6:`1011111`,7:`1110000`,8:`1111111`,9:`1111011`,"-":`0000001`,X:`0000000`}),a=o(()=>2*(r.thickness||1)),d=o(()=>[void 0,null].includes(r.quanta)?i.value.X:i.value[r.quanta]);return(r,i)=>(n(),c(s,null,[[void 0,null,`.`].includes(t.quanta)?e(``,!0):(n(),c(`g`,m,[l(`path`,{d:`M ${t.x} ${t.y}
                L ${t.x+a.value} ${t.y-a.value}
                L ${t.x+26-a.value} ${t.y-a.value}
                L ${t.x+26} ${t.y}
                L ${t.x+26-a.value} ${t.y+a.value}
                L ${t.x+a.value} ${t.y+a.value} Z`,fill:d.value[0]==1?t.color:t.backgroundColor,stroke:`none`},null,8,h),l(`path`,{d:`M ${t.x+28-a.value} ${t.y+28-a.value}
                L ${t.x+28-a.value} ${t.y+2+a.value}
                L ${t.x+28} ${t.y+2}
                L ${t.x+28+a.value} ${t.y+2+a.value}
                L ${t.x+28+a.value} ${t.y+28-a.value}
                L ${t.x+28} ${t.y+28}
                L ${t.x+28-a.value} ${t.y+28-a.value}`,fill:d.value[1]==1?t.color:t.backgroundColor,stroke:`none`},null,8,g),l(`path`,{d:`M ${t.x+28-a.value} ${t.y+58-a.value}
                L ${t.x+28-a.value} ${t.y+32+a.value}
                L ${t.x+28} ${t.y+32}
                L ${t.x+28+a.value} ${t.y+32+a.value}
                L ${t.x+28+a.value} ${t.y+58-a.value}
                L ${t.x+28} ${t.y+58}
                L ${t.x+28-a.value} ${t.y+58-a.value}`,fill:d.value[2]==1?t.color:t.backgroundColor,stroke:`none`},null,8,_),l(`path`,{d:`M ${t.x+a.value} ${t.y+60-a.value}
                L ${t.x} ${t.y+60}
                L ${t.x+a.value} ${t.y+60+a.value}
                L ${t.x+26-a.value} ${t.y+60+a.value}
                L ${t.x+26} ${t.y+60}
                L ${t.x+26-a.value} ${t.y+60-a.value}
                L ${t.x+a.value} ${t.y+60-a.value}`,fill:d.value[3]==1?t.color:t.backgroundColor,stroke:`none`},null,8,v),l(`path`,{d:`M ${t.x-2+a.value} ${t.y+58-a.value}
                L ${t.x-2+a.value} ${t.y+32+a.value}
                L ${t.x-2} ${t.y+32}
                L ${t.x-2-a.value} ${t.y+32+a.value}
                L ${t.x-2-a.value} ${t.y+58-a.value}
                L ${t.x-2} ${t.y+58}
                L ${t.x-2+a.value} ${t.y+58-a.value}`,fill:d.value[4]==1?t.color:t.backgroundColor,stroke:`none`},null,8,y),l(`path`,{d:`M ${t.x-2+a.value} ${t.y+28-a.value}
                L ${t.x-2+a.value} ${t.y+2+a.value}
                L ${t.x-2} ${t.y+2}
                L ${t.x-2-a.value} ${t.y+2+a.value}
                L ${t.x-2-a.value} ${t.y+28-a.value}
                L ${t.x-2} ${t.y+28}
                L ${t.x-2+a.value} ${t.y+28-a.value}`,fill:d.value[5]==1?t.color:t.backgroundColor,stroke:`none`},null,8,b),l(`path`,{d:`M ${t.x+a.value} ${t.y+30-a.value}
                L ${t.x} ${t.y+30}
                L ${t.x+a.value} ${t.y+30+a.value}
                L ${t.x+26-a.value} ${t.y+30+a.value}
                L ${t.x+26} ${t.y+30}
                L ${t.x+26-a.value} ${t.y+30-a.value}
                L ${t.x+a.value} ${t.y+30-a.value}`,fill:d.value[6]==1?t.color:t.backgroundColor,stroke:`none`},null,8,x)])),t.quanta==`.`?(n(),c(`g`,S,[l(`circle`,{cx:t.x-8,cy:t.y+60,r:2+a.value/2,fill:t.color},null,8,C)])):e(``,!0)],64))}},T=[`xmlns`,`viewBox`],E={__name:`vue-ui-digits`,props:{dataset:{type:Number,default:0},config:{type:Object,default(){return{}}}},setup(e){let{vue_ui_digits:l}=p(),u=e,m=o(()=>f({userConfig:u.config,defaultConfig:l})),h=o(()=>{let e=(u.dataset||0).toString().split(``),t=[],n={x:10,y:10},r=0;for(let i=0;i<e.length;i+=1){let a=e[i];t.push({x:n.x+r,y:n.y,quanta:a}),a==`.`?r+=2:r+=44}return t}),g=o(()=>Math.max(...h.value.map(e=>e.x))+36);return(e,o)=>(n(),c(`svg`,{class:`vue-data-ui-component vue-ui-digits`,xmlns:t(d),viewBox:`0 0 ${g.value} 80`,style:r(`background:${m.value.backgroundColor};${m.value.height?`height:${m.value.height};`:``}${m.value.width?`width:${m.value.width}`:``}`)},[(n(!0),c(s,null,a(h.value,e=>(n(),i(w,{x:e.x,y:e.y,quanta:e.quanta,color:m.value.digits.color,backgroundColor:m.value.digits.skeletonColor,thickness:m.value.digits.thickness},null,8,[`x`,`y`,`quanta`,`color`,`backgroundColor`,`thickness`]))),256))],12,T))}};export{E as default};