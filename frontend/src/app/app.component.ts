import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Safety Conscious';

  
  buttons: any[]= [

    {title: 'Login',icon: 'account_circle'},
    {title: 'Emergency',icon: 'emergency'},
    {title: 'Documents',icon: 'folder'},
    {title: 'Certificates',icon: 'card_membership'},
    {title: 'Incidents',icon: 'personal_injury'},
    {title: 'WHMIS',icon: 'science'},
    {title: 'Site Details',icon: 'terrain'},
    {title: 'FLHA',icon: 'warning_amber'},
    {title: 'Covid',icon: 'coronavirus'},
    {title: 'Add Report',icon: 'add'}

  ]
}