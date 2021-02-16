import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { AddEditPropertyComponent } from './add-edit-property/add-edit-property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertListComponent } from './propert-list/propert-list.component';


@NgModule({
  declarations: [AddEditPropertyComponent, PropertListComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PropertyModule { }
