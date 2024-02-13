import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Sheet } from 'src/app/models/sheet.model';
import { SheetService } from 'src/app/service/sheet.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css'],
})
export class CreateDataComponent implements OnInit {
  googleSheetForm!: FormGroup;
  id!: string;
  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobileNumber: '',
    userType: '',
  };
  

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private service:SheetService,
    private router: Router
  ) {
    this.googleSheetForm = this.formBuilder.group({
      firstName: formBuilder.control(''),
      lastName: formBuilder.control(''),
      email: formBuilder.control(''),
      password: formBuilder.control(''),
      mobileNumber:formBuilder.control(''),
      userType:formBuilder.control('')
    });
  }

  ngOnInit() {}

  public onSubmit() {
    
    console.log(this.googleSheetForm.value);
   
    const firstName = this.googleSheetForm.value.firstName;
    const lastName = this.googleSheetForm.value.lastName;
    const email = this.googleSheetForm.value.email;
    const password = this.googleSheetForm.value.password;
    const mobileNumber = this.googleSheetForm.value.mobileNumber;
    const userType = this.googleSheetForm.value.userType;


    

    this.authService.createSheet({
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      userType
    }).subscribe((databaseResponse: any) => {
      // Process database response here
      console.log('Data stored in the database:', databaseResponse);
    
    });
    this.service.createSheet(this.id,firstName, lastName, email, password, mobileNumber, userType).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res) {
          this.router.navigate(['/list-data']);
        }
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}