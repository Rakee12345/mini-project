import { Component } from '@angular/core';
import { AllEmployeesService } from '../all-employees.service';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  constructor(private createemployeeService:AllEmployeesService) { }
   
  public createemployee:FormGroup= new FormGroup({

    name: new FormControl(),
    company: new FormControl(),
    role: new FormControl(),
    email: new FormControl(),
    package: new FormControl(),
    dob: new FormControl(),
    address:new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode : new FormControl(),
    }),
    // type: new FormControl(),
    hikes: new FormArray([])

  });
    get hikesFromArray(){
      return this.createemployee.get('hikes') as FormArray;
    }
    addhikes(){
      this.hikesFromArray.push(
        new FormGroup({
        year: new FormControl(),
        percentage: new FormControl(),
      })
    )

    }
    deletehikes(i:number){
      this.hikesFromArray.removeAt(i);
    }

    submit(){
      this.createemployeeService.createEmployee(this.createemployee.value).subscribe(
        (data:any)=>{
          alert("Registration successful")
        },
        (err:any)=>{
          alert("Registration failed")

        }
      )
    }
}
  
  


