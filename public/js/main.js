
import {
    Boss
} from "./modules/boss.js";
import {
    Guerrier
} from "./modules/guerrier.js";
import {
    Mage
} from "./modules/mage.js";
import {
    Archer
} from "./modules/archer.js";



let bossSauron = new Boss("Sauron", 100, 13);
let bossChronos= new Boss("Chronos", 100, 20);
let bossLilith = new Boss("Lilith", 100, 7);
let listBoss = [bossSauron, bossChronos, bossLilith];
let chosenBoss = listBoss[Math.round(Math.random() * (listBoss.length - 1))];



let bankLife = 150;
let bankAttack = 50;
let nom, ptVie, ptAttaque, ptSpec;

let init = function(classe) {
    nom = prompt(`Veuillez entrer le nom de votre ${classe} :`);
    ptVie = prompt(`Choisissez les points de vie de ${nom} (${bankLife} points disponibles.)`);
    while (ptVie > bankLife) {
        ptVie = prompt(`Veuillez insérer un montant plus petit. (${bankLife} points disponibles.)`);
    };
    bankLife -= ptVie;

    ptAttack = prompt(`Choisissez les points d'attaque de ${nom} (${bankAttack} points disponibles.)`);
    while (ptAttaque > bankAttack) {
        ptAttaque = prompt(`Veuillez insérer un montant plus petit. (${bankAttack} points disponibles.)`);
    };
    bankAttack -= ptAttaque;
    if(classe == 'guerrier'){
        ptSpec = 0;
    } else if (classe == 'mage'){
        let manas = [7, 9, 11];
        let numRand = Math.round(Math.random() * (manas.length - 1));
        ptSpec = manas[numRand];
    } else if (classe == 'archer'){
        let arrows = [7, 8, 9, 10, 11];
        let numRand = Math.round(Math.random() * (arrows.length - 1));
        ptSpec = arrows[numRand];

    }
}


let gladiator = new Guerrier('guerrier', 100, 20, 0);
let magicien = new Mage('mage', 10, 20, 7);
let zelda = new Archer('archer', 10, 20, 9);

export let attaquants = [gladiator, magicien, zelda];

let i = 0;
while(gladiator.ptVie > 0 && magicien.ptVie > 0 && zelda.ptVie> 0 && chosenBoss.ptVie > 20){
    attaquants = [gladiator, magicien, zelda];
    attaquants[i].attack(chosenBoss);
    if(i < 2){
        i++;
    } else {
        i = 0;
        let numRand = Math.round(Math.random() * (attaquants.length - 1));
        chosenBoss.attack(attaquants[numRand]);
    }
    
}



