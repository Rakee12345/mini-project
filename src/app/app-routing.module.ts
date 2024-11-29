import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { HomeComponent } from './home/home.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';

const routes: Routes = [
  {path:'',component: LoginpageComponent},
  {path:  'login', component:LoginpageComponent},
  {path:  'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'createemployee',component:CreateEmployeeComponent},
    {path:'all-employees',component:AllEmployeesComponent},

]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
