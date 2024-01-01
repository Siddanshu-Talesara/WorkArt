import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    this.registerForm = this.formBuilder.group({
      CompleteName: ['', Validators.required],
      Primary_Email_ID: ['',Validators.email],
      Primary_Contact_Number: ['', Validators.required],
      Function : ['', [Validators.required, Validators.required ]],
      City:['', [Validators.required, Validators.required]],
      Gender: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      Keywords : ['',Validators.required],
      AttachResume:['',Validators.required],
      Experience:[],
      Current_CTC:[],
      Expected_CTC:[],
      Notice_Period:[],
      Current_Designation:[],
      Current_Company:[],
      Post_Graduation:[],
      Birth_Date:[],
      Marital_Status:[],
      Industry:[],
      Alternate_Email_ID:[],
      Alternate_Contact_Number:[]

    })
    }
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
         console.log(this.registerForm)
        // stop here if form is invalid
        if (this.registerForm.invalid) {

            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}

