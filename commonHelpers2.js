import"./assets/styles-72337eea.js";const a=document.querySelector("form.feedback-form"),n=a.elements.email,c=a.elements.message,t="feedback-form-state",o=JSON.parse(localStorage.getItem(t));n.value=o?o.email:"";c.value=o?o.message:"";a.addEventListener("input",s=>{const e=s.currentTarget.elements,l=e.email.value,m=e.message.value,r={email:l.trim(),message:m.trim()};localStorage.setItem(t,JSON.stringify(r))});a.addEventListener("submit",s=>{s.preventDefault();const e=s.target.elements,l=e.email.value,m=e.message.value;if(l===""||m===""){alert("All form fields must be filled in");return}const r={email:l.trim(),message:m.trim()};localStorage.setItem(t,JSON.stringify(r)),console.log(JSON.parse(localStorage.getItem(t))),localStorage.removeItem(t),a.reset()});
//# sourceMappingURL=commonHelpers2.js.map