# Sortie de Mercato Max Foot sur le Play Store : le guide pas à pas

## Ce qui est déjà prêt
- **L'appli Android** (dossier `appli/`) : le jeu complet, jouable sans internet, avec son icône, son écran de lancement, l'écran bloqué en portrait et le bouton retour du téléphone géré. Identifiant de l'appli : `com.mercatomax.foot` (il ne pourra plus changer après le premier envoi).
- **Le paiement Google Play** dans le jeu : achat, déblocage immédiat, prix affiché dans la monnaie du joueur, bouton « Restaurer mes achats ». Les achats sont liés au compte Google : on les retrouve sur un nouveau téléphone.
- **La construction automatique** sur GitHub : à chaque modification du jeu, GitHub fabrique l'appli tout seul (onglet **Actions** du dépôt, construction « Appli Android Mercato Max Foot »). Les fichiers se téléchargent en bas de la page de la construction, rubrique **Artifacts** :
  - `mercato-max-foot-apk-…` : l'APK à installer sur ton téléphone pour essayer ;
  - `mercato-max-foot-playstore-…` : le fichier **.aab** à envoyer sur la Play Console. Il n'apparaît qu'une fois la clé d'envoi ajoutée (étape 3).
- **Les produits à vendre** : `play-store/produits-play-console.csv`, avec 97 produits (la collection, 3 pass, 90 packs et 3 offres de packs perso), prix compris.
- **La fiche magasin et les réponses aux questionnaires** : `play-store/fiche-play-store.md`.
- **Les visuels** : icône, bannière et 6 captures dans `play-store/`.

## Ce que toi seul peux faire, dans l'ordre

### 1. Créer ton compte développeur Google Play
Va sur play.google.com/console et choisis un compte **personnel**. Il faut payer 25 $ une seule fois, puis vérifier ton identité (pièce d'identité) et ton numéro de téléphone. Compte quelques jours pour la vérification.

### 2. Créer ton profil marchand (pour être payé)
Dans la Play Console, ouvre **Configuration › Profil de paiement**. L'Algérie est acceptée pour vendre. Indique ton compte bancaire pour recevoir l'argent. Google garde 15 % de chaque vente.

### 3. Mettre la clé d'envoi dans GitHub
Je t'ai envoyé 3 fichiers :
- `cle-envoi-mercatomax.jks` : la clé elle-même. **Garde-la précieusement**, par exemple sur une clé USB et dans ton Google Drive.
- `MMF_KEYSTORE_BASE64.txt` : la même clé, écrite en texte.
- `MMF_KEYSTORE_PASSWORD.txt` : son mot de passe.

Sur GitHub, ouvre le dépôt **musicoff**, puis **Settings › Secrets and variables › Actions › New repository secret**. Crée 2 secrets :
- Nom `MMF_KEYSTORE_BASE64` : colle tout le contenu de `MMF_KEYSTORE_BASE64.txt` ;
- Nom `MMF_KEYSTORE_PASSWORD` : colle le contenu de `MMF_KEYSTORE_PASSWORD.txt`.

Ensuite, onglet **Actions › Appli Android Mercato Max Foot › Run workflow** : la construction fabrique le fichier **.aab** signé.

### 4. Créer l'appli dans la Play Console
Bouton **Créer une application**, puis :
- Nom : **Mercato Max Foot** ;
- Langue par défaut : français ;
- Type : jeu ;
- Gratuit ;
- Coche les déclarations.

Quand la Play Console le demande, accepte la **signature d'application par Google Play**. Google garde alors la clé finale, et ta clé d'envoi sert seulement à prouver que c'est bien toi qui envoies l'appli.

### 5. Remplir la fiche et les questionnaires
Copie-colle les textes de `play-store/fiche-play-store.md` :
- nom, descriptions et catégorie ;
- réponses aux questionnaires : publicité, public cible, classification, sécurité des données.

Ajoute l'icône, la bannière et les captures du dossier `play-store/`.

### 6. L'adresse de la politique de confidentialité
Google exige une **adresse web publique**. La page existe déjà (`politique-confidentialite.html`), mais elle n'est en ligne nulle part. Dis-moi où tu veux la mettre (je te recommande ton site GitHub, déjà en ligne) et je m'en occupe.

### 7. Créer les produits à vendre
**Monétiser › Produits › Produits intégrés à l'application**, bouton **Importer**, puis choisis `produits-play-console.csv`. Les prix sont donnés en dollars (la monnaie par défaut des comptes algériens), et Google calcule tout seul le prix dans chaque pays :

| Produit | Prix |
|---|---|
| Pack | 0,99 $ |
| Pass Clubs | 5,99 $ |
| Pass Sélections / Pass Thèmes | 3,99 $ |
| Collection complète | 14,99 $ |
| +3 packs perso | 1,99 $ |
| +10 packs perso | 3,99 $ |
| Packs perso illimités | 5,99 $ |

Si le bouton Importer n'est pas proposé sur ton compte, dis-le-moi : je te donnerai une autre méthode.

### 8. Tester les achats sans payer
**Paramètres › Test de licence** : ajoute ton adresse Gmail. Sur ton téléphone, les achats deviennent des achats de test gratuits.

### 9. Le test fermé (obligatoire)
Les nouveaux comptes personnels doivent faire tester l'appli par **au moins 12 personnes pendant 14 jours** avant de pouvoir la publier pour tout le monde :
1. Ouvre **Tester › Test fermé**, puis crée une version et envoie le fichier **.aab**.
2. Ajoute les adresses Gmail de tes testeurs (amis, famille) et envoie-leur le lien d'inscription.
3. Les testeurs doivent installer le jeu et y jouer de temps en temps pendant les 14 jours.

Ensuite : **Production › Demander l'accès**, réponds aux quelques questions, puis envoie la version de production.

### 10. Mises à jour
À chaque modification du jeu, GitHub refabrique le fichier .aab avec un numéro de version plus grand. Il suffit de l'envoyer dans une nouvelle version sur la Play Console.

## Points d'attention
- **Noms réels des joueurs et des clubs** : Google peut refuser une appli s'il estime qu'elle utilise des marques sans autorisation. Le jeu limite ce risque (aucun logo ni photo, mention « Jeu de fan non officiel »), mais le risque existe. Si Google refuse, il faudra renommer les packs de clubs (par exemple « Légendes de Paris » au lieu de « Légendes du PSG »).
- **Garde ta clé d'envoi** (`cle-envoi-mercatomax.jks`) et son mot de passe. En cas de perte, Google peut la remplacer, mais il faut en faire la demande et attendre quelques jours.
- **ElevenLabs** : pense à annuler l'abonnement Démarreur si tu ne génères plus de voix.
