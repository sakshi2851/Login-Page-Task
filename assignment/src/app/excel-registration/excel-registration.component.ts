import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-excel-registration',
  templateUrl: './excel-registration.component.html',
  styleUrls: ['./excel-registration.component.css']
})
export class ExcelRegistrationComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient,private router:Router) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  register(): void {
    Swal.fire("Registered Successfully")
    .then((result) => {
      if (result.isConfirmed) {
        // Perform registration-related action, e.g., navigate to the registration page
        this.router.navigate(['/home']); // Replace 'register' with your actual registration route
      }
    });
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      
      this.http.post('http://localhost:8081/api/upload-customers-data', formData).subscribe(
        (response) => {
          console.log('Registration successful', response);
        },
        (error) => {
          console.error('Error during registration', error);
        }
      );
    }
  }
}
