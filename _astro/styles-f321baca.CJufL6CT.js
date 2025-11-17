import{i as q,L as g,e as v,T as _,f as V,M as W,D as E,A as C,b as A,d as j,z as I,c as F,y as z,n as G,g as R,k as U,l as Y}from"./mermaid.esm.min.CaEXBy3e.js";import{Y as X}from"./graph-80608c14.Dv-JbZnj.js";import{b as Z}from"./index-0cdc3891.D5Rt4j8F.js";import{e as H}from"./channel-d3ce1aa3.CWuPy8vm.js";function J(e){return typeof e=="string"?new z([document.querySelectorAll(e)],[document.documentElement]):new z([R(e)],G)}function de(e,o){return!!e.children(o).length}function pe(e){return B(e.v)+":"+B(e.w)+":"+B(e.name)}var K=/:/g;function B(e){return e?String(e).replace(K,"\\:"):""}function Q(e,o){o&&e.attr("style",o)}function be(e,o,c){o&&e.attr("class",o).attr("class",c+" "+e.attr("class"))}function we(e,o){var c=o.graph();if(U(c)){var l=c.transition;if(Y(l))return l(e)}return e}function ee(e,o){var c=e.append("foreignObject").attr("width","100000"),l=c.append("xhtml:div");l.attr("xmlns","http://www.w3.org/1999/xhtml");var i=o.label;switch(typeof i){case"function":l.insert(i);break;case"object":l.insert(function(){return i});break;default:l.html(i)}Q(l,o.labelStyle),l.style("display","inline-block"),l.style("white-space","nowrap");var p=l.node().getBoundingClientRect();return c.attr("width",p.width).attr("height",p.height),c}const M={},te=function(e){const o=Object.keys(e);for(const c of o)M[c]=e[c]},O=async function(e,o,c,l,i,p){const f=l.select(`[id="${c}"]`),n=Object.keys(e);for(const b of n){const r=e[b];let y="default";r.classes.length>0&&(y=r.classes.join(" ")),y=y+" flowchart-label";const u=E(r.styles);let t=r.text!==void 0?r.text:r.id,s;if(g.info("vertex",r,r.labelType),r.labelType==="markdown")g.info("vertex",r,r.labelType);else if(F(v().flowchart.htmlLabels))s=ee(f,{label:t}).node(),s.parentNode.removeChild(s);else{const k=i.createElementNS("http://www.w3.org/2000/svg","text");k.setAttribute("style",u.labelStyle.replace("color:","fill:"));const T=t.split(I.lineBreakRegex);for(const $ of T){const d=i.createElementNS("http://www.w3.org/2000/svg","tspan");d.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),d.setAttribute("dy","1em"),d.setAttribute("x","1"),d.textContent=$,k.appendChild(d)}s=k}let w=0,a="";switch(r.type){case"round":w=5,a="rect";break;case"square":a="rect";break;case"diamond":a="question";break;case"hexagon":a="hexagon";break;case"odd":a="rect_left_inv_arrow";break;case"lean_right":a="lean_right";break;case"lean_left":a="lean_left";break;case"trapezoid":a="trapezoid";break;case"inv_trapezoid":a="inv_trapezoid";break;case"odd_right":a="rect_left_inv_arrow";break;case"circle":a="circle";break;case"ellipse":a="ellipse";break;case"stadium":a="stadium";break;case"subroutine":a="subroutine";break;case"cylinder":a="cylinder";break;case"group":a="rect";break;case"doublecircle":a="doublecircle";break;default:a="rect"}const S=await j(t,v());o.setNode(r.id,{labelStyle:u.labelStyle,shape:a,labelText:S,labelType:r.labelType,rx:w,ry:w,class:y,style:u.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:p.db.getTooltip(r.id)||"",domId:p.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:r.type==="group"?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:v().flowchart.padding}),g.info("setNode",{labelStyle:u.labelStyle,labelType:r.labelType,shape:a,labelText:S,rx:w,ry:w,class:y,style:u.style,id:r.id,domId:p.db.lookUpDomId(r.id),width:r.type==="group"?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:v().flowchart.padding})}},P=async function(e,o,c){g.info("abc78 edges = ",e);let l=0,i={},p,f;if(e.defaultStyle!==void 0){const n=E(e.defaultStyle);p=n.style,f=n.labelStyle}for(const n of e){l++;const b="L-"+n.start+"-"+n.end;i[b]===void 0?(i[b]=0,g.info("abc78 new entry",b,i[b])):(i[b]++,g.info("abc78 new entry",b,i[b]));let r=b+"-"+i[b];g.info("abc78 new link id to be used is",b,r,i[b]);const y="LS-"+n.start,u="LE-"+n.end,t={style:"",labelStyle:""};switch(t.minlen=n.length||1,n.type==="arrow_open"?t.arrowhead="none":t.arrowhead="normal",t.arrowTypeStart="arrow_open",t.arrowTypeEnd="arrow_open",n.type){case"double_arrow_cross":t.arrowTypeStart="arrow_cross";case"arrow_cross":t.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":t.arrowTypeStart="arrow_point";case"arrow_point":t.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":t.arrowTypeStart="arrow_circle";case"arrow_circle":t.arrowTypeEnd="arrow_circle";break}let s="",w="";switch(n.stroke){case"normal":s="fill:none;",p!==void 0&&(s=p),f!==void 0&&(w=f),t.thickness="normal",t.pattern="solid";break;case"dotted":t.thickness="normal",t.pattern="dotted",t.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":t.thickness="thick",t.pattern="solid",t.style="stroke-width: 3.5px;fill:none;";break;case"invisible":t.thickness="invisible",t.pattern="solid",t.style="stroke-width: 0;fill:none;";break}if(n.style!==void 0){const a=E(n.style);s=a.style,w=a.labelStyle}t.style=t.style+=s,t.labelStyle=t.labelStyle+=w,n.interpolate!==void 0?t.curve=C(n.interpolate,A):e.defaultInterpolate!==void 0?t.curve=C(e.defaultInterpolate,A):t.curve=C(M.curve,A),n.text===void 0?n.style!==void 0&&(t.arrowheadStyle="fill: #333"):(t.arrowheadStyle="fill: #333",t.labelpos="c"),t.labelType=n.labelType,t.label=await j(n.text.replace(I.lineBreakRegex,`
`),v()),n.style===void 0&&(t.style=t.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),t.labelStyle=t.labelStyle.replace("color:","fill:"),t.id=r,t.classes="flowchart-link "+y+" "+u,o.setEdge(n.start,n.end,t,l)}},re=function(e,o){return o.db.getClasses()},oe=async function(e,o,c,l){g.info("Drawing flowchart");let i=l.db.getDirection();i===void 0&&(i="TD");const{securityLevel:p,flowchart:f}=v(),n=f.nodeSpacing||50,b=f.rankSpacing||50;let r;p==="sandbox"&&(r=_("#i"+o));const y=p==="sandbox"?_(r.nodes()[0].contentDocument.body):_("body"),u=p==="sandbox"?r.nodes()[0].contentDocument:document,t=new X({multigraph:!0,compound:!0}).setGraph({rankdir:i,nodesep:n,ranksep:b,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}});let s;const w=l.db.getSubGraphs();g.info("Subgraphs - ",w);for(let d=w.length-1;d>=0;d--)s=w[d],g.info("Subgraph - ",s),l.db.addVertex(s.id,{text:s.title,type:s.labelType},"group",void 0,s.classes,s.dir);const a=l.db.getVertices(),S=l.db.getEdges();g.info("Edges",S);let k=0;for(k=w.length-1;k>=0;k--){s=w[k],J("cluster").append("text");for(let d=0;d<s.nodes.length;d++)g.info("Setting up subgraphs",s.nodes[d],s.id),t.setParent(s.nodes[d],s.id)}await O(a,t,o,y,u,l),await P(S,t);const T=y.select(`[id="${o}"]`),$=y.select("#"+o+" g");if(await Z($,t,["point","circle","cross"],"flowchart",o),V.insertTitle(T,"flowchartTitleText",f.titleTopMargin,l.db.getDiagramTitle()),W(t,T,f.diagramPadding,f.useMaxWidth),l.db.indexNodes("subGraph"+k),!f.htmlLabels){const d=u.querySelectorAll('[id="'+o+'"] .edgeLabel .label');for(const x of d){const m=x.getBBox(),h=u.createElementNS("http://www.w3.org/2000/svg","rect");h.setAttribute("rx",0),h.setAttribute("ry",0),h.setAttribute("width",m.width),h.setAttribute("height",m.height),x.insertBefore(h,x.firstChild)}}Object.keys(a).forEach(function(d){const x=a[d];if(x.link){const m=_("#"+o+' [id="'+d+'"]');if(m){const h=u.createElementNS("http://www.w3.org/2000/svg","a");h.setAttributeNS("http://www.w3.org/2000/svg","class",x.classes.join(" ")),h.setAttributeNS("http://www.w3.org/2000/svg","href",x.link),h.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),p==="sandbox"?h.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):x.linkTarget&&h.setAttributeNS("http://www.w3.org/2000/svg","target",x.linkTarget);const L=m.insert(function(){return h},":first-child"),N=m.select(".label-container");N&&L.append(function(){return N.node()});const D=m.select(".label");D&&L.append(function(){return D.node()})}}})},fe={setConf:te,addVertices:O,addEdges:P,getClasses:re,draw:oe},le=(e,o)=>{const c=H,l=c(e,"r"),i=c(e,"g"),p=c(e,"b");return q(l,i,p,o)},ae=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${le(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,ue=ae;export{J as Z,be as b,Q as e,de as f,ue as h,pe as p,ee as t,we as u,fe as w};
