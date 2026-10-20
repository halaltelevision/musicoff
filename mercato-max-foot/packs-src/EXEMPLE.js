// Pack d'un seul club : 4 champs par ligne → Nom/Poste/Pays/Note (le club est dans "club")
window.FOOT_PACKS.push(
{id:"exemple_club",name:"Légendes de l'Exemple FC",cat:"clubs",sub:"France",club:"Exemple FC",raw:`
Prénom Nom/G/France/85
...`},
// Pack multi-clubs (sélection ou thème) : 5 champs → Nom/Poste/Club/Pays/Note (club = le club où il a le plus marqué l'histoire)
{id:"exemple_theme",name:"Exemple de thème",cat:"themes",sub:"Une phrase courte",raw:`
Prénom Nom/ATT/Real Madrid/Brésil/93
...`}
);
Object.assign(window.CLUB_COLORS,{"Exemple FC":["#004170","#FFFFFF"],"Real Madrid":["#FFFFFF","#D4A53A"]});
