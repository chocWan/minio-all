"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[8642],{8642:(e,s,t)=>{t.r(s),t.d(s,{default:()=>y});var r=t(65043),n=t(89923),l=t(73216),i=t(20649),a=t(77938),c=t(99161),o=t(20554),d=t(64159),x=t(72237),p=t(64681),u=t(6681),K=t(48793),h=t(92452),j=t(70579);const S=(0,x.A)(r.lazy((()=>t.e(8825).then(t.bind(t,88825))))),y=()=>{const e=(0,o.jL)(),s=(0,l.Zp)(),[t,x]=(0,r.useState)(""),[y,_]=(0,r.useState)(!1),[M,f]=(0,r.useState)(""),[m,E]=(0,r.useState)(!1),[b,A]=(0,r.useState)([]),k=(0,a._)(c.Ms,[c.OV.KMS_DELETE_KEY]),C=(0,a._)(c.Ms,[c.OV.KMS_LIST_KEYS]);(0,r.useEffect)((()=>{O()}),[]),(0,r.useEffect)((()=>{E(!0)}),[t]),(0,r.useEffect)((()=>{if(m)if(C){let s=""===t.trim()?"*":t.trim();i.A.invoke("GET","/api/v1/kms/keys?pattern=".concat(s)).then((e=>{E(!1),A(e.results)})).catch((s=>{E(!1),e((0,d.C9)(s))}))}else E(!1)}),[m,E,A,e,C,t]);const O=()=>{E(!0)},R=[{type:"delete",onClick:e=>{_(!0),f(e)},sendOnlyId:!0,disableButtonFunction:()=>!k}];return(0,r.useEffect)((()=>{e((0,d.ph)("list_keys"))}),[e]),(0,j.jsxs)(r.Fragment,{children:[y&&(0,j.jsx)(S,{deleteOpen:y,selectedItem:M,closeDeleteModalAndRefresh:e=>{_(!1),e&&O()}}),(0,j.jsx)(K.A,{label:"Key Management Service Keys",actions:(0,j.jsx)(h.A,{})}),(0,j.jsx)(n.Mxu,{children:(0,j.jsxs)(n.xA9,{container:!0,children:[(0,j.jsxs)(n.xA9,{item:!0,xs:12,sx:{display:"flex",alignItems:"center",justifyContent:"flex-end","& button":{marginLeft:"8px"}},children:[(0,j.jsx)(a.R,{scopes:[c.OV.KMS_LIST_KEYS],resource:c.Ms,errorProps:{disabled:!0},children:(0,j.jsx)(p.A,{onChange:x,placeholder:"Search Keys with pattern",value:t})}),(0,j.jsx)(a.R,{scopes:[c.OV.KMS_LIST_KEYS],resource:c.Ms,errorProps:{disabled:!0},children:(0,j.jsx)(u.A,{tooltip:"Refresh",children:(0,j.jsx)(n.$nd,{id:"refresh-keys",variant:"regular",icon:(0,j.jsx)(n.fNY,{}),onClick:()=>E(!0)})})}),(0,j.jsx)(a.R,{scopes:[c.OV.KMS_IMPORT_KEY],resource:c.Ms,errorProps:{disabled:!0},children:(0,j.jsx)(u.A,{tooltip:"Import Key",children:(0,j.jsx)(n.$nd,{id:"import-key",variant:"regular",icon:(0,j.jsx)(n.JMY,{}),onClick:()=>{s(c.zZ.KMS_KEYS_IMPORT)}})})}),(0,j.jsx)(a.R,{scopes:[c.OV.KMS_CREATE_KEY],resource:c.Ms,errorProps:{disabled:!0},children:(0,j.jsx)(u.A,{tooltip:"Create Key",children:(0,j.jsx)(n.$nd,{id:"create-key",label:"Create Key",variant:"callAction",icon:(0,j.jsx)(n.REV,{}),onClick:()=>s(c.zZ.KMS_KEYS_ADD)})})})]}),(0,j.jsx)(n.xA9,{item:!0,xs:12,children:(0,j.jsx)(a.R,{scopes:[c.OV.KMS_LIST_KEYS],resource:c.Ms,errorProps:{disabled:!0},children:(0,j.jsx)(n.bQt,{itemActions:R,columns:[{label:"Name",elementKey:"name"},{label:"Created By",elementKey:"createdBy"},{label:"Created At",elementKey:"createdAt"}],isLoading:m,records:b,entityName:"Keys",idField:"name"})})})]})})]})}}}]);
//# sourceMappingURL=8642.df3bb12d.chunk.js.map