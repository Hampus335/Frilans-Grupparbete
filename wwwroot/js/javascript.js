function submitForm() {
    const form = document.getElementById("myForm");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
  
    // Send the form data to an API endpoint
    fetch('https://example.com/api/formdata', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};

// Get the search inputs
const searchInputs = document.querySelectorAll('.search-input');

/* Add an event listener to each search input
searchInputs.forEach(input => {
    input.addEventListener('keyup', event => {
        // Get the value of the input and its ID
        const value = event.target.value;
        const id = event.target.id;
        var firstName = getElementById(firstName)
        var surName = getElementById(surName)
        var education = getElementById(education)
        var selfDescription = getElementById(selfDescription)
        console.log(firstName, surName, education, selfDescription)
        console.log(`Search term: ${value}, Input ID: ${id}`);
    });
});
*/

const searchInputs = document.querySelectorAll('.search-input');

// Add an event listener to each search input
searchInputs.forEach(input => {
    input.addEventListener('keyup', event => {
        // Get the form data
        const formData = new FormData(event.target.form);

        // Convert form data to JSON
        const searchData = {};
        formData.forEach((value, key) => searchData[key] = value);
        const jsonData = JSON.stringify(searchData);

        // Send a GET request to the server with the search data
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Parse the JSON response
                const response = JSON.parse(xhr.responseText);
                console.log(response);
            }
        };
        const url = `/SearchCV?firstName=${searchData.firstName}&surName=${searchData.surName}&education=${searchData.education}&selfDescription=${searchData.selfDescription}`;
        xhr.open("GET", url);
        xhr.send();
    });
});

xhr.send();

    

//// Add event listener to all search inputs
//for (var i = 0; i < searchInputs.length; i++) {
//    searchInputs[i].addEventListener('keyup', function () {
//        var columnIndex = this.getAttribute('data-column');
//        var searchText = this.value.toLowerCase();

//        // Loop through each row in the table body
//        var tableRows = document.querySelectorAll('#my-table tbody tr');
//        for (var j = 0; j < tableRows.length; j++) {
//            var cellText = tableRows[j].querySelectorAll('td')[columnIndex].textContent.toLowerCase();
//            var match = cellText.indexOf(searchText) !== -1;

//            // Hide rows that don't match the search text
//            tableRows[j].style.display = match ? '' : 'none';
//        }
//    });
//}




//Modal Start JavaScript.
  var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//Modal JS end.

// Kompetens JS Start.
  const competenceEl = document.getElementById("kompetens");
  const technologiesEl = document.getElementById("teknologier");
  const chosenTechnologiesEl = document.getElementById("valda-teknologier");


  // Items with technologies for each competence
const technologies = {
    graphicDesigner: ["Adobe Photoshop", "Adobe Illustrator", "Sketch", "Figma"],
    webDeveloper: ["HTML", "CSS", "JavaScript", "React", "Vue", "Angular"],
    backendutvecklare: ["C#", "Python", "Java", "PHP", "Ruby", "SQL", "Go"]
};

  // Function to update the technology list based on selected competences
  function updateTechnologies() {

// Get selected competences from the dropdown list
    const chosenCompetences = competenceEl.value;



    // Clear the technology list and add "Select a technology" as the first option.
    technologiesEl.innerHTML = "<option value=''>Välj en teknologi</option>";
    // Add technologies for the selected competence to the technology list
    technologies[chosenCompetences].forEach(function(teknologi) {
      const option = document.createElement("option");
      option.value = teknologi;
      option.text = teknologi;
      technologiesEl.appendChild(option);   
    });
    // Activate the technology list and remove "Select a technology" from the selected technologies list.
    technologiesEl.disabled = false;
    chosenTechnologiesEl.innerHTML = "";
    chosenTechnologiesEl.disabled = false;
  }


  // Function to add selected technologies to the selected technologies list
  function addTechnology() {
    // Hämta vald teknologi från dropdown-listan
    const chosenTechnology = technologiesEl.value;

    // Create a new option element for the selected technology and add it to the selected technologies list.
    const option = document.createElement("option");
    option.value = chosenTechnology;
    option.text = chosenTechnology;
    chosenTechnologiesEl.appendChild(option);
  }

  // Add event handlers for when the user selects a competence and when a technology is added.
  competenceEl.addEventListener("change", updateTechnologies);
  technologiesEl.addEventListener("change", addTechnology);
  // Kompetens JS end.







const form = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const lastNameInput = document.querySelector('#lastname');
const ageInput = document.querySelector('#birthdayftime');
const emailInput = document.querySelector('#email-contact');
const phoneInput = document.querySelector('#phoneNumber');
const educationInput = document.querySelector('#education');
const nationalityInput = document.querySelector('#nationality');
const countryInput = document.querySelector('#country');
const driversLicenseInput = document.querySelector('#driversLicense');
const competenceInput = document.querySelector('#kompetens');
const technologiesInput = document.querySelector('#teknologier');
const selectedTechnologiesInput = document.querySelector('#valda-teknologier');
const languageInput = document.querySelector('#language');
const selfDescriptionInput = document.querySelector('#description');
const addressInput = document.querySelector('#address');
const submitButton = document.querySelector('#submitButton');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Check that name is not empty and contains only letters
    if (nameInput.value.trim() === '' || !/^[a-zA-Z]+$/.test(nameInput.value)) {
        alert('Förnamn är ogiltigt.');
        return;
    }

    // Check that lastName is not empty and contains only letters
    if (lastNameInput.value.trim() === '' || !/^[a-zA-Z]+$/.test(lastNameInput.value)) {
        alert('Efternamn är ogiltigt.');
        return;
    }

    // Check that age is not empty
    if (ageInput.value.trim() === '') {
        alert('Ålder är ogiltigt.');
        return;
    }

    // Check that email is a valid email address
    if (emailInput.value.trim() === '' || !/\S+@\S+\.\S+/.test(emailInput.value)) {
        alert('E-mail address är ogiltigt.');
        return;
    }

    // Check that phone is a valid phone number
    if (phoneInput.value.trim() === '' || !/^\d{10}$/.test(phoneInput.value)) {
        alert('Telefonnummer är ogiltigt.');
        return;
    }

    // Check that education is not empty
    if (educationInput.value.trim() === '') {
        alert('Utbildning är ogiltigt.');
        return;
    }

    // Check that nationality is not empty
    if (nationalityInput.value.trim() === '') {
        alert('Nationalitet är ogiltigt.');
        return;
    }

    // Check that country is not empty
    if (countryInput.value.trim() === '') {
        alert('Land är ogiltigt.');
        return;
    }

    // Check that driversLicense is a valid file type
    if (!/\.(jpe?g|png)$/i.test(driversLicenseInput.value)) {
        alert('Körkortsbild är ogiltig.');
        return;
    }

    // Check that competence is selected
    if (competenceInput.value === '') {
        alert('Välj en kompetens.');
        return;
    }

    competenceEl.dispatchEvent(new Event('change'));

    // Check that at least one technology is selected
    if (selectedTechnologies.options.length === 0) {
        alert('Välj minst en teknologi.');
        return;
    }

    // Check that language is not empty
    if (language.value.trim() === '') {
        alert('Språk är ogiltigt.');
        return;
    }

    // Check that selfDescription is not empty and contains at least 50 characters
    if (selfDescription.value.trim() === '' || selfDescription.value.trim().length < 50) {
        alert('Självbeskrivning måste innehålla minst 50 tecken.');
        return;
    }

    // Check if the address field is empty
    if (address.value.trim() === '') {
        alert('Please enter your address.');
        return;
    }

    // Submit the form if all validation passes
    form.submit();
});

