const QUICKLATEX_URL = "https://quicklatex.com/latex3.f"; // URL de l'API QuickLaTeX

// Fonction pour rendre du LaTeX via QuickLaTeX
async function renderLatex(latexCode, settings) {
    const formData = new URLSearchParams();
    formData.append("formula", latexCode);
    formData.append("fsize", settings.fontSize);
    formData.append("fcolor", settings.fontColor);
    formData.append("mode", "0"); // Mode standard
    formData.append("out", settings.outputFormat === "svg" ? "1" : "0"); // Choix du format

    try {
        const response = await fetch(QUICKLATEX_URL, {
            method: "POST",
            body: formData,
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        });

        const result = await response.text();
        const imageUrl = result.match(/https:\/\/.*?(\.png|\.svg)/);
        return imageUrl ? imageUrl[0] : "";
    } catch (error) {
        console.error("Erreur QuickLaTeX :", error);
        return "";
    }
}

// Fonction pour rendre du TikZ via TikZJax
async function renderTikz(tikzCode, settings) {
    const tikzjaxScript = `
        <script type="text/tikz">
            ${tikzCode}
        </script>
    `;
    return `data:image/svg+xml;base64,${btoa(tikzjaxScript)}`;
}

// Exportation des fonctions
module.exports = { renderLatex, renderTikz };