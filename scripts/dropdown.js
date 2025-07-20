document.querySelectorAll('.dropdown').forEach((dropdown) => {
    const arrow = dropdown.querySelector('.dropdown-arrow');
    const menu = dropdown.querySelector('.dropdown-menu');
    const displayImg = dropdown.querySelector('.dropdown-display-img');
    const displayText = dropdown.querySelector('.dropdown-display-text');
  
    const clearButton = dropdown.querySelector('.clear-button');
    clearButton.addEventListener('click', (event) => {
        event.stopPropagation();
        displayImg.src = '';
        displayText.textContent = '';
        displayImg.style.visibility = 'hidden';
        displayText.style.visibility = 'hidden';
    });
  
    arrow.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el evento se propague y cierre el menú inmediatamente
        dropdown.classList.toggle('open'); // Añade o elimina la clase 'open' a 'dropdown'
    });
  
    menu.querySelectorAll('a').forEach((option) => {
        option.addEventListener('click', (event) => {
            event.preventDefault();
  
            const imgPath = option.getAttribute('data-img');
            const text = option.getAttribute('data-text');
  
            // Actualizar la imagen y el texto
            if (imgPath) {
                displayImg.src = imgPath;
                displayImg.classList.remove('hidden');
                displayImg.style.visibility = 'visible';
            } else {
                displayImg.classList.add('hidden');
            }
  
            displayText.textContent = text;
            displayText.style.visibility = 'visible';
  
            dropdown.classList.remove('open'); // Cerrar el menú desplegable
        });
    });
});
  
document.addEventListener('click', (event) => {
    document.querySelectorAll('.dropdown').forEach((dropdown) => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});