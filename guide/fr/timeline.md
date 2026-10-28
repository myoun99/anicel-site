# Timeline

Le panneau des calques et du temps du plan courant. **Une ligne = un calque ; l'horizontale = le temps (images)**. Les cases et les types d'une ligne de calque sont dans [Les calques en bref](/fr/layers).

![](img/timeline.png)

- Un bloc = un dessin. Le grand nombre est le nom du dessin ; le petit nombre au bout du bloc est sa durée (en images).
- Les onglets en bas du panneau passent de la **Timeline** au [panneau Conte](/fr/storyboard).

## La barre de commandes du haut

| Où | Contenu |
|---|---|
| Gauche | ![](img/icon-playback-skip-to-start-button.png ':class=icon :no-zoom') ![](img/icon-playback-play-button.png ':class=icon :no-zoom') ![](img/icon-playback-loop-toggle.png ':class=icon :no-zoom') ![](img/icon-timeline-camera-view-button.png ':class=icon :no-zoom') ![](img/icon-playback-record-voice-button.png ':class=icon :no-zoom') → [Lecture et enregistrement](/fr/playback) |
| Pilules | **Plan** · **Calque** · **Image** · pilule commune · **Fx** |
| Droite | Nom du plan · zoom (glisser à gauche et à droite) · ajuster le zoom · **⇄** (Afficher en feuille d'exposition / Afficher en timeline) |


## Sélectionner et déplacer

Les blocs, les cases, les calques, les clés et les blocs de plan du [panneau Conte](/fr/storyboard) suivent tous les mêmes règles.

- **Le premier glissement sélectionne** (un ou plusieurs, sur plusieurs lignes aussi).
- **Faites glisser de nouveau la sélection pour la déplacer.** Une sélection sur plusieurs lignes bouge d'un bloc, quelle que soit la ligne que vous saisissez.
- Si un dessin déplacé tombe sur un dessin du même nom sur sa ligne, l'application demande s'il faut les lier.
- **Double-cliquez** sur un bloc pour ouvrir sa fenêtre de modification (voir « Modifier » ci-dessous).

## Pilule Plan

| Action | Contenu |
|---|---|
| ＋ Nouveau plan | Un nouveau plan après le plan courant |
| Modifier la note du plan | Une note sur le plan |
| Repère de calque | L'étiquette du plan → [Étiquettes de couleur et prises](/fr/layer-labels) |
| Réglages du plan | L'équipe de ce plan |
| Taille du canevas | → [Taille du canevas par plan](/fr/canvas-size) |
| Créer un plan lié · Convertir en plan lié | → [Plans liés](/fr/linked-cuts) |

Renommez un plan dans le [panneau Conte](/fr/storyboard) : sélectionnez son bloc de plan et utilisez **Modifier** (ou double-cliquez). Changez la durée d'un plan en faisant glisser la poignée de fin de plan après le dernier bloc.

## Pilule Calque

![](img/pill-layer.png ':size=120')

| | Action | Touche | |
|---|---|---|---|
| ![](img/icon-timeline-toolbar-add-layer-button.png ':class=icon :no-zoom') | Nouveau calque | <span data-k="layer-add"></span> | Choisissez le type avec le ▾ à côté → [Les calques en bref](/fr/layers) |

Appuyez sur **Calque** pour son menu — **Détacher de la base** · **Pixelliser le calque** · **Calque storyboard** (animation ⇄ storyboard).

![](img/menu-layer.png ':size=240')

## Pilule Image

![](img/pill-frame.png ':size=359')

| | Action | Touche | |
|---|---|---|---|
| ![](img/icon-new-frame-button.png ':class=icon :no-zoom') | Nouvelle image | <span data-k="frame-new-drawing"></span> | Un nouveau dessin dans la case sélectionnée (une nouvelle clé sur une piste) |
| ![](img/icon-blank-exposure-button.png ':class=icon :no-zoom') | Vider | <span data-k="frame-blank-exposure"></span> | Transforme les cases sélectionnées en cases vides |
| ![](img/icon-auto-frame-toggle-button.png ':class=icon :no-zoom') | Création auto d'images | <span data-k="frame-auto-create"></span> | Activé, il suffit de dessiner dans une case vide pour créer un dessin |
| ![](img/icon-toggle-mark-one-button.png ':class=icon :no-zoom') | Repère d'intervalle 1 | <span data-k="frame-toggle-mark-one"></span> | → [Calques d'animation](/fr/animation-layers) |
| ![](img/icon-toggle-mark-button.png ':class=icon :no-zoom') | Repère d'intervalle 2 | <span data-k="frame-toggle-mark"></span> |  |
| ![](img/icon-mark-every-button.png ':class=icon :no-zoom') | Ajout auto de repères d'intervalle | <span data-k="frame-mark-every"></span> | Un repère tous les n commas |
| ![](img/icon-push-blocks-button.png ':class=icon :no-zoom') | Pousser (ouvrir des images) | <span data-k="timeline-push-blocks"></span> | Ouvre des cases vides à l'endroit sélectionné |
| ![](img/icon-pull-blocks-button.png ':class=icon :no-zoom') | Tirer (fermer des images) | <span data-k="timeline-pull-blocks"></span> | Ferme les cases vides à l'endroit sélectionné |
| ![](img/icon-set-comma-1-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-2-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-3-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-4-button.png ':class=icon :no-zoom') ![](img/icon-set-comma-n-button.png ':class=icon :no-zoom') | Régler sur 1 · 2 · 3 · 4 · N commas | <span data-k="timeline-comma-1 timeline-comma-2 timeline-comma-3 timeline-comma-4 timeline-comma-n"></span> | Règle d'un coup la durée des blocs sélectionnés (les blocs suivants se resserrent ou se décalent) |

Appuyez sur **Image** pour **Sélectionner toute la ligne** (tous les blocs de cette ligne).

## Pilule commune

Quoi que vous ayez sélectionné (blocs · calques · clés · plans), ce sont les mêmes boutons qui répondent.

![](img/pill-shared.png ':size=308')

| | Action | Touche | |
|---|---|---|---|
| ![](img/icon-shared-edit-button.png ':class=icon :no-zoom') | Modifier | <span data-k="edit-instance"></span> | La fenêtre de modification de ce que vous avez sélectionné ([ci-dessous](/fr/timeline?id=modifier)) |
| ![](img/icon-shared-auto-name-button.png ':class=icon :no-zoom') | Nommer automatiquement | <span data-k="edit-auto-name"></span> | Nomme les blocs sélectionnés dans l'ordre, à partir d'un numéro de départ |
| ![](img/icon-shared-cut-button.png ':class=icon :no-zoom') | Couper | <span data-k="edit-cut"></span> |  |
| ![](img/icon-shared-copy-button.png ':class=icon :no-zoom') | Copier | <span data-k="edit-copy"></span> |  |
| ![](img/icon-shared-paste-independent-button.png ':class=icon :no-zoom') | Coller indépendant | <span data-k="edit-paste-independent"></span> | Colle comme un nouveau dessin |
| ![](img/icon-shared-paste-linked-button.png ':class=icon :no-zoom') | Coller lié | <span data-k="edit-paste-linked"></span> | Colle comme le même dessin (corrigez l'un et les deux changent) |
| ![](img/icon-shared-unlink-button.png ':class=icon :no-zoom') | Rendre indépendant | <span data-k="edit-unlink"></span> | Sépare un dessin lié |
| ![](img/icon-shared-duplicate-button.png ':class=icon :no-zoom') | Dupliquer | <span data-k="edit-duplicate"></span> | Duplique le calque sélectionné (dans le panneau Conte, le plan) |
| ![](img/icon-shared-merge-button.png ':class=icon :no-zoom') | Fusionner | <span data-k="edit-merge"></span> | Ci-dessous |
| ![](img/icon-shared-delete-button.png ':class=icon :no-zoom') | Supprimer | <span data-k="edit-delete"></span> | Supprime ce que vous avez sélectionné (le plus grand de plan > calque > case) |
| ![](img/icon-shared-colour-edit-button.png ':class=icon :no-zoom') | Édition couleur |  | Change ou efface les couleurs des dessins sélectionnés → [Couleur](/fr/color) |

**Fusionner** — fait des calques sélectionnés (deux ou plus, ou un dossier) un seul calque — cuit tel qu'il apparaissait, qui devient le calque le plus haut (une seule annulation). Si le rendu risque de changer, l'application demande d'abord. Fusionner un calque qui a des attaches garde attachées au résultat les attaches que vous n'avez pas sélectionnées. Ignorés pour l'instant : les calques de plan lié, de conte et d'image de référence, les calques ayant un bloc qui porte une indication, les attaches sélectionnées sans leur base, et une base qui n'est pas la plus haute quand elle a des attaches non sélectionnées.

Quand la sélection d'images contient deux blocs ou plus d'une même ligne, **Fusionner** en fait **un seul bloc**, ligne par ligne — du début du bloc le plus à gauche jusqu'à la fin du dernier (en couvrant les cases vides entre eux), au nom du bloc le plus à gauche, avec le dessin du bloc le plus à gauche par-dessus là où ils se chevauchent (une seule annulation).

## Modifier

Sélectionnez un bloc et appuyez sur **Modifier** <span data-k="edit-instance" data-k-paren></span>, ou double-cliquez sur le bloc : la fenêtre adaptée à ce que vous avez sélectionné s'ouvre.

![](img/se-edit.png)

| Sélection | Ce que vous réglez dans la fenêtre |
|---|---|
| Un bloc de dessin (animation · storyboard · image) | Le nom du dessin |
| Un bloc SE | Nom (locuteur) · Type (ON · OFF · MONO) · Dialogue · Audio lié → [Calques son (SE)](/fr/sound-layers) |
| Un bloc de direction | Indication (PAN, etc.) · nom · début · fin → [Caméra, direction, transition](/fr/camera-section) |
| Un bloc de transition | Le type de changement (FI · FO, etc.) |
| Une clé sur une piste | Le nom · la vitesse · la trajectoire · l'itinérance de la clé → [Effets et transformation](/fr/effects) |
| Un calque | Le nom du calque (plusieurs à la fois) |
| Un plan dans le panneau Conte | Le nom du plan |

## Feuille d'exposition

Appuyez sur **⇄** (Afficher en feuille d'exposition) tout à droite : la timeline devient **verticale** comme une feuille de temps papier (le temps va de haut en bas ; colonnes ACTION · SE · CAM depuis la gauche). Elle fait la même chose que la timeline, et les touches fléchées suivent les directions de la feuille. → [Raccourcis](/fr/shortcuts)

## Zoom

- Faites glisser le nombre de zoom à droite vers la gauche et la droite pour changer la largeur des cases. **Ajuster la timeline à la vue** fait tenir tout le plan dans le panneau.
- Activez [Préférences](/fr/preferences) → **Display** → **Frame lines inside blocks** : un trait vertical est tracé pour chaque image, à l'intérieur des blocs aussi.
