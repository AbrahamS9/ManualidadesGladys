import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.page.html',
  styleUrls: ['./pagina.page.scss'],
  standalone: true,
  imports: 
  [IonHeader, IonToolbar, 
    IonTitle, IonContent, IonCard],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PaginaPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  irvermas(){

    this.router.navigate(['/vermas']);

  } 
}
