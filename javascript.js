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


  const kompetensEl = document.getElementById("kompetens");
  const teknologierEl = document.getElementById("teknologier");
  const valdaTeknologierEl = document.getElementById("valda-teknologier");

  // Objekt med teknologier för varje kompetens
  const teknologier = {
    grafiskdesigner: ["Adobe Photoshop", "Adobe Illustrator", "Sketch", "Figma"],
    webbutvecklare: ["HTML", "CSS", "JavaScript", "React", "Vue", "Angular"]
  };
  
  // Funktion för att uppdatera teknologilistan baserat på vald kompetens
  function uppdateraTeknologier() {
    // Hämta vald kompetens från dropdown-listan
    const valdKompetens = kompetensEl.value;

    // Töm teknologilistan och lägg till "Välj en teknologi" som första alternativ
    teknologierEl.innerHTML = "<option value=''>Välj en teknologi</option>";

    // Lägg till teknologier för den valda kompetensen i teknologilistan
    teknologier[valdKompetens].forEach(function(teknologi) {
      const option = document.createElement("option");
      option.value = teknologi;
      option.text = teknologi;
      teknologierEl.appendChild(option);
    });

    // Aktivera teknologilistan och ta bort "Välj en teknologi" från valda teknologier-listan
    teknologierEl.disabled = false;
    valdaTeknologierEl.innerHTML = "";
    valdaTeknologierEl.disabled = false;
  }
  
  // Funktion för att lägga till valda teknologier i valda teknologier-listan
  function laggTillTeknologi() {
    // Hämta vald teknologi från dropdown-listan
    const valdTeknologi = teknologierEl.value;

    // Skapa en ny option-element för vald teknologi och lägg till den i valda teknologier-listan
    const option = document.createElement("option");
    option.value = valdTeknologi;
    option.text = valdTeknologi;
    valdaTeknologierEl.appendChild(option);
  }

  // Lägg till händelsehanterare för när användaren väljer en kompetens och när en teknologi läggs till
  kompetensEl.addEventListener("change", uppdateraTeknologier);
  teknologierEl.addEventListener("change", laggTillTeknologi);
  


 



/*Preview image JavaScript */
  const fileInput = document.getElementById('fileInput');
  const previewImage = document.getElementById('previewImage');
  
  fileInput.addEventListener('change', function() {
    const reader = new FileReader();
  
    reader.addEventListener('load', function() {
      // Set the image source to the loaded data URL
      previewImage.src = reader.result;
    });
  
    if (fileInput.files[0]) {
      // Read the selected file as a data URL
      reader.readAsDataURL(fileInput.files[0]);
    }
  });
  /*Preview of image JavaScript */
  