let current = new Date();
let currentDay = current.getDay();
let currentDate = current.getDate();
let currentMonth = current.getMonth();
let currentYear = current.getFullYear();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = document.querySelector(".day");
let date = document.querySelector(".date");
let month = document.querySelector(".month");
let year = document.querySelector(".year");

day.textContent = days[currentDay];
date.textContent = currentDate;
month.textContent = months[currentMonth];
year.textContent = currentYear;
