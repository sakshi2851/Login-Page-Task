import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-excel-upload',
  templateUrl: './excel-upload.component.html',
  styleUrls: ['./excel-upload.component.css']
})
export class ExcelUploadComponent {

  // ExcelData:any;
  // constructor(){

  // }

  // ReadExcel(event:any){

  //   let file= event.target.files[0];

  //   let fileReader = new FileReader();
  //   fileReader.readAsBinaryString(file);

  //   fileReader.onload = (e)=>{

  //     var workBook = XLSX.read(fileReader.result,{type:'binary'});
  //     var sheetNames = workBook.SheetNames;
  //     this.ExcelData=XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
  //     console.log(this.ExcelData)
  //   }
    

  // }



}
