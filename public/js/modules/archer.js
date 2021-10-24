// import {Personnage } from "./personnage.js";

// import { BossChrono } from "./bossChrono.js";
// import { BossSauron } from "./bossSauron.js";
// import { BossLilith } from "./bossLilith.js";
// let bossChronos = new BossChrono("chrono",290,90);
// let bossSauron = new BossSauron("sauron", 400,20);
// let bossLilith = new BossLilith("lilith",350,42);
// let TroisBoss=[bossChronos.nom,bossSauron.nom,bossLilith.nom];
// let bossRandom =TroisBoss[Math.floor(Math.random()* TroisBoss.length)];



 export class Archer{
    constructor(nom,vie,attaque){
        // super(nom,vie,attaque)
        // super(mana)
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.fleches = "";
        
        
        

    }
    attaques(){
        this.attaque = this.attaque *1.4;
        this.vie = this.vie -50;

    }
    defense(){
        this.attaque = this.attaque /2
        this.vie = this.vie *2.5
        
    }
    flecheRandom(){
        let fleche =[7,8,9,10,11];
        let changeFleche = fleche[Math.floor(Math.random()* fleche.length)];
        this.fleche = changeFleche;
        return this.fleche
    }
    attaqueBoss(){
        console.log(`${this.nom} attaque ${bossRandom} et lui fait perdre - ${this.attaque}`);
    }

};