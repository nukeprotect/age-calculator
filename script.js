let age = document.querySelector(".user_age");
let firstName = document.querySelector(".user_firstName");
let lastName = document.querySelector(".user_lastName");
let answer = document.querySelector(".answer");
let details_result = document.querySelector(".details_result");
let userDataAll = [];
let userType = "";
let substitute_answer = document.querySelector(".prestige");

function calculateAge() {
  //knowing the date from the input box and knowing current date
  let mybirthYear = age.value;
  let currentdate = new Date();
  let user_input = new Date(mybirthYear);
  //from that date of input box get year and month
  let currentyear = currentdate.getFullYear();
  let currentmonth = currentdate.getMonth();
  let user_year = user_input.getFullYear();
  let user_month = user_input.getMonth();

  let user_firstName = firstName.value;
  let user_lastName = lastName.value;
  //calculate the age
  let user_age = currentyear - user_year;
  let userMonth = currentmonth - user_month;
  //write the conditions

  if (user_firstName == "" || user_age == "" || user_lastName == "") {
    answer.textContent = "Please Enter Your FirstName or Lastname or Birthyear";
  } else if (user_age >= 13 && user_age <= 19) {
    userType = "Teenager";
    answer.innerHTML = `Hello ${user_firstName} ${user_lastName} , You Are A Teenager 😃😊.You are ${user_age} years and ${userMonth} months old`;
  } else if (user_age >= 19) {
    userType = "Adult";
    answer.innerHTML = `Hello ${user_firstName} ${user_lastName} , You Are An Adult 😃😊.You are ${user_age} years and ${userMonth} months old`;
  } else if (user_age <= 13) {
    userType = "Child";
    answer.innerHTML = `Hello${user_firstName} ${user_lastName}, You Are An Child 😃😊.You are ${user_age}years and ${userMonth} months old`;
  }
  if (user_firstName == "" || user_age == "" || user_lastName == "") {
    substitute_answer.textContent =
      "Please Enter Your FirstName or Lastname or Birthyear";
  } else if (user_age >= 13 && user_age <= 19) {
    userType = "Teenager";
    substitute_answer.innerHTML = `Hello ${user_firstName} ${user_lastName} , You Are A Fucking Teenager 😃😊.You are ${user_age} years and ${userMonth} months old`;
  } else if (user_age >= 19) {
    userType = "Adult";
    substitute_answer.innerHTML = `Hello ${user_firstName} ${user_lastName} , You Are An Adult 😃😊.You are ${user_age} years and ${userMonth} months old`;
  } else if (user_age <= 13) {
    userType = "Child";
    substitute_answer.innerHTML = `Hello${user_firstName} ${user_lastName}, You Are An Child 😃😊.You are ${user_age}years and ${userMonth} months old`;
  }

  let userData = {
    FirstName: `${user_firstName}`,
    lastName: `${user_lastName}`,
    userAge: user_age,
    userMonth: userMonth,
    fullanswer: answer.innerHTML,
    fullStage: `${userType}`,
  };

  displayDetails();

  if (user_firstName == "" || user_age == "" || user_lastName == "") {
    return;
  } else {
    console.log("start");

    if (userDataAll.length < 10) {
      userDataAll.push(userData);
    }
    displayDetails();
    firstName.value = "";
    lastName.value = "";
    age.value = "";
  }
}

function displayDetails() {
  details_result.innerHTML = "";
  userDataAll.forEach((user, index) => {
    let row = document.createElement("tr");

    let cellindex = document.createElement("td");
    cellindex.textContent = index + 1;
    row.appendChild(cellindex);
    //for usser name
    let cellName = document.createElement("td");
    cellName.textContent = user.FirstName;
    row.appendChild(cellName);

    let cellLastname = document.createElement("td");
    cellLastname.textContent = user.lastName;
    row.appendChild(cellLastname);

    //For user Age
    let cellAge = document.createElement("td");
    cellAge.textContent = user.userAge;
    row.appendChild(cellAge);

    let cellMonth = document.createElement("td");
    cellMonth.textContent = user.userMonth;
    row.appendChild(cellMonth);

    let cellStage = document.createElement("td");
    cellStage.textContent = user.fullStage;
    row.appendChild(cellStage);

    details_result.appendChild(row);

    console.log(row);
  });
}
