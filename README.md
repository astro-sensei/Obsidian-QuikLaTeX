# **Obsidian QuickLaTeX & TikZ Plugin**

📖 **Affiche des formules LaTeX et des graphiques TikZ directement dans Obsidian !**

## 🚀 **Fonctionnalités**
✅ **Rendu LaTeX avec QuickLaTeX**
✅ **Support des graphiques TikZ avec TikZJax**
✅ **Mode hors ligne si un compilateur LaTeX est détecté**
✅ **Cache local des images pour des performances optimales**
✅ **Personnalisation des paramètres (taille, couleur, format d’image)**

---

## 📥 **Installation**

### 1️⃣ **Manuelle**  
1. **Télécharge le code source** ou clone le dépôt :
   ```sh
   git clone https://github.com/ton-github/obsidian-quicklatex-tikz.git
   ```
2. **Copie le dossier du plugin** dans le répertoire d'Obsidian :
   ```
   ~/.obsidian/plugins/obsidian-quicklatex-tikz/
   ```
   (Sous **Windows**, c'est dans `%APPDATA%\Obsidian\plugins\`.)
3. **Active le plugin** dans Obsidian :
   - Ouvre les **Paramètres → Core Plugins**
   - Va dans **Community Plugins → Activer "QuickLaTeX & TikZ"**

### 2️⃣ **Via le store Obsidian (à venir)**
➡️ Bientôt disponible sur le store officiel des plugins d’Obsidian.

---

## 🛠 **Utilisation**

Dans une note Obsidian, écris un bloc de code **LaTeX** :

````markdown
```latex
E = mc^2
```
````

Ou un **graphique TikZ** :  

````markdown
```tikz
\draw (0,0) circle (1cm);
```
````

📌 **L’image générée apparaîtra automatiquement !**

---

## ⚙️ **Personnalisation**

Tu peux modifier les paramètres du plugin en éditant le fichier de configuration dans Obsidian.

- **Taille de la police** (`fontSize`)
- **Couleur du texte** (`fontColor`)
- **Format d’image** (`outputFormat`) : PNG ou SVG

---

## 📦 **Structure du projet**

```
obsidian-quicklatex-tikz/
│── main.js            # Entrée principale du plugin
│── renderer.js        # Gestion du rendu (QuickLaTeX et TikZJax)
│── settings.js        # Gestion des paramètres utilisateurs
│── cache.js           # Gestion du cache des images générées
│── offline.js         # Gestion du mode hors ligne
│── manifest.json      # Métadonnées du plugin
│── styles.css         # Styles optionnels pour le rendu
└── README.md          # Documentation
```

---

## 🖥 **Mode hors ligne**
Si un **compilateur LaTeX** est installé sur ton ordinateur, le plugin peut fonctionner **sans connexion Internet**.

ℹ️ **Vérification automatique au démarrage** :
- ✅ Si `latex -version` est trouvé, le mode hors ligne est activé.
- ❌ Sinon, QuickLaTeX sera utilisé pour le rendu en ligne.

---

## 🤝 **Contribuer**

Tu veux améliorer ce plugin ? Clone le projet et soumets une PR !

```sh
git clone https://github.com/ton-github/obsidian-quicklatex-tikz.git
cd obsidian-quicklatex-tikz
code .
```

📜 **Todo List** :
- [ ] Ajouter une **interface graphique** pour la configuration
- [ ] Intégrer un **rendu MathJax en option**
- [ ] Améliorer la **gestion du cache**

---

## 📄 **Licence**

Ce projet est sous licence **MIT**. Utilisation libre et open-source !
