import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.css']
})
export class ResumeUploadComponent implements OnInit {
  registerForm!: FormGroup ;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = new FormGroup({
      'CompleteName':new FormControl("",[Validators.required,Validators.pattern('[A-Za-z]*'),Validators.minLength(4)]),
      'Primary_Email_ID': new FormControl('',[Validators.email,Validators.required]),
      'Primary_Contact_Number': new FormControl("",[Validators.required,Validators.pattern("^[0-9]*$")]),
      'Function' : new FormControl('',[Validators.required]),
      'City':new FormControl('',[Validators.required]),
      'Gender': new FormControl('',[ Validators.required]),
      'acceptTerms': new FormControl([false, Validators.requiredTrue]),
      'Keywords ': new FormControl('',[Validators.required,Validators.minLength(4)]),
      'AttachResume':new FormControl('',[Validators.required]),
      'Experience':new FormControl('',[]),
      'Current_CTC':new FormControl('',[]),
      'Expected_CTC':new FormControl('',[]),
      'Notice_Period':new FormControl('',[]),
      'Current_Designation':new FormControl('',[]),
      'Current_Company':new FormControl('',[]),
      'Post_Graduation':new FormControl('',[]),
      'Graduation':new FormControl('',[Validators.required]),
      'Birth_Date':new FormControl('',[]),
      'Marital_Status':new FormControl('',[]),
      'Industry':new FormControl('',[]),
      'Alternate_Email_ID':new FormControl('',[]),
      'Alternate_Contact_Number':new FormControl('',[])

    })
    }
    get f() { return this.registerForm.controls; }

    onSubmit() {
    
         console.log(this.registerForm)
        // stop here if form is invalid
        if (this.registerForm.invalid) {
          this.submitted = true;
            return;
        }

    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}

