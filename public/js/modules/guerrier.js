
import { Personnage } from "./personnage.js";

export class Guerrier extends Personnage{
    constructor(nom, ptVie, ptAttaque, ptRage){
        super(nom, ptVie, ptAttaque);
        this.ptRage = ptRage;
    }
}