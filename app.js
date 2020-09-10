var container = document.querySelector("#clock");
var para = document.querySelector("#p");

var getTime = () => {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  hours = hours > 12 ? hours - 12 : hours;

  amPm = hours < 12 ? "PM" : "AM";

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  t = `${hours}:${minutes}:${seconds} ${amPm}`;

  
  

  para.innerHTML = `${t}`;
  //   para.innerHTML = ''

  //para.appendChild(t);

  container.appendChild(para);

  //console.clear();
  //console.log(t);
};

setInterval(getTime, 1000);
