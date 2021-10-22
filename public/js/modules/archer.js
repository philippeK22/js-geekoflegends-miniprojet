// import {Personnage } from "./personnage.js";

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

};