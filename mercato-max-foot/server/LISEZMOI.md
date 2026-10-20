# Serveur de paiement Mercato Max Foot

Ce petit serveur relie le jeu à Stripe. Il n'est **pas encore branché** : tant que `stripe.api` est vide dans `config.js`, le jeu affiche « Paiement en préparation ».

## Ce qu'il fait
- `POST /checkout` : ouvre la page de paiement Stripe pour un produit (pack, pass, packs perso, collection complète).
- `GET /verify` : au retour du paiement, confirme l'achat et le débloque dans le jeu.
- `POST /restore` : un joueur qui change de téléphone retrouve ses achats avec l'e-mail donné à Stripe (bouton « Restaurer mes achats » dans la boutique, visible une fois Stripe relié).
- `POST /webhook` : note chaque paiement dans `purchases.jsonl` (c'est ce fichier qui permet de restaurer les achats : garde-le bien).

Les prix et les produits sont lus directement dans `../config.js` et `../packs.js` : rien à recopier.

## Le jour où tu branches Stripe
1. Héberge le dossier `mercato-max-foot` (jeu + serveur) sur un service Node (Render, Railway, un VPS…). Node 18 ou plus, aucune installation.
2. Mets les variables : `STRIPE_SECRET_KEY` (ta clé secrète Stripe), `STRIPE_WEBHOOK_SECRET` (après avoir créé le webhook dans Stripe vers `https://ton-serveur/webhook`, événement `checkout.session.completed`), et `ALLOWED_ORIGIN` (l'adresse du jeu).
3. Lance : `node server/server.js`.
4. Dans `config.js`, mets l'adresse du serveur : `stripe:{api:"https://ton-serveur",links:{}}`, puis republie le jeu.
5. Fais un achat test avec une clé `sk_test_...` et la carte 4242 4242 4242 4242.

## À vérifier avant la sortie
- Sur le Play Store, Google exige en général sa propre facturation pour les achats numériques dans les applis.
- Stripe n'ouvre pas forcément de compte directement aux entreprises algériennes : à vérifier.
- `config.js` doit être le même sur le jeu et sur le serveur (mêmes prix, mêmes packs premium).
