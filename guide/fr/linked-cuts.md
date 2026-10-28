# Plans liés

Des plans qui utilisent ensemble les mêmes dessins. Corrigez un dessin dans un plan et la correction apparaît telle quelle dans les plans qui lui sont liés ; le timing se règle dans chaque plan séparément.

## En créer un

![](img/menu-cut.png ':size=820')

- Appuyez sur **Plan** en haut de la timeline → **Créer un plan lié** : crée juste après le plan courant un nouveau plan qui partage ses dessins. Son timing et ses clés caméra sont vides au départ ; il reprend les repères, l'étiquette de couleur du plan, la longueur de feuille et les noms de l'équipe.
- Appuyez sur **Plan** en haut de la timeline → **Convertir en plan lié** : lie un plan existant au plan courant (l'origine).
  - Les calques de même nom deviennent un seul dessin partagé, et les dessins de même nom sont remplacés par ceux de l'origine. Un calque qui n'existe que d'un côté est créé de l'autre côté avec un timing vide.
  - Si l'origine est déjà liée à d'autres plans, ces plans sont liés aussi. Si le plan choisi est lié à d'autres plans liés, les deux groupes n'en font plus qu'un.
  - Si les tailles de canevas diffèrent, elles sont alignées sur la taille de l'origine.
  - Une seule annulation rétablit tous les plans touchés par la conversion.
- Pour commencer aussi avec le même timing, dupliquez le plan puis convertissez-le en plan lié.

## Partagé, et propre à chaque plan

- **Partagé** : les dessins ; les calques (ajout · suppression · ordre · nom · [étiquette de couleur](/fr/layer-labels) · opacité · fusion) ; les dossiers et les attaches (y compris les dossiers repliés et les pistes ouvertes) ; la configuration des FX (types · ordre · marche/arrêt) ; la [taille du canevas](/fr/canvas-size) ; les repères de dessin ; l'étiquette de couleur du plan, la longueur de feuille et les noms de l'équipe
- **Propre à chaque plan** : le timing, la durée du plan, l'affichage ou non d'un calque, les clés et valeurs de la caméra et des FX, les SE et la direction
- Donnez un nom aux clés (le [bouton Modifier](/fr/timeline?id=modifier)), et les clés de même nom partagent leur valeur entre plans liés.
- Les calques image ne sont partagés que si leurs noms de dessin correspondent.
- Les calques collés ou dupliqués dans un plan lié vont aussi dans les plans qui lui sont liés.

## Les repérer, et les délier

![](img/linked-cut.png ':size=1188')

- Dans le panneau [Conte](/fr/storyboard), les plans liés ont 🔗 à côté du nom du plan. Appuyez dessus pour voir les plans auxquels il est lié (**Lié à**), et sortez un plan avec **Délier**.
- Sélectionner un plan dans le panneau Conte et appuyer sur le bouton **Rendre indépendant** en haut le délie aussi. Les dessins restent tels quels, et à partir de là chaque plan change de son côté.
- Dans la timeline, 🔗 tout à droite de la case du nom d'un calque signifie que ce calque est lié ailleurs. On ne peut pas délier un à un les calques d'un plan lié ; c'est tout le plan qui est délié.
