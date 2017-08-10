import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} 	from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MemresService {
	
	constructor(private http: Http){
		console.log('MembresService initialized ....');
		console.log(this.http.get('http://angular-symfony.dev/app_dev.php/api/membres').map(res => res.json()))
	}

	getMembres(){
		return this.http.get('http://angular-symfony.dev/app_dev.php/api/membres').map(res => res.json());
	}

	getMembre(idMembre: number){
		return this.http.get('http://angular-symfony.dev/app_dev.php/api/membres/'+idMembre).map(res => res.json());
	}

	deleteMembre(){
		return this.http.delete('http://angular-symfony.dev/app_dev.php/api/membresid/delete').map(res => res.json());
	}

	postMembre(membre: Membre){

		let body = JSON.stringify(membre);
        let headers = new Headers({ 'Content-Type': 'application/json', async: false });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://angular-symfony.dev/app_dev.php/api/membres/ajouter', body, options)
            .map(res => {
                // If request fails, throw an Error that will be caught
                if (res.status < 200 || res.status >= 300) {
                    throw new Error('This request has failed ' + res.status);
                }
                // If everything went fine, return the response
                else {
                    return res.json();
                }
            });
	}

	updateMembre(){
		return this.http.delete('http://angular-symfony.dev/app_dev.php/api/membres/id/update').map(res => res.json());
	}

}