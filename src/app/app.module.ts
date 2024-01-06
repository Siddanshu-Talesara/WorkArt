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
import { ReportingComponent } from './AdminPannel/reporting/reporting.component';
import { JobOpeningComponent } from './Reports/job-opening/job-opening.component';
import { ApplicationStagesComponent } from './Reports/application-stages/application-stages.component';
import { ApplicationDisqualifiedComponent } from './Reports/application-disqualified/application-disqualified.component';
import { InterviewScheduledComponent } from './Reports/interview-scheduled/interview-scheduled.component';
import { InterviewFeedBackComponent } from './Reports/interview-feed-back/interview-feed-back.component';
import { OfferReportComponent } from './Reports/offer-report/offer-report.component';
import { JoiningReportComponent } from './Reports/joining-report/joining-report.component';
import { BackOutReportComponent } from './Reports/back-out-report/back-out-report.component';
import { LockInPeriodComponent } from './Reports/lock-in-period/lock-in-period.component';
import { EmailMessageComponent } from './Reports/email-message/email-message.component';
import { RecruitorLoginComponent } from './Reports/recruitor-login/recruitor-login.component';
import { ActiveSessionComponent } from './Reports/active-session/active-session.component';
import { KeyPerformanceIndexComponent } from './Reports/key-performance-index/key-performance-index.component';
import { RmInstalltionComponent } from './Reports/rm-installtion/rm-installtion.component';
import { JOBComponent } from './AdminPannel/job/job.component';
import { ResumeByEmailComponent } from './AdminPannel/resume-by-email/resume-by-email.component';
import { PeopleComponent } from './Search/people/people.component';
import { AdvancedComponent } from './Search/advanced/advanced.component';
import { InterviewsComponent } from './AdminPannel/interviews/interviews.component';
import { CalendarComponent } from './AdminPannel/calendar/calendar.component';

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
    MisImportComponent,
    ReportingComponent,
    JobOpeningComponent,
    ApplicationStagesComponent,
    ApplicationDisqualifiedComponent,
    InterviewScheduledComponent,
    InterviewFeedBackComponent,
    OfferReportComponent,
    JoiningReportComponent,
    BackOutReportComponent,
    LockInPeriodComponent,
    EmailMessageComponent,
    RecruitorLoginComponent,
    ActiveSessionComponent,
    KeyPerformanceIndexComponent,
    RmInstalltionComponent,
    JOBComponent,
    ResumeByEmailComponent,
    PeopleComponent,
    AdvancedComponent,
    InterviewsComponent,
    CalendarComponent
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
