import{_ as m,j as p,a as v}from"./js-yaml-e25f861f.js";import{o as i,c as o,a as n,t as b,b as _,d as y,h as j,e as w,F as D,r as I,f as k,n as L,g as S,i as P,j as z,k as O}from"./index-cf55f617.js";const T={class:"landing-box"},C={class:"container landing-container"},F=n("h4",null,"Annotating with",-1),V={class:"flex justify-center"},N=n("label",{for:"assetsFieldHandle",class:"block cursor-pointer"},[n("div",null,[y(" Drag & drop, or "),n("span",{class:"underline"},"click here"),y(" to add an annotation file ")])],-1),R={key:0,class:"separator"},E=n("span",null,"or",-1),U=[E],B={key:1,class:"option-buttons"},A=["href"],H=n("button",{class:"pa2 ph3 br-pill-ns ba bw1 grow hit-instructions-btn"},"See Tutorial",-1),Y=[H],J=n("button",{class:"pa2 ph3 br-pill-ns ba bw1 grow hit-instructions-btn"},"View Example Data",-1),q=[J],G=["href"],K=n("button",{class:"pa2 ph3 br-pill-ns ba bw1 grow hit-instructions-btn"},"Customize this Template",-1),M=[K],Q=["href"],W=n("button",{class:"pa2 ph3 br-pill-ns ba bw1 grow hit-instructions-btn"},"View Paper",-1),X=[W],Z={data(){return{filelist:[],config:{}}},props:["consumed_config","set_data","set_config","customize_template_link"],watch:{consumed_config(){this.consume_config()}},methods:{consume_config(){this.consumed_config.hasOwnProperty("consumed_config")?this.config=m.cloneDeep(this.consumed_config.consumed_config):this.consumed_config.hasOwnProperty("config")?this.config=m.cloneDeep(this.consumed_config.config):this.config=m.cloneDeep(this.consumed_config),this.config.template_label&&$("title").text(this.config.template_label)},async handle_drag_drop(t){var s;let e=await j(t);if(this.config.template_name=="serverless"){let a=(s=e.find(l=>l.hasOwnProperty("_thresh_template")))==null?void 0:s._thresh_template;a=p.load(a),this.set_config(a),e=e.filter(l=>!("_thresh_template"in l))}this.set_data(e)},remove(t){this.filelist.splice(t,1)},dragover(t){t.preDefault(),t.currentTarget.classList.contains("bg-green-300")||(t.currentTarget.classList.remove("bg-gray-100"),t.currentTarget.classList.add("bg-green-300"))},dragleave(t){t.currentTarget.classList.add("bg-gray-100"),t.currentTarget.classList.remove("bg-green-300")},async drop(t){t.preDefault(),await handle_drag_drop(t),t.currentTarget.classList.add("bg-gray-100"),t.currentTarget.classList.remove("bg-green-300")},get_example_data(){let t;if(this.customize_template_link.includes("http"))this.config.default_data_link?t=this.config.default_data_link:t="data/demo/start.json";else{let e=this.config.template_name;e=e.replace("demo_","demo/"),t=`data/${e}.json`}w(t).then(e=>{this.set_data(e)})}},created(){this.consume_config()},computed:{template_link(){return`/?t=${this.customize_template_link}`}}},x=Object.assign(Z,{__name:"Landing",setup(t){return(e,s)=>(i(),o("main",T,[n("div",C,[F,n("h2",null,b(e.config.template_label),1),n("h3",null,b(e.config.template_description),1),n("div",V,[n("div",{class:"ba b--dashed bw2 file-box",onDragover:s[1]||(s[1]=(...a)=>e.dragover&&e.dragover(...a)),onDragleave:s[2]||(s[2]=(...a)=>e.dragleave&&e.dragleave(...a)),onDrop:s[3]||(s[3]=(...a)=>e.drop&&e.drop(...a))},[n("input",{type:"file",multiple:"",name:"fields[assetsFieldHandle][]",id:"assetsFieldHandle",class:"file-input-field",onChange:s[0]||(s[0]=(...a)=>e.handle_drag_drop&&e.handle_drag_drop(...a)),ref:"file",accept:".json"},null,544),N],32)]),e.config.template_name!="serverless"?(i(),o("div",R,U)):_("",!0),e.config.template_name!="serverless"?(i(),o("div",B,[e.config.tutorial_link?(i(),o("a",{key:0,href:e.config.tutorial_link},Y,8,A)):_("",!0),n("a",{onClick:s[4]||(s[4]=(...a)=>e.get_example_data&&e.get_example_data(...a))},q),t.customize_template_link?(i(),o("a",{key:1,href:e.template_link},M,8,G)):_("",!0),e.config.paper_link?(i(),o("a",{key:2,href:e.config.paper_link,target:"_blank"},X,8,Q)):_("",!0)])):_("",!0)])]))}});const ee={key:0},te={key:0,class:"adjudication-container mh4"},ae={key:1,class:"mh4"},se={key:1},ne={key:2},ie=n("div",{class:"spinner-container"},[n("div",{class:"spinner"})],-1),oe=[ie],le={data(){return{data:null,consumed_config:null,set_data:this.set_data,set_config:this.set_config,customize_template_link:null,is_fetching:!0,configInjection:null}},props:["template_path","serverless","injection"],methods:{set_data(t){this.data=t},set_config(t){this.consumed_config=t},highlight_container(t){if(this.consumed_config.highlight_first_interface&&t==1)return"adjudication-container-highlight"},async load_language(t){const s=`lang/${t.language||"en"}.yml`;let a=await P(s).then(l=>p.load(l));return t.interface_text=Object.assign({},a,t.interface_text),t},async load_config(t){let e=p.load(t);e=await this.load_language(e);var a=new URLSearchParams(window.location.search).get("PROLIFIC_PID");a&&(e.crowdsource="prolific"),this.set_config(e)},async load_data(t=null){const e=new URLSearchParams(window.location.search);var s=e.get("d"),a=e.get("gh"),l=e.get("hf"),f=e.get("PROLIFIC_PID"),u=e.get("STUDY_ID"),g=e.get("SESSION_ID");if(s){let d=s;a?d=`https://raw.githubusercontent.com/${s}`:l&&(d=`https://huggingface.co/datasets/${s.replace("main","resolve/main")}`),await w(d).then(r=>{if(f)for(let c of r)c.metadata||(c.metadata={}),c.metadata.PROLIFIC_PID=f,c.metadata.STUDY_ID=u,c.metadata.SESSION_ID=g;this.consumed_config.adjudication&&(r=Array(this.consumed_config.adjudication).fill(r)),this.set_data(r)})}else if(this.consumed_config.adjudication){let d=Array(this.consumed_config.adjudication).fill(null);for(let r=1;r<this.consumed_config.adjudication+1;r++){var h=e.get(`d${r}`);h&&(d[r-1]={data:await w(h)})}this.set_data(d)}else this.set_data(t)}},created:async function(){let t;const e=new URLSearchParams(window.location.search);var s=e.get("i"),a=e.get("gh"),l=e.get("hf");if(s?(t=s,this.customize_template_link=t):a?(t=`https://raw.githubusercontent.com/${a}`,this.customize_template_link=t):l?(t=`https://huggingface.co/datasets/${l.replace("main","resolve/main")}`,this.customize_template_link=t):(t=`templates/${this.template_path}.yml`,this.customize_template_link=this.template_path),this.serverless&&(t="templates/serverless.yml"),this.injection){window.addEventListener("message",async g=>{await this.load_config(g.data.template);const h=await JSON.parse(g.data.data);await this.load_data(h),this.customize_template_link=null,this.is_fetching=!1});return}const u=await P(t);await this.load_config(u),await this.load_data(),this.is_fetching=!1}},ce=Object.assign(le,{__name:"Viewer",setup(t){return(e,s)=>e.consumed_config!=null&&e.consumed_config!=null&&e.data!=null&&e.data!=null&&e.is_fetching==!1?(i(),o("main",ee,[e.consumed_config.adjudication?(i(),o("div",te,[(i(!0),o(D,null,I(e.consumed_config.adjudication,a=>(i(),z(v,{key:a,class:O(e.highlight_container(a)),highlight:e.consumed_config.highlight_first_interface&&a==1,input_data:e.data[a-1],consumed_config:{consumed_config:e.consumed_config}},null,8,["class","highlight","input_data","consumed_config"]))),128))])):(i(),o("div",ae,[k(v,{input_data:{data:e.data},consumed_config:{consumed_config:e.consumed_config}},null,8,["input_data","consumed_config"])]))])):e.consumed_config!=null&&e.consumed_config!=null&&(e.data==null||e.data==null)&&e.is_fetching==!1?(i(),o("main",se,[k(x,L(S(e.$data)),null,16)])):(i(),o("main",ne,oe))}});export{ce as default};
