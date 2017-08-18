import {Component} from "@angular/core";
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

  constructor(private membresService : MembresService){

    /*this.membresService.getMembres().subscribe(membres => {
      this.membres = membres;
    });*/
  }


  ajouterMembre(pName:string,pProfil:string,pAge:number,pStars:number){

    this.membre = {
      id: "",
      name : pName,
      profil : pProfil,
      age : pAge,
      stars : pStars
    };
    
     /*this.membresService.postMembre(this.membre)
        .then(()=>this.router.navigate(['/membres']));

    /* this.membresService.postMembre(this.membre).subscribe(
            response =>  {
        if(response.error) { 
          alert('22222222222');
          alert(`The user could not be added, server Error.`);
                } else {
                  alert('33333333333');
          alert(`The user has been added.`);
                }
            },
            error=> {
               alert('4444444444444');
        alert(`The user could not be added error , server Error.`);
             }
        ); */

  }

}
