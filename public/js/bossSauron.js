import { Personnage } from "./personnage.js";
 export class BossSauron extends Personnage{
    constructor(nom,vie,attaque){
        this.nom =nom;
        this.vie = vie;
        this.attaque = attaque

    }
}