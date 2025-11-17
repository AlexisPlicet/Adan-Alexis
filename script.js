// Cambia el idioma cuando el usuario hace clic en una bandera
function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    loadLanguage(lang);
}

// Carga el archivo JSON según el idioma
async function loadLanguage(lang) {
    try {
        const res = await fetch(`./i18n/${lang}.json`);
        const data = await res.json();

        // Recorre todos los elementos con data-i18n y les pone el texto del JSON
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (data[key]) {
                el.innerHTML = data[key];
            } else {
                console.warn(`⚠️ Falta la clave de traducción: ${key}`);
            }
        });
    } catch (err) {
        console.error("❌ Error cargando idioma:", err);
    }
}

// Idioma por defecto (si hay uno guardado en localStorage lo usa, si no, ES)
const savedLang = localStorage.getItem("lang") || "es";
loadLanguage(savedLang);
