import { Component } from '@angular/core';
import { MemresService } from '../../services/membre/membre.service';
import './membre.entity';


@Component({
  moduleId: module.id,
  selector: 'indexMembre',
  templateUrl :'index.component.html',
  providers : [MemresService]
})
export class IndexMembreComponent  { 

	membres : Membre[]; 
	membre : Membre;

	constructor(private membresService : MemresService){

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




