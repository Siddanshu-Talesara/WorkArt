import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashBoardComponent} from './AdminPannel/dash-board/dash-board.component';
import {SignINComponent} from './Login/sign-in/sign-in.component';
import {SignUPComponent} from './Login/sign-up/sign-up.component';
import {LoaderComponent} from './AdminPannel/loader/loader.component';
import {BulkUploadComponent} from './AdminPannel/bulk-upload/bulk-upload.component';
import {ResumeUploadComponent} from './AdminPannel/resume-upload/resume-upload.component';
import {ResumeSearchComponent} from './AdminPannel/resume-search/resume-search.component';
import {MisImportComponent} from './AdminPannel/mis-import/mis-import.component';
import {ReportingComponent} from './AdminPannel/reporting/reporting.component';
import {JobOpeningComponent} from './Reports/job-opening/job-opening.component';
import {ApplicationStagesComponent} from './Reports/application-stages/application-stages.component';
import {ApplicationDisqualifiedComponent} from './Reports/application-disqualified/application-disqualified.component';
import {ActiveSessionComponent} from './Reports/active-session/active-session.component';
import {BackOutReportComponent} from './Reports/back-out-report/back-out-report.component';
import {EmailMessageComponent} from './Reports/email-message/email-message.component';
import {InterviewFeedBackComponent} from './Reports/interview-feed-back/interview-feed-back.component';
import {JoiningReportComponent} from './Reports/joining-report/joining-report.component';
import {KeyPerformanceIndexComponent} from './Reports/key-performance-index/key-performance-index.component';
import {LockInPeriodComponent} from './Reports/lock-in-period/lock-in-period.component';
import {OfferReportComponent} from './Reports/offer-report/offer-report.component';
import {RecruitorLoginComponent} from './Reports/recruitor-login/recruitor-login.component';
import {RmInstalltionComponent} from './Reports/rm-installtion/rm-installtion.component';
import {JOBComponent} from './AdminPannel/job/job.component';
import {ResumeByEmailComponent} from './AdminPannel/resume-by-email/resume-by-email.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:DashBoardComponent },
  { path: 'sign-in', component:SignINComponent },
  { path: 'loader', component:LoaderComponent },
  { path: 'bulk-upload', component:BulkUploadComponent },
  { path: 'sign-up', component:SignUPComponent },
  { path: 'resume', component:ResumeUploadComponent },
  { path: 'resume-search', component:ResumeSearchComponent},
  {path:'mis-import',component:MisImportComponent},
  {path:'reports',component:ReportingComponent},
  {path:'job-Opening',component:JobOpeningComponent},
  {path:'application-stage',component:ApplicationStagesComponent},
  {path:'application-disqualified',component:ApplicationDisqualifiedComponent},
  {path:'active-session',component:ActiveSessionComponent},
  {path:'back-out-report',component:BackOutReportComponent},
  {path:'email-message',component:EmailMessageComponent},
  {path:'interview-feed-back',component:InterviewFeedBackComponent},
  {path:'job-Report',component:JoiningReportComponent},
  {path:'key-performance',component:KeyPerformanceIndexComponent},
  {path:'lock-in-period',component:LockInPeriodComponent},
  {path:'offer-report',component:OfferReportComponent},
  {path:'recuritor-login',component:RecruitorLoginComponent},
  {path:'rm-installtiom',component:RmInstalltionComponent},
  {path:'job',component:JOBComponent},
  {path:'resume-by-email',component:ResumeByEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
