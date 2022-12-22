let sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");
// Date
const date = document.querySelector(".dates");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const am_pm = document.querySelector(".am-pm");
const day = document.querySelector(".day");

const dayName = (key) => {
  switch (key) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    case 6:
      return "Sat";

    default:
      break;
  }
};

setInterval(() => {
  var now = new Date();
  var seconds = now.getSeconds();
  var minutes = now.getMinutes();
  var hours = now.getHours();

  sec.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  min.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  hour.innerHTML = hours < 10 ? "0" + hours : hours - 12;
  am_pm.innerHTML = hours - 12 ? "AM" : "PM";
  day.innerHTML = dayName(now.getDay());

  date.innerHTML = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  month.innerHTML =
    now.getMonth() + 1 < 10 ? "0" + now.getMonth() + 1 : now.getMonth() + 1;
  year.innerHTML = now.getFullYear();
}, 1000);
