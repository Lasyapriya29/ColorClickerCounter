let w=document.getElementById('White')
let b=document.getElementById('Black')
let g=document.getElementById('Green')
w.onclick=()=>w.innerHTML='White'
b.onclick=()=>b.innerHTML='Black'
g.onclick=()=>g.innerHTML='Green'
const clickerValue={'White':0,'Black':0,'Green':0}
const cols=document.querySelectorAll('.cols')
cols.forEach(col=>{
  col.onclick=()=>{
    clickerValue[col.value]++
     col.innerHTML=col.id +":"+ clickerValue[col.value]
  }
})
function clear(){
  cols.forEach(col=>{
    clickerValue[col.value]=0
    col.innerHTML=col.id;
    })
}
let cl=document.getElementById('cl')
cl.onclick=()=>clear()