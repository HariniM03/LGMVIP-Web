let registrations = [];

// Define skills options for each industry
let skillsOptions = {
  "tech": ["Web Development", "Mobile Development", "Data Science"],
  "finance": ["Accounting", "Investment Banking", "Financial Analysis"],
  "healthcare": ["Nursing", "Pharmacy", "Medical Research"],
  "education": ["Teaching", "Curriculum Design", "Student Affairs"]
};

// Populate skills options based on selected industry
function populateSkills() {
  let industrySelect = document.getElementById("industry");
  let skillsSelect = document.getElementById("skills");
  let selectedIndustry = industrySelect.value;
  let options = skillsOptions[selectedIndustry];
  // Clear current options
  skillsSelect.innerHTML = "";
  // Add new options
  options.forEach(function(option) {
    let optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.text = option;
    skillsSelect.add(optionElement);
  });
}

// Submit form data and display registration information
function submitForm(event) {
  event.preventDefault();
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let phoneInput = document.getElementById("phone");
  let universityInput = document.getElementById("university");
  let departmentInput = document.getElementById("department");
  let industrySelect = document.getElementById("industry");
  let skillsSelect = document.getElementById("skills");
  let genderInputs = document.getElementsByName("gender");

  // Get selected gender
  let gender;
  for (let i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      gender = genderInputs[i].value;
      break;
    }
  }

  // Create registration object
  let registration = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    university: universityInput.value,
    department: departmentInput.value,
    industry: industrySelect.value,
    skills: skillsSelect.value,
    gender: gender
  };

  // Add registration to list of registrations
  registrations.push(registration);

  // Display registration information
  let outputDiv = document.getElementById("output");
  let regDiv = document.createElement("div");
  regDiv.classList.add("registration");
  let namePara = document.createElement("p");
  namePara.innerText = "Name: " + registration.name;
  regDiv.appendChild(namePara);
  let emailPara = document.createElement("p");
  emailPara.innerText = "Email: " + registration.email;
  regDiv.appendChild(emailPara);
  let phonePara = document.createElement("p");
  phonePara.innerText = "Phone Number: " + registration.phone;
  regDiv.appendChild(phonePara);
  let universityPara = document.createElement("p");
  universityPara.innerText = "University: " + registration.university;
  regDiv.appendChild(universityPara);
  let departmentPara = document.createElement("p");
  departmentPara.innerText = "Department: " + registration.department;
  regDiv.appendChild(departmentPara);
  let industryPara = document.createElement("p");
  industryPara.innerText = "Industry: " + registration.industry;
  regDiv.appendChild(industryPara);
  let skillsPara = document.createElement("p");
  skillsPara.innerText = "Skills: " + registration.skills;
  regDiv.appendChild(skillsPara);
  let genderPara = document.createElement("p");
  genderPara.innerText = "Gender: " + registration.gender;
  regDiv.appendChild(genderPara);
  outputDiv.appendChild(regDiv);

  // Clear form inputs
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  universityInput.value = "";
  departmentInput.value = "";
  industrySelect.selectedIndex = 0;
  skillsSelect.innerHTML = "";
  genderInputs[0].checked = true;
  
  // Show success message
  let successPara = document.createElement("p");
  successPara.classList.add("success");
  successPara.innerText = "Registration submitted successfully!";
  outputDiv.appendChild(successPara);
  }
  
  // Add event listener to industry select
  let industrySelect = document.getElementById("industry");
  industrySelect.addEventListener("change", populateSkills);
  
  // Add event listener to form submit button
  let submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", submitForm);
