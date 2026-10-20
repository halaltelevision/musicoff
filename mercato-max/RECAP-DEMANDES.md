# Mercato Max : ce que le créateur a demandé et validé

Récapitulatif écrit à partir de la conversation sur l'édition foot (octobre 2026), pour appliquer les mêmes choix à la version avec tous les thèmes (manga, foot, films, sport, jeux vidéo, animaux, découverte…).
Les choses propres au foot (postes, terrain, maillots, format Five) sont à la fin, à part.

À lire avant de toucher à l'appli. Ces choix s'ajoutent aux règles déjà validées du skill « mercato-max-foot » (budget avec le billet vert, chacun son tour, aucun indice de force pendant la partie, etc.).

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
