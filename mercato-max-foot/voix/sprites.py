# Regroupe les phrases voix/phrases/<moment>_<n>.mp3 en un seul fichier voix/<moment>.mp3 par moment
# (0,7 s de silence entre deux phrases) et écrit voix/liste.js : window.VOIX={moment:[[début,durée],...]}.
# Un fichier par moment au lieu d'un par phrase : moins de fichiers à publier et à charger.
import glob, json, os, re, subprocess, tempfile
D = os.path.dirname(os.path.abspath(__file__)); GAP = 0.7
# Silences du début et de la fin coupés (la phrase part tout de suite), volume égalisé
TRIM = "silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse,loudnorm=I=-16:TP=-1.5"
def dur(f): return float(subprocess.check_output(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",f]))
moments = {}
for f in glob.glob(os.path.join(D, "phrases", "*.mp3")):
    k, n = re.match(r"(.+)_(\d+)\.mp3$", os.path.basename(f)).groups(); moments.setdefault(k, []).append((int(n), f))
liste = {}
with tempfile.TemporaryDirectory() as t:
    sil = os.path.join(t, "s.wav")
    subprocess.run(["ffmpeg","-loglevel","error","-y","-f","lavfi","-i",f"anullsrc=r=44100:cl=mono","-t",str(GAP),sil], check=True)
    for k, fs in sorted(moments.items()):
        fs.sort(); segs, parts, pos = [], [], 0.0
        for i, (_, f) in enumerate(fs):
            w = os.path.join(t, f"{k}{i}.wav"); subprocess.run(["ffmpeg","-loglevel","error","-y","-i",f,"-af",TRIM,"-ar","44100","-ac","1",w], check=True)
            d = dur(w); segs.append([round(pos, 3), round(d, 3)]); parts += [w, sil]; pos += d + GAP
        lst = os.path.join(t, k + ".txt"); open(lst, "w").write("".join(f"file '{p}'\n" for p in parts))
        subprocess.run(["ffmpeg","-loglevel","error","-y","-f","concat","-safe","0","-i",lst,"-b:a","96k",os.path.join(D, k + ".mp3")], check=True)
        liste[k] = segs
open(os.path.join(D, "liste.js"), "w").write("window.VOIX=" + json.dumps(liste, separators=(",", ":")) + ";\n")
print(len(liste), "fichiers")
