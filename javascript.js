

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

submitForm();
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

function submitForm() {
    const form = document.getElementById("myForm");
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

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
  

/*
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
  }


/*
  function submitForm() {
    var form = document.getElementById("myForm");
    
    var name = form.elements["firstName"].value;
    if (name == "") {
      document.getElementById("nameError").innerHTML = "Förnamn måste fyllas i";
      return false;
    } else {
      document.getElementById("nameError").innerHTML = "";
    }
    
    var surName = form.elements["surName"].value;
    if (surName == "") {
      document.getElementById("lastNameError").innerHTML = "Efternamn måste fyllas i";
      return false;
    } else {
      document.getElementById("lastNameError").innerHTML = "";
    }
    
    var age = form.elements["age"].value;
    if (age == "") {
      document.getElementById("ageError").innerHTML = "Födelsedatum måste fyllas i";
      return false;
    } else {
      document.getElementById("ageError").innerHTML = "";
    }
    
    var email = form.elements["email"].value;
    if (email == "") {
      document.getElementById("emailError").innerHTML = "Emailaddress måste fyllas i";
      return false;
    } else {
      document.getElementById("emailError").innerHTML = "";
    }
    
    var phoneNumber = form.elements["phoneNumber"].value;
    if (phoneNumber == "") {
      document.getElementById("phoneNumberError").innerHTML = "Telefonnummer måste fyllas i";
      return false;
    } else {
      document.getElementById("phoneNumberError").innerHTML = "";
    }
    
    var education = form.elements["education"].value;
    if (education == "") {
      document.getElementById("educationError").innerHTML = "Utbildning måste fyllas i";
      return false;
    } else {
      document.getElementById("educationError").innerHTML = "";
    }
    
    var nationality = form.elements["nationality"].value;
    if (nationality == "") {
      document.getElementById("nationalityError").innerHTML = "Nationalitet måste fyllas i";
      return false;
    } else {
      document.getElementById("nationalityError").innerHTML = "";
    }
    
    var country = form.elements["country"].value;
    if (country == "") {
      document.getElementById("countryError").innerHTML = "Land måste fyllas i";
      return false;
    } else {
      document.getElementById("countryError").innerHTML = "";
    }
    
    var driversLicense = form.elements["driversLicense"].value;
    if (driversLicense == "") {
      document.getElementById("driversLicenseError").innerHTML = "En kopia av körkortet måste laddas upp";
      return false;
    } else {
      document.getElementById("driversLicenseError").innerHTML = "";
    }
    
    var kompetens = form.elements["kompetens"].value;
    if (kompetens == "") {
      document.getElementById("kompetensError").innerHTML = "En kompetens måste väljas";
      return false;
    } else {
      document.getElementById("kompetensError").innerHTML = "";
    }
    
    var teknologier = form.elements["teknologier"].value;
    if (teknologier == "") {
      document.getElementById("teknologierError").innerHTML = "Minst en teknologi måste väljas";
      return false;
    } else {
      document.getElementById("teknologierError").innerHTML = "";
    }
    
    var language = form.elements["language"].value;
    if (language == "") {
      document.getElementById("languageError").innerHTML = "Språk måste fyllas";
    } else {
        document.getElementById("languageError").innerHTML = "";
      }
      
    }
      // All form fields are valid, so submit the form
      form.submit();
      
      return true;*/