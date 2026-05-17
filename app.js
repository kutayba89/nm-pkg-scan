// Resident database
let residents = [
    { name: "Sieverding-Seeger", floor: "EG", apartment: 1 },
    { name: "Schumann-Schulz", floor: "EG", apartment: 2 },
    { name: "M. & C. Müller", floor: "EG", apartment: 3 },
    { name: "Ehrhardt-Maitz", floor: "EG", apartment: 4 },
    { name: "Uloz-Gonzalez", floor: "EG", apartment: 5 },
    { name: "Balcu", floor: "1", apartment: 1 },
    { name: "Schreiber-Joseler", floor: "1", apartment: 2 },
    { name: "Klausmann", floor: "1", apartment: 3 },
    { name: "J. Lindemann", floor: "1", apartment: 4 },
    { name: "Boneal-Novillo", floor: "1", apartment: 5 },
    { name: "Ladimia", floor: "1", apartment: 6 },
    { name: "D. Kendra", floor: "1", apartment: 7 },
    { name: "M. Müller", floor: "1", apartment: 8 },
    { name: "Dethman", floor: "1", apartment: 9 },
    { name: "Schibel-Hebamny", floor: "1", apartment: 10 },
    { name: "Ata", floor: "2", apartment: 1 },
    { name: "Kaplan", floor: "2", apartment: 2 },
    { name: "Olru-Orudan", floor: "2", apartment: 3 },
    { name: "Sieber-Kompalla", floor: "2", apartment: 4 },
    { name: "Kohlwasser-Gude", floor: "2", apartment: 5 },
    { name: "Jacovljevic", floor: "2", apartment: 6 },
    { name: "Amaal-Rajab-Alsad", floor: "2", apartment: 7 },
    { name: "Albar-Dopf", floor: "2", apartment: 8 },
    { name: "Pambu", floor: "2", apartment: 9 },
    { name: "Michalek-Trzdi", floor: "2", apartment: 10 },
    { name: "Nguon-Mahmai", floor: "2", apartment: 11 },
    { name: "Al. Khattaob", floor: "3", apartment: 1 },
    { name: "Ogneev", floor: "3", apartment: 2 },
    { name: "Hayak", floor: "3", apartment: 3 },
    { name: "Stark", floor: "3", apartment: 4 },
    { name: "El. Gadi", floor: "3", apartment: 5 },
    { name: "Rezaee-Anslebi", floor: "3", apartment: 6 },
    { name: "Kers", floor: "3", apartment: 7 },
    { name: "Echseb-Permuda", floor: "3", apartment: 8 },
    { name: "Seid", floor: "3", apartment: 9 },
    { name: "Belkesha", floor: "3", apartment: 10 },
    { name: "Kisten", floor: "3", apartment: 11 },
    { name: "Wust", floor: "3", apartment: 12 },
    { name: "Bennu-As-Kulele", floor: "4", apartment: 1 },
    { name: "Recik", floor: "4", apartment: 2 },
    { name: "Happ-Hombre", floor: "4", apartment: 3 },
    { name: "Georgi", floor: "4", apartment: 4 },
    { name: "Gomsu", floor: "4", apartment: 5 },
    { name: "Acrus-Asisi", floor: "4", apartment: 6 },
    { name: "El-Hajjar", floor: "4", apartment: 7 },
    { name: "Labonde-Di-Georhe", floor: "4", apartment: 8 },
    { name: "Heiligl", floor: "4", apartment: 9 },
    { name: "Kurun-Rojor", floor: "4", apartment: 10 },
    { name: "Mejoi-Baiger", floor: "4", apartment: 11 },
    { name: "Di. Negra", floor: "4", apartment: 12 },
    { name: "Launch", floor: "5", apartment: 1 },
    { name: "Schweighofer-Schwarz", floor: "5", apartment: 2 },
    { name: "Igoal-Insou", floor: "5", apartment: 3 },
    { name: "Lipke-Erni. Ramli", floor: "5", apartment: 4 },
    { name: "Teichmann", floor: "5", apartment: 5 },
    { name: "Gezoeh", floor: "5", apartment: 6 },
    { name: "Musa", floor: "5", apartment: 7 },
    { name: "Daina", floor: "5", apartment: 8 },
    { name: "Zoide", floor: "5", apartment: 9 },
    { name: "Almedula-Al-mamid", floor: "5", apartment: 10 },
    { name: "Onaida", floor: "5", apartment: 11 },
    { name: "Stanar", floor: "5", apartment: 12 },
    { name: "Proth", floor: "6", apartment: 1 },
    { name: "Nolemberg-Youngel-Mainka-Kassel", floor: "6", apartment: 2 },
    { name: "Tenmon", floor: "6", apartment: 3 },
    { name: "Yurisevien", floor: "6", apartment: 4 },
    { name: "Richter", floor: "6", apartment: 5 },
    { name: "Dothersher-Ettesid-Schukzer", floor: "6", apartment: 6 },
    { name: "Rahmaz-Begamale", floor: "6", apartment: 7 },
    { name: "Rassoal-Hadia", floor: "6", apartment: 8 },
    { name: "Almasany-Mamtouk", floor: "6", apartment: 9 },
    { name: "Khmara", floor: "6", apartment: 10 },
    { name: "Vassa-Yusrib-Duenia", floor: "6", apartment: 11 },
    { name: "Nguyen-Aloudev", floor: "6", apartment: 12 }
];

const savedData = localStorage.getItem('residentsData');
if (savedData) {
    residents = JSON.parse(savedData);
}

const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const resultsDiv = document.getElementById('results');
const resultCountDiv = document.getElementById('resultCount');
const floorsGrid = document.getElementById('floorsGrid');
const editModal = document.getElementById('editModal');
const cancelBtn = document.getElementById('cancelBtn');
const saveBtn = document.getElementById('saveBtn');

let currentEditIndex = -1;
let selectedFloor = null;

function normalize(str) {
    return str.toLowerCase()
        .replace(/ä/g, 'a')
        .replace(/ö/g, 'o')
        .replace(/ü/g, 'u')
        .replace(/ß/g, 'ss')
        .trim();
}

function initFloorButtons() {
    const floors = ['6', '5', '4', '3', '2', '1', 'EG'];
    
    floorsGrid.innerHTML = floors.map(floor => {
        const count = residents.filter(r => r.floor === floor).length;
        return `
            <div class="floor-btn" data-floor="${floor}">
                <div class="floor-number">${floor}</div>
                <div class="floor-label">${floor === 'EG' ? 'Erdg.' : 'Etage'}</div>
                <div class="floor-count">${count} 👥</div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.floor-btn').forEach(btn => {
        btn.onclick = function() {
            selectFloor(this.getAttribute('data-floor'));
        };
    });
}

function selectFloor(floor) {
    selectedFloor = selectedFloor === floor ? null : floor;
    
    document.querySelectorAll('.floor-btn').forEach(btn => {
        if (btn.getAttribute('data-floor') === selectedFloor) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    if (selectedFloor) {
        searchInput.value = '';
        clearBtn.classList.remove('show');
        
        const floorResidents = residents.filter(r => r.floor === selectedFloor);
        floorResidents.sort((a, b) => a.apartment - b.apartment);
        displayResults(floorResidents);
    } else {
        resultsDiv.innerHTML = '';
        resultCountDiv.textContent = '';
    }
}

function search(query) {
    selectedFloor = null;
    document.querySelectorAll('.floor-btn').forEach(btn => btn.classList.remove('active'));

    if (!query) {
        resultsDiv.innerHTML = '';
        resultCountDiv.textContent = '';
        clearBtn.classList.remove('show');
        return;
    }

    clearBtn.classList.add('show');

    const normalizedQuery = normalize(query);
    
    let results;
    if (query.length === 1) {
        results = residents.filter(r => 
            normalize(r.name).startsWith(normalizedQuery)
        );
    } else {
        results = residents.filter(r => 
            normalize(r.name).includes(normalizedQuery)
        );
    }

    displayResults(results);
}

function displayResults(results) {
    if (results.length === 0) {
        resultsDiv.innerHTML = `
            <div class="no-results">
                <div style="font-size: 50px;">🤷‍♂️</div>
                <div style="font-size: 18px; font-weight: bold; margin-top: 10px;">Keine Ergebnisse</div>
            </div>
        `;
        resultCountDiv.textContent = '';
        return;
    }

    resultsDiv.innerHTML = results.map(r => {
        const actualIndex = residents.findIndex(resident => 
            resident.name === r.name && 
            resident.floor === r.floor && 
            resident.apartment === r.apartment
        );
        
        return `
            <div class="result-card">
                <button class="edit-btn" data-index="${actualIndex}">✏️</button>
                <div class="name">📦 ${r.name}</div>
                <div class="info-grid">
                    <div class="info-box">
                        <div class="info-label">Etage</div>
                        <div class="info-value">${r.floor}</div>
                    </div>
                    <div class="info-box">
                        <div class="info-label">Wohnung</div>
                        <div class="info-value">#${r.apartment}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.onclick = function(e) {
            e.stopPropagation();
            openEdit(parseInt(this.getAttribute('data-index')));
        };
    });

    resultCountDiv.textContent = `${results.length} ${results.length === 1 ? 'Ergebnis' : 'Ergebnisse'}`;
}

function openEdit(index) {
    currentEditIndex = index;
    const r = residents[index];
    
    document.getElementById('editName').value = r.name;
    document.getElementById('editFloor').value = r.floor;
    document.getElementById('editApartment').value = r.apartment;
    
    editModal.classList.add('show');
}

function closeModal() {
    editModal.classList.remove('show');
    currentEditIndex = -1;
}

function saveEdit() {
    if (currentEditIndex === -1) return;

    const name = document.getElementById('editName').value.trim();
    const floor = document.getElementById('editFloor').value.trim();
    const apartment = document.getElementById('editApartment').value.trim();

    if (!name || !floor || !apartment) {
        showNotification('⚠️ Bitte alle Felder ausfüllen!');
        return;
    }

    residents[currentEditIndex] = {
        name: name,
        floor: floor,
        apartment: parseInt(apartment)
    };

    localStorage.setItem('residentsData', JSON.stringify(residents));
    showNotification('✅ Gespeichert!');
    closeModal();

    initFloorButtons();
    if (selectedFloor) {
        selectFloor(selectedFloor);
    } else if (searchInput.value) {
        search(searchInput.value);
    }
}

function showNotification(message) {
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) existingNotif.remove();

    const notif = document.createElement('div');
    notif.className = 'notification';
    notif.textContent = message;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.remove(), 2500);
}

searchInput.oninput = function() {
    search(this.value);
};

clearBtn.onclick = function() {
    searchInput.value = '';
    clearBtn.classList.remove('show');
    resultsDiv.innerHTML = '';
    resultCountDiv.textContent = '';
};

cancelBtn.onclick = closeModal;
saveBtn.onclick = saveEdit;

editModal.onclick = function(e) {
    if (e.target === editModal) closeModal();
};

initFloorButtons();