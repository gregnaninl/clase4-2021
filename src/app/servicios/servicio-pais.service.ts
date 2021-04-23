import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioPaisService {

  private paisActual : string;

  constructor(private http : HttpClient) { }


  public getTodosLosPaises(){
  //  return this.http.get('https://restcountries.eu/rest/v2/all');
   return this.http.get('https://restcountries.eu/rest/v2/name/united');
  }

  public taerPaisActor(pais:string){
    return this.http.get('https://restcountries.eu/rest/v2/name/'+pais);
  }
}
