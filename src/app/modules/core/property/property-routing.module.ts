import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPropertyComponent } from './add-edit-property/add-edit-property.component';
import { GetPropertyComponent } from './get-property/get-property.component';
import { PropertListComponent } from './propert-list/propert-list.component';

const routes: Routes = [
  {
    path:'addproperty',
    component:AddEditPropertyComponent
  },
  {
    path:'propertys',
    component:PropertListComponent
  },
  {
    path:'property/:id',
    component:GetPropertyComponent
  }, 
  {
    path:'editproperty/:id',
    component:AddEditPropertyComponent
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PropertyRoutingModule { }
