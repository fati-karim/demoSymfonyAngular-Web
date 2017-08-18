import { Component } from '@angular/core';
import { MembresService } from '../../services/membre/membre.service';

import '../../Model/membre.entity';

@Component({
  moduleId: module.id,
  selector: 'app-index-membre',
  templateUrl :'index.component.html',
  providers : [MembresService]
})
export class IndexMembreComponent  { 

	membres : Membre[]; 
	membre : Membre;

	constructor(private membresService : MembresService){

		this.membresService.getMembres().subscribe(membres => {
			this.membres = membres;
		});
	}

	ajouterMembre(idMembre:string,pName:string,pProfil:string,pAge:number,pStars:number){

		this.membre = {
			id : idMembre,
			name : pName,
			profil : pProfil,
			age : pAge,
			stars : pStars
		};;

		this.membresService.postMembre(this.membre).subscribe(membres => {
			this.membres = membres;
		});
	}
}




