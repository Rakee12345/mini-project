import { Component } from '@angular/core';
import { AllEmployeesService } from '../all-employees.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {
  public employeeDetails:any=[]
  

  constructor(private _allEmployees:AllEmployeesService){

    _allEmployees.allEmployees().subscribe(
           (data:any)=>{
        this.employeeDetails=data;
        console.log(this.employeeDetails)

      },
      (err:any)=>{
        alert("Get failed")
      }
    )
  }

  deleteEmployee(id:number){
    this._allEmployees.deleteEmployee(id).subscribe(
      (data:any)=>{
        alert("Delete successful")
        location.reload()
        

      },
      (err:any)=>{
        alert("Delete failed")
      }
    )
  }

  searchWord:string=''
  filterEmployee(){
    this._allEmployees.filterEmployee(this.searchWord).subscribe(
      (data:any)=>{
        this.employeeDetails=data;
        console.log(this.employeeDetails)

      },
      (err:any)=>{
        alert("Get failed")
      }
    )
  }


  column:string=''
  order:string=''
  sortEmployee(){
    this._allEmployees.sortEmployee(this.column,this.order).subscribe(
      (data:any)=>{
        this.employeeDetails=data;
        console.log(this.employeeDetails)

      },
      (err:any)=>{
        alert("Get failed")
      }
    )
  }

  pageLimit:number=0;
  pageNumber:number=0;
  paginationComponent(){
    this._allEmployees.paginationService(this.pageLimit,this.pageNumber).subscribe(
      (data:any)=>{
        this.employeeDetails=data;
      },
      (err:any)=>{
        alert("pagination failed")
      }
    )
  }
  

}
