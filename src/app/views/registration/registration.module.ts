// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegistrationComponent } from './registration.component';
import { ListComponent } from './list.component';

// Theme Routing
import { RegistrationRoutingModule } from './registration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ],
  declarations: [
    RegistrationComponent,
    ListComponent
  ]
})
export class RegistrationModule { }
