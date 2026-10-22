# Génère les bruitages de stade avec ElevenLabs (sound generation). Jamais de musique.
# Usage : python3 voix/sfx/generer-sfx.py   (clé : secret réseau de la session ou ELEVENLABS_API_KEY)
import json, os, urllib.request
D = os.path.dirname(os.path.abspath(__file__))
SONS = {
 "foule_1":   ("Huge football stadium crowd roaring and cheering after a goal, 40000 fans, drums, whistles, no music", 4),
 "foule_2":   ("Football stadium crowd explodes with joy, loud cheering and clapping, horns, no music", 4),
 "clameur_1": ("Football stadium crowd rising murmur of excitement, short cheer, no music", 2.5),
 "clameur_2": ("Stadium fans cheer briefly and clap, excited crowd reaction, no music", 2.5),
 "ohhh_1":    ("Football stadium crowd disappointed groan 'ohhh' after a missed chance, no music", 2.5),
 "applaus":   ("Stadium crowd warm applause and whistles of approval, no music", 3),
 "chant_1":   ("French football supporters chanting 'Allez ! Allez ! Allez !' in a stadium, clapping in rhythm, no instruments, no music", 5),
 "chant_2":   ("Football ultras chanting and clapping in rhythm with a bass drum, stadium atmosphere, no melody, no music", 5),
 "chant_3":   ("Stadium crowd rhythmic clapping getting faster, fans shouting, tension, no music", 4),
}
KEY = os.environ.get("ELEVENLABS_API_KEY")
for nom, (txt, dur) in SONS.items():
    h = {"Content-Type": "application/json", **({"xi-api-key": KEY} if KEY else {})}
    req = urllib.request.Request("https://api.elevenlabs.io/v1/sound-generation?output_format=mp3_44100_128",
        data=json.dumps({"text": txt, "duration_seconds": dur, "prompt_influence": 0.5}).encode(), headers=h)
    open(os.path.join(D, nom + "_brut.mp3"), "wb").write(urllib.request.urlopen(req).read())
    print("ok", nom)
