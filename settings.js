const DEFAULT_SETTINGS = {
    fontSize: "12px",
    fontColor: "000000",
    outputFormat: "svg",
};

// Fonction pour charger les paramètres
async function loadSettings() {
    try {
        const data = localStorage.getItem("obsidian-quicklatex-tikz-settings");
        return data ? JSON.parse(data) : DEFAULT_SETTINGS;
    } catch (error) {
        console.error("Erreur lors du chargement des paramètres :", error);
        return DEFAULT_SETTINGS;
    }
}

// Fonction pour sauvegarder les paramètres
async function saveSettings(settings) {
    try {
        localStorage.setItem("obsidian-quicklatex-tikz-settings", JSON.stringify(settings));
    } catch (error) {
        console.error("Erreur lors de la sauvegarde des paramètres :", error);
    }
}

// Exportation des fonctions
module.exports = { loadSettings, saveSettings, DEFAULT_SETTINGS };