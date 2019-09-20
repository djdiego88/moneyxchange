import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder
              ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      from: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.apiService.getConversionRate().subscribe((data) => {
      console.log(data);
      //this.articles = data['articles'];
    });
}

}
