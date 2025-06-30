import{f as o}from"./index-CIe7Vrie.js";import{j as t}from"./jsx-runtime-BYYWji4R.js";function h({task:{id:e,title:i,state:n},onArchiveTask:A,onPinTask:_}){return t.jsxs("div",{className:`list-item ${n}`,children:[t.jsxs("label",{htmlFor:`archiveTask-${e}`,"aria-label":`archiveTask-${e}`,className:"checkbox",children:[t.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:n==="TASK_ARCHIVED"}),t.jsx("span",{className:"checkbox-custom",onClick:()=>A(e)})]}),t.jsx("label",{htmlFor:`title-${e}`,"aria-label":i,className:"title",children:t.jsx("input",{type:"text",value:i,readOnly:!0,name:"title",id:`title-${e}`,placeholder:"Input title"})}),n!=="TASK_ARCHIVED"&&t.jsx("button",{className:"pin-button",onClick:()=>_(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:t.jsx("span",{className:"icon-star"})},`pinTask-${e}`)]})}h.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{required:!0,tsType:{name:"signature",type:"object",raw:`{\r
  id: string;\r
  title: string;\r
  state: string;\r
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"string",required:!0}}]}},description:""},onArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => {}",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"signature",type:"object",raw:"{}",signature:{properties:[]}}}},description:""},onPinTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => {}",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"signature",type:"object",raw:"{}",signature:{properties:[]}}}},description:""}}};const y={onArchiveTask:o(),onPinTask:o()},b={component:h,title:"Task",tags:["autodocs"],excludeStories:/.*Data$/,args:{...y}},a={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},s={args:{task:{...a.args.task,state:"TASK_PINNED"}}},r={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};var c,u,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var p,m,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,k,T;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(T=(k=r.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const x=["ActionsData","Default","Pinned","Archived"],D=Object.freeze(Object.defineProperty({__proto__:null,ActionsData:y,Archived:r,Default:a,Pinned:s,__namedExportsOrder:x,default:b},Symbol.toStringTag,{value:"Module"}));export{a as D,h as T,D as a};
