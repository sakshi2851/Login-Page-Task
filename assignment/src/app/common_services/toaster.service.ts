import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr:ToastrService) { }

  showSuccess(title:string,msg:string){
    this.toastr.success(msg,title);
  }

  showFailure(title:string,msg:string){
    this.toastr.error(msg,title);
  }
}
