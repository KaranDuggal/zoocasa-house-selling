import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { FormControl, FormGroup, Form, FormGroupName, Validators, FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-add-edit-property',
  templateUrl: './add-edit-property.component.html',
  styleUrls: ['./add-edit-property.component.css']
})
export class AddEditPropertyComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
  }
  propertyForm = this.formBuilder.group({
    property: this.formBuilder.group({
      property_name: new FormControl(null, { validators: [Validators.required] }),
      price: new FormControl(null, { validators: [Validators.required] }),
      contrary: new FormControl(null, { validators: [Validators.required] }),
      state: new FormControl(null, { validators: [Validators.required] }),
      city: new FormControl(null, { validators: [Validators.required] }),
      house_number: new FormControl(null, { validators: [Validators.required] })
    }),
    discription: this.formBuilder.group({
      discription: new FormControl(null, { validators: [Validators.required] }),
    }),
    property_details: this.formBuilder.array([
      // this.formBuilder.array([
        this.formBuilder.group({
          key: new FormControl(null, { validators: [Validators.required] }),
          value: new FormControl(null, { validators: [Validators.required] }),
        }),
      // ])
    ]),
    room_layout: this.formBuilder.array([
      // this.formBuilder.array([
        this.formBuilder.group({
          key: new FormControl(null, { validators: [Validators.required] }),
          floor: new FormControl(null, { validators: [Validators.required] }),
          width: new FormControl(null, { validators: [Validators.required] }),
          height: new FormControl(null, { validators: [Validators.required] }),
        }),
      // ])
    ]),
    utilities: this.formBuilder.array([
      // this.formBuilder.array([
        this.formBuilder.group({
          key: new FormControl(null, { validators: [Validators.required] }),
          value: new FormControl(null, { validators: [Validators.required] }),
        }),
      // ])
    ])
  })
  propertydata() {
    console.log('this.propertyForm.value',this.propertyForm.value)
    this.apiService.callAPI("post", this.propertyForm.value, "api/property/addproperty").subscribe((data) => {
      console.log(data);
    })
  }
  // get propertyDetail(){
  //   return this.propertyForm.get('property_detail') as FormArray
  // }
  // addnewdetail(){
  //   this.propertyDetail.push(this.propertyForm.property_detail(''))
  // }



}
