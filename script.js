function updateclock(){ 
    const clock=document.getElementById("clock");
   if(clock) clock.content=new Date().toLocaltimeString();
}
updateclock();
setInterval(updateclock,1000);
