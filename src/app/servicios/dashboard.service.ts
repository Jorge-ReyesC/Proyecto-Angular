import { Injectable } from '@angular/core';

@Injectable()

export class DashboardService {
  private ventas:Venta[]=[
    {
      nombre: "Elite Admin",
      estado: "Vendido",
      fecha: "April 18,2021",
      precio:24
    },
    {
      nombre:"Real Homes WP Theme",
      estado:"Extendido",
      fecha:"April 19,2021",
      precio:1250
    },
    {
      nombre:"Ample Admin",
      estado:"Extendido",
      fecha:"April 19, 2021",
      precio:1250
    },
    {
      nombre:"Medical Pro WP Theme",
      estado:"Impuesto",
      fecha:"April 20, 2021",
      precio:-24
    },
    {
      nombre:"Hosting press html",
      estado:"Vendido",
      fecha:"April 21, 2021",
      precio:24
    },
    {
      nombre:"Digital Agency PSD",
      estado:"Vendido",
      fecha:"April 23, 2021",
      precio:-14
    },
    {
      nombre:"Helping Hands WP Theme",
      estado:"Vendido",
      fecha:"April 22, 2021",
      precio:64
    }

  ];

  private comentarios: Comentario[]=[
    {
      nombres: "James Anderson",
      comentario:"Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Ha sobrevivido no solo cinco siglos.",
      estados: "Pendiente",
      fecha:"April 14, 2021"
    },
    {
      nombres: "James Anderson",
      comentario:"Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Ha sobrevivido no solo cinco siglos.",
      estados: "Aprobado",
      fecha:"April 15, 2021"
    },
    {
      nombres: "Johnathan Doeting",
      comentario:"Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Ha sobrevivido no solo cinco siglos.",
      estados: "Denegado",
      fecha:"April 16, 2021"
    }

  ];
  private chat:Chats[]=[
    {
      nombres: "Varun Dhavan",
      estados: "online",
    },
    {
      nombres: "Genelia Deshmukh",
      estados: "Ausente",
    },
    {
      nombres: "Ritesh Deshmukh",
      estados: "Ocupado",
    },
    {
      nombres: "Arijit Sing",
      estados: "Desconectado",
    },
    {
      nombres: "Govinda Star",
      estados: "En Linea",
    },
    {
      nombres: "John Abraham",
      estados: "En Linea",
    },


  ];

  constructor(){
    console.log("Servicio Dashboard Listo para Usarse...")
  }

  getVentas():Venta[]{
    return this.ventas;
  }
  getComentario():Comentario[]{
    return this.comentarios;
  }
  getChat():Chats[]{
    return this.chat;
  }

}
export interface Venta{
  nombre: string;
  estado: string;
  fecha: string;
  precio: number;
};
export interface Comentario{
  nombres: string;
  comentario: string;
  estados: string;
  fecha: string;
};
export interface Chats{
  nombres: string;
  estados: string;
};
