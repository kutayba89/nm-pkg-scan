// Resident database
// Each entry contains a unique apartment number for the floor.
// The numbering was corrected so there are no duplicate apartment values.
let residents = [
  // EG
  { name: "Tchouegnapnou", floor: "EG", apartment: 1 },
  { name: "Kalashyan/Broyan", floor: "EG", apartment: 2 },
  { name: "M. & R. Müller", floor: "EG", apartment: 3 },
  { name: "Thomas Müller", floor: "EG", apartment: 4 },
  { name: "Vasic/Dordevic", floor: "EG", apartment: 5 },

  // 1st Floor (bottom to top)
  { name: "Kleinert", floor: "1", apartment: 6 },
  { name: "Latifovic", floor: "1", apartment: 7 },
  { name: "M. Müller", floor: "1", apartment: 8 },
  { name: "Ziehm", floor: "1", apartment: 9 },
  { name: "Schieferdecker", floor: "1", apartment: 10 },
  { name: "Ismail Rezk", floor: "1", apartment: 11 },
  { name: "Di Meglio", floor: "1", apartment: 12 },
  { name: "Tahal/Gökyurt", floor: "1", apartment: 13 },
  { name: "Balko", floor: "1", apartment: 14 },
  { name: "J. Hussein", floor: "1", apartment: 15 },
  { name: "Darwich Fetahu/Nezirov", floor: "1", apartment: 16 },
  { name: "Mahmod", floor: "1", apartment: 17 },

  // 2nd Floor
  { name: "Cretu/Iacoban", floor: "2", apartment: 18 },
  { name: "Jasarevic", floor: "2", apartment: 19 },
  { name: "Aukal/Dourji", floor: "2", apartment: 20 },
  { name: "Njuki/Mithea", floor: "2", apartment: 21 },
  { name: "Kaplan", floor: "2", apartment: 22 },
  { name: "Kudravcew/Sayad Sotoudeh", floor: "2", apartment: 23 },
  { name: "Aharkova", floor: "2", apartment: 24 },
  { name: "_ME_", floor: "2", apartment: 25 },
  { name: "Ali", floor: "2", apartment: 26 },
  { name: "Seidel-Martinke", floor: "2", apartment: 27 },
  { name: "Aswad/Boteh/Alzool", floor: "2", apartment: 28 },
  { name: "Pambu", floor: "2", apartment: 29 },

  // 3rd Floor
  { name: "Hayati", floor: "3", apartment: 30 },
  { name: "Rezaie/Habibi", floor: "3", apartment: 31 },
  { name: "Saad", floor: "3", apartment: 32 },
  { name: "Wüst", floor: "3", apartment: 33 },
  { name: "Ogneva", floor: "3", apartment: 34 },
  { name: "El Gadi", floor: "3", apartment: 35 },
  { name: "Eichel/Pitschinetz", floor: "3", apartment: 36 },
  { name: "Keskin", floor: "3", apartment: 37 },
  { name: "Al Khaffaja", floor: "3", apartment: 38 },
  { name: "Störk", floor: "3", apartment: 39 },
  { name: "Kars", floor: "3", apartment: 40 },
  { name: "Belkahla", floor: "3", apartment: 41 },

  // 4th Floor
  { name: "Haziri/Heinze", floor: "4", apartment: 42 },
  { name: "Azimi/Asisi", floor: "4", apartment: 43 },
  { name: "Heibel", floor: "4", apartment: 44 },
  { name: "Dr. Nasra", floor: "4", apartment: 45 },
  { name: "Reck", floor: "4", apartment: 46 },
  { name: "Grosu", floor: "4", apartment: 47 },
  { name: "Lazaridi/Gritsenko", floor: "4", apartment: 48 },
  { name: "Metin/Baser", floor: "4", apartment: 49 },
  { name: "Lorenzo", floor: "4", apartment: 50 },
  { name: "Dema-Ala/Kulolli", floor: "4", apartment: 51 },
  { name: "El-Hajjie", floor: "4", apartment: 52 },
  { name: "Kuru/Polat", floor: "4", apartment: 53 },

  // 5th Floor (apartment numbering continues sequentially)
  { name: "Ignat/Pisiu", floor: "5", apartment: 54 },
  { name: "Gezen", floor: "5", apartment: 55 },
  { name: "Zoske", floor: "5", apartment: 56 },
  { name: "Stanar", floor: "5", apartment: 57 },
  { name: "Dimcheva/Sashev", floor: "5", apartment: 58 },
  { name: "Tietzmann", floor: "5", apartment: 59 },
  { name: "Gatina", floor: "5", apartment: 60 },
  { name: "Obeida", floor: "5", apartment: 61 },
  { name: "Laurich", floor: "5", apartment: 62 },
  { name: "Lipke/Binti Ramli", floor: "5", apartment: 63 },
  { name: "Musa", floor: "5", apartment: 64 },
  { name: "Almoflahi/Al-Hamidi", floor: "5", apartment: 65 },

  // 6th Floor
  { name: "Tezcan", floor: "6", apartment: 66 },
  { name: "Ocherkhadzhieva/Sajdulaev", floor: "6", apartment: 67 },
  { name: "Almaradni/Mamlouk", floor: "6", apartment: 68 },
  { name: "Nguyen/Valdez", floor: "6", apartment: 69 },
  { name: "Ndoumbeng Younya/Manille Kassai", floor: "6", apartment: 70 },
  { name: "Richter", floor: "6", apartment: 71 },
  { name: "Rasoul/Hadla", floor: "6", apartment: 72 },
  { name: "Yossa Youmbi/Ouemba", floor: "6", apartment: 73 },
  { name: "Piroth", floor: "6", apartment: 74 },
  { name: "Yurtseven", floor: "6", apartment: 75 },
  { name: "Rahimic/Beganovic", floor: "6", apartment: 76 },
  { name: "Khmara", floor: "6", apartment: 77 }
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
