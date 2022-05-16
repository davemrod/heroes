import { Component, OnInit } from '@angular/core';
import { FandomService } from '../fandom/fandom.service';
import { Fandom } from '../fandom/fandom.model';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  fandoms: Fandom[]=[];

  constructor(private fandomService: FandomService) { }

  ngOnInit(): void {
    this.fandoms = this.fandomService.getFandoms();
  }
}
