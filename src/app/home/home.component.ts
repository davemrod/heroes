import { Component, OnInit } from '@angular/core';
import { FandomService } from '../fandom/fandom.service';
import { Fandom } from '../fandom/fandom.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fandom: Fandom={
    name: '',
    correo: '',
    sexo: '',
    fecha:'',
    bando:''
  };

  constructor(private fandomService: FandomService) { }

  ngOnInit(): void {
    this.fandom = this.fandomService.nuevoFan();
  }

  nuevoFan(): void{
    this.fandomService.agregarFan(this.fandom);
    this.fandom = this.fandomService.nuevoFan();
  }

}
