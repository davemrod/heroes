import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FandomService } from './fandom.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { MostrarComponent } from '../mostrar/mostrar.component';


@NgModule({
  declarations: [ HomeComponent ],
  imports: [ CommonModule, FormsModule ],
  providers: [ FandomService ],
  exports: [ HomeComponent ]
})

export class FandomModule { }
