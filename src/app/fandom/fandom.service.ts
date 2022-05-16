import { Injectable } from '@angular/core';
import { Fandom } from './fandom.model';

@Injectable({
  providedIn: 'root'
})
export class FandomService {

  private fandoms: Fandom[]=[];

  constructor() {
    this.fandoms = JSON.parse(localStorage.getItem("data")||'[]');
  }

  getFandoms(){
    return this.fandoms;
  }

  agregarFan(fandom:Fandom){
    this.fandoms.push(fandom);
    localStorage.setItem('data',JSON.stringify(this.fandoms));
  } 

  nuevoFan(): Fandom {
    return {
      name:'',
      correo:'',
      sexo:'',
      fecha:'',
      bando:''
    };
  }
}
