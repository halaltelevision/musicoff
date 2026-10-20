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
Kylian Mbappé/ATT/Real Madrid/France/98
Lamine Yamal/ATT/Barcelone/Espagne/97
Vinícius Jr/ATT/Real Madrid/Brésil/96
Pedri/MIL/Barcelone/Espagne/94
Jude Bellingham/MIL/Real Madrid/Angleterre/93
Raphinha/ATT/Barcelone/Brésil/92
Thibaut Courtois/G/Real Madrid/Belgique/91
Federico Valverde/MIL/Real Madrid/Uruguay/90
Julián Álvarez/ATT/Atlético Madrid/Argentine/89
Jan Oblak/G/Atlético Madrid/Slovénie/88
Aurélien Tchouaméni/MIL/Real Madrid/France/87
Frenkie de Jong/MIL/Barcelone/Pays-Bas/86
Jules Koundé/DEF/Barcelone/France/85
Pau Cubarsí/DEF/Barcelone/Espagne/84
Joan García/G/Barcelone/Espagne/83
Arda Güler/MIL/Real Madrid/Turquie/82
Nico Williams/ATT/Athletic Bilbao/Espagne/81
Robert Lewandowski/ATT/Barcelone/Pologne/80
Trent Alexander-Arnold/DEF/Real Madrid/Angleterre/80
Antonio Rüdiger/DEF/Real Madrid/Allemagne/79
Dean Huijsen/DEF/Real Madrid/Espagne/78
Antoine Griezmann/ATT/Atlético Madrid/France/77
Dani Olmo/MIL/Barcelone/Espagne/76
Marcus Rashford/ATT/Barcelone/Angleterre/75
Rodrygo/ATT/Real Madrid/Brésil/74
Éder Militão/DEF/Real Madrid/Brésil/73
Eduardo Camavinga/MIL/Real Madrid/France/72
Álvaro Carreras/DEF/Real Madrid/Espagne/71
Fermín López/MIL/Barcelone/Espagne/70
Gavi/MIL/Barcelone/Espagne/69
Alejandro Balde/DEF/Barcelone/Espagne/68
Ferran Torres/ATT/Barcelone/Espagne/67
Álex Baena/MIL/Atlético Madrid/Espagne/66
Alexander Sørloth/ATT/Atlético Madrid/Norvège/65
Mikel Oyarzabal/ATT/Real Sociedad/Espagne/64
Takefusa Kubo/ATT/Real Sociedad/Japon/63
Franco Mastantuono/ATT/Real Madrid/Argentine/62
Unai Simón/G/Athletic Bilbao/Espagne/61
Wojciech Szczęsny/G/Barcelone/Pologne/72`},
{id:"s_seriea",name:"Serie A",cat:"ligues",sub:"Championnats",raw:`
Lautaro Martínez/ATT/Inter/Argentine/98
Kevin De Bruyne/MIL/Naples/Belgique/97
Mike Maignan/G/Milan/France/96
Nicolò Barella/MIL/Inter/Italie/94
Alessandro Bastoni/DEF/Inter/Italie/93
Scott McTominay/MIL/Naples/Écosse/92
Hakan Çalhanoğlu/MIL/Inter/Turquie/91
Rafael Leão/ATT/Milan/Portugal/90
Kenan Yıldız/ATT/Juventus/Turquie/89
Marcus Thuram/ATT/Inter/France/88
Luka Modrić/MIL/Milan/Croatie/87
Federico Dimarco/DEF/Inter/Italie/86
Gleison Bremer/DEF/Juventus/Brésil/85
Christian Pulisic/ATT/Milan/États-Unis/84
Ademola Lookman/ATT/Atalanta/Nigeria/83
Nico Paz/MIL/Côme/Argentine/82
Mile Svilar/G/Roma/Serbie/81
Adrien Rabiot/MIL/Milan/France/80
Dušan Vlahović/ATT/Juventus/Serbie/80
Rasmus Højlund/ATT/Naples/Danemark/79
Frank Anguissa/MIL/Naples/Cameroun/78
Denzel Dumfries/DEF/Inter/Pays-Bas/77
Stanislav Lobotka/MIL/Naples/Slovaquie/76
Manu Koné/MIL/Roma/France/75
Yann Sommer/G/Inter/Suisse/74
Jonathan David/ATT/Juventus/Canada/73
Paulo Dybala/ATT/Roma/Argentine/72
Romelu Lukaku/ATT/Naples/Belgique/71
Teun Koopmeiners/DEF/Juventus/Pays-Bas/70
Francisco Conceição/ATT/Juventus/Portugal/69
Charles De Ketelaere/ATT/Atalanta/Belgique/68
Moise Kean/ATT/Fiorentina/Italie/67
Christopher Nkunku/ATT/Milan/France/66
Álvaro Morata/ATT/Côme/Espagne/65
Mattia Zaccagni/ATT/Lazio/Italie/64
Riccardo Orsolini/ATT/Bologne/Italie/63
Matías Soulé/ATT/Roma/Argentine/62
Michele Di Gregorio/G/Juventus/Italie/76
Marco Carnesecchi/G/Atalanta/Italie/72
Giovanni Di Lorenzo/DEF/Naples/Italie/79`},
{id:"s_fra",name:"France",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Kylian Mbappé/ATT/Real Madrid/France/98
Ousmane Dembélé/ATT/PSG/France/97
Michael Olise/ATT/Bayern/France/96
William Saliba/DEF/Arsenal/France/94
Mike Maignan/G/Milan/France/93
Désiré Doué/ATT/PSG/France/92
Aurélien Tchouaméni/MIL/Real Madrid/France/91
Jules Koundé/DEF/Barcelone/France/90
Dayot Upamecano/DEF/Bayern/France/89
Ibrahima Konaté/DEF/Liverpool/France/88
Hugo Ekitike/ATT/Liverpool/France/87
Rayan Cherki/MIL/Manchester City/France/86
Eduardo Camavinga/MIL/Real Madrid/France/85
Bradley Barcola/ATT/PSG/France/84
Marcus Thuram/ATT/Inter/France/83
Manu Koné/MIL/Roma/France/82
Warren Zaïre-Emery/MIL/PSG/France/81
Adrien Rabiot/MIL/Milan/France/80
Lucas Chevalier/G/PSG/France/80
Théo Hernandez/DEF/Al-Hilal/France/79
Maghnes Akliouche/MIL/Monaco/France/78
Lucas Hernandez/DEF/PSG/France/77
Malo Gusto/DEF/Chelsea/France/76
Youssouf Fofana/MIL/Milan/France/75
Khéphren Thuram/MIL/Juventus/France/74
N'Golo Kanté/MIL/Al-Ittihad/France/73
Randal Kolo Muani/ATT/Tottenham/France/72
Jean-Philippe Mateta/ATT/Crystal Palace/France/71
Christopher Nkunku/ATT/Milan/France/70
Kingsley Coman/ATT/Al-Nassr/France/69
Castello Lukeba/DEF/Leipzig/France/68
Maxence Lacroix/DEF/Crystal Palace/France/67
Pierre Kalulu/DEF/Juventus/France/66
Lucas Digne/DEF/Aston Villa/France/65
Brice Samba/G/Rennes/France/64
Mattéo Guendouzi/MIL/Fenerbahçe/France/63
Wesley Fofana/DEF/Chelsea/France/62
Alphonse Areola/G/West Ham/France/61
Robin Risser/G/Lens/France/63`},
{id:"s_mar",name:"Maroc",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Achraf Hakimi/DEF/PSG/Maroc/98
Yassine Bounou/G/Al-Hilal/Maroc/97
Brahim Díaz/MIL/Real Madrid/Maroc/96
Noussair Mazraoui/DEF/Manchester United/Maroc/94
Nayef Aguerd/DEF/Marseille/Maroc/93
Abde Ezzalzouli/ATT/Betis/Maroc/92
Youssef En-Nesyri/ATT/Fenerbahçe/Maroc/91
Ismael Saibari/MIL/PSV/Maroc/90
Bilal El Khannouss/MIL/Stuttgart/Maroc/89
Neil El Aynaoui/MIL/Roma/Maroc/88
Sofyan Amrabat/MIL/Betis/Maroc/87
Azzedine Ounahi/MIL/Girona/Maroc/86
Eliesse Ben Seghir/ATT/Leverkusen/Maroc/85
Ayoub El Kaabi/ATT/Olympiakos/Maroc/84
Amine Adli/ATT/Bournemouth/Maroc/83
Issa Diop/DEF/Fulham/Maroc/82
Hakim Ziyech/ATT/Wydad/Maroc/81
Soufiane Rahimi/ATT/Al-Ain/Maroc/80
Chadi Riad/DEF/Crystal Palace/Maroc/80
Adam Aznou/DEF/Everton/Maroc/79
Chemsdine Talbi/ATT/Sunderland/Maroc/78
Hamza Igamane/ATT/Lille/Maroc/77
Abdelhamid Aït Boudlal/DEF/Rennes/Maroc/76
Jawad El Yamiq/DEF/Al-Wehda/Maroc/75
Romain Saïss/DEF/Al-Sadd/Maroc/74
Munir Mohamedi/G/RS Berkane/Maroc/73
Oussama Targhalline/MIL/Feyenoord/Maroc/72
Zakaria Aboukhlal/ATT/Torino/Maroc/71
Achraf Dari/DEF/Al Ahly/Maroc/70
Ilias Akhomach/ATT/Villarreal/Maroc/69
Selim Amallah/MIL/Valladolid/Maroc/68
Yahia Attiyat Allah/DEF/Wydad/Maroc/67
El Mehdi Al Harrar/G/Raja Casablanca/Maroc/68
Mehdi Benabid/G/Wydad/Maroc/67
Ahmed Reda Tagnaouti/G/AS FAR/Maroc/66`},
{id:"s_esp",name:"Espagne",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Lamine Yamal/ATT/Barcelone/Espagne/98
Pedri/MIL/Barcelone/Espagne/97
Rodri/MIL/Manchester City/Espagne/96
Martín Zubimendi/MIL/Arsenal/Espagne/94
Nico Williams/ATT/Athletic Bilbao/Espagne/93
David Raya/G/Arsenal/Espagne/92
Fabián Ruiz/MIL/PSG/Espagne/91
Dani Olmo/MIL/Barcelone/Espagne/90
Pau Cubarsí/DEF/Barcelone/Espagne/89
Marc Cucurella/DEF/Chelsea/Espagne/88
Mikel Merino/MIL/Arsenal/Espagne/87
Dean Huijsen/DEF/Real Madrid/Espagne/86
Mikel Oyarzabal/ATT/Real Sociedad/Espagne/85
Unai Simón/G/Athletic Bilbao/Espagne/84
Pedro Porro/DEF/Tottenham/Espagne/83
Álex Baena/MIL/Atlético Madrid/Espagne/82
Gavi/MIL/Barcelone/Espagne/81
Dani Carvajal/DEF/Real Madrid/Espagne/80
Fermín López/MIL/Barcelone/Espagne/80
Álex Grimaldo/DEF/Leverkusen/Espagne/79
Joan García/G/Barcelone/Espagne/78
Robin Le Normand/DEF/Atlético Madrid/Espagne/77
Ferran Torres/ATT/Barcelone/Espagne/76
Aymeric Laporte/DEF/Athletic Bilbao/Espagne/75
Álvaro Morata/ATT/Côme/Espagne/74
Alejandro Balde/DEF/Barcelone/Espagne/73
Marcos Llorente/DEF/Atlético Madrid/Espagne/72
Dani Vivian/DEF/Athletic Bilbao/Espagne/71
Yeremy Pino/ATT/Crystal Palace/Espagne/70
Ayoze Pérez/ATT/Villarreal/Espagne/69
Samu Omorodion/ATT/Porto/Espagne/68
Álvaro Carreras/DEF/Real Madrid/Espagne/67
Pablo Barrios/MIL/Atlético Madrid/Espagne/66
Pau Torres/DEF/Aston Villa/Espagne/65
Eric García/DEF/Barcelone/Espagne/64
Jesús Rodríguez/ATT/Côme/Espagne/63
Álex Remiro/G/Real Sociedad/Espagne/62
Robert Sánchez/G/Chelsea/Espagne/70`},
{id:"s_egy",name:"Égypte",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Mohamed Salah/ATT/Liverpool/Égypte/98
Omar Marmoush/ATT/Manchester City/Égypte/97
Mohamed Abdelmonem/DEF/Nice/Égypte/96
Emam Ashour/MIL/Al Ahly/Égypte/94
Trézéguet/ATT/Al Ahly/Égypte/93
Mostafa Mohamed/ATT/Nantes/Égypte/92
Zizo/ATT/Al Ahly/Égypte/91
Mohamed El Shenawy/G/Al Ahly/Égypte/90
Ibrahim Adel/ATT/Nordsjaelland/Égypte/89
Marwan Attia/MIL/Al Ahly/Égypte/88
Hamdi Fathi/MIL/Al-Wakrah/Égypte/87
Mohamed Hany/DEF/Al Ahly/Égypte/86
Ahmed Fatouh/DEF/Zamalek/Égypte/85
Mostafa Shobeir/G/Al Ahly/Égypte/84
Ramadan Sobhi/ATT/Pyramids/Égypte/83
Mohamed Elneny/MIL/Al-Jazira/Égypte/82
Yasser Ibrahim/DEF/Al Ahly/Égypte/82
Ramy Rabia/DEF/Al-Ain/Égypte/81
Mohanad Lasheen/MIL/Pyramids/Égypte/80
Ahmed Hegazi/DEF/Neom/Égypte/79
Akram Tawfik/DEF/Al Ahly/Égypte/78
Osama Faisal/ATT/National Bank/Égypte/77
Mostafa Fathi/ATT/Pyramids/Égypte/77
Omar Kamal/DEF/Al Ahly/Égypte/76
Hossam Abdelmaguid/DEF/Zamalek/Égypte/75
Ahmed Hassan Koka/ATT/Al Ahly/Égypte/74
Mohamed Sherif/ATT/Al Ahly/Égypte/73
Amr El Solia/MIL/Ceramica Cleopatra/Égypte/72
Mahmoud Kahraba/ATT/Al Ahly/Égypte/71
Mohamed Abou Gabal/G/Zamalek/Égypte/70
Ahmed El Shenawy/G/Pyramids/Égypte/72
Mohamed Sobhi/G/Zamalek/Égypte/71`},
{id:"s_legafr",name:"Légendes d'Afrique",cat:"themes",sub:"Les géants du continent africain",raw:`
Samuel Eto'o/ATT/Barcelone/Cameroun/98
Didier Drogba/ATT/Chelsea/Côte d'Ivoire/97
George Weah/ATT/Milan/Liberia/96
Mohamed Salah (2018)/ATT/Liverpool/Égypte/94
Yaya Touré/MIL/Manchester City/Côte d'Ivoire/93
Riyad Mahrez (2016)/ATT/Leicester/Algérie/92
Sadio Mané (2019)/ATT/Liverpool/Sénégal/91
Rabah Madjer/ATT/Porto/Algérie/90
Roger Milla/ATT/Montpellier/Cameroun/89
Abedi Pelé/MIL/Marseille/Ghana/88
Jay-Jay Okocha/MIL/PSG/Nigeria/87
Michael Essien/MIL/Chelsea/Ghana/86
Lakhdar Belloumi/MIL/GC Mascara/Algérie/85
Mohamed Aboutrika/MIL/Al Ahly/Égypte/84
Nwankwo Kanu/ATT/Arsenal/Nigeria/83
Salif Keïta/ATT/Saint-Étienne/Mali/82
Mustapha Hadji/MIL/Deportivo La Corogne/Maroc/81
Badou Zaki/G/Majorque/Maroc/80
Laurent Pokou/ATT/Rennes/Côte d'Ivoire/80
Samuel Kuffour/DEF/Bayern/Ghana/79
Emmanuel Adebayor/ATT/Arsenal/Togo/78
Frédéric Kanouté/ATT/Séville/Mali/77
El Hadji Diouf/ATT/Bolton/Sénégal/76
Rachid Mekhloufi/ATT/Saint-Étienne/Algérie/75
Hossam Hassan/ATT/Al Ahly/Égypte/74
Kalusha Bwalya/ATT/PSV/Zambie/73
Rigobert Song/DEF/Galatasaray/Cameroun/72
Kolo Touré/DEF/Arsenal/Côte d'Ivoire/71
Seydou Keita/MIL/Barcelone/Mali/70
Asamoah Gyan/ATT/Al-Ain/Ghana/69
Rashidi Yekini/ATT/Vitória Setúbal/Nigeria/68
Lucas Radebe/DEF/Leeds/Afrique du Sud/67
Noureddine Naybet/DEF/Deportivo La Corogne/Maroc/66
Thomas N'Kono/G/Espanyol/Cameroun/65
Ahmed Hassan/MIL/Al Ahly/Égypte/64
Essam El Hadary/G/Al Ahly/Égypte/63
Pierre-Emerick Aubameyang/ATT/Dortmund/Gabon/62
Joseph-Antoine Bell/G/Marseille/Cameroun/72
Vincent Enyeama/G/Lille/Nigeria/70
Kalidou Koulibaly/DEF/Naples/Sénégal/78`},
{id:"s_b_paysbas",name:"Pays-Bas",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Virgil van Dijk/DEF/Liverpool/Pays-Bas/95
Frenkie de Jong/MIL/Barcelone/Pays-Bas/93
Ryan Gravenberch/MIL/Liverpool/Pays-Bas/93
Tijjani Reijnders/MIL/Manchester City/Pays-Bas/93
Cody Gakpo/ATT/Liverpool/Pays-Bas/90
Xavi Simons/MIL/Tottenham/Pays-Bas/88
Jeremie Frimpong/DEF/Liverpool/Pays-Bas/87
Denzel Dumfries/DEF/Inter/Pays-Bas/87
Micky van de Ven/DEF/Tottenham/Pays-Bas/87
Jurriën Timber/DEF/Arsenal/Pays-Bas/86
Nathan Aké/DEF/Manchester City/Pays-Bas/85
Matthijs de Ligt/DEF/Manchester United/Pays-Bas/84
Teun Koopmeiners/MIL/Juventus/Pays-Bas/82
Bart Verbruggen/G/Brighton/Pays-Bas/82
Justin Kluivert/ATT/Bournemouth/Pays-Bas/81
Memphis Depay/ATT/Corinthians/Pays-Bas/80
Donyell Malen/ATT/Aston Villa/Pays-Bas/80
Ian Maatsen/DEF/Aston Villa/Pays-Bas/80
Stefan de Vrij/DEF/Inter/Pays-Bas/78
Georginio Wijnaldum/MIL/Ettifaq/Pays-Bas/77
Wout Weghorst/ATT/Ajax/Pays-Bas/75
Brian Brobbey/ATT/Sunderland/Pays-Bas/74
Quinten Timber/MIL/Marseille/Pays-Bas/74
Sven Botman/DEF/Newcastle/Pays-Bas/74
Jerdy Schouten/MIL/PSV/Pays-Bas/73
Joshua Zirkzee/ATT/Manchester United/Pays-Bas/73
Crysencio Summerville/ATT/West Ham/Pays-Bas/73
Mats Wieffer/MIL/Brighton/Pays-Bas/72
Noa Lang/ATT/Naples/Pays-Bas/72
Steven Bergwijn/ATT/Al-Ittihad/Pays-Bas/72
Mark Flekken/G/Leverkusen/Pays-Bas/71
Lutsharel Geertruida/DEF/Sunderland/Pays-Bas/70
Robin Roefs/G/Sunderland/Pays-Bas/72
Justin Bijlow/G/Genoa/Pays-Bas/70
Jasper Cillessen/G/NEC/Pays-Bas/68`},
{id:"s_b_civ",name:"Côte d'Ivoire",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Amad Diallo/ATT/Manchester United/Côte d'Ivoire/94
Franck Kessié/MIL/Al-Ahli/Côte d'Ivoire/93
Evan Ndicka/DEF/Roma/Côte d'Ivoire/93
Ousmane Diomande/DEF/Sporting/Côte d'Ivoire/93
Yan Diomande/ATT/Leipzig/Côte d'Ivoire/88
Seko Fofana/MIL/Rennes/Côte d'Ivoire/87
Odilon Kossounou/DEF/Atalanta/Côte d'Ivoire/87
Sébastien Haller/ATT/Utrecht/Côte d'Ivoire/86
Ibrahim Sangaré/MIL/Nottingham Forest/Côte d'Ivoire/86
Simon Adingra/ATT/Sunderland/Côte d'Ivoire/86
Wilfried Singo/DEF/Galatasaray/Côte d'Ivoire/85
Nicolas Pépé/ATT/Villarreal/Côte d'Ivoire/84
Evann Guessand/ATT/Aston Villa/Côte d'Ivoire/82
Yahia Fofana/G/Rizespor/Côte d'Ivoire/80
Jean-Philippe Krasso/ATT/Paris FC/Côte d'Ivoire/79
Christ Inao Oulaï/MIL/Trabzonspor/Côte d'Ivoire/79
Oumar Diakité/DEF/Cercle Bruges/Côte d'Ivoire/78
Ghislain Konan/DEF/Gil Vicente/Côte d'Ivoire/77
Willy Boly/DEF/Nottingham Forest/Côte d'Ivoire/77
Jean Michaël Seri/MIL/Maribor/Côte d'Ivoire/76
Wilfried Zaha/ATT/Charlotte/Côte d'Ivoire/74
Jérémie Boga/ATT/Nice/Côte d'Ivoire/74
Emmanuel Agbadou/DEF/Wolverhampton/Côte d'Ivoire/73
Elye Wahi/ATT/Nice/Côte d'Ivoire/72
Bazoumana Touré/ATT/Hoffenheim/Côte d'Ivoire/72
Guéla Doué/DEF/Strasbourg/Côte d'Ivoire/71
Serge Aurier/DEF/Galatasaray/Côte d'Ivoire/71
Christopher Operi/DEF/Basaksehir/Côte d'Ivoire/69
Badra Ali Sangaré/G/Sekhukhune/Côte d'Ivoire/68
Mohamed Koné/G/Charleroi/Côte d'Ivoire/74
Alban Lafont/G/Panathinaikos/Côte d'Ivoire/76
Ira Eliezer Tapé/G/San Pédro/Côte d'Ivoire/66
Mohamed Diomandé/MIL/Rangers/Côte d'Ivoire/78`},
{id:"s_b_dz_ligue1",name:"Ligue 1 algérienne",cat:"ligues",sub:"Championnats",raw:`
Islam Slimani/ATT/CR Belouizdad/Algérie/95
Tayeb Meziani/ATT/MC Alger/Algérie/94
Zakaria Draoui/MIL/MC Alger/Algérie/93
Kousseila Boualia/ATT/JS Kabylie/Algérie/93
Alexis Guendouz/G/CR Belouizdad/Algérie/90
Oussama Benbot/G/USM Alger/Algérie/89
Abderrahmane Hachoud/DEF/MC Alger/Algérie/88
Houssem Mrezigue/MIL/CR Belouizdad/Algérie/87
Brahim Dib/MIL/CS Constantine/Algérie/86
Haithem Loucif/DEF/USM Alger/Algérie/86
Chouaib Keddad/DEF/CR Belouizdad/Algérie/85
Islam Merili/MIL/USM Alger/Algérie/83
Naoufel Khacef/DEF/CR Belouizdad/Algérie/82
Ayoub Ghezala/DEF/MC Alger/Algérie/81
Abdennour Belhocini/ATT/CS Constantine/Algérie/80
Mohamed Réda Hamidi/DEF/JS Kabylie/Algérie/79
Saâdi Radouani/DEF/USM Alger/Algérie/79
Gaya Merbah/G/MC Alger/Algérie/78
Zakaria Boulahia/ATT/JS Kabylie/Algérie/77
Abdelkader Belharrane/DEF/MC Alger/Algérie/76
Aymen Mahious/ATT/CR Belouizdad/Algérie/74
Akram Bouras/MIL/MC Alger/Algérie/73
Ahmed Kendouci/MIL/ES Sétif/Algérie/73
Brahim Benzaza/MIL/USM Alger/Algérie/72
Riad Benayad/ATT/JS Kabylie/Algérie/72
Abdelmoumen Djabou/MIL/ES Sétif/Algérie/71
Housseyn Benayada/DEF/CS Constantine/Algérie/70
Abdelkrim Namani/MIL/JS Kabylie/Algérie/68
Farid Chaâl/G/CR Belouizdad/Algérie/72
Zakaria Bouhalfaya/G/CS Constantine/Algérie/70`},
{id:"s_b_pepites",name:"Jeunes pépites",cat:"themes",sub:"Les cracks de demain",raw:`
Lamine Yamal/ATT/Barcelone/Espagne/98
Désiré Doué/ATT/PSG/France/93
Pau Cubarsí/DEF/Barcelone/Espagne/93
Kenan Yildiz/ATT/Juventus/Turquie/93
Dean Huijsen/DEF/Real Madrid/Espagne/91
Estêvão/ATT/Chelsea/Brésil/90
Yan Diomande/ATT/Leipzig/Côte d'Ivoire/88
Warren Zaïre-Emery/MIL/PSG/France/87
Franco Mastantuono/ATT/Real Madrid/Argentine/85
Ethan Nwaneri/MIL/Arsenal/Angleterre/85
Rodrigo Mora/ATT/Porto/Portugal/83
Endrick/ATT/Real Madrid/Brésil/82
Leny Yoro/DEF/Manchester United/France/82
Myles Lewis-Skelly/DEF/Arsenal/Angleterre/81
Jorrel Hato/DEF/Chelsea/Pays-Bas/80
Lennart Karl/ATT/Bayern/Allemagne/80
Ayyoub Bouaddi/MIL/Lille/France/79
Jobe Bellingham/MIL/Dortmund/Angleterre/78
Marc Bernal/MIL/Barcelone/Espagne/76
Dro Fernández/MIL/Barcelone/Espagne/75
Lucas Bergvall/MIL/Tottenham/Suède/74
Geovany Quenda/ATT/Sporting/Portugal/74
Sverre Nypan/MIL/Manchester City/Norvège/74
Eli Junior Kroupi/ATT/Bournemouth/France/73
Senny Mayulu/MIL/PSG/France/72
Assan Ouédraogo/MIL/Leipzig/Allemagne/71
Claudio Echeverri/MIL/Girona/Argentine/70
Rio Ngumoha/ATT/Liverpool/Angleterre/70
Kees Smit/MIL/AZ Alkmaar/Pays-Bas/70
Mikey Moore/ATT/Rangers/Angleterre/70
Ibrahim Mbaye/ATT/PSG/Sénégal/69
Chido Obi/ATT/Manchester United/Danemark/68
Robin Risser/G/Lens/France/76
Guillaume Restes/G/Toulouse/France/75
Jonas Urbig/G/Bayern/Allemagne/74
Mike Penders/G/Strasbourg/Belgique/72
Diego Kochen/G/Barcelone/États-Unis/68
Cristhian Mosquera/DEF/Arsenal/Espagne/77`}
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

/* ---- base_2.js ---- */
// Packs convertis depuis base_src_2.txt : 5 champs → Nom/Poste/Club/Pays/Note
window.FOOT_PACKS.push(
{id:"s_l1",name:"Ligue 1",cat:"ligues",sub:"Championnats",raw:`
Ousmane Dembélé/ATT/PSG/France/98
Vitinha/MIL/PSG/Portugal/97
Achraf Hakimi/DEF/PSG/Maroc/96
Khvicha Kvaratskhelia/ATT/PSG/Géorgie/94
Nuno Mendes/DEF/PSG/Portugal/93
João Neves/MIL/PSG/Portugal/92
Désiré Doué/ATT/PSG/France/91
Marquinhos/DEF/PSG/Brésil/90
Willian Pacho/DEF/PSG/Équateur/89
Mason Greenwood/ATT/Marseille/Angleterre/88
Lucas Chevalier/G/PSG/France/87
Bradley Barcola/ATT/PSG/France/86
Fabián Ruiz/MIL/PSG/Espagne/85
Warren Zaïre-Emery/MIL/PSG/France/84
Gerónimo Rulli/G/Marseille/Argentine/83
Pierre-Emile Højbjerg/MIL/Marseille/Danemark/82
Maghnes Akliouche/MIL/Monaco/France/81
Pierre-Emerick Aubameyang/ATT/Marseille/Gabon/80
Gonçalo Ramos/ATT/PSG/Portugal/80
Lee Kang-in/MIL/PSG/Corée du Sud/79
Illia Zabarnyi/DEF/PSG/Ukraine/78
Amine Gouiri/ATT/Marseille/Algérie/77
Aleksandr Golovin/MIL/Monaco/Russie/76
Denis Zakaria/MIL/Monaco/Suisse/75
Paul Pogba/MIL/Monaco/France/74
Hákon Haraldsson/MIL/Lille/Islande/73
Endrick/ATT/Lyon/Brésil/72
Corentin Tolisso/MIL/Lyon/France/71
Florian Thauvin/ATT/Lens/France/70
Benjamin Pavard/DEF/Marseille/France/69
Nayef Aguerd/DEF/Marseille/Maroc/68
Lamine Camara/MIL/Monaco/Sénégal/67
Folarin Balogun/ATT/Monaco/États-Unis/66
Olivier Giroud/ATT/Lille/France/65
Malick Fofana/ATT/Lyon/Belgique/64
Igor Paixão/ATT/Marseille/Brésil/63
Brice Samba/G/Rennes/France/62
Odsonne Édouard/ATT/Lens/France/61
Lukáš Hrádecký/G/Monaco/Finlande/70
Berke Özer/G/Lille/Turquie/66`},
{id:"s_bundes",name:"Bundesliga",cat:"ligues",sub:"Championnats",raw:`
Harry Kane/ATT/Bayern/Angleterre/98
Michael Olise/ATT/Bayern/France/97
Jamal Musiala/MIL/Bayern/Allemagne/96
Joshua Kimmich/MIL/Bayern/Allemagne/94
Luis Díaz/ATT/Bayern/Colombie/93
Serhou Guirassy/ATT/Dortmund/Guinée/92
Gregor Kobel/G/Dortmund/Suisse/91
Alejandro Grimaldo/DEF/Leverkusen/Espagne/90
Dayot Upamecano/DEF/Bayern/France/89
Manuel Neuer/G/Bayern/Allemagne/88
Jonathan Tah/DEF/Bayern/Allemagne/87
Nico Schlotterbeck/DEF/Dortmund/Allemagne/86
Alphonso Davies/DEF/Bayern/Canada/85
Konrad Laimer/MIL/Bayern/Autriche/84
Aleksandar Pavlović/MIL/Bayern/Allemagne/83
Patrik Schick/ATT/Leverkusen/Tchéquie/82
Deniz Undav/ATT/Stuttgart/Allemagne/81
Serge Gnabry/ATT/Bayern/Allemagne/80
Leon Goretzka/MIL/Bayern/Allemagne/80
Julian Brandt/MIL/Dortmund/Allemagne/79
Karim Adeyemi/ATT/Dortmund/Allemagne/78
David Raum/DEF/Leipzig/Allemagne/77
Nicolas Jackson/ATT/Bayern/Sénégal/76
Marcel Sabitzer/MIL/Dortmund/Autriche/75
Ibrahim Maza/MIL/Leverkusen/Algérie/74
Christoph Baumgartner/MIL/Leipzig/Autriche/73
Malik Tillman/MIL/Leverkusen/États-Unis/72
Jobe Bellingham/MIL/Dortmund/Angleterre/71
Ramy Bensebaini/DEF/Dortmund/Algérie/70
Lennart Karl/MIL/Bayern/Allemagne/69
Péter Gulácsi/G/Leipzig/Hongrie/68
Ermedin Demirović/ATT/Stuttgart/Bosnie-Herzégovine/67
Chris Führich/ATT/Stuttgart/Allemagne/66
Jonathan Burkardt/ATT/Eintracht Francfort/Allemagne/65
Can Uzun/MIL/Eintracht Francfort/Turquie/64
Yan Diomande/ATT/Leipzig/Côte d'Ivoire/63
Exequiel Palacios/MIL/Leverkusen/Argentine/62
Alexander Nübel/G/Stuttgart/Allemagne/72
Mark Flekken/G/Leverkusen/Pays-Bas/68`},
{id:"s_arg",name:"Argentine",cat:"nations",sub:"Amérique du Sud",desc:"Sélection actuelle",raw:`
Lionel Messi/ATT/Inter Miami/Argentine/98
Lautaro Martínez/ATT/Inter/Argentine/97
Julián Álvarez/ATT/Atlético Madrid/Argentine/96
Alexis Mac Allister/MIL/Liverpool/Argentine/94
Emiliano Martínez/G/Aston Villa/Argentine/93
Enzo Fernández/MIL/Chelsea/Argentine/92
Cristian Romero/DEF/Tottenham/Argentine/91
Rodrigo De Paul/MIL/Inter Miami/Argentine/90
Nico Paz/MIL/Côme/Argentine/89
Lisandro Martínez/DEF/Manchester United/Argentine/88
Franco Mastantuono/MIL/Real Madrid/Argentine/87
Nahuel Molina/DEF/Atlético Madrid/Argentine/86
Giuliano Simeone/ATT/Atlético Madrid/Argentine/85
Paulo Dybala/ATT/Roma/Argentine/84
Alejandro Garnacho/ATT/Chelsea/Argentine/83
Thiago Almada/MIL/Atlético Madrid/Argentine/82
Nicolás González/ATT/Atlético Madrid/Argentine/81
Exequiel Palacios/MIL/Leverkusen/Argentine/80
Leandro Paredes/MIL/Boca Juniors/Argentine/80
Nicolás Tagliafico/DEF/Lyon/Argentine/79
Giovani Lo Celso/MIL/Betis/Argentine/78
Gerónimo Rulli/G/Marseille/Argentine/77
Nicolás Otamendi/DEF/Benfica/Argentine/76
Leonardo Balerdi/DEF/Marseille/Argentine/75
Gonzalo Montiel/DEF/River Plate/Argentine/74
Claudio Echeverri/MIL/Leverkusen/Argentine/73
Valentín Carboni/MIL/Genoa/Argentine/72
Facundo Medina/DEF/Marseille/Argentine/71
Juan Foyth/DEF/Villarreal/Argentine/70
Valentín Barco/DEF/Strasbourg/Argentine/69
Santiago Castro/ATT/Bologne/Argentine/68
Valentín Castellanos/ATT/West Ham/Argentine/67
José Manuel López/ATT/Palmeiras/Argentine/66
Walter Benítez/G/Crystal Palace/Argentine/65
Matías Soulé/ATT/Roma/Argentine/64
Marcos Acuña/DEF/River Plate/Argentine/63
Juan Musso/G/Atlético Madrid/Argentine/72
Franco Armani/G/River Plate/Argentine/70`},
{id:"s_bra",name:"Brésil",cat:"nations",sub:"Amérique du Sud",desc:"Sélection actuelle",raw:`
Vinícius Jr/ATT/Real Madrid/Brésil/98
Raphinha/ATT/Barcelone/Brésil/97
Alisson/G/Liverpool/Brésil/96
Marquinhos/DEF/PSG/Brésil/94
Bruno Guimarães/MIL/Newcastle/Brésil/93
Gabriel Magalhães/DEF/Arsenal/Brésil/92
Rodrygo/ATT/Real Madrid/Brésil/91
Estêvão/ATT/Chelsea/Brésil/90
Éder Militão/DEF/Real Madrid/Brésil/89
Ederson/G/Fenerbahçe/Brésil/88
Matheus Cunha/ATT/Manchester United/Brésil/87
Gleison Bremer/DEF/Juventus/Brésil/86
João Pedro/ATT/Chelsea/Brésil/85
Gabriel Martinelli/ATT/Arsenal/Brésil/84
Lucas Paquetá/MIL/West Ham/Brésil/83
Casemiro/MIL/Manchester United/Brésil/82
Neymar/ATT/Santos/Brésil/81
Savinho/ATT/Manchester City/Brésil/80
Endrick/ATT/Lyon/Brésil/80
Wesley/DEF/Roma/Brésil/79
Andrey Santos/MIL/Chelsea/Brésil/78
João Gomes/MIL/Wolverhampton/Brésil/77
Luiz Henrique/ATT/Zenit/Brésil/76
Richarlison/ATT/Tottenham/Brésil/75
Gabriel Jesus/ATT/Arsenal/Brésil/74
Antony/ATT/Betis/Brésil/73
Joelinton/MIL/Newcastle/Brésil/72
Danilo/DEF/Flamengo/Brésil/71
Alex Sandro/DEF/Flamengo/Brésil/70
Douglas Santos/DEF/Zenit/Brésil/69
Lucas Beraldo/DEF/PSG/Brésil/68
Fabrício Bruno/DEF/Cruzeiro/Brésil/67
Vanderson/DEF/Monaco/Brésil/66
Bento/G/Al-Nassr/Brésil/65
Igor Thiago/ATT/Brentford/Brésil/64
Vitor Roque/ATT/Palmeiras/Brésil/63
Gerson/MIL/Zenit/Brésil/62
Lucas Perri/G/Leeds/Brésil/66
Hugo Souza/G/Corinthians/Brésil/64`},
{id:"s_eng",name:"Angleterre",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Harry Kane/ATT/Bayern/Angleterre/98
Declan Rice/MIL/Arsenal/Angleterre/97
Bukayo Saka/ATT/Arsenal/Angleterre/96
Jude Bellingham/MIL/Real Madrid/Angleterre/94
Cole Palmer/ATT/Chelsea/Angleterre/93
Phil Foden/ATT/Manchester City/Angleterre/92
Trent Alexander-Arnold/DEF/Real Madrid/Angleterre/91
Jordan Pickford/G/Everton/Angleterre/90
Eberechi Eze/MIL/Arsenal/Angleterre/89
Morgan Rogers/MIL/Aston Villa/Angleterre/88
Reece James/DEF/Chelsea/Angleterre/87
Marc Guéhi/DEF/Manchester City/Angleterre/86
Anthony Gordon/ATT/Newcastle/Angleterre/85
Elliot Anderson/MIL/Nottingham Forest/Angleterre/84
John Stones/DEF/Manchester City/Angleterre/83
Levi Colwill/DEF/Chelsea/Angleterre/82
Ollie Watkins/ATT/Aston Villa/Angleterre/81
Jarrod Bowen/ATT/West Ham/Angleterre/80
Marcus Rashford/ATT/Barcelone/Angleterre/80
Myles Lewis-Skelly/DEF/Arsenal/Angleterre/79
Ezri Konsa/DEF/Aston Villa/Angleterre/78
Adam Wharton/MIL/Crystal Palace/Angleterre/77
Kobbie Mainoo/MIL/Manchester United/Angleterre/76
Noni Madueke/ATT/Arsenal/Angleterre/75
Dean Henderson/G/Crystal Palace/Angleterre/74
Nick Pope/G/Newcastle/Angleterre/73
Aaron Ramsdale/G/Newcastle/Angleterre/72
Jordan Henderson/MIL/Brentford/Angleterre/71
Conor Gallagher/MIL/Tottenham/Angleterre/70
Curtis Jones/MIL/Liverpool/Angleterre/69
Tino Livramento/DEF/Newcastle/Angleterre/68
Dan Burn/DEF/Newcastle/Angleterre/67
Djed Spence/DEF/Tottenham/Angleterre/66
Ivan Toney/ATT/Al-Ahli/Angleterre/65
Dominic Solanke/ATT/Tottenham/Angleterre/64
Morgan Gibbs-White/MIL/Nottingham Forest/Angleterre/63
Jack Grealish/ATT/Everton/Angleterre/62
Harry Maguire/DEF/Manchester United/Angleterre/61
James Trafford/G/Manchester City/Angleterre/70`},
{id:"s_leg",name:"Légendes du foot",cat:"themes",sub:"Les plus grands de l'histoire",raw:`
Pelé/ATT/Santos/Brésil/99
Diego Maradona/ATT/Naples/Argentine/99
Lionel Messi (2012)/ATT/Barcelone/Argentine/99
Cristiano Ronaldo (2017)/ATT/Real Madrid/Portugal/98
Zinédine Zidane/MIL/Real Madrid/France/96
Ronaldo (R9)/ATT/Inter/Brésil/95
Johan Cruyff/ATT/Ajax/Pays-Bas/92
Franz Beckenbauer/DEF/Bayern/Allemagne/91
Alfredo Di Stéfano/ATT/Real Madrid/Espagne/90
Ronaldinho/ATT/Barcelone/Brésil/89
Michel Platini/MIL/Juventus/France/88
Paolo Maldini/DEF/Milan/Italie/88
Ferenc Puskás/ATT/Real Madrid/Hongrie/87
Marco van Basten/ATT/Milan/Pays-Bas/86
Andrés Iniesta/MIL/Barcelone/Espagne/82
Xavi/MIL/Barcelone/Espagne/82
Lev Yachine/G/Dynamo Moscou/URSS/80
Gianluigi Buffon/G/Juventus/Italie/79
Kaká/MIL/Milan/Brésil/78
Lothar Matthäus/MIL/Bayern/Allemagne/77
Bobby Charlton/MIL/Manchester United/Angleterre/75
Andrea Pirlo/MIL/Milan/Italie/74
Cafu/DEF/Milan/Brésil/71
Roberto Carlos/DEF/Real Madrid/Brésil/70
Luís Figo/MIL/Barcelone/Portugal/69
Lakhdar Belloumi/MIL/GC Mascara/Algérie/64
Dino Zoff/G/Juventus/Italie/86
Iker Casillas/G/Real Madrid/Espagne/85
Peter Schmeichel/G/Manchester United/Danemark/82
Franco Baresi/DEF/Milan/Italie/87
Bobby Moore/DEF/West Ham/Angleterre/84`},
{id:"s_leg_2",name:"Légendes du foot 2",cat:"themes",sub:"D'autres géants de l'histoire",raw:`
Eusébio/ATT/Benfica/Portugal/85
Gerd Müller/ATT/Bayern/Allemagne/84
Thierry Henry/ATT/Arsenal/France/83
Garrincha/ATT/Botafogo/Brésil/81
Romário/ATT/Barcelone/Brésil/77
Roberto Baggio/ATT/Juventus/Italie/76
Zlatan Ibrahimović/ATT/Milan/Suède/73
Rivaldo/ATT/Barcelone/Brésil/72
George Weah/ATT/Milan/Liberia/68
Samuel Eto'o/ATT/Barcelone/Cameroun/67
Didier Drogba/ATT/Chelsea/Côte d'Ivoire/66
Rabah Madjer/ATT/Porto/Algérie/65
Oliver Kahn/G/Bayern/Allemagne/82
Gordon Banks/G/Leicester/Angleterre/80
Edwin van der Sar/G/Manchester United/Pays-Bas/78
Petr Čech/G/Chelsea/Tchéquie/76
Fabien Barthez/G/Marseille/France/74
Sergio Ramos/DEF/Real Madrid/Espagne/83
Fabio Cannavaro/DEF/Juventus/Italie/81
Carles Puyol/DEF/Barcelone/Espagne/80
Philipp Lahm/DEF/Bayern/Allemagne/79
Lilian Thuram/DEF/Juventus/France/78
Marcel Desailly/DEF/Milan/France/77
Daniel Passarella/DEF/River Plate/Argentine/75
Zico/MIL/Flamengo/Brésil/84
Steven Gerrard/MIL/Liverpool/Angleterre/79
Patrick Vieira/MIL/Arsenal/France/77
Sócrates/MIL/Corinthians/Brésil/76
Clarence Seedorf/MIL/Milan/Pays-Bas/74
Roy Keane/MIL/Manchester United/Irlande/72`},
{id:"s_b_allemagne",name:"Allemagne",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Florian Wirtz/MIL/Liverpool/Allemagne/95
Jamal Musiala/MIL/Bayern/Allemagne/95
Joshua Kimmich/MIL/Bayern/Allemagne/93
Antonio Rüdiger/DEF/Real Madrid/Allemagne/93
Kai Havertz/ATT/Arsenal/Allemagne/89
Marc-André ter Stegen/G/Barcelone/Allemagne/88
Manuel Neuer/G/Bayern/Allemagne/88
Leroy Sané/ATT/Galatasaray/Allemagne/87
Jonathan Tah/DEF/Bayern/Allemagne/87
Nico Schlotterbeck/DEF/Dortmund/Allemagne/86
Leon Goretzka/MIL/Bayern/Allemagne/85
Serge Gnabry/ATT/Bayern/Allemagne/84
Ilkay Gündogan/MIL/Galatasaray/Allemagne/83
Nick Woltemade/ATT/Newcastle/Allemagne/82
David Raum/DEF/Leipzig/Allemagne/81
Pascal Gross/MIL/Brighton/Allemagne/80
Oliver Baumann/G/Hoffenheim/Allemagne/80
Thomas Müller/ATT/Vancouver Whitecaps/Allemagne/80
Robert Andrich/MIL/Leverkusen/Allemagne/79
Maximilian Mittelstädt/DEF/Stuttgart/Allemagne/79
Niclas Füllkrug/ATT/West Ham/Allemagne/78
Benjamin Henrichs/DEF/Leipzig/Allemagne/76
Deniz Undav/ATT/Stuttgart/Allemagne/74
Karim Adeyemi/ATT/Dortmund/Allemagne/74
Aleksandar Pavlović/MIL/Bayern/Allemagne/74
Angelo Stiller/MIL/Stuttgart/Allemagne/74
Waldemar Anton/DEF/Dortmund/Allemagne/72
Maximilian Beier/ATT/Dortmund/Allemagne/71
Chris Führich/ATT/Stuttgart/Allemagne/71
Felix Nmecha/MIL/Dortmund/Allemagne/70
Jonas Hofmann/MIL/Leverkusen/Allemagne/70
Tim Kleindienst/ATT/Gladbach/Allemagne/69
Ridle Baku/DEF/Leipzig/Allemagne/68
Alexander Nübel/G/Stuttgart/Allemagne/73
Kevin Trapp/G/Paris FC/Allemagne/70`},
{id:"s_b_belgique",name:"Belgique",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Thibaut Courtois/G/Real Madrid/Belgique/95
Kevin De Bruyne/MIL/Naples/Belgique/94
Jérémy Doku/ATT/Manchester City/Belgique/93
Romelu Lukaku/ATT/Naples/Belgique/87
Leandro Trossard/ATT/Arsenal/Belgique/87
Charles De Ketelaere/MIL/Atalanta/Belgique/87
Youri Tielemans/MIL/Aston Villa/Belgique/86
Loïs Openda/ATT/Juventus/Belgique/86
Amadou Onana/MIL/Aston Villa/Belgique/85
Senne Lammens/G/Manchester United/Belgique/85
Johan Bakayoko/ATT/Leipzig/Belgique/81
Arthur Theate/DEF/Eintracht Francfort/Belgique/80
Malick Fofana/ATT/Lyon/Belgique/80
Zeno Debast/DEF/Sporting/Belgique/79
Koni De Winter/DEF/Milan/Belgique/79
Timothy Castagne/DEF/Fulham/Belgique/78
Hans Vanaken/MIL/Club Bruges/Belgique/78
Arthur Vermeeren/MIL/Marseille/Belgique/77
Mandela Keita/MIL/Parme/Belgique/76
Julien Duranville/ATT/Dortmund/Belgique/75
Dodi Lukebakio/ATT/Benfica/Belgique/74
Alexis Saelemaekers/MIL/Milan/Belgique/74
Yannick Carrasco/ATT/Al-Shabab/Belgique/74
Maxim De Cuyper/DEF/Brighton/Belgique/73
Matz Sels/G/Nottingham Forest/Belgique/72
Koen Casteels/G/Al-Qadsiah/Belgique/71
Thomas Meunier/DEF/Lille/Belgique/70
Nicolas Raskin/MIL/Rangers/Belgique/70
Leander Dendoncker/MIL/Anderlecht/Belgique/69
Michy Batshuayi/ATT/Eintracht Francfort/Belgique/68
Mike Penders/G/Strasbourg/Belgique/68`},
{id:"s_b_nigeria",name:"Nigeria",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Victor Osimhen/ATT/Galatasaray/Nigeria/96
Ademola Lookman/ATT/Atalanta/Nigeria/95
Victor Boniface/ATT/Werder Brême/Nigeria/93
Alex Iwobi/MIL/Fulham/Nigeria/90
Wilfred Ndidi/MIL/Besiktas/Nigeria/88
Calvin Bassey/DEF/Fulham/Nigeria/87
Samuel Chukwueze/ATT/Fulham/Nigeria/86
Moses Simon/ATT/Paris FC/Nigeria/86
Frank Onyeka/MIL/Augsbourg/Nigeria/85
Stanley Nwabali/G/Chippa United/Nigeria/85
Ola Aina/DEF/Nottingham Forest/Nigeria/84
William Troost-Ekong/DEF/Al-Kholood/Nigeria/82
Raphael Onyedika/MIL/Club Bruges/Nigeria/81
Kelechi Iheanacho/ATT/Celtic/Nigeria/80
Akor Adams/ATT/Séville/Nigeria/80
Taiwo Awoniyi/ATT/Nottingham Forest/Nigeria/79
Tolu Arokodare/ATT/Wolverhampton/Nigeria/78
Semi Ajayi/DEF/Hull City/Nigeria/77
Maduka Okoye/G/Udinese/Nigeria/76
Bright Osayi-Samuel/DEF/Birmingham/Nigeria/74
Paul Onuachu/ATT/Trabzonspor/Nigeria/74
Fisayo Dele-Bashiru/MIL/Lazio/Nigeria/73
Joe Aribo/MIL/Southampton/Nigeria/73
Terem Moffi/ATT/Nice/Nigeria/72
Zaidu Sanusi/DEF/Porto/Nigeria/71
Nathan Tella/ATT/Leverkusen/Nigeria/71
Kenneth Omeruo/DEF/Kasimpasa/Nigeria/70
Cyriel Dessers/ATT/Panathinaïkos/Nigeria/70
Ahmed Musa/ATT/Kano Pillars/Nigeria/70
Francis Uzoho/G/Omonia/Nigeria/72
Adebayo Adeleye/G/Zakynthos/Nigeria/68
Amas Obasogie/G/Bendel Insurance/Nigeria/66`},
{id:"s_b_botola",name:"Botola Pro",cat:"ligues",sub:"Championnats",raw:`
Hakim Ziyech/ATT/Wydad/Maroc/95
Nordin Amrabat/ATT/Wydad/Maroc/93
Stéphane Aziz Ki/MIL/Wydad/Burkina Faso/93
Thembinkosi Lorch/ATT/Wydad/Afrique du Sud/89
Mohamed Rabie Hrimat/MIL/AS FAR/Maroc/88
Youssef Mehri/ATT/RS Berkane/Maroc/87
Anas Zniti/G/Raja/Maroc/86
Issoufou Dayo/DEF/RS Berkane/Burkina Faso/86
Mounir Mohamedi/G/RS Berkane/Maroc/85
Paul Bassène/ATT/RS Berkane/Sénégal/83
Mohamed Rayhi/ATT/Wydad/Maroc/82
Yousri Bouzok/ATT/Raja/Algérie/81
Youssef El Fahli/MIL/AS FAR/Maroc/80
Reda Slim/ATT/AS FAR/Maroc/80
Mohamed Moubarik/MIL/Raja/Maroc/79
Ayoub El Amloud/DEF/Wydad/Maroc/78
Hamza Moussaoui/DEF/RS Berkane/Maroc/77
Ahmed Hammoudan/ATT/AS FAR/Maroc/76
Abdelilah Hafidi/MIL/Raja/Maroc/74
Oussama Lamlioui/ATT/RS Berkane/Maroc/73
Mohamed Boulacsoute/ATT/Raja/Maroc/72
Badr Gaddarine/MIL/AS FAR/Maroc/72
Abdelfettah Hadraf/ATT/Raja/Maroc/71
Arsène Zola/DEF/Wydad/RD Congo/71
Adam Ennaffati/ATT/Raja/Maroc/70
Sabir Bougrine/MIL/Raja/Maroc/70
Amine Zouhzouh/ATT/AS FAR/Maroc/69
Mouad Fekkak/MIL/Wydad/Maroc/68
Abdelali Mhamdi/G/Wydad/Maroc/80
El Mehdi Benabid/G/Wydad/Maroc/76
Youssef El Motie/G/Wydad/Maroc/74
Bart Meijers/DEF/Wydad/Pays-Bas/75
Mohamed Moufid/DEF/Wydad/Maroc/72
Guilherme Ferreira/DEF/Wydad/Brésil/70`}
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

/* ---- base_3.js ---- */
// Packs base 3 (championnats, sélections, légendes) — 5 champs : Nom/Poste/Club/Pays/Note
window.FOOT_PACKS.push(
{id:"s_pl",name:"Premier League",cat:"ligues",sub:"Championnats",raw:`
Erling Haaland/ATT/Manchester City/Norvège/98
Mohamed Salah/ATT/Liverpool/Égypte/97
Bukayo Saka/ATT/Arsenal/Angleterre/96
Declan Rice/MIL/Arsenal/Angleterre/94
Virgil van Dijk/DEF/Liverpool/Pays-Bas/93
William Saliba/DEF/Arsenal/France/92
Rodri/MIL/Manchester City/Espagne/91
Cole Palmer/MIL/Chelsea/Angleterre/90
Moisés Caicedo/MIL/Chelsea/Équateur/89
Florian Wirtz/MIL/Liverpool/Allemagne/88
Alisson/G/Liverpool/Brésil/87
Gabriel Magalhães/DEF/Arsenal/Brésil/86
Alexis Mac Allister/MIL/Liverpool/Argentine/85
Martin Ødegaard/MIL/Arsenal/Norvège/84
Ryan Gravenberch/MIL/Liverpool/Pays-Bas/83
Alexander Isak/ATT/Liverpool/Suède/82
Gianluigi Donnarumma/G/Manchester City/Italie/81
Bruno Fernandes/MIL/Manchester United/Portugal/80
Phil Foden/MIL/Manchester City/Angleterre/80
Viktor Gyökeres/ATT/Arsenal/Suède/79
Enzo Fernández/MIL/Chelsea/Argentine/78
Martín Zubimendi/MIL/Arsenal/Espagne/77
Bruno Guimarães/MIL/Newcastle/Brésil/76
Dominik Szoboszlai/MIL/Liverpool/Hongrie/75
Hugo Ekitike/ATT/Liverpool/France/74
David Raya/G/Arsenal/Espagne/73
Tijjani Reijnders/MIL/Manchester City/Pays-Bas/72
Jérémy Doku/ATT/Manchester City/Belgique/71
Rayan Cherki/MIL/Manchester City/France/70
Eberechi Eze/MIL/Arsenal/Angleterre/69
Bryan Mbeumo/ATT/Manchester United/Cameroun/68
Matheus Cunha/ATT/Manchester United/Brésil/67
João Pedro/ATT/Chelsea/Brésil/66
Antoine Semenyo/ATT/Manchester City/Ghana/65
Joško Gvardiol/DEF/Manchester City/Croatie/64
Cristian Romero/DEF/Tottenham/Argentine/63
Anthony Gordon/ATT/Newcastle/Angleterre/62
Jordan Pickford/G/Everton/Angleterre/66
Robert Sánchez/G/Chelsea/Espagne/64
Micky van de Ven/DEF/Tottenham/Pays-Bas/65`},
{id:"s_saudi",name:"Saudi Pro League",cat:"ligues",sub:"Championnats",raw:`
Cristiano Ronaldo/ATT/Al-Nassr/Portugal/98
Karim Benzema/ATT/Al-Hilal/France/97
Théo Hernandez/DEF/Al-Hilal/France/96
Yassine Bounou/G/Al-Hilal/Maroc/94
Rúben Neves/MIL/Al-Hilal/Portugal/93
Sergej Milinković-Savić/MIL/Al-Hilal/Serbie/92
João Félix/ATT/Al-Nassr/Portugal/91
Riyad Mahrez/ATT/Al-Ahli/Algérie/90
Kingsley Coman/ATT/Al-Nassr/France/89
Édouard Mendy/G/Al-Ahli/Sénégal/88
Darwin Núñez/ATT/Al-Hilal/Uruguay/87
Sadio Mané/ATT/Al-Nassr/Sénégal/86
Ivan Toney/ATT/Al-Ahli/Angleterre/85
Kalidou Koulibaly/DEF/Al-Hilal/Sénégal/84
Malcom/ATT/Al-Hilal/Brésil/83
Iñigo Martínez/DEF/Al-Nassr/Espagne/82
Franck Kessié/MIL/Al-Ahli/Côte d'Ivoire/81
Fabinho/MIL/Al-Ittihad/Brésil/80
Mateo Retegui/ATT/Al-Qadsiah/Italie/80
Marcelo Brozović/MIL/Al-Nassr/Croatie/79
Merih Demiral/DEF/Al-Ahli/Turquie/78
Moussa Diaby/ATT/Al-Ittihad/France/77
Houssem Aouar/MIL/Al-Ittihad/Algérie/76
Youssef En-Nesyri/ATT/Al-Ittihad/Maroc/75
Steven Bergwijn/ATT/Al-Ittihad/Pays-Bas/74
Galeno/ATT/Al-Ahli/Brésil/73
Salem Al-Dawsari/ATT/Al-Hilal/Arabie saoudite/72
Enzo Millot/MIL/Al-Ahli/France/71
Alexandre Lacazette/ATT/Neom/France/70
Yannick Carrasco/ATT/Al-Shabab/Belgique/69
Julián Quiñones/ATT/Al-Qadsiah/Mexique/68
Georginio Wijnaldum/MIL/Al-Ettifaq/Pays-Bas/67
Bento/G/Al-Nassr/Brésil/66
Predrag Rajković/G/Al-Ittihad/Serbie/74
Nawaf Al-Aqidi/G/Al-Nassr/Arabie saoudite/68
Roger Ibañez/DEF/Al-Ahli/Brésil/72
Hassan Tambakti/DEF/Al-Hilal/Arabie saoudite/70`},
{id:"s_alg",name:"Algérie",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Riyad Mahrez/ATT/Al-Ahli/Algérie/98
Rayan Aït-Nouri/DEF/Manchester City/Algérie/97
Mohamed Amoura/ATT/Wolfsburg/Algérie/96
Amine Gouiri/ATT/Marseille/Algérie/94
Ismaël Bennacer/MIL/Dinamo Zagreb/Algérie/93
Ibrahim Maza/MIL/Leverkusen/Algérie/92
Fares Chaïbi/MIL/Eintracht Francfort/Algérie/91
Ramy Bensebaini/DEF/Dortmund/Algérie/90
Houssem Aouar/MIL/Al-Ittihad/Algérie/89
Hicham Boudaoui/MIL/Nice/Algérie/88
Saïd Benrahma/ATT/Neom/Algérie/87
Anis Hadj Moussa/ATT/Feyenoord/Algérie/86
Rafik Belghali/DEF/Hellas Vérone/Algérie/85
Youcef Belaïli/ATT/Espérance de Tunis/Algérie/84
Ramiz Zerrouki/MIL/Twente/Algérie/83
Aïssa Mandi/DEF/Lille/Algérie/82
Jaouen Hadjam/DEF/Young Boys/Algérie/81
Mohamed Amine Tougaï/DEF/Espérance de Tunis/Algérie/80
Luca Zidane/G/Grenade/Algérie/80
Baghdad Bounedjah/ATT/Al-Shamal/Algérie/79
Adil Boulbina/ATT/Al-Duhail/Algérie/78
Youcef Atal/DEF/Al-Sadd/Algérie/77
Anthony Mandrea/G/Caen/Algérie/76
Farès Ghedjemis/ATT/Frosinone/Algérie/75
Ilan Kebbal/MIL/Paris FC/Algérie/74
Nabil Bentaleb/MIL/Lille/Algérie/73
Himad Abdelli/MIL/Angers/Algérie/72
Badredine Bouanani/ATT/Stuttgart/Algérie/71
Zineddine Belaïd/DEF/JS Kabylie/Algérie/70
Islam Slimani/ATT/CR Belouizdad/Algérie/69
Oussama Benbot/G/USM Alger/Algérie/68
Mustapha Zeghba/G/Damac/Algérie/70
Melvin Mastil/G/Stade Nyonnais/Algérie/67`},
{id:"s_por",name:"Portugal",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Vitinha/MIL/PSG/Portugal/98
Nuno Mendes/DEF/PSG/Portugal/97
João Neves/MIL/PSG/Portugal/96
Bruno Fernandes/MIL/Manchester United/Portugal/94
Rúben Dias/DEF/Manchester City/Portugal/93
Cristiano Ronaldo/ATT/Al-Nassr/Portugal/92
Bernardo Silva/MIL/Manchester City/Portugal/91
Rafael Leão/ATT/Milan/Portugal/90
Diogo Costa/G/Porto/Portugal/89
Pedro Neto/ATT/Chelsea/Portugal/88
Gonçalo Inácio/DEF/Sporting/Portugal/87
João Cancelo/DEF/Al-Hilal/Portugal/86
Francisco Conceição/ATT/Juventus/Portugal/85
Gonçalo Ramos/ATT/PSG/Portugal/84
Rúben Neves/MIL/Al-Hilal/Portugal/83
Francisco Trincão/ATT/Sporting/Portugal/82
João Félix/ATT/Al-Nassr/Portugal/81
Diogo Dalot/DEF/Manchester United/Portugal/80
Matheus Nunes/MIL/Manchester City/Portugal/80
João Palhinha/MIL/Tottenham/Portugal/79
Pedro Gonçalves/ATT/Sporting/Portugal/78
Renato Veiga/DEF/Villarreal/Portugal/77
Nélson Semedo/DEF/Fenerbahçe/Portugal/76
Rodrigo Mora/MIL/Porto/Portugal/75
Geovany Quenda/ATT/Sporting/Portugal/74
Tomás Araújo/DEF/Benfica/Portugal/73
António Silva/DEF/Benfica/Portugal/72
Samu Costa/MIL/Majorque/Portugal/71
Rui Silva/G/Sporting/Portugal/70
José Sá/G/Wolverhampton/Portugal/69
Fábio Vieira/MIL/Hambourg/Portugal/68
Otávio/MIL/Al-Qadsiah/Portugal/67
Nuno Tavares/DEF/Lazio/Portugal/66
Jota Silva/ATT/Nottingham Forest/Portugal/65
Gonçalo Guedes/ATT/Real Sociedad/Portugal/64
Ricardo Velho/G/Gençlerbirliği/Portugal/68
Samuel Soares/G/Benfica/Portugal/66`},
{id:"s_sen",name:"Sénégal",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Sadio Mané/ATT/Al-Nassr/Sénégal/98
Nicolas Jackson/ATT/Bayern/Sénégal/97
Ismaïla Sarr/ATT/Crystal Palace/Sénégal/96
Pape Matar Sarr/MIL/Tottenham/Sénégal/94
Iliman Ndiaye/ATT/Everton/Sénégal/93
Édouard Mendy/G/Al-Ahli/Sénégal/92
Kalidou Koulibaly/DEF/Al-Hilal/Sénégal/91
Lamine Camara/MIL/Monaco/Sénégal/90
Idrissa Gueye/MIL/Everton/Sénégal/89
Moussa Niakhaté/DEF/Lyon/Sénégal/88
El Hadji Malick Diouf/DEF/West Ham/Sénégal/87
Habib Diarra/MIL/Sunderland/Sénégal/86
Pape Gueye/MIL/Villarreal/Sénégal/85
Boulaye Dia/ATT/Lazio/Sénégal/84
Krépin Diatta/ATT/Monaco/Sénégal/83
Ibrahim Mbaye/ATT/PSG/Sénégal/82
Habib Diallo/ATT/Metz/Sénégal/81
Abdou Diallo/DEF/Al-Arabi/Sénégal/80
Ismail Jakobs/DEF/Galatasaray/Sénégal/80
Assane Diao/ATT/Côme/Sénégal/79
Mamadou Sarr/DEF/Strasbourg/Sénégal/78
Formose Mendy/DEF/Lorient/Sénégal/77
Chérif Ndiaye/ATT/Samsunspor/Sénégal/76
Abdoulaye Seck/DEF/Maccabi Haïfa/Sénégal/75
Youssouf Sabaly/DEF/Betis/Sénégal/74
Bamba Dieng/ATT/Lorient/Sénégal/73
Nampalys Mendy/MIL/Lens/Sénégal/72
Cheikhou Kouyaté/MIL/Montpellier/Sénégal/71
Mory Diaw/G/Le Havre/Sénégal/70
Seny Dieng/G/Middlesbrough/Sénégal/69
Pathé Ciss/MIL/Rayo Vallecano/Sénégal/68
Yehvann Diouf/G/Nice/Sénégal/72
Alfred Gomis/G/Palerme/Sénégal/68`},
{id:"s_legalg",name:"Légendes d'Algérie",cat:"themes",sub:"Les héros des Fennecs",raw:`
Rabah Madjer/ATT/Porto/Algérie/98
Riyad Mahrez (2016)/ATT/Leicester/Algérie/97
Lakhdar Belloumi/MIL/GC Mascara/Algérie/96
Rachid Mekhloufi/ATT/Saint-Étienne/Algérie/94
Mustapha Dahleb/MIL/PSG/Algérie/93
Salah Assad/ATT/Mulhouse/Algérie/92
Madjid Bougherra/DEF/Rangers/Algérie/91
Yacine Brahimi/ATT/Porto/Algérie/90
Ismaël Bennacer (2019)/MIL/Milan/Algérie/89
Sofiane Feghouli/MIL/Valence/Algérie/88
Karim Ziani/MIL/Marseille/Algérie/87
Raïs M'Bolhi/G/Ettifaq/Algérie/86
Islam Slimani/ATT/Sporting/Algérie/85
Ali Fergani/MIL/JS Kabylie/Algérie/84
Baghdad Bounedjah (2019)/ATT/Al-Sadd/Algérie/83
Youcef Belaïli (2019)/ATT/Espérance de Tunis/Algérie/82
Antar Yahia/DEF/Bochum/Algérie/81
Mahmoud Guendouz/DEF/NA Hussein Dey/Algérie/80
Djamel Menad/ATT/JS Kabylie/Algérie/80
Abdelhafid Tasfaout/ATT/MC Oran/Algérie/79
Nadir Belhadj/DEF/Portsmouth/Algérie/78
Faouzi Ghoulam/DEF/Naples/Algérie/77
Hassen Lalmas/ATT/CR Belouizdad/Algérie/76
Chérif Oudjani/ATT/Lens/Algérie/75
Rafik Saïfi/ATT/Troyes/Algérie/74
Hilal Soudani/ATT/Dinamo Zagreb/Algérie/73
Djamel Belmadi (joueur)/MIL/Marseille/Algérie/72
Moussa Saïb/MIL/Auxerre/Algérie/71
Tedj Bensaoula/ATT/MC Oran/Algérie/70
Djamel Benlamri/DEF/Al-Shabab/Algérie/69
Abdelaziz Ben Tifour/MIL/Monaco/Algérie/68
Mehdi Cerbah/G/JS Kabylie/Algérie/80
Nasreddine Drid/G/MC Oran/Algérie/76
Lounès Gaouaoui/G/ASO Chlef/Algérie/74
Fawzi Chaouchi/G/ES Sétif/Algérie/73`},
{id:"s_b_italie",name:"Italie",cat:"nations",sub:"Europe",desc:"Sélection actuelle",raw:`
Gianluigi Donnarumma/G/Manchester City/Italie/95
Nicolò Barella/MIL/Inter/Italie/93
Alessandro Bastoni/DEF/Inter/Italie/93
Sandro Tonali/MIL/Newcastle/Italie/93
Federico Dimarco/DEF/Inter/Italie/88
Riccardo Calafiori/DEF/Arsenal/Italie/87
Moise Kean/ATT/Fiorentina/Italie/87
Mateo Retegui/ATT/Al-Qadsiah/Italie/86
Giovanni Di Lorenzo/DEF/Naples/Italie/86
Davide Frattesi/MIL/Inter/Italie/85
Marco Carnesecchi/G/Atalanta/Italie/85
Guglielmo Vicario/G/Tottenham/Italie/83
Manuel Locatelli/MIL/Juventus/Italie/82
Destiny Udogie/DEF/Tottenham/Italie/81
Federico Chiesa/ATT/Liverpool/Italie/80
Giacomo Raspadori/ATT/Atlético Madrid/Italie/80
Lorenzo Pellegrini/MIL/Roma/Italie/79
Samuele Ricci/MIL/Milan/Italie/78
Matteo Politano/ATT/Naples/Italie/77
Ciro Immobile/ATT/Bologne/Italie/77
Daniel Maldini/ATT/Atalanta/Italie/76
Andrea Cambiaso/DEF/Juventus/Italie/74
Riccardo Orsolini/ATT/Bologne/Italie/74
Mattia Zaccagni/ATT/Lazio/Italie/73
Raoul Bellanova/DEF/Atalanta/Italie/73
Francesco Pio Esposito/ATT/Inter/Italie/72
Gianluca Mancini/DEF/Roma/Italie/72
Alex Meret/G/Naples/Italie/71
Bryan Cristante/MIL/Roma/Italie/70
Wilfried Gnonto/ATT/Leeds/Italie/70
Nicolò Fagioli/MIL/Fiorentina/Italie/69
Michael Folorunsho/MIL/Cagliari/Italie/68
Michele Di Gregorio/G/Juventus/Italie/80`},
{id:"s_b_tunisie",name:"Tunisie",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Ellyes Skhiri/MIL/Eintracht Francfort/Tunisie/95
Hannibal Mejbri/MIL/Burnley/Tunisie/94
Montassar Talbi/DEF/Lorient/Tunisie/93
Aïssa Laïdouni/MIL/Al-Wakrah/Tunisie/90
Ali Abdi/DEF/Nice/Tunisie/89
Youssef Msakni/ATT/Al-Arabi/Tunisie/88
Mohamed Ali Ben Romdhane/MIL/Al Ahly/Tunisie/88
Elias Achouri/ATT/Copenhague/Tunisie/87
Yan Valery/DEF/Young Boys/Tunisie/86
Naïm Sliti/ATT/Al-Shamal/Tunisie/82
Dylan Bronn/DEF/Servette/Tunisie/81
Aymen Dahmen/G/CS Sfaxien/Tunisie/80
Ferjani Sassi/MIL/Al-Gharafa/Tunisie/80
Ismaël Gharbi/ATT/Augsbourg/Tunisie/80
Seifeddine Jaziri/ATT/Zamalek/Tunisie/79
Hamza Rafia/MIL/Lecce/Tunisie/78
Anis Ben Slimane/MIL/Norwich/Tunisie/77
Sayfallah Ltaief/ATT/Winterthur/Tunisie/76
Yassine Meriah/DEF/Espérance de Tunis/Tunisie/73
Firas Ben Larbi/MIL/Al-Jazira/Tunisie/73
Bechir Ben Saïd/G/Espérance de Tunis/Tunisie/72
Elias Saad/ATT/Augsbourg/Tunisie/72
Omar Rekik/DEF/Maribor/Tunisie/72
Hazem Mastouri/ATT/Dynamo Makhachkala/Tunisie/71
Mortadha Ben Ouanes/DEF/Kasimpasa/Tunisie/70
Mohamed Dräger/DEF/Lucerne/Tunisie/70
Ali Maâloul/DEF/CS Sfaxien/Tunisie/69
Firas Chaouat/ATT/Club Africain/Tunisie/68
Sabri Ben Hassen/G/Étoile du Sahel/Tunisie/70
Noureddine Farhati/G/Stade Tunisien/Tunisie/68
Moez Ben Cherifia/G/Espérance de Tunis/Tunisie/67`},
{id:"s_b_cameroun",name:"Cameroun",cat:"nations",sub:"Afrique",desc:"Sélection actuelle",raw:`
Bryan Mbeumo/ATT/Manchester United/Cameroun/95
Carlos Baleba/MIL/Brighton/Cameroun/94
André Onana/G/Trabzonspor/Cameroun/93
Frank Anguissa/MIL/Naples/Cameroun/93
Christian Kofane/ATT/Leverkusen/Cameroun/88
Vincent Aboubakar/ATT/Neftchi Bakou/Cameroun/87
Christopher Wooh/DEF/Rennes/Cameroun/86
Eric Maxim Choupo-Moting/ATT/New York Red Bulls/Cameroun/86
Jean-Charles Castelletto/DEF/Nantes/Cameroun/85
Nouhou Tolo/DEF/Seattle Sounders/Cameroun/85
Karl Toko Ekambi/ATT/Al-Ettifaq/Cameroun/82
Georges-Kévin Nkoudou/ATT/Besiktas/Cameroun/81
Devis Epassy/G/Abha/Cameroun/80
Danny Namaso/ATT/Auxerre/Cameroun/80
Olivier Ntcham/MIL/Samsunspor/Cameroun/79
Arthur Avom/MIL/Lorient/Cameroun/78
Martin Hongla/MIL/Grenade/Cameroun/77
Jackson Tchatchoua/DEF/Wolverhampton/Cameroun/77
Enzo Ebosse/DEF/Udinese/Cameroun/76
Jean Onana/MIL/Genoa/Cameroun/73
Moumi Ngamaleu/ATT/Dynamo Moscou/Cameroun/72
Faris Moumbagna/ATT/Marseille/Cameroun/72
Ignatius Ganago/ATT/Nantes/Cameroun/71
Jean-Pierre Nsame/ATT/Legia Varsovie/Cameroun/71
Clinton Njie/ATT/Sivasspor/Cameroun/70
Junior Tchamadeu/DEF/Stoke City/Cameroun/70
Collins Fai/DEF/Al-Tai/Cameroun/69
Léandre Tawamba/ATT/Al-Okhdood/Cameroun/68
Didier Lamkel Zé/ATT/Dukla Prague/Cameroun/66
Simon Ngapandouetnbu/G/Montpellier/Cameroun/74
Simon Omossola/G/Saint-Éloi Lupopo/Cameroun/72
Fabrice Ondoa/G/RFS Riga/Cameroun/70`},
{id:"s_b_ligaportugal",name:"Liga Portugal",cat:"ligues",sub:"Championnats",raw:`
Diogo Costa/G/Porto/Portugal/94
Francisco Trincão/ATT/Sporting/Portugal/93
Morten Hjulmand/MIL/Sporting/Danemark/93
Vangelis Pavlidis/ATT/Benfica/Grèce/93
Samu Aghehowa/ATT/Porto/Espagne/90
Pedro Gonçalves/ATT/Sporting/Portugal/89
Gonçalo Inácio/DEF/Sporting/Portugal/88
Rodrigo Mora/MIL/Porto/Portugal/88
Nicolás Otamendi/DEF/Benfica/Argentine/87
Alan Varela/MIL/Porto/Argentine/87
Anatoliy Trubin/G/Benfica/Ukraine/86
Andreas Schjelderup/ATT/Benfica/Norvège/85
Luis Suárez/ATT/Sporting/Colombie/84
Ricardo Horta/ATT/Braga/Portugal/83
Richard Ríos/MIL/Benfica/Colombie/83
Georgiy Sudakov/MIL/Benfica/Ukraine/82
Fredrik Aursnes/MIL/Benfica/Norvège/82
Gabri Veiga/MIL/Porto/Espagne/81
António Silva/DEF/Benfica/Portugal/80
Maximiliano Araújo/DEF/Sporting/Uruguay/79
Nehuén Pérez/DEF/Porto/Argentine/78
Geny Catamo/ATT/Sporting/Mozambique/77
Bruma/ATT/Braga/Portugal/76
Rodrigo Zalazar/MIL/Braga/Uruguay/74
William Gomes/ATT/Porto/Brésil/73
Rui Silva/G/Sporting/Portugal/73
Jan Bednarek/DEF/Porto/Pologne/72
Francisco Moura/DEF/Porto/Portugal/72
Zeno Debast/DEF/Sporting/Belgique/71
Leandro Barreiro/MIL/Benfica/Luxembourg/70
Iván Fresneda/DEF/Sporting/Espagne/70
Pau Víctor/ATT/Braga/Espagne/69
Samuel Soares/G/Benfica/Portugal/68
Lukas Horníček/G/Braga/Tchéquie/71`}
);
Object.assign(window.CLUB_COLORS,{"Manchester City":["#6CABDD","#FFFFFF"],"Liverpool":["#C8102E","#FFFFFF"],"Arsenal":["#EF0107","#FFFFFF"],"Chelsea":["#034694","#FFFFFF"],"Manchester United":["#DA291C","#FFFFFF"],"Newcastle":["#000000","#FFFFFF"],"Tottenham":["#FFFFFF","#132257"],"Everton":["#003399","#FFFFFF"],"Al-Nassr":["#FFD100","#0033A0"],"Al-Hilal":["#005BAC","#FFFFFF"],"Al-Ahli":["#00843D","#FFFFFF"],"Al-Ittihad":["#FFD200","#111"],"Al-Qadsiah":["#E30613","#FFD100"],"Neom":["#1A1A1A","#C9A227"],"Al-Shabab":["#FFFFFF","#000000"],"Al-Ettifaq":["#007A3D","#E30613"],"Wolfsburg":["#65B32E","#FFFFFF"],"Marseille":["#FFFFFF","#2FAEE0"],"Dinamo Zagreb":["#0033A0","#FFFFFF"],"Leverkusen":["#E32221","#000000"],"Eintracht Francfort":["#000000","#E1000F"],"Dortmund":["#FDE100","#000000"],"Nice":["#E30613","#000000"],"Feyenoord":["#E2001A","#FFFFFF"],"Hellas Vérone":["#003C82","#FFD100"],"Espérance de Tunis":["#E30613","#FFD100"],"Twente":["#E30613","#fff"],"Lille":["#E01E13","#20325F"],"Young Boys":["#FFD200","#111"],"Grenade":["#C8102E","#FFFFFF"],"Al-Shamal":["#0054A6","#FFFFFF"],"Al-Duhail":["#C8102E","#FFFFFF"],"Al-Sadd":["#fff","#111"],"Caen":["#1F3A8C","#E30613"],"Frosinone":["#FFD100","#0054A6"],"Paris FC":["#002D62","#FFFFFF"],"Angers":["#000000","#FFFFFF"],"Stuttgart":["#FFFFFF","#E32219"],"JS Kabylie":["#FFD700","#00843D"],"CR Belouizdad":["#C8102E","#FFFFFF"],"USM Alger":["#C8102E","#111"],"Damac":["#E30613","#FFD100"],"Stade Nyonnais":["#E30613","#FFFFFF"],"PSG":["#004170","#DA291C"],"Milan":["#FB090B","#000000"],"Porto":["#003893","#FFFFFF"],"Sporting":["#00805F","#FFFFFF"],"Juventus":["#FFFFFF","#000000"],"Villarreal":["#FFE667","#005187"],"Fenerbahçe":["#FFED00","#00205B"],"Benfica":["#E83030","#FFFFFF"],"Majorque":["#E20613","#000000"],"Wolverhampton":["#FDB913","#231F20"],"Hambourg":["#FFFFFF","#E2001A"],"Lazio":["#87D8F7","#FFFFFF"],"Nottingham Forest":["#DD0000","#FFFFFF"],"Real Sociedad":["#0067B1","#FFFFFF"],"Gençlerbirliği":["#E30613","#000000"],"Bayern":["#DC052D","#FFFFFF"],"Crystal Palace":["#1B458F","#C4122E"],"Monaco":["#E4002B","#FFFFFF"],"Lyon":["#FFFFFF","#DA001A"],"West Ham":["#7A263A","#1BB1E7"],"Sunderland":["#EB172B","#FFFFFF"],"Metz":["#8B0A26","#FFFFFF"],"Al-Arabi":["#C8102E","#FFFFFF"],"Galatasaray":["#A90432","#FDB912"],"Côme":["#004A99","#FFFFFF"],"Strasbourg":["#009FE3","#FFFFFF"],"Lorient":["#F58220","#000000"],"Samsunspor":["#E30613","#FFFFFF"],"Maccabi Haïfa":["#007A3D","#FFFFFF"],"Betis":["#00954C","#FFFFFF"],"Lens":["#FFE500","#E2001A"],"Montpellier":["#F26522","#00205B"],"Le Havre":["#4F9ACE","#002D62"],"Middlesbrough":["#E30613","#FFFFFF"],"Rayo Vallecano":["#FFFFFF","#E30613"],"Palerme":["#F5A9C4","#000000"],"Leicester":["#003090","#FFFFFF"],"GC Mascara":["#0E8A3E","#fff"],"Saint-Étienne":["#009639","#FFFFFF"],"Mulhouse":["#1D4E9E","#FFD200"],"Rangers":["#1B458F","#FFFFFF"],"Valence":["#FFFFFF","#000000"],"Ettifaq":["#0E7C3A","#E31B23"],"Bochum":["#005BA9","#fff"],"NA Hussein Dey":["#C8102E","#FFD100"],"MC Oran":["#E30613","#FFFFFF"],"Portsmouth":["#001489","#FFFFFF"],"Naples":["#12A0D7","#FFFFFF"],"Troyes":["#0054A6","#FFFFFF"],"Auxerre":["#FFFFFF","#0055A4"],"ASO Chlef":["#E30613","#FFFFFF"],"ES Sétif":["#000000","#FFFFFF"],"Inter":["#0068A8","#000000"],"Fiorentina":["#482E92","#FFFFFF"],"Atalanta":["#1E71B8","#000000"],"Atlético Madrid":["#CB3524","#FFFFFF"],"Roma":["#8E1F2F","#F0BC42"],"Bologne":["#A21C26","#1A2F48"],"Leeds":["#FFFFFF","#1D428A"],"Cagliari":["#A6192E","#002350"],"Burnley":["#6C1D45","#99D6EA"],"Al-Wakrah":["#0054A6","#FFFFFF"],"Al Ahly":["#E30613","#FFFFFF"],"Copenhague":["#FFFFFF","#003DA5"],"Servette":["#8B1538","#FFFFFF"],"CS Sfaxien":["#000000","#FFFFFF"],"Al-Gharafa":["#FFD100","#0054A6"],"Augsbourg":["#BA3733","#46714D"],"Zamalek":["#FFFFFF","#E30613"],"Lecce":["#FFD100","#E30613"],"Norwich":["#FFF200","#00A650"],"Winterthur":["#E30613","#FFFFFF"],"Al-Jazira":["#E30613","#000000"],"Maribor":["#6A2C91","#FFD100"],"Dynamo Makhachkala":["#0054A6","#FFFFFF"],"Kasimpasa":["#002D72","#FFFFFF"],"Lucerne":["#003DA5","#FFFFFF"],"Club Africain":["#E30613","#FFFFFF"],"Étoile du Sahel":["#E30613","#FFFFFF"],"Stade Tunisien":["#007A3D","#E30613"],"Brighton":["#0057B8","#FFFFFF"],"Trabzonspor":["#7A1E3C","#41B6E6"],"Neftchi Bakou":["#000000","#FFFFFF"],"Rennes":["#E13327","#000000"],"New York Red Bulls":["#ED1E36","#23326A"],"Nantes":["#FCD405","#00863F"],"Seattle Sounders":["#5D9741","#005595"],"Besiktas":["#000000","#FFFFFF"],"Abha":["#007A3D","#FFFFFF"],"Udinese":["#FFFFFF","#000000"],"Genoa":["#A4161A","#002D72"],"Dynamo Moscou":["#0033A0","#FFFFFF"],"Legia Varsovie":["#007A3D","#FFFFFF"],"Sivasspor":["#E30613","#FFFFFF"],"Stoke City":["#E03A3E","#FFFFFF"],"Al-Tai":["#FFD100","#000000"],"Al-Okhdood":["#E30613","#FFFFFF"],"Dukla Prague":["#8B1A1A","#FFD700"],"Saint-Éloi Lupopo":["#007A3D","#FFFFFF"],"RFS Riga":["#0054A6","#FFFFFF"],"Braga":["#E30613","#FFFFFF"]});

/* ---- clubs_en_nl.js ---- */
// Packs « légendes de club » : Angleterre, Pays-Bas, Écosse
window.FOOT_PACKS.push(
{id:"manutd",name:"Légendes de Manchester United",cat:"clubs",sub:"Angleterre",club:"Manchester United",raw:`
Peter Schmeichel/G/Danemark/91
Edwin van der Sar/G/Pays-Bas/88
David de Gea/G/Espagne/86
Alex Stepney/G/Angleterre/80
Harry Gregg/G/Irlande du Nord/79
Fabien Barthez/G/France/76
Rio Ferdinand/DEF/Angleterre/89
Nemanja Vidić/DEF/Serbie/89
Jaap Stam/DEF/Pays-Bas/87
Gary Neville/DEF/Angleterre/86
Denis Irwin/DEF/Irlande/85
Patrice Evra/DEF/France/85
Steve Bruce/DEF/Angleterre/84
Gary Pallister/DEF/Angleterre/84
Bill Foulkes/DEF/Angleterre/82
Roger Byrne/DEF/Angleterre/81
Martin Buchan/DEF/Écosse/80
Bobby Charlton/MIL/Angleterre/95
Ryan Giggs/MIL/Pays de Galles/92
Paul Scholes/MIL/Angleterre/91
Roy Keane/MIL/Irlande/91
Duncan Edwards/MIL/Angleterre/90
Bryan Robson/MIL/Angleterre/89
David Beckham/MIL/Angleterre/89
Michael Carrick/MIL/Angleterre/84
Bruno Fernandes/MIL/Portugal/84
Paul Ince/MIL/Angleterre/81
Nobby Stiles/MIL/Angleterre/80
Ji-sung Park/MIL/Corée du Sud/78
Darren Fletcher/MIL/Écosse/77
Cristiano Ronaldo/ATT/Portugal/96
George Best/ATT/Irlande du Nord/95
Denis Law/ATT/Écosse/93
Eric Cantona/ATT/France/93
Wayne Rooney/ATT/Angleterre/92
Ruud van Nistelrooy/ATT/Pays-Bas/89
Andy Cole/ATT/Angleterre/84
Dwight Yorke/ATT/Trinité-et-Tobago/83
Mark Hughes/ATT/Pays de Galles/82
Ole Gunnar Solskjær/ATT/Norvège/82`},
{id:"liverpool",name:"Légendes de Liverpool",cat:"clubs",sub:"Angleterre",club:"Liverpool",raw:`
Alisson/G/Brésil/89
Ray Clemence/G/Angleterre/88
Bruce Grobbelaar/G/Zimbabwe/85
Pepe Reina/G/Espagne/82
Elisha Scott/G/Irlande du Nord/79
Jerzy Dudek/G/Pologne/78
Tommy Lawrence/G/Écosse/76
Virgil van Dijk/DEF/Pays-Bas/92
Alan Hansen/DEF/Écosse/89
Emlyn Hughes/DEF/Angleterre/86
Jamie Carragher/DEF/Angleterre/86
Trent Alexander-Arnold/DEF/Angleterre/86
Sami Hyypiä/DEF/Finlande/85
Andrew Robertson/DEF/Écosse/85
Phil Neal/DEF/Angleterre/84
Phil Thompson/DEF/Angleterre/83
Mark Lawrenson/DEF/Irlande/83
Ron Yeats/DEF/Écosse/81
Steven Gerrard/MIL/Angleterre/94
Graeme Souness/MIL/Écosse/90
John Barnes/MIL/Angleterre/88
Xabi Alonso/MIL/Espagne/85
Ian Callaghan/MIL/Angleterre/83
Ray Kennedy/MIL/Angleterre/82
Steve McManaman/MIL/Angleterre/82
Jordan Henderson/MIL/Angleterre/82
Terry McDermott/MIL/Angleterre/81
Jan Mølby/MIL/Danemark/80
Javier Mascherano/MIL/Argentine/80
Kenny Dalglish/ATT/Écosse/96
Mohamed Salah/ATT/Égypte/94
Ian Rush/ATT/Pays de Galles/93
Kevin Keegan/ATT/Angleterre/89
Luis Suárez/ATT/Uruguay/89
Robbie Fowler/ATT/Angleterre/87
Sadio Mané/ATT/Sénégal/87
Fernando Torres/ATT/Espagne/86
Michael Owen/ATT/Angleterre/86
Roger Hunt/ATT/Angleterre/85
Billy Liddell/ATT/Écosse/84`},
{id:"arsenal",name:"Légendes d'Arsenal",cat:"clubs",sub:"Angleterre",club:"Arsenal",raw:`
David Seaman/G/Angleterre/88
Pat Jennings/G/Irlande du Nord/84
Jens Lehmann/G/Allemagne/82
David Raya/G/Espagne/80
Bob Wilson/G/Écosse/79
Jack Kelsey/G/Pays de Galles/78
John Lukic/G/Angleterre/75
Tony Adams/DEF/Angleterre/90
Sol Campbell/DEF/Angleterre/86
Ashley Cole/DEF/Angleterre/86
William Saliba/DEF/France/85
Lee Dixon/DEF/Angleterre/83
Martin Keown/DEF/Angleterre/83
Nigel Winterburn/DEF/Angleterre/82
Kenny Sansom/DEF/Angleterre/82
Frank McLintock/DEF/Écosse/82
Gabriel/DEF/Brésil/82
Steve Bould/DEF/Angleterre/81
Kolo Touré/DEF/Côte d'Ivoire/80
Patrick Vieira/MIL/France/92
Robert Pirès/MIL/France/88
Liam Brady/MIL/Irlande/87
Cesc Fàbregas/MIL/Espagne/87
Martin Ødegaard/MIL/Norvège/87
Declan Rice/MIL/Angleterre/85
Emmanuel Petit/MIL/France/84
Fredrik Ljungberg/MIL/Suède/84
Marc Overmars/MIL/Pays-Bas/84
Gilberto Silva/MIL/Brésil/83
Santi Cazorla/MIL/Espagne/82
David Rocastle/MIL/Angleterre/80
Thierry Henry/ATT/France/96
Dennis Bergkamp/ATT/Pays-Bas/94
Ian Wright/ATT/Angleterre/89
Robin van Persie/ATT/Pays-Bas/87
Bukayo Saka/ATT/Angleterre/86
Cliff Bastin/ATT/Angleterre/85
Pierre-Emerick Aubameyang/ATT/Gabon/83
Charlie George/ATT/Angleterre/80
Ted Drake/ATT/Angleterre/80`},
{id:"chelsea",name:"Légendes de Chelsea",cat:"clubs",sub:"Angleterre",club:"Chelsea",raw:`
Petr Čech/G/Tchéquie/91
Peter Bonetti/G/Angleterre/84
Thibaut Courtois/G/Belgique/83
Carlo Cudicini/G/Italie/79
Édouard Mendy/G/Sénégal/79
Ed de Goey/G/Pays-Bas/77
John Terry/DEF/Angleterre/92
Marcel Desailly/DEF/France/87
Ashley Cole/DEF/Angleterre/86
Ricardo Carvalho/DEF/Portugal/85
César Azpilicueta/DEF/Espagne/84
Thiago Silva/DEF/Brésil/84
Branislav Ivanović/DEF/Serbie/83
Ron Harris/DEF/Angleterre/82
Frank Leboeuf/DEF/France/81
David Luiz/DEF/Brésil/81
Graeme Le Saux/DEF/Angleterre/80
Frank Lampard/MIL/Angleterre/93
Claude Makélélé/MIL/France/88
N'Golo Kanté/MIL/France/88
Michael Essien/MIL/Ghana/86
Juan Mata/MIL/Espagne/83
Dennis Wise/MIL/Angleterre/82
Roberto Di Matteo/MIL/Italie/81
Ray Wilkins/MIL/Angleterre/81
Joe Cole/MIL/Angleterre/81
Gustavo Poyet/MIL/Uruguay/80
Charlie Cooke/MIL/Écosse/80
Didier Drogba/ATT/Côte d'Ivoire/94
Eden Hazard/ATT/Belgique/92
Gianfranco Zola/ATT/Italie/91
Peter Osgood/ATT/Angleterre/87
Jimmy Greaves/ATT/Angleterre/86
Jimmy Floyd Hasselbaink/ATT/Pays-Bas/85
Arjen Robben/ATT/Pays-Bas/85
Cole Palmer/ATT/Angleterre/85
Diego Costa/ATT/Espagne/83
Bobby Tambling/ATT/Angleterre/82
Gianluca Vialli/ATT/Italie/82
Kerry Dixon/ATT/Angleterre/81`},
{id:"mancity",name:"Légendes de Manchester City",cat:"clubs",sub:"Angleterre",club:"Manchester City",raw:`
Bert Trautmann/G/Allemagne/88
Ederson/G/Brésil/86
Joe Hart/G/Angleterre/83
Frank Swift/G/Angleterre/82
Joe Corrigan/G/Angleterre/81
Shay Given/G/Irlande/76
Tony Coton/G/Angleterre/75
Vincent Kompany/DEF/Belgique/91
Rúben Dias/DEF/Portugal/87
Kyle Walker/DEF/Angleterre/85
Pablo Zabaleta/DEF/Argentine/83
John Stones/DEF/Angleterre/83
Aymeric Laporte/DEF/Espagne/82
Joško Gvardiol/DEF/Croatie/82
Aleksandar Kolarov/DEF/Serbie/80
Tony Book/DEF/Angleterre/79
Richard Dunne/DEF/Irlande/79
Nicolás Otamendi/DEF/Argentine/79
Mike Doyle/DEF/Angleterre/78
Kevin De Bruyne/MIL/Belgique/95
David Silva/MIL/Espagne/93
Yaya Touré/MIL/Côte d'Ivoire/91
Rodri/MIL/Espagne/91
Colin Bell/MIL/Angleterre/89
Bernardo Silva/MIL/Portugal/88
Phil Foden/MIL/Angleterre/88
İlkay Gündoğan/MIL/Allemagne/87
Fernandinho/MIL/Brésil/86
Riyad Mahrez/MIL/Algérie/85
Alan Oakes/MIL/Angleterre/79
Georgi Kinkladze/MIL/Géorgie/79
Sergio Agüero/ATT/Argentine/95
Erling Haaland/ATT/Norvège/93
Francis Lee/ATT/Angleterre/86
Raheem Sterling/ATT/Angleterre/86
Carlos Tevez/ATT/Argentine/85
Mike Summerbee/ATT/Angleterre/83
Edin Džeko/ATT/Bosnie-Herzégovine/82
Neil Young/ATT/Angleterre/79
Dennis Tueart/ATT/Angleterre/79`},
{id:"tottenham",name:"Légendes de Tottenham",cat:"clubs",sub:"Angleterre",club:"Tottenham",raw:`
Pat Jennings/G/Irlande du Nord/87
Hugo Lloris/G/France/87
Ray Clemence/G/Angleterre/82
Bill Brown/G/Écosse/79
Paul Robinson/G/Angleterre/77
Erik Thorstvedt/G/Norvège/76
Ledley King/DEF/Angleterre/86
Steve Perryman/DEF/Angleterre/85
Jan Vertonghen/DEF/Belgique/85
Toby Alderweireld/DEF/Belgique/84
Sol Campbell/DEF/Angleterre/83
Gary Mabbutt/DEF/Angleterre/82
Mike England/DEF/Pays de Galles/82
Cristian Romero/DEF/Argentine/82
Kyle Walker/DEF/Angleterre/80
Cyril Knowles/DEF/Angleterre/79
Glenn Hoddle/MIL/Angleterre/91
Danny Blanchflower/MIL/Irlande du Nord/89
Dave Mackay/MIL/Écosse/88
Paul Gascoigne/MIL/Angleterre/87
Luka Modrić/MIL/Croatie/86
Osvaldo Ardiles/MIL/Argentine/85
Chris Waddle/MIL/Angleterre/85
Christian Eriksen/MIL/Danemark/85
John White/MIL/Écosse/83
David Ginola/MIL/France/83
Dele Alli/MIL/Angleterre/82
Ricky Villa/MIL/Argentine/80
Harry Kane/ATT/Angleterre/94
Jimmy Greaves/ATT/Angleterre/93
Son Heung-min/ATT/Corée du Sud/90
Gareth Bale/ATT/Pays de Galles/89
Gary Lineker/ATT/Angleterre/86
Jürgen Klinsmann/ATT/Allemagne/85
Cliff Jones/ATT/Pays de Galles/84
Bobby Smith/ATT/Angleterre/84
Martin Chivers/ATT/Angleterre/84
Teddy Sheringham/ATT/Angleterre/84
Alan Gilzean/ATT/Écosse/83
Robbie Keane/ATT/Irlande/82`},
{id:"newcastle",name:"Légendes de Newcastle",cat:"clubs",sub:"Angleterre",club:"Newcastle",raw:`
Shay Given/G/Irlande/86
Pavel Srníček/G/Tchéquie/80
Nick Pope/G/Angleterre/80
Tim Krul/G/Pays-Bas/77
Willie McFaul/G/Irlande du Nord/76
Steve Harper/G/Angleterre/76
Shaka Hislop/G/Trinité-et-Tobago/75
Bobby Moncur/DEF/Écosse/82
Kieran Trippier/DEF/Angleterre/81
Fabricio Coloccini/DEF/Argentine/80
Philippe Albert/DEF/Belgique/80
Sven Botman/DEF/Pays-Bas/79
Fabian Schär/DEF/Suisse/79
Jonathan Woodgate/DEF/Angleterre/78
Frank Brennan/DEF/Écosse/77
Steve Howey/DEF/Angleterre/77
John Beresford/DEF/Angleterre/76
Frank Clark/DEF/Angleterre/76
David Ginola/MIL/France/86
Bruno Guimarães/MIL/Brésil/85
Rob Lee/MIL/Angleterre/84
Paul Gascoigne/MIL/Angleterre/84
Gary Speed/MIL/Pays de Galles/83
Nolberto Solano/MIL/Pérou/82
Yohan Cabaye/MIL/France/81
Hatem Ben Arfa/MIL/France/80
Jimmy Scoular/MIL/Écosse/80
Kieron Dyer/MIL/Angleterre/79
Keith Gillespie/MIL/Irlande du Nord/77
Alan Shearer/ATT/Angleterre/95
Jackie Milburn/ATT/Angleterre/92
Malcolm Macdonald/ATT/Angleterre/88
Hughie Gallacher/ATT/Écosse/88
Peter Beardsley/ATT/Angleterre/88
Kevin Keegan/ATT/Angleterre/87
Alexander Isak/ATT/Suède/86
Les Ferdinand/ATT/Angleterre/85
Andy Cole/ATT/Angleterre/85
Faustino Asprilla/ATT/Colombie/83
Bobby Mitchell/ATT/Écosse/82`},
{id:"everton",name:"Légendes d'Everton",cat:"clubs",sub:"Angleterre",club:"Everton",raw:`
Neville Southall/G/Pays de Galles/92
Jordan Pickford/G/Angleterre/84
Ted Sagar/G/Angleterre/82
Tim Howard/G/États-Unis/82
Gordon West/G/Angleterre/81
Nigel Martyn/G/Angleterre/79
Kevin Ratcliffe/DEF/Pays de Galles/86
Brian Labone/DEF/Angleterre/85
Leighton Baines/DEF/Angleterre/85
Dave Watson/DEF/Angleterre/83
Ray Wilson/DEF/Angleterre/82
Phil Jagielka/DEF/Angleterre/82
Séamus Coleman/DEF/Irlande/82
Gary Stevens/DEF/Angleterre/80
Joleon Lescott/DEF/Angleterre/80
Derek Mountfield/DEF/Angleterre/79
Pat Van den Hauwe/DEF/Pays de Galles/78
Alan Ball/MIL/Angleterre/89
Howard Kendall/MIL/Angleterre/87
Peter Reid/MIL/Angleterre/86
Colin Harvey/MIL/Angleterre/86
Trevor Steven/MIL/Angleterre/84
Kevin Sheedy/MIL/Irlande/84
Tim Cahill/MIL/Australie/84
Mikel Arteta/MIL/Espagne/84
Marouane Fellaini/MIL/Belgique/80
Steven Pienaar/MIL/Afrique du Sud/80
Thomas Gravesen/MIL/Danemark/79
Leon Osman/MIL/Angleterre/78
Dixie Dean/ATT/Angleterre/96
Tommy Lawton/ATT/Angleterre/87
Gary Lineker/ATT/Angleterre/86
Graeme Sharp/ATT/Écosse/85
Bob Latchford/ATT/Angleterre/85
Alex Young/ATT/Écosse/85
Joe Royle/ATT/Angleterre/84
Andy Gray/ATT/Écosse/83
Duncan Ferguson/ATT/Écosse/83
Roy Vernon/ATT/Pays de Galles/82
Romelu Lukaku/ATT/Belgique/82`},
{id:"ajax",name:"Légendes de l'Ajax",cat:"clubs",sub:"Pays-Bas",club:"Ajax",raw:`
Edwin van der Sar/G/Pays-Bas/91
André Onana/G/Cameroun/81
Maarten Stekelenburg/G/Pays-Bas/81
Stanley Menzo/G/Pays-Bas/80
Heinz Stuy/G/Pays-Bas/79
Remko Pasveer/G/Pays-Bas/75
Ruud Krol/DEF/Pays-Bas/89
Frank de Boer/DEF/Pays-Bas/87
Danny Blind/DEF/Pays-Bas/86
Matthijs de Ligt/DEF/Pays-Bas/85
Barry Hulshoff/DEF/Pays-Bas/84
Velibor Vasović/DEF/Serbie/83
Wim Suurbier/DEF/Pays-Bas/82
Michael Reiziger/DEF/Pays-Bas/82
Jan Vertonghen/DEF/Belgique/82
Daley Blind/DEF/Pays-Bas/82
Horst Blankenburg/DEF/Allemagne/80
Johan Neeskens/MIL/Pays-Bas/90
Frank Rijkaard/MIL/Pays-Bas/89
Jari Litmanen/MIL/Finlande/89
Edgar Davids/MIL/Pays-Bas/86
Clarence Seedorf/MIL/Pays-Bas/86
Wesley Sneijder/MIL/Pays-Bas/86
Frenkie de Jong/MIL/Pays-Bas/86
Arie Haan/MIL/Pays-Bas/85
Rafael van der Vaart/MIL/Pays-Bas/85
Gerrie Mühren/MIL/Pays-Bas/84
Ronald de Boer/MIL/Pays-Bas/84
Hakim Ziyech/MIL/Maroc/84
Christian Eriksen/MIL/Danemark/83
Johan Cruyff/ATT/Pays-Bas/97
Marco van Basten/ATT/Pays-Bas/93
Dennis Bergkamp/ATT/Pays-Bas/90
Piet Keizer/ATT/Pays-Bas/88
Luis Suárez/ATT/Uruguay/87
Patrick Kluivert/ATT/Pays-Bas/86
Sjaak Swart/ATT/Pays-Bas/85
Johnny Rep/ATT/Pays-Bas/85
Marc Overmars/ATT/Pays-Bas/84
Zlatan Ibrahimović/ATT/Suède/84`},
{id:"psv",name:"Légendes du PSV",cat:"clubs",sub:"Pays-Bas",club:"PSV",raw:`
Hans van Breukelen/G/Pays-Bas/88
Jan van Beveren/G/Pays-Bas/85
Heurelho Gomes/G/Brésil/80
Ronald Waterreus/G/Pays-Bas/79
Andreas Isaksson/G/Suède/77
Jeroen Zoet/G/Pays-Bas/77
Ronald Koeman/DEF/Pays-Bas/91
Eric Gerets/DEF/Belgique/87
Jaap Stam/DEF/Pays-Bas/85
Alex/DEF/Brésil/82
Stan Valckx/DEF/Pays-Bas/80
Berry van Aerle/DEF/Pays-Bas/80
André Ooijer/DEF/Pays-Bas/79
Wilfred Bouma/DEF/Pays-Bas/79
Lee Young-pyo/DEF/Corée du Sud/79
Jan Heintze/DEF/Danemark/79
Phillip Cocu/MIL/Pays-Bas/87
Mark van Bommel/MIL/Pays-Bas/86
Willy van de Kerkhof/MIL/Pays-Bas/85
René van de Kerkhof/MIL/Pays-Bas/84
Gerald Vanenburg/MIL/Pays-Bas/83
Søren Lerby/MIL/Danemark/82
Georginio Wijnaldum/MIL/Pays-Bas/81
Ji-sung Park/MIL/Corée du Sud/80
Ibrahim Afellay/MIL/Pays-Bas/80
Wim Jonk/MIL/Pays-Bas/80
Johann Vogel/MIL/Suisse/79
Ronaldo/ATT/Brésil/94
Romário/ATT/Brésil/93
Willy van der Kuijlen/ATT/Pays-Bas/89
Ruud van Nistelrooy/ATT/Pays-Bas/89
Luc Nilis/ATT/Belgique/87
Mateja Kežman/ATT/Serbie/85
Arjen Robben/ATT/Pays-Bas/85
Memphis Depay/ATT/Pays-Bas/84
Wim Kieft/ATT/Pays-Bas/82
Ralf Edström/ATT/Suède/82
Luuk de Jong/ATT/Pays-Bas/82
Jefferson Farfán/ATT/Pérou/82
Hirving Lozano/ATT/Mexique/81`},
{id:"feyenoord",name:"Légendes du Feyenoord",cat:"clubs",sub:"Pays-Bas",club:"Feyenoord",raw:`
Eddy Pieters Graafland/G/Pays-Bas/82
Jerzy Dudek/G/Pologne/82
Ed de Goey/G/Pays-Bas/81
Justin Bijlow/G/Pays-Bas/77
Joop Hiele/G/Pays-Bas/76
Kenneth Vermeer/G/Pays-Bas/75
Henk Timmer/G/Pays-Bas/74
Rinus Israël/DEF/Pays-Bas/86
Giovanni van Bronckhorst/DEF/Pays-Bas/84
Stefan de Vrij/DEF/Pays-Bas/82
Theo Laseroms/DEF/Pays-Bas/80
John de Wolf/DEF/Pays-Bas/80
David Hancko/DEF/Slovaquie/79
Wim Rijsbergen/DEF/Pays-Bas/78
Bruno Martins Indi/DEF/Pays-Bas/78
Gernot Trauner/DEF/Autriche/78
Ulrich van Gobbel/DEF/Pays-Bas/77
Ron Vlaar/DEF/Pays-Bas/77
Wim van Hanegem/MIL/Pays-Bas/92
Johan Cruyff/MIL/Pays-Bas/87
Wim Jansen/MIL/Pays-Bas/86
Ruud Gullit/MIL/Pays-Bas/86
Franz Hasil/MIL/Autriche/82
Shinji Ono/MIL/Japon/82
Orkun Kökçü/MIL/Turquie/81
Paul Bosvelt/MIL/Pays-Bas/80
Jordy Clasie/MIL/Pays-Bas/78
Jens Toornstra/MIL/Pays-Bas/78
Rob Witschge/MIL/Pays-Bas/78
Coen Moulijn/ATT/Pays-Bas/92
Ove Kindvall/ATT/Suède/88
Dirk Kuyt/ATT/Pays-Bas/86
Pierre van Hooijdonk/ATT/Pays-Bas/84
Robin van Persie/ATT/Pays-Bas/83
Jon Dahl Tomasson/ATT/Danemark/82
Peter Houtman/ATT/Pays-Bas/82
Santiago Giménez/ATT/Mexique/82
Roy Makaay/ATT/Pays-Bas/81
Steven Berghuis/ATT/Pays-Bas/80
Salomon Kalou/ATT/Côte d'Ivoire/77`},
{id:"celtic",name:"Légendes du Celtic",cat:"clubs",sub:"Écosse",club:"Celtic",raw:`
Ronnie Simpson/G/Écosse/86
Pat Bonner/G/Irlande/82
Artur Boruc/G/Pologne/82
John Thomson/G/Écosse/80
Fraser Forster/G/Angleterre/80
Craig Gordon/G/Écosse/80
Billy McNeill/DEF/Écosse/92
Danny McGrain/DEF/Écosse/89
Tommy Gemmell/DEF/Écosse/87
Roy Aitken/DEF/Écosse/85
Johan Mjällby/DEF/Suède/82
Virgil van Dijk/DEF/Pays-Bas/82
Kieran Tierney/DEF/Écosse/81
Jim Craig/DEF/Écosse/80
Bobo Baldé/DEF/Guinée/79
Tom Boyd/DEF/Écosse/79
John Clark/DEF/Écosse/78
Cameron Carter-Vickers/DEF/États-Unis/78
Bobby Murdoch/MIL/Écosse/88
Paul McStay/MIL/Écosse/88
Bertie Auld/MIL/Écosse/85
Scott Brown/MIL/Écosse/85
Shunsuke Nakamura/MIL/Japon/84
Lubo Moravčík/MIL/Slovaquie/84
Paul Lambert/MIL/Écosse/83
Callum McGregor/MIL/Écosse/83
Neil Lennon/MIL/Irlande du Nord/82
Stiliyan Petrov/MIL/Bulgarie/82
Tommy Burns/MIL/Écosse/82
Henrik Larsson/ATT/Suède/95
Jimmy Johnstone/ATT/Écosse/93
Jimmy McGrory/ATT/Écosse/91
Kenny Dalglish/ATT/Écosse/90
Bobby Lennox/ATT/Écosse/86
Stevie Chalmers/ATT/Écosse/85
Patsy Gallacher/ATT/Irlande/85
Charlie Nicholas/ATT/Écosse/82
Brian McClair/ATT/Écosse/82
John Hartson/ATT/Pays de Galles/81
Chris Sutton/ATT/Angleterre/81`},
{id:"rangers",name:"Légendes des Rangers",cat:"clubs",sub:"Écosse",club:"Rangers",raw:`
Andy Goram/G/Écosse/89
Allan McGregor/G/Écosse/84
Chris Woods/G/Angleterre/82
Stefan Klos/G/Allemagne/82
Peter McCloy/G/Écosse/79
Bobby Brown/G/Écosse/78
John Greig/DEF/Écosse/93
Richard Gough/DEF/Écosse/89
Terry Butcher/DEF/Angleterre/86
Sandy Jardine/DEF/Écosse/86
George Young/DEF/Écosse/86
Willie Woodburn/DEF/Écosse/84
James Tavernier/DEF/Angleterre/82
Arthur Numan/DEF/Pays-Bas/81
Eric Caldow/DEF/Écosse/81
Lorenzo Amoruso/DEF/Italie/80
David Weir/DEF/Écosse/80
Fernando Ricksen/DEF/Pays-Bas/79
Jim Baxter/MIL/Écosse/91
Brian Laudrup/MIL/Danemark/91
Paul Gascoigne/MIL/Angleterre/89
Davie Cooper/MIL/Écosse/86
Barry Ferguson/MIL/Écosse/85
Ian Durrant/MIL/Écosse/82
Giovanni van Bronckhorst/MIL/Pays-Bas/82
Stuart McCall/MIL/Écosse/81
Jörg Albertz/MIL/Allemagne/81
Steven Davis/MIL/Irlande du Nord/81
Ray Wilkins/MIL/Angleterre/81
Ian Ferguson/MIL/Écosse/80
Ally McCoist/ATT/Écosse/94
Mark Hateley/ATT/Angleterre/87
Derek Johnstone/ATT/Écosse/84
Bob McPhail/ATT/Écosse/84
Willie Johnston/ATT/Écosse/82
Ralph Brand/ATT/Écosse/81
Jim Forrest/ATT/Écosse/81
Colin Stein/ATT/Écosse/80
Alfredo Morelos/ATT/Colombie/80
Kris Boyd/ATT/Écosse/79`}
);
Object.assign(window.CLUB_COLORS,{"Manchester United":["#DA291C","#FFFFFF"],"Liverpool":["#C8102E","#F6EB61"],"Arsenal":["#EF0107","#FFFFFF"],"Chelsea":["#034694","#FFFFFF"],"Manchester City":["#6CABDD","#FFFFFF"],"Tottenham":["#FFFFFF","#132257"],"Newcastle":["#241F20","#FFFFFF"],"Everton":["#003399","#FFFFFF"],"Ajax":["#FFFFFF","#D2122E"],"PSV":["#ED1C24","#FFFFFF"],"Feyenoord":["#E30613","#FFFFFF"],"Celtic":["#018749","#FFFFFF"],"Rangers":["#1B458F","#FFFFFF"]});

/* ---- clubs_es_it_de.js ---- */
// Packs « légendes de club » : Espagne, Italie, Allemagne
window.FOOT_PACKS.push(
{id:"realmadrid",name:"Légendes du Real Madrid",cat:"clubs",sub:"Espagne",club:"Real Madrid",raw:`
Iker Casillas/G/Espagne/95
Thibaut Courtois/G/Belgique/90
Ricardo Zamora/G/Espagne/86
Keylor Navas/G/Costa Rica/82
Paco Buyo/G/Espagne/78
Bodo Illgner/G/Allemagne/76
Sergio Ramos/DEF/Espagne/94
Roberto Carlos/DEF/Brésil/92
Fernando Hierro/DEF/Espagne/90
Marcelo/DEF/Brésil/88
Manolo Sanchís/DEF/Espagne/86
Raphaël Varane/DEF/France/86
Dani Carvajal/DEF/Espagne/85
José Antonio Camacho/DEF/Espagne/84
Pepe/DEF/Portugal/84
Zinédine Zidane/MIL/France/95
Luka Modrić/MIL/Croatie/93
Toni Kroos/MIL/Allemagne/91
Luís Figo/MIL/Portugal/89
Fernando Redondo/MIL/Argentine/87
Casemiro/MIL/Brésil/86
Jude Bellingham/MIL/Angleterre/86
Xabi Alonso/MIL/Espagne/85
Claude Makélélé/MIL/France/84
Míchel/MIL/Espagne/84
Federico Valverde/MIL/Uruguay/84
Alfredo Di Stéfano/ATT/Argentine/98
Cristiano Ronaldo/ATT/Portugal/97
Ferenc Puskás/ATT/Hongrie/95
Raúl/ATT/Espagne/93
Karim Benzema/ATT/France/92
Francisco Gento/ATT/Espagne/91
Ronaldo/ATT/Brésil/91
Emilio Butragueño/ATT/Espagne/88
Hugo Sánchez/ATT/Mexique/88
Vinícius Júnior/ATT/Brésil/88
Raymond Kopa/ATT/France/87
Gareth Bale/ATT/Pays de Galles/86
Santillana/ATT/Espagne/84
Amancio/ATT/Espagne/84`},
{id:"barca",name:"Légendes du Barça",cat:"clubs",sub:"Espagne",club:"Barcelone",raw:`
Andoni Zubizarreta/G/Espagne/88
Víctor Valdés/G/Espagne/88
Marc-André ter Stegen/G/Allemagne/88
Antoni Ramallets/G/Espagne/86
Salvador Sadurní/G/Espagne/78
Javier Urruticoechea/G/Espagne/78
Claudio Bravo/G/Chili/78
Carles Puyol/DEF/Espagne/92
Gerard Piqué/DEF/Espagne/89
Ronald Koeman/DEF/Pays-Bas/89
Dani Alves/DEF/Brésil/88
Jordi Alba/DEF/Espagne/85
Migueli/DEF/Espagne/82
Éric Abidal/DEF/France/80
Rafael Márquez/DEF/Mexique/80
Frank de Boer/DEF/Pays-Bas/78
Albert Ferrer/DEF/Espagne/78
Sergi Barjuán/DEF/Espagne/78
Xavi/MIL/Espagne/95
Andrés Iniesta/MIL/Espagne/95
Sergio Busquets/MIL/Espagne/90
Pep Guardiola/MIL/Espagne/88
Luis Suárez Miramontes/MIL/Espagne/88
Michael Laudrup/MIL/Danemark/88
Deco/MIL/Portugal/85
Pedri/MIL/Espagne/84
Ivan Rakitić/MIL/Croatie/82
José Mari Bakero/MIL/Espagne/80
Guillermo Amor/MIL/Espagne/78
Lionel Messi/ATT/Argentine/98
Johan Cruyff/ATT/Pays-Bas/96
Ronaldinho/ATT/Brésil/93
László Kubala/ATT/Hongrie/92
Luis Suárez/ATT/Uruguay/91
Rivaldo/ATT/Brésil/90
Hristo Stoichkov/ATT/Bulgarie/90
Romário/ATT/Brésil/89
Samuel Eto'o/ATT/Cameroun/89
Neymar/ATT/Brésil/89
Carles Rexach/ATT/Espagne/82`},
{id:"atletico",name:"Légendes de l'Atlético",cat:"clubs",sub:"Espagne",club:"Atlético Madrid",raw:`
Jan Oblak/G/Slovénie/93
Thibaut Courtois/G/Belgique/88
Abel Resino/G/Espagne/84
José Francisco Molina/G/Espagne/80
David de Gea/G/Espagne/80
Germán Burgos/G/Argentine/78
Miguel Reina/G/Espagne/78
Diego Godín/DEF/Uruguay/90
Filipe Luís/DEF/Brésil/85
Juanfran/DEF/Espagne/83
José María Giménez/DEF/Uruguay/82
Miranda/DEF/Brésil/82
Luis Pereira/DEF/Brésil/80
Lucas Hernández/DEF/France/80
Stefan Savić/DEF/Monténégro/78
Tomás Reñones/DEF/Espagne/78
Isacio Calleja/DEF/Espagne/78
Antonio López/DEF/Espagne/76
Koke/MIL/Espagne/88
Diego Simeone/MIL/Argentine/86
Gabi/MIL/Espagne/85
Adelardo/MIL/Espagne/84
Saúl Ñíguez/MIL/Espagne/83
Arda Turan/MIL/Turquie/82
Milinko Pantić/MIL/Serbie/82
Tiago/MIL/Portugal/80
Rodrigo De Paul/MIL/Argentine/80
Thomas Partey/MIL/Ghana/80
Antoine Griezmann/ATT/France/92
Luis Aragonés/ATT/Espagne/91
Fernando Torres/ATT/Espagne/90
Radamel Falcao/ATT/Colombie/88
Sergio Agüero/ATT/Argentine/88
Diego Forlán/ATT/Uruguay/87
Paulo Futre/ATT/Portugal/87
Diego Costa/ATT/Espagne/85
José Eulogio Gárate/ATT/Espagne/84
Kiko/ATT/Espagne/82
Christian Vieri/ATT/Italie/82
Enrique Collar/ATT/Espagne/80`},
{id:"valence",name:"Légendes de Valence",cat:"clubs",sub:"Espagne",club:"Valence",raw:`
Santiago Cañizares/G/Espagne/88
Ignacio Eizaguirre/G/Espagne/80
Diego Alves/G/Brésil/80
Giorgi Mamardashvili/G/Géorgie/80
José Manuel Ochotorena/G/Espagne/78
Andrés Palop/G/Espagne/76
Jaume Domènech/G/Espagne/74
Roberto Ayala/DEF/Argentine/88
Carlos Marchena/DEF/Espagne/82
Amedeo Carboni/DEF/Italie/82
Miroslav Đukić/DEF/Serbie/80
Ricardo Arias/DEF/Espagne/80
José Luis Gayà/DEF/Espagne/80
Mauricio Pellegrino/DEF/Argentine/78
Jocelyn Angloma/DEF/France/78
David Navarro/DEF/Espagne/74
Gaizka Mendieta/MIL/Espagne/88
David Albelda/MIL/Espagne/86
Rubén Baraja/MIL/Espagne/86
Pablo Aimar/MIL/Argentine/86
Vicente/MIL/Espagne/85
Fernando Gómez/MIL/Espagne/84
Antonio Puchades/MIL/Espagne/82
Dani Parejo/MIL/Espagne/82
Juan Mata/MIL/Espagne/82
Miguel Ángel Angulo/MIL/Espagne/80
Kily González/MIL/Argentine/80
Joaquín/MIL/Espagne/78
Éver Banega/MIL/Argentine/78
Mario Kempes/ATT/Argentine/92
David Villa/ATT/Espagne/90
Mundo/ATT/Espagne/85
Claudio López/ATT/Argentine/84
Waldo/ATT/Brésil/82
Roberto Soldado/ATT/Espagne/80
Predrag Mijatović/ATT/Monténégro/80
Rodrigo/ATT/Espagne/78
John Carew/ATT/Norvège/76
Paco Alcácer/ATT/Espagne/76`},
{id:"seville",name:"Légendes de Séville",cat:"clubs",sub:"Espagne",club:"Séville",raw:`
Yassine Bounou/G/Maroc/86
Andrés Palop/G/Espagne/84
Sergio Rico/G/Espagne/78
Juan Carlos Unzué/G/Espagne/76
Tomáš Vaclík/G/République tchèque/76
Javier Varas/G/Espagne/72
Dani Alves/DEF/Brésil/88
Sergio Ramos/DEF/Espagne/84
Jules Koundé/DEF/France/82
Diego Carlos/DEF/Brésil/80
Javi Navarro/DEF/Espagne/80
Julien Escudé/DEF/France/78
Pablo Alfaro/DEF/Espagne/78
Ivica Dragutinović/DEF/Serbie/78
Federico Fazio/DEF/Argentine/76
Adil Rami/DEF/France/76
Jesús Navas/MIL/Espagne/90
Ivan Rakitić/MIL/Croatie/86
José Antonio Reyes/MIL/Espagne/86
Éver Banega/MIL/Argentine/85
Enzo Maresca/MIL/Italie/80
Steven N'Zonzi/MIL/France/80
Seydou Keita/MIL/Mali/80
Christian Poulsen/MIL/Danemark/78
Adriano Correia/MIL/Brésil/78
Renato/MIL/Brésil/78
Grzegorz Krychowiak/MIL/Pologne/78
Antonio Puerta/MIL/Espagne/78
Frédéric Kanouté/ATT/Mali/90
Juan Arza/ATT/Espagne/88
Luis Fabiano/ATT/Brésil/88
Davor Šuker/ATT/Croatie/86
Carlos Bacca/ATT/Colombie/84
Kevin Gameiro/ATT/France/82
Diego Maradona/ATT/Argentine/80
Youssef En-Nesyri/ATT/Maroc/80
Álvaro Negredo/ATT/Espagne/80
Iván Zamorano/ATT/Chili/80`},
{id:"milan",name:"Légendes du Milan AC",cat:"clubs",sub:"Italie",club:"Milan",raw:`
Dida/G/Brésil/86
Gianluigi Donnarumma/G/Italie/86
Mike Maignan/G/France/86
Sebastiano Rossi/G/Italie/84
Fabio Cudicini/G/Italie/82
Enrico Albertosi/G/Italie/82
Christian Abbiati/G/Italie/80
Paolo Maldini/DEF/Italie/98
Franco Baresi/DEF/Italie/97
Alessandro Nesta/DEF/Italie/91
Alessandro Costacurta/DEF/Italie/88
Cafu/DEF/Brésil/88
Thiago Silva/DEF/Brésil/88
Mauro Tassotti/DEF/Italie/86
Cesare Maldini/DEF/Italie/86
Theo Hernández/DEF/France/84
Kakha Kaladze/DEF/Géorgie/78
Gianni Rivera/MIL/Italie/95
Kaká/MIL/Brésil/94
Ruud Gullit/MIL/Pays-Bas/93
Andrea Pirlo/MIL/Italie/92
Frank Rijkaard/MIL/Pays-Bas/91
Nils Liedholm/MIL/Suède/90
Clarence Seedorf/MIL/Pays-Bas/89
Marcel Desailly/MIL/France/88
Gennaro Gattuso/MIL/Italie/87
Roberto Donadoni/MIL/Italie/86
Demetrio Albertini/MIL/Italie/86
Zvonimir Boban/MIL/Croatie/85
Carlo Ancelotti/MIL/Italie/84
Marco van Basten/ATT/Pays-Bas/97
Andriy Shevchenko/ATT/Ukraine/94
Gunnar Nordahl/ATT/Suède/92
George Weah/ATT/Liberia/91
Zlatan Ibrahimović/ATT/Suède/89
Filippo Inzaghi/ATT/Italie/88
Juan Alberto Schiaffino/ATT/Uruguay/88
José Altafini/ATT/Brésil/86
Rafael Leão/ATT/Portugal/84
Daniele Massaro/ATT/Italie/80`},
{id:"inter",name:"Légendes de l'Inter",cat:"clubs",sub:"Italie",club:"Inter",raw:`
Walter Zenga/G/Italie/90
Júlio César/G/Brésil/88
Samir Handanović/G/Slovénie/86
Giuliano Sarti/G/Italie/84
Francesco Toldo/G/Italie/84
Gianluca Pagliuca/G/Italie/84
Ivano Bordon/G/Italie/82
Giacinto Facchetti/DEF/Italie/96
Javier Zanetti/DEF/Argentine/94
Giuseppe Bergomi/DEF/Italie/90
Tarcisio Burgnich/DEF/Italie/88
Andreas Brehme/DEF/Allemagne/88
Armando Picchi/DEF/Italie/86
Lúcio/DEF/Brésil/86
Walter Samuel/DEF/Argentine/86
Maicon/DEF/Brésil/86
Iván Córdoba/DEF/Colombie/84
Marco Materazzi/DEF/Italie/84
Alessandro Bastoni/DEF/Italie/84
Lothar Matthäus/MIL/Allemagne/93
Luis Suárez Miramontes/MIL/Espagne/91
Wesley Sneijder/MIL/Pays-Bas/88
Esteban Cambiasso/MIL/Argentine/86
Mario Corso/MIL/Italie/86
Nicolò Barella/MIL/Italie/86
Dejan Stanković/MIL/Serbie/84
Gabriele Oriali/MIL/Italie/80
Giuseppe Meazza/ATT/Italie/97
Ronaldo/ATT/Brésil/94
Sandro Mazzola/ATT/Italie/94
Diego Milito/ATT/Argentine/89
Lautaro Martínez/ATT/Argentine/89
Alessandro Altobelli/ATT/Italie/88
Samuel Eto'o/ATT/Cameroun/88
Christian Vieri/ATT/Italie/87
Roberto Boninsegna/ATT/Italie/86
Adriano/ATT/Brésil/85
Jair da Costa/ATT/Brésil/84
Zlatan Ibrahimović/ATT/Suède/84`},
{id:"juve",name:"Légendes de la Juventus",cat:"clubs",sub:"Italie",club:"Juventus",raw:`
Gianluigi Buffon/G/Italie/97
Dino Zoff/G/Italie/95
Gianpiero Combi/G/Italie/88
Angelo Peruzzi/G/Italie/86
Stefano Tacconi/G/Italie/84
Wojciech Szczęsny/G/Pologne/82
Edwin van der Sar/G/Pays-Bas/80
Gaetano Scirea/DEF/Italie/95
Giorgio Chiellini/DEF/Italie/91
Claudio Gentile/DEF/Italie/88
Antonio Cabrini/DEF/Italie/88
Leonardo Bonucci/DEF/Italie/88
Lilian Thuram/DEF/France/88
Fabio Cannavaro/DEF/Italie/87
Ciro Ferrara/DEF/Italie/86
Andrea Barzagli/DEF/Italie/85
Gianluca Zambrotta/DEF/Italie/84
Michel Platini/MIL/France/97
Pavel Nedvěd/MIL/République tchèque/93
Zinédine Zidane/MIL/France/93
Andrea Pirlo/MIL/Italie/90
Marco Tardelli/MIL/Italie/88
Edgar Davids/MIL/Pays-Bas/87
Didier Deschamps/MIL/France/86
Antonio Conte/MIL/Italie/85
Arturo Vidal/MIL/Chili/85
Claudio Marchisio/MIL/Italie/84
Franco Causio/MIL/Italie/84
Alessandro Del Piero/ATT/Italie/96
Roberto Baggio/ATT/Italie/93
Omar Sívori/ATT/Argentine/93
John Charles/ATT/Pays de Galles/92
Giampiero Boniperti/ATT/Italie/92
Roberto Bettega/ATT/Italie/88
Paolo Rossi/ATT/Italie/88
David Trezeguet/ATT/France/88
Cristiano Ronaldo/ATT/Portugal/88
Gianluca Vialli/ATT/Italie/87
Paulo Dybala/ATT/Argentine/86
Pietro Anastasi/ATT/Italie/82`},
{id:"roma",name:"Légendes de la Roma",cat:"clubs",sub:"Italie",club:"Roma",raw:`
Alisson/G/Brésil/86
Franco Tancredi/G/Italie/84
Guido Masetti/G/Italie/82
Wojciech Szczęsny/G/Pologne/80
Francesco Antonioli/G/Italie/78
Doni/G/Brésil/78
Giovanni Cervone/G/Italie/78
Aldair/DEF/Brésil/90
Cafu/DEF/Brésil/88
Giacomo Losi/DEF/Italie/86
Vincent Candela/DEF/France/84
Walter Samuel/DEF/Argentine/84
Christian Panucci/DEF/Italie/82
Philippe Mexès/DEF/France/82
Sebino Nela/DEF/Italie/82
Kostas Manolas/DEF/Grèce/80
Antonio Rüdiger/DEF/Allemagne/80
John Arne Riise/DEF/Norvège/78
Daniele De Rossi/MIL/Italie/92
Paulo Roberto Falcão/MIL/Brésil/92
Bruno Conti/MIL/Italie/90
Agostino Di Bartolomei/MIL/Italie/88
Giuseppe Giannini/MIL/Italie/88
Carlo Ancelotti/MIL/Italie/84
Radja Nainggolan/MIL/Belgique/82
Miralem Pjanić/MIL/Bosnie-Herzégovine/82
Damiano Tommasi/MIL/Italie/80
Simone Perrotta/MIL/Italie/80
Lorenzo Pellegrini/MIL/Italie/80
Francesco Totti/ATT/Italie/98
Roberto Pruzzo/ATT/Italie/88
Gabriel Batistuta/ATT/Argentine/88
Amedeo Amadei/ATT/Italie/88
Vincenzo Montella/ATT/Italie/86
Rudi Völler/ATT/Allemagne/86
Edin Džeko/ATT/Bosnie-Herzégovine/86
Pedro Manfredini/ATT/Argentine/84
Mohamed Salah/ATT/Égypte/82
Abel Balbo/ATT/Argentine/82
Marco Delvecchio/ATT/Italie/80`},
{id:"naples",name:"Légendes de Naples",cat:"clubs",sub:"Italie",club:"Naples",raw:`
Dino Zoff/G/Italie/86
Claudio Garella/G/Italie/82
Luciano Castellini/G/Italie/82
Pepe Reina/G/Espagne/82
Giuliano Giuliani/G/Italie/80
Alex Meret/G/Italie/80
Morgan De Sanctis/G/Italie/80
Ciro Ferrara/DEF/Italie/88
Kalidou Koulibaly/DEF/Sénégal/88
Giuseppe Bruscolotti/DEF/Italie/86
Kim Min-jae/DEF/Corée du Sud/84
Giovanni Di Lorenzo/DEF/Italie/84
Raúl Albiol/DEF/Espagne/80
Faouzi Ghoulam/DEF/Algérie/78
Alessandro Renica/DEF/Italie/78
Giovanni Francini/DEF/Italie/78
Paolo Cannavaro/DEF/Italie/78
Marek Hamšík/MIL/Slovaquie/90
Antonio Juliano/MIL/Italie/88
Jorginho/MIL/Italie/84
Piotr Zieliński/MIL/Pologne/84
Salvatore Bagni/MIL/Italie/82
Alemão/MIL/Brésil/82
Scott McTominay/MIL/Écosse/82
Fernando De Napoli/MIL/Italie/80
Allan/MIL/Brésil/80
Stanislav Lobotka/MIL/Slovaquie/80
Diego Maradona/ATT/Argentine/98
Careca/ATT/Brésil/90
Edinson Cavani/ATT/Uruguay/88
Gonzalo Higuaín/ATT/Argentine/88
Dries Mertens/ATT/Belgique/88
Lorenzo Insigne/ATT/Italie/88
Victor Osimhen/ATT/Nigeria/88
Khvicha Kvaratskhelia/ATT/Géorgie/86
José Altafini/ATT/Brésil/86
Ezequiel Lavezzi/ATT/Argentine/84
Hasse Jeppson/ATT/Suède/84
Bruno Giordano/ATT/Italie/82
Gianfranco Zola/ATT/Italie/82`},
{id:"lazio",name:"Légendes de la Lazio",cat:"clubs",sub:"Italie",club:"Lazio",raw:`
Felice Pulici/G/Italie/84
Angelo Peruzzi/G/Italie/84
Luca Marchegiani/G/Italie/82
Federico Marchetti/G/Italie/80
Ivan Provedel/G/Italie/80
Thomas Strakosha/G/Albanie/78
Marco Ballotta/G/Italie/76
Alessandro Nesta/DEF/Italie/92
Siniša Mihajlović/DEF/Serbie/86
Giuseppe Wilson/DEF/Italie/86
Giuseppe Favalli/DEF/Italie/80
Fernando Couto/DEF/Portugal/80
Paolo Negro/DEF/Italie/80
Luigi Martini/DEF/Italie/80
Ştefan Radu/DEF/Roumanie/80
Stefan de Vrij/DEF/Pays-Bas/80
Giuseppe Pancaro/DEF/Italie/78
Pavel Nedvěd/MIL/République tchèque/90
Juan Sebastián Verón/MIL/Argentine/88
Sergej Milinković-Savić/MIL/Serbie/88
Luis Alberto/MIL/Espagne/86
Diego Simeone/MIL/Argentine/84
Luciano Re Cecconi/MIL/Italie/84
Dejan Stanković/MIL/Serbie/82
Matías Almeyda/MIL/Argentine/80
Lucas Leiva/MIL/Brésil/80
Senad Lulić/MIL/Bosnie-Herzégovine/80
Paul Gascoigne/MIL/Angleterre/78
Silvio Piola/ATT/Italie/94
Giorgio Chinaglia/ATT/Italie/92
Ciro Immobile/ATT/Italie/92
Giuseppe Signori/ATT/Italie/90
Roberto Mancini/ATT/Italie/87
Bruno Giordano/ATT/Italie/86
Marcelo Salas/ATT/Chili/86
Miroslav Klose/ATT/Allemagne/86
Alen Bokšić/ATT/Croatie/84
Hernán Crespo/ATT/Argentine/84
Simone Inzaghi/ATT/Italie/82
Tommaso Rocchi/ATT/Italie/80`},
{id:"bayern",name:"Légendes du Bayern",cat:"clubs",sub:"Allemagne",club:"Bayern",raw:`
Sepp Maier/G/Allemagne/96
Manuel Neuer/G/Allemagne/96
Oliver Kahn/G/Allemagne/95
Jean-Marie Pfaff/G/Belgique/86
Raimond Aumann/G/Allemagne/82
Hans-Jörg Butt/G/Allemagne/78
Sven Ulreich/G/Allemagne/74
Franz Beckenbauer/DEF/Allemagne/98
Philipp Lahm/DEF/Allemagne/93
Paul Breitner/DEF/Allemagne/90
Klaus Augenthaler/DEF/Allemagne/88
David Alaba/DEF/Autriche/88
Jérôme Boateng/DEF/Allemagne/87
Hans-Georg Schwarzenbeck/DEF/Allemagne/86
Bixente Lizarazu/DEF/France/86
Lúcio/DEF/Brésil/84
Alphonso Davies/DEF/Canada/84
Samuel Kuffour/DEF/Ghana/82
Lothar Matthäus/MIL/Allemagne/92
Bastian Schweinsteiger/MIL/Allemagne/91
Franck Ribéry/MIL/France/91
Joshua Kimmich/MIL/Allemagne/90
Stefan Effenberg/MIL/Allemagne/88
Michael Ballack/MIL/Allemagne/88
Jamal Musiala/MIL/Allemagne/88
Mehmet Scholl/MIL/Allemagne/86
Toni Kroos/MIL/Allemagne/86
Thiago Alcântara/MIL/Espagne/86
Javi Martínez/MIL/Espagne/82
Gerd Müller/ATT/Allemagne/98
Robert Lewandowski/ATT/Pologne/95
Karl-Heinz Rummenigge/ATT/Allemagne/94
Thomas Müller/ATT/Allemagne/92
Arjen Robben/ATT/Pays-Bas/91
Harry Kane/ATT/Angleterre/90
Giovane Élber/ATT/Brésil/86
Uli Hoeneß/ATT/Allemagne/86
Roy Makaay/ATT/Pays-Bas/84
Mario Gómez/ATT/Allemagne/84
Dieter Hoeneß/ATT/Allemagne/82`},
{id:"dortmund",name:"Légendes de Dortmund",cat:"clubs",sub:"Allemagne",club:"Dortmund",raw:`
Roman Weidenfeller/G/Allemagne/86
Hans Tilkowski/G/Allemagne/86
Stefan Klos/G/Allemagne/84
Gregor Kobel/G/Suisse/84
Roman Bürki/G/Suisse/80
Jens Lehmann/G/Allemagne/80
Eike Immel/G/Allemagne/78
Matthias Sammer/DEF/Allemagne/92
Mats Hummels/DEF/Allemagne/90
Jürgen Kohler/DEF/Allemagne/88
Łukasz Piszczek/DEF/Pologne/86
Dede/DEF/Brésil/84
Stefan Reuter/DEF/Allemagne/84
Neven Subotić/DEF/Serbie/82
Christian Wörns/DEF/Allemagne/82
Marcel Schmelzer/DEF/Allemagne/80
Júlio César/DEF/Brésil/80
Marco Reus/MIL/Allemagne/91
Michael Zorc/MIL/Allemagne/88
Andreas Möller/MIL/Allemagne/88
Tomáš Rosický/MIL/République tchèque/86
İlkay Gündoğan/MIL/Allemagne/86
Shinji Kagawa/MIL/Japon/86
Mario Götze/MIL/Allemagne/86
Jude Bellingham/MIL/Angleterre/86
Nuri Şahin/MIL/Turquie/84
Jakub Błaszczykowski/MIL/Pologne/84
Lars Ricken/MIL/Allemagne/84
Paulo Sousa/MIL/Portugal/82
Robert Lewandowski/ATT/Pologne/90
Lothar Emmerich/ATT/Allemagne/88
Stéphane Chapuisat/ATT/Suisse/88
Pierre-Emerick Aubameyang/ATT/Gabon/88
Erling Haaland/ATT/Norvège/88
Manfred Burgsmüller/ATT/Allemagne/86
Karl-Heinz Riedle/ATT/Allemagne/84
Jan Koller/ATT/République tchèque/84
Márcio Amoroso/ATT/Brésil/84
Siegfried Held/ATT/Allemagne/82
Lucas Barrios/ATT/Paraguay/80`},
{id:"leverkusen",name:"Légendes de Leverkusen",cat:"clubs",sub:"Allemagne",club:"Leverkusen",raw:`
Rüdiger Vollborn/G/Allemagne/84
Hans-Jörg Butt/G/Allemagne/84
Bernd Leno/G/Allemagne/84
Lukáš Hrádecký/G/Finlande/84
René Adler/G/Allemagne/82
Adam Matysek/G/Pologne/76
Dirk Heinen/G/Allemagne/76
Lúcio/DEF/Brésil/86
Jens Nowotny/DEF/Allemagne/86
Alejandro Grimaldo/DEF/Espagne/86
Jonathan Tah/DEF/Allemagne/84
Jeremie Frimpong/DEF/Pays-Bas/84
Christian Wörns/DEF/Allemagne/80
Juan/DEF/Brésil/80
Edmond Tapsoba/DEF/Burkina Faso/80
Piero Hincapié/DEF/Équateur/80
Diego Placente/DEF/Argentine/76
Florian Wirtz/MIL/Allemagne/92
Michael Ballack/MIL/Allemagne/90
Granit Xhaka/MIL/Suisse/88
Bernd Schneider/MIL/Allemagne/86
Kai Havertz/MIL/Allemagne/86
Zé Roberto/MIL/Brésil/84
Carsten Ramelow/MIL/Allemagne/82
Simon Rolfes/MIL/Allemagne/82
Lars Bender/MIL/Allemagne/82
Yıldıray Baştürk/MIL/Turquie/80
Emerson/MIL/Brésil/80
Ulf Kirsten/ATT/Allemagne/92
Stefan Kießling/ATT/Allemagne/88
Cha Bum-kun/ATT/Corée du Sud/86
Dimitar Berbatov/ATT/Bulgarie/86
Rudi Völler/ATT/Allemagne/86
Oliver Neuville/ATT/Allemagne/82
Patrik Schick/ATT/République tchèque/82
Victor Boniface/ATT/Nigeria/82
Paulo Sérgio/ATT/Brésil/82
Son Heung-min/ATT/Corée du Sud/82
Moussa Diaby/ATT/France/80
Leon Bailey/ATT/Jamaïque/78`}
);
Object.assign(window.CLUB_COLORS,{"Real Madrid":["#FFFFFF","#D4A53A"],"Barcelone":["#A50044","#004D98"],"Atlético Madrid":["#CB3524","#FFFFFF"],"Valence":["#FFFFFF","#000000"],"Séville":["#FFFFFF","#D7001F"],"Milan":["#FB090B","#000000"],"Inter":["#0068A8","#000000"],"Juventus":["#000000","#FFFFFF"],"Roma":["#8E1F2F","#F0BC42"],"Naples":["#12A0D7","#FFFFFF"],"Lazio":["#87D8F7","#FFFFFF"],"Bayern":["#DC052D","#FFFFFF"],"Dortmund":["#FDE100","#000000"],"Leverkusen":["#E32221","#000000"]});

/* ---- clubs_fr_pt.js ---- */
// Packs « légendes de club » : France et Portugal
window.FOOT_PACKS.push(
{id:"psg",name:"Légendes du PSG",cat:"clubs",sub:"France",club:"PSG",raw:`
Bernard Lama/G/France/88
Gianluigi Donnarumma/G/Italie/87
Keylor Navas/G/Costa Rica/85
Joël Bats/G/France/83
Salvatore Sirigu/G/Italie/79
Dominique Baratelli/G/France/79
Thiago Silva/DEF/Brésil/94
Marquinhos/DEF/Brésil/92
Achraf Hakimi/DEF/Maroc/89
Nuno Mendes/DEF/Portugal/86
Dani Alves/DEF/Brésil/84
Ricardo Gomes/DEF/Brésil/82
Alain Roche/DEF/France/80
Presnel Kimpembe/DEF/France/81
Maxwell/DEF/Brésil/81
Jean-Marc Pilorget/DEF/France/78
Marco Verratti/MIL/Italie/91
Raí/MIL/Brésil/90
Safet Sušić/MIL/Bosnie-Herzégovine/90
Ronaldinho/MIL/Brésil/91
Vitinha/MIL/Portugal/87
Ángel Di María/MIL/Argentine/88
Luis Fernández/MIL/France/85
Blaise Matuidi/MIL/France/84
Thiago Motta/MIL/Italie/84
Jay-Jay Okocha/MIL/Nigeria/83
Mustapha Dahleb/MIL/Algérie/84
Javier Pastor/MIL/Argentine/81
Valdo/MIL/Brésil/80
Vincent Guérin/MIL/France/79
Kylian Mbappé/ATT/France/97
Zlatan Ibrahimović/ATT/Suède/95
Neymar/ATT/Brésil/94
Edinson Cavani/ATT/Uruguay/93
Ousmane Dembélé/ATT/France/92
Lionel Messi/ATT/Argentine/90
George Weah/ATT/Liberia/89
Pauleta/ATT/Portugal/88
Dominique Rocheteau/ATT/France/86
David Ginola/ATT/France/86
`},
{id:"om",name:"Légendes de l'OM",cat:"clubs",sub:"France",club:"Marseille",raw:`
Steve Mandanda/G/France/90
Fabien Barthez/G/France/87
Pascal Olmeta/G/France/78
Vedran Runje/G/Croatie/78
Gerónimo Rulli/G/Argentine/78
Basile Boli/DEF/France/88
Marius Trésor/DEF/France/88
Marcel Desailly/DEF/France/87
Carlos Mozer/DEF/Brésil/86
Manuel Amoros/DEF/France/85
Éric Di Meco/DEF/France/84
Jocelyn Angloma/DEF/France/83
Bernard Casoni/DEF/France/80
Habib Beye/DEF/Sénégal/78
Souleymane Diawara/DEF/Sénégal/76
Rod Fanni/DEF/France/75
Leonardo Balerdi/DEF/Argentine/77
Chris Waddle/MIL/Angleterre/89
Abedi Pelé/MIL/Ghana/90
Dimitri Payet/MIL/France/89
Didier Deschamps/MIL/France/88
Franck Sauzée/MIL/France/85
Mathieu Valbuena/MIL/France/84
Florian Thauvin/MIL/France/84
Franck Ribéry/MIL/France/83
Lucho González/MIL/Argentine/82
Roger Magnusson/MIL/Suède/84
Alain Giresse/MIL/France/82
Robert Pirès/MIL/France/80
André Ayew/MIL/Ghana/80
Benoît Cheyrou/MIL/France/76
Jean-Pierre Papin/ATT/France/95
Josip Skoblar/ATT/Yougoslavie/92
Didier Drogba/ATT/Côte d'Ivoire/91
Gunnar Andersson/ATT/Suède/88
Rudi Völler/ATT/Allemagne/87
Alen Bokšić/ATT/Croatie/86
Mamadou Niang/ATT/Sénégal/84
André-Pierre Gignac/ATT/France/83
Fabrizio Ravanelli/ATT/Italie/81
`},
{id:"ol",name:"Légendes de l'OL",cat:"clubs",sub:"France",club:"Lyon",raw:`
Grégory Coupet/G/France/90
Hugo Lloris/G/France/84
Anthony Lopes/G/Portugal/84
Lucas Perri/G/Brésil/78
Pascal Olmeta/G/France/75
Rémy Vercoutre/G/France/74
Cris/DEF/Brésil/86
Claudio Caçapa/DEF/Brésil/84
Jean Djorkaeff/DEF/France/82
Éric Abidal/DEF/France/82
Anthony Réveillère/DEF/France/81
Samuel Umtiti/DEF/France/81
Raymond Domenech/DEF/France/80
Patrick Müller/DEF/Suisse/78
Sébastien Squillaci/DEF/France/77
François Clerc/DEF/France/76
Dejan Lovren/DEF/Croatie/76
Léo Dubois/DEF/France/75
Juninho/MIL/Brésil/95
Michael Essien/MIL/Ghana/87
Mahamadou Diarra/MIL/Mali/85
Florent Malouda/MIL/France/85
Nabil Fekir/MIL/France/85
Miralem Pjanić/MIL/Bosnie-Herzégovine/84
Jérémy Toulalan/MIL/France/83
Serge Chiesa/MIL/France/82
Rayan Cherki/MIL/France/82
Corentin Tolisso/MIL/France/80
Kim Källström/MIL/Suède/79
Houssem Aouar/MIL/Algérie/79
Maxime Gonalons/MIL/France/79
Sonny Anderson/ATT/Brésil/91
Karim Benzema/ATT/France/90
Fleury Di Nallo/ATT/France/89
Bernard Lacombe/ATT/France/88
Alexandre Lacazette/ATT/France/88
Lisandro López/ATT/Argentine/85
Memphis Depay/ATT/Pays-Bas/84
Sidney Govou/ATT/France/82
Fred/ATT/Brésil/81
`},
{id:"asse",name:"Légendes de Saint-Étienne",cat:"clubs",sub:"France",club:"Saint-Étienne",raw:`
Ivan Ćurković/G/Yougoslavie/91
Stéphane Ruffier/G/France/84
Jérémie Janot/G/France/82
Claude Abbes/G/France/80
Joseph-Antoine Bell/G/Cameroun/77
Jessy Moulin/G/France/73
Osvaldo Piazza/DEF/Argentine/88
Robert Herbin/DEF/France/88
Christian Lopez/DEF/France/87
Gérard Janvion/DEF/France/85
Bernard Bosquier/DEF/France/85
Loïc Perrin/DEF/France/84
Gérard Farison/DEF/France/80
Pierre Repellini/DEF/France/77
Kurt Zouma/DEF/France/77
Moustapha Bayal Sall/DEF/Sénégal/75
Michel Platini/MIL/France/93
Jean-Michel Larqué/MIL/France/88
Dominique Bathenay/MIL/France/84
Christian Synaeghel/MIL/France/80
Jacques Santini/MIL/France/80
Blaise Matuidi/MIL/France/80
Dimitri Payet/MIL/France/80
Aimé Jacquet/MIL/France/78
Josuha Guilavogui/MIL/France/76
Jérémy Clément/MIL/France/75
Fabien Lemoine/MIL/France/74
Rachid Mekhloufi/ATT/Algérie/92
Salif Keïta/ATT/Mali/91
Hervé Revelli/ATT/France/90
Dominique Rocheteau/ATT/France/88
Pierre-Emerick Aubameyang/ATT/Gabon/86
Johnny Rep/ATT/Pays-Bas/85
Patrick Revelli/ATT/France/84
Georges Bereta/ATT/France/84
Eugène N'Jo Léa/ATT/Cameroun/82
Bafétimbi Gomis/ATT/France/81
Laurent Roussey/ATT/France/79
Wahbi Khazri/ATT/Tunisie/78
Romain Hamouma/ATT/France/75
`},
{id:"monaco",name:"Légendes de Monaco",cat:"clubs",sub:"France",club:"Monaco",raw:`
Jean-Luc Ettori/G/France/88
Fabien Barthez/G/France/86
Danijel Subašić/G/Croatie/84
Flavio Roma/G/Italie/80
Diego Benaglio/G/Suisse/76
Philipp Köhn/G/Suisse/74
Lilian Thuram/DEF/France/88
Manuel Amoros/DEF/France/86
Rafael Márquez/DEF/Mexique/85
Patrice Evra/DEF/France/84
Kamil Glik/DEF/Pologne/82
Djibril Sidibé/DEF/France/80
Claude Puel/DEF/France/80
Benjamin Mendy/DEF/France/79
Sébastien Squillaci/DEF/France/78
Julien Rodriguez/DEF/France/77
Willy Sagnol/DEF/France/77
Benoît Badiashile/DEF/France/77
Andrea Raggi/DEF/Italie/75
Bernardo Silva/MIL/Portugal/88
Glenn Hoddle/MIL/Angleterre/87
Youri Djorkaeff/MIL/France/85
Fabinho/MIL/Brésil/85
João Moutinho/MIL/Portugal/84
Enzo Scifo/MIL/Belgique/84
Thomas Lemar/MIL/France/83
Ali Benarbia/MIL/Algérie/82
Marcelo Gallardo/MIL/Argentine/82
Emmanuel Petit/MIL/France/81
Jérôme Rothen/MIL/France/81
Aurélien Tchouaméni/MIL/France/80
Delio Onnis/ATT/Argentine/92
Radamel Falcao/ATT/Colombie/90
Kylian Mbappé/ATT/France/88
George Weah/ATT/Liberia/87
Wissam Ben Yedder/ATT/France/86
Thierry Henry/ATT/France/86
David Trezeguet/ATT/France/85
Ludovic Giuly/ATT/France/85
Fernando Morientes/ATT/Espagne/84
`},
{id:"bordeaux",name:"Légendes de Bordeaux",cat:"clubs",sub:"France",club:"Bordeaux",raw:`
Dominique Dropsy/G/France/85
Ulrich Ramé/G/France/85
Cédric Carrasso/G/France/80
Gaëtan Huard/G/France/79
Benoît Costil/G/France/79
Joseph-Antoine Bell/G/Cameroun/78
Marius Trésor/DEF/France/87
Patrick Battiston/DEF/France/86
Bixente Lizarazu/DEF/France/85
Léonard Specht/DEF/France/82
Thierry Tusseau/DEF/France/80
Jean-Christophe Thouvenel/DEF/France/80
Jules Koundé/DEF/France/80
Alain Roche/DEF/France/79
Souleymane Diawara/DEF/Sénégal/78
Marc Planus/DEF/France/77
Benoît Trémoulinas/DEF/France/76
Mathieu Chalmé/DEF/France/75
Alain Giresse/MIL/France/93
Jean Tigana/MIL/France/91
Zinédine Zidane/MIL/France/91
Yoann Gourcuff/MIL/France/88
Johan Micoud/MIL/France/87
Wendel/MIL/Brésil/81
René Girard/MIL/France/81
Alou Diarra/MIL/France/80
Ali Benarbia/MIL/Algérie/80
Fernando Menegazzo/MIL/Brésil/78
Jaroslav Plašil/MIL/République tchèque/77
Rio Mavuba/MIL/France/76
Bernard Lacombe/ATT/France/88
Pauleta/ATT/Portugal/87
Sylvain Wiltord/ATT/France/85
Dieter Müller/ATT/Allemagne/84
Christophe Dugarry/ATT/France/84
Marouane Chamakh/ATT/Maroc/83
Klaus Allofs/ATT/Allemagne/82
Lilian Laslandes/ATT/France/82
Malcom/ATT/Brésil/79
Jussiê/ATT/Brésil/77
`},
{id:"nantes",name:"Légendes de Nantes",cat:"clubs",sub:"France",club:"Nantes",raw:`
Mickaël Landreau/G/France/88
Jean-Paul Bertrand-Demanes/G/France/85
Daniel Eon/G/France/79
Alban Lafont/G/France/78
Dominique Casagrande/G/France/77
David Marraud/G/France/76
Maxime Bossis/DEF/France/90
Marcel Desailly/DEF/France/85
Christian Karembeu/DEF/France/83
Patrice Rio/DEF/France/82
Gabriel De Michèle/DEF/France/80
Thierry Tusseau/DEF/France/80
William Ayache/DEF/France/80
Nicolas Pallois/DEF/France/78
Diego Carlos/DEF/Brésil/78
Antoine Kombouaré/DEF/France/77
Sylvain Armand/DEF/France/76
Nicolas Gillet/DEF/France/76
Henri Michel/MIL/France/90
Jorge Burruchaga/MIL/Argentine/86
Claude Makélélé/MIL/France/85
Didier Deschamps/MIL/France/84
Reynald Pedros/MIL/France/84
Jean-Claude Suaudeau/MIL/France/82
Gilles Rampillon/MIL/France/82
Eric Carrière/MIL/France/82
Jérémy Toulalan/MIL/France/80
Frédéric Da Rocha/MIL/France/78
Olivier Monterrubio/MIL/France/77
Mathieu Berson/MIL/France/75
Vahid Halilhodžić/ATT/Yougoslavie/91
Philippe Gondet/ATT/France/88
Japhet N'Doram/ATT/Tchad/86
José Touré/ATT/France/85
Patrice Loko/ATT/France/85
Nicolas Ouédec/ATT/France/84
Bernard Blanchet/ATT/France/84
Loïc Amisse/ATT/France/82
Emiliano Sala/ATT/Argentine/81
Randal Kolo Muani/ATT/France/80
`},
{id:"lille",name:"Légendes de Lille",cat:"clubs",sub:"France",club:"Lille",raw:`
Mike Maignan/G/France/87
Lucas Chevalier/G/France/83
Mickaël Landreau/G/France/83
Vincent Enyeama/G/Nigeria/82
Grégory Wimbée/G/France/80
Tony Sylva/G/Sénégal/77
José Fonte/DEF/Portugal/82
Mathieu Debuchy/DEF/France/82
Gabriel Magalhães/DEF/Brésil/82
Sven Botman/DEF/Pays-Bas/82
Adil Rami/DEF/France/81
Éric Abidal/DEF/France/80
Leny Yoro/DEF/France/80
Aurélien Chedjou/DEF/Cameroun/79
Zeki Çelik/DEF/Turquie/78
Pascal Cygan/DEF/France/78
Alexsandro/DEF/Brésil/78
Rafael Schmitz/DEF/Brésil/76
Franck Béria/DEF/France/75
Yohan Cabaye/MIL/France/84
Rio Mavuba/MIL/France/82
Dimitri Payet/MIL/France/82
Renato Sanches/MIL/Portugal/81
Benjamin André/MIL/France/80
Jean Makoun/MIL/Cameroun/80
Florent Balmont/MIL/France/79
Mathieu Bodmer/MIL/France/78
Michel Bastos/MIL/Brésil/78
Ludovic Obraniak/MIL/Pologne/77
Eden Hazard/ATT/Belgique/92
Jean Baratte/ATT/France/88
Jean Vincent/ATT/France/86
Jonathan David/ATT/Canada/86
Victor Osimhen/ATT/Nigeria/84
Nicolas Pépé/ATT/Côte d'Ivoire/84
Moussa Sow/ATT/Sénégal/83
Gervinho/ATT/Côte d'Ivoire/82
Burak Yılmaz/ATT/Turquie/80
Peter Odemwingie/ATT/Nigeria/79
Jonathan Bamba/ATT/Côte d'Ivoire/78
`},
{id:"lens",name:"Légendes du RC Lens",cat:"clubs",sub:"France",club:"Lens",raw:`
Guillaume Warmuz/G/France/86
Brice Samba/G/France/85
Bernard Lama/G/France/82
Vedran Runje/G/Croatie/81
Jean-Louis Leca/G/France/75
Charles-Hubert Itandje/G/France/74
Éric Sikora/DEF/France/85
Jean-Guy Wallemme/DEF/France/84
Kevin Danso/DEF/Autriche/82
Raphaël Varane/DEF/France/81
Jacek Bąk/DEF/Pologne/80
Facundo Medina/DEF/Argentine/80
Rigobert Song/DEF/Cameroun/79
Frédéric Déhu/DEF/France/78
Przemysław Frankowski/DEF/Pologne/78
Didier Sénac/DEF/France/78
Valérien Ismaël/DEF/France/77
Jonathan Gradit/DEF/France/77
Yoann Lachor/DEF/France/76
Ferdinand Coly/DEF/Sénégal/75
Seko Fofana/MIL/Côte d'Ivoire/86
Philippe Vercruysse/MIL/France/85
Marc-Vivien Foé/MIL/Cameroun/84
Vladimir Šmicer/MIL/République tchèque/84
Daniel Leclercq/MIL/France/81
Seydou Keita/MIL/Mali/80
Cheick Doucouré/MIL/Mali/80
Gaël Kakuta/MIL/RD Congo/79
Alou Diarra/MIL/France/78
Éric Carrière/MIL/France/78
Ahmed Oudjani/ATT/Algérie/87
Loïs Openda/ATT/Belgique/85
Tony Vairelles/ATT/France/82
Roger Boli/ATT/France/82
Didier Six/ATT/France/80
Anto Drobnjak/ATT/Monténégro/80
John Utaka/ATT/Nigeria/80
Florian Sotoca/ATT/France/79
Aruna Dindane/ATT/Côte d'Ivoire/79
Daniel Moreira/ATT/France/77
`},
{id:"benfica",name:"Légendes de Benfica",cat:"clubs",sub:"Portugal",club:"Benfica",raw:`
Manuel Bento/G/Portugal/88
Costa Pereira/G/Portugal/87
Michel Preud'homme/G/Belgique/85
Ederson/G/Brésil/82
Anatoliy Trubin/G/Ukraine/81
Júlio César/G/Brésil/80
José Henrique/G/Portugal/80
Silvino/G/Portugal/79
Humberto Coelho/DEF/Portugal/88
Luisão/DEF/Brésil/87
Rúben Dias/DEF/Portugal/86
Germano/DEF/Portugal/85
Carlos Mozer/DEF/Brésil/83
Alejandro Grimaldo/DEF/Espagne/82
Nicolás Otamendi/DEF/Argentine/82
António Veloso/DEF/Portugal/82
Ricardo Gomes/DEF/Brésil/81
Maxi Pereira/DEF/Uruguay/80
Fábio Coentrão/DEF/Portugal/80
Álvaro Magalhães/DEF/Portugal/79
Mário Coluna/MIL/Portugal/92
Rui Costa/MIL/Portugal/89
Fernando Chalana/MIL/Portugal/87
Ángel Di María/MIL/Argentine/86
Pablo Aimar/MIL/Argentine/85
Shéu/MIL/Portugal/82
Toni/MIL/Portugal/82
Nemanja Matić/MIL/Serbie/82
Enzo Fernández/MIL/Argentine/81
João Neves/MIL/Portugal/81
Eusébio/ATT/Portugal/97
José Águas/ATT/Portugal/89
Nené/ATT/Portugal/87
José Augusto/ATT/Portugal/86
Simão/ATT/Portugal/86
Jonas/ATT/Brésil/86
António Simões/ATT/Portugal/85
José Torres/ATT/Portugal/85
Óscar Cardozo/ATT/Paraguay/84
Nuno Gomes/ATT/Portugal/84
`},
{id:"porto",name:"Légendes du FC Porto",cat:"clubs",sub:"Portugal",club:"Porto",raw:`
Vítor Baía/G/Portugal/92
Diogo Costa/G/Portugal/86
Iker Casillas/G/Espagne/85
Helton/G/Brésil/84
Józef Młynarczyk/G/Pologne/82
Nuno Espírito Santo/G/Portugal/72
João Pinto/DEF/Portugal/89
Pepe/DEF/Portugal/89
Ricardo Carvalho/DEF/Portugal/88
Jorge Costa/DEF/Portugal/87
Bruno Alves/DEF/Portugal/83
Aloísio/DEF/Brésil/82
Alex Sandro/DEF/Brésil/82
Alex Telles/DEF/Brésil/82
Paulo Ferreira/DEF/Portugal/82
Fernando Couto/DEF/Portugal/81
Iván Marcano/DEF/Espagne/80
Lima Pereira/DEF/Portugal/80
Nuno Valente/DEF/Portugal/80
Deco/MIL/Portugal/93
João Moutinho/MIL/Portugal/86
Lucho González/MIL/Argentine/85
Maniche/MIL/Portugal/84
Costinha/MIL/Portugal/83
Rui Barros/MIL/Portugal/82
Raul Meireles/MIL/Portugal/82
Héctor Herrera/MIL/Mexique/82
Sérgio Conceição/MIL/Portugal/82
Otávio/MIL/Portugal/81
Jaime Magalhães/MIL/Portugal/80
Fernando Gomes/ATT/Portugal/93
Mário Jardel/ATT/Brésil/91
Radamel Falcao/ATT/Colombie/91
Rabah Madjer/ATT/Algérie/90
Hulk/ATT/Brésil/89
Jackson Martínez/ATT/Colombie/86
James Rodríguez/ATT/Colombie/85
Ricardo Quaresma/ATT/Portugal/85
Lisandro López/ATT/Argentine/84
Mehdi Taremi/ATT/Iran/84
`},
{id:"sporting",name:"Légendes du Sporting",cat:"clubs",sub:"Portugal",club:"Sporting CP",raw:`
Vítor Damas/G/Portugal/90
Rui Patrício/G/Portugal/88
Peter Schmeichel/G/Danemark/84
Ricardo/G/Portugal/82
Tomislav Ivković/G/Yougoslavie/80
Antonio Adán/G/Espagne/79
Hilário/DEF/Portugal/85
Sebastián Coates/DEF/Uruguay/84
Gonçalo Inácio/DEF/Portugal/82
Pedro Porro/DEF/Espagne/82
Nuno Mendes/DEF/Portugal/80
Marcos Acuña/DEF/Argentine/80
Anderson Polga/DEF/Brésil/79
Jérémy Mathieu/DEF/France/79
Ousmane Diomande/DEF/Côte d'Ivoire/79
Beto/DEF/Portugal/78
Tonel/DEF/Portugal/76
Daniel Carriço/DEF/Portugal/76
Bruno Fernandes/MIL/Portugal/90
Krasimir Balakov/MIL/Bulgarie/85
João Moutinho/MIL/Portugal/84
William Carvalho/MIL/Portugal/84
Pedro Gonçalves/MIL/Portugal/84
Pedro Barbosa/MIL/Portugal/82
Morten Hjulmand/MIL/Danemark/82
Adrien Silva/MIL/Portugal/81
João Palhinha/MIL/Portugal/81
Oceano/MIL/Portugal/80
João Mário/MIL/Portugal/79
Fernando Peyroteo/ATT/Portugal/95
Héctor Yazalde/ATT/Argentine/90
Viktor Gyökeres/ATT/Suède/90
Cristiano Ronaldo/ATT/Portugal/88
Luís Figo/ATT/Portugal/87
Manuel Fernandes/ATT/Portugal/87
Liedson/ATT/Brésil/87
José Travassos/ATT/Portugal/86
Rui Jordão/ATT/Portugal/86
Mário Jardel/ATT/Brésil/86
Jesus Correia/ATT/Portugal/85
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
Juan Román Riquelme/MIL/Argentine/96
Diego Maradona/MIL/Argentine/95
Martín Palermo/ATT/Argentine/93
Carlos Tevez/ATT/Argentine/90
Hugo Gatti/G/Argentine/90
Antonio Rattín/MIL/Argentine/88
Silvio Marzolini/DEF/Argentine/88
Guillermo Barros Schelotto/ATT/Argentine/87
Francisco Varallo/ATT/Argentine/86
Antonio Roma/G/Argentine/86
Óscar Córdoba/G/Colombie/86
Roberto Abbondanzieri/G/Argentine/85
Roberto Cherro/ATT/Argentine/85
Ángel Clemente Rojas/ATT/Argentine/85
Walter Samuel/DEF/Argentine/84
Sebastián Battaglia/MIL/Argentine/84
Jorge Bermúdez/DEF/Colombie/82
Hugo Ibarra/DEF/Argentine/82
Roberto Mouzo/DEF/Argentine/82
Mauricio Serna/MIL/Colombie/82
Fernando Gago/MIL/Argentine/82
Carlos Navarro Montoya/G/Colombie/82
Marcelo Delgado/ATT/Argentine/81
Claudio Caniggia/ATT/Argentine/81
Rolando Schiavi/DEF/Argentine/80
Rodrigo Palacio/ATT/Argentine/80
Darío Benedetto/ATT/Argentine/80
Edinson Cavani/ATT/Uruguay/80
Jaime Sarlanga/ATT/Argentine/80
Ernesto Grillo/MIL/Argentine/80
Nicolás Burdisso/DEF/Argentine/79
Rodolfo Arruabarrena/DEF/Argentine/79
Marcos Rojo/DEF/Argentine/79
Diego Cagna/MIL/Argentine/79
Sergio Romero/G/Argentine/79
Clemente Rodríguez/DEF/Argentine/78
Frank Fabra/DEF/Colombie/78
Ever Banega/MIL/Argentine/78
Agustín Orión/G/Argentine/77
Cristian Pavón/ATT/Argentine/77`},
{id:"river",name:"Légendes de River Plate",cat:"clubs",sub:"Argentine",club:"River Plate",raw:`
Ángel Labruna/ATT/Argentine/95
Daniel Passarella/DEF/Argentine/93
Enzo Francescoli/ATT/Uruguay/93
Amadeo Carrizo/G/Argentine/92
Ubaldo Fillol/G/Argentine/92
Norberto Alonso/MIL/Argentine/92
Alfredo Di Stéfano/ATT/Argentine/90
Adolfo Pedernera/ATT/Argentine/90
José Manuel Moreno/ATT/Argentine/90
Ariel Ortega/MIL/Argentine/90
Marcelo Gallardo/MIL/Argentine/88
Ramón Díaz/ATT/Argentine/87
Pablo Aimar/MIL/Argentine/87
Franco Armani/G/Argentine/86
Néstor Rossi/MIL/Argentine/86
Marcelo Salas/ATT/Chili/86
Oscar Ruggeri/DEF/Argentine/85
Roberto Perfumo/DEF/Argentine/85
Hernán Crespo/ATT/Argentine/85
Javier Saviola/ATT/Argentine/85
Julián Álvarez/ATT/Argentine/85
Félix Loustau/ATT/Argentine/85
Andrés D'Alessandro/MIL/Argentine/84
Leonardo Astrada/MIL/Argentine/84
Fernando Cavenaghi/ATT/Argentine/84
Javier Mascherano/MIL/Argentine/82
Leonardo Ponzio/MIL/Argentine/82
Enzo Pérez/MIL/Argentine/82
Matías Almeyda/MIL/Argentine/82
Celso Ayala/DEF/Paraguay/82
Marcelo Barovero/G/Argentine/82
Nery Pumpido/G/Argentine/82
Hernán Díaz/DEF/Argentine/80
Martín Demichelis/DEF/Argentine/80
Jonatan Maidana/DEF/Argentine/80
Germán Burgos/G/Argentine/80
Enzo Fernández/MIL/Argentine/80
Gonzalo Montiel/DEF/Argentine/79
Javier Pinola/DEF/Argentine/79
Milton Casco/DEF/Argentine/78`},
{id:"santos",name:"Légendes de Santos",cat:"clubs",sub:"Brésil",club:"Santos",raw:`
Pelé/ATT/Brésil/97
Neymar/ATT/Brésil/93
Carlos Alberto Torres/DEF/Brésil/92
Coutinho/ATT/Brésil/90
Zito/MIL/Brésil/90
Gilmar/G/Brésil/90
Pepe/ATT/Brésil/89
Mauro Ramos/DEF/Brésil/88
Robinho/ATT/Brésil/88
Clodoaldo/MIL/Brésil/86
Diego/MIL/Brésil/85
Paulo Henrique Ganso/MIL/Brésil/85
Dorval/ATT/Brésil/84
Edu/ATT/Brésil/84
Mengálvio/MIL/Brésil/84
Djalma Dias/DEF/Brésil/84
Rodolfo Rodríguez/G/Uruguay/84
Giovanni/MIL/Brésil/83
Toninho Guerreiro/ATT/Brésil/82
Serginho Chulapa/ATT/Brésil/82
Rodrygo/ATT/Brésil/82
Lima/MIL/Brésil/82
Elano/MIL/Brésil/82
José Ramos Delgado/DEF/Argentine/82
Agustín Cejas/G/Argentine/82
Juary/ATT/Brésil/80
Ricardo Oliveira/ATT/Brésil/80
Dalmo/DEF/Brésil/80
Léo/DEF/Brésil/80
Alex/DEF/Brésil/79
Edu Dracena/DEF/Brésil/79
Renato/MIL/Brésil/79
Fábio Costa/G/Brésil/79
Arouca/MIL/Brésil/78
Zé Roberto/MIL/Brésil/78
Rafael Cabral/G/Brésil/78
Vanderlei/G/Brésil/77
Durval/DEF/Brésil/76
Lucas Veríssimo/DEF/Brésil/76
Aranha/G/Brésil/76`},
{id:"flamengo",name:"Légendes de Flamengo",cat:"clubs",sub:"Brésil",club:"Flamengo",raw:`
Zico/MIL/Brésil/97
Júnior/DEF/Brésil/93
Zizinho/MIL/Brésil/92
Leandro/DEF/Brésil/90
Gabriel Barbosa/ATT/Brésil/89
Romário/ATT/Brésil/88
Leônidas da Silva/ATT/Brésil/88
Giorgian de Arrascaeta/MIL/Uruguay/88
Adílio/MIL/Brésil/86
Bebeto/ATT/Brésil/86
Bruno Henrique/ATT/Brésil/86
Dida/ATT/Brésil/86
Andrade/MIL/Brésil/85
Dejan Petković/MIL/Serbie/85
Éverton Ribeiro/MIL/Brésil/85
Adriano/ATT/Brésil/85
Nunes/ATT/Brésil/85
Pedro/ATT/Brésil/85
Domingos da Guia/DEF/Brésil/85
Júlio César/G/Brésil/85
Mozer/DEF/Brésil/84
Rondinelli/DEF/Brésil/84
Filipe Luís/DEF/Brésil/84
Gerson/MIL/Brésil/84
Raul Plassmann/G/Brésil/84
Aldair/DEF/Brésil/82
Léo Moura/DEF/Brésil/82
Rafinha/DEF/Brésil/82
Tita/MIL/Brésil/82
Zinho/MIL/Brésil/82
Ronaldinho/ATT/Brésil/82
Diego Alves/G/Brésil/82
Juan/DEF/Brésil/80
Agustín Rossi/G/Argentine/80
Léo Pereira/DEF/Brésil/79
Zé Carlos/G/Brésil/78
Cantarele/G/Brésil/78`},
{id:"saopaulo",name:"Légendes de São Paulo",cat:"clubs",sub:"Brésil",club:"São Paulo",raw:`
Rogério Ceni/G/Brésil/95
Raí/MIL/Brésil/93
Careca/ATT/Brésil/89
Cafu/DEF/Brésil/88
Kaká/MIL/Brésil/88
Leônidas da Silva/ATT/Brésil/88
Luís Fabiano/ATT/Brésil/88
Müller/ATT/Brésil/87
Serginho Chulapa/ATT/Brésil/87
Zetti/G/Brésil/86
Pedro Rocha/MIL/Uruguay/86
Diego Lugano/DEF/Uruguay/85
Darío Pereyra/DEF/Uruguay/85
Hernanes/MIL/Brésil/85
Miranda/DEF/Brésil/84
Oscar/DEF/Brésil/84
Pita/MIL/Brésil/84
Toninho Cerezo/MIL/Brésil/84
Gérson/MIL/Brésil/84
França/ATT/Brésil/84
Lucas Moura/ATT/Brésil/84
Waldir Peres/G/Brésil/84
Mauro Ramos/DEF/Brésil/82
De Sordi/DEF/Brésil/82
Leonardo/DEF/Brésil/82
Mineiro/MIL/Brésil/82
Amoroso/ATT/Brésil/82
Palhinha/ATT/Brésil/82
Denílson/ATT/Brésil/81
Ronaldão/DEF/Brésil/80
Josué/MIL/Brésil/80
Danilo/MIL/Brésil/80
Gilmar Rinaldi/G/Brésil/80
José Poy/G/Argentine/80
Fabão/DEF/Brésil/79
Robert Arboleda/DEF/Équateur/79
Ricardinho/MIL/Brésil/79
Jonathan Calleri/ATT/Argentine/79
Tiago Volpi/G/Brésil/77`},
{id:"alahly",name:"Légendes d'Al Ahly",cat:"clubs",sub:"Égypte",club:"Al Ahly",raw:`
Mohamed Aboutrika/MIL/Égypte/95
Mahmoud El Khatib/ATT/Égypte/94
Essam El Hadary/G/Égypte/92
Saleh Selim/MIL/Égypte/90
Thabet El-Batal/G/Égypte/88
Mokhtar El Tetsh/ATT/Égypte/88
Wael Gomaa/DEF/Égypte/87
Taher Abouzeid/MIL/Égypte/87
Hossam Hassan/ATT/Égypte/87
Mohamed El Shenawy/G/Égypte/87
Ahmed Shobair/G/Égypte/86
Mohamed Barakat/MIL/Égypte/85
Emad Moteab/ATT/Égypte/85
Ahmed Fathy/DEF/Égypte/84
Flávio Amado/ATT/Angola/83
Shady Mohamed/DEF/Égypte/82
Ibrahim Hassan/DEF/Égypte/82
Ali Maâloul/DEF/Tunisie/82
Hossam Ashour/MIL/Égypte/82
Ahmed Hassan/MIL/Égypte/82
Ekramy El-Shahat/G/Égypte/82
Mohamed Abdelwahab/DEF/Égypte/80
Sayed Moawad/DEF/Égypte/80
Ahmed Hegazi/DEF/Égypte/80
Ramy Rabia/DEF/Égypte/80
Hossam Ghaly/MIL/Égypte/80
Amr El Solia/MIL/Égypte/80
Abdallah El Said/MIL/Égypte/80
Afsha/MIL/Égypte/80
Mahmoud Trezeguet/ATT/Égypte/80
Sherif Ekramy/G/Égypte/80
Emam Ashour/MIL/Égypte/80
Mohamed Shawky/MIL/Égypte/79
Mohamed Hany/DEF/Égypte/79
Percy Tau/ATT/Afrique du Sud/79
Hussein El Shahat/ATT/Égypte/79
Ahmed Belal/ATT/Égypte/79
Moamen Zakaria/MIL/Égypte/78
Rabie Yassin/DEF/Égypte/78
Mohamed Sherif/ATT/Égypte/77`},
{id:"zamalek",name:"Légendes du Zamalek",cat:"clubs",sub:"Égypte",club:"Zamalek",raw:`
Hassan Shehata/ATT/Égypte/88
Farouk Gaafar/MIL/Égypte/88
Hossam Hassan/ATT/Égypte/86
Hazem Emam/MIL/Égypte/86
Shikabala/ATT/Égypte/86
Hussein Hegazi/ATT/Égypte/84
Abdel-Wahed El-Sayed/G/Égypte/84
Abdel Halim Ali/ATT/Égypte/82
Amr Zaki/ATT/Égypte/82
Emmanuel Amuneke/ATT/Nigeria/82
Gamal Abdel-Hamid/MIL/Égypte/82
Adel El-Maamour/G/Égypte/82
Tamer Abdel Hamid/MIL/Égypte/80
Ayman Abdelaziz/MIL/Égypte/80
Emam Ashour/MIL/Égypte/80
Zizo/ATT/Égypte/80
Mido/ATT/Égypte/80
Ashraf Kasem/DEF/Égypte/80
Nader El-Sayed/G/Égypte/80
Mohamed Abou Gabal/G/Égypte/80
Hesham Yakan/DEF/Égypte/79
Tarek Hamed/MIL/Égypte/79
Mostafa Mohamed/ATT/Égypte/79
Medhat Abdel-Hady/DEF/Égypte/78
Mohamed Abdel Shafy/DEF/Égypte/78
Tarek El-Sayed/DEF/Égypte/78
Ferjani Sassi/MIL/Tunisie/78
Abdallah El Said/MIL/Égypte/78
Ali Khalil/ATT/Égypte/78
Mahmoud Fathalla/DEF/Égypte/77
Omar Gaber/DEF/Égypte/77
Achraf Bencharki/ATT/Maroc/77
Besheer El-Tabei/DEF/Égypte/76
Mahmoud Alaa/DEF/Égypte/76
Ahmed Abou El Fotouh/DEF/Égypte/76
Mahmoud Genesh/G/Égypte/76
Mohamed Awad/G/Égypte/76`},
{id:"esperance",name:"Légendes de l'Espérance de Tunis",cat:"clubs",sub:"Tunisie",club:"Espérance",raw:`
Tarek Dhiab/MIL/Tunisie/92
Chokri El Ouaer/G/Tunisie/88
Youssef Msakni/ATT/Tunisie/85
Khaled Ben Yahia/DEF/Tunisie/84
Youcef Belaïli/ATT/Algérie/84
Nabil Maâloul/MIL/Tunisie/82
Oussama Darragi/MIL/Tunisie/82
Moez Ben Cherifia/G/Tunisie/82
Radhi Jaïdi/DEF/Tunisie/81
Khaled Badra/DEF/Tunisie/80
Anice Badri/ATT/Tunisie/80
Ali Zitouni/ATT/Tunisie/80
Khaled Korbi/MIL/Tunisie/78
Moïne Chaâbani/MIL/Tunisie/78
Ghailene Chaalali/MIL/Tunisie/78
Mohamed Ali Ben Romdhane/MIL/Tunisie/78
Michael Eneramo/ATT/Nigeria/78
Taha Yassine Khenissi/ATT/Tunisie/78
Harrison Afful/DEF/Ghana/78
Khalil Chemmam/DEF/Tunisie/78
Bechir Ben Saïd/G/Tunisie/78
Mejdi Traoui/MIL/Tunisie/77
Franck Kom/MIL/Cameroun/77
Fousseny Coulibaly/MIL/Côte d'Ivoire/77
Saad Bguir/MIL/Tunisie/77
Yannick N'Djeng/ATT/Cameroun/77
Walid Hichri/DEF/Tunisie/77
Sameh Derbali/DEF/Tunisie/77
Rami Jridi/G/Tunisie/77
Chamseddine Dhaouadi/DEF/Tunisie/76
Mohamed Ali Yacoubi/DEF/Tunisie/76
Iheb Mbarki/DEF/Tunisie/76
Mohamed Amine Ben Hmida/DEF/Tunisie/76
Kenneth Malitoli/ATT/Zambie/76
Fakhreddine Ben Youssef/ATT/Tunisie/76
Dramane Traoré/ATT/Mali/76
Hichem Belkaroui/DEF/Algérie/75
Hamza Rafia/MIL/Tunisie/75
Haythem Jouini/ATT/Tunisie/75
Amenallah Memmiche/G/Tunisie/73`},
{id:"raja",name:"Légendes du Raja Casablanca",cat:"clubs",sub:"Maroc",club:"Raja Casablanca",raw:`
Abdelmajid Dolmy/MIL/Maroc/92
Mustapha Chadli/G/Maroc/85
Saïd Ghandi/ATT/Maroc/84
Mohsine Moutouali/MIL/Maroc/82
Soufiane Rahimi/ATT/Maroc/82
Khalid Fouhami/G/Maroc/82
Abdelilah Fahmi/DEF/Maroc/80
Talal El Karkouri/DEF/Maroc/80
Abdelilah Hafidi/MIL/Maroc/80
Salaheddine Bassir/ATT/Maroc/80
Anas Zniti/G/Maroc/80
Badr Benoun/DEF/Maroc/79
Mohamed Oulhaj/DEF/Maroc/78
Youssef Safri/MIL/Maroc/78
Jamal Sellami/MIL/Maroc/78
Mouhcine Iajour/ATT/Maroc/78
Jawad El Yamiq/DEF/Maroc/77
Youssef Rossi/DEF/Maroc/77
Mahmoud Benhalib/ATT/Maroc/77
Ben Malango/ATT/RD Congo/77
Mustapha Bidoudane/ATT/Maroc/77
Mustapha Khalif/MIL/Maroc/76
Bouchaib El Moubarki/ATT/Maroc/76
Soufiane Alloudi/ATT/Maroc/76
Tarik El Jarmouni/G/Maroc/76
Khalid Askri/G/Maroc/76
Omar Najdi/MIL/Maroc/75
Zakaria Hadraf/MIL/Maroc/75
Marouane Zemmama/MIL/Maroc/75
Hicham Aboucherouane/ATT/Maroc/75
Abdeljalil Jbira/DEF/Maroc/74
Marouane Hadhoudi/DEF/Maroc/74
Abderrahim Achchakir/DEF/Maroc/74
Fabrice Ngah/MIL/Cameroun/74
Abdelkabir El Ouadi/ATT/Maroc/74
Omar Boutayeb/DEF/Maroc/73
Michel Babatunde/MIL/Nigeria/73
El Mehdi Al Harrar/G/Maroc/72`},
{id:"wydad",name:"Légendes du Wydad Casablanca",cat:"clubs",sub:"Maroc",club:"Wydad Casablanca",raw:`
Badou Zaki/G/Maroc/92
Noureddine Naybet/DEF/Maroc/91
Yassine Bounou/G/Maroc/90
Aziz Bouderbala/MIL/Maroc/90
Rachid Daoudi/MIL/Maroc/86
Hassan Nader/ATT/Maroc/86
Ayoub El Kaabi/ATT/Maroc/85
Nadir Lamyaghri/G/Maroc/83
Achraf Dari/DEF/Maroc/82
Yahya Jabrane/MIL/Maroc/80
Reda Tagnaouti/G/Maroc/80
Walid El Karti/MIL/Maroc/79
Yahia Attiat-Allah/DEF/Maroc/79
Ismail Haddad/ATT/Maroc/79
Mohamed Nahiri/DEF/Maroc/78
Badr El Kaddouri/DEF/Maroc/78
Ayman El Hassouni/MIL/Maroc/77
Abdellatif Noussir/DEF/Maroc/77
Malick Evouna/ATT/Gabon/77
Mohamed Ounajem/ATT/Maroc/77
Abdelilah Amimi/DEF/Maroc/76
Ayoub El Amloud/DEF/Maroc/76
Hassan Benabicha/MIL/Maroc/76
William Jebor/ATT/Liberia/76
Mustapha Bidoudane/ATT/Maroc/76
Zouheir Laâroubi/G/Maroc/76
Salaheddine Saidi/DEF/Maroc/75
Cheick Comara/DEF/Côte d'Ivoire/75
Guy Mbenza/ATT/Congo/75
Reda Hajhouj/ATT/Maroc/75
Fabrice Ondama/ATT/Congo/75
Mehdi Benabid/G/Maroc/75
Badie Aouk/MIL/Maroc/74
Jean-Jacques Gosso/MIL/Côte d'Ivoire/74
Amine Atouchi/MIL/Maroc/74
Bouly Sambou/ATT/Sénégal/74`},
{id:"jsk",name:"Légendes de la JS Kabylie",cat:"clubs",sub:"Algérie",club:"JS Kabylie",raw:`
Ali Fergani/MIL/Algérie/88
Djamel Menad/ATT/Algérie/86
Moussa Saïb/MIL/Algérie/85
Mouloud Iboud/DEF/Algérie/84
Nacer Bouiche/ATT/Algérie/84
Mourad Amara/G/Algérie/84
Mehdi Cerbah/G/Algérie/82
Lounès Gaouaoui/G/Algérie/82
Abdelhamid Sadmi/DEF/Algérie/80
Mohand Chérif Hannachi/MIL/Algérie/80
Faouzi Chaouchi/G/Algérie/80
Slimane Raho/DEF/Algérie/78
Hakim Medane/MIL/Algérie/78
Ryad Boudebouz/MIL/Algérie/78
Farid Ghazi/ATT/Algérie/78
Hamid Berguiga/ATT/Algérie/78
Essaïd Belkalem/DEF/Algérie/77
Albert Ebossé Bodjongo/ATT/Cameroun/77
Abdelaziz Benhamlat/DEF/Algérie/76
Fawzi Moussouni/ATT/Algérie/76
Billel Messaoudi/ATT/Algérie/76
Larbi El Hadi/G/Algérie/76
Mohamed Rabie Meftah/DEF/Algérie/75
Lamara Douicher/MIL/Algérie/75
Rezki Hamroune/MIL/Algérie/75
Nabil Hemani/ATT/Algérie/75
Cheick Oumar Dabo/ATT/Mali/75
Brahim Zafour/DEF/Algérie/74
Ali Rial/DEF/Algérie/74
Rezki Amrouche/DEF/Algérie/74
Rédha Bensayah/MIL/Algérie/74
Abderrazak Djahnit/ATT/Algérie/74
Abderrazak Harb/G/Algérie/73
Badreddine Souyad/MIL/Algérie/72`},
{id:"mca",name:"Légendes du MC Alger",cat:"clubs",sub:"Algérie",club:"MC Alger",raw:`
Ali Bencheikh/MIL/Algérie/88
Zoubir Bachi/ATT/Algérie/85
Omar Betrouni/ATT/Algérie/84
Youcef Belaïli/ATT/Algérie/84
Abdelouahab Maïche/MIL/Algérie/80
Hadj Bouguèche/ATT/Algérie/80
Rafik Saïfi/ATT/Algérie/80
Faouzi Chaouchi/G/Algérie/80
Abdesslem Bousri/ATT/Algérie/78
Noureddine Daham/ATT/Algérie/78
Farouk Chafaï/DEF/Algérie/77
Hamza Koudri/MIL/Algérie/77
Abdelmoumene Djabou/MIL/Algérie/76
Kamel Kaci-Saïd/MIL/Algérie/76
Fayçal Badji/ATT/Algérie/76
Moustapha Djallit/ATT/Algérie/76
Mohamed Lamine Zemmamouche/G/Algérie/76
Alexis Guendouz/G/Algérie/76
Abderrahmane Hachoud/DEF/Algérie/75
Ayoub Abdellaoui/DEF/Algérie/75
Abdelmalek Cherrad/ATT/Algérie/75
Zakaria Naidji/ATT/Algérie/75
Azzedine Doukha/G/Algérie/75
Réda Babouche/DEF/Algérie/74
Zidane Mebarakou/DEF/Algérie/74
Ismaël Bouzid/DEF/Algérie/74
Sofiane Bendebka/MIL/Algérie/74
Réda Halaïmia/DEF/Algérie/73
Amir Karaoui/MIL/Algérie/73
Mohammed Benkhemassa/MIL/Algérie/73
Abdelatif Ramdane/G/Algérie/73
Chahreddine Boukholda/MIL/Algérie/72
Abdelkader Salhi/G/Algérie/72`},
{id:"galatasaray",name:"Légendes de Galatasaray",cat:"clubs",sub:"Turquie",club:"Galatasaray",raw:`
Gheorghe Hagi/MIL/Roumanie/95
Metin Oktay/ATT/Turquie/93
Hakan Şükür/ATT/Turquie/92
Turgay Şeren/G/Turquie/88
Fernando Muslera/G/Uruguay/88
Bülent Korkmaz/DEF/Turquie/88
Cláudio Taffarel/G/Brésil/87
Gheorghe Popescu/DEF/Roumanie/86
Tanju Çolak/ATT/Turquie/86
Mário Jardel/ATT/Brésil/86
Mauro Icardi/ATT/Argentine/86
Victor Osimhen/ATT/Nigeria/86
Wesley Sneijder/MIL/Pays-Bas/85
Emre Belözoğlu/MIL/Turquie/84
Hasan Şaş/MIL/Turquie/84
Arif Erdem/ATT/Turquie/84
Burak Yılmaz/ATT/Turquie/84
Zoran Simović/G/Yougoslavie/84
Tugay Kerimoğlu/MIL/Turquie/83
Arda Turan/MIL/Turquie/83
Didier Drogba/ATT/Côte d'Ivoire/83
Okan Buruk/MIL/Turquie/82
Ümit Davala/MIL/Turquie/82
Selçuk İnan/MIL/Turquie/82
Fatih Terim/DEF/Turquie/82
Bafétimbi Gomis/ATT/France/82
Felipe Melo/MIL/Brésil/81
Hamit Altıntop/MIL/Turquie/80
Lucas Torreira/MIL/Uruguay/80
Cüneyt Tanman/DEF/Turquie/80
Hakan Ünsal/DEF/Turquie/80
Dries Mertens/ATT/Belgique/80
Hayrettin Demirbaş/G/Turquie/80
Dávinson Sánchez/DEF/Colombie/79
Sabri Sarıoğlu/DEF/Turquie/79
Faryd Mondragón/G/Colombie/79
Servet Çetin/DEF/Turquie/78
Semih Kaya/DEF/Turquie/77
Tomáš Ujfaluši/DEF/Tchéquie/77
Abdülkerim Bardakcı/DEF/Turquie/77`},
{id:"fenerbahce",name:"Légendes de Fenerbahçe",cat:"clubs",sub:"Turquie",club:"Fenerbahçe",raw:`
Lefter Küçükandonyadis/ATT/Turquie/93
Alex de Souza/MIL/Brésil/93
Rüştü Reçber/G/Turquie/88
Aykut Kocaman/ATT/Turquie/86
Volkan Demirel/G/Turquie/86
Can Bartu/ATT/Turquie/85
Emre Belözoğlu/MIL/Turquie/85
Roberto Carlos/DEF/Brésil/85
Cemil Turan/ATT/Turquie/84
Rıdvan Dilmen/MIL/Turquie/84
Diego Lugano/DEF/Uruguay/84
Edin Džeko/ATT/Bosnie-Herzégovine/84
Tuncay Şanlı/ATT/Turquie/83
Dirk Kuyt/ATT/Pays-Bas/83
Youssef En-Nesyri/ATT/Maroc/83
Oğuz Çetin/MIL/Turquie/82
Dušan Tadić/MIL/Serbie/82
Moussa Sow/ATT/Sénégal/82
Robin van Persie/ATT/Pays-Bas/82
Harald Schumacher/G/Allemagne/82
Fred/MIL/Brésil/81
Sebastian Szymański/MIL/Pologne/81
Müjdat Yetkiner/DEF/Turquie/80
Ogün Temizkanoğlu/DEF/Turquie/80
Gökhan Gönül/DEF/Turquie/80
Martin Škrtel/DEF/Slovaquie/80
Mehmet Aurélio/MIL/Turquie/80
Stephen Appiah/MIL/Ghana/80
Mesut Özil/MIL/Allemagne/80
Elvir Bolić/ATT/Bosnie-Herzégovine/80
Semih Şentürk/ATT/Turquie/80
Dominik Livaković/G/Croatie/80
Önder Turacı/DEF/Turquie/79
Mehmet Topal/MIL/Turquie/79
Simon Kjær/DEF/Danemark/78
Joseph Yobo/DEF/Nigeria/78
Caner Erkin/DEF/Turquie/78
Selçuk Şahin/MIL/Turquie/78
Engin İpekoğlu/G/Turquie/78
İrfan Can Eğribayat/G/Turquie/76`},
{id:"america",name:"Légendes du Club América",cat:"clubs",sub:"Mexique",club:"Club América",raw:`
Cuauhtémoc Blanco/ATT/Mexique/92
Carlos Reinoso/MIL/Chili/88
Guillermo Ochoa/G/Mexique/88
Enrique Borja/ATT/Mexique/87
Cristóbal Ortega/MIL/Mexique/86
Alfredo Tena/DEF/Mexique/86
Salvador Cabañas/ATT/Paraguay/86
Zague/ATT/Mexique/84
Oribe Peralta/ATT/Mexique/84
Héctor Miguel Zelada/G/Argentine/84
Antônio Carlos Santos/MIL/Brésil/82
Pável Pardo/MIL/Mexique/82
Edson Álvarez/DEF/Mexique/82
Henry Martín/ATT/Mexique/82
François Omam-Biyik/ATT/Cameroun/82
Iván Zamorano/ATT/Chili/82
Christian Benítez/ATT/Équateur/81
Duilio Davino/DEF/Mexique/80
Paul Aguilar/DEF/Mexique/80
Álvaro Fidalgo/MIL/Espagne/80
Kalusha Bwalya/ATT/Zambie/80
Carlos Hermosillo/ATT/Mexique/80
Adrián Chávez/G/Mexique/80
Agustín Marchesín/G/Argentine/80
Miguel Layún/DEF/Mexique/79
Aquivaldo Mosquera/DEF/Colombie/79
Germán Villa/MIL/Mexique/79
Rubens Sambueza/MIL/Argentine/79
Diego Valdés/MIL/Chili/79
Moisés Muñoz/G/Mexique/79
Luis Ángel Malagón/G/Mexique/79
Pablo Aguilar/DEF/Paraguay/78
Raúl Jiménez/ATT/Mexique/78
Darío Benedetto/ATT/Argentine/78
Isaac Terrazas/DEF/Mexique/77
Bruno Valdez/DEF/Paraguay/77
Jorge Sánchez/DEF/Mexique/77
Richard Sánchez/MIL/Paraguay/76
Kevin Álvarez/DEF/Mexique/75`}
);
Object.assign(window.CLUB_COLORS,{"Boca Juniors":["#003C8F","#FCD116"],"River Plate":["#FFFFFF","#E30613"],"Santos":["#FFFFFF","#000000"],"Flamengo":["#C8102E","#000000"],"São Paulo":["#FFFFFF","#E30613"],"Al Ahly":["#C8102E","#FFFFFF"],"Zamalek":["#FFFFFF","#E30613"],"Espérance":["#C8102E","#FFD700"],"Raja Casablanca":["#00843D","#FFFFFF"],"Wydad Casablanca":["#D50000","#FFFFFF"],"JS Kabylie":["#FFD700","#00843D"],"MC Alger":["#C8102E","#00843D"],"Galatasaray":["#A90432","#FDB912"],"Fenerbahçe":["#002D72","#FFED00"],"Club América":["#FFD200","#002D72"]});

/* ---- nations_afrique.js ---- */
window.FOOT_PACKS.push(
{id:"mar",name:"Légendes du Maroc",cat:"nations",sub:"Afrique",raw:`
Yassine Bounou/G/Séville/Maroc/88
Badou Zaki/G/Majorque/Maroc/88
Nadir Lamyaghri/G/Wydad/Maroc/78
Khalid Fouhami/G/Raja/Maroc/76
Munir Mohamedi/G/Numancia/Maroc/75
Achraf Hakimi/DEF/PSG/Maroc/92
Noureddine Naybet/DEF/La Corogne/Maroc/89
Mehdi Benatia/DEF/Roma/Maroc/86
Romain Saïss/DEF/Wolverhampton/Maroc/80
Nayef Aguerd/DEF/West Ham/Maroc/81
Noussair Mazraoui/DEF/Ajax/Maroc/82
Abdeslam Ouaddou/DEF/Valenciennes/Maroc/76
Talal El Karkouri/DEF/Charlton/Maroc/77
Badr El Kaddouri/DEF/Dynamo Kiev/Maroc/76
Achraf Dari/DEF/Brest/Maroc/74
Mohamed Timoumi/MIL/FAR Rabat/Maroc/88
Mustapha Hadji/MIL/La Corogne/Maroc/87
Abdelmajid Dolmy/MIL/Raja/Maroc/84
Hakim Ziyech/MIL/Ajax/Maroc/87
Sofyan Amrabat/MIL/Fiorentina/Maroc/84
Azzedine Ounahi/MIL/Angers/Maroc/80
Mbark Boussoufa/MIL/Anderlecht/Maroc/80
Houssine Kharja/MIL/Sienne/Maroc/78
Younès Belhanda/MIL/Montpellier/Maroc/79
Aziz Bouderbala/MIL/Sion/Maroc/82
Youssef Chippo/MIL/Coventry/Maroc/76
Selim Amallah/MIL/Standard/Maroc/75
Bilal El Khannouss/MIL/Genk/Maroc/77
Ahmed Faras/ATT/Chabab Mohammédia/Maroc/89
Youssef En-Nesyri/ATT/Séville/Maroc/84
Brahim Díaz/ATT/Real Madrid/Maroc/85
Marouane Chamakh/ATT/Bordeaux/Maroc/80
Salaheddine Bassir/ATT/La Corogne/Maroc/79
Youssef Hadji/ATT/Nancy/Maroc/76
Youssef El-Arabi/ATT/Grenade/Maroc/77
Ayoub El Kaabi/ATT/Olympiakos/Maroc/78
Nordin Amrabat/ATT/Galatasaray/Maroc/77`},
{id:"sen",name:"Légendes du Sénégal",cat:"nations",sub:"Afrique",raw:`
Édouard Mendy/G/Chelsea/Sénégal/87
Tony Sylva/G/Monaco/Sénégal/82
Abdoulaye Diallo/G/Rennes/Sénégal/76
Seny Dieng/G/QPR/Sénégal/75
Alfred Gomis/G/Rennes/Sénégal/75
Khadim N'Diaye/G/Horoya/Sénégal/74
Kalidou Koulibaly/DEF/Naples/Sénégal/89
Lamine Diatta/DEF/Rennes/Sénégal/80
Ferdinand Coly/DEF/Lens/Sénégal/79
Omar Daf/DEF/Sochaux/Sénégal/78
Habib Beye/DEF/Marseille/Sénégal/79
Souleymane Diawara/DEF/Bordeaux/Sénégal/79
Roger Mendy/DEF/Monaco/Sénégal/80
Youssouf Sabaly/DEF/Betis/Sénégal/76
Abdou Diallo/DEF/PSG/Sénégal/77
Moussa Niakhaté/DEF/Nottingham Forest/Sénégal/77
Kara Mbodj/DEF/Anderlecht/Sénégal/75
Ismail Jakobs/DEF/Monaco/Sénégal/75
Khalilou Fadiga/MIL/Auxerre/Sénégal/85
Papa Bouba Diop/MIL/Fulham/Sénégal/83
Idrissa Gana Gueye/MIL/Everton/Sénégal/84
Aliou Cissé/MIL/Montpellier/Sénégal/80
Salif Diao/MIL/Liverpool/Sénégal/77
Cheikhou Kouyaté/MIL/West Ham/Sénégal/79
Pape Matar Sarr/MIL/Tottenham/Sénégal/79
Pape Gueye/MIL/Marseille/Sénégal/77
Nampalys Mendy/MIL/Leicester/Sénégal/76
Lamine Camara/MIL/Monaco/Sénégal/77
Sadio Mané/ATT/Liverpool/Sénégal/93
El Hadji Diouf/ATT/Lens/Sénégal/86
Jules Bocandé/ATT/Metz/Sénégal/84
Henri Camara/ATT/Wigan/Sénégal/80
Mamadou Niang/ATT/Marseille/Sénégal/82
Demba Ba/ATT/Newcastle/Sénégal/81
Papiss Cissé/ATT/Newcastle/Sénégal/79
Moussa Sow/ATT/Lille/Sénégal/80
Ismaïla Sarr/ATT/Watford/Sénégal/80
Nicolas Jackson/ATT/Chelsea/Sénégal/80
Iliman Ndiaye/ATT/Everton/Sénégal/79
Boulaye Dia/ATT/Reims/Sénégal/77`},
{id:"civ",name:"Légendes de la Côte d'Ivoire",cat:"nations",sub:"Afrique",raw:`
Boubacar Barry/G/Lokeren/Côte d'Ivoire/82
Alain Gouaméné/G/ASEC Mimosas/Côte d'Ivoire/80
Jean-Jacques Tizié/G/Espérance/Côte d'Ivoire/77
Gérard Gnanhouan/G/Guingamp/Côte d'Ivoire/75
Sylvain Gbohouo/G/TP Mazembe/Côte d'Ivoire/76
Yahia Fofana/G/Angers/Côte d'Ivoire/77
Kolo Touré/DEF/Arsenal/Côte d'Ivoire/86
Emmanuel Eboué/DEF/Arsenal/Côte d'Ivoire/80
Siaka Tiéné/DEF/Valenciennes/Côte d'Ivoire/77
Arthur Boka/DEF/Stuttgart/Côte d'Ivoire/78
Sol Bamba/DEF/Cardiff/Côte d'Ivoire/76
Cyril Domoraud/DEF/Marseille/Côte d'Ivoire/77
Abdoulaye Méïté/DEF/Marseille/Côte d'Ivoire/77
Serge Aurier/DEF/PSG/Côte d'Ivoire/80
Éric Bailly/DEF/Manchester United/Côte d'Ivoire/79
Evan Ndicka/DEF/Roma/Côte d'Ivoire/80
Odilon Kossounou/DEF/Leverkusen/Côte d'Ivoire/78
Wilfried Singo/DEF/Torino/Côte d'Ivoire/77
Yaya Touré/MIL/Manchester City/Côte d'Ivoire/92
Didier Zokora/MIL/Tottenham/Côte d'Ivoire/84
Cheick Tioté/MIL/Newcastle/Côte d'Ivoire/81
Franck Kessié/MIL/Milan/Côte d'Ivoire/84
Jean Michaël Seri/MIL/Nice/Côte d'Ivoire/80
Seko Fofana/MIL/Lens/Côte d'Ivoire/80
Ibrahim Sangaré/MIL/PSV/Côte d'Ivoire/79
Romaric/MIL/Le Mans/Côte d'Ivoire/77
Serey Dié/MIL/Bâle/Côte d'Ivoire/76
Youssouf Fofana/MIL/Monaco/Côte d'Ivoire/80
Didier Drogba/ATT/Chelsea/Côte d'Ivoire/95
Laurent Pokou/ATT/Rennes/Côte d'Ivoire/88
Salomon Kalou/ATT/Chelsea/Côte d'Ivoire/83
Gervinho/ATT/Lille/Côte d'Ivoire/83
Wilfried Bony/ATT/Swansea/Côte d'Ivoire/82
Seydou Doumbia/ATT/CSKA Moscou/Côte d'Ivoire/80
Aruna Dindane/ATT/Anderlecht/Côte d'Ivoire/80
Abdoulaye Traoré/ATT/ASEC Mimosas/Côte d'Ivoire/82
Sébastien Haller/ATT/Ajax/Côte d'Ivoire/81
Wilfried Zaha/ATT/Crystal Palace/Côte d'Ivoire/82
Nicolas Pépé/ATT/Lille/Côte d'Ivoire/81
Max Gradel/ATT/Saint-Étienne/Côte d'Ivoire/78`},
{id:"cmr",name:"Légendes du Cameroun",cat:"nations",sub:"Afrique",raw:`
Thomas N'Kono/G/Espanyol/Cameroun/90
Joseph-Antoine Bell/G/Marseille/Cameroun/86
Jacques Songo'o/G/La Corogne/Cameroun/82
Carlos Kameni/G/Espanyol/Cameroun/81
André Onana/G/Ajax/Cameroun/83
Hamidou Souleymanou/G/Kayserispor/Cameroun/75
Rigobert Song/DEF/Galatasaray/Cameroun/86
Stephen Tataw/DEF/Tonnerre Yaoundé/Cameroun/78
Emmanuel Kundé/DEF/Canon Yaoundé/Cameroun/80
Lauren/DEF/Arsenal/Cameroun/82
Timothée Atouba/DEF/Hambourg/Cameroun/77
Pierre Womé/DEF/Bologne/Cameroun/77
Bill Tchato/DEF/Montpellier/Cameroun/75
Nicolas N'Koulou/DEF/Marseille/Cameroun/79
Benoît Assou-Ekotto/DEF/Tottenham/Cameroun/78
Sébastien Bassong/DEF/Tottenham/Cameroun/76
Aurélien Chedjou/DEF/Lille/Cameroun/77
Joël Matip/DEF/Liverpool/Cameroun/82
Théophile Abega/MIL/Canon Yaoundé/Cameroun/85
Grégoire M'Bida/MIL/Canon Yaoundé/Cameroun/80
Louis-Paul Mfédé/MIL/Rennes/Cameroun/77
Marc-Vivien Foé/MIL/Lyon/Cameroun/86
Geremi/MIL/Real Madrid/Cameroun/84
Jean Makoun/MIL/Lille/Cameroun/80
Alex Song/MIL/Arsenal/Cameroun/82
Stéphane Mbia/MIL/Marseille/Cameroun/80
Eric Djemba-Djemba/MIL/Manchester United/Cameroun/76
Salomon Olembé/MIL/Nantes/Cameroun/77
Achille Emana/MIL/Toulouse/Cameroun/77
André-Frank Zambo Anguissa/MIL/Naples/Cameroun/84
Samuel Eto'o/ATT/Barcelone/Cameroun/95
Roger Milla/ATT/Montpellier/Cameroun/92
Patrick Mboma/ATT/Cagliari/Cameroun/85
François Omam-Biyik/ATT/Laval/Cameroun/83
Alphonse Tchami/ATT/Boca Juniors/Cameroun/78
Pierre Webó/ATT/Majorque/Cameroun/78
Eric Maxim Choupo-Moting/ATT/Schalke/Cameroun/80
Vincent Aboubakar/ATT/Porto/Cameroun/82
Karl Toko Ekambi/ATT/Villarreal/Cameroun/79
Bryan Mbeumo/ATT/Brentford/Cameroun/83`},
{id:"nga",name:"Légendes du Nigeria",cat:"nations",sub:"Afrique",raw:`
Vincent Enyeama/G/Lille/Nigeria/86
Peter Rufai/G/Farense/Nigeria/84
Ike Shorunmu/G/Beşiktaş/Nigeria/78
Austin Ejide/G/Bastia/Nigeria/76
Carl Ikeme/G/Wolverhampton/Nigeria/75
Francis Uzoho/G/Omonia/Nigeria/75
Stanley Nwabali/G/Chippa United/Nigeria/77
Stephen Keshi/DEF/Anderlecht/Nigeria/85
Uche Okechukwu/DEF/Fenerbahçe/Nigeria/83
Taribo West/DEF/Inter/Nigeria/84
Celestine Babayaro/DEF/Chelsea/Nigeria/82
Augustine Eguavoen/DEF/Gent/Nigeria/78
Joseph Yobo/DEF/Everton/Nigeria/82
Christian Chukwu/DEF/Enugu Rangers/Nigeria/82
Godwin Okpara/DEF/PSG/Nigeria/78
Taye Taiwo/DEF/Marseille/Nigeria/78
Efe Ambrose/DEF/Celtic/Nigeria/75
William Troost-Ekong/DEF/Udinese/Nigeria/77
Ola Aina/DEF/Nottingham Forest/Nigeria/78
Calvin Bassey/DEF/Fulham/Nigeria/77
Jay-Jay Okocha/MIL/Bolton/Nigeria/92
Sunday Oliseh/MIL/Ajax/Nigeria/86
Mutiu Adepoju/MIL/Real Sociedad/Nigeria/80
Muda Lawal/MIL/Shooting Stars/Nigeria/82
John Obi Mikel/MIL/Chelsea/Nigeria/84
Wilfred Ndidi/MIL/Leicester/Nigeria/82
Garba Lawal/MIL/Roda JC/Nigeria/77
Alex Iwobi/MIL/Arsenal/Nigeria/79
Ogenyi Onazi/MIL/Lazio/Nigeria/75
Nwankwo Kanu/ATT/Arsenal/Nigeria/90
Rashidi Yekini/ATT/Vitória Setúbal/Nigeria/88
Segun Odegbami/ATT/Shooting Stars/Nigeria/85
Daniel Amokachi/ATT/Everton/Nigeria/83
Finidi George/ATT/Ajax/Nigeria/85
Emmanuel Amunike/ATT/Sporting/Nigeria/83
Victor Ikpeba/ATT/Monaco/Nigeria/81
Obafemi Martins/ATT/Inter/Nigeria/81
Yakubu Aiyegbeni/ATT/Portsmouth/Nigeria/81
Victor Osimhen/ATT/Naples/Nigeria/89
Ademola Lookman/ATT/Atalanta/Nigeria/86`},
{id:"egy",name:"Légendes de l'Égypte",cat:"nations",sub:"Afrique",raw:`
Essam El-Hadary/G/Al Ahly/Égypte/88
Ahmed Shobair/G/Al Ahly/Égypte/83
Thabet El-Batal/G/Al Ahly/Égypte/82
Nader El-Sayed/G/Zamalek/Égypte/79
Abdelwahed El-Sayed/G/Zamalek/Égypte/76
Sherif Ekramy/G/Al Ahly/Égypte/75
Mohamed El Shenawy/G/Al Ahly/Égypte/80
Hany Ramzy/DEF/Werder Brême/Égypte/84
Ibrahim Hassan/DEF/Al Ahly/Égypte/80
Wael Gomaa/DEF/Al Ahly/Égypte/82
Ahmed Fathy/DEF/Al Ahly/Égypte/80
Sayed Moawad/DEF/Al Ahly/Égypte/77
Mohamed Abdel Wahab/DEF/Al Ahly/Égypte/76
Mahmoud Fathallah/DEF/Zamalek/Égypte/76
Ahmed Hegazi/DEF/West Bromwich/Égypte/79
Ahmed Elmohamady/DEF/Hull City/Égypte/78
Ali Gabr/DEF/Zamalek/Égypte/75
Mohamed Hany/DEF/Al Ahly/Égypte/75
Mohamed Aboutrika/MIL/Al Ahly/Égypte/91
Ahmed Hassan/MIL/Al Ahly/Égypte/87
Hosny Abd Rabo/MIL/Ismaily/Égypte/81
Mohamed Shawky/MIL/Al Ahly/Égypte/78
Mohamed Barakat/MIL/Al Ahly/Égypte/80
Magdi Abdelghani/MIL/Al Ahly/Égypte/79
Hazem Emam/MIL/Zamalek/Égypte/80
Hossam Ghaly/MIL/Feyenoord/Égypte/77
Tarek Hamed/MIL/Zamalek/Égypte/76
Mohamed Elneny/MIL/Arsenal/Égypte/79
Mohamed Salah/ATT/Liverpool/Égypte/95
Mahmoud El Khatib/ATT/Al Ahly/Égypte/90
Hossam Hassan/ATT/Al Ahly/Égypte/88
Hassan Shehata/ATT/Zamalek/Égypte/84
Amr Zaki/ATT/Zamalek/Égypte/81
Mohamed Zidan/ATT/Mayence/Égypte/80
Emad Moteab/ATT/Al Ahly/Égypte/80
Mido/ATT/Ajax/Égypte/80
Trezeguet/ATT/Aston Villa/Égypte/78
Omar Marmoush/ATT/Eintracht Francfort/Égypte/85
Mostafa Mohamed/ATT/Nantes/Égypte/77`},
{id:"tun",name:"Légendes de la Tunisie",cat:"nations",sub:"Afrique",raw:`
Attouga/G/Club Africain/Tunisie/86
Mokhtar Naili/G/Club Africain/Tunisie/78
Chokri El Ouaer/G/Espérance/Tunisie/84
Ali Boumnijel/G/Club Africain/Tunisie/81
Hamdi Kasraoui/G/Espérance/Tunisie/76
Aymen Mathlouthi/G/Étoile du Sahel/Tunisie/77
Bechir Ben Saïd/G/US Monastir/Tunisie/75
Aymen Dahmen/G/CS Sfaxien/Tunisie/74
Radhi Jaïdi/DEF/Bolton/Tunisie/82
Karim Haggui/DEF/Hanovre/Tunisie/79
Khaled Badra/DEF/Espérance/Tunisie/79
Hatem Trabelsi/DEF/Ajax/Tunisie/82
Sami Trabelsi/DEF/CS Sfaxien/Tunisie/77
Alaeddine Yahia/DEF/Lens/Tunisie/76
Aymen Abdennour/DEF/Toulouse/Tunisie/80
Ali Maâloul/DEF/Al Ahly/Tunisie/79
Dylan Bronn/DEF/Gent/Tunisie/76
Yassine Meriah/DEF/CS Sfaxien/Tunisie/76
Montassar Talbi/DEF/Lorient/Tunisie/76
Hamdi Nagguez/DEF/Étoile du Sahel/Tunisie/74
Tarak Dhiab/MIL/Espérance/Tunisie/90
Hamadi Agrebi/MIL/CS Sfaxien/Tunisie/85
Temime Lahzami/MIL/Espérance/Tunisie/80
Zoubeir Baya/MIL/Étoile du Sahel/Tunisie/81
Kaies Ghodhbane/MIL/Étoile du Sahel/Tunisie/78
Mehdi Nafti/MIL/Racing Santander/Tunisie/77
Jawhar Mnari/MIL/Nuremberg/Tunisie/77
Ellyes Skhiri/MIL/Cologne/Tunisie/80
Aïssa Laïdouni/MIL/Union Berlin/Tunisie/77
Ferjani Sassi/MIL/Zamalek/Tunisie/77
Naïm Sliti/MIL/Dijon/Tunisie/78
Hannibal Mejbri/MIL/Manchester United/Tunisie/76
Wahbi Khazri/ATT/Saint-Étienne/Tunisie/82
Youssef Msakni/ATT/Al Duhail/Tunisie/82
Francileudo dos Santos/ATT/Sochaux/Tunisie/80
Adel Sellimi/ATT/Nantes/Tunisie/79
Ziad Jaziri/ATT/Étoile du Sahel/Tunisie/79
Issam Jemâa/ATT/Lens/Tunisie/79
Faouzi Rouissi/ATT/Club Africain/Tunisie/77
Amine Chermiti/ATT/Espérance/Tunisie/76`},
{id:"gha",name:"Légendes du Ghana",cat:"nations",sub:"Afrique",raw:`
Robert Mensah/G/Asante Kotoko/Ghana/85
Richard Kingson/G/Wigan/Ghana/80
Adam Kwarasey/G/Strømsgodset/Ghana/75
Razak Brimah/G/Córdoba/Ghana/74
Richard Ofori/G/Orlando Pirates/Ghana/75
Lawrence Ati-Zigi/G/Saint-Gall/Ghana/75
Samuel Kuffour/DEF/Bayern Munich/Ghana/87
John Mensah/DEF/Rennes/Ghana/82
John Paintsil/DEF/Fulham/Ghana/78
Hans Sarpei/DEF/Leverkusen/Ghana/77
Harrison Afful/DEF/Espérance/Ghana/77
Jonathan Mensah/DEF/Columbus Crew/Ghana/76
Isaac Vorsah/DEF/Hoffenheim/Ghana/75
Daniel Amartey/DEF/Leicester/Ghana/76
Abdul Rahman Baba/DEF/Chelsea/Ghana/75
Mohammed Salisu/DEF/Southampton/Ghana/76
Alexander Djiku/DEF/Strasbourg/Ghana/76
Tariq Lamptey/DEF/Brighton/Ghana/77
Abedi Pelé/MIL/Marseille/Ghana/93
Michael Essien/MIL/Chelsea/Ghana/90
Stephen Appiah/MIL/Juventus/Ghana/85
Sulley Muntari/MIL/Inter/Ghana/83
Kevin-Prince Boateng/MIL/Milan/Ghana/82
Kwadwo Asamoah/MIL/Juventus/Ghana/82
André Ayew/MIL/Marseille/Ghana/83
Thomas Partey/MIL/Atlético Madrid/Ghana/85
Mohammed Kudus/MIL/West Ham/Ghana/85
Anthony Annan/MIL/Rosenborg/Ghana/77
Emmanuel Agyemang-Badu/MIL/Udinese/Ghana/77
Nii Lamptey/MIL/Anderlecht/Ghana/80
Asamoah Gyan/ATT/Rennes/Ghana/86
Tony Yeboah/ATT/Leeds/Ghana/87
Mohammed Polo/ATT/Hearts of Oak/Ghana/82
Jordan Ayew/ATT/Crystal Palace/Ghana/80
Iñaki Williams/ATT/Athletic Bilbao/Ghana/82
Antoine Semenyo/ATT/Bournemouth/Ghana/82
Christian Atsu/ATT/Newcastle/Ghana/78
Matthew Amoah/ATT/Vitesse/Ghana/76
Junior Agogo/ATT/Nottingham Forest/Ghana/76
Kamaldeen Sulemana/ATT/Rennes/Ghana/76`},
{id:"mli",name:"Légendes du Mali",cat:"nations",sub:"Afrique",raw:`
Soumbeïla Diakité/G/Stade Malien/Mali/77
Djigui Diarra/G/Stade Malien/Mali/77
Oumar Sissoko/G/Metz/Mali/75
Mamadou Samassa/G/Guingamp/Mali/74
Ibrahim Mounkoro/G/TP Mazembe/Mali/74
Adama Coulibaly/DEF/Lens/Mali/79
Cédric Kanté/DEF/Nice/Mali/77
Drissa Diakité/DEF/Nice/Mali/76
Ousmane Coulibaly/DEF/Panathinaïkos/Mali/76
Molla Wagué/DEF/Udinese/Mali/75
Salif Coulibaly/DEF/TP Mazembe/Mali/75
Hamari Traoré/DEF/Rennes/Mali/78
Falaye Sacko/DEF/Vitória Guimarães/Mali/75
Youssouf Koné/DEF/Lille/Mali/75
Massadio Haïdara/DEF/Lens/Mali/75
Boubacar Kouyaté/DEF/Metz/Mali/75
Seydou Keita/MIL/Barcelone/Mali/89
Mahamadou Diarra/MIL/Lyon/Mali/88
Mohamed Sissoko/MIL/Liverpool/Mali/82
Bakaye Traoré/MIL/Nancy/Mali/77
Abdou Traoré/MIL/Bordeaux/Mali/76
Samba Diakité/MIL/QPR/Mali/75
Yves Bissouma/MIL/Brighton/Mali/82
Amadou Haidara/MIL/Leipzig/Mali/80
Diadie Samassékou/MIL/Salzbourg/Mali/77
Lassana Coulibaly/MIL/Salernitana/Mali/75
Sambou Yatabaré/MIL/Bastia/Mali/75
Salif Keïta/ATT/Saint-Étienne/Mali/92
Frédéric Kanouté/ATT/Séville/Mali/88
Cheick Diabaté/ATT/Bordeaux/Mali/79
Modibo Maïga/ATT/Sochaux/Mali/77
Dramane Traoré/ATT/Lokomotiv Moscou/Mali/76
Moussa Marega/ATT/Porto/Mali/80
Mustapha Yatabaré/ATT/Guingamp/Mali/76
Mamady Sidibé/ATT/Stoke/Mali/75
Kalifa Coulibaly/ATT/Nantes/Mali/75
El Bilal Touré/ATT/Almería/Mali/76
Jimmy Kébé/ATT/Reading/Mali/74`}
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
Zinédine Zidane/MIL/Real Madrid/France/98
Michel Platini/MIL/Juventus/France/97
Kylian Mbappé/ATT/PSG/France/94
Thierry Henry/ATT/Arsenal/France/95
Karim Benzema/ATT/Real Madrid/France/93
Antoine Griezmann/ATT/Atlético Madrid/France/91
Raymond Kopa/MIL/Reims/France/91
Just Fontaine/ATT/Reims/France/90
Lilian Thuram/DEF/Juventus/France/90
Franck Ribéry/ATT/Bayern/France/90
Marcel Desailly/DEF/Milan/France/89
Jean-Pierre Papin/ATT/Marseille/France/89
Patrick Vieira/MIL/Arsenal/France/89
N'Golo Kanté/MIL/Chelsea/France/88
Éric Cantona/ATT/Manchester United/France/88
Laurent Blanc/DEF/Montpellier/France/87
Bixente Lizarazu/DEF/Bayern/France/87
Raphaël Varane/DEF/Real Madrid/France/87
Alain Giresse/MIL/Bordeaux/France/87
Hugo Lloris/G/Tottenham/France/87
Didier Deschamps/MIL/Marseille/France/86
Claude Makélélé/MIL/Chelsea/France/86
Jean Tigana/MIL/Bordeaux/France/86
Paul Pogba/MIL/Juventus/France/86
David Trezeguet/ATT/Juventus/France/86
Fabien Barthez/G/Marseille/France/86
Robert Pirès/MIL/Arsenal/France/85
Marius Trésor/DEF/Bordeaux/France/84
Maxime Bossis/DEF/Nantes/France/84
Youri Djorkaeff/MIL/Inter/France/84
Mike Maignan/G/Milan/France/83
Dominique Rocheteau/ATT/Saint-Étienne/France/83
Joël Bats/G/PSG/France/82
Bernard Lama/G/PSG/France/81
Grégory Coupet/G/Lyon/France/80`},
{id:"bra",name:"Légendes du Brésil",cat:"nations",sub:"Amérique du Sud",raw:`
Pelé/ATT/Santos/Brésil/99
Ronaldo/ATT/Real Madrid/Brésil/97
Garrincha/ATT/Botafogo/Brésil/95
Ronaldinho/MIL/Barcelone/Brésil/94
Zico/MIL/Flamengo/Brésil/94
Romário/ATT/Vasco de Gama/Brésil/93
Neymar/ATT/Barcelone/Brésil/93
Cafu/DEF/Milan/Brésil/92
Roberto Carlos/DEF/Real Madrid/Brésil/92
Sócrates/MIL/Corinthians/Brésil/92
Rivaldo/MIL/Barcelone/Brésil/91
Kaká/MIL/Milan/Brésil/91
Carlos Alberto/DEF/Santos/Brésil/91
Rivellino/MIL/Corinthians/Brésil/91
Vinícius Júnior/ATT/Real Madrid/Brésil/91
Nílton Santos/DEF/Botafogo/Brésil/90
Didi/MIL/Botafogo/Brésil/90
Jairzinho/ATT/Botafogo/Brésil/90
Falcão/MIL/Roma/Brésil/89
Tostão/ATT/Cruzeiro/Brésil/89
Alisson/G/Liverpool/Brésil/89
Djalma Santos/DEF/Portuguesa/Brésil/88
Thiago Silva/DEF/PSG/Brésil/88
Dani Alves/DEF/Barcelone/Brésil/88
Gérson/MIL/Botafogo/Brésil/88
Leônidas/ATT/Flamengo/Brésil/88
Marcelo/DEF/Real Madrid/Brésil/87
Gilmar/G/Santos/Brésil/87
Bebeto/ATT/Deportivo La Corogne/Brésil/86
Casemiro/MIL/Real Madrid/Brésil/86
Júlio César/G/Inter/Brésil/86
Ederson/G/Manchester City/Brésil/86
Lúcio/DEF/Bayern/Brésil/85
Dida/G/Milan/Brésil/85
Adriano/ATT/Inter/Brésil/84
Dunga/MIL/Fiorentina/Brésil/84
Taffarel/G/Galatasaray/Brésil/84`},
{id:"arg",name:"Légendes de l'Argentine",cat:"nations",sub:"Amérique du Sud",raw:`
Lionel Messi/ATT/Barcelone/Argentine/99
Diego Maradona/ATT/Naples/Argentine/99
Alfredo Di Stéfano/ATT/Real Madrid/Argentine/95
Gabriel Batistuta/ATT/Fiorentina/Argentine/91
Omar Sívori/ATT/Juventus/Argentine/91
Mario Kempes/ATT/Valence/Argentine/90
Daniel Passarella/DEF/River Plate/Argentine/90
Javier Zanetti/DEF/Inter/Argentine/90
Juan Román Riquelme/MIL/Boca Juniors/Argentine/89
Sergio Agüero/ATT/Manchester City/Argentine/89
Ángel Di María/MIL/Real Madrid/Argentine/88
Ubaldo Fillol/G/River Plate/Argentine/88
Fernando Redondo/MIL/Real Madrid/Argentine/87
Lautaro Martínez/ATT/Inter/Argentine/87
Juan Sebastián Verón/MIL/Lazio/Argentine/86
Javier Mascherano/MIL/Barcelone/Argentine/86
Roberto Ayala/DEF/Valence/Argentine/86
Carlos Tevez/ATT/Boca Juniors/Argentine/86
Emiliano Martínez/G/Aston Villa/Argentine/86
Diego Simeone/MIL/Atlético Madrid/Argentine/85
Osvaldo Ardiles/MIL/Tottenham/Argentine/85
Walter Samuel/DEF/Inter/Argentine/85
Oscar Ruggeri/DEF/River Plate/Argentine/85
Roberto Perfumo/DEF/Racing Club/Argentine/85
Hernán Crespo/ATT/Parme/Argentine/85
Julián Álvarez/ATT/Atlético Madrid/Argentine/85
Jorge Burruchaga/MIL/Nantes/Argentine/84
Jorge Valdano/ATT/Real Madrid/Argentine/84
Gonzalo Higuaín/ATT/Real Madrid/Argentine/84
Cristian Romero/DEF/Tottenham/Argentine/83
Alexis Mac Allister/MIL/Liverpool/Argentine/83
Claudio Caniggia/ATT/Boca Juniors/Argentine/83
Nicolás Otamendi/DEF/Manchester City/Argentine/82
Enzo Fernández/MIL/Chelsea/Argentine/82
Sergio Goycochea/G/River Plate/Argentine/82
Nery Pumpido/G/River Plate/Argentine/80
Roberto Abbondanzieri/G/Boca Juniors/Argentine/80
Germán Burgos/G/Atlético Madrid/Argentine/77`},
{id:"ger",name:"Légendes de l'Allemagne",cat:"nations",sub:"Europe",raw:`
Franz Beckenbauer/DEF/Bayern/Allemagne/98
Gerd Müller/ATT/Bayern/Allemagne/96
Lothar Matthäus/MIL/Bayern/Allemagne/94
Manuel Neuer/G/Bayern/Allemagne/94
Oliver Kahn/G/Bayern/Allemagne/93
Sepp Maier/G/Bayern/Allemagne/92
Karl-Heinz Rummenigge/ATT/Bayern/Allemagne/91
Philipp Lahm/DEF/Bayern/Allemagne/91
Toni Kroos/MIL/Real Madrid/Allemagne/91
Miroslav Klose/ATT/Bayern/Allemagne/90
Uwe Seeler/ATT/Hambourg/Allemagne/90
Fritz Walter/MIL/Kaiserslautern/Allemagne/90
Matthias Sammer/DEF/Dortmund/Allemagne/90
Jürgen Klinsmann/ATT/Stuttgart/Allemagne/89
Michael Ballack/MIL/Bayern/Allemagne/89
Bastian Schweinsteiger/MIL/Bayern/Allemagne/89
Thomas Müller/ATT/Bayern/Allemagne/89
Günter Netzer/MIL/Mönchengladbach/Allemagne/88
Paul Breitner/DEF/Bayern/Allemagne/88
Rudi Völler/ATT/Roma/Allemagne/87
Andreas Brehme/DEF/Inter/Allemagne/87
Toni Schumacher/G/Cologne/Allemagne/87
Joshua Kimmich/MIL/Bayern/Allemagne/87
Helmut Rahn/ATT/Rot-Weiss Essen/Allemagne/86
Wolfgang Overath/MIL/Cologne/Allemagne/86
Mats Hummels/DEF/Dortmund/Allemagne/86
Mesut Özil/MIL/Arsenal/Allemagne/86
Jamal Musiala/MIL/Bayern/Allemagne/86
Marc-André ter Stegen/G/Barcelone/Allemagne/86
Berti Vogts/DEF/Mönchengladbach/Allemagne/85
Jürgen Kohler/DEF/Dortmund/Allemagne/85
Jérôme Boateng/DEF/Bayern/Allemagne/85
Antonio Rüdiger/DEF/Real Madrid/Allemagne/85
Bernd Schuster/MIL/Barcelone/Allemagne/85
Florian Wirtz/MIL/Leverkusen/Allemagne/85
Pierre Littbarski/ATT/Cologne/Allemagne/84
Jens Lehmann/G/Arsenal/Allemagne/83
Bodo Illgner/G/Cologne/Allemagne/82`},
{id:"ita",name:"Légendes de l'Italie",cat:"nations",sub:"Europe",raw:`
Paolo Maldini/DEF/Milan/Italie/97
Gianluigi Buffon/G/Juventus/Italie/96
Franco Baresi/DEF/Milan/Italie/95
Roberto Baggio/ATT/Juventus/Italie/95
Dino Zoff/G/Juventus/Italie/93
Andrea Pirlo/MIL/Milan/Italie/93
Giuseppe Meazza/ATT/Inter/Italie/93
Francesco Totti/ATT/Roma/Italie/93
Fabio Cannavaro/DEF/Parme/Italie/92
Giacinto Facchetti/DEF/Inter/Italie/92
Gianni Rivera/MIL/Milan/Italie/92
Alessandro Del Piero/ATT/Juventus/Italie/92
Gaetano Scirea/DEF/Juventus/Italie/91
Alessandro Nesta/DEF/Milan/Italie/91
Paolo Rossi/ATT/Juventus/Italie/91
Gigi Riva/ATT/Cagliari/Italie/91
Sandro Mazzola/MIL/Inter/Italie/89
Giorgio Chiellini/DEF/Juventus/Italie/88
Silvio Piola/ATT/Lazio/Italie/88
Gianluigi Donnarumma/G/PSG/Italie/88
Marco Tardelli/MIL/Juventus/Italie/87
Claudio Gentile/DEF/Juventus/Italie/86
Giuseppe Bergomi/DEF/Inter/Italie/86
Walter Zenga/G/Inter/Italie/86
Giancarlo Antognoni/MIL/Fiorentina/Italie/86
Daniele De Rossi/MIL/Roma/Italie/86
Gennaro Gattuso/MIL/Milan/Italie/86
Christian Vieri/ATT/Inter/Italie/86
Filippo Inzaghi/ATT/Milan/Italie/86
Gianluca Vialli/ATT/Sampdoria/Italie/86
Leonardo Bonucci/DEF/Juventus/Italie/85
Roberto Mancini/ATT/Sampdoria/Italie/85
Gianluca Zambrotta/DEF/Juventus/Italie/84
Demetrio Albertini/MIL/Milan/Italie/84
Marco Verratti/MIL/PSG/Italie/84
Angelo Peruzzi/G/Juventus/Italie/83
Francesco Toldo/G/Fiorentina/Italie/82`},
{id:"esp",name:"Légendes de l'Espagne",cat:"nations",sub:"Europe",raw:`
Andrés Iniesta/MIL/Barcelone/Espagne/96
Xavi/MIL/Barcelone/Espagne/95
Iker Casillas/G/Real Madrid/Espagne/94
Sergio Ramos/DEF/Real Madrid/Espagne/93
Raúl/ATT/Real Madrid/Espagne/92
Carles Puyol/DEF/Barcelone/Espagne/91
Paco Gento/ATT/Real Madrid/Espagne/91
Rodri/MIL/Manchester City/Espagne/91
Luis Suárez Miramontes/MIL/Barcelone/Espagne/90
Sergio Busquets/MIL/Barcelone/Espagne/90
László Kubala/ATT/Barcelone/Espagne/90
Lamine Yamal/ATT/Barcelone/Espagne/90
Fernando Hierro/DEF/Real Madrid/Espagne/89
Xabi Alonso/MIL/Real Madrid/Espagne/89
David Silva/MIL/Manchester City/Espagne/89
David Villa/ATT/Valence/Espagne/89
Gerard Piqué/DEF/Barcelone/Espagne/88
Ricardo Zamora/G/Espanyol/Espagne/88
Emilio Butragueño/ATT/Real Madrid/Espagne/88
Fernando Torres/ATT/Atlético Madrid/Espagne/88
Telmo Zarra/ATT/Athletic Bilbao/Espagne/88
Andoni Zubizarreta/G/Barcelone/Espagne/87
Pedri/MIL/Barcelone/Espagne/87
Cesc Fàbregas/MIL/Arsenal/Espagne/86
Pep Guardiola/MIL/Barcelone/Espagne/86
Luis Arconada/G/Real Sociedad/Espagne/85
David de Gea/G/Manchester United/Espagne/85
Jordi Alba/DEF/Barcelone/Espagne/85
Dani Carvajal/DEF/Real Madrid/Espagne/85
José Antonio Camacho/DEF/Real Madrid/Espagne/85
Míchel/MIL/Real Madrid/Espagne/84
Juanito/ATT/Real Madrid/Espagne/84
Rafael Gordillo/DEF/Betis/Espagne/83
Víctor Valdés/G/Barcelone/Espagne/83
Fernando Morientes/ATT/Real Madrid/Espagne/82
Míchel Salgado/DEF/Real Madrid/Espagne/80
Unai Simón/G/Athletic Bilbao/Espagne/80
Joan Capdevila/DEF/Villarreal/Espagne/79`},
{id:"eng",name:"Légendes de l'Angleterre",cat:"nations",sub:"Europe",raw:`
Bobby Charlton/MIL/Manchester United/Angleterre/95
Bobby Moore/DEF/West Ham/Angleterre/94
Gordon Banks/G/Leicester/Angleterre/93
Harry Kane/ATT/Tottenham/Angleterre/92
Stanley Matthews/ATT/Blackpool/Angleterre/92
Wayne Rooney/ATT/Manchester United/Angleterre/91
Steven Gerrard/MIL/Liverpool/Angleterre/91
Alan Shearer/ATT/Newcastle/Angleterre/90
Jimmy Greaves/ATT/Tottenham/Angleterre/90
Frank Lampard/MIL/Chelsea/Angleterre/90
Jude Bellingham/MIL/Real Madrid/Angleterre/90
Gary Lineker/ATT/Tottenham/Angleterre/89
Kevin Keegan/ATT/Liverpool/Angleterre/89
Tom Finney/ATT/Preston North End/Angleterre/89
Paul Scholes/MIL/Manchester United/Angleterre/89
David Beckham/MIL/Manchester United/Angleterre/89
Peter Shilton/G/Nottingham Forest/Angleterre/89
Geoff Hurst/ATT/West Ham/Angleterre/88
Michael Owen/ATT/Liverpool/Angleterre/88
Paul Gascoigne/MIL/Tottenham/Angleterre/88
Bryan Robson/MIL/Manchester United/Angleterre/88
John Terry/DEF/Chelsea/Angleterre/88
Rio Ferdinand/DEF/Manchester United/Angleterre/88
Billy Wright/DEF/Wolverhampton/Angleterre/88
Ashley Cole/DEF/Chelsea/Angleterre/87
Tony Adams/DEF/Arsenal/Angleterre/87
David Seaman/G/Arsenal/Angleterre/86
Ray Clemence/G/Liverpool/Angleterre/86
Bukayo Saka/ATT/Arsenal/Angleterre/86
Glenn Hoddle/MIL/Tottenham/Angleterre/85
Sol Campbell/DEF/Arsenal/Angleterre/85
Gary Neville/DEF/Manchester United/Angleterre/84
Stuart Pearce/DEF/Nottingham Forest/Angleterre/84
Declan Rice/MIL/Arsenal/Angleterre/84
Jordan Pickford/G/Everton/Angleterre/81
Joe Hart/G/Manchester City/Angleterre/80`},
{id:"ned",name:"Légendes des Pays-Bas",cat:"nations",sub:"Europe",raw:`
Johan Cruyff/ATT/Ajax/Pays-Bas/98
Marco van Basten/ATT/Milan/Pays-Bas/95
Ruud Gullit/MIL/Milan/Pays-Bas/93
Dennis Bergkamp/ATT/Arsenal/Pays-Bas/92
Frank Rijkaard/MIL/Milan/Pays-Bas/91
Arjen Robben/ATT/Bayern/Pays-Bas/91
Virgil van Dijk/DEF/Liverpool/Pays-Bas/91
Johan Neeskens/MIL/Ajax/Pays-Bas/90
Edwin van der Sar/G/Manchester United/Pays-Bas/90
Ronald Koeman/DEF/Barcelone/Pays-Bas/89
Ruud Krol/DEF/Ajax/Pays-Bas/89
Clarence Seedorf/MIL/Milan/Pays-Bas/89
Ruud van Nistelrooy/ATT/Manchester United/Pays-Bas/89
Robin van Persie/ATT/Arsenal/Pays-Bas/89
Wesley Sneijder/MIL/Inter/Pays-Bas/88
Edgar Davids/MIL/Juventus/Pays-Bas/87
Patrick Kluivert/ATT/Barcelone/Pays-Bas/87
Jaap Stam/DEF/Manchester United/Pays-Bas/87
Rob Rensenbrink/ATT/Anderlecht/Pays-Bas/87
Wim van Hanegem/MIL/Feyenoord/Pays-Bas/86
Frenkie de Jong/MIL/Barcelone/Pays-Bas/86
Frank de Boer/DEF/Ajax/Pays-Bas/85
Marc Overmars/ATT/Arsenal/Pays-Bas/85
Johnny Rep/ATT/Ajax/Pays-Bas/84
Phillip Cocu/MIL/PSV/Pays-Bas/84
Hans van Breukelen/G/PSV/Pays-Bas/84
Memphis Depay/ATT/Lyon/Pays-Bas/83
Rafael van der Vaart/MIL/Ajax/Pays-Bas/82
Wim Jansen/MIL/Feyenoord/Pays-Bas/82
Matthijs de Ligt/DEF/Ajax/Pays-Bas/82
Giovanni van Bronckhorst/DEF/Barcelone/Pays-Bas/82
Dirk Kuyt/ATT/Liverpool/Pays-Bas/82
Cody Gakpo/ATT/Liverpool/Pays-Bas/82
Maarten Stekelenburg/G/Ajax/Pays-Bas/80
Jasper Cillessen/G/Ajax/Pays-Bas/78
Piet Schrijvers/G/Ajax/Pays-Bas/78
Tim Krul/G/Newcastle/Pays-Bas/77`},
{id:"por",name:"Légendes du Portugal",cat:"nations",sub:"Europe",raw:`
Cristiano Ronaldo/ATT/Real Madrid/Portugal/99
Eusébio/ATT/Benfica/Portugal/96
Luís Figo/MIL/Barcelone/Portugal/93
Rui Costa/MIL/Fiorentina/Portugal/89
Mário Coluna/MIL/Benfica/Portugal/89
Bernardo Silva/MIL/Manchester City/Portugal/89
Deco/MIL/Porto/Portugal/88
Pepe/DEF/Real Madrid/Portugal/88
Rúben Dias/DEF/Manchester City/Portugal/88
Bruno Fernandes/MIL/Manchester United/Portugal/88
Ricardo Carvalho/DEF/Chelsea/Portugal/87
Vitinha/MIL/PSG/Portugal/87
Paulo Futre/ATT/Atlético Madrid/Portugal/86
Fernando Gomes/ATT/Porto/Portugal/86
Vítor Baía/G/Porto/Portugal/86
Nuno Mendes/DEF/PSG/Portugal/86
José Augusto/ATT/Benfica/Portugal/85
Humberto Coelho/DEF/Benfica/Portugal/85
João Cancelo/DEF/Manchester City/Portugal/85
Rafael Leão/ATT/Milan/Portugal/85
Fernando Chalana/MIL/Benfica/Portugal/84
Costa Pereira/G/Benfica/Portugal/84
Diogo Costa/G/Porto/Portugal/84
António Simões/ATT/Benfica/Portugal/83
Pauleta/ATT/PSG/Portugal/83
Fernando Couto/DEF/Lazio/Portugal/83
Rui Patrício/G/Sporting/Portugal/83
Manuel Bento/G/Benfica/Portugal/83
Rui Jordão/ATT/Sporting/Portugal/82
João Moutinho/MIL/Porto/Portugal/82
João Félix/ATT/Atlético Madrid/Portugal/82
Ricardo Quaresma/ATT/Porto/Portugal/82
Nuno Gomes/ATT/Benfica/Portugal/81
Nani/ATT/Manchester United/Portugal/81
Ricardo/G/Sporting/Portugal/81
Paulo Ferreira/DEF/Chelsea/Portugal/80`},
{id:"bel",name:"Légendes de la Belgique",cat:"nations",sub:"Europe",raw:`
Kevin De Bruyne/MIL/Manchester City/Belgique/94
Thibaut Courtois/G/Real Madrid/Belgique/92
Eden Hazard/ATT/Chelsea/Belgique/91
Paul Van Himst/ATT/Anderlecht/Belgique/91
Jan Ceulemans/MIL/Club Bruges/Belgique/89
Jean-Marie Pfaff/G/Bayern/Belgique/89
Vincent Kompany/DEF/Manchester City/Belgique/89
Enzo Scifo/MIL/Anderlecht/Belgique/88
Michel Preud'homme/G/Benfica/Belgique/87
Eric Gerets/DEF/Standard Liège/Belgique/87
Romelu Lukaku/ATT/Inter/Belgique/87
Dries Mertens/ATT/Naples/Belgique/86
Jan Vertonghen/DEF/Tottenham/Belgique/85
Toby Alderweireld/DEF/Tottenham/Belgique/84
Marc Wilmots/MIL/Schalke/Belgique/84
Wilfried Van Moer/MIL/Standard Liège/Belgique/84
Raoul Lambert/ATT/Club Bruges/Belgique/84
Mousa Dembélé/MIL/Tottenham/Belgique/83
Erwin Vandenbergh/ATT/Anderlecht/Belgique/83
Franky Van der Elst/MIL/Club Bruges/Belgique/82
Axel Witsel/MIL/Dortmund/Belgique/82
Luc Nilis/ATT/PSV/Belgique/82
Jérémy Doku/ATT/Manchester City/Belgique/81
Yannick Carrasco/ATT/Atlético Madrid/Belgique/81
Thomas Vermaelen/DEF/Arsenal/Belgique/80
Georges Grün/DEF/Anderlecht/Belgique/80
Philippe Albert/DEF/Newcastle/Belgique/80
Marouane Fellaini/MIL/Manchester United/Belgique/80
Youri Tielemans/MIL/Leicester/Belgique/80
Simon Mignolet/G/Club Bruges/Belgique/80
Thomas Meunier/DEF/PSG/Belgique/79
Émile Mpenza/ATT/Standard Liège/Belgique/79
Filip De Wilde/G/Anderlecht/Belgique/78
Koen Casteels/G/Wolfsburg/Belgique/77`},
{id:"uru",name:"Légendes de l'Uruguay",cat:"nations",sub:"Amérique du Sud",raw:`
Luis Suárez/ATT/Barcelone/Uruguay/94
Juan Alberto Schiaffino/MIL/Peñarol/Uruguay/92
Obdulio Varela/MIL/Peñarol/Uruguay/91
José Nasazzi/DEF/Nacional/Uruguay/90
José Leandro Andrade/MIL/Nacional/Uruguay/90
Enzo Francescoli/ATT/River Plate/Uruguay/90
Ladislao Mazurkiewicz/G/Peñarol/Uruguay/90
Alcides Ghiggia/ATT/Peñarol/Uruguay/89
Héctor Scarone/ATT/Nacional/Uruguay/89
Edinson Cavani/ATT/PSG/Uruguay/89
Diego Godín/DEF/Atlético Madrid/Uruguay/89
Federico Valverde/MIL/Real Madrid/Uruguay/89
Diego Forlán/ATT/Atlético Madrid/Uruguay/88
Fernando Morena/ATT/Peñarol/Uruguay/87
Pedro Cea/ATT/Nacional/Uruguay/86
Roque Máspoli/G/Peñarol/Uruguay/86
Paolo Montero/DEF/Juventus/Uruguay/85
Pedro Petrone/ATT/Nacional/Uruguay/85
Víctor Rodríguez Andrade/DEF/Peñarol/Uruguay/84
Hugo de León/DEF/Nacional/Uruguay/84
José María Giménez/DEF/Atlético Madrid/Uruguay/84
Álvaro Recoba/MIL/Inter/Uruguay/84
Fernando Muslera/G/Galatasaray/Uruguay/84
Ronald Araújo/DEF/Barcelone/Uruguay/83
Rubén Sosa/ATT/Inter/Uruguay/83
Darwin Núñez/ATT/Liverpool/Uruguay/83
Diego Lugano/DEF/Fenerbahçe/Uruguay/82
Rodolfo Rodríguez/G/Nacional/Uruguay/82
Rodrigo Bentancur/MIL/Juventus/Uruguay/81
Martín Cáceres/DEF/Juventus/Uruguay/78
Diego Pérez/MIL/Monaco/Uruguay/78
Sergio Rochet/G/Nacional/Uruguay/78
Fernando Álvez/G/Peñarol/Uruguay/78
Egidio Arévalo Ríos/MIL/Peñarol/Uruguay/77`},
{id:"cro",name:"Légendes de la Croatie",cat:"nations",sub:"Europe",raw:`
Luka Modrić/MIL/Real Madrid/Croatie/95
Davor Šuker/ATT/Séville/Croatie/90
Zvonimir Boban/MIL/Milan/Croatie/89
Robert Prosinečki/MIL/Étoile Rouge de Belgrade/Croatie/88
Ivan Rakitić/MIL/Barcelone/Croatie/88
Mario Mandžukić/ATT/Bayern/Croatie/86
Joško Gvardiol/DEF/Manchester City/Croatie/86
Alen Bokšić/ATT/Lazio/Croatie/85
Ivan Perišić/ATT/Inter/Croatie/85
Mateo Kovačić/MIL/Chelsea/Croatie/84
Marcelo Brozović/MIL/Inter/Croatie/84
Darijo Srna/DEF/Shakhtar Donetsk/Croatie/84
Danijel Subašić/G/Monaco/Croatie/84
Dominik Livaković/G/Dinamo Zagreb/Croatie/83
Robert Jarni/DEF/Betis/Croatie/82
Niko Kovač/MIL/Bayern/Croatie/82
Dražen Ladić/G/Dinamo Zagreb/Croatie/82
Igor Štimac/DEF/Hajduk Split/Croatie/81
Dario Šimić/DEF/Milan/Croatie/81
Dejan Lovren/DEF/Liverpool/Croatie/81
Aljoša Asanović/MIL/Hajduk Split/Croatie/81
Ivica Olić/ATT/Bayern/Croatie/81
Andrej Kramarić/ATT/Hoffenheim/Croatie/81
Stipe Pletikosa/G/Hajduk Split/Croatie/81
Slaven Bilić/DEF/West Ham/Croatie/80
Josip Šimunić/DEF/Hertha Berlin/Croatie/80
Mario Stanić/MIL/Parme/Croatie/80
Goran Vlaović/ATT/Valence/Croatie/80
Domagoj Vida/DEF/Dynamo Kiev/Croatie/79
Vedran Ćorluka/DEF/Tottenham/Croatie/79
Niko Kranjčar/MIL/Dinamo Zagreb/Croatie/79
Eduardo da Silva/ATT/Arsenal/Croatie/79
Ante Rebić/ATT/Eintracht Francfort/Croatie/79
Vedran Runje/G/Lens/Croatie/78
Tomislav Butina/G/Club Bruges/Croatie/76`},
{id:"mex",name:"Légendes du Mexique",cat:"nations",sub:"Amérique du Nord",raw:`
Hugo Sánchez/ATT/Real Madrid/Mexique/92
Rafael Márquez/DEF/Barcelone/Mexique/89
Cuauhtémoc Blanco/ATT/Club América/Mexique/87
Jorge Campos/G/Pumas UNAM/Mexique/86
Guillermo Ochoa/G/Club América/Mexique/85
Antonio Carbajal/G/León/Mexique/84
Javier Hernández/ATT/Manchester United/Mexique/84
Claudio Suárez/DEF/Pumas UNAM/Mexique/84
Andrés Guardado/MIL/Betis/Mexique/83
Oswaldo Sánchez/G/Guadalajara/Mexique/82
Jared Borgetti/ATT/Santos Laguna/Mexique/82
Hirving Lozano/ATT/PSV/Mexique/82
Carlos Vela/ATT/Real Sociedad/Mexique/82
Manuel Negrete/MIL/Pumas UNAM/Mexique/81
Luis Hernández/ATT/Necaxa/Mexique/81
Raúl Jiménez/ATT/Wolverhampton/Mexique/81
Pável Pardo/MIL/Club América/Mexique/80
Ramón Ramírez/DEF/Guadalajara/Mexique/80
Carlos Salcido/DEF/PSV/Mexique/80
Héctor Herrera/MIL/Porto/Mexique/80
Edson Álvarez/MIL/Ajax/Mexique/80
Alberto García Aspe/MIL/Pumas UNAM/Mexique/80
Tomás Boy/MIL/Tigres UANL/Mexique/80
Carlos Hermosillo/ATT/Cruz Azul/Mexique/80
Enrique Borja/ATT/Club América/Mexique/80
Horacio Casarín/ATT/Necaxa/Mexique/80
Gerardo Torrado/MIL/Cruz Azul/Mexique/79
Pablo Larios/G/Cruz Azul/Mexique/79
Luis García/ATT/Pumas UNAM/Mexique/79
Héctor Moreno/DEF/PSV/Mexique/78
Javier Aguirre/MIL/Club América/Mexique/78
Adolfo Ríos/G/Club América/Mexique/78
Ricardo Osorio/DEF/Stuttgart/Mexique/77
Duilio Davino/DEF/Club América/Mexique/77`}
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
Lev Yachine/G/Dynamo Moscou/URSS/92
Gianluigi Buffon/G/Juventus/Italie/91
Manuel Neuer/G/Bayern/Allemagne/90
Oliver Kahn/G/Bayern/Allemagne/89
Iker Casillas/G/Real Madrid/Espagne/89
Franz Beckenbauer/DEF/Bayern/Allemagne/96
Fabio Cannavaro/DEF/Juventus/Italie/90
Matthias Sammer/DEF/Dortmund/Allemagne/88
Paolo Maldini/DEF/Milan/Italie/94
Franco Baresi/DEF/Milan/Italie/92
Virgil van Dijk/DEF/Liverpool/Pays-Bas/89
Michel Platini/MIL/Juventus/France/95
Zinédine Zidane/MIL/Real Madrid/France/97
Kaká/MIL/Milan/Brésil/91
Luka Modrić/MIL/Real Madrid/Croatie/91
Rodri/MIL/Manchester City/Espagne/89
Ruud Gullit/MIL/Milan/Pays-Bas/91
Lothar Matthäus/MIL/Bayern/Allemagne/92
Pavel Nedvěd/MIL/Juventus/Tchéquie/89
Luís Figo/MIL/Barcelone/Portugal/90
Bobby Charlton/MIL/Manchester United/Angleterre/92
Gianni Rivera/MIL/Milan/Italie/89
Josef Masopust/MIL/Dukla Prague/Tchécoslovaquie/86
Lionel Messi/ATT/Barcelone/Argentine/99
Cristiano Ronaldo/ATT/Real Madrid/Portugal/98
Ronaldo/ATT/Inter/Brésil/96
Johan Cruyff/ATT/Ajax/Pays-Bas/97
Marco van Basten/ATT/Milan/Pays-Bas/94
Alfredo Di Stéfano/ATT/Real Madrid/Argentine/96
Eusébio/ATT/Benfica/Portugal/93
Gerd Müller/ATT/Bayern/Allemagne/94
Ronaldinho/ATT/Barcelone/Brésil/93
George Weah/ATT/Milan/Liberia/88
Roberto Baggio/ATT/Juventus/Italie/91
Karim Benzema/ATT/Real Madrid/France/90
Ousmane Dembélé/ATT/PSG/France/89
Andriy Shevchenko/ATT/Milan/Ukraine/89
Rivaldo/ATT/Barcelone/Brésil/89
Raymond Kopa/ATT/Reims/France/88
George Best/ATT/Manchester United/Irlande du Nord/92`},
{id:"heros_cdm",name:"Héros de Coupe du monde",cat:"themes",sub:"Ils ont fait basculer un Mondial",raw:`
Gordon Banks/G/Leicester City/Angleterre/89
Dino Zoff/G/Juventus/Italie/89
Gianluigi Buffon/G/Juventus/Italie/91
Iker Casillas/G/Real Madrid/Espagne/90
Emiliano Martínez/G/Aston Villa/Argentine/86
Fabien Barthez/G/Monaco/France/86
Fabio Cannavaro/DEF/Juventus/Italie/91
Franz Beckenbauer/DEF/Bayern/Allemagne/95
Lilian Thuram/DEF/Parme/France/89
Bobby Moore/DEF/West Ham/Angleterre/91
Daniel Passarella/DEF/River Plate/Argentine/88
Cafu/DEF/Roma/Brésil/89
Philipp Lahm/DEF/Bayern/Allemagne/89
Carles Puyol/DEF/Barcelone/Espagne/88
Andreas Brehme/DEF/Inter/Allemagne/86
Zinédine Zidane/MIL/Juventus/France/96
Andrés Iniesta/MIL/Barcelone/Espagne/92
Bobby Charlton/MIL/Manchester United/Angleterre/91
Didier Deschamps/MIL/Juventus/France/86
Paul Pogba/MIL/Manchester United/France/85
Lothar Matthäus/MIL/Inter/Allemagne/91
Mario Götze/MIL/Bayern/Allemagne/84
Andrea Pirlo/MIL/Milan/Italie/90
Luka Modrić/MIL/Real Madrid/Croatie/90
Pelé/ATT/Santos/Brésil/99
Diego Maradona/ATT/Napoli/Argentine/98
Ronaldo/ATT/Inter/Brésil/95
Miroslav Klose/ATT/Bayern/Allemagne/89
Gerd Müller/ATT/Bayern/Allemagne/92
Just Fontaine/ATT/Reims/France/88
Paolo Rossi/ATT/Juventus/Italie/89
Mario Kempes/ATT/Valence/Argentine/88
Geoff Hurst/ATT/West Ham/Angleterre/86
Lionel Messi/ATT/Barcelone/Argentine/97
Kylian Mbappé/ATT/PSG/France/93
Garrincha/ATT/Botafogo/Brésil/92
Romário/ATT/Barcelone/Brésil/91
Eusébio/ATT/Benfica/Portugal/91
Davor Šuker/ATT/Real Madrid/Croatie/86
David Villa/ATT/Valence/Espagne/87`},
{id:"heros_ldc",name:"Héros de Ligue des champions",cat:"themes",sub:"Les rois des soirées européennes",raw:`
Oliver Kahn/G/Bayern/Allemagne/89
Jerzy Dudek/G/Liverpool/Pologne/82
Iker Casillas/G/Real Madrid/Espagne/90
Edwin van der Sar/G/Manchester United/Pays-Bas/88
Petr Čech/G/Chelsea/Tchéquie/88
Thibaut Courtois/G/Real Madrid/Belgique/89
Paolo Maldini/DEF/Milan/Italie/94
Sergio Ramos/DEF/Real Madrid/Espagne/92
Carles Puyol/DEF/Barcelone/Espagne/89
Franco Baresi/DEF/Milan/Italie/91
Dani Alves/DEF/Barcelone/Brésil/88
Marcelo/DEF/Real Madrid/Brésil/88
Virgil van Dijk/DEF/Liverpool/Pays-Bas/89
Javier Zanetti/DEF/Inter/Argentine/87
Zinédine Zidane/MIL/Real Madrid/France/95
Steven Gerrard/MIL/Liverpool/Angleterre/90
Andrés Iniesta/MIL/Barcelone/Espagne/92
Xavi/MIL/Barcelone/Espagne/92
Luka Modrić/MIL/Real Madrid/Croatie/91
Clarence Seedorf/MIL/Milan/Pays-Bas/89
Kaká/MIL/Milan/Brésil/90
Toni Kroos/MIL/Real Madrid/Allemagne/90
Rodri/MIL/Manchester City/Espagne/88
Cristiano Ronaldo/ATT/Real Madrid/Portugal/99
Lionel Messi/ATT/Barcelone/Argentine/98
Karim Benzema/ATT/Real Madrid/France/92
Alfredo Di Stéfano/ATT/Real Madrid/Argentine/95
Ferenc Puskás/ATT/Real Madrid/Hongrie/94
Gareth Bale/ATT/Real Madrid/Pays de Galles/88
Didier Drogba/ATT/Chelsea/Côte d'Ivoire/88
Ole Gunnar Solskjær/ATT/Manchester United/Norvège/83
Andriy Shevchenko/ATT/Milan/Ukraine/89
Raúl/ATT/Real Madrid/Espagne/90
Vinícius Júnior/ATT/Real Madrid/Brésil/90
Diego Milito/ATT/Inter/Argentine/84
Samuel Eto'o/ATT/Barcelone/Cameroun/89
Ousmane Dembélé/ATT/PSG/France/89
Kingsley Coman/ATT/Bayern/France/83`},
{id:"leg_pl",name:"Légendes de Premier League",cat:"themes",sub:"Les monstres du championnat anglais",raw:`
Peter Schmeichel/G/Manchester United/Danemark/90
Petr Čech/G/Chelsea/Tchéquie/89
David Seaman/G/Arsenal/Angleterre/86
Edwin van der Sar/G/Manchester United/Pays-Bas/87
Alisson/G/Liverpool/Brésil/88
Ederson/G/Manchester City/Brésil/86
John Terry/DEF/Chelsea/Angleterre/89
Rio Ferdinand/DEF/Manchester United/Angleterre/88
Vincent Kompany/DEF/Manchester City/Belgique/87
Ashley Cole/DEF/Chelsea/Angleterre/86
Gary Neville/DEF/Manchester United/Angleterre/84
Tony Adams/DEF/Arsenal/Angleterre/86
Virgil van Dijk/DEF/Liverpool/Pays-Bas/90
Nemanja Vidić/DEF/Manchester United/Serbie/87
Sol Campbell/DEF/Arsenal/Angleterre/85
Jamie Carragher/DEF/Liverpool/Angleterre/84
Steven Gerrard/MIL/Liverpool/Angleterre/91
Frank Lampard/MIL/Chelsea/Angleterre/90
Paul Scholes/MIL/Manchester United/Angleterre/89
Ryan Giggs/MIL/Manchester United/Pays de Galles/89
Patrick Vieira/MIL/Arsenal/France/89
Roy Keane/MIL/Manchester United/Irlande/88
Kevin De Bruyne/MIL/Manchester City/Belgique/92
David Silva/MIL/Manchester City/Espagne/89
Cesc Fàbregas/MIL/Arsenal/Espagne/87
Yaya Touré/MIL/Manchester City/Côte d'Ivoire/87
Alan Shearer/ATT/Newcastle/Angleterre/92
Thierry Henry/ATT/Arsenal/France/95
Wayne Rooney/ATT/Manchester United/Angleterre/91
Cristiano Ronaldo/ATT/Manchester United/Portugal/94
Mohamed Salah/ATT/Liverpool/Égypte/93
Sergio Agüero/ATT/Manchester City/Argentine/92
Didier Drogba/ATT/Chelsea/Côte d'Ivoire/89
Harry Kane/ATT/Tottenham/Angleterre/91
Dennis Bergkamp/ATT/Arsenal/Pays-Bas/90
Eric Cantona/ATT/Manchester United/France/90
Erling Haaland/ATT/Manchester City/Norvège/92
Robin van Persie/ATT/Arsenal/Pays-Bas/87
Luis Suárez/ATT/Liverpool/Uruguay/89`},
{id:"leg_liga",name:"Légendes de Liga",cat:"themes",sub:"Les géants du championnat espagnol",raw:`
Iker Casillas/G/Real Madrid/Espagne/91
Andoni Zubizarreta/G/Barcelone/Espagne/86
Víctor Valdés/G/Barcelone/Espagne/85
Jan Oblak/G/Atlético de Madrid/Slovénie/89
Thibaut Courtois/G/Real Madrid/Belgique/89
Marc-André ter Stegen/G/Barcelone/Allemagne/87
Sergio Ramos/DEF/Real Madrid/Espagne/92
Carles Puyol/DEF/Barcelone/Espagne/89
Fernando Hierro/DEF/Real Madrid/Espagne/88
Roberto Carlos/DEF/Real Madrid/Brésil/90
Gerard Piqué/DEF/Barcelone/Espagne/88
Dani Alves/DEF/Barcelone/Brésil/88
Marcelo/DEF/Real Madrid/Brésil/88
Diego Godín/DEF/Atlético de Madrid/Uruguay/86
Ronald Koeman/DEF/Barcelone/Pays-Bas/87
Xavi/MIL/Barcelone/Espagne/93
Andrés Iniesta/MIL/Barcelone/Espagne/93
Luka Modrić/MIL/Real Madrid/Croatie/91
Toni Kroos/MIL/Real Madrid/Allemagne/90
Sergio Busquets/MIL/Barcelone/Espagne/88
Zinédine Zidane/MIL/Real Madrid/France/94
Luís Figo/MIL/Barcelone/Portugal/90
Koke/MIL/Atlético de Madrid/Espagne/85
Michael Laudrup/MIL/Barcelone/Danemark/88
Lionel Messi/ATT/Barcelone/Argentine/99
Cristiano Ronaldo/ATT/Real Madrid/Portugal/98
Alfredo Di Stéfano/ATT/Real Madrid/Argentine/96
Raúl/ATT/Real Madrid/Espagne/91
Karim Benzema/ATT/Real Madrid/France/91
Telmo Zarra/ATT/Athletic Bilbao/Espagne/88
Hugo Sánchez/ATT/Real Madrid/Mexique/89
Ronaldo/ATT/Real Madrid/Brésil/93
Ronaldinho/ATT/Barcelone/Brésil/93
Ferenc Puskás/ATT/Real Madrid/Hongrie/94
Antoine Griezmann/ATT/Atlético de Madrid/France/88
Luis Suárez/ATT/Barcelone/Uruguay/90
Samuel Eto'o/ATT/Barcelone/Cameroun/89
David Villa/ATT/Valence/Espagne/87
Johan Cruyff/ATT/Barcelone/Pays-Bas/95`},
{id:"leg_seriea",name:"Légendes de Serie A",cat:"themes",sub:"Les maîtres du Calcio",raw:`
Gianluigi Buffon/G/Juventus/Italie/93
Dino Zoff/G/Juventus/Italie/90
Walter Zenga/G/Inter/Italie/87
Gianluca Pagliuca/G/Sampdoria/Italie/84
Francesco Toldo/G/Fiorentina/Italie/84
Samir Handanović/G/Inter/Slovénie/85
Paolo Maldini/DEF/Milan/Italie/95
Franco Baresi/DEF/Milan/Italie/93
Alessandro Nesta/DEF/Milan/Italie/90
Fabio Cannavaro/DEF/Parme/Italie/90
Giorgio Chiellini/DEF/Juventus/Italie/88
Javier Zanetti/DEF/Inter/Argentine/88
Giuseppe Bergomi/DEF/Inter/Italie/86
Gaetano Scirea/DEF/Juventus/Italie/89
Andrea Pirlo/MIL/Milan/Italie/91
Michel Platini/MIL/Juventus/France/94
Pavel Nedvěd/MIL/Juventus/Tchéquie/89
Clarence Seedorf/MIL/Milan/Pays-Bas/88
Gennaro Gattuso/MIL/Milan/Italie/85
Kaká/MIL/Milan/Brésil/91
Gianni Rivera/MIL/Milan/Italie/90
Daniele De Rossi/MIL/Roma/Italie/85
Zinédine Zidane/MIL/Juventus/France/94
Ruud Gullit/MIL/Milan/Pays-Bas/91
Lothar Matthäus/MIL/Inter/Allemagne/90
Diego Maradona/ATT/Napoli/Argentine/98
Francesco Totti/ATT/Roma/Italie/92
Roberto Baggio/ATT/Juventus/Italie/93
Marco van Basten/ATT/Milan/Pays-Bas/95
Silvio Piola/ATT/Lazio/Italie/88
Gunnar Nordahl/ATT/Milan/Suède/89
Giuseppe Meazza/ATT/Inter/Italie/90
Alessandro Del Piero/ATT/Juventus/Italie/91
Andriy Shevchenko/ATT/Milan/Ukraine/90
Gabriel Batistuta/ATT/Fiorentina/Argentine/90
Ronaldo/ATT/Inter/Brésil/94
Zlatan Ibrahimović/ATT/Milan/Suède/89
Luigi Riva/ATT/Cagliari/Italie/88
Antonio Di Natale/ATT/Udinese/Italie/84`},
{id:"leg_bundesliga",name:"Légendes de Bundesliga",cat:"themes",sub:"Les légendes du championnat allemand",raw:`
Sepp Maier/G/Bayern/Allemagne/89
Oliver Kahn/G/Bayern/Allemagne/90
Manuel Neuer/G/Bayern/Allemagne/91
Toni Schumacher/G/Cologne/Allemagne/85
Roman Weidenfeller/G/Dortmund/Allemagne/80
Jens Lehmann/G/Schalke/Allemagne/83
Franz Beckenbauer/DEF/Bayern/Allemagne/96
Philipp Lahm/DEF/Bayern/Allemagne/90
Paul Breitner/DEF/Bayern/Allemagne/88
Matthias Sammer/DEF/Dortmund/Allemagne/88
Jürgen Kohler/DEF/Dortmund/Allemagne/85
Mats Hummels/DEF/Dortmund/Allemagne/86
Jérôme Boateng/DEF/Bayern/Allemagne/85
David Alaba/DEF/Bayern/Autriche/86
Berti Vogts/DEF/Mönchengladbach/Allemagne/85
Hans-Georg Schwarzenbeck/DEF/Bayern/Allemagne/82
Lothar Matthäus/MIL/Bayern/Allemagne/92
Günter Netzer/MIL/Mönchengladbach/Allemagne/88
Bastian Schweinsteiger/MIL/Bayern/Allemagne/89
Michael Ballack/MIL/Bayer Leverkusen/Allemagne/88
Felix Magath/MIL/Hambourg/Allemagne/83
Wolfgang Overath/MIL/Cologne/Allemagne/86
Marco Reus/MIL/Dortmund/Allemagne/86
Joshua Kimmich/MIL/Bayern/Allemagne/88
Gerd Müller/ATT/Bayern/Allemagne/97
Robert Lewandowski/ATT/Bayern/Pologne/95
Jupp Heynckes/ATT/Mönchengladbach/Allemagne/87
Klaus Fischer/ATT/Schalke/Allemagne/86
Karl-Heinz Rummenigge/ATT/Bayern/Allemagne/91
Uwe Seeler/ATT/Hambourg/Allemagne/89
Thomas Müller/ATT/Bayern/Allemagne/89
Franck Ribéry/ATT/Bayern/France/90
Arjen Robben/ATT/Bayern/Pays-Bas/90
Claudio Pizarro/ATT/Werder Brême/Pérou/84
Harry Kane/ATT/Bayern/Angleterre/91
Erling Haaland/ATT/Dortmund/Norvège/89
Rudi Völler/ATT/Werder Brême/Allemagne/85`},
{id:"leg_ligue1",name:"Légendes de Ligue 1",cat:"themes",sub:"Les grands noms du championnat de France",raw:`
Grégory Coupet/G/Lyon/France/85
Steve Mandanda/G/Marseille/France/84
Bernard Lama/G/PSG/France/84
Fabien Barthez/G/Monaco/France/85
Hugo Lloris/G/Lyon/France/84
Joël Bats/G/PSG/France/82
Marius Trésor/DEF/Bordeaux/France/86
Basile Boli/DEF/Marseille/France/84
Marcel Desailly/DEF/Nantes/France/86
Thiago Silva/DEF/PSG/Brésil/89
Marquinhos/DEF/PSG/Brésil/87
Laurent Blanc/DEF/Montpellier/France/85
Manuel Amoros/DEF/Monaco/France/84
Patrick Battiston/DEF/Bordeaux/France/83
Michel Platini/MIL/Saint-Étienne/France/93
Jean Tigana/MIL/Bordeaux/France/87
Alain Giresse/MIL/Bordeaux/France/87
Juninho/MIL/Lyon/Brésil/88
Raí/MIL/PSG/Brésil/86
Zinédine Zidane/MIL/Bordeaux/France/90
Didier Deschamps/MIL/Marseille/France/85
Abedi Pelé/MIL/Marseille/Ghana/87
Chris Waddle/MIL/Marseille/Angleterre/86
Safet Sušić/MIL/PSG/Yougoslavie/87
Jean-Pierre Papin/ATT/Marseille/France/91
Zlatan Ibrahimović/ATT/PSG/Suède/91
Kylian Mbappé/ATT/PSG/France/94
Delio Onnis/ATT/Monaco/Argentine/87
Josip Skoblar/ATT/Marseille/Yougoslavie/87
Carlos Bianchi/ATT/Reims/Argentine/87
Just Fontaine/ATT/Reims/France/88
Raymond Kopa/ATT/Reims/France/90
Didier Drogba/ATT/Marseille/Côte d'Ivoire/85
Edinson Cavani/ATT/PSG/Uruguay/89
George Weah/ATT/PSG/Liberia/87
Karim Benzema/ATT/Lyon/France/86
Sonny Anderson/ATT/Lyon/Brésil/86
Pauleta/ATT/PSG/Portugal/85
Hervé Revelli/ATT/Saint-Étienne/France/85`},
{id:"clasico",name:"Le Clasico",cat:"themes",sub:"Real Madrid contre Barcelone",raw:`
Iker Casillas/G/Real Madrid/Espagne/91
Thibaut Courtois/G/Real Madrid/Belgique/89
Ricardo Zamora/G/Real Madrid/Espagne/87
Víctor Valdés/G/Barcelone/Espagne/85
Andoni Zubizarreta/G/Barcelone/Espagne/86
Marc-André ter Stegen/G/Barcelone/Allemagne/87
Sergio Ramos/DEF/Real Madrid/Espagne/92
Fernando Hierro/DEF/Real Madrid/Espagne/88
Roberto Carlos/DEF/Real Madrid/Brésil/90
Marcelo/DEF/Real Madrid/Brésil/88
Carles Puyol/DEF/Barcelone/Espagne/89
Gerard Piqué/DEF/Barcelone/Espagne/88
Dani Alves/DEF/Barcelone/Brésil/88
Ronald Koeman/DEF/Barcelone/Pays-Bas/87
Zinédine Zidane/MIL/Real Madrid/France/95
Luka Modrić/MIL/Real Madrid/Croatie/91
Toni Kroos/MIL/Real Madrid/Allemagne/90
Fernando Redondo/MIL/Real Madrid/Argentine/87
Xavi/MIL/Barcelone/Espagne/93
Andrés Iniesta/MIL/Barcelone/Espagne/93
Sergio Busquets/MIL/Barcelone/Espagne/88
Pep Guardiola/MIL/Barcelone/Espagne/86
Luís Figo/MIL/Barcelone/Portugal/90
Alfredo Di Stéfano/ATT/Real Madrid/Argentine/96
Cristiano Ronaldo/ATT/Real Madrid/Portugal/98
Raúl/ATT/Real Madrid/Espagne/91
Karim Benzema/ATT/Real Madrid/France/91
Ferenc Puskás/ATT/Real Madrid/Hongrie/94
Hugo Sánchez/ATT/Real Madrid/Mexique/89
Paco Gento/ATT/Real Madrid/Espagne/90
Vinícius Júnior/ATT/Real Madrid/Brésil/90
Lionel Messi/ATT/Barcelone/Argentine/99
Johan Cruyff/ATT/Barcelone/Pays-Bas/95
Ronaldinho/ATT/Barcelone/Brésil/93
László Kubala/ATT/Barcelone/Hongrie/90
Rivaldo/ATT/Barcelone/Brésil/90
Neymar/ATT/Barcelone/Brésil/91
Luis Suárez/ATT/Barcelone/Uruguay/90
Samuel Eto'o/ATT/Barcelone/Cameroun/89`},
{id:"classique",name:"Le Classique PSG-OM",cat:"themes",sub:"Paris contre Marseille",raw:`
Bernard Lama/G/PSG/France/85
Keylor Navas/G/PSG/Costa Rica/85
Gianluigi Donnarumma/G/PSG/Italie/87
Steve Mandanda/G/Marseille/France/85
Fabien Barthez/G/Marseille/France/86
Joseph-Antoine Bell/G/Marseille/Cameroun/83
Thiago Silva/DEF/PSG/Brésil/89
Marquinhos/DEF/PSG/Brésil/88
Ricardo Gomes/DEF/PSG/Brésil/84
Maxwell/DEF/PSG/Brésil/82
Achraf Hakimi/DEF/PSG/Maroc/88
Basile Boli/DEF/Marseille/France/85
Marcel Desailly/DEF/Marseille/France/87
Éric Di Meco/DEF/Marseille/France/82
Manuel Amoros/DEF/Marseille/France/84
Carlos Mozer/DEF/Marseille/Brésil/84
Raí/MIL/PSG/Brésil/87
Safet Sušić/MIL/PSG/Yougoslavie/87
Luis Fernandez/MIL/PSG/France/84
Marco Verratti/MIL/PSG/Italie/87
Didier Deschamps/MIL/Marseille/France/86
Abedi Pelé/MIL/Marseille/Ghana/88
Chris Waddle/MIL/Marseille/Angleterre/87
Franck Sauzée/MIL/Marseille/France/83
Dimitri Payet/MIL/Marseille/France/85
Zlatan Ibrahimović/ATT/PSG/Suède/91
Kylian Mbappé/ATT/PSG/France/94
Edinson Cavani/ATT/PSG/Uruguay/89
Pauleta/ATT/PSG/Portugal/85
George Weah/ATT/PSG/Liberia/88
Neymar/ATT/PSG/Brésil/91
Dominique Rocheteau/ATT/PSG/France/84
Jean-Pierre Papin/ATT/Marseille/France/91
Didier Drogba/ATT/Marseille/Côte d'Ivoire/86
Josip Skoblar/ATT/Marseille/Yougoslavie/87
Rudi Völler/ATT/Marseille/Allemagne/86
Mamadou Niang/ATT/Marseille/Sénégal/82
Alen Bokšić/ATT/Marseille/Croatie/84
Roger Magnusson/ATT/Marseille/Suède/83`},
{id:"derby_manchester",name:"Derby de Manchester",cat:"themes",sub:"United contre City",raw:`
Peter Schmeichel/G/Manchester United/Danemark/90
Edwin van der Sar/G/Manchester United/Pays-Bas/87
David de Gea/G/Manchester United/Espagne/86
Bert Trautmann/G/Manchester City/Allemagne/86
Joe Corrigan/G/Manchester City/Angleterre/82
Ederson/G/Manchester City/Brésil/86
Rio Ferdinand/DEF/Manchester United/Angleterre/88
Nemanja Vidić/DEF/Manchester United/Serbie/87
Gary Neville/DEF/Manchester United/Angleterre/84
Patrice Evra/DEF/Manchester United/France/84
Denis Irwin/DEF/Manchester United/Irlande/83
Vincent Kompany/DEF/Manchester City/Belgique/87
Pablo Zabaleta/DEF/Manchester City/Argentine/82
Kyle Walker/DEF/Manchester City/Angleterre/84
Rúben Dias/DEF/Manchester City/Portugal/87
Bobby Charlton/MIL/Manchester United/Angleterre/93
Paul Scholes/MIL/Manchester United/Angleterre/89
Ryan Giggs/MIL/Manchester United/Pays de Galles/89
Roy Keane/MIL/Manchester United/Irlande/88
Bryan Robson/MIL/Manchester United/Angleterre/87
David Beckham/MIL/Manchester United/Angleterre/88
Kevin De Bruyne/MIL/Manchester City/Belgique/92
David Silva/MIL/Manchester City/Espagne/89
Yaya Touré/MIL/Manchester City/Côte d'Ivoire/87
Rodri/MIL/Manchester City/Espagne/90
Colin Bell/MIL/Manchester City/Angleterre/85
Bernardo Silva/MIL/Manchester City/Portugal/87
George Best/ATT/Manchester United/Irlande du Nord/93
Denis Law/ATT/Manchester United/Écosse/90
Eric Cantona/ATT/Manchester United/France/90
Wayne Rooney/ATT/Manchester United/Angleterre/91
Cristiano Ronaldo/ATT/Manchester United/Portugal/95
Ruud van Nistelrooy/ATT/Manchester United/Pays-Bas/88
Sergio Agüero/ATT/Manchester City/Argentine/92
Erling Haaland/ATT/Manchester City/Norvège/92
Francis Lee/ATT/Manchester City/Angleterre/84
Phil Foden/ATT/Manchester City/Angleterre/87
Raheem Sterling/ATT/Manchester City/Angleterre/85
Carlos Tevez/ATT/Manchester City/Argentine/85`},
{id:"derby_milan",name:"Derby de Milan",cat:"themes",sub:"Le Milan contre l'Inter",raw:`
Dida/G/Milan/Brésil/86
Sebastiano Rossi/G/Milan/Italie/83
Mike Maignan/G/Milan/France/86
Walter Zenga/G/Inter/Italie/87
Júlio César/G/Inter/Brésil/87
Francesco Toldo/G/Inter/Italie/84
Paolo Maldini/DEF/Milan/Italie/95
Franco Baresi/DEF/Milan/Italie/93
Alessandro Nesta/DEF/Milan/Italie/90
Mauro Tassotti/DEF/Milan/Italie/84
Javier Zanetti/DEF/Inter/Argentine/89
Giacinto Facchetti/DEF/Inter/Italie/90
Giuseppe Bergomi/DEF/Inter/Italie/86
Lúcio/DEF/Inter/Brésil/86
Gianni Rivera/MIL/Milan/Italie/91
Andrea Pirlo/MIL/Milan/Italie/91
Clarence Seedorf/MIL/Milan/Pays-Bas/88
Gennaro Gattuso/MIL/Milan/Italie/85
Kaká/MIL/Milan/Brésil/92
Ruud Gullit/MIL/Milan/Pays-Bas/92
Frank Rijkaard/MIL/Milan/Pays-Bas/89
Lothar Matthäus/MIL/Inter/Allemagne/91
Wesley Sneijder/MIL/Inter/Pays-Bas/87
Esteban Cambiasso/MIL/Inter/Argentine/84
Sandro Mazzola/MIL/Inter/Italie/89
Luis Suárez Miramontes/MIL/Inter/Espagne/89
Nicolò Barella/MIL/Inter/Italie/86
Marco van Basten/ATT/Milan/Pays-Bas/96
Andriy Shevchenko/ATT/Milan/Ukraine/91
Gunnar Nordahl/ATT/Milan/Suède/90
George Weah/ATT/Milan/Liberia/89
Filippo Inzaghi/ATT/Milan/Italie/86
Zlatan Ibrahimović/ATT/Milan/Suède/89
Giuseppe Meazza/ATT/Inter/Italie/91
Ronaldo/ATT/Inter/Brésil/95
Diego Milito/ATT/Inter/Argentine/85
Christian Vieri/ATT/Inter/Italie/87
Lautaro Martínez/ATT/Inter/Argentine/88
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
