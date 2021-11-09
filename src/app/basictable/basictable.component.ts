import { Component, OnInit } from '@angular/core';
import { BasictableService, Tabla } from '../servicios/basictable.service';


@Component({
  selector: 'app-basictable',
  templateUrl: './basictable.component.html',
  styleUrls: ['./basictable.component.css']
})
export class BasictableComponent implements OnInit {
  tabla:Tabla[]=[];

  constructor(private _basictableService:BasictableService) {
    this.tabla=_basictableService.gettabla();

   }

  ngOnInit(): void {
  }

}
