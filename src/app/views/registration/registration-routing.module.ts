import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';
import { ListComponent } from './list.component';

const routes: Routes = [
  {
    path: '',
    
    children: [
    
      {
        path: 'registration',
        component: RegistrationComponent,
        data: {
          title: 'Registration'
        }
      },
      {
        path: 'list',
        component: ListComponent,
        data: {
          title: 'List'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule {}
