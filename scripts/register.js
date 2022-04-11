// document.addEventListener("DOMContentLoaded", () => {
//   initializeForm();
// });

let mentorName = document.getElementById("name");
let email = document.getElementById("email");

let specialty = document.getElementById("specialty");
let skill = document.getElementById("skill");

let mentor = document.getElementById("mentor");
let mentored = document.getElementById("mentored");

let register = document.getElementById("register");

function send() {

if(mentorName != ""){}
  console.log(mentorName.value);
  console.log(email.value);
  console.log(specialty.value);
  console.log(skill.value);
  if (mentor.checked) {
    console.log(mentor.value);
  }

  if (mentored.checked) {
    console.log(mentored.value);
  }
}
