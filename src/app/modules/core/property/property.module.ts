import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { AddEditPropertyComponent } from './add-edit-property/add-edit-property.component';


@NgModule({
  declarations: [AddEditPropertyComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule
  ]
})
export class PropertyModule { }
