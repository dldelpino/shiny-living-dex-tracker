document.getElementById('saveDataBtn').addEventListener('click', saveData);
document.getElementById('loadDataBtn').addEventListener('click', () => document.getElementById('loadDataInput').click());
document.getElementById('loadDataInput').addEventListener('change', loadData);

function saveData() {
    const tableData = [];
    const rows = document.querySelectorAll('#pokemonTableBody tr');
    rows.forEach(row => {
        const rowData = {
            checkbox: row.querySelector('input[type="checkbox"]').checked,
            location: {
                img: getRelativePath(row.querySelector('.dropdown.locations .dropdown-display-img').src),
                text: row.querySelector('.dropdown.locations .dropdown-display-text').textContent
            },
            origin: {
                img: getRelativePath(row.querySelector('.dropdown.origins .dropdown-display-img').src),
                text: row.querySelector('.dropdown.origins .dropdown-display-text').textContent
            },
            method: {
                img: "", // Always set to an empty string
                text: row.querySelector('.dropdown.methods .dropdown-display-text').textContent
            },
            ball: {
                img: getRelativePath(row.querySelector('.dropdown.balls .dropdown-display-img').src),
                text: row.querySelector('.dropdown.balls .dropdown-display-text').textContent
            },
            date: row.querySelector('input[type="date"]').value
        };
        tableData.push(rowData);
    });

    const blob = new Blob([JSON.stringify(tableData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tableData.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function loadData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const tableData = JSON.parse(e.target.result);
        const rows = document.querySelectorAll('#pokemonTableBody tr');
        rows.forEach((row, index) => {
            const rowData = tableData[index];
            row.querySelector('input[type="checkbox"]').checked = rowData.checkbox;
            updateDropdown(row.querySelector('.dropdown.locations'), rowData.location.img, rowData.location.text);
            updateDropdown(row.querySelector('.dropdown.origins'), rowData.origin.img, rowData.origin.text);
            updateDropdown(row.querySelector('.dropdown.methods'), rowData.method.img, rowData.method.text);
            updateDropdown(row.querySelector('.dropdown.balls'), rowData.ball.img, rowData.ball.text);
            row.querySelector('input[type="date"]').value = rowData.date;
        });
    };
    reader.readAsText(file);
}

function updateDropdown(dropdown, imgSrc, text) {
    const displayImg = dropdown.querySelector('.dropdown-display-img');
    const displayText = dropdown.querySelector('.dropdown-display-text');
    if (imgSrc) {
        displayImg.src = imgSrc;
        displayImg.classList.remove('hidden');
        displayImg.style.visibility = 'visible';
    } else {
        displayImg.src = '';
        displayImg.classList.add('hidden');
        displayImg.style.visibility = 'hidden';
    }
    displayText.textContent = text;
    displayText.style.visibility = text ? 'visible' : 'hidden';
}

function getRelativePath(fullPath) {
    const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
    const relativePath = fullPath.replace(baseUrl + '/', '');
    return (relativePath === 'images/empty.png' || relativePath.includes('index.html')) ? '' : relativePath;
}