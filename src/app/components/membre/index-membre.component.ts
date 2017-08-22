import {Component, Input, OnInit} from '@angular/core';
import { MembresService } from '../../services/membre/membre.service';

import '../../Model/membre.entity';

@Component({
  moduleId: module.id,
  selector: 'app-index-membre',
  templateUrl :'index-membre.component.html',
  providers : [MembresService]
})
export class IndexMembreComponent implements OnInit { 

	membres : Membre[]; 
	membre : Membre;

	constructor(private membresService : MembresService){
	}

	ngOnInit() {
	   this.loadMembres();
  	}

  	loadMembres(){
  		 this.membresService.getMembres().subscribe(membres => {
	      this.membres = membres;

	    });
  	}
}




