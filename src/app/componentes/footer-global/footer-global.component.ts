import { Component, OnInit } from '@angular/core';
import{ IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonIcon, IonFooter} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-footer-global',
  templateUrl: './footer-global.component.html',
  styleUrls: ['./footer-global.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, CommonModule, IonIcon, IonFooter]
   ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FooterGlobalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
