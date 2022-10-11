const container = document.querySelector("#dob");
const btn = document.querySelector(".btn");
const err = document.querySelector(".error");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

// current date

const todayDate = new Date();
console.log(todayDate);
const currentYear = todayDate.getFullYear();
const currentMonth = todayDate.getMonth();
const currentDay = todayDate.getDate();

btn.addEventListener("click", displayAge);

function displayAge() {
  if (container.value === "") {
    err.classList.add("active");
    err.textContent = "Please enter a date";
    setTimeout(() => {
      err.classList.remove("active");
    }, [1500]);
  } else {
    calcAge(container.value, "2022-10-25");
  }
}

function calcAge(start, end) {
  let dobYear = parseInt(start.substring(0, 4), 10);
  let dobMonth = parseInt(start.substring(5, 7), 10);
  let dobDay = parseInt(start.substring(8, 10), 10);

  let c_year = parseInt(end.substring(0, 4), 10);
  let c_month = parseInt(end.substring(5, 7), 10);
  let c_day = parseInt(end.substring(8, 10), 10);

  //   calculate Year differece
  let yearAgeDiff = c_year - dobYear;

  //   calculate month difference
  let monthAgeDiff;
  if (c_month > dobMonth) {
    monthAgeDiff = c_month - dobMonth;
  } else {
    yearAgeDiff--;
    monthAgeDiff = 12 + c_month - dobMonth;
  }

  //   calculate day difference
  let dayAgeDiff;
  if (c_day > dobDay) {
    dayAgeDiff = c_day - dobDay;
  } else {
    monthAgeDiff--;
    noofdaysindob = daysInMonth(dobMonth, dobYear);
    dayAgeDiff = noofdaysindob + c_day - dobDay;
  }

  if (monthAgeDiff < 0) {
    monthAgeDiff = 11;
    yearAgeDiff--;
  }

  if (yearAgeDiff < 0) {
    err.classList.add("active");
    err.textContent = "Welcome Time Traveller";
    setTimeout(() => {
      err.classList.remove("active");
    }, [1500]);
    years.innerHTML = "";
    months.innerHTML = "";
    days.innerHTML = "";
  } else {
    years.innerHTML = yearAgeDiff;
    months.innerHTML = monthAgeDiff;
    days.innerHTML = dayAgeDiff;
  }
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
