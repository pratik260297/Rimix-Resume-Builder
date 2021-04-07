function toggle(id) {
  let a = document.getElementById("a");
  let b = document.getElementById("b");
  let c = document.getElementById("c");
  let d = document.getElementById("d");
  let e = document.getElementById("e");
  let f = document.getElementById("f");
  let g = document.getElementById("g");

  let ele = document.getElementById(id);
  let elements = [a, b, c, d, e, f, g];

  let visible = "block";
  let hidden = "none";

  elements.forEach((element) => {
    element.style.display = hidden;
  });

  if (ele.style.display === hidden) {
    ele.style.display = visible;
  } else {
    ele.style.display = hidden;
  }
}

// function getValueById(id) {
//   return document.getElementById(id).value;
// }

// function insertInfo() {
//   database = {
//     firstName: getValueById("firstNameInput"),
//     lastName: getValueById("lastNameInput"),
//     email: getValueById("emailInput"),
//     mobileNumber: getValueById("mobileNumberInput"),
//     birthDate: getValueById("birthDateInput"),
//     address: getValueById("addressInput"),
//     city: getValueById("cityInput"),
//     state: getValueById("stateInput"),
//     country: getValueById("countryInput"),
//     passportNumber: getValueById("passportNumberInput"),
//     nationality: getValueById("nationalityInput"),
//     education: {
//       secondary: {
//         school: getValueById("secTitleInput"),
//         year: getValueById("secYearInput"),
//         overall: getValueById("secOverallInput"),
//         result: getValueById("secResultInput"),
//         division: getValueById("secDivisionInput"),
//       },
//       high_secondary: {
//         school: getValueById("highSecTitleInput"),
//         year: getValueById("highSecYearInput"),
//         overall: getValueById("highSecOverallInput"),
//         result: getValueById("highSecResultInput"),
//         division: getValueById("highSecDivisionInput"),
//       },
//       graduation: {
//         school: getValueById("graduTitleInput"),
//         year: getValueById("graduYearInput"),
//         overall: getValueById("graduOverallInput"),
//         result: getValueById("graduResultInput"),
//         division: getValueById("graduDivisionInput"),
//       },
//       post_graduation: {
//         school: getValueById("postGraduTitleInput"),
//         year: getValueById("postGraduYearInput"),
//         overall: getValueById("postGraduOverallInput"),
//         result: getValueById("postGraduResultInput"),
//         division: getValueById("postGraduDivisionInput"),
//       },
//     },
//     work_experience: {
//       experience_1: {
//         organisation: getValueById("exp1OrganisationInput"),
//         city: getValueById("exp1CityInput"),
//         from: getValueById("exp1FromInput"),
//         to: getValueById("exp1ToInput"),
//         months: getValueById("exp1MonthsInput"),
//         area_of_interest: getValueById("exp1areaOfIntInput"),
//         role: getValueById("exp1RoleInput"),
//       },
//       experience_2: {
//         organisation: getValueById("exp2OrganisationInput"),
//         city: getValueById("exp2CityInput"),
//         from: getValueById("exp2FromInput"),
//         to: getValueById("exp2ToInput"),
//         months: getValueById("exp2MonthsInput"),
//         area_of_interest: getValueById("exp2areaOfIntInput"),
//         role: getValueById("exp2RoleInput"),
//       },
//     },
//     area_of_experties: {
//       experties_1: getValueById("experties1Input"),
//       experties_2: getValueById("experties2Input"),
//       experties_3: getValueById("experties3Input"),
//       experties_4: getValueById("experties4Input"),
//     },
//     languages: {
//       language_1: getValueById("language1Input"),
//       language_2: getValueById("language2Input"),
//       language_3: getValueById("language3Input"),
//       language_4: getValueById("language4Input"),
//     },
//     objective: getValueById("objectiveInput"),
//     other_skills: {
//       skill_1: getValueById("skill1Input"),
//       skill_2: getValueById("skill2Input"),
//       skill_3: getValueById("skill3Input"),
//       skill_4: getValueById("skill4Input"),
//       skill_5: getValueById("skill5Input"),
//       skill_6: getValueById("skill6Input"),
//     },
//   };
//   localStorage.setItem("userInfo", JSON.stringify(database));
// }

// const buildResumeButton = document.getElementById("buildResumeButton");

// buildResumeButton.addEventListener("click", () => insertInfo());
