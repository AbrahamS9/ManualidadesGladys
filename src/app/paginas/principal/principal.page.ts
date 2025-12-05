import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderGlobalComponent } from 'src/app/componentes/header-global/header-global.component';
import { FooterGlobalComponent } from 'src/app/componentes/footer-global/footer-global.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FooterGlobalComponent,FormsModule, HeaderGlobalComponent]
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
        {
          id: 11,
          titulo: "venta de utiles escolares",
          precio:150,
          descripcion:"Mandamos a domicilio tus utiles escolares",
          imagen:"assets/img/utiles.jpeg"
        },
        {
          id: 12,
          titulo: "Trabajos de investigacion",
          precio:150,
          descripcion:"Trabajos de investigacion en cualquier area",
          imagen:"assets/img/trabajos inves.webp"
        },
        {
          id: 13,
          titulo: "Copias e impresiones",
          precio:150,
          descripcion:"Copias e impresiones de calidad",
          imagen:"assets/img/copiasei.jpeg"
        },
        {
          id: 14,
          titulo: "Carteles personalizadas",
          precio:150,
          descripcion:"Carteles personalizados para cualquier ocasion",
          imagen:"assets/img/carteles.jpg"
        },
        {
          id: 15,
          titulo: "Caratulas para cuadernos",
          precio:150,
          descripcion:"Caratulas personalizadas para cuadernos",
          imagen:"assets/img/caratulas.jpg"
        },
        {
          id: 16,
          titulo: "edicion de imagenes",
          precio:150,
          descripcion:"edicion de imagenes de calidad",
          imagen:"assets/img/edicion.jpg"
        },
        {
          id: 17,
          titulo: "edicion de videos",
          precio:150,
          descripcion:"edicion de videos de calidad",
          imagen:"assets/img/videos.jpg"
        },
        {
          id: 18,
          titulo: "pulseras personalizadas",
          precio:150,
          descripcion:"pu6lseras de cualquier material",
          imagen:"assets/img/pulseras.jpeg"
        },
        {
          id: 19,
          titulo: "fofuchas personalizadas",
          precio:150,
          descripcion:"fofuchas para cualquier celebracion",
          imagen:"assets/img/fofuchas.jpg"
        },
        {
          id: 20,
          titulo: "esferas personalizadas",
          precio:150,
          descripcion:"Personalizamos esferas para cualquier ocasion",
          imagen:"assets/img/esferas.jpeg"
        },
      ] 
   
      productosfiltrados = [...this.productos ];
   
      constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  irvermas(producto: any){
    this.router.navigate(['/vermas'],  { queryParams:  producto });
  }

   filtrar(event: any){
    const texto = (event?.target.value || '').toLowerCase().trim();
    
    if(texto === ''){

      this.productosfiltrados = [...this.productos ];
      return;
    }
    this.productosfiltrados = this.productos.filter( 
      p => p.titulo.toLowerCase().includes(texto)|| 
      p.descripcion.toLowerCase().includes(texto)|| 
      p.precio.toString().includes(texto));
   }
  }