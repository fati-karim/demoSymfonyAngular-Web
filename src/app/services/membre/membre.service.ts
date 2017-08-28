import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} 	from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class MembresService {
	
	constructor(private http: Http){
		console.log('MembresService initialized ....');
	}

	getMembres(){
		return this.http.get('http://angular-symfony.dev/app_dev.php/api/membres').map(res => res.json() as Array<Membre>);
	}

	getMembre(idMembre: string): Promise<Membre>{
		return this.http.get('http://angular-symfony.dev/app_dev.php/api/membres/'+idMembre)
		  .toPromise()
	      .then( res => res.json() as Membre )
	      .catch( error => {
	        console.error( 'Impossible d enregistrer l actualite ', error );
	        alert( 'service : Impossible d enregistrer l actualite ' );
	        throw error;
	      } );;
	}

	deleteMembre(){
		return this.http.delete('http://angular-symfony.dev/app_dev.php/api/membresid/delete').map(res => res.json());
	}

	saveMembre(membre: Membre): Promise<Membre>{
	    
	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    return this.http
	      .post( 'http://angular-symfony.dev/app_dev.php/api/membres/add', 
	            JSON.stringify(this.membreSerializer(membre)), { headers: headers } )
	      .toPromise()
	      .then( res => res.json() as Membre )
	      .catch( error => {
	        console.error( 'Impossible d enregistrer le membre ', error );
	        alert( 'service : Impossible d enregistrer le membre ' );
	        throw error;
	      } );
	}

	updateMembre(membre: Membre): Promise<Membre>{
		
		let headers = new Headers({ 'Content-Type': 'application/json' });
	    return this.http
	      .post( 'http://angular-symfony.dev/app_dev.php/api/membres/update', 
	            JSON.stringify(this.membreSerializer(membre)), { headers: headers } )
	      .toPromise()
	      .then( res => res.json() as Membre )
	      .catch( error => {
	        console.error( 'Impossible de maj le membre ', error );
	        alert( 'service : Impossible de maj le membre ' );
	        throw error;
	      } );
	}


	public membreSerializer(membre: Membre) {
		
		const membreDetailDTO = {};

		membreDetailDTO['id'] = membre.id;
		membreDetailDTO['name'] = membre.name;
		membreDetailDTO['profil'] = membre.profil;
		membreDetailDTO['age'] = membre.age;
		membreDetailDTO['stars'] = membre.stars;

		const membreDTO = {};
		membreDTO['membre'] = membreDetailDTO;

		return membreDTO;
	} 
}