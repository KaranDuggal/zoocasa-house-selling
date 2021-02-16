import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { AddEditPropertyComponent } from './add-edit-property/add-edit-property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertListComponent } from './propert-list/propert-list.component';
import {RouterModule } from '@angular/router'


@NgModule({
  declarations: [AddEditPropertyComponent, PropertListComponent],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class PropertyModule { }
