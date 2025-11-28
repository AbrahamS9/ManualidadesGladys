import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalPage implements OnInit {
   productos = [
        {
          id: 1,
          titulo: "Maquetas",
          precio:150,
          descripcion:"Maquetas de calidad sobre cualquier tema",
          imagen:"assets/img/maqueta.png"
        },
        {
          id: 2,
          titulo: "Portafolios",
          precio:150,
          descripcion:"Portafolios personalizados de calidad en cualquier material",
          imagen:"assets/img/pt.jpg"
        },
        {
          id: 3,
          titulo: "trabajos manuales",
          precio:150,
          descripcion:"trabajos manuales sobre cualquier actividad",
          imagen:"assets/img/mn.jpg"
        },
        {
          id: 4,
          titulo: "Pancartas",
          precio:150,
          descripcion:"pancartas personalizadas de calidad",
          imagen:"assets/img/pancarta.jpeg"
        },
        {
          id: 5,
          titulo: "disfraces",
          precio:150,
          descripcion:"difraces de calidad para todas las edades",
          imagen:"assets/img/disfraces.webp"
        },
        {
          id: 6,
          titulo: "decoraciones de fiestas",
          precio:150,
          descripcion:"decoraciones de fiesta para cualquier evento",
          imagen:"assets/img/decof.webp"
        },
        {
          id: 7,
          titulo: "Piñatas personalizadas",
          precio:150,
          descripcion:"Piñatas personalizadas de calidad",
          imagen:"assets/img/piñatas.webp"
        },
        {
          id: 8,
          titulo: "sorpresas personalizadas",
          precio:150,
          descripcion:"sorpresas personalizadas para cualquier ocasion",
          imagen:"assets/img/sorpresas.jpg"
        },
        {
          id: 9,
          titulo: "Gorras personalizadas",
          precio:150,
          descripcion:"Gorras personalizadas de calidad",
          imagen:"assets/img/gorrasp.webp"
        },
        {
          id: 10,
          titulo: "Camisetas personalizadas",
          precio:150,
          descripcion:"Camisetas personalizadas de calidad",
          imagen:"assets/img/camisasp.jpg"
        },


   ] 
   
   constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  irvermas(producto: any){
    this.router.navigate(['/vermas'],  { queryParams:  producto });
  }

}