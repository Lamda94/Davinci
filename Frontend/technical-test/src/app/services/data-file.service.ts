import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFileService {
  private apiURL = "http://localhost:3000/readfile";
  constructor(private http : HttpClient) { }

  uploatFile(data: any): any{
    const formData = new FormData();
    formData.append("files", data.inputFile);
    formData.append("separator", data.separator);   
    return this.http.post(this.apiURL, formData);
  }
}
