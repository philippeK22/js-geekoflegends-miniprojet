
import { Personnage } from "./personnage.js";

export class Mage extends Personnage{
    constructor(nom, ptVie, ptAttaque, ptMana){
        super(nom, ptVie, ptAttaque);
        this.ptMana = ptMana;
    }
}

