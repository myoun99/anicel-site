# Les calques en bref

Dans la timeline, **une ligne = un calque**. Les lignes se répartissent en trois sections, et la bande verticale à gauche nomme chaque section.

| Section | Place à l'écran | Calques qui y vont |
|---|---|---|
| **CAM** (caméra) | Haut | Caméra · Transition · Direction |
| **SE** (bruitages · dialogues) | Milieu | SE |
| **ACTION** (dessins) | Bas | Animation · Storyboard · Image · Dossier · Calque de réglage |

Les noms des sections sont les noms des colonnes d'une feuille de temps papier. Passez à la [feuille d'exposition](/fr/timeline?id=feuille-dexposition) : comme sur une feuille papier, elles deviennent des colonnes verticales, ACTION · SE · CAM depuis la gauche.

## Types de calques

| Type | En une ligne | Plus |
|---|---|---|
| **Animation** | Le calque de base : un dessin dans chaque case | [Calques d'animation](/fr/animation-layers) |
| **Storyboard** | Les dessins du conte. Un bloc = une case de la feuille de conte | [Calque storyboard](/fr/conte-layer) |
| **Image** | Une seule image, comme un décor, sur tout le plan | [Calques image](/fr/image-layers) |
| **Dossier** | Regroupe des calques pour les afficher, masquer et déplacer ensemble | [Dossiers](/fr/folders) |
| **Calque de réglage** | Un effet sur tous les calques en dessous (luminosité · teinte · flou …) | [Calques de réglage](/fr/adjustment-layers) |
| **SE** | Son et dialogues. Calez-les sur la forme d'onde | [Calques son (SE)](/fr/sound-layers) |
| **Direction** | Écrit sur la feuille des indications caméra comme PAN et FIX | [Caméra, direction, transition](/fr/camera-section) |
| **Caméra** | Le mouvement de caméra (position · échelle · rotation). Un par plan, présent d'office | 〃 |
| **Transition** | Les changements de scène comme FI · FO · O.L. Un par piste, présent d'office | 〃 |
| **Attache** (pas un type, une façon d'attacher) | Un calque attaché à un calque de base, qui suit son mouvement et ses effets (ombres, lumières) | [Calques attachés](/fr/attach-layers) |

> Noms par défaut des nouveaux calques : animation **A · B · C …**, image **BG** (**BOOK** s'il y en a déjà un), storyboard **Conte**, réglage **FX1**, SE **S1 · S2**, direction **Direction 1**, dossier **Folder 1**, caméra et transition **Camera** · **Transition**. Ils suivent l'usage du métier : ils sont les mêmes quelle que soit la langue de l'application.

## Créer un calque

Créez-le depuis la pilule **Calque** en haut de la timeline.

- **＋** Nouveau calque <span data-k="layer-add" data-k-paren></span> : un calque d'animation. Dans le [panneau Conte](/fr/storyboard), un calque SE.
- **＋ ▾** : choisissez le type à créer — Animation · Storyboard · Image · SE · Direction · Calque de réglage · Dossier, plus **Calque attaché libre / synchronisé** au-dessus ou en dessous du calque courant.

![](img/add-layer.png)

## Les cases d'une ligne de calque

![](img/layer-row.png ':size=465')

La gauche d'une ligne (l'en-tête) contient ces cases, de gauche à droite. Une case qui ne convient pas au type reste vide.

| Case | Effet |
|---|---|
| **Étiquette de couleur** | L'étape (Storyboard · Animation clé · Intervalles …). → [Étiquettes de couleur et prises](/fr/layer-labels) |
| **Prise** | T1–T9 |
| **▸** | Ouvre les pistes (transformation · effets …). → [Effets et transformation](/fr/effects) |
| **Flèche de feuille** | Si ce calque va sur la [feuille de temps](/fr/sheets) ou en sort |
| **Icône du type · nom** | **Double-cliquez** sur le nom pour le changer. De petits boutons comme le lien 🔗, le graphique et le repli peuvent se trouver à côté du nom |
| **Écrêtage** | Masque d’écrêtage sur le calque inférieur (n'apparaît qu'à l'intérieur du dessin du calque en dessous) |
| **FX** | Contourne / applique d'un coup tous les effets de ce calque |
| **Pelure d'oignon** | La pelure d'oignon de ce calque. → [Pelure d'oignon](/fr/onion-skin) |
| **Œil** | Masquer / afficher |
| **Opacité** | Faites glisser la barre, 0–100 % |
| **Fusion** | Le mode de fusion (Normal · Produit · Superposition · Incrustation …). Les dossiers sont en **Transfert** par défaut |

- Pour les cases marche/arrêt comme l'œil, la pelure d'oignon, l'écrêtage, FX et la feuille, **appuyez et balayez vers le haut ou le bas** : chaque ligne traversée prend le même état.

### La ligne du haut (tous les calques à la fois)

Appuyez sur une case de la ligne du haut de l'en-tête pour ouvrir le menu de cette case.

| Case | Menu |
|---|---|
| Section | Afficher les lignes SE · Afficher les lignes caméra |
| Feuille | Tout mettre sur la feuille / Tout retirer de la feuille · Solo des lignes sur la feuille |
| Étiquette de couleur | Solo par couleur · Effacer le filtre de repères |
| Type | Solo par type |
| Écrêtage | Libérer tous les masques d’écrêtage · Solo des calques écrêtés |
| FX | Appliquer tous les FX / Contourner tous les FX · Solo des lignes avec FX |
| Pelure d'oignon | Appliquer la pelure d'oignon aux calques affichés / Retirer la pelure d'oignon des calques affichés · Ouvrir le panneau pelure d'oignon |
| Œil | Tout afficher / Tout masquer |
| Opacité · Fusion | Pour chaque calque affiché |

**Solo** ne garde que les lignes qui correspondent et masque les autres pour le moment. Appuyez de nouveau pour l'annuler.

## Sélectionner, déplacer, supprimer

- Appuyez sur un nom et ce calque devient le **calque courant** (celui où l'on dessine). Faites glisser pour sélectionner plusieurs lignes.
- Faites glisser de nouveau les lignes sélectionnées et **l'ordre change.** Déposez-les sur un dossier et elles y entrent.
- On ne peut pas déplacer un calque d'une section à l'autre (un calque de dessin dans la section SE, par exemple). Dans la section CAM, l'ordre est fixe — caméra, transition, direction depuis le haut — et seules les lignes de direction peuvent échanger leur ordre entre elles.
- Dupliquer · Couper · Copier · Coller · Supprimer sont dans la pilule commune. → [Timeline](/fr/timeline?id=pilule-commune)
- Vous pouvez aussi renommer un calque avec **Modifier** <span data-k="edit-instance" data-k-paren></span>. Sélectionnez plusieurs lignes et modifiez : elles changent toutes d'un coup.

## Ce que les calques n'ont pas

- Il n'y a pas de **verrouillage de calque**.
- Il n'y a pas de **table lumineuse**. Pour voir d'autres dessins en transparence, utilisez la [pelure d'oignon](/fr/onion-skin).
- Il n'y a pas de **calque texte**. Posez les lettres dans un dessin avec l'[outil texte](/fr/tools?id=texte).
