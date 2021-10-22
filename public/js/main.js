

import { BossChrono } from "./bossChrono.js";
import { BossSauron } from "./bossSauron.js";
import { BossLilith } from "./bossLilith.js";

import {Mage} from "./mage.js";
import {Archer} from "./archer.js";
import {Guerrier} from "./guerrier.js";
import { Personnage } from "./personnage.js";
// console.log(Personnage);

// ----------------------------------------------------------------------------------

// les boss chrono
let bossChronos = new BossChrono("chrono",60,90);
bossChronos.enigmes();
console.log(bossChronos);

// boss Sauron
let bossSauron = new BossSauron("sauron", 200,20);
bossSauron.enigmes();
console.log(bossSauron);
//boss lilith
let bossLilith = new BossLilith("lilith",255,72);
bossLilith.enigmes();
console.log(bossLilith);

// ------------------------------------------------------------------------------------------

//  le mage
let magicien = new Mage("magicien",320,90,120);
magicien.attaque();
magicien.defense();
console.log(magicien);

// archeeer
// let archer = new Archer("archer", 60, 90);
let zelda = new Archer("épée",125,70);
zelda.attaque();
zelda.defense();
zelda.flecheRandom();

// le guerrier

// let guerrier = new Guerrier("guerrier", 40, 80);
let gladiator =new Guerrier("gladiator",270,180);
gladiator.attaque();
gladiator.defense();
gladiator.methodeRage();
console.log(gladiator);

let phil = new Personnage("philippe",34,50);
console.log(phil);


