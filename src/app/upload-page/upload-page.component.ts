import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { UploadHandlerService } from '../upload-handler.service';



@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit {
  constructor(private uploaderService: UploadHandlerService) { }

  theMessage: string;
  files: File[];

  message() {
    this.uploaderService.getMessage().subscribe((data: string) => {
      this.theMessage = data;
      console.log(this.theMessage);
    });
  }

  upload(files: File[]) {
    this.files = files;
    console.log(files);
  }

  uploadOnClick(){
    if (this.files) {
      this.uploaderService.uploadService(this.files);
      this.reset();
    } else {
      console.log('Array is empty');
    }
  }

  @ViewChild('uploadField') myInputVariable: ElementRef;

  reset() {
    this.myInputVariable.nativeElement.value = '';
  }

  ngOnInit() {

  }
}
