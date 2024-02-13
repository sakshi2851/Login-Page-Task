import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ToasterService } from '../common_services/toaster.service';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent {
  userInfoForm: FormGroup;
  toastr: any;
  

  constructor(private fb: FormBuilder,private authService:AuthService,private toaster:ToasterService) {
    this.userInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      userType: ['', Validators.required]
    });

  }
  onClickVerifyInfo() {
    if (this.userInfoForm.valid) {
      // Process the form data, e.g., send it to a server
      this.authService.UserInfo(this.userInfoForm.value).subscribe({
        next:(response)=>{
          console.log(response);
         // this.toaster.showSuccess("Success","User info saved successfully");
        },
        error:(error)=>{
          if(error?.error?.text==="user already exists"){
            this.toaster.showFailure("Failed",error?.error?.text);
          }else{
            this.toaster.showSuccess("Success","User info saved successfully");
          }
        }
        
      })
    }
  }
}


       
   