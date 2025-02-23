const { exec } = require("child_process");

// Vérifie si un compilateur LaTeX est disponible en local
function setupOfflineRenderer() {
    exec("latex -version", (error, stdout, stderr) => {
        if (error) {
            console.warn("Aucun compilateur LaTeX local trouvé. Mode hors ligne désactivé.");
        } else {
            console.log("Compilateur LaTeX trouvé. Mode hors ligne activé.");
        }
    });
}

// Exportation de la fonction
module.exports = { setupOfflineRenderer };