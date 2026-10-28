# Pinceaux

## Choisir un pinceau

![](img/tool-brush-library.png ':size=328')

Choisissez l'outil pinceau <span data-k="tool-brush" data-k-paren></span> ou la gomme <span data-k="tool-eraser" data-k-paren></span> : la liste des pinceaux apparaît dans la **Bibliothèque d'outils**.

- Les onglets de **groupe** sont à gauche, et les pinceaux de ce groupe à côté. Appuyez sur un pinceau pour le prendre.
- Les groupes fournis : Base · Crayon · Plume · Techniques sèches · Aquarelle · Huile · Aérographe · Mélange · Texture · Décoration.
- Faites glisser un pinceau pour changer l'ordre. Faites-le glisser sur l'onglet d'un autre groupe et attendez un instant : ce groupe s'ouvre et vous pouvez y déplacer le pinceau.
- Chaque groupe et chaque pinceau peut avoir un raccourci (séparément pour l'outil pinceau et la gomme). → [Raccourcis](/fr/shortcuts)

## Taille et opacité

Elles se règlent sur la **pilule verticale au bord gauche** du canevas.

- La puce du haut : **Modes de fusion** (Normal · Arrière · Effacer · Obscurcir · Produit …).
- Barres **Taille** (0.1–2000 px) et **Opacité** : faites glisser pour changer. ± et la molette de la souris avancent d'un cran à la fois, selon les crans de [Taille de l'outil](/fr/brushes?id=taille-de-loutil).
- Appuyez sur le **bouton crayon** (Saisir la valeur) à côté du nombre : un pavé numérique s'ouvre. La première touche remplace l'ancienne valeur ; validez avec ✓ ou <kbd class="k-pc">Enter</kbd><kbd class="k-mac">↩</kbd>, et sortez avec <kbd class="k-pc">Esc</kbd><kbd class="k-mac">⎋</kbd>.
- Le bouton courbe sous une barre règle la **Réponse** de cette valeur (Pression · Inclinaison · Vitesse · Aléatoire, Min · Max).
- Pour déplacer la pilule dans le bandeau du haut, utilisez **Paramètres** (⚙) → **Panneaux** → **Valeurs du pinceau dans le bandeau du haut**.

### Taille de l'outil

![](img/panel-tool-size.png ':size=328')

Le panneau **Taille de l'outil** de la bande de droite est une étagère de 40 tailles d'usage courant (0.7–2000). Appuyez sur l'une d'elles pour prendre cette taille. La barre de taille s'aligne aussi sur ces valeurs quand vous la faites glisser.

## Réglages du pinceau

![](img/tool-brush-settings.png ':size=328')

Le panneau **Réglages de l'outil** contient toutes les valeurs du pinceau courant. Le trait d'aperçu en haut change quand vous changez les valeurs. Les champs qui ne concernent pas ce pinceau sont masqués.

| Groupe | Principaux éléments |
|---|---|
| **Encre** | Débit (+pression) |
| **Pointe** | Forme de la pointe (on peut ajouter une pointe depuis une image) · Méthode de répétition · Dureté · Anticrénelage · Rondeur · Angle (Sens du trait · Sens du stylet · Rotation du stylet · Aléatoire) · Espacement |
| **Mélange** | Mélanger au fond / Flouter · Quantité de peinture · Densité de peinture · Étirement de la couleur |
| **Dispersion** | Dispersion % · Nombre (1–16) · Deux axes |
| **Texture** | Pointe double (Échelle · Densité · Dual blend) · Texture (Échelle · Densité · Produit/Hauteur · Invert · Brightness · Contrast) |
| **Correction** | Angles vifs · Stabilisateur (0–100, Selon la vitesse) · Lissage après tracé (0–100, ajusté selon la vitesse et le zoom) · Courbe de Bézier |

Chaque pinceau garde les valeurs que vous changez, et elles le suivent quand vous exportez le pinceau.

## Créer ses propres pinceaux

- **＋** (Enregistrer les réglages comme préréglage) en haut de la liste — enregistre les valeurs courantes comme nouveau pinceau.
- Le menu **⋯** : Nouveau groupe · Renommer le groupe · Supprimer le groupe · Renommer le pinceau sélectionné · Supprimer · Exporter la brosse · Exporter le groupe · Réinitialiser la bibliothèque. L'affichage (Icône de pointe · Aperçu du tracé · Nom) se change ici aussi.
- Utilisez **Enregistrer comme pointe** dans le Tampon de l'[outil découpe](/fr/tools?id=découpe) : le dessin que vous tenez devient une pointe de pinceau.

## Importer des pinceaux d'autres applications

Choisissez les fichiers avec le bouton **Importer des pinceaux**, ou déposez-les sur la fenêtre.

| Format | Application |
|---|---|
| `.abr` | Photoshop (versions 6 · 7 · 10. Les très anciennes 1 et 2 ne sont pas lisibles) |
| `.sut` · `.sutg` | CLIP STUDIO PAINT |
| `.anibrush` | Anicel (un pinceau exporté) |

## Pression du stylet

- La réponse de chaque pinceau se règle avec le bouton courbe ci-dessus ; la **courbe de pression pour toute l'application** se règle dans [Préférences](/fr/preferences) → **Saisie** → **Réponse à la pression**.
- Si la pression se comporte mal sous Windows, essayez de changer le **Service tablette** de Windows (Standard / Wintab) au même endroit.
