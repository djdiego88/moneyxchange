import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  conversionForm: FormGroup;
  submitted = false;
  submitting = false;
  faSpinner = faSpinner;

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder
              ) { }

  ngOnInit() {
    this.conversionForm = this.formBuilder.group({
      from: ['', [Validators.required, Validators.minLength(1)]],
      to: [{value: '', disabled: true}, []],
    });
  }
  get f() { return this.conversionForm.controls; }
  onSubmit() {
    this.submitted = true;
    this.submitting = true;

    // stop here if form is invalid
    if (this.conversionForm.invalid) {
      this.submitting = false;
      return;
    }

    this.apiService.getConversionRate().subscribe((data) => {
      const value = this.f.from.value;
      const result = value * data['rates'].USD;
      this.f.to.setValue(result);
      this.submitting = false;
    });
}

}
