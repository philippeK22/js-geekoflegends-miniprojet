import {Personnage  } from "./personnage.js";

 export class Archer extends Personnage{
    constructor(nom,vie,attaque){
        super(mana)
        
        this.fleches = "";
        

    }
    attaque(){
        this.attaque -this.attaque *1.4;
        this.vie -this.vie -50;

    }
    defense(){
        
    }

}