# Outils

La bande verticale à gauche du canevas.

| | Bouton | Touche |
|---|---|---|
| ![](img/icon-undo-button.png ':class=icon :no-zoom') | Annuler | <span data-k="edit-undo"></span> |
| ![](img/icon-redo-button.png ':class=icon :no-zoom') | Rétablir | <span data-k="edit-redo"></span> |
| ![](img/icon-rail-onion-skin-button.png ':class=icon :no-zoom') | [Activer/désactiver la pelure d'oignon](/fr/onion-skin) | <span data-k="onion-skin-toggle"></span> |
| ![](img/icon-rail-deselect-button.png ':class=icon :no-zoom') | Désélectionner | <span data-k="selection-deselect"></span> |
| ![](img/icon-rail-confirm-button.png ':class=icon :no-zoom') | [Valider](/fr/tools?id=valider-et-annuler) | <span data-k="edit-confirm"></span> |
| ![](img/icon-rail-visibility-solo-button.png ':class=icon :no-zoom') | Solo du calque actif | <span data-k="layer-visibility-solo"></span> |
| ![](img/icon-tool-brush-button.png ':class=icon :no-zoom') | [Pinceau](/fr/tools?id=pinceau) | <span data-k="tool-brush"></span> |
| ![](img/icon-tool-eraser-button.png ':class=icon :no-zoom') | [Gomme](/fr/tools?id=gomme) | <span data-k="tool-eraser"></span> |
| ![](img/icon-tool-eyedropper-button.png ':class=icon :no-zoom') | [Pipette](/fr/tools?id=pipette) | <span data-k="tool-eyedropper"></span> |
| ![](img/icon-tool-fill-button.png ':class=icon :no-zoom') | [Remplissage](/fr/tools?id=remplissage) | <span data-k="tool-fill"></span> |
| ![](img/icon-tool-text-button.png ':class=icon :no-zoom') | [Texte](/fr/tools?id=texte) | <span data-k="tool-text"></span> |
| ![](img/icon-tool-shape-button.png ':class=icon :no-zoom') | [Forme](/fr/tools?id=forme) | <span data-k="tool-shape"></span> |
| ![](img/icon-tool-guide-button.png ':class=icon :no-zoom') | [Repère](/fr/tools?id=repère) | <span data-k="tool-guide"></span> |
| ![](img/icon-tool-select-button.png ':class=icon :no-zoom') | [Sélection](/fr/tools?id=sélection) | <span data-k="tool-select"></span> |
| ![](img/icon-tool-move-button.png ':class=icon :no-zoom') | [Transformation](/fr/tools?id=transformation) | <span data-k="tool-transform-normal"></span> |
| ![](img/icon-tool-cut-button.png ':class=icon :no-zoom') | [Découpe](/fr/tools?id=découpe) | <span data-k="tool-cut"></span> |

Quand vous choisissez un outil, la **Bibliothèque d'outils** (ses types) et les **Réglages de l'outil** (ses valeurs) passent à ceux de cet outil. Un bouton d'outil se rouvre sur le type utilisé en dernier.

## Pinceau

| Bibliothèque d'outils | Réglages de l'outil |
|---|---|
| ![](img/tool-brush-library.png ':class=panel') | ![](img/tool-brush-settings.png ':class=panel') |

- Taille · opacité · mode de fusion sont sur la pilule verticale au bord gauche du canevas. Créer et modifier des pinceaux → [Pinceaux](/fr/brushes)

| Action | Touche |
|---|---|
| Droit, par pas de 45° (pendant le tracé) | <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> |
| Une ligne droite depuis la fin du dernier trait (toucher en maintenant) | <span data-k="canvas-line-hold"></span> |

## Gomme

- La Bibliothèque d'outils et les Réglages de l'outil sont ceux du [pinceau](/fr/tools?id=pinceau). La gomme garde son propre pinceau et sa propre taille.

## Pipette

| Réglages de l'outil |
|---|
| ![](img/tool-eyedropper-settings.png ':class=panel') |

- Pendant l'utilisation d'un autre outil, maintenez <kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> et il devient la pipette (sauf avec les outils sélection et transformation).

## Remplissage

| Bibliothèque d'outils | Réglages de l'outil |
|---|---|
| ![](img/tool-fill-library.png ':class=panel') | ![](img/tool-fill-settings.png ':class=panel') |

- **Déplier** — élargit la zone remplie pour remplir sous le trait.
- **Colmatage** — considère comme fermé un trait avec de petites coupures.
- **Remplir au-delà du canevas** — désactivé, une zone ouverte sur le bord du papier n'est pas remplie.

## Texte

| Réglages de l'outil |
|---|
| ![](img/tool-text-settings.png ':class=panel') |

- Appuyez pour y poser des lettres, ou faites glisser pour une zone de texte de cette largeur. Appuyez sur un texte existant pour le modifier à nouveau.
- Le texte va **dans le dessin de cette case** (il n'y a pas de calque texte séparé).
- Une police apportée avec **Importer un fichier de police** (.ttf · .otf · .ttc) voyage avec le fichier du projet.

## Forme

| Bibliothèque d'outils | Réglages de l'outil |
|---|---|
| ![](img/tool-shape-library.png ':class=panel') | ![](img/tool-shape-settings.png ':class=panel') |

- La forme est tracée avec le pinceau courant. Maintenez <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> pour inverser **Verrouiller les proportions**.

## Repère

| Bibliothèque d'outils | Réglages de l'outil |
|---|---|
| ![](img/tool-guide-library.png ':class=panel') | ![](img/tool-guide-settings.png ':class=panel') |

- **Chaque plan** a les siens. Un seul repère de symétrie agit à la fois ; plusieurs repères de perspective peuvent agir ensemble.
- Faites glisser les poignées sur le canevas pour déplacer l'origine, l'angle, les points de fuite et la ligne d'horizon.

## Sélection

| Bibliothèque d'outils | Réglages de l'outil |
|---|---|
| ![](img/tool-select-library.png ':class=panel') | ![](img/tool-select-settings.png ':class=panel') |

| Au début de l'appui | Mode |
|---|---|
| <kbd class="k-pc">Shift</kbd><kbd class="k-mac">⇧</kbd> | Ajouter à la sélection |
| <kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> | Soustraire de la sélection |
| <kbd class="k-pc">Shift+Alt</kbd><kbd class="k-mac">⌥⇧</kbd> | Intersection avec la sélection (seulement la partie commune) |

- Fermez un polygone en appuyant sur son premier point ou sur <span data-k="edit-confirm"></span>. Un simple appui sans glisser efface la sélection.
- La sélection reste quand vous passez à une autre case ou à un autre calque.

## Transformation

| Bibliothèque d'outils | Réglages de l'outil |
|---|---|
| ![](img/tool-move-library.png ':class=panel') | ![](img/tool-move-settings.png ':class=panel') |

| Mode | Touche |
|---|---|
| Transformation normale | <span data-k="tool-transform-normal"></span> |
| Transformation libre | <span data-k="tool-transform-free"></span> |

- Faites glisser à l'intérieur de la boîte pour déplacer, à l'extérieur pour pivoter, un coin pour mettre à l'échelle (<kbd class="k-pc">Alt</kbd><kbd class="k-mac">⌥</kbd> = depuis le coin opposé), le milieu d'un côté pour étirer dans un sens.
- Sans sélection, tout le dessin est transformé.
- Transformez avec **plusieurs cases et calques** sélectionnés dans la timeline, et chaque dessin de cette plage reçoit la même transformation (les calques masqués et les cases vides sont ignorés).

## Découpe

| Bibliothèque d'outils | Réglages de l'outil |
|---|---|
| ![](img/tool-cut-library.png ':class=panel') | ![](img/tool-cut-settings.png ':class=panel') |

- Soulève la partie que vous entourez pour pouvoir la déplacer. Désactivez **Supprimer l'original** pour copier à la place.
- **Tampon** — appuyez pour tamponner une fois ce que vous tenez, faites glisser pour le tamponner encore et encore. **Enregistrer comme pointe** en fait une pointe de pinceau.

## Valider et annuler

| | Touche |
|---|---|
| Valider ![](img/icon-rail-confirm-button.png ':class=icon :no-zoom') | <span data-k="edit-confirm"></span> |
| Annuler | <span data-k="selection-transform-cancel"></span> |

- Avant d'appliquer, l'annulation revient en arrière d'une action à la fois ; après avoir appliqué, toute la transformation s'annule d'un coup.
- Passer à un autre outil applique une transformation en cours.
