import { Component, OnInit } from '@angular/core';
import { DashboardService, Venta, Comentario,Chats } from '../servicios/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   ventas:Venta[]=[];
   comentarios:Comentario[]=[];
   chat:Chats[]=[];


  constructor(private _dashboardService: DashboardService) {
    //console.log("Creando El Componente dashboard..")
    console.log(_dashboardService.getComentario());
    this.ventas=_dashboardService.getVentas();
    this.comentarios=_dashboardService.getComentario();
    this.chat=_dashboardService.getChat();


   }


  ngOnInit(): void {
  }

}
