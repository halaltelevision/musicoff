# Regroupe les prénoms enregistrés (voix/prenoms/<clé>.mp3) en un fichier par première lettre : voix/noms/<lettre>.mp3,
# et écrit voix/noms.js : window.NOMS={clé:[lettre,début,durée]}.
import glob, json, os, subprocess, tempfile
D = os.path.dirname(os.path.abspath(__file__)); GAP = 0.5; os.makedirs(os.path.join(D, "noms"), exist_ok=True)
def dur(f): return float(subprocess.check_output(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",f]))
groupes = {}
for f in sorted(glob.glob(os.path.join(D, "prenoms", "*.mp3"))):
    k = os.path.basename(f)[:-4]; groupes.setdefault(k[0], []).append((k, f))
noms = {}
with tempfile.TemporaryDirectory() as t:
    sil = os.path.join(t, "s.wav")
    subprocess.run(["ffmpeg","-loglevel","error","-y","-f","lavfi","-i","anullsrc=r=44100:cl=mono","-t",str(GAP),sil], check=True)
    for c, fs in sorted(groupes.items()):
        parts, pos = [], 0.0
        for k, f in fs:
            w = os.path.join(t, k + ".wav"); subprocess.run(["ffmpeg","-loglevel","error","-y","-i",f,"-ar","44100","-ac","1",w], check=True)
            d = dur(w); noms[k] = [c, round(pos, 3), round(d, 3)]; parts += [w, sil]; pos += d + GAP
        lst = os.path.join(t, c + ".txt"); open(lst, "w").write("".join(f"file '{p}'\n" for p in parts))
        subprocess.run(["ffmpeg","-loglevel","error","-y","-f","concat","-safe","0","-i",lst,"-b:a","96k",os.path.join(D, "noms", c + ".mp3")], check=True)
open(os.path.join(D, "noms.js"), "w").write("window.NOMS=" + json.dumps(noms, separators=(",", ":")) + ";\n")
print(len(noms), "prénoms dans", len(groupes), "fichiers")
