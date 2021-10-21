import { Personnage } from "./personnage.js";
 export class BossLilith extends Personnage {
    constructor(nom,vie,attaque){
       super(nom,vie,attaque)

    }
    enigmes(){
        
      let enigme =[ `Bonjour je commence le jeux Geek of legends la 1ère qu'est ce qui est jaune et qui attends?
      en deuxième Je ne peux pas marcher, j’ai pourtant un dos et quatre pieds. Qui suis-je ?
      en troisième Combien de temps peut vivre une souris ? `]
      let random = Math.floor(Math.round()* enigme.length);
      let choix = enigme[random];
      let reponse = ["jonathan","une chaise","sa depends des chats"];
      if (this.vie <= 100) {
          alert(choix);
      }
      let maReponse = prompt("mets ta reponse");
      if (random == 0 && maReponse == reponse[0]){
          alert("lilith est mort");

      }
      else if (random == 1 && maReponse == reponse[1]) {
          alert("lilith est mort")
          
      }
      else if (random == 2 && maReponse == reponse[2]) {
          alert(" lilith est mort")
          
      }
      else if (random == 3 && maReponse == reponse[3]) {
          alert("lilith est mort")
          
      }
      else if (random == 4 && maReponse == reponse[4]) {
          alert("lilith est mort")
          
      }

  }
}