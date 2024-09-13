document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Type assertion
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const EducationElement = document.getElementById(
      "Education"
    ) as HTMLInputElement;
    const ExperienceElement = document.getElementById(
      "Experience"
    ) as HTMLInputElement;
    const SkillsElement = document.getElementById("Skills") as HTMLInputElement;

    if (
      nameElement &&
      phoneElement &&
      emailElement &&
      EducationElement &&
      ExperienceElement &&
      SkillsElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const Education = EducationElement.value;
      const Experience = ExperienceElement.value;
      const Skills = SkillsElement.value;

      // Create resume output
      const resumeOutput = `
            <h2>Resume</h2>
            <p><strong>Name:</strong>s] <span id="edit-name" class="editable" > ${name} </span> </p>
            <p><strong>Email:</strong> <span id="edit-edit" class="editable">${email} </span> </p>
            <p><strong>Phone Number:</strong><span id="edit-phone" class="editable"> ${phone}</span> </p>
            
            <h3>Education</h3>
            <p id="edit-education" class="editable">${Education}</p>
            
            <h3>Experience</h3>
            <p id="edit-experience" class="editable">${Experience}</p>
            
            <h3>Skills</h3>
            <p id="edit-skills" class="editable">${Skills}</p>
        `;

      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.classList.remove("hidden"); // Display the resume output
      makeEditable();
      }
    } else {
      console.error("One or more form elements are missing");
    }
  });
  function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
      element.addEventListener('click' , function() {
        const currentElement = element as HTMLElement;
        const currentValue = currentElement.textContent || "" ;

      //replace content
      if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
        const input = document.createElement('input')
        input.type = 'text'
        input.value = currentValue
        input.classList.add('editing.input')
        
        input.addEventListener('blur', function (){
          currentElement.textContent = input.value;
          currentElement.style.display = 'inline'
          input.remove()
        })
        currentElement.style.display = 'none'
        currentElement.parentNode?.insertBefore(input, currentElement)
        input.focus()
      }
      })
    })
  }