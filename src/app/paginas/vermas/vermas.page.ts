import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-vermas',
  templateUrl: './vermas.page.html',
  styleUrls: ['./vermas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, 
    IonButtons
  ]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VermasPage implements OnInit {

  producto: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.producto = params;
    });
  }

  irprincipal() {
    this.router.navigateByUrl('/principal');
  }

}

