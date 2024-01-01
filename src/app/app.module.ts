import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './AdminPannel/loader/loader.component';
import { DashBoardComponent } from './AdminPannel/dash-board/dash-board.component';
import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { SignUPComponent } from './Login/sign-up/sign-up.component';
import { SignINComponent } from './Login/sign-in/sign-in.component';
import { BulkUploadComponent } from './AdminPannel/bulk-upload/bulk-upload.component';
import { ResumeUploadComponent } from './AdminPannel/resume-upload/resume-upload.component';
import { ResumeSearchComponent } from './AdminPannel/resume-search/resume-search.component';
import { MisImportComponent } from './AdminPannel/mis-import/mis-import.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    DashBoardComponent,
    SignUPComponent,
    SignINComponent,
    BulkUploadComponent,
    ResumeUploadComponent,
    ResumeSearchComponent,
    MisImportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
