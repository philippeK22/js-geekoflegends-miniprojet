

import { Personnage } from "./personnage.js";

export class Archer extends Personnage{
    constructor(nom, ptVie, ptAttaque, ptArrow){
        super(nom, ptVie, ptAttaque);
        this.ptArrow = ptArrow;
    }
}