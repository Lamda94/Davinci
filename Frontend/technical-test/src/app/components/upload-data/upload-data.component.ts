import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { DataFileService } from "../../services/data-file.service";

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.css']
})
export class UploadDataComponent implements OnInit {
  private file:any;
  private sep:string=""; 
  private selected:any;
  private items: any [] = [];
  private dataSend: any[] = [];
  dataFile: any[] = [];
  list: any[] = [];
  constructor(private service : DataFileService) { }

  ngOnInit(): void {
  }

  uploatFile(event:any):any{
      this.file = event.target.files[0];
  }

  addSeparator(event:any):any{
    this.sep = event.target.value;
  }

  sendFile():any{
    try {      
      const fr = {
        inputFile: this.file,
        separator: this.sep
      };
      this.service.uploatFile(fr)
      .subscribe((res:any)=>{
        this.dataFile = res;
        this.dataFile.forEach(element => {
          if (element.length > this.list.length) {
            this.list = element;
          }
        });             
      })
    } catch (error) {
      
    }
  }

  selectItem(event:any):any{
    this.selected = event.target.value;
    console.log(this.selected);
    
  }

  addItem(){
    let exist = false;
    if (this.items.length > 0) {  
      this.items.forEach(element => {
        if (element == this.selected) {
          exist = true;
        }
      });
    }
    if (!exist) {
      if (this.selected) {
        this.items.push(this.selected);
        console.log(this.items);
      }      
    }    
  }

  sendData(){
    if (this.items.length > 0) {
      this.dataFile.forEach(element=>{
        const tmp: any[] = [];
        for (let i = 0; i < element.length; i++) {
          this.items.forEach(e=>{
            if (i == parseInt(e)) {
              tmp.push(element[i]);
            }
          })    
        }
        this.dataSend.push(tmp);
      })
      console.log(this.dataSend);
    }   
  }
}
