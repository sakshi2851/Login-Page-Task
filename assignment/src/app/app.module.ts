import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { UsercredentialComponent } from './usercredential/usercredential.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import { ToasterService } from './common_services/toaster.service';
import { CreateDataComponent } from './create-data/create-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { ListDataComponent } from './list-data/list-data.component';
import { ExcelUploadComponent } from './excel-upload/excel-upload.component';
import { ExcelRegistrationComponent } from './excel-registration/excel-registration.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsercredentialComponent,
    UserinfoComponent,
    CreateDataComponent,
    EditDataComponent,
    ListDataComponent,
    ExcelUploadComponent,
    ExcelRegistrationComponent,
  ],

  
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })

    
  ],
  providers: [provideToastr(),ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
