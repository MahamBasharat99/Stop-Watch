var hour=0;
var min=0;
var sec=0;
var msec=0;
var interval;
var hourheading=document.getElementById('hour');
var minheading=document.getElementById('min');
var secheading=document.getElementById('sec');
var msecheading=document.getElementById('msec');
var status="stopped";

function timer(){
    msec++;
    msecheading.innerHTML=msec;
    if(msec>=100){
        sec++;
        secheading.innerHTML=sec;
        msec=0;}
        if(sec>=60){
            min++;
            minheading.innerHTML=min;
            sec=0;
        }
            if(min>=60){
                hour++;
                hourheading.innerHTML=hour;
                min=0;
            }
        }

    
function start(){
    if (status==="stopped"){
  interval=setInterval(timer,10);
  document.getElementById("start").innerHTML="Stop";
  
  status="started";
    }else{
        clearInterval(interval);
        document.getElementById("start").innerHTML="Start";
        
        status="stopped";
    }

}
// function pause(){
//     clearInterval(interval);
// }
function reset(){
    hour=0;
    min=0;
    sec=0;
    msec=0;
    hourheading.innerHTML=hour;
    minheading.innerHTML=min;
    secheading.innerHTML=sec;
    msecheading.innerHTML=msec;
    clearInterval(interval);
    document.getElementById("start").innerHTML="Start";
}
// function setting(){
// btnstart=document.getElementById('start');
// if(msecheading.innerHTML<=0 || secheading.innerHTML<=0 || minheading.innerHTML<=0 || hourheading.innerHTML<=0){
//     btnstart.removeattribute('disabled');

// }}
