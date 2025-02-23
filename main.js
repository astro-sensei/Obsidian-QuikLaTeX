// Importation des modules nécessaires
const { renderLatex, renderTikz } = require("./renderer");
const { loadSettings, saveSettings } = require("./settings");
const { setupOfflineRenderer } = require("./offline");

class QuickLatexTikzPlugin {
    constructor(app) {
        this.app = app; // Référence à l'application Obsidian
        this.settings = {}; // Stockage des paramètres du plugin
    }

    async onload() {
        console.log("QuickLaTeX & TikZ Plugin Loaded");

        // Charger les paramètres depuis le stockage local
        this.settings = await loadSettings();

        // Traitement des blocs de code LaTeX
        this.app.registerMarkdownCodeBlockProcessor("latex", async (source, el, ctx) => {
            const imgUrl = await renderLatex(source, this.settings);
            if (imgUrl) {
                el.innerHTML = `<img src="${imgUrl}" alt="LaTeX Render">`;
            }
        });

        // Traitement des blocs de code TikZ
        this.app.registerMarkdownCodeBlockProcessor("tikz", async (source, el, ctx) => {
            const imgUrl = await renderTikz(source, this.settings);
            if (imgUrl) {
                el.innerHTML = `<img src="${imgUrl}" alt="TikZ Render">`;
            }
        });

        // Vérifier la disponibilité du mode hors ligne
        setupOfflineRenderer();
    }

    async onunload() {
        console.log("QuickLaTeX & TikZ Plugin Unloaded");
    }
}

// Exportation du plugin pour Obsidian
module.exports = QuickLatexTikzPlugin;