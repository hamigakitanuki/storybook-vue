import{T}from"./Task-af616a3f.js";import{a as e}from"./chunk-OPEUWD42-a3b45fd8.js";import"./vue.esm-bundler-de44749a.js";const A={component:T,title:"Task",tags:["autodocs"],argTypes:{onPinTask:{},onArchiveTask:{}},excludeStories:/.*Data$/},D={onPinTask:e("pin-task"),onArchiveTask:e("archive-task")},a={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},s={args:{task:{...a.args.task,state:"TASK_PINNED"}}},t={args:{task:{...a.args.task,state:"TASK_ARCHIVED"}}};var r,n,o;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,i,k;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(k=(i=s.parameters)==null?void 0:i.docs)==null?void 0:k.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const S=["actionsData","Default","Pinned","Archived"];export{t as Archived,a as Default,s as Pinned,S as __namedExportsOrder,D as actionsData,A as default};
//# sourceMappingURL=Task.stories-786ddccc.js.map
