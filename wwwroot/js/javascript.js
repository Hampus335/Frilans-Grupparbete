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

  //end of table search list.

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
  


 




