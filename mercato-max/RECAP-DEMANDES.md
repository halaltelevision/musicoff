# Mercato Max : ce que le créateur a demandé et validé

Récapitulatif écrit à partir de la conversation sur l'édition foot (octobre 2026), pour appliquer les mêmes choix à la version avec tous les thèmes (manga, foot, films, sport, jeux vidéo, animaux, découverte…).
Les choses propres au foot (postes, terrain, maillots, format Five) sont à la fin, à part.

À lire avant de toucher à l'appli. Deux sources sont réunies ici :
- la **liste complète du créateur** (copiée depuis son autre conversation), en fin de fichier ;
- les **choix plus récents** faits pendant l'édition foot, juste en dessous.

**Quand les deux se contredisent, le plus récent gagne** (voir « Points tranchés » ci-dessous).

## Points tranchés (le plus récent l'emporte)

- **Codes d'activation : supprimés.** La liste d'origine parlait de codes liés au téléphone et d'un générateur ; depuis, le créateur a dit : « pas d'activation de code vu qu'il y aura un paiement en ligne ». On garde uniquement le paiement Stripe + « Restaurer mes achats » par e-mail. Le générateur de codes n'est plus utilisé.
- **Style : « Stade de nuit » partout, y compris la version tous thèmes.** La liste d'origine disait « garder la pâte à modeler + ambiance Vif », mais il a ensuite dit qu'on n'était pas obligé de garder la pâte à modeler et a choisi « Stade de nuit ». Règle donnée par le créateur : **en cas de contradiction, ce qui a été dit pendant l'édition foot passe avant la liste d'origine.** Vif et les autres ambiances restent dans le bouton Couleurs.
- **Gratuit :** la liste d'origine dit « quelques packs gratuits » ; il a ensuite demandé **environ 90 % gratuit pour le moment**.

---

## 1. Design

- **Plus besoin du style « pâte à modeler »** : il préfère un rendu plus pro, moins « fait par une IA ».
- **Style choisi : « Stade de nuit »** (le n°3 de la planche `mercato-max-foot/planche-styles.jpg`) :
  - fond bleu nuit avec deux halos de projecteurs en haut ;
  - la mise affichée sur un **tableau LED jaune** qui brille (chiffres en police Chakra Petch) ;
  - les **boutons +10 / +50 / +100 en néon**, à la couleur du joueur ;
  - le **score final** de chaque équipe aussi sur un petit tableau LED, l'équipe gagnante éclairée en jaune ;
  - typo condensée façon télé sport (Saira Condensed pour les titres, Saira pour le texte).
  - À décider pour la version tous thèmes : garder cette ambiance « stade » partout, ou l'adapter (le style a été pensé pour le foot).
- **Le bouton « Couleurs » reste**, avec l'ambiance claire **Vif** et les autres (Bonbon, Lagon, Citron, Coucher de soleil, Stade, Néon, Noir & or).
- **Pas d'emoji comme icônes**, et **jamais 💵** (c'est une vraie devise) : toujours le petit billet vert dessiné.
- **Tout sur un seul écran**, testé en **360 × 643** (Oppo A40) : accueil, préparation, partie, fin de partie, boutique, profil, album. Les longues listes défilent à l'intérieur d'un cadre, pas la page.
- Quand il demande des designs : plusieurs propositions vraiment différentes, en **planche d'images** à comparer (pour WhatsApp), avec l'avis et la préférence de Claude.

## 2. Logo

- Il veut un logo **plus classe et plus pro**. Le marteau seul est refusé (trop classique).
- Pistes préférées : les **deux M** (écusson de club « MM », monogramme).
- Trois propositions faites dans son Canva (à choisir) :
  - écusson MM : https://canva.link/7gvmfi907i8t8s2
  - monogramme : https://canva.link/sa19vb20bn3wcgj
  - icône tableau LED : https://canva.link/a2ygdjyt086p0d0
- Une fois choisi : il l'exporte en PNG depuis Canva et l'envoie, puis on le met dans le jeu et on prépare l'icône 512 × 512 du Play Store.

## 3. Packs

- **Un très grand nombre de packs**, avec des **thèmes** (ex. pour le foot : légendes du PSG, de Manchester United, Ballons d'Or, Clasico, derbys…). Même idée pour les autres univers.
- Écran de choix des packs : **onglets par catégorie + recherche**, packs rangés par groupe (pays, sous-catégorie), plus un onglet **« Mes packs »** pour les packs perso.
- Noms réels, aucune vraie photo ni logo, mention « Jeu de fan non officiel ».

## 4. Argent et boutique

- **Environ 90 % du contenu gratuit pour le moment**, environ 10 % premium, plus **1 pack premium offert chaque semaine**.
- Boutique avec onglets **Offres** / **Packs premium** : pack à l'unité 0,99 €, pass par catégorie, packs perso +3 (1,99 €), +10 (4,99 €), illimité (9,99 €), collection complète 19,99 €.
- **Pas de code d'activation** : tout passe par le **paiement en ligne Stripe**. Retirer l'onglet « J'ai un code », l'identifiant à copier et le générateur de codes.
- À la place : bouton **« Restaurer mes achats »** avec l'e-mail donné au paiement (pour un nouveau téléphone), visible seulement une fois Stripe relié.
- Stripe **préparé mais pas relié** : tant que l'adresse du serveur est vide, le jeu affiche « Paiement en préparation ».
- Serveur prêt à brancher, sur le modèle de `mercato-max-foot/server/` : routes `/checkout`, `/verify`, `/restore`, `/webhook`, prix et produits lus dans un `config.js` commun au jeu et au serveur, notice en français.

## 5. Progression

- **Profil** : niveau avec barre, 3 chiffres (parties, victoires, meilleur score), missions de la semaine, trophées difficiles bronze / argent / or avec barres de progression, réglage du son, mentions et crédits.
- **Album** de collection : liste des packs commencés avec progression ; les cartes pas encore gagnées restent en « ??? », **sans étoiles ni couleur de force**.
- **Défi du jour** sur l'accueil : même tirage pour tout le monde, contre 2 ordis, meilleur score du jour et série de jours.
- En fin de partie, les récompenses (XP, nouvelles cartes d'album, missions réussies, trophées, niveau) s'affichent en **petits messages en haut de l'écran**, l'un après l'autre, pour ne pas faire déborder l'écran.
- Accueil en un écran : niveau, Couleurs, Règles, logo + accroche, Solo / Entre amis, défi du jour, et une barre **Boutique / Album / Profil**.

## 6. Packs perso

- Création en tapant un joueur par ligne, avec des messages d'erreur clairs. 1 pack perso gratuit, plus via la boutique.
- Suppression avec une confirmation dans la page (pas de fenêtre du navigateur).

## 7. Ordis et tests

- Les ordis doivent **dépenser presque tout leur budget** (objectif : il leur reste en moyenne moins de 50 sur 500), et aucun caractère (Requin, Flambeur, Mme Prudence) ne doit gagner beaucoup plus souvent que les autres. Vérifier en simulant des centaines de parties.
- Avant chaque publication : parties complètes en solo (1 et 2 ordis) et entre amis (2, 3, 4), aucune erreur, chaque écran ≤ 643 px de haut.

## 8. Bugs trouvés dans la version tous thèmes (à corriger)

Relevés en relisant `mercato-max/index.html` :

1. Les messages et l'image partagée affichent **💵** au lieu du billet vert.
2. **Confettis quand on gagne une très grosse carte** pendant la partie : ça trahit la force (interdit).
3. **L'album montre des étoiles et des couleurs selon la force**, même sur les cartes pas encore gagnées ; missions et trophées parlent de « Légendaires ».
4. **Pause puis « Revoir les règles »** : en fermant les règles, la partie reste bloquée (les ordis ne jouent plus).
5. Le **code d'activation** est encore dans la boutique (à remplacer par la restauration par e-mail).
6. L'accueil affiche encore **le marteau** comme logo.
7. Les **vibrations** se déclenchent aussi entre amis (elles doivent rester en solo).
8. À mesurer : la hauteur de l'accueil (missions + 6 boutons), de la fin de partie avec 3 ou 4 équipes, et la dépense des ordis.

---

## Propre au foot (ne pas appliquer aux autres thèmes)

- Format **Five** : 1 gardien, 1 défenseur, 1 milieu, 1 attaquant + 1 place libre ; on ne mise que si on a une place à ce poste. XI de légende et Duel rapide marqués « bientôt ».
- Terrain qui se remplit, maillots dessinés aux couleurs du club avec initiales.
- Révélation poste par poste, bonus si plusieurs joueurs du même club (ou 3+ du même pays).
- 92 packs foot (clubs, sélections, thèmes), dont 10 premium.

Fichiers de l'édition foot : dossier `mercato-max-foot/` de la branche `claude/mercato-max-foot-prototype-7f2dmn` du dépôt `halaltelevision/musicoff`. Jeu en ligne : https://claude.ai/artifact/U7d3oRHtxCwonVyv7WrSjp

---

## Liste complète du créateur (copiée depuis son autre conversation)

### Base
- Partir de la version « Pâte à modeler » : https://claude.ai/artifact/K58Y6Zke4bPaqwMqfm6agj (ne pas la modifier : l'édition foot est une NOUVELLE appli)
- Générateur de codes (privé) : https://claude.ai/artifact/NvXuP8zQQ8nLVEnPs2YjHZ *(plus utilisé : voir « Points tranchés »)*
- Planche des styles : https://claude.ai/artifact/DpGB65ZTWKRpkbbpLeWMCa
- Garder le nom « Mercato Max » pour l'instant
- Jeu pour téléphone uniquement, à sortir sur le Play Store

### Règles du jeu
- Budget 500 avec un petit billet vert à côté (jamais « M », jamais « pépites », jamais de vraie devise). 300 pour 3 joueurs, 700 pour 7
- Mises +10 / +50 / +100
- Chacun son tour. Première mise obligatoire (le bouton Passer devient « Mise d'abord »)
- Chrono par tour : Aucun / 30 s / 15 s (30 s par défaut)
- Toujours garder de quoi compléter son équipe (10 par place restante)
- AUCUN indice de force pendant la partie : pas d'étoiles, pas de « Rare/Légendaire », pas d'effet spécial sur les grosses cartes. Tout se révèle à la fin, carte par carte, avec le total qui monte
- Égalité de force → gagne celui à qui il reste le plus d'argent
- Carte en or (force ×1,5) et carte mystère : annoncées
- Primes rares (environ 3 % par carte, 2 max par partie, +10 à +100), affichées en grand

### Solo
- 1 ordi (duel) ou 2 ordis, tirés au hasard parmi le Requin, le Flambeur et Mme Prudence
- Bouton « Voir » sur chaque ordi pour voir ses recrues
- Les ordis doivent dépenser leur budget
- Vibration de tour seulement en solo

### Entre amis
- 2 à 4 joueurs sur UN seul téléphone, pas de mode en ligne
- À deux : écran coupé en deux, chaque moitié tournée vers son joueur
- Seul celui qui commence la prochaine enchère tire la carte
- Pause/Règles seulement du côté du propriétaire (en bas)

### Fin de partie
- Révélation, Revanche (avec la série)
- Partage d'une IMAGE du résultat pour WhatsApp
- Meilleure recrue / Bonne affaire / Le flop

### Profil
- 3 chiffres seulement
- Trophées difficiles Bronze/Argent/Or avec barres de progression, niveaux lents
- Album de collection, missions de la semaine
- PAS d'événements du week-end

### Accroche
- « Mise. Bluffe. Recrute. » + « Construis l'équipe de tes rêves. » (jamais de chiffres)

### Édition 100 % foot (nouvelle version)
- Tout est foot : terrain, maillots, ambiance stade
- Au départ, choix du format : Five (1 gardien + 4), XI de légende (formation au choix : 4-3-3, 4-4-2, 3-5-2…), Duel rapide (3 joueurs)
- Puis choix du pack (Légendes, Ligue 1, Algérie, Premier League, Ballons d'Or…)
- Chaque carte a un poste (G, DEF, MIL, ATT) + club/pays
- Pendant les enchères, chacun voit son terrain se remplir ; on ne peut miser que s'il reste une place à ce poste
- Fin : équipes affichées sur le terrain, révélation poste par poste, petit bonus si plusieurs joueurs du même club ou pays, puis le vainqueur
- Garder les VRAIS noms des joueurs et les noms des packs tels quels (ne pas renommer)
- Aucune vraie photo ni logo de club : maillots dessinés aux couleurs du club avec initiales, illustrations originales
- Mention « Jeu de fan non officiel » dans Mentions et crédits
- Packs : 30 à 40 joueurs connus, saisons à jour, notes cohérentes dans chaque pack
- Commencer par un prototype au format Five

### À corriger dans les packs actuels (repéré dans la base)
- Les packs foot n'ont pas de poste séparé : il faut un format « Nom/Poste/Club ou Pays/Force »
- Le pack « Légendes du foot » n'a presque pas de gardiens (Yachine, Buffon) : en ajouter pour le Five
- Les ordis doivent vérifier qu'il leur reste une place au bon poste avant de miser

### Design
- Garder le style « pâte à modeler » (boutons arrondis, ombres internes douces) *(remplacé par « Stade de nuit » : voir « Points tranchés »)*
- Tout sur UN seul écran, sans défiler : tester en 360 × 643 (Oppo A40)
- Ambiance « Vif » par défaut : fond clair avec taches pastel, rouge #FF3B5C, bleu #2D7BFF, jaune #FFB400, vert #00B874, encre #1A1446, carte centrale blanche avec gros contour coloré
- Toujours garder le bouton « Couleurs » avec des ambiances vives : Bonbon, Lagon, Citron, Coucher de soleil, Stade, Néon, Noir & or
- N'aime pas : beige/terne, triste, surchargé
- Icône : idée des deux M (écusson de club « MM », MM en pâte écrasée rouge/bleu, MM en cartes). Le marteau seul = trop classique
- Pour les designs : beaucoup d'idées vraiment différentes, en images à comparer (planche JPG/PNG pour WhatsApp), avec l'avis de Claude

### Boutique
- Gratuit : quelques packs, 1 pack offert par semaine, défi du jour, mode Entre amis, 1 pack perso *(depuis : environ 90 % gratuit)*
- Tout s'achète séparément : pack 0,99 €, pass par univers 2,99–3,99 €, packs perso +3 (1,99 €), +10 (4,99 €), illimité (9,99 €), collection complète chère (19,99 €)
- Paiement en ligne avec Stripe : préparé mais pas encore relié (« Paiement en préparation »)
- ~~Codes d'activation liés au téléphone~~ *(supprimés : paiement en ligne uniquement)*

### Méthode
- Une page HTML + un fichier de packs, publiée en appli Claude, toujours au MÊME lien
- Tester chaque changement : partie solo + à deux, aucune erreur, hauteur ≤ 643, équilibre des ordis
- Envoyer des captures pour qu'il choisisse
- NE PAS faire l'APK tant qu'il n'a pas validé le design (pour ne pas gaspiller ses crédits)

### Plus tard (APK / Play Store)
- Appli installable et jouable hors ligne, puis Capacitor ou TWA
- Icône 512×512, bannière 1024×500, captures, description, politique de confidentialité, classement par âge
- À vérifier : Google exige souvent sa propre facturation dans les applis, et Stripe n'ouvre pas forcément de compte aux entreprises algériennes
