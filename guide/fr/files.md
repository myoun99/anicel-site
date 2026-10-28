# Ouvrir et enregistrer

Tout se fait depuis le menu **Projet** (icône de dossier) en haut à gauche.

## Le fichier de projet

- Un projet Anicel est **un seul fichier `.anicel`**. Dessins, feuille de temps, son et réglages vont tous dedans (le son et la vidéo importés en « Lier » ont toujours besoin de leurs fichiers d'origine → [Panneau Médias et import](/fr/media-pool)).
- Quand vous ouvrez plusieurs projets, ils se placent côte à côte en onglets dans le bandeau du haut.

## Ouvrir

![](img/menu-project.png ':size=301')

**Projet** → **Ouvrir un fichier** (ou déposez le fichier sur la fenêtre). L'endroit où il s'ouvre dépend de ce que vous ouvrez.

| Fichier | S'ouvre dans |
|---|---|
| `.anicel` · `.tvpp` (TVPaint) · `.clip` (CLIP STUDIO PAINT) | Un nouvel onglet de projet |
| Images · vidéos · son · PDF | La [fenêtre d'import](/fr/media-pool) |
| `.abr` · `.sut` · `.sutg` · `.anibrush` | La bibliothèque de [pinceaux](/fr/brushes) |
| `.ttf` · `.otf` · `.ttc` | Polices (l'[outil texte](/fr/tools)) |
| Le fichier de raccourcis d'une autre application | Un préréglage de [raccourcis](/fr/shortcuts) |

- **Ouvrir un dossier** : ouvre tout un dossier de plan (un dossier contenant des fichiers image) dans la fenêtre d'import.
- **Projets récents** : les fichiers ouverts récemment. Pour un fichier déplacé qui est introuvable, indiquez son nouvel emplacement avec **Reconnecter**.
- Déposez un fichier sur une [visionneuse](/fr/screen) et il s'affiche dans cette visionneuse au lieu de s'ouvrir comme projet.

### Fichiers TVPaint et CLIP STUDIO

- Ouvrez un `.tvpp` : ses calques, son timing et ses repères d'intervalle deviennent des calques, des blocs et des repères Anicel.
- Ouvrez un `.clip` : ses cellulos d'animation arrivent en calques et en blocs, et les calques d'un cellulo en [calques attachés](/fr/attach-layers) (A · A-1 …).
- Le fichier d'origine ne change pas. L'enregistrement crée un `.anicel`.

## Enregistrer

| Menu | Touche | Contenu |
|---|---|---|
| Enregistrer | <span data-k="file-save"></span> | Demande un emplacement et un nom seulement la première fois |
| Enregistrer sous → Projet (.anicel) | <span data-k="file-save-as"></span> | Dans un autre fichier |
| Enregistrer sous → PNG · JPG · BMP · TGA · TIFF … | | **L'image courante seule**, en image de la taille du canevas |

Pour exporter beaucoup d'images, des vidéos ou des cellulos, voir [Export](/fr/export).

## Sauvegarde automatique

**La sauvegarde automatique est désactivée au départ.** Tant qu'elle est désactivée, le projet ne change que quand vous enregistrez, et si l'application se ferme de façon inattendue, le travail depuis le dernier enregistrement est perdu.

- Activez [Préférences](/fr/preferences) → **Sauvegarde auto** et réglez l'intervalle (**Toutes les** : 3–60 minutes, 10 minutes au départ) : le fichier du projet est enregistré à cet intervalle.

## Quand l'enregistrement échoue (copie d'échec)

Quand un autre programme utilise le fichier, que le fichier est en lecture seule, qu'il n'y a pas assez de place ou que le disque a été retiré, l'enregistrement échoue et la raison s'affiche.

- Le travail jusque-là est gardé dans une **copie d'échec** à l'intérieur de l'application. **La copie d'échec disparaît quand vous fermez l'application.**
- Pour la garder, enregistrez-la où vous voulez avec **Projet** → **Sauvegarder la copie d'échec**, ou utilisez **Enregistrer sous**.
- Une fois la cause réglée, enregistrez de nouveau : cela va dans le fichier d'origine.
- Si le fichier d'un projet ouvert est supprimé ou déplacé, l'application vous le signale. S'il est dans la corbeille, restaurez-le alors.

## Cloud et tablettes

Un fichier ne s'ouvre que dans un seul onglet. Rien n'est enregistré par-dessus un fichier ouvert dans un autre onglet.

| | PC<br>(Windows · Mac · Linux) | iPad · iPhone | Android |
|---|---|---|---|
| **Ouvrir un fichier Drive ou Dropbox** | Depuis le dossier que l'application de bureau (sous Linux, un outil de synchronisation) a créé sur le PC | Depuis Drive · Dropbox · iCloud Drive dans l'app Fichiers — pendant le téléchargement, « Downloading from the cloud · Ns » | Depuis Drive · Dropbox dans la fenêtre de fichiers — il s'ouvre comme **copie de travail**, et chaque enregistrement renvoie tout le fichier |
| **Google Drive dans une fenêtre de dossier** | Possible (le dossier Drive de l'application de bureau) | **Impossible** — Ouvrir ne réagit pas. Utilisez iCloud Drive, Dropbox ou cet appareil | **Impossible** — il n'est pas listé. Utilisez un dossier de cet appareil |
| **Autorisation** | Aucune | Seulement le fichier ou le dossier choisi, à ce moment-là | **Accès à tous les fichiers** doit être activé avant de choisir un fichier ou un dossier |

- Où s'ouvre une **fenêtre de dossier** : **Ouvrir un dossier** · **dossier de plan** dans la fenêtre d'import · **Chercher dans un dossier** dans le panneau Médias · export de plusieurs fichiers sur Android.
- Exporter vers Drive → [Export › Exporter directement vers Google Drive](/fr/export?id=exporter-directement-vers-google-drive)
