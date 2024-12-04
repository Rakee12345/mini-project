import { Component } from '@angular/core';
import { AllEmployeesService } from '../all-employees.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  
   
  public createemployee:FormGroup= new FormGroup({

    name: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    company: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(16)]),
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
    workmode:new FormControl(),
    // wifiBill:new FormControl(),
    // travelBil:new FormControl(),

    type: new FormControl(),
    hikes: new FormArray([])

  });

  constructor(private createemployeeService:AllEmployeesService) { 

    this.createemployee.get('workmode')?.valueChanges.subscribe(
      (data:any) => {
        if(data=='WFH'){
          this.createemployee.addControl('wifiBill',new FormControl)
          this.createemployee.removeControl('travelBil')
        }
        else{
          this.createemployee.addControl('travelBil',new FormControl)
          this.createemployee.removeControl('wifiBill')
        }

      }
    )
  }
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
      console.log(this.createemployee)
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
  
  


