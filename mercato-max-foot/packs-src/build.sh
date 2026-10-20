#!/bin/sh
# Rassemble tous les packs dans packs.js (base d'abord, puis chaque fichier de packs-src)
cd "$(dirname "$0")"
{ cat base.js; for f in *.js; do case "$f" in base.js|check.js|EXEMPLE.js) ;; *) printf '\n/* ---- %s ---- */\n' "$f"; cat "$f";; esac; done; } > ../packs.js
echo "packs.js : $(grep -c '^{id:' ../packs.js) packs"
