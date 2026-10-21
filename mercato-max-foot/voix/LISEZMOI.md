# Voix du commentateur

Les phrases sont dans `phrases.json` (une clé par moment du jeu). Le jeu joue
`voix/<moment>_<n>.mp3` au bon moment ; tant que les fichiers n'existent pas,
il reste silencieux et le réglage « Voix du commentateur » affiche « Bientôt disponible ».

## Générer les voix (ElevenLabs)

1. Clé API ElevenLabs : secret réseau de l'environnement (en-tête `xi-api-key` sur `api.elevenlabs.io`) ou variable `ELEVENLABS_API_KEY`
   et accès réseau à `api.elevenlabs.io`.
2. `node voix/generer.mjs` : liste les voix de ton compte (ajoute d'abord une voix
   française de commentateur sportif depuis la Voice Library du site).
3. `node voix/generer.mjs <voice_id> echantillon` : 4 phrases pour écouter.
4. `node voix/generer.mjs <voice_id>` : génère tout et met à jour `liste.js`.
