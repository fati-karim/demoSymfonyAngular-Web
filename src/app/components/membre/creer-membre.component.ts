import { Component, ViewChild} from "@angular/core";
import { NgForm } from "@angular/forms";
import { MembresService } from '../../services/membre/membre.service';

import '../../Model/membre.entity';


@Component({
  moduleId: module.id,
  selector: 'app-creer-membre',
  templateUrl: 'creer-membre.component.html',
  providers : [MembresService]
})
export class CreerMembreComponent {
  
  membre : Membre;
  membres : Membre[];

  @ViewChild('membreForm') membreForm: NgForm;

  constructor(private membresService : MembresService){

    this.membresService.getMembres().subscribe(membres => {
      this.membres = membres;
    });
  }
  
  ajouterMembre(pName:string,pProfil:string,pAge:number,pStars:number){

    if(this.membreForm.valid){

    this.membre = {
      id: "",
      name : pName,
      profil : pProfil,
      age : pAge,
      stars : pStars
    };
    
     this.membresService.saveMembre(this.membre)
        .then((data) => {
          alert( 'add successefully');
          this.membresService.getMembres().subscribe(membres => {
            this.membres = membres;
          });
          })
        .catch( error => {
          alert( 'component : Impossible d enregistrer le membre ');
          throw error;
        } );
      }
    

  }

}
