// const BASE_URL = 'http://localhost:7789';
// const FILTERS_TRANSLATIONS = {
//     age: 'amzius',
//     type: 'gyvunas',
//     breed: 'veisle',
//     state: 'ar iesko namu',
//     features: 'charakterio bruozai',
//     vaccinated: 'skiepyta(s)'
// };

// const VALUE_TRANSLATIONS = {
//     true: 'taip',
//     false: 'ne'
// };

// const getData = (url) => {
//     return fetch(BASE_URL + url).then(response => response.json())
// };


// const addPetsNumberInHTML = (petsNumber) => {
//     document.getElementById('petsCount').innerHTML = petsNumber;
// };

// const generatePetsHTML = (pets) => {
//     return pets.map(pet => `
//       <div class="col-5">
//           <div class="card">
//               <div class="card-body">
//                     <p class="card-text"><img class="pet-img" src="https://cdn2.thecatapi.com/images/${pet.id}.jpg"></p>
//                   <h5 class="card-title">${pet.name}</h5>
//                   <p class="card-text">Metai: ${pet.age}</p>
//                   <p class="card-text">Veislė: ${pet.breed}</p>
//                   <p class="card-text">${pet.type}, ${pet.vaccinated ? "skiepyta(s)" : "neskiepyta(s)"} - ${pet.state}</p>
//                   <p class="card-text">
//                       ${pet.features.map(feature => `<span class="badge text-bg-primary me-1">
//                         ${feature}</span>`).join(' ')}
//                   </p>
//                   <p class="card-text">${pet.description}</p>
//           </div>
//         </div>
//       </div>
//     `).join('');
// };


// const generateFiltersHTML = (filters) => {
//     let filtersHtml = '';
//     for (let typeFilter in filters) {
//         filtersHtml += `
//                 <div class="col-md-2">
//                     <label for="${typeFilter}" class="form-label">${FILTERS_TRANSLATIONS[typeFilter]}:</label>
//                     <select class="form-select" id="${typeFilter}">
//                         <option value="visi" selected>Visi</option>
//                         ${filters[typeFilter].map(f => `<option value="${f}">
//                             ${f === true || f === false ? VALUE_TRANSLATIONS[f] : f}
//                         </option>`).join('')}
//                     </select>
//                 </div>
//             `;
//     };
//     return filtersHtml;
// };

// window.addEventListener('DOMContentLoaded', async () => {
//     const filters = await getData('/pets/filters-list');
//     document.querySelector('.filter-items').innerHTML = generateFiltersHTML(filters);

//     const pets = await getData('/pets');
//     addPetsNumberInHTML(pets.length);
//     document.querySelector('.cards-list').innerHTML = generatePetsHTML(pets);
// });


// document.getElementById('filter-button').addEventListener('click', async () => {
//     let filterParams = [];

//     for (let filterKey in FILTERS_TRANSLATIONS) {
//         let filterValue = document.getElementById(filterKey).value;

//         if (filterValue !== 'visi') {
//             filterParams.push(
//                 `${filterKey}=${filterValue.split(' ').join('_')}`);
//         }

//     }
//     let readyFilter = filterParams.length ? `?${filterParams.join('&')}` : null;

//     let url = '/pets';
//     let pets = null;
//     if (readyFilter) {
//         pets = await getData(`${url}/filtered${readyFilter}`);
//     } else {
//         pets = await getData(url);
//     }
//     addPetsNumberInHTML(pets.length);
//     document.querySelector('.cards-list').innerHTML = generatePetsHTML(pets);

// });


// document.getElementById('clear-button').addEventListener('click', async () => {

//     for (let filterKey in FILTERS_TRANSLATIONS) {
//         let filterElement = document.getElementById(filterKey);
//         if (filterElement.tagName === 'SELECT') {
//             filterElement.selectedIndex = 0;
//         } else {
//             filterElement.value = '';
//         }
//     }

//     const pets = await getData("/pets");
//     document.querySelector(".cards-list").innerHTML = generatePetsHTML(pets);

//     addPetsNumberInHTML(pets.length);
// });

// // 1. metoda - onClick clear mygtukui
// //     a. clear mygtukas - EXTRA
// //         a. atsiranda kai ijungtas filtras
// //         b. filtras ijungtras - enabled , filtras isjungtas disabled
// // 2. paspadus mygtuka
// //     a. iskviestis API ir gauti visus gyvunus
// //     b. visu filtru reiksme turi buti 'visi'


// // Isvesti pranesima, jeigu gyvunu saras yra tuscias

// // true/false reiksmes filtre pakeisti i TAIP/NE


// // show filter mygtukas
// // atsiranda https://getbootstrap.com/docs/5.3/components/collapse/#horizontal
// // arba dingsta

// scripts.js

const BASE_URL = 'http://localhost:7789';

// Used for generating filter labels in the UI
const FILTERS_TRANSLATIONS = {
    age: 'amzius',
    type: 'gyvunas',
    breed: 'veisle',
    state: 'ar iesko namu',
    features: 'charakterio bruozai',
    vaccinated: 'skiepyta(s)'
};

// Used to translate boolean true/false into “taip”/“ne”
const VALUE_TRANSLATIONS = {
    true: 'taip',
    false: 'ne'
};

// Helper to fetch JSON from API
const getData = (url) => {
    return fetch(BASE_URL + url).then(response => response.json());
};

// Update the pets-count display
const addPetsNumberInHTML = (count) => {
    document.getElementById('petsCount').innerHTML = count;
};

// Generate HTML for all fetched pets
const generatePetsHTML = (pets) => {
    return pets.map(pet => `
        <div class="col-5">
            <div class="card">
                <div class="card-body">
                    <p class="card-text">
                        <img class="pet-img" 
                             src="https://cdn2.thecatapi.com/images/${pet.id}.jpg">
                    </p>
                    <h5 class="card-title">${pet.name}</h5>
                    <p class="card-text">Metai: ${pet.age}</p>
                    <p class="card-text">Veislė: ${pet.breed}</p>
                    <p class="card-text">
                        ${pet.type},
                        ${pet.vaccinated ? 'skiepyta(s)' : 'neskiepyta(s)'} 
                        - ${pet.state}
                    </p>
                    <p class="card-text">
                        ${pet.features.map(feature => `
                            <span class="badge text-bg-primary me-1">
                                ${feature}
                            </span>
                        `).join(' ')}
                    </p>
                    <p class="card-text">${pet.description}</p>
                </div>
            </div>
        </div>
    `).join('');
};

// Insert the pet cards or a “no pets found” message if empty
const addPetsToDOM = (pets) => {
    const cardsList = document.querySelector('.cards-list');

    if (pets.length === 0) {
        cardsList.innerHTML = `
            <div class="alert alert-warning" role="alert">
                Gyvūnų nerasta
            </div>
        `;
    } else {
        cardsList.innerHTML = generatePetsHTML(pets);
    }
};

// Generate the filters dropdown UI
const generateFiltersHTML = (filters) => {
    let filtersHtml = '';
    for (let typeFilter in filters) {
        filtersHtml += `
            <div class="col-md-2">
                <label for="${typeFilter}" class="form-label">
                    ${FILTERS_TRANSLATIONS[typeFilter]}:
                </label>
                <select class="form-select" id="${typeFilter}">
                    <option value="visi" selected>Visi</option>
                    ${filters[typeFilter].map(f => `
                        <option value="${f}">
                            ${f === true || f === false
                ? VALUE_TRANSLATIONS[f]
                : f}
                        </option>
                    `).join('')}
                </select>
            </div>
        `;
    }
    return filtersHtml;
};

// Enable/disable the Clear button depending on if any filter is active
function updateClearButtonState() {
    const filterSelects = document.querySelectorAll('.filter-items .form-select');
    const clearButton = document.getElementById('clear-button');
    let anyFilterActive = false;

    filterSelects.forEach(select => {
        if (select.value !== 'visi') {
            anyFilterActive = true;
        }
    });

    clearButton.disabled = !anyFilterActive;
}

//
// MAIN
//
window.addEventListener('DOMContentLoaded', async () => {
    // 1) Fetch filter data and render filter dropdowns
    const filters = await getData('/pets/filters-list');
    document.querySelector('.filter-items').innerHTML = generateFiltersHTML(filters);

    // 2) Initially fetch and display the pet list
    const pets = await getData('/pets');
    addPetsNumberInHTML(pets.length);
    addPetsToDOM(pets);

    // 3) Listen to changes on each filter select to update Clear button state
    const filterSelects = document.querySelectorAll('.filter-items .form-select');
    filterSelects.forEach(select => {
        select.addEventListener('change', updateClearButtonState);
    });

    // Check if Clear button should be disabled (no filters set) on load
    updateClearButtonState();
});

// Listen to “Filtruoti” button
document.getElementById('filter-button').addEventListener('click', async () => {
    let filterParams = [];

    // Build query parameters based on filters
    for (let filterKey in FILTERS_TRANSLATIONS) {
        let filterValue = document.getElementById(filterKey).value;
        if (filterValue !== 'visi') {
            // Replace spaces with underscores to match your backend
            filterParams.push(`${filterKey}=${filterValue.split(' ').join('_')}`);
        }
    }

    let url = '/pets';
    let pets = null;
    if (filterParams.length) {
        let readyFilter = `?${filterParams.join('&')}`;
        pets = await getData(`${url}/filtered${readyFilter}`);
    } else {
        pets = await getData(url);
    }

    addPetsNumberInHTML(pets.length);
    addPetsToDOM(pets);
});

// Listen to “Clear” button
document.getElementById('clear-button').addEventListener('click', async () => {
    // Reset each filter dropdown to 'visi'
    for (let filterKey in FILTERS_TRANSLATIONS) {
        let filterElement = document.getElementById(filterKey);
        if (filterElement.tagName === 'SELECT') {
            filterElement.selectedIndex = 0;
        }
    }

    // Re-fetch all pets (unfiltered)
    const pets = await getData('/pets');
    addPetsNumberInHTML(pets.length);
    addPetsToDOM(pets);

    // Disable the Clear button now that everything is reset
    updateClearButtonState();
});
