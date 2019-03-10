import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadHandlerService {

  url = 'http://localhost:4201';
  percentDone: number;
  uploadSuccess: boolean;

  constructor(private http: HttpClient) { }

    getMessage() {
    return this.http.get(`${this.url}`, {responseType: 'text'});
  }

    uploadService(files: File[]) {

      const formData = new FormData();
      Array.from(files).forEach(f => formData.append('photo', f));

      this.http.post(`${this.url}/upload`, formData, {reportProgress: true, observe: 'events'})
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.percentDone = Math.round(100 * event.loaded / event.total);
            console.log(this.percentDone);
          } else if (event instanceof HttpResponse) {
            this.uploadSuccess = true;
            console.log(this.uploadSuccess);
          }
        });
    }

}
