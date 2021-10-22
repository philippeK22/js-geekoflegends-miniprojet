// import { Personnage } from "./personnage.js";


 export class Guerrier{
     constructor(nom,vie,attaque,rage){
        //  super(nom,vie,attaque)
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
         this.rage = rage;
        
         

     }
     attaques(){
         this.attaque = this.attaque * 1.25;
         this.vie = this.vie -50;

     }
     defense(){
         this.attaque = this.attaque /2;
         this.vie = this.vie * 2.5;
         
     }
     methodeRage(){
         for (let i = 1; i < 4; i++) {
             this.rage = this.rage +1;
             
         };
         this.attaque = this.attaque +11;
     };

 };