import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'form-page',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.css']
})
export class FormPage {
  form: FormGroup;
  submitted: boolean = false;
  success: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
  ) {
    this.form = formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      body: ['', Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      this.api.sendPost(this.form.value).subscribe(res => this.success = res);
    }
  }

}
