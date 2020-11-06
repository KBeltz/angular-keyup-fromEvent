import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, fromEvent } from 'rxjs'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  buttonText: string = 'Submit'
  form: FormGroup = new FormGroup({
    input: new FormControl(),
  })
  keyUp$: Observable<any> = fromEvent(document, 'keyup')

  private keyUpSub(): void {
    this.keyUp$.subscribe(() => this.buttonText = this.form.controls.input.value)
  }

  ngOnInit(): void {
    this.keyUpSub();
  }

  onSubmit(): void {
    console.log('form: ', this.form.value)
  }
}
