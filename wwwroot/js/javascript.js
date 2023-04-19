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


//Start of MongoDB table functionality.
   const router = require('express').Router();
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

router.get('/data', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.log('Error connecting to MongoDB:', err);
            res.status(500).send('Error connecting to MongoDB');
        } else {
            const db = client.db(dbName);
            const collection = db.collection('mycollection');

            collection.find({}).toArray((err, docs) => {
                if (err) {
                    console.log('Error retrieving data from MongoDB:', err);
                    res.status(500).send('Error retrieving data from MongoDB');
                } else {
                    res.json(docs);
                }

                client.close();
            });
        }
    });
});

module.exports = router;

    // Import necessary modules
    const express = require('express');
    const router = express.Router();
    const MongoClient = require('mongodb').MongoClient;

    // Set up MongoDB connection details
    const url = 'mongodb://localhost:27017';
    const dbName = 'mydb';

    // Define a GET endpoint for the route "/data"
    router.get('/data', (req, res) => {
        // Connect to MongoDB
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
            if (err) {
                // If there's an error, log it and send an error response to the client
                console.log('Error connecting to MongoDB:', err);
                res.status(500).send('Error connecting to MongoDB');
            } else {
                // If the connection is successful, retrieve data from the "mycollection" collection
                const db = client.db(dbName);
                const collection = db.collection('mycollection');

                // Find all documents in the collection and convert them to an array
                collection.find({}).toArray((err, docs) => {
                    if (err) {
                        // If there's an error, log it and send an error response to the client
                        console.log('Error retrieving data from MongoDB:', err);
                        res.status(500).send('Error retrieving data from MongoDB');
                    } else {
                        // If the data is retrieved successfully, send it as a JSON response to the client
                        res.json(docs);
                    }
                    // Close the connection to MongoDB
                    client.close();
                });
            }
        });
    });

    // Export the router so it can be used in other modules
    module.exports = router;

    // Filtering table script

    document.addEventListener("DOMContentLoaded", () => {
        // For each search input field on the page
        document.querySelectorAll(".search-input").forEach((inputField) => {
            // Get the table rows associated with the search input
            const tableRows = inputField.closest("table").querySelectorAll("tbody > tr");
            // Get the header cell associated with the search input
            const headerCell = inputField.closest("th");
            // Get the other header cells in the same row as the search input
            const otherHeaderCells = headerCell.closest("tr").children;
            // Get the index of the header cell associated with the search input
            const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell);

            // When the search input field is changed
            inputField.addEventListener("input", () => {
                // Get the search query entered by the user
                const searchQuery = inputField.value.toLowerCase();

                // Send a GET request to the "/data" endpoint to retrieve the data for the table
                fetch('/data')
                    .then(response => response.json())
                    .then(data => {
                        // Create table rows from the data
                        const tableBody = document.querySelector('#table-data tbody');
                        tableBody.innerHTML = '';
                        data.forEach(row => {
                            const tableRow = document.createElement('tr');
                            Object.values(row).forEach(cellValue => {
                                const tableCell = document.createElement('td');
                                tableCell.textContent = cellValue;
                                tableRow.appendChild(tableCell);
                            });
                            tableBody.appendChild(tableRow);
                        });

                        // Get the cells in the table column associated with the search input
                        const searchableCells = data.map((row) => row.columns[columnIndex]);

                        // For each cell in the table column
                        for (const tableCell of searchableCells) {
                            // Get the row associated with the cell
                            const row = tableCell.closest("tr");
                            // Get the value of the cell (as lowercase text with commas removed)
                            const value = tableCell.text.toLowerCase().replace(",", "");

                            // Make the row visible (in case it was previously hidden)
                            row.style.visibility = null;

                            // If the value of the cell doesn't match the search query
                            if (value.search(searchQuery) === -1) {
                                // Hide the row
                                row.style.visibility = "collapse";
                            }
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }); 

            // Show all table rows when the search input field is cleared
            inputField.addEventListener("search", () => {
                const tableRows = inputField.closest("table").querySelectorAll("tbody > tr");
                for (const row of tableRows) {
                    row.style.visibility = null;
                }
            });
        });
    });
// End of mongoDB table functionality.
$(document).ready(function() {
  // Add event listener to all search inputs
  $('.search-input').on('keyup', function() {
    var columnIndex = $(this).data('column');
    var searchText = $(this).val().toLowerCase();

    // Loop through each row in the table body
    $('table#my-table tbody tr').each(function() {
      var cellText = $(this).find('td').eq(columnIndex).text().toLowerCase();
      var match = cellText.indexOf(searchText) !== -1;

      // Hide rows that don't match the search text
      $(this).toggle(match);
    });
  });
});




document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".search-input").forEach((inputField) => {
      const tableRows = inputField
        .closest("table")
        .querySelectorAll("tbody > tr");
      const headerCell = inputField.closest("th");
      const otherHeaderCells = headerCell.closest("tr").children;
      const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell);
      const searchableCells = Array.from(tableRows).map(
        (row) => row.querySelectorAll("td")[columnIndex]
      );
  
      inputField.addEventListener("input", () => {
        const searchQuery = inputField.value.toLowerCase();
  
        for (const tableCell of searchableCells) {
          const row = tableCell.closest("tr");
          const value = tableCell.textContent.toLowerCase().replace(",", "");
  
          row.style.visibility = null;
  
          if (value.search(searchQuery) === -1) {
            row.style.visibility = "collapse";
          }
        }
      });
    });
  });


 // Get the search input fields
const searchInputs = document.querySelectorAll('.search-input');

// Attach event listeners to the search input fields
searchInputs.forEach((input) => {
  input.addEventListener('input', () => {
    const searchTerm = input.value.trim().toLowerCase();
    const column = input.dataset.column;
    const tableRows = document.querySelectorAll('#my-table tbody tr');
    
    // Filter table rows based on the search term and column
    tableRows.forEach((row) => {
      const cellValue = row.querySelector(`td[data-column="${column}"]`).textContent.trim().toLowerCase();
      if (cellValue.includes(searchTerm)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
});
*/
// End of table MongoDB functionality.

// Filtering for Table Start.
$(document).ready(function () {
    // Add event listener to all search inputs
    $('.search-input').on('keyup', function () {
        var columnIndex = $(this).data('column');
        var searchText = $(this).val().toLowerCase();

        // Loop through each row in the table body
        $('table#my-table tbody tr').each(function () {
            var cellText = $(this).find('td').eq(columnIndex).text().toLowerCase();
            var match = cellText.indexOf(searchText) !== -1;

            // Hide rows that don't match the search text
            $(this).toggle(match);
        });
    });
});
// Filtering for table list end.

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

