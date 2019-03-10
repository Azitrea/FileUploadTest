import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { UploadHandlerService } from './upload-handler.service';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path : 'upload', component: UploadPageComponent },
  { path: '', redirectTo: '/upload', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UploadPageComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UploadHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
