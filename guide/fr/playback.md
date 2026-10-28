# Lecture et enregistrement

## Boutons de lecture

Ils se trouvent en haut à gauche de la timeline et du panneau Conte.

| | Bouton | Touche | Effet |
|---|---|---|---|
| ![](img/icon-playback-skip-to-start-button.png ':class=icon :no-zoom') | Au début | <span data-k="playback-to-start"></span> | Au début du plan (de la piste, dans le panneau Conte) |
| ![](img/icon-playback-play-button.png ':class=icon :no-zoom') | Lecture / Pause | <span data-k="playback-toggle"></span> |  |
| ![](img/icon-playback-loop-toggle.png ':class=icon :no-zoom') | Boucle / lecture unique | <span data-k="playback-loop-toggle"></span> | Revenir ou non au début à la fin |
| ![](img/icon-timeline-camera-view-button.png ':class=icon :no-zoom') | Vue caméra | <span data-k="camera-view-toggle"></span> | Masque l'extérieur du cadre caméra et lit ajusté au cadre → [Vue du canevas](/fr/canvas-view) |
| ![](img/icon-playback-record-voice-button.png ':class=icon :no-zoom') | Enregistrer la voix | <span data-k="voice-record-toggle"></span> | Voir « Enregistrement » ci-dessous |
|  | Vumètre |  | Le volume du son joué en ce moment |

- Lisez dans la **Timeline** et seul le plan courant est lu ; lisez dans le **panneau Conte** et tous les plans sont lus à la suite.
- Les touches de lecture et de retour au début appuient sur le bouton du dernier panneau touché.
- Au doigt, un appui à 4 doigts lance / arrête la lecture. → [Tactile et stylet](/fr/touch-pen)

## Mode de lecture

Dans **Paramètres** (⚙) → **Réglages du projet** → **Mode de lecture**, choisissez quoi faire quand la lecture atteint une image dont le dessin n'est pas encore prêt.

| Mode | Effet |
|---|---|
| **Toutes les images** (par défaut) | Attend un instant avant cette image que le dessin soit prêt, puis continue. Ne saute jamais de dessin |
| **Sauter des images** | Garde le rythme et saute les dessins qui n'ont pas pu être dessinés à temps (le son et le timing restent exacts) |
| **Rendu avant lecture** | Dessine d'abord tout le passage à lire, puis démarre |

Quand vous lisez avec Sauter des images, le nombre de dessins sautés s'affiche sous la forme « {n} sautées ».

## Enregistrement

![](img/icon-playback-record-voice-button.png ':class=icon :no-zoom') Enregistrez dialogues et bruitages avec le **micro** à côté du bouton de lecture. Enregistrer, c'est **capter le son pendant la lecture** — vous regardez les images et entendez les autres sons pendant que vous enregistrez dessus.

### Une fois, la première fois

1. Activez [Préférences](/fr/preferences?id=audio) → **Audio** → **Autoriser le micro**. Tant que c'est désactivé, le micro se contente de dire que le micro n'est pas autorisé.
2. Quand le système demande l'autorisation du micro, acceptez. Si vous avez refusé, activez le micro pour Anicel dans les réglages du système.
3. Au même endroit, choisissez le micro sous **Entrée** et parlez pour voir bouger le **Niveau d'entrée**.

### Enregistrer une prise

1. Placez-vous sur la **ligne SE** qui doit recevoir la prise. Placé sur n'importe quelle autre ligne, une **nouvelle ligne SE** est créée et la prise y va.
2. Placez la tête de lecture là où l'enregistrement doit commencer (pendant la lecture, ça marche aussi — il commence là où vous appuyez).
3. Appuyez sur le **micro** <span data-k="voice-record-toggle" data-k-paren></span> → la lecture part de là pendant l'enregistrement. Le bloc et sa forme d'onde grandissent pendant que vous enregistrez.
4. Appuyez de nouveau sur le **micro**, ou sur **arrêter**, et la prise est placée en bloc sur la ligne SE.

| Bon à savoir | |
|---|---|
| Ce que vous entendez | Les autres lignes jouent normalement ; seule **la ligne en cours d'enregistrement** se tait |
| Là où il y a déjà un bloc | La nouvelle prise l'emporte sur cette plage — seule la partie qui se chevauche est coupée, et le fichier son d'origine reste dans le panneau Médias |
| Annuler | Une seule annulation rétablit la prise et les blocs qu'elle a coupés |
| Où sont gardées les prises | Dans le fichier du projet · dans le panneau Médias |
| Trop fort | Si le son sature ne serait-ce qu'une fois, un **point rouge** s'allume en haut à droite du micro. Avec **Alertes de saturation** activé, aussi un avis et un coin de bloc rouge |

### N'enregistrer qu'une plage (punch-in)

**Sélectionnez la plage** à enregistrer sur la ligne SE, placez la tête de lecture avant elle et appuyez sur le micro. La lecture part de la tête de lecture, mais l'enregistrement se fait **seulement dans la plage** — vous entendez ce qui précède et vous prenez votre entrée.

| Signal (Préférences → Audio) | Au départ | Effet |
|---|---|---|
| **Bips de repère** | Activé | Bip · bip · bip à une seconde d'intervalle avant la plage — l'enregistrement commence juste après le troisième |
| **Streamer** | Activé | Pendant jusqu'à 3 secondes avant le début, une bande traverse l'image ; l'enregistrement commence au moment où la bande atteint le bord |

### Ne pas démarrer tout de suite (décompte)

Réglez **Décompte** (0 seconde = désactivé au départ) : après l'appui sur le micro, la lecture attend ce temps avant de démarrer (avec Bips de repère activé, elle bipe pendant l'attente). Un enregistrement avec une plage sélectionnée ne l'utilise pas.

### Les réglages qui façonnent le son (Préférences → Audio)

| Réglage | Au départ | |
|---|---|---|
| **Gain micro** | 0 dB | Le volume du son entrant |
| **Canaux d'entrée** | Tel quel | Mixage mono / Gauche seul / Droit seul |
| **Réduction de bruit** | Désactivé | Pour la voix — elle efface aussi les pas et les bruits d'accessoires : désactivez-la pour les bruitages |
| **Alertes de saturation** | Désactivé | Un avis pour une prise saturée, et un coin de bloc rouge |

Le gain et les canaux d'entrée restent tels qu'ils étaient au début de la prise, jusqu'à sa fin. Changés pendant l'enregistrement, ils s'appliquent à la prise suivante.

## Quand le son et l'image se décalent

- **Décalage A/V** (Préférences → Audio) : règle finement de combien d'images l'image s'affiche plus tard ou plus tôt que le son. Les écouteurs sans fil jouent souvent le son avec 150–300 ms de retard : si ça se décale quand vous écoutez avec des écouteurs, calez-le ici.
- **Sortie** · **Entrée** : choisissez le haut-parleur et le micro à utiliser.
- Pendant la lecture, les blocs qui ne produisent pas de son sont signalés sous la forme « {n} sons muets » (fichier manquant, encore en téléchargement, ou dans un format illisible).
