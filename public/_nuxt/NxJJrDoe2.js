import{At as e,C as t,D as n,Dt as r,G as i,H as a,J as o,Mt as s,Nt as c,O as l,Q as u,S as d,Z as ee,_ as te,b as f,lt as p,m as ne,ot as re,p as ie,s as ae,u as oe,ut as se,w as m,x as h,yt as g,z as ce}from"./kUfz05QF.js";import{t as le}from"./CrcjX28z.js";import{F as ue,Ot as de,Pt as fe,ut as pe}from"./BFpFzIqC2.js";import{t as me}from"./CoDvWl-S2.js";import{t as he}from"./CamUjeHy2.js";import{t as ge}from"./Cz7ao2hv2.js";import{t as _e}from"./Ksr1OERR.js";import{t as _}from"./Ce3qfUWC.js";import{t as ve}from"./BPWTd-pL.js";import{t as ye}from"./D15IYc1U2.js";function be(e){let t=t=>e.isMacLike.value?t.metaKey:t.ctrlKey,n=e=>{let t=e;if(!t)return!1;let n=(t.tagName||``).toLowerCase();return t.isContentEditable||n===`input`||n===`textarea`||n===`select`},r=t=>!!(!e.isSummaryOpen.value||n(t.target)||e.isWriting.value),i=()=>{e.isDeleteMode.value=!1,e.isMoveMode.value=!1,e.isResizeMode.value=!1,e.isSelectMode.value=!1,e.isDrawMode.value=!1,e.isTextMode.value=!1,e.activeShape.value=void 0,e.showCaret.value=!1},a=t=>{switch(i(),t){case`m`:e.isMoveMode.value=!0;break;case`r`:e.isResizeMode.value=!0;break;case`d`:e.isDeleteMode.value=!0;break;case`g`:e.isSelectMode.value=!0,e.setShapeTo(`group`),e.activeShape.value=`group`;break;case`t`:e.isTextMode.value=!0,e.isWriting.value=!1,e.showCaret.value=!1;break}},o=t=>{switch(t){case`c`:e.setShapeTo(`circle`);break;case`s`:e.setShapeTo(`rect`);break;case`a`:e.setShapeTo(`arrow`);break;case`l`:e.setShapeTo(`line`);break}},s=(t,n)=>{let r=e.lastSelectedShape.value;if(!r)return;let i=(e,t)=>{typeof r[e]==`number`&&(r[e]+=t)};switch(r.type){case`rect`:case`circle`:case`text`:i(`x`,t),i(`y`,n);break;case`arrow`:i(`x`,t),i(`y`,n),i(`endX`,t),i(`endY`,n);break}},c=()=>{let t=e.lastSelectedShape.value;t&&(e.shapes.value=e.shapes.value.filter(e=>e.id!==t.id),e.lastSelectedShape.value=void 0)},l=!1,u=null,d=()=>{l||(l=!0,e.history?.value?.begin?.(`nudge`))},ee=()=>{l&&(clearTimeout(u),u=setTimeout(()=>{l=!1,e.history?.value?.end?.()},160))},te=()=>{clearTimeout(u),l&&e.history?.value?.end?.(),l=!1},f=n=>{if(t(n)&&!n.shiftKey&&n.key.toLowerCase()===`z`){if(r(n))return;n.preventDefault(),e.undoLastShape?.();return}if(t(n)&&n.shiftKey&&n.key.toLowerCase()===`z`||t(n)&&n.key.toLowerCase()===`y`){if(r(n))return;n.preventDefault(),typeof e.redoLastShape==`function`?e.redoLastShape():e.history?.value?.redo?.();return}if(r(n))return;let l=n.key.toLowerCase();if(l===`escape`){n.preventDefault(),i();return}if(l===`delete`||l===`backspace`){n.preventDefault(),c();return}if([`m`,`r`,`d`,`g`,`t`].includes(l)){n.preventDefault(),a(l);return}if([`c`,`a`,`l`,`s`].includes(l)){n.preventDefault(),o(l);return}if(n.key===`ArrowUp`||n.key===`ArrowDown`||n.key===`ArrowLeft`||n.key===`ArrowRight`){n.preventDefault(),d();let e=n.shiftKey?10:1;n.key===`ArrowUp`&&s(0,-e),n.key===`ArrowDown`&&s(0,e),n.key===`ArrowLeft`&&s(-e,0),n.key===`ArrowRight`&&s(e,0),ee()}},p=e=>{e.key.startsWith(`Arrow`)&&ee()};return window.addEventListener(`keydown`,f),window.addEventListener(`keyup`,p),function(){window.removeEventListener(`keydown`,f),window.removeEventListener(`keyup`,p),te()}}var xe={class:`teleport-tooltip__inner`},v=ge({__name:`TeleportedTooltip`,props:{show:{type:Boolean,default:!1},x:{type:Number,required:!0},y:{type:Number,required:!0},placement:{type:String,default:`top`},styleObject:{type:Object,default(){return{}}},delay:{type:Number,default:0},delayIn:{type:Number,default:300},delayOut:{type:Number,default:0}},setup(n){let r=n,c=f(()=>r.delayIn??r.delay),l=f(()=>r.delayOut??r.delay),ee=g(!1),p=null,ne=null;function ie(){p&&=(clearTimeout(p),null),ne&&=(clearTimeout(ne),null)}function ae(){ie();let e=Math.max(0,c.value||0);e===0?ee.value=!0:p=setTimeout(()=>{ee.value=!0,p=null},e)}function oe(){ie();let e=Math.max(0,l.value||0);e===0?ee.value=!1:ne=setTimeout(()=>{ee.value=!1,ne=null},e)}re(()=>r.show,e=>{e?ae():oe()},{immediate:!0}),i(()=>{r.show&&ae()}),a(()=>{ie()});let se=f(()=>({position:`fixed`,zIndex:2147483647,top:`${r.y}px`,left:`${r.x}px`,transform:r.placement===`bottom`?`translate(-50%, 8px)`:`translate(-50%, -100%)`,pointerEvents:`none`,...r.styleObject}));return(r,i)=>(o(),d(te,{to:`body`},[ee.value?(o(),m(`div`,{key:0,class:e([`teleport-tooltip`,n.placement]),style:s(se.value),role:`tooltip`,"aria-hidden":`false`},[h(`div`,xe,[u(r.$slots,`default`,{},void 0,!0)])],6)):t(``,!0)]))}},[[`__scopeId`,`data-v-430dd7ad`]]),Se={class:`vue-data-ui-component vue-ui-annotator`},Ce={"data-dom-to-png-ignore":``},we=[`disabled`],Te=[`disabled`],Ee=[`disabled`],De=[`disabled`],Oe=[`disabled`],ke=[`disabled`],Ae=[`disabled`],je=[`disabled`],Me=[`disabled`],Ne={class:`tool-selection`,style:{"margin-top":`6px`}},Pe={viewBox:`0 0 12 12`,style:{width:`100%`}},Fe=[`fill`],Ie={key:0},Le={class:`tool-input`},Re=[`checked`],ze={viewBox:`0 0 12 12`,style:{width:`100%`}},Be=[`fill`],Ve={key:1},He={class:`tool-input`},Ue=[`checked`],We={viewBox:`0 0 24 24`,style:{width:`100%`}},Ge=[`stroke`],Ke={key:2},qe={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`}},Je={class:`tool-input`},Ye={key:3},Xe={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`}},Ze={class:`tool-input`},Qe={viewBox:`0 0 24 24`,height:`24`,width:`24`,style:{"margin-bottom":`-5px`,"margin-top":`-10px`}},$e=[`checked`],et={key:4},tt={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`}},nt={class:`tool-input`},rt={key:5},it={key:6},at=[`disabled`],ot={key:7},st=[`disabled`],ct={key:8},lt={key:9},ut={key:10},dt={key:11},ft={style:{display:`flex`,"flex-direction":`column`,"align-items":`center`,"justify-content":`center`},class:`tooltip`},pt={style:{display:`flex`,"flex-direction":`column`,"align-items":`start`,"justify-content":`center`}},mt={class:`tool-input`,style:{"font-variant-numeric":`tabular-nums`}},ht=[`id`],gt=[`viewBox`,`width`,`height`],_t=[`width`,`height`,`pointer-events`],vt=[`innerHTML`],yt=[`height`,`viewBox`,`width`],bt=[`cx`,`cy`],xt=`annotations`,St=ge({__name:`vue-ui-annotator`,props:{config:{type:Object,default(){return{}}},dataset:{type:Object,default(){return{shapes:[],lastSelectedShape:void 0}}}},emits:[`toggleOpenState`,`saveAnnotations`],setup(te,{emit:ge}){let xe=te,St=ge,Ct=g(fe()),{isImaging:wt,generateImage:Tt}=he({elementId:Ct.value,fileName:xt}),y=g(void 0),Et=g(1),b=g({start:{x:0,y:0},end:{x:0,y:0}}),x=g(void 0),S=g(void 0),C=g(!1),w=g(!1),Dt=g(!1),T=g(!1),Ot=g(!1),kt=g(!0),E=g(!1),At=g(!1),jt=g(!1),D=g(!1),Mt=g(!1),O=g(!1),k=g(!1),A=g(!1),j=g(!1),M=g(!1),N=g(!1),P=g(xe.dataset?.lastSelectedShape??void 0),F=g({x:0,y:0}),Nt=g(!0),I=g([]),L=g(xe.dataset?.shapes||[]);g([]);let Pt=g(Math.round(Math.random())*1e5),Ft=g(1e3),It=g(1e3),R=g({arrow:{color:`grey`,filled:!0},circle:{color:`grey`,filled:!1,radius:3,strokeWidth:2},rect:{color:`grey`,filled:!1,strokeWidth:2,height:12,width:12}}),z=g(`#1A1A1A`),B=g(!1),Lt=g(1),Rt=g(void 0),zt=g(1),Bt=g(1),V=g(`start`),Vt=g(20),Ht=g(100),Ut=pe,H=g(null),U=g(!1),W=g(null),G=g({x:0,y:0}),Wt=g(null),K=g([]),Gt=g(!1),Kt=g(null),qt=g({undo:0,redo:0}),Jt=g(null);g(null),g(null);let Yt=g(null),q=f(()=>{let e=me().vue_ui_annotator;return Object.keys(xe.config||{}).length?de(ue({defaultConfig:e,userConfig:xe.config})):e}),J=f(()=>q.value.useCursorPointer),Y=f(()=>{let e=q.value.style.tooltips;return{backgroundColor:e.backgroundColor,color:e.color,border:e.border,borderRadius:`${e.borderRadius}px`,boxShadow:e.boxShadow}}),Xt=f(()=>L.value.filter(e=>![`line`,`group`].includes(e.type)).length>1),Zt=f(()=>Ut[Ht.value>98?98:Ht.value]),Qt=f(()=>{switch(!0){case T.value:return`default`;case D.value:return`move`;case j.value:return`text`;case O.value:return`se-resize`;default:return``}}),$t=f(()=>L.value),X=g(null);function en(e){if(e)switch(!0){case e.type===`rect`:return`
                <rect
                id="${e.id}" 
                style="stroke-dasharray: 10; display:${S.value&&S.value===e.id?`initial`:`none`}"
                x="${e.x-20}"
                y="${e.y-20}"
                height="${e.rectHeight+40}"
                width="${e.rectWidth+40}"
                fill="transparent"
                stroke="grey"
                />
            `;case e.type===`circle`:return`
                <rect
                id="${e.id}" 
                style="stroke-dasharray: 10; display:${S.value&&S.value===e.id?`initial`:`none`}"
                x="${e.x-e.circleRadius-20}"
                y="${e.y-e.circleRadius-20}"
                height="${e.circleRadius*2+40}"
                width="${e.circleRadius*2+40}"
                fill="transparent"
                stroke="grey"
                />
            `;case e.type===`arrow`:let t=e.endX-e.x>0,n=e.endY-e.y>0;return`
                <rect
                id="${e.id}" 
                style="stroke-dasharray: 10; display:${S.value&&S.value===e.id?`initial`:`none`}"
                x="${t?e.x-20:e.endX-20}"
                y="${n?e.y-20:e.endY-20}"
                height="${n?e.endY-e.y+40:e.y-e.endY+40}"
                width="${t?e.endX-e.x+40:e.x-e.endX+40}"
                fill="transparent"
                stroke="grey"
                />
            `;case e.type===`text`:let r=X.value?Array.from(X.value.getElementsByTagName(`text`)).find(t=>t.id===e.id):null;if(!r)return;let{x:i,y:a,width:o,height:s}=r.getBBox();return`
                <rect
                id="${e.id}" 
                style="stroke-dasharray: 10; display:${S.value&&S.value===e.id?`initial`:`none`}"
                x="${i-20}"
                y="${a-20}"
                height="${s+40}"
                width="${o+40}"
                fill="transparent"
                stroke="grey"
                />
            `;default:return``}}function tn(e,t=!1){switch(!0){case e.type===`circle`:return`
                <g id="${e.id}" style="display:${T.value?`initial`:`none`};">
                    <circle id="${e.id}" cx="${e.x}" cy="${e.y}" r="12" fill="red"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x-4}" y1="${e.y-4}" x2="${e.x+4}" y2="${e.y+4}"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x+4}" y1="${e.y-4}" x2="${e.x-4}" y2="${e.y+4}"/>
                </g>
            `;case e.type===`text`:let n,r=[-8,-12,-4,-12,-4];switch(!0){case e.textAlign===`start`:n=t?[-20,-24,-16,-16,-24]:[-16,-20,-12,-12,-20];break;case e.textAlign===`middle`:n=[0,-4,4,4,-4],r=[-32,-36,-28,-36,-28];break;case e.textAlign===`end`:n=[16,20,12,12,20];break;default:n=[0,0,0];break}return`
                <g id="${e.id}" style="display:${T.value?`initial`:`none`};">
                    <circle id="${e.id}" cx="${e.x+n[0]}" cy="${e.y+r[0]}" r="12" fill="red"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x+n[1]}" y1="${e.y+r[1]}" x2="${e.x+n[2]}" y2="${e.y+r[2]}"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x+n[3]}" y1="${e.y+r[3]}" x2="${e.x+n[4]}" y2="${e.y+r[4]}"/>
                </g>
            `;default:return`
                <g id="${e.id}" style="display:${T.value?`initial`:`none`};">
                    <circle id="${e.id}" cx="${e.x-4}" cy="${e.y-4}" r="12" fill="red"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x-8}" y1="${e.y-8}" x2="${e.x}" y2="${e.y}"/>
                    <line stroke="white" stroke-width="2" id="${e.id}" x1="${e.x}" y1="${e.y-8}" x2="${e.x-8}" y2="${e.y}"/>
                </g>
            `}}function nn(e){switch(!0){case e.textAlign===`middle`:return`<path class="vue-ui-annotator-caret" stroke="black" stroke-width="2" d="M${e.x},${e.y-e.fontSize} ${e.x},${e.y-e.fontSize-15}" /> <path class="vue-ui-annotator-caret" stroke="black" stroke-width="2" d="M${e.x-3},${e.y-e.fontSize-5} ${e.x},${e.y-e.fontSize} ${e.x+3},${e.y-e.fontSize-5}"/>`;case e.textAlign===`start`:let t=e.isBulletTextMode?e.fontSize:0;return`<path class="vue-ui-annotator-caret" d="M${e.x-20-t},${e.y-e.fontSize/6} ${e.x-5-t},${e.y-e.fontSize/6}" stroke="black" stroke-width="2" />
                    <path class="vue-ui-annotator-caret" d="M${e.x-10-t},${e.y-e.fontSize/3} ${e.x-5-t},${e.y-e.fontSize/6} ${e.x-10-t},${e.y}" stroke="black" stroke-width="2">`;case e.textAlign===`end`:return`<path class="vue-ui-annotator-caret" d="M${e.x+20},${e.y-e.fontSize/6} ${e.x+5},${e.y-e.fontSize/6}" stroke="black" stroke-width="2" />
                    <path class="vue-ui-annotator-caret" d="M${e.x+10},${e.y-e.fontSize/3} ${e.x+5},${e.y-e.fontSize/6} ${e.x+10},${e.y}" stroke="black" stroke-width="2">`;default:return``}}function rn(e,t,n=!1){switch(!0){case e.textAlign===`start`:return`
            <g id="${e.id}">
                <rect 
                    id="${e.id}" 
                    style="display:${P.value&&P.value.id===e.id?`initial`:`none`};" 
                    x="${e.x}" 
                    y="${e.y-50}" 
                    height="${e.lines===0||e.lines===1?e.fontSize*4:e.fontSize*2*e.lines}"
                    width="100" 
                    fill="rgba(0,0,0,0)"
                />
                <text
                style="user-select:none; height:100px;"
                id="${e.id}"
                x="${e.x}"
                y="${e.y}"
                text-anchor="${e.textAlign}"
                font-size="${e.fontSize}"
                fill="${e.color}"
                font-weight="${e.isBold?`bold`:`normal`}"
                font-style="${e.isItalic?`italic`:`normal`}"
                text-decoration="${e.isUnderline?`underline`:`none`}"
                >
                    ${t.join(``)}
                </text>
                ${B.value&&P.value&&P.value.id===e.id?nn(e):``}
                ${tn(e,n)}
            </g> 
            `;case e.textAlign===`middle`:return`
                <g id="${e.id}">
                <rect 
                    id="${e.id}" 
                    style="display:${P.value&&P.value.id===e.id?`initial`:`none`};" 
                    x="${e.x-50}" 
                    y="${e.y-50}" 
                    height="${e.lines===0||e.lines===1?e.fontSize*4:e.fontSize*2*e.lines}"
                    width="100" 
                    fill="rgba(0,0,0,0)"
                />
                <text
                style="user-select:none; height:100px;"
                id="${e.id}"
                x="${e.x}"
                y="${e.y}"
                text-anchor="${e.textAlign}"
                font-size="${e.fontSize}"
                fill="${e.color}"
                font-weight="${e.isBold?`bold`:`normal`}"
                font-style="${e.isItalic?`italic`:`normal`}"
                text-decoration="${e.isUnderline?`underline`:`none`}"
                >
                    ${t.join(``)}
                </text>
                ${B.value&&P.value&&P.value.id===e.id?nn(e):``}
                ${tn(e)}
                </g>
            `;case e.textAlign===`end`:return`
            <g id="${e.id}">
                <rect 
                    id="${e.id}" 
                    style="display:${P.value&&P.value.id===e.id?`initial`:`none`};" 
                    x="${e.x-100}" 
                    y="${e.y-50}" 
                    height="${e.lines===0||e.lines===1?e.fontSize*4:e.fontSize*2*e.lines}"
                    width="100" 
                    fill="rgba(0,0,0,0)"
                />
                <text
                style="user-select:none; height:100px;"
                id="${e.id}"
                x="${e.x}"
                y="${e.y}"
                text-anchor="${e.textAlign}"
                font-size="${e.fontSize}"
                fill="${e.color}"
                font-weight="${e.isBold?`bold`:`normal`}"
                font-style="${e.isItalic?`italic`:`normal`}"
                text-decoration="${e.isUnderline?`underline`:`none`}"
                >
                    ${t.join(``)}
                </text>
                ${B.value&&P.value&&P.value.id===e.id?nn(e):``}
                ${tn(e)}
            </g> 
            `;default:return``}}let an=f(()=>$t.value.map(e=>{switch(!0){case e&&e.type===`arrow`:let t=e.strokeWidth>3?5:10,n=e.strokeWidth>3?2.5:5;return{html:`
          <defs>
          <marker 
              id="${e.id}" 
              markerWidth="${t}" 
              markerHeight="${t}" 
              refX="0" 
              refY="${n}" 
              orient="auto"
          >
              <polygon 
              points="0 0,${t} ${n}, 0 ${t}" 
              fill="${e.color}"
              />
          </marker>
          </defs>
          ${en(e)}
          <g id="${e.id}">
              <path 
              style="stroke-linecap: round !important; ${e.isDash?`stroke-dasharray: ${e.strokeWidth*3}`:``}" 
              stroke="${e.color}" 
              id="${e.id}" 
              d="M${e.x},${e.y} ${e.endX},${e.endY}" 
              stroke-width="${e.strokeWidth}" 
              marker-end="url(#${e.id})"
              />
          </g>
          <g id="${e.id}">
          <rect 
              id="${e.id}"
              x="${e.x-10}"
              y="${e.y-10}"
              height="20"
              width="20"
              fill="rgba(0,0,0,0.3)"
              style="display:${O.value||D.value?`initial`:`none`}; rx:1 !important; ry:1 !important;"
          />
          </g>
          ${tn(e)}
          </g>
          `,id:e.id};case e&&e.type===`circle`:return{html:`
          <g id="${e.id}">
              ${en(e)}
              <circle 
              id="${e.id}" 
              cx="${e.x}" 
              cy="${e.y}" 
              r="${e.circleRadius?e.circleRadius:Number.MIN_VALUE}"
              fill="${e.isFilled?e.color+e.alpha:`rgba(255,255,255,0.001)`}" 
              stroke="${e.color+e.alpha}" 
              stroke-width="${e.strokeWidth}"
              style="${e.isDash?`stroke-dasharray: ${e.strokeWidth*3}`:``}"
              >
              </circle>
          </g>
          
          ${tn(e)}`,id:e.id};case e&&e.type===`group`:return{html:`<g id="${e.id}">
            <rect
                id="${O.value?``:e.id}"
                x="${e.x}"
                y="${e.y}"
                fill="transparent"
                height="${e.rectHeight}"
                width="${e.rectWidth}"
                stroke="grey"
                stroke-width="1"
                style="rx:1 !important; ry:1 !important; ${e.isDash?`stroke-dasharray: ${e.strokeWidth*3}`:``}; display:${k.value||T.value||S.value&&S.value===e.id?`initial`:`none`};"
                        />
            <g id="${e.id}">
            ${e.content?e.content:``}
            </g>
            ${tn(e)}
            </g> `,id:e.id};case e&&e.type===`rect`:return{html:`<g id="${e.id}">
            ${en(e)}
            <rect
                id="${O.value?``:e.id}"
                x="${e.x}"
                y="${e.y}"
                fill="${e.isFilled?e.color+e.alpha:`rgba(255,255,255,0.001)`}"
                height="${e.rectHeight}"
                width="${e.rectWidth}"
                stroke="${e.color+e.alpha}"
                stroke-width="${e.strokeWidth}"
                style="rx:1 !important; ry:1 !important; ${e.isDash?`stroke-dasharray: ${e.strokeWidth*3}`:``}"
            />
            <rect id="${e.id}"
                x="${e.x+e.rectWidth}"
                y="${e.y+e.rectHeight}"
                height="20"
                width="20"
                fill="rgba(0,0,0,0.3)"
                style="display:${O.value?`initial`:`none`}; rx:1 !important; ry:1 !important;"
            />
            ${tn(e)}
            </g> `,id:e.id};case e&&e.type===`line`:return{html:`
                <g id="${e.id}">
                    <path 
                    id="${e.id}" 
                    d="M${e.path?e.path:``}" 
                    style="stroke:${e.color+e.alpha} !important; fill:none; stroke-width:${e.strokeWidth} !important; stroke-linecap: round !important; stroke-linejoin: round !important;"        
                    />
            ${tn(e)}
                </g>
                `,id:e.id};case e&&e.type===`text`:let r=e.textContent.split(`‎`),i=[];for(let t=0;t<r.length;t+=1)i.push(`
        ${e.isBulletTextMode?`<tspan x="${e.x-e.fontSize}" y="${e.y+e.fontSize*t}" id="${e.id}" font-size="${e.fontSize/2}">⬤</tspan>`:``}
                <tspan id="${e.id}" x="${e.x}" y="${e.y+e.fontSize*t}">
                    ${r[t]}
                </tspan>`);return{html:`
            ${en(e)}
            ${rn(e,i,e.isBulletTextMode)}
            `,id:e.id}}}));function Z(e){if(e==null)return e;try{return typeof structuredClone==`function`?structuredClone(e):JSON.parse(JSON.stringify(e))}catch{return Array.isArray(e)?e.map(e=>Z(e)):typeof e==`object`?Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Z(t)])):e}}function on(e=!1){if(!y.value||!Ot.value)return;b.value.end={x:F.value.x,y:F.value.y};let t;L.value.length>0&&x.value&&(t=[...L.value].find(e=>e.id===x.value.id));let n,r,i;t&&(n=t.x-b.value.end.x,r=t.y-b.value.end.y,i=Math.sqrt(n*n+r*r));let a,o;switch(e?(a=Math.max(b.value.end.x,t.x),o=Math.min(b.value.end.x,t.x),Math.max(b.value.end.y,t.y),Math.min(b.value.end.y,t.y)):(a=Math.max(b.value.end.x,b.value.start.x),o=Math.min(b.value.end.x,b.value.start.x),Math.max(b.value.end.y,b.value.start.y),Math.min(b.value.end.y,b.value.start.y)),!0){case y.value===`arrow`:L.value.at(-1).endX=b.value.end.x,L.value.at(-1).endY=b.value.end.y;break;case y.value===`circle`:L.value.at(-1).circleRadius=kt.value?Z(a-o)+20:i+20;break;case y.value===`line`:L.value.at(-1).path+=` ${F.value.x} ${F.value.y} `;break;case[`rect`,`group`].includes(y.value):L.value.at(-1).rectWidth=Z(b.value.end.x-L.value.at(-1).x)>0?Z(b.value.end.x-L.value.at(-1).x):20,L.value.at(-1).rectHeight=Z(b.value.end.y-L.value.at(-1).y)>0?Z(b.value.end.y-L.value.at(-1).y):20}}function sn(){if(!Ot.value){Jt.value=null;return}on(),Jt.value=requestAnimationFrame(sn)}function cn(e){let t=L.value.findIndex(t=>t.id===e);if(t>-1&&t!==L.value.length-1){let[e]=L.value.splice(t,1);L.value.push(e)}}function ln(e){let t=e=>!!e&&L.value.some(t=>t.id===e);if(t(e?.target?.id))return e.target.id;let n=X.value?.querySelector(`.annotator__glass`);if(!n)return null;let r=n.style.pointerEvents;n.style.pointerEvents=`none`;let i=document.elementFromPoint(e.clientX,e.clientY);return n.style.pointerEvents=r||`all`,t(i?.id)?i.id:null}function un(e={}){let{maxEntries:t=200,maxBytes:n=2e6}=e,r={open:!1,before:null,undo:[],redo:[]},i={undo:0,redo:0},a=e=>typeof e==`string`?e.length*2:0,o=()=>JSON.stringify({shapes:Z(L.value),lastSelectedShape:Z(P.value)}),s=e=>{let t=JSON.parse(e);L.value=t.shapes,P.value=t.lastSelectedShape},c=()=>{qt.value.undo=r.undo.length,qt.value.redo=r.redo.length},l=(e,o)=>{let s=r[e];for(s.push(o),i[e]+=a(o);s.length>t||i[e]>n;){let t=s.shift();i[e]-=a(t)}};return{begin(){r.open||(r.open=!0,r.before=o())},end(){r.open&&(r.open=!1,o()!==r.before&&(l(`undo`,r.before),r.redo.length=0,i.redo=0),r.before=null,c())},undo(){let e=r.undo.pop();e&&(i.undo-=a(e),l(`redo`,o()),s(e),c())},redo(){let e=r.redo.pop();e&&(i.redo-=a(e),l(`undo`,o()),s(e),c())},size(){return{undo:r.undo.length,redo:r.redo.length,approxBytes:{undo:i.undo,redo:i.redo}}}}}function dn(){if(!Wt.value)return;let e=Wt.value.getBoundingClientRect();G.value={x:e.left+e.width/2,y:e.top}}function Q(e,t,n=`top`){W.value=e,Wt.value=t.currentTarget||t.target,dn(),U.value=!0,window.addEventListener(`scroll`,dn,!0),window.addEventListener(`resize`,dn,{passive:!0})}function $(){U.value=!1,W.value=null,Wt.value=null,window.removeEventListener(`scroll`,dn,!0),window.removeEventListener(`resize`,dn)}function fn(e){let t=e?.target&&e.target.id||x.value&&x.value.id,n=L.value.find(e=>e.id===t);if(!n){H.value=null;return}P.value=n;let r=F.value.x,i=F.value.y;switch(n.type){case`rect`:case`circle`:case`text`:H.value={dx:r-n.x,dy:i-n.y};break;case`arrow`:H.value={dx:r-n.x,dy:i-n.y,endDx:r-n.endX,endDy:i-n.endY};break;case`group`:H.value={dx:r-(n.x||0),dy:i-(n.y||0)};break;default:H.value={dx:0,dy:0};break}}function pn(e){let t=L.value.find(e=>e.id===P.value.id);switch(!0){case e===`front`:L.value=L.value.filter(e=>e.id!==t.id),L.value.push(t);break;case e===`back`:L.value=L.value.filter(e=>e.id!==t.id),L.value=[t,...L.value];break;default:return}}function mn(){if(!P.value?.id)return;let e={...P.value,id:`${P.value.id}_copy_${fe()}`,x:P.value.x-100<0?1:P.value.x-100,y:P.value.y-100<0?1:P.value.y-100};L.value.push(e)}function hn(e){e.preventDefault(),Nt.value=!1,e.target&&e.target.id&&(S.value=e.target.id)}function gn(){!P.value||!P.value.id.includes(`text`)||P.value.textContent===``&&(L.value=L.value.filter(e=>e.id!==P.value.id),P.value=L.value.at(-1))}function _n(e){if(T.value)return;e.preventDefault(),e.stopPropagation(),gn(),j.value?(N.value=!0,B.value=!0):(N.value=!1,B.value=!1,j.value=!1);let t=`text_${fe()}`;if(N.value){K.value?.begin(),L.value.push({id:t,type:`text`,lines:0,x:F.value.x,y:F.value.y,textContent:``,fontSize:Z(Vt.value),textAlign:Z(V.value),isBold:Z(C.value),isItalic:Z(At.value),isUnderline:Z(M.value),color:Z(z.value),isBulletTextMode:Z(w.value)}),x.value=L.value.at(-1),P.value=L.value.at(-1),K.value?.end();return}let n=()=>{Dt.value=L.value.find(t=>t.id===e.target.id).isDash},r=()=>{Et.value=L.value.find(t=>t.id===e.target.id).strokeWidth};if(k.value=!1,e.target.id.includes(`arrow`)){y.value=`arrow`,n(),r();return}if(e.target.id.includes(`circle`)){y.value=`circle`,R.value.circle.filled=L.value.find(t=>t.id===e.target.id).isFilled,n(),r();return}if(e.target.id.includes(`rect`)){y.value=`rect`,R.value.rect.filled=L.value.find(t=>t.id===e.target.id).isFilled,n(),r();return}if(e.target.id.includes(`line`)){y.value=`line`,r();return}if(e.target.id.includes(`text`)){j.value=!0,N.value=!0,B.value=!0;let t=L.value.find(t=>t.id===e.target.id);t&&t.textAlign&&(V.value=L.value.find(t=>t.id===e.target.id).textAlign),t&&(w.value=L.value.find(t=>t.id===e.target.id).isBulletTextMode);return}}function vn(e){!P.value||P.value.type!==`text`||(P.value.textAlign=e)}function yn(){K.value?.undo?.()}function bn(){K.value?.redo?.()}let xn=[16,17,18,20,27,33,34,35,36,37,38,39,40,45,91,112,113,114,115,116,117,118,119,120,121,122,123,221,255,`Unidentified`];function Sn(e){if(Nt.value)return;e.preventDefault();let t=e.keyCode;if(!N.value)return;B.value=!0;let n;if(n=P.value.type===`text`?L.value.find(e=>e.id===P.value.id):L.value.at(-1),x.value=n,n.type===`text`)switch(x.value.isBold=Z(C.value),x.value.isItalic=Z(At.value),x.value.isUnderline=Z(M.value),!0){case[8,46].includes(t):n.textContent=n.textContent.slice(0,-1);break;case t===9:n.textContent+=`&nbsp; &nbsp; &nbsp; &nbsp;`;break;case t===13:n.lines+=1,n.textContent+=`‎`;return;case xn.includes(t):return;default:n.textContent+=e.key}}function Cn(){if(I.value=[],y.value!==`group`){k.value=!1,L.value=L.value.filter(e=>e.type!==`group`);return}let e=L.value.at(-1);if(L.value.forEach(t=>{if(t.type!==`group`)switch(!0){case t.type===`arrow`:let n=t.x<=t.endX&&t.y<=t.endY&&e.x<=t.x&&e.y<=t.y&&e.x+e.rectWidth>=t.endX&&e.y+e.rectHeight>=t.endY,r=t.endY<t.y&&t.x<t.endX&&e.x<=t.x&&e.y<=t.y&&e.x+e.rectWidth>=t.endX&&e.y+e.rectHeight>=t.y,i=t.x>t.endX&&t.y<t.endY&&e.x<=t.endX&&e.y<=t.endY&&e.x+e.rectWidth>=t.x&&e.y+e.rectHeight>=t.endY,a=t.x>t.endX&&t.y>t.endY&&e.x<=t.endX&&e.y<=t.endY&&e.x+e.rectWidth>=t.x&&e.y+e.rectHeight>=t.y;(n||r||i||a)&&I.value.push(t);break;case t.type===`circle`:e.x<=t.x+t.circleRadius&&e.y<=t.y+t.circleRadius&&t.x+t.circleRadius<=e.x+e.rectWidth&&t.y+t.circleRadius<=e.y+e.rectHeight&&I.value.push(t);break;case t.type===`rect`:e.x<=t.x&&e.y<=t.y&&t.x<=e.x+e.rectWidth&&t.y<=e.y+e.rectHeight&&t.x+t.rectWidth<=e.x+e.rectWidth&&t.y+t.rectHeight<=e.y+e.rectHeight&&t.rectWidth<=e.rectWidth&&t.rectHeight<=e.rectHeight&&I.value.push(t);break;case t.type===`text`:e.x<=t.x&&e.y<=t.y&&I.value.push(t);break}}),I.value=I.value.map(t=>({...t,id:e.id,oldId:t.id,diffX:t.x-e.x,diffY:t.y-e.y,diffEndX:t.endX?t.endX-e.x:0,diffEndY:t.endY?t.endY-e.y:0})),e.source=I.value,I.value.length>1){let t=Z(I.value).map(e=>e.oldId);L.value=L.value.filter(e=>!t.includes(e.id)),I.value.forEach(t=>{switch(!0){case t.type===`circle`:e.content+=`
            <circle
            id="${t.id}"
            cx="${t.x}"
            cy="${t.y}"
            r="${t.circleRadius?t.circleRadius:Number.MIN_VALUE}"
            fill="${t.isFilled?t.color+t.alpha:`rgba(255,255,255,0.001)`}"
            stroke="${t.color+t.alpha}" 
            stroke-width="${t.strokeWidth}"
            style="${t.isDash?`stroke-dasharray: ${t.strokeWidth*3}`:``}"
            />
        `;break;case t.type===`rect`:e.content+=`
            <rect
            id="${O.value?``:t.id}"
            x="${t.x}"
            y="${t.y}"
            fill="${t.isFilled?t.color+t.alpha:`rgba(255,255,255,0.001)`}"
            height="${t.rectHeight}"
            width="${t.rectWidth}"
            stroke="${t.color+t.alpha}"
            stroke-width="${t.strokeWidth}"
            style="rx:1 !important; ry:1 !important; ${t.isDash?`stroke-dasharray: ${t.strokeWidth*3}`:``}"
                        />
        `;break;case t.type===`arrow`:let n=t.strokeWidth>3?5:10,r=t.strokeWidth>3?2.5:5,i=fe();e.content+=`
            <g id="${t.id}">
            <defs>
                <marker 
                id="${i}" 
                markerWidth="${n}" 
                markerHeight="${n}" 
                refX="0" 
                refY="${r}" 
                orient="auto"
                >
                <polygon 
                points="0 0,${n} ${r}, 0 ${n}" 
                fill="${t.color}"
                />
                </marker>
            </defs>

            <path 
                style="stroke-linecap: round !important; ${t.isDash?`stroke-dasharray: ${t.strokeWidth*3}`:``}" 
                stroke="${t.color}" 
                id="${t.id}" 
                d="M${t.x},${t.y} ${t.endX},${t.endY}" 
                stroke-width="${t.strokeWidth}" 
                marker-end="url(#${i})"
            />
            </g>
        `;break;case t.type===`text`:let a=t.textContent.split(`‎`),o=[];for(let e=0;e<a.length;e+=1)o.push(`
            ${t.isBulletTextMode?`<tspan x="${t.x-t.fontSize}" y="${t.y+t.fontSize*e}" id="${t.id}" font-size="${t.fontSize/2}">⬤</tspan>`:``}
            <tspan id="${t.id}" x="${t.x}" y="${t.y+t.fontSize*e}">
                ${a[e]}
            </tspan>`);e.content+=`
            ${rn(t,o,t.isBulletTextMode)}
            `;break}})}else L.value=L.value.filter(t=>t.id!==e.id)}function wn(e){e.content=``;let t=e.x||0,n=e.y||0;(e.source||[]).forEach(r=>{switch(r.type){case`circle`:{let i=t+r.diffX,a=n+r.diffY;e.content+=`
          <circle
            id="${r.id}"
            cx="${i}"
            cy="${a}"
            r="${r.circleRadius?r.circleRadius:Number.MIN_VALUE}"
            fill="${r.isFilled?r.color+r.alpha:`rgba(255,255,255,0.001)`}"
            stroke="${r.color+r.alpha}"
            stroke-width="${r.strokeWidth}"
            style="${r.isDash?`stroke-dasharray: ${r.strokeWidth*3}`:``}"
          />
        `;break}case`rect`:{let i=t+r.diffX,a=n+r.diffY;e.content+=`
          <rect
            id="${O.value?``:r.id}"
            x="${i}"
            y="${a}"
            fill="${r.isFilled?r.color+r.alpha:`rgba(255,255,255,0.001)`}"
            height="${r.rectHeight}"
            width="${r.rectWidth}"
            stroke="${r.color+r.alpha}"
            stroke-width="${r.strokeWidth}"
            style="rx:1 !important; ry:1 !important; ${r.isDash?`stroke-dasharray: ${r.strokeWidth*3}`:``}"
          />
        `;break}case`arrow`:{let i=t+r.diffX,a=n+r.diffY,o=t+r.diffEndX,s=n+r.diffEndY,c=r.strokeWidth>3?5:10,l=r.strokeWidth>3?2.5:5,u=`m_${r.id}_${fe()}`;e.content+=`
          <g id="${r.id}">
            <defs>
              <marker 
                id="${u}" 
                markerWidth="${c}" 
                markerHeight="${c}" 
                refX="0" 
                refY="${l}" 
                orient="auto">
                <polygon points="0 0,${c} ${l}, 0 ${c}" fill="${r.color}" />
              </marker>
            </defs>
            <path
              style="stroke-linecap: round !important; ${r.isDash?`stroke-dasharray: ${r.strokeWidth*3}`:``}"
              stroke="${r.color}"
              id="${r.id}"
              d="M${i},${a} ${o},${s}"
              stroke-width="${r.strokeWidth}"
              marker-end="url(#${u})"
            />
          </g>
        `;break}case`text`:{let i=(r.textContent||``).split(`‎`).map((e,i)=>`
          ${r.isBulletTextMode?`<tspan x="${t+r.diffX-r.fontSize}" y="${n+r.diffY+r.fontSize*i}" id="${r.id}" font-size="${r.fontSize/2}">⬤</tspan>`:``}
          <tspan id="${r.id}" x="${t+r.diffX}" y="${n+r.diffY+r.fontSize*i}">
            ${e}
          </tspan>
        `).join(``);e.content+=`
          <g id="${r.id}">
            <text
              style="user-select:none; height:100px;"
              id="${r.id}"
              x="${t+r.diffX}"
              y="${n+r.diffY}"
              text-anchor="${r.textAlign}"
              font-size="${r.fontSize}"
              fill="${r.color}"
              font-weight="${r.isBold?`bold`:`normal`}"
              font-style="${r.isItalic?`italic`:`normal`}"
              text-decoration="${r.isUnderline?`underline`:`none`}">
              ${i}
            </text>
          </g>
        `;break}}})}function Tn(e){e.relatedTarget&&X.value&&X.value.contains(e.relatedTarget)||(Nt.value=!0,S.value=void 0)}function En(){if(Ot.value=!0,!y.value&&!k.value||!Ot.value)return;kt.value=!0,b.value.start={x:F.value.x,y:F.value.y};let e=`${k.value?`group`:y.value}_${fe()}`;switch(!0){case y.value===`arrow`:L.value.push({id:e,x:F.value.x,y:F.value.y,endX:F.value.x,endY:F.value.y,type:y.value,color:Z(z.value),strokeWidth:Z(Math.abs(Et.value)),isDash:Z(Dt.value)}),P.value=L.value.at(-1);break;case y.value===`circle`:L.value.push({alpha:R.value.circle.filled?Zt.value:``,id:e,color:Z(z.value),isFilled:Z(R.value.circle.filled),circleRadius:Z(R.value.circle.radius),circleStrokeWidth:Z(R.value.circle.strokeWidth),type:y.value,x:F.value.x,y:F.value.y,strokeWidth:Z(Math.abs(Et.value)),isDash:Z(Dt.value)}),P.value=L.value.at(-1);break;case y.value===`line`:L.value.push({alpha:Z(Zt.value),id:e,x:F.value.x,y:F.value.y,type:y.value,color:Z(z.value),strokeWidth:Z(Math.abs(Et.value)),isDash:Z(Dt.value),path:`${F.value.x} ${F.value.y}`}),P.value=L.value.at(-1);break;case y.value===`rect`:L.value.push({alpha:R.value.rect.filled?Zt.value:``,id:e,color:Z(z.value),isFilled:Z(R.value.rect.filled),rectStrokeWidth:Z(R.value.rect.strokeWidth),rectHeight:Z(R.value.rect.height),rectWidth:Z(R.value.rect.width),type:y.value,x:F.value.x,y:F.value.y,strokeWidth:Z(Math.abs(Et.value)),isDash:Z(Dt.value)}),P.value=L.value.at(-1);break;case y.value===`group`:L.value.push({alpha:1,id:`group_${fe()}`,x:F.value.x,y:F.value.y,isFilled:!1,rectHeight:Z(R.value.rect.height),rectWidth:Z(R.value.rect.width),rectStrokeWidth:1,type:`group`,color:`grey`,strokeWidth:1,isDash:!0,content:``});break}Jt.value||=requestAnimationFrame(sn)}function Dn(e){if(T.value){jt.value=!1;return}if(e.preventDefault(),e.stopPropagation(),jt.value=!0,e.pointerId!=null){try{X.value?.setPointerCapture?.(e.pointerId)}catch{}Yt.value=e.pointerId}else Yt.value=null;if((E.value||D.value||O.value||k.value)&&K.value?.begin?.(),E.value){En();return}if(D.value){let t=ln(e)||S.value||P.value?.id;t&&(cn(t),x.value={id:t}),fn(e)}}function On(e){if(!e||!e.id||e.type===`line`||!H.value&&(fn({target:{id:e.id}}),!H.value))return;let{dx:t,dy:n,endDx:r,endDy:i}=H.value,a=F.value.x,o=F.value.y;switch(P.value=e,e.type){case`arrow`:e.x=a-t,e.y=o-n,e.endX=a-(r??t),e.endY=o-(i??n);break;case`circle`:e.x=a-t,e.y=o-n;break;case`rect`:e.x=a-t,e.y=o-n;break;case`text`:e.x=a-t,e.y=o-n;break;case`group`:e.x=a-t,e.y=o-n,wn(e);break}}function kn(){let e=x.value?.id||S.value;if(!e)return;let t=L.value.find(t=>t.id===e);t&&On(t)}function An(){kt.value=!1;let e=x.value.id;if(!e)return;Ot.value=!0;let t=L.value.find(t=>t.id===e);y.value=t.type,L.value=L.value.filter(t=>t.id!==e),L.value.push(t),on(!0)}function jn(e){T.value||(e.preventDefault(),e.stopPropagation(),e.target.localName!==`svg`&&(x.value=e.target),D.value&&jt.value?kn():O.value&&jt.value&&An())}function Mn(e){let t=e.target.id;if(!0===T.value){K.value?.begin(),L.value=[...L.value].filter(e=>e.id!==t),P.value=void 0,K.value?.end();return}else P.value=L.value.find(e=>e.id===t)}let Nn=g(null);function Pn(e,t){for(t(e),e=e.firstChild;e;)Pn(e,t),e=e.nextSibling}function Fn(){Mt.value=!0,T.value=!1,D.value=!1,O.value=!1,j.value=!1,N.value=!1,k.value=!1,y.value=void 0,B.value=!1,ce(async()=>{let e=Nn.value;if(e){Pn(e,e=>{e&&e.nodeType===1&&(e.setAttribute(`font-family`,`Helvetica`),e.style.fontFamily=`Helvetica`)});try{let t;try{t=(await le(async()=>{let{default:e}=await import(`./CrLo-zBq2.js`);return{default:e}},[],import.meta.url)).default}catch{throw Error(`jspdf is not installed. Run npm install jspdf`)}let n=await _e({container:e,scale:2}),r=new Image;r.src=n,r.onload=()=>{let e={width:595.28,height:841.89},i=r.width,a=r.height,o=i/e.width*e.height,s=e.width,c=s/i*a,l=new t(``,`pt`,`a4`),u=0,d=a;if(d<o)l.addImage(n,`PNG`,0,0,s,c,``,`FAST`);else for(;d>0;)l.addImage(n,`PNG`,0,u,s,c,``,`FAST`),d-=o,u-=e.height,d>0&&l.addPage();l.save(`${new Date().toLocaleDateString()}_annotations.pdf`)}}catch(e){console.error(`Error generating image:`,e)}finally{Mt.value=!1,Pn(e,e=>{e&&e.nodeType===1&&(e.setAttribute(`font-family`,q.value.style.fontFamily),e.style.fontFamily=q.value.style.fontFamily)})}}})}function In(e){if(!T.value&&e&&(e.preventDefault(),e.stopPropagation()),Ot.value=!1,jt.value=!1,H.value=null,Yt.value!=null){try{X.value?.releasePointerCapture?.(Yt.value)}catch{}Yt.value=null}Jt.value&&=(cancelAnimationFrame(Jt.value),null),k.value&&Cn(),K.value?.end()}function Ln(){!P.value||!P.value.id.includes(`rect`)||(P.value.isFilled=!P.value.isFilled)}function Rn(){!P.value||!P.value.id.includes(`circle`)||(P.value.isFilled=!P.value.isFilled)}function zn(){!P.value||P.value.type===`text`||(P.value.isDash=Z(Dt.value))}function Bn(){!P.value||[`arrow`,`text`].includes(P.value.id)||(P.value.alpha=Z(Zt.value))}function Vn(){!P.value||![`arrow`,`circle`,`rect`,`line`].includes(P.value.type)||(P.value.strokeWidth=Z(Math.abs(Et.value)))}function Hn(){!P.value||P.value.type!==`text`||(P.value.isBold=Z(C.value),P.value.isItalic=Z(At.value),P.value.isUnderline=Z(M.value),P.value.fontSize=Z(Vt.value),P.value.isBulletTextMode=Z(w.value))}function Un(e){if(e.preventDefault(),!X.value)return;let t=X.value.getBoundingClientRect(),n,r;e.touches&&e.touches.length>0?(n=e.touches[0].clientX,r=e.touches[0].clientY):(n=e.clientX,r=e.clientY),F.value.x=(n-t.left)/t.width*It.value,F.value.y=(r-t.top)/t.height*Ft.value}function Wn(e){if(B.value=!1,gn(),e===y.value){y.value=void 0,E.value=!1;return}E.value=!0,T.value=!1,D.value=!1,O.value=!1,j.value=!1,y.value=e}function Gn(){A.value=!A.value,A.value||(D.value=!1,O.value=!1,j.value=!1,N.value=!1,y.value=void 0,B.value=!1,T.value=!1,N.value=!1),St(`toggleOpenState`,{isOpen:A.value})}function Kn(){St(`saveAnnotations`,{shapes:L.value,lastSelectedShape:P.value})}let qn=null;return i(()=>{if(Nn.value){let e=!1;Pn(Nn.value,t=>{if(!e&&[`DIV`,`svg`,`section`,`canvas`].includes(t.tagName)){Rt.value=t,e=!0;return}})}Gt.value=(()=>{if(typeof navigator>`u`)return!1;let e=navigator.userAgentData?.platform??``;if(e)return/mac|ios/i.test(e);let t=navigator.userAgent??``;return/(Mac|iPhone|iPad|iPod)/i.test(t)})();let e=Rt?.value.getBoundingClientRect();if(Lt.value=e.height/e.width,It.value=1e3,Ft.value=Lt.value*1e3,zt.value=e.width,Bt.value=e.height,new ResizeObserver(e=>{e.forEach(e=>{zt.value=e.contentRect.width,Bt.value=e.contentRect.height,Lt.value=e.contentRect.height/e.contentRect.width,Ft.value=Lt.value*1e3})}).observe(Rt.value),Kt.value=e=>Sn(e),window.addEventListener(`keydown`,Kt.value),K.value=un(),K.value.size){let e=K.value.size();qt.value.undo=e.undo,qt.value.redo=e.redo}qn=be({isMacLike:Gt,isSummaryOpen:A,isWriting:N,isDeleteMode:T,isMoveMode:D,isResizeMode:O,isSelectMode:k,isDrawMode:E,isTextMode:j,activeShape:y,showCaret:B,lastSelectedShape:P,shapes:L,history:K,setShapeTo:Wn,undoLastShape:yn,redoLastShape:bn})}),a(()=>{$(),Jt.value&&cancelAnimationFrame(Jt.value),Kt.value&&window.removeEventListener(`keydown`,Kt.value),qn&&qn(),window.removeEventListener(`keydown`,Sn)}),re(L,e=>{e.length===0&&(P.value=void 0)}),re(j,e=>{B.value=e}),(i,a)=>(o(),m(`div`,Se,[h(`div`,Ce,[l(ve,{config:{maxHeight:1e3,useCursorPointer:J.value,head:{backgroundColor:q.value.style.backgroundColor,color:q.value.style.color,iconColor:q.value.style.color,iconSize:20,icon:A.value?`close`:`annotator`,padding:`6px`},body:{backgroundColor:q.value.style.backgroundColor,color:q.value.style.color}},onToggle:Gn},{title:p(({color:e})=>[h(`div`,{style:s({color:e})},c(q.value.translations.title),5)]),content:p(({backgroundColor:u})=>[h(`div`,{class:`tool-selection`,style:s({backgroundColor:u})},[h(`button`,{disabled:L.value.length===0,style:s({background:D.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:D.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:D.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:e({"button-tool":!0,"button-tool--selected":D.value,tooltip:!0}),onClick:a[0]||=e=>{gn(),D.value=!D.value,y.value=void 0,T.value=!1,E.value=!1,O.value=!1,k.value=!1,j.value=!1,N.value=!1,B.value=!1},onMouseenter:a[1]||=e=>q.value.style.showTooltips&&Q(`move`,e,`top`),onMouseleave:$,onFocus:a[2]||=e=>q.value.style.showTooltips&&Q(`move`,e,`top`),onBlur:$},[l(_,{name:`move`,stroke:D.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`move`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipMove)+` `,1),a[91]||=h(`kbd`,null,`M`,-1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,we),h(`button`,{disabled:L.value.length===0||y.value===`line`,style:s({background:O.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:O.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:O.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:e({"button-tool":!0,"button-tool--selected":O.value,tooltip:!0}),onClick:a[3]||=e=>{gn(),O.value=!O.value,D.value=!1,T.value=!1,E.value=!1,k.value=!1,j.value=!1,N.value=!1,y.value=void 0,B.value=!1},onMouseenter:a[4]||=e=>q.value.style.showTooltips&&Q(`resize`,e,`top`),onMouseleave:$,onFocus:a[5]||=e=>q.value.style.showTooltips&&Q(`resize`,e,`top`),onBlur:$},[l(_,{name:`resize`,stroke:O.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`resize`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipResize)+` `,1),a[92]||=h(`kbd`,null,`R`,-1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,Te),h(`button`,{disabled:L.value.length===0,style:s({background:T.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:T.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:T.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:e({"button-tool":!0,"button-tool--selected":T.value,tooltip:!0}),onClick:a[6]||=e=>{gn(),T.value=!T.value,D.value=!1,O.value=!1,k.value=!1,j.value=!1,N.value=!1,y.value=void 0,B.value=!1},onMouseenter:a[7]||=e=>q.value.style.showTooltips&&Q(`delete`,e,`top`),onMouseleave:$,onFocus:a[8]||=e=>q.value.style.showTooltips&&Q(`delete`,e,`top`),onBlur:$},[l(_,{name:`trash`,stroke:T.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`delete`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipDelete)+` `,1),a[93]||=h(`kbd`,null,`D`,-1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,Ee),h(`button`,{disabled:!Xt.value,style:s({background:k.value?q.value.style.buttons.controls.selected.backgroundColor:q.value.style.buttons.controls.backgroundColor,border:k.value?q.value.style.buttons.controls.selected.border:q.value.style.buttons.controls.border,color:k.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:e({"button-tool":!0,"button-tool--selected":k.value,tooltip:!0}),onClick:a[9]||=e=>{gn(),Wn(`group`),k.value=!k.value,T.value=!1,D.value=!1,O.value=!1,j.value=!1,N.value=!1,y.value=`group`,B.value=!1},onMouseenter:a[10]||=e=>q.value.style.showTooltips&&Q(`selectAndGroup`,e,`top`),onMouseleave:$,onFocus:a[11]||=e=>q.value.style.showTooltips&&Q(`selectAndGroup`,e,`top`),onBlur:$},[l(_,{name:`selectAndGroup`,stroke:k.value?q.value.style.buttons.controls.selected.color:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`selectAndGroup`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipGroup)+` `,1),a[94]||=h(`kbd`,null,`G`,-1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,De),h(`button`,{disabled:L.value.length===0,style:s({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:e({"button-tool":!0,tooltip:!0}),onClick:a[12]||=e=>{O.value=!1,D.value=!0,T.value=!1,E.value=!1,k.value=!1,j.value=!1,N.value=!1,B.value=!1,pn(`front`)},onMouseenter:a[13]||=e=>q.value.style.showTooltips&&Q(`bringToFront`,e,`top`),onMouseleave:$,onFocus:a[14]||=e=>q.value.style.showTooltips&&Q(`bringToFront`,e,`top`),onBlur:$},[l(_,{name:`bringToFront`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`bringToFront`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipBringToFront),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],44,Oe),h(`button`,{disabled:L.value.length===0,style:s({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:e({"button-tool":!0,tooltip:!0}),onClick:a[15]||=e=>{O.value=!1,D.value=!0,T.value=!1,E.value=!1,k.value=!1,j.value=!1,N.value=!1,B.value=!1,pn(`back`)},onMouseenter:a[16]||=e=>q.value.style.showTooltips&&Q(`bringToBack`,e,`top`),onMouseleave:$,onFocus:a[17]||=e=>q.value.style.showTooltips&&Q(`bringToBack`,e,`top`),onBlur:$},[l(_,{name:`bringToBack`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`bringToBack`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipBringToBack),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],44,ke),h(`button`,{disabled:L.value.length===0||y.value===`line`,style:s({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:e({"button-tool":!0,tooltip:!0}),onClick:a[18]||=e=>{gn(),O.value=!1,D.value=!0,T.value=!1,E.value=!1,k.value=!1,j.value=!1,N.value=!1,B.value=!1,mn()},onMouseenter:a[19]||=e=>q.value.style.showTooltips&&Q(`duplicate`,e,`top`),onMouseleave:$,onFocus:a[20]||=e=>q.value.style.showTooltips&&Q(`duplicate`,e,`top`),onBlur:$},[l(_,{name:`copy`,stroke:q.value.style.buttons.controls.color,size:18},null,8,[`stroke`]),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`duplicate`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipDuplicate),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],44,Ae),h(`button`,{disabled:qt.value.undo===0,style:s({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:e({"button-tool":!0,"button-tool--one-shot":!0,tooltip:!0}),onClick:a[21]||=e=>{O.value=!1,D.value=!1,T.value=!1,E.value=!1,k.value=!1,j.value=!1,N.value=!1,y.value=void 0,B.value=!1,yn()},onMouseenter:a[22]||=e=>q.value.style.showTooltips&&Q(`undoLast`,e,`top`),onMouseleave:$,onFocus:a[23]||=e=>q.value.style.showTooltips&&Q(`undoLast`,e,`top`),onBlur:$},[l(_,{name:`refresh`,stroke:q.value.style.buttons.controls.color,size:20},null,8,[`stroke`]),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`undoLast`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipUndo)+` `,1),h(`kbd`,null,c(Gt.value?`⌘`:`Ctrl`),1),a[95]||=h(`kbd`,null,`Z`,-1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],44,je),h(`button`,{disabled:qt.value.redo===0,style:s({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:e({"button-tool":!0,"button-tool--one-shot":!0,tooltip:!0}),onClick:a[24]||=e=>{O.value=!1,D.value=!1,T.value=!1,E.value=!1,k.value=!1,j.value=!1,N.value=!1,y.value=void 0,B.value=!1,bn()},onMouseenter:a[25]||=e=>q.value.style.showTooltips&&Q(`redoLast`,e,`top`),onMouseleave:$,onFocus:a[26]||=e=>q.value.style.showTooltips&&Q(`redoLast`,e,`top`),onBlur:$},[l(_,{name:`refresh`,stroke:q.value.style.buttons.controls.color,size:20,style:{transform:`rotateX(0deg) rotateY(180deg)`}},null,8,[`stroke`]),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`redoLast`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipRedo)+` `,1),h(`kbd`,null,c(Gt.value?`⌘`:`Ctrl`),1),a[96]||=h(`kbd`,null,`Y`,-1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],44,Me),q.value.style.showPrint?(o(),m(`button`,{key:0,style:s({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:e({"button-tool":!0,tooltip:!0}),onClick:Fn,onMouseenter:a[27]||=e=>q.value.style.showTooltips&&Q(`printPdf`,e,`top`),onMouseleave:$,onFocus:a[28]||=e=>q.value.style.showTooltips&&Q(`printPdf`,e,`top`),onBlur:$},[l(_,{name:`printer`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`printPdf`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipPdf),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],36)):t(``,!0),q.value.style.showImage?(o(),m(`button`,{key:1,style:s({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:e({"button-tool":!0,tooltip:!0}),onClick:a[29]||=(...e)=>r(Tt)&&r(Tt)(...e),onMouseenter:a[30]||=e=>q.value.style.showTooltips&&Q(`printImage`,e,`top`),onMouseleave:$,onFocus:a[31]||=e=>q.value.style.showTooltips&&Q(`printImage`,e,`top`),onBlur:$},[l(_,{name:`image`,stroke:q.value.style.buttons.controls.color,size:20},null,8,[`stroke`]),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`printImage`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipImage),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],36)):t(``,!0),q.value.style.showSave&&i.$attrs.onSaveAnnotations?(o(),m(`button`,{key:2,style:s({background:q.value.style.buttons.controls.backgroundColor,border:q.value.style.buttons.controls.border,color:q.value.style.buttons.controls.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),class:e({"button-tool":!0,tooltip:!0}),onClick:Kn,onMouseenter:a[32]||=e=>q.value.style.showTooltips&&Q(`saveAction`,e,`top`),onMouseleave:$,onFocus:a[33]||=e=>q.value.style.showTooltips&&Q(`saveAction`,e,`top`),onBlur:$},[l(_,{name:`save`,stroke:q.value.style.buttons.controls.color},null,8,[`stroke`]),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`saveAction`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipSave),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],36)):t(``,!0)],4),h(`div`,Ne,[h(`button`,{class:e({"button-tool":!0,"button-tool--selected":y.value===`circle`,tooltip:!0}),style:s({background:y.value===`circle`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:y.value===`circle`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:y.value===`circle`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:a[34]||=e=>{Wn(`circle`),k.value=!1},onMouseenter:a[35]||=e=>q.value.style.showTooltips&&Q(`setCircle`,e,`top`),onMouseleave:$,onFocus:a[36]||=e=>q.value.style.showTooltips&&Q(`setCircle`,e,`top`),onBlur:$},[(o(),m(`svg`,Pe,[h(`circle`,{cx:6,cy:6,r:`4`,fill:R.value.circle.filled?(y.value,z.value+Zt.value):`none`,stroke:`currentColor`},null,8,Fe)])),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`setCircle`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipShapeCircle)+` `,1),a[97]||=h(`kbd`,null,`C`,-1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38),y.value===`circle`?(o(),m(`div`,Ie,[h(`label`,Le,[n(c(q.value.translations.filled)+` `,1),se(h(`input`,{type:`checkbox`,"onUpdate:modelValue":a[37]||=e=>R.value.circle.filled=e,onChange:Rn,checked:R.value.circle.filled,style:s({all:`revert`,appearance:`auto`,"-webkit-appearance":`auto`,accentColor:q.value.style.color+` !important`})},null,44,Re),[[ae,R.value.circle.filled]])])])):t(``,!0),h(`button`,{class:e({"button-tool":!0,"button-tool--selected":y.value===`rect`,tooltip:!0}),style:s({background:y.value===`rect`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:y.value===`rect`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:y.value===`rect`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:a[38]||=e=>{Wn(`rect`),k.value=!1},onMouseenter:a[39]||=e=>q.value.style.showTooltips&&Q(`setRect`,e,`top`),onMouseleave:$,onFocus:a[40]||=e=>q.value.style.showTooltips&&Q(`setRect`,e,`top`),onBlur:$},[(o(),m(`svg`,ze,[h(`rect`,{x:`3`,y:`3`,style:{rx:`0 !important`,ry:`0 !important`},height:`6`,width:`6`,fill:R.value.rect.filled?(y.value,z.value+Zt.value):`none`,stroke:`currentColor`},null,8,Be)])),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`setRect`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipShapeRect)+` `,1),a[98]||=h(`kbd`,null,`S`,-1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38),y.value===`rect`?(o(),m(`div`,Ve,[h(`label`,He,[n(c(q.value.translations.filled)+` `,1),se(h(`input`,{type:`checkbox`,"onUpdate:modelValue":a[41]||=e=>R.value.rect.filled=e,onChange:Ln,checked:R.value.rect.filled,style:s({all:`revert`,appearance:`auto`,"-webkit-appearance":`auto`,accentColor:q.value.style.color+` !important`})},null,44,Ue),[[ae,R.value.rect.filled]])])])):t(``,!0),h(`button`,{class:e({"button-tool":!0,"button-tool--selected":y.value===`arrow`,tooltip:!0}),style:s({background:y.value===`arrow`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:y.value===`arrow`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:y.value===`arrow`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:a[42]||=e=>{Wn(`arrow`),k.value=!1},onMouseenter:a[43]||=e=>q.value.style.showTooltips&&Q(`setArrow`,e,`top`),onMouseleave:$,onFocus:a[44]||=e=>q.value.style.showTooltips&&Q(`setArrow`,e,`top`),onBlur:$},[(o(),m(`svg`,We,[h(`path`,{stroke:R.value.arrow.filled?y.value===`arrow`?`white`:`grey`:`none`,"stroke-width":`2`,d:`M5,19 19,5 14,5 19,10.5 19,5`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},null,8,Ge)])),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`setArrow`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipShapeArrow)+` `,1),a[99]||=h(`kbd`,null,`A`,-1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38),h(`button`,{class:e({"button-tool":!0,"button-tool--selected":y.value===`line`,tooltip:!0}),style:s({background:y.value===`line`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:y.value===`line`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:y.value===`line`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:a[45]||=e=>{Wn(`line`),k.value=!1},onMouseenter:a[46]||=e=>q.value.style.showTooltips&&Q(`setFreehand`,e,`top`),onMouseleave:$,onFocus:a[47]||=e=>q.value.style.showTooltips&&Q(`setFreehand`,e,`top`),onBlur:$},[a[101]||=h(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[h(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),h(`path`,{d:`M3 15c2 3 4 4 7 4s7 -3 7 -7s-3 -7 -6 -7s-5 1.5 -5 4s2 5 6 5s8.408 -2.453 10 -5`})],-1),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`setFreehand`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipShapeFreehand)+` `,1),a[100]||=h(`kbd`,null,`L`,-1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38),[`arrow`,`circle`,`rect`,`line`].includes(y.value)?(o(),m(`div`,Ke,[h(`div`,qe,[h(`label`,Je,[n(c(q.value.translations.thickness)+` `,1),se(h(`input`,{type:`number`,"onUpdate:modelValue":a[48]||=e=>Et.value=e,onInput:Vn,min:1,style:{padding:`0 4px`,width:`40px`,border:`1px solid #dadada`,"border-radius":`3px`}},null,544),[[oe,Et.value]])])])])):t(``,!0),[`arrow`,`circle`,`rect`].includes(y.value)?(o(),m(`div`,Ye,[h(`div`,Xe,[h(`label`,Ze,[n(c(q.value.translations.dashedLines)+` `,1),(o(),m(`svg`,Qe,[...a[102]||=[h(`line`,{x1:`0`,x2:`24`,y1:`12`,y2:`12`,"stroke-width":`2`,stroke:`black`,"stroke-dasharray":`3`},null,-1)]])),se(h(`input`,{name:`dashStyle`,type:`checkbox`,"onUpdate:modelValue":a[49]||=e=>Dt.value=e,onChange:zn,checked:Dt.value,style:s({all:`revert`,appearance:`auto`,"-webkit-appearance":`auto`,accentColor:q.value.style.color+` !important`})},null,44,$e),[[ae,Dt.value]])])])])):t(``,!0),h(`button`,{class:e({"button-tool":!0,"button-tool--selected":j.value,tooltip:!0}),style:s({background:j.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:j.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:j.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:a[50]||=e=>{gn(),j.value=!j.value,T.value=!1,D.value=!1,O.value=!1,k.value=!1,E.value=!1,y.value=void 0},onMouseenter:a[51]||=e=>q.value.style.showTooltips&&Q(`setText`,e,`top`),onMouseleave:$,onFocus:a[52]||=e=>q.value.style.showTooltips&&Q(`setText`,e,`top`),onBlur:$},[l(_,{name:`text`,stroke:j.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color},null,8,[`stroke`]),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`setText`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipShapeText)+` `,1),a[103]||=h(`kbd`,null,`T`,-1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38),j.value?(o(),m(`div`,et,[h(`div`,tt,[h(`label`,nt,[n(c(q.value.translations.fontSize)+` `,1),se(h(`input`,{type:`number`,"onUpdate:modelValue":a[53]||=e=>Vt.value=e,onInput:Hn,style:{padding:`0 4px`,width:`40px`,border:`1px solid #dadada`,"border-radius":`3px`}},null,544),[[oe,Vt.value]])])])])):t(``,!0),j.value?(o(),m(`div`,rt,[h(`button`,{class:e({"button-tool":!0,"button-tool--selected":V.value===`start`,tooltip:!0}),style:s({background:V.value===`start`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:V.value===`start`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:V.value===`start`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:a[54]||=e=>{T.value=!1,D.value=!1,O.value=!1,E.value=!1,k.value=!1,y.value=void 0,V.value=`start`,vn(`start`)},onMouseenter:a[55]||=e=>q.value.style.showTooltips&&Q(`setAlignStart`,e,`top`),onMouseleave:$,onFocus:a[56]||=e=>q.value.style.showTooltips&&Q(`setAlignStart`,e,`top`),onBlur:$},[a[104]||=h(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[h(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),h(`path`,{d:`M4 6l16 0`}),h(`path`,{d:`M4 12l10 0`}),h(`path`,{d:`M4 18l14 0`})],-1),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`setAlignStart`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipShapeTextLeft),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38)])):t(``,!0),j.value?(o(),m(`div`,it,[h(`button`,{class:e({"button-tool":!0,"button-tool--selected":V.value===`middle`,tooltip:!0}),style:s({background:V.value===`middle`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:V.value===`middle`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:V.value===`middle`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),disabled:w.value,onClick:a[57]||=e=>{T.value=!1,D.value=!1,O.value=!1,E.value=!1,k.value=!1,y.value=void 0,V.value=`middle`,vn(`middle`)},onMouseenter:a[58]||=e=>q.value.style.showTooltips&&Q(`setAlignMiddle`,e,`top`),onMouseleave:$,onFocus:a[59]||=e=>q.value.style.showTooltips&&Q(`setAlignMiddle`,e,`top`),onBlur:$},[a[105]||=h(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[h(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),h(`path`,{d:`M4 6l16 0`}),h(`path`,{d:`M8 12l8 0`}),h(`path`,{d:`M6 18l12 0`})],-1),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`setAlignMiddle`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipShapeTextCenter),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,at)])):t(``,!0),j.value?(o(),m(`div`,ot,[h(`button`,{class:e({"button-tool":!0,"button-tool--selected":V.value===`end`,tooltip:!0}),style:s({background:V.value===`end`?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:V.value===`end`?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:V.value===`end`?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),disabled:w.value,onClick:a[60]||=e=>{T.value=!1,D.value=!1,O.value=!1,E.value=!1,k.value=!1,y.value=void 0,V.value=`end`,vn(`end`)},onMouseenter:a[61]||=e=>q.value.style.showTooltips&&Q(`setAlignEnd`,e,`top`),onMouseleave:$,onFocus:a[62]||=e=>q.value.style.showTooltips&&Q(`setAlignEnd`,e,`top`),onBlur:$},[a[106]||=h(`svg`,{width:`80%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[h(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),h(`path`,{d:`M4 6l16 0`}),h(`path`,{d:`M10 12l10 0`}),h(`path`,{d:`M6 18l14 0`})],-1),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`setAlignEnd`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipShapeTextRight),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],46,st)])):t(``,!0),j.value?(o(),m(`div`,ct,[h(`button`,{class:e({"button-tool":!0,"button-tool--selected":w.value,tooltip:!0}),style:s({background:w.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:w.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:w.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:a[63]||=e=>{T.value=!1,D.value=!1,O.value=!1,E.value=!1,k.value=!1,y.value=void 0,w.value=!w.value,V.value=`start`,vn(`start`),Hn()},onMouseenter:a[64]||=e=>q.value.style.showTooltips&&Q(`setBulletMode`,e,`top`),onMouseleave:$,onFocus:a[65]||=e=>q.value.style.showTooltips&&Q(`setBulletMode`,e,`top`),onBlur:$},[a[107]||=h(`svg`,{width:`100%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[h(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),h(`path`,{d:`M9 6l11 0`}),h(`path`,{d:`M9 12l11 0`}),h(`path`,{d:`M9 18l11 0`}),h(`path`,{d:`M5 6l0 .01`}),h(`path`,{d:`M5 12l0 .01`}),h(`path`,{d:`M5 18l0 .01`})],-1),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`setBulletMode`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipShapeTextBullet),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38)])):t(``,!0),j.value?(o(),m(`div`,lt,[h(`button`,{class:e({"button-tool":!0,"button-tool--selected":C.value,tooltip:!0}),style:s({background:C.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:C.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:C.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:a[66]||=e=>{T.value=!1,D.value=!1,O.value=!1,E.value=!1,k.value=!1,y.value=void 0,C.value=!C.value,Hn()},onMouseenter:a[67]||=e=>q.value.style.showTooltips&&Q(`setBold`,e,`top`),onMouseleave:$,onFocus:a[68]||=e=>q.value.style.showTooltips&&Q(`setBold`,e,`top`),onBlur:$},[a[108]||=h(`svg`,{width:`100%`,viewBox:`0 0 24 24`,"stroke-width":`3`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[h(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),h(`path`,{d:`M7 5h6a3.5 3.5 0 0 1 0 7h-6z`}),h(`path`,{d:`M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7`})],-1),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`setBold`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipShapeTextBold),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38)])):t(``,!0),j.value?(o(),m(`div`,ut,[h(`button`,{class:e({"button-tool":!0,"button-tool--selected":At.value,tooltip:!0}),style:s({background:At.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:At.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:At.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:a[69]||=e=>{T.value=!1,D.value=!1,O.value=!1,E.value=!1,k.value=!1,y.value=void 0,At.value=!At.value,Hn()},onMouseenter:a[70]||=e=>q.value.style.showTooltips&&Q(`setItalic`,e,`top`),onMouseleave:$,onFocus:a[71]||=e=>q.value.style.showTooltips&&Q(`setItalic`,e,`top`),onBlur:$},[a[109]||=h(`svg`,{width:`100%`,height:`44`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[h(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),h(`path`,{d:`M11 5l6 0`}),h(`path`,{d:`M7 19l6 0`}),h(`path`,{d:`M14 5l-4 14`})],-1),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`setItalic`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipShapeTextItalic),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38)])):t(``,!0),j.value?(o(),m(`div`,dt,[h(`button`,{class:e({"button-tool":!0,"button-tool--selected":M.value,tooltip:!0}),style:s({background:M.value?q.value.style.buttons.shapes.selected.backgroundColor:q.value.style.buttons.shapes.backgroundColor,border:M.value?q.value.style.buttons.shapes.selected.border:q.value.style.buttons.shapes.border,color:M.value?q.value.style.buttons.shapes.selected.color:q.value.style.buttons.shapes.color,borderRadius:`${q.value.style.buttons.borderRadius}px`,cursor:J.value?`pointer`:`default`}),onClick:a[72]||=e=>{T.value=!1,D.value=!1,O.value=!1,E.value=!1,k.value=!1,y.value=void 0,M.value=!M.value,Hn()},onMouseenter:a[73]||=e=>q.value.style.showTooltips&&Q(`setUnderline`,e,`top`),onMouseleave:$,onFocus:a[74]||=e=>q.value.style.showTooltips&&Q(`setUnderline`,e,`top`),onBlur:$},[a[110]||=h(`svg`,{width:`100%`,viewBox:`0 0 24 24`,"stroke-width":`2`,stroke:`currentColor`,fill:`none`,"stroke-linecap":`round`,"stroke-linejoin":`round`},[h(`path`,{stroke:`none`,d:`M0 0h24v24H0z`,fill:`none`}),h(`path`,{d:`M7 5v5a5 5 0 0 0 10 0v-5`}),h(`path`,{d:`M5 19h14`})],-1),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`setUnderline`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipShapeTextUnderline),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)],38)])):t(``,!0),h(`div`,ft,[h(`button`,{class:e({"button-tool":!0,tooltip:!0}),style:{borderRadius:`6px`},onMouseenter:a[76]||=e=>q.value.style.showTooltips&&Q(`setColor`,e,`top`),onMouseleave:$,onFocus:a[77]||=e=>q.value.style.showTooltips&&Q(`setColor`,e,`top`),onBlur:$},[l(ye,{value:z.value,"onUpdate:value":a[75]||=e=>z.value=e,backgroundColor:q.value.style.backgroundColor,buttonBorderColor:q.value.style.color,isCursorPointer:J.value,teleported:``},null,8,[`value`,`backgroundColor`,`buttonBorderColor`,`isCursorPointer`])],32),q.value.style.showTooltips?(o(),d(v,{key:0,show:U.value&&W.value===`setColor`,x:G.value.x,y:G.value.y-6,placement:`top`,styleObject:Y.value},{default:p(()=>[n(c(q.value.translations.tooltipShapeColor),1)]),_:1},8,[`show`,`x`,`y`,`styleObject`])):t(``,!0)]),h(`div`,pt,[h(`label`,mt,[n(c(q.value.translations.colorAlpha)+`: `+c(Ht.value>98?100:Ht.value)+` % `,1),se(h(`input`,{name:`colorTransparency`,type:`range`,"onUpdate:modelValue":a[78]||=e=>Ht.value=e,onInput:Bn,min:0,max:100,style:s({width:`100%`,accentColor:q.value.style.color+` !important`})},null,36),[[oe,Ht.value]])])])])]),_:1},8,[`config`])]),h(`div`,{class:`annotator annotator__wrapper`,ref_key:`drawSvgContainer`,ref:Nn,style:{position:`relative`},id:Ct.value,"data-annotator-content":``},[h(`div`,{class:`annotator__content-layer`,style:s(`${A.value?`pointer-events: none;`:``}`)},[u(i.$slots,`default`,{},void 0,!0)],4),A.value||q.value.alwaysVisible?(o(),m(`svg`,{id:`annotatorSvg`,key:Pt.value,ref_key:`mainSvg`,ref:X,class:e({annotator__overlay:!0,draw:!0,"draw--free":y.value===`line`}),viewBox:`0 0 ${It.value} ${Ft.value}`,width:zt.value,height:Bt.value,onPointerdown:a[83]||=e=>Dn(e),onPointerup:a[84]||=e=>In(e),onTouchend:a[85]||=e=>In(e),onTouchstart:a[86]||=e=>{Un(e),_n(e)},onPointermove:a[87]||=e=>{Un(e),jn(e)},onPointerout:a[88]||=e=>Tn(e),onPointerover:a[89]||=e=>hn(e),onClick:a[90]||=e=>_n(e),style:s({position:`absolute`,top:0,left:0,cursor:Qt.value,fontFamily:`Helvetica`,zIndex:1e8,pointerEvents:A.value?`all`:`none`})},[h(`rect`,{class:`annotator__glass`,x:`0`,y:`0`,width:It.value,height:Ft.value,fill:`transparent`,"pointer-events":A.value?`all`:`none`,style:{cursor:`inherit`},onPointerdown:a[79]||=ie(e=>Dn(e),[`stop`,`prevent`]),onPointermove:a[80]||=ie(e=>{Un(e),jn(e)},[`stop`,`prevent`]),onPointerup:ie(In,[`stop`,`prevent`]),onClick:a[81]||=ie(()=>{},[`stop`,`prevent`])},null,40,_t),(o(!0),m(ne,null,ee(an.value,e=>(o(),m(`g`,{key:e.id,innerHTML:e.html,onClick:a[82]||=e=>{Mn(e),D.value=!1}},null,8,vt))),128))],46,gt)):t(``,!0),Mt.value||r(wt)?(o(),m(`svg`,{key:1,style:{position:`absolute`,top:`0`,left:`0`},height:Bt.value,viewBox:`0 0 ${It.value} ${Ft.value}`,width:zt.value,"data-dom-to-png-ignore":``},[h(`circle`,{class:`animated-circle-print`,cx:It.value/2,cy:Ft.value/2,r:`50`,stroke:`#6376DD`,"stroke-width":`10`,fill:`none`},null,8,bt)],8,yt)):t(``,!0)],8,ht)]))}},[[`__scopeId`,`data-v-e358ad32`]]);export{St as default};