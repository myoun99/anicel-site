# FAQ

## Enregistrement et fichiers

**L'application s'est fermée et mon travail a disparu.**
La sauvegarde automatique est désactivée au départ. Activez [Préférences](/fr/preferences) → **Sauvegarde auto** et elle enregistre à l'intervalle choisi. → [Ouvrir et enregistrer](/fr/files?id=sauvegarde-automatique)

**Un message dit que l'enregistrement a échoué.**
Le travail jusque-là est dans la **copie d'échec** à l'intérieur de l'application. Avant de fermer l'application, gardez-la ailleurs avec **Projet** → **Sauvegarder la copie d'échec** ou **Enregistrer sous**. → [Ouvrir et enregistrer](/fr/files?id=quand-lenregistrement-échoue-copie-déchec)

**J'ai ouvert le projet sur un autre appareil et des images, des sons ou des vidéos manquent.**
Les fichiers apportés en « Lier » ont leurs originaux hors du fichier du projet. Reliez-les avec **Chercher dans un dossier** dans le panneau Médias, ou utilisez **Conserver dans le fichier de projet** avant d'emporter le projet. → [Panneau Médias et import](/fr/media-pool?id=quand-des-fichiers-liés-manquent)

**Puis-je ouvrir directement des fichiers sur Google Drive ou Dropbox ?**
Oui. Choisissez le fichier du projet sur Drive ou Dropbox dans la fenêtre d'ouverture et il s'ouvre. Le fait qu'une fenêtre de dossier puisse choisir Drive, et la façon dont les exports y arrivent, dépendent de l'appareil et du nombre de fichiers — les tableaux sont dans [Ouvrir et enregistrer › Cloud et tablettes](/fr/files?id=cloud-et-tablettes) et [Export › Exporter directement vers Google Drive](/fr/export?id=exporter-directement-vers-google-drive).

**Puis-je ouvrir des fichiers TVPaint et CLIP STUDIO ?**
Ouvrez un `.tvpp` ou un `.clip` avec **Ouvrir un fichier** et il arrive comme nouveau projet. L'original ne change pas. → [Ouvrir et enregistrer](/fr/files)

## Dessin

**Rien ne se dessine.**
- Vérifiez que le calque courant accepte le dessin. On ne peut pas dessiner sur les dossiers, les calques de réglage, les lignes SE ou caméra, ni sur un **calque image de référence** qui garde un fichier tel quel (pixellisez une image de référence avec **Pixelliser** et vous pourrez dessiner dessus). → [Les calques en bref](/fr/layers)
- Si la case est vide, activez **✦** (Création auto d'images) ou créez d'abord un dessin avec **Image ＋**.

**La pression du stylet ne marche pas (Windows).**
Dans [Préférences](/fr/preferences) → **Saisie** → **Service tablette**, essayez de passer de **Standard** à **Wintab** ou l'inverse.

**Le bouton latéral du stylet me donne la pipette.**
C'est le réglage par défaut. Changez-le dans [Préférences](/fr/preferences) → **Saisie** → **Canevas**. → [Tactile et stylet](/fr/touch-pen)

**Je ne vois pas le dessin précédent en transparence.**
La pelure d'oignon s'active **par calque**. Utilisez la case pelure d'oignon de la ligne de ce calque, ou **Activer/désactiver la pelure d'oignon** <span data-k="onion-skin-toggle" data-k-paren></span>. → [Pelure d'oignon](/fr/onion-skin)

**Où sont le verrouillage de calque, la table lumineuse et les calques texte ?**
Il n'y a pas de verrouillage de calque. Voyez les dessins en transparence avec la [pelure d'oignon](/fr/onion-skin), et posez les lettres dans un dessin avec l'[outil texte](/fr/tools?id=texte).

## Écran

**Un panneau a disparu / la disposition est en désordre.**
Dans **Paramètres** (⚙) → **Panneaux**, réactivez le panneau ou appuyez sur **Réinitialiser l'espace de travail**. → [Écran et panneaux](/fr/screen)

**Je veux changer la langue de l'application.**
[Préférences](/fr/preferences) → **Langue** → **Langue du programme**. La langue imprimée sur la feuille de temps se règle à part avec **Langue de notation**.

**Je veux les mêmes raccourcis que dans l'application que j'utilisais avant.**
Dans **Paramètres** → **Raccourcis clavier**, choisissez le préréglage **Base Clip Studio** ou **Base TVPaint**, ou importez le fichier de raccourcis de cette application. → [Raccourcis](/fr/shortcuts)

## Lecture et son

**La lecture n'arrête pas de faire des pauses.**
Le mode de lecture par défaut (**Toutes les images**) attend que chaque dessin soit prêt. Pour garder le rythme pendant la lecture, utilisez **Sauter des images** ; pour tout dessiner d'abord, utilisez **Rendu avant lecture**. → [Lecture et enregistrement](/fr/playback?id=mode-de-lecture)

**Il n'y a pas de son.**
Vérifiez le périphérique de **Sortie** dans [Préférences](/fr/preferences) → **Audio**. Si « {n} sons muets » s'affiche pendant la lecture, ce fichier son manque, est encore en téléchargement, ou est dans un format illisible.

**Avec des écouteurs sans fil, le son et l'image se décalent.**
Calez-les avec **Décalage A/V**. → [Lecture et enregistrement](/fr/playback?id=quand-le-son-et-limage-se-décalent)

**L'enregistrement ne marche pas.**
Activez [Préférences](/fr/preferences) → **Audio** → **Autoriser le micro**, et autorisez aussi le micro pour Anicel dans les réglages du système.

## Export

**Certains formats vidéo sont grisés.**
Cela arrive quand le système de cet appareil ne prend pas en charge le codec. Si **FFmpeg** est dans le PATH de cet ordinateur, vous pouvez exporter avec. → [Export](/fr/export)

**La vidéo exportée n'a pas de son.**
Activez **Intégrer le mixage SE dans la vidéo** sous **Audio** dans l'onglet Séquence. Les lignes SE muettes sont exclues.
