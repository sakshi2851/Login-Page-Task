import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDataComponent } from './create-data/create-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { ExcelRegistrationComponent } from './excel-registration/excel-registration.component';
import { ExcelUploadComponent } from './excel-upload/excel-upload.component';
import { HomeComponent } from './home/home.component';
import { ListDataComponent } from './list-data/list-data.component';
import { UsercredentialComponent } from './usercredential/usercredential.component';
import { UserinfoComponent } from './userinfo/userinfo.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent,pathMatch:"full" },
  { path: "usercredential", component: UsercredentialComponent},
  { path: "userinfo", component: UserinfoComponent},
  { path: "excel-registration", component: ExcelRegistrationComponent,pathMatch:"full" },
  { path: "excel-upload", component: ExcelUploadComponent,pathMatch:"full" },

  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'create-data',
    component: CreateDataComponent,
  },
  {
    path: 'list-data',
    component: ListDataComponent,
  },
  {
    path: 'edit-data/:id',
    component: EditDataComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
