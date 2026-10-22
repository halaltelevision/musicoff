# Enregistre les prénoms (voix/prenoms.txt) + les noms fixes du jeu, puis les regroupe en un fichier par lettre.
# 10 prénoms par requête, séparés par des retours à la ligne (≈1 s de silence), découpés ensuite sur les silences.
# Reprend là où il s'est arrêté (les prénoms déjà dans voix/prenoms/ sont sautés). Clé : secret réseau ou ELEVENLABS_API_KEY.
import json, os, re, subprocess, sys, unicodedata, urllib.request, tempfile
D = os.path.dirname(os.path.abspath(__file__)); OUT = os.path.join(D, "prenoms"); os.makedirs(OUT, exist_ok=True)
VOICE = "ecxPjiGTvAfpGEams6ec"; KEY = os.environ.get("ELEVENLABS_API_KEY")
def cle(n): return re.sub(r"[^a-z0-9]", "", unicodedata.normalize("NFD", n.lower()).encode("ascii", "ignore").decode())
FIXES = {"toi": "Toi", "lerequin": "Le Requin", "leflambeur": "Le Flambeur", "mmeprudence": "Madame Prudence",
         "joueur1": "Joueur un", "joueur2": "Joueur deux", "joueur3": "Joueur trois", "joueur4": "Joueur quatre"}
todo = dict(FIXES)
for l in open(os.path.join(D, "prenoms.txt"), encoding="utf8"):
    l = l.strip()
    if l and not l.startswith("#") and cle(l) not in todo: todo[cle(l)] = l
todo = {k: v for k, v in todo.items() if not os.path.exists(os.path.join(OUT, k + ".mp3"))}
print(len(todo), "à enregistrer")
def tts(txt):
    h = {"Content-Type": "application/json", **({"xi-api-key": KEY} if KEY else {})}
    req = urllib.request.Request(f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE}?output_format=mp3_44100_96",
        data=json.dumps({"text": txt, "model_id": "eleven_v3", "voice_settings": {"stability": 0.5}}).encode(), headers=h)
    return urllib.request.urlopen(req).read()
def decoupe(mp3, n, t):
    f = os.path.join(t, "b.mp3"); open(f, "wb").write(mp3)
    d = float(subprocess.check_output(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",f]))
    o = subprocess.run(["ffmpeg","-i",f,"-af","silencedetect=n=-35dB:d=0.3","-f","null","-"], capture_output=True, text=True).stderr
    st = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", o)]; en = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", o)]
    sil = list(zip(st, en + [d] * (len(st) - len(en))))
    segs, pos = [], 0.0
    for a, b in sil:
        if a - pos > 0.15: segs.append((max(0, pos - 0.04), a + 0.08))
        pos = b
    if d - pos > 0.15: segs.append((max(0, pos - 0.04), d))
    return f, segs if len(segs) == n else None
items = list(todo.items())
with tempfile.TemporaryDirectory() as t:
    for i in range(0, len(items), 10):
        lot = items[i:i + 10]
        try: mp3 = tts("[excited] " + "\n\n".join(v + " !" for _, v in lot))
        except urllib.error.HTTPError as e: print("arrêt :", e.code, e.read()[:200]); sys.exit(1)
        f, segs = decoupe(mp3, len(lot), t)
        if not segs:  # découpage douteux : un prénom par requête
            for k, v in lot:
                try: f1, s1 = decoupe(tts("[excited] " + v + " !"), 1, t)
                except urllib.error.HTTPError as e: print("arrêt :", e.code, e.read()[:200]); sys.exit(1)
                if s1: subprocess.run(["ffmpeg","-loglevel","error","-y","-i",f1,"-ss",str(s1[0][0]),"-to",str(s1[0][1]),"-af","loudnorm=I=-16:TP=-1.5","-ar","44100","-ac","1",os.path.join(OUT,k+".mp3")], check=True)
            continue
        for (k, v), (a, b) in zip(lot, segs):
            subprocess.run(["ffmpeg","-loglevel","error","-y","-i",f,"-ss",str(a),"-to",str(b),"-af","loudnorm=I=-16:TP=-1.5","-ar","44100","-ac","1",os.path.join(OUT,k+".mp3")], check=True)
        print("ok", i + len(lot), "/", len(items), flush=True)
