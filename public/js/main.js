

import { BossChrono } from "./modules/bossChrono.js";
import { BossSauron } from "./modules/bossSauron.js";
import { BossLilith } from "./modules/bossLilith.js";

import {Mage} from "./modules/mage.js";
import {Archer} from "./modules/archer.js";
import {Guerrier} from "./modules/guerrier.js";
import { Personnage } from "./modules/personnage.js";


// ----------------------------------------------------------------------------------

// les boss chrono
let bossChronos = new BossChrono("chrono",390,90);
bossChronos.enigmes();
console.log(bossChronos);

// boss Sauron
let bossSauron = new BossSauron("sauron", 400,20);
bossSauron.enigmes();
console.log(bossSauron);
//boss lilith
let bossLilith = new BossLilith("lilith",350,42);
bossLilith.enigmes();
console.log(bossLilith);

// ------------------------------------------------------------------------------------------

//  le mage
let magicien = new Mage("magicien",100,150,0);
magicien.attaques();
magicien.defense();
console.log(magicien);

// archeeer

let zelda = new Archer("épée",120,100);
zelda.attaques();
zelda.defense();
zelda.flecheRandom();

// le guerrier


let gladiator =new Guerrier("gladiator",200,50,0);
gladiator.attaques();
gladiator.defense();
gladiator.methodeRage();
console.log(gladiator);
let phil = new Personnage("philippe",34,50);
console.log(phil);


