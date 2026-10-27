/* Mercato Max — édition foot : packs de joueurs.
   Format d'une ligne : Nom / Poste (G, DEF, MIL, ATT) / Club / Pays / Note
   Jeu de fan non officiel : aucune photo ni logo, maillots dessinés. */
window.FOOT_PACKS=[]; /* anciens packs Légendes, Ligue 1, Algérie remplacés par ceux de l'appli générale (base_*.js) */
/* Couleurs des maillots dessinés : [fond, bande/initiales] */
window.CLUB_COLORS={"Dynamo Moscou":["#1D4E9E","#fff"],"Juventus":["#111","#fff"],"Real Madrid":["#fff","#D4A53A"],"Bayern":["#DC052D","#fff"],"Manchester United":["#DA291C","#111"],"Marseille":["#fff","#2FAEE0"],"Milan":["#C8102E","#111"],"Barcelone":["#A50044","#004D98"],"Liverpool":["#C8102E","#F6EB61"],"Arsenal":["#EF0107","#fff"],"Santos":["#fff","#111"],"Naples":["#1E90E0","#fff"],"Ajax":["#fff","#D2122E"],"Inter":["#0068A8","#111"],"Chelsea":["#034694","#fff"],"PSG":["#004170","#DA291C"],"Rennes":["#E13327","#111"],"Monaco":["#E2001A","#fff"],"Lens":["#FFD200","#E1001A"],"Nice":["#C8102E","#111"],"Lille":["#E01E13","#20325F"],"Lyon":["#fff","#1E3F95"],"Ettifaq":["#0E7C3A","#E31B23"],"Grenade":["#C8102E","#fff"],"MC Alger":["#C8102E","#0E8A3E"],"Caen":["#1F3A8C","#E30613"],"USM Alger":["#C8102E","#111"],"JS Kabylie":["#FFD100","#0E8A3E"],"Manchester City":["#6CABDD","#fff"],"Rangers":["#1B458F","#fff"],"Dortmund":["#FDE100","#111"],"NA Hussein Dey":["#C8102E","#FFD100"],"Bochum":["#005BA9","#fff"],"Al-Sadd":["#fff","#111"],"Fulham":["#fff","#111"],"Young Boys":["#FFD200","#111"],"Espérance":["#C8102E","#FFD100"],"GC Mascara":["#0E8A3E","#fff"],"Porto":["#0050A0","#fff"],"Al-Ittihad":["#FFD200","#111"],"Valence":["#fff","#EE3524"],"Francfort":["#111","#E1000F"],"Twente":["#E30613","#fff"],"Leverkusen":["#E32221","#111"],"Saint-Étienne":["#00924B","#fff"],"Mulhouse":["#1D4E9E","#FFD200"],"Wolfsburg":["#65B32E","#fff"],"Sporting":["#00804A","#fff"],"Montpellier":["#1D2D5B","#F58220"]};

/* ---- base_1.js ---- */
// Packs convertis depuis base_src_1.txt — format multi-clubs : Nom/Poste/Club/Pays/Note
window.FOOT_PACKS.push(
{id:"s_liga",name:"La Liga",cat:"ligues",sub:"Championnats",raw:`
Kylian Mbappé/ATT/Real Madrid/France/92
Lamine Yamal/ATT/Barcelone/Espagne/89
Vinícius Jr/ATT/Real Madrid/Brésil/90
Pedri/MIL/Barcelone/Espagne/87
Jude Bellingham/MIL/Real Madrid/Angleterre/89
Raphinha/ATT/Barcelone/Brésil/87
Thibaut Courtois/G/Real Madrid/Belgique/90
Federico Valverde/MIL/Real Madrid/Uruguay/87
Julián Álvarez/ATT/Atlético Madrid/Argentine/86
Jan Oblak/G/Atlético Madrid/Slovénie/89
Aurélien Tchouaméni/MIL/Real Madrid/France/84
Frenkie de Jong/MIL/Barcelone/Pays-Bas/86
Jules Koundé/DEF/Barcelone/France/85
Pau Cubarsí/DEF/Barcelone/Espagne/82
Joan García/G/Barcelone/Espagne/80
Arda Güler/MIL/Real Madrid/Turquie/84
Nico Williams/ATT/Athletic Bilbao/Espagne/83
Robert Lewandowski/ATT/Barcelone/Pologne/92
Trent Alexander-Arnold/DEF/Real Madrid/Angleterre/86
Antonio Rüdiger/DEF/Real Madrid/Allemagne/86
Dean Huijsen/DEF/Real Madrid/Espagne/80
Antoine Griezmann/ATT/Atlético Madrid/France/89
Dani Olmo/MIL/Barcelone/Espagne/83
Marcus Rashford/ATT/Barcelone/Angleterre/82
Rodrygo/ATT/Real Madrid/Brésil/84
Éder Militão/DEF/Real Madrid/Brésil/85
Eduardo Camavinga/MIL/Real Madrid/France/83
Álvaro Carreras/DEF/Real Madrid/Espagne/78
Fermín López/MIL/Barcelone/Espagne/78
Gavi/MIL/Barcelone/Espagne/80
Alejandro Balde/DEF/Barcelone/Espagne/79
Ferran Torres/ATT/Barcelone/Espagne/79
Álex Baena/MIL/Atlético Madrid/Espagne/80
Alexander Sørloth/ATT/Atlético Madrid/Norvège/78
Mikel Oyarzabal/ATT/Real Sociedad/Espagne/81
Takefusa Kubo/ATT/Real Sociedad/Japon/80
Franco Mastantuono/ATT/Real Madrid/Argentine/76
Unai Simón/G/Athletic Bilbao/Espagne/82
Wojciech Szczęsny/G/Barcelone/Pologne/84`},
{id:"s_seriea",name:"Serie A",cat:"ligues",sub:"Championnats",raw:`
Lautaro Martínez/ATT/Inter/Argentine/87
Kevin De Bruyne/MIL/Naples/Belgique/90
Mike Maignan/G/Milan/France/86
Nicolò Barella/MIL/Inter/Italie/87
Alessandro Bastoni/DEF/Inter/Italie/86
Scott McTominay/MIL/Naples/Écosse/84
Hakan Çalhanoğlu/MIL/Inter/Turquie/86
Rafael Leão/ATT/Milan/Portugal/85
Kenan Yıldız/ATT/Juventus/Turquie/85
Marcus Thuram/ATT/Inter/France/84
Luka Modrić/MIL/Milan/Croatie/92
Federico Dimarco/DEF/Inter/Italie/84
Gleison Bremer/DEF/Juventus/Brésil/84
Christian Pulisic/ATT/Milan/États-Unis/83
Ademola Lookman/ATT/Atalanta/Nigeria/83
Nico Paz/MIL/Côme/Argentine/79
Mile Svilar/G/Roma/Serbie/80
Adrien Rabiot/MIL/Milan/France/81
Dušan Vlahović/ATT/Juventus/Serbie/81
Rasmus Højlund/ATT/Naples/Danemark/78
Frank Anguissa/MIL/Naples/Cameroun/83
Denzel Dumfries/DEF/Inter/Pays-Bas/82
Stanislav Lobotka/MIL/Naples/Slovaquie/81
Manu Koné/MIL/Roma/France/80
Yann Sommer/G/Inter/Suisse/83
Jonathan David/ATT/Juventus/Canada/82
Paulo Dybala/ATT/Roma/Argentine/85
Romelu Lukaku/ATT/Naples/Belgique/85
Teun Koopmeiners/DEF/Juventus/Pays-Bas/81
Francisco Conceição/ATT/Juventus/Portugal/79
Charles De Ketelaere/ATT/Atalanta/Belgique/79
Moise Kean/ATT/Fiorentina/Italie/80
Christopher Nkunku/ATT/Milan/France/82
Álvaro Morata/ATT/Côme/Espagne/81
Mattia Zaccagni/ATT/Lazio/Italie/77
Riccardo Orsolini/ATT/Bologne/Italie/78
Matías Soulé/ATT/Roma/Argentine/76
Michele Di Gregorio/G/Juventus/Italie/77
Marco Carnesecchi/G/Atalanta/Italie/78
Giovanni Di Lorenzo/DEF/Naples/Italie/82
Amir Rrahmani/DEF/Naples/Kosovo/80
Fikayo Tomori/DEF/Milan/Angleterre/78
`},
{id:"s_fra",name:"France",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Kylian Mbappé/ATT/Real Madrid/France/92
Ousmane Dembélé/ATT/PSG/France/90
Michael Olise/ATT/Bayern/France/87
William Saliba/DEF/Arsenal/France/86
Mike Maignan/G/Milan/France/86
Désiré Doué/ATT/PSG/France/84
Aurélien Tchouaméni/MIL/Real Madrid/France/84
Jules Koundé/DEF/Barcelone/France/85
Dayot Upamecano/DEF/Bayern/France/84
Ibrahima Konaté/DEF/Liverpool/France/84
Hugo Ekitike/ATT/Liverpool/France/82
Rayan Cherki/MIL/Manchester City/France/81
Eduardo Camavinga/MIL/Real Madrid/France/83
Bradley Barcola/ATT/PSG/France/82
Marcus Thuram/ATT/Inter/France/84
Manu Koné/MIL/Roma/France/80
Warren Zaïre-Emery/MIL/PSG/France/80
Adrien Rabiot/MIL/Milan/France/81
Lucas Chevalier/G/PSG/France/80
Théo Hernandez/DEF/Al-Hilal/France/85
Maghnes Akliouche/MIL/Monaco/France/80
Lucas Hernandez/DEF/PSG/France/82
Malo Gusto/DEF/Chelsea/France/80
Youssouf Fofana/MIL/Milan/France/80
Khéphren Thuram/MIL/Juventus/France/80
N'Golo Kanté/MIL/Al-Ittihad/France/88
Randal Kolo Muani/ATT/Tottenham/France/79
Jean-Philippe Mateta/ATT/Crystal Palace/France/78
Christopher Nkunku/ATT/Milan/France/82
Kingsley Coman/ATT/Al-Nassr/France/84
Castello Lukeba/DEF/Leipzig/France/78
Maxence Lacroix/DEF/Crystal Palace/France/77
Pierre Kalulu/DEF/Juventus/France/78
Lucas Digne/DEF/Aston Villa/France/79
Brice Samba/G/Rennes/France/77
Mattéo Guendouzi/MIL/Fenerbahçe/France/79
Wesley Fofana/DEF/Chelsea/France/79
Alphonse Areola/G/West Ham/France/76
Robin Risser/G/Lens/France/70`},
{id:"s_mar",name:"Maroc",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Achraf Hakimi/DEF/PSG/Maroc/87
Yassine Bounou/G/Al-Hilal/Maroc/85
Brahim Díaz/MIL/Real Madrid/Maroc/82
Noussair Mazraoui/DEF/Manchester United/Maroc/80
Nayef Aguerd/DEF/Marseille/Maroc/79
Abde Ezzalzouli/ATT/Betis/Maroc/77
Youssef En-Nesyri/ATT/Fenerbahçe/Maroc/80
Ismael Saibari/MIL/PSV/Maroc/78
Bilal El Khannouss/MIL/Stuttgart/Maroc/77
Neil El Aynaoui/MIL/Roma/Maroc/75
Sofyan Amrabat/MIL/Betis/Maroc/81
Azzedine Ounahi/MIL/Girona/Maroc/78
Eliesse Ben Seghir/ATT/Leverkusen/Maroc/77
Ayoub El Kaabi/ATT/Olympiakos/Maroc/78
Amine Adli/ATT/Bournemouth/Maroc/77
Issa Diop/DEF/Fulham/Maroc/74
Hakim Ziyech/ATT/Wydad/Maroc/84
Soufiane Rahimi/ATT/Al-Ain/Maroc/75
Chadi Riad/DEF/Crystal Palace/Maroc/72
Adam Aznou/DEF/Everton/Maroc/70
Chemsdine Talbi/ATT/Sunderland/Maroc/70
Hamza Igamane/ATT/Lille/Maroc/72
Abdelhamid Aït Boudlal/DEF/Rennes/Maroc/70
Jawad El Yamiq/DEF/Al-Wehda/Maroc/70
Romain Saïss/DEF/Al-Sadd/Maroc/77
Munir Mohamedi/G/RS Berkane/Maroc/72
Oussama Targhalline/MIL/Feyenoord/Maroc/68
Zakaria Aboukhlal/ATT/Torino/Maroc/72
Achraf Dari/DEF/Al Ahly/Maroc/72
Ilias Akhomach/ATT/Villarreal/Maroc/70
Selim Amallah/MIL/Valladolid/Maroc/72
Yahia Attiyat Allah/DEF/Wydad/Maroc/71
El Mehdi Al Harrar/G/Raja Casablanca/Maroc/64
Mehdi Benabid/G/Wydad/Maroc/68
Ahmed Reda Tagnaouti/G/AS FAR/Maroc/72
Yahya Jabrane/MIL/Wydad/Maroc/70
Amir Richardson/MIL/Fiorentina/Maroc/72
`},
{id:"s_esp",name:"Espagne",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Lamine Yamal/ATT/Barcelone/Espagne/89
Pedri/MIL/Barcelone/Espagne/87
Rodri/MIL/Manchester City/Espagne/90
Martín Zubimendi/MIL/Arsenal/Espagne/83
Nico Williams/ATT/Athletic Bilbao/Espagne/83
David Raya/G/Arsenal/Espagne/83
Fabián Ruiz/MIL/PSG/Espagne/82
Dani Olmo/MIL/Barcelone/Espagne/83
Pau Cubarsí/DEF/Barcelone/Espagne/82
Marc Cucurella/DEF/Chelsea/Espagne/81
Mikel Merino/MIL/Arsenal/Espagne/81
Dean Huijsen/DEF/Real Madrid/Espagne/80
Mikel Oyarzabal/ATT/Real Sociedad/Espagne/81
Unai Simón/G/Athletic Bilbao/Espagne/82
Pedro Porro/DEF/Tottenham/Espagne/81
Álex Baena/MIL/Atlético Madrid/Espagne/80
Gavi/MIL/Barcelone/Espagne/80
Dani Carvajal/DEF/Real Madrid/Espagne/86
Fermín López/MIL/Barcelone/Espagne/78
Álex Grimaldo/DEF/Leverkusen/Espagne/83
Joan García/G/Barcelone/Espagne/80
Robin Le Normand/DEF/Atlético Madrid/Espagne/79
Ferran Torres/ATT/Barcelone/Espagne/79
Aymeric Laporte/DEF/Athletic Bilbao/Espagne/83
Álvaro Morata/ATT/Côme/Espagne/81
Alejandro Balde/DEF/Barcelone/Espagne/79
Marcos Llorente/DEF/Atlético Madrid/Espagne/81
Dani Vivian/DEF/Athletic Bilbao/Espagne/75
Yeremy Pino/ATT/Crystal Palace/Espagne/76
Ayoze Pérez/ATT/Villarreal/Espagne/75
Samu Omorodion/ATT/Porto/Espagne/77
Álvaro Carreras/DEF/Real Madrid/Espagne/78
Pablo Barrios/MIL/Atlético Madrid/Espagne/77
Pau Torres/DEF/Aston Villa/Espagne/79
Eric García/DEF/Barcelone/Espagne/76
Jesús Rodríguez/ATT/Côme/Espagne/68
Álex Remiro/G/Real Sociedad/Espagne/79
Robert Sánchez/G/Chelsea/Espagne/74`},
{id:"s_egy",name:"Égypte",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Mohamed Salah/ATT/Liverpool/Égypte/90
Omar Marmoush/ATT/Manchester City/Égypte/84
Mohamed Abdelmonem/DEF/Nice/Égypte/77
Emam Ashour/MIL/Al Ahly/Égypte/77
Trézéguet/ATT/Al Ahly/Égypte/77
Mostafa Mohamed/ATT/Nantes/Égypte/76
Zizo/ATT/Al Ahly/Égypte/77
Mohamed El Shenawy/G/Al Ahly/Égypte/79
Ibrahim Adel/ATT/Nordsjaelland/Égypte/72
Marwan Attia/MIL/Al Ahly/Égypte/72
Hamdi Fathi/MIL/Al-Wakrah/Égypte/73
Mohamed Hany/DEF/Al Ahly/Égypte/74
Ahmed Fatouh/DEF/Zamalek/Égypte/72
Mostafa Shobeir/G/Al Ahly/Égypte/72
Ramadan Sobhi/ATT/Pyramids/Égypte/73
Mohamed Elneny/MIL/Al-Jazira/Égypte/77
Yasser Ibrahim/DEF/Al Ahly/Égypte/73
Ramy Rabia/DEF/Al-Ain/Égypte/75
Mohanad Lasheen/MIL/Pyramids/Égypte/70
Ahmed Hegazi/DEF/Neom/Égypte/77
Akram Tawfik/DEF/Al Ahly/Égypte/70
Osama Faisal/ATT/National Bank/Égypte/69
Mostafa Fathi/ATT/Pyramids/Égypte/71
Omar Kamal/DEF/Al Ahly/Égypte/69
Hossam Abdelmaguid/DEF/Zamalek/Égypte/72
Ahmed Hassan Koka/ATT/Al Ahly/Égypte/71
Mohamed Sherif/ATT/Al Ahly/Égypte/73
Amr El Solia/MIL/Ceramica Cleopatra/Égypte/73
Mahmoud Kahraba/ATT/Al Ahly/Égypte/72
Mohamed Abou Gabal/G/Zamalek/Égypte/74
Ahmed El Shenawy/G/Pyramids/Égypte/69
Mohamed Sobhi/G/Zamalek/Égypte/70
Mohamed Magdy Afsha/MIL/Al Ahly/Égypte/76
Tarek Hamed/MIL/Zamalek/Égypte/74
Nabil Emad Dunga/MIL/Al-Najma/Égypte/68
Mohamed Shehata/MIL/Zamalek/Égypte/68
`},
{id:"s_legafr",name:"Légendes d'Afrique",cat:"themes",sub:"Les géants du continent africain",raw:`
Samuel Eto'o/ATT/Barcelone/Cameroun/91
Didier Drogba/ATT/Chelsea/Côte d'Ivoire/89
George Weah/ATT/Milan/Liberia/91
Mohamed Salah (2018)/ATT/Liverpool/Égypte/90
Yaya Touré/MIL/Manchester City/Côte d'Ivoire/90
Riyad Mahrez (2016)/ATT/Leicester/Algérie/86
Sadio Mané (2019)/ATT/Liverpool/Sénégal/89
Rabah Madjer/ATT/Porto/Algérie/87
Roger Milla/ATT/Montpellier/Cameroun/88
Abedi Pelé/MIL/Marseille/Ghana/87
Jay-Jay Okocha/MIL/PSG/Nigeria/86
Michael Essien/MIL/Chelsea/Ghana/87
Lakhdar Belloumi/MIL/GC Mascara/Algérie/86
Mohamed Aboutrika/MIL/Al Ahly/Égypte/85
Nwankwo Kanu/ATT/Arsenal/Nigeria/84
Salif Keïta/ATT/Saint-Étienne/Mali/86
Mustapha Hadji/MIL/Deportivo La Corogne/Maroc/83
Badou Zaki/G/Majorque/Maroc/86
Laurent Pokou/ATT/Rennes/Côte d'Ivoire/85
Samuel Kuffour/DEF/Bayern/Ghana/84
Emmanuel Adebayor/ATT/Arsenal/Togo/81
Frédéric Kanouté/ATT/Séville/Mali/84
El Hadji Diouf/ATT/Bolton/Sénégal/81
Rachid Mekhloufi/ATT/Saint-Étienne/Algérie/84
Hossam Hassan/ATT/Al Ahly/Égypte/82
Kalusha Bwalya/ATT/PSV/Zambie/81
Rigobert Song/DEF/Galatasaray/Cameroun/80
Kolo Touré/DEF/Arsenal/Côte d'Ivoire/84
Seydou Keita/MIL/Barcelone/Mali/83
Asamoah Gyan/ATT/Al-Ain/Ghana/79
Rashidi Yekini/ATT/Vitória Setúbal/Nigeria/82
Lucas Radebe/DEF/Leeds/Afrique du Sud/80
Noureddine Naybet/DEF/Deportivo La Corogne/Maroc/86
Thomas N'Kono/G/Espanyol/Cameroun/85
Ahmed Hassan/MIL/Al Ahly/Égypte/82
Essam El Hadary/G/Al Ahly/Égypte/84
Pierre-Emerick Aubameyang/ATT/Dortmund/Gabon/86
Joseph-Antoine Bell/G/Marseille/Cameroun/82
Vincent Enyeama/G/Lille/Nigeria/79
Kalidou Koulibaly/DEF/Naples/Sénégal/86
Taribo West/DEF/Inter/Nigeria/78
Hany Ramzy/DEF/Werder Brême/Égypte/79
John Obi Mikel/MIL/Chelsea/Nigeria/80
`},
{id:"s_b_paysbas",name:"Pays-Bas",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Virgil van Dijk/DEF/Liverpool/Pays-Bas/89
Frenkie de Jong/MIL/Barcelone/Pays-Bas/86
Ryan Gravenberch/MIL/Liverpool/Pays-Bas/84
Tijjani Reijnders/MIL/Manchester City/Pays-Bas/84
Cody Gakpo/ATT/Liverpool/Pays-Bas/82
Xavi Simons/MIL/Tottenham/Pays-Bas/84
Jeremie Frimpong/DEF/Liverpool/Pays-Bas/81
Denzel Dumfries/DEF/Inter/Pays-Bas/82
Micky van de Ven/DEF/Tottenham/Pays-Bas/82
Jurriën Timber/DEF/Arsenal/Pays-Bas/82
Nathan Aké/DEF/Manchester City/Pays-Bas/80
Matthijs de Ligt/DEF/Manchester United/Pays-Bas/84
Teun Koopmeiners/MIL/Juventus/Pays-Bas/81
Bart Verbruggen/G/Brighton/Pays-Bas/77
Justin Kluivert/ATT/Bournemouth/Pays-Bas/78
Memphis Depay/ATT/Corinthians/Pays-Bas/83
Donyell Malen/ATT/Aston Villa/Pays-Bas/77
Ian Maatsen/DEF/Aston Villa/Pays-Bas/74
Stefan de Vrij/DEF/Inter/Pays-Bas/82
Georginio Wijnaldum/MIL/Ettifaq/Pays-Bas/80
Wout Weghorst/ATT/Ajax/Pays-Bas/74
Brian Brobbey/ATT/Sunderland/Pays-Bas/72
Quinten Timber/MIL/Marseille/Pays-Bas/76
Sven Botman/DEF/Newcastle/Pays-Bas/79
Jerdy Schouten/MIL/PSV/Pays-Bas/74
Joshua Zirkzee/ATT/Manchester United/Pays-Bas/74
Crysencio Summerville/ATT/West Ham/Pays-Bas/74
Mats Wieffer/MIL/Brighton/Pays-Bas/74
Noa Lang/ATT/Naples/Pays-Bas/77
Steven Bergwijn/ATT/Al-Ittihad/Pays-Bas/76
Mark Flekken/G/Leverkusen/Pays-Bas/74
Lutsharel Geertruida/DEF/Sunderland/Pays-Bas/75
Robin Roefs/G/Sunderland/Pays-Bas/73
Justin Bijlow/G/Genoa/Pays-Bas/75
Jasper Cillessen/G/NEC/Pays-Bas/76
Marten de Roon/MIL/Atalanta/Pays-Bas/77
`},
{id:"s_b_civ",name:"Côte d'Ivoire",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Amad Diallo/ATT/Manchester United/Côte d'Ivoire/80
Franck Kessié/MIL/Al-Ahli/Côte d'Ivoire/82
Evan Ndicka/DEF/Roma/Côte d'Ivoire/79
Ousmane Diomande/DEF/Sporting/Côte d'Ivoire/80
Yan Diomande/ATT/Leipzig/Côte d'Ivoire/77
Seko Fofana/MIL/Rennes/Côte d'Ivoire/80
Odilon Kossounou/DEF/Atalanta/Côte d'Ivoire/78
Sébastien Haller/ATT/Utrecht/Côte d'Ivoire/81
Ibrahim Sangaré/MIL/Nottingham Forest/Côte d'Ivoire/80
Simon Adingra/ATT/Sunderland/Côte d'Ivoire/76
Wilfried Singo/DEF/Galatasaray/Côte d'Ivoire/76
Nicolas Pépé/ATT/Villarreal/Côte d'Ivoire/80
Evann Guessand/ATT/Aston Villa/Côte d'Ivoire/76
Yahia Fofana/G/Rizespor/Côte d'Ivoire/73
Jean-Philippe Krasso/ATT/Paris FC/Côte d'Ivoire/72
Christ Inao Oulaï/MIL/Trabzonspor/Côte d'Ivoire/70
Oumar Diakité/DEF/Cercle Bruges/Côte d'Ivoire/71
Ghislain Konan/DEF/Gil Vicente/Côte d'Ivoire/72
Willy Boly/DEF/Nottingham Forest/Côte d'Ivoire/77
Jean Michaël Seri/MIL/Maribor/Côte d'Ivoire/78
Wilfried Zaha/ATT/Charlotte/Côte d'Ivoire/82
Jérémie Boga/ATT/Nice/Côte d'Ivoire/75
Emmanuel Agbadou/DEF/Wolverhampton/Côte d'Ivoire/74
Elye Wahi/ATT/Nice/Côte d'Ivoire/74
Bazoumana Touré/ATT/Hoffenheim/Côte d'Ivoire/70
Guéla Doué/DEF/Strasbourg/Côte d'Ivoire/72
Serge Aurier/DEF/Galatasaray/Côte d'Ivoire/80
Christopher Operi/DEF/Basaksehir/Côte d'Ivoire/67
Badra Ali Sangaré/G/Sekhukhune/Côte d'Ivoire/66
Mohamed Koné/G/Charleroi/Côte d'Ivoire/68
Alban Lafont/G/Panathinaikos/Côte d'Ivoire/76
Ira Eliezer Tapé/G/San Pédro/Côte d'Ivoire/62
Mohamed Diomandé/MIL/Rangers/Côte d'Ivoire/74
Hamed Junior Traorè/MIL/Auxerre/Côte d'Ivoire/75
Lazare Amani/MIL/Union SG/Côte d'Ivoire/68
Parfait Guiagon/MIL/Charleroi/Côte d'Ivoire/67
Habib Maïga/MIL/Metz/Côte d'Ivoire/66
`},
{id:"s_b_dz_ligue1",name:"Ligue 1 algérienne",cat:"ligues",sub:"Championnats",raw:`
Islam Slimani/ATT/CR Belouizdad/Algérie/80
Tayeb Meziani/ATT/MC Alger/Algérie/68
Zakaria Draoui/MIL/MC Alger/Algérie/67
Kousseila Boualia/ATT/JS Kabylie/Algérie/64
Alexis Guendouz/G/CR Belouizdad/Algérie/70
Oussama Benbot/G/USM Alger/Algérie/66
Abderrahmane Hachoud/DEF/MC Alger/Algérie/68
Houssem Mrezigue/MIL/CR Belouizdad/Algérie/66
Brahim Dib/MIL/CS Constantine/Algérie/66
Haithem Loucif/DEF/USM Alger/Algérie/66
Chouaib Keddad/DEF/CR Belouizdad/Algérie/67
Islam Merili/MIL/USM Alger/Algérie/65
Naoufel Khacef/DEF/CR Belouizdad/Algérie/65
Ayoub Ghezala/DEF/MC Alger/Algérie/66
Abdennour Belhocini/ATT/CS Constantine/Algérie/66
Mohamed Réda Hamidi/DEF/JS Kabylie/Algérie/64
Saâdi Radouani/DEF/USM Alger/Algérie/66
Gaya Merbah/G/MC Alger/Algérie/68
Zakaria Boulahia/ATT/JS Kabylie/Algérie/64
Abdelkader Belharrane/DEF/MC Alger/Algérie/66
Aymen Mahious/ATT/CR Belouizdad/Algérie/69
Akram Bouras/MIL/MC Alger/Algérie/66
Ahmed Kendouci/MIL/ES Sétif/Algérie/70
Brahim Benzaza/MIL/USM Alger/Algérie/65
Riad Benayad/ATT/JS Kabylie/Algérie/63
Abdelmoumen Djabou/MIL/ES Sétif/Algérie/73
Housseyn Benayada/DEF/CS Constantine/Algérie/64
Abdelkrim Namani/MIL/JS Kabylie/Algérie/66
Farid Chaâl/G/CR Belouizdad/Algérie/64
Zakaria Bouhalfaya/G/CS Constantine/Algérie/63
Mohamed Benkhemassa/MIL/MC Alger/Algérie/68
`},
{id:"s_b_pepites",name:"Jeunes pépites",cat:"themes",sub:"Les cracks de demain",raw:`
Lamine Yamal/ATT/Barcelone/Espagne/89
Désiré Doué/ATT/PSG/France/84
Pau Cubarsí/DEF/Barcelone/Espagne/82
Kenan Yildiz/ATT/Juventus/Turquie/85
Dean Huijsen/DEF/Real Madrid/Espagne/80
Estêvão/ATT/Chelsea/Brésil/81
Yan Diomande/ATT/Leipzig/Côte d'Ivoire/77
Warren Zaïre-Emery/MIL/PSG/France/80
Franco Mastantuono/ATT/Real Madrid/Argentine/76
Ethan Nwaneri/MIL/Arsenal/Angleterre/74
Rodrigo Mora/ATT/Porto/Portugal/77
Endrick/ATT/Real Madrid/Brésil/75
Leny Yoro/DEF/Manchester United/France/78
Myles Lewis-Skelly/DEF/Arsenal/Angleterre/75
Jorrel Hato/DEF/Chelsea/Pays-Bas/77
Lennart Karl/ATT/Bayern/Allemagne/72
Ayyoub Bouaddi/MIL/Lille/France/72
Jobe Bellingham/MIL/Dortmund/Angleterre/73
Marc Bernal/MIL/Barcelone/Espagne/66
Dro Fernández/MIL/Barcelone/Espagne/62
Lucas Bergvall/MIL/Tottenham/Suède/74
Geovany Quenda/ATT/Sporting/Portugal/75
Sverre Nypan/MIL/Manchester City/Norvège/66
Eli Junior Kroupi/ATT/Bournemouth/France/72
Senny Mayulu/MIL/PSG/France/70
Assan Ouédraogo/MIL/Leipzig/Allemagne/70
Claudio Echeverri/MIL/Girona/Argentine/70
Rio Ngumoha/ATT/Liverpool/Angleterre/62
Kees Smit/MIL/AZ Alkmaar/Pays-Bas/74
Mikey Moore/ATT/Rangers/Angleterre/64
Ibrahim Mbaye/ATT/PSG/Sénégal/70
Chido Obi/ATT/Manchester United/Danemark/60
Robin Risser/G/Lens/France/70
Guillaume Restes/G/Toulouse/France/74
Jonas Urbig/G/Bayern/Allemagne/70
Mike Penders/G/Strasbourg/Belgique/64
Diego Kochen/G/Barcelone/États-Unis/62
Cristhian Mosquera/DEF/Arsenal/Espagne/74
Luka Vušković/DEF/Hambourg/Croatie/72
Josh Acheampong/DEF/Chelsea/Angleterre/68
`}
);
Object.assign(window.CLUB_COLORS,{
"Real Madrid":["#FFFFFF","#D4A53A"],"Barcelone":["#A50044","#004D98"],"Atlético Madrid":["#CB3524","#272E61"],"Athletic Bilbao":["#EE2523","#FFFFFF"],"Real Sociedad":["#0067B1","#FFFFFF"],
"Inter":["#0068A8","#111111"],"Naples":["#1E90E0","#FFFFFF"],"Milan":["#C8102E","#111111"],"Juventus":["#111111","#FFFFFF"],"Atalanta":["#1E71B8","#111111"],"Côme":["#003DA5","#FFFFFF"],"Roma":["#8E1F2F","#F0BC42"],"Fiorentina":["#482E92","#FFFFFF"],"Lazio":["#87D8F7","#FFFFFF"],"Bologne":["#1A2F48","#A21C26"],"Torino":["#8A1E03","#FFFFFF"],"Genoa":["#A2182C","#002D62"],
"PSG":["#004170","#DA291C"],"Bayern":["#DC052D","#FFFFFF"],"Arsenal":["#EF0107","#FFFFFF"],"Liverpool":["#C8102E","#F6EB61"],"Manchester City":["#6CABDD","#FFFFFF"],"Chelsea":["#034694","#FFFFFF"],"Tottenham":["#FFFFFF","#132257"],"Crystal Palace":["#1B458F","#C4122E"],"Aston Villa":["#670E36","#95BFE5"],"West Ham":["#7A263A","#1BB1E7"],"Manchester United":["#DA291C","#111111"],"Bournemouth":["#DA291C","#111111"],"Fulham":["#FFFFFF","#111111"],"Everton":["#003399","#FFFFFF"],"Sunderland":["#EB172B","#FFFFFF"],"Brighton":["#0057B8","#FFFFFF"],"Newcastle":["#241F20","#FFFFFF"],"Nottingham Forest":["#DD0000","#FFFFFF"],"Wolverhampton":["#FDB913","#231F20"],"Leicester":["#003090","#FDBE11"],"Bolton":["#FFFFFF","#263C7E"],"Leeds":["#FFFFFF","#1D428A"],
"Monaco":["#E2001A","#FFFFFF"],"Marseille":["#FFFFFF","#2FAEE0"],"Rennes":["#E13327","#111111"],"Lens":["#FFD200","#E1001A"],"Lille":["#E01E13","#20325F"],"Nice":["#C8102E","#111111"],"Nantes":["#FCD405","#00A650"],"Paris FC":["#1E2D5A","#C4A15A"],"Strasbourg":["#009FE3","#FFFFFF"],"Toulouse":["#5B2C83","#FFFFFF"],"Montpellier":["#1D2D5B","#F58220"],"Saint-Étienne":["#00924B","#FFFFFF"],
"Leipzig":["#DD0741","#FFFFFF"],"Leverkusen":["#E32221","#111111"],"Stuttgart":["#FFFFFF","#E32219"],"Dortmund":["#FDE100","#111111"],"Hoffenheim":["#1961B5","#FFFFFF"],
"Betis":["#00954C","#FFFFFF"],"Girona":["#CD2534","#FFFFFF"],"Villarreal":["#FFE667","#005187"],"Valladolid":["#5C2D91","#FFFFFF"],"Séville":["#FFFFFF","#D81E05"],"Deportivo La Corogne":["#0067B1","#FFFFFF"],"Majorque":["#E20613","#111111"],"Espanyol":["#007FC8","#FFFFFF"],
"PSV":["#ED1C24","#FFFFFF"],"Feyenoord":["#E30613","#FFFFFF"],"Ajax":["#FFFFFF","#D2122E"],"NEC":["#D4001F","#00843D"],"AZ Alkmaar":["#DB0021","#FFFFFF"],"Utrecht":["#E30613","#FFFFFF"],
"Porto":["#0050A0","#FFFFFF"],"Sporting":["#00804A","#FFFFFF"],"Gil Vicente":["#E30613","#1D3C8F"],"Vitória Setúbal":["#00843D","#FFFFFF"],
"Olympiakos":["#E30613","#FFFFFF"],"Panathinaikos":["#007841","#FFFFFF"],"Fenerbahçe":["#FFED00","#002D72"],"Galatasaray":["#A90432","#FDB912"],"Trabzonspor":["#8E1F2F","#5DB6E8"],"Rizespor":["#00843D","#1D428A"],"Basaksehir":["#ED6B21","#13294B"],
"Cercle Bruges":["#00843D","#111111"],"Charleroi":["#111111","#FFFFFF"],"Maribor":["#5B2C83","#FFFFFF"],"Rangers":["#1B458F","#FFFFFF"],"Nordsjaelland":["#E30613","#FFD100"],
"Al-Hilal":["#005BAC","#FFFFFF"],"Al-Ittihad":["#FFD200","#111111"],"Al-Nassr":["#FFE500","#1D3C8F"],"Al-Ahli":["#00843D","#FFFFFF"],"Ettifaq":["#0E7C3A","#E31B23"],"Al-Wehda":["#E30613","#FFFFFF"],"Neom":["#1D3C8F","#00B2A9"],"Al-Sadd":["#FFFFFF","#111111"],"Al-Wakrah":["#5DB6E8","#FFFFFF"],"Al-Ain":["#5B2C83","#FFFFFF"],"Al-Jazira":["#E30613","#111111"],
"Al Ahly":["#C8102E","#FFFFFF"],"Zamalek":["#FFFFFF","#E30613"],"Pyramids":["#1D3C8F","#FFFFFF"],"National Bank":["#00843D","#FFFFFF"],"Ceramica Cleopatra":["#F58220","#1D3C8F"],
"Wydad":["#E30613","#FFFFFF"],"Raja Casablanca":["#00A650","#FFFFFF"],"AS FAR":["#E30613","#00843D"],"RS Berkane":["#F58220","#111111"],
"CR Belouizdad":["#E30613","#FFFFFF"],"MC Alger":["#C8102E","#0E8A3E"],"JS Kabylie":["#FFD100","#0E8A3E"],"USM Alger":["#C8102E","#111111"],"CS Constantine":["#00843D","#111111"],"ES Sétif":["#111111","#FFFFFF"],"GC Mascara":["#0E8A3E","#FFFFFF"],
"Sekhukhune":["#FFD200","#111111"],"San Pédro":["#F58220","#FFFFFF"],"ASEC Mimosas":["#FFD200","#111111"],
"Corinthians":["#FFFFFF","#111111"],"Charlotte":["#1A85C8","#111111"]
});

Object.assign(window.CLUB_COLORS,{"Al-Najma": ["#0054A6", "#FFFFFF"], "Auxerre": ["#FFFFFF", "#0055A4"], "Hambourg": ["#FFFFFF", "#E2001A"], "Metz": ["#8B0A26", "#FFFFFF"], "Union SG": ["#FFD100", "#003DA5"], "Werder Brême": ["#1D9053", "#FFFFFF"]});

/* ---- base_2.js ---- */
// Packs convertis depuis base_src_2.txt : 5 champs → Nom/Poste/Club/Pays/Note
window.FOOT_PACKS.push(
{id:"s_l1",name:"Ligue 1",cat:"ligues",sub:"Championnats",raw:`
Ousmane Dembélé/ATT/PSG/France/90
Vitinha/MIL/PSG/Portugal/87
Achraf Hakimi/DEF/PSG/Maroc/87
Khvicha Kvaratskhelia/ATT/PSG/Géorgie/87
Nuno Mendes/DEF/PSG/Portugal/86
João Neves/MIL/PSG/Portugal/86
Désiré Doué/ATT/PSG/France/84
Marquinhos/DEF/PSG/Brésil/87
Willian Pacho/DEF/PSG/Équateur/83
Mason Greenwood/ATT/Marseille/Angleterre/80
Lucas Chevalier/G/PSG/France/80
Bradley Barcola/ATT/PSG/France/82
Fabián Ruiz/MIL/PSG/Espagne/82
Warren Zaïre-Emery/MIL/PSG/France/80
Gerónimo Rulli/G/Marseille/Argentine/78
Pierre-Emile Højbjerg/MIL/Marseille/Danemark/81
Maghnes Akliouche/MIL/Monaco/France/80
Pierre-Emerick Aubameyang/ATT/Marseille/Gabon/86
Gonçalo Ramos/ATT/PSG/Portugal/80
Lee Kang-in/MIL/PSG/Corée du Sud/78
Illia Zabarnyi/DEF/PSG/Ukraine/80
Amine Gouiri/ATT/Marseille/Algérie/80
Aleksandr Golovin/MIL/Monaco/Russie/79
Denis Zakaria/MIL/Monaco/Suisse/77
Paul Pogba/MIL/Monaco/France/86
Hákon Haraldsson/MIL/Lille/Islande/74
Endrick/ATT/Lyon/Brésil/75
Corentin Tolisso/MIL/Lyon/France/79
Florian Thauvin/ATT/Lens/France/80
Benjamin Pavard/DEF/Marseille/France/82
Nayef Aguerd/DEF/Marseille/Maroc/79
Lamine Camara/MIL/Monaco/Sénégal/77
Folarin Balogun/ATT/Monaco/États-Unis/75
Olivier Giroud/ATT/Lille/France/84
Malick Fofana/ATT/Lyon/Belgique/74
Igor Paixão/ATT/Marseille/Brésil/79
Brice Samba/G/Rennes/France/77
Odsonne Édouard/ATT/Lens/France/75
Lukáš Hrádecký/G/Monaco/Finlande/80
Berke Özer/G/Lille/Turquie/70
Leonardo Balerdi/DEF/Marseille/Argentine/77
`},
{id:"s_bundes",name:"Bundesliga",cat:"ligues",sub:"Championnats",raw:`
Harry Kane/ATT/Bayern/Angleterre/90
Michael Olise/ATT/Bayern/France/87
Jamal Musiala/MIL/Bayern/Allemagne/87
Joshua Kimmich/MIL/Bayern/Allemagne/89
Luis Díaz/ATT/Bayern/Colombie/86
Serhou Guirassy/ATT/Dortmund/Guinée/83
Gregor Kobel/G/Dortmund/Suisse/83
Alejandro Grimaldo/DEF/Leverkusen/Espagne/83
Dayot Upamecano/DEF/Bayern/France/84
Manuel Neuer/G/Bayern/Allemagne/93
Jonathan Tah/DEF/Bayern/Allemagne/82
Nico Schlotterbeck/DEF/Dortmund/Allemagne/81
Alphonso Davies/DEF/Bayern/Canada/84
Konrad Laimer/MIL/Bayern/Autriche/79
Aleksandar Pavlović/MIL/Bayern/Allemagne/81
Patrik Schick/ATT/Leverkusen/Tchéquie/81
Deniz Undav/ATT/Stuttgart/Allemagne/77
Serge Gnabry/ATT/Bayern/Allemagne/83
Leon Goretzka/MIL/Bayern/Allemagne/83
Julian Brandt/MIL/Dortmund/Allemagne/79
Karim Adeyemi/ATT/Dortmund/Allemagne/76
David Raum/DEF/Leipzig/Allemagne/79
Nicolas Jackson/ATT/Bayern/Sénégal/78
Marcel Sabitzer/MIL/Dortmund/Autriche/79
Ibrahim Maza/MIL/Leverkusen/Algérie/76
Christoph Baumgartner/MIL/Leipzig/Autriche/76
Malik Tillman/MIL/Leverkusen/États-Unis/77
Jobe Bellingham/MIL/Dortmund/Angleterre/73
Ramy Bensebaini/DEF/Dortmund/Algérie/78
Lennart Karl/MIL/Bayern/Allemagne/72
Péter Gulácsi/G/Leipzig/Hongrie/78
Ermedin Demirović/ATT/Stuttgart/Bosnie-Herzégovine/75
Chris Führich/ATT/Stuttgart/Allemagne/75
Jonathan Burkardt/ATT/Eintracht Francfort/Allemagne/75
Can Uzun/MIL/Eintracht Francfort/Turquie/76
Yan Diomande/ATT/Leipzig/Côte d'Ivoire/77
Exequiel Palacios/MIL/Leverkusen/Argentine/79
Alexander Nübel/G/Stuttgart/Allemagne/76
Mark Flekken/G/Leverkusen/Pays-Bas/74
Waldemar Anton/DEF/Dortmund/Allemagne/77
`},
{id:"s_arg",name:"Argentine",cat:"nations",sub:"Amérique du Sud",desc:"Sélection actuelle",raw:`
Lionel Messi/ATT/Inter Miami/Argentine/99
Lautaro Martínez/ATT/Inter/Argentine/87
Julián Álvarez/ATT/Atlético Madrid/Argentine/86
Alexis Mac Allister/MIL/Liverpool/Argentine/85
Emiliano Martínez/G/Aston Villa/Argentine/86
Enzo Fernández/MIL/Chelsea/Argentine/84
Cristian Romero/DEF/Tottenham/Argentine/85
Rodrigo De Paul/MIL/Inter Miami/Argentine/81
Nico Paz/MIL/Côme/Argentine/79
Lisandro Martínez/DEF/Manchester United/Argentine/81
Franco Mastantuono/MIL/Real Madrid/Argentine/76
Nahuel Molina/DEF/Atlético Madrid/Argentine/79
Giuliano Simeone/ATT/Atlético Madrid/Argentine/77
Paulo Dybala/ATT/Roma/Argentine/85
Alejandro Garnacho/ATT/Chelsea/Argentine/78
Thiago Almada/MIL/Atlético Madrid/Argentine/77
Nicolás González/ATT/Atlético Madrid/Argentine/78
Exequiel Palacios/MIL/Leverkusen/Argentine/79
Leandro Paredes/MIL/Boca Juniors/Argentine/79
Nicolás Tagliafico/DEF/Lyon/Argentine/78
Giovani Lo Celso/MIL/Betis/Argentine/79
Gerónimo Rulli/G/Marseille/Argentine/78
Nicolás Otamendi/DEF/Benfica/Argentine/82
Leonardo Balerdi/DEF/Marseille/Argentine/77
Gonzalo Montiel/DEF/River Plate/Argentine/76
Claudio Echeverri/MIL/Leverkusen/Argentine/70
Valentín Carboni/MIL/Genoa/Argentine/72
Facundo Medina/DEF/Marseille/Argentine/77
Juan Foyth/DEF/Villarreal/Argentine/77
Valentín Barco/DEF/Strasbourg/Argentine/72
Santiago Castro/ATT/Bologne/Argentine/72
Valentín Castellanos/ATT/West Ham/Argentine/74
José Manuel López/ATT/Palmeiras/Argentine/70
Walter Benítez/G/Crystal Palace/Argentine/76
Matías Soulé/ATT/Roma/Argentine/76
Marcos Acuña/DEF/River Plate/Argentine/79
Juan Musso/G/Atlético Madrid/Argentine/77
Franco Armani/G/River Plate/Argentine/80`},
{id:"s_bra",name:"Brésil",cat:"nations",sub:"Amérique du Sud",desc:"Sélection actuelle",raw:`
Vinícius Jr/ATT/Real Madrid/Brésil/90
Raphinha/ATT/Barcelone/Brésil/87
Alisson/G/Liverpool/Brésil/89
Marquinhos/DEF/PSG/Brésil/87
Bruno Guimarães/MIL/Newcastle/Brésil/83
Gabriel Magalhães/DEF/Arsenal/Brésil/85
Rodrygo/ATT/Real Madrid/Brésil/84
Estêvão/ATT/Chelsea/Brésil/81
Éder Militão/DEF/Real Madrid/Brésil/85
Ederson/G/Fenerbahçe/Brésil/86
Matheus Cunha/ATT/Manchester United/Brésil/82
Gleison Bremer/DEF/Juventus/Brésil/84
João Pedro/ATT/Chelsea/Brésil/82
Gabriel Martinelli/ATT/Arsenal/Brésil/82
Lucas Paquetá/MIL/West Ham/Brésil/82
Casemiro/MIL/Manchester United/Brésil/86
Neymar/ATT/Santos/Brésil/91
Savinho/ATT/Manchester City/Brésil/79
Endrick/ATT/Lyon/Brésil/75
Wesley/DEF/Roma/Brésil/76
Andrey Santos/MIL/Chelsea/Brésil/74
João Gomes/MIL/Wolverhampton/Brésil/79
Luiz Henrique/ATT/Zenit/Brésil/77
Richarlison/ATT/Tottenham/Brésil/80
Gabriel Jesus/ATT/Arsenal/Brésil/82
Antony/ATT/Betis/Brésil/77
Joelinton/MIL/Newcastle/Brésil/79
Danilo/DEF/Flamengo/Brésil/80
Alex Sandro/DEF/Flamengo/Brésil/81
Douglas Santos/DEF/Zenit/Brésil/72
Lucas Beraldo/DEF/PSG/Brésil/74
Fabrício Bruno/DEF/Cruzeiro/Brésil/72
Vanderson/DEF/Monaco/Brésil/75
Bento/G/Al-Nassr/Brésil/74
Igor Thiago/ATT/Brentford/Brésil/76
Vitor Roque/ATT/Palmeiras/Brésil/74
Gerson/MIL/Zenit/Brésil/78
Lucas Perri/G/Leeds/Brésil/75
Hugo Souza/G/Corinthians/Brésil/72
Fabinho/MIL/Al-Ittihad/Brésil/84
André/MIL/Wolverhampton/Brésil/75
Gabriel Sara/MIL/Galatasaray/Brésil/77
`},
{id:"s_eng",name:"Angleterre",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Harry Kane/ATT/Bayern/Angleterre/90
Declan Rice/MIL/Arsenal/Angleterre/86
Bukayo Saka/ATT/Arsenal/Angleterre/86
Jude Bellingham/MIL/Real Madrid/Angleterre/89
Cole Palmer/ATT/Chelsea/Angleterre/85
Phil Foden/ATT/Manchester City/Angleterre/87
Trent Alexander-Arnold/DEF/Real Madrid/Angleterre/86
Jordan Pickford/G/Everton/Angleterre/82
Eberechi Eze/MIL/Arsenal/Angleterre/81
Morgan Rogers/MIL/Aston Villa/Angleterre/80
Reece James/DEF/Chelsea/Angleterre/83
Marc Guéhi/DEF/Manchester City/Angleterre/82
Anthony Gordon/ATT/Newcastle/Angleterre/80
Elliot Anderson/MIL/Nottingham Forest/Angleterre/79
John Stones/DEF/Manchester City/Angleterre/84
Levi Colwill/DEF/Chelsea/Angleterre/79
Ollie Watkins/ATT/Aston Villa/Angleterre/80
Jarrod Bowen/ATT/West Ham/Angleterre/79
Marcus Rashford/ATT/Barcelone/Angleterre/82
Myles Lewis-Skelly/DEF/Arsenal/Angleterre/75
Ezri Konsa/DEF/Aston Villa/Angleterre/78
Adam Wharton/MIL/Crystal Palace/Angleterre/77
Kobbie Mainoo/MIL/Manchester United/Angleterre/77
Noni Madueke/ATT/Arsenal/Angleterre/77
Dean Henderson/G/Crystal Palace/Angleterre/76
Nick Pope/G/Newcastle/Angleterre/79
Aaron Ramsdale/G/Newcastle/Angleterre/75
Jordan Henderson/MIL/Brentford/Angleterre/82
Conor Gallagher/MIL/Tottenham/Angleterre/77
Curtis Jones/MIL/Liverpool/Angleterre/76
Tino Livramento/DEF/Newcastle/Angleterre/75
Dan Burn/DEF/Newcastle/Angleterre/74
Djed Spence/DEF/Tottenham/Angleterre/74
Ivan Toney/ATT/Al-Ahli/Angleterre/77
Dominic Solanke/ATT/Tottenham/Angleterre/76
Morgan Gibbs-White/MIL/Nottingham Forest/Angleterre/77
Jack Grealish/ATT/Everton/Angleterre/81
Harry Maguire/DEF/Manchester United/Angleterre/79
James Trafford/G/Manchester City/Angleterre/73`},
{id:"s_leg",name:"Légendes du foot",cat:"themes",sub:"Les plus grands de l'histoire",raw:`
Pelé/ATT/Santos/Brésil/99
Diego Maradona/ATT/Naples/Argentine/99
Lionel Messi (2012)/ATT/Barcelone/Argentine/99
Cristiano Ronaldo (2017)/ATT/Real Madrid/Portugal/98
Zinédine Zidane/MIL/Real Madrid/France/97
Ronaldo (R9)/ATT/Inter/Brésil/96
Johan Cruyff/ATT/Ajax/Pays-Bas/97
Franz Beckenbauer/DEF/Bayern/Allemagne/96
Alfredo Di Stéfano/ATT/Real Madrid/Espagne/97
Ronaldinho/ATT/Barcelone/Brésil/94
Michel Platini/MIL/Juventus/France/95
Paolo Maldini/DEF/Milan/Italie/95
Ferenc Puskás/ATT/Real Madrid/Hongrie/95
Marco van Basten/ATT/Milan/Pays-Bas/95
Andrés Iniesta/MIL/Barcelone/Espagne/93
Xavi/MIL/Barcelone/Espagne/93
Lev Yachine/G/Dynamo Moscou/URSS/94
Gianluigi Buffon/G/Juventus/Italie/94
Kaká/MIL/Milan/Brésil/92
Lothar Matthäus/MIL/Bayern/Allemagne/93
Bobby Charlton/MIL/Manchester United/Angleterre/93
Andrea Pirlo/MIL/Milan/Italie/92
Cafu/DEF/Milan/Brésil/91
Roberto Carlos/DEF/Real Madrid/Brésil/92
Luís Figo/MIL/Barcelone/Portugal/92
Lakhdar Belloumi/MIL/GC Mascara/Algérie/86
Dino Zoff/G/Juventus/Italie/93
Iker Casillas/G/Real Madrid/Espagne/92
Peter Schmeichel/G/Manchester United/Danemark/92
Franco Baresi/DEF/Milan/Italie/95
Bobby Moore/DEF/West Ham/Angleterre/91
Alessandro Nesta/DEF/Milan/Italie/91
Carlos Alberto/DEF/Santos/Brésil/91
`},
{id:"s_leg_2",name:"Légendes du foot 2",cat:"themes",sub:"D'autres géants de l'histoire",raw:`
Eusébio/ATT/Benfica/Portugal/95
Gerd Müller/ATT/Bayern/Allemagne/94
Thierry Henry/ATT/Arsenal/France/93
Garrincha/ATT/Botafogo/Brésil/95
Romário/ATT/Barcelone/Brésil/93
Roberto Baggio/ATT/Juventus/Italie/93
Zlatan Ibrahimović/ATT/Milan/Suède/91
Rivaldo/ATT/Barcelone/Brésil/92
George Weah/ATT/Milan/Liberia/91
Samuel Eto'o/ATT/Barcelone/Cameroun/91
Didier Drogba/ATT/Chelsea/Côte d'Ivoire/89
Rabah Madjer/ATT/Porto/Algérie/87
Oliver Kahn/G/Bayern/Allemagne/91
Gordon Banks/G/Leicester/Angleterre/91
Edwin van der Sar/G/Manchester United/Pays-Bas/90
Petr Čech/G/Chelsea/Tchéquie/90
Fabien Barthez/G/Marseille/France/86
Sergio Ramos/DEF/Real Madrid/Espagne/92
Fabio Cannavaro/DEF/Juventus/Italie/91
Carles Puyol/DEF/Barcelone/Espagne/89
Philipp Lahm/DEF/Bayern/Allemagne/92
Lilian Thuram/DEF/Juventus/France/89
Marcel Desailly/DEF/Milan/France/89
Daniel Passarella/DEF/River Plate/Argentine/90
Zico/MIL/Flamengo/Brésil/94
Steven Gerrard/MIL/Liverpool/Angleterre/91
Patrick Vieira/MIL/Arsenal/France/90
Sócrates/MIL/Corinthians/Brésil/91
Clarence Seedorf/MIL/Milan/Pays-Bas/89
Roy Keane/MIL/Manchester United/Irlande/89
Javier Zanetti/DEF/Inter/Argentine/89
Frank Lampard/MIL/Chelsea/Angleterre/89
Pavel Nedvěd/MIL/Juventus/Tchéquie/91
Michael Ballack/MIL/Bayern/Allemagne/89
Juan Román Riquelme/MIL/Boca Juniors/Argentine/88
`},
{id:"s_b_allemagne",name:"Allemagne",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Florian Wirtz/MIL/Liverpool/Allemagne/87
Jamal Musiala/MIL/Bayern/Allemagne/87
Joshua Kimmich/MIL/Bayern/Allemagne/89
Antonio Rüdiger/DEF/Real Madrid/Allemagne/86
Kai Havertz/ATT/Arsenal/Allemagne/83
Marc-André ter Stegen/G/Barcelone/Allemagne/88
Manuel Neuer/G/Bayern/Allemagne/93
Leroy Sané/ATT/Galatasaray/Allemagne/84
Jonathan Tah/DEF/Bayern/Allemagne/82
Nico Schlotterbeck/DEF/Dortmund/Allemagne/81
Leon Goretzka/MIL/Bayern/Allemagne/83
Serge Gnabry/ATT/Bayern/Allemagne/83
Ilkay Gündogan/MIL/Galatasaray/Allemagne/87
Nick Woltemade/ATT/Newcastle/Allemagne/77
David Raum/DEF/Leipzig/Allemagne/79
Pascal Gross/MIL/Brighton/Allemagne/76
Oliver Baumann/G/Hoffenheim/Allemagne/75
Thomas Müller/ATT/Vancouver Whitecaps/Allemagne/89
Robert Andrich/MIL/Leverkusen/Allemagne/77
Maximilian Mittelstädt/DEF/Stuttgart/Allemagne/76
Niclas Füllkrug/ATT/West Ham/Allemagne/76
Benjamin Henrichs/DEF/Leipzig/Allemagne/75
Deniz Undav/ATT/Stuttgart/Allemagne/77
Karim Adeyemi/ATT/Dortmund/Allemagne/76
Aleksandar Pavlović/MIL/Bayern/Allemagne/81
Angelo Stiller/MIL/Stuttgart/Allemagne/78
Waldemar Anton/DEF/Dortmund/Allemagne/77
Maximilian Beier/ATT/Dortmund/Allemagne/73
Chris Führich/ATT/Stuttgart/Allemagne/75
Felix Nmecha/MIL/Dortmund/Allemagne/75
Jonas Hofmann/MIL/Leverkusen/Allemagne/75
Tim Kleindienst/ATT/Gladbach/Allemagne/74
Ridle Baku/DEF/Leipzig/Allemagne/74
Alexander Nübel/G/Stuttgart/Allemagne/76
Kevin Trapp/G/Paris FC/Allemagne/79`},
{id:"s_b_belgique",name:"Belgique",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Thibaut Courtois/G/Real Madrid/Belgique/90
Kevin De Bruyne/MIL/Naples/Belgique/90
Jérémy Doku/ATT/Manchester City/Belgique/81
Romelu Lukaku/ATT/Naples/Belgique/85
Leandro Trossard/ATT/Arsenal/Belgique/80
Charles De Ketelaere/MIL/Atalanta/Belgique/79
Youri Tielemans/MIL/Aston Villa/Belgique/80
Loïs Openda/ATT/Juventus/Belgique/79
Amadou Onana/MIL/Aston Villa/Belgique/78
Senne Lammens/G/Manchester United/Belgique/74
Johan Bakayoko/ATT/Leipzig/Belgique/75
Arthur Theate/DEF/Eintracht Francfort/Belgique/75
Malick Fofana/ATT/Lyon/Belgique/74
Zeno Debast/DEF/Sporting/Belgique/73
Koni De Winter/DEF/Milan/Belgique/74
Timothy Castagne/DEF/Fulham/Belgique/76
Hans Vanaken/MIL/Club Bruges/Belgique/76
Arthur Vermeeren/MIL/Marseille/Belgique/72
Mandela Keita/MIL/Parme/Belgique/69
Julien Duranville/ATT/Dortmund/Belgique/66
Dodi Lukebakio/ATT/Benfica/Belgique/76
Alexis Saelemaekers/MIL/Milan/Belgique/76
Yannick Carrasco/ATT/Al-Shabab/Belgique/80
Maxim De Cuyper/DEF/Brighton/Belgique/73
Matz Sels/G/Nottingham Forest/Belgique/77
Koen Casteels/G/Al-Qadsiah/Belgique/77
Thomas Meunier/DEF/Lille/Belgique/78
Nicolas Raskin/MIL/Rangers/Belgique/70
Leander Dendoncker/MIL/Anderlecht/Belgique/73
Michy Batshuayi/ATT/Eintracht Francfort/Belgique/75
Mike Penders/G/Strasbourg/Belgique/64
Brandon Mechele/DEF/Club Bruges/Belgique/72
Joaquin Seys/DEF/Club Bruges/Belgique/68
`},
{id:"s_b_nigeria",name:"Nigeria",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Victor Osimhen/ATT/Galatasaray/Nigeria/86
Ademola Lookman/ATT/Atalanta/Nigeria/83
Victor Boniface/ATT/Werder Brême/Nigeria/77
Alex Iwobi/MIL/Fulham/Nigeria/76
Wilfred Ndidi/MIL/Besiktas/Nigeria/79
Calvin Bassey/DEF/Fulham/Nigeria/75
Samuel Chukwueze/ATT/Fulham/Nigeria/76
Moses Simon/ATT/Paris FC/Nigeria/75
Frank Onyeka/MIL/Augsbourg/Nigeria/72
Stanley Nwabali/G/Chippa United/Nigeria/70
Ola Aina/DEF/Nottingham Forest/Nigeria/76
William Troost-Ekong/DEF/Al-Kholood/Nigeria/73
Raphael Onyedika/MIL/Club Bruges/Nigeria/74
Kelechi Iheanacho/ATT/Celtic/Nigeria/76
Akor Adams/ATT/Séville/Nigeria/72
Taiwo Awoniyi/ATT/Nottingham Forest/Nigeria/73
Tolu Arokodare/ATT/Wolverhampton/Nigeria/72
Semi Ajayi/DEF/Hull City/Nigeria/70
Maduka Okoye/G/Udinese/Nigeria/70
Bright Osayi-Samuel/DEF/Birmingham/Nigeria/71
Paul Onuachu/ATT/Trabzonspor/Nigeria/73
Fisayo Dele-Bashiru/MIL/Lazio/Nigeria/70
Joe Aribo/MIL/Southampton/Nigeria/70
Terem Moffi/ATT/Nice/Nigeria/74
Zaidu Sanusi/DEF/Porto/Nigeria/71
Nathan Tella/ATT/Leverkusen/Nigeria/72
Kenneth Omeruo/DEF/Kasimpasa/Nigeria/70
Cyriel Dessers/ATT/Panathinaïkos/Nigeria/72
Ahmed Musa/ATT/Kano Pillars/Nigeria/74
Francis Uzoho/G/Omonia/Nigeria/68
Adebayo Adeleye/G/Zakynthos/Nigeria/60
Amas Obasogie/G/Bendel Insurance/Nigeria/60
Kevin Akpoguma/DEF/Hoffenheim/Nigeria/69
Alhassan Yusuf/MIL/New England Revolution/Nigeria/65
Christantus Uche/MIL/Crystal Palace/Nigeria/70
Ebenezer Akinsanmiro/MIL/Inter/Nigeria/63
Oghenekaro Etebo/MIL/Aris/Nigeria/69
`},
{id:"s_b_botola",name:"Botola Pro",cat:"ligues",sub:"Championnats",raw:`
Hakim Ziyech/ATT/Wydad/Maroc/84
Nordin Amrabat/ATT/Wydad/Maroc/76
Stéphane Aziz Ki/MIL/Wydad/Burkina Faso/74
Thembinkosi Lorch/ATT/Wydad/Afrique du Sud/72
Mohamed Rabie Hrimat/MIL/AS FAR/Maroc/68
Youssef Mehri/ATT/RS Berkane/Maroc/64
Anas Zniti/G/Raja/Maroc/72
Issoufou Dayo/DEF/RS Berkane/Burkina Faso/72
Mounir Mohamedi/G/RS Berkane/Maroc/72
Paul Bassène/ATT/RS Berkane/Sénégal/70
Mohamed Rayhi/ATT/Wydad/Maroc/67
Yousri Bouzok/ATT/Raja/Algérie/68
Youssef El Fahli/MIL/AS FAR/Maroc/63
Reda Slim/ATT/AS FAR/Maroc/67
Mohamed Moubarik/MIL/Raja/Maroc/65
Ayoub El Amloud/DEF/Wydad/Maroc/67
Hamza Moussaoui/DEF/RS Berkane/Maroc/66
Ahmed Hammoudan/ATT/AS FAR/Maroc/66
Abdelilah Hafidi/MIL/Raja/Maroc/70
Oussama Lamlioui/ATT/RS Berkane/Maroc/64
Mohamed Boulacsoute/ATT/Raja/Maroc/63
Badr Gaddarine/MIL/AS FAR/Maroc/62
Abdelfettah Hadraf/ATT/Raja/Maroc/64
Arsène Zola/DEF/Wydad/RD Congo/70
Adam Ennaffati/ATT/Raja/Maroc/62
Sabir Bougrine/MIL/Raja/Maroc/64
Amine Zouhzouh/ATT/AS FAR/Maroc/64
Mouad Fekkak/MIL/Wydad/Maroc/60
Abdelali Mhamdi/G/Wydad/Maroc/70
El Mehdi Benabid/G/Wydad/Maroc/68
Youssef El Motie/G/Wydad/Maroc/66
Bart Meijers/DEF/Wydad/Pays-Bas/64
Mohamed Moufid/DEF/Wydad/Maroc/64
Guilherme Ferreira/DEF/Wydad/Brésil/66
Jamal Harkass/DEF/Wydad/Maroc/66
Yahya Jabrane/MIL/Wydad/Maroc/70
Khalid Aït Ouarkhane/MIL/FAR Rabat/Maroc/64
`}
);
Object.assign(window.CLUB_COLORS,{
"Ajax":["#D2122E","#FFFFFF"],
"Anderlecht":["#4C2683","#FFFFFF"],
"Arsenal":["#EF0107","#FFFFFF"],
"Aston Villa":["#670E36","#95BFE5"],
"Atalanta":["#1E71B8","#000000"],
"Atlético Madrid":["#CB3524","#FFFFFF"],
"Barcelone":["#A50044","#004D98"],
"Bayern":["#DC052D","#FFFFFF"],
"Benfica":["#E30613","#FFFFFF"],
"Betis":["#00954C","#FFFFFF"],
"Boca Juniors":["#0033A0","#FFD100"],
"Bologne":["#A21C26","#1A2F48"],
"Botafogo":["#000000","#FFFFFF"],
"Brentford":["#E30613","#FFFFFF"],
"Brighton":["#0057B8","#FFFFFF"],
"Celtic":["#018749","#FFFFFF"],
"Chelsea":["#034694","#FFFFFF"],
"Chippa United":["#0055A4","#FFD700"],
"Club Bruges":["#0068B4","#000000"],
"Corinthians":["#FFFFFF","#000000"],
"Cruzeiro":["#2F529E","#FFFFFF"],
"Crystal Palace":["#1B458F","#C4122E"],
"Dortmund":["#FDE100","#000000"],
"Dynamo Moscou":["#0033A0","#FFFFFF"],
"Eintracht Francfort":["#000000","#E1000F"],
"Everton":["#003399","#FFFFFF"],
"Fenerbahçe":["#002D72","#FFED00"],
"Flamengo":["#C3281E","#000000"],
"Fulham":["#FFFFFF","#000000"],
"GC Mascara":["#0E8A3E","#fff"],
"Galatasaray":["#A90432","#FDB912"],
"Hoffenheim":["#1961B5","#FFFFFF"],
"Hull City":["#F5A12D","#000000"],
"Inter":["#0068A8","#000000"],
"Juventus":["#000000","#FFFFFF"],
"Lazio":["#87D8F7","#FFFFFF"],
"Leeds":["#FFFFFF","#1D428A"],
"Leicester":["#003090","#FDBE11"],
"Leipzig":["#FFFFFF","#DD0741"],
"Lens":["#FFD200","#E1001A"],
"Leverkusen":["#E32221","#000000"],
"Lille":["#E01E13","#1A2C5B"],
"Liverpool":["#C8102E","#F6EB61"],
"Lyon":["#FFFFFF","#1A3A8F"],
"Manchester City":["#6CABDD","#FFFFFF"],
"Manchester United":["#DA291C","#111"],
"Marseille":["#FFFFFF","#2FAEE0"],
"Milan":["#C8102E","#111"],
"Monaco":["#E2001A","#FFFFFF"],
"Naples":["#12A0D7","#FFFFFF"],
"Newcastle":["#000000","#FFFFFF"],
"Nice":["#C8102E","#111"],
"Nottingham Forest":["#DD0000","#FFFFFF"],
"Omonia":["#00A650","#FFFFFF"],
"PSG":["#004170","#DA291C"],
"Panathinaïkos":["#007A33","#FFFFFF"],
"Parme":["#FFD200","#1B4F9C"],
"Porto":["#0033A0","#FFFFFF"],
"Raja":["#00A04A","#FFFFFF"],
"Rangers":["#1B458F","#FFFFFF"],
"Real Madrid":["#FFFFFF","#D4A53A"],
"Rennes":["#E13327","#000000"],
"River Plate":["#FFFFFF","#E2001A"],
"Roma":["#8E1F2F","#F0BC42"],
"Santos":["#FFFFFF","#000000"],
"Southampton":["#D71920","#FFFFFF"],
"Sporting":["#00804A","#fff"],
"Strasbourg":["#009FE3","#FFFFFF"],
"Stuttgart":["#FFFFFF","#E32219"],
"Séville":["#FFFFFF","#D7001F"],
"Tottenham":["#FFFFFF","#132257"],
"Udinese":["#000000","#FFFFFF"],
"Villarreal":["#FFE667","#005187"],
"Werder Brême":["#1D9053","#FFFFFF"],
"West Ham":["#7A263A","#1BB1E7"],
"Wolverhampton":["#FDB913","#231F20"],
"Wydad":["#E30613","#FFFFFF"],
"AS FAR":["#C8102E","#000000"],
"Al-Ahli":["#008A3E","#FFFFFF"],
"Al-Kholood":["#F37021","#000000"],
"Al-Nassr":["#FFD700","#0033A0"],
"Al-Qadsiah":["#C8102E","#FFD700"],
"Al-Shabab":["#FFFFFF","#000000"],
"Augsbourg":["#BA3733","#46714D"],
"Bendel Insurance":["#0033A0","#FFFFFF"],
"Besiktas":["#000000","#FFFFFF"],
"Birmingham":["#0000FF","#FFFFFF"],
"Côme":["#003DA5","#FFFFFF"],
"Genoa":["#A6192E","#002147"],
"Gladbach":["#000000","#00A651"],
"Inter Miami":["#F7B5CD","#231F20"],
"Kano Pillars":["#FFD700","#0033A0"],
"Kasimpasa":["#002F6C","#FFFFFF"],
"Palmeiras":["#006437","#FFFFFF"],
"Paris FC":["#002D62","#FFFFFF"],
"RS Berkane":["#F58220","#000000"],
"Trabzonspor":["#7A1E3C","#6AB2E7"],
"Vancouver Whitecaps":["#00245E","#9DC2EA"],
"Zakynthos":["#0055A4","#FFFFFF"],
"Zenit":["#0077C8","#FFFFFF"]
});

Object.assign(window.CLUB_COLORS,{"Al-Ittihad": ["#FFD200", "#111111"], "Aris": ["#FFD100", "#000000"], "FAR Rabat": ["#00843D", "#E30613"], "New England Revolution": ["#0A2240", "#CE0E2D"]});

/* ---- base_3.js ---- */
// Packs base 3 (championnats, sélections, légendes) — 5 champs : Nom/Poste/Club/Pays/Note
window.FOOT_PACKS.push(
{id:"s_pl",name:"Premier League",cat:"ligues",sub:"Championnats",raw:`
Erling Haaland/ATT/Manchester City/Norvège/90
Mohamed Salah/ATT/Liverpool/Égypte/90
Bukayo Saka/ATT/Arsenal/Angleterre/86
Declan Rice/MIL/Arsenal/Angleterre/86
Virgil van Dijk/DEF/Liverpool/Pays-Bas/89
William Saliba/DEF/Arsenal/France/86
Rodri/MIL/Manchester City/Espagne/90
Cole Palmer/MIL/Chelsea/Angleterre/85
Moisés Caicedo/MIL/Chelsea/Équateur/86
Florian Wirtz/MIL/Liverpool/Allemagne/87
Alisson/G/Liverpool/Brésil/89
Gabriel Magalhães/DEF/Arsenal/Brésil/85
Alexis Mac Allister/MIL/Liverpool/Argentine/85
Martin Ødegaard/MIL/Arsenal/Norvège/86
Ryan Gravenberch/MIL/Liverpool/Pays-Bas/84
Alexander Isak/ATT/Liverpool/Suède/84
Gianluigi Donnarumma/G/Manchester City/Italie/88
Bruno Fernandes/MIL/Manchester United/Portugal/88
Phil Foden/MIL/Manchester City/Angleterre/87
Viktor Gyökeres/ATT/Arsenal/Suède/84
Enzo Fernández/MIL/Chelsea/Argentine/84
Martín Zubimendi/MIL/Arsenal/Espagne/83
Bruno Guimarães/MIL/Newcastle/Brésil/83
Dominik Szoboszlai/MIL/Liverpool/Hongrie/84
Hugo Ekitike/ATT/Liverpool/France/82
David Raya/G/Arsenal/Espagne/83
Tijjani Reijnders/MIL/Manchester City/Pays-Bas/84
Jérémy Doku/ATT/Manchester City/Belgique/81
Rayan Cherki/MIL/Manchester City/France/81
Eberechi Eze/MIL/Arsenal/Angleterre/81
Bryan Mbeumo/ATT/Manchester United/Cameroun/83
Matheus Cunha/ATT/Manchester United/Brésil/82
João Pedro/ATT/Chelsea/Brésil/82
Antoine Semenyo/ATT/Manchester City/Ghana/81
Joško Gvardiol/DEF/Manchester City/Croatie/85
Cristian Romero/DEF/Tottenham/Argentine/85
Anthony Gordon/ATT/Newcastle/Angleterre/80
Jordan Pickford/G/Everton/Angleterre/82
Robert Sánchez/G/Chelsea/Espagne/74
Micky van de Ven/DEF/Tottenham/Pays-Bas/82
Rúben Dias/DEF/Manchester City/Portugal/87
Marc Cucurella/DEF/Chelsea/Espagne/81
`},
{id:"s_saudi",name:"Saudi Pro League",cat:"ligues",sub:"Championnats",raw:`
Cristiano Ronaldo/ATT/Al-Nassr/Portugal/98
Karim Benzema/ATT/Al-Hilal/France/91
Théo Hernandez/DEF/Al-Hilal/France/85
Yassine Bounou/G/Al-Hilal/Maroc/85
Rúben Neves/MIL/Al-Hilal/Portugal/82
Sergej Milinković-Savić/MIL/Al-Hilal/Serbie/84
João Félix/ATT/Al-Nassr/Portugal/80
Riyad Mahrez/ATT/Al-Ahli/Algérie/86
Kingsley Coman/ATT/Al-Nassr/France/84
Édouard Mendy/G/Al-Ahli/Sénégal/83
Darwin Núñez/ATT/Al-Hilal/Uruguay/81
Sadio Mané/ATT/Al-Nassr/Sénégal/89
Ivan Toney/ATT/Al-Ahli/Angleterre/77
Kalidou Koulibaly/DEF/Al-Hilal/Sénégal/86
Malcom/ATT/Al-Hilal/Brésil/79
Iñigo Martínez/DEF/Al-Nassr/Espagne/80
Franck Kessié/MIL/Al-Ahli/Côte d'Ivoire/82
Fabinho/MIL/Al-Ittihad/Brésil/84
Mateo Retegui/ATT/Al-Qadsiah/Italie/78
Marcelo Brozović/MIL/Al-Nassr/Croatie/83
Merih Demiral/DEF/Al-Ahli/Turquie/80
Moussa Diaby/ATT/Al-Ittihad/France/79
Houssem Aouar/MIL/Al-Ittihad/Algérie/79
Youssef En-Nesyri/ATT/Al-Ittihad/Maroc/80
Steven Bergwijn/ATT/Al-Ittihad/Pays-Bas/76
Galeno/ATT/Al-Ahli/Brésil/77
Salem Al-Dawsari/ATT/Al-Hilal/Arabie saoudite/77
Enzo Millot/MIL/Al-Ahli/France/75
Alexandre Lacazette/ATT/Neom/France/81
Yannick Carrasco/ATT/Al-Shabab/Belgique/80
Julián Quiñones/ATT/Al-Qadsiah/Mexique/74
Georginio Wijnaldum/MIL/Al-Ettifaq/Pays-Bas/80
Bento/G/Al-Nassr/Brésil/74
Predrag Rajković/G/Al-Ittihad/Serbie/75
Nawaf Al-Aqidi/G/Al-Nassr/Arabie saoudite/69
Roger Ibañez/DEF/Al-Ahli/Brésil/77
Hassan Tambakti/DEF/Al-Hilal/Arabie saoudite/70
Mohamed Simakan/DEF/Al-Nassr/France/77
Nacho Fernández/DEF/Al-Qadsiah/Espagne/79
Abdullah Al-Khaibari/MIL/Al-Nassr/Arabie saoudite/66
Sami Al-Najei/MIL/Al-Nassr/Arabie saoudite/66
`},
{id:"s_alg",name:"Algérie",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Riyad Mahrez/ATT/Al-Ahli/Algérie/86
Rayan Aït-Nouri/DEF/Manchester City/Algérie/81
Mohamed Amoura/ATT/Wolfsburg/Algérie/78
Amine Gouiri/ATT/Marseille/Algérie/80
Ismaël Bennacer/MIL/Dinamo Zagreb/Algérie/82
Ibrahim Maza/MIL/Leverkusen/Algérie/76
Fares Chaïbi/MIL/Eintracht Francfort/Algérie/78
Ramy Bensebaini/DEF/Dortmund/Algérie/78
Houssem Aouar/MIL/Al-Ittihad/Algérie/79
Hicham Boudaoui/MIL/Nice/Algérie/76
Saïd Benrahma/ATT/Neom/Algérie/76
Anis Hadj Moussa/ATT/Feyenoord/Algérie/77
Rafik Belghali/DEF/Hellas Vérone/Algérie/72
Youcef Belaïli/ATT/Espérance de Tunis/Algérie/78
Ramiz Zerrouki/MIL/Twente/Algérie/74
Aïssa Mandi/DEF/Lille/Algérie/78
Jaouen Hadjam/DEF/Young Boys/Algérie/71
Mohamed Amine Tougaï/DEF/Espérance de Tunis/Algérie/70
Luca Zidane/G/Grenade/Algérie/66
Baghdad Bounedjah/ATT/Al-Shamal/Algérie/78
Adil Boulbina/ATT/Al-Duhail/Algérie/72
Youcef Atal/DEF/Al-Sadd/Algérie/76
Anthony Mandrea/G/Caen/Algérie/69
Farès Ghedjemis/ATT/Frosinone/Algérie/69
Ilan Kebbal/MIL/Paris FC/Algérie/72
Nabil Bentaleb/MIL/Lille/Algérie/74
Himad Abdelli/MIL/Angers/Algérie/72
Badredine Bouanani/ATT/Stuttgart/Algérie/70
Zineddine Belaïd/DEF/JS Kabylie/Algérie/66
Islam Slimani/ATT/CR Belouizdad/Algérie/80
Oussama Benbot/G/USM Alger/Algérie/66
Mustapha Zeghba/G/Damac/Algérie/66
Melvin Mastil/G/Stade Nyonnais/Algérie/60
Adem Zorgane/MIL/Charleroi/Algérie/72
`},
{id:"s_por",name:"Portugal",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Vitinha/MIL/PSG/Portugal/87
Nuno Mendes/DEF/PSG/Portugal/86
João Neves/MIL/PSG/Portugal/86
Bruno Fernandes/MIL/Manchester United/Portugal/88
Rúben Dias/DEF/Manchester City/Portugal/87
Cristiano Ronaldo/ATT/Al-Nassr/Portugal/98
Bernardo Silva/MIL/Manchester City/Portugal/88
Rafael Leão/ATT/Milan/Portugal/85
Diogo Costa/G/Porto/Portugal/85
Pedro Neto/ATT/Chelsea/Portugal/81
Gonçalo Inácio/DEF/Sporting/Portugal/81
João Cancelo/DEF/Al-Hilal/Portugal/85
Francisco Conceição/ATT/Juventus/Portugal/79
Gonçalo Ramos/ATT/PSG/Portugal/80
Rúben Neves/MIL/Al-Hilal/Portugal/82
Francisco Trincão/ATT/Sporting/Portugal/80
João Félix/ATT/Al-Nassr/Portugal/80
Diogo Dalot/DEF/Manchester United/Portugal/79
Matheus Nunes/MIL/Manchester City/Portugal/79
João Palhinha/MIL/Tottenham/Portugal/81
Pedro Gonçalves/ATT/Sporting/Portugal/81
Renato Veiga/DEF/Villarreal/Portugal/75
Nélson Semedo/DEF/Fenerbahçe/Portugal/77
Rodrigo Mora/MIL/Porto/Portugal/77
Geovany Quenda/ATT/Sporting/Portugal/75
Tomás Araújo/DEF/Benfica/Portugal/76
António Silva/DEF/Benfica/Portugal/79
Samu Costa/MIL/Majorque/Portugal/74
Rui Silva/G/Sporting/Portugal/76
José Sá/G/Wolverhampton/Portugal/77
Fábio Vieira/MIL/Hambourg/Portugal/74
Otávio/MIL/Al-Qadsiah/Portugal/80
Nuno Tavares/DEF/Lazio/Portugal/74
Jota Silva/ATT/Nottingham Forest/Portugal/72
Gonçalo Guedes/ATT/Real Sociedad/Portugal/76
Ricardo Velho/G/Gençlerbirliği/Portugal/70
Samuel Soares/G/Benfica/Portugal/67`},
{id:"s_sen",name:"Sénégal",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Sadio Mané/ATT/Al-Nassr/Sénégal/89
Nicolas Jackson/ATT/Bayern/Sénégal/78
Ismaïla Sarr/ATT/Crystal Palace/Sénégal/80
Pape Matar Sarr/MIL/Tottenham/Sénégal/79
Iliman Ndiaye/ATT/Everton/Sénégal/78
Édouard Mendy/G/Al-Ahli/Sénégal/83
Kalidou Koulibaly/DEF/Al-Hilal/Sénégal/86
Lamine Camara/MIL/Monaco/Sénégal/77
Idrissa Gueye/MIL/Everton/Sénégal/82
Moussa Niakhaté/DEF/Lyon/Sénégal/77
El Hadji Malick Diouf/DEF/West Ham/Sénégal/76
Habib Diarra/MIL/Sunderland/Sénégal/76
Pape Gueye/MIL/Villarreal/Sénégal/77
Boulaye Dia/ATT/Lazio/Sénégal/76
Krépin Diatta/ATT/Monaco/Sénégal/75
Ibrahim Mbaye/ATT/PSG/Sénégal/70
Habib Diallo/ATT/Metz/Sénégal/75
Abdou Diallo/DEF/Al-Arabi/Sénégal/74
Ismail Jakobs/DEF/Galatasaray/Sénégal/74
Assane Diao/ATT/Côme/Sénégal/75
Mamadou Sarr/DEF/Strasbourg/Sénégal/72
Formose Mendy/DEF/Lorient/Sénégal/70
Chérif Ndiaye/ATT/Samsunspor/Sénégal/72
Abdoulaye Seck/DEF/Maccabi Haïfa/Sénégal/70
Youssouf Sabaly/DEF/Betis/Sénégal/74
Bamba Dieng/ATT/Lorient/Sénégal/72
Nampalys Mendy/MIL/Lens/Sénégal/74
Cheikhou Kouyaté/MIL/Montpellier/Sénégal/77
Mory Diaw/G/Le Havre/Sénégal/70
Seny Dieng/G/Middlesbrough/Sénégal/72
Pathé Ciss/MIL/Rayo Vallecano/Sénégal/72
Yehvann Diouf/G/Nice/Sénégal/72
Alfred Gomis/G/Palerme/Sénégal/72
Moustapha Name/MIL/Pafos/Sénégal/68
Rassoul Ndiaye/MIL/Le Havre/Sénégal/69
`},
{id:"s_legalg",name:"Légendes d'Algérie",cat:"themes",sub:"Les héros des Fennecs",raw:`
Rabah Madjer/ATT/Porto/Algérie/87
Riyad Mahrez (2016)/ATT/Leicester/Algérie/86
Lakhdar Belloumi/MIL/GC Mascara/Algérie/86
Rachid Mekhloufi/ATT/Saint-Étienne/Algérie/84
Mustapha Dahleb/MIL/PSG/Algérie/81
Salah Assad/ATT/Mulhouse/Algérie/79
Madjid Bougherra/DEF/Rangers/Algérie/79
Yacine Brahimi/ATT/Porto/Algérie/80
Ismaël Bennacer (2019)/MIL/Milan/Algérie/82
Sofiane Feghouli/MIL/Valence/Algérie/79
Karim Ziani/MIL/Marseille/Algérie/76
Raïs M'Bolhi/G/Ettifaq/Algérie/77
Islam Slimani/ATT/Sporting/Algérie/80
Ali Fergani/MIL/JS Kabylie/Algérie/79
Baghdad Bounedjah (2019)/ATT/Al-Sadd/Algérie/78
Youcef Belaïli (2019)/ATT/Espérance de Tunis/Algérie/78
Antar Yahia/DEF/Bochum/Algérie/76
Mahmoud Guendouz/DEF/NA Hussein Dey/Algérie/76
Djamel Menad/ATT/JS Kabylie/Algérie/78
Abdelhafid Tasfaout/ATT/MC Oran/Algérie/76
Nadir Belhadj/DEF/Portsmouth/Algérie/75
Faouzi Ghoulam/DEF/Naples/Algérie/80
Hassen Lalmas/ATT/CR Belouizdad/Algérie/77
Chérif Oudjani/ATT/Lens/Algérie/72
Rafik Saïfi/ATT/Troyes/Algérie/75
Hilal Soudani/ATT/Dinamo Zagreb/Algérie/75
Djamel Belmadi (joueur)/MIL/Marseille/Algérie/74
Moussa Saïb/MIL/Auxerre/Algérie/78
Tedj Bensaoula/ATT/MC Oran/Algérie/76
Djamel Benlamri/DEF/Al-Shabab/Algérie/74
Abdelaziz Ben Tifour/MIL/Monaco/Algérie/77
Mehdi Cerbah/G/JS Kabylie/Algérie/70
Nasreddine Drid/G/MC Oran/Algérie/64
Lounès Gaouaoui/G/ASO Chlef/Algérie/72
Fawzi Chaouchi/G/ES Sétif/Algérie/73
Chaabane Merzekane/DEF/NA Hussein Dey/Algérie/77
Rafik Halliche/DEF/Nacional/Algérie/73
Mehdi Lacen/MIL/Getafe/Algérie/74
`},
{id:"s_b_italie",name:"Italie",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Gianluigi Donnarumma/G/Manchester City/Italie/88
Nicolò Barella/MIL/Inter/Italie/87
Alessandro Bastoni/DEF/Inter/Italie/86
Sandro Tonali/MIL/Newcastle/Italie/84
Federico Dimarco/DEF/Inter/Italie/84
Riccardo Calafiori/DEF/Arsenal/Italie/80
Moise Kean/ATT/Fiorentina/Italie/80
Mateo Retegui/ATT/Al-Qadsiah/Italie/78
Giovanni Di Lorenzo/DEF/Naples/Italie/82
Davide Frattesi/MIL/Inter/Italie/80
Marco Carnesecchi/G/Atalanta/Italie/78
Guglielmo Vicario/G/Tottenham/Italie/80
Manuel Locatelli/MIL/Juventus/Italie/80
Destiny Udogie/DEF/Tottenham/Italie/78
Federico Chiesa/ATT/Liverpool/Italie/82
Giacomo Raspadori/ATT/Atlético Madrid/Italie/78
Lorenzo Pellegrini/MIL/Roma/Italie/79
Samuele Ricci/MIL/Milan/Italie/76
Matteo Politano/ATT/Naples/Italie/78
Ciro Immobile/ATT/Bologne/Italie/85
Daniel Maldini/ATT/Atalanta/Italie/72
Andrea Cambiaso/DEF/Juventus/Italie/79
Riccardo Orsolini/ATT/Bologne/Italie/78
Mattia Zaccagni/ATT/Lazio/Italie/77
Raoul Bellanova/DEF/Atalanta/Italie/74
Francesco Pio Esposito/ATT/Inter/Italie/72
Gianluca Mancini/DEF/Roma/Italie/77
Alex Meret/G/Naples/Italie/79
Bryan Cristante/MIL/Roma/Italie/76
Wilfried Gnonto/ATT/Leeds/Italie/70
Nicolò Fagioli/MIL/Fiorentina/Italie/74
Michael Folorunsho/MIL/Cagliari/Italie/70
Michele Di Gregorio/G/Juventus/Italie/77
Nicolò Rovella/MIL/Lazio/Italie/77
`},
{id:"s_b_tunisie",name:"Tunisie",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Ellyes Skhiri/MIL/Eintracht Francfort/Tunisie/78
Hannibal Mejbri/MIL/Burnley/Tunisie/72
Montassar Talbi/DEF/Lorient/Tunisie/74
Aïssa Laïdouni/MIL/Al-Wakrah/Tunisie/74
Ali Abdi/DEF/Nice/Tunisie/76
Youssef Msakni/ATT/Al-Arabi/Tunisie/80
Mohamed Ali Ben Romdhane/MIL/Al Ahly/Tunisie/75
Elias Achouri/ATT/Copenhague/Tunisie/73
Yan Valery/DEF/Young Boys/Tunisie/72
Naïm Sliti/ATT/Al-Shamal/Tunisie/74
Dylan Bronn/DEF/Servette/Tunisie/72
Aymen Dahmen/G/CS Sfaxien/Tunisie/70
Ferjani Sassi/MIL/Al-Gharafa/Tunisie/75
Ismaël Gharbi/ATT/Augsbourg/Tunisie/70
Seifeddine Jaziri/ATT/Zamalek/Tunisie/72
Hamza Rafia/MIL/Lecce/Tunisie/71
Anis Ben Slimane/MIL/Norwich/Tunisie/72
Sayfallah Ltaief/ATT/Winterthur/Tunisie/68
Yassine Meriah/DEF/Espérance de Tunis/Tunisie/72
Firas Ben Larbi/MIL/Al-Jazira/Tunisie/70
Bechir Ben Saïd/G/Espérance de Tunis/Tunisie/72
Elias Saad/ATT/Augsbourg/Tunisie/70
Omar Rekik/DEF/Maribor/Tunisie/66
Hazem Mastouri/ATT/Dynamo Makhachkala/Tunisie/66
Mortadha Ben Ouanes/DEF/Kasimpasa/Tunisie/68
Mohamed Dräger/DEF/Lucerne/Tunisie/69
Ali Maâloul/DEF/CS Sfaxien/Tunisie/76
Firas Chaouat/ATT/Club Africain/Tunisie/66
Sabri Ben Hassen/G/Étoile du Sahel/Tunisie/66
Noureddine Farhati/G/Stade Tunisien/Tunisie/62
Moez Ben Cherifia/G/Espérance de Tunis/Tunisie/72
Mohamed Haj Mahmoud/MIL/Lugano/Tunisie/68
Ghaylène Chaalali/MIL/Espérance de Tunis/Tunisie/74
`},
{id:"s_b_cameroun",name:"Cameroun",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Bryan Mbeumo/ATT/Manchester United/Cameroun/83
Carlos Baleba/MIL/Brighton/Cameroun/80
André Onana/G/Trabzonspor/Cameroun/83
Frank Anguissa/MIL/Naples/Cameroun/83
Christian Kofane/ATT/Leverkusen/Cameroun/74
Vincent Aboubakar/ATT/Neftchi Bakou/Cameroun/78
Christopher Wooh/DEF/Rennes/Cameroun/72
Eric Maxim Choupo-Moting/ATT/New York Red Bulls/Cameroun/77
Jean-Charles Castelletto/DEF/Nantes/Cameroun/72
Nouhou Tolo/DEF/Seattle Sounders/Cameroun/72
Karl Toko Ekambi/ATT/Al-Ettifaq/Cameroun/77
Georges-Kévin Nkoudou/ATT/Besiktas/Cameroun/72
Devis Epassy/G/Abha/Cameroun/68
Danny Namaso/ATT/Auxerre/Cameroun/68
Olivier Ntcham/MIL/Samsunspor/Cameroun/74
Arthur Avom/MIL/Lorient/Cameroun/70
Martin Hongla/MIL/Grenade/Cameroun/72
Jackson Tchatchoua/DEF/Wolverhampton/Cameroun/73
Enzo Ebosse/DEF/Udinese/Cameroun/70
Jean Onana/MIL/Genoa/Cameroun/70
Moumi Ngamaleu/ATT/Dynamo Moscou/Cameroun/70
Faris Moumbagna/ATT/Marseille/Cameroun/68
Ignatius Ganago/ATT/Nantes/Cameroun/68
Jean-Pierre Nsame/ATT/Legia Varsovie/Cameroun/69
Clinton Njie/ATT/Sivasspor/Cameroun/70
Junior Tchamadeu/DEF/Stoke City/Cameroun/66
Collins Fai/DEF/Al-Tai/Cameroun/68
Léandre Tawamba/ATT/Al-Okhdood/Cameroun/68
Didier Lamkel Zé/ATT/Dukla Prague/Cameroun/64
Simon Ngapandouetnbu/G/Montpellier/Cameroun/64
Simon Omossola/G/Saint-Éloi Lupopo/Cameroun/64
Fabrice Ondoa/G/RFS Riga/Cameroun/68
Darlin Yongwa/DEF/Lorient/Cameroun/67
Eric-Junior Dina Ebimbe/MIL/Brest/Cameroun/73
Olivier Kemen/MIL/Istanbul Basaksehir/Cameroun/68
Martin Ndzie/MIL/Rapid Vienne/Cameroun/63
Brice Ambina/MIL/Vålerenga/Cameroun/62
`},
{id:"s_b_ligaportugal",name:"Liga Portugal",cat:"ligues",sub:"Championnats",raw:`
Diogo Costa/G/Porto/Portugal/85
Francisco Trincão/ATT/Sporting/Portugal/80
Morten Hjulmand/MIL/Sporting/Danemark/81
Vangelis Pavlidis/ATT/Benfica/Grèce/79
Samu Aghehowa/ATT/Porto/Espagne/77
Pedro Gonçalves/ATT/Sporting/Portugal/81
Gonçalo Inácio/DEF/Sporting/Portugal/81
Rodrigo Mora/MIL/Porto/Portugal/77
Nicolás Otamendi/DEF/Benfica/Argentine/82
Alan Varela/MIL/Porto/Argentine/78
Anatoliy Trubin/G/Benfica/Ukraine/80
Andreas Schjelderup/ATT/Benfica/Norvège/74
Luis Suárez/ATT/Sporting/Colombie/79
Ricardo Horta/ATT/Braga/Portugal/77
Richard Ríos/MIL/Benfica/Colombie/78
Georgiy Sudakov/MIL/Benfica/Ukraine/79
Fredrik Aursnes/MIL/Benfica/Norvège/77
Gabri Veiga/MIL/Porto/Espagne/76
António Silva/DEF/Benfica/Portugal/79
Maximiliano Araújo/DEF/Sporting/Uruguay/76
Nehuén Pérez/DEF/Porto/Argentine/75
Geny Catamo/ATT/Sporting/Mozambique/74
Bruma/ATT/Braga/Portugal/75
Rodrigo Zalazar/MIL/Braga/Uruguay/75
William Gomes/ATT/Porto/Brésil/73
Rui Silva/G/Sporting/Portugal/76
Jan Bednarek/DEF/Porto/Pologne/74
Francisco Moura/DEF/Porto/Portugal/74
Zeno Debast/DEF/Sporting/Belgique/73
Leandro Barreiro/MIL/Benfica/Luxembourg/74
Iván Fresneda/DEF/Sporting/Espagne/66
Pau Víctor/ATT/Braga/Espagne/66
Samuel Soares/G/Benfica/Portugal/67
Lukas Horníček/G/Braga/Tchéquie/70
Hidemasa Morita/MIL/Sporting/Japon/76
`}
);
Object.assign(window.CLUB_COLORS,{"Manchester City":["#6CABDD","#FFFFFF"],"Liverpool":["#C8102E","#FFFFFF"],"Arsenal":["#EF0107","#FFFFFF"],"Chelsea":["#034694","#FFFFFF"],"Manchester United":["#DA291C","#FFFFFF"],"Newcastle":["#000000","#FFFFFF"],"Tottenham":["#FFFFFF","#132257"],"Everton":["#003399","#FFFFFF"],"Al-Nassr":["#FFD100","#0033A0"],"Al-Hilal":["#005BAC","#FFFFFF"],"Al-Ahli":["#00843D","#FFFFFF"],"Al-Ittihad":["#FFD200","#111"],"Al-Qadsiah":["#E30613","#FFD100"],"Neom":["#1A1A1A","#C9A227"],"Al-Shabab":["#FFFFFF","#000000"],"Al-Ettifaq":["#007A3D","#E30613"],"Wolfsburg":["#65B32E","#FFFFFF"],"Marseille":["#FFFFFF","#2FAEE0"],"Dinamo Zagreb":["#0033A0","#FFFFFF"],"Leverkusen":["#E32221","#000000"],"Eintracht Francfort":["#000000","#E1000F"],"Dortmund":["#FDE100","#000000"],"Nice":["#E30613","#000000"],"Feyenoord":["#E2001A","#FFFFFF"],"Hellas Vérone":["#003C82","#FFD100"],"Espérance de Tunis":["#E30613","#FFD100"],"Twente":["#E30613","#fff"],"Lille":["#E01E13","#20325F"],"Young Boys":["#FFD200","#111"],"Grenade":["#C8102E","#FFFFFF"],"Al-Shamal":["#0054A6","#FFFFFF"],"Al-Duhail":["#C8102E","#FFFFFF"],"Al-Sadd":["#fff","#111"],"Caen":["#1F3A8C","#E30613"],"Frosinone":["#FFD100","#0054A6"],"Paris FC":["#002D62","#FFFFFF"],"Angers":["#000000","#FFFFFF"],"Stuttgart":["#FFFFFF","#E32219"],"JS Kabylie":["#FFD700","#00843D"],"CR Belouizdad":["#C8102E","#FFFFFF"],"USM Alger":["#C8102E","#111"],"Damac":["#E30613","#FFD100"],"Stade Nyonnais":["#E30613","#FFFFFF"],"PSG":["#004170","#DA291C"],"Milan":["#FB090B","#000000"],"Porto":["#003893","#FFFFFF"],"Sporting":["#00805F","#FFFFFF"],"Juventus":["#FFFFFF","#000000"],"Villarreal":["#FFE667","#005187"],"Fenerbahçe":["#FFED00","#00205B"],"Benfica":["#E83030","#FFFFFF"],"Majorque":["#E20613","#000000"],"Wolverhampton":["#FDB913","#231F20"],"Hambourg":["#FFFFFF","#E2001A"],"Lazio":["#87D8F7","#FFFFFF"],"Nottingham Forest":["#DD0000","#FFFFFF"],"Real Sociedad":["#0067B1","#FFFFFF"],"Gençlerbirliği":["#E30613","#000000"],"Bayern":["#DC052D","#FFFFFF"],"Crystal Palace":["#1B458F","#C4122E"],"Monaco":["#E4002B","#FFFFFF"],"Lyon":["#FFFFFF","#DA001A"],"West Ham":["#7A263A","#1BB1E7"],"Sunderland":["#EB172B","#FFFFFF"],"Metz":["#8B0A26","#FFFFFF"],"Al-Arabi":["#C8102E","#FFFFFF"],"Galatasaray":["#A90432","#FDB912"],"Côme":["#004A99","#FFFFFF"],"Strasbourg":["#009FE3","#FFFFFF"],"Lorient":["#F58220","#000000"],"Samsunspor":["#E30613","#FFFFFF"],"Maccabi Haïfa":["#007A3D","#FFFFFF"],"Betis":["#00954C","#FFFFFF"],"Lens":["#FFE500","#E2001A"],"Montpellier":["#F26522","#00205B"],"Le Havre":["#4F9ACE","#002D62"],"Middlesbrough":["#E30613","#FFFFFF"],"Rayo Vallecano":["#FFFFFF","#E30613"],"Palerme":["#F5A9C4","#000000"],"Leicester":["#003090","#FFFFFF"],"GC Mascara":["#0E8A3E","#fff"],"Saint-Étienne":["#009639","#FFFFFF"],"Mulhouse":["#1D4E9E","#FFD200"],"Rangers":["#1B458F","#FFFFFF"],"Valence":["#FFFFFF","#000000"],"Ettifaq":["#0E7C3A","#E31B23"],"Bochum":["#005BA9","#fff"],"NA Hussein Dey":["#C8102E","#FFD100"],"MC Oran":["#E30613","#FFFFFF"],"Portsmouth":["#001489","#FFFFFF"],"Naples":["#12A0D7","#FFFFFF"],"Troyes":["#0054A6","#FFFFFF"],"Auxerre":["#FFFFFF","#0055A4"],"ASO Chlef":["#E30613","#FFFFFF"],"ES Sétif":["#000000","#FFFFFF"],"Inter":["#0068A8","#000000"],"Fiorentina":["#482E92","#FFFFFF"],"Atalanta":["#1E71B8","#000000"],"Atlético Madrid":["#CB3524","#FFFFFF"],"Roma":["#8E1F2F","#F0BC42"],"Bologne":["#A21C26","#1A2F48"],"Leeds":["#FFFFFF","#1D428A"],"Cagliari":["#A6192E","#002350"],"Burnley":["#6C1D45","#99D6EA"],"Al-Wakrah":["#0054A6","#FFFFFF"],"Al Ahly":["#E30613","#FFFFFF"],"Copenhague":["#FFFFFF","#003DA5"],"Servette":["#8B1538","#FFFFFF"],"CS Sfaxien":["#000000","#FFFFFF"],"Al-Gharafa":["#FFD100","#0054A6"],"Augsbourg":["#BA3733","#46714D"],"Zamalek":["#FFFFFF","#E30613"],"Lecce":["#FFD100","#E30613"],"Norwich":["#FFF200","#00A650"],"Winterthur":["#E30613","#FFFFFF"],"Al-Jazira":["#E30613","#000000"],"Maribor":["#6A2C91","#FFD100"],"Dynamo Makhachkala":["#0054A6","#FFFFFF"],"Kasimpasa":["#002D72","#FFFFFF"],"Lucerne":["#003DA5","#FFFFFF"],"Club Africain":["#E30613","#FFFFFF"],"Étoile du Sahel":["#E30613","#FFFFFF"],"Stade Tunisien":["#007A3D","#E30613"],"Brighton":["#0057B8","#FFFFFF"],"Trabzonspor":["#7A1E3C","#41B6E6"],"Neftchi Bakou":["#000000","#FFFFFF"],"Rennes":["#E13327","#000000"],"New York Red Bulls":["#ED1E36","#23326A"],"Nantes":["#FCD405","#00863F"],"Seattle Sounders":["#5D9741","#005595"],"Besiktas":["#000000","#FFFFFF"],"Abha":["#007A3D","#FFFFFF"],"Udinese":["#FFFFFF","#000000"],"Genoa":["#A4161A","#002D72"],"Dynamo Moscou":["#0033A0","#FFFFFF"],"Legia Varsovie":["#007A3D","#FFFFFF"],"Sivasspor":["#E30613","#FFFFFF"],"Stoke City":["#E03A3E","#FFFFFF"],"Al-Tai":["#FFD100","#000000"],"Al-Okhdood":["#E30613","#FFFFFF"],"Dukla Prague":["#8B1A1A","#FFD700"],"Saint-Éloi Lupopo":["#007A3D","#FFFFFF"],"RFS Riga":["#0054A6","#FFFFFF"],"Braga":["#E30613","#FFFFFF"]});

Object.assign(window.CLUB_COLORS,{"Brest": ["#E30613", "#FFFFFF"], "Charleroi": ["#000000", "#FFFFFF"], "Getafe": ["#005999", "#FFFFFF"], "Istanbul Basaksehir": ["#F26522", "#002D62"], "Lugano": ["#000000", "#FFFFFF"], "Nacional": ["#FFFFFF", "#002D72"], "Pafos": ["#002D72", "#FFFFFF"], "Rapid Vienne": ["#00843D", "#FFFFFF"], "Vålerenga": ["#002D72", "#E30613"]});

/* ---- carriere.js ---- */
/* Note carrière de chaque joueur (la même partout) : sert quand on ajoute un joueur dans un pack perso. */
window.CARRIERE={"Lucas Radebe":80,"Percy Tau":75,"Steven Pienaar":79,"Thembinkosi Lorch":72,"Thomas Strakosha":75,"Abdelatif Ramdane":66,"Abdelaziz Ben Tifour":77,"Abdelaziz Benhamlat":68,"Abdelhafid Tasfaout":76,"Abdelhamid Sadmi":75,"Abdelkader Belharrane":66,"Abdelkader Salhi":66,"Abdelkrim Namani":66,"Abdelmalek Cherrad":70,"Abdelmoumen Djabou":73,"Abdelmoumene Djabou":73,"Abdelouahab Maïche":70,"Abdennour Belhocini":66,"Abderrahmane Hachoud":68,"Abderrazak Djahnit":68,"Abderrazak Harb":64,"Abdesslem Bousri":67,"Adem Zorgane":72,"Adil Boulbina":72,"Ahmed Kendouci":70,"Ahmed Oudjani":80,"Akram Bouras":66,"Alexis Guendouz":70,"Ali Benarbia":82,"Ali Bencheikh":79,"Ali Fergani":79,"Ali Rial":64,"Amine Gouiri":80,"Amir Karaoui":66,"Anis Hadj Moussa":77,"Antar Yahia":76,"Anthony Mandrea":69,"Aymen Mahious":69,"Ayoub Abdellaoui":70,"Ayoub Ghezala":66,"Azzedine Doukha":70,"Aïssa Mandi":78,"Badreddine Souyad":63,"Badredine Bouanani":70,"Baghdad Bounedjah":78,"Baghdad Bounedjah (2019)":78,"Billel Messaoudi":67,"Brahim Benzaza":65,"Brahim Dib":66,"Brahim Zafour":66,"Chaabane Merzekane":77,"Chahreddine Boukholda":64,"Chouaib Keddad":67,"Chérif Oudjani":72,"Djamel Belmadi (joueur)":74,"Djamel Benlamri":74,"Djamel Menad":78,"Essaïd Belkalem":70,"Faouzi Chaouchi":73,"Faouzi Ghoulam":80,"Fares Chaïbi":78,"Farid Chaâl":64,"Farid Ghazi":70,"Farouk Chafaï":69,"Farès Ghedjemis":69,"Fawzi Chaouchi":73,"Fawzi Moussouni":68,"Fayçal Badji":70,"Gaya Merbah":68,"Hadj Bouguèche":72,"Haithem Loucif":66,"Hakim Medane":72,"Hamid Berguiga":66,"Hamza Koudri":68,"Hassen Lalmas":77,"Hicham Boudaoui":76,"Hichem Belkaroui":68,"Hilal Soudani":75,"Himad Abdelli":72,"Houssem Aouar":79,"Houssem Mrezigue":66,"Housseyn Benayada":64,"Ibrahim Maza":76,"Ilan Kebbal":72,"Islam Merili":65,"Islam Slimani":80,"Ismaël Bennacer":82,"Ismaël Bennacer (2019)":82,"Ismaël Bouzid":68,"Jaouen Hadjam":71,"Kamel Kaci-Saïd":72,"Karim Ziani":76,"Kousseila Boualia":64,"Lakhdar Belloumi":86,"Lamara Douicher":66,"Larbi El Hadi":68,"Lounès Gaouaoui":72,"Luca Zidane":66,"Madjid Bougherra":79,"Mahmoud Guendouz":76,"Mehdi Cerbah":70,"Mehdi Lacen":74,"Melvin Mastil":60,"Mohamed Amine Tougaï":70,"Mohamed Amoura":78,"Mohamed Benkhemassa":68,"Mohamed Lamine Zemmamouche":69,"Mohamed Rabie Meftah":68,"Mohamed Réda Hamidi":64,"Mohammed Benkhemassa":68,"Mohand Chérif Hannachi":72,"Mouloud Iboud":72,"Mourad Amara":72,"Moussa Saïb":78,"Moustapha Djallit":68,"Mustapha Dahleb":81,"Mustapha Zeghba":66,"Nabil Bentaleb":74,"Nabil Hemani":67,"Nacer Bouiche":73,"Nadir Belhadj":75,"Naoufel Khacef":65,"Nasreddine Drid":64,"Noureddine Daham":68,"Omar Betrouni":72,"Oussama Benbot":66,"Rabah Madjer":87,"Rachid Mekhloufi":84,"Rafik Belghali":72,"Rafik Halliche":73,"Rafik Saïfi":75,"Ramiz Zerrouki":74,"Ramy Bensebaini":78,"Rayan Aït-Nouri":81,"Raïs M'Bolhi":77,"Rezki Amrouche":64,"Rezki Hamroune":66,"Riad Benayad":63,"Riyad Mahrez":86,"Riyad Mahrez (2016)":86,"Ryad Boudebouz":74,"Réda Babouche":65,"Réda Halaïmia":66,"Rédha Bensayah":64,"Salah Assad":79,"Saâdi Radouani":66,"Saïd Benrahma":76,"Slimane Raho":69,"Sofiane Bendebka":67,"Sofiane Feghouli":79,"Tayeb Meziani":68,"Tedj Bensaoula":76,"Yacine Brahimi":80,"Youcef Atal":76,"Youcef Belaïli":78,"Youcef Belaïli (2019)":78,"Yousri Bouzok":68,"Zakaria Bouhalfaya":63,"Zakaria Boulahia":64,"Zakaria Draoui":67,"Zakaria Naidji":66,"Zidane Mebarakou":65,"Zineddine Belaïd":66,"Zoubir Bachi":74,"Aleksandar Pavlović":81,"Alexander Nübel":76,"Andreas Brehme":88,"Andreas Möller":86,"Angelo Stiller":78,"Antonio Rüdiger":86,"Assan Ouédraogo":70,"Bastian Schweinsteiger":90,"Benjamin Henrichs":75,"Bernd Leno":81,"Bernd Schneider":81,"Bernd Schuster":87,"Bert Trautmann":86,"Berti Vogts":86,"Bodo Illgner":81,"Carsten Ramelow":77,"Chris Führich":75,"Christian Wörns":80,"David Raum":79,"Deniz Undav":77,"Dieter Hoeneß":79,"Dieter Müller":81,"Dirk Heinen":70,"Eike Immel":75,"Felix Magath":83,"Felix Nmecha":75,"Florian Wirtz":87,"Franz Beckenbauer":96,"Fritz Walter":89,"Gerd Müller":94,"Günter Netzer":87,"Hans Tilkowski":81,"Hans-Georg Schwarzenbeck":82,"Hans-Jörg Butt":77,"Harald Schumacher":84,"Helmut Rahn":85,"Horst Blankenburg":79,"Ilkay Gündogan":87,"Jamal Musiala":87,"Jens Lehmann":84,"Jens Nowotny":80,"Jonas Hofmann":75,"Jonas Urbig":70,"Jonathan Burkardt":75,"Jonathan Tah":82,"Joshua Kimmich":89,"Julian Brandt":79,"Jupp Heynckes":84,"Jérôme Boateng":86,"Jörg Albertz":75,"Jürgen Klinsmann":88,"Jürgen Kohler":86,"Kai Havertz":83,"Karim Adeyemi":76,"Karl-Heinz Riedle":81,"Karl-Heinz Rummenigge":91,"Kevin Trapp":79,"Klaus Allofs":81,"Klaus Augenthaler":84,"Klaus Fischer":82,"Lars Bender":78,"Lars Ricken":77,"Lennart Karl":72,"Leon Goretzka":83,"Leroy Sané":84,"Lothar Emmerich":79,"Lothar Matthäus":93,"Manfred Burgsmüller":77,"Manuel Neuer":93,"Marc-André ter Stegen":88,"Marcel Schmelzer":77,"Marco Reus":85,"Mario Gómez":83,"Mario Götze":83,"Mats Hummels":87,"Matthias Sammer":89,"Maximilian Beier":73,"Maximilian Mittelstädt":76,"Mehmet Scholl":81,"Mesut Özil":86,"Michael Ballack":89,"Michael Zorc":78,"Miroslav Klose":88,"Nick Woltemade":77,"Niclas Füllkrug":76,"Nico Schlotterbeck":81,"Oliver Baumann":75,"Oliver Kahn":91,"Oliver Neuville":79,"Pascal Gross":76,"Paul Breitner":89,"Philipp Lahm":92,"Pierre Littbarski":83,"Raimond Aumann":75,"René Adler":76,"Ridle Baku":74,"Robert Andrich":77,"Roman Weidenfeller":77,"Rudi Völler":87,"Rüdiger Vollborn":70,"Sepp Maier":90,"Serge Gnabry":83,"Siegfried Held":76,"Simon Rolfes":77,"Stefan Effenberg":86,"Stefan Kießling":79,"Stefan Klos":77,"Stefan Reuter":79,"Sven Ulreich":70,"Thomas Müller":89,"Tim Kleindienst":74,"Toni Kroos":91,"Toni Schumacher":84,"Ulf Kirsten":82,"Uli Hoeneß":83,"Uwe Seeler":88,"Waldemar Anton":77,"Wolfgang Overath":85,"İlkay Gündoğan":87,"Aaron Ramsdale":75,"Adam Wharton":77,"Alan Ball":85,"Alan Oakes":74,"Alan Shearer":90,"Alex Stepney":77,"Andy Cole":84,"Anthony Gordon":80,"Ashley Cole":86,"Bill Foulkes":79,"Billy Wright":86,"Bob Latchford":76,"Bobby Charlton":93,"Bobby Moore":91,"Bobby Smith":78,"Bobby Tambling":76,"Brian Labone":77,"Bryan Robson":86,"Bukayo Saka":86,"Charlie George":76,"Chris Sutton":78,"Chris Waddle":82,"Chris Woods":76,"Cliff Bastin":81,"Cole Palmer":85,"Colin Bell":82,"Colin Harvey":76,"Conor Gallagher":77,"Curtis Jones":76,"Cyril Knowles":74,"Dan Burn":74,"Dave Watson":76,"David Beckham":89,"David Rocastle":76,"David Seaman":85,"Dean Henderson":76,"Declan Rice":86,"Dele Alli":80,"Dennis Tueart":75,"Dennis Wise":78,"Derek Mountfield":72,"Dixie Dean":86,"Djed Spence":74,"Dominic Solanke":76,"Duncan Edwards":85,"Eberechi Eze":81,"Elliot Anderson":79,"Emlyn Hughes":82,"Ethan Nwaneri":74,"Ezri Konsa":78,"Fikayo Tomori":78,"Francis Lee":80,"Frank Clark":72,"Frank Lampard":89,"Frank Swift":80,"Fraser Forster":75,"Gary Lineker":87,"Gary Mabbutt":76,"Gary Neville":83,"Gary Pallister":81,"Gary Stevens":76,"Geoff Hurst":84,"Glenn Hoddle":85,"Gordon Banks":91,"Gordon West":74,"Graeme Le Saux":77,"Harry Kane":90,"Harry Maguire":79,"Howard Kendall":77,"Ian Callaghan":78,"Ian Wright":84,"Ivan Toney":77,"Jack Grealish":81,"Jackie Milburn":82,"James Tavernier":74,"James Trafford":73,"Jamie Carragher":82,"Jarrod Bowen":79,"Jimmy Greaves":87,"Jobe Bellingham":73,"Joe Cole":80,"Joe Corrigan":75,"Joe Hart":82,"Joe Royle":78,"John Barnes":87,"John Beresford":74,"John Lukic":74,"John Stones":84,"John Terry":89,"Joleon Lescott":78,"Jonathan Woodgate":78,"Jordan Henderson":82,"Jordan Pickford":82,"Josh Acheampong":68,"Jude Bellingham":89,"Kenny Sansom":82,"Kerry Dixon":78,"Kevin Keegan":89,"Kieran Trippier":81,"Kieron Dyer":77,"Kobbie Mainoo":77,"Kyle Walker":84,"Ledley King":82,"Lee Dixon":81,"Leighton Baines":80,"Leon Osman":73,"Les Ferdinand":80,"Levi Colwill":79,"Malcolm Macdonald":80,"Marc Guéhi":82,"Marcus Rashford":82,"Mark Hateley":80,"Martin Chivers":80,"Martin Keown":81,"Mason Greenwood":80,"Michael Carrick":84,"Michael Owen":88,"Mike Doyle":76,"Mike Summerbee":78,"Mikey Moore":64,"Morgan Gibbs-White":77,"Morgan Rogers":80,"Myles Lewis-Skelly":75,"Neil Young":76,"Nick Pope":79,"Nigel Martyn":78,"Nigel Winterburn":79,"Nobby Stiles":80,"Noni Madueke":77,"Ollie Watkins":80,"Paul Gascoigne":87,"Paul Ince":82,"Paul Robinson":76,"Paul Scholes":89,"Peter Beardsley":84,"Peter Bonetti":81,"Peter Osgood":81,"Peter Reid":80,"Peter Shilton":87,"Phil Foden":87,"Phil Jagielka":77,"Phil Neal":83,"Phil Thompson":81,"Raheem Sterling":85,"Ray Clemence":86,"Ray Kennedy":81,"Ray Wilkins":81,"Ray Wilson":80,"Reece James":83,"Rio Ferdinand":88,"Rio Ngumoha":62,"Rob Lee":78,"Robbie Fowler":84,"Roger Byrne":81,"Roger Hunt":82,"Ron Harris":76,"Sol Campbell":85,"Stanley Matthews":91,"Steve Bould":78,"Steve Bruce":80,"Steve Harper":70,"Steve Howey":73,"Steve McManaman":82,"Steve Perryman":78,"Steven Gerrard":91,"Stuart Pearce":82,"Ted Drake":80,"Ted Sagar":76,"Teddy Sheringham":83,"Terry Butcher":82,"Terry McDermott":80,"Tino Livramento":75,"Tom Finney":89,"Tommy Lawton":85,"Tony Adams":86,"Tony Book":76,"Tony Coton":72,"Trent Alexander-Arnold":86,"Trevor Steven":80,"Wayne Rooney":91,"Flávio Amado":77,"Abdullah Al-Khaibari":66,"Hassan Tambakti":70,"Nawaf Al-Aqidi":69,"Salem Al-Dawsari":77,"Sami Al-Najei":66,"Abel Balbo":81,"Adolfo Pedernera":90,"Agustín Cejas":79,"Agustín Marchesín":77,"Agustín Orión":74,"Agustín Rossi":76,"Alan Varela":78,"Alberto Márcico":79,"Alejandro Garnacho":78,"Alexis Mac Allister":85,"Amadeo Carrizo":88,"Andrés D'Alessandro":81,"Antonio Rattín":84,"Antonio Roma":82,"Ariel Ortega":84,"Carlos Bianchi":84,"Carlos Tevez":86,"Claudio Caniggia":83,"Claudio Echeverri":70,"Claudio López":81,"Clemente Rodríguez":75,"Cristian Pavón":75,"Cristian Romero":85,"Daniel Passarella":90,"Darío Benedetto":77,"Delio Onnis":84,"Diego Cagna":75,"Diego Maradona":99,"Diego Milito":85,"Diego Placente":74,"Diego Simeone":84,"Emiliano Martínez":86,"Emiliano Sala":74,"Enzo Fernández":84,"Enzo Pérez":78,"Ernesto Grillo":79,"Esteban Cambiasso":85,"Ever Banega":81,"Exequiel Palacios":79,"Ezequiel Lavezzi":81,"Fabricio Coloccini":79,"Facundo Medina":77,"Federico Fazio":74,"Fernando Cavenaghi":77,"Fernando Gago":79,"Fernando Redondo":88,"Francisco Varallo":82,"Franco Armani":80,"Franco Mastantuono":76,"Félix Loustau":82,"Gabriel Batistuta":89,"Germán Burgos":76,"Gerónimo Rulli":78,"Giovani Lo Celso":79,"Giuliano Simeone":77,"Gonzalo Higuaín":86,"Gonzalo Montiel":76,"Guillermo Barros Schelotto":82,"Hernán Crespo":86,"Hernán Díaz":78,"Hugo Gatti":84,"Hugo Ibarra":77,"Héctor Miguel Zelada":79,"Héctor Yazalde":84,"Jaime Sarlanga":76,"Javier Mascherano":86,"Javier Pastor":80,"Javier Pinola":75,"Javier Saviola":82,"Javier Zanetti":89,"Jonatan Maidana":76,"Jonathan Calleri":76,"Jorge Burruchaga":82,"Jorge Valdano":83,"José Manuel López":70,"José Manuel Moreno":89,"José Poy":76,"José Ramos Delgado":79,"Juan Foyth":77,"Juan Musso":77,"Juan Román Riquelme":88,"Juan Sebastián Verón":85,"Julián Álvarez":86,"Kily González":79,"Lautaro Martínez":87,"Leandro Paredes":79,"Leonardo Astrada":79,"Leonardo Balerdi":77,"Leonardo Ponzio":77,"Lionel Messi":99,"Lionel Messi (2012)":99,"Lisandro López":79,"Lisandro Martínez":81,"Lucho González":80,"Marcelo Barovero":77,"Marcelo Delgado":77,"Marcelo Gallardo":81,"Marcos Acuña":79,"Marcos Rojo":76,"Mario Kempes":89,"Martín Demichelis":80,"Martín Palermo":83,"Matías Almeyda":80,"Matías Soulé":76,"Mauricio Pellegrino":77,"Mauro Icardi":83,"Milton Casco":74,"Nahuel Molina":79,"Nehuén Pérez":75,"Nery Pumpido":79,"Nico Paz":79,"Nicolás Burdisso":78,"Nicolás González":78,"Nicolás Otamendi":82,"Nicolás Tagliafico":78,"Norberto Alonso":85,"Néstor Rossi":84,"Omar Sívori":91,"Oscar Ruggeri":84,"Osvaldo Ardiles":83,"Osvaldo Piazza":80,"Pablo Aimar":84,"Pablo Zabaleta":81,"Paulo Dybala":85,"Pedro Manfredini":79,"Ramón Díaz":82,"Ricky Villa":77,"Roberto Abbondanzieri":80,"Roberto Ayala":85,"Roberto Cherro":81,"Roberto Mouzo":77,"Roberto Perfumo":85,"Rodolfo Arruabarrena":75,"Rodrigo De Paul":81,"Rodrigo Palacio":80,"Rolando Schiavi":76,"Rubens Sambueza":75,"Santiago Castro":72,"Sebastián Battaglia":78,"Sergio Agüero":89,"Sergio Goycochea":81,"Sergio Romero":77,"Silvio Marzolini":85,"Thiago Almada":77,"Ubaldo Fillol":88,"Valentín Barco":72,"Valentín Carboni":72,"Valentín Castellanos":74,"Walter Benítez":76,"Walter Samuel":85,"Ángel Clemente Rojas":81,"Ángel Di María":88,"Ángel Labruna":90,"Éver Banega":81,"Tim Cahill":79,"Christoph Baumgartner":76,"David Alaba":86,"Franz Hasil":76,"Gernot Trauner":74,"Kevin Danso":76,"Konrad Laimer":79,"Marcel Sabitzer":79,"Alexis Saelemaekers":76,"Amadou Onana":78,"Arthur Theate":75,"Arthur Vermeeren":72,"Axel Witsel":81,"Brandon Mechele":72,"Charles De Ketelaere":79,"Dodi Lukebakio":76,"Dries Mertens":84,"Eden Hazard":90,"Enzo Scifo":85,"Eric Gerets":84,"Erwin Vandenbergh":80,"Filip De Wilde":75,"Franky Van der Elst":78,"Georges Grün":77,"Hans Vanaken":76,"Jan Ceulemans":85,"Jan Vertonghen":83,"Jean-Marie Pfaff":86,"Joaquin Seys":68,"Johan Bakayoko":75,"Julien Duranville":66,"Jérémy Doku":81,"Kevin De Bruyne":90,"Koen Casteels":77,"Koni De Winter":74,"Leander Dendoncker":73,"Leandro Trossard":80,"Loïs Openda":79,"Luc Nilis":82,"Malick Fofana":74,"Mandela Keita":69,"Marc Wilmots":82,"Marouane Fellaini":79,"Matz Sels":77,"Maxim De Cuyper":73,"Michel Preud'homme":85,"Michy Batshuayi":75,"Mike Penders":64,"Mousa Dembélé":82,"Nicolas Raskin":70,"Paul Van Himst":87,"Philippe Albert":77,"Radja Nainggolan":83,"Raoul Lambert":81,"Romelu Lukaku":85,"Senne Lammens":74,"Simon Mignolet":78,"Thibaut Courtois":90,"Thomas Meunier":78,"Thomas Vermaelen":78,"Timothy Castagne":76,"Toby Alderweireld":83,"Vincent Kompany":87,"Wilfried Van Moer":82,"Yannick Carrasco":80,"Youri Tielemans":80,"Zeno Debast":73,"Émile Mpenza":77,"Edin Džeko":84,"Elvir Bolić":75,"Ermedin Demirović":75,"Miralem Pjanić":84,"Safet Sušić":86,"Senad Lulić":76,"Adriano":86,"Adriano Correia":78,"Adílio":82,"Aldair":86,"Alemão":81,"Alex":80,"Alex Sandro":81,"Alex Telles":79,"Alex de Souza":84,"Alexsandro":75,"Alisson":89,"Allan":80,"Aloísio":78,"Amoroso":82,"Anderson Polga":76,"Andrade":80,"Andrey Santos":74,"André":75,"Antony":77,"Antônio Carlos Santos":76,"Aranha":72,"Arouca":75,"Bebeto":86,"Bento":74,"Bruno Guimarães":83,"Bruno Henrique":80,"Cafu":91,"Cantarele":77,"Careca":87,"Carlos Alberto":91,"Carlos Alberto Torres":91,"Carlos Mozer":83,"Casemiro":86,"Claudio Caçapa":74,"Clodoaldo":83,"Cláudio Taffarel":84,"Coutinho":86,"Cris":80,"Dalmo":74,"Dani Alves":88,"Danilo":80,"David Luiz":83,"De Sordi":78,"Dede":76,"Denílson":79,"Dida":85,"Didi":91,"Diego":80,"Diego Alves":78,"Diego Carlos":77,"Djalma Dias":80,"Djalma Santos":89,"Domingos da Guia":87,"Doni":74,"Dorval":79,"Douglas Santos":72,"Dunga":84,"Durval":72,"Ederson":86,"Edu":78,"Edu Dracena":74,"Elano":78,"Emerson":82,"Endrick":75,"Estêvão":81,"Fabinho":84,"Fabrício Bruno":72,"Fabão":70,"Falcão":90,"Felipe Melo":78,"Fernandinho":84,"Fernando Menegazzo":72,"Filipe Luís":83,"França":77,"Fred":79,"Fábio Costa":72,"Gabriel":85,"Gabriel Barbosa":80,"Gabriel Jesus":82,"Gabriel Magalhães":85,"Gabriel Martinelli":82,"Gabriel Sara":77,"Galeno":77,"Garrincha":95,"Gerson":78,"Gilberto Silva":82,"Gilmar":87,"Gilmar Rinaldi":74,"Giovane Élber":84,"Giovanni":80,"Gleison Bremer":84,"Guilherme Ferreira":66,"Gérson":88,"Helton":80,"Hernanes":80,"Heurelho Gomes":75,"Hugo Souza":72,"Hulk":82,"Igor Paixão":79,"Igor Thiago":76,"Jair da Costa":80,"Jairzinho":90,"Joelinton":79,"Jonas":81,"Josué":74,"José Altafini":87,"João Gomes":79,"João Pedro":82,"Juan":80,"Juary":73,"Juninho":87,"Jussiê":72,"Júlio César":85,"Júnior":88,"Kaká":92,"Leandro":84,"Leonardo":82,"Leônidas":90,"Leônidas da Silva":90,"Liedson":80,"Lima":77,"Lucas Beraldo":74,"Lucas Leiva":79,"Lucas Moura":80,"Lucas Paquetá":82,"Lucas Perri":75,"Lucas Veríssimo":74,"Luis Fabiano":83,"Luis Pereira":82,"Luisão":81,"Luiz Henrique":77,"Luís Fabiano":83,"Léo":74,"Léo Moura":74,"Léo Pereira":75,"Lúcio":87,"Maicon":86,"Malcom":79,"Marcelo":89,"Marquinhos":87,"Matheus Cunha":82,"Mauro Ramos":82,"Maxwell":79,"Mengálvio":76,"Michel Bastos":76,"Mineiro":75,"Miranda":82,"Mozer":81,"Márcio Amoroso":80,"Mário Jardel":84,"Müller":80,"Neymar":91,"Nunes":74,"Nílton Santos":91,"Oscar":79,"Palhinha":75,"Paulo Henrique Ganso":78,"Paulo Roberto Falcão":90,"Paulo Sérgio":76,"Pedro":80,"Pelé":99,"Pita":74,"Rafael Cabral":70,"Rafael Schmitz":70,"Rafinha":79,"Raphinha":87,"Raul Plassmann":77,"Raí":85,"Renato":74,"Ricardinho":75,"Ricardo Gomes":80,"Ricardo Oliveira":75,"Richarlison":80,"Rivaldo":92,"Rivellino":91,"Roberto Carlos":92,"Robinho":84,"Rodrygo":84,"Roger Ibañez":77,"Rogério Ceni":84,"Romário":93,"Ronaldinho":94,"Ronaldo":96,"Ronaldo (R9)":96,"Ronaldão":74,"Rondinelli":77,"Savinho":79,"Serginho Chulapa":78,"Sonny Anderson":82,"Sócrates":91,"Taffarel":84,"Thiago Silva":89,"Tiago Volpi":72,"Tita":77,"Toninho Cerezo":83,"Toninho Guerreiro":76,"Tostão":89,"Valdo":78,"Vanderlei":68,"Vanderson":75,"Vinícius Jr":90,"Vinícius Júnior":90,"Vitor Roque":74,"Waldir Peres":77,"Waldo":78,"Wendel":76,"Wesley":76,"William Gomes":73,"Zetti":79,"Zico":94,"Zinho":79,"Zito":85,"Zizinho":90,"Zé Carlos":70,"Zé Roberto":83,"Éder Militão":85,"Éverton Ribeiro":78,"Dimitar Berbatov":86,"Hristo Stoichkov":90,"Krasimir Balakov":82,"Stiliyan Petrov":78,"Edmond Tapsoba":80,"Issoufou Dayo":72,"Stéphane Aziz Ki":74,"Achille Emana":74,"Albert Ebossé Bodjongo":66,"Alex Song":79,"Alphonse Tchami":73,"André Onana":83,"André-Frank Zambo Anguissa":83,"Arthur Avom":70,"Aurélien Chedjou":75,"Benoît Assou-Ekotto":75,"Bill Tchato":70,"Brice Ambina":62,"Bryan Mbeumo":83,"Carlos Baleba":80,"Carlos Kameni":77,"Christian Kofane":74,"Christopher Wooh":72,"Clinton Njie":70,"Collins Fai":68,"Danny Namaso":68,"Darlin Yongwa":67,"Devis Epassy":68,"Didier Lamkel Zé":64,"Emmanuel Kundé":78,"Enzo Ebosse":70,"Eric Djemba-Djemba":70,"Eric Maxim Choupo-Moting":77,"Eric-Junior Dina Ebimbe":73,"Eugène N'Jo Léa":74,"Fabrice Ngah":66,"Fabrice Ondoa":68,"Faris Moumbagna":68,"Franck Kom":68,"Frank Anguissa":83,"François Omam-Biyik":78,"Georges-Kévin Nkoudou":72,"Geremi":80,"Grégoire M'Bida":74,"Hamidou Souleymanou":68,"Ignatius Ganago":68,"Jackson Tchatchoua":73,"Jacques Songo'o":79,"Jean Makoun":77,"Jean Onana":70,"Jean-Charles Castelletto":72,"Jean-Pierre Nsame":69,"Joseph-Antoine Bell":82,"Joël Matip":81,"Junior Tchamadeu":66,"Karl Toko Ekambi":77,"Lauren":80,"Louis-Paul Mfédé":70,"Léandre Tawamba":68,"Marc-Vivien Foé":81,"Martin Hongla":72,"Martin Ndzie":63,"Moumi Ngamaleu":70,"Nicolas N'Koulou":77,"Nouhou Tolo":72,"Olivier Kemen":68,"Olivier Ntcham":74,"Patrick Mboma":82,"Pierre Webó":74,"Pierre Womé":73,"Rigobert Song":80,"Roger Milla":88,"Salomon Olembé":72,"Samuel Eto'o":91,"Simon Ngapandouetnbu":64,"Simon Omossola":64,"Stephen Tataw":73,"Stéphane Mbia":77,"Sébastien Bassong":72,"Thomas N'Kono":85,"Théophile Abega":79,"Timothée Atouba":73,"Vincent Aboubakar":78,"Yannick N'Djeng":70,"Alphonso Davies":84,"Jonathan David":82,"Arturo Vidal":86,"Carlos Reinoso":80,"Claudio Bravo":82,"Diego Valdés":75,"Iván Zamorano":85,"Marcelo Salas":85,"Alfredo Morelos":73,"Aquivaldo Mosquera":73,"Carlos Bacca":80,"Carlos Navarro Montoya":78,"Dávinson Sánchez":78,"Faryd Mondragón":78,"Faustino Asprilla":82,"Frank Fabra":75,"Iván Córdoba":84,"Jackson Martínez":81,"James Rodríguez":85,"Jorge Bermúdez":78,"Luis Díaz":86,"Luis Suárez":91,"Mauricio Serna":77,"Radamel Falcao":87,"Richard Ríos":78,"Óscar Córdoba":82,"Fabrice Ondama":70,"Guy Mbenza":70,"Cha Bum-kun":85,"Ji-sung Park":80,"Kim Min-jae":84,"Lee Kang-in":78,"Lee Young-pyo":76,"Son Heung-min":88,"Keylor Navas":86,"Alen Bokšić":83,"Aljoša Asanović":78,"Andrej Kramarić":79,"Ante Rebić":77,"Danijel Subašić":79,"Darijo Srna":81,"Dario Šimić":78,"Davor Šuker":88,"Dejan Lovren":78,"Domagoj Vida":76,"Dominik Livaković":80,"Dražen Ladić":76,"Eduardo da Silva":76,"Goran Vlaović":76,"Igor Štimac":77,"Ivan Perišić":84,"Ivan Rakitić":86,"Ivica Olić":79,"Josip Šimunić":77,"Joško Gvardiol":85,"Luka Modrić":92,"Luka Vušković":72,"Marcelo Brozović":83,"Mario Mandžukić":85,"Mario Stanić":77,"Mateo Kovačić":83,"Niko Kovač":78,"Niko Kranjčar":77,"Robert Jarni":80,"Robert Prosinečki":85,"Slaven Bilić":77,"Stipe Pletikosa":77,"Tomislav Butina":72,"Vedran Runje":76,"Vedran Ćorluka":77,"Zvonimir Boban":87,"Abdoulaye Méïté":74,"Abdoulaye Traoré":76,"Alain Gouaméné":74,"Alban Lafont":76,"Amad Diallo":80,"Arthur Boka":74,"Aruna Dindane":76,"Badra Ali Sangaré":66,"Bazoumana Touré":70,"Boubacar Barry":74,"Cheick Comara":67,"Cheick Tioté":79,"Christ Inao Oulaï":70,"Christopher Operi":67,"Cyril Domoraud":73,"Didier Drogba":89,"Didier Zokora":79,"Elye Wahi":74,"Emmanuel Agbadou":74,"Emmanuel Eboué":78,"Evan Ndicka":79,"Evann Guessand":76,"Fousseny Coulibaly":68,"Franck Kessié":82,"Gervinho":81,"Ghislain Konan":72,"Guéla Doué":72,"Gérard Gnanhouan":70,"Habib Maïga":66,"Hamed Junior Traorè":75,"Ibrahim Sangaré":80,"Ira Eliezer Tapé":62,"Jean Michaël Seri":78,"Jean-Jacques Gosso":70,"Jean-Jacques Tizié":74,"Jean-Philippe Krasso":72,"Jonathan Bamba":76,"Jérémie Boga":75,"Kolo Touré":84,"Laurent Pokou":85,"Lazare Amani":68,"Max Gradel":75,"Mohamed Diomandé":74,"Mohamed Koné":68,"Nicolas Pépé":80,"Odilon Kossounou":78,"Oumar Diakité":71,"Ousmane Diomande":80,"Parfait Guiagon":67,"Romaric":74,"Salomon Kalou":81,"Seko Fofana":80,"Serey Dié":74,"Serge Aurier":80,"Seydou Doumbia":79,"Siaka Tiéné":75,"Simon Adingra":76,"Sol Bamba":73,"Sylvain Gbohouo":72,"Sébastien Haller":81,"Wilfried Bony":80,"Wilfried Singo":76,"Wilfried Zaha":82,"Willy Boly":77,"Yahia Fofana":73,"Yan Diomande":77,"Yaya Touré":90,"Éric Bailly":78,"Brian Laudrup":88,"Chido Obi":60,"Christian Eriksen":86,"Christian Poulsen":79,"Jan Heintze":77,"Jan Mølby":80,"Jon Dahl Tomasson":82,"Michael Laudrup":92,"Morten Hjulmand":81,"Peter Schmeichel":92,"Pierre-Emile Højbjerg":81,"Rasmus Højlund":78,"Simon Kjær":81,"Søren Lerby":83,"Thomas Gravesen":78,"Abel Resino":80,"Adelardo":80,"Albert Ferrer":79,"Alejandro Balde":79,"Alejandro Grimaldo":83,"Alfredo Di Stéfano":97,"Amancio":85,"Andoni Zubizarreta":86,"Andrés Iniesta":93,"Andrés Palop":79,"Antoni Ramallets":84,"Antonio Adán":74,"Antonio López":74,"Antonio Puchades":79,"Antonio Puerta":75,"Aymeric Laporte":83,"Ayoze Pérez":75,"Carles Puyol":89,"Carles Rexach":82,"Carlos Marchena":81,"Cesc Fàbregas":87,"Cristhian Mosquera":74,"César Azpilicueta":84,"Dani Carvajal":86,"Dani Olmo":83,"Dani Parejo":80,"Dani Vivian":75,"David Albelda":82,"David Navarro":70,"David Raya":83,"David Silva":88,"David Villa":88,"David de Gea":86,"Dean Huijsen":80,"Diego Costa":84,"Dro Fernández":62,"Emilio Butragueño":87,"Enrique Collar":80,"Eric García":76,"Fabián Ruiz":82,"Fermín López":78,"Fernando Gómez":80,"Fernando Hierro":88,"Fernando Morientes":83,"Fernando Torres":87,"Ferran Torres":79,"Francisco Gento":90,"Gabi":80,"Gabri Veiga":76,"Gaizka Mendieta":84,"Gavi":80,"Gerard Piqué":88,"Guillermo Amor":79,"Ignacio Eizaguirre":78,"Iker Casillas":92,"Isacio Calleja":76,"Iván Fresneda":66,"Iván Marcano":76,"Iñigo Martínez":80,"Jaume Domènech":72,"Javi Martínez":83,"Javi Navarro":76,"Javier Urruticoechea":78,"Javier Varas":68,"Jesús Navas":84,"Jesús Rodríguez":68,"Joan Capdevila":79,"Joan García":80,"Joaquín":81,"Jordi Alba":86,"José Antonio Camacho":84,"José Antonio Reyes":80,"José Eulogio Gárate":82,"José Francisco Molina":78,"José Luis Gayà":79,"José Manuel Ochotorena":74,"José Mari Bakero":81,"Juan Arza":80,"Juan Carlos Unzué":72,"Juan Mata":82,"Juanfran":81,"Juanito":84,"Kiko":80,"Koke":83,"Lamine Yamal":89,"Luis Alberto":80,"Luis Aragonés":84,"Luis Arconada":85,"Luis Suárez Miramontes":90,"Manolo Sanchís":84,"Marc Bernal":66,"Marc Cucurella":81,"Marcos Llorente":81,"Martín Zubimendi":83,"Miguel Reina":76,"Miguel Ángel Angulo":77,"Migueli":80,"Mikel Arteta":79,"Mikel Merino":81,"Mikel Oyarzabal":81,"Mundo":80,"Míchel":84,"Míchel Salgado":82,"Nacho Fernández":79,"Nico Williams":83,"Pablo Alfaro":74,"Pablo Barrios":77,"Paco Alcácer":77,"Paco Buyo":80,"Paco Gento":90,"Pau Cubarsí":82,"Pau Torres":79,"Pau Víctor":66,"Pedri":87,"Pedro Porro":81,"Pep Guardiola":86,"Pepe Reina":82,"Rafael Gordillo":83,"Raúl":91,"Raúl Albiol":80,"Ricardo Arias":76,"Ricardo Zamora":88,"Robert Sánchez":74,"Roberto Soldado":78,"Robin Le Normand":79,"Rodri":90,"Rodrigo":77,"Rubén Baraja":81,"Salvador Sadurní":77,"Samu Aghehowa":77,"Samu Omorodion":77,"Santi Cazorla":84,"Santiago Cañizares":84,"Santillana":84,"Saúl Ñíguez":81,"Sergi Barjuán":79,"Sergio Busquets":89,"Sergio Ramos":92,"Sergio Rico":74,"Telmo Zarra":87,"Thiago Alcântara":86,"Tomás Reñones":74,"Unai Simón":82,"Vicente":82,"Víctor Valdés":85,"Xabi Alonso":88,"Xavi":93,"Yeremy Pino":76,"Álex Baena":80,"Álex Grimaldo":83,"Álex Remiro":79,"Álvaro Carreras":78,"Álvaro Fidalgo":75,"Álvaro Morata":81,"Álvaro Negredo":78,"Jari Litmanen":87,"Lukáš Hrádecký":80,"Sami Hyypiä":84,"Adil Rami":78,"Adrien Rabiot":81,"Aimé Jacquet":72,"Alain Giresse":87,"Alain Roche":78,"Alexandre Lacazette":81,"Alou Diarra":77,"Alphonse Areola":76,"André-Pierre Gignac":80,"Anthony Réveillère":77,"Antoine Griezmann":89,"Antoine Kombouaré":72,"Aurélien Tchouaméni":84,"Ayyoub Bouaddi":72,"Bafétimbi Gomis":78,"Basile Boli":83,"Benjamin André":75,"Benjamin Mendy":77,"Benjamin Pavard":82,"Benoît Badiashile":75,"Benoît Cheyrou":72,"Benoît Costil":74,"Benoît Trémoulinas":73,"Bernard Blanchet":76,"Bernard Bosquier":81,"Bernard Casoni":76,"Bernard Lacombe":82,"Bernard Lama":82,"Bixente Lizarazu":86,"Blaise Matuidi":83,"Bradley Barcola":82,"Brice Samba":77,"Castello Lukeba":78,"Charles-Hubert Itandje":68,"Christian Karembeu":81,"Christian Lopez":79,"Christian Synaeghel":74,"Christophe Dugarry":79,"Christopher Nkunku":82,"Claude Abbes":75,"Claude Makélélé":87,"Claude Puel":72,"Corentin Tolisso":79,"Cédric Carrasso":75,"Daniel Eon":72,"Daniel Leclercq":72,"Daniel Moreira":70,"David Ginola":83,"David Marraud":70,"David Trezeguet":86,"Dayot Upamecano":84,"Didier Deschamps":86,"Didier Six":80,"Didier Sénac":72,"Dimitri Payet":82,"Djibril Sidibé":76,"Dominique Baratelli":76,"Dominique Bathenay":78,"Dominique Casagrande":70,"Dominique Dropsy":77,"Dominique Rocheteau":83,"Désiré Doué":84,"Eduardo Camavinga":83,"Eli Junior Kroupi":72,"Emmanuel Petit":84,"Enzo Millot":75,"Eric Cantona":89,"Eric Carrière":78,"Fabien Barthez":86,"Fabien Lemoine":70,"Fleury Di Nallo":79,"Florent Balmont":74,"Florent Malouda":82,"Florian Sotoca":73,"Florian Thauvin":80,"Franck Béria":72,"Franck Ribéry":89,"Franck Sauzée":80,"Frank Leboeuf":80,"François Clerc":73,"Frédéric Da Rocha":71,"Frédéric Déhu":74,"Gabriel De Michèle":74,"Gaëtan Huard":74,"Georges Bereta":79,"Gilles Rampillon":75,"Grégory Coupet":83,"Grégory Wimbée":72,"Guillaume Restes":74,"Guillaume Warmuz":76,"Gérard Farison":72,"Gérard Janvion":77,"Hatem Ben Arfa":79,"Henri Michel":81,"Hervé Revelli":81,"Hugo Ekitike":82,"Hugo Lloris":87,"Ibrahima Konaté":84,"Jacques Santini":72,"Jean Baratte":79,"Jean Djorkaeff":77,"Jean Tigana":87,"Jean Vincent":80,"Jean-Christophe Thouvenel":74,"Jean-Claude Suaudeau":70,"Jean-Guy Wallemme":74,"Jean-Louis Leca":70,"Jean-Luc Ettori":79,"Jean-Marc Pilorget":72,"Jean-Michel Larqué":79,"Jean-Paul Bertrand-Demanes":76,"Jean-Philippe Mateta":78,"Jean-Pierre Papin":89,"Jessy Moulin":68,"Jocelyn Angloma":79,"Johan Micoud":81,"Jonathan Gradit":73,"Josuha Guilavogui":75,"José Touré":78,"Joël Bats":80,"Jules Koundé":85,"Julien Escudé":75,"Julien Rodriguez":72,"Just Fontaine":88,"Jérémie Janot":72,"Jérémy Clément":70,"Jérémy Mathieu":79,"Jérémy Toulalan":80,"Jérôme Rothen":78,"Karim Benzema":91,"Kevin Gameiro":80,"Khéphren Thuram":80,"Kingsley Coman":84,"Kurt Zouma":78,"Kylian Mbappé":92,"Laurent Blanc":87,"Laurent Roussey":72,"Leny Yoro":78,"Lilian Laslandes":75,"Lilian Thuram":89,"Loïc Amisse":74,"Loïc Perrin":76,"Lucas Chevalier":80,"Lucas Digne":79,"Lucas Hernandez":82,"Lucas Hernández":82,"Ludovic Giuly":82,"Luis Fernandez":84,"Luis Fernández":84,"Léo Dubois":74,"Léonard Specht":70,"Maghnes Akliouche":80,"Malo Gusto":80,"Manu Koné":80,"Manuel Amoros":84,"Marc Planus":71,"Marcel Desailly":89,"Marcus Thuram":84,"Marius Trésor":86,"Mathieu Berson":68,"Mathieu Bodmer":73,"Mathieu Chalmé":70,"Mathieu Debuchy":77,"Mathieu Valbuena":80,"Mattéo Guendouzi":79,"Maxence Lacroix":77,"Maxime Bossis":86,"Maxime Gonalons":76,"Michael Olise":87,"Michel Platini":95,"Mickaël Landreau":80,"Mike Maignan":86,"Mohamed Simakan":77,"Moussa Diaby":79,"N'Golo Kanté":88,"Nabil Fekir":81,"Nicolas Gillet":70,"Nicolas Ouédec":76,"Nicolas Pallois":74,"Odsonne Édouard":75,"Olivier Giroud":84,"Olivier Monterrubio":72,"Ousmane Dembélé":90,"Pascal Cygan":70,"Pascal Olmeta":74,"Patrice Evra":85,"Patrice Loko":77,"Patrice Rio":74,"Patrick Battiston":83,"Patrick Revelli":80,"Patrick Vieira":90,"Paul Pogba":86,"Philippe Gondet":78,"Philippe Mexès":79,"Philippe Vercruysse":78,"Pierre Kalulu":78,"Pierre Repellini":74,"Presnel Kimpembe":80,"Randal Kolo Muani":79,"Raphaël Varane":87,"Rayan Cherki":81,"Raymond Domenech":75,"Raymond Kopa":90,"René Girard":75,"Reynald Pedros":77,"Rio Mavuba":75,"Robert Herbin":82,"Robert Pirès":86,"Robin Risser":70,"Rod Fanni":71,"Roger Boli":74,"Romain Hamouma":71,"Rémy Vercoutre":68,"Samuel Umtiti":81,"Senny Mayulu":70,"Serge Chiesa":77,"Sidney Govou":78,"Steve Mandanda":82,"Steven N'Zonzi":77,"Stéphane Ruffier":77,"Sylvain Armand":72,"Sylvain Wiltord":83,"Sébastien Squillaci":75,"Theo Hernández":85,"Thierry Henry":93,"Thierry Tusseau":76,"Thomas Lemar":79,"Théo Hernandez":85,"Tony Vairelles":74,"Ulrich Ramé":76,"Valérien Ismaël":72,"Vincent Candela":80,"Vincent Guérin":75,"Warren Zaïre-Emery":80,"Wesley Fofana":79,"William Ayache":74,"William Saliba":86,"Willy Sagnol":81,"Wissam Ben Yedder":80,"Yoann Gourcuff":81,"Yoann Lachor":70,"Yohan Cabaye":79,"Youri Djorkaeff":85,"Youssouf Fofana":80,"Zinédine Zidane":97,"Éric Abidal":81,"Éric Cantona":88,"Éric Carrière":75,"Éric Di Meco":77,"Éric Sikora":74,"Malick Evouna":68,"Pierre-Emerick Aubameyang":86,"Abdul Rahman Baba":70,"Abedi Pelé":87,"Adam Kwarasey":66,"Alexander Djiku":73,"André Ayew":77,"Anthony Annan":71,"Antoine Semenyo":81,"Asamoah Gyan":79,"Christian Atsu":73,"Daniel Amartey":71,"Emmanuel Agyemang-Badu":72,"Hans Sarpei":71,"Harrison Afful":72,"Isaac Vorsah":69,"Iñaki Williams":80,"John Mensah":77,"John Paintsil":72,"Jonathan Mensah":70,"Jordan Ayew":75,"Junior Agogo":68,"Kamaldeen Sulemana":72,"Kevin-Prince Boateng":79,"Kwadwo Asamoah":80,"Lawrence Ati-Zigi":68,"Matthew Amoah":70,"Michael Essien":87,"Mohammed Kudus":82,"Mohammed Polo":74,"Mohammed Salisu":72,"Nii Lamptey":74,"Razak Brimah":63,"Richard Kingson":72,"Richard Ofori":67,"Robert Mensah":76,"Samuel Kuffour":84,"Stephen Appiah":80,"Sulley Muntari":79,"Tariq Lamptey":72,"Thomas Partey":82,"Tony Yeboah":81,"Kostas Manolas":80,"Vangelis Pavlidis":79,"Bobo Baldé":74,"Serhou Guirassy":83,"Georgi Kinkladze":77,"Giorgi Mamardashvili":82,"Kakha Kaladze":80,"Khvicha Kvaratskhelia":87,"Dominik Szoboszlai":84,"Ferenc Puskás":95,"László Kubala":92,"Péter Gulácsi":78,"Mehdi Taremi":80,"Denis Irwin":84,"Kevin Sheedy":76,"Liam Brady":85,"Mark Lawrenson":81,"Pat Bonner":75,"Patsy Gallacher":80,"Richard Dunne":77,"Robbie Keane":81,"Roy Keane":89,"Shay Given":82,"Séamus Coleman":79,"Danny Blanchflower":85,"Elisha Scott":78,"George Best":94,"Harry Gregg":78,"Keith Gillespie":73,"Neil Lennon":76,"Pat Jennings":85,"Steven Davis":76,"Willie McFaul":70,"Hákon Haraldsson":74,"Agostino Di Bartolomei":82,"Alessandro Altobelli":84,"Alessandro Bastoni":86,"Alessandro Costacurta":86,"Alessandro Del Piero":92,"Alessandro Nesta":91,"Alessandro Renica":74,"Alex Meret":79,"Amedeo Amadei":83,"Amedeo Carboni":78,"Andrea Barzagli":85,"Andrea Cambiaso":79,"Andrea Pirlo":92,"Andrea Raggi":70,"Angelo Peruzzi":85,"Antonio Cabrini":86,"Antonio Conte":82,"Antonio Di Natale":84,"Antonio Juliano":80,"Armando Picchi":84,"Bruno Conti":85,"Bruno Giordano":80,"Bryan Cristante":76,"Carlo Ancelotti":81,"Carlo Cudicini":77,"Cesare Maldini":84,"Christian Abbiati":79,"Christian Panucci":81,"Christian Vieri":87,"Ciro Ferrara":84,"Ciro Immobile":85,"Claudio Garella":75,"Claudio Gentile":86,"Claudio Marchisio":82,"Damiano Tommasi":77,"Daniel Maldini":72,"Daniele De Rossi":87,"Daniele Massaro":78,"Davide Frattesi":80,"Demetrio Albertini":84,"Destiny Udogie":78,"Dino Zoff":93,"Enrico Albertosi":82,"Enzo Maresca":75,"Evaristo Beccalossi":79,"Fabio Cannavaro":91,"Fabio Cudicini":80,"Fabrizio Ravanelli":80,"Federico Chiesa":82,"Federico Dimarco":84,"Federico Marchetti":77,"Felice Pulici":77,"Fernando De Napoli":78,"Filippo Inzaghi":86,"Flavio Roma":76,"Francesco Antonioli":75,"Francesco Pio Esposito":72,"Francesco Toldo":84,"Francesco Totti":92,"Franco Baresi":95,"Franco Causio":82,"Franco Tancredi":78,"Gabriele Oriali":80,"Gaetano Scirea":91,"Gennaro Gattuso":86,"Giacinto Facchetti":92,"Giacomo Losi":79,"Giacomo Raspadori":78,"Giampiero Boniperti":88,"Giancarlo Antognoni":84,"Gianfranco Zola":87,"Gianluca Mancini":77,"Gianluca Pagliuca":83,"Gianluca Vialli":86,"Gianluca Zambrotta":85,"Gianluigi Buffon":94,"Gianluigi Donnarumma":88,"Gianni Rivera":92,"Gianpiero Combi":85,"Gigi Riva":90,"Giorgio Chiellini":88,"Giorgio Chinaglia":82,"Giovanni Cervone":73,"Giovanni Di Lorenzo":82,"Giovanni Francini":74,"Giuliano Giuliani":74,"Giuliano Sarti":80,"Giuseppe Bergomi":86,"Giuseppe Bruscolotti":78,"Giuseppe Favalli":75,"Giuseppe Giannini":82,"Giuseppe Meazza":93,"Giuseppe Pancaro":75,"Giuseppe Signori":84,"Giuseppe Wilson":78,"Guglielmo Vicario":80,"Guido Masetti":76,"Ivan Provedel":77,"Ivano Bordon":78,"Jorginho":84,"Leonardo Bonucci":86,"Lorenzo Amoruso":74,"Lorenzo Insigne":84,"Lorenzo Pellegrini":79,"Luca Marchegiani":78,"Luciano Castellini":78,"Luciano Re Cecconi":77,"Luigi Martini":74,"Luigi Riva":90,"Manuel Locatelli":80,"Marco Ballotta":70,"Marco Carnesecchi":78,"Marco Delvecchio":77,"Marco Materazzi":82,"Marco Tardelli":87,"Marco Verratti":86,"Mario Corso":84,"Mateo Retegui":78,"Matteo Politano":78,"Mattia Zaccagni":77,"Mauro Tassotti":83,"Michael Folorunsho":70,"Michele Di Gregorio":77,"Moise Kean":80,"Morgan De Sanctis":78,"Nicola Berti":80,"Nicolò Barella":87,"Nicolò Fagioli":74,"Nicolò Rovella":77,"Paolo Cannavaro":72,"Paolo Maldini":95,"Paolo Negro":74,"Paolo Rossi":89,"Pietro Anastasi":81,"Raoul Bellanova":74,"Riccardo Calafiori":80,"Riccardo Orsolini":78,"Roberto Baggio":93,"Roberto Bettega":84,"Roberto Boninsegna":82,"Roberto Di Matteo":79,"Roberto Donadoni":84,"Roberto Mancini":85,"Roberto Pruzzo":80,"Salvatore Bagni":78,"Salvatore Sirigu":77,"Samuele Ricci":76,"Sandro Mazzola":89,"Sandro Tonali":84,"Sebastiano Rossi":80,"Sebino Nela":76,"Silvio Piola":88,"Simone Inzaghi":76,"Simone Perrotta":77,"Stefano Tacconi":79,"Tarcisio Burgnich":84,"Thiago Motta":82,"Tommaso Rocchi":75,"Vincenzo Montella":81,"Walter Zenga":86,"Wilfried Gnonto":70,"Leon Bailey":77,"Hidemasa Morita":76,"Shinji Kagawa":80,"Shinji Ono":77,"Shunsuke Nakamura":79,"Takefusa Kubo":80,"Amir Rrahmani":80,"George Weah":91,"William Jebor":68,"Leandro Barreiro":74,"Abdou Traoré":68,"Adama Coulibaly":73,"Amadou Haidara":77,"Bakaye Traoré":71,"Boubacar Kouyaté":69,"Cheick Diabaté":74,"Cheick Doucouré":78,"Cheick Oumar Dabo":66,"Cédric Kanté":71,"Diadie Samassékou":73,"Djigui Diarra":72,"Dramane Traoré":70,"Drissa Diakité":70,"El Bilal Touré":74,"Falaye Sacko":70,"Frédéric Kanouté":84,"Hamari Traoré":76,"Ibrahim Mounkoro":68,"Jimmy Kébé":70,"Kalifa Coulibaly":70,"Lassana Coulibaly":72,"Mahamadou Diarra":85,"Mamadou Samassa":69,"Mamady Sidibé":70,"Massadio Haïdara":71,"Modibo Maïga":72,"Mohamed Sissoko":78,"Molla Wagué":68,"Moussa Marega":77,"Mustapha Yatabaré":70,"Oumar Sissoko":68,"Ousmane Coulibaly":70,"Salif Coulibaly":69,"Salif Keïta":86,"Samba Diakité":68,"Sambou Yatabaré":68,"Seydou Keita":83,"Soumbeïla Diakité":70,"Youssouf Koné":68,"Yves Bissouma":79,"Abde Ezzalzouli":77,"Abdelali Mhamdi":70,"Abdelfettah Hadraf":64,"Abdelhamid Aït Boudlal":70,"Abdelilah Amimi":66,"Abdelilah Fahmi":68,"Abdelilah Hafidi":70,"Abdeljalil Jbira":66,"Abdelkabir El Ouadi":65,"Abdellatif Noussir":68,"Abdelmajid Dolmy":84,"Abderrahim Achchakir":66,"Abdeslam Ouaddou":72,"Achraf Bencharki":72,"Achraf Dari":72,"Achraf Hakimi":87,"Adam Aznou":70,"Adam Ennaffati":62,"Ahmed Faras":85,"Ahmed Hammoudan":66,"Ahmed Reda Tagnaouti":72,"Amine Adli":77,"Amine Atouchi":66,"Amine Zouhzouh":64,"Amir Richardson":72,"Anas Zniti":72,"Ayman El Hassouni":70,"Ayoub El Amloud":67,"Ayoub El Kaabi":78,"Aziz Bouderbala":82,"Azzedine Ounahi":78,"Badie Aouk":66,"Badou Zaki":86,"Badr Benoun":72,"Badr El Kaddouri":72,"Badr Gaddarine":62,"Bilal El Khannouss":77,"Bouchaib El Moubarki":70,"Brahim Díaz":82,"Brahim Nakach":67,"Chadi Riad":72,"Chemsdine Talbi":70,"El Mehdi Al Harrar":64,"El Mehdi Benabid":68,"Eliesse Ben Seghir":77,"Hakim Ziyech":84,"Hamza Igamane":72,"Hamza Moussaoui":66,"Hassan Benabicha":70,"Hassan Nader":78,"Hicham Aboucherouane":67,"Houssine Kharja":74,"Ilias Akhomach":70,"Ismael Saibari":78,"Ismail Haddad":70,"Issa Diop":74,"Jamal Harkass":66,"Jamal Sellami":71,"Jawad El Yamiq":70,"Khalid Askri":68,"Khalid Aït Ouarkhane":64,"Khalid Fouhami":72,"Mahmoud Benhalib":70,"Marouane Chamakh":79,"Marouane Hadhoudi":64,"Marouane Zemmama":68,"Mbark Boussoufa":77,"Mehdi Benabid":68,"Mehdi Benatia":84,"Mohamed Boulacsoute":63,"Mohamed Moubarik":65,"Mohamed Moufid":64,"Mohamed Nahiri":69,"Mohamed Oulhaj":69,"Mohamed Ounajem":69,"Mohamed Rabie Hrimat":68,"Mohamed Rayhi":67,"Mohamed Timoumi":85,"Mohsine Moutouali":72,"Mouad Fekkak":60,"Mouhcine Iajour":70,"Mounir Mohamedi":72,"Munir Mohamedi":72,"Mustapha Bidoudane":70,"Mustapha Chadli":72,"Mustapha Hadji":83,"Mustapha Khalif":66,"Nadir Lamyaghri":73,"Nayef Aguerd":79,"Neil El Aynaoui":75,"Nordin Amrabat":76,"Noureddine Naybet":86,"Noussair Mazraoui":80,"Omar Boutayeb":64,"Omar Najdi":64,"Oussama Lamlioui":64,"Oussama Targhalline":68,"Rachid Daoudi":76,"Reda Hajhouj":66,"Reda Slim":67,"Reda Tagnaouti":72,"Romain Saïss":77,"Sabir Bougrine":64,"Salaheddine Bassir":75,"Salaheddine Saidi":64,"Saïd Ghandi":74,"Selim Amallah":72,"Sofyan Amrabat":81,"Soufiane Alloudi":68,"Soufiane Rahimi":75,"Talal El Karkouri":74,"Tarik El Jarmouni":67,"Walid El Karti":69,"Yahia Attiat-Allah":71,"Yahia Attiyat Allah":71,"Yahya Jabrane":70,"Yassine Bounou":85,"Younès Belhanda":77,"Youssef Chippo":73,"Youssef El Fahli":63,"Youssef El Motie":66,"Youssef El-Arabi":75,"Youssef En-Nesyri":80,"Youssef Hadji":72,"Youssef Mehri":64,"Youssef Rossi":72,"Youssef Safri":72,"Zakaria Aboukhlal":72,"Zakaria Hadraf":67,"Zouheir Laâroubi":67,"Adolfo Ríos":74,"Adrián Chávez":72,"Alberto García Aspe":77,"Alfredo Tena":78,"Andrés Guardado":80,"Antonio Carbajal":80,"Benjamín Galindo":76,"Carlos Hermosillo":76,"Carlos Salcido":76,"Carlos Vela":80,"Claudio Suárez":78,"Cristóbal Ortega":76,"Cuauhtémoc Blanco":82,"Duilio Davino":72,"Edson Álvarez":78,"Enrique Borja":77,"Francisco Javier Rodríguez":73,"Gerardo Torrado":75,"Germán Villa":72,"Guillermo Ochoa":80,"Henry Martín":74,"Hirving Lozano":80,"Horacio Casarín":73,"Hugo Sánchez":88,"Héctor Herrera":79,"Héctor Moreno":77,"Isaac Terrazas":68,"Jared Borgetti":77,"Javier Aguirre":70,"Javier Hernández":80,"Jorge Campos":80,"Jorge Sánchez":70,"Julián Quiñones":74,"Kevin Álvarez":68,"Luis García":75,"Luis Hernández":77,"Luis Ángel Malagón":72,"Manuel Negrete":75,"Miguel Layún":74,"Moisés Muñoz":70,"Oribe Peralta":76,"Oswaldo Sánchez":76,"Pablo Larios":72,"Paul Aguilar":71,"Pável Pardo":77,"Rafael Márquez":85,"Ramón Ramírez":74,"Raúl Jiménez":78,"Ricardo Osorio":72,"Santiago Giménez":78,"Sebastián Córdova":70,"Tomás Boy":74,"Zague":72,"Anto Drobnjak":73,"Predrag Mijatović":86,"Stefan Savić":80,"Geny Catamo":74,"Adebayo Adeleye":60,"Ademola Lookman":83,"Ahmed Musa":74,"Akor Adams":72,"Alex Iwobi":76,"Alhassan Yusuf":65,"Amas Obasogie":60,"Augustine Eguavoen":72,"Austin Ejide":70,"Bright Osayi-Samuel":71,"Calvin Bassey":75,"Carl Ikeme":68,"Celestine Babayaro":77,"Christantus Uche":70,"Christian Chukwu":78,"Cyriel Dessers":72,"Daniel Amokachi":77,"Ebenezer Akinsanmiro":63,"Efe Ambrose":70,"Emmanuel Amuneke":79,"Emmanuel Amunike":79,"Finidi George":81,"Fisayo Dele-Bashiru":70,"Francis Uzoho":68,"Frank Onyeka":72,"Garba Lawal":72,"Godwin Okpara":74,"Ike Shorunmu":72,"Jay-Jay Okocha":86,"Joe Aribo":70,"John Obi Mikel":80,"John Utaka":75,"Joseph Yobo":77,"Kelechi Iheanacho":76,"Kenneth Omeruo":70,"Kevin Akpoguma":69,"Maduka Okoye":70,"Michael Eneramo":70,"Michel Babatunde":65,"Moses Simon":75,"Muda Lawal":77,"Mutiu Adepoju":74,"Nathan Tella":72,"Nwankwo Kanu":84,"Obafemi Martins":78,"Ogenyi Onazi":71,"Oghenekaro Etebo":69,"Ola Aina":76,"Paul Onuachu":73,"Peter Odemwingie":75,"Peter Rufai":76,"Raphael Onyedika":74,"Rashidi Yekini":82,"Samuel Chukwueze":76,"Segun Odegbami":78,"Semi Ajayi":70,"Stanley Nwabali":70,"Stephen Keshi":79,"Sunday Oliseh":80,"Taiwo Awoniyi":73,"Taribo West":78,"Taye Taiwo":74,"Terem Moffi":74,"Tolu Arokodare":72,"Uche Okechukwu":75,"Victor Boniface":77,"Victor Ikpeba":76,"Victor Osimhen":86,"Vincent Enyeama":79,"Wilfred Ndidi":79,"William Troost-Ekong":73,"Wilson Oruma":72,"Yakubu Aiyegbeni":77,"Zaidu Sanusi":71,"Alexander Sørloth":78,"Andreas Schjelderup":74,"Erik Thorstvedt":74,"Erling Haaland":90,"Fredrik Aursnes":77,"John Arne Riise":80,"John Carew":76,"Martin Ødegaard":86,"Ole Gunnar Solskjær":80,"Sverre Nypan":66,"Bruno Valdez":72,"Celso Ayala":76,"Lucas Barrios":77,"Pablo Aguilar":72,"Richard Sánchez":72,"Salvador Cabañas":79,"Óscar Cardozo":79,"Cliff Jones":81,"Gareth Bale":89,"Gary Speed":78,"Ian Rush":89,"Jack Kelsey":77,"John Charles":90,"John Hartson":75,"Kevin Ratcliffe":79,"Mark Hughes":80,"Mike England":78,"Neville Southall":86,"Pat Van den Hauwe":73,"Roy Vernon":76,"Ryan Giggs":89,"André Ooijer":74,"Arie Haan":83,"Arjen Robben":90,"Arthur Numan":76,"Barry Hulshoff":79,"Bart Meijers":64,"Bart Verbruggen":77,"Berry van Aerle":76,"Brian Brobbey":72,"Bruno Martins Indi":74,"Clarence Seedorf":89,"Cody Gakpo":82,"Coen Moulijn":83,"Crysencio Summerville":74,"Daley Blind":80,"Danny Blind":80,"Dennis Bergkamp":91,"Denzel Dumfries":82,"Dirk Kuyt":80,"Donyell Malen":77,"Ed de Goey":75,"Eddy Pieters Graafland":75,"Edgar Davids":87,"Edwin van der Sar":90,"Fernando Ricksen":72,"Frank Rijkaard":91,"Frank de Boer":85,"Frenkie de Jong":86,"Georginio Wijnaldum":80,"Gerald Vanenburg":78,"Gerrie Mühren":80,"Giovanni van Bronckhorst":80,"Hans van Breukelen":82,"Heinz Stuy":73,"Henk Timmer":68,"Ian Maatsen":74,"Ibrahim Afellay":75,"Jaap Stam":87,"Jan van Beveren":81,"Jasper Cillessen":76,"Jens Toornstra":71,"Jerdy Schouten":74,"Jeremie Frimpong":81,"Jeroen Zoet":71,"Jimmy Floyd Hasselbaink":82,"Johan Cruyff":97,"Johan Neeskens":88,"John de Wolf":74,"Johnny Rep":82,"Joop Hiele":70,"Jordy Clasie":73,"Jorrel Hato":77,"Joshua Zirkzee":74,"Jurriën Timber":82,"Justin Bijlow":75,"Justin Kluivert":78,"Kees Smit":74,"Kenneth Vermeer":74,"Lutsharel Geertruida":75,"Luuk de Jong":80,"Maarten Stekelenburg":80,"Marc Overmars":86,"Marco van Basten":95,"Mark Flekken":74,"Mark van Bommel":85,"Marten de Roon":77,"Mats Wieffer":74,"Matthijs de Ligt":84,"Memphis Depay":83,"Michael Reiziger":81,"Micky van de Ven":82,"Nathan Aké":80,"Noa Lang":77,"Patrick Kluivert":86,"Paul Bosvelt":77,"Peter Houtman":76,"Phillip Cocu":85,"Pierre van Hooijdonk":81,"Piet Keizer":89,"Piet Schrijvers":79,"Quinten Timber":76,"Rafael van der Vaart":85,"Remko Pasveer":74,"René van de Kerkhof":83,"Rinus Israël":85,"Rob Rensenbrink":89,"Rob Witschge":77,"Robin Roefs":73,"Robin van Persie":88,"Ron Vlaar":76,"Ronald Koeman":89,"Ronald Waterreus":76,"Ronald de Boer":82,"Roy Makaay":84,"Ruud Gullit":92,"Ruud Krol":89,"Ruud van Nistelrooy":89,"Ryan Gravenberch":84,"Sjaak Swart":83,"Stan Valckx":77,"Stanley Menzo":78,"Stefan de Vrij":82,"Steven Berghuis":78,"Steven Bergwijn":76,"Sven Botman":79,"Teun Koopmeiners":81,"Theo Laseroms":77,"Tijjani Reijnders":84,"Tim Krul":76,"Ulrich van Gobbel":75,"Virgil van Dijk":89,"Wesley Sneijder":88,"Wilfred Bouma":77,"Willy van de Kerkhof":82,"Willy van der Kuijlen":84,"Wim Jansen":84,"Wim Jonk":79,"Wim Kieft":79,"Wim Rijsbergen":79,"Wim Suurbier":83,"Wim van Hanegem":88,"Wout Weghorst":74,"Xavi Simons":84,"Adam Matysek":72,"Artur Boruc":78,"Grzegorz Krychowiak":79,"Jacek Bąk":76,"Jakub Błaszczykowski":81,"Jan Bednarek":74,"Jerzy Dudek":82,"Józef Młynarczyk":80,"Kamil Glik":79,"Ludovic Obraniak":74,"Piotr Zieliński":83,"Przemysław Frankowski":75,"Robert Lewandowski":92,"Sebastian Szymański":77,"Wojciech Szczęsny":84,"Łukasz Piszczek":83,"Adrien Silva":78,"Anthony Lopes":81,"António Silva":79,"António Simões":84,"António Veloso":78,"Bernardo Silva":88,"Beto":76,"Bruma":75,"Bruno Alves":81,"Bruno Fernandes":88,"Costa Pereira":84,"Costinha":80,"Cristiano Ronaldo":98,"Cristiano Ronaldo (2017)":98,"Daniel Carriço":74,"Deco":88,"Diogo Costa":85,"Diogo Dalot":79,"Eusébio":95,"Fernando Chalana":84,"Fernando Couto":82,"Fernando Gomes":87,"Fernando Peyroteo":86,"Francisco Conceição":79,"Francisco Moura":74,"Francisco Trincão":80,"Fábio Coentrão":81,"Fábio Vieira":74,"Geovany Quenda":75,"Germano":84,"Gonçalo Guedes":76,"Gonçalo Inácio":81,"Gonçalo Ramos":80,"Hilário":80,"Humberto Coelho":85,"Jaime Magalhães":77,"Jesus Correia":80,"Jorge Costa":83,"José Augusto":84,"José Fonte":79,"José Henrique":77,"José Sá":77,"José Torres":83,"José Travassos":82,"José Águas":85,"Jota Silva":72,"João Cancelo":85,"João Félix":80,"João Moutinho":83,"João Mário":78,"João Neves":86,"João Palhinha":81,"João Pinto":83,"Lima Pereira":77,"Luís Figo":92,"Maniche":82,"Manuel Bento":83,"Manuel Fernandes":82,"Matheus Nunes":79,"Mário Coluna":89,"Nani":82,"Nené":83,"Nuno Espírito Santo":70,"Nuno Gomes":81,"Nuno Mendes":86,"Nuno Tavares":74,"Nuno Valente":78,"Nélson Semedo":77,"Oceano":77,"Otávio":80,"Pauleta":84,"Paulo Ferreira":80,"Paulo Futre":86,"Paulo Sousa":83,"Pedro Barbosa":79,"Pedro Gonçalves":81,"Pedro Neto":81,"Pepe":87,"Rafael Leão":85,"Raul Meireles":80,"Renato Sanches":79,"Renato Veiga":75,"Ricardo":80,"Ricardo Carvalho":87,"Ricardo Horta":77,"Ricardo Quaresma":82,"Ricardo Velho":70,"Rodrigo Mora":77,"Rui Barros":79,"Rui Costa":89,"Rui Jordão":83,"Rui Patrício":83,"Rui Silva":76,"Rúben Dias":87,"Rúben Neves":82,"Samu Costa":74,"Samuel Soares":67,"Shéu":79,"Silvino":77,"Simão":83,"Sérgio Conceição":81,"Tiago":79,"Tomás Araújo":76,"Tonel":74,"Toni":79,"Vitinha":87,"Vítor Baía":87,"Vítor Damas":84,"William Carvalho":80,"Álvaro Magalhães":77,"Claudio Pizarro":83,"Jefferson Farfán":80,"Nolberto Solano":79,"Arsène Zola":70,"Ben Malango":72,"Gaël Kakuta":76,"Gheorghe Hagi":91,"Gheorghe Popescu":83,"Ştefan Radu":78,"Aleksandr Golovin":79,"Jan Koller":82,"Jaroslav Plašil":76,"Tomáš Rosický":84,"Tomáš Vaclík":76,"Vladimir Šmicer":81,"Aleksandar Kolarov":81,"Branislav Ivanović":84,"Dejan Petković":78,"Dejan Stanković":84,"Dušan Tadić":82,"Dušan Vlahović":81,"Ivica Dragutinović":76,"Mateja Kežman":80,"Mile Svilar":80,"Milinko Pantić":79,"Miroslav Đukić":79,"Nemanja Matić":82,"Nemanja Vidić":88,"Neven Subotić":79,"Predrag Rajković":75,"Sergej Milinković-Savić":84,"Siniša Mihajlović":84,"Velibor Vasović":82,"David Hancko":79,"Lubo Moravčík":79,"Marek Hamšík":85,"Martin Škrtel":80,"Stanislav Lobotka":81,"Jan Oblak":89,"Samir Handanović":85,"Denis Zakaria":77,"Diego Benaglio":78,"Fabian Schär":77,"Granit Xhaka":83,"Gregor Kobel":83,"Johann Vogel":77,"Patrick Müller":77,"Philipp Köhn":72,"Roman Bürki":77,"Stéphane Chapuisat":83,"Yann Sommer":83,"Alexander Isak":84,"Andreas Isaksson":76,"Fredrik Ljungberg":82,"Gunnar Andersson":82,"Gunnar Nordahl":90,"Hasse Jeppson":80,"Henrik Larsson":87,"Johan Mjällby":76,"Kim Källström":77,"Lucas Bergvall":74,"Nils Liedholm":89,"Ove Kindvall":81,"Ralf Edström":78,"Roger Magnusson":79,"Viktor Gyökeres":84,"Zlatan Ibrahimović":91,"Abdou Diallo":74,"Abdoulaye Diallo":71,"Abdoulaye Seck":70,"Alfred Gomis":72,"Aliou Cissé":77,"Assane Diao":75,"Bamba Dieng":72,"Boulaye Dia":76,"Bouly Sambou":70,"Cheikhou Kouyaté":77,"Chérif Ndiaye":72,"Demba Ba":80,"El Hadji Diouf":81,"El Hadji Malick Diouf":76,"Ferdinand Coly":75,"Formose Mendy":70,"Habib Beye":77,"Habib Diallo":75,"Habib Diarra":76,"Henri Camara":77,"Ibrahim Mbaye":70,"Idrissa Gana Gueye":82,"Idrissa Gueye":82,"Iliman Ndiaye":78,"Ismail Jakobs":74,"Ismaïla Sarr":80,"Jules Bocandé":81,"Kalidou Koulibaly":86,"Kara Mbodj":74,"Khadim N'Diaye":70,"Khalilou Fadiga":81,"Krépin Diatta":75,"Lamine Camara":77,"Lamine Diatta":77,"Mamadou Niang":80,"Mamadou Sarr":72,"Mory Diaw":70,"Moussa Niakhaté":77,"Moussa Sow":79,"Moustapha Bayal Sall":73,"Moustapha Name":68,"Nampalys Mendy":74,"Nicolas Jackson":78,"Omar Daf":74,"Papa Bouba Diop":79,"Pape Gueye":77,"Pape Matar Sarr":79,"Papiss Cissé":78,"Pathé Ciss":72,"Paul Bassène":70,"Rassoul Ndiaye":69,"Roger Mendy":78,"Sadio Mané":89,"Sadio Mané (2019)":89,"Salif Diao":74,"Seny Dieng":72,"Souleymane Diawara":77,"Tony Sylva":76,"Yehvann Diouf":72,"Youssouf Sabaly":74,"Édouard Mendy":83,"Japhet N'Doram":79,"Josef Masopust":89,"Lukas Horníček":70,"Patrik Schick":81,"Pavel Nedvěd":91,"Pavel Srníček":77,"Petr Čech":90,"Tomáš Ujfaluši":78,"Emmanuel Adebayor":81,"Dwight Yorke":81,"Shaka Hislop":74,"Adel Sellimi":74,"Alaeddine Yahia":72,"Ali Abdi":76,"Ali Boumnijel":74,"Ali Maâloul":76,"Ali Zitouni":74,"Amenallah Memmiche":74,"Amine Chermiti":72,"Anice Badri":73,"Anis Ben Slimane":72,"Attouga":79,"Aymen Abdennour":76,"Aymen Dahmen":70,"Aymen Mathlouthi":72,"Aïssa Laïdouni":74,"Bechir Ben Saïd":72,"Chamseddine Dhaouadi":72,"Chokri El Ouaer":80,"Dylan Bronn":72,"Elias Achouri":73,"Elias Saad":70,"Ellyes Skhiri":78,"Fakhreddine Ben Youssef":71,"Faouzi Rouissi":73,"Ferjani Sassi":75,"Firas Ben Larbi":70,"Firas Chaouat":66,"Francileudo dos Santos":75,"Ghailene Chaalali":74,"Ghaylène Chaalali":74,"Hamadi Agrebi":84,"Hamdi Kasraoui":70,"Hamdi Nagguez":69,"Hamza Rafia":71,"Hannibal Mejbri":72,"Hatem Trabelsi":79,"Haythem Jouini":69,"Hazem Mastouri":66,"Iheb Mbarki":68,"Ismaël Gharbi":70,"Issam Jemâa":76,"Jawhar Mnari":73,"Kaies Ghodhbane":73,"Karim Haggui":75,"Khaled Badra":75,"Khaled Ben Yahia":76,"Khaled Korbi":70,"Khalil Chemmam":71,"Mehdi Nafti":72,"Mejdi Traoui":70,"Moez Ben Cherifia":72,"Mohamed Ali Ben Romdhane":75,"Mohamed Ali Yacoubi":68,"Mohamed Amine Ben Hmida":68,"Mohamed Dräger":69,"Mohamed Haj Mahmoud":68,"Mokhtar Naili":72,"Montassar Talbi":74,"Mortadha Ben Ouanes":68,"Moïne Chaâbani":70,"Nabil Maâloul":74,"Naïm Sliti":74,"Noureddine Farhati":62,"Omar Rekik":66,"Oussama Darragi":74,"Radhi Jaïdi":76,"Rami Jridi":68,"Saad Bguir":69,"Sabri Ben Hassen":66,"Sameh Derbali":67,"Sami Trabelsi":72,"Sayfallah Ltaief":68,"Seifeddine Jaziri":72,"Taha Yassine Khenissi":71,"Tarak Dhiab":86,"Tarek Dhiab":86,"Temime Lahzami":77,"Wahbi Khazri":77,"Walid Hichri":68,"Yan Valery":72,"Yassine Meriah":72,"Youssef Msakni":80,"Ziad Jaziri":75,"Zoubeir Baya":77,"Abdülkerim Bardakcı":77,"Arda Güler":84,"Arda Turan":84,"Arif Erdem":79,"Aykut Kocaman":80,"Berke Özer":70,"Burak Yılmaz":81,"Bülent Korkmaz":82,"Can Bartu":82,"Can Uzun":76,"Caner Erkin":74,"Cemil Turan":78,"Cüneyt Tanman":75,"Emre Belözoğlu":83,"Engin İpekoğlu":72,"Fatih Terim":78,"Gökhan Gönül":76,"Hakan Çalhanoğlu":86,"Hakan Ünsal":77,"Hakan Şükür":86,"Hamit Altıntop":80,"Hasan Şaş":81,"Hayrettin Demirbaş":74,"Kenan Yildiz":85,"Kenan Yıldız":85,"Lefter Küçükandonyadis":86,"Mehmet Aurélio":76,"Mehmet Topal":76,"Merih Demiral":80,"Metin Oktay":85,"Müjdat Yetkiner":73,"Nuri Şahin":82,"Ogün Temizkanoğlu":76,"Okan Buruk":78,"Orkun Kökçü":80,"Oğuz Çetin":77,"Rüştü Reçber":85,"Rıdvan Dilmen":78,"Sabri Sarıoğlu":76,"Selçuk İnan":77,"Selçuk Şahin":72,"Semih Kaya":73,"Semih Şentürk":76,"Servet Çetin":75,"Tanju Çolak":80,"Tugay Kerimoğlu":81,"Tuncay Şanlı":80,"Turgay Şeren":80,"Volkan Demirel":79,"Yıldıray Baştürk":79,"Zeki Çelik":76,"Önder Turacı":74,"Ümit Davala":78,"İrfan Can Eğribayat":72,"Lev Yachine":94,"Anatoliy Trubin":80,"Andriy Shevchenko":92,"Georgiy Sudakov":79,"Illia Zabarnyi":80,"Alcides Ghiggia":87,"Darwin Núñez":81,"Darío Pereyra":82,"Diego Forlán":87,"Diego Godín":87,"Diego Lugano":80,"Diego Pérez":75,"Edinson Cavani":88,"Egidio Arévalo Ríos":75,"Enzo Francescoli":89,"Federico Valverde":87,"Fernando Morena":83,"Fernando Muslera":82,"Fernando Álvez":74,"Giorgian de Arrascaeta":82,"Gustavo Poyet":78,"Hugo de León":82,"Héctor Scarone":87,"José Leandro Andrade":89,"José María Giménez":82,"José Nasazzi":88,"Juan Alberto Schiaffino":91,"Ladislao Mazurkiewicz":87,"Lucas Torreira":79,"Martín Cáceres":77,"Maxi Pereira":78,"Maximiliano Araújo":76,"Obdulio Varela":89,"Paolo Montero":83,"Pedro Cea":84,"Pedro Petrone":84,"Pedro Rocha":85,"Rodolfo Rodríguez":81,"Rodrigo Bentancur":80,"Rodrigo Zalazar":75,"Ronald Araújo":83,"Roque Máspoli":84,"Rubén Sosa":80,"Sebastián Coates":79,"Sergio Rochet":74,"Víctor Rodríguez Andrade":82,"Walter Gargano":76,"Álvaro Recoba":82,"Ivan Ćurković":82,"Josip Skoblar":84,"Tomislav Ivković":77,"Vahid Halilhodžić":82,"Zoran Simović":77,"Kalusha Bwalya":81,"Kenneth Malitoli":71,"Bruce Grobbelaar":82,"Alan Gilzean":80,"Alan Hansen":86,"Alex Young":78,"Allan McGregor":77,"Ally McCoist":83,"Andrew Robertson":85,"Andy Goram":81,"Andy Gray":79,"Barry Ferguson":77,"Bertie Auld":79,"Bill Brown":75,"Billy Liddell":83,"Billy McNeill":85,"Bob McPhail":79,"Bob Wilson":74,"Bobby Brown":72,"Bobby Lennox":80,"Bobby Mitchell":76,"Bobby Moncur":75,"Bobby Murdoch":82,"Brian McClair":79,"Callum McGregor":78,"Charlie Cooke":78,"Charlie Nicholas":77,"Colin Stein":74,"Craig Gordon":76,"Danny McGrain":83,"Darren Fletcher":77,"Dave Mackay":86,"David Weir":75,"Davie Cooper":78,"Denis Law":90,"Derek Johnstone":76,"Duncan Ferguson":76,"Eric Caldow":76,"Frank Brennan":72,"Frank McLintock":79,"George Young":80,"Graeme Sharp":77,"Graeme Souness":87,"Hughie Gallacher":84,"Ian Durrant":74,"Ian Ferguson":73,"Jim Baxter":83,"Jim Craig":75,"Jim Forrest":74,"Jimmy Johnstone":86,"Jimmy McGrory":83,"Jimmy Scoular":74,"John Clark":75,"John Greig":82,"John Thomson":75,"John White":79,"Kenny Dalglish":90,"Kieran Tierney":78,"Kris Boyd":72,"Martin Buchan":78,"Paul Lambert":78,"Paul McStay":81,"Peter McCloy":72,"Ralph Brand":74,"Richard Gough":80,"Ron Yeats":78,"Ronnie Simpson":79,"Roy Aitken":77,"Sandy Jardine":79,"Scott Brown":78,"Scott McTominay":84,"Stevie Chalmers":78,"Stuart McCall":75,"Tom Boyd":74,"Tommy Burns":76,"Tommy Gemmell":81,"Tommy Lawrence":74,"Willie Johnston":76,"Willie Woodburn":77,"Abdallah El Said":76,"Abdel Halim Ali":74,"Abdel-Wahed El-Sayed":76,"Abdelwahed El-Sayed":76,"Adel El-Maamour":73,"Afsha":76,"Ahmed Abou El Fotouh":69,"Ahmed Belal":72,"Ahmed El Shenawy":69,"Ahmed Elmohamady":75,"Ahmed Fathy":77,"Ahmed Fatouh":72,"Ahmed Hassan":82,"Ahmed Hassan Koka":71,"Ahmed Hegazi":77,"Ahmed Shobair":78,"Akram Tawfik":70,"Ali Gabr":72,"Ali Khalil":72,"Amr El Solia":73,"Amr Zaki":78,"Ashraf Kasem":74,"Ayman Abdelaziz":74,"Besheer El-Tabei":70,"Ekramy El-Shahat":76,"Emad Moteab":78,"Emam Ashour":77,"Essam El Hadary":84,"Essam El-Hadary":84,"Farouk Gaafar":77,"Gamal Abdel-Hamid":75,"Hamdi Fathi":73,"Hany Ramzy":79,"Hassan Shehata":80,"Hazem Emam":78,"Hesham Yakan":73,"Hosny Abd Rabo":77,"Hossam Abdelmaguid":72,"Hossam Ashour":74,"Hossam Ghaly":75,"Hossam Hassan":82,"Hussein El Shahat":74,"Hussein Hegazi":78,"Ibrahim Adel":72,"Ibrahim Hassan":77,"Ismail Youssef":75,"Magdi Abdelghani":76,"Mahmoud Alaa":71,"Mahmoud El Khatib":84,"Mahmoud Fathalla":74,"Mahmoud Fathallah":74,"Mahmoud Genesh":71,"Mahmoud Kahraba":72,"Mahmoud Trezeguet":77,"Marwan Attia":72,"Medhat Abdel-Hady":73,"Mido":77,"Moamen Zakaria":73,"Mohamed Abdel Shafy":74,"Mohamed Abdel Wahab":75,"Mohamed Abdelmonem":77,"Mohamed Abdelwahab":75,"Mohamed Abou Gabal":74,"Mohamed Aboutrika":85,"Mohamed Awad":70,"Mohamed Barakat":78,"Mohamed El Shenawy":79,"Mohamed Elneny":77,"Mohamed Hany":74,"Mohamed Magdy Afsha":76,"Mohamed Salah":90,"Mohamed Salah (2018)":90,"Mohamed Shawky":76,"Mohamed Shehata":68,"Mohamed Sherif":73,"Mohamed Sobhi":70,"Mohamed Zidan":77,"Mohanad Lasheen":70,"Mokhtar El Tetsh":80,"Mostafa Fathi":71,"Mostafa Mohamed":76,"Mostafa Shobeir":72,"Nabil Emad Dunga":68,"Nader El-Sayed":76,"Omar Gaber":72,"Omar Kamal":69,"Omar Marmoush":84,"Osama Faisal":69,"Rabie Yassin":74,"Ramadan Sobhi":73,"Ramy Rabia":75,"Saleh Selim":81,"Sayed Moawad":74,"Shady Mohamed":75,"Sherif Ekramy":73,"Shikabala":78,"Taher Abouzeid":78,"Tamer Abdel Hamid":73,"Tarek El-Sayed":73,"Tarek Hamed":74,"Thabet El-Batal":79,"Trezeguet":77,"Trézéguet":77,"Wael Gomaa":79,"Yasser Ibrahim":73,"Zizo":77,"Christian Benítez":78,"Moisés Caicedo":86,"Piero Hincapié":81,"Robert Arboleda":75,"Willian Pacho":83,"Cameron Carter-Vickers":75,"Christian Pulisic":83,"Diego Kochen":62,"Folarin Balogun":75,"Malik Tillman":77,"Tim Howard":80};

/* ---- clubs_en_nl.js ---- */
// Packs « légendes de club » : Angleterre, Pays-Bas, Écosse
window.FOOT_PACKS.push(
{id:"manutd",name:"Légendes de Manchester United",cat:"clubs",sub:"Angleterre",club:"Manchester United",raw:`
Peter Schmeichel/G/Danemark/92
Edwin van der Sar/G/Pays-Bas/90
David de Gea/G/Espagne/86
Alex Stepney/G/Angleterre/77
Harry Gregg/G/Irlande du Nord/78
Fabien Barthez/G/France/86
Rio Ferdinand/DEF/Angleterre/88
Nemanja Vidić/DEF/Serbie/88
Jaap Stam/DEF/Pays-Bas/87
Gary Neville/DEF/Angleterre/83
Denis Irwin/DEF/Irlande/84
Patrice Evra/DEF/France/85
Steve Bruce/DEF/Angleterre/80
Gary Pallister/DEF/Angleterre/81
Bill Foulkes/DEF/Angleterre/79
Roger Byrne/DEF/Angleterre/81
Martin Buchan/DEF/Écosse/78
Bobby Charlton/MIL/Angleterre/93
Ryan Giggs/MIL/Pays de Galles/89
Paul Scholes/MIL/Angleterre/89
Roy Keane/MIL/Irlande/89
Duncan Edwards/MIL/Angleterre/85
Bryan Robson/MIL/Angleterre/86
David Beckham/MIL/Angleterre/89
Michael Carrick/MIL/Angleterre/84
Bruno Fernandes/MIL/Portugal/88
Paul Ince/MIL/Angleterre/82
Nobby Stiles/MIL/Angleterre/80
Ji-sung Park/MIL/Corée du Sud/80
Darren Fletcher/MIL/Écosse/77
Cristiano Ronaldo/ATT/Portugal/98
George Best/ATT/Irlande du Nord/94
Denis Law/ATT/Écosse/90
Eric Cantona/ATT/France/89
Wayne Rooney/ATT/Angleterre/91
Ruud van Nistelrooy/ATT/Pays-Bas/89
Andy Cole/ATT/Angleterre/84
Dwight Yorke/ATT/Trinité-et-Tobago/81
Mark Hughes/ATT/Pays de Galles/80
Ole Gunnar Solskjær/ATT/Norvège/80`},
{id:"liverpool",name:"Légendes de Liverpool",cat:"clubs",sub:"Angleterre",club:"Liverpool",raw:`
Alisson/G/Brésil/89
Ray Clemence/G/Angleterre/86
Bruce Grobbelaar/G/Zimbabwe/82
Pepe Reina/G/Espagne/82
Elisha Scott/G/Irlande du Nord/78
Jerzy Dudek/G/Pologne/82
Tommy Lawrence/G/Écosse/74
Virgil van Dijk/DEF/Pays-Bas/89
Alan Hansen/DEF/Écosse/86
Emlyn Hughes/DEF/Angleterre/82
Jamie Carragher/DEF/Angleterre/82
Trent Alexander-Arnold/DEF/Angleterre/86
Sami Hyypiä/DEF/Finlande/84
Andrew Robertson/DEF/Écosse/85
Phil Neal/DEF/Angleterre/83
Phil Thompson/DEF/Angleterre/81
Mark Lawrenson/DEF/Irlande/81
Ron Yeats/DEF/Écosse/78
Steven Gerrard/MIL/Angleterre/91
Graeme Souness/MIL/Écosse/87
John Barnes/MIL/Angleterre/87
Xabi Alonso/MIL/Espagne/88
Ian Callaghan/MIL/Angleterre/78
Ray Kennedy/MIL/Angleterre/81
Steve McManaman/MIL/Angleterre/82
Jordan Henderson/MIL/Angleterre/82
Terry McDermott/MIL/Angleterre/80
Jan Mølby/MIL/Danemark/80
Javier Mascherano/MIL/Argentine/86
Kenny Dalglish/ATT/Écosse/90
Mohamed Salah/ATT/Égypte/90
Ian Rush/ATT/Pays de Galles/89
Kevin Keegan/ATT/Angleterre/89
Luis Suárez/ATT/Uruguay/91
Robbie Fowler/ATT/Angleterre/84
Sadio Mané/ATT/Sénégal/89
Fernando Torres/ATT/Espagne/87
Michael Owen/ATT/Angleterre/88
Roger Hunt/ATT/Angleterre/82
Billy Liddell/ATT/Écosse/83`},
{id:"arsenal",name:"Légendes d'Arsenal",cat:"clubs",sub:"Angleterre",club:"Arsenal",raw:`
David Seaman/G/Angleterre/85
Pat Jennings/G/Irlande du Nord/85
Jens Lehmann/G/Allemagne/84
David Raya/G/Espagne/83
Bob Wilson/G/Écosse/74
Jack Kelsey/G/Pays de Galles/77
John Lukic/G/Angleterre/74
Tony Adams/DEF/Angleterre/86
Sol Campbell/DEF/Angleterre/85
Ashley Cole/DEF/Angleterre/86
William Saliba/DEF/France/86
Lee Dixon/DEF/Angleterre/81
Martin Keown/DEF/Angleterre/81
Nigel Winterburn/DEF/Angleterre/79
Kenny Sansom/DEF/Angleterre/82
Frank McLintock/DEF/Écosse/79
Gabriel/DEF/Brésil/85
Steve Bould/DEF/Angleterre/78
Kolo Touré/DEF/Côte d'Ivoire/84
Patrick Vieira/MIL/France/90
Robert Pirès/MIL/France/86
Liam Brady/MIL/Irlande/85
Cesc Fàbregas/MIL/Espagne/87
Martin Ødegaard/MIL/Norvège/86
Declan Rice/MIL/Angleterre/86
Emmanuel Petit/MIL/France/84
Fredrik Ljungberg/MIL/Suède/82
Marc Overmars/MIL/Pays-Bas/86
Gilberto Silva/MIL/Brésil/82
Santi Cazorla/MIL/Espagne/84
David Rocastle/MIL/Angleterre/76
Thierry Henry/ATT/France/93
Dennis Bergkamp/ATT/Pays-Bas/91
Ian Wright/ATT/Angleterre/84
Robin van Persie/ATT/Pays-Bas/88
Bukayo Saka/ATT/Angleterre/86
Cliff Bastin/ATT/Angleterre/81
Pierre-Emerick Aubameyang/ATT/Gabon/86
Charlie George/ATT/Angleterre/76
Ted Drake/ATT/Angleterre/80`},
{id:"chelsea",name:"Légendes de Chelsea",cat:"clubs",sub:"Angleterre",club:"Chelsea",raw:`
Petr Čech/G/Tchéquie/90
Peter Bonetti/G/Angleterre/81
Thibaut Courtois/G/Belgique/90
Carlo Cudicini/G/Italie/77
Édouard Mendy/G/Sénégal/83
Ed de Goey/G/Pays-Bas/75
John Terry/DEF/Angleterre/89
Marcel Desailly/DEF/France/89
Ashley Cole/DEF/Angleterre/86
Ricardo Carvalho/DEF/Portugal/87
César Azpilicueta/DEF/Espagne/84
Thiago Silva/DEF/Brésil/89
Branislav Ivanović/DEF/Serbie/84
Ron Harris/DEF/Angleterre/76
Frank Leboeuf/DEF/France/80
David Luiz/DEF/Brésil/83
Graeme Le Saux/DEF/Angleterre/77
Frank Lampard/MIL/Angleterre/89
Claude Makélélé/MIL/France/87
N'Golo Kanté/MIL/France/88
Michael Essien/MIL/Ghana/87
Juan Mata/MIL/Espagne/82
Dennis Wise/MIL/Angleterre/78
Roberto Di Matteo/MIL/Italie/79
Ray Wilkins/MIL/Angleterre/81
Joe Cole/MIL/Angleterre/80
Gustavo Poyet/MIL/Uruguay/78
Charlie Cooke/MIL/Écosse/78
Didier Drogba/ATT/Côte d'Ivoire/89
Eden Hazard/ATT/Belgique/90
Gianfranco Zola/ATT/Italie/87
Peter Osgood/ATT/Angleterre/81
Jimmy Greaves/ATT/Angleterre/87
Jimmy Floyd Hasselbaink/ATT/Pays-Bas/82
Arjen Robben/ATT/Pays-Bas/90
Cole Palmer/ATT/Angleterre/85
Diego Costa/ATT/Espagne/84
Bobby Tambling/ATT/Angleterre/76
Gianluca Vialli/ATT/Italie/86
Kerry Dixon/ATT/Angleterre/78`},
{id:"mancity",name:"Légendes de Manchester City",cat:"clubs",sub:"Angleterre",club:"Manchester City",raw:`
Bert Trautmann/G/Allemagne/86
Ederson/G/Brésil/86
Joe Hart/G/Angleterre/82
Frank Swift/G/Angleterre/80
Joe Corrigan/G/Angleterre/75
Shay Given/G/Irlande/82
Tony Coton/G/Angleterre/72
Vincent Kompany/DEF/Belgique/87
Rúben Dias/DEF/Portugal/87
Kyle Walker/DEF/Angleterre/84
Pablo Zabaleta/DEF/Argentine/81
John Stones/DEF/Angleterre/84
Aymeric Laporte/DEF/Espagne/83
Joško Gvardiol/DEF/Croatie/85
Aleksandar Kolarov/DEF/Serbie/81
Tony Book/DEF/Angleterre/76
Richard Dunne/DEF/Irlande/77
Nicolás Otamendi/DEF/Argentine/82
Mike Doyle/DEF/Angleterre/76
Kevin De Bruyne/MIL/Belgique/90
David Silva/MIL/Espagne/88
Yaya Touré/MIL/Côte d'Ivoire/90
Rodri/MIL/Espagne/90
Colin Bell/MIL/Angleterre/82
Bernardo Silva/MIL/Portugal/88
Phil Foden/MIL/Angleterre/87
İlkay Gündoğan/MIL/Allemagne/87
Fernandinho/MIL/Brésil/84
Riyad Mahrez/MIL/Algérie/86
Alan Oakes/MIL/Angleterre/74
Georgi Kinkladze/MIL/Géorgie/77
Sergio Agüero/ATT/Argentine/89
Erling Haaland/ATT/Norvège/90
Francis Lee/ATT/Angleterre/80
Raheem Sterling/ATT/Angleterre/85
Carlos Tevez/ATT/Argentine/86
Mike Summerbee/ATT/Angleterre/78
Edin Džeko/ATT/Bosnie-Herzégovine/84
Neil Young/ATT/Angleterre/76
Dennis Tueart/ATT/Angleterre/75`},
{id:"tottenham",name:"Légendes de Tottenham",cat:"clubs",sub:"Angleterre",club:"Tottenham",raw:`
Pat Jennings/G/Irlande du Nord/85
Hugo Lloris/G/France/87
Ray Clemence/G/Angleterre/86
Bill Brown/G/Écosse/75
Paul Robinson/G/Angleterre/76
Erik Thorstvedt/G/Norvège/74
Ledley King/DEF/Angleterre/82
Steve Perryman/DEF/Angleterre/78
Jan Vertonghen/DEF/Belgique/83
Toby Alderweireld/DEF/Belgique/83
Sol Campbell/DEF/Angleterre/85
Gary Mabbutt/DEF/Angleterre/76
Mike England/DEF/Pays de Galles/78
Cristian Romero/DEF/Argentine/85
Kyle Walker/DEF/Angleterre/84
Cyril Knowles/DEF/Angleterre/74
Glenn Hoddle/MIL/Angleterre/85
Danny Blanchflower/MIL/Irlande du Nord/85
Dave Mackay/MIL/Écosse/86
Paul Gascoigne/MIL/Angleterre/87
Luka Modrić/MIL/Croatie/92
Osvaldo Ardiles/MIL/Argentine/83
Chris Waddle/MIL/Angleterre/82
Christian Eriksen/MIL/Danemark/86
John White/MIL/Écosse/79
David Ginola/MIL/France/83
Dele Alli/MIL/Angleterre/80
Ricky Villa/MIL/Argentine/77
Harry Kane/ATT/Angleterre/90
Jimmy Greaves/ATT/Angleterre/87
Son Heung-min/ATT/Corée du Sud/88
Gareth Bale/ATT/Pays de Galles/89
Gary Lineker/ATT/Angleterre/87
Jürgen Klinsmann/ATT/Allemagne/88
Cliff Jones/ATT/Pays de Galles/81
Bobby Smith/ATT/Angleterre/78
Martin Chivers/ATT/Angleterre/80
Teddy Sheringham/ATT/Angleterre/83
Alan Gilzean/ATT/Écosse/80
Robbie Keane/ATT/Irlande/81`},
{id:"newcastle",name:"Légendes de Newcastle",cat:"clubs",sub:"Angleterre",club:"Newcastle",raw:`
Shay Given/G/Irlande/82
Pavel Srníček/G/Tchéquie/77
Nick Pope/G/Angleterre/79
Tim Krul/G/Pays-Bas/76
Willie McFaul/G/Irlande du Nord/70
Steve Harper/G/Angleterre/70
Shaka Hislop/G/Trinité-et-Tobago/74
Bobby Moncur/DEF/Écosse/75
Kieran Trippier/DEF/Angleterre/81
Fabricio Coloccini/DEF/Argentine/79
Philippe Albert/DEF/Belgique/77
Sven Botman/DEF/Pays-Bas/79
Fabian Schär/DEF/Suisse/77
Jonathan Woodgate/DEF/Angleterre/78
Frank Brennan/DEF/Écosse/72
Steve Howey/DEF/Angleterre/73
John Beresford/DEF/Angleterre/74
Frank Clark/DEF/Angleterre/72
David Ginola/MIL/France/83
Bruno Guimarães/MIL/Brésil/83
Rob Lee/MIL/Angleterre/78
Paul Gascoigne/MIL/Angleterre/87
Gary Speed/MIL/Pays de Galles/78
Nolberto Solano/MIL/Pérou/79
Yohan Cabaye/MIL/France/79
Hatem Ben Arfa/MIL/France/79
Jimmy Scoular/MIL/Écosse/74
Kieron Dyer/MIL/Angleterre/77
Keith Gillespie/MIL/Irlande du Nord/73
Alan Shearer/ATT/Angleterre/90
Jackie Milburn/ATT/Angleterre/82
Malcolm Macdonald/ATT/Angleterre/80
Hughie Gallacher/ATT/Écosse/84
Peter Beardsley/ATT/Angleterre/84
Kevin Keegan/ATT/Angleterre/89
Alexander Isak/ATT/Suède/84
Les Ferdinand/ATT/Angleterre/80
Andy Cole/ATT/Angleterre/84
Faustino Asprilla/ATT/Colombie/82
Bobby Mitchell/ATT/Écosse/76`},
{id:"everton",name:"Légendes d'Everton",cat:"clubs",sub:"Angleterre",club:"Everton",raw:`
Neville Southall/G/Pays de Galles/86
Jordan Pickford/G/Angleterre/82
Ted Sagar/G/Angleterre/76
Tim Howard/G/États-Unis/80
Gordon West/G/Angleterre/74
Nigel Martyn/G/Angleterre/78
Kevin Ratcliffe/DEF/Pays de Galles/79
Brian Labone/DEF/Angleterre/77
Leighton Baines/DEF/Angleterre/80
Dave Watson/DEF/Angleterre/76
Ray Wilson/DEF/Angleterre/80
Phil Jagielka/DEF/Angleterre/77
Séamus Coleman/DEF/Irlande/79
Gary Stevens/DEF/Angleterre/76
Joleon Lescott/DEF/Angleterre/78
Derek Mountfield/DEF/Angleterre/72
Pat Van den Hauwe/DEF/Pays de Galles/73
Alan Ball/MIL/Angleterre/85
Howard Kendall/MIL/Angleterre/77
Peter Reid/MIL/Angleterre/80
Colin Harvey/MIL/Angleterre/76
Trevor Steven/MIL/Angleterre/80
Kevin Sheedy/MIL/Irlande/76
Tim Cahill/MIL/Australie/79
Mikel Arteta/MIL/Espagne/79
Marouane Fellaini/MIL/Belgique/79
Steven Pienaar/MIL/Afrique du Sud/79
Thomas Gravesen/MIL/Danemark/78
Leon Osman/MIL/Angleterre/73
Dixie Dean/ATT/Angleterre/86
Tommy Lawton/ATT/Angleterre/85
Gary Lineker/ATT/Angleterre/87
Graeme Sharp/ATT/Écosse/77
Bob Latchford/ATT/Angleterre/76
Alex Young/ATT/Écosse/78
Joe Royle/ATT/Angleterre/78
Andy Gray/ATT/Écosse/79
Duncan Ferguson/ATT/Écosse/76
Roy Vernon/ATT/Pays de Galles/76
Romelu Lukaku/ATT/Belgique/85`},
{id:"ajax",name:"Légendes de l'Ajax",cat:"clubs",sub:"Pays-Bas",club:"Ajax",raw:`
Edwin van der Sar/G/Pays-Bas/90
André Onana/G/Cameroun/83
Maarten Stekelenburg/G/Pays-Bas/80
Stanley Menzo/G/Pays-Bas/78
Heinz Stuy/G/Pays-Bas/73
Remko Pasveer/G/Pays-Bas/74
Ruud Krol/DEF/Pays-Bas/89
Frank de Boer/DEF/Pays-Bas/85
Danny Blind/DEF/Pays-Bas/80
Matthijs de Ligt/DEF/Pays-Bas/84
Barry Hulshoff/DEF/Pays-Bas/79
Velibor Vasović/DEF/Serbie/82
Wim Suurbier/DEF/Pays-Bas/83
Michael Reiziger/DEF/Pays-Bas/81
Jan Vertonghen/DEF/Belgique/83
Daley Blind/DEF/Pays-Bas/80
Horst Blankenburg/DEF/Allemagne/79
Johan Neeskens/MIL/Pays-Bas/88
Frank Rijkaard/MIL/Pays-Bas/91
Jari Litmanen/MIL/Finlande/87
Edgar Davids/MIL/Pays-Bas/87
Clarence Seedorf/MIL/Pays-Bas/89
Wesley Sneijder/MIL/Pays-Bas/88
Frenkie de Jong/MIL/Pays-Bas/86
Arie Haan/MIL/Pays-Bas/83
Rafael van der Vaart/MIL/Pays-Bas/85
Gerrie Mühren/MIL/Pays-Bas/80
Ronald de Boer/MIL/Pays-Bas/82
Hakim Ziyech/MIL/Maroc/84
Christian Eriksen/MIL/Danemark/86
Johan Cruyff/ATT/Pays-Bas/97
Marco van Basten/ATT/Pays-Bas/95
Dennis Bergkamp/ATT/Pays-Bas/91
Piet Keizer/ATT/Pays-Bas/89
Luis Suárez/ATT/Uruguay/91
Patrick Kluivert/ATT/Pays-Bas/86
Sjaak Swart/ATT/Pays-Bas/83
Johnny Rep/ATT/Pays-Bas/82
Marc Overmars/ATT/Pays-Bas/86
Zlatan Ibrahimović/ATT/Suède/91`},
{id:"psv",name:"Légendes du PSV",cat:"clubs",sub:"Pays-Bas",club:"PSV",raw:`
Hans van Breukelen/G/Pays-Bas/82
Jan van Beveren/G/Pays-Bas/81
Heurelho Gomes/G/Brésil/75
Ronald Waterreus/G/Pays-Bas/76
Andreas Isaksson/G/Suède/76
Jeroen Zoet/G/Pays-Bas/71
Ronald Koeman/DEF/Pays-Bas/89
Eric Gerets/DEF/Belgique/84
Jaap Stam/DEF/Pays-Bas/87
Alex/DEF/Brésil/80
Stan Valckx/DEF/Pays-Bas/77
Berry van Aerle/DEF/Pays-Bas/76
André Ooijer/DEF/Pays-Bas/74
Wilfred Bouma/DEF/Pays-Bas/77
Lee Young-pyo/DEF/Corée du Sud/76
Jan Heintze/DEF/Danemark/77
Phillip Cocu/MIL/Pays-Bas/85
Mark van Bommel/MIL/Pays-Bas/85
Willy van de Kerkhof/MIL/Pays-Bas/82
René van de Kerkhof/MIL/Pays-Bas/83
Gerald Vanenburg/MIL/Pays-Bas/78
Søren Lerby/MIL/Danemark/83
Georginio Wijnaldum/MIL/Pays-Bas/80
Ji-sung Park/MIL/Corée du Sud/80
Ibrahim Afellay/MIL/Pays-Bas/75
Wim Jonk/MIL/Pays-Bas/79
Johann Vogel/MIL/Suisse/77
Ronaldo/ATT/Brésil/96
Romário/ATT/Brésil/93
Willy van der Kuijlen/ATT/Pays-Bas/84
Ruud van Nistelrooy/ATT/Pays-Bas/89
Luc Nilis/ATT/Belgique/82
Mateja Kežman/ATT/Serbie/80
Arjen Robben/ATT/Pays-Bas/90
Memphis Depay/ATT/Pays-Bas/83
Wim Kieft/ATT/Pays-Bas/79
Ralf Edström/ATT/Suède/78
Luuk de Jong/ATT/Pays-Bas/80
Jefferson Farfán/ATT/Pérou/80
Hirving Lozano/ATT/Mexique/80`},
{id:"feyenoord",name:"Légendes du Feyenoord",cat:"clubs",sub:"Pays-Bas",club:"Feyenoord",raw:`
Eddy Pieters Graafland/G/Pays-Bas/75
Jerzy Dudek/G/Pologne/82
Ed de Goey/G/Pays-Bas/75
Justin Bijlow/G/Pays-Bas/75
Joop Hiele/G/Pays-Bas/70
Kenneth Vermeer/G/Pays-Bas/74
Henk Timmer/G/Pays-Bas/68
Rinus Israël/DEF/Pays-Bas/85
Giovanni van Bronckhorst/DEF/Pays-Bas/80
Stefan de Vrij/DEF/Pays-Bas/82
Theo Laseroms/DEF/Pays-Bas/77
John de Wolf/DEF/Pays-Bas/74
David Hancko/DEF/Slovaquie/79
Wim Rijsbergen/DEF/Pays-Bas/79
Bruno Martins Indi/DEF/Pays-Bas/74
Gernot Trauner/DEF/Autriche/74
Ulrich van Gobbel/DEF/Pays-Bas/75
Ron Vlaar/DEF/Pays-Bas/76
Wim van Hanegem/MIL/Pays-Bas/88
Johan Cruyff/MIL/Pays-Bas/97
Wim Jansen/MIL/Pays-Bas/84
Ruud Gullit/MIL/Pays-Bas/92
Franz Hasil/MIL/Autriche/76
Shinji Ono/MIL/Japon/77
Orkun Kökçü/MIL/Turquie/80
Paul Bosvelt/MIL/Pays-Bas/77
Jordy Clasie/MIL/Pays-Bas/73
Jens Toornstra/MIL/Pays-Bas/71
Rob Witschge/MIL/Pays-Bas/77
Coen Moulijn/ATT/Pays-Bas/83
Ove Kindvall/ATT/Suède/81
Dirk Kuyt/ATT/Pays-Bas/80
Pierre van Hooijdonk/ATT/Pays-Bas/81
Robin van Persie/ATT/Pays-Bas/88
Jon Dahl Tomasson/ATT/Danemark/82
Peter Houtman/ATT/Pays-Bas/76
Santiago Giménez/ATT/Mexique/78
Roy Makaay/ATT/Pays-Bas/84
Steven Berghuis/ATT/Pays-Bas/78
Salomon Kalou/ATT/Côte d'Ivoire/81`},
{id:"celtic",name:"Légendes du Celtic",cat:"clubs",sub:"Écosse",club:"Celtic",raw:`
Ronnie Simpson/G/Écosse/79
Pat Bonner/G/Irlande/75
Artur Boruc/G/Pologne/78
John Thomson/G/Écosse/75
Fraser Forster/G/Angleterre/75
Craig Gordon/G/Écosse/76
Billy McNeill/DEF/Écosse/85
Danny McGrain/DEF/Écosse/83
Tommy Gemmell/DEF/Écosse/81
Roy Aitken/DEF/Écosse/77
Johan Mjällby/DEF/Suède/76
Virgil van Dijk/DEF/Pays-Bas/89
Kieran Tierney/DEF/Écosse/78
Jim Craig/DEF/Écosse/75
Bobo Baldé/DEF/Guinée/74
Tom Boyd/DEF/Écosse/74
John Clark/DEF/Écosse/75
Cameron Carter-Vickers/DEF/États-Unis/75
Bobby Murdoch/MIL/Écosse/82
Paul McStay/MIL/Écosse/81
Bertie Auld/MIL/Écosse/79
Scott Brown/MIL/Écosse/78
Shunsuke Nakamura/MIL/Japon/79
Lubo Moravčík/MIL/Slovaquie/79
Paul Lambert/MIL/Écosse/78
Callum McGregor/MIL/Écosse/78
Neil Lennon/MIL/Irlande du Nord/76
Stiliyan Petrov/MIL/Bulgarie/78
Tommy Burns/MIL/Écosse/76
Henrik Larsson/ATT/Suède/87
Jimmy Johnstone/ATT/Écosse/86
Jimmy McGrory/ATT/Écosse/83
Kenny Dalglish/ATT/Écosse/90
Bobby Lennox/ATT/Écosse/80
Stevie Chalmers/ATT/Écosse/78
Patsy Gallacher/ATT/Irlande/80
Charlie Nicholas/ATT/Écosse/77
Brian McClair/ATT/Écosse/79
John Hartson/ATT/Pays de Galles/75
Chris Sutton/ATT/Angleterre/78`},
{id:"rangers",name:"Légendes des Rangers",cat:"clubs",sub:"Écosse",club:"Rangers",raw:`
Andy Goram/G/Écosse/81
Allan McGregor/G/Écosse/77
Chris Woods/G/Angleterre/76
Stefan Klos/G/Allemagne/77
Peter McCloy/G/Écosse/72
Bobby Brown/G/Écosse/72
John Greig/DEF/Écosse/82
Richard Gough/DEF/Écosse/80
Terry Butcher/DEF/Angleterre/82
Sandy Jardine/DEF/Écosse/79
George Young/DEF/Écosse/80
Willie Woodburn/DEF/Écosse/77
James Tavernier/DEF/Angleterre/74
Arthur Numan/DEF/Pays-Bas/76
Eric Caldow/DEF/Écosse/76
Lorenzo Amoruso/DEF/Italie/74
David Weir/DEF/Écosse/75
Fernando Ricksen/DEF/Pays-Bas/72
Jim Baxter/MIL/Écosse/83
Brian Laudrup/MIL/Danemark/88
Paul Gascoigne/MIL/Angleterre/87
Davie Cooper/MIL/Écosse/78
Barry Ferguson/MIL/Écosse/77
Ian Durrant/MIL/Écosse/74
Giovanni van Bronckhorst/MIL/Pays-Bas/80
Stuart McCall/MIL/Écosse/75
Jörg Albertz/MIL/Allemagne/75
Steven Davis/MIL/Irlande du Nord/76
Ray Wilkins/MIL/Angleterre/81
Ian Ferguson/MIL/Écosse/73
Ally McCoist/ATT/Écosse/83
Mark Hateley/ATT/Angleterre/80
Derek Johnstone/ATT/Écosse/76
Bob McPhail/ATT/Écosse/79
Willie Johnston/ATT/Écosse/76
Ralph Brand/ATT/Écosse/74
Jim Forrest/ATT/Écosse/74
Colin Stein/ATT/Écosse/74
Alfredo Morelos/ATT/Colombie/73
Kris Boyd/ATT/Écosse/72`}
);
Object.assign(window.CLUB_COLORS,{"Manchester United":["#DA291C","#FFFFFF"],"Liverpool":["#C8102E","#F6EB61"],"Arsenal":["#EF0107","#FFFFFF"],"Chelsea":["#034694","#FFFFFF"],"Manchester City":["#6CABDD","#FFFFFF"],"Tottenham":["#FFFFFF","#132257"],"Newcastle":["#241F20","#FFFFFF"],"Everton":["#003399","#FFFFFF"],"Ajax":["#FFFFFF","#D2122E"],"PSV":["#ED1C24","#FFFFFF"],"Feyenoord":["#E30613","#FFFFFF"],"Celtic":["#018749","#FFFFFF"],"Rangers":["#1B458F","#FFFFFF"]});

/* ---- clubs_es_it_de.js ---- */
// Packs « légendes de club » : Espagne, Italie, Allemagne
window.FOOT_PACKS.push(
{id:"realmadrid",name:"Légendes du Real Madrid",cat:"clubs",sub:"Espagne",club:"Real Madrid",raw:`
Iker Casillas/G/Espagne/92
Thibaut Courtois/G/Belgique/90
Ricardo Zamora/G/Espagne/88
Keylor Navas/G/Costa Rica/86
Paco Buyo/G/Espagne/80
Bodo Illgner/G/Allemagne/81
Sergio Ramos/DEF/Espagne/92
Roberto Carlos/DEF/Brésil/92
Fernando Hierro/DEF/Espagne/88
Marcelo/DEF/Brésil/89
Manolo Sanchís/DEF/Espagne/84
Raphaël Varane/DEF/France/87
Dani Carvajal/DEF/Espagne/86
José Antonio Camacho/DEF/Espagne/84
Pepe/DEF/Portugal/87
Zinédine Zidane/MIL/France/97
Luka Modrić/MIL/Croatie/92
Toni Kroos/MIL/Allemagne/91
Luís Figo/MIL/Portugal/92
Fernando Redondo/MIL/Argentine/88
Casemiro/MIL/Brésil/86
Jude Bellingham/MIL/Angleterre/89
Xabi Alonso/MIL/Espagne/88
Claude Makélélé/MIL/France/87
Míchel/MIL/Espagne/84
Federico Valverde/MIL/Uruguay/87
Alfredo Di Stéfano/ATT/Argentine/97
Cristiano Ronaldo/ATT/Portugal/98
Ferenc Puskás/ATT/Hongrie/95
Raúl/ATT/Espagne/91
Karim Benzema/ATT/France/91
Francisco Gento/ATT/Espagne/90
Ronaldo/ATT/Brésil/96
Emilio Butragueño/ATT/Espagne/87
Hugo Sánchez/ATT/Mexique/88
Vinícius Júnior/ATT/Brésil/90
Raymond Kopa/ATT/France/90
Gareth Bale/ATT/Pays de Galles/89
Santillana/ATT/Espagne/84
Amancio/ATT/Espagne/85`},
{id:"barca",name:"Légendes du Barça",cat:"clubs",sub:"Espagne",club:"Barcelone",raw:`
Andoni Zubizarreta/G/Espagne/86
Víctor Valdés/G/Espagne/85
Marc-André ter Stegen/G/Allemagne/88
Antoni Ramallets/G/Espagne/84
Salvador Sadurní/G/Espagne/77
Javier Urruticoechea/G/Espagne/78
Claudio Bravo/G/Chili/82
Carles Puyol/DEF/Espagne/89
Gerard Piqué/DEF/Espagne/88
Ronald Koeman/DEF/Pays-Bas/89
Dani Alves/DEF/Brésil/88
Jordi Alba/DEF/Espagne/86
Migueli/DEF/Espagne/80
Éric Abidal/DEF/France/81
Rafael Márquez/DEF/Mexique/85
Frank de Boer/DEF/Pays-Bas/85
Albert Ferrer/DEF/Espagne/79
Sergi Barjuán/DEF/Espagne/79
Xavi/MIL/Espagne/93
Andrés Iniesta/MIL/Espagne/93
Sergio Busquets/MIL/Espagne/89
Pep Guardiola/MIL/Espagne/86
Luis Suárez Miramontes/MIL/Espagne/90
Michael Laudrup/MIL/Danemark/92
Deco/MIL/Portugal/88
Pedri/MIL/Espagne/87
Ivan Rakitić/MIL/Croatie/86
José Mari Bakero/MIL/Espagne/81
Guillermo Amor/MIL/Espagne/79
Lionel Messi/ATT/Argentine/99
Johan Cruyff/ATT/Pays-Bas/97
Ronaldinho/ATT/Brésil/94
László Kubala/ATT/Hongrie/92
Luis Suárez/ATT/Uruguay/91
Rivaldo/ATT/Brésil/92
Hristo Stoichkov/ATT/Bulgarie/90
Romário/ATT/Brésil/93
Samuel Eto'o/ATT/Cameroun/91
Neymar/ATT/Brésil/91
Carles Rexach/ATT/Espagne/82`},
{id:"atletico",name:"Légendes de l'Atlético",cat:"clubs",sub:"Espagne",club:"Atlético Madrid",raw:`
Jan Oblak/G/Slovénie/89
Thibaut Courtois/G/Belgique/90
Abel Resino/G/Espagne/80
José Francisco Molina/G/Espagne/78
David de Gea/G/Espagne/86
Germán Burgos/G/Argentine/76
Miguel Reina/G/Espagne/76
Diego Godín/DEF/Uruguay/87
Filipe Luís/DEF/Brésil/83
Juanfran/DEF/Espagne/81
José María Giménez/DEF/Uruguay/82
Miranda/DEF/Brésil/82
Luis Pereira/DEF/Brésil/82
Lucas Hernández/DEF/France/82
Stefan Savić/DEF/Monténégro/80
Tomás Reñones/DEF/Espagne/74
Isacio Calleja/DEF/Espagne/76
Antonio López/DEF/Espagne/74
Koke/MIL/Espagne/83
Diego Simeone/MIL/Argentine/84
Gabi/MIL/Espagne/80
Adelardo/MIL/Espagne/80
Saúl Ñíguez/MIL/Espagne/81
Arda Turan/MIL/Turquie/84
Milinko Pantić/MIL/Serbie/79
Tiago/MIL/Portugal/79
Rodrigo De Paul/MIL/Argentine/81
Thomas Partey/MIL/Ghana/82
Antoine Griezmann/ATT/France/89
Luis Aragonés/ATT/Espagne/84
Fernando Torres/ATT/Espagne/87
Radamel Falcao/ATT/Colombie/87
Sergio Agüero/ATT/Argentine/89
Diego Forlán/ATT/Uruguay/87
Paulo Futre/ATT/Portugal/86
Diego Costa/ATT/Espagne/84
José Eulogio Gárate/ATT/Espagne/82
Kiko/ATT/Espagne/80
Christian Vieri/ATT/Italie/87
Enrique Collar/ATT/Espagne/80`},
{id:"valence",name:"Légendes de Valence",cat:"clubs",sub:"Espagne",club:"Valence",raw:`
Santiago Cañizares/G/Espagne/84
Ignacio Eizaguirre/G/Espagne/78
Diego Alves/G/Brésil/78
Giorgi Mamardashvili/G/Géorgie/82
José Manuel Ochotorena/G/Espagne/74
Andrés Palop/G/Espagne/79
Jaume Domènech/G/Espagne/72
Roberto Ayala/DEF/Argentine/85
Carlos Marchena/DEF/Espagne/81
Amedeo Carboni/DEF/Italie/78
Miroslav Đukić/DEF/Serbie/79
Ricardo Arias/DEF/Espagne/76
José Luis Gayà/DEF/Espagne/79
Mauricio Pellegrino/DEF/Argentine/77
Jocelyn Angloma/DEF/France/79
David Navarro/DEF/Espagne/70
Gaizka Mendieta/MIL/Espagne/84
David Albelda/MIL/Espagne/82
Rubén Baraja/MIL/Espagne/81
Pablo Aimar/MIL/Argentine/84
Vicente/MIL/Espagne/82
Fernando Gómez/MIL/Espagne/80
Antonio Puchades/MIL/Espagne/79
Dani Parejo/MIL/Espagne/80
Juan Mata/MIL/Espagne/82
Miguel Ángel Angulo/MIL/Espagne/77
Kily González/MIL/Argentine/79
Joaquín/MIL/Espagne/81
Éver Banega/MIL/Argentine/81
Mario Kempes/ATT/Argentine/89
David Villa/ATT/Espagne/88
Mundo/ATT/Espagne/80
Claudio López/ATT/Argentine/81
Waldo/ATT/Brésil/78
Roberto Soldado/ATT/Espagne/78
Predrag Mijatović/ATT/Monténégro/86
Rodrigo/ATT/Espagne/77
John Carew/ATT/Norvège/76
Paco Alcácer/ATT/Espagne/77`},
{id:"seville",name:"Légendes de Séville",cat:"clubs",sub:"Espagne",club:"Séville",raw:`
Yassine Bounou/G/Maroc/85
Andrés Palop/G/Espagne/79
Sergio Rico/G/Espagne/74
Juan Carlos Unzué/G/Espagne/72
Tomáš Vaclík/G/République tchèque/76
Javier Varas/G/Espagne/68
Dani Alves/DEF/Brésil/88
Sergio Ramos/DEF/Espagne/92
Jules Koundé/DEF/France/85
Diego Carlos/DEF/Brésil/77
Javi Navarro/DEF/Espagne/76
Julien Escudé/DEF/France/75
Pablo Alfaro/DEF/Espagne/74
Ivica Dragutinović/DEF/Serbie/76
Federico Fazio/DEF/Argentine/74
Adil Rami/DEF/France/78
Jesús Navas/MIL/Espagne/84
Ivan Rakitić/MIL/Croatie/86
José Antonio Reyes/MIL/Espagne/80
Éver Banega/MIL/Argentine/81
Enzo Maresca/MIL/Italie/75
Steven N'Zonzi/MIL/France/77
Seydou Keita/MIL/Mali/83
Christian Poulsen/MIL/Danemark/79
Adriano Correia/MIL/Brésil/78
Renato/MIL/Brésil/74
Grzegorz Krychowiak/MIL/Pologne/79
Antonio Puerta/MIL/Espagne/75
Frédéric Kanouté/ATT/Mali/84
Juan Arza/ATT/Espagne/80
Luis Fabiano/ATT/Brésil/83
Davor Šuker/ATT/Croatie/88
Carlos Bacca/ATT/Colombie/80
Kevin Gameiro/ATT/France/80
Diego Maradona/ATT/Argentine/99
Youssef En-Nesyri/ATT/Maroc/80
Álvaro Negredo/ATT/Espagne/78
Iván Zamorano/ATT/Chili/85`},
{id:"milan",name:"Légendes du Milan AC",cat:"clubs",sub:"Italie",club:"Milan",raw:`
Dida/G/Brésil/85
Gianluigi Donnarumma/G/Italie/88
Mike Maignan/G/France/86
Sebastiano Rossi/G/Italie/80
Fabio Cudicini/G/Italie/80
Enrico Albertosi/G/Italie/82
Christian Abbiati/G/Italie/79
Paolo Maldini/DEF/Italie/95
Franco Baresi/DEF/Italie/95
Alessandro Nesta/DEF/Italie/91
Alessandro Costacurta/DEF/Italie/86
Cafu/DEF/Brésil/91
Thiago Silva/DEF/Brésil/89
Mauro Tassotti/DEF/Italie/83
Cesare Maldini/DEF/Italie/84
Theo Hernández/DEF/France/85
Kakha Kaladze/DEF/Géorgie/80
Gianni Rivera/MIL/Italie/92
Kaká/MIL/Brésil/92
Ruud Gullit/MIL/Pays-Bas/92
Andrea Pirlo/MIL/Italie/92
Frank Rijkaard/MIL/Pays-Bas/91
Nils Liedholm/MIL/Suède/89
Clarence Seedorf/MIL/Pays-Bas/89
Marcel Desailly/MIL/France/89
Gennaro Gattuso/MIL/Italie/86
Roberto Donadoni/MIL/Italie/84
Demetrio Albertini/MIL/Italie/84
Zvonimir Boban/MIL/Croatie/87
Carlo Ancelotti/MIL/Italie/81
Marco van Basten/ATT/Pays-Bas/95
Andriy Shevchenko/ATT/Ukraine/92
Gunnar Nordahl/ATT/Suède/90
George Weah/ATT/Liberia/91
Zlatan Ibrahimović/ATT/Suède/91
Filippo Inzaghi/ATT/Italie/86
Juan Alberto Schiaffino/ATT/Uruguay/91
José Altafini/ATT/Brésil/87
Rafael Leão/ATT/Portugal/85
Daniele Massaro/ATT/Italie/78`},
{id:"inter",name:"Légendes de l'Inter",cat:"clubs",sub:"Italie",club:"Inter",raw:`
Walter Zenga/G/Italie/86
Júlio César/G/Brésil/85
Samir Handanović/G/Slovénie/85
Giuliano Sarti/G/Italie/80
Francesco Toldo/G/Italie/84
Gianluca Pagliuca/G/Italie/83
Ivano Bordon/G/Italie/78
Giacinto Facchetti/DEF/Italie/92
Javier Zanetti/DEF/Argentine/89
Giuseppe Bergomi/DEF/Italie/86
Tarcisio Burgnich/DEF/Italie/84
Andreas Brehme/DEF/Allemagne/88
Armando Picchi/DEF/Italie/84
Lúcio/DEF/Brésil/87
Walter Samuel/DEF/Argentine/85
Maicon/DEF/Brésil/86
Iván Córdoba/DEF/Colombie/84
Marco Materazzi/DEF/Italie/82
Alessandro Bastoni/DEF/Italie/86
Lothar Matthäus/MIL/Allemagne/93
Luis Suárez Miramontes/MIL/Espagne/90
Wesley Sneijder/MIL/Pays-Bas/88
Esteban Cambiasso/MIL/Argentine/85
Mario Corso/MIL/Italie/84
Nicolò Barella/MIL/Italie/87
Dejan Stanković/MIL/Serbie/84
Gabriele Oriali/MIL/Italie/80
Giuseppe Meazza/ATT/Italie/93
Ronaldo/ATT/Brésil/96
Sandro Mazzola/ATT/Italie/89
Diego Milito/ATT/Argentine/85
Lautaro Martínez/ATT/Argentine/87
Alessandro Altobelli/ATT/Italie/84
Samuel Eto'o/ATT/Cameroun/91
Christian Vieri/ATT/Italie/87
Roberto Boninsegna/ATT/Italie/82
Adriano/ATT/Brésil/86
Jair da Costa/ATT/Brésil/80
Zlatan Ibrahimović/ATT/Suède/91
Nicola Berti/MIL/Italie/80
Evaristo Beccalossi/MIL/Italie/79
`},
{id:"juve",name:"Légendes de la Juventus",cat:"clubs",sub:"Italie",club:"Juventus",raw:`
Gianluigi Buffon/G/Italie/94
Dino Zoff/G/Italie/93
Gianpiero Combi/G/Italie/85
Angelo Peruzzi/G/Italie/85
Stefano Tacconi/G/Italie/79
Wojciech Szczęsny/G/Pologne/84
Edwin van der Sar/G/Pays-Bas/90
Gaetano Scirea/DEF/Italie/91
Giorgio Chiellini/DEF/Italie/88
Claudio Gentile/DEF/Italie/86
Antonio Cabrini/DEF/Italie/86
Leonardo Bonucci/DEF/Italie/86
Lilian Thuram/DEF/France/89
Fabio Cannavaro/DEF/Italie/91
Ciro Ferrara/DEF/Italie/84
Andrea Barzagli/DEF/Italie/85
Gianluca Zambrotta/DEF/Italie/85
Michel Platini/MIL/France/95
Pavel Nedvěd/MIL/République tchèque/91
Zinédine Zidane/MIL/France/97
Andrea Pirlo/MIL/Italie/92
Marco Tardelli/MIL/Italie/87
Edgar Davids/MIL/Pays-Bas/87
Didier Deschamps/MIL/France/86
Antonio Conte/MIL/Italie/82
Arturo Vidal/MIL/Chili/86
Claudio Marchisio/MIL/Italie/82
Franco Causio/MIL/Italie/82
Alessandro Del Piero/ATT/Italie/92
Roberto Baggio/ATT/Italie/93
Omar Sívori/ATT/Argentine/91
John Charles/ATT/Pays de Galles/90
Giampiero Boniperti/ATT/Italie/88
Roberto Bettega/ATT/Italie/84
Paolo Rossi/ATT/Italie/89
David Trezeguet/ATT/France/86
Cristiano Ronaldo/ATT/Portugal/98
Gianluca Vialli/ATT/Italie/86
Paulo Dybala/ATT/Argentine/85
Pietro Anastasi/ATT/Italie/81`},
{id:"roma",name:"Légendes de la Roma",cat:"clubs",sub:"Italie",club:"Roma",raw:`
Alisson/G/Brésil/89
Franco Tancredi/G/Italie/78
Guido Masetti/G/Italie/76
Wojciech Szczęsny/G/Pologne/84
Francesco Antonioli/G/Italie/75
Doni/G/Brésil/74
Giovanni Cervone/G/Italie/73
Aldair/DEF/Brésil/86
Cafu/DEF/Brésil/91
Giacomo Losi/DEF/Italie/79
Vincent Candela/DEF/France/80
Walter Samuel/DEF/Argentine/85
Christian Panucci/DEF/Italie/81
Philippe Mexès/DEF/France/79
Sebino Nela/DEF/Italie/76
Kostas Manolas/DEF/Grèce/80
Antonio Rüdiger/DEF/Allemagne/86
John Arne Riise/DEF/Norvège/80
Daniele De Rossi/MIL/Italie/87
Paulo Roberto Falcão/MIL/Brésil/90
Bruno Conti/MIL/Italie/85
Agostino Di Bartolomei/MIL/Italie/82
Giuseppe Giannini/MIL/Italie/82
Carlo Ancelotti/MIL/Italie/81
Radja Nainggolan/MIL/Belgique/83
Miralem Pjanić/MIL/Bosnie-Herzégovine/84
Damiano Tommasi/MIL/Italie/77
Simone Perrotta/MIL/Italie/77
Lorenzo Pellegrini/MIL/Italie/79
Francesco Totti/ATT/Italie/92
Roberto Pruzzo/ATT/Italie/80
Gabriel Batistuta/ATT/Argentine/89
Amedeo Amadei/ATT/Italie/83
Vincenzo Montella/ATT/Italie/81
Rudi Völler/ATT/Allemagne/87
Edin Džeko/ATT/Bosnie-Herzégovine/84
Pedro Manfredini/ATT/Argentine/79
Mohamed Salah/ATT/Égypte/90
Abel Balbo/ATT/Argentine/81
Marco Delvecchio/ATT/Italie/77`},
{id:"naples",name:"Légendes de Naples",cat:"clubs",sub:"Italie",club:"Naples",raw:`
Dino Zoff/G/Italie/93
Claudio Garella/G/Italie/75
Luciano Castellini/G/Italie/78
Pepe Reina/G/Espagne/82
Giuliano Giuliani/G/Italie/74
Alex Meret/G/Italie/79
Morgan De Sanctis/G/Italie/78
Ciro Ferrara/DEF/Italie/84
Kalidou Koulibaly/DEF/Sénégal/86
Giuseppe Bruscolotti/DEF/Italie/78
Kim Min-jae/DEF/Corée du Sud/84
Giovanni Di Lorenzo/DEF/Italie/82
Raúl Albiol/DEF/Espagne/80
Faouzi Ghoulam/DEF/Algérie/80
Alessandro Renica/DEF/Italie/74
Giovanni Francini/DEF/Italie/74
Paolo Cannavaro/DEF/Italie/72
Marek Hamšík/MIL/Slovaquie/85
Antonio Juliano/MIL/Italie/80
Jorginho/MIL/Italie/84
Piotr Zieliński/MIL/Pologne/83
Salvatore Bagni/MIL/Italie/78
Alemão/MIL/Brésil/81
Scott McTominay/MIL/Écosse/84
Fernando De Napoli/MIL/Italie/78
Allan/MIL/Brésil/80
Stanislav Lobotka/MIL/Slovaquie/81
Diego Maradona/ATT/Argentine/99
Careca/ATT/Brésil/87
Edinson Cavani/ATT/Uruguay/88
Gonzalo Higuaín/ATT/Argentine/86
Dries Mertens/ATT/Belgique/84
Lorenzo Insigne/ATT/Italie/84
Victor Osimhen/ATT/Nigeria/86
Khvicha Kvaratskhelia/ATT/Géorgie/87
José Altafini/ATT/Brésil/87
Ezequiel Lavezzi/ATT/Argentine/81
Hasse Jeppson/ATT/Suède/80
Bruno Giordano/ATT/Italie/80
Gianfranco Zola/ATT/Italie/87`},
{id:"lazio",name:"Légendes de la Lazio",cat:"clubs",sub:"Italie",club:"Lazio",raw:`
Felice Pulici/G/Italie/77
Angelo Peruzzi/G/Italie/85
Luca Marchegiani/G/Italie/78
Federico Marchetti/G/Italie/77
Ivan Provedel/G/Italie/77
Thomas Strakosha/G/Albanie/75
Marco Ballotta/G/Italie/70
Alessandro Nesta/DEF/Italie/91
Siniša Mihajlović/DEF/Serbie/84
Giuseppe Wilson/DEF/Italie/78
Giuseppe Favalli/DEF/Italie/75
Fernando Couto/DEF/Portugal/82
Paolo Negro/DEF/Italie/74
Luigi Martini/DEF/Italie/74
Ştefan Radu/DEF/Roumanie/78
Stefan de Vrij/DEF/Pays-Bas/82
Giuseppe Pancaro/DEF/Italie/75
Pavel Nedvěd/MIL/République tchèque/91
Juan Sebastián Verón/MIL/Argentine/85
Sergej Milinković-Savić/MIL/Serbie/84
Luis Alberto/MIL/Espagne/80
Diego Simeone/MIL/Argentine/84
Luciano Re Cecconi/MIL/Italie/77
Dejan Stanković/MIL/Serbie/84
Matías Almeyda/MIL/Argentine/80
Lucas Leiva/MIL/Brésil/79
Senad Lulić/MIL/Bosnie-Herzégovine/76
Paul Gascoigne/MIL/Angleterre/87
Silvio Piola/ATT/Italie/88
Giorgio Chinaglia/ATT/Italie/82
Ciro Immobile/ATT/Italie/85
Giuseppe Signori/ATT/Italie/84
Roberto Mancini/ATT/Italie/85
Bruno Giordano/ATT/Italie/80
Marcelo Salas/ATT/Chili/85
Miroslav Klose/ATT/Allemagne/88
Alen Bokšić/ATT/Croatie/83
Hernán Crespo/ATT/Argentine/86
Simone Inzaghi/ATT/Italie/76
Tommaso Rocchi/ATT/Italie/75`},
{id:"bayern",name:"Légendes du Bayern",cat:"clubs",sub:"Allemagne",club:"Bayern",raw:`
Sepp Maier/G/Allemagne/90
Manuel Neuer/G/Allemagne/93
Oliver Kahn/G/Allemagne/91
Jean-Marie Pfaff/G/Belgique/86
Raimond Aumann/G/Allemagne/75
Hans-Jörg Butt/G/Allemagne/77
Sven Ulreich/G/Allemagne/70
Franz Beckenbauer/DEF/Allemagne/96
Philipp Lahm/DEF/Allemagne/92
Paul Breitner/DEF/Allemagne/89
Klaus Augenthaler/DEF/Allemagne/84
David Alaba/DEF/Autriche/86
Jérôme Boateng/DEF/Allemagne/86
Hans-Georg Schwarzenbeck/DEF/Allemagne/82
Bixente Lizarazu/DEF/France/86
Lúcio/DEF/Brésil/87
Alphonso Davies/DEF/Canada/84
Samuel Kuffour/DEF/Ghana/84
Lothar Matthäus/MIL/Allemagne/93
Bastian Schweinsteiger/MIL/Allemagne/90
Franck Ribéry/MIL/France/89
Joshua Kimmich/MIL/Allemagne/89
Stefan Effenberg/MIL/Allemagne/86
Michael Ballack/MIL/Allemagne/89
Jamal Musiala/MIL/Allemagne/87
Mehmet Scholl/MIL/Allemagne/81
Toni Kroos/MIL/Allemagne/91
Thiago Alcântara/MIL/Espagne/86
Javi Martínez/MIL/Espagne/83
Gerd Müller/ATT/Allemagne/94
Robert Lewandowski/ATT/Pologne/92
Karl-Heinz Rummenigge/ATT/Allemagne/91
Thomas Müller/ATT/Allemagne/89
Arjen Robben/ATT/Pays-Bas/90
Harry Kane/ATT/Angleterre/90
Giovane Élber/ATT/Brésil/84
Uli Hoeneß/ATT/Allemagne/83
Roy Makaay/ATT/Pays-Bas/84
Mario Gómez/ATT/Allemagne/83
Dieter Hoeneß/ATT/Allemagne/79`},
{id:"dortmund",name:"Légendes de Dortmund",cat:"clubs",sub:"Allemagne",club:"Dortmund",raw:`
Roman Weidenfeller/G/Allemagne/77
Hans Tilkowski/G/Allemagne/81
Stefan Klos/G/Allemagne/77
Gregor Kobel/G/Suisse/83
Roman Bürki/G/Suisse/77
Jens Lehmann/G/Allemagne/84
Eike Immel/G/Allemagne/75
Matthias Sammer/DEF/Allemagne/89
Mats Hummels/DEF/Allemagne/87
Jürgen Kohler/DEF/Allemagne/86
Łukasz Piszczek/DEF/Pologne/83
Dede/DEF/Brésil/76
Stefan Reuter/DEF/Allemagne/79
Neven Subotić/DEF/Serbie/79
Christian Wörns/DEF/Allemagne/80
Marcel Schmelzer/DEF/Allemagne/77
Júlio César/DEF/Brésil/85
Marco Reus/MIL/Allemagne/85
Michael Zorc/MIL/Allemagne/78
Andreas Möller/MIL/Allemagne/86
Tomáš Rosický/MIL/République tchèque/84
İlkay Gündoğan/MIL/Allemagne/87
Shinji Kagawa/MIL/Japon/80
Mario Götze/MIL/Allemagne/83
Jude Bellingham/MIL/Angleterre/89
Nuri Şahin/MIL/Turquie/82
Jakub Błaszczykowski/MIL/Pologne/81
Lars Ricken/MIL/Allemagne/77
Paulo Sousa/MIL/Portugal/83
Robert Lewandowski/ATT/Pologne/92
Lothar Emmerich/ATT/Allemagne/79
Stéphane Chapuisat/ATT/Suisse/83
Pierre-Emerick Aubameyang/ATT/Gabon/86
Erling Haaland/ATT/Norvège/90
Manfred Burgsmüller/ATT/Allemagne/77
Karl-Heinz Riedle/ATT/Allemagne/81
Jan Koller/ATT/République tchèque/82
Márcio Amoroso/ATT/Brésil/80
Siegfried Held/ATT/Allemagne/76
Lucas Barrios/ATT/Paraguay/77`},
{id:"leverkusen",name:"Légendes de Leverkusen",cat:"clubs",sub:"Allemagne",club:"Leverkusen",raw:`
Rüdiger Vollborn/G/Allemagne/70
Hans-Jörg Butt/G/Allemagne/77
Bernd Leno/G/Allemagne/81
Lukáš Hrádecký/G/Finlande/80
René Adler/G/Allemagne/76
Adam Matysek/G/Pologne/72
Dirk Heinen/G/Allemagne/70
Lúcio/DEF/Brésil/87
Jens Nowotny/DEF/Allemagne/80
Alejandro Grimaldo/DEF/Espagne/83
Jonathan Tah/DEF/Allemagne/82
Jeremie Frimpong/DEF/Pays-Bas/81
Christian Wörns/DEF/Allemagne/80
Juan/DEF/Brésil/80
Edmond Tapsoba/DEF/Burkina Faso/80
Piero Hincapié/DEF/Équateur/81
Diego Placente/DEF/Argentine/74
Florian Wirtz/MIL/Allemagne/87
Michael Ballack/MIL/Allemagne/89
Granit Xhaka/MIL/Suisse/83
Bernd Schneider/MIL/Allemagne/81
Kai Havertz/MIL/Allemagne/83
Zé Roberto/MIL/Brésil/83
Carsten Ramelow/MIL/Allemagne/77
Simon Rolfes/MIL/Allemagne/77
Lars Bender/MIL/Allemagne/78
Yıldıray Baştürk/MIL/Turquie/79
Emerson/MIL/Brésil/82
Ulf Kirsten/ATT/Allemagne/82
Stefan Kießling/ATT/Allemagne/79
Cha Bum-kun/ATT/Corée du Sud/85
Dimitar Berbatov/ATT/Bulgarie/86
Rudi Völler/ATT/Allemagne/87
Oliver Neuville/ATT/Allemagne/79
Patrik Schick/ATT/République tchèque/81
Victor Boniface/ATT/Nigeria/77
Paulo Sérgio/ATT/Brésil/76
Son Heung-min/ATT/Corée du Sud/88
Moussa Diaby/ATT/France/79
Leon Bailey/ATT/Jamaïque/77`}
);
Object.assign(window.CLUB_COLORS,{"Real Madrid":["#FFFFFF","#D4A53A"],"Barcelone":["#A50044","#004D98"],"Atlético Madrid":["#CB3524","#FFFFFF"],"Valence":["#FFFFFF","#000000"],"Séville":["#FFFFFF","#D7001F"],"Milan":["#FB090B","#000000"],"Inter":["#0068A8","#000000"],"Juventus":["#000000","#FFFFFF"],"Roma":["#8E1F2F","#F0BC42"],"Naples":["#12A0D7","#FFFFFF"],"Lazio":["#87D8F7","#FFFFFF"],"Bayern":["#DC052D","#FFFFFF"],"Dortmund":["#FDE100","#000000"],"Leverkusen":["#E32221","#000000"]});

/* ---- clubs_fr_pt.js ---- */
// Packs « légendes de club » : France et Portugal
window.FOOT_PACKS.push(
{id:"psg",name:"Légendes du PSG",cat:"clubs",sub:"France",club:"PSG",raw:`
Bernard Lama/G/France/82
Gianluigi Donnarumma/G/Italie/88
Keylor Navas/G/Costa Rica/86
Joël Bats/G/France/80
Salvatore Sirigu/G/Italie/77
Dominique Baratelli/G/France/76
Thiago Silva/DEF/Brésil/89
Marquinhos/DEF/Brésil/87
Achraf Hakimi/DEF/Maroc/87
Nuno Mendes/DEF/Portugal/86
Dani Alves/DEF/Brésil/88
Ricardo Gomes/DEF/Brésil/80
Alain Roche/DEF/France/78
Presnel Kimpembe/DEF/France/80
Maxwell/DEF/Brésil/79
Jean-Marc Pilorget/DEF/France/72
Marco Verratti/MIL/Italie/86
Raí/MIL/Brésil/85
Safet Sušić/MIL/Bosnie-Herzégovine/86
Ronaldinho/MIL/Brésil/94
Vitinha/MIL/Portugal/87
Ángel Di María/MIL/Argentine/88
Luis Fernández/MIL/France/84
Blaise Matuidi/MIL/France/83
Thiago Motta/MIL/Italie/82
Jay-Jay Okocha/MIL/Nigeria/86
Mustapha Dahleb/MIL/Algérie/81
Javier Pastor/MIL/Argentine/80
Valdo/MIL/Brésil/78
Vincent Guérin/MIL/France/75
Kylian Mbappé/ATT/France/92
Zlatan Ibrahimović/ATT/Suède/91
Neymar/ATT/Brésil/91
Edinson Cavani/ATT/Uruguay/88
Ousmane Dembélé/ATT/France/90
Lionel Messi/ATT/Argentine/99
George Weah/ATT/Liberia/91
Pauleta/ATT/Portugal/84
Dominique Rocheteau/ATT/France/83
David Ginola/ATT/France/83
`},
{id:"om",name:"Légendes de l'OM",cat:"clubs",sub:"France",club:"Marseille",raw:`
Steve Mandanda/G/France/82
Fabien Barthez/G/France/86
Pascal Olmeta/G/France/74
Vedran Runje/G/Croatie/76
Gerónimo Rulli/G/Argentine/78
Basile Boli/DEF/France/83
Marius Trésor/DEF/France/86
Marcel Desailly/DEF/France/89
Carlos Mozer/DEF/Brésil/83
Manuel Amoros/DEF/France/84
Éric Di Meco/DEF/France/77
Jocelyn Angloma/DEF/France/79
Bernard Casoni/DEF/France/76
Habib Beye/DEF/Sénégal/77
Souleymane Diawara/DEF/Sénégal/77
Rod Fanni/DEF/France/71
Leonardo Balerdi/DEF/Argentine/77
Chris Waddle/MIL/Angleterre/82
Abedi Pelé/MIL/Ghana/87
Dimitri Payet/MIL/France/82
Didier Deschamps/MIL/France/86
Franck Sauzée/MIL/France/80
Mathieu Valbuena/MIL/France/80
Florian Thauvin/MIL/France/80
Franck Ribéry/MIL/France/89
Lucho González/MIL/Argentine/80
Roger Magnusson/MIL/Suède/79
Alain Giresse/MIL/France/87
Robert Pirès/MIL/France/86
André Ayew/MIL/Ghana/77
Benoît Cheyrou/MIL/France/72
Jean-Pierre Papin/ATT/France/89
Josip Skoblar/ATT/Yougoslavie/84
Didier Drogba/ATT/Côte d'Ivoire/89
Gunnar Andersson/ATT/Suède/82
Rudi Völler/ATT/Allemagne/87
Alen Bokšić/ATT/Croatie/83
Mamadou Niang/ATT/Sénégal/80
André-Pierre Gignac/ATT/France/80
Fabrizio Ravanelli/ATT/Italie/80
`},
{id:"ol",name:"Légendes de l'OL",cat:"clubs",sub:"France",club:"Lyon",raw:`
Grégory Coupet/G/France/83
Hugo Lloris/G/France/87
Anthony Lopes/G/Portugal/81
Lucas Perri/G/Brésil/75
Pascal Olmeta/G/France/74
Rémy Vercoutre/G/France/68
Cris/DEF/Brésil/80
Claudio Caçapa/DEF/Brésil/74
Jean Djorkaeff/DEF/France/77
Éric Abidal/DEF/France/81
Anthony Réveillère/DEF/France/77
Samuel Umtiti/DEF/France/81
Raymond Domenech/DEF/France/75
Patrick Müller/DEF/Suisse/77
Sébastien Squillaci/DEF/France/75
François Clerc/DEF/France/73
Dejan Lovren/DEF/Croatie/78
Léo Dubois/DEF/France/74
Juninho/MIL/Brésil/87
Michael Essien/MIL/Ghana/87
Mahamadou Diarra/MIL/Mali/85
Florent Malouda/MIL/France/82
Nabil Fekir/MIL/France/81
Miralem Pjanić/MIL/Bosnie-Herzégovine/84
Jérémy Toulalan/MIL/France/80
Serge Chiesa/MIL/France/77
Rayan Cherki/MIL/France/81
Corentin Tolisso/MIL/France/79
Kim Källström/MIL/Suède/77
Houssem Aouar/MIL/Algérie/79
Maxime Gonalons/MIL/France/76
Sonny Anderson/ATT/Brésil/82
Karim Benzema/ATT/France/91
Fleury Di Nallo/ATT/France/79
Bernard Lacombe/ATT/France/82
Alexandre Lacazette/ATT/France/81
Lisandro López/ATT/Argentine/79
Memphis Depay/ATT/Pays-Bas/83
Sidney Govou/ATT/France/78
Fred/ATT/Brésil/80
`},
{id:"asse",name:"Légendes de Saint-Étienne",cat:"clubs",sub:"France",club:"Saint-Étienne",raw:`
Ivan Ćurković/G/Yougoslavie/82
Stéphane Ruffier/G/France/77
Jérémie Janot/G/France/72
Claude Abbes/G/France/75
Joseph-Antoine Bell/G/Cameroun/82
Jessy Moulin/G/France/68
Osvaldo Piazza/DEF/Argentine/80
Robert Herbin/DEF/France/82
Christian Lopez/DEF/France/79
Gérard Janvion/DEF/France/77
Bernard Bosquier/DEF/France/81
Loïc Perrin/DEF/France/76
Gérard Farison/DEF/France/72
Pierre Repellini/DEF/France/74
Kurt Zouma/DEF/France/78
Moustapha Bayal Sall/DEF/Sénégal/73
Michel Platini/MIL/France/95
Jean-Michel Larqué/MIL/France/79
Dominique Bathenay/MIL/France/78
Christian Synaeghel/MIL/France/74
Jacques Santini/MIL/France/72
Blaise Matuidi/MIL/France/83
Dimitri Payet/MIL/France/82
Aimé Jacquet/MIL/France/72
Josuha Guilavogui/MIL/France/75
Jérémy Clément/MIL/France/70
Fabien Lemoine/MIL/France/70
Rachid Mekhloufi/ATT/Algérie/84
Salif Keïta/ATT/Mali/86
Hervé Revelli/ATT/France/81
Dominique Rocheteau/ATT/France/83
Pierre-Emerick Aubameyang/ATT/Gabon/86
Johnny Rep/ATT/Pays-Bas/82
Patrick Revelli/ATT/France/80
Georges Bereta/ATT/France/79
Eugène N'Jo Léa/ATT/Cameroun/74
Bafétimbi Gomis/ATT/France/78
Laurent Roussey/ATT/France/72
Wahbi Khazri/ATT/Tunisie/77
Romain Hamouma/ATT/France/71
`},
{id:"monaco",name:"Légendes de Monaco",cat:"clubs",sub:"France",club:"Monaco",raw:`
Jean-Luc Ettori/G/France/79
Fabien Barthez/G/France/86
Danijel Subašić/G/Croatie/79
Flavio Roma/G/Italie/76
Diego Benaglio/G/Suisse/78
Philipp Köhn/G/Suisse/72
Lilian Thuram/DEF/France/89
Manuel Amoros/DEF/France/84
Rafael Márquez/DEF/Mexique/85
Patrice Evra/DEF/France/85
Kamil Glik/DEF/Pologne/79
Djibril Sidibé/DEF/France/76
Claude Puel/DEF/France/72
Benjamin Mendy/DEF/France/77
Sébastien Squillaci/DEF/France/75
Julien Rodriguez/DEF/France/72
Willy Sagnol/DEF/France/81
Benoît Badiashile/DEF/France/75
Andrea Raggi/DEF/Italie/70
Bernardo Silva/MIL/Portugal/88
Glenn Hoddle/MIL/Angleterre/85
Youri Djorkaeff/MIL/France/85
Fabinho/MIL/Brésil/84
João Moutinho/MIL/Portugal/83
Enzo Scifo/MIL/Belgique/85
Thomas Lemar/MIL/France/79
Ali Benarbia/MIL/Algérie/82
Marcelo Gallardo/MIL/Argentine/81
Emmanuel Petit/MIL/France/84
Jérôme Rothen/MIL/France/78
Aurélien Tchouaméni/MIL/France/84
Delio Onnis/ATT/Argentine/84
Radamel Falcao/ATT/Colombie/87
Kylian Mbappé/ATT/France/92
George Weah/ATT/Liberia/91
Wissam Ben Yedder/ATT/France/80
Thierry Henry/ATT/France/93
David Trezeguet/ATT/France/86
Ludovic Giuly/ATT/France/82
Fernando Morientes/ATT/Espagne/83
`},
{id:"bordeaux",name:"Légendes de Bordeaux",cat:"clubs",sub:"France",club:"Bordeaux",raw:`
Dominique Dropsy/G/France/77
Ulrich Ramé/G/France/76
Cédric Carrasso/G/France/75
Gaëtan Huard/G/France/74
Benoît Costil/G/France/74
Joseph-Antoine Bell/G/Cameroun/82
Marius Trésor/DEF/France/86
Patrick Battiston/DEF/France/83
Bixente Lizarazu/DEF/France/86
Léonard Specht/DEF/France/70
Thierry Tusseau/DEF/France/76
Jean-Christophe Thouvenel/DEF/France/74
Jules Koundé/DEF/France/85
Alain Roche/DEF/France/78
Souleymane Diawara/DEF/Sénégal/77
Marc Planus/DEF/France/71
Benoît Trémoulinas/DEF/France/73
Mathieu Chalmé/DEF/France/70
Alain Giresse/MIL/France/87
Jean Tigana/MIL/France/87
Zinédine Zidane/MIL/France/97
Yoann Gourcuff/MIL/France/81
Johan Micoud/MIL/France/81
Wendel/MIL/Brésil/76
René Girard/MIL/France/75
Alou Diarra/MIL/France/77
Ali Benarbia/MIL/Algérie/82
Fernando Menegazzo/MIL/Brésil/72
Jaroslav Plašil/MIL/République tchèque/76
Rio Mavuba/MIL/France/75
Bernard Lacombe/ATT/France/82
Pauleta/ATT/Portugal/84
Sylvain Wiltord/ATT/France/83
Dieter Müller/ATT/Allemagne/81
Christophe Dugarry/ATT/France/79
Marouane Chamakh/ATT/Maroc/79
Klaus Allofs/ATT/Allemagne/81
Lilian Laslandes/ATT/France/75
Malcom/ATT/Brésil/79
Jussiê/ATT/Brésil/72
`},
{id:"nantes",name:"Légendes de Nantes",cat:"clubs",sub:"France",club:"Nantes",raw:`
Mickaël Landreau/G/France/80
Jean-Paul Bertrand-Demanes/G/France/76
Daniel Eon/G/France/72
Alban Lafont/G/France/76
Dominique Casagrande/G/France/70
David Marraud/G/France/70
Maxime Bossis/DEF/France/86
Marcel Desailly/DEF/France/89
Christian Karembeu/DEF/France/81
Patrice Rio/DEF/France/74
Gabriel De Michèle/DEF/France/74
Thierry Tusseau/DEF/France/76
William Ayache/DEF/France/74
Nicolas Pallois/DEF/France/74
Diego Carlos/DEF/Brésil/77
Antoine Kombouaré/DEF/France/72
Sylvain Armand/DEF/France/72
Nicolas Gillet/DEF/France/70
Henri Michel/MIL/France/81
Jorge Burruchaga/MIL/Argentine/82
Claude Makélélé/MIL/France/87
Didier Deschamps/MIL/France/86
Reynald Pedros/MIL/France/77
Jean-Claude Suaudeau/MIL/France/70
Gilles Rampillon/MIL/France/75
Eric Carrière/MIL/France/78
Jérémy Toulalan/MIL/France/80
Frédéric Da Rocha/MIL/France/71
Olivier Monterrubio/MIL/France/72
Mathieu Berson/MIL/France/68
Vahid Halilhodžić/ATT/Yougoslavie/82
Philippe Gondet/ATT/France/78
Japhet N'Doram/ATT/Tchad/79
José Touré/ATT/France/78
Patrice Loko/ATT/France/77
Nicolas Ouédec/ATT/France/76
Bernard Blanchet/ATT/France/76
Loïc Amisse/ATT/France/74
Emiliano Sala/ATT/Argentine/74
Randal Kolo Muani/ATT/France/79
`},
{id:"lille",name:"Légendes de Lille",cat:"clubs",sub:"France",club:"Lille",raw:`
Mike Maignan/G/France/86
Lucas Chevalier/G/France/80
Mickaël Landreau/G/France/80
Vincent Enyeama/G/Nigeria/79
Grégory Wimbée/G/France/72
Tony Sylva/G/Sénégal/76
José Fonte/DEF/Portugal/79
Mathieu Debuchy/DEF/France/77
Gabriel Magalhães/DEF/Brésil/85
Sven Botman/DEF/Pays-Bas/79
Adil Rami/DEF/France/78
Éric Abidal/DEF/France/81
Leny Yoro/DEF/France/78
Aurélien Chedjou/DEF/Cameroun/75
Zeki Çelik/DEF/Turquie/76
Pascal Cygan/DEF/France/70
Alexsandro/DEF/Brésil/75
Rafael Schmitz/DEF/Brésil/70
Franck Béria/DEF/France/72
Yohan Cabaye/MIL/France/79
Rio Mavuba/MIL/France/75
Dimitri Payet/MIL/France/82
Renato Sanches/MIL/Portugal/79
Benjamin André/MIL/France/75
Jean Makoun/MIL/Cameroun/77
Florent Balmont/MIL/France/74
Mathieu Bodmer/MIL/France/73
Michel Bastos/MIL/Brésil/76
Ludovic Obraniak/MIL/Pologne/74
Eden Hazard/ATT/Belgique/90
Jean Baratte/ATT/France/79
Jean Vincent/ATT/France/80
Jonathan David/ATT/Canada/82
Victor Osimhen/ATT/Nigeria/86
Nicolas Pépé/ATT/Côte d'Ivoire/80
Moussa Sow/ATT/Sénégal/79
Gervinho/ATT/Côte d'Ivoire/81
Burak Yılmaz/ATT/Turquie/81
Peter Odemwingie/ATT/Nigeria/75
Jonathan Bamba/ATT/Côte d'Ivoire/76
`},
{id:"lens",name:"Légendes du RC Lens",cat:"clubs",sub:"France",club:"Lens",raw:`
Guillaume Warmuz/G/France/76
Brice Samba/G/France/77
Bernard Lama/G/France/82
Vedran Runje/G/Croatie/76
Jean-Louis Leca/G/France/70
Charles-Hubert Itandje/G/France/68
Éric Sikora/DEF/France/74
Jean-Guy Wallemme/DEF/France/74
Kevin Danso/DEF/Autriche/76
Raphaël Varane/DEF/France/87
Jacek Bąk/DEF/Pologne/76
Facundo Medina/DEF/Argentine/77
Rigobert Song/DEF/Cameroun/80
Frédéric Déhu/DEF/France/74
Przemysław Frankowski/DEF/Pologne/75
Didier Sénac/DEF/France/72
Valérien Ismaël/DEF/France/72
Jonathan Gradit/DEF/France/73
Yoann Lachor/DEF/France/70
Ferdinand Coly/DEF/Sénégal/75
Seko Fofana/MIL/Côte d'Ivoire/80
Philippe Vercruysse/MIL/France/78
Marc-Vivien Foé/MIL/Cameroun/81
Vladimir Šmicer/MIL/République tchèque/81
Daniel Leclercq/MIL/France/72
Seydou Keita/MIL/Mali/83
Cheick Doucouré/MIL/Mali/78
Gaël Kakuta/MIL/RD Congo/76
Alou Diarra/MIL/France/77
Éric Carrière/MIL/France/75
Ahmed Oudjani/ATT/Algérie/80
Loïs Openda/ATT/Belgique/79
Tony Vairelles/ATT/France/74
Roger Boli/ATT/France/74
Didier Six/ATT/France/80
Anto Drobnjak/ATT/Monténégro/73
John Utaka/ATT/Nigeria/75
Florian Sotoca/ATT/France/73
Aruna Dindane/ATT/Côte d'Ivoire/76
Daniel Moreira/ATT/France/70
`},
{id:"benfica",name:"Légendes de Benfica",cat:"clubs",sub:"Portugal",club:"Benfica",raw:`
Manuel Bento/G/Portugal/83
Costa Pereira/G/Portugal/84
Michel Preud'homme/G/Belgique/85
Ederson/G/Brésil/86
Anatoliy Trubin/G/Ukraine/80
Júlio César/G/Brésil/85
José Henrique/G/Portugal/77
Silvino/G/Portugal/77
Humberto Coelho/DEF/Portugal/85
Luisão/DEF/Brésil/81
Rúben Dias/DEF/Portugal/87
Germano/DEF/Portugal/84
Carlos Mozer/DEF/Brésil/83
Alejandro Grimaldo/DEF/Espagne/83
Nicolás Otamendi/DEF/Argentine/82
António Veloso/DEF/Portugal/78
Ricardo Gomes/DEF/Brésil/80
Maxi Pereira/DEF/Uruguay/78
Fábio Coentrão/DEF/Portugal/81
Álvaro Magalhães/DEF/Portugal/77
Mário Coluna/MIL/Portugal/89
Rui Costa/MIL/Portugal/89
Fernando Chalana/MIL/Portugal/84
Ángel Di María/MIL/Argentine/88
Pablo Aimar/MIL/Argentine/84
Shéu/MIL/Portugal/79
Toni/MIL/Portugal/79
Nemanja Matić/MIL/Serbie/82
Enzo Fernández/MIL/Argentine/84
João Neves/MIL/Portugal/86
Eusébio/ATT/Portugal/95
José Águas/ATT/Portugal/85
Nené/ATT/Portugal/83
José Augusto/ATT/Portugal/84
Simão/ATT/Portugal/83
Jonas/ATT/Brésil/81
António Simões/ATT/Portugal/84
José Torres/ATT/Portugal/83
Óscar Cardozo/ATT/Paraguay/79
Nuno Gomes/ATT/Portugal/81
`},
{id:"porto",name:"Légendes du FC Porto",cat:"clubs",sub:"Portugal",club:"Porto",raw:`
Vítor Baía/G/Portugal/87
Diogo Costa/G/Portugal/85
Iker Casillas/G/Espagne/92
Helton/G/Brésil/80
Józef Młynarczyk/G/Pologne/80
Nuno Espírito Santo/G/Portugal/70
João Pinto/DEF/Portugal/83
Pepe/DEF/Portugal/87
Ricardo Carvalho/DEF/Portugal/87
Jorge Costa/DEF/Portugal/83
Bruno Alves/DEF/Portugal/81
Aloísio/DEF/Brésil/78
Alex Sandro/DEF/Brésil/81
Alex Telles/DEF/Brésil/79
Paulo Ferreira/DEF/Portugal/80
Fernando Couto/DEF/Portugal/82
Iván Marcano/DEF/Espagne/76
Lima Pereira/DEF/Portugal/77
Nuno Valente/DEF/Portugal/78
Deco/MIL/Portugal/88
João Moutinho/MIL/Portugal/83
Lucho González/MIL/Argentine/80
Maniche/MIL/Portugal/82
Costinha/MIL/Portugal/80
Rui Barros/MIL/Portugal/79
Raul Meireles/MIL/Portugal/80
Héctor Herrera/MIL/Mexique/79
Sérgio Conceição/MIL/Portugal/81
Otávio/MIL/Portugal/80
Jaime Magalhães/MIL/Portugal/77
Fernando Gomes/ATT/Portugal/87
Mário Jardel/ATT/Brésil/84
Radamel Falcao/ATT/Colombie/87
Rabah Madjer/ATT/Algérie/87
Hulk/ATT/Brésil/82
Jackson Martínez/ATT/Colombie/81
James Rodríguez/ATT/Colombie/85
Ricardo Quaresma/ATT/Portugal/82
Lisandro López/ATT/Argentine/79
Mehdi Taremi/ATT/Iran/80
`},
{id:"sporting",name:"Légendes du Sporting",cat:"clubs",sub:"Portugal",club:"Sporting CP",raw:`
Vítor Damas/G/Portugal/84
Rui Patrício/G/Portugal/83
Peter Schmeichel/G/Danemark/92
Ricardo/G/Portugal/80
Tomislav Ivković/G/Yougoslavie/77
Antonio Adán/G/Espagne/74
Hilário/DEF/Portugal/80
Sebastián Coates/DEF/Uruguay/79
Gonçalo Inácio/DEF/Portugal/81
Pedro Porro/DEF/Espagne/81
Nuno Mendes/DEF/Portugal/86
Marcos Acuña/DEF/Argentine/79
Anderson Polga/DEF/Brésil/76
Jérémy Mathieu/DEF/France/79
Ousmane Diomande/DEF/Côte d'Ivoire/80
Beto/DEF/Portugal/76
Tonel/DEF/Portugal/74
Daniel Carriço/DEF/Portugal/74
Bruno Fernandes/MIL/Portugal/88
Krasimir Balakov/MIL/Bulgarie/82
João Moutinho/MIL/Portugal/83
William Carvalho/MIL/Portugal/80
Pedro Gonçalves/MIL/Portugal/81
Pedro Barbosa/MIL/Portugal/79
Morten Hjulmand/MIL/Danemark/81
Adrien Silva/MIL/Portugal/78
João Palhinha/MIL/Portugal/81
Oceano/MIL/Portugal/77
João Mário/MIL/Portugal/78
Fernando Peyroteo/ATT/Portugal/86
Héctor Yazalde/ATT/Argentine/84
Viktor Gyökeres/ATT/Suède/84
Cristiano Ronaldo/ATT/Portugal/98
Luís Figo/ATT/Portugal/92
Manuel Fernandes/ATT/Portugal/82
Liedson/ATT/Brésil/80
José Travassos/ATT/Portugal/82
Rui Jordão/ATT/Portugal/83
Mário Jardel/ATT/Brésil/84
Jesus Correia/ATT/Portugal/80
`}
);
Object.assign(window.CLUB_COLORS,{
"PSG":["#004170","#DA291C"],
"Marseille":["#FFFFFF","#2FAEE0"],
"Lyon":["#FFFFFF","#DA001A"],
"Saint-Étienne":["#00A650","#FFFFFF"],
"Monaco":["#E30613","#FFFFFF"],
"Bordeaux":["#14213D","#FFFFFF"],
"Nantes":["#FCD405","#00873E"],
"Lille":["#E01E13","#1A2C5B"],
"Lens":["#FFD700","#E30613"],
"Benfica":["#E30613","#FFFFFF"],
"Porto":["#0050A0","#FFFFFF"],
"Sporting CP":["#008057","#FFFFFF"]
});

/* ---- clubs_monde.js ---- */
// Packs « légendes de club » : Amérique du Sud, Afrique du Nord, Turquie, Mexique
window.FOOT_PACKS.push(
{id:"boca",name:"Légendes de Boca Juniors",cat:"clubs",sub:"Argentine",club:"Boca Juniors",raw:`
Juan Román Riquelme/MIL/Argentine/88
Diego Maradona/MIL/Argentine/99
Martín Palermo/ATT/Argentine/83
Carlos Tevez/ATT/Argentine/86
Hugo Gatti/G/Argentine/84
Antonio Rattín/MIL/Argentine/84
Silvio Marzolini/DEF/Argentine/85
Guillermo Barros Schelotto/ATT/Argentine/82
Francisco Varallo/ATT/Argentine/82
Antonio Roma/G/Argentine/82
Óscar Córdoba/G/Colombie/82
Roberto Abbondanzieri/G/Argentine/80
Roberto Cherro/ATT/Argentine/81
Ángel Clemente Rojas/ATT/Argentine/81
Walter Samuel/DEF/Argentine/85
Sebastián Battaglia/MIL/Argentine/78
Jorge Bermúdez/DEF/Colombie/78
Hugo Ibarra/DEF/Argentine/77
Roberto Mouzo/DEF/Argentine/77
Mauricio Serna/MIL/Colombie/77
Fernando Gago/MIL/Argentine/79
Carlos Navarro Montoya/G/Colombie/78
Marcelo Delgado/ATT/Argentine/77
Claudio Caniggia/ATT/Argentine/83
Rolando Schiavi/DEF/Argentine/76
Rodrigo Palacio/ATT/Argentine/80
Darío Benedetto/ATT/Argentine/77
Edinson Cavani/ATT/Uruguay/88
Jaime Sarlanga/ATT/Argentine/76
Ernesto Grillo/MIL/Argentine/79
Nicolás Burdisso/DEF/Argentine/78
Rodolfo Arruabarrena/DEF/Argentine/75
Marcos Rojo/DEF/Argentine/76
Diego Cagna/MIL/Argentine/75
Sergio Romero/G/Argentine/77
Clemente Rodríguez/DEF/Argentine/75
Frank Fabra/DEF/Colombie/75
Ever Banega/MIL/Argentine/81
Agustín Orión/G/Argentine/74
Cristian Pavón/ATT/Argentine/75
Alberto Márcico/MIL/Argentine/79
`},
{id:"river",name:"Légendes de River Plate",cat:"clubs",sub:"Argentine",club:"River Plate",raw:`
Ángel Labruna/ATT/Argentine/90
Daniel Passarella/DEF/Argentine/90
Enzo Francescoli/ATT/Uruguay/89
Amadeo Carrizo/G/Argentine/88
Ubaldo Fillol/G/Argentine/88
Norberto Alonso/MIL/Argentine/85
Alfredo Di Stéfano/ATT/Argentine/97
Adolfo Pedernera/ATT/Argentine/90
José Manuel Moreno/ATT/Argentine/89
Ariel Ortega/MIL/Argentine/84
Marcelo Gallardo/MIL/Argentine/81
Ramón Díaz/ATT/Argentine/82
Pablo Aimar/MIL/Argentine/84
Franco Armani/G/Argentine/80
Néstor Rossi/MIL/Argentine/84
Marcelo Salas/ATT/Chili/85
Oscar Ruggeri/DEF/Argentine/84
Roberto Perfumo/DEF/Argentine/85
Hernán Crespo/ATT/Argentine/86
Javier Saviola/ATT/Argentine/82
Julián Álvarez/ATT/Argentine/86
Félix Loustau/ATT/Argentine/82
Andrés D'Alessandro/MIL/Argentine/81
Leonardo Astrada/MIL/Argentine/79
Fernando Cavenaghi/ATT/Argentine/77
Javier Mascherano/MIL/Argentine/86
Leonardo Ponzio/MIL/Argentine/77
Enzo Pérez/MIL/Argentine/78
Matías Almeyda/MIL/Argentine/80
Celso Ayala/DEF/Paraguay/76
Marcelo Barovero/G/Argentine/77
Nery Pumpido/G/Argentine/79
Hernán Díaz/DEF/Argentine/78
Martín Demichelis/DEF/Argentine/80
Jonatan Maidana/DEF/Argentine/76
Germán Burgos/G/Argentine/76
Enzo Fernández/MIL/Argentine/84
Gonzalo Montiel/DEF/Argentine/76
Javier Pinola/DEF/Argentine/75
Milton Casco/DEF/Argentine/74`},
{id:"santos",name:"Légendes de Santos",cat:"clubs",sub:"Brésil",club:"Santos",raw:`
Pelé/ATT/Brésil/99
Neymar/ATT/Brésil/91
Carlos Alberto Torres/DEF/Brésil/91
Coutinho/ATT/Brésil/86
Zito/MIL/Brésil/85
Gilmar/G/Brésil/87
Pepe/ATT/Brésil/87
Mauro Ramos/DEF/Brésil/82
Robinho/ATT/Brésil/84
Clodoaldo/MIL/Brésil/83
Diego/MIL/Brésil/80
Paulo Henrique Ganso/MIL/Brésil/78
Dorval/ATT/Brésil/79
Edu/ATT/Brésil/78
Mengálvio/MIL/Brésil/76
Djalma Dias/DEF/Brésil/80
Rodolfo Rodríguez/G/Uruguay/81
Giovanni/MIL/Brésil/80
Toninho Guerreiro/ATT/Brésil/76
Serginho Chulapa/ATT/Brésil/78
Rodrygo/ATT/Brésil/84
Lima/MIL/Brésil/77
Elano/MIL/Brésil/78
José Ramos Delgado/DEF/Argentine/79
Agustín Cejas/G/Argentine/79
Juary/ATT/Brésil/73
Ricardo Oliveira/ATT/Brésil/75
Dalmo/DEF/Brésil/74
Léo/DEF/Brésil/74
Alex/DEF/Brésil/80
Edu Dracena/DEF/Brésil/74
Renato/MIL/Brésil/74
Fábio Costa/G/Brésil/72
Arouca/MIL/Brésil/75
Zé Roberto/MIL/Brésil/83
Rafael Cabral/G/Brésil/70
Vanderlei/G/Brésil/68
Durval/DEF/Brésil/72
Lucas Veríssimo/DEF/Brésil/74
Aranha/G/Brésil/72`},
{id:"flamengo",name:"Légendes de Flamengo",cat:"clubs",sub:"Brésil",club:"Flamengo",raw:`
Zico/MIL/Brésil/94
Júnior/DEF/Brésil/88
Zizinho/MIL/Brésil/90
Leandro/DEF/Brésil/84
Gabriel Barbosa/ATT/Brésil/80
Romário/ATT/Brésil/93
Leônidas da Silva/ATT/Brésil/90
Giorgian de Arrascaeta/MIL/Uruguay/82
Adílio/MIL/Brésil/82
Bebeto/ATT/Brésil/86
Bruno Henrique/ATT/Brésil/80
Dida/ATT/Brésil/85
Andrade/MIL/Brésil/80
Dejan Petković/MIL/Serbie/78
Éverton Ribeiro/MIL/Brésil/78
Adriano/ATT/Brésil/86
Nunes/ATT/Brésil/74
Pedro/ATT/Brésil/80
Domingos da Guia/DEF/Brésil/87
Júlio César/G/Brésil/85
Mozer/DEF/Brésil/81
Rondinelli/DEF/Brésil/77
Filipe Luís/DEF/Brésil/83
Gerson/MIL/Brésil/78
Raul Plassmann/G/Brésil/77
Aldair/DEF/Brésil/86
Léo Moura/DEF/Brésil/74
Rafinha/DEF/Brésil/79
Tita/MIL/Brésil/77
Zinho/MIL/Brésil/79
Ronaldinho/ATT/Brésil/94
Diego Alves/G/Brésil/78
Juan/DEF/Brésil/80
Agustín Rossi/G/Argentine/76
Léo Pereira/DEF/Brésil/75
Zé Carlos/G/Brésil/70
Cantarele/G/Brésil/77`},
{id:"saopaulo",name:"Légendes de São Paulo",cat:"clubs",sub:"Brésil",club:"São Paulo",raw:`
Rogério Ceni/G/Brésil/84
Raí/MIL/Brésil/85
Careca/ATT/Brésil/87
Cafu/DEF/Brésil/91
Kaká/MIL/Brésil/92
Leônidas da Silva/ATT/Brésil/90
Luís Fabiano/ATT/Brésil/83
Müller/ATT/Brésil/80
Serginho Chulapa/ATT/Brésil/78
Zetti/G/Brésil/79
Pedro Rocha/MIL/Uruguay/85
Diego Lugano/DEF/Uruguay/80
Darío Pereyra/DEF/Uruguay/82
Hernanes/MIL/Brésil/80
Miranda/DEF/Brésil/82
Oscar/DEF/Brésil/79
Pita/MIL/Brésil/74
Toninho Cerezo/MIL/Brésil/83
Gérson/MIL/Brésil/88
França/ATT/Brésil/77
Lucas Moura/ATT/Brésil/80
Waldir Peres/G/Brésil/77
Mauro Ramos/DEF/Brésil/82
De Sordi/DEF/Brésil/78
Leonardo/DEF/Brésil/82
Mineiro/MIL/Brésil/75
Amoroso/ATT/Brésil/82
Palhinha/ATT/Brésil/75
Denílson/ATT/Brésil/79
Ronaldão/DEF/Brésil/74
Josué/MIL/Brésil/74
Danilo/MIL/Brésil/80
Gilmar Rinaldi/G/Brésil/74
José Poy/G/Argentine/76
Fabão/DEF/Brésil/70
Robert Arboleda/DEF/Équateur/75
Ricardinho/MIL/Brésil/75
Jonathan Calleri/ATT/Argentine/76
Tiago Volpi/G/Brésil/72`},
{id:"alahly",name:"Légendes d'Al Ahly",cat:"clubs",sub:"Égypte",club:"Al Ahly",raw:`
Mohamed Aboutrika/MIL/Égypte/85
Mahmoud El Khatib/ATT/Égypte/84
Essam El Hadary/G/Égypte/84
Saleh Selim/MIL/Égypte/81
Thabet El-Batal/G/Égypte/79
Mokhtar El Tetsh/ATT/Égypte/80
Wael Gomaa/DEF/Égypte/79
Taher Abouzeid/MIL/Égypte/78
Hossam Hassan/ATT/Égypte/82
Mohamed El Shenawy/G/Égypte/79
Ahmed Shobair/G/Égypte/78
Mohamed Barakat/MIL/Égypte/78
Emad Moteab/ATT/Égypte/78
Ahmed Fathy/DEF/Égypte/77
Flávio Amado/ATT/Angola/77
Shady Mohamed/DEF/Égypte/75
Ibrahim Hassan/DEF/Égypte/77
Ali Maâloul/DEF/Tunisie/76
Hossam Ashour/MIL/Égypte/74
Ahmed Hassan/MIL/Égypte/82
Ekramy El-Shahat/G/Égypte/76
Mohamed Abdelwahab/DEF/Égypte/75
Sayed Moawad/DEF/Égypte/74
Ahmed Hegazi/DEF/Égypte/77
Ramy Rabia/DEF/Égypte/75
Hossam Ghaly/MIL/Égypte/75
Amr El Solia/MIL/Égypte/73
Abdallah El Said/MIL/Égypte/76
Afsha/MIL/Égypte/76
Mahmoud Trezeguet/ATT/Égypte/77
Sherif Ekramy/G/Égypte/73
Emam Ashour/MIL/Égypte/77
Mohamed Shawky/MIL/Égypte/76
Mohamed Hany/DEF/Égypte/74
Percy Tau/ATT/Afrique du Sud/75
Hussein El Shahat/ATT/Égypte/74
Ahmed Belal/ATT/Égypte/72
Moamen Zakaria/MIL/Égypte/73
Rabie Yassin/DEF/Égypte/74
Mohamed Sherif/ATT/Égypte/73`},
{id:"zamalek",name:"Légendes du Zamalek",cat:"clubs",sub:"Égypte",club:"Zamalek",raw:`
Hassan Shehata/ATT/Égypte/80
Farouk Gaafar/MIL/Égypte/77
Hossam Hassan/ATT/Égypte/82
Hazem Emam/MIL/Égypte/78
Shikabala/ATT/Égypte/78
Hussein Hegazi/ATT/Égypte/78
Abdel-Wahed El-Sayed/G/Égypte/76
Abdel Halim Ali/ATT/Égypte/74
Amr Zaki/ATT/Égypte/78
Emmanuel Amuneke/ATT/Nigeria/79
Gamal Abdel-Hamid/MIL/Égypte/75
Adel El-Maamour/G/Égypte/73
Tamer Abdel Hamid/MIL/Égypte/73
Ayman Abdelaziz/MIL/Égypte/74
Emam Ashour/MIL/Égypte/77
Zizo/ATT/Égypte/77
Mido/ATT/Égypte/77
Ashraf Kasem/DEF/Égypte/74
Nader El-Sayed/G/Égypte/76
Mohamed Abou Gabal/G/Égypte/74
Hesham Yakan/DEF/Égypte/73
Tarek Hamed/MIL/Égypte/74
Mostafa Mohamed/ATT/Égypte/76
Medhat Abdel-Hady/DEF/Égypte/73
Mohamed Abdel Shafy/DEF/Égypte/74
Tarek El-Sayed/DEF/Égypte/73
Ferjani Sassi/MIL/Tunisie/75
Abdallah El Said/MIL/Égypte/76
Ali Khalil/ATT/Égypte/72
Mahmoud Fathalla/DEF/Égypte/74
Omar Gaber/DEF/Égypte/72
Achraf Bencharki/ATT/Maroc/72
Besheer El-Tabei/DEF/Égypte/70
Mahmoud Alaa/DEF/Égypte/71
Ahmed Abou El Fotouh/DEF/Égypte/69
Mahmoud Genesh/G/Égypte/71
Mohamed Awad/G/Égypte/70
Ismail Youssef/MIL/Égypte/75
`},
{id:"esperance",name:"Légendes de l'Espérance de Tunis",cat:"clubs",sub:"Tunisie",club:"Espérance",raw:`
Tarek Dhiab/MIL/Tunisie/86
Chokri El Ouaer/G/Tunisie/80
Youssef Msakni/ATT/Tunisie/80
Khaled Ben Yahia/DEF/Tunisie/76
Youcef Belaïli/ATT/Algérie/78
Nabil Maâloul/MIL/Tunisie/74
Oussama Darragi/MIL/Tunisie/74
Moez Ben Cherifia/G/Tunisie/72
Radhi Jaïdi/DEF/Tunisie/76
Khaled Badra/DEF/Tunisie/75
Anice Badri/ATT/Tunisie/73
Ali Zitouni/ATT/Tunisie/74
Khaled Korbi/MIL/Tunisie/70
Moïne Chaâbani/MIL/Tunisie/70
Ghailene Chaalali/MIL/Tunisie/74
Mohamed Ali Ben Romdhane/MIL/Tunisie/75
Michael Eneramo/ATT/Nigeria/70
Taha Yassine Khenissi/ATT/Tunisie/71
Harrison Afful/DEF/Ghana/72
Khalil Chemmam/DEF/Tunisie/71
Bechir Ben Saïd/G/Tunisie/72
Mejdi Traoui/MIL/Tunisie/70
Franck Kom/MIL/Cameroun/68
Fousseny Coulibaly/MIL/Côte d'Ivoire/68
Saad Bguir/MIL/Tunisie/69
Yannick N'Djeng/ATT/Cameroun/70
Walid Hichri/DEF/Tunisie/68
Sameh Derbali/DEF/Tunisie/67
Rami Jridi/G/Tunisie/68
Chamseddine Dhaouadi/DEF/Tunisie/72
Mohamed Ali Yacoubi/DEF/Tunisie/68
Iheb Mbarki/DEF/Tunisie/68
Mohamed Amine Ben Hmida/DEF/Tunisie/68
Kenneth Malitoli/ATT/Zambie/71
Fakhreddine Ben Youssef/ATT/Tunisie/71
Dramane Traoré/ATT/Mali/70
Hichem Belkaroui/DEF/Algérie/68
Hamza Rafia/MIL/Tunisie/71
Haythem Jouini/ATT/Tunisie/69
Amenallah Memmiche/G/Tunisie/74`},
{id:"raja",name:"Légendes du Raja Casablanca",cat:"clubs",sub:"Maroc",club:"Raja Casablanca",raw:`
Abdelmajid Dolmy/MIL/Maroc/84
Mustapha Chadli/G/Maroc/72
Saïd Ghandi/ATT/Maroc/74
Mohsine Moutouali/MIL/Maroc/72
Soufiane Rahimi/ATT/Maroc/75
Khalid Fouhami/G/Maroc/72
Abdelilah Fahmi/DEF/Maroc/68
Talal El Karkouri/DEF/Maroc/74
Abdelilah Hafidi/MIL/Maroc/70
Salaheddine Bassir/ATT/Maroc/75
Anas Zniti/G/Maroc/72
Badr Benoun/DEF/Maroc/72
Mohamed Oulhaj/DEF/Maroc/69
Youssef Safri/MIL/Maroc/72
Jamal Sellami/MIL/Maroc/71
Mouhcine Iajour/ATT/Maroc/70
Jawad El Yamiq/DEF/Maroc/70
Youssef Rossi/DEF/Maroc/72
Mahmoud Benhalib/ATT/Maroc/70
Ben Malango/ATT/RD Congo/72
Mustapha Bidoudane/ATT/Maroc/70
Mustapha Khalif/MIL/Maroc/66
Bouchaib El Moubarki/ATT/Maroc/70
Soufiane Alloudi/ATT/Maroc/68
Tarik El Jarmouni/G/Maroc/67
Khalid Askri/G/Maroc/68
Omar Najdi/MIL/Maroc/64
Zakaria Hadraf/MIL/Maroc/67
Marouane Zemmama/MIL/Maroc/68
Hicham Aboucherouane/ATT/Maroc/67
Abdeljalil Jbira/DEF/Maroc/66
Marouane Hadhoudi/DEF/Maroc/64
Abderrahim Achchakir/DEF/Maroc/66
Fabrice Ngah/MIL/Cameroun/66
Abdelkabir El Ouadi/ATT/Maroc/65
Omar Boutayeb/DEF/Maroc/64
Michel Babatunde/MIL/Nigeria/65
El Mehdi Al Harrar/G/Maroc/64`},
{id:"wydad",name:"Légendes du Wydad Casablanca",cat:"clubs",sub:"Maroc",club:"Wydad Casablanca",raw:`
Badou Zaki/G/Maroc/86
Noureddine Naybet/DEF/Maroc/86
Yassine Bounou/G/Maroc/85
Aziz Bouderbala/MIL/Maroc/82
Rachid Daoudi/MIL/Maroc/76
Hassan Nader/ATT/Maroc/78
Ayoub El Kaabi/ATT/Maroc/78
Nadir Lamyaghri/G/Maroc/73
Achraf Dari/DEF/Maroc/72
Yahya Jabrane/MIL/Maroc/70
Reda Tagnaouti/G/Maroc/72
Walid El Karti/MIL/Maroc/69
Yahia Attiat-Allah/DEF/Maroc/71
Ismail Haddad/ATT/Maroc/70
Mohamed Nahiri/DEF/Maroc/69
Badr El Kaddouri/DEF/Maroc/72
Ayman El Hassouni/MIL/Maroc/70
Abdellatif Noussir/DEF/Maroc/68
Malick Evouna/ATT/Gabon/68
Mohamed Ounajem/ATT/Maroc/69
Abdelilah Amimi/DEF/Maroc/66
Ayoub El Amloud/DEF/Maroc/67
Hassan Benabicha/MIL/Maroc/70
William Jebor/ATT/Liberia/68
Mustapha Bidoudane/ATT/Maroc/70
Zouheir Laâroubi/G/Maroc/67
Salaheddine Saidi/DEF/Maroc/64
Cheick Comara/DEF/Côte d'Ivoire/67
Guy Mbenza/ATT/Congo/70
Reda Hajhouj/ATT/Maroc/66
Fabrice Ondama/ATT/Congo/70
Mehdi Benabid/G/Maroc/68
Badie Aouk/MIL/Maroc/66
Jean-Jacques Gosso/MIL/Côte d'Ivoire/70
Amine Atouchi/MIL/Maroc/66
Bouly Sambou/ATT/Sénégal/70
Brahim Nakach/MIL/Maroc/67
`},
{id:"jsk",name:"Légendes de la JS Kabylie",cat:"clubs",sub:"Algérie",club:"JS Kabylie",raw:`
Ali Fergani/MIL/Algérie/79
Djamel Menad/ATT/Algérie/78
Moussa Saïb/MIL/Algérie/78
Mouloud Iboud/DEF/Algérie/72
Nacer Bouiche/ATT/Algérie/73
Mourad Amara/G/Algérie/72
Mehdi Cerbah/G/Algérie/70
Lounès Gaouaoui/G/Algérie/72
Abdelhamid Sadmi/DEF/Algérie/75
Mohand Chérif Hannachi/MIL/Algérie/72
Faouzi Chaouchi/G/Algérie/73
Slimane Raho/DEF/Algérie/69
Hakim Medane/MIL/Algérie/72
Ryad Boudebouz/MIL/Algérie/74
Farid Ghazi/ATT/Algérie/70
Hamid Berguiga/ATT/Algérie/66
Essaïd Belkalem/DEF/Algérie/70
Albert Ebossé Bodjongo/ATT/Cameroun/66
Abdelaziz Benhamlat/DEF/Algérie/68
Fawzi Moussouni/ATT/Algérie/68
Billel Messaoudi/ATT/Algérie/67
Larbi El Hadi/G/Algérie/68
Mohamed Rabie Meftah/DEF/Algérie/68
Lamara Douicher/MIL/Algérie/66
Rezki Hamroune/MIL/Algérie/66
Nabil Hemani/ATT/Algérie/67
Cheick Oumar Dabo/ATT/Mali/66
Brahim Zafour/DEF/Algérie/66
Ali Rial/DEF/Algérie/64
Rezki Amrouche/DEF/Algérie/64
Rédha Bensayah/MIL/Algérie/64
Abderrazak Djahnit/ATT/Algérie/68
Abderrazak Harb/G/Algérie/64
Badreddine Souyad/MIL/Algérie/63
Abdelkrim Namani/MIL/Algérie/66
`},
{id:"mca",name:"Légendes du MC Alger",cat:"clubs",sub:"Algérie",club:"MC Alger",raw:`
Ali Bencheikh/MIL/Algérie/79
Zoubir Bachi/ATT/Algérie/74
Omar Betrouni/ATT/Algérie/72
Youcef Belaïli/ATT/Algérie/78
Abdelouahab Maïche/MIL/Algérie/70
Hadj Bouguèche/ATT/Algérie/72
Rafik Saïfi/ATT/Algérie/75
Faouzi Chaouchi/G/Algérie/73
Abdesslem Bousri/ATT/Algérie/67
Noureddine Daham/ATT/Algérie/68
Farouk Chafaï/DEF/Algérie/69
Hamza Koudri/MIL/Algérie/68
Abdelmoumene Djabou/MIL/Algérie/73
Kamel Kaci-Saïd/MIL/Algérie/72
Fayçal Badji/ATT/Algérie/70
Moustapha Djallit/ATT/Algérie/68
Mohamed Lamine Zemmamouche/G/Algérie/69
Alexis Guendouz/G/Algérie/70
Abderrahmane Hachoud/DEF/Algérie/68
Ayoub Abdellaoui/DEF/Algérie/70
Abdelmalek Cherrad/ATT/Algérie/70
Zakaria Naidji/ATT/Algérie/66
Azzedine Doukha/G/Algérie/70
Réda Babouche/DEF/Algérie/65
Zidane Mebarakou/DEF/Algérie/65
Ismaël Bouzid/DEF/Algérie/68
Sofiane Bendebka/MIL/Algérie/67
Réda Halaïmia/DEF/Algérie/66
Amir Karaoui/MIL/Algérie/66
Mohammed Benkhemassa/MIL/Algérie/68
Abdelatif Ramdane/G/Algérie/66
Chahreddine Boukholda/MIL/Algérie/64
Abdelkader Salhi/G/Algérie/66
Ayoub Ghezala/DEF/Algérie/66
Akram Bouras/MIL/Algérie/66
`},
{id:"galatasaray",name:"Légendes de Galatasaray",cat:"clubs",sub:"Turquie",club:"Galatasaray",raw:`
Gheorghe Hagi/MIL/Roumanie/91
Metin Oktay/ATT/Turquie/85
Hakan Şükür/ATT/Turquie/86
Turgay Şeren/G/Turquie/80
Fernando Muslera/G/Uruguay/82
Bülent Korkmaz/DEF/Turquie/82
Cláudio Taffarel/G/Brésil/84
Gheorghe Popescu/DEF/Roumanie/83
Tanju Çolak/ATT/Turquie/80
Mário Jardel/ATT/Brésil/84
Mauro Icardi/ATT/Argentine/83
Victor Osimhen/ATT/Nigeria/86
Wesley Sneijder/MIL/Pays-Bas/88
Emre Belözoğlu/MIL/Turquie/83
Hasan Şaş/MIL/Turquie/81
Arif Erdem/ATT/Turquie/79
Burak Yılmaz/ATT/Turquie/81
Zoran Simović/G/Yougoslavie/77
Tugay Kerimoğlu/MIL/Turquie/81
Arda Turan/MIL/Turquie/84
Didier Drogba/ATT/Côte d'Ivoire/89
Okan Buruk/MIL/Turquie/78
Ümit Davala/MIL/Turquie/78
Selçuk İnan/MIL/Turquie/77
Fatih Terim/DEF/Turquie/78
Bafétimbi Gomis/ATT/France/78
Felipe Melo/MIL/Brésil/78
Hamit Altıntop/MIL/Turquie/80
Lucas Torreira/MIL/Uruguay/79
Cüneyt Tanman/DEF/Turquie/75
Hakan Ünsal/DEF/Turquie/77
Dries Mertens/ATT/Belgique/84
Hayrettin Demirbaş/G/Turquie/74
Dávinson Sánchez/DEF/Colombie/78
Sabri Sarıoğlu/DEF/Turquie/76
Faryd Mondragón/G/Colombie/78
Servet Çetin/DEF/Turquie/75
Semih Kaya/DEF/Turquie/73
Tomáš Ujfaluši/DEF/Tchéquie/78
Abdülkerim Bardakcı/DEF/Turquie/77`},
{id:"fenerbahce",name:"Légendes de Fenerbahçe",cat:"clubs",sub:"Turquie",club:"Fenerbahçe",raw:`
Lefter Küçükandonyadis/ATT/Turquie/86
Alex de Souza/MIL/Brésil/84
Rüştü Reçber/G/Turquie/85
Aykut Kocaman/ATT/Turquie/80
Volkan Demirel/G/Turquie/79
Can Bartu/ATT/Turquie/82
Emre Belözoğlu/MIL/Turquie/83
Roberto Carlos/DEF/Brésil/92
Cemil Turan/ATT/Turquie/78
Rıdvan Dilmen/MIL/Turquie/78
Diego Lugano/DEF/Uruguay/80
Edin Džeko/ATT/Bosnie-Herzégovine/84
Tuncay Şanlı/ATT/Turquie/80
Dirk Kuyt/ATT/Pays-Bas/80
Youssef En-Nesyri/ATT/Maroc/80
Oğuz Çetin/MIL/Turquie/77
Dušan Tadić/MIL/Serbie/82
Moussa Sow/ATT/Sénégal/79
Robin van Persie/ATT/Pays-Bas/88
Harald Schumacher/G/Allemagne/84
Fred/MIL/Brésil/82
Sebastian Szymański/MIL/Pologne/77
Müjdat Yetkiner/DEF/Turquie/73
Ogün Temizkanoğlu/DEF/Turquie/76
Gökhan Gönül/DEF/Turquie/76
Martin Škrtel/DEF/Slovaquie/80
Mehmet Aurélio/MIL/Turquie/76
Stephen Appiah/MIL/Ghana/80
Mesut Özil/MIL/Allemagne/86
Elvir Bolić/ATT/Bosnie-Herzégovine/75
Semih Şentürk/ATT/Turquie/76
Dominik Livaković/G/Croatie/80
Önder Turacı/DEF/Turquie/74
Mehmet Topal/MIL/Turquie/76
Simon Kjær/DEF/Danemark/81
Joseph Yobo/DEF/Nigeria/77
Caner Erkin/DEF/Turquie/74
Selçuk Şahin/MIL/Turquie/72
Engin İpekoğlu/G/Turquie/72
İrfan Can Eğribayat/G/Turquie/72`},
{id:"america",name:"Légendes du Club América",cat:"clubs",sub:"Mexique",club:"Club América",raw:`
Cuauhtémoc Blanco/ATT/Mexique/82
Carlos Reinoso/MIL/Chili/80
Guillermo Ochoa/G/Mexique/80
Enrique Borja/ATT/Mexique/77
Cristóbal Ortega/MIL/Mexique/76
Alfredo Tena/DEF/Mexique/78
Salvador Cabañas/ATT/Paraguay/79
Zague/ATT/Mexique/72
Oribe Peralta/ATT/Mexique/76
Héctor Miguel Zelada/G/Argentine/79
Antônio Carlos Santos/MIL/Brésil/76
Pável Pardo/MIL/Mexique/77
Edson Álvarez/DEF/Mexique/78
Henry Martín/ATT/Mexique/74
François Omam-Biyik/ATT/Cameroun/78
Iván Zamorano/ATT/Chili/85
Christian Benítez/ATT/Équateur/78
Duilio Davino/DEF/Mexique/72
Paul Aguilar/DEF/Mexique/71
Álvaro Fidalgo/MIL/Espagne/75
Kalusha Bwalya/ATT/Zambie/81
Carlos Hermosillo/ATT/Mexique/76
Adrián Chávez/G/Mexique/72
Agustín Marchesín/G/Argentine/77
Miguel Layún/DEF/Mexique/74
Aquivaldo Mosquera/DEF/Colombie/73
Germán Villa/MIL/Mexique/72
Rubens Sambueza/MIL/Argentine/75
Diego Valdés/MIL/Chili/75
Moisés Muñoz/G/Mexique/70
Luis Ángel Malagón/G/Mexique/72
Pablo Aguilar/DEF/Paraguay/72
Raúl Jiménez/ATT/Mexique/78
Darío Benedetto/ATT/Argentine/77
Isaac Terrazas/DEF/Mexique/68
Bruno Valdez/DEF/Paraguay/72
Jorge Sánchez/DEF/Mexique/70
Richard Sánchez/MIL/Paraguay/72
Kevin Álvarez/DEF/Mexique/68
Sebastián Córdova/MIL/Mexique/70
`}
);
Object.assign(window.CLUB_COLORS,{"Boca Juniors":["#003C8F","#FCD116"],"River Plate":["#FFFFFF","#E30613"],"Santos":["#FFFFFF","#000000"],"Flamengo":["#C8102E","#000000"],"São Paulo":["#FFFFFF","#E30613"],"Al Ahly":["#C8102E","#FFFFFF"],"Zamalek":["#FFFFFF","#E30613"],"Espérance":["#C8102E","#FFD700"],"Raja Casablanca":["#00843D","#FFFFFF"],"Wydad Casablanca":["#D50000","#FFFFFF"],"JS Kabylie":["#FFD700","#00843D"],"MC Alger":["#C8102E","#00843D"],"Galatasaray":["#A90432","#FDB912"],"Fenerbahçe":["#002D72","#FFED00"],"Club América":["#FFD200","#002D72"]});

/* ---- nations_afrique.js ---- */
window.FOOT_PACKS.push(
{id:"mar",name:"Légendes du Maroc",cat:"nations",sub:"Afrique",raw:`
Yassine Bounou/G/Séville/Maroc/85
Badou Zaki/G/Majorque/Maroc/86
Nadir Lamyaghri/G/Wydad/Maroc/73
Khalid Fouhami/G/Raja/Maroc/72
Munir Mohamedi/G/Numancia/Maroc/72
Achraf Hakimi/DEF/PSG/Maroc/87
Noureddine Naybet/DEF/La Corogne/Maroc/86
Mehdi Benatia/DEF/Roma/Maroc/84
Romain Saïss/DEF/Wolverhampton/Maroc/77
Nayef Aguerd/DEF/West Ham/Maroc/79
Noussair Mazraoui/DEF/Ajax/Maroc/80
Abdeslam Ouaddou/DEF/Valenciennes/Maroc/72
Talal El Karkouri/DEF/Charlton/Maroc/74
Badr El Kaddouri/DEF/Dynamo Kiev/Maroc/72
Achraf Dari/DEF/Brest/Maroc/72
Mohamed Timoumi/MIL/FAR Rabat/Maroc/85
Mustapha Hadji/MIL/La Corogne/Maroc/83
Abdelmajid Dolmy/MIL/Raja/Maroc/84
Hakim Ziyech/MIL/Ajax/Maroc/84
Sofyan Amrabat/MIL/Fiorentina/Maroc/81
Azzedine Ounahi/MIL/Angers/Maroc/78
Mbark Boussoufa/MIL/Anderlecht/Maroc/77
Houssine Kharja/MIL/Sienne/Maroc/74
Younès Belhanda/MIL/Montpellier/Maroc/77
Aziz Bouderbala/MIL/Sion/Maroc/82
Youssef Chippo/MIL/Coventry/Maroc/73
Selim Amallah/MIL/Standard/Maroc/72
Bilal El Khannouss/MIL/Genk/Maroc/77
Ahmed Faras/ATT/Chabab Mohammédia/Maroc/85
Youssef En-Nesyri/ATT/Séville/Maroc/80
Brahim Díaz/ATT/Real Madrid/Maroc/82
Marouane Chamakh/ATT/Bordeaux/Maroc/79
Salaheddine Bassir/ATT/La Corogne/Maroc/75
Youssef Hadji/ATT/Nancy/Maroc/72
Youssef El-Arabi/ATT/Grenade/Maroc/75
Ayoub El Kaabi/ATT/Olympiakos/Maroc/78
Nordin Amrabat/ATT/Galatasaray/Maroc/76`},
{id:"sen",name:"Légendes du Sénégal",cat:"nations",sub:"Afrique",raw:`
Édouard Mendy/G/Chelsea/Sénégal/83
Tony Sylva/G/Monaco/Sénégal/76
Abdoulaye Diallo/G/Rennes/Sénégal/71
Seny Dieng/G/QPR/Sénégal/72
Alfred Gomis/G/Rennes/Sénégal/72
Khadim N'Diaye/G/Horoya/Sénégal/70
Kalidou Koulibaly/DEF/Naples/Sénégal/86
Lamine Diatta/DEF/Rennes/Sénégal/77
Ferdinand Coly/DEF/Lens/Sénégal/75
Omar Daf/DEF/Sochaux/Sénégal/74
Habib Beye/DEF/Marseille/Sénégal/77
Souleymane Diawara/DEF/Bordeaux/Sénégal/77
Roger Mendy/DEF/Monaco/Sénégal/78
Youssouf Sabaly/DEF/Betis/Sénégal/74
Abdou Diallo/DEF/PSG/Sénégal/74
Moussa Niakhaté/DEF/Nottingham Forest/Sénégal/77
Kara Mbodj/DEF/Anderlecht/Sénégal/74
Ismail Jakobs/DEF/Monaco/Sénégal/74
Khalilou Fadiga/MIL/Auxerre/Sénégal/81
Papa Bouba Diop/MIL/Fulham/Sénégal/79
Idrissa Gana Gueye/MIL/Everton/Sénégal/82
Aliou Cissé/MIL/Montpellier/Sénégal/77
Salif Diao/MIL/Liverpool/Sénégal/74
Cheikhou Kouyaté/MIL/West Ham/Sénégal/77
Pape Matar Sarr/MIL/Tottenham/Sénégal/79
Pape Gueye/MIL/Marseille/Sénégal/77
Nampalys Mendy/MIL/Leicester/Sénégal/74
Lamine Camara/MIL/Monaco/Sénégal/77
Sadio Mané/ATT/Liverpool/Sénégal/89
El Hadji Diouf/ATT/Lens/Sénégal/81
Jules Bocandé/ATT/Metz/Sénégal/81
Henri Camara/ATT/Wigan/Sénégal/77
Mamadou Niang/ATT/Marseille/Sénégal/80
Demba Ba/ATT/Newcastle/Sénégal/80
Papiss Cissé/ATT/Newcastle/Sénégal/78
Moussa Sow/ATT/Lille/Sénégal/79
Ismaïla Sarr/ATT/Watford/Sénégal/80
Nicolas Jackson/ATT/Chelsea/Sénégal/78
Iliman Ndiaye/ATT/Everton/Sénégal/78
Boulaye Dia/ATT/Reims/Sénégal/76`},
{id:"civ",name:"Légendes de la Côte d'Ivoire",cat:"nations",sub:"Afrique",raw:`
Boubacar Barry/G/Lokeren/Côte d'Ivoire/74
Alain Gouaméné/G/ASEC Mimosas/Côte d'Ivoire/74
Jean-Jacques Tizié/G/Espérance/Côte d'Ivoire/74
Gérard Gnanhouan/G/Guingamp/Côte d'Ivoire/70
Sylvain Gbohouo/G/TP Mazembe/Côte d'Ivoire/72
Yahia Fofana/G/Angers/Côte d'Ivoire/73
Kolo Touré/DEF/Arsenal/Côte d'Ivoire/84
Emmanuel Eboué/DEF/Arsenal/Côte d'Ivoire/78
Siaka Tiéné/DEF/Valenciennes/Côte d'Ivoire/75
Arthur Boka/DEF/Stuttgart/Côte d'Ivoire/74
Sol Bamba/DEF/Cardiff/Côte d'Ivoire/73
Cyril Domoraud/DEF/Marseille/Côte d'Ivoire/73
Abdoulaye Méïté/DEF/Marseille/Côte d'Ivoire/74
Serge Aurier/DEF/PSG/Côte d'Ivoire/80
Éric Bailly/DEF/Manchester United/Côte d'Ivoire/78
Evan Ndicka/DEF/Roma/Côte d'Ivoire/79
Odilon Kossounou/DEF/Leverkusen/Côte d'Ivoire/78
Wilfried Singo/DEF/Torino/Côte d'Ivoire/76
Yaya Touré/MIL/Manchester City/Côte d'Ivoire/90
Didier Zokora/MIL/Tottenham/Côte d'Ivoire/79
Cheick Tioté/MIL/Newcastle/Côte d'Ivoire/79
Franck Kessié/MIL/Milan/Côte d'Ivoire/82
Jean Michaël Seri/MIL/Nice/Côte d'Ivoire/78
Seko Fofana/MIL/Lens/Côte d'Ivoire/80
Ibrahim Sangaré/MIL/PSV/Côte d'Ivoire/80
Romaric/MIL/Le Mans/Côte d'Ivoire/74
Serey Dié/MIL/Bâle/Côte d'Ivoire/74
Youssouf Fofana/MIL/Monaco/Côte d'Ivoire/80
Didier Drogba/ATT/Chelsea/Côte d'Ivoire/89
Laurent Pokou/ATT/Rennes/Côte d'Ivoire/85
Salomon Kalou/ATT/Chelsea/Côte d'Ivoire/81
Gervinho/ATT/Lille/Côte d'Ivoire/81
Wilfried Bony/ATT/Swansea/Côte d'Ivoire/80
Seydou Doumbia/ATT/CSKA Moscou/Côte d'Ivoire/79
Aruna Dindane/ATT/Anderlecht/Côte d'Ivoire/76
Abdoulaye Traoré/ATT/ASEC Mimosas/Côte d'Ivoire/76
Sébastien Haller/ATT/Ajax/Côte d'Ivoire/81
Wilfried Zaha/ATT/Crystal Palace/Côte d'Ivoire/82
Nicolas Pépé/ATT/Lille/Côte d'Ivoire/80
Max Gradel/ATT/Saint-Étienne/Côte d'Ivoire/75`},
{id:"cmr",name:"Légendes du Cameroun",cat:"nations",sub:"Afrique",raw:`
Thomas N'Kono/G/Espanyol/Cameroun/85
Joseph-Antoine Bell/G/Marseille/Cameroun/82
Jacques Songo'o/G/La Corogne/Cameroun/79
Carlos Kameni/G/Espanyol/Cameroun/77
André Onana/G/Ajax/Cameroun/83
Hamidou Souleymanou/G/Kayserispor/Cameroun/68
Rigobert Song/DEF/Galatasaray/Cameroun/80
Stephen Tataw/DEF/Tonnerre Yaoundé/Cameroun/73
Emmanuel Kundé/DEF/Canon Yaoundé/Cameroun/78
Lauren/DEF/Arsenal/Cameroun/80
Timothée Atouba/DEF/Hambourg/Cameroun/73
Pierre Womé/DEF/Bologne/Cameroun/73
Bill Tchato/DEF/Montpellier/Cameroun/70
Nicolas N'Koulou/DEF/Marseille/Cameroun/77
Benoît Assou-Ekotto/DEF/Tottenham/Cameroun/75
Sébastien Bassong/DEF/Tottenham/Cameroun/72
Aurélien Chedjou/DEF/Lille/Cameroun/75
Joël Matip/DEF/Liverpool/Cameroun/81
Théophile Abega/MIL/Canon Yaoundé/Cameroun/79
Grégoire M'Bida/MIL/Canon Yaoundé/Cameroun/74
Louis-Paul Mfédé/MIL/Rennes/Cameroun/70
Marc-Vivien Foé/MIL/Lyon/Cameroun/81
Geremi/MIL/Real Madrid/Cameroun/80
Jean Makoun/MIL/Lille/Cameroun/77
Alex Song/MIL/Arsenal/Cameroun/79
Stéphane Mbia/MIL/Marseille/Cameroun/77
Eric Djemba-Djemba/MIL/Manchester United/Cameroun/70
Salomon Olembé/MIL/Nantes/Cameroun/72
Achille Emana/MIL/Toulouse/Cameroun/74
André-Frank Zambo Anguissa/MIL/Naples/Cameroun/83
Samuel Eto'o/ATT/Barcelone/Cameroun/91
Roger Milla/ATT/Montpellier/Cameroun/88
Patrick Mboma/ATT/Cagliari/Cameroun/82
François Omam-Biyik/ATT/Laval/Cameroun/78
Alphonse Tchami/ATT/Boca Juniors/Cameroun/73
Pierre Webó/ATT/Majorque/Cameroun/74
Eric Maxim Choupo-Moting/ATT/Schalke/Cameroun/77
Vincent Aboubakar/ATT/Porto/Cameroun/78
Karl Toko Ekambi/ATT/Villarreal/Cameroun/77
Bryan Mbeumo/ATT/Brentford/Cameroun/83`},
{id:"nga",name:"Légendes du Nigeria",cat:"nations",sub:"Afrique",raw:`
Vincent Enyeama/G/Lille/Nigeria/79
Peter Rufai/G/Farense/Nigeria/76
Ike Shorunmu/G/Beşiktaş/Nigeria/72
Austin Ejide/G/Bastia/Nigeria/70
Carl Ikeme/G/Wolverhampton/Nigeria/68
Francis Uzoho/G/Omonia/Nigeria/68
Stanley Nwabali/G/Chippa United/Nigeria/70
Stephen Keshi/DEF/Anderlecht/Nigeria/79
Uche Okechukwu/DEF/Fenerbahçe/Nigeria/75
Taribo West/DEF/Inter/Nigeria/78
Celestine Babayaro/DEF/Chelsea/Nigeria/77
Augustine Eguavoen/DEF/Gent/Nigeria/72
Joseph Yobo/DEF/Everton/Nigeria/77
Christian Chukwu/DEF/Enugu Rangers/Nigeria/78
Godwin Okpara/DEF/PSG/Nigeria/74
Taye Taiwo/DEF/Marseille/Nigeria/74
Efe Ambrose/DEF/Celtic/Nigeria/70
William Troost-Ekong/DEF/Udinese/Nigeria/73
Ola Aina/DEF/Nottingham Forest/Nigeria/76
Calvin Bassey/DEF/Fulham/Nigeria/75
Jay-Jay Okocha/MIL/Bolton/Nigeria/86
Sunday Oliseh/MIL/Ajax/Nigeria/80
Mutiu Adepoju/MIL/Real Sociedad/Nigeria/74
Muda Lawal/MIL/Shooting Stars/Nigeria/77
John Obi Mikel/MIL/Chelsea/Nigeria/80
Wilfred Ndidi/MIL/Leicester/Nigeria/79
Garba Lawal/MIL/Roda JC/Nigeria/72
Alex Iwobi/MIL/Arsenal/Nigeria/76
Ogenyi Onazi/MIL/Lazio/Nigeria/71
Nwankwo Kanu/ATT/Arsenal/Nigeria/84
Rashidi Yekini/ATT/Vitória Setúbal/Nigeria/82
Segun Odegbami/ATT/Shooting Stars/Nigeria/78
Daniel Amokachi/ATT/Everton/Nigeria/77
Finidi George/ATT/Ajax/Nigeria/81
Emmanuel Amunike/ATT/Sporting/Nigeria/79
Victor Ikpeba/ATT/Monaco/Nigeria/76
Obafemi Martins/ATT/Inter/Nigeria/78
Yakubu Aiyegbeni/ATT/Portsmouth/Nigeria/77
Victor Osimhen/ATT/Naples/Nigeria/86
Ademola Lookman/ATT/Atalanta/Nigeria/83
Wilson Oruma/MIL/Lens/Nigeria/72
`},
{id:"egy",name:"Légendes de l'Égypte",cat:"nations",sub:"Afrique",raw:`
Essam El-Hadary/G/Al Ahly/Égypte/84
Ahmed Shobair/G/Al Ahly/Égypte/78
Thabet El-Batal/G/Al Ahly/Égypte/79
Nader El-Sayed/G/Zamalek/Égypte/76
Abdelwahed El-Sayed/G/Zamalek/Égypte/76
Sherif Ekramy/G/Al Ahly/Égypte/73
Mohamed El Shenawy/G/Al Ahly/Égypte/79
Hany Ramzy/DEF/Werder Brême/Égypte/79
Ibrahim Hassan/DEF/Al Ahly/Égypte/77
Wael Gomaa/DEF/Al Ahly/Égypte/79
Ahmed Fathy/DEF/Al Ahly/Égypte/77
Sayed Moawad/DEF/Al Ahly/Égypte/74
Mohamed Abdel Wahab/DEF/Al Ahly/Égypte/75
Mahmoud Fathallah/DEF/Zamalek/Égypte/74
Ahmed Hegazi/DEF/West Bromwich/Égypte/77
Ahmed Elmohamady/DEF/Hull City/Égypte/75
Ali Gabr/DEF/Zamalek/Égypte/72
Mohamed Hany/DEF/Al Ahly/Égypte/74
Mohamed Aboutrika/MIL/Al Ahly/Égypte/85
Ahmed Hassan/MIL/Al Ahly/Égypte/82
Hosny Abd Rabo/MIL/Ismaily/Égypte/77
Mohamed Shawky/MIL/Al Ahly/Égypte/76
Mohamed Barakat/MIL/Al Ahly/Égypte/78
Magdi Abdelghani/MIL/Al Ahly/Égypte/76
Hazem Emam/MIL/Zamalek/Égypte/78
Hossam Ghaly/MIL/Feyenoord/Égypte/75
Tarek Hamed/MIL/Zamalek/Égypte/74
Mohamed Elneny/MIL/Arsenal/Égypte/77
Mohamed Salah/ATT/Liverpool/Égypte/90
Mahmoud El Khatib/ATT/Al Ahly/Égypte/84
Hossam Hassan/ATT/Al Ahly/Égypte/82
Hassan Shehata/ATT/Zamalek/Égypte/80
Amr Zaki/ATT/Zamalek/Égypte/78
Mohamed Zidan/ATT/Mayence/Égypte/77
Emad Moteab/ATT/Al Ahly/Égypte/78
Mido/ATT/Ajax/Égypte/77
Trezeguet/ATT/Aston Villa/Égypte/77
Omar Marmoush/ATT/Eintracht Francfort/Égypte/84
Mostafa Mohamed/ATT/Nantes/Égypte/76`},
{id:"tun",name:"Légendes de la Tunisie",cat:"nations",sub:"Afrique",raw:`
Attouga/G/Club Africain/Tunisie/79
Mokhtar Naili/G/Club Africain/Tunisie/72
Chokri El Ouaer/G/Espérance/Tunisie/80
Ali Boumnijel/G/Club Africain/Tunisie/74
Hamdi Kasraoui/G/Espérance/Tunisie/70
Aymen Mathlouthi/G/Étoile du Sahel/Tunisie/72
Bechir Ben Saïd/G/US Monastir/Tunisie/72
Aymen Dahmen/G/CS Sfaxien/Tunisie/70
Radhi Jaïdi/DEF/Bolton/Tunisie/76
Karim Haggui/DEF/Hanovre/Tunisie/75
Khaled Badra/DEF/Espérance/Tunisie/75
Hatem Trabelsi/DEF/Ajax/Tunisie/79
Sami Trabelsi/DEF/CS Sfaxien/Tunisie/72
Alaeddine Yahia/DEF/Lens/Tunisie/72
Aymen Abdennour/DEF/Toulouse/Tunisie/76
Ali Maâloul/DEF/Al Ahly/Tunisie/76
Dylan Bronn/DEF/Gent/Tunisie/72
Yassine Meriah/DEF/CS Sfaxien/Tunisie/72
Montassar Talbi/DEF/Lorient/Tunisie/74
Hamdi Nagguez/DEF/Étoile du Sahel/Tunisie/69
Tarak Dhiab/MIL/Espérance/Tunisie/86
Hamadi Agrebi/MIL/CS Sfaxien/Tunisie/84
Temime Lahzami/MIL/Espérance/Tunisie/77
Zoubeir Baya/MIL/Étoile du Sahel/Tunisie/77
Kaies Ghodhbane/MIL/Étoile du Sahel/Tunisie/73
Mehdi Nafti/MIL/Racing Santander/Tunisie/72
Jawhar Mnari/MIL/Nuremberg/Tunisie/73
Ellyes Skhiri/MIL/Cologne/Tunisie/78
Aïssa Laïdouni/MIL/Union Berlin/Tunisie/74
Ferjani Sassi/MIL/Zamalek/Tunisie/75
Naïm Sliti/MIL/Dijon/Tunisie/74
Hannibal Mejbri/MIL/Manchester United/Tunisie/72
Wahbi Khazri/ATT/Saint-Étienne/Tunisie/77
Youssef Msakni/ATT/Al Duhail/Tunisie/80
Francileudo dos Santos/ATT/Sochaux/Tunisie/75
Adel Sellimi/ATT/Nantes/Tunisie/74
Ziad Jaziri/ATT/Étoile du Sahel/Tunisie/75
Issam Jemâa/ATT/Lens/Tunisie/76
Faouzi Rouissi/ATT/Club Africain/Tunisie/73
Amine Chermiti/ATT/Espérance/Tunisie/72`},
{id:"gha",name:"Légendes du Ghana",cat:"nations",sub:"Afrique",raw:`
Robert Mensah/G/Asante Kotoko/Ghana/76
Richard Kingson/G/Wigan/Ghana/72
Adam Kwarasey/G/Strømsgodset/Ghana/66
Razak Brimah/G/Córdoba/Ghana/63
Richard Ofori/G/Orlando Pirates/Ghana/67
Lawrence Ati-Zigi/G/Saint-Gall/Ghana/68
Samuel Kuffour/DEF/Bayern Munich/Ghana/84
John Mensah/DEF/Rennes/Ghana/77
John Paintsil/DEF/Fulham/Ghana/72
Hans Sarpei/DEF/Leverkusen/Ghana/71
Harrison Afful/DEF/Espérance/Ghana/72
Jonathan Mensah/DEF/Columbus Crew/Ghana/70
Isaac Vorsah/DEF/Hoffenheim/Ghana/69
Daniel Amartey/DEF/Leicester/Ghana/71
Abdul Rahman Baba/DEF/Chelsea/Ghana/70
Mohammed Salisu/DEF/Southampton/Ghana/72
Alexander Djiku/DEF/Strasbourg/Ghana/73
Tariq Lamptey/DEF/Brighton/Ghana/72
Abedi Pelé/MIL/Marseille/Ghana/87
Michael Essien/MIL/Chelsea/Ghana/87
Stephen Appiah/MIL/Juventus/Ghana/80
Sulley Muntari/MIL/Inter/Ghana/79
Kevin-Prince Boateng/MIL/Milan/Ghana/79
Kwadwo Asamoah/MIL/Juventus/Ghana/80
André Ayew/MIL/Marseille/Ghana/77
Thomas Partey/MIL/Atlético Madrid/Ghana/82
Mohammed Kudus/MIL/West Ham/Ghana/82
Anthony Annan/MIL/Rosenborg/Ghana/71
Emmanuel Agyemang-Badu/MIL/Udinese/Ghana/72
Nii Lamptey/MIL/Anderlecht/Ghana/74
Asamoah Gyan/ATT/Rennes/Ghana/79
Tony Yeboah/ATT/Leeds/Ghana/81
Mohammed Polo/ATT/Hearts of Oak/Ghana/74
Jordan Ayew/ATT/Crystal Palace/Ghana/75
Iñaki Williams/ATT/Athletic Bilbao/Ghana/80
Antoine Semenyo/ATT/Bournemouth/Ghana/81
Christian Atsu/ATT/Newcastle/Ghana/73
Matthew Amoah/ATT/Vitesse/Ghana/70
Junior Agogo/ATT/Nottingham Forest/Ghana/68
Kamaldeen Sulemana/ATT/Rennes/Ghana/72`},
{id:"mli",name:"Légendes du Mali",cat:"nations",sub:"Afrique",raw:`
Soumbeïla Diakité/G/Stade Malien/Mali/70
Djigui Diarra/G/Stade Malien/Mali/72
Oumar Sissoko/G/Metz/Mali/68
Mamadou Samassa/G/Guingamp/Mali/69
Ibrahim Mounkoro/G/TP Mazembe/Mali/68
Adama Coulibaly/DEF/Lens/Mali/73
Cédric Kanté/DEF/Nice/Mali/71
Drissa Diakité/DEF/Nice/Mali/70
Ousmane Coulibaly/DEF/Panathinaïkos/Mali/70
Molla Wagué/DEF/Udinese/Mali/68
Salif Coulibaly/DEF/TP Mazembe/Mali/69
Hamari Traoré/DEF/Rennes/Mali/76
Falaye Sacko/DEF/Vitória Guimarães/Mali/70
Youssouf Koné/DEF/Lille/Mali/68
Massadio Haïdara/DEF/Lens/Mali/71
Boubacar Kouyaté/DEF/Metz/Mali/69
Seydou Keita/MIL/Barcelone/Mali/83
Mahamadou Diarra/MIL/Lyon/Mali/85
Mohamed Sissoko/MIL/Liverpool/Mali/78
Bakaye Traoré/MIL/Nancy/Mali/71
Abdou Traoré/MIL/Bordeaux/Mali/68
Samba Diakité/MIL/QPR/Mali/68
Yves Bissouma/MIL/Brighton/Mali/79
Amadou Haidara/MIL/Leipzig/Mali/77
Diadie Samassékou/MIL/Salzbourg/Mali/73
Lassana Coulibaly/MIL/Salernitana/Mali/72
Sambou Yatabaré/MIL/Bastia/Mali/68
Salif Keïta/ATT/Saint-Étienne/Mali/86
Frédéric Kanouté/ATT/Séville/Mali/84
Cheick Diabaté/ATT/Bordeaux/Mali/74
Modibo Maïga/ATT/Sochaux/Mali/72
Dramane Traoré/ATT/Lokomotiv Moscou/Mali/70
Moussa Marega/ATT/Porto/Mali/77
Mustapha Yatabaré/ATT/Guingamp/Mali/70
Mamady Sidibé/ATT/Stoke/Mali/70
Kalifa Coulibaly/ATT/Nantes/Mali/70
El Bilal Touré/ATT/Almería/Mali/74
Jimmy Kébé/ATT/Reading/Mali/70`}
);
Object.assign(window.CLUB_COLORS,{
"Séville":["#FFFFFF","#D81920"],"Majorque":["#E20613","#000000"],"Wydad":["#E30613","#FFFFFF"],"Raja":["#00A04A","#FFFFFF"],
"Numancia":["#D50032","#FFFFFF"],"PSG":["#004170","#DA291C"],"La Corogne":["#0067B1","#FFFFFF"],"Roma":["#8E1F2F","#F0BC42"],
"Wolverhampton":["#FDB913","#231F20"],"West Ham":["#7A263A","#1BB1E7"],"Ajax":["#FFFFFF","#D2122E"],"Valenciennes":["#E2001A","#FFFFFF"],
"Charlton":["#D4021D","#FFFFFF"],"Dynamo Kiev":["#FFFFFF","#0057B8"],"Brest":["#E30613","#FFFFFF"],"FAR Rabat":["#E30613","#000000"],
"Fiorentina":["#482E92","#FFFFFF"],"Angers":["#000000","#FFFFFF"],"Anderlecht":["#4F2D7F","#FFFFFF"],"Sienne":["#000000","#FFFFFF"],
"Montpellier":["#00214E","#F26522"],"Sion":["#FFFFFF","#E30613"],"Coventry":["#59CBE8","#FFFFFF"],"Standard":["#E30613","#FFFFFF"],
"Genk":["#0055A4","#FFFFFF"],"Chabab Mohammédia":["#E30613","#000000"],"Real Madrid":["#FFFFFF","#D4A53A"],"Bordeaux":["#001F5B","#FFFFFF"],
"Nancy":["#E30613","#FFFFFF"],"Grenade":["#C8102E","#FFFFFF"],"Olympiakos":["#E2001A","#FFFFFF"],"Galatasaray":["#A90432","#FDB912"],
"Chelsea":["#034694","#FFFFFF"],"Monaco":["#E30613","#FFFFFF"],"Rennes":["#E30613","#000000"],"QPR":["#1D5BA4","#FFFFFF"],
"Horoya":["#E30613","#FFFFFF"],"Naples":["#12A0D7","#FFFFFF"],"Lens":["#FFD700","#E30613"],"Sochaux":["#FFD700","#003DA5"],
"Marseille":["#FFFFFF","#2FAEE0"],"Betis":["#00954C","#FFFFFF"],"Nottingham Forest":["#DD0000","#FFFFFF"],"Auxerre":["#FFFFFF","#0055A4"],
"Fulham":["#FFFFFF","#000000"],"Everton":["#003399","#FFFFFF"],"Liverpool":["#C8102E","#FFFFFF"],"Tottenham":["#FFFFFF","#132257"],
"Leicester":["#003090","#FDBE11"],"Metz":["#8B0A26","#FFFFFF"],"Wigan":["#1D59AF","#FFFFFF"],"Newcastle":["#000000","#FFFFFF"],
"Lille":["#E01E13","#20325F"],"Watford":["#FBEE23","#ED2127"],"Reims":["#E30613","#FFFFFF"],"Lokeren":["#000000","#FFFFFF"],
"ASEC Mimosas":["#F7941D","#000000"],"Espérance":["#E30613","#FFD700"],"Guingamp":["#E30613","#000000"],"TP Mazembe":["#000000","#FFFFFF"],
"Arsenal":["#EF0107","#FFFFFF"],"Stuttgart":["#FFFFFF","#E32219"],"Cardiff":["#0070B5","#FFFFFF"],"Manchester United":["#DA291C","#FFFFFF"],
"Leverkusen":["#E32221","#000000"],"Torino":["#8A1E03","#FFFFFF"],"Manchester City":["#6CABDD","#FFFFFF"],"Milan":["#FB090B","#000000"],
"Nice":["#E30613","#000000"],"PSV":["#ED1C24","#FFFFFF"],"Le Mans":["#E30613","#FFD700"],"Bâle":["#E30613","#1D3D8F"],
"CSKA Moscou":["#E30613","#003DA5"],"Swansea":["#FFFFFF","#000000"],"Crystal Palace":["#1B458F","#C4122E"],"Saint-Étienne":["#00A650","#FFFFFF"],
"Espanyol":["#007FC8","#FFFFFF"],"Kayserispor":["#FFD700","#E30613"],"Tonnerre Yaoundé":["#FFFFFF","#000000"],"Canon Yaoundé":["#00A650","#E30613"],
"Hambourg":["#FFFFFF","#0A3F86"],"Bologne":["#A21C26","#1A2F48"],"Lyon":["#FFFFFF","#1D3D8F"],"Nantes":["#FCD405","#00A650"],
"Toulouse":["#5A2A82","#FFFFFF"],"Barcelone":["#A50044","#004D98"],"Cagliari":["#A50021","#00205B"],"Laval":["#F58220","#000000"],
"Boca Juniors":["#0033A0","#FFD100"],"Schalke":["#004D9D","#FFFFFF"],"Porto":["#0033A0","#FFFFFF"],"Villarreal":["#FFE667","#005187"],
"Brentford":["#E30613","#FFFFFF"],"Farense":["#000000","#FFFFFF"],"Beşiktaş":["#000000","#FFFFFF"],"Bastia":["#0055A4","#FFFFFF"],
"Omonia":["#00A650","#FFFFFF"],"Chippa United":["#0055A4","#FFD700"],"Fenerbahçe":["#FFED00","#163962"],"Inter":["#0068A8","#000000"],
"Gent":["#0055A4","#FFFFFF"],"Enugu Rangers":["#E30613","#FFFFFF"],"Celtic":["#018749","#FFFFFF"],"Udinese":["#000000","#FFFFFF"],
"Bolton":["#FFFFFF","#263C7E"],"Real Sociedad":["#0067B1","#FFFFFF"],"Shooting Stars":["#0055A4","#FFFFFF"],"Roda JC":["#FFD700","#000000"],
"Lazio":["#87D8F7","#FFFFFF"],"Vitória Setúbal":["#00A650","#FFFFFF"],"Sporting":["#00A650","#FFFFFF"],"Portsmouth":["#001489","#FFFFFF"],
"Atalanta":["#1E71B8","#000000"],"Al Ahly":["#E30613","#FFFFFF"],"Zamalek":["#FFFFFF","#E30613"],"Werder Brême":["#1D9053","#FFFFFF"],
"West Bromwich":["#122F67","#FFFFFF"],"Hull City":["#F5A12D","#000000"],"Ismaily":["#FFD700","#0055A4"],"Feyenoord":["#E30613","#FFFFFF"],
"Mayence":["#C3141E","#FFFFFF"],"Aston Villa":["#670E36","#95BFE5"],"Eintracht Francfort":["#E1000F","#000000"],"Club Africain":["#E30613","#FFFFFF"],
"Étoile du Sahel":["#E30613","#FFFFFF"],"US Monastir":["#0055A4","#FFFFFF"],"CS Sfaxien":["#000000","#FFFFFF"],"Hanovre":["#96C11F","#000000"],
"Lorient":["#F58220","#000000"],"Racing Santander":["#FFFFFF","#00A650"],"Nuremberg":["#9E1B32","#000000"],"Cologne":["#FFFFFF","#ED1C24"],
"Union Berlin":["#EB1923","#FFFFFF"],"Dijon":["#E30613","#FFFFFF"],"Al Duhail":["#8B0A26","#FFFFFF"],"Asante Kotoko":["#E30613","#FFFFFF"],
"Strømsgodset":["#0055A4","#FFFFFF"],"Córdoba":["#00A650","#FFFFFF"],"Orlando Pirates":["#000000","#FFFFFF"],"Saint-Gall":["#00A650","#FFFFFF"],
"Bayern Munich":["#DC052D","#FFFFFF"],"Columbus Crew":["#FEDD00","#000000"],"Hoffenheim":["#1961B5","#FFFFFF"],"Southampton":["#D71920","#FFFFFF"],
"Strasbourg":["#009FE3","#FFFFFF"],"Brighton":["#0057B8","#FFFFFF"],"Juventus":["#FFFFFF","#000000"],"Atlético Madrid":["#CB3524","#FFFFFF"],
"Rosenborg":["#FFFFFF","#000000"],"Leeds":["#FFFFFF","#1D428A"],"Hearts of Oak":["#E30613","#FFD700"],"Athletic Bilbao":["#EE2523","#FFFFFF"],
"Bournemouth":["#DA291C","#000000"],"Vitesse":["#FFD700","#000000"],"Stade Malien":["#FFFFFF","#0055A4"],"Panathinaïkos":["#007A33","#FFFFFF"],
"Vitória Guimarães":["#FFFFFF","#000000"],"Leipzig":["#FFFFFF","#DD0741"],"Salzbourg":["#FFFFFF","#D0021B"],"Salernitana":["#8B1C23","#FFFFFF"],
"Lokomotiv Moscou":["#E30613","#00A650"],"Stoke":["#E03A3E","#FFFFFF"],"Almería":["#E30613","#FFFFFF"],"Reading":["#004494","#FFFFFF"]
});

/* ---- nations_eu_am.js ---- */
// Légendes des équipes nationales : Europe et Amériques
window.FOOT_PACKS.push(
{id:"fra",name:"Légendes des Bleus",cat:"nations",sub:"Europe",raw:`
Zinédine Zidane/MIL/Real Madrid/France/97
Michel Platini/MIL/Juventus/France/95
Kylian Mbappé/ATT/PSG/France/92
Thierry Henry/ATT/Arsenal/France/93
Karim Benzema/ATT/Real Madrid/France/91
Antoine Griezmann/ATT/Atlético Madrid/France/89
Raymond Kopa/MIL/Reims/France/90
Just Fontaine/ATT/Reims/France/88
Lilian Thuram/DEF/Juventus/France/89
Franck Ribéry/ATT/Bayern/France/89
Marcel Desailly/DEF/Milan/France/89
Jean-Pierre Papin/ATT/Marseille/France/89
Patrick Vieira/MIL/Arsenal/France/90
N'Golo Kanté/MIL/Chelsea/France/88
Éric Cantona/ATT/Manchester United/France/88
Laurent Blanc/DEF/Montpellier/France/87
Bixente Lizarazu/DEF/Bayern/France/86
Raphaël Varane/DEF/Real Madrid/France/87
Alain Giresse/MIL/Bordeaux/France/87
Hugo Lloris/G/Tottenham/France/87
Didier Deschamps/MIL/Marseille/France/86
Claude Makélélé/MIL/Chelsea/France/87
Jean Tigana/MIL/Bordeaux/France/87
Paul Pogba/MIL/Juventus/France/86
David Trezeguet/ATT/Juventus/France/86
Fabien Barthez/G/Marseille/France/86
Robert Pirès/MIL/Arsenal/France/86
Marius Trésor/DEF/Bordeaux/France/86
Maxime Bossis/DEF/Nantes/France/86
Youri Djorkaeff/MIL/Inter/France/85
Mike Maignan/G/Milan/France/86
Dominique Rocheteau/ATT/Saint-Étienne/France/83
Joël Bats/G/PSG/France/80
Bernard Lama/G/PSG/France/82
Grégory Coupet/G/Lyon/France/83
Patrice Evra/DEF/Manchester United/France/85
`},
{id:"bra",name:"Légendes du Brésil",cat:"nations",sub:"Amérique du Sud",raw:`
Pelé/ATT/Santos/Brésil/99
Ronaldo/ATT/Real Madrid/Brésil/96
Garrincha/ATT/Botafogo/Brésil/95
Ronaldinho/MIL/Barcelone/Brésil/94
Zico/MIL/Flamengo/Brésil/94
Romário/ATT/Vasco de Gama/Brésil/93
Neymar/ATT/Barcelone/Brésil/91
Cafu/DEF/Milan/Brésil/91
Roberto Carlos/DEF/Real Madrid/Brésil/92
Sócrates/MIL/Corinthians/Brésil/91
Rivaldo/MIL/Barcelone/Brésil/92
Kaká/MIL/Milan/Brésil/92
Carlos Alberto/DEF/Santos/Brésil/91
Rivellino/MIL/Corinthians/Brésil/91
Vinícius Júnior/ATT/Real Madrid/Brésil/90
Nílton Santos/DEF/Botafogo/Brésil/91
Didi/MIL/Botafogo/Brésil/91
Jairzinho/ATT/Botafogo/Brésil/90
Falcão/MIL/Roma/Brésil/90
Tostão/ATT/Cruzeiro/Brésil/89
Alisson/G/Liverpool/Brésil/89
Djalma Santos/DEF/Portuguesa/Brésil/89
Thiago Silva/DEF/PSG/Brésil/89
Dani Alves/DEF/Barcelone/Brésil/88
Gérson/MIL/Botafogo/Brésil/88
Leônidas/ATT/Flamengo/Brésil/90
Marcelo/DEF/Real Madrid/Brésil/89
Gilmar/G/Santos/Brésil/87
Bebeto/ATT/Deportivo La Corogne/Brésil/86
Casemiro/MIL/Real Madrid/Brésil/86
Júlio César/G/Inter/Brésil/85
Ederson/G/Manchester City/Brésil/86
Lúcio/DEF/Bayern/Brésil/87
Dida/G/Milan/Brésil/85
Adriano/ATT/Inter/Brésil/86
Dunga/MIL/Fiorentina/Brésil/84
Taffarel/G/Galatasaray/Brésil/84`},
{id:"arg",name:"Légendes de l'Argentine",cat:"nations",sub:"Amérique du Sud",raw:`
Lionel Messi/ATT/Barcelone/Argentine/99
Diego Maradona/ATT/Naples/Argentine/99
Alfredo Di Stéfano/ATT/Real Madrid/Argentine/97
Gabriel Batistuta/ATT/Fiorentina/Argentine/89
Omar Sívori/ATT/Juventus/Argentine/91
Mario Kempes/ATT/Valence/Argentine/89
Daniel Passarella/DEF/River Plate/Argentine/90
Javier Zanetti/DEF/Inter/Argentine/89
Juan Román Riquelme/MIL/Boca Juniors/Argentine/88
Sergio Agüero/ATT/Manchester City/Argentine/89
Ángel Di María/MIL/Real Madrid/Argentine/88
Ubaldo Fillol/G/River Plate/Argentine/88
Fernando Redondo/MIL/Real Madrid/Argentine/88
Lautaro Martínez/ATT/Inter/Argentine/87
Juan Sebastián Verón/MIL/Lazio/Argentine/85
Javier Mascherano/MIL/Barcelone/Argentine/86
Roberto Ayala/DEF/Valence/Argentine/85
Carlos Tevez/ATT/Boca Juniors/Argentine/86
Emiliano Martínez/G/Aston Villa/Argentine/86
Diego Simeone/MIL/Atlético Madrid/Argentine/84
Osvaldo Ardiles/MIL/Tottenham/Argentine/83
Walter Samuel/DEF/Inter/Argentine/85
Oscar Ruggeri/DEF/River Plate/Argentine/84
Roberto Perfumo/DEF/Racing Club/Argentine/85
Hernán Crespo/ATT/Parme/Argentine/86
Julián Álvarez/ATT/Atlético Madrid/Argentine/86
Jorge Burruchaga/MIL/Nantes/Argentine/82
Jorge Valdano/ATT/Real Madrid/Argentine/83
Gonzalo Higuaín/ATT/Real Madrid/Argentine/86
Cristian Romero/DEF/Tottenham/Argentine/85
Alexis Mac Allister/MIL/Liverpool/Argentine/85
Claudio Caniggia/ATT/Boca Juniors/Argentine/83
Nicolás Otamendi/DEF/Manchester City/Argentine/82
Enzo Fernández/MIL/Chelsea/Argentine/84
Sergio Goycochea/G/River Plate/Argentine/81
Nery Pumpido/G/River Plate/Argentine/79
Roberto Abbondanzieri/G/Boca Juniors/Argentine/80
Germán Burgos/G/Atlético Madrid/Argentine/76`},
{id:"ger",name:"Légendes de l'Allemagne",cat:"nations",sub:"Europe",raw:`
Franz Beckenbauer/DEF/Bayern/Allemagne/96
Gerd Müller/ATT/Bayern/Allemagne/94
Lothar Matthäus/MIL/Bayern/Allemagne/93
Manuel Neuer/G/Bayern/Allemagne/93
Oliver Kahn/G/Bayern/Allemagne/91
Sepp Maier/G/Bayern/Allemagne/90
Karl-Heinz Rummenigge/ATT/Bayern/Allemagne/91
Philipp Lahm/DEF/Bayern/Allemagne/92
Toni Kroos/MIL/Real Madrid/Allemagne/91
Miroslav Klose/ATT/Bayern/Allemagne/88
Uwe Seeler/ATT/Hambourg/Allemagne/88
Fritz Walter/MIL/Kaiserslautern/Allemagne/89
Matthias Sammer/DEF/Dortmund/Allemagne/89
Jürgen Klinsmann/ATT/Stuttgart/Allemagne/88
Michael Ballack/MIL/Bayern/Allemagne/89
Bastian Schweinsteiger/MIL/Bayern/Allemagne/90
Thomas Müller/ATT/Bayern/Allemagne/89
Günter Netzer/MIL/Mönchengladbach/Allemagne/87
Paul Breitner/DEF/Bayern/Allemagne/89
Rudi Völler/ATT/Roma/Allemagne/87
Andreas Brehme/DEF/Inter/Allemagne/88
Toni Schumacher/G/Cologne/Allemagne/84
Joshua Kimmich/MIL/Bayern/Allemagne/89
Helmut Rahn/ATT/Rot-Weiss Essen/Allemagne/85
Wolfgang Overath/MIL/Cologne/Allemagne/85
Mats Hummels/DEF/Dortmund/Allemagne/87
Mesut Özil/MIL/Arsenal/Allemagne/86
Jamal Musiala/MIL/Bayern/Allemagne/87
Marc-André ter Stegen/G/Barcelone/Allemagne/88
Berti Vogts/DEF/Mönchengladbach/Allemagne/86
Jürgen Kohler/DEF/Dortmund/Allemagne/86
Jérôme Boateng/DEF/Bayern/Allemagne/86
Antonio Rüdiger/DEF/Real Madrid/Allemagne/86
Bernd Schuster/MIL/Barcelone/Allemagne/87
Florian Wirtz/MIL/Leverkusen/Allemagne/87
Pierre Littbarski/ATT/Cologne/Allemagne/83
Jens Lehmann/G/Arsenal/Allemagne/84
Bodo Illgner/G/Cologne/Allemagne/81`},
{id:"ita",name:"Légendes de l'Italie",cat:"nations",sub:"Europe",raw:`
Paolo Maldini/DEF/Milan/Italie/95
Gianluigi Buffon/G/Juventus/Italie/94
Franco Baresi/DEF/Milan/Italie/95
Roberto Baggio/ATT/Juventus/Italie/93
Dino Zoff/G/Juventus/Italie/93
Andrea Pirlo/MIL/Milan/Italie/92
Giuseppe Meazza/ATT/Inter/Italie/93
Francesco Totti/ATT/Roma/Italie/92
Fabio Cannavaro/DEF/Parme/Italie/91
Giacinto Facchetti/DEF/Inter/Italie/92
Gianni Rivera/MIL/Milan/Italie/92
Alessandro Del Piero/ATT/Juventus/Italie/92
Gaetano Scirea/DEF/Juventus/Italie/91
Alessandro Nesta/DEF/Milan/Italie/91
Paolo Rossi/ATT/Juventus/Italie/89
Gigi Riva/ATT/Cagliari/Italie/90
Sandro Mazzola/MIL/Inter/Italie/89
Giorgio Chiellini/DEF/Juventus/Italie/88
Silvio Piola/ATT/Lazio/Italie/88
Gianluigi Donnarumma/G/PSG/Italie/88
Marco Tardelli/MIL/Juventus/Italie/87
Claudio Gentile/DEF/Juventus/Italie/86
Giuseppe Bergomi/DEF/Inter/Italie/86
Walter Zenga/G/Inter/Italie/86
Giancarlo Antognoni/MIL/Fiorentina/Italie/84
Daniele De Rossi/MIL/Roma/Italie/87
Gennaro Gattuso/MIL/Milan/Italie/86
Christian Vieri/ATT/Inter/Italie/87
Filippo Inzaghi/ATT/Milan/Italie/86
Gianluca Vialli/ATT/Sampdoria/Italie/86
Leonardo Bonucci/DEF/Juventus/Italie/86
Roberto Mancini/ATT/Sampdoria/Italie/85
Gianluca Zambrotta/DEF/Juventus/Italie/85
Demetrio Albertini/MIL/Milan/Italie/84
Marco Verratti/MIL/PSG/Italie/86
Angelo Peruzzi/G/Juventus/Italie/85
Francesco Toldo/G/Fiorentina/Italie/84
Roberto Donadoni/MIL/Milan/Italie/84
`},
{id:"esp",name:"Légendes de l'Espagne",cat:"nations",sub:"Europe",raw:`
Andrés Iniesta/MIL/Barcelone/Espagne/93
Xavi/MIL/Barcelone/Espagne/93
Iker Casillas/G/Real Madrid/Espagne/92
Sergio Ramos/DEF/Real Madrid/Espagne/92
Raúl/ATT/Real Madrid/Espagne/91
Carles Puyol/DEF/Barcelone/Espagne/89
Paco Gento/ATT/Real Madrid/Espagne/90
Rodri/MIL/Manchester City/Espagne/90
Luis Suárez Miramontes/MIL/Barcelone/Espagne/90
Sergio Busquets/MIL/Barcelone/Espagne/89
László Kubala/ATT/Barcelone/Espagne/92
Lamine Yamal/ATT/Barcelone/Espagne/89
Fernando Hierro/DEF/Real Madrid/Espagne/88
Xabi Alonso/MIL/Real Madrid/Espagne/88
David Silva/MIL/Manchester City/Espagne/88
David Villa/ATT/Valence/Espagne/88
Gerard Piqué/DEF/Barcelone/Espagne/88
Ricardo Zamora/G/Espanyol/Espagne/88
Emilio Butragueño/ATT/Real Madrid/Espagne/87
Fernando Torres/ATT/Atlético Madrid/Espagne/87
Telmo Zarra/ATT/Athletic Bilbao/Espagne/87
Andoni Zubizarreta/G/Barcelone/Espagne/86
Pedri/MIL/Barcelone/Espagne/87
Cesc Fàbregas/MIL/Arsenal/Espagne/87
Pep Guardiola/MIL/Barcelone/Espagne/86
Luis Arconada/G/Real Sociedad/Espagne/85
David de Gea/G/Manchester United/Espagne/86
Jordi Alba/DEF/Barcelone/Espagne/86
Dani Carvajal/DEF/Real Madrid/Espagne/86
José Antonio Camacho/DEF/Real Madrid/Espagne/84
Míchel/MIL/Real Madrid/Espagne/84
Juanito/ATT/Real Madrid/Espagne/84
Rafael Gordillo/DEF/Betis/Espagne/83
Víctor Valdés/G/Barcelone/Espagne/85
Fernando Morientes/ATT/Real Madrid/Espagne/83
Míchel Salgado/DEF/Real Madrid/Espagne/82
Unai Simón/G/Athletic Bilbao/Espagne/82
Joan Capdevila/DEF/Villarreal/Espagne/79`},
{id:"eng",name:"Légendes de l'Angleterre",cat:"nations",sub:"Europe",raw:`
Bobby Charlton/MIL/Manchester United/Angleterre/93
Bobby Moore/DEF/West Ham/Angleterre/91
Gordon Banks/G/Leicester/Angleterre/91
Harry Kane/ATT/Tottenham/Angleterre/90
Stanley Matthews/ATT/Blackpool/Angleterre/91
Wayne Rooney/ATT/Manchester United/Angleterre/91
Steven Gerrard/MIL/Liverpool/Angleterre/91
Alan Shearer/ATT/Newcastle/Angleterre/90
Jimmy Greaves/ATT/Tottenham/Angleterre/87
Frank Lampard/MIL/Chelsea/Angleterre/89
Jude Bellingham/MIL/Real Madrid/Angleterre/89
Gary Lineker/ATT/Tottenham/Angleterre/87
Kevin Keegan/ATT/Liverpool/Angleterre/89
Tom Finney/ATT/Preston North End/Angleterre/89
Paul Scholes/MIL/Manchester United/Angleterre/89
David Beckham/MIL/Manchester United/Angleterre/89
Peter Shilton/G/Nottingham Forest/Angleterre/87
Geoff Hurst/ATT/West Ham/Angleterre/84
Michael Owen/ATT/Liverpool/Angleterre/88
Paul Gascoigne/MIL/Tottenham/Angleterre/87
Bryan Robson/MIL/Manchester United/Angleterre/86
John Terry/DEF/Chelsea/Angleterre/89
Rio Ferdinand/DEF/Manchester United/Angleterre/88
Billy Wright/DEF/Wolverhampton/Angleterre/86
Ashley Cole/DEF/Chelsea/Angleterre/86
Tony Adams/DEF/Arsenal/Angleterre/86
David Seaman/G/Arsenal/Angleterre/85
Ray Clemence/G/Liverpool/Angleterre/86
Bukayo Saka/ATT/Arsenal/Angleterre/86
Glenn Hoddle/MIL/Tottenham/Angleterre/85
Sol Campbell/DEF/Arsenal/Angleterre/85
Gary Neville/DEF/Manchester United/Angleterre/83
Stuart Pearce/DEF/Nottingham Forest/Angleterre/82
Declan Rice/MIL/Arsenal/Angleterre/86
Jordan Pickford/G/Everton/Angleterre/82
Joe Hart/G/Manchester City/Angleterre/82`},
{id:"ned",name:"Légendes des Pays-Bas",cat:"nations",sub:"Europe",raw:`
Johan Cruyff/ATT/Ajax/Pays-Bas/97
Marco van Basten/ATT/Milan/Pays-Bas/95
Ruud Gullit/MIL/Milan/Pays-Bas/92
Dennis Bergkamp/ATT/Arsenal/Pays-Bas/91
Frank Rijkaard/MIL/Milan/Pays-Bas/91
Arjen Robben/ATT/Bayern/Pays-Bas/90
Virgil van Dijk/DEF/Liverpool/Pays-Bas/89
Johan Neeskens/MIL/Ajax/Pays-Bas/88
Edwin van der Sar/G/Manchester United/Pays-Bas/90
Ronald Koeman/DEF/Barcelone/Pays-Bas/89
Ruud Krol/DEF/Ajax/Pays-Bas/89
Clarence Seedorf/MIL/Milan/Pays-Bas/89
Ruud van Nistelrooy/ATT/Manchester United/Pays-Bas/89
Robin van Persie/ATT/Arsenal/Pays-Bas/88
Wesley Sneijder/MIL/Inter/Pays-Bas/88
Edgar Davids/MIL/Juventus/Pays-Bas/87
Patrick Kluivert/ATT/Barcelone/Pays-Bas/86
Jaap Stam/DEF/Manchester United/Pays-Bas/87
Rob Rensenbrink/ATT/Anderlecht/Pays-Bas/89
Wim van Hanegem/MIL/Feyenoord/Pays-Bas/88
Frenkie de Jong/MIL/Barcelone/Pays-Bas/86
Frank de Boer/DEF/Ajax/Pays-Bas/85
Marc Overmars/ATT/Arsenal/Pays-Bas/86
Johnny Rep/ATT/Ajax/Pays-Bas/82
Phillip Cocu/MIL/PSV/Pays-Bas/85
Hans van Breukelen/G/PSV/Pays-Bas/82
Memphis Depay/ATT/Lyon/Pays-Bas/83
Rafael van der Vaart/MIL/Ajax/Pays-Bas/85
Wim Jansen/MIL/Feyenoord/Pays-Bas/84
Matthijs de Ligt/DEF/Ajax/Pays-Bas/84
Giovanni van Bronckhorst/DEF/Barcelone/Pays-Bas/80
Dirk Kuyt/ATT/Liverpool/Pays-Bas/80
Cody Gakpo/ATT/Liverpool/Pays-Bas/82
Maarten Stekelenburg/G/Ajax/Pays-Bas/80
Jasper Cillessen/G/Ajax/Pays-Bas/76
Piet Schrijvers/G/Ajax/Pays-Bas/79
Tim Krul/G/Newcastle/Pays-Bas/76
Danny Blind/DEF/Ajax/Pays-Bas/80
`},
{id:"por",name:"Légendes du Portugal",cat:"nations",sub:"Europe",raw:`
Cristiano Ronaldo/ATT/Real Madrid/Portugal/98
Eusébio/ATT/Benfica/Portugal/95
Luís Figo/MIL/Barcelone/Portugal/92
Rui Costa/MIL/Fiorentina/Portugal/89
Mário Coluna/MIL/Benfica/Portugal/89
Bernardo Silva/MIL/Manchester City/Portugal/88
Deco/MIL/Porto/Portugal/88
Pepe/DEF/Real Madrid/Portugal/87
Rúben Dias/DEF/Manchester City/Portugal/87
Bruno Fernandes/MIL/Manchester United/Portugal/88
Ricardo Carvalho/DEF/Chelsea/Portugal/87
Vitinha/MIL/PSG/Portugal/87
Paulo Futre/ATT/Atlético Madrid/Portugal/86
Fernando Gomes/ATT/Porto/Portugal/87
Vítor Baía/G/Porto/Portugal/87
Nuno Mendes/DEF/PSG/Portugal/86
José Augusto/ATT/Benfica/Portugal/84
Humberto Coelho/DEF/Benfica/Portugal/85
João Cancelo/DEF/Manchester City/Portugal/85
Rafael Leão/ATT/Milan/Portugal/85
Fernando Chalana/MIL/Benfica/Portugal/84
Costa Pereira/G/Benfica/Portugal/84
Diogo Costa/G/Porto/Portugal/85
António Simões/ATT/Benfica/Portugal/84
Pauleta/ATT/PSG/Portugal/84
Fernando Couto/DEF/Lazio/Portugal/82
Rui Patrício/G/Sporting/Portugal/83
Manuel Bento/G/Benfica/Portugal/83
Rui Jordão/ATT/Sporting/Portugal/83
João Moutinho/MIL/Porto/Portugal/83
João Félix/ATT/Atlético Madrid/Portugal/80
Ricardo Quaresma/ATT/Porto/Portugal/82
Nuno Gomes/ATT/Benfica/Portugal/81
Nani/ATT/Manchester United/Portugal/82
Ricardo/G/Sporting/Portugal/80
Paulo Ferreira/DEF/Chelsea/Portugal/80
Paulo Sousa/MIL/Juventus/Portugal/83
`},
{id:"bel",name:"Légendes de la Belgique",cat:"nations",sub:"Europe",raw:`
Kevin De Bruyne/MIL/Manchester City/Belgique/90
Thibaut Courtois/G/Real Madrid/Belgique/90
Eden Hazard/ATT/Chelsea/Belgique/90
Paul Van Himst/ATT/Anderlecht/Belgique/87
Jan Ceulemans/MIL/Club Bruges/Belgique/85
Jean-Marie Pfaff/G/Bayern/Belgique/86
Vincent Kompany/DEF/Manchester City/Belgique/87
Enzo Scifo/MIL/Anderlecht/Belgique/85
Michel Preud'homme/G/Benfica/Belgique/85
Eric Gerets/DEF/Standard Liège/Belgique/84
Romelu Lukaku/ATT/Inter/Belgique/85
Dries Mertens/ATT/Naples/Belgique/84
Jan Vertonghen/DEF/Tottenham/Belgique/83
Toby Alderweireld/DEF/Tottenham/Belgique/83
Marc Wilmots/MIL/Schalke/Belgique/82
Wilfried Van Moer/MIL/Standard Liège/Belgique/82
Raoul Lambert/ATT/Club Bruges/Belgique/81
Mousa Dembélé/MIL/Tottenham/Belgique/82
Erwin Vandenbergh/ATT/Anderlecht/Belgique/80
Franky Van der Elst/MIL/Club Bruges/Belgique/78
Axel Witsel/MIL/Dortmund/Belgique/81
Luc Nilis/ATT/PSV/Belgique/82
Jérémy Doku/ATT/Manchester City/Belgique/81
Yannick Carrasco/ATT/Atlético Madrid/Belgique/80
Thomas Vermaelen/DEF/Arsenal/Belgique/78
Georges Grün/DEF/Anderlecht/Belgique/77
Philippe Albert/DEF/Newcastle/Belgique/77
Marouane Fellaini/MIL/Manchester United/Belgique/79
Youri Tielemans/MIL/Leicester/Belgique/80
Simon Mignolet/G/Club Bruges/Belgique/78
Thomas Meunier/DEF/PSG/Belgique/78
Émile Mpenza/ATT/Standard Liège/Belgique/77
Filip De Wilde/G/Anderlecht/Belgique/75
Koen Casteels/G/Wolfsburg/Belgique/77`},
{id:"uru",name:"Légendes de l'Uruguay",cat:"nations",sub:"Amérique du Sud",raw:`
Luis Suárez/ATT/Barcelone/Uruguay/91
Juan Alberto Schiaffino/MIL/Peñarol/Uruguay/91
Obdulio Varela/MIL/Peñarol/Uruguay/89
José Nasazzi/DEF/Nacional/Uruguay/88
José Leandro Andrade/MIL/Nacional/Uruguay/89
Enzo Francescoli/ATT/River Plate/Uruguay/89
Ladislao Mazurkiewicz/G/Peñarol/Uruguay/87
Alcides Ghiggia/ATT/Peñarol/Uruguay/87
Héctor Scarone/ATT/Nacional/Uruguay/87
Edinson Cavani/ATT/PSG/Uruguay/88
Diego Godín/DEF/Atlético Madrid/Uruguay/87
Federico Valverde/MIL/Real Madrid/Uruguay/87
Diego Forlán/ATT/Atlético Madrid/Uruguay/87
Fernando Morena/ATT/Peñarol/Uruguay/83
Pedro Cea/ATT/Nacional/Uruguay/84
Roque Máspoli/G/Peñarol/Uruguay/84
Paolo Montero/DEF/Juventus/Uruguay/83
Pedro Petrone/ATT/Nacional/Uruguay/84
Víctor Rodríguez Andrade/DEF/Peñarol/Uruguay/82
Hugo de León/DEF/Nacional/Uruguay/82
José María Giménez/DEF/Atlético Madrid/Uruguay/82
Álvaro Recoba/MIL/Inter/Uruguay/82
Fernando Muslera/G/Galatasaray/Uruguay/82
Ronald Araújo/DEF/Barcelone/Uruguay/83
Rubén Sosa/ATT/Inter/Uruguay/80
Darwin Núñez/ATT/Liverpool/Uruguay/81
Diego Lugano/DEF/Fenerbahçe/Uruguay/80
Rodolfo Rodríguez/G/Nacional/Uruguay/81
Rodrigo Bentancur/MIL/Juventus/Uruguay/80
Martín Cáceres/DEF/Juventus/Uruguay/77
Diego Pérez/MIL/Monaco/Uruguay/75
Sergio Rochet/G/Nacional/Uruguay/74
Fernando Álvez/G/Peñarol/Uruguay/74
Egidio Arévalo Ríos/MIL/Peñarol/Uruguay/75
Gustavo Poyet/MIL/Chelsea/Uruguay/78
Walter Gargano/MIL/Naples/Uruguay/76
`},
{id:"cro",name:"Légendes de la Croatie",cat:"nations",sub:"Europe",raw:`
Luka Modrić/MIL/Real Madrid/Croatie/92
Davor Šuker/ATT/Séville/Croatie/88
Zvonimir Boban/MIL/Milan/Croatie/87
Robert Prosinečki/MIL/Étoile Rouge de Belgrade/Croatie/85
Ivan Rakitić/MIL/Barcelone/Croatie/86
Mario Mandžukić/ATT/Bayern/Croatie/85
Joško Gvardiol/DEF/Manchester City/Croatie/85
Alen Bokšić/ATT/Lazio/Croatie/83
Ivan Perišić/ATT/Inter/Croatie/84
Mateo Kovačić/MIL/Chelsea/Croatie/83
Marcelo Brozović/MIL/Inter/Croatie/83
Darijo Srna/DEF/Shakhtar Donetsk/Croatie/81
Danijel Subašić/G/Monaco/Croatie/79
Dominik Livaković/G/Dinamo Zagreb/Croatie/80
Robert Jarni/DEF/Betis/Croatie/80
Niko Kovač/MIL/Bayern/Croatie/78
Dražen Ladić/G/Dinamo Zagreb/Croatie/76
Igor Štimac/DEF/Hajduk Split/Croatie/77
Dario Šimić/DEF/Milan/Croatie/78
Dejan Lovren/DEF/Liverpool/Croatie/78
Aljoša Asanović/MIL/Hajduk Split/Croatie/78
Ivica Olić/ATT/Bayern/Croatie/79
Andrej Kramarić/ATT/Hoffenheim/Croatie/79
Stipe Pletikosa/G/Hajduk Split/Croatie/77
Slaven Bilić/DEF/West Ham/Croatie/77
Josip Šimunić/DEF/Hertha Berlin/Croatie/77
Mario Stanić/MIL/Parme/Croatie/77
Goran Vlaović/ATT/Valence/Croatie/76
Domagoj Vida/DEF/Dynamo Kiev/Croatie/76
Vedran Ćorluka/DEF/Tottenham/Croatie/77
Niko Kranjčar/MIL/Dinamo Zagreb/Croatie/77
Eduardo da Silva/ATT/Arsenal/Croatie/76
Ante Rebić/ATT/Eintracht Francfort/Croatie/77
Vedran Runje/G/Lens/Croatie/76
Tomislav Butina/G/Club Bruges/Croatie/72`},
{id:"mex",name:"Légendes du Mexique",cat:"nations",sub:"Amérique du Nord",raw:`
Hugo Sánchez/ATT/Real Madrid/Mexique/88
Rafael Márquez/DEF/Barcelone/Mexique/85
Cuauhtémoc Blanco/ATT/Club América/Mexique/82
Jorge Campos/G/Pumas UNAM/Mexique/80
Guillermo Ochoa/G/Club América/Mexique/80
Antonio Carbajal/G/León/Mexique/80
Javier Hernández/ATT/Manchester United/Mexique/80
Claudio Suárez/DEF/Pumas UNAM/Mexique/78
Andrés Guardado/MIL/Betis/Mexique/80
Oswaldo Sánchez/G/Guadalajara/Mexique/76
Jared Borgetti/ATT/Santos Laguna/Mexique/77
Hirving Lozano/ATT/PSV/Mexique/80
Carlos Vela/ATT/Real Sociedad/Mexique/80
Manuel Negrete/MIL/Pumas UNAM/Mexique/75
Luis Hernández/ATT/Necaxa/Mexique/77
Raúl Jiménez/ATT/Wolverhampton/Mexique/78
Pável Pardo/MIL/Club América/Mexique/77
Ramón Ramírez/DEF/Guadalajara/Mexique/74
Carlos Salcido/DEF/PSV/Mexique/76
Héctor Herrera/MIL/Porto/Mexique/79
Edson Álvarez/MIL/Ajax/Mexique/78
Alberto García Aspe/MIL/Pumas UNAM/Mexique/77
Tomás Boy/MIL/Tigres UANL/Mexique/74
Carlos Hermosillo/ATT/Cruz Azul/Mexique/76
Enrique Borja/ATT/Club América/Mexique/77
Horacio Casarín/ATT/Necaxa/Mexique/73
Gerardo Torrado/MIL/Cruz Azul/Mexique/75
Pablo Larios/G/Cruz Azul/Mexique/72
Luis García/ATT/Pumas UNAM/Mexique/75
Héctor Moreno/DEF/PSV/Mexique/77
Javier Aguirre/MIL/Club América/Mexique/70
Adolfo Ríos/G/Club América/Mexique/74
Ricardo Osorio/DEF/Stuttgart/Mexique/72
Duilio Davino/DEF/Club América/Mexique/72
Francisco Javier Rodríguez/DEF/Guadalajara/Mexique/73
Benjamín Galindo/MIL/Guadalajara/Mexique/76
`}
);
Object.assign(window.CLUB_COLORS,{
"Real Madrid":["#FFFFFF","#D4A53A"],"Barcelone":["#A50044","#004D98"],"Atlético Madrid":["#CB3524","#FFFFFF"],
"Juventus":["#000000","#FFFFFF"],"Milan":["#FB090B","#000000"],"Inter":["#0068A8","#000000"],"Naples":["#12A0D7","#FFFFFF"],
"Roma":["#8E1F2F","#F0BC42"],"Lazio":["#87D8F7","#FFFFFF"],"Fiorentina":["#482E92","#FFFFFF"],"Parme":["#FFDD00","#1B4F9C"],
"Sampdoria":["#1B5497","#FFFFFF"],"Cagliari":["#B01028","#0F1F44"],
"PSG":["#004170","#DA291C"],"Marseille":["#FFFFFF","#2FAEE0"],"Reims":["#E2001A","#FFFFFF"],"Montpellier":["#00214E","#F37021"],
"Bordeaux":["#002B5C","#FFFFFF"],"Nantes":["#FCD405","#00A04A"],"Saint-Étienne":["#00A650","#FFFFFF"],"Lyon":["#FFFFFF","#1A3A8F"],
"Monaco":["#E2001A","#FFFFFF"],"Lens":["#FFE500","#E2001A"],
"Bayern":["#DC052D","#FFFFFF"],"Dortmund":["#FDE100","#000000"],"Hambourg":["#FFFFFF","#0A3F86"],"Kaiserslautern":["#E2001A","#FFFFFF"],
"Mönchengladbach":["#FFFFFF","#000000"],"Cologne":["#FFFFFF","#ED1C24"],"Stuttgart":["#FFFFFF","#E32219"],"Leverkusen":["#E32221","#000000"],
"Rot-Weiss Essen":["#E2001A","#FFFFFF"],"Schalke":["#004D9D","#FFFFFF"],"Wolfsburg":["#65B32E","#FFFFFF"],"Hoffenheim":["#1961B5","#FFFFFF"],
"Hertha Berlin":["#005CA9","#FFFFFF"],"Eintracht Francfort":["#000000","#E1000F"],
"Arsenal":["#EF0107","#FFFFFF"],"Chelsea":["#034694","#FFFFFF"],"Manchester United":["#DA291C","#FFFFFF"],"Manchester City":["#6CABDD","#FFFFFF"],
"Liverpool":["#C8102E","#FFFFFF"],"Tottenham":["#FFFFFF","#132257"],"West Ham":["#7A263A","#1BB1E7"],"Leicester":["#003090","#FFFFFF"],
"Blackpool":["#F68712","#FFFFFF"],"Newcastle":["#000000","#FFFFFF"],"Preston North End":["#FFFFFF","#00205B"],"Nottingham Forest":["#DD0000","#FFFFFF"],
"Wolverhampton":["#FDB913","#231F20"],"Everton":["#003399","#FFFFFF"],"Aston Villa":["#670E36","#95BFE5"],
"Valence":["#FFFFFF","#000000"],"Séville":["#FFFFFF","#D71920"],"Betis":["#00954C","#FFFFFF"],"Espanyol":["#007FC8","#FFFFFF"],
"Athletic Bilbao":["#EE2523","#FFFFFF"],"Real Sociedad":["#0067B1","#FFFFFF"],"Villarreal":["#FFE667","#005187"],"Deportivo La Corogne":["#0067B1","#FFFFFF"],
"Ajax":["#D2122E","#FFFFFF"],"PSV":["#ED1C24","#FFFFFF"],"Feyenoord":["#E2001A","#FFFFFF"],
"Benfica":["#E30613","#FFFFFF"],"Porto":["#003893","#FFFFFF"],"Sporting":["#00805F","#FFFFFF"],
"Anderlecht":["#4C2683","#FFFFFF"],"Club Bruges":["#0068B4","#000000"],"Standard Liège":["#E2001A","#FFFFFF"],
"Galatasaray":["#A90432","#FDB912"],"Fenerbahçe":["#FFED00","#00205B"],"Shakhtar Donetsk":["#F26522","#000000"],"Dynamo Kiev":["#FFFFFF","#0033A0"],
"Étoile Rouge de Belgrade":["#E2001A","#FFFFFF"],"Dinamo Zagreb":["#0033A0","#FFFFFF"],"Hajduk Split":["#FFFFFF","#1E3A8A"],
"Santos":["#FFFFFF","#000000"],"Botafogo":["#000000","#FFFFFF"],"Flamengo":["#C3281E","#000000"],"Vasco de Gama":["#000000","#FFFFFF"],
"Corinthians":["#FFFFFF","#000000"],"Cruzeiro":["#2F529E","#FFFFFF"],"Portuguesa":["#E2001A","#006437"],
"River Plate":["#FFFFFF","#E2001A"],"Boca Juniors":["#103F79","#F3B229"],"Racing Club":["#6CACE4","#FFFFFF"],
"Peñarol":["#FFD100","#000000"],"Nacional":["#FFFFFF","#0033A0"],
"Club América":["#FFE000","#1D3A8A"],"Pumas UNAM":["#0B2240","#C5A253"],"León":["#006847","#FFFFFF"],"Guadalajara":["#E30613","#FFFFFF"],
"Cruz Azul":["#1C3F94","#FFFFFF"],"Necaxa":["#E2001A","#FFFFFF"],"Santos Laguna":["#00843D","#FFFFFF"],"Tigres UANL":["#FDB913","#003DA5"]
});

/* ---- themes.js ---- */
window.FOOT_PACKS.push(
{id:"ballons_or",name:"Ballons d'Or",cat:"themes",sub:"Les lauréats et quelques gardiens et défenseurs de légende",raw:`
Lev Yachine/G/Dynamo Moscou/URSS/94
Gianluigi Buffon/G/Juventus/Italie/94
Manuel Neuer/G/Bayern/Allemagne/93
Oliver Kahn/G/Bayern/Allemagne/91
Iker Casillas/G/Real Madrid/Espagne/92
Franz Beckenbauer/DEF/Bayern/Allemagne/96
Fabio Cannavaro/DEF/Juventus/Italie/91
Matthias Sammer/DEF/Dortmund/Allemagne/89
Paolo Maldini/DEF/Milan/Italie/95
Franco Baresi/DEF/Milan/Italie/95
Virgil van Dijk/DEF/Liverpool/Pays-Bas/89
Michel Platini/MIL/Juventus/France/95
Zinédine Zidane/MIL/Real Madrid/France/97
Kaká/MIL/Milan/Brésil/92
Luka Modrić/MIL/Real Madrid/Croatie/92
Rodri/MIL/Manchester City/Espagne/90
Ruud Gullit/MIL/Milan/Pays-Bas/92
Lothar Matthäus/MIL/Bayern/Allemagne/93
Pavel Nedvěd/MIL/Juventus/Tchéquie/91
Luís Figo/MIL/Barcelone/Portugal/92
Bobby Charlton/MIL/Manchester United/Angleterre/93
Gianni Rivera/MIL/Milan/Italie/92
Josef Masopust/MIL/Dukla Prague/Tchécoslovaquie/89
Lionel Messi/ATT/Barcelone/Argentine/99
Cristiano Ronaldo/ATT/Real Madrid/Portugal/98
Ronaldo/ATT/Inter/Brésil/96
Johan Cruyff/ATT/Ajax/Pays-Bas/97
Marco van Basten/ATT/Milan/Pays-Bas/95
Alfredo Di Stéfano/ATT/Real Madrid/Argentine/97
Eusébio/ATT/Benfica/Portugal/95
Gerd Müller/ATT/Bayern/Allemagne/94
Ronaldinho/ATT/Barcelone/Brésil/94
George Weah/ATT/Milan/Liberia/91
Roberto Baggio/ATT/Juventus/Italie/93
Karim Benzema/ATT/Real Madrid/France/91
Ousmane Dembélé/ATT/PSG/France/90
Andriy Shevchenko/ATT/Milan/Ukraine/92
Rivaldo/ATT/Barcelone/Brésil/92
Raymond Kopa/ATT/Reims/France/90
George Best/ATT/Manchester United/Irlande du Nord/94
Giacinto Facchetti/DEF/Inter/Italie/92
Roberto Carlos/DEF/Real Madrid/Brésil/92
`},
{id:"heros_cdm",name:"Héros de Coupe du monde",cat:"themes",sub:"Ils ont fait basculer un Mondial",raw:`
Gordon Banks/G/Leicester City/Angleterre/91
Dino Zoff/G/Juventus/Italie/93
Gianluigi Buffon/G/Juventus/Italie/94
Iker Casillas/G/Real Madrid/Espagne/92
Emiliano Martínez/G/Aston Villa/Argentine/86
Fabien Barthez/G/Monaco/France/86
Fabio Cannavaro/DEF/Juventus/Italie/91
Franz Beckenbauer/DEF/Bayern/Allemagne/96
Lilian Thuram/DEF/Parme/France/89
Bobby Moore/DEF/West Ham/Angleterre/91
Daniel Passarella/DEF/River Plate/Argentine/90
Cafu/DEF/Roma/Brésil/91
Philipp Lahm/DEF/Bayern/Allemagne/92
Carles Puyol/DEF/Barcelone/Espagne/89
Andreas Brehme/DEF/Inter/Allemagne/88
Zinédine Zidane/MIL/Juventus/France/97
Andrés Iniesta/MIL/Barcelone/Espagne/93
Bobby Charlton/MIL/Manchester United/Angleterre/93
Didier Deschamps/MIL/Juventus/France/86
Paul Pogba/MIL/Manchester United/France/86
Lothar Matthäus/MIL/Inter/Allemagne/93
Mario Götze/MIL/Bayern/Allemagne/83
Andrea Pirlo/MIL/Milan/Italie/92
Luka Modrić/MIL/Real Madrid/Croatie/92
Pelé/ATT/Santos/Brésil/99
Diego Maradona/ATT/Napoli/Argentine/99
Ronaldo/ATT/Inter/Brésil/96
Miroslav Klose/ATT/Bayern/Allemagne/88
Gerd Müller/ATT/Bayern/Allemagne/94
Just Fontaine/ATT/Reims/France/88
Paolo Rossi/ATT/Juventus/Italie/89
Mario Kempes/ATT/Valence/Argentine/89
Geoff Hurst/ATT/West Ham/Angleterre/84
Lionel Messi/ATT/Barcelone/Argentine/99
Kylian Mbappé/ATT/PSG/France/92
Garrincha/ATT/Botafogo/Brésil/95
Romário/ATT/Barcelone/Brésil/93
Eusébio/ATT/Benfica/Portugal/95
Davor Šuker/ATT/Real Madrid/Croatie/88
David Villa/ATT/Valence/Espagne/88
Xavi/MIL/Barcelone/Espagne/93
`},
{id:"heros_ldc",name:"Héros de Ligue des champions",cat:"themes",sub:"Les rois des soirées européennes",raw:`
Oliver Kahn/G/Bayern/Allemagne/91
Jerzy Dudek/G/Liverpool/Pologne/82
Iker Casillas/G/Real Madrid/Espagne/92
Edwin van der Sar/G/Manchester United/Pays-Bas/90
Petr Čech/G/Chelsea/Tchéquie/90
Thibaut Courtois/G/Real Madrid/Belgique/90
Paolo Maldini/DEF/Milan/Italie/95
Sergio Ramos/DEF/Real Madrid/Espagne/92
Carles Puyol/DEF/Barcelone/Espagne/89
Franco Baresi/DEF/Milan/Italie/95
Dani Alves/DEF/Barcelone/Brésil/88
Marcelo/DEF/Real Madrid/Brésil/89
Virgil van Dijk/DEF/Liverpool/Pays-Bas/89
Javier Zanetti/DEF/Inter/Argentine/89
Zinédine Zidane/MIL/Real Madrid/France/97
Steven Gerrard/MIL/Liverpool/Angleterre/91
Andrés Iniesta/MIL/Barcelone/Espagne/93
Xavi/MIL/Barcelone/Espagne/93
Luka Modrić/MIL/Real Madrid/Croatie/92
Clarence Seedorf/MIL/Milan/Pays-Bas/89
Kaká/MIL/Milan/Brésil/92
Toni Kroos/MIL/Real Madrid/Allemagne/91
Rodri/MIL/Manchester City/Espagne/90
Cristiano Ronaldo/ATT/Real Madrid/Portugal/98
Lionel Messi/ATT/Barcelone/Argentine/99
Karim Benzema/ATT/Real Madrid/France/91
Alfredo Di Stéfano/ATT/Real Madrid/Argentine/97
Ferenc Puskás/ATT/Real Madrid/Hongrie/95
Gareth Bale/ATT/Real Madrid/Pays de Galles/89
Didier Drogba/ATT/Chelsea/Côte d'Ivoire/89
Ole Gunnar Solskjær/ATT/Manchester United/Norvège/80
Andriy Shevchenko/ATT/Milan/Ukraine/92
Raúl/ATT/Real Madrid/Espagne/91
Vinícius Júnior/ATT/Real Madrid/Brésil/90
Diego Milito/ATT/Inter/Argentine/85
Samuel Eto'o/ATT/Barcelone/Cameroun/91
Ousmane Dembélé/ATT/PSG/France/90
Kingsley Coman/ATT/Bayern/France/84
Andrea Pirlo/MIL/Milan/Italie/92
`},
{id:"leg_pl",name:"Légendes de Premier League",cat:"themes",sub:"Les monstres du championnat anglais",raw:`
Peter Schmeichel/G/Manchester United/Danemark/92
Petr Čech/G/Chelsea/Tchéquie/90
David Seaman/G/Arsenal/Angleterre/85
Edwin van der Sar/G/Manchester United/Pays-Bas/90
Alisson/G/Liverpool/Brésil/89
Ederson/G/Manchester City/Brésil/86
John Terry/DEF/Chelsea/Angleterre/89
Rio Ferdinand/DEF/Manchester United/Angleterre/88
Vincent Kompany/DEF/Manchester City/Belgique/87
Ashley Cole/DEF/Chelsea/Angleterre/86
Gary Neville/DEF/Manchester United/Angleterre/83
Tony Adams/DEF/Arsenal/Angleterre/86
Virgil van Dijk/DEF/Liverpool/Pays-Bas/89
Nemanja Vidić/DEF/Manchester United/Serbie/88
Sol Campbell/DEF/Arsenal/Angleterre/85
Jamie Carragher/DEF/Liverpool/Angleterre/82
Steven Gerrard/MIL/Liverpool/Angleterre/91
Frank Lampard/MIL/Chelsea/Angleterre/89
Paul Scholes/MIL/Manchester United/Angleterre/89
Ryan Giggs/MIL/Manchester United/Pays de Galles/89
Patrick Vieira/MIL/Arsenal/France/90
Roy Keane/MIL/Manchester United/Irlande/89
Kevin De Bruyne/MIL/Manchester City/Belgique/90
David Silva/MIL/Manchester City/Espagne/88
Cesc Fàbregas/MIL/Arsenal/Espagne/87
Yaya Touré/MIL/Manchester City/Côte d'Ivoire/90
Alan Shearer/ATT/Newcastle/Angleterre/90
Thierry Henry/ATT/Arsenal/France/93
Wayne Rooney/ATT/Manchester United/Angleterre/91
Cristiano Ronaldo/ATT/Manchester United/Portugal/98
Mohamed Salah/ATT/Liverpool/Égypte/90
Sergio Agüero/ATT/Manchester City/Argentine/89
Didier Drogba/ATT/Chelsea/Côte d'Ivoire/89
Harry Kane/ATT/Tottenham/Angleterre/90
Dennis Bergkamp/ATT/Arsenal/Pays-Bas/91
Eric Cantona/ATT/Manchester United/France/89
Erling Haaland/ATT/Manchester City/Norvège/90
Robin van Persie/ATT/Arsenal/Pays-Bas/88
Luis Suárez/ATT/Liverpool/Uruguay/91`},
{id:"leg_liga",name:"Légendes de Liga",cat:"themes",sub:"Les géants du championnat espagnol",raw:`
Iker Casillas/G/Real Madrid/Espagne/92
Andoni Zubizarreta/G/Barcelone/Espagne/86
Víctor Valdés/G/Barcelone/Espagne/85
Jan Oblak/G/Atlético de Madrid/Slovénie/89
Thibaut Courtois/G/Real Madrid/Belgique/90
Marc-André ter Stegen/G/Barcelone/Allemagne/88
Sergio Ramos/DEF/Real Madrid/Espagne/92
Carles Puyol/DEF/Barcelone/Espagne/89
Fernando Hierro/DEF/Real Madrid/Espagne/88
Roberto Carlos/DEF/Real Madrid/Brésil/92
Gerard Piqué/DEF/Barcelone/Espagne/88
Dani Alves/DEF/Barcelone/Brésil/88
Marcelo/DEF/Real Madrid/Brésil/89
Diego Godín/DEF/Atlético de Madrid/Uruguay/87
Ronald Koeman/DEF/Barcelone/Pays-Bas/89
Xavi/MIL/Barcelone/Espagne/93
Andrés Iniesta/MIL/Barcelone/Espagne/93
Luka Modrić/MIL/Real Madrid/Croatie/92
Toni Kroos/MIL/Real Madrid/Allemagne/91
Sergio Busquets/MIL/Barcelone/Espagne/89
Zinédine Zidane/MIL/Real Madrid/France/97
Luís Figo/MIL/Barcelone/Portugal/92
Koke/MIL/Atlético de Madrid/Espagne/83
Michael Laudrup/MIL/Barcelone/Danemark/92
Lionel Messi/ATT/Barcelone/Argentine/99
Cristiano Ronaldo/ATT/Real Madrid/Portugal/98
Alfredo Di Stéfano/ATT/Real Madrid/Argentine/97
Raúl/ATT/Real Madrid/Espagne/91
Karim Benzema/ATT/Real Madrid/France/91
Telmo Zarra/ATT/Athletic Bilbao/Espagne/87
Hugo Sánchez/ATT/Real Madrid/Mexique/88
Ronaldo/ATT/Real Madrid/Brésil/96
Ronaldinho/ATT/Barcelone/Brésil/94
Ferenc Puskás/ATT/Real Madrid/Hongrie/95
Antoine Griezmann/ATT/Atlético de Madrid/France/89
Luis Suárez/ATT/Barcelone/Uruguay/91
Samuel Eto'o/ATT/Barcelone/Cameroun/91
David Villa/ATT/Valence/Espagne/88
Johan Cruyff/ATT/Barcelone/Pays-Bas/97
Fernando Redondo/MIL/Real Madrid/Argentine/88
`},
{id:"leg_seriea",name:"Légendes de Serie A",cat:"themes",sub:"Les maîtres du Calcio",raw:`
Gianluigi Buffon/G/Juventus/Italie/94
Dino Zoff/G/Juventus/Italie/93
Walter Zenga/G/Inter/Italie/86
Gianluca Pagliuca/G/Sampdoria/Italie/83
Francesco Toldo/G/Fiorentina/Italie/84
Samir Handanović/G/Inter/Slovénie/85
Paolo Maldini/DEF/Milan/Italie/95
Franco Baresi/DEF/Milan/Italie/95
Alessandro Nesta/DEF/Milan/Italie/91
Fabio Cannavaro/DEF/Parme/Italie/91
Giorgio Chiellini/DEF/Juventus/Italie/88
Javier Zanetti/DEF/Inter/Argentine/89
Giuseppe Bergomi/DEF/Inter/Italie/86
Gaetano Scirea/DEF/Juventus/Italie/91
Andrea Pirlo/MIL/Milan/Italie/92
Michel Platini/MIL/Juventus/France/95
Pavel Nedvěd/MIL/Juventus/Tchéquie/91
Clarence Seedorf/MIL/Milan/Pays-Bas/89
Gennaro Gattuso/MIL/Milan/Italie/86
Kaká/MIL/Milan/Brésil/92
Gianni Rivera/MIL/Milan/Italie/92
Daniele De Rossi/MIL/Roma/Italie/87
Zinédine Zidane/MIL/Juventus/France/97
Ruud Gullit/MIL/Milan/Pays-Bas/92
Lothar Matthäus/MIL/Inter/Allemagne/93
Diego Maradona/ATT/Napoli/Argentine/99
Francesco Totti/ATT/Roma/Italie/92
Roberto Baggio/ATT/Juventus/Italie/93
Marco van Basten/ATT/Milan/Pays-Bas/95
Silvio Piola/ATT/Lazio/Italie/88
Gunnar Nordahl/ATT/Milan/Suède/90
Giuseppe Meazza/ATT/Inter/Italie/93
Alessandro Del Piero/ATT/Juventus/Italie/92
Andriy Shevchenko/ATT/Milan/Ukraine/92
Gabriel Batistuta/ATT/Fiorentina/Argentine/89
Ronaldo/ATT/Inter/Brésil/96
Zlatan Ibrahimović/ATT/Milan/Suède/91
Luigi Riva/ATT/Cagliari/Italie/90
Antonio Di Natale/ATT/Udinese/Italie/84`},
{id:"leg_bundesliga",name:"Légendes de Bundesliga",cat:"themes",sub:"Les légendes du championnat allemand",raw:`
Sepp Maier/G/Bayern/Allemagne/90
Oliver Kahn/G/Bayern/Allemagne/91
Manuel Neuer/G/Bayern/Allemagne/93
Toni Schumacher/G/Cologne/Allemagne/84
Roman Weidenfeller/G/Dortmund/Allemagne/77
Jens Lehmann/G/Schalke/Allemagne/84
Franz Beckenbauer/DEF/Bayern/Allemagne/96
Philipp Lahm/DEF/Bayern/Allemagne/92
Paul Breitner/DEF/Bayern/Allemagne/89
Matthias Sammer/DEF/Dortmund/Allemagne/89
Jürgen Kohler/DEF/Dortmund/Allemagne/86
Mats Hummels/DEF/Dortmund/Allemagne/87
Jérôme Boateng/DEF/Bayern/Allemagne/86
David Alaba/DEF/Bayern/Autriche/86
Berti Vogts/DEF/Mönchengladbach/Allemagne/86
Hans-Georg Schwarzenbeck/DEF/Bayern/Allemagne/82
Lothar Matthäus/MIL/Bayern/Allemagne/93
Günter Netzer/MIL/Mönchengladbach/Allemagne/87
Bastian Schweinsteiger/MIL/Bayern/Allemagne/90
Michael Ballack/MIL/Bayer Leverkusen/Allemagne/89
Felix Magath/MIL/Hambourg/Allemagne/83
Wolfgang Overath/MIL/Cologne/Allemagne/85
Marco Reus/MIL/Dortmund/Allemagne/85
Joshua Kimmich/MIL/Bayern/Allemagne/89
Gerd Müller/ATT/Bayern/Allemagne/94
Robert Lewandowski/ATT/Bayern/Pologne/92
Jupp Heynckes/ATT/Mönchengladbach/Allemagne/84
Klaus Fischer/ATT/Schalke/Allemagne/82
Karl-Heinz Rummenigge/ATT/Bayern/Allemagne/91
Uwe Seeler/ATT/Hambourg/Allemagne/88
Thomas Müller/ATT/Bayern/Allemagne/89
Franck Ribéry/ATT/Bayern/France/89
Arjen Robben/ATT/Bayern/Pays-Bas/90
Claudio Pizarro/ATT/Werder Brême/Pérou/83
Harry Kane/ATT/Bayern/Angleterre/90
Erling Haaland/ATT/Dortmund/Norvège/90
Rudi Völler/ATT/Werder Brême/Allemagne/87
Stefan Effenberg/MIL/Bayern/Allemagne/86
Andreas Möller/MIL/Dortmund/Allemagne/86
`},
{id:"leg_ligue1",name:"Légendes de Ligue 1",cat:"themes",sub:"Les grands noms du championnat de France",raw:`
Grégory Coupet/G/Lyon/France/83
Steve Mandanda/G/Marseille/France/82
Bernard Lama/G/PSG/France/82
Fabien Barthez/G/Monaco/France/86
Hugo Lloris/G/Lyon/France/87
Joël Bats/G/PSG/France/80
Marius Trésor/DEF/Bordeaux/France/86
Basile Boli/DEF/Marseille/France/83
Marcel Desailly/DEF/Nantes/France/89
Thiago Silva/DEF/PSG/Brésil/89
Marquinhos/DEF/PSG/Brésil/87
Laurent Blanc/DEF/Montpellier/France/87
Manuel Amoros/DEF/Monaco/France/84
Patrick Battiston/DEF/Bordeaux/France/83
Michel Platini/MIL/Saint-Étienne/France/95
Jean Tigana/MIL/Bordeaux/France/87
Alain Giresse/MIL/Bordeaux/France/87
Juninho/MIL/Lyon/Brésil/87
Raí/MIL/PSG/Brésil/85
Zinédine Zidane/MIL/Bordeaux/France/97
Didier Deschamps/MIL/Marseille/France/86
Abedi Pelé/MIL/Marseille/Ghana/87
Chris Waddle/MIL/Marseille/Angleterre/82
Safet Sušić/MIL/PSG/Yougoslavie/86
Jean-Pierre Papin/ATT/Marseille/France/89
Zlatan Ibrahimović/ATT/PSG/Suède/91
Kylian Mbappé/ATT/PSG/France/92
Delio Onnis/ATT/Monaco/Argentine/84
Josip Skoblar/ATT/Marseille/Yougoslavie/84
Carlos Bianchi/ATT/Reims/Argentine/84
Just Fontaine/ATT/Reims/France/88
Raymond Kopa/ATT/Reims/France/90
Didier Drogba/ATT/Marseille/Côte d'Ivoire/89
Edinson Cavani/ATT/PSG/Uruguay/88
George Weah/ATT/PSG/Liberia/91
Karim Benzema/ATT/Lyon/France/91
Sonny Anderson/ATT/Lyon/Brésil/82
Pauleta/ATT/PSG/Portugal/84
Hervé Revelli/ATT/Saint-Étienne/France/81`},
{id:"clasico",name:"Le Clasico",cat:"themes",sub:"Real Madrid contre Barcelone",raw:`
Iker Casillas/G/Real Madrid/Espagne/92
Thibaut Courtois/G/Real Madrid/Belgique/90
Ricardo Zamora/G/Real Madrid/Espagne/88
Víctor Valdés/G/Barcelone/Espagne/85
Andoni Zubizarreta/G/Barcelone/Espagne/86
Marc-André ter Stegen/G/Barcelone/Allemagne/88
Sergio Ramos/DEF/Real Madrid/Espagne/92
Fernando Hierro/DEF/Real Madrid/Espagne/88
Roberto Carlos/DEF/Real Madrid/Brésil/92
Marcelo/DEF/Real Madrid/Brésil/89
Carles Puyol/DEF/Barcelone/Espagne/89
Gerard Piqué/DEF/Barcelone/Espagne/88
Dani Alves/DEF/Barcelone/Brésil/88
Ronald Koeman/DEF/Barcelone/Pays-Bas/89
Zinédine Zidane/MIL/Real Madrid/France/97
Luka Modrić/MIL/Real Madrid/Croatie/92
Toni Kroos/MIL/Real Madrid/Allemagne/91
Fernando Redondo/MIL/Real Madrid/Argentine/88
Xavi/MIL/Barcelone/Espagne/93
Andrés Iniesta/MIL/Barcelone/Espagne/93
Sergio Busquets/MIL/Barcelone/Espagne/89
Pep Guardiola/MIL/Barcelone/Espagne/86
Luís Figo/MIL/Barcelone/Portugal/92
Alfredo Di Stéfano/ATT/Real Madrid/Argentine/97
Cristiano Ronaldo/ATT/Real Madrid/Portugal/98
Raúl/ATT/Real Madrid/Espagne/91
Karim Benzema/ATT/Real Madrid/France/91
Ferenc Puskás/ATT/Real Madrid/Hongrie/95
Hugo Sánchez/ATT/Real Madrid/Mexique/88
Paco Gento/ATT/Real Madrid/Espagne/90
Vinícius Júnior/ATT/Real Madrid/Brésil/90
Lionel Messi/ATT/Barcelone/Argentine/99
Johan Cruyff/ATT/Barcelone/Pays-Bas/97
Ronaldinho/ATT/Barcelone/Brésil/94
László Kubala/ATT/Barcelone/Hongrie/92
Rivaldo/ATT/Barcelone/Brésil/92
Neymar/ATT/Barcelone/Brésil/91
Luis Suárez/ATT/Barcelone/Uruguay/91
Samuel Eto'o/ATT/Barcelone/Cameroun/91
Michael Laudrup/MIL/Barcelone/Danemark/92
`},
{id:"classique",name:"Le Classique PSG-OM",cat:"themes",sub:"Paris contre Marseille",raw:`
Bernard Lama/G/PSG/France/82
Keylor Navas/G/PSG/Costa Rica/86
Gianluigi Donnarumma/G/PSG/Italie/88
Steve Mandanda/G/Marseille/France/82
Fabien Barthez/G/Marseille/France/86
Joseph-Antoine Bell/G/Marseille/Cameroun/82
Thiago Silva/DEF/PSG/Brésil/89
Marquinhos/DEF/PSG/Brésil/87
Ricardo Gomes/DEF/PSG/Brésil/80
Maxwell/DEF/PSG/Brésil/79
Achraf Hakimi/DEF/PSG/Maroc/87
Basile Boli/DEF/Marseille/France/83
Marcel Desailly/DEF/Marseille/France/89
Éric Di Meco/DEF/Marseille/France/77
Manuel Amoros/DEF/Marseille/France/84
Carlos Mozer/DEF/Marseille/Brésil/83
Raí/MIL/PSG/Brésil/85
Safet Sušić/MIL/PSG/Yougoslavie/86
Luis Fernandez/MIL/PSG/France/84
Marco Verratti/MIL/PSG/Italie/86
Didier Deschamps/MIL/Marseille/France/86
Abedi Pelé/MIL/Marseille/Ghana/87
Chris Waddle/MIL/Marseille/Angleterre/82
Franck Sauzée/MIL/Marseille/France/80
Dimitri Payet/MIL/Marseille/France/82
Zlatan Ibrahimović/ATT/PSG/Suède/91
Kylian Mbappé/ATT/PSG/France/92
Edinson Cavani/ATT/PSG/Uruguay/88
Pauleta/ATT/PSG/Portugal/84
George Weah/ATT/PSG/Liberia/91
Neymar/ATT/PSG/Brésil/91
Dominique Rocheteau/ATT/PSG/France/83
Jean-Pierre Papin/ATT/Marseille/France/89
Didier Drogba/ATT/Marseille/Côte d'Ivoire/89
Josip Skoblar/ATT/Marseille/Yougoslavie/84
Rudi Völler/ATT/Marseille/Allemagne/87
Mamadou Niang/ATT/Marseille/Sénégal/80
Alen Bokšić/ATT/Marseille/Croatie/83
Roger Magnusson/ATT/Marseille/Suède/79
Thiago Motta/MIL/PSG/Italie/82
`},
{id:"derby_manchester",name:"Derby de Manchester",cat:"themes",sub:"United contre City",raw:`
Peter Schmeichel/G/Manchester United/Danemark/92
Edwin van der Sar/G/Manchester United/Pays-Bas/90
David de Gea/G/Manchester United/Espagne/86
Bert Trautmann/G/Manchester City/Allemagne/86
Joe Corrigan/G/Manchester City/Angleterre/75
Ederson/G/Manchester City/Brésil/86
Rio Ferdinand/DEF/Manchester United/Angleterre/88
Nemanja Vidić/DEF/Manchester United/Serbie/88
Gary Neville/DEF/Manchester United/Angleterre/83
Patrice Evra/DEF/Manchester United/France/85
Denis Irwin/DEF/Manchester United/Irlande/84
Vincent Kompany/DEF/Manchester City/Belgique/87
Pablo Zabaleta/DEF/Manchester City/Argentine/81
Kyle Walker/DEF/Manchester City/Angleterre/84
Rúben Dias/DEF/Manchester City/Portugal/87
Bobby Charlton/MIL/Manchester United/Angleterre/93
Paul Scholes/MIL/Manchester United/Angleterre/89
Ryan Giggs/MIL/Manchester United/Pays de Galles/89
Roy Keane/MIL/Manchester United/Irlande/89
Bryan Robson/MIL/Manchester United/Angleterre/86
David Beckham/MIL/Manchester United/Angleterre/89
Kevin De Bruyne/MIL/Manchester City/Belgique/90
David Silva/MIL/Manchester City/Espagne/88
Yaya Touré/MIL/Manchester City/Côte d'Ivoire/90
Rodri/MIL/Manchester City/Espagne/90
Colin Bell/MIL/Manchester City/Angleterre/82
Bernardo Silva/MIL/Manchester City/Portugal/88
George Best/ATT/Manchester United/Irlande du Nord/94
Denis Law/ATT/Manchester United/Écosse/90
Eric Cantona/ATT/Manchester United/France/89
Wayne Rooney/ATT/Manchester United/Angleterre/91
Cristiano Ronaldo/ATT/Manchester United/Portugal/98
Ruud van Nistelrooy/ATT/Manchester United/Pays-Bas/89
Sergio Agüero/ATT/Manchester City/Argentine/89
Erling Haaland/ATT/Manchester City/Norvège/90
Francis Lee/ATT/Manchester City/Angleterre/80
Phil Foden/ATT/Manchester City/Angleterre/87
Raheem Sterling/ATT/Manchester City/Angleterre/85
Carlos Tevez/ATT/Manchester City/Argentine/86`},
{id:"derby_milan",name:"Derby de Milan",cat:"themes",sub:"Le Milan contre l'Inter",raw:`
Dida/G/Milan/Brésil/85
Sebastiano Rossi/G/Milan/Italie/80
Mike Maignan/G/Milan/France/86
Walter Zenga/G/Inter/Italie/86
Júlio César/G/Inter/Brésil/85
Francesco Toldo/G/Inter/Italie/84
Paolo Maldini/DEF/Milan/Italie/95
Franco Baresi/DEF/Milan/Italie/95
Alessandro Nesta/DEF/Milan/Italie/91
Mauro Tassotti/DEF/Milan/Italie/83
Javier Zanetti/DEF/Inter/Argentine/89
Giacinto Facchetti/DEF/Inter/Italie/92
Giuseppe Bergomi/DEF/Inter/Italie/86
Lúcio/DEF/Inter/Brésil/87
Gianni Rivera/MIL/Milan/Italie/92
Andrea Pirlo/MIL/Milan/Italie/92
Clarence Seedorf/MIL/Milan/Pays-Bas/89
Gennaro Gattuso/MIL/Milan/Italie/86
Kaká/MIL/Milan/Brésil/92
Ruud Gullit/MIL/Milan/Pays-Bas/92
Frank Rijkaard/MIL/Milan/Pays-Bas/91
Lothar Matthäus/MIL/Inter/Allemagne/93
Wesley Sneijder/MIL/Inter/Pays-Bas/88
Esteban Cambiasso/MIL/Inter/Argentine/85
Sandro Mazzola/MIL/Inter/Italie/89
Luis Suárez Miramontes/MIL/Inter/Espagne/90
Nicolò Barella/MIL/Inter/Italie/87
Marco van Basten/ATT/Milan/Pays-Bas/95
Andriy Shevchenko/ATT/Milan/Ukraine/92
Gunnar Nordahl/ATT/Milan/Suède/90
George Weah/ATT/Milan/Liberia/91
Filippo Inzaghi/ATT/Milan/Italie/86
Zlatan Ibrahimović/ATT/Milan/Suède/91
Giuseppe Meazza/ATT/Inter/Italie/93
Ronaldo/ATT/Inter/Brésil/96
Diego Milito/ATT/Inter/Argentine/85
Christian Vieri/ATT/Inter/Italie/87
Lautaro Martínez/ATT/Inter/Argentine/87
Alessandro Altobelli/ATT/Inter/Italie/84`}
);
Object.assign(window.CLUB_COLORS,{
"Real Madrid":["#FFFFFF","#FEBE10"],"Barcelone":["#A50044","#004D98"],"Milan":["#FB090B","#000000"],"Inter":["#0068A8","#000000"],
"Juventus":["#FFFFFF","#000000"],"Bayern":["#DC052D","#FFFFFF"],"Manchester United":["#DA291C","#FFFFFF"],"Manchester City":["#6CABDD","#FFFFFF"],
"PSG":["#004170","#DA291C"],"Marseille":["#FFFFFF","#2FAEE0"],"Dynamo Moscou":["#0033A0","#FFFFFF"],"Dortmund":["#FDE100","#000000"],
"Liverpool":["#C8102E","#FFFFFF"],"Dukla Prague":["#8B1A1A","#FFD700"],"Ajax":["#FFFFFF","#D2122E"],"Benfica":["#E83030","#FFFFFF"],
"Reims":["#E30613","#FFFFFF"],"Leicester City":["#003090","#FDBE11"],"Aston Villa":["#670E36","#95BFE5"],"Monaco":["#E4002B","#FFFFFF"],
"West Ham":["#7A263A","#1BB1E7"],"River Plate":["#FFFFFF","#EB1C24"],"Roma":["#8E1F2F","#F0BC42"],"Santos":["#FFFFFF","#000000"],
"Napoli":["#12A0D7","#FFFFFF"],"Valence":["#FFFFFF","#000000"],"Botafogo":["#000000","#FFFFFF"],"Atlético de Madrid":["#CB3524","#FFFFFF"],
"Chelsea":["#034694","#FFFFFF"],"Arsenal":["#EF0107","#FFFFFF"],"Newcastle":["#000000","#FFFFFF"],"Tottenham":["#FFFFFF","#132257"],
"Athletic Bilbao":["#EE2523","#FFFFFF"],"Sampdoria":["#1B5497","#FFFFFF"],"Fiorentina":["#482E92","#FFFFFF"],"Parme":["#FFD200","#1B4F9C"],
"Lazio":["#87D8F7","#FFFFFF"],"Cagliari":["#A6192E","#002350"],"Udinese":["#FFFFFF","#000000"],"Cologne":["#FFFFFF","#ED1C24"],
"Schalke":["#004D9D","#FFFFFF"],"Mönchengladbach":["#FFFFFF","#000000"],"Bayer Leverkusen":["#E32221","#000000"],"Hambourg":["#FFFFFF","#E2001A"],
"Werder Brême":["#1D9053","#FFFFFF"],"Saint-Étienne":["#009639","#FFFFFF"],"Bordeaux":["#001F5B","#FFFFFF"],"Nantes":["#FCD405","#00863F"],
"Lyon":["#FFFFFF","#DA001A"],"Montpellier":["#F26522","#00205B"],"Espanyol":["#007FC8","#FFFFFF"],"Majorque":["#E20613","#000000"],
"Lille":["#E01E13","#20325F"],"Séville":["#FFFFFF","#D81E05"],"Al Ahly":["#E30613","#FFFFFF"],"Galatasaray":["#A90432","#FDB912"],
"La Corogne":["#0067B1","#FFFFFF"],"Porto":["#003893","#FFFFFF"],"Vitória Setúbal":["#008000","#FFFFFF"],"Rennes":["#E13327","#000000"]});
