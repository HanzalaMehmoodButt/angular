import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators, FormArray,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';
  public num1;
  public num2;
  public sum;
  constructor(private fb:FormBuilder) {
    
  }
  profile = this.fb.group({
    name: this.fb.control[''],
    email: this.fb.control[''],
    age: this.fb.control(Number),
    address: this.fb.group({
      city: this.fb.control[''],
      state: this.fb.control[''],
      country: this.fb.control['']
    }),
    friends: this.fb.array([
      this.fb.control('')
    ])
    
  })

  printValues() {
    console.log(this.profile.value);
  }
  get friends() {
    return this.profile.get('friends') as FormArray;
  }
  addFriends() {
      this.friends.push(this.fb.control(''));
  }
}
