const firstName = getValue("firstNameInput");
const lastName = getValue("lastNameInput");
const email = getValue("emailInput");
const mobileNumber = getValue("mobileNumberInput");
const birthDate = getValue("birthDateInput");
const address = getValue("addressInput");
const city = getValue("cityInput");
const state = getValue("stateInput");
const country = getValue("countryInput");
const passportNumber = getValue("passportNumberInput");
const nationality = getValue("nationalityInput");

const secondarySchool = getValue("secTitleInput");
const secondaryYear = getValue("secYearInput");
const secondaryOverall = getValue("secOverallInput");
const secondaryResult = getValue("secResultInput");
const secondaryDivision = getValue("secDivisionInput");

const highSecondarySchool = getValue("highSecTitleInput");
const highSecondaryYear = getValue("highSecYearInput");
const highSecondaryOverall = getValue("highSecOverallInput");
const highSecondaryResult = getValue("highSecResultInput");
const highSecondaryDivision = getValue("highSecDivisionInput");

const graduationSchool = getValue("graduTitleInput");
const graduationYear = getValue("graduYearInput");
const graduationOverall = getValue("graduOverallInput");
const graduationResult = getValue("graduResultInput");
const graduationDivision = getValue("graduDivisionInput");

const postGraduationSchool = getValue("postGraduTitleInput");
const postGraduationYear = getValue("postGraduYearInput");
const postGraduationOverall = getValue("postGraduOverallInput");
const postGraduationResult = getValue("postGraduResultInput");
const postGraduationDivision = getValue("postGraduDivisionInput");

const exp1Organisation = getValue("exp1OrganisationInput");
const exp1City = getValue("exp1CityInput");
const exp1From = getValue("exp1FromInput");
const exp1To = getValue("exp1ToInput");
const exp1Months = getValue("exp1MonthsInput");
const exp1AreaOfInterest = getValue("exp1areaOfIntInput");
const exp1ORole = getValue("exp1RoleInput");

const exp2Organisation = getValue("exp2OrganisationInput");
const exp2City = getValue("exp2CityInput");
const exp2From = getValue("exp2FromInput");
const exp2To = getValue("exp2ToInput");
const exp2Months = getValue("exp2MonthsInput");
const exp2AreaOfInterest = getValue("exp2areaOfIntInput");
const exp2ORole = getValue("exp2RoleInput");

const experties1 = getValue("experties1Input");
const experties2 = getValue("experties2Input");
const experties3 = getValue("experties3Input");
const experties4 = getValue("experties4Input");

const lang1 = getValue("language1Input");
const lang2 = getValue("language2Input");
const lang3 = getValue("language3Input");
const lang4 = getValue("language4Input");

const objective = getValue("objectiveInput");

const otherSkill1 = getValue("skill1Input");
const otherSkill2 = getValue("skill2Input");
const otherSkill3 = getValue("skill3Input");
const otherSkill4 = getValue("skill4Input");
const otherSkill5 = getValue("skill5Input");
const otherSkill6 = getValue("skill6Input");

const inputClasses =
  "x-input x-border x-bottombar x-round-large x-hover-border-gray";

// function getValue(id) {
//   return document.getElementById(id).value;
// }

function getValue(id) {
  return document.getElementById(id);
}

function showError(input, message) {
  input.className = `${inputClasses} x-border-red`;
  const error = input.nextElementSibling;
  error.innerHTML = message;
  error.style.visibility = "visible";
}

function showSuccess(input) {
  input.className = `${inputClasses} x-border-green`;
  const error = input.nextElementSibling;
  error.style.visibility = "hidden";
}

function validateInputs(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `Required.`);
    } else {
      showSuccess(input);
      insertInfo();
      location.replace("../pages/resume_templates.html");
    }
  });
}

function getValueById(id) {
  return document.getElementById(id).value;
}

function insertInfo() {
  database = {
    firstName: getValueById("firstNameInput"),
    lastName: getValueById("lastNameInput"),
    email: getValueById("emailInput"),
    mobileNumber: getValueById("mobileNumberInput"),
    birthDate: getValueById("birthDateInput"),
    address: getValueById("addressInput"),
    city: getValueById("cityInput"),
    state: getValueById("stateInput"),
    country: getValueById("countryInput"),
    passportNumber: getValueById("passportNumberInput"),
    nationality: getValueById("nationalityInput"),
    education: {
      secondary: {
        school: getValueById("secTitleInput"),
        year: getValueById("secYearInput"),
        overall: getValueById("secOverallInput"),
        result: getValueById("secResultInput"),
        division: getValueById("secDivisionInput"),
      },
      high_secondary: {
        school: getValueById("highSecTitleInput"),
        year: getValueById("highSecYearInput"),
        overall: getValueById("highSecOverallInput"),
        result: getValueById("highSecResultInput"),
        division: getValueById("highSecDivisionInput"),
      },
      graduation: {
        school: getValueById("graduTitleInput"),
        year: getValueById("graduYearInput"),
        overall: getValueById("graduOverallInput"),
        result: getValueById("graduResultInput"),
        division: getValueById("graduDivisionInput"),
      },
      post_graduation: {
        school: getValueById("postGraduTitleInput"),
        year: getValueById("postGraduYearInput"),
        overall: getValueById("postGraduOverallInput"),
        result: getValueById("postGraduResultInput"),
        division: getValueById("postGraduDivisionInput"),
      },
    },
    work_experience: {
      experience_1: {
        organisation: getValueById("exp1OrganisationInput"),
        city: getValueById("exp1CityInput"),
        from: getValueById("exp1FromInput"),
        to: getValueById("exp1ToInput"),
        months: getValueById("exp1MonthsInput"),
        area_of_interest: getValueById("exp1areaOfIntInput"),
        role: getValueById("exp1RoleInput"),
      },
      experience_2: {
        organisation: getValueById("exp2OrganisationInput"),
        city: getValueById("exp2CityInput"),
        from: getValueById("exp2FromInput"),
        to: getValueById("exp2ToInput"),
        months: getValueById("exp2MonthsInput"),
        area_of_interest: getValueById("exp2areaOfIntInput"),
        role: getValueById("exp2RoleInput"),
      },
    },
    area_of_experties: {
      experties_1: getValueById("experties1Input"),
      experties_2: getValueById("experties2Input"),
      experties_3: getValueById("experties3Input"),
      experties_4: getValueById("experties4Input"),
    },
    languages: {
      language_1: getValueById("language1Input"),
      language_2: getValueById("language2Input"),
      language_3: getValueById("language3Input"),
      language_4: getValueById("language4Input"),
    },
    objective: getValueById("objectiveInput"),
    other_skills: {
      skill_1: getValueById("skill1Input"),
      skill_2: getValueById("skill2Input"),
      skill_3: getValueById("skill3Input"),
      skill_4: getValueById("skill4Input"),
      skill_5: getValueById("skill5Input"),
      skill_6: getValueById("skill6Input"),
    },
  };
  localStorage.setItem("userInfo", JSON.stringify(database));
}

const inputsForm = document.getElementById("buildResumeButton");

inputsForm.addEventListener("click", (event) => {
  event.preventDefault();
  validateInputs([
    firstName,
    lastName,
    email,
    mobileNumber,
    birthDate,
    address,
    city,
    state,
    country,
    passportNumber,
    nationality,
    secondarySchool,
    secondaryYear,
    secondaryOverall,
    secondaryResult,
    secondaryDivision,
    highSecondarySchool,
    highSecondaryYear,
    highSecondaryOverall,
    highSecondaryResult,
    highSecondaryDivision,
    graduationSchool,
    graduationYear,
    graduationOverall,
    graduationResult,
    graduationDivision,
    postGraduationSchool,
    postGraduationYear,
    postGraduationOverall,
    postGraduationResult,
    postGraduationDivision,
    exp1Organisation,
    exp1City,
    exp1From,
    exp1To,
    exp1Months,
    exp1AreaOfInterest,
    exp1ORole,
    exp2Organisation,
    exp2City,
    exp2From,
    exp2To,
    exp2Months,
    exp2AreaOfInterest,
    exp2ORole,
    experties1,
    experties2,
    experties3,
    experties4,
    lang1,
    lang2,
    lang3,
    lang4,
    objective,
    otherSkill1,
    otherSkill2,
    otherSkill3,
    otherSkill4,
    otherSkill5,
    otherSkill6,
  ]);
});
