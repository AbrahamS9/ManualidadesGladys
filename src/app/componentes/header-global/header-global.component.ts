import { Component, OnInit } from '@angular/core';
import{ IonContent, IonHeader, IonToolbar, IonTitle, IonButtons} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-global',
  templateUrl: './header-global.component.html',
  styleUrls: ['./header-global.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonToolbar, IonTitle, IonButtons]
})
export class HeaderGlobalComponent  implements OnInit {

  constructor( 
    
    private router: Router

  ) { }

  ngOnInit() {}
  
  irprincipal(){
    this.router.navigate(['/principal'])
  }


}
