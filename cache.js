const CACHE = {};

// Fonction pour récupérer une image déjà mise en cache
function getCachedImage(code) {
    return CACHE[code] || null;
}

// Fonction pour stocker une image en cache
function cacheImage(code, url) {
    CACHE[code] = url;
}

// Exportation des fonctions
module.exports = { getCachedImage, cacheImage };