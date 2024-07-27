const clock=document.getElementById('clock')

setInterval(function()
{
let date=new Date();
clock.innerHTML=date.toLocaleDateString()
},1000);