import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private fb:FormBuilder,private r:Router) { }
  LoginForm = this.fb.group({
    username: [null],
    password: [null]
  });
  sub()
{
  console.log(this.LoginForm.value);
  this.r.navigate(['/hr']);
  // this.s.send(this.LoginForm.value).subscribe(res=>{console.log(res);
  // localStorage.setItem("tkn",res['authorization']);
 
  // });
}
  ngOnInit() {
  }

}
