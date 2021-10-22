// import { Personnage } from "./personnage.js";

 export class Mage{
    constructor(nom,vie,attaque,mana){
        // super(nom,vie,attaque)
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.mana= mana;
      

    }
    attaques(){
        this.attaque = this.attaque * 1.4;
        this.vie = this.vie -50;


    }
    defense(){
        this.attaque = this.attaque /2;
        this.vie = this.vie *2.5;

    }
}

