import { Component, OnInit } from '@angular/core';
import{ IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-header-global',
  templateUrl: './header-global.component.html',
  styleUrls: ['./header-global.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton]
})
export class HeaderGlobalComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
