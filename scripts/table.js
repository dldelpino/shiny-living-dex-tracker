const pokemonData = [
  {
      "id": 1,
      "name": "Bulbasaur",
      "id_string": "1"
  },
  {
      "id": 2,
      "name": "Ivysaur",
      "id_string": "2"
  },
  {
      "id": 3,
      "name": "Venusaur",
      "id_string": "3"
  },
  {
      "id": 4,
      "name": "Charmander",
      "id_string": "4"
  },
  {
      "id": 5,
      "name": "Charmeleon",
      "id_string": "5"
  },
  {
      "id": 6,
      "name": "Charizard",
      "id_string": "6"
  },
  {
      "id": 7,
      "name": "Squirtle",
      "id_string": "7"
  },
  {
      "id": 8,
      "name": "Wartortle",
      "id_string": "8"
  },
  {
      "id": 9,
      "name": "Blastoise",
      "id_string": "9"
  },
  {
      "id": 10,
      "name": "Caterpie",
      "id_string": "10"
  },
  {
      "id": 11,
      "name": "Metapod",
      "id_string": "11"
  },
  {
      "id": 12,
      "name": "Butterfree",
      "id_string": "12"
  },
  {
      "id": 13,
      "name": "Weedle",
      "id_string": "13"
  },
  {
      "id": 14,
      "name": "Kakuna",
      "id_string": "14"
  },
  {
      "id": 15,
      "name": "Beedrill",
      "id_string": "15"
  },
  {
      "id": 16,
      "name": "Pidgey",
      "id_string": "16"
  },
  {
      "id": 17,
      "name": "Pidgeotto",
      "id_string": "17"
  },
  {
      "id": 18,
      "name": "Pidgeot",
      "id_string": "18"
  },
  {
      "id": 19,
      "name": "Rattata",
      "id_string": "19"
  },
  {
      "id": 19,
      "name": "Rattata",
      "id_string": "19_alola"
  },
  {
      "id": 20,
      "name": "Raticate",
      "id_string": "20"
  },
  {
      "id": 20,
      "name": "Raticate",
      "id_string": "20_alola"
  },
  {
      "id": 21,
      "name": "Spearow",
      "id_string": "21"
  },
  {
      "id": 22,
      "name": "Fearow",
      "id_string": "22"
  },
  {
      "id": 23,
      "name": "Ekans",
      "id_string": "23"
  },
  {
      "id": 24,
      "name": "Arbok",
      "id_string": "24"
  },
  {
      "id": 25,
      "name": "Pikachu",
      "id_string": "25"
  },
  {
      "id": 26,
      "name": "Raichu",
      "id_string": "26"
  },
  {
      "id": 26,
      "name": "Raichu",
      "id_string": "26_alola"
  },
  {
      "id": 27,
      "name": "Sandshrew",
      "id_string": "27"
  },
  {
      "id": 27,
      "name": "Sandshrew",
      "id_string": "27_alola"
  },
  {
      "id": 28,
      "name": "Sandslash",
      "id_string": "28"
  },
  {
      "id": 28,
      "name": "Sandslash",
      "id_string": "28_alola"
  },
  {
      "id": 29,
      "name": "Nidoran♀",
      "id_string": "29"
  },
  {
      "id": 30,
      "name": "Nidorina",
      "id_string": "30"
  },
  {
      "id": 31,
      "name": "Nidoqueen",
      "id_string": "31"
  },
  {
      "id": 32,
      "name": "Nidoran♂",
      "id_string": "32"
  },
  {
      "id": 33,
      "name": "Nidorino",
      "id_string": "33"
  },
  {
      "id": 34,
      "name": "Nidoking",
      "id_string": "34"
  },
  {
      "id": 35,
      "name": "Clefairy",
      "id_string": "35"
  },
  {
      "id": 36,
      "name": "Clefable",
      "id_string": "36"
  },
  {
      "id": 37,
      "name": "Vulpix",
      "id_string": "37"
  },
  {
      "id": 37,
      "name": "Vulpix",
      "id_string": "37_alola"
  },
  {
      "id": 38,
      "name": "Ninetales",
      "id_string": "38"
  },
  {
      "id": 38,
      "name": "Ninetales",
      "id_string": "38_alola"
  },
  {
      "id": 39,
      "name": "Jigglypuff",
      "id_string": "39"
  },
  {
      "id": 40,
      "name": "Wigglytuff",
      "id_string": "40"
  },
  {
      "id": 41,
      "name": "Zubat",
      "id_string": "41"
  },
  {
      "id": 42,
      "name": "Golbat",
      "id_string": "42"
  },
  {
      "id": 43,
      "name": "Oddish",
      "id_string": "43"
  },
  {
      "id": 44,
      "name": "Gloom",
      "id_string": "44"
  },
  {
      "id": 45,
      "name": "Vileplume",
      "id_string": "45"
  },
  {
      "id": 46,
      "name": "Paras",
      "id_string": "46"
  },
  {
      "id": 47,
      "name": "Parasect",
      "id_string": "47"
  },
  {
      "id": 48,
      "name": "Venonat",
      "id_string": "48"
  },
  {
      "id": 49,
      "name": "Venomoth",
      "id_string": "49"
  },
  {
      "id": 50,
      "name": "Diglett",
      "id_string": "50"
  },
  {
      "id": 50,
      "name": "Diglett",
      "id_string": "50_alola"
  },
  {
      "id": 51,
      "name": "Dugtrio",
      "id_string": "51"
  },
  {
      "id": 51,
      "name": "Dugtrio",
      "id_string": "51_alola"
  },
  {
      "id": 52,
      "name": "Meowth",
      "id_string": "52"
  },
  {
      "id": 52,
      "name": "Meowth",
      "id_string": "52_alola"
  },
  {
      "id": 52,
      "name": "Meowth",
      "id_string": "52_galar"
  },
  {
      "id": 53,
      "name": "Persian",
      "id_string": "53"
  },
  {
      "id": 53,
      "name": "Persian",
      "id_string": "53_alola"
  },
  {
      "id": 54,
      "name": "Psyduck",
      "id_string": "54"
  },
  {
      "id": 55,
      "name": "Golduck",
      "id_string": "55"
  },
  {
      "id": 56,
      "name": "Mankey",
      "id_string": "56"
  },
  {
      "id": 57,
      "name": "Primeape",
      "id_string": "57"
  },
  {
      "id": 58,
      "name": "Growlithe",
      "id_string": "58"
  },
  {
      "id": 58,
      "name": "Growlithe",
      "id_string": "58_hisui"
  },
  {
      "id": 59,
      "name": "Arcanine",
      "id_string": "59"
  },
  {
      "id": 59,
      "name": "Arcanine",
      "id_string": "59_hisui"
  },
  {
      "id": 60,
      "name": "Poliwag",
      "id_string": "60"
  },
  {
      "id": 61,
      "name": "Poliwhirl",
      "id_string": "61"
  },
  {
      "id": 62,
      "name": "Poliwrath",
      "id_string": "62"
  },
  {
      "id": 63,
      "name": "Abra",
      "id_string": "63"
  },
  {
      "id": 64,
      "name": "Kadabra",
      "id_string": "64"
  },
  {
      "id": 65,
      "name": "Alakazam",
      "id_string": "65"
  },
  {
      "id": 66,
      "name": "Machop",
      "id_string": "66"
  },
  {
      "id": 67,
      "name": "Machoke",
      "id_string": "67"
  },
  {
      "id": 68,
      "name": "Machamp",
      "id_string": "68"
  },
  {
      "id": 69,
      "name": "Bellsprout",
      "id_string": "69"
  },
  {
      "id": 70,
      "name": "Weepinbell",
      "id_string": "70"
  },
  {
      "id": 71,
      "name": "Victreebel",
      "id_string": "71"
  },
  {
      "id": 72,
      "name": "Tentacool",
      "id_string": "72"
  },
  {
      "id": 73,
      "name": "Tentacruel",
      "id_string": "73"
  },
  {
      "id": 74,
      "name": "Geodude",
      "id_string": "74"
  },
  {
      "id": 74,
      "name": "Geodude",
      "id_string": "74_alola"
  },
  {
      "id": 75,
      "name": "Graveler",
      "id_string": "75"
  },
  {
      "id": 75,
      "name": "Graveler",
      "id_string": "75_alola"
  },
  {
      "id": 76,
      "name": "Golem",
      "id_string": "76"
  },
  {
      "id": 76,
      "name": "Golem",
      "id_string": "76_alola"
  },
  {
      "id": 77,
      "name": "Ponyta",
      "id_string": "77"
  },
  {
      "id": 77,
      "name": "Ponyta",
      "id_string": "77_galar"
  },
  {
      "id": 78,
      "name": "Rapidash",
      "id_string": "78"
  },
  {
      "id": 78,
      "name": "Rapidash",
      "id_string": "78_galar"
  },
  {
      "id": 79,
      "name": "Slowpoke",
      "id_string": "79"
  },
  {
      "id": 79,
      "name": "Slowpoke",
      "id_string": "79_galar"
  },
  {
      "id": 80,
      "name": "Slowbro",
      "id_string": "80"
  },
  {
      "id": 80,
      "name": "Slowbro",
      "id_string": "80_galar"
  },
  {
      "id": 81,
      "name": "Magnemite",
      "id_string": "81"
  },
  {
      "id": 82,
      "name": "Magneton",
      "id_string": "82"
  },
  {
      "id": 83,
      "name": "Farfetch’d",
      "id_string": "83"
  },
  {
      "id": 83,
      "name": "Farfetch’d",
      "id_string": "83_galar"
  },
  {
      "id": 84,
      "name": "Doduo",
      "id_string": "84"
  },
  {
      "id": 85,
      "name": "Dodrio",
      "id_string": "85"
  },
  {
      "id": 86,
      "name": "Seel",
      "id_string": "86"
  },
  {
      "id": 87,
      "name": "Dewgong",
      "id_string": "87"
  },
  {
      "id": 88,
      "name": "Grimer",
      "id_string": "88"
  },
  {
      "id": 88,
      "name": "Grimer",
      "id_string": "88_alola"
  },
  {
      "id": 89,
      "name": "Muk",
      "id_string": "89"
  },
  {
      "id": 89,
      "name": "Muk",
      "id_string": "89_alola"
  },
  {
      "id": 90,
      "name": "Shellder",
      "id_string": "90"
  },
  {
      "id": 91,
      "name": "Cloyster",
      "id_string": "91"
  },
  {
      "id": 92,
      "name": "Gastly",
      "id_string": "92"
  },
  {
      "id": 93,
      "name": "Haunter",
      "id_string": "93"
  },
  {
      "id": 94,
      "name": "Gengar",
      "id_string": "94"
  },
  {
      "id": 95,
      "name": "Onix",
      "id_string": "95"
  },
  {
      "id": 96,
      "name": "Drowzee",
      "id_string": "96"
  },
  {
      "id": 97,
      "name": "Hypno",
      "id_string": "97"
  },
  {
      "id": 98,
      "name": "Krabby",
      "id_string": "98"
  },
  {
      "id": 99,
      "name": "Kingler",
      "id_string": "99"
  },
  {
      "id": 100,
      "name": "Voltorb",
      "id_string": "100"
  },
  {
      "id": 100,
      "name": "Voltorb",
      "id_string": "100_hisui"
  },
  {
      "id": 101,
      "name": "Electrode",
      "id_string": "101"
  },
  {
      "id": 101,
      "name": "Electrode",
      "id_string": "101_hisui"
  },
  {
      "id": 102,
      "name": "Exeggcute",
      "id_string": "102"
  },
  {
      "id": 103,
      "name": "Exeggutor",
      "id_string": "103"
  },
  {
      "id": 103,
      "name": "Exeggutor",
      "id_string": "103_alola"
  },
  {
      "id": 104,
      "name": "Cubone",
      "id_string": "104"
  },
  {
      "id": 105,
      "name": "Marowak",
      "id_string": "105"
  },
  {
      "id": 105,
      "name": "Marowak",
      "id_string": "105_alola"
  },
  {
      "id": 106,
      "name": "Hitmonlee",
      "id_string": "106"
  },
  {
      "id": 107,
      "name": "Hitmonchan",
      "id_string": "107"
  },
  {
      "id": 108,
      "name": "Lickitung",
      "id_string": "108"
  },
  {
      "id": 109,
      "name": "Koffing",
      "id_string": "109"
  },
  {
      "id": 110,
      "name": "Weezing",
      "id_string": "110"
  },
  {
      "id": 110,
      "name": "Weezing",
      "id_string": "110_galar"
  },
  {
      "id": 111,
      "name": "Rhyhorn",
      "id_string": "111"
  },
  {
      "id": 112,
      "name": "Rhydon",
      "id_string": "112"
  },
  {
      "id": 113,
      "name": "Chansey",
      "id_string": "113"
  },
  {
      "id": 114,
      "name": "Tangela",
      "id_string": "114"
  },
  {
      "id": 115,
      "name": "Kangaskhan",
      "id_string": "115"
  },
  {
      "id": 116,
      "name": "Horsea",
      "id_string": "116"
  },
  {
      "id": 117,
      "name": "Seadra",
      "id_string": "117"
  },
  {
      "id": 118,
      "name": "Goldeen",
      "id_string": "118"
  },
  {
      "id": 119,
      "name": "Seaking",
      "id_string": "119"
  },
  {
      "id": 120,
      "name": "Staryu",
      "id_string": "120"
  },
  {
      "id": 121,
      "name": "Starmie",
      "id_string": "121"
  },
  {
      "id": 122,
      "name": "Mr. Mime",
      "id_string": "122"
  },
  {
      "id": 122,
      "name": "Mr. Mime",
      "id_string": "122_galar"
  },
  {
      "id": 123,
      "name": "Scyther",
      "id_string": "123"
  },
  {
      "id": 124,
      "name": "Jynx",
      "id_string": "124"
  },
  {
      "id": 125,
      "name": "Electabuzz",
      "id_string": "125"
  },
  {
      "id": 126,
      "name": "Magmar",
      "id_string": "126"
  },
  {
      "id": 127,
      "name": "Pinsir",
      "id_string": "127"
  },
  {
      "id": 128,
      "name": "Tauros",
      "id_string": "128"
  },
  {
      "id": 128,
      "name": "Tauros",
      "id_string": "128_paldea_combat"
  },
  {
      "id": 128,
      "name": "Tauros",
      "id_string": "128_paldea_aqua"
  },
  {
      "id": 128,
      "name": "Tauros",
      "id_string": "128_paldea_blaze"
  },
  {
      "id": 129,
      "name": "Magikarp",
      "id_string": "129"
  },
  {
      "id": 130,
      "name": "Gyarados",
      "id_string": "130"
  },
  {
      "id": 131,
      "name": "Lapras",
      "id_string": "131"
  },
  {
      "id": 132,
      "name": "Ditto",
      "id_string": "132"
  },
  {
      "id": 133,
      "name": "Eevee",
      "id_string": "133"
  },
  {
      "id": 134,
      "name": "Vaporeon",
      "id_string": "134"
  },
  {
      "id": 135,
      "name": "Jolteon",
      "id_string": "135"
  },
  {
      "id": 136,
      "name": "Flareon",
      "id_string": "136"
  },
  {
      "id": 137,
      "name": "Porygon",
      "id_string": "137"
  },
  {
      "id": 138,
      "name": "Omanyte",
      "id_string": "138"
  },
  {
      "id": 139,
      "name": "Omastar",
      "id_string": "139"
  },
  {
      "id": 140,
      "name": "Kabuto",
      "id_string": "140"
  },
  {
      "id": 141,
      "name": "Kabutops",
      "id_string": "141"
  },
  {
      "id": 142,
      "name": "Aerodactyl",
      "id_string": "142"
  },
  {
      "id": 143,
      "name": "Snorlax",
      "id_string": "143"
  },
  {
      "id": 144,
      "name": "Articuno",
      "id_string": "144"
  },
  {
      "id": 144,
      "name": "Articuno",
      "id_string": "144_galar"
  },
  {
      "id": 145,
      "name": "Zapdos",
      "id_string": "145"
  },
  {
      "id": 145,
      "name": "Zapdos",
      "id_string": "145_galar"
  },
  {
      "id": 146,
      "name": "Moltres",
      "id_string": "146"
  },
  {
      "id": 146,
      "name": "Moltres",
      "id_string": "146_galar"
  },
  {
      "id": 147,
      "name": "Dratini",
      "id_string": "147"
  },
  {
      "id": 148,
      "name": "Dragonair",
      "id_string": "148"
  },
  {
      "id": 149,
      "name": "Dragonite",
      "id_string": "149"
  },
  {
      "id": 150,
      "name": "Mewtwo",
      "id_string": "150"
  },
  {
      "id": 151,
      "name": "Mew",
      "id_string": "151"
  },
  {
      "id": 152,
      "name": "Chikorita",
      "id_string": "152"
  },
  {
      "id": 153,
      "name": "Bayleef",
      "id_string": "153"
  },
  {
      "id": 154,
      "name": "Meganium",
      "id_string": "154"
  },
  {
      "id": 155,
      "name": "Cyndaquil",
      "id_string": "155"
  },
  {
      "id": 156,
      "name": "Quilava",
      "id_string": "156"
  },
  {
      "id": 157,
      "name": "Typhlosion",
      "id_string": "157"
  },
  {
      "id": 157,
      "name": "Typhlosion",
      "id_string": "157_hisui"
  },
  {
      "id": 158,
      "name": "Totodile",
      "id_string": "158"
  },
  {
      "id": 159,
      "name": "Croconaw",
      "id_string": "159"
  },
  {
      "id": 160,
      "name": "Feraligatr",
      "id_string": "160"
  },
  {
      "id": 161,
      "name": "Sentret",
      "id_string": "161"
  },
  {
      "id": 162,
      "name": "Furret",
      "id_string": "162"
  },
  {
      "id": 163,
      "name": "Hoothoot",
      "id_string": "163"
  },
  {
      "id": 164,
      "name": "Noctowl",
      "id_string": "164"
  },
  {
      "id": 165,
      "name": "Ledyba",
      "id_string": "165"
  },
  {
      "id": 166,
      "name": "Ledian",
      "id_string": "166"
  },
  {
      "id": 167,
      "name": "Spinarak",
      "id_string": "167"
  },
  {
      "id": 168,
      "name": "Ariados",
      "id_string": "168"
  },
  {
      "id": 169,
      "name": "Crobat",
      "id_string": "169"
  },
  {
      "id": 170,
      "name": "Chinchou",
      "id_string": "170"
  },
  {
      "id": 171,
      "name": "Lanturn",
      "id_string": "171"
  },
  {
      "id": 172,
      "name": "Pichu",
      "id_string": "172"
  },
  {
      "id": 173,
      "name": "Cleffa",
      "id_string": "173"
  },
  {
      "id": 174,
      "name": "Igglybuff",
      "id_string": "174"
  },
  {
      "id": 175,
      "name": "Togepi",
      "id_string": "175"
  },
  {
      "id": 176,
      "name": "Togetic",
      "id_string": "176"
  },
  {
      "id": 177,
      "name": "Natu",
      "id_string": "177"
  },
  {
      "id": 178,
      "name": "Xatu",
      "id_string": "178"
  },
  {
      "id": 179,
      "name": "Mareep",
      "id_string": "179"
  },
  {
      "id": 180,
      "name": "Flaaffy",
      "id_string": "180"
  },
  {
      "id": 181,
      "name": "Ampharos",
      "id_string": "181"
  },
  {
      "id": 182,
      "name": "Bellossom",
      "id_string": "182"
  },
  {
      "id": 183,
      "name": "Marill",
      "id_string": "183"
  },
  {
      "id": 184,
      "name": "Azumarill",
      "id_string": "184"
  },
  {
      "id": 185,
      "name": "Sudowoodo",
      "id_string": "185"
  },
  {
      "id": 186,
      "name": "Politoed",
      "id_string": "186"
  },
  {
      "id": 187,
      "name": "Hoppip",
      "id_string": "187"
  },
  {
      "id": 188,
      "name": "Skiploom",
      "id_string": "188"
  },
  {
      "id": 189,
      "name": "Jumpluff",
      "id_string": "189"
  },
  {
      "id": 190,
      "name": "Aipom",
      "id_string": "190"
  },
  {
      "id": 191,
      "name": "Sunkern",
      "id_string": "191"
  },
  {
      "id": 192,
      "name": "Sunflora",
      "id_string": "192"
  },
  {
      "id": 193,
      "name": "Yanma",
      "id_string": "193"
  },
  {
      "id": 194,
      "name": "Wooper",
      "id_string": "194"
  },
  {
      "id": 194,
      "name": "Wooper",
      "id_string": "194_paldea"
  },
  {
      "id": 195,
      "name": "Quagsire",
      "id_string": "195"
  },
  {
      "id": 196,
      "name": "Espeon",
      "id_string": "196"
  },
  {
      "id": 197,
      "name": "Umbreon",
      "id_string": "197"
  },
  {
      "id": 198,
      "name": "Murkrow",
      "id_string": "198"
  },
  {
      "id": 199,
      "name": "Slowking",
      "id_string": "199"
  },
  {
      "id": 199,
      "name": "Slowking",
      "id_string": "199_galar"
  },
  {
      "id": 200,
      "name": "Misdreavus",
      "id_string": "200"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_a"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_b"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_c"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_d"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_e"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_f"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_g"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_h"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_i"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_j"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_k"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_l"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_m"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_n"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_o"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_p"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_q"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_r"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_s"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_t"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_u"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_v"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_w"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_x"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_y"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_z"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_1"
  },
  {
      "id": 201,
      "name": "Unown",
      "id_string": "201_2"
  },
  {
      "id": 202,
      "name": "Wobbuffet",
      "id_string": "202"
  },
  {
      "id": 203,
      "name": "Girafarig",
      "id_string": "203"
  },
  {
      "id": 204,
      "name": "Pineco",
      "id_string": "204"
  },
  {
      "id": 205,
      "name": "Forretress",
      "id_string": "205"
  },
  {
      "id": 206,
      "name": "Dunsparce",
      "id_string": "206"
  },
  {
      "id": 207,
      "name": "Gligar",
      "id_string": "207"
  },
  {
      "id": 208,
      "name": "Steelix",
      "id_string": "208"
  },
  {
      "id": 209,
      "name": "Snubbull",
      "id_string": "209"
  },
  {
      "id": 210,
      "name": "Granbull",
      "id_string": "210"
  },
  {
      "id": 211,
      "name": "Qwilfish",
      "id_string": "211"
  },
  {
      "id": 211,
      "name": "Qwilfish",
      "id_string": "211_hisui"
  },
  {
      "id": 212,
      "name": "Scizor",
      "id_string": "212"
  },
  {
      "id": 213,
      "name": "Shuckle",
      "id_string": "213"
  },
  {
      "id": 214,
      "name": "Heracross",
      "id_string": "214"
  },
  {
      "id": 215,
      "name": "Sneasel",
      "id_string": "215"
  },
  {
      "id": 215,
      "name": "Sneasel",
      "id_string": "215_hisui"
  },
  {
      "id": 216,
      "name": "Teddiursa",
      "id_string": "216"
  },
  {
      "id": 217,
      "name": "Ursaring",
      "id_string": "217"
  },
  {
      "id": 218,
      "name": "Slugma",
      "id_string": "218"
  },
  {
      "id": 219,
      "name": "Magcargo",
      "id_string": "219"
  },
  {
      "id": 220,
      "name": "Swinub",
      "id_string": "220"
  },
  {
      "id": 221,
      "name": "Piloswine",
      "id_string": "221"
  },
  {
      "id": 222,
      "name": "Corsola",
      "id_string": "222"
  },
  {
      "id": 222,
      "name": "Corsola",
      "id_string": "222_galar"
  },
  {
      "id": 223,
      "name": "Remoraid",
      "id_string": "223"
  },
  {
      "id": 224,
      "name": "Octillery",
      "id_string": "224"
  },
  {
      "id": 225,
      "name": "Delibird",
      "id_string": "225"
  },
  {
      "id": 226,
      "name": "Mantine",
      "id_string": "226"
  },
  {
      "id": 227,
      "name": "Skarmory",
      "id_string": "227"
  },
  {
      "id": 228,
      "name": "Houndour",
      "id_string": "228"
  },
  {
      "id": 229,
      "name": "Houndoom",
      "id_string": "229"
  },
  {
      "id": 230,
      "name": "Kingdra",
      "id_string": "230"
  },
  {
      "id": 231,
      "name": "Phanpy",
      "id_string": "231"
  },
  {
      "id": 232,
      "name": "Donphan",
      "id_string": "232"
  },
  {
      "id": 233,
      "name": "Porygon2",
      "id_string": "233"
  },
  {
      "id": 234,
      "name": "Stantler",
      "id_string": "234"
  },
  {
      "id": 235,
      "name": "Smeargle",
      "id_string": "235"
  },
  {
      "id": 236,
      "name": "Tyrogue",
      "id_string": "236"
  },
  {
      "id": 237,
      "name": "Hitmontop",
      "id_string": "237"
  },
  {
      "id": 238,
      "name": "Smoochum",
      "id_string": "238"
  },
  {
      "id": 239,
      "name": "Elekid",
      "id_string": "239"
  },
  {
      "id": 240,
      "name": "Magby",
      "id_string": "240"
  },
  {
      "id": 241,
      "name": "Miltank",
      "id_string": "241"
  },
  {
      "id": 242,
      "name": "Blissey",
      "id_string": "242"
  },
  {
      "id": 243,
      "name": "Raikou",
      "id_string": "243"
  },
  {
      "id": 244,
      "name": "Entei",
      "id_string": "244"
  },
  {
      "id": 245,
      "name": "Suicune",
      "id_string": "245"
  },
  {
      "id": 246,
      "name": "Larvitar",
      "id_string": "246"
  },
  {
      "id": 247,
      "name": "Pupitar",
      "id_string": "247"
  },
  {
      "id": 248,
      "name": "Tyranitar",
      "id_string": "248"
  },
  {
      "id": 249,
      "name": "Lugia",
      "id_string": "249"
  },
  {
      "id": 250,
      "name": "Ho-Oh",
      "id_string": "250"
  },
  {
      "id": 251,
      "name": "Celebi",
      "id_string": "251"
  },
  {
      "id": 252,
      "name": "Treecko",
      "id_string": "252"
  },
  {
      "id": 253,
      "name": "Grovyle",
      "id_string": "253"
  },
  {
      "id": 254,
      "name": "Sceptile",
      "id_string": "254"
  },
  {
      "id": 255,
      "name": "Torchic",
      "id_string": "255"
  },
  {
      "id": 256,
      "name": "Combusken",
      "id_string": "256"
  },
  {
      "id": 257,
      "name": "Blaziken",
      "id_string": "257"
  },
  {
      "id": 258,
      "name": "Mudkip",
      "id_string": "258"
  },
  {
      "id": 259,
      "name": "Marshtomp",
      "id_string": "259"
  },
  {
      "id": 260,
      "name": "Swampert",
      "id_string": "260"
  },
  {
      "id": 261,
      "name": "Poochyena",
      "id_string": "261"
  },
  {
      "id": 262,
      "name": "Mightyena",
      "id_string": "262"
  },
  {
      "id": 263,
      "name": "Zigzagoon",
      "id_string": "263"
  },
  {
      "id": 263,
      "name": "Zigzagoon",
      "id_string": "263_galar"
  },
  {
      "id": 264,
      "name": "Linoone",
      "id_string": "264"
  },
  {
      "id": 264,
      "name": "Linoone",
      "id_string": "264_galar"
  },
  {
      "id": 265,
      "name": "Wurmple",
      "id_string": "265"
  },
  {
      "id": 266,
      "name": "Silcoon",
      "id_string": "266"
  },
  {
      "id": 267,
      "name": "Beautifly",
      "id_string": "267"
  },
  {
      "id": 268,
      "name": "Cascoon",
      "id_string": "268"
  },
  {
      "id": 269,
      "name": "Dustox",
      "id_string": "269"
  },
  {
      "id": 270,
      "name": "Lotad",
      "id_string": "270"
  },
  {
      "id": 271,
      "name": "Lombre",
      "id_string": "271"
  },
  {
      "id": 272,
      "name": "Ludicolo",
      "id_string": "272"
  },
  {
      "id": 273,
      "name": "Seedot",
      "id_string": "273"
  },
  {
      "id": 274,
      "name": "Nuzleaf",
      "id_string": "274"
  },
  {
      "id": 275,
      "name": "Shiftry",
      "id_string": "275"
  },
  {
      "id": 276,
      "name": "Taillow",
      "id_string": "276"
  },
  {
      "id": 277,
      "name": "Swellow",
      "id_string": "277"
  },
  {
      "id": 278,
      "name": "Wingull",
      "id_string": "278"
  },
  {
      "id": 279,
      "name": "Pelipper",
      "id_string": "279"
  },
  {
      "id": 280,
      "name": "Ralts",
      "id_string": "280"
  },
  {
      "id": 281,
      "name": "Kirlia",
      "id_string": "281"
  },
  {
      "id": 282,
      "name": "Gardevoir",
      "id_string": "282"
  },
  {
      "id": 283,
      "name": "Surskit",
      "id_string": "283"
  },
  {
      "id": 284,
      "name": "Masquerain",
      "id_string": "284"
  },
  {
      "id": 285,
      "name": "Shroomish",
      "id_string": "285"
  },
  {
      "id": 286,
      "name": "Breloom",
      "id_string": "286"
  },
  {
      "id": 287,
      "name": "Slakoth",
      "id_string": "287"
  },
  {
      "id": 288,
      "name": "Vigoroth",
      "id_string": "288"
  },
  {
      "id": 289,
      "name": "Slaking",
      "id_string": "289"
  },
  {
      "id": 290,
      "name": "Nincada",
      "id_string": "290"
  },
  {
      "id": 291,
      "name": "Ninjask",
      "id_string": "291"
  },
  {
      "id": 292,
      "name": "Shedinja",
      "id_string": "292"
  },
  {
      "id": 293,
      "name": "Whismur",
      "id_string": "293"
  },
  {
      "id": 294,
      "name": "Loudred",
      "id_string": "294"
  },
  {
      "id": 295,
      "name": "Exploud",
      "id_string": "295"
  },
  {
      "id": 296,
      "name": "Makuhita",
      "id_string": "296"
  },
  {
      "id": 297,
      "name": "Hariyama",
      "id_string": "297"
  },
  {
      "id": 298,
      "name": "Azurill",
      "id_string": "298"
  },
  {
      "id": 299,
      "name": "Nosepass",
      "id_string": "299"
  },
  {
      "id": 300,
      "name": "Skitty",
      "id_string": "300"
  },
  {
      "id": 301,
      "name": "Delcatty",
      "id_string": "301"
  },
  {
      "id": 302,
      "name": "Sableye",
      "id_string": "302"
  },
  {
      "id": 303,
      "name": "Mawile",
      "id_string": "303"
  },
  {
      "id": 304,
      "name": "Aron",
      "id_string": "304"
  },
  {
      "id": 305,
      "name": "Lairon",
      "id_string": "305"
  },
  {
      "id": 306,
      "name": "Aggron",
      "id_string": "306"
  },
  {
      "id": 307,
      "name": "Meditite",
      "id_string": "307"
  },
  {
      "id": 308,
      "name": "Medicham",
      "id_string": "308"
  },
  {
      "id": 309,
      "name": "Electrike",
      "id_string": "309"
  },
  {
      "id": 310,
      "name": "Manectric",
      "id_string": "310"
  },
  {
      "id": 311,
      "name": "Plusle",
      "id_string": "311"
  },
  {
      "id": 312,
      "name": "Minun",
      "id_string": "312"
  },
  {
      "id": 313,
      "name": "Volbeat",
      "id_string": "313"
  },
  {
      "id": 314,
      "name": "Illumise",
      "id_string": "314"
  },
  {
      "id": 315,
      "name": "Roselia",
      "id_string": "315"
  },
  {
      "id": 316,
      "name": "Gulpin",
      "id_string": "316"
  },
  {
      "id": 317,
      "name": "Swalot",
      "id_string": "317"
  },
  {
      "id": 318,
      "name": "Carvanha",
      "id_string": "318"
  },
  {
      "id": 319,
      "name": "Sharpedo",
      "id_string": "319"
  },
  {
      "id": 320,
      "name": "Wailmer",
      "id_string": "320"
  },
  {
      "id": 321,
      "name": "Wailord",
      "id_string": "321"
  },
  {
      "id": 322,
      "name": "Numel",
      "id_string": "322"
  },
  {
      "id": 323,
      "name": "Camerupt",
      "id_string": "323"
  },
  {
      "id": 324,
      "name": "Torkoal",
      "id_string": "324"
  },
  {
      "id": 325,
      "name": "Spoink",
      "id_string": "325"
  },
  {
      "id": 326,
      "name": "Grumpig",
      "id_string": "326"
  },
  {
      "id": 327,
      "name": "Spinda",
      "id_string": "327"
  },
  {
      "id": 328,
      "name": "Trapinch",
      "id_string": "328"
  },
  {
      "id": 329,
      "name": "Vibrava",
      "id_string": "329"
  },
  {
      "id": 330,
      "name": "Flygon",
      "id_string": "330"
  },
  {
      "id": 331,
      "name": "Cacnea",
      "id_string": "331"
  },
  {
      "id": 332,
      "name": "Cacturne",
      "id_string": "332"
  },
  {
      "id": 333,
      "name": "Swablu",
      "id_string": "333"
  },
  {
      "id": 334,
      "name": "Altaria",
      "id_string": "334"
  },
  {
      "id": 335,
      "name": "Zangoose",
      "id_string": "335"
  },
  {
      "id": 336,
      "name": "Seviper",
      "id_string": "336"
  },
  {
      "id": 337,
      "name": "Lunatone",
      "id_string": "337"
  },
  {
      "id": 338,
      "name": "Solrock",
      "id_string": "338"
  },
  {
      "id": 339,
      "name": "Barboach",
      "id_string": "339"
  },
  {
      "id": 340,
      "name": "Whiscash",
      "id_string": "340"
  },
  {
      "id": 341,
      "name": "Corphish",
      "id_string": "341"
  },
  {
      "id": 342,
      "name": "Crawdaunt",
      "id_string": "342"
  },
  {
      "id": 343,
      "name": "Baltoy",
      "id_string": "343"
  },
  {
      "id": 344,
      "name": "Claydol",
      "id_string": "344"
  },
  {
      "id": 345,
      "name": "Lileep",
      "id_string": "345"
  },
  {
      "id": 346,
      "name": "Cradily",
      "id_string": "346"
  },
  {
      "id": 347,
      "name": "Anorith",
      "id_string": "347"
  },
  {
      "id": 348,
      "name": "Armaldo",
      "id_string": "348"
  },
  {
      "id": 349,
      "name": "Feebas",
      "id_string": "349"
  },
  {
      "id": 350,
      "name": "Milotic",
      "id_string": "350"
  },
  {
      "id": 351,
      "name": "Castform",
      "id_string": "351"
  },
  {
      "id": 352,
      "name": "Kecleon",
      "id_string": "352"
  },
  {
      "id": 353,
      "name": "Shuppet",
      "id_string": "353"
  },
  {
      "id": 354,
      "name": "Banette",
      "id_string": "354"
  },
  {
      "id": 355,
      "name": "Duskull",
      "id_string": "355"
  },
  {
      "id": 356,
      "name": "Dusclops",
      "id_string": "356"
  },
  {
      "id": 357,
      "name": "Tropius",
      "id_string": "357"
  },
  {
      "id": 358,
      "name": "Chimecho",
      "id_string": "358"
  },
  {
      "id": 359,
      "name": "Absol",
      "id_string": "359"
  },
  {
      "id": 360,
      "name": "Wynaut",
      "id_string": "360"
  },
  {
      "id": 361,
      "name": "Snorunt",
      "id_string": "361"
  },
  {
      "id": 362,
      "name": "Glalie",
      "id_string": "362"
  },
  {
      "id": 363,
      "name": "Spheal",
      "id_string": "363"
  },
  {
      "id": 364,
      "name": "Sealeo",
      "id_string": "364"
  },
  {
      "id": 365,
      "name": "Walrein",
      "id_string": "365"
  },
  {
      "id": 366,
      "name": "Clamperl",
      "id_string": "366"
  },
  {
      "id": 367,
      "name": "Huntail",
      "id_string": "367"
  },
  {
      "id": 368,
      "name": "Gorebyss",
      "id_string": "368"
  },
  {
      "id": 369,
      "name": "Relicanth",
      "id_string": "369"
  },
  {
      "id": 370,
      "name": "Luvdisc",
      "id_string": "370"
  },
  {
      "id": 371,
      "name": "Bagon",
      "id_string": "371"
  },
  {
      "id": 372,
      "name": "Shelgon",
      "id_string": "372"
  },
  {
      "id": 373,
      "name": "Salamence",
      "id_string": "373"
  },
  {
      "id": 374,
      "name": "Beldum",
      "id_string": "374"
  },
  {
      "id": 375,
      "name": "Metang",
      "id_string": "375"
  },
  {
      "id": 376,
      "name": "Metagross",
      "id_string": "376"
  },
  {
      "id": 377,
      "name": "Regirock",
      "id_string": "377"
  },
  {
      "id": 378,
      "name": "Regice",
      "id_string": "378"
  },
  {
      "id": 379,
      "name": "Registeel",
      "id_string": "379"
  },
  {
      "id": 380,
      "name": "Latias",
      "id_string": "380"
  },
  {
      "id": 381,
      "name": "Latios",
      "id_string": "381"
  },
  {
      "id": 382,
      "name": "Kyogre",
      "id_string": "382"
  },
  {
      "id": 383,
      "name": "Groudon",
      "id_string": "383"
  },
  {
      "id": 384,
      "name": "Rayquaza",
      "id_string": "384"
  },
  {
      "id": 385,
      "name": "Jirachi",
      "id_string": "385"
  },
  {
      "id": 386,
      "name": "Deoxys",
      "id_string": "386"
  },
  {
      "id": 386,
      "name": "Deoxys",
      "id_string": "386_attack"
  },
  {
      "id": 386,
      "name": "Deoxys",
      "id_string": "386_defense"
  },
  {
      "id": 386,
      "name": "Deoxys",
      "id_string": "386_speed"
  },
  {
      "id": 387,
      "name": "Turtwig",
      "id_string": "387"
  },
  {
      "id": 388,
      "name": "Grotle",
      "id_string": "388"
  },
  {
      "id": 389,
      "name": "Torterra",
      "id_string": "389"
  },
  {
      "id": 390,
      "name": "Chimchar",
      "id_string": "390"
  },
  {
      "id": 391,
      "name": "Monferno",
      "id_string": "391"
  },
  {
      "id": 392,
      "name": "Infernape",
      "id_string": "392"
  },
  {
      "id": 393,
      "name": "Piplup",
      "id_string": "393"
  },
  {
      "id": 394,
      "name": "Prinplup",
      "id_string": "394"
  },
  {
      "id": 395,
      "name": "Empoleon",
      "id_string": "395"
  },
  {
      "id": 396,
      "name": "Starly",
      "id_string": "396"
  },
  {
      "id": 397,
      "name": "Staravia",
      "id_string": "397"
  },
  {
      "id": 398,
      "name": "Staraptor",
      "id_string": "398"
  },
  {
      "id": 399,
      "name": "Bidoof",
      "id_string": "399"
  },
  {
      "id": 400,
      "name": "Bibarel",
      "id_string": "400"
  },
  {
      "id": 401,
      "name": "Kricketot",
      "id_string": "401"
  },
  {
      "id": 402,
      "name": "Kricketune",
      "id_string": "402"
  },
  {
      "id": 403,
      "name": "Shinx",
      "id_string": "403"
  },
  {
      "id": 404,
      "name": "Luxio",
      "id_string": "404"
  },
  {
      "id": 405,
      "name": "Luxray",
      "id_string": "405"
  },
  {
      "id": 406,
      "name": "Budew",
      "id_string": "406"
  },
  {
      "id": 407,
      "name": "Roserade",
      "id_string": "407"
  },
  {
      "id": 408,
      "name": "Cranidos",
      "id_string": "408"
  },
  {
      "id": 409,
      "name": "Rampardos",
      "id_string": "409"
  },
  {
      "id": 410,
      "name": "Shieldon",
      "id_string": "410"
  },
  {
      "id": 411,
      "name": "Bastiodon",
      "id_string": "411"
  },
  {
      "id": 412,
      "name": "Burmy",
      "id_string": "412_plant"
  },
  {
      "id": 412,
      "name": "Burmy",
      "id_string": "412_sandy"
  },
  {
      "id": 412,
      "name": "Burmy",
      "id_string": "412_trash"
  },
  {
      "id": 413,
      "name": "Wormadam",
      "id_string": "413_plant"
  },
  {
      "id": 413,
      "name": "Wormadam",
      "id_string": "413_sandy"
  },
  {
      "id": 413,
      "name": "Wormadam",
      "id_string": "413_trash"
  },
  {
      "id": 414,
      "name": "Mothim",
      "id_string": "414"
  },
  {
      "id": 415,
      "name": "Combee",
      "id_string": "415"
  },
  {
      "id": 416,
      "name": "Vespiquen",
      "id_string": "416"
  },
  {
      "id": 417,
      "name": "Pachirisu",
      "id_string": "417"
  },
  {
      "id": 418,
      "name": "Buizel",
      "id_string": "418"
  },
  {
      "id": 419,
      "name": "Floatzel",
      "id_string": "419"
  },
  {
      "id": 420,
      "name": "Cherubi",
      "id_string": "420"
  },
  {
      "id": 421,
      "name": "Cherrim",
      "id_string": "421"
  },
  {
      "id": 422,
      "name": "Shellos",
      "id_string": "422_west"
  },
  {
      "id": 422,
      "name": "Shellos",
      "id_string": "422_east"
  },
  {
      "id": 423,
      "name": "Gastrodon",
      "id_string": "423_west"
  },
  {
      "id": 423,
      "name": "Gastrodon",
      "id_string": "423_east"
  },
  {
      "id": 424,
      "name": "Ambipom",
      "id_string": "424"
  },
  {
      "id": 425,
      "name": "Drifloon",
      "id_string": "425"
  },
  {
      "id": 426,
      "name": "Drifblim",
      "id_string": "426"
  },
  {
      "id": 427,
      "name": "Buneary",
      "id_string": "427"
  },
  {
      "id": 428,
      "name": "Lopunny",
      "id_string": "428"
  },
  {
      "id": 429,
      "name": "Mismagius",
      "id_string": "429"
  },
  {
      "id": 430,
      "name": "Honchkrow",
      "id_string": "430"
  },
  {
      "id": 431,
      "name": "Glameow",
      "id_string": "431"
  },
  {
      "id": 432,
      "name": "Purugly",
      "id_string": "432"
  },
  {
      "id": 433,
      "name": "Chingling",
      "id_string": "433"
  },
  {
      "id": 434,
      "name": "Stunky",
      "id_string": "434"
  },
  {
      "id": 435,
      "name": "Skuntank",
      "id_string": "435"
  },
  {
      "id": 436,
      "name": "Bronzor",
      "id_string": "436"
  },
  {
      "id": 437,
      "name": "Bronzong",
      "id_string": "437"
  },
  {
      "id": 438,
      "name": "Bonsly",
      "id_string": "438"
  },
  {
      "id": 439,
      "name": "Mime Jr.",
      "id_string": "439"
  },
  {
      "id": 440,
      "name": "Happiny",
      "id_string": "440"
  },
  {
      "id": 441,
      "name": "Chatot",
      "id_string": "441"
  },
  {
      "id": 442,
      "name": "Spiritomb",
      "id_string": "442"
  },
  {
      "id": 443,
      "name": "Gible",
      "id_string": "443"
  },
  {
      "id": 444,
      "name": "Gabite",
      "id_string": "444"
  },
  {
      "id": 445,
      "name": "Garchomp",
      "id_string": "445"
  },
  {
      "id": 446,
      "name": "Munchlax",
      "id_string": "446"
  },
  {
      "id": 447,
      "name": "Riolu",
      "id_string": "447"
  },
  {
      "id": 448,
      "name": "Lucario",
      "id_string": "448"
  },
  {
      "id": 449,
      "name": "Hippopotas",
      "id_string": "449"
  },
  {
      "id": 450,
      "name": "Hippowdon",
      "id_string": "450"
  },
  {
      "id": 451,
      "name": "Skorupi",
      "id_string": "451"
  },
  {
      "id": 452,
      "name": "Drapion",
      "id_string": "452"
  },
  {
      "id": 453,
      "name": "Croagunk",
      "id_string": "453"
  },
  {
      "id": 454,
      "name": "Toxicroak",
      "id_string": "454"
  },
  {
      "id": 455,
      "name": "Carnivine",
      "id_string": "455"
  },
  {
      "id": 456,
      "name": "Finneon",
      "id_string": "456"
  },
  {
      "id": 457,
      "name": "Lumineon",
      "id_string": "457"
  },
  {
      "id": 458,
      "name": "Mantyke",
      "id_string": "458"
  },
  {
      "id": 459,
      "name": "Snover",
      "id_string": "459"
  },
  {
      "id": 460,
      "name": "Abomasnow",
      "id_string": "460"
  },
  {
      "id": 461,
      "name": "Weavile",
      "id_string": "461"
  },
  {
      "id": 462,
      "name": "Magnezone",
      "id_string": "462"
  },
  {
      "id": 463,
      "name": "Lickilicky",
      "id_string": "463"
  },
  {
      "id": 464,
      "name": "Rhyperior",
      "id_string": "464"
  },
  {
      "id": 465,
      "name": "Tangrowth",
      "id_string": "465"
  },
  {
      "id": 466,
      "name": "Electivire",
      "id_string": "466"
  },
  {
      "id": 467,
      "name": "Magmortar",
      "id_string": "467"
  },
  {
      "id": 468,
      "name": "Togekiss",
      "id_string": "468"
  },
  {
      "id": 469,
      "name": "Yanmega",
      "id_string": "469"
  },
  {
      "id": 470,
      "name": "Leafeon",
      "id_string": "470"
  },
  {
      "id": 471,
      "name": "Glaceon",
      "id_string": "471"
  },
  {
      "id": 472,
      "name": "Gliscor",
      "id_string": "472"
  },
  {
      "id": 473,
      "name": "Mamoswine",
      "id_string": "473"
  },
  {
      "id": 474,
      "name": "Porygon-Z",
      "id_string": "474"
  },
  {
      "id": 475,
      "name": "Gallade",
      "id_string": "475"
  },
  {
      "id": 476,
      "name": "Probopass",
      "id_string": "476"
  },
  {
      "id": 477,
      "name": "Dusknoir",
      "id_string": "477"
  },
  {
      "id": 478,
      "name": "Froslass",
      "id_string": "478"
  },
  {
      "id": 479,
      "name": "Rotom",
      "id_string": "479"
  },
  {
      "id": 479,
      "name": "Rotom",
      "id_string": "479_heat"
  },
  {
      "id": 479,
      "name": "Rotom",
      "id_string": "479_wash"
  },
  {
      "id": 479,
      "name": "Rotom",
      "id_string": "479_frost"
  },
  {
      "id": 479,
      "name": "Rotom",
      "id_string": "479_fan"
  },
  {
      "id": 479,
      "name": "Rotom",
      "id_string": "479_mow"
  },
  {
      "id": 480,
      "name": "Uxie",
      "id_string": "480"
  },
  {
      "id": 481,
      "name": "Mesprit",
      "id_string": "481"
  },
  {
      "id": 482,
      "name": "Azelf",
      "id_string": "482"
  },
  {
      "id": 483,
      "name": "Dialga",
      "id_string": "483"
  },
  {
      "id": 484,
      "name": "Palkia",
      "id_string": "484"
  },
  {
      "id": 485,
      "name": "Heatran",
      "id_string": "485"
  },
  {
      "id": 486,
      "name": "Regigigas",
      "id_string": "486"
  },
  {
      "id": 487,
      "name": "Giratina",
      "id_string": "487"
  },
  {
      "id": 488,
      "name": "Cresselia",
      "id_string": "488"
  },
  {
      "id": 489,
      "name": "Phione",
      "id_string": "489"
  },
  {
      "id": 490,
      "name": "Manaphy",
      "id_string": "490"
  },
  {
      "id": 491,
      "name": "Darkrai",
      "id_string": "491"
  },
  {
      "id": 492,
      "name": "Shaymin",
      "id_string": "492"
  },
  {
      "id": 492,
      "name": "Shaymin",
      "id_string": "492_sky"
  },
  {
      "id": 493,
      "name": "Arceus",
      "id_string": "493"
  },
  {
      "id": 494,
      "name": "Victini",
      "id_string": "494"
  },
  {
      "id": 495,
      "name": "Snivy",
      "id_string": "495"
  },
  {
      "id": 496,
      "name": "Servine",
      "id_string": "496"
  },
  {
      "id": 497,
      "name": "Serperior",
      "id_string": "497"
  },
  {
      "id": 498,
      "name": "Tepig",
      "id_string": "498"
  },
  {
      "id": 499,
      "name": "Pignite",
      "id_string": "499"
  },
  {
      "id": 500,
      "name": "Emboar",
      "id_string": "500"
  },
  {
      "id": 501,
      "name": "Oshawott",
      "id_string": "501"
  },
  {
      "id": 502,
      "name": "Dewott",
      "id_string": "502"
  },
  {
      "id": 503,
      "name": "Samurott",
      "id_string": "503"
  },
  {
      "id": 503,
      "name": "Samurott",
      "id_string": "503_hisui"
  },
  {
      "id": 504,
      "name": "Patrat",
      "id_string": "504"
  },
  {
      "id": 505,
      "name": "Watchog",
      "id_string": "505"
  },
  {
      "id": 506,
      "name": "Lillipup",
      "id_string": "506"
  },
  {
      "id": 507,
      "name": "Herdier",
      "id_string": "507"
  },
  {
      "id": 508,
      "name": "Stoutland",
      "id_string": "508"
  },
  {
      "id": 509,
      "name": "Purrloin",
      "id_string": "509"
  },
  {
      "id": 510,
      "name": "Liepard",
      "id_string": "510"
  },
  {
      "id": 511,
      "name": "Pansage",
      "id_string": "511"
  },
  {
      "id": 512,
      "name": "Simisage",
      "id_string": "512"
  },
  {
      "id": 513,
      "name": "Pansear",
      "id_string": "513"
  },
  {
      "id": 514,
      "name": "Simisear",
      "id_string": "514"
  },
  {
      "id": 515,
      "name": "Panpour",
      "id_string": "515"
  },
  {
      "id": 516,
      "name": "Simipour",
      "id_string": "516"
  },
  {
      "id": 517,
      "name": "Munna",
      "id_string": "517"
  },
  {
      "id": 518,
      "name": "Musharna",
      "id_string": "518"
  },
  {
      "id": 519,
      "name": "Pidove",
      "id_string": "519"
  },
  {
      "id": 520,
      "name": "Tranquill",
      "id_string": "520"
  },
  {
      "id": 521,
      "name": "Unfezant",
      "id_string": "521"
  },
  {
      "id": 522,
      "name": "Blitzle",
      "id_string": "522"
  },
  {
      "id": 523,
      "name": "Zebstrika",
      "id_string": "523"
  },
  {
      "id": 524,
      "name": "Roggenrola",
      "id_string": "524"
  },
  {
      "id": 525,
      "name": "Boldore",
      "id_string": "525"
  },
  {
      "id": 526,
      "name": "Gigalith",
      "id_string": "526"
  },
  {
      "id": 527,
      "name": "Woobat",
      "id_string": "527"
  },
  {
      "id": 528,
      "name": "Swoobat",
      "id_string": "528"
  },
  {
      "id": 529,
      "name": "Drilbur",
      "id_string": "529"
  },
  {
      "id": 530,
      "name": "Excadrill",
      "id_string": "530"
  },
  {
      "id": 531,
      "name": "Audino",
      "id_string": "531"
  },
  {
      "id": 532,
      "name": "Timburr",
      "id_string": "532"
  },
  {
      "id": 533,
      "name": "Gurdurr",
      "id_string": "533"
  },
  {
      "id": 534,
      "name": "Conkeldurr",
      "id_string": "534"
  },
  {
      "id": 535,
      "name": "Tympole",
      "id_string": "535"
  },
  {
      "id": 536,
      "name": "Palpitoad",
      "id_string": "536"
  },
  {
      "id": 537,
      "name": "Seismitoad",
      "id_string": "537"
  },
  {
      "id": 538,
      "name": "Throh",
      "id_string": "538"
  },
  {
      "id": 539,
      "name": "Sawk",
      "id_string": "539"
  },
  {
      "id": 540,
      "name": "Sewaddle",
      "id_string": "540"
  },
  {
      "id": 541,
      "name": "Swadloon",
      "id_string": "541"
  },
  {
      "id": 542,
      "name": "Leavanny",
      "id_string": "542"
  },
  {
      "id": 543,
      "name": "Venipede",
      "id_string": "543"
  },
  {
      "id": 544,
      "name": "Whirlipede",
      "id_string": "544"
  },
  {
      "id": 545,
      "name": "Scolipede",
      "id_string": "545"
  },
  {
      "id": 546,
      "name": "Cottonee",
      "id_string": "546"
  },
  {
      "id": 547,
      "name": "Whimsicott",
      "id_string": "547"
  },
  {
      "id": 548,
      "name": "Petilil",
      "id_string": "548"
  },
  {
      "id": 549,
      "name": "Lilligant",
      "id_string": "549"
  },
  {
      "id": 549,
      "name": "Lilligant",
      "id_string": "549_hisui"
  },
  {
      "id": 550,
      "name": "Basculin",
      "id_string": "550_red"
  },
  {
      "id": 550,
      "name": "Basculin",
      "id_string": "550_blue"
  },
  {
      "id": 550,
      "name": "Basculin",
      "id_string": "550_white"
  },
  {
      "id": 551,
      "name": "Sandile",
      "id_string": "551"
  },
  {
      "id": 552,
      "name": "Krokorok",
      "id_string": "552"
  },
  {
      "id": 553,
      "name": "Krookodile",
      "id_string": "553"
  },
  {
      "id": 554,
      "name": "Darumaka",
      "id_string": "554"
  },
  {
      "id": 554,
      "name": "Darumaka",
      "id_string": "554_galar"
  },
  {
      "id": 555,
      "name": "Darmanitan",
      "id_string": "555"
  },
  {
      "id": 555,
      "name": "Darmanitan",
      "id_string": "555_galar"
  },
  {
      "id": 556,
      "name": "Maractus",
      "id_string": "556"
  },
  {
      "id": 557,
      "name": "Dwebble",
      "id_string": "557"
  },
  {
      "id": 558,
      "name": "Crustle",
      "id_string": "558"
  },
  {
      "id": 559,
      "name": "Scraggy",
      "id_string": "559"
  },
  {
      "id": 560,
      "name": "Scrafty",
      "id_string": "560"
  },
  {
      "id": 561,
      "name": "Sigilyph",
      "id_string": "561"
  },
  {
      "id": 562,
      "name": "Yamask",
      "id_string": "562"
  },
  {
      "id": 562,
      "name": "Yamask",
      "id_string": "562_galar"
  },
  {
      "id": 563,
      "name": "Cofagrigus",
      "id_string": "563"
  },
  {
      "id": 564,
      "name": "Tirtouga",
      "id_string": "564"
  },
  {
      "id": 565,
      "name": "Carracosta",
      "id_string": "565"
  },
  {
      "id": 566,
      "name": "Archen",
      "id_string": "566"
  },
  {
      "id": 567,
      "name": "Archeops",
      "id_string": "567"
  },
  {
      "id": 568,
      "name": "Trubbish",
      "id_string": "568"
  },
  {
      "id": 569,
      "name": "Garbodor",
      "id_string": "569"
  },
  {
      "id": 570,
      "name": "Zorua",
      "id_string": "570"
  },
  {
      "id": 570,
      "name": "Zorua",
      "id_string": "570_hisui"
  },
  {
      "id": 571,
      "name": "Zoroark",
      "id_string": "571"
  },
  {
      "id": 571,
      "name": "Zoroark",
      "id_string": "571_hisui"
  },
  {
      "id": 572,
      "name": "Minccino",
      "id_string": "572"
  },
  {
      "id": 573,
      "name": "Cinccino",
      "id_string": "573"
  },
  {
      "id": 574,
      "name": "Gothita",
      "id_string": "574"
  },
  {
      "id": 575,
      "name": "Gothorita",
      "id_string": "575"
  },
  {
      "id": 576,
      "name": "Gothitelle",
      "id_string": "576"
  },
  {
      "id": 577,
      "name": "Solosis",
      "id_string": "577"
  },
  {
      "id": 578,
      "name": "Duosion",
      "id_string": "578"
  },
  {
      "id": 579,
      "name": "Reuniclus",
      "id_string": "579"
  },
  {
      "id": 580,
      "name": "Ducklett",
      "id_string": "580"
  },
  {
      "id": 581,
      "name": "Swanna",
      "id_string": "581"
  },
  {
      "id": 582,
      "name": "Vanillite",
      "id_string": "582"
  },
  {
      "id": 583,
      "name": "Vanillish",
      "id_string": "583"
  },
  {
      "id": 584,
      "name": "Vanilluxe",
      "id_string": "584"
  },
  {
      "id": 585,
      "name": "Deerling",
      "id_string": "585_spring"
  },
  {
      "id": 585,
      "name": "Deerling",
      "id_string": "585_summer"
  },
  {
      "id": 585,
      "name": "Deerling",
      "id_string": "585_autumn"
  },
  {
      "id": 585,
      "name": "Deerling",
      "id_string": "585_winter"
  },
  {
      "id": 586,
      "name": "Sawsbuck",
      "id_string": "586_spring"
  },
  {
      "id": 586,
      "name": "Sawsbuck",
      "id_string": "586_summer"
  },
  {
      "id": 586,
      "name": "Sawsbuck",
      "id_string": "586_autumn"
  },
  {
      "id": 586,
      "name": "Sawsbuck",
      "id_string": "586_winter"
  },
  {
      "id": 587,
      "name": "Emolga",
      "id_string": "587"
  },
  {
      "id": 588,
      "name": "Karrablast",
      "id_string": "588"
  },
  {
      "id": 589,
      "name": "Escavalier",
      "id_string": "589"
  },
  {
      "id": 590,
      "name": "Foongus",
      "id_string": "590"
  },
  {
      "id": 591,
      "name": "Amoonguss",
      "id_string": "591"
  },
  {
      "id": 592,
      "name": "Frillish",
      "id_string": "592"
  },
  {
      "id": 593,
      "name": "Jellicent",
      "id_string": "593"
  },
  {
      "id": 594,
      "name": "Alomomola",
      "id_string": "594"
  },
  {
      "id": 595,
      "name": "Joltik",
      "id_string": "595"
  },
  {
      "id": 596,
      "name": "Galvantula",
      "id_string": "596"
  },
  {
      "id": 597,
      "name": "Ferroseed",
      "id_string": "597"
  },
  {
      "id": 598,
      "name": "Ferrothorn",
      "id_string": "598"
  },
  {
      "id": 599,
      "name": "Klink",
      "id_string": "599"
  },
  {
      "id": 600,
      "name": "Klang",
      "id_string": "600"
  },
  {
      "id": 601,
      "name": "Klinklang",
      "id_string": "601"
  },
  {
      "id": 602,
      "name": "Tynamo",
      "id_string": "602"
  },
  {
      "id": 603,
      "name": "Eelektrik",
      "id_string": "603"
  },
  {
      "id": 604,
      "name": "Eelektross",
      "id_string": "604"
  },
  {
      "id": 605,
      "name": "Elgyem",
      "id_string": "605"
  },
  {
      "id": 606,
      "name": "Beheeyem",
      "id_string": "606"
  },
  {
      "id": 607,
      "name": "Litwick",
      "id_string": "607"
  },
  {
      "id": 608,
      "name": "Lampent",
      "id_string": "608"
  },
  {
      "id": 609,
      "name": "Chandelure",
      "id_string": "609"
  },
  {
      "id": 610,
      "name": "Axew",
      "id_string": "610"
  },
  {
      "id": 611,
      "name": "Fraxure",
      "id_string": "611"
  },
  {
      "id": 612,
      "name": "Haxorus",
      "id_string": "612"
  },
  {
      "id": 613,
      "name": "Cubchoo",
      "id_string": "613"
  },
  {
      "id": 614,
      "name": "Beartic",
      "id_string": "614"
  },
  {
      "id": 615,
      "name": "Cryogonal",
      "id_string": "615"
  },
  {
      "id": 616,
      "name": "Shelmet",
      "id_string": "616"
  },
  {
      "id": 617,
      "name": "Accelgor",
      "id_string": "617"
  },
  {
      "id": 618,
      "name": "Stunfisk",
      "id_string": "618"
  },
  {
      "id": 618,
      "name": "Stunfisk",
      "id_string": "618_galar"
  },
  {
      "id": 619,
      "name": "Mienfoo",
      "id_string": "619"
  },
  {
      "id": 620,
      "name": "Mienshao",
      "id_string": "620"
  },
  {
      "id": 621,
      "name": "Druddigon",
      "id_string": "621"
  },
  {
      "id": 622,
      "name": "Golett",
      "id_string": "622"
  },
  {
      "id": 623,
      "name": "Golurk",
      "id_string": "623"
  },
  {
      "id": 624,
      "name": "Pawniard",
      "id_string": "624"
  },
  {
      "id": 625,
      "name": "Bisharp",
      "id_string": "625"
  },
  {
      "id": 626,
      "name": "Bouffalant",
      "id_string": "626"
  },
  {
      "id": 627,
      "name": "Rufflet",
      "id_string": "627"
  },
  {
      "id": 628,
      "name": "Braviary",
      "id_string": "628"
  },
  {
      "id": 628,
      "name": "Braviary",
      "id_string": "628_hisui"
  },
  {
      "id": 629,
      "name": "Vullaby",
      "id_string": "629"
  },
  {
      "id": 630,
      "name": "Mandibuzz",
      "id_string": "630"
  },
  {
      "id": 631,
      "name": "Heatmor",
      "id_string": "631"
  },
  {
      "id": 632,
      "name": "Durant",
      "id_string": "632"
  },
  {
      "id": 633,
      "name": "Deino",
      "id_string": "633"
  },
  {
      "id": 634,
      "name": "Zweilous",
      "id_string": "634"
  },
  {
      "id": 635,
      "name": "Hydreigon",
      "id_string": "635"
  },
  {
      "id": 636,
      "name": "Larvesta",
      "id_string": "636"
  },
  {
      "id": 637,
      "name": "Volcarona",
      "id_string": "637"
  },
  {
      "id": 638,
      "name": "Cobalion",
      "id_string": "638"
  },
  {
      "id": 639,
      "name": "Terrakion",
      "id_string": "639"
  },
  {
      "id": 640,
      "name": "Virizion",
      "id_string": "640"
  },
  {
      "id": 641,
      "name": "Tornadus",
      "id_string": "641"
  },
  {
      "id": 641,
      "name": "Tornadus",
      "id_string": "641_therian"
  },
  {
      "id": 642,
      "name": "Thundurus",
      "id_string": "642"
  },
  {
      "id": 642,
      "name": "Thundurus",
      "id_string": "642_therian"
  },
  {
      "id": 643,
      "name": "Reshiram",
      "id_string": "643"
  },
  {
      "id": 644,
      "name": "Zekrom",
      "id_string": "644"
  },
  {
      "id": 645,
      "name": "Landorus",
      "id_string": "645"
  },
  {
      "id": 645,
      "name": "Landorus",
      "id_string": "645_therian"
  },
  {
      "id": 646,
      "name": "Kyurem",
      "id_string": "646"
  },
  {
      "id": 647,
      "name": "Keldeo",
      "id_string": "647"
  },
  {
      "id": 647,
      "name": "Keldeo",
      "id_string": "647_resolute"
  },
  {
      "id": 648,
      "name": "Meloetta",
      "id_string": "648"
  },
  {
      "id": 649,
      "name": "Genesect",
      "id_string": "649"
  },
  {
      "id": 650,
      "name": "Chespin",
      "id_string": "650"
  },
  {
      "id": 651,
      "name": "Quilladin",
      "id_string": "651"
  },
  {
      "id": 652,
      "name": "Chesnaught",
      "id_string": "652"
  },
  {
      "id": 653,
      "name": "Fennekin",
      "id_string": "653"
  },
  {
      "id": 654,
      "name": "Braixen",
      "id_string": "654"
  },
  {
      "id": 655,
      "name": "Delphox",
      "id_string": "655"
  },
  {
      "id": 656,
      "name": "Froakie",
      "id_string": "656"
  },
  {
      "id": 657,
      "name": "Frogadier",
      "id_string": "657"
  },
  {
      "id": 658,
      "name": "Greninja",
      "id_string": "658"
  },
  {
      "id": 659,
      "name": "Bunnelby",
      "id_string": "659"
  },
  {
      "id": 660,
      "name": "Diggersby",
      "id_string": "660"
  },
  {
      "id": 661,
      "name": "Fletchling",
      "id_string": "661"
  },
  {
      "id": 662,
      "name": "Fletchinder",
      "id_string": "662"
  },
  {
      "id": 663,
      "name": "Talonflame",
      "id_string": "663"
  },
  {
      "id": 664,
      "name": "Scatterbug",
      "id_string": "664"
  },
  {
      "id": 665,
      "name": "Spewpa",
      "id_string": "665"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_icysnow"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_polar"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_tundra"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_continental"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_garden"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_elegant"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_meadow"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_modern"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_marine"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_archipelago"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_highplains"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_sandstorm"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_river"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_monsoon"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_savanna"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_sun"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_ocean"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_jungle"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_fancy"
  },
  {
      "id": 666,
      "name": "Vivillon",
      "id_string": "666_pokeball"
  },
  {
      "id": 667,
      "name": "Litleo",
      "id_string": "667"
  },
  {
      "id": 668,
      "name": "Pyroar",
      "id_string": "668"
  },
  {
      "id": 669,
      "name": "Flabébé",
      "id_string": "669_red"
  },
  {
      "id": 669,
      "name": "Flabébé",
      "id_string": "669_yellow"
  },
  {
      "id": 669,
      "name": "Flabébé",
      "id_string": "669_orange"
  },
  {
      "id": 669,
      "name": "Flabébé",
      "id_string": "669_blue"
  },
  {
      "id": 669,
      "name": "Flabébé",
      "id_string": "669_white"
  },
  {
      "id": 670,
      "name": "Floette",
      "id_string": "670_red"
  },
  {
      "id": 670,
      "name": "Floette",
      "id_string": "670_yellow"
  },
  {
      "id": 670,
      "name": "Floette",
      "id_string": "670_orange"
  },
  {
      "id": 670,
      "name": "Floette",
      "id_string": "670_blue"
  },
  {
      "id": 670,
      "name": "Floette",
      "id_string": "670_white"
  },
  {
      "id": 671,
      "name": "Florges",
      "id_string": "671_red"
  },
  {
      "id": 671,
      "name": "Florges",
      "id_string": "671_yellow"
  },
  {
      "id": 671,
      "name": "Florges",
      "id_string": "671_orange"
  },
  {
      "id": 671,
      "name": "Florges",
      "id_string": "671_blue"
  },
  {
      "id": 671,
      "name": "Florges",
      "id_string": "671_white"
  },
  {
      "id": 672,
      "name": "Skiddo",
      "id_string": "672"
  },
  {
      "id": 673,
      "name": "Gogoat",
      "id_string": "673"
  },
  {
      "id": 674,
      "name": "Pancham",
      "id_string": "674"
  },
  {
      "id": 675,
      "name": "Pangoro",
      "id_string": "675"
  },
  {
      "id": 676,
      "name": "Furfrou",
      "id_string": "676"
  },
  {
      "id": 676,
      "name": "Furfrou",
      "id_string": "676_heart"
  },
  {
      "id": 676,
      "name": "Furfrou",
      "id_string": "676_star"
  },
  {
      "id": 676,
      "name": "Furfrou",
      "id_string": "676_diamond"
  },
  {
      "id": 676,
      "name": "Furfrou",
      "id_string": "676_debutante"
  },
  {
      "id": 676,
      "name": "Furfrou",
      "id_string": "676_matron"
  },
  {
      "id": 676,
      "name": "Furfrou",
      "id_string": "676_dandy"
  },
  {
      "id": 676,
      "name": "Furfrou",
      "id_string": "676_lareine"
  },
  {
      "id": 676,
      "name": "Furfrou",
      "id_string": "676_kabuki"
  },
  {
      "id": 676,
      "name": "Furfrou",
      "id_string": "676_pharaoh"
  },
  {
      "id": 677,
      "name": "Espurr",
      "id_string": "677"
  },
  {
      "id": 678,
      "name": "Meowstic",
      "id_string": "678"
  },
  {
      "id": 679,
      "name": "Honedge",
      "id_string": "679"
  },
  {
      "id": 680,
      "name": "Doublade",
      "id_string": "680"
  },
  {
      "id": 681,
      "name": "Aegislash",
      "id_string": "681"
  },
  {
      "id": 682,
      "name": "Spritzee",
      "id_string": "682"
  },
  {
      "id": 683,
      "name": "Aromatisse",
      "id_string": "683"
  },
  {
      "id": 684,
      "name": "Swirlix",
      "id_string": "684"
  },
  {
      "id": 685,
      "name": "Slurpuff",
      "id_string": "685"
  },
  {
      "id": 686,
      "name": "Inkay",
      "id_string": "686"
  },
  {
      "id": 687,
      "name": "Malamar",
      "id_string": "687"
  },
  {
      "id": 688,
      "name": "Binacle",
      "id_string": "688"
  },
  {
      "id": 689,
      "name": "Barbaracle",
      "id_string": "689"
  },
  {
      "id": 690,
      "name": "Skrelp",
      "id_string": "690"
  },
  {
      "id": 691,
      "name": "Dragalge",
      "id_string": "691"
  },
  {
      "id": 692,
      "name": "Clauncher",
      "id_string": "692"
  },
  {
      "id": 693,
      "name": "Clawitzer",
      "id_string": "693"
  },
  {
      "id": 694,
      "name": "Helioptile",
      "id_string": "694"
  },
  {
      "id": 695,
      "name": "Heliolisk",
      "id_string": "695"
  },
  {
      "id": 696,
      "name": "Tyrunt",
      "id_string": "696"
  },
  {
      "id": 697,
      "name": "Tyrantrum",
      "id_string": "697"
  },
  {
      "id": 698,
      "name": "Amaura",
      "id_string": "698"
  },
  {
      "id": 699,
      "name": "Aurorus",
      "id_string": "699"
  },
  {
      "id": 700,
      "name": "Sylveon",
      "id_string": "700"
  },
  {
      "id": 701,
      "name": "Hawlucha",
      "id_string": "701"
  },
  {
      "id": 702,
      "name": "Dedenne",
      "id_string": "702"
  },
  {
      "id": 703,
      "name": "Carbink",
      "id_string": "703"
  },
  {
      "id": 704,
      "name": "Goomy",
      "id_string": "704"
  },
  {
      "id": 705,
      "name": "Sliggoo",
      "id_string": "705"
  },
  {
      "id": 705,
      "name": "Sliggoo",
      "id_string": "705_hisui"
  },
  {
      "id": 706,
      "name": "Goodra",
      "id_string": "706"
  },
  {
      "id": 706,
      "name": "Goodra",
      "id_string": "706_hisui"
  },
  {
      "id": 707,
      "name": "Klefki",
      "id_string": "707"
  },
  {
      "id": 708,
      "name": "Phantump",
      "id_string": "708"
  },
  {
      "id": 709,
      "name": "Trevenant",
      "id_string": "709"
  },
  {
      "id": 710,
      "name": "Pumpkaboo",
      "id_string": "710_small"
  },
  {
      "id": 710,
      "name": "Pumpkaboo",
      "id_string": "710_average"
  },
  {
      "id": 710,
      "name": "Pumpkaboo",
      "id_string": "710_large"
  },
  {
      "id": 710,
      "name": "Pumpkaboo",
      "id_string": "710_super"
  },
  {
      "id": 711,
      "name": "Gourgeist",
      "id_string": "711_small"
  },
  {
      "id": 711,
      "name": "Gourgeist",
      "id_string": "711_average"
  },
  {
      "id": 711,
      "name": "Gourgeist",
      "id_string": "711_large"
  },
  {
      "id": 711,
      "name": "Gourgeist",
      "id_string": "711_super"
  },
  {
      "id": 712,
      "name": "Bergmite",
      "id_string": "712"
  },
  {
      "id": 713,
      "name": "Avalugg",
      "id_string": "713"
  },
  {
      "id": 713,
      "name": "Avalugg",
      "id_string": "713_hisui"
  },
  {
      "id": 714,
      "name": "Noibat",
      "id_string": "714"
  },
  {
      "id": 715,
      "name": "Noivern",
      "id_string": "715"
  },
  {
      "id": 716,
      "name": "Xerneas",
      "id_string": "716"
  },
  {
      "id": 717,
      "name": "Yveltal",
      "id_string": "717"
  },
  {
      "id": 718,
      "name": "Zygarde",
      "id_string": "718_50"
  },
  {
      "id": 718,
      "name": "Zygarde",
      "id_string": "718_10"
  },
  {
      "id": 719,
      "name": "Diancie",
      "id_string": "719"
  },
  {
      "id": 720,
      "name": "Hoopa",
      "id_string": "720_confined"
  },
  {
      "id": 720,
      "name": "Hoopa",
      "id_string": "720_unbound"
  },
  {
      "id": 721,
      "name": "Volcanion",
      "id_string": "721"
  },
  {
      "id": 722,
      "name": "Rowlet",
      "id_string": "722"
  },
  {
      "id": 723,
      "name": "Dartrix",
      "id_string": "723"
  },
  {
      "id": 724,
      "name": "Decidueye",
      "id_string": "724"
  },
  {
      "id": 724,
      "name": "Decidueye",
      "id_string": "724_hisui"
  },
  {
      "id": 725,
      "name": "Litten",
      "id_string": "725"
  },
  {
      "id": 726,
      "name": "Torracat",
      "id_string": "726"
  },
  {
      "id": 727,
      "name": "Incineroar",
      "id_string": "727"
  },
  {
      "id": 728,
      "name": "Popplio",
      "id_string": "728"
  },
  {
      "id": 729,
      "name": "Brionne",
      "id_string": "729"
  },
  {
      "id": 730,
      "name": "Primarina",
      "id_string": "730"
  },
  {
      "id": 731,
      "name": "Pikipek",
      "id_string": "731"
  },
  {
      "id": 732,
      "name": "Trumbeak",
      "id_string": "732"
  },
  {
      "id": 733,
      "name": "Toucannon",
      "id_string": "733"
  },
  {
      "id": 734,
      "name": "Yungoos",
      "id_string": "734"
  },
  {
      "id": 735,
      "name": "Gumshoos",
      "id_string": "735"
  },
  {
      "id": 736,
      "name": "Grubbin",
      "id_string": "736"
  },
  {
      "id": 737,
      "name": "Charjabug",
      "id_string": "737"
  },
  {
      "id": 738,
      "name": "Vikavolt",
      "id_string": "738"
  },
  {
      "id": 739,
      "name": "Crabrawler",
      "id_string": "739"
  },
  {
      "id": 740,
      "name": "Crabominable",
      "id_string": "740"
  },
  {
      "id": 741,
      "name": "Oricorio",
      "id_string": "741_baile"
  },
  {
      "id": 741,
      "name": "Oricorio",
      "id_string": "741_pompom"
  },
  {
      "id": 741,
      "name": "Oricorio",
      "id_string": "741_pau"
  },
  {
      "id": 741,
      "name": "Oricorio",
      "id_string": "741_sensu"
  },
  {
      "id": 742,
      "name": "Cutiefly",
      "id_string": "742"
  },
  {
      "id": 743,
      "name": "Ribombee",
      "id_string": "743"
  },
  {
      "id": 744,
      "name": "Rockruff",
      "id_string": "744"
  },
  {
      "id": 745,
      "name": "Lycanroc",
      "id_string": "745_midday"
  },
  {
      "id": 745,
      "name": "Lycanroc",
      "id_string": "745_midnight"
  },
  {
      "id": 745,
      "name": "Lycanroc",
      "id_string": "745_dusk"
  },
  {
      "id": 746,
      "name": "Wishiwashi",
      "id_string": "746"
  },
  {
      "id": 747,
      "name": "Mareanie",
      "id_string": "747"
  },
  {
      "id": 748,
      "name": "Toxapex",
      "id_string": "748"
  },
  {
      "id": 749,
      "name": "Mudbray",
      "id_string": "749"
  },
  {
      "id": 750,
      "name": "Mudsdale",
      "id_string": "750"
  },
  {
      "id": 751,
      "name": "Dewpider",
      "id_string": "751"
  },
  {
      "id": 752,
      "name": "Araquanid",
      "id_string": "752"
  },
  {
      "id": 753,
      "name": "Fomantis",
      "id_string": "753"
  },
  {
      "id": 754,
      "name": "Lurantis",
      "id_string": "754"
  },
  {
      "id": 755,
      "name": "Morelull",
      "id_string": "755"
  },
  {
      "id": 756,
      "name": "Shiinotic",
      "id_string": "756"
  },
  {
      "id": 757,
      "name": "Salandit",
      "id_string": "757"
  },
  {
      "id": 758,
      "name": "Salazzle",
      "id_string": "758"
  },
  {
      "id": 759,
      "name": "Stufful",
      "id_string": "759"
  },
  {
      "id": 760,
      "name": "Bewear",
      "id_string": "760"
  },
  {
      "id": 761,
      "name": "Bounsweet",
      "id_string": "761"
  },
  {
      "id": 762,
      "name": "Steenee",
      "id_string": "762"
  },
  {
      "id": 763,
      "name": "Tsareena",
      "id_string": "763"
  },
  {
      "id": 764,
      "name": "Comfey",
      "id_string": "764"
  },
  {
      "id": 765,
      "name": "Oranguru",
      "id_string": "765"
  },
  {
      "id": 766,
      "name": "Passimian",
      "id_string": "766"
  },
  {
      "id": 767,
      "name": "Wimpod",
      "id_string": "767"
  },
  {
      "id": 768,
      "name": "Golisopod",
      "id_string": "768"
  },
  {
      "id": 769,
      "name": "Sandygast",
      "id_string": "769"
  },
  {
      "id": 770,
      "name": "Palossand",
      "id_string": "770"
  },
  {
      "id": 771,
      "name": "Pyukumuku",
      "id_string": "771"
  },
  {
      "id": 772,
      "name": "Código Cero",
      "id_string": "772"
  },
  {
      "id": 773,
      "name": "Silvally",
      "id_string": "773"
  },
  {
      "id": 774,
      "name": "Minior",
      "id_string": "774"
  },
  {
      "id": 775,
      "name": "Komala",
      "id_string": "775"
  },
  {
      "id": 776,
      "name": "Turtonator",
      "id_string": "776"
  },
  {
      "id": 777,
      "name": "Togedemaru",
      "id_string": "777"
  },
  {
      "id": 778,
      "name": "Mimikyu",
      "id_string": "778"
  },
  {
      "id": 779,
      "name": "Bruxish",
      "id_string": "779"
  },
  {
      "id": 780,
      "name": "Drampa",
      "id_string": "780"
  },
  {
      "id": 781,
      "name": "Dhelmise",
      "id_string": "781"
  },
  {
      "id": 782,
      "name": "Jangmo-o",
      "id_string": "782"
  },
  {
      "id": 783,
      "name": "Hakamo-o",
      "id_string": "783"
  },
  {
      "id": 784,
      "name": "Kommo-o",
      "id_string": "784"
  },
  {
      "id": 785,
      "name": "Tapu Koko",
      "id_string": "785"
  },
  {
      "id": 786,
      "name": "Tapu Lele",
      "id_string": "786"
  },
  {
      "id": 787,
      "name": "Tapu Bulu",
      "id_string": "787"
  },
  {
      "id": 788,
      "name": "Tapu Fini",
      "id_string": "788"
  },
  {
      "id": 789,
      "name": "Cosmog",
      "id_string": "789"
  },
  {
      "id": 790,
      "name": "Cosmoem",
      "id_string": "790"
  },
  {
      "id": 791,
      "name": "Solgaleo",
      "id_string": "791"
  },
  {
      "id": 792,
      "name": "Lunala",
      "id_string": "792"
  },
  {
      "id": 793,
      "name": "Nihilego",
      "id_string": "793"
  },
  {
      "id": 794,
      "name": "Buzzwole",
      "id_string": "794"
  },
  {
      "id": 795,
      "name": "Pheromosa",
      "id_string": "795"
  },
  {
      "id": 796,
      "name": "Xurkitree",
      "id_string": "796"
  },
  {
      "id": 797,
      "name": "Celesteela",
      "id_string": "797"
  },
  {
      "id": 798,
      "name": "Kartana",
      "id_string": "798"
  },
  {
      "id": 799,
      "name": "Guzzlord",
      "id_string": "799"
  },
  {
      "id": 800,
      "name": "Necrozma",
      "id_string": "800"
  },
  {
      "id": 801,
      "name": "Magearna",
      "id_string": "801"
  },
  {
      "id": 801,
      "name": "Magearna",
      "id_string": "801_originalcolor"
  },
  {
      "id": 802,
      "name": "Marshadow",
      "id_string": "802"
  },
  {
      "id": 803,
      "name": "Poipole",
      "id_string": "803"
  },
  {
      "id": 804,
      "name": "Naganadel",
      "id_string": "804"
  },
  {
      "id": 805,
      "name": "Stakataka",
      "id_string": "805"
  },
  {
      "id": 806,
      "name": "Blacephalon",
      "id_string": "806"
  },
  {
      "id": 807,
      "name": "Zeraora",
      "id_string": "807"
  },
  {
      "id": 808,
      "name": "Meltan",
      "id_string": "808"
  },
  {
      "id": 809,
      "name": "Melmetal",
      "id_string": "809"
  },
  {
      "id": 810,
      "name": "Grookey",
      "id_string": "810"
  },
  {
      "id": 811,
      "name": "Thwackey",
      "id_string": "811"
  },
  {
      "id": 812,
      "name": "Rillaboom",
      "id_string": "812"
  },
  {
      "id": 813,
      "name": "Scorbunny",
      "id_string": "813"
  },
  {
      "id": 814,
      "name": "Raboot",
      "id_string": "814"
  },
  {
      "id": 815,
      "name": "Cinderace",
      "id_string": "815"
  },
  {
      "id": 816,
      "name": "Sobble",
      "id_string": "816"
  },
  {
      "id": 817,
      "name": "Drizzile",
      "id_string": "817"
  },
  {
      "id": 818,
      "name": "Inteleon",
      "id_string": "818"
  },
  {
      "id": 819,
      "name": "Skwovet",
      "id_string": "819"
  },
  {
      "id": 820,
      "name": "Greedent",
      "id_string": "820"
  },
  {
      "id": 821,
      "name": "Rookidee",
      "id_string": "821"
  },
  {
      "id": 822,
      "name": "Corvisquire",
      "id_string": "822"
  },
  {
      "id": 823,
      "name": "Corviknight",
      "id_string": "823"
  },
  {
      "id": 824,
      "name": "Blipbug",
      "id_string": "824"
  },
  {
      "id": 825,
      "name": "Dottler",
      "id_string": "825"
  },
  {
      "id": 826,
      "name": "Orbeetle",
      "id_string": "826"
  },
  {
      "id": 827,
      "name": "Nickit",
      "id_string": "827"
  },
  {
      "id": 828,
      "name": "Thievul",
      "id_string": "828"
  },
  {
      "id": 829,
      "name": "Gossifleur",
      "id_string": "829"
  },
  {
      "id": 830,
      "name": "Eldegoss",
      "id_string": "830"
  },
  {
      "id": 831,
      "name": "Wooloo",
      "id_string": "831"
  },
  {
      "id": 832,
      "name": "Dubwool",
      "id_string": "832"
  },
  {
      "id": 833,
      "name": "Chewtle",
      "id_string": "833"
  },
  {
      "id": 834,
      "name": "Drednaw",
      "id_string": "834"
  },
  {
      "id": 835,
      "name": "Yamper",
      "id_string": "835"
  },
  {
      "id": 836,
      "name": "Boltund",
      "id_string": "836"
  },
  {
      "id": 837,
      "name": "Rolycoly",
      "id_string": "837"
  },
  {
      "id": 838,
      "name": "Carkol",
      "id_string": "838"
  },
  {
      "id": 839,
      "name": "Coalossal",
      "id_string": "839"
  },
  {
      "id": 840,
      "name": "Applin",
      "id_string": "840"
  },
  {
      "id": 841,
      "name": "Flapple",
      "id_string": "841"
  },
  {
      "id": 842,
      "name": "Appletun",
      "id_string": "842"
  },
  {
      "id": 843,
      "name": "Silicobra",
      "id_string": "843"
  },
  {
      "id": 844,
      "name": "Sandaconda",
      "id_string": "844"
  },
  {
      "id": 845,
      "name": "Cramorant",
      "id_string": "845"
  },
  {
      "id": 846,
      "name": "Arrokuda",
      "id_string": "846"
  },
  {
      "id": 847,
      "name": "Barraskewda",
      "id_string": "847"
  },
  {
      "id": 848,
      "name": "Toxel",
      "id_string": "848"
  },
  {
      "id": 849,
      "name": "Toxtricity",
      "id_string": "849_amped"
  },
  {
      "id": 849,
      "name": "Toxtricity",
      "id_string": "849_lowkey"
  },
  {
      "id": 850,
      "name": "Sizzlipede",
      "id_string": "850"
  },
  {
      "id": 851,
      "name": "Centiskorch",
      "id_string": "851"
  },
  {
      "id": 852,
      "name": "Clobbopus",
      "id_string": "852"
  },
  {
      "id": 853,
      "name": "Grapploct",
      "id_string": "853"
  },
  {
      "id": 854,
      "name": "Sinistea",
      "id_string": "854_phony"
  },
  {
      "id": 854,
      "name": "Sinistea",
      "id_string": "854_antique"
  },
  {
      "id": 855,
      "name": "Polteageist",
      "id_string": "855_phony"
  },
  {
      "id": 855,
      "name": "Polteageist",
      "id_string": "855_antique"
  },
  {
      "id": 856,
      "name": "Hatenna",
      "id_string": "856"
  },
  {
      "id": 857,
      "name": "Hattrem",
      "id_string": "857"
  },
  {
      "id": 858,
      "name": "Hatterene",
      "id_string": "858"
  },
  {
      "id": 859,
      "name": "Impidimp",
      "id_string": "859"
  },
  {
      "id": 860,
      "name": "Morgrem",
      "id_string": "860"
  },
  {
      "id": 861,
      "name": "Grimmsnarl",
      "id_string": "861"
  },
  {
      "id": 862,
      "name": "Obstagoon",
      "id_string": "862"
  },
  {
      "id": 863,
      "name": "Perrserker",
      "id_string": "863"
  },
  {
      "id": 864,
      "name": "Cursola",
      "id_string": "864"
  },
  {
      "id": 865,
      "name": "Sirfetch’d",
      "id_string": "865"
  },
  {
      "id": 866,
      "name": "Mr. Rime",
      "id_string": "866"
  },
  {
      "id": 867,
      "name": "Runerigus",
      "id_string": "867"
  },
  {
      "id": 868,
      "name": "Milcery",
      "id_string": "868"
  },
  {
      "id": 869,
      "name": "Alcremie",
      "id_string": "869_strawberry"
  },
  {
      "id": 869,
      "name": "Alcremie",
      "id_string": "869_berry"
  },
  {
      "id": 869,
      "name": "Alcremie",
      "id_string": "869_love"
  },
  {
      "id": 869,
      "name": "Alcremie",
      "id_string": "869_star"
  },
  {
      "id": 869,
      "name": "Alcremie",
      "id_string": "869_clover"
  },
  {
      "id": 869,
      "name": "Alcremie",
      "id_string": "869_flower"
  },
  {
      "id": 869,
      "name": "Alcremie",
      "id_string": "869_ribbon"
  },
  {
      "id": 870,
      "name": "Falinks",
      "id_string": "870"
  },
  {
      "id": 871,
      "name": "Pincurchin",
      "id_string": "871"
  },
  {
      "id": 872,
      "name": "Snom",
      "id_string": "872"
  },
  {
      "id": 873,
      "name": "Frosmoth",
      "id_string": "873"
  },
  {
      "id": 874,
      "name": "Stonjourner",
      "id_string": "874"
  },
  {
      "id": 875,
      "name": "Eiscue",
      "id_string": "875"
  },
  {
      "id": 876,
      "name": "Indeedee",
      "id_string": "876"
  },
  {
      "id": 877,
      "name": "Morpeko",
      "id_string": "877"
  },
  {
      "id": 878,
      "name": "Cufant",
      "id_string": "878"
  },
  {
      "id": 879,
      "name": "Copperajah",
      "id_string": "879"
  },
  {
      "id": 880,
      "name": "Dracozolt",
      "id_string": "880"
  },
  {
      "id": 881,
      "name": "Arctozolt",
      "id_string": "881"
  },
  {
      "id": 882,
      "name": "Dracovish",
      "id_string": "882"
  },
  {
      "id": 883,
      "name": "Arctovish",
      "id_string": "883"
  },
  {
      "id": 884,
      "name": "Duraludon",
      "id_string": "884"
  },
  {
      "id": 885,
      "name": "Dreepy",
      "id_string": "885"
  },
  {
      "id": 886,
      "name": "Drakloak",
      "id_string": "886"
  },
  {
      "id": 887,
      "name": "Dragapult",
      "id_string": "887"
  },
  {
      "id": 888,
      "name": "Zacian",
      "id_string": "888"
  },
  {
      "id": 889,
      "name": "Zamazenta",
      "id_string": "889"
  },
  {
      "id": 890,
      "name": "Eternatus",
      "id_string": "890"
  },
  {
      "id": 891,
      "name": "Kubfu",
      "id_string": "891"
  },
  {
      "id": 892,
      "name": "Urshifu",
      "id_string": "892_single"
  },
  {
      "id": 892,
      "name": "Urshifu",
      "id_string": "892_rapid"
  },
  {
      "id": 893,
      "name": "Zarude",
      "id_string": "893"
  },
  {
      "id": 893,
      "name": "Zarude",
      "id_string": "893_dada"
  },
  {
      "id": 894,
      "name": "Regieleki",
      "id_string": "894"
  },
  {
      "id": 895,
      "name": "Regidrago",
      "id_string": "895"
  },
  {
      "id": 896,
      "name": "Glastrier",
      "id_string": "896"
  },
  {
      "id": 897,
      "name": "Spectrier",
      "id_string": "897"
  },
  {
      "id": 898,
      "name": "Calyrex",
      "id_string": "898"
  },
  {
      "id": 899,
      "name": "Wyrdeer",
      "id_string": "899"
  },
  {
      "id": 900,
      "name": "Kleavor",
      "id_string": "900"
  },
  {
      "id": 901,
      "name": "Ursaluna",
      "id_string": "901"
  },
  {
      "id": 902,
      "name": "Basculegion",
      "id_string": "902"
  },
  {
      "id": 903,
      "name": "Sneasler",
      "id_string": "903"
  },
  {
      "id": 904,
      "name": "Overqwil",
      "id_string": "904"
  },
  {
      "id": 905,
      "name": "Enamorus",
      "id_string": "905"
  },
  {
      "id": 905,
      "name": "Enamorus",
      "id_string": "905_therian"
  },
  {
      "id": 906,
      "name": "Sprigatito",
      "id_string": "906"
  },
  {
      "id": 907,
      "name": "Floragato",
      "id_string": "907"
  },
  {
      "id": 908,
      "name": "Meowscarada",
      "id_string": "908"
  },
  {
      "id": 909,
      "name": "Fuecoco",
      "id_string": "909"
  },
  {
      "id": 910,
      "name": "Crocalor",
      "id_string": "910"
  },
  {
      "id": 911,
      "name": "Skeledirge",
      "id_string": "911"
  },
  {
      "id": 912,
      "name": "Quaxly",
      "id_string": "912"
  },
  {
      "id": 913,
      "name": "Quaxwell",
      "id_string": "913"
  },
  {
      "id": 914,
      "name": "Quaquaval",
      "id_string": "914"
  },
  {
      "id": 915,
      "name": "Lechonk",
      "id_string": "915"
  },
  {
      "id": 916,
      "name": "Oinkologne",
      "id_string": "916"
  },
  {
      "id": 917,
      "name": "Tarountula",
      "id_string": "917"
  },
  {
      "id": 918,
      "name": "Spidops",
      "id_string": "918"
  },
  {
      "id": 919,
      "name": "Nymble",
      "id_string": "919"
  },
  {
      "id": 920,
      "name": "Lokix",
      "id_string": "920"
  },
  {
      "id": 921,
      "name": "Pawmi",
      "id_string": "921"
  },
  {
      "id": 922,
      "name": "Pawmo",
      "id_string": "922"
  },
  {
      "id": 923,
      "name": "Pawmot",
      "id_string": "923"
  },
  {
      "id": 924,
      "name": "Tandemaus",
      "id_string": "924"
  },
  {
      "id": 925,
      "name": "Maushold",
      "id_string": "925_four"
  },
  {
      "id": 925,
      "name": "Maushold",
      "id_string": "925_three"
  },
  {
      "id": 926,
      "name": "Fidough",
      "id_string": "926"
  },
  {
      "id": 927,
      "name": "Dachsbun",
      "id_string": "927"
  },
  {
      "id": 928,
      "name": "Smoliv",
      "id_string": "928"
  },
  {
      "id": 929,
      "name": "Dolliv",
      "id_string": "929"
  },
  {
      "id": 930,
      "name": "Arboliva",
      "id_string": "930"
  },
  {
      "id": 931,
      "name": "Squawkabilly",
      "id_string": "931_green"
  },
  {
      "id": 931,
      "name": "Squawkabilly",
      "id_string": "931_blue"
  },
  {
      "id": 931,
      "name": "Squawkabilly",
      "id_string": "931_yellow"
  },
  {
      "id": 931,
      "name": "Squawkabilly",
      "id_string": "931_white"
  },
  {
      "id": 932,
      "name": "Nacli",
      "id_string": "932"
  },
  {
      "id": 933,
      "name": "Naclstack",
      "id_string": "933"
  },
  {
      "id": 934,
      "name": "Garganacl",
      "id_string": "934"
  },
  {
      "id": 935,
      "name": "Charcadet",
      "id_string": "935"
  },
  {
      "id": 936,
      "name": "Armarouge",
      "id_string": "936"
  },
  {
      "id": 937,
      "name": "Ceruledge",
      "id_string": "937"
  },
  {
      "id": 938,
      "name": "Tadbulb",
      "id_string": "938"
  },
  {
      "id": 939,
      "name": "Bellibolt",
      "id_string": "939"
  },
  {
      "id": 940,
      "name": "Wattrel",
      "id_string": "940"
  },
  {
      "id": 941,
      "name": "Kilowattrel",
      "id_string": "941"
  },
  {
      "id": 942,
      "name": "Maschiff",
      "id_string": "942"
  },
  {
      "id": 943,
      "name": "Mabosstiff",
      "id_string": "943"
  },
  {
      "id": 944,
      "name": "Shroodle",
      "id_string": "944"
  },
  {
      "id": 945,
      "name": "Grafaiai",
      "id_string": "945"
  },
  {
      "id": 946,
      "name": "Bramblin",
      "id_string": "946"
  },
  {
      "id": 947,
      "name": "Brambleghast",
      "id_string": "947"
  },
  {
      "id": 948,
      "name": "Toedscool",
      "id_string": "948"
  },
  {
      "id": 949,
      "name": "Toedscruel",
      "id_string": "949"
  },
  {
      "id": 950,
      "name": "Klawf",
      "id_string": "950"
  },
  {
      "id": 951,
      "name": "Capsakid",
      "id_string": "951"
  },
  {
      "id": 952,
      "name": "Scovillain",
      "id_string": "952"
  },
  {
      "id": 953,
      "name": "Rellor",
      "id_string": "953"
  },
  {
      "id": 954,
      "name": "Rabsca",
      "id_string": "954"
  },
  {
      "id": 955,
      "name": "Flittle",
      "id_string": "955"
  },
  {
      "id": 956,
      "name": "Espathra",
      "id_string": "956"
  },
  {
      "id": 957,
      "name": "Tinkatink",
      "id_string": "957"
  },
  {
      "id": 958,
      "name": "Tinkatuff",
      "id_string": "958"
  },
  {
      "id": 959,
      "name": "Tinkaton",
      "id_string": "959"
  },
  {
      "id": 960,
      "name": "Wiglett",
      "id_string": "960"
  },
  {
      "id": 961,
      "name": "Wugtrio",
      "id_string": "961"
  },
  {
      "id": 962,
      "name": "Bombirdier",
      "id_string": "962"
  },
  {
      "id": 963,
      "name": "Finizen",
      "id_string": "963"
  },
  {
      "id": 964,
      "name": "Palafin",
      "id_string": "964"
  },
  {
      "id": 965,
      "name": "Varoom",
      "id_string": "965"
  },
  {
      "id": 966,
      "name": "Revavroom",
      "id_string": "966"
  },
  {
      "id": 967,
      "name": "Cyclizar",
      "id_string": "967"
  },
  {
      "id": 968,
      "name": "Orthworm",
      "id_string": "968"
  },
  {
      "id": 969,
      "name": "Glimmet",
      "id_string": "969"
  },
  {
      "id": 970,
      "name": "Glimmora",
      "id_string": "970"
  },
  {
      "id": 971,
      "name": "Greavard",
      "id_string": "971"
  },
  {
      "id": 972,
      "name": "Houndstone",
      "id_string": "972"
  },
  {
      "id": 973,
      "name": "Flamigo",
      "id_string": "973"
  },
  {
      "id": 974,
      "name": "Cetoddle",
      "id_string": "974"
  },
  {
      "id": 975,
      "name": "Cetitan",
      "id_string": "975"
  },
  {
      "id": 976,
      "name": "Veluza",
      "id_string": "976"
  },
  {
      "id": 977,
      "name": "Dondozo",
      "id_string": "977"
  },
  {
      "id": 978,
      "name": "Tatsugiri",
      "id_string": "978_curly"
  },
  {
      "id": 978,
      "name": "Tatsugiri",
      "id_string": "978_droopy"
  },
  {
      "id": 978,
      "name": "Tatsugiri",
      "id_string": "978_stretchy"
  },
  {
      "id": 979,
      "name": "Annihilape",
      "id_string": "979"
  },
  {
      "id": 980,
      "name": "Clodsire",
      "id_string": "980"
  },
  {
      "id": 981,
      "name": "Farigiraf",
      "id_string": "981"
  },
  {
      "id": 982,
      "name": "Dudunsparce",
      "id_string": "982_two"
  },
  {
      "id": 982,
      "name": "Dudunsparce",
      "id_string": "982_three"
  },
  {
      "id": 983,
      "name": "Kingambit",
      "id_string": "983"
  },
  {
      "id": 984,
      "name": "Colmilargo",
      "id_string": "984"
  },
  {
      "id": 985,
      "name": "Colagrito",
      "id_string": "985"
  },
  {
      "id": 986,
      "name": "Furioseta",
      "id_string": "986"
  },
  {
      "id": 987,
      "name": "Melenaleteo",
      "id_string": "987"
  },
  {
      "id": 988,
      "name": "Reptalada",
      "id_string": "988"
  },
  {
      "id": 989,
      "name": "Pelarena",
      "id_string": "989"
  },
  {
      "id": 990,
      "name": "Ferrodada",
      "id_string": "990"
  },
  {
      "id": 991,
      "name": "Ferrosaco",
      "id_string": "991"
  },
  {
      "id": 992,
      "name": "Ferropalmas",
      "id_string": "992"
  },
  {
      "id": 993,
      "name": "Ferrocuello",
      "id_string": "993"
  },
  {
      "id": 994,
      "name": "Ferropolilla",
      "id_string": "994"
  },
  {
      "id": 995,
      "name": "Ferropúas",
      "id_string": "995"
  },
  {
      "id": 996,
      "name": "Frigibax",
      "id_string": "996"
  },
  {
      "id": 997,
      "name": "Arctibax",
      "id_string": "997"
  },
  {
      "id": 998,
      "name": "Baxcalibur",
      "id_string": "998"
  },
  {
      "id": 999,
      "name": "Gimmighoul",
      "id_string": "999_chest"
  },
  {
      "id": 999,
      "name": "Gimmighoul",
      "id_string": "999_roaming"
  },
  {
      "id": 1000,
      "name": "Gholdengo",
      "id_string": "1000"
  },
  {
      "id": 1001,
      "name": "Wo-Chien",
      "id_string": "1001"
  },
  {
      "id": 1002,
      "name": "Chien-Pao",
      "id_string": "1002"
  },
  {
      "id": 1003,
      "name": "Ting-Lu",
      "id_string": "1003"
  },
  {
      "id": 1004,
      "name": "Chi-Yu",
      "id_string": "1004"
  },
  {
      "id": 1005,
      "name": "Bramaluna",
      "id_string": "1005"
  },
  {
      "id": 1006,
      "name": "Ferropaladín",
      "id_string": "1006"
  },
  {
      "id": 1007,
      "name": "Koraidon",
      "id_string": "1007"
  },
  {
      "id": 1008,
      "name": "Miraidon",
      "id_string": "1008"
  },
  {
      "id": 1009,
      "name": "Ondulagua",
      "id_string": "1009"
  },
  {
      "id": 1010,
      "name": "Ferroverdor",
      "id_string": "1010"
  },
  {
      "id": 1011,
      "name": "Dipplin",
      "id_string": "1011"
  },
  {
      "id": 1012,
      "name": "Poltchageist",
      "id_string": "1012_counterfeit"
  },
  {
      "id": 1012,
      "name": "Poltchageist",
      "id_string": "1012_artisan"
  },
  {
      "id": 1013,
      "name": "Sinistcha",
      "id_string": "1013_counterfeit"
  },
  {
      "id": 1013,
      "name": "Sinistcha",
      "id_string": "1013_artisan"
  },
  {
      "id": 1014,
      "name": "Okidogi",
      "id_string": "1014"
  },
  {
      "id": 1015,
      "name": "Munkidori",
      "id_string": "1015"
  },
  {
      "id": 1016,
      "name": "Fezandipiti",
      "id_string": "1016"
  },
  {
      "id": 1017,
      "name": "Ogerpon",
      "id_string": "1017_teal"
  },
  {
      "id": 1018,
      "name": "Archaludon",
      "id_string": "1018"
  },
  {
      "id": 1019,
      "name": "Hydrapple",
      "id_string": "1019"
  },
  {
      "id": 1020,
      "name": "Flamariete",
      "id_string": "1020"
  },
  {
      "id": 1021,
      "name": "Electrofuria",
      "id_string": "1021"
  },
  {
      "id": 1022,
      "name": "Ferromole",
      "id_string": "1022"
  },
  {
      "id": 1023,
      "name": "Ferrotesta",
      "id_string": "1023"
  },
  {
      "id": 1024,
      "name": "Terapagos",
      "id_string": "1024"
  },
  {
      "id": 1025,
      "name": "Pecharunt",
      "id_string": "1025"
  }
]

// Crear las filas de la tabla
const tableBody = document.getElementById("pokemonTableBody");
const commonColumnsTemplate = document.getElementById("commonColumnsTemplate");

pokemonData.forEach((pokemon, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${pokemon.id}</td>
        <td><img src="images/home-sprites/${pokemon.id_string}.png" width="100"></td>
        <td><strong>${pokemon.name}</strong></td>
    `;

    // Clonar la plantilla y añadirla a la fila
    const commonColumns = commonColumnsTemplate.content.cloneNode(true);
    row.appendChild(commonColumns);

    tableBody.appendChild(row);
});

// Inicializar los dropdowns después de crear las filas
document.querySelectorAll('.dropdown').forEach((dropdown) => {
    const arrow = dropdown.querySelector('.dropdown-arrow');
    const menu = dropdown.querySelector('.dropdown-menu');
    const displayImg = dropdown.querySelector('.dropdown-display-img');
    const displayText = dropdown.querySelector('.dropdown-display-text');

    const clearButton = dropdown.querySelector('.clear-button');
    clearButton.addEventListener('click', (event) => {
        event.stopPropagation();
        displayImg.src = '';
        displayText.textContent = '';
        displayImg.style.visibility = 'hidden';
        displayText.style.visibility = 'hidden';
    });

    arrow.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el evento se propague y cierre el menú inmediatamente
        dropdown.classList.toggle('open'); // Añade o elimina la clase 'open' a 'dropdown'
    });

    menu.querySelectorAll('a').forEach((option) => {
        option.addEventListener('click', (event) => {
            event.preventDefault();

            const imgPath = option.getAttribute('data-img');
            const text = option.getAttribute('data-text');

            // Actualizar la imagen y el texto
            if (imgPath) {
                displayImg.src = imgPath;
                displayImg.classList.remove('hidden');
                displayImg.style.visibility = 'visible';
            } else {
                displayImg.classList.add('hidden');
            }

            displayText.textContent = text;
            displayText.style.visibility = 'visible';

            dropdown.classList.remove('open'); // Cerrar el menú desplegable
        });
    });
});

document.addEventListener('click', (event) => {
    document.querySelectorAll('.dropdown').forEach((dropdown) => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});