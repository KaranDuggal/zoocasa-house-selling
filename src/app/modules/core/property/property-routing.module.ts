import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPropertyComponent } from './add-edit-property/add-edit-property.component';

const routes: Routes = [
  {
    path:'addproperty',
    component:AddEditPropertyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
