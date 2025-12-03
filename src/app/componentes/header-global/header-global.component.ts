import { Component, OnInit } from '@angular/core';
import{ IonHeader, IonToolbar, IonTitle, IonButtons, IonButton} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-header-global',
  templateUrl: './header-global.component.html',
  styleUrls: ['./header-global.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, CommonModule, IonTitle, IonButtons, IonButton]
   ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderGlobalComponent  implements OnInit {

  constructor( 
    
    private router: Router

  ) { }

  ngOnInit() {}
  
  irprincipal(){
    this.router.navigateByUrl('/principal');
  }
}