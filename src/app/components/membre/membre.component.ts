import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { NgForm } from "@angular/forms";

import { MembresService } from '../../services/membre/membre.service';

import '../../Model/membre.entity';

@Component({
  moduleId: module.id,
  selector: 'app-membre',
  templateUrl :'membre.component.html',
  providers : [MembresService]
})
export class MembreComponent implements OnInit { 

	membres : Membre[]; 
	membre : Membre;

	@ViewChild('membreForm') membreForm: NgForm;
	constructor(private membresService : MembresService){
	}

	ngOnInit() {
	   this.loadMembres();
	   this.membre = {
		      id: "",
		      name : "",
		      profil : "",
		      age : null,
		      stars : null
		    };
  	}

  	loadMembres(){
  		 this.membresService.getMembres().subscribe(membres => {
	      this.membres = membres;});
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
		          });})
		        .catch( error => {
		          alert( 'component : Impossible d enregistrer le membre ');
		          throw error;});
	    }
	}

	modifierMembre(pId:string,pName:string,pProfil:string,pAge:number,pStars:number){

	    if(this.membreForm.valid){
		    this.membre = {
		      id: pId,
		      name : pName,
		      profil : pProfil,
		      age : pAge,
		      stars : pStars
		    };
		    this.membresService.updateMembre(this.membre)
		        .then((data) => {
		          alert( 'add successefully');
		          this.membresService.getMembres().subscribe(membres => {
		            this.membres = membres;});
		          this.membresService.getMembre(this.membre.id).then(membre => {
		            this.membre = membre;});
		      	})
		        .catch( error => {
		          alert( 'component : Impossible d enregistrer le membre ');
		          throw error;});
	    }
	}



	recupererMembre(pId:string){

		    this.membresService.getMembre(pId)
		        .then((data) => {
		            this.membre = data;})
		        .catch( error => {
		          alert( 'component : Impossible de charger le membre ');
		          throw error;});
	    
	}

	/*deleteMembre(pName:string,pProfil:string,pAge:number,pStars:number){

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
		          });})
		        .catch( error => {
		          alert( 'component : Impossible d enregistrer le membre ');
		          throw error;});
	    }
	}*/
}