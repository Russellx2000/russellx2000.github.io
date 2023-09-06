let time_s1 = 0;
let time_s2 = 0;
let time_m1 = 0;
let time_m2 = 0;
let time_h1 = 0;
let time_h2 = 0;

let chronometer_switch = false

function increment(){
  if(time_h2==9 && time_m1==5 && time_m2==9 && time_s1==5 && time_s2==9){
    time_h1++;
    time_h2=0;
    time_m1=0;
    time_m2=0;
    time_s1=0;
    time_s2=0;
    refresh()
  } else {
    if(time_m1==5 && time_m2==9 && time_s1==5 && time_s2==9){
      time_h2++;
      time_m1=0;
      time_m2=0;
      time_s1=0;
      time_s2=0;
      refresh()
    } else {
      if (time_m2==9 && time_s1==5 && time_s2==9){
        time_m1++;
        time_m2=0;
        time_s1=0;
        time_s2=0;
        refresh()
      } else {
        if (time_s1==5 && time_s2==9){
          time_s1 = 0;
          time_s2 = 0;
          time_m2++;
          refresh()
        } else {
          if(time_s2==9){
            time_s2=0;
            time_s1++;
            refresh()
          } else {
            time_s2++;
            refresh()
          }
        }
      }
    }
  }
};

function refresh(){
  document.querySelector('#s1').innerHTML = time_s1;
  document.querySelector('#s2').innerHTML = time_s2;
  document.querySelector('#m2').innerHTML = time_m2;
  document.querySelector('#m1').innerHTML = time_m1;
  document.querySelector('#h2').innerHTML = time_h2;
  document.querySelector('#h1').innerHTML = time_h1;
};

//Used to test code
function pr(){
  console.log("success")
};

function run_ticks(){
  if(!chronometer_switch){
    setInterval(increment,1000);
  chronometer_switch = true;
  } else {
    console.log("lol")
  }
};

document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#left-button').onclick = run_ticks;
});