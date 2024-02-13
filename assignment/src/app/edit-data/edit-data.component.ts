import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sheet } from 'src/app/models/sheet.model';
import { SheetService } from '../service/sheet.service';
@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit{
  updateSheetForm!: FormGroup;
  id!: number;
  data!: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: SheetService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.updateSheetForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      userType: ['', Validators.required],

    });
  }

  ngOnInit() {
    this.actRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.service.getSheetDataById(this.id).subscribe((res: any) => {
        console.log(res[0]);
        this.data = res[0];
        this.updateSheetForm.get('firstName')?.setValue(this.data.firstName);
        this.updateSheetForm.get('lastName')?.setValue(this.data.lastName);
        this.updateSheetForm.get('email')?.setValue(this.data.email);
        this.updateSheetForm.get('password')?.setValue(this.data.password);
        this.updateSheetForm.get('mobileNumber')?.setValue(this.data.mobileNumber);
        this.updateSheetForm.get('userType')?.setValue(this.data.userType);
      });
    });
  }

  onSubmit() {
    const { value } = this.updateSheetForm;
    console.log('value', value);

    const firstName = this.updateSheetForm.value.firstName;
    const lastName = this.updateSheetForm.value.lastName;
    const email = this.updateSheetForm.value.email;
    const password = this.updateSheetForm.value.password;
    const mobileNumber = this.updateSheetForm.value.mobileNumber;
    const userType = this.updateSheetForm.value.userType;


    this.service.updateSheet(this.id,firstName, lastName, email, password, mobileNumber, userType).subscribe({
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


