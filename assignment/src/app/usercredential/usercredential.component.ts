import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { ToasterService } from '../common_services/toaster.service';
@Component({
  selector: 'app-usercredential',
  templateUrl: './usercredential.component.html',
  template:`
  <button (click)="showAlert()">Check User Existence</button>
`,
  styleUrls: ['./usercredential.component.css']

})
export class UsercredentialComponent {
  userCredentialForm: FormGroup;

  constructor(private fb: FormBuilder,private authService:AuthService,private router: Router,private toaster:ToasterService) {
    this.userCredentialForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onClickVerifyCred() {
    if (this.userCredentialForm.valid) {
      // Submit the form data to your API or service
      // You can use this.userCredentialForm.value to get the form data
      this.authService.verifyUserCredentials(this.userCredentialForm.value).subscribe({
        
        next:(response) => {
          // Login successful
          this.router.navigate(["/"]);
        },
        
        error:(error) => {
          if(error.status==200){
          this.toaster.showSuccess("success","login successful");
          console.log("login successful");
          this.router.navigate(["/home"]);
          this.router.navigateByUrl("home");
          
        Swal.fire("login Successfully")
        .then((result) => {
          if (result.isConfirmed) {
            // Perform registration-related action, e.g., navigate to the registration page
            this.router.navigate(['/home']); // Replace 'register' with your actual registration route
          }
          
        });
        
          console.log("login Successful:", error);
          }
          if(error.status==400){
            this.toaster.showFailure("email already exist","login failed");
            console.log("login failed");
            this.router.navigate(["/usercredential"]);
            this.router.navigateByUrl("usercredential");

            Swal.fire("email already exist")
        .then((result) => {
          if (result.isConfirmed) {
            // Perform registration-related action, e.g., navigate to the registration page
            this.router.navigate(['/usercredential']); // Replace 'register' with your actual registration route
          }
          
        });
          }
          else if(error.status==500){
           
            this.toaster.showFailure("User Not exist","login failed");
            console.log("login failed");
            this.router.navigate(["/usercredential"]);
            this.router.navigateByUrl("usercredential");

            Swal.fire({
              title: 'User Not Found',
              text: 'User not exist. Please register.',
              icon: 'error',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Register',
            }).then((result) => {
              if (result.isConfirmed) {
                // Perform registration-related action, e.g., navigate to the registration page
                this.router.navigate(['/excel-registration']); // Replace 'register' with your actual registration route
              }
            });
          
            console.log("login failed:", error);
          }
          
        }
      }
    );
    }
  }  
  }
 


