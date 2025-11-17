function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    loadLanguage(lang);
}

async function loadLanguage(lang) {
    try {
        // Ruta FIJA para GitHub Pages con subcarpeta
        const base = `${window.location.origin}/Adan-Alexis/i18n/${lang}.json`;

        const res = await fetch(base);
        const data = await res.json();

        // Aplica las traducciones
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (data[key]) el.innerHTML = data[key];
        });

    } catch (err) {
        console.error("Error cargando idioma:", err);
    }
}

// Idioma inicial
loadLanguage(localStorage.getItem("lang") || "es");
