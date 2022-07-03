const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
const day = weekday[d.getDay()];
const month = monthNames[d.getMonth()];
const year = d.getFullYear();;
const day_number = String(d.getDate()).padStart(2, '0');

document.getElementById('date').innerHTML = day + ", " + month + " " + day_number + " " + year