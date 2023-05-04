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

/* Add an event listener to each search input           
searchInputs.forEach(input => {
    input.addEventListener('keyup', event => {
        // Get the value of the input and its ID
        const value = event.target.value;
        const id = event.target.id;
        var firstName = document.getElementById(firstName)
        var surName = document.getElementById(surName)
        var education = document.getElementById(education)
        var selfDescription = document.getElementById(selfDescription)
        console.log(firstName, surName, education, selfDescription)
        console.log(`Search term: ${value}, Input ID: ${id}`);
    });
});
*/

// Add an event listener to each search input
$('.search-input').on('keyup', function (event) {
    // Get the search parameters
    const firstName = $('#firstName').val();
    const surName = $('#surName').val();
    const education = $('#education').val();
    const selfDescription = $('#selfdescription').val();

    // Send a GET request to the server with the search data
    $.ajax({
        type: "GET",
        url: "/SearchCV",
        data: {
            firstName: firstName,
            surName: surName,
            education: education,
            selfDescription: selfDescription
        },
        success: function (response) {
            console.log(response);
        }
    });
});


/*
const searchInputs = document.querySelectorAll('.search-input');

// Add an event listener to each search input
searchInputs.forEach(input => {
    input.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            // Prevent the form from submitting
            event.preventDefault();

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
        }
    });
});
*/

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






/* validation commented out for testing.
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('lastname');
const birthdayInput = document.getElementById('birthdayftime');
const emailInput = document.getElementById('email-contact');
const phoneNumberInput = document.getElementById('phoneNumber');
const educationInput = document.getElementById('education');
const nationalityInput = document.getElementById('nationality');
const countryInput = document.getElementById('country');
const driverLicenseInput = document.getElementsByName('driversLicense');
const competenceSelect = document.getElementById('kompetens');
const technologySelect = document.getElementById('teknologier');
const chosenTechnologySelect = document.getElementById('valda-teknologier');
const languageInput = document.getElementById('language');
const selfDescriptionInput = document.getElementById('description');
const addressInput = document.getElementById('address');


<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    $(document).ready(function() {
        $("#myForm").submit(function(event) {
            let messages = [];

            if ($("#name").val() === "") {
                messages.push("Förnamn är obligatoriskt");
            }

            if ($("#lastname").val() === "") {
                messages.push("Efternamn är obligatoriskt");
            }

            if ($("#birthdayftime").val() === "") {
                messages.push("Födelsedatum är obligatoriskt");
            }

            if ($("#email-contact").val() === "") {
                messages.push("Email är obligatoriskt");
            }

            if ($("#phoneNumber").val() === "") {
                messages.push("Telefonnummer är obligatoriskt");
            }

            if ($("#education").val() === "") {
                messages.push("Utbildning är obligatoriskt");
            }

            if ($("#nationality").val() === "") {
                messages.push("Nationalitet är obligatoriskt");
            }

            if ($("#country").val() === "") {
                messages.push("Land är obligatoriskt");
            }

                if ($("#driversLicense").val() === "") {
                    messages.push("Körkortsbild är obligatoriskt");
                }

                if ($("#kompetens").val() === "") {
                    messages.push("Du måste välja en kompetens");
                }

                if ($("#teknologier").val() === "") {
                    messages.push("Du måste välja en teknologi");
                }

                if ($("#valda-teknologier").val() === "") {
                    messages.push("Du måste välja en teknologi");
                }

                if ($("#language").val() === "") {
                    messages.push("Språk är obligatoriskt");
                }

                if ($("#description").val() === "") {
                    messages.push("En självbeskrivning är obligatoriskt");
                }

                if ($("#address").val() === "") {
                    messages.push("Address är obligatoriskt");
                }

                if (messages.length > 0) {
                    event.preventDefault();
                    alert(messages.join("\n"));
                }
            });
        });