function setTime() {
  const date = new Date();
  const sec = date.getSeconds();
  const min = date.getMinutes();
  const hour = date.getHours();  

  const secondHand = document.querySelector('.secondHand');
  const minHand =  document.querySelector('.minHand');
  const hourHand = document.querySelector('.hourHand');
  
  // for smooth transition we reduce transition speed to 0s, otherwise neddle hand will go 360deg reverse in a bad way
  secondHand.style.transition = (sec == 0) ?  "all 0s" : "all 0.5s";        
  minHand.style.transition = (min == 0) ?  "all 0s" : "all 0.5s";
  hourHand.style.transition = (hour == 0 || hour == 13) ?  "all 0s" : "all 0.5s";

  secondHand.style.transform = `rotateZ(${(sec * 6) + 90}deg)`; 
  minHand.style.transform = `rotateZ(${((min / 60) * 360) + ((sec/60)*6) + 90}deg)`;
  hourHand.style.transform = `rotateZ(${((hour / 12) * 360) + ((min/60)*30) + 90}deg)`;
}

setInterval(setTime, 1000);


