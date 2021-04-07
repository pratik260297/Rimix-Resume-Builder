let data = {};

function getInfo() {
  data = JSON.parse(localStorage.getItem("userInfo"));
}

function setValue(id, data) {
  let element = document.getElementById(id);
  element.innerHTML = data;
}

getInfo();

setValue("firstName", data.firstName);
setValue("lastName", data.lastName);

setValue("city", data.city);
setValue("country", data.country);
setValue("email", data.email);
setValue("mobileNumber", data.mobileNumber);
setValue("nationality", data.nationality);

setValue("language1", data.languages.language_1);
setValue("language2", data.languages.language_2);
setValue("language3", data.languages.language_3);
setValue("language4", data.languages.language_4);

setValue("schoolName", data.education.secondary.school);
setValue("schoolGrade", data.education.secondary.division);
setValue("schoolResult", data.education.secondary.result);
setValue("schoolOverall", data.education.secondary.overall);
setValue("schoolYear", data.education.secondary.year);
setValue("objective", data.objective);

setValue("schoolName2", data.education.high_secondary.school);
setValue("schoolGrade2", data.education.high_secondary.division);
setValue("schoolResult2", data.education.high_secondary.result);
setValue("schoolOverall2", data.education.high_secondary.overall);
setValue("schoolYear2", data.education.high_secondary.year);

setValue("schoolName3", data.education.graduation.school);
setValue("schoolGrade3", data.education.graduation.division);
setValue("schoolResult3", data.education.graduation.result);
setValue("schoolOverall3", data.education.graduation.overall);
setValue("schoolYear3", data.education.graduation.year);

setValue("schoolName4", data.education.post_graduation.school);
setValue("schoolGrade4", data.education.post_graduation.division);
setValue("schoolResult4", data.education.post_graduation.result);
setValue("schoolOverall4", data.education.post_graduation.overall);
setValue("schoolYear4", data.education.post_graduation.year);

setValue("role1", data.work_experience.experience_1.role);
setValue("from1", data.work_experience.experience_1.from);
setValue("to1", data.work_experience.experience_1.to);
setValue("areaOfInt1", data.work_experience.experience_1.area_of_interest);
setValue("organisation1", data.work_experience.experience_1.organisation);
setValue("location1", data.work_experience.experience_1.city);

setValue("role2", data.work_experience.experience_2.role);
setValue("from2", data.work_experience.experience_2.from);
setValue("to2", data.work_experience.experience_2.to);
setValue("areaOfInt2", data.work_experience.experience_2.area_of_interest);
setValue("organisation2", data.work_experience.experience_2.organisation);
setValue("location2", data.work_experience.experience_2.city);

setValue("experties1", data.area_of_experties.experties_1);
setValue("experties2", data.area_of_experties.experties_2);
setValue("experties3", data.area_of_experties.experties_3);
setValue("experties4", data.area_of_experties.experties_4);

setValue("skill1", data.other_skills.skill_1);
setValue("skill2", data.other_skills.skill_2);
setValue("skill3", data.other_skills.skill_3);
setValue("skill4", data.other_skills.skill_4);
setValue("skill5", data.other_skills.skill_5);
setValue("skill6", data.other_skills.skill_6);
