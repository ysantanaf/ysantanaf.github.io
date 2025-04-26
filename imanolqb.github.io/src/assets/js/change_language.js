// Language change functionality
const langButtons = document.querySelectorAll('.lang-btn');

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

const changeLanguage = (lang) => {
    localStorage.setItem('selectedLang', lang); // Guarda el idioma
    fetch(`./translations/translations_${lang}.json`)
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (data[key]) {
                    element.innerHTML = data[key];
                }
            });
        })
        .catch(error => console.error('Error loading language file:', error));
};

window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    changeLanguage(savedLang);
});
