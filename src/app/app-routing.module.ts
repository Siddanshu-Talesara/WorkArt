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
  {path:'reports',component:ReportingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
