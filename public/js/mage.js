import { Personnage } from "./personnage.js";

 export class Mage extends Personnage{
    constructor(nom,vie,attaque){
        super(nom,vie,attaque)
      
        this.mana = Math.floor(Math.random()* 7,9,11);

    }
    attaque(){

    }
    defense(){

    }
}

